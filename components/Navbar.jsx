import Link from 'next/link'

const Header = () => {
  return (
    <>
      <div className="mb-10 h-8 w-full items-center p-12 text-white ">
        <div className="flex justify-between">
          <div>
            <Link href={`/`}>
              <span className="brand-logo cursor-pointer text-4xl font-bold">
                GFXARGENTINA
              </span>
            </Link>

            <div className="  md:hidden">
              <div className="">
                <div className="block">
                  <Link href={`/blog`}>
                    <span className="cursor-pointer text-sm hover:text-green-600">
                      Blog
                    </span>
                  </Link>
                </div>

                <div className="block">
                  <Link href={`/contacto`}>
                    <span className="cursor-pointer  text-sm hover:text-green-700">
                      Contacto
                    </span>
                  </Link>
                </div>

                <div className="block">
                  <Link href={`/portfolio`}>
                    <span className="cursor-pointer text-sm hover:text-green-700">
                      Portfolio
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex md:space-x-4">
              <Link href={`/blog`}>
                <span className="cursor-pointer text-2xl hover:text-green-600">
                  Blog
                </span>
              </Link>

              <Link href={`/contacto`}>
                <span className="cursor-pointer text-2xl hover:text-green-700">
                  Contacto
                </span>
              </Link>

              <Link href={`/portfolio`}>
                <span className="cursor-pointer text-2xl hover:text-green-700">
                  Portfolio
                </span>
              </Link>
            </div>
          </div>
          {/* Mobile responsive */}
          <div className="ml-4 items-center md:hidden">
            <button>
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
            </button>
          </div>
        </div>

        <div className="mt-10 border-b"></div>
      </div>
      {/* <div>
        <div className="container mx-auto mb-8  px-10">
          <div className="inline-block w-full border-b border-blue-400 py-8">
            <div className="block md:float-left">
              <Link href="/">
                <span className="cursor-pointer text-4xl font-bold text-white">
                  GFXARGENTINA
                </span>
              </Link>
            </div>

            <div className="hidden  md:float-left  md:contents">
              <span className="mt-2 ml-4 cursor-pointer  font-semibold text-white md:float-right ">
                <Link href={`/contacto`}>Contacto</Link>
              </span>
              <span className="mt-2 ml-4 cursor-pointer  font-semibold text-white md:float-right ">
                <Link href={`/blog`}>Blog</Link>
              </span>
            </div>

            <div className="float-right md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-25 h-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Header
