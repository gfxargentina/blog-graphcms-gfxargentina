import React from 'react'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'

/**TODO
 * agregar links para que lleve a los posts
 */

const RecentPostCard = ({ post }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-xl bg-blue-300 blur-sm"></div>
      <div className="relative rounded-xl  bg-white ">
        <img
          src={post.featuredImage.url}
          alt={post.featuredImage.url}
          className="h-36 w-full rounded-t-xl object-cover "
        />

        <div className="p-2">
          <div className="flex flex-row">
            <div className="rounded-lg bg-yellow-500 px-2 py-1 text-xs uppercase text-white">
              {post.categories[0].name}
            </div>
          </div>
          <h2 className="mt-4 mb-4 text-2xl font-bold">{post.title}</h2>

          <p className="mt-4 text-gray-600 line-clamp-3 ">{post.excerpt}</p>

          <div className="mt-8 border"></div>

          <div className="mt-2 mb-4 flex flex-row items-center">
            <img
              src={post.author.image.url}
              alt=""
              className="mr-2 h-6 w-6 rounded-full"
            />
            <div className="gont-bold mr-2">{post.author.name}</div>
            <div className="text-gray-400">
              {moment(post.createdAt).format('DD-MM-YYYY')}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentPostCard

{
  /* <div className="max-w-sm rounded  shadow-xl">
      <img src={post.featuredImage.url} alt="" className="w-full" />
      <div className="py4 px-6">
        <span className="mr-2 mt-5 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          #Categoria
        </span>
      </div>
      <div className="px-6 py-4">
        <div className="text-xl font-bold text-white">{post.title}</div>
      </div>
    </div> */
}
