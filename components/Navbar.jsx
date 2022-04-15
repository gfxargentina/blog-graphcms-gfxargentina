import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleNav = () => {
    setOpen(!open)
  }

  return (
    <>
      <div className="h-[90px] w-full bg-black">
        <div className="mx-auto flex h-full max-w-[1240px] items-center justify-between px-4">
          <Link href={`/`}>
            <a className="text-2xl text-white">GFXARGENTINA</a>
          </Link>

          <div className="hidden md:flex ">
            <ul className="flex items-center   text-white">
              <Link href={`/blog`}>
                <a className="mr-5 flex text-2xl">Blog</a>
              </Link>

              <li className="mr-5 flex text-2xl">Portfolio</li>
              <li className="flex text-2xl">Contacto</li>
            </ul>
          </div>

          {/* Hamburguer */}
          <button onClick={handleNav} className="block text-white md:hidden">
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            ) : (
              'cerrar'
            )}
          </button>
          {/* Mobile menu */}
          <div
            className={
              !open
                ? 'absolute top-[70px] flex w-full justify-center bg-black md:hidden'
                : 'absolute left-[-100%]'
            }
          >
            <ul className="text-lime-500">
              <Link href={`/blog`}>
                <a className="text-xl">Blog</a>
              </Link>

              <li className="text-xl">Portfolio</li>
              <li className="text-xl">Contacto</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
