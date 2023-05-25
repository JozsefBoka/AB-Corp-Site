/**
 * Extracts background color inline css property from themeColors
 * @param {object} themeColors 
 * @param {string} bgColor 
 * @returns backgroundColor css inline property
 */
export function getBackgroundColor(themeColors, bgColor) {
    if (themeColors && bgColor) {
        return { backgroundColor: themeColors[bgColor] }
    }
}

/**
 * Extracts color value from themeColors
 * @param {object} themeColors 
 * @param {string} bgColor 
 * @returns {string} hexademical color value
 */
export function getFontColorValue(themeColors, bgColor) {
    if (themeColors && bgColor) {
        return bgColor === 'dark' ? '#fffdfa' : themeColors.font
    }
}

/**
 * Extracts font color inline css property from themeColors
 * @param {*} themeColors 
 * @param {*} bgColor 
 * @returns 
 */
export function getFontColor(themeColors, bgColor) {
    if (themeColors && bgColor) {
        return { color: bgColor === 'dark' ? '#fffdfa' : themeColors.font }
    }
}

/**
 * A shorthand function for getBackgroundColor and getFontColor
 * @param {*} themeColors 
 * @param {*} bgColor 
 * @returns 
 */
export function getStyles(themeColors, bgColor) {
    return {
        ...getBackgroundColor(themeColors, bgColor),
        ...getFontColor(themeColors, bgColor)
    }
}
