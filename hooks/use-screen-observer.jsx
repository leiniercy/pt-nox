'use client'
import { useEffect, useState } from 'react'

/**
 * Se usa para estar pendiente a un breakpoint de la pantalla
 *
 * screenSize(number): representa el pivote en px
 *
 * return: {
 *
 *    LowerOrEqual: en caso de q la pantalla sea menor o igual al pivote
 *
 *    Bigger: en caso de q la pantalla sea mayor o igual al pivote
 *
 * }
 */

export default function useScreenWatcher (screenSize) {
  const [value, setValue] = useState(false)

  useEffect(() => {
    const matcher = window.matchMedia(`(max-width: ${screenSize}px)`)

    const handleMediaChange = ({ matches }) => {
      setValue(matches)
    }

    setValue(matcher.matches)

    matcher.addEventListener('change', handleMediaChange)

    return () => {
      matcher.removeEventListener('change', handleMediaChange)
    }
  }, [screenSize])

  return {
    LowerOrEqual: value,
    Bigger: !value
  }
}
