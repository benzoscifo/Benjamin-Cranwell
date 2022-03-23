import React, { useState } from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { RoughNotation } from "react-rough-notation"

const Home = () => {
  const [show] = useState(true)
  return (
    <Layout>
      <section className="text-gray-700 body-font mt-20">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="w-full lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className=" sm:text-4xl text-3xl mb-8 font-medium text-gray-400">
              I build web pages to be sleek, sharp and{" "}
              <RoughNotation type="underline" show={show} color={"red"}>
                sustainable
              </RoughNotation>
            </h1>

            <div className="flex w-full lg:w-1/5 justify-center pb-6">
              <Link
                className="block w-full text-center text-pastelGreen hover:text-white border-2 border-pastelGreen py-2 px-6 hover:bg-darkPastelGreen rounded text-lg"
                to="/caseStudies"
              >
                My work
              </Link>
            </div>
          </div>
          <div className="w-full lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rounded-lg">
            <Link to="/about">
              <StaticImage
                className="object-cover object-center rounded"
                alt="hero"
                src="../images/benjamin.jpg"
                rotate="90"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="text-gray-700 body-font mt-20">
        <div className="flex flex-wrap mx-auto pb-20 px-6 w-full max-w-screen-xl bg-darkPastelGreen rounded">
          <div className="flex flex-col text-center w-full mb-8 sm:mb-16">
            <h2 className="sm:text-3xl text-2xl font-semibold text-white mt-20">
              Projects
            </h2>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex-col">
                <div>
                <StaticImage
                  src="../images/next-black.png"
                  className="bg-cover h-48"
                  layout="constrained"
                  width={700}
                  aspectRatio={16 / 9}
                />
                </div>
                <div className="p-4 flex-1 flex flex-col text-center">
                  <h3 className="mb-4 text-2xl">Next</h3>
                  <div className="mb-4 text-grey-darker text-sm flex-1">
                    <p className="text-lg">10 point Heuristic Review</p>
                  </div>
                  <div className="pt-2 text-xs text-grey no-underline tracking-wide">
                    <Link
                      className="block w-full text-center text-pastelGreen hover:text-white border-2 border-pastelGreen py-2 px-6 focusring hover:bg-darkPastelGreen rounded text-lg"
                      to="/caseStudies/next"
                    >
                      Heuristic Evaluation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex-col">
                <StaticImage
                  src="../images/bbc-homepage.png"
                  className="bg-cover h-48"
                  layout="constrained"
                  width={700}
                  aspectRatio={16 / 9}
                />
                <div className="p-4 flex-1 flex flex-col text-center">
                  <h3 className="mb-4 text-2xl">BBC News</h3>
                  <div className="mb-4 text-grey-darker text-sm flex-1">
                    <p className="text-lg">7 point Accessibility Review</p>
                  </div>
                  <div className="pt-2 text-xs text-grey no-underline tracking-wide">
                    <Link
                      className="block w-full text-center text-pastelGreen hover:text-white border-2 border-pastelGreen py-2 px-6 focusring hover:bg-darkPastelGreen rounded text-lg"
                      to="/caseStudies/bbc"
                    >
                      Accessibility Evaluation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex-col">
                <div className="py-4 md:py-7 lg:py-10">
                  <StaticImage
                    src="../images/bloodhound-logo.png"
                    className="bg-cover h-48"
                    layout="fullWidth"
                  />
                </div>
                <div className="px-4 pb-5 lg:pt-14 flex-1 flex flex-col text-center">
                  <h3 className="mb-4 text-2xl">Bloodhound</h3>
                  <div className="mb-3 text-grey-darker text-sm flex-1">
                    <p className="text-lg">
                      An app for employers to help vet current or future
                      employees
                    </p>
                  </div>
                  <div className="text-xs text-grey no-underline tracking-wide">
                    <Link
                      className="block w-full text-center text-pastelGreen hover:text-white border-2 border-pastelGreen py-2 px-6 focusring hover:bg-darkPastelGreen rounded text-lg"
                      to="/caseStudies/bloodhound"
                    >
                      Case Study
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap mx-auto py-20 px-6 w-full max-w-screen-xl justify-around">
          <div className="block text-center text-pastelGreen hover:text-white border-2 border-pastelGreen py-2 px-6 focusring hover:bg-darkPastelGreen rounded text-lg">
            <a
              href="https://www.linkedin.com/in/benjamin-cranwell-5945101a3"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div className="block text-center text-pastelGreen hover:text-white border-2 border-pastelGreen py-2 px-6 focusring hover:bg-darkPastelGreen rounded text-lg">
            <a
              href="https://medium.com/@benjamin_51824/developer-to-ux-designer-portfolio-d508cdbfeb6a"
              target="_blank"
            >
              Blog
            </a>
          </div>
      </section>
    </Layout>
  )
}

export default Home
