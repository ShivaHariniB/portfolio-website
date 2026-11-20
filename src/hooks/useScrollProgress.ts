import { useEffect, useRef } from 'react'

/**
 * Sets a `--progress` CSS variable (0 to 1) on the element as the page scrolls:
 * 0 while its top is below the lower part of the screen, 1 once its bottom has
 * come up to that same point. CSS can use it to draw things as you scroll.
 */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.setProperty('--progress', '1')
      return
    }

    let frame = 0
    const update = () => {
      frame = 0
      const { top, height } = el.getBoundingClientRect()
      const progress = (window.innerHeight * 0.75 - top) / height
      el.style.setProperty('--progress', Math.min(1, Math.max(0, progress)).toFixed(3))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return ref
}
