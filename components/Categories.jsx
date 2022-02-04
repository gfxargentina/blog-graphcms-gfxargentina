import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])
  console.log(categories)

  return (
    <div className="mb-8  rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">Categories</h3>
      {categories?.map((category) => (
        <div className="flex-column flex">
          <Link
            key={category.node.categories[0].slug}
            href={`/category/${category.node.categories[0].slug}`}
          >
            {category.node.categories[0].name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Categories
