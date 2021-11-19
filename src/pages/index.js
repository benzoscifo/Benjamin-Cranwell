import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I Design for our Future
            </h1>
            <p className="mb-8 leading-relaxed">
              Together we can build modern webpages to be beautiful, sustainable
              and impactful without hurting the planet.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <StaticImage
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600/edf2f7/a5afbd"
              placeholder="tracedSVG"
              rotate="90"
            />
          </div>
        </div>
      </section>
      <section className="text-gray-700 body-font border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Case Studies
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <Link
              className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3"
              to="/caseStudies"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex-col">
                <StaticImage
                  src="../images/greenfinch.jpeg"
                  className="bg-cover h-48"
                  layout="fullWidth"
                />
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="mb-4 text-2xl">My heading</h3>
                  <div class="mb-4 text-grey-darker text-sm flex-1">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                  <a
                    href="#"
                    class="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </Link>
            <Link
              className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3"
              to="/caseStudies"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex-col">
                <StaticImage
                  src="../images/greenfinch.jpeg"
                  className="bg-cover h-48"
                  layout="fullWidth"
                />
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="mb-4 text-2xl">My heading</h3>
                  <div class="mb-4 text-grey-darker text-sm flex-1">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                  <a
                    href="#"
                    class="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </Link>
            <Link
              className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3"
              to="/caseStudies"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex-col">
                <StaticImage
                  src="../images/greenfinch.jpeg"
                  className="bg-cover h-48"
                  layout="fullWidth"
                />
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="mb-4 text-2xl">My heading</h3>
                  <div class="mb-4 text-grey-darker text-sm flex-1">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                  <a
                    href="#"
                    class="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="text-gray-700 body-font border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Sustainability
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <Link
              className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3"
              to="/sustainability/unum"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex-col">
                <StaticImage
                  src="../images/greenfinch.jpeg"
                  className="bg-cover h-48"
                  layout="fullWidth"
                />
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="mb-4 text-2xl">My heading</h3>
                  <div class="mb-4 text-grey-darker text-sm flex-1">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                  <a
                    href="#"
                    class="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </Link>
            <Link
              className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3"
              to="/caseStudies"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex-col">
                <StaticImage
                  src="../images/greenfinch.jpeg"
                  className="bg-cover h-48"
                  layout="fullWidth"
                />
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="mb-4 text-2xl">My heading</h3>
                  <div class="mb-4 text-grey-darker text-sm flex-1">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                  <a
                    href="#"
                    class="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </Link>
            <Link
              className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3"
              to="/caseStudies"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex-col">
                <StaticImage
                  src="../images/greenfinch.jpeg"
                  className="bg-cover h-48"
                  layout="fullWidth"
                />
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="mb-4 text-2xl">My heading</h3>
                  <div class="mb-4 text-grey-darker text-sm flex-1">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                  <a
                    href="#"
                    class="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
