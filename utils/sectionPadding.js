/**
 * Adds top and bottom padding to element
 * @param {object} padding should be passed down from sanity
 * @param {DOMElement} element 
 * @returns 
 */
export const getSectionPaddingStyles = (padding, element) => {
    if (!padding || !element) {
        return
    }

    element.style.setProperty('--padding-top-mobile', padding.paddingTopMobile + 'px')
    element.style.setProperty('--padding-top-desktop', padding.paddingTopDesktop + 'px')
    element.style.setProperty('--padding-bottom-mobile', padding.paddingBottomMobile + 'px')
    element.style.setProperty('--padding-bottom-desktop', padding.paddingBottomDesktop + 'px')
}
