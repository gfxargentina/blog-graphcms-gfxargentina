import React from 'react'

const PortfolioCard = ({ portfolio }) => {
  console.log(portfolio)
  return (
    <div className="rounded-xl  bg-white shadow-2xl">
      <img
        src={portfolio.img}
        alt=""
        className="h-36 w-full rounded-t-xl object-cover "
      />

      <div className="p-2">
        <div className="flex flex-row">
          <div className="rounded-lg bg-yellow-500 px-2 py-1 text-xs uppercase text-white">
            {portfolio.categoria}
          </div>
        </div>
        <h2 className="mt-4 mb-4 text-2xl font-bold">{portfolio.titulo}</h2>

        <div className="mt-8 border"></div>

        <div className="mt-2 mb-4 flex flex-row items-center">
          <img src="#" alt="" className="mr-2 h-6 w-6 rounded-full" />
          <div className="gont-bold mr-2">{portfolio.github}</div>
          <div className="gont-bold mr-2"> {portfolio.deploy} </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
