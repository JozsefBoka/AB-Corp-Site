import React, { useEffect, useState } from 'react';

const viewports = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1900
}

export function isTabletWidth(width) {
  if (!width) {
    return window?.innerWidth <= viewports.lg
  }

  return width <= viewports.lg
}

export function isMobileWidth(width) {
  if (!width) {
    return window?.innerWidth <= viewports.md
  }

  return width <= viewports.md
}

export function isSmallMobileWidth(width) {
  if (!width) {
    return window?.innerWidth <= viewports.sm
  }

  return width <= viewports.sm
}

/**
 * Attaches window resize event listener
 */
export function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

