import React, { useState } from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { RoughNotation } from "react-rough-notation"
import "./index.css"

const Home = () => {
  const [show] = useState(true)
  return (
    <Layout>
      <section className="text-gray-700 body-font mt-20">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="w-full lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className=" sm:text-4xl text-3xl mb-8 font-medium text-gray-400">
              I build web pages to be sleek, sharp and{" "}
              <RoughNotation type="underline" show={show} color={"red"}>
                sustainable
              </RoughNotation>
            </h1>

            <div className="flex w-full lg:w-1/5 justify-center pb-6">
              <Link
                className="block w-full text-center text-pastelGreen hover:text-white border-2 border-pastelGreen py-2 px-6 hover:bg-darkPastelGreen rounded text-lg animate-pulse"
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
                rotate="90"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="text-gray-700 body-font mt-20">
        <div className="flex flex-wrap mx-auto pb-20 px-6 w-full max-w-screen-xl bg-darkPastelGreen rounded justify-center">
          <div className="flex flex-col text-center w-full mb-8 sm:mb-16">
            <h2 className="sm:text-3xl text-2xl font-semibold text-white mt-20">
              Projects
            </h2>
          </div>
          <div className="mini-card-grid">      
    <article className="mini-card module module-article article" id="mini-post-342750">
      <time datetime="2021-06-23" title="Originally published Jun 23, 2021">
        <strong>
          Project</strong> Mar 01, 2022 </time>
      <h3 className="mini-card-title">
          Next Online Fashion, Kids Clothes & Homeware 
      </h3>
      <Link className="pt-4" to="/caseStudies/next">
        <StaticImage
          src="../images/next-black.png"
          layout="constrained"
          className="rounded-lg"
        />
      </Link>
      <div className="author-row">
        <Link className="author-name" to="/caseStudies/next" >
          Heuristic Evaluation </Link>
      </div>
    </article>
    <article className="mini-card module module-article article" id="mini-post-342448">
    <time datetime="2021-06-23" title="Originally published Jun 23, 2021">
        <strong>
          Project
        </strong> 14 Feb 2022 </time>
      <h3 className="mini-card-title">
          British Broadcasting Corporation News
      </h3>
      <Link to="/caseStudies/bbc">
        <StaticImage
          src="../images/bbc-homepage2.png"
          layout="constrained"
          className="rounded-lg"
        />
      </Link>
      <div className="author-row">
        <Link className="author-name" to="/caseStudies/bbc" >
          Accessibility Evaluation </Link>
      </div>
    </article>
    <article className="mini-card module module-article article" id="mini-post-341982">
    <time datetime="2021-06-23" title="Originally published Jun 23, 2021">
        <strong>
          Project
        </strong> Feb 23, 2022 </time>
      <h3 className="mini-card-title">
          An app to help employers during the hiring process
      </h3>
      <Link to="/caseStudies/bloodhound">
        <StaticImage
          src="../images/bloodhound-large.png"
          layout="fullWidth"
          className="rounded-lg"
        />
      </Link>
      <div className="author-row">
        <Link className="author-name" to="/caseStudies/bloodhound" >
          Case Study </Link>
      </div>
    </article>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap mx-auto py-20 px-6 w-full max-w-screen-xl justify-around">
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
      </section>
    </Layout>
  )
}

export default Home
