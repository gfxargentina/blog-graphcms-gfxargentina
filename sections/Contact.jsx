import React, { useState } from 'react'
import Image from 'next/image'
import facebook from '../public/facebook2.png'
import youtube from '../public/youtube2.png'
import linkedin from '../public/linkedin2.png'
import github from '../public/github2.png'
import { useFormik } from 'formik'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [alert, setAlert] = useState(false)
  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      mensaje: '',
    },
    onSubmit: (values) => {
      // fetch('/api/mail', {
      //   method: 'post',
      //   body: JSON.stringify(values),
      // })
      sendEmail(values)

      formik.resetForm()
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 5000)
    },
  })

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'gfxargentina',
        form.current,
        process.env.YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className="mt-12 flex w-full items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 rounded-xl bg-blue-300 blur-sm"></div>
        <div className="relative flex w-full max-w-7xl  flex-col space-y-6 rounded-xl bg-black  p-8 text-white shadow-lg md:flex-row md:space-x-6 md:space-y-0  ">
          <div className="flex flex-col justify-between space-y-10">
            <h1 className="text-4xl font-bold tracking-wide text-lime-400 ">
              Envíame un mensaje
            </h1>
            <p className="w-auto pt-2 text-xl text-lime-400">
              Realizo Videos Publicitarios Animados y tambien hago sitios web,
              si necesitas algo de eso, enviame un mensaje, tu consulta no
              molesta y la respondere a la brevedad.
            </p>

            <div className="xs:grid-cols-2 grid  gap-4 md:grid-cols-2">
              <div className="">
                <div className="mr-8 inline-flex items-center space-x-2">
                  <div className="">
                    <Image
                      className="text-white"
                      width="27"
                      height="27"
                      src={github}
                      alt="github icon"
                    />
                  </div>

                  <a
                    href="https://github.com/gfxargentina"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Github</span>
                  </a>
                </div>

                <div className="inline-flex items-center space-x-2">
                  <div className="">
                    <Image
                      width="27"
                      height="27"
                      src={linkedin}
                      alt="facebook icon"
                    />
                  </div>
                  <a
                    href="https://www.linkedin.com/in/luischilo-webdev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Linkedin</span>
                  </a>
                </div>
              </div>

              <div className="">
                <div className="mr-5 inline-flex items-center space-x-2">
                  <div className="">
                    <Image
                      width="27"
                      height="27"
                      src={youtube}
                      alt="facebook icon"
                    />
                  </div>
                  <a
                    href="https://www.youtube.com/user/gfxargentina"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Youtube</span>
                  </a>
                </div>

                <div className="inline-flex items-center space-x-2">
                  <div className="">
                    <Image
                      width="27"
                      height="27"
                      src={facebook}
                      alt="facebook icon"
                    />
                  </div>
                  <a
                    href="https://es-la.facebook.com/gfxargentinavideos/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="space-x-10">
              <a href="#" className="text-white">
                <Image
                  className="text-white"
                  width="27"
                  height="27"
                  src={github}
                  alt="github icon"
                />
              </a>
              <a href="#">
                <Image
                  width="27"
                  height="27"
                  src={youtube}
                  alt="youtube icon"
                />
              </a>
              <a href="#">
                <Image
                  width="27"
                  height="27"
                  src={linkedin}
                  alt="linkedin icon"
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
            </div> */}
          </div>

          <div className="w-80 rounded-xl bg-white p-4 shadow-lg md:w-2/3">
            <form
              method="POST"
              name="contact"
              onSubmit={formik.handleSubmit}
              className="flex flex-col space-y-4"
              action=""
            >
              <div>
                <label className="text-sm text-gray-600" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  required
                  minLength={3}
                  id="nombre"
                  onChange={formik.handleChange}
                  value={formik.values.nombre}
                  type="text"
                  placeholder="tu nombre"
                  name="nombre"
                  className=" w-full rounded-md px-4 py-2 text-black outline-none ring-1 ring-lime-400 focus:ring-2 focus:ring-lime-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600" htmlFor="email">
                  Email
                </label>
                <input
                  required
                  id="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  type="email"
                  name="email"
                  placeholder="tu correo"
                  className="w-full rounded-md px-4 py-2 text-black outline-none ring-1 ring-lime-400 focus:ring-2 focus:ring-lime-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600" htmlFor="mensaje">
                  Mensaje
                </label>
                <textarea
                  required
                  minLength={20}
                  id="mensaje"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.mensaje}
                  rows="4"
                  name="mensaje"
                  placeholder="tu mensaje"
                  className="w-full rounded-md px-4 py-2 text-black outline-none ring-1 ring-lime-400 focus:ring-2 focus:ring-lime-400"
                />
              </div>
              <button
                type="submit"
                className="inline-block self-end rounded-lg bg-black px-6 py-2 text-sm font-bold uppercase text-lime-400 hover:bg-lime-700 hover:text-white "
              >
                Enviar
              </button>
              {alert ? (
                <div
                  class="border-l-4 border-orange-500 bg-orange-100 p-4 text-orange-700"
                  role="alert"
                >
                  <p class="font-bold">Recibi su mensaje</p>
                  <p>
                    Gracias por contactarse conmigo, le respondere a la brevedad
                  </p>
                </div>
              ) : (
                ''
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
