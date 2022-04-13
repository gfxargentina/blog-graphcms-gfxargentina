import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { getRecentPosts } from '../services'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const HeroPostCarousel = () => {
  // const [selectedIndex, setSelectedIndex] = useState(0)

  const [recentPosts, setRecentPosts] = useState([])

  const featuredPost = recentPosts?.map((post) => post.featuredImage.url)
  const slugUrl = recentPosts?.map((post) => post.slug)
  const title = recentPosts?.map((post) => post.title)

  //const [selectedImage, setSelectedImage] = useState('')

  useEffect(async () => {
    const data = await getRecentPosts()
    setRecentPosts(data)

    //setSelectedImage(data[0].featuredImage.url)
  }, [])

  // const handlePrev = () => {
  //   const condition = selectedIndex > 0
  //   const nextIndex = condition ? selectedIndex - 1 : featuredPost.length - 1
  //   setSelectedImage(featuredPost[nextIndex])
  //   setSelectedIndex(nextIndex)
  // }

  // const handleNext = () => {
  //   const condition = selectedIndex < featuredPost.length - 1
  //   const nextIndex = condition ? selectedIndex + 1 : 0

  //   setSelectedImage(featuredPost[nextIndex])
  //   setSelectedIndex(nextIndex)
  // }

  return (
    <section className="relative mb-5 w-full select-none">
      <div>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          //showIndicators={false}
          showThumbs={false}
          interval={3000}
        >
          <Link href={`/post/${slugUrl[0]}`}>
            <div className="aspect-w-16 aspect-h-7 cursor-pointer">
              <img src={featuredPost[0]} className="object-cover " alt="" />
              <p className="text-4xl font-bold text-white shadow-2xl">
                {title[0]}
              </p>
            </div>
          </Link>
          <Link href={`/post/${slugUrl[1]}`}>
            <div className="aspect-w-16 aspect-h-7 cursor-pointer">
              <img src={featuredPost[1]} className="object-cover" alt="" />
              <p className="text-4xl font-bold text-white shadow-2xl">
                {title[1]}
              </p>
            </div>
          </Link>
          <Link href={`/post/${slugUrl[2]}`}>
            <div className="aspect-w-16 aspect-h-7 cursor-pointer">
              <img src={featuredPost[2]} className="object-cover" alt="" />
              <p className="text-4xl font-bold text-white shadow-2xl">
                {title[2]}
              </p>
            </div>
          </Link>
        </Carousel>

        {/* <img src={selectedImage} alt="" className="object-cover" />
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
        </button> */}
      </div>
    </section>
  )
}

export default HeroPostCarousel
