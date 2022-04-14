import React from 'react'

const About = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="aspect-w-16 aspect-h-7 mx-auto">
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
          {/* <h1 className="title-font mb-4 text-3xl font-medium text-lime-200 sm:text-4xl">
            Microdosing synth tattooed vexillologist
          </h1> */}
          <p className="mb-5 text-2xl leading-relaxed text-lime-400">
            Soy un Autodidacta que le interesa todo lo relacionado con la
            Programación, el Diseño, Audio y Video, en este sitio encontraras
            info relacionada con esos campos, te invito visites el blog y las
            otras secciones que te pueden interesar.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
