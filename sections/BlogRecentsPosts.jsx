import React from 'react'
import { RecentPostCard } from '../components'

const BlogRecentsPosts = () => {
  return (
    <div className="container mx-auto mt-64 flex w-full items-center justify-between px-8 md:px-14 lg:px-24">
      <section className="w-full">
        <h2>Ultimos Posts del Blog</h2>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <img
            src="https://images.unsplash.com/photo-1634634120836-2e9581aba554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            alt=""
            className="bg-nav h-36 w-full object-cover lg:h-72"
          />
          <img
            src="https://images.unsplash.com/photo-1634634120836-2e9581aba554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            alt=""
            className="bg-nav h-36 w-full object-cover lg:h-72"
          />
          <img
            src="https://images.unsplash.com/photo-1634634120836-2e9581aba554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            alt=""
            className="bg-nav h-36 w-full object-cover lg:h-72"
          />
          <img
            src="https://images.unsplash.com/photo-1634634120836-2e9581aba554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            alt=""
            className="bg-nav h-36 w-full object-cover lg:h-72"
          />
        </div>
      </section>
    </div>
  )
}

export default BlogRecentsPosts
