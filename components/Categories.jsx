import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  //convierte el array de objetos anidados de la api en 1 solo array de objetos
  //const categoriesFlat = categories.flatMap((item) => item.node.categories)

  return (
    <div className="mb-8  rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">Categorias</h3>
      {categories?.map((category) => (
        <div key={category.slug} className="flex-column flex">
          <Link href={`/category/${category.slug}`}>{category.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Categories
