import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Sustainability() {
  return (
    <Layout>
      <section className="bg-gray-200">
        <Link to="/sustainability/unum">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              left
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
        </Link>
      </section>
      <section className="bg-gray-400">
        <Link to="/caseStudies/vodafone">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <StaticImage
                className="object-cover object-center rounded"
                alt="hero"
                src="https://dummyimage.com/720x600/edf2f7/a5afbd"
                placeholder="tracedSVG"
                rotate="90"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              right
            </div>
          </div>
        </Link>
      </section>
      <section className="bg-gray-200">
        <Link to="/caseStudies/vodafone">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              left
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
        </Link>
      </section>
    </Layout>
  )
}
