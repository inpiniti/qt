
# Upgrade Guide

## Version 12.0
There are no breaking changes in Motion for React 12.0.

## Migrating from `framer-motion` to `motion`
To upgrade:

1. Uninstall the old package and install the new one:
   ```bash
   npm uninstall framer-motion
   npm install motion
   ```

2. Update your imports:
   ```diff
   - import { motion } from "framer-motion"
   + import { motion } from "motion/react"
   ```

That's it! The API remains consistent.
