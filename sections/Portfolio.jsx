import React, { useEffect, useState } from 'react'
import { PortfolioCard } from '../components'
import { getPortfolio } from '../services'

const Portfolio = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getPortfolio().then((result) => {
      setProjects(result)
    })
  }, [])

  const proyectos = projects.map((proyect) => proyect)
  console.log(projects)
  return (
    <div className="container mx-auto   items-center  px-8 md:px-14 lg:px-24">
      <section className="">
        <h2 className="mt-10 mb-5 text-center text-2xl text-lime-400">
          Mis Proyectos Web y Videos Motion Graphics
        </h2>

        {/* <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recentPosts.map((post) => (
          <RecentPostCard post={post} key={post.title} />
        ))}
      </div> */}
        <div className="">
          <div className="">
            <div className="xs:grid-cols-2 grid  gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
              {proyectos.map((portfolio) => (
                <div key={portfolio.node.titulo}>
                  <PortfolioCard portfolio={portfolio.node} />
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
