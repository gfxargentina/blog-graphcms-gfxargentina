import React, { useState } from 'react'
import Image from 'next/image'
import facebook from '../public/facebook2.png'
import youtube from '../public/youtube2.png'
import linkedin from '../public/linkedin2.png'
import github from '../public/github2.png'
import { useFormik } from 'formik'
import emailjs from 'emailjs-com'

const ContactGfx = () => {
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
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        'gfxargentina',
        '#contact-form',
        process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
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
              Send me your Enquiry
            </h1>
            <p className="w-auto pt-2 text-xl text-lime-400">
              I'm online for a quick reply from 10am to 13hs and 19pm to 21hs
              from Monday to Friday GMT+3/UTC-3 Argentina time.
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
                    href="https://www.youtube.com/user/gfxmotionvideos"
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
                    href="https://www.facebook.com/gfxmotiontemplates/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-80 rounded-xl bg-white p-4 shadow-lg md:w-2/3">
            <form
              method="POST"
              name="contact"
              onSubmit={formik.handleSubmit}
              className="flex flex-col space-y-4"
              action=""
              id="contact-form"
            >
              <div>
                <label className="text-sm text-gray-600" htmlFor="nombre">
                  Name
                </label>
                <input
                  required
                  minLength={3}
                  id="nombre"
                  onChange={formik.handleChange}
                  value={formik.values.nombre}
                  type="text"
                  placeholder="your name"
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
                  placeholder="your email"
                  className="w-full rounded-md px-4 py-2 text-black outline-none ring-1 ring-lime-400 focus:ring-2 focus:ring-lime-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600" htmlFor="mensaje">
                  Message
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
                  placeholder="your enquery"
                  className="w-full rounded-md px-4 py-2 text-black outline-none ring-1 ring-lime-400 focus:ring-2 focus:ring-lime-400"
                />
              </div>
              <button
                type="submit"
                className="inline-block self-end rounded-lg bg-black px-6 py-2 text-sm font-bold uppercase text-lime-400 hover:bg-lime-700 hover:text-white "
              >
                Send
              </button>
              {alert ? (
                <div
                  class="border-l-4 border-orange-500 bg-orange-100 p-4 text-orange-700"
                  role="alert"
                >
                  <p class="font-bold">I received your message</p>
                  <p>
                    Thank you for contacting me, I will respond as soon as
                    possible.
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

export default ContactGfx
