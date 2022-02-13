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
        <div className=" flex flex-row">
          <div className="rounded-lg border border-indigo-500 px-2 py-1 text-center text-xs uppercase text-black">
            {portfolio.categoria}
          </div>
        </div>
        <h2 className="mt-4 mb-5  text-2xl font-bold">{portfolio.titulo}</h2>

        <span className="">{portfolio.stack}</span>

        <div className="mt-8 mb-4 flex justify-around ">
          {/* <img src="#" alt="" className="mr-2 h-6 w-6 rounded-full" /> */}
          {portfolio.categoria === 'Motion Graphics' ? (
            ''
          ) : (
            <div className="flex items-center">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 32 32"
                >
                  <path d="M16 .396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183.803.151 1.093-.344 1.093-.772 0-.38-.009-1.385-.015-2.719-4.453.964-5.391-2.151-5.391-2.151-.729-1.844-1.781-2.339-1.781-2.339-1.448-.989.115-.968.115-.968 1.604.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328.14-1.031.557-1.74 1.011-2.135-3.552-.401-7.287-1.776-7.287-7.907 0-1.751.62-3.177 1.645-4.297-.177-.401-.719-2.031.141-4.235 0 0 1.339-.427 4.4 1.641a15.436 15.436 0 014-.541c1.36.009 2.719.187 4 .541 3.043-2.068 4.381-1.641 4.381-1.641.859 2.204.317 3.833.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891.556.479 1.077 1.464 1.077 2.959 0 2.14-.02 3.864-.02 4.385 0 .416.28.916 1.104.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                </svg>
              </div>
              <button className="focus:shadow-outline h-8 rounded-lg border border-indigo-500 px-2 font-bold text-indigo-700 transition-colors duration-150 hover:bg-indigo-500 hover:text-indigo-100 md:text-xs">
                Ver Codigo
              </button>
            </div>
          )}

          <div className="flex items-center">
            <div className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
              >
                <path d="M8.953 17.985A2.5 2.5 0 016.5 20h-2a.5.5 0 01-.5-.5v-2a2.5 2.5 0 012.015-2.453l.012-.343c.02-.58.08-1.148.177-1.704H2.5a.5.5 0 01-.464-.686l2-5A.5.5 0 014.5 7H9c.025 0 .05.002.075.006A12.302 12.302 0 0120.59 3.008a.5.5 0 01.4.401 12.32 12.32 0 01-3.996 11.518A.504.504 0 0117 15v4.5a.5.5 0 01-.314.464l-5 2A.5.5 0 0111 21.5v-3.705c-.563.099-1.133.158-1.704.178l-.343.012zm-.966-.29l-1.682-1.682A1.5 1.5 0 005 17.5V19h1.5a1.5 1.5 0 001.487-1.305zM12 17.577v3.184l4-1.6v-3.448a12.254 12.254 0 01-4 1.864zM6.42 12A12.26 12.26 0 018.29 8h-3.45l-1.6 4H6.42zm2.28 4.993l.561-.02c.562-.019 1.12-.08 1.673-.182 6.036-1.118 10.062-6.831 9.132-12.857-.44-.068-.884-.11-1.33-.125-6.251-.216-11.494 4.678-11.71 10.93l-.019.561L8.7 16.993zM14 13a3 3 0 110-6 3 3 0 010 6zm0-1a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
            </div>
            <button className=" focus:shadow-outline h-8 rounded-lg border border-indigo-500 px-2 font-bold text-indigo-700 transition-colors duration-150 hover:bg-indigo-500 hover:text-indigo-100 md:text-xs">
              Ver Proyecto
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
