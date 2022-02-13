import Image from 'next/image'
import React from 'react'
import logo from '../public/LogoGFXARGENTINA2.png'

const Footer = () => {
  return (
    <div className="container mx-auto mt-10 px-8 md:px-14 lg:px-24  ">
      <div className="flex items-center justify-around">
        <div className="h-45 w-45">
          <Image src={logo} />
        </div>
        <div className="text-white">gfxargentina 2022</div>
      </div>
    </div>
  )
}

export default Footer
