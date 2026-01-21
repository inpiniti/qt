# Scroll Restoration

Scroll restoration is a tricky topic in Single Page Apps (SPAs). React Query doesn't act as a router, but it caches data, which is essential for scroll restoration to work effectively.

If the data is in the cache (and not garbage collected), navigating back to a page will render immediately, allowing the browser's native scroll restoration to work perfectly.

## gcTime
Ensure your `gcTime` is high enough so that data isn't removed while the user navigates away.
