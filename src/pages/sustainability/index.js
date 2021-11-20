import React from "react"
import Layout from "../../components/Layout"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Sustainability({ data }) {
  return (
    <Layout>
      <section className="bg-green-200">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className=" md:w-1/2 flex flex-col md:text-left mb-16 md:mb-0 items-center text-center">
            left
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
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
      <section className="bg-green-400">
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
          <div className=" md:w-1/2 flex flex-col md:text-left mb-16 md:mb-0 items-center text-center">
            right
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </section>
      <section className="bg-green-200">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="md:w-1/2 flex flex-col md:text-left mb-16 md:mb-0 items-center text-center">
            left
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
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
    </Layout>
  )
}

//export page query
export const query = graphql`
  query {
    projects: allMarkdownRemark(
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
