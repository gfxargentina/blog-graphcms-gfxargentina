import moment from 'moment'
import { RichText } from '@graphcms/rich-text-react-renderer'
import React from 'react'

const PostDetail = ({ post }) => {
  return (
    <div className="mb-8 rounded-lg bg-white pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden shadow-md">
        <a href=""></a>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="h-full w-full rounded-lg object-top"
        />
      </div>

      <div className="px-2 lg:px-0 ">
        <div className="mb-8 flex w-full items-center ">
          <div className="mb-4 mr-8 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
            <img
              alt={post.author.name}
              height="30px"
              width="30px"
              className="rounded-full align-middle"
              src={post.author.image.url}
            />
            <p className="ml-2 mr-5 inline align-middle text-lg text-gray-700 ">
              {post.author.name}
            </p>
            <div className="font-medium text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 inline h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{moment(post.createdAt).format('DD-MM-YYYY')}</span>
            </div>
          </div>
        </div>

        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        {/* detalles del post */}
        <RichText
          content={post.content.raw.children}
          renderers={{
            p: ({ children }) => (
              <p className="mt-5 mb-5 text-lg">{children}</p>
            ),
            h1: ({ children }) => (
              <h1 className="mt-5 mb-5 text-xl">{children}</h1>
            ),
            bold: ({ children }) => <strong>{children}</strong>,
            a: ({ children, href, openInNewTab }) => (
              <a
                href={href}
                target={openInNewTab ? '_blank' : '_self'}
                className="text-blue-500"
              >
                {children}
              </a>
            ),
          }}
        />
      </div>
    </div>
  )
}

export default PostDetail
