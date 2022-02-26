import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 pt-24 pb-20 md:flex-row flex-col items-center">
          <div className="w-full lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className=" sm:text-4xl text-3xl mb-8 font-medium text-gray-900">
              I build web pages to be sleek, sharp and sustainable
            </h1>
            <div className="animate-pulse flex w-full lg:w-1/5 justify-center">
              <Link
                className="block w-full text-center text-green hover:text-orange border-2 border-green py-2 px-6 hover:border-orange rounded text-lg"
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
                placeholder="tracedSVG"
                rotate="90"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="text-gray-700 body-font border-t border-gray-200">
        <div className="container px-5 pt-8 sm:pt-20 pb-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-8 sm:mb-16">
            <h2 className="sm:text-3xl text-2xl font-semibold text-green">
              Projects
            </h2>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex-col">
                <StaticImage
                  src="../images/argos.png"
                  className="bg-cover h-48"
                  layout="constrained"
                  width={700}
                  aspectRatio={16 / 9}
                />
                <div className="p-4 flex-1 flex flex-col text-center">
                  <h3 className="mb-4 text-2xl">Argos</h3>
                  <div className="mb-4 text-grey-darker text-sm flex-1">
                    <p>Making mobile use enjoyable.</p>
                  </div>
                  <div className="pt-2 text-xs text-grey no-underline tracking-wide">
                    <Link
                      className="block w-full text-center text-green hover:text-orange border-2 border-green py-2 px-6 focusring hover:border-orange rounded text-lg"
                      to="/caseStudies/retail"
                    >
                      Case Study
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex-col border border-beige-200">
                <StaticImage
                  src="../images/halfordslogo.jpeg"
                  className="bg-cover h-48"
                  layout="constrained"
                  width={700}
                  aspectRatio={16 / 9}
                />
                <div className="p-4 flex-1 flex flex-col text-center">
                  <h3 className="mb-4 text-2xl">Halfords</h3>
                  <div className="mb-4 text-grey-darker text-sm flex-1">
                    <p>Making Halfords the name for tyres.</p>
                  </div>
                  <div className="pt-2 text-xs text-grey no-underline tracking-wide">
                    <Link
                      className="block w-full text-center text-green hover:text-orange border-2 border-green py-2 px-6 focusring hover:border-orange rounded text-lg"
                      to="/caseStudies/halfords"
                    >
                      Case Study
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex-col border border-beige-200">
                <StaticImage
                  src="../images/bloodhound3.png"
                  className="bg-cover h-48"
                  layout="fullWidth"
                />
                <div className="p-4 flex-1 flex flex-col text-center">
                  <h3 className="mb-4 text-2xl">Bloodhound</h3>
                  <div className="mb-4 text-grey-darker text-sm flex-1">
                    <p>
                      An app for employers to help vet current or future
                      employees
                    </p>
                  </div>
                  <div className="pt-2 text-xs text-grey no-underline tracking-wide">
                    <Link
                      className="block w-full text-center text-green hover:text-orange border-2 border-green py-2 px-6 focusring hover:border-orange rounded text-lg"
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

      <div className="container px-4 py-12 mx-auto text-gray-400">
        <div className="flex justify-around">
          <div>
            <a
              href="https://www.linkedin.com/in/benjamin-cranwell-5945101a3"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <a
              href="https://medium.com/@benjamin_51824/developer-to-ux-designer-portfolio-d508cdbfeb6a"
              target="_blank"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
