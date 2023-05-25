// "/product//" => "/product/"
function removeDoubleSlashes(path) {
    return path.replace(/\/{2,}/g, '/')
}

// "contact/" => "/contact/"
export function getPathFromSlug(slug) {
    return removeDoubleSlashes(`/${slug || ''}`)
}

// "/about" => "https://my-site.com/about"
export function slugToAbsUrl(slug, baseUrl) {
    return baseUrl + getPathFromSlug(slug)
}

/**
 * Transforms a single slug into an array of its possible variations.
 *
 * As editors can include leading and/or trailing slashes in routes' slugs,
 * we need to normalize them before searching routes by slug.
 */
export function getSlugVariations(slug) {
    const slashless = slug.replace(/\//g, '')
    return [
        slashless,
        // /slash-on-both-ends/
        `/${slashless}/`,
        // trailing/
        `${slashless}/`,
        // /leading
        `/${slashless}`,
    ]
}

export function slugParamToPath(slugParam) {
    // Possible slug value types:
    const slug = Array.isArray(slugParam)
        ? // - ["multiple", "paths"]
        slugParam.join('/')
        : // - "single-path"
        slugParam ||
        // - undefined -> default to "/"
        '/'
    return slug
}

/**
 * Helps with extracting the correct url, internal or external, from the sanity schema
 * @param {object} link link object schema from sanity
 * @returns {string} the url string
 */
export function getLink(link) {
    if (!link) {return ''}
    return link.internal ? link.internal.slug.current : link.external
}
