"use server"

import fs from "fs/promises"
import path from "path"

export async function getDocContent(relativeFilePath: string) {
    try {
        const fullPath = path.join(process.cwd(), relativeFilePath)
        const content = await fs.readFile(fullPath, "utf-8")
        return content
    } catch (error) {
        console.error("Error reading doc file:", error)
        return "# Error\nFailed to load documentation."
    }
}

export async function getDocTree(rootMode: string, libraryId?: string) {
    let baseDir = ""
    let relativeBasePrefix = ""

    switch (rootMode) {
        case 'docs':
            if (!libraryId) return []
            baseDir = path.join(process.cwd(), "docs", libraryId)
            relativeBasePrefix = path.join("docs", libraryId)
            break
        case 'skills':
            baseDir = path.join(process.cwd(), ".agent", "skills")
            relativeBasePrefix = path.join(".agent", "skills")
            break
        case 'workflows':
            baseDir = path.join(process.cwd(), ".agent", "workflows")
            relativeBasePrefix = path.join(".agent", "workflows")
            break
        case 'qt':
            baseDir = path.join(process.cwd(), "QT")
            relativeBasePrefix = "QT"
            break
        default:
            return []
    }

    async function scan(currentDir: string, relativeBase: string): Promise<any[]> {
        try {
            const items = await fs.readdir(currentDir, { withFileTypes: true })
            const result: any[] = []

            for (const item of items) {
                const fullPath = path.join(currentDir, item.name)
                const relativePath = path.join(relativeBase, item.name).replace(/\\/g, "/")

                if (item.isDirectory()) {
                    const children = await scan(fullPath, relativePath)
                    if (children.length > 0) {
                        result.push({
                            name: item.name,
                            type: "folder",
                            children
                        })
                    }
                } else if (item.name.endsWith(".md")) {
                    result.push({
                        name: item.name.replace(".md", ""),
                        type: "file",
                        path: relativePath
                    })
                }
            }

            return result.sort((a, b) => {
                if (a.type === b.type) return a.name.localeCompare(b.name)
                return a.type === "folder" ? -1 : 1
            })
        } catch (e) {
            return []
        }
    }

    try {
        const stats = await fs.stat(baseDir)
        if (stats.isDirectory()) {
            return await scan(baseDir, relativeBasePrefix)
        }
        return []
    } catch (error) {
        console.error(`Error scanning ${rootMode} dir:`, error)
        return []
    }
}
