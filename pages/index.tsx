import React from 'react'
import Head from 'next/head'
import BlogRecentsPosts from '../sections/BlogRecentsPosts'
import Hero from '../sections/Hero'
import Portfolio from '../sections/Portfolio'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import About from '../sections/About'

export default function Home() {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        //Primary Meta Tags
        <title>GFXARGENTINA</title>
        <meta name="title" content="GFXARGENTINA" />
        <meta
          name="description"
          content="Programacion - Diseño - Audio - Video"
        />
        // Open Graph / Facebook
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gfxargentina.com.ar/" />
        <meta property="og:title" content="GFXARGENTINA" />
        <meta
          property="og:description"
          content="Programacion - Diseño - Audio - Video"
        />
        <meta property="og:image" content="/GFXARGENTINA-META.PNG" />
        //Twitter
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.gfxargentina.com.ar/"
        />
        <meta property="twitter:title" content="GFXARGENTINA" />
        <meta
          property="twitter:description"
          content="Programacion - Diseño - Audio - Video"
        />
        <meta property="twitter:image" content="/GFXARGENTINA-META.PNG" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <BlogRecentsPosts />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}
