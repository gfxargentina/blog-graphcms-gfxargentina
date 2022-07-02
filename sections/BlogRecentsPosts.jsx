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
  console.log(recentPosts)

  return (
    <div className="container mx-auto   items-center  px-8 md:px-14 lg:px-24">
      <section className="">
        <h2 className="mt-5 mb-5 text-2xl text-lime-400">
          Ultimos Posts del Blog
        </h2>

        {/* <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <RecentPostCard post={post} key={post.title} />
          ))}
        </div> */}
        <div className="">
          <div className="">
            <div className="xs:grid-cols-2 grid  gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <div key={post.title}>
                  <RecentPostCard post={post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogRecentsPosts
