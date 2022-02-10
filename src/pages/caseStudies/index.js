import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function Projects({ data }) {
  return (
    <Layout>
      <section className="bg-gray-200">
        {/* <div className="flex flex-row justify-around">
          <div className="">
            {" "}
            <a
              href="#argos"
              className="bg-argos hover:bg-argosLite rounded-lg border py-3 px-6"
            >
              <button className="underline hover:underline text-white font-bold py-4 px-8">
                Argos
              </button>
            </a>
          </div>
          <div className="">
            <a
              href="#halfords"
              className="bg-charcoal hover:bg-orange rounded-full border p-3"
            >
              <button className="underline hover:underline text-white font-bold py-4 px-8">
                Halfords
              </button>
            </a>
          </div>
          <div className="">
            <a
              href="#bloodhound"
              className="bg-bloodhound hover:bg-argosLite rounded-full border p-3"
            >
              <button className="underline hover:underline text-white font-bold py-4 px-8">
                Bloodhound App
              </button>
            </a>
          </div>
        </div> */}

        <a
          id="argos"
          className="container mx-auto flex px-5 pt-24 pb-0 sm:pb-24 md:flex-row flex-col justify-center items-center text-3xl font-semibold"
        >
          <div className="md:w-1/2 flex flex-col md:text-left mb-16 md:mb-0 items-center text-center">
            Argos
            <Link
              className="block w-full text-center sm:w-1/2 text-white bg-green border-0 py-2 px-6 focus:outline-none hover:bg-orange rounded text-lg mt-6"
              to="/caseStudies/retail"
            >
              Read the Case Study
            </Link>
          </div>
          <div className="md:w-1/2">
            <StaticImage
              className="object-cover object-center rounded"
              alt="hero"
              src="../../images/argos.png"
              placeholder="tracedSVG"
              rotate="90"
            />
          </div>
        </a>
      </section>
      <section className="bg-gray-400">
        <a
          id="halfords"
          className="container mx-auto flex px-5 pb-0 sm:pb-24 md:flex-row flex-col items-center"
        >
          <div className="md:w-1/2 sm:order-first order-last">
            <StaticImage
              className="object-cover object-center rounded"
              alt="hero"
              src="../../images/halfordslogo.jpeg"
              placeholder="tracedSVG"
              rotate="90"
            />
          </div>
          <div className="md:w-1/2 flex flex-col md:text-left mb-16 md:mb-0 items-center text-center text-3xl font-semibold">
            Halfords
            <Link
              className="block w-full text-center sm:w-1/2 text-white bg-green border-0 py-2 px-6 focus:outline-none hover:bg-orange rounded text-lg mt-6"
              to="/caseStudies/halfords"
            >
              Read the Case Study
            </Link>
          </div>
        </a>
      </section>
      <section className="bg-gray-200">
        <a
          id="bloodhound"
          className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center text-3xl font-semibold"
        >
          <div className="md:w-1/2 flex flex-col md:text-left mb-16 md:mb-0 items-center text-center">
            Bloodhound
            <Link
              className="block w-full text-center sm:w-1/2 text-white bg-green border-0 py-2 px-6 focus:outline-none hover:bg-orange rounded text-lg mt-6"
              to="/caseStudies/bloodhound"
            >
              Read the Case Study
            </Link>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <StaticImage
              className="object-cover object-center rounded"
              alt="hero"
              src="../../images/bloodhound3.png"
              placeholder="tracedSVG"
              rotate="90"
            />
          </div>
        </a>
      </section>
    </Layout>
  )
}

//export page query
export const query = graphql`
  query {
    caseStudies: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              gatsbyImageData(
                width: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
