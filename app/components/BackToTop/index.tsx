'use client'
import { TbArrowNarrowUp } from 'react-icons/tb'
import { Button } from '../Button'
import { useEffect, useCallback, useState } from 'react'

export function BackToTop() {
  const [show, setShow] = useState(false)

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true)
    if (show && window.scrollY <= 500) setShow(false)
  }, [show])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div className="fixed right-4 bottom-4 z-20">
      {show && (
        <div>
          <Button
            onClick={scrollToTop}
            className="shadow-lg shadow-emerald-400/20"
          >
            <TbArrowNarrowUp size={20} />
          </Button>
        </div>
      )}
    </div>
  )
}
