import React from 'react'
import { PortfolioCard } from '../components'

const proyectos = [
  {
    titulo: 'Gestion Taller',
    img: 'https://images.unsplash.com/photo-1596496181848-3091d4878b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    github: 'link',
    deploy: 'link',
    categoria: 'Motion Graphics',
  },
  {
    titulo: 'Gestion Taller',
    img: 'https://images.unsplash.com/photo-1596496181848-3091d4878b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    github: 'link',
    deploy: 'link',
    categoria: 'Web Dev',
  },
  {
    titulo: 'Gestion Taller',
    img: 'https://images.unsplash.com/photo-1596496181848-3091d4878b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    github: 'link',
    deploy: 'link',
    categoria: 'Web Dev',
  },
]

const Portfolio = () => {
  return (
    <div className="container mx-auto   items-center  px-8 md:px-14 lg:px-24">
      <section className="">
        <h2 className="mt-5 mb-5 text-2xl text-white">Mis Proyectos</h2>

        {/* <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recentPosts.map((post) => (
          <RecentPostCard post={post} key={post.title} />
        ))}
      </div> */}
        <div className="">
          <div className="">
            <div className="xs:grid-cols-2 grid  gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
              {proyectos.map((portfolio) => (
                <div className="">
                  <div key={portfolio.titulo}>
                    <PortfolioCard portfolio={portfolio} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
