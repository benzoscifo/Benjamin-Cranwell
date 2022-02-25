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
            <div className="flex w-full lg:w-1/5 justify-center">
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
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex-col">
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
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex-col">
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
      <section className="text-gray-900 body-font border-t border-gray-200">
        <h2 className="text-center text-4xl font-semibold text-green px-5 py-8">
          UX Designers and Sustainability
        </h2>
        <h3 className="container text-center sm:text-left text-2xl px-5 text-orange mx-auto">
          <div className="text-3xl font-semibold underline">
            How to make a difference
          </div>
        </h3>
        <div className="container text-gray-900 mx-auto flex px-5 py-10 sm:pt-8 sm:pb-24 md:flex-row flex-col items-center justify-center">
          <div className="w-full md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h3 className="font-semibold text-2xl text-gray-900 pb-2">
              Next Clothing Company
            </h3>

            <p className="pb-4">
              According to Statisa <i>Next.co.uk</i> is the most visited fashion
              website in the UK, with nearly{" "}
              <span className="text-orange font-bold">50m</span> visits in
              December alone.
            </p>
            <p className="pb-4">
              And from the screenshots shown here you can see that Next's
              homepage has an{" "}
              <span className="underline">
                extremely low performance rating
              </span>{" "}
              <span className="text-argos font-bold">(20%)</span> partly due to
              its uncompressed images and therefore having a lousy sustainable
              website
            </p>
            <p className="text-sm text-gray-700">
              <b>
                <q className="italic">
                  Cambridge Dictionary defines Sustainable as 'causing, or made
                  in a way that causes, little or no damage to the environment
                  and therefore able to continue for a long time.
                </q>
              </b>
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full text-center sm:text-left">
            <StaticImage
              className="object-cover object-center rounded"
              alt="next retail store"
              src="../images/next-shop.jpeg"
              placeholder="tracedSVG"
              rotate="90"
            />
          </div>
        </div>
      </section>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center justify-center">
          <div className="w-full md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h3 className="text-2xl font-medium text-gray-900 pb-2">
              So how can a UX Designer <span className="text-green">help?</span>
            </h3>

            <p className="pb-4">
              Firstly you could reduce the number of images on a page as it will
              reduce the amount of energy needed to transfer and download the
              files from a server.
            </p>
            <p className="pb-4">
              However if like the Next website images are vital to the success
              of the company then make sure they are{" "}
              <span className="text-green font-bold">compressed </span>so making
              their file size as small as can be.
            </p>
            <p>
              Another example is to have low resolution images as placeholders
              which are smaller in file size which as mentioned help reduce the
              energy cost on inital page load. Once the low fidelity images are
              loaded they are then replaced by high resolution images.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full text-center sm:text-left">
            <StaticImage
              className="object-cover object-center rounded"
              alt="next retail store"
              src="../images/squoosh.png"
              placeholder="tracedSVG"
              rotate="90"
            />
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
