import React from 'react'
import Image from 'next/image'
import facebook from '../public/facebook2.png'
import youtube from '../public/youtube2.png'
import linkedin from '../public/linkedin2.png'
import github from '../public/github2.png'

const Contact = () => {
  return (
    <div className="mt-10 flex w-full items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 rounded-xl bg-blue-300 blur-sm"></div>
        <div className="relative flex w-full max-w-7xl  flex-col space-y-6 rounded-xl bg-black  p-8 text-white shadow-lg md:flex-row md:space-x-6 md:space-y-0  ">
          <div className="flex flex-col justify-between space-y-10">
            <h1 className="text-4xl font-bold tracking-wide ">
              Enviame un mensaje
            </h1>
            <p className="pt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              temporibus veniam laborum repudiandae placeat rem necessitatibus
            </p>

            <div className="flex flex-col space-y-6">
              <div className="inline-flex items-center space-x-2">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span>4564587897</span>
              </div>

              <div className="inline-flex items-center space-x-2">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span>correo@gmail.com</span>
              </div>

              <div className="inline-flex items-center space-x-2">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span>Argentina</span>
              </div>
            </div>

            <div className="space-x-10">
              <a href="#" className="text-white">
                <Image
                  className="text-white"
                  width="27"
                  height="27"
                  src={github}
                  alt="facebook icon"
                />
              </a>
              <a href="#">
                <Image
                  width="27"
                  height="27"
                  src={youtube}
                  alt="facebook icon"
                />
              </a>
              <a href="#">
                <Image
                  width="27"
                  height="27"
                  src={linkedin}
                  alt="facebook icon"
                />
              </a>
              <a href="#">
                <Image
                  width="27"
                  height="27"
                  src={facebook}
                  alt="facebook icon"
                />
              </a>
            </div>
          </div>

          <div className="-8 rounded-xl bg-white p-4 shadow-lg md:w-2/3">
            <form className="flex flex-col space-y-4" action="">
              <div>
                <label className="text-sm text-gray-600" htmlFor="">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="tu nombre"
                  className=" w-full rounded-md px-4 py-2 text-black outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600" htmlFor="">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="tu correo"
                  className="w-full rounded-md px-4 py-2 text-black outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600" htmlFor="">
                  Mensaje
                </label>
                <textarea
                  rows="4"
                  placeholder="tu mensaje"
                  className="w-full rounded-md px-4 py-2 text-black outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <button className="inline-block self-end rounded-lg bg-blue-700 px-6 py-2 text-sm font-bold uppercase text-white ">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
