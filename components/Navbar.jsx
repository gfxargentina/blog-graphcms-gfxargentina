import Link from 'next/link'

const Navbar = () => {
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
    </>
  )
}

export default Navbar
