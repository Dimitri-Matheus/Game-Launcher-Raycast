// Icon utility functions for game launcher

import { existsSync } from "fs"

/**
 * Get the icon path for a game executable
 * Returns the executable path if it exists, undefined otherwise
 * Raycast will handle the icon extraction natively using fileIcon
 */
export function getGameIcon(iconPath?: string) {
    if (!iconPath) return undefined
    
    if (iconPath.endsWith(".exe")) {
        return { fileIcon: iconPath }
    }
    
    // If it's an absolute Windows path (e.g. C:/...), add file:///
    const normalizedPath = iconPath.replace(/\\/g, "/")
    if (normalizedPath.match(/^[a-zA-Z]:/)) {
        return { source: `file:///${normalizedPath}` }
    }

    return { source: normalizedPath }
}