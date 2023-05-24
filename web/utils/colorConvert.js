/**
 * Converts hex color to rgb
 * @param {string} hex 
 * @param {Boolean} asString 
 * @returns {object|string}
 */
export function hexToRgb(hex, asString) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (asString) {
        return 'rgb(' + parseInt(result[1], 16) + ',' + parseInt(result[2], 16) + ',' + parseInt(result[3], 16) + ')'
    }

    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
