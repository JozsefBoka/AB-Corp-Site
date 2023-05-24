import React, { useContext, useState } from 'react'

const ConfigContext = React.createContext()
const ConfigUpdateContext = React.createContext()

export function useSiteConfig() {
    return useContext(ConfigContext)
}

export function useSiteConfigUpdate() {
    return useContext(ConfigUpdateContext)
}

export function ContextProvider({ children }) {
    const [siteConfig, setSiteConfig] = useState({})

    function updateContext(config) {
        setSiteConfig({
            ...siteConfig,
            ...config
        })
    }

    function toggleSecondLevelNav(active) {
        setSiteConfig({
            ...siteConfig,
            isSecondLevelNavActive: typeof active !== 'undefined' ? active : !siteConfig.isSecondLevelNavActive
        })
    }

    function toggleNavbar(active) {
        setSiteConfig({
            ...siteConfig,
            isNavbarActive: typeof active !== 'undefined' ? active : !siteConfig.isNavbarActive
        })
    }

    function toggleNavbars(active) {
        setSiteConfig({
            ...siteConfig,
            isNavbarActive: typeof active !== 'undefined' ? active : !siteConfig.isNavbarActive,
            isSecondLevelNavActive: typeof active !== 'undefined' ? active : !siteConfig.isSecondLevelNavActive
        })
    }

    const updateContextValue = {
        updateContext: updateContext,
        toggleNavbar: toggleNavbar,
        toggleSecondLevelNav: toggleSecondLevelNav,
        toggleNavbars: toggleNavbars
    }

    return (
        <ConfigContext.Provider value={siteConfig}>
            <ConfigUpdateContext.Provider value={updateContextValue}>
                {children}
            </ConfigUpdateContext.Provider>
        </ConfigContext.Provider>
    )
}