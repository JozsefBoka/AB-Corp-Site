import React from 'react'
import BaseApp from 'next/app'
import client from '../client'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import ErrorBoundary from '../components/ErrorBoundry'

import '../styles/globals.css'
import "keen-slider/keen-slider.min.css"
import { ContextProvider } from '../components/context/ConfigContext'
import { registerCustomEffects } from '../utils/globalAnimations'

gsap.registerPlugin(CSSPlugin, ScrollTrigger)
registerCustomEffects()

const siteConfigQuery = `
  *[_type == "siteConfig"][0] {
    ...,
    mainNav[] {
      ...,
      navLink {
        ...,
        internal->
      }
    },
    burgerNav {
      ...,
      navItems[] {
        ...,
        navLink {
          ...,
          internal->
        },
        secondLevelItems[] {
          ...,
          navLink {
            ...,
            internal->
          }
        }
      }
    }
  }
  `

class App extends BaseApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // Add site config from sanity
    return client.fetch(siteConfigQuery).then((config) => {
      if (!config) {
        return { pageProps }
      }
      if (config && pageProps) {
        pageProps.config = config
      }

      return { pageProps }
    })
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ErrorBoundary>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </ErrorBoundary>
    )
  }
}

export default App
