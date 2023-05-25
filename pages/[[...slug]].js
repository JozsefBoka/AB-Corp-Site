import groq from 'groq'
import { NextSeo } from 'next-seo'
import SEO from '../next-seo.config'
import PropTypes from 'prop-types'
import React from 'react'
import client from '../client'
import Layout from '../components/Layout'
import RenderSections from '../components/RenderSections'
import { getSlugVariations, slugParamToPath } from '../utils/urls'


// todo this row doesnt seem to be compiled correctly "btnLink": *[_type == "route" && references(^._id)][0].slug.current
// it works in the vision plugin but returns nothing here
// - client version was wrong but still wont work

const pageFragment = `
    ...,
    content[] {
        ...,
        _type == 'heroBrandpage' => {
            navigation {
                navItems[] {
                    ...,
                    link {
                        ...,
                        internal->
                    }
                }
            }
        },
        _type == "newsLayout" => {
            ...,
            "articles": *[_type == "route" && page->_type == "article"] {
                ...,
                page->
            }
        },
        _type == "articlesRow" => {
            ...,
            articles[]-> {
                ...,
                preview {
                    ...,
                    "btnLink": *[_type == "route" && page._ref == ^._id][0].slug.current
                }
            }
        },
        _type == "articleLanding" => {
            ...,
            "category": ^.preview.category,
            "publishDate": ^.preview.publishDate
        },
        _type == "bigImageWithSmallImagesCarousel" => {
            ...,
            carouselTiles[]{
                _type == 'reference' => @-> {
                    ...,
                    ...preview
                },
                _type != 'reference' => @
            }
        },
        _type == "membersLayout" => {
            ...,
            "members": *[_type == "member"]
        },
        _type == "membersCarousel" => {
            ...,
            members[]->
        },
        _type == "iconRow" => {
            ...,
            icons[] {
                ...,
                link {
                    ...,
                    internal->
                }
            }
        }
    }
`

export const getStaticPaths = async () => {
    let paths = await client
        .fetch(
            groq`
        *[_type == "route"] {
            "slug": slug.current
        }
        `
        )
        .then((paths) => paths.map(route => ({ params: { slug: [route.slug] } })))

    return {
        paths: paths,
        fallback: true
    }
}

/**
 * Fetches data for our pages.
 *
 * The [[...slug]] name for this file is intentional - it means Next will run this getServerSideProps
 * for every page requested - /, /about, /contact, etc..
 * From the received params.slug, we're able to query Sanity for the route coresponding to the currently requested path.
 */
export const getStaticProps = async ({ params }) => {
    const slug = slugParamToPath(params?.slug)


    let data

    // Frontpage - fetch the linked `frontpage` from the global configuration document.
    if (slug === '/') {
        data = await client
            .fetch(
                groq`
                *[_type == "siteConfig"][0]{
                    frontpage-> {
                        ${pageFragment}
                    },
                    mainNav->
                  }
                `
            )
            .then((res) => res?.frontpage ? { ...res.frontpage, slug } : undefined)
    } else {

        // Regular route
        data = await client
            .fetch(
                // Get the route document with one of the possible slugs for the given requested path
                groq`
                *[_type == "route" && slug.current in $possibleSlugs][0]{
                    ...,
                    page-> {
                        ${pageFragment}
                    }
                }
                `,

                { possibleSlugs: getSlugVariations(slug) }
            )
            .then((res) => (res?.page ? { ...res, ...res.page, slug } : undefined))
    }

    if (!data?._type === 'page') {
        return {
            notFound: true,
        }
    }

    return {
        props: data || {},
    }
}



const LandingPage = (props) => {
    const {
        title = 'ActiveBrands',
        description,
        disallowRobots,
        content = [],
        config = {},
        themeColors,
        includeTransNav,
        slug,
    } = props

    return (
        <Layout themeColors={themeColors} config={config} includeTransNav={includeTransNav}>
            <NextSeo
                {...SEO}
                title={title}
            // titleTemplate={`%s | ${config.title}`}
                description={description}
            // canonical={config.url && `${config.url}/${slug}`}
                noindex={disallowRobots}
            />
            {/* todo tailwind not detecting these classes in utils component */}
            <div className="w-0 h-0 grayscale blur-2xl scale-110 md:grayscale-0 md:blur-0 md:scale-100 duration-700 bg-slate-300"></div>

            {content && <RenderSections themeColors={themeColors} sections={content} />}
        </Layout>
    )
}

LandingPage.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    slug: PropTypes.string,
    disallowRobots: PropTypes.bool,
    openGraphImage: PropTypes.any,
    content: PropTypes.any,
    config: PropTypes.any,
}

export default LandingPage
