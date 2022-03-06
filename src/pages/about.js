import React from "react"
import Layout from "../components/Layout"
import "../styles/global.css"
import "./about.css"
import { StaticImage } from "gatsby-plugin-image"

export default function about() {
  return (
    <Layout>
      <div className="bg-darkGray py-10 px-20">
        <p className="text-3xl text-gray-400">
          UX Designer and Front-End Web Developer
        </p>
      </div>
      <div className="bg-black">
        <div className="flex flex-wrap justify-around text-center bg-black py-12">
          <div className="basis-1/3 bg-black p-1.5 rounded-3xl pb-10">
            <StaticImage alt="wikipedia" src="../images/wikipedia.png" />
          </div>
          <div className="basis-1/3 bg-black p-1.5 rounded-3xl pb-10">
            <StaticImage alt="bbc homepage" src="../images/bbc.png" />
          </div>
          <div className="basis-1/3 bg-black p-1.5 rounded-3xl pb-10">
            <StaticImage alt="imdb homepage" src="../images/imdb.png" />
          </div>
        </div>
      </div>
      <div className="bg-darkGray px-4 py-12 mx-auto text-gray-400">
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
