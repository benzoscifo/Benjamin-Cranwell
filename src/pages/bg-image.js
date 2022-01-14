import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import "../styles/global.css"

const GbiBridged = () => {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(relativePath: { eq: "argos-blue.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `
  )

  const pluginImage = getImage(backgroundImage123)

  return (
    <BgImage image={pluginImage}>
      <div className="container mx-auto px-5 flex text-white flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 py-10 mx-0 sm:mr-20">
          <div className="font-bold mb-5">PROJECT</div>
          <div className="text-2xl">LEADING DESIGN FOR BOOSTED'S WEBSITE</div>
        </div>
        <div className="w-full sm:w-1/3 py-10 mx-0 sm:mr-20">
          <div className="font-bold mb-5">SUMMARY</div>
          <div>
            This is the story of Boosted website. It covers major design
            decisisons made over the past 4 years as well as some little ones
            that impacted conversiona.
          </div>
        </div>
        <div className="w-full sm:w-1/3 py-10 mx-0 sm:mr-20">
          <div>
            <h1 className="font-bold mb-5">Responsibilities</h1>
            <ul>
              <li>UX Design</li>
              <li>Web Design</li>
            </ul>
          </div>
        </div>
      </div>
    </BgImage>
  )
}

export default GbiBridged
