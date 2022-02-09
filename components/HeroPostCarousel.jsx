import React, { useEffect, useRef, useState } from 'react'

const featuredPost = [
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1543083115-638c32cd3d58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
]

let count = 0
let slideInterval

const HeroPostCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slideRef = useRef()

  const removeAnimation = () => {
    slideRef.current.classList.remove('fade-anim')
  }

  useEffect(() => {
    slideRef.current.addEventListener('animationend', removeAnimation)
    slideRef.current.addEventListener('mouseenter', pauseSlider)
    slideRef.current.addEventListener('mouseleave', startSlider)
    startSlider()

    //clean up DOM
    return () => {
      pauseSlider()
    }
  }, [])

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleNext()
    }, 3000)
  }

  const pauseSlider = () => {
    clearInterval(slideInterval)
  }

  const handleNext = () => {
    count = (count + 1) % featuredPost.length
    setCurrentIndex(count)
    slideRef.current.classList.add('fade-anim')
  }

  const handlePrev = () => {
    const postLength = featuredPost.length
    count = (currentIndex + postLength - 1) % postLength
    setCurrentIndex(count)
    slideRef.current.classList.add('fade-anim')
  }

  return (
    <div ref={slideRef} className="relative w-full select-none">
      <div className="aspect-w-16 aspect-h-7">
        <img src={featuredPost[currentIndex]} alt="" className="object-cover" />
      </div>

      <div className="absolute top-1/2 flex w-full -translate-y-1/2 transform items-center justify-between px-3 text-white">
        <button
          className="shadow-2xl hover:text-green-700"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="shadow-2xl hover:text-green-700"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default HeroPostCarousel
