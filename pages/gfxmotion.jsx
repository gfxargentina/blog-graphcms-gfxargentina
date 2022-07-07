import { useState } from 'react'

import play from '/play-icon.png'
import logo from '/GFXMOTION-LOGO.png'
import service from '/services-icon.png'
import clock from '/clock-icon.png'
import mobile from '/mobile.png'

import ReactPlayer from 'react-player'
import Modal from '../components/Modal'

function Gfxmotion() {
  //pone en true la prop que se le pasa al componente Modal
  const [mostrarModal, setMostrarModal] = useState(false)

  //pone en false el estado que se le pasa al componente Modal
  const handleOnClose = () => setMostrarModal(false)

  return (
    <div className="bg-gray-700">
      <div className="md:mx-auto md:flex md:max-w-7xl md:flex-col">
        <img
          src="/GFXMOTION-LOGO.png"
          className="mb-7 scale-75"
          alt="gfxmotion logo design"
        />
        <div className="text-center md:flex md:items-center md:justify-center md:py-3">
          <div className="mb-5 text-4xl text-white md:text-9xl ">
            After Effects Video Template Customization
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={() => setMostrarModal(true)}
            className=" px-3 py-2 text-xl text-white transition hover:scale-95 "
          >
            <img src="/play-icon.png" alt="video play" />
          </button>
          <p className="text-lg text-white">Play Video</p>
        </div>
      </div>

      {/* CARDS */}
      <div className="mb-5 flex flex-col md:mx-auto md:grid md:max-w-7xl md:grid-cols-3 md:gap-4">
        <div className="mt-5">
          <div className="max-w-sm rounded-xl  bg-white shadow-lg">
            <div className="p-4 text-right">
              <span className="text-xs uppercase tracking-widest text-gray-500"></span>
            </div>

            <div className="relative mb-10 flex items-center">
              <div className="absolute mx-8 inline-block rounded-xl bg-gradient-to-r from-purple-800  via-violet-800 to-purple-600 p-2 shadow-lg">
                <img
                  className="w-10"
                  src="/services-icon.png"
                  alt="services icon"
                />
              </div>
            </div>
            <div className="px-8 pb-4">
              <h4 className="text-sm font-light text-gray-500">
                After Effects
              </h4>
              <h2 className="mb-5 text-xl font-bold text-gray-800">
                Customizations
              </h2>
              <p className="text-lg text-gray-600">
                More than 200 jobs Done. 100% recommended.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>

        {/* CARD 2 */}

        <div className="mt-5">
          <div className="max-w-sm rounded-xl bg-white shadow-lg">
            <div className="p-4 text-right">
              <span className="text-xs uppercase tracking-widest text-gray-500"></span>
            </div>

            <div className="relative mb-10 flex items-center">
              <div className="absolute mx-8 inline-block rounded-xl bg-gradient-to-r from-purple-800  via-violet-800 to-purple-600 p-2 shadow-lg">
                <img
                  className="w-10"
                  src="/clock-icon.png"
                  alt="clock turn around icon"
                />
              </div>
            </div>
            <div className="px-8 pb-4">
              <h4 className="text-sm font-light text-gray-500">Standard</h4>
              <h2 className="mb-5 text-xl font-bold text-gray-800">
                24hs Turn Around Time
              </h2>
              <p className="text-lg text-gray-600">
                Just send me your desire texts and images and i delivery a final
                video in 24hs.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 3 */}

        <div className="mt-5">
          <div className="max-w-sm rounded-xl bg-white shadow-lg">
            <div className="p-4 text-right">
              <span className="text-xs uppercase tracking-widest text-gray-500"></span>
            </div>

            <div className="relative mb-10 flex items-center">
              <div className="absolute mx-8 inline-block rounded-xl bg-gradient-to-r from-purple-800  via-violet-800 to-purple-600 p-2 shadow-lg">
                <img
                  className="w-10"
                  src="/mobile.png"
                  alt="mobile phone icon"
                />
              </div>
            </div>
            <div className="px-8 pb-4">
              <h4 className="text-sm font-light text-gray-500">Video</h4>
              <h2 className="mb-5 text-xl font-bold text-gray-800">
                Aspect Ratio
              </h2>
              <p className="text-lg text-gray-600">
                Choose from more than 1000 templates, vertical, square and
                horizontal formats.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* VIDEOS */}
      <div className="m-5 text-center text-3xl text-white md:mb-10 md:text-5xl ">
        Check Some of my Customizations
      </div>
      <div className="mb-5 flex flex-col  p-2 md:mx-auto md:grid md:max-w-7xl md:grid-cols-3 md:gap-4">
        <div className="mb-5">
          <ReactPlayer
            volume={0.5}
            width="100%"
            height="150%"
            url="https://www.youtube.com/watch?v=lJ1Dd03zP0A"
          />
        </div>

        <div className="mb-5">
          <ReactPlayer
            volume={0.5}
            width="100%"
            height="150%"
            url="https://www.youtube.com/watch?v=QMzKt7fObm0"
          />
        </div>

        <div className="mb-5">
          <ReactPlayer
            volume={0.5}
            width="100%"
            height="150%"
            url="https://www.youtube.com/watch?v=odaagpiysHs"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col items-center md:mt-24">
        <div className="mb-5 text-center text-3xl text-white md:text-5xl ">
          Want to see more, check this playlist in youtube
        </div>
        <div className="">
          {/* <button className="">Youtube Playlist</button> */}
          <a
            href="https://www.youtube.com/playlist?list=PLxS03Z28lfUKs-Aj50Bg1Q0V7eV3iEMOL"
            target="blank"
            className="group relative mt-5 inline-block rounded px-5 py-2.5 font-medium text-white"
          >
            <span className="absolute top-0 left-0 h-full w-full rounded bg-gradient-to-br from-purple-600 to-blue-500 opacity-50 blur-sm filter"></span>
            <span className="absolute inset-0 mt-0.5 ml-0.5 h-full w-full rounded bg-gradient-to-br from-purple-600 to-blue-500 opacity-50 filter group-active:opacity-0"></span>
            <span className="absolute inset-0 h-full w-full rounded bg-gradient-to-br from-purple-600 to-blue-500 shadow-xl filter transition-all duration-200 ease-out group-hover:blur-sm group-active:opacity-0"></span>
            <span className="absolute inset-0 h-full w-full rounded bg-gradient-to-br from-blue-500 to-purple-600 transition duration-200 ease-out"></span>
            <span className="relative">Check Playlist</span>
          </a>
        </div>
      </div>

      {/* PRICING */}

      <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
          <div>
            <p className="mb-4 inline-block rounded-full bg-teal-400 px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900">
              Our Pricing
            </p>
          </div>
          <h2 className="mb-6 max-w-lg font-sans text-2xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="text-blue-gray-100 absolute top-0 left-0 z-0 -mt-8 -ml-20 hidden w-32 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
              >
                <defs>
                  <pattern
                    id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">
                Please read the faq for more information
              </span>
            </span>
          </h2>
          <p className="text-base text-white md:text-lg">
            Special price for my clients from Envato Studio, just send me your
            envato studio username when you purchased my services in Envato
            Studio.
          </p>
        </div>
        <div className="row-gap-5  sm:row-gap-10 grid gap-10 sm:mx-auto lg:grid-cols-4 lg:gap-2">
          <div className="flex flex-col justify-between rounded-lg border bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow sm:items-center">
            <div className="text-center">
              <div className="text-lg font-semibold">Envato Studio Clients</div>
              <div className="mt-2 flex items-center justify-center">
                <div className="mr-1 text-5xl font-bold">$75</div>
                <div className="text-xs text-gray-700">Per Template</div>
              </div>
              <div className="mt-2 space-y-3">
                <div className="text-gray-700">Delivery in 24hs</div>
                <div className="text-gray-700">2 revisions</div>
                <div className="text-gray-700">MP4 Format</div>
              </div>
            </div>
            <div>
              <a
                href="/"
                className="focus:shadow-outline mt-6 inline-flex h-12 w-full items-center justify-center rounded bg-gray-800 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-gray-900 focus:outline-none"
              >
                Buy
              </a>
              <p className="mt-6 max-w-xs text-xs text-gray-600 sm:mx-auto sm:max-w-sm sm:text-center sm:text-sm">
                Video Template and Music is not included.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-lg border bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow sm:items-center">
            <div className="text-center">
              <div className="text-lg font-semibold">Envato Elements</div>
              <div className="mt-2 flex items-center justify-center">
                <div className="mr-1 text-5xl font-bold">$100</div>
                <div className="text-xs text-gray-700">Per Template</div>
              </div>
              <div className="mt-2 space-y-3">
                <div className="text-gray-700">Delivery in 24hs</div>
                <div className="text-gray-700">2 revisions</div>
                <div className="text-gray-700">MP4 Format</div>
              </div>
            </div>
            <div>
              <a
                href="/"
                className="focus:shadow-outline mt-6 inline-flex h-12 w-full items-center justify-center rounded bg-gray-800 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-gray-900 focus:outline-none"
              >
                Buy
              </a>
              <p className="mt-6 max-w-xs text-xs text-gray-600 sm:mx-auto sm:max-w-sm sm:text-center sm:text-sm">
                Video Template and Music is included. Envato Elements License.
              </p>
            </div>
          </div>
          <div className="border-deep-purple-accent-400 relative flex flex-col justify-between rounded-lg border bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow sm:items-center">
            <div className="absolute inset-x-0 top-0 -mt-3 flex justify-center">
              <div className="inline-block rounded bg-gradient-to-br from-purple-600 to-blue-500 px-3 py-1 text-xs font-medium  uppercase tracking-wider text-white">
                Most Popular
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">
                Estandard Customization
              </div>
              <div className="mt-2 flex items-center justify-center">
                <div className="mr-1 text-5xl font-bold">$85</div>
                <div className="text-xs text-gray-700">Per Template</div>
              </div>
              <div className="mt-2 space-y-3">
                <div className="text-gray-700">Delivery in 24Hs</div>
                <div className="text-gray-700">2 Revisions</div>
                <div className="text-gray-700">MP4 Format</div>
              </div>
            </div>
            <div>
              <a
                href="/"
                className="focus:shadow-outline mt-6 inline-flex h-12 w-full items-center justify-center rounded bg-gradient-to-br from-purple-600 to-blue-500 px-6 font-medium tracking-wide text-white shadow-md transition  duration-200 focus:outline-none"
              >
                Buy
              </a>
              <p className="mt-6 max-w-xs text-xs text-gray-600 sm:mx-auto sm:max-w-sm sm:text-center sm:text-sm">
                Video Template and Music is not included
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg border bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow sm:items-center">
            <div className="text-center">
              <div className="text-lg font-semibold">
                Business Customization
              </div>
              <div className="mt-2 flex items-center justify-center">
                <div className="mr-1 text-5xl font-bold">$65</div>
                <div className="text-xs text-gray-700">
                  more than 3 templates per month
                </div>
              </div>
              <div className="mt-2 space-y-3">
                <div className="text-gray-700">2 revisions per template</div>
                <div className="text-gray-700">Delivery 24hs</div>
                <div className="text-gray-700">MP4 Format</div>
              </div>
            </div>
            <div>
              <a
                href="/"
                className="focus:shadow-outline mt-6 inline-flex h-12 w-full items-center justify-center rounded bg-gray-800 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-gray-900 focus:outline-none"
              >
                Buy Business
              </a>
              <p className="mt-6 max-w-xs text-xs text-gray-600 sm:mx-auto sm:max-w-sm sm:text-center sm:text-sm">
                Video Template and Music is not included
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQS */}

      <div class="flex flex-col p-2 md:mx-auto md:max-w-screen-xl md:p-8">
        <h2 class="mb-12 border-b-2 border-gray-100 text-3xl font-extrabold leading-9 text-white">
          FAQs
        </h2>
        <ul class="flex flex-wrap items-start gap-8">
          <li class="md:w-2/5">
            <p class="text-lg font-medium leading-6 text-white">
              What is Envato Elements Customization?
            </p>
            <p class="mt-2">
              <p class="text-base leading-6 text-gray-400">
                I have an Envato Elements Suscription, you can choose you desire
                After Effects Template from here:
                <a
                  className="hover:text-blue-400"
                  href="https://elements.envato.com/video-templates/compatible-with-after-effects"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Envato Elements AE templates
                </a>
                , the price is for the customization of only 1 template from
                Envato Elements and the AFTER EFFECTS PROJECT FILE IS NOT
                INCLUDED, IS ONLY INCLUDED THE FINAL RENDERED VIDEO. This Price
                include:
                <ul className="mt-2 p-5">
                  <li className="mb-2 list-disc text-white">
                    You can choose ONLY 1 After Effects Template from Envato
                    Elements
                  </li>

                  <li className="mb-2 list-disc text-white">
                    Template customization up to 2 minutes of duration, and up
                    to 2 hs of render time.
                  </li>

                  <li className="mb-2 list-disc text-white">
                    change text's,color and add images or videos in
                    placeholders, don`t include add more placeholders,text's or
                    extend/shorten duration of the template.
                  </li>

                  <li className="list-disc text-white">
                    After Effects Video Template and Music is included.
                  </li>
                </ul>
              </p>
            </p>
          </li>

          <li class="md:w-2/5">
            <p class="text-lg font-medium leading-6 text-white">
              Wich payment method do you accept?
            </p>
            <p class="mt-2">
              <p class="text-base leading-6 text-gray-400">
                I use Paypal, i send a detailed invoice, the payment is 100%
                upfront.
              </p>
            </p>
          </li>

          <li class="md:w-2/5">
            <p class="text-lg font-medium leading-6 text-white">
              What is Envato Studio Clients Customization?
            </p>
            <p class="mt-2">
              <p class="text-base leading-6 text-gray-400">
                Sadly the Envato Company will Close Envato Studio plataform in
                August 2022, this is a special price to all my clients from
                Envato Studio, if you are one of my clients just send me your
                envato studio username when you purchased my services in Envato
                Studio. This Price include:
                <ul className="mt-2 p-5">
                  <li className="mb-2 list-disc text-white">
                    Template customization up to 2 minutes of duration, and up
                    to 2 hs of render time.
                  </li>

                  <li className="mb-2 list-disc text-white">
                    change text's,color and add images or videos in
                    placeholders, don`t include add more placeholders,text's or
                    extend/shorten duration of the template.
                  </li>

                  <li className="list-disc text-white">
                    After effects Video Template and Music is NOT included.
                  </li>
                </ul>
              </p>
            </p>
          </li>
          <li class="md:w-2/5">
            <p class="text-lg font-medium leading-6 text-white">
              What is Standard Customization?
            </p>
            <p class="mt-2">
              <p class="text-base leading-6 text-gray-400">
                what i mean with Standard templates customization is you will
                get an exact video like the template preview, for example see
                this template{' '}
                <a
                  className="hover:text-blue-400"
                  href="https://videohive.net/item/corporate-presentation/22566708"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check Template
                </a>
                , you will get an exact video like the preview but with your
                texts and images, a video of 1m10sec wich is the duration of the
                template, this customization cost $85, template and music is NOT
                included.
                <br />
                This Price include:
                <ul className="mt-2 p-5">
                  <li className="mb-2 list-disc text-white">
                    Template customization up to 2 minutes of duration, and up
                    to 2 hs of render time.
                  </li>

                  <li className="mb-2 list-disc text-white">
                    change text's,color and add images or videos in
                    placeholders, don`t include add more placeholders,text's or
                    extend/shorten duration of the template.
                  </li>

                  <li className="list-disc text-white">
                    After Effects Video Template and Music is not included.
                  </li>
                </ul>
              </p>
            </p>
          </li>
          <li class="md:w-2/5">
            <p class="text-lg font-medium leading-6 text-white">
              What is Business Customization?
            </p>
            <p class="mt-2">
              <p class="text-base leading-6 text-gray-400">
                if you need customization of more than 3 to 10 templates per
                month the price is $65 per template, if you need more than 10
                templates customization per month contact me. This Price
                include:
                <ul className="mt-2 p-5">
                  <li className="mb-2 list-disc text-white">
                    Template customization up to 2 minutes of duration, and up
                    to 2 hs of render time.
                  </li>

                  <li className="mb-2 list-disc text-white">
                    change text's,color and add images or videos in
                    placeholders, don`t include add more placeholders,text's or
                    extend/shorten duration of the template.
                  </li>

                  <li className="list-disc text-white">
                    After Effects Video Template and Music is not included.
                  </li>
                </ul>
              </p>
            </p>
          </li>
          <li class="md:w-2/5">
            <p class="text-lg font-medium leading-6 text-white">
              What is Advance Customization?
            </p>
            <p class="mt-2">
              <p class="text-base leading-6 text-gray-400">
                This customization includes adding more things than the template
                allows, This include Extend,shorten or add more
                images/videos/texts to a template , customization of modular
                templates you can make your own story, see this mobile pack
                <a
                  className="hover:text-blue-400"
                  href="https://elements.envato.com/phone-app-promotion-toolkit-5UFHWQY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check Pack
                </a>
                ,with this type of template i can use differents elements
                included in the template to make you a custom video for your
                app, this is Advance Customization and cost $200, template and
                music from envato elements is included. This Price include:
                <ul className="mt-2 p-5">
                  <li className="mb-2 list-disc text-white">
                    Template customization up to 5 minutes of duration, and more
                    than 2 hs of render time.
                  </li>

                  <li className="mb-2 list-disc text-white">
                    Extend,shorten or add more images/videos/texts to a
                    template.
                  </li>

                  <li className="mb-2 list-disc text-white">
                    Customization of modular templates to fit your need
                  </li>

                  <li className="mb-2 list-disc text-white">
                    5 working days delivery time
                  </li>

                  <li className="list-disc text-white">
                    After Effects Video Template and Music is not included.
                  </li>
                </ul>
              </p>
            </p>
          </li>
          <li class="md:w-2/5">
            <p class="text-lg font-medium leading-6 text-white">
              Where can i buy After Effects Templates?
            </p>
            <p class="mt-2">
              <p class="text-base leading-6 text-gray-400">
                You can buy AE templates in any of this sites:
                <ul className="p-5">
                  <li className="mb-2 list-disc text-white">
                    <a
                      href="https://videohive.net"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Videohive
                    </a>
                  </li>

                  <li className="mb-2 list-disc text-white">
                    <a
                      href="https://motionarray.com/browse/after-effects-templates/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Motion Array
                    </a>
                  </li>

                  <li className="mb-2 list-disc text-white">
                    <a
                      href="https://www.motionelements.com/after-effects-templates"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MotionElements
                    </a>
                  </li>

                  <li className="mb-2 list-disc text-white">
                    <a
                      href="https://www.rocketstock.com/after-effects-templates/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      RocketStock
                    </a>
                  </li>
                </ul>
              </p>
            </p>
          </li>
        </ul>
      </div>

      <Modal onClose={handleOnClose} visible={mostrarModal} />
    </div>
  )
}

export default App
