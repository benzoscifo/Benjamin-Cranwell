import React from "react"
import Layout from "../components/Layout"
import "../styles/global.css"
import "./about.css"
import { StaticImage } from "gatsby-plugin-image"

export default function about() {
  return (
    <Layout>
      <div className="bg-pastelGreen py-10 px-20">
        <p className="text-3xl text-gray-400">
          UX Designer and Front-End Web Developer
        </p>
      </div>
      <div>
        <div className="flex flex-wrap justify-around text-center bg-pastelPink py-12">
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
      <div className="bg-pastelGreen px-4 py-12 mx-auto text-gray-400">
        <div className="flex justify-around">
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
        </div>
      </div>
    </Layout>
  )
}
