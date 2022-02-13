import React from 'react'
import Head from 'next/head'
import BlogRecentsPosts from '../sections/BlogRecentsPosts'
import Hero from '../sections/Hero'
import Portfolio from '../sections/Portfolio'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>Gfxargentina Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <BlogRecentsPosts />
      <Portfolio />
      <Contact />
    </div>
  )
}
