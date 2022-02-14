import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function Projects({ data }) {
  return (
    <Layout>
      <h1 className="sr-only">Case Studies Links</h1>
      <section className="bg-gray-200">
        <a
          id="argos"
          className="container mx-auto flex px-5 pt-24 pb-0 sm:pb-24 md:flex-row flex-col justify-center items-center text-3xl font-semibold"
        >
          <h2 className="md:w-1/2 flex flex-col md:text-left mb-16 md:mb-0 items-center text-center">
            Argos
            <Link
              className="block w-full text-center sm:w-1/2 text-white bg-green border-0 py-2 px-6 hover:bg-orange rounded text-lg mt-6"
              to="/caseStudies/retail"
            >
              Read the Case Study
            </Link>
          </h2>
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
          <h2 className="md:w-1/2 flex flex-col md:text-left mt-16 sm:mt-0 mb-16 md:mb-0 items-center text-center text-3xl font-semibold">
            Halfords
            <Link
              className="block w-full text-center sm:w-1/2 text-white bg-green border-0 py-2 px-6 hover:bg-orange rounded text-lg mt-6"
              to="/caseStudies/halfords"
            >
              Read the Case Study
            </Link>
          </h2>
        </a>
      </section>
      <section className="bg-gray-200">
        <a
          id="bloodhound"
          className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center text-3xl font-semibold"
        >
          <h2 className="md:w-1/2 flex flex-col md:text-left mb-16 md:mb-0 items-center text-center">
            Bloodhound
            <Link
              className="block w-full text-center sm:w-1/2 text-white bg-green border-0 py-2 px-6 hover:bg-orange rounded text-lg mt-6"
              to="/caseStudies/bloodhound"
            >
              Read the Case Study
            </Link>
          </h2>
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
