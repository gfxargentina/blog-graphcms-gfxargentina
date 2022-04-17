import Image from 'next/image'
import React from 'react'
import programmer from '../public/programmer.png'

const About = () => {
  return (
    <section className="body-font text-gray-600">
      {/* <div className="aspect-w-16 aspect-h-7 mx-auto">
        <iframe
          src="https://www.youtube.com/embed/Ly7g1crlsZc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div> 
      <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24">
        <div className="w-full text-center lg:w-2/3">
           <h1 className="title-font mb-4 text-3xl font-medium text-lime-200 sm:text-4xl">
            Microdosing synth tattooed vexillologist
          </h1> 
          <p className="mb-5 text-4xl leading-relaxed text-lime-400">
            Hola, mi nombre es Luis , soy un Autodidacta que le interesa todo lo
            relacionado con la Programación, el Diseño, Audio y Video, en este
            sitio encontraras info relacionada con esos campos, te invito
            visites el blog y las otras secciones que te pueden interesar.
          </p>
        </div>
      </div> */}

      <div className="container mx-auto px-5 py-24">
        <div className="mx-auto flex flex-wrap lg:w-4/5">
          <div className="mb-6 w-full lg:mb-0 lg:w-3/5 lg:py-6 lg:pr-10">
            <h2 className="title-font text-sm tracking-widest text-white">
              GFXARGENTINA
            </h2>
            <h1 className="title-font mb-4 text-3xl font-medium text-lime-400">
              Sobre Mí
            </h1>
            <div className="mb-4 flex">
              <a className="flex-grow border-b-2 border-gray-300 py-2 px-1 text-lg"></a>
            </div>
            <p className="mb-4 text-2xl leading-relaxed text-lime-400">
              Hola, mi nombre es Luis , soy un Autodidacta que le interesa todo
              lo relacionado con la Programación, el Diseño, Audio y Video, en
              este sitio encontraras info relacionada con esos campos, te invito
              visites el blog y las otras secciones que te pueden interesar.
            </p>
            <div className="flex border-t border-gray-200 py-2"></div>
          </div>
          <div className="flex justify-end ">
            <Image
              alt="programador"
              class="align-center  w-full rounded  lg:h-auto "
              src={programmer}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
