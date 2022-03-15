import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function Projects({ data }) {
  return (
    <Layout>
      <h1 className="sr-only">Case Studies Links</h1>
      <section className="bg-pastelBlue">
        <a
          id="argos"
          className="container mx-auto flex px-5 py-12 sm:pb-24 md:flex-row flex-col justify-center items-center text-3xl font-semibold"
        >
          <h2 className="md:w-1/2 flex flex-col md:text-left mb-16 md:mb-0 items-center text-argos text-center">
            Argos
            <Link
              className="block w-full text-center sm:w-1/2 text-argos hover:text-white border-2 border-argos hover:bg-argos py-2 px-6 rounded text-lg mt-6"
              to="/caseStudies/retail"
            >
              Read the Case Study
            </Link>
          </h2>
          <div className="md:w-1/2">
            <StaticImage
              className="object-cover object-center rounded"
              alt="argos logo"
              src="../../images/argos.png"
              rotate="90"
            />
          </div>
        </a>
      </section>
      <section className="bg-blueViolets">
        <a
          id="halfords"
          className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center"
        >
          <div className="md:w-1/2 sm:order-first order-last">
            <StaticImage
              className="object-cover object-center rounded"
              alt="hero"
              src="../../images/halfordslogophoto.png"
              rotate="90"
            />
          </div>
          <h2 className="md:w-1/2 flex flex-col md:text-left mb-16 sm:mt-0 mb-16 md:mb-0 items-center text-center text-orange text-3xl font-semibold">
            Halfords
            <Link
              className="block w-full text-center sm:w-1/2 text-orange hover:text-white border-2 border-orange hover:bg-orange py-2 px-6 rounded text-lg mt-6"
              to="/caseStudies/halfords"
            >
              Read the Case Study
            </Link>
          </h2>
        </a>
      </section>
      <section className="bg-pastelBlue">
        <a
          id="bloodhound"
          className="container mx-auto flex px-5 py-12 sm:pb-24 md:flex-row flex-col items-center text-3xl font-semibold"
        >
          <h2 className="md:w-1/2 flex flex-col md:text-left mb-16 md:mb-0 items-center text-center text-bloodhound">
            Bloodhound
            <Link
              className="block w-full text-center sm:w-1/2 text-argos hover:text-white border-2 border-argos hover:bg-argos py-2 px-6 rounded text-lg mt-6"
              to="/caseStudies/bloodhound"
            >
              Read the Case Study
            </Link>
          </h2>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="py-16">
              <StaticImage
                className="object-cover object-center rounded"
                alt="hero"
                src="../../images/bloodhound-logo-photo.png"
                rotate="90"
              />
            </div>
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
