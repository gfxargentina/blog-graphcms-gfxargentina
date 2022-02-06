import React, { useEffect, useState } from 'react'
import { RecentPostCard } from '../components'
import { getRecentPosts } from '../services'

const BlogRecentsPosts = () => {
  const [recentPosts, setRecentPosts] = useState([])

  useEffect(() => {
    getRecentPosts().then((result) => {
      setRecentPosts(result)
    })
  }, [])

  return (
    <div className="container mx-auto mt-64 flex w-full items-center justify-between px-8 md:px-14 lg:px-24">
      <section className="mt-5 w-full">
        <h2 className="text-2xl text-white">Ultimos Posts del Blog</h2>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <RecentPostCard post={post} key={post.title} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default BlogRecentsPosts
