import Head from 'next/head'
import BlogRecentsPosts from '../sections/BlogRecentsPosts'

export default function Home() {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>Gfxargentina Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BlogRecentsPosts />
    </div>
  )
}
