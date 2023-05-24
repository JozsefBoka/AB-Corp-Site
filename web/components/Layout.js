import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { useRouter } from "next/router";
import gsap from 'gsap';

import { attachGlobalAnims } from '../utils/globalAnimations';
// import { LogoJsonLd } from 'next-seo'
import Header from './Header'
import Footer from './Footer'

const PageTransition = (props) => {
    const { themeColors } = props
    const router = useRouter()

    useEffect(() => {
        // todo consider runing animation for slow pages only
        const aniStart = () => {
            const tl = gsap.timeline()
            tl.set('.cover-strip', {'--clip-path': 'circle(0% at 100% 0%)'})
            tl.to('.cover-strip', {
                duration: 0.2,
                // ease: 'Expo.easeIn',
                '--clip-path': 'circle(150% at 100% 0%)'
            })
        }

        const aniEnd = () => {
            const tl = gsap.timeline()
            tl.set('.cover-strip', {'--clip-path': 'circle(150% at 0% 100%)'})
            tl.to('.cover-strip', {
                duration: 0.2,
                // ease: 'Expo.easeInOut',
                '--clip-path': 'circle(0% at 0% 100%)'
            })

            tl.set('.cover-strip', { xPercent: 0 })
        }

        router.events.on('routeChangeStart', aniStart)
        router.events.on('routeChangeComplete', aniEnd)
        router.events.on('routeChangeError', aniEnd)

        return () => {
            router.events.off('routeChangeStart', aniStart)
            router.events.off('routeChangeComplete', aniEnd)
            router.events.off('routeChangeError', aniEnd)
        }
    }, [router, themeColors])

    return (
        <div className="overflow-hidden relative z-50">
            <div
                id="cover"
                className="cover-strip h-full w-full top-0 left-0 cover fixed transition-[background-color] duration-150"
                style={{ backgroundColor: themeColors?.accent }}
            ></div>
        </div>
    )
}

function Layout(props) {
    const { config, children, themeColors, includeTransNav } = props
    const router = useRouter()

    useEffect(() => {
        attachGlobalAnims(themeColors)
    }, [themeColors])

    useEffect(() => {
        router.events.on('routeChangeComplete', () => attachGlobalAnims(themeColors))
        
        return () => {
            router.events.off('routeChangeComplete', () => attachGlobalAnims(themeColors))
        }
    }, [router, themeColors])

    if (!config) {
        console.error('Missing config')
        return <div>Missing config</div>
    }

    const { title, logo, mainNav, burgerNav } = config

    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width, viewport-fit=cover" />
            </Head>
            <div className="scroll-smooth overflow-hidden">
                <PageTransition themeColors={themeColors} />
                <Header title={title} logo={logo} mainNav={mainNav} burgerNav={burgerNav} themeColors={themeColors} includeTransNav={includeTransNav} />
                <main className="content">
                    {children}
                </main>
                <Footer logo={logo} mainNav={mainNav} burgerNav={burgerNav} />
                {/* {logoUrl && url && <LogoJsonLd url={url} logo={logoUrl} />} */}
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node),
    config: PropTypes.shape({
        title: PropTypes.string,
        mainNavigation: PropTypes.arrayOf(PropTypes.object),
        footerNavigation: PropTypes.arrayOf(PropTypes.object),
        footerText: PropTypes.arrayOf(PropTypes.object),
        logo: PropTypes.shape({
            asset: PropTypes.shape({
                url: PropTypes.string,
            }),
        }),
        url: PropTypes.string,
    }),
}

export default Layout
