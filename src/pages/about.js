import React from "react"
import Layout from "../components/Layout"
import "../styles/global.css"
import "./about.css"

export default function about() {
  return (
    <Layout>
      <header className="bg-header flex items-center justify-center h-80 pb-12">
        <div className="bg-white mx-4 p-4 text-center md:p-8">
          <p className="italic text-sm">November 1, 2019</p>
          <h1 className="text-5xl uppercase">Article Title</h1>
          <p className="text-lg">Benjmain</p>
        </div>
      </header>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I Design for our Future
            </h1>
            <p className="mb-8 leading-relaxed">
              Together we can build modern webpages to be beautiful, sustainable
              and impactful without hurting the planet.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
              tortor dignissim convallis aenean. Vel quam elementum pulvinar
              etiam non quam lacus suspendisse. Duis at consectetur lorem donec
              massa sapien faucibus. Porttitor eget dolor morbi non. Morbi
              tempus iaculis urna id volutpat lacus. Posuere lorem ipsum dolor
              sit amet consectetur. Quis viverra nibh cras pulvinar. Adipiscing
              elit pellentesque habitant morbi tristique. Erat nam at lectus
              urna duis. Mattis enim ut tellus elementum.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-quote flex items-center justify-center h-80 mx-auto">
        <blockquote className="bg-black mx-4 p-4 text-center text-white md:p-8">
          <p className="font-bold italic text-3xl">
            &ldquo;Large, bold pull quote. Hats. Very good.&rdquo;
          </p>
        </blockquote>
      </div>

      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I Design for our Future
            </h1>
            <p className="mb-8 leading-relaxed">
              Together we can build modern webpages to be beautiful, sustainable
              and impactful without hurting the planet.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
              tortor dignissim convallis aenean. Vel quam elementum pulvinar
              etiam non quam lacus suspendisse. Duis at consectetur lorem donec
              massa sapien faucibus. Porttitor eget dolor morbi non. Morbi
              tempus iaculis urna id volutpat lacus. Posuere lorem ipsum dolor
              sit amet consectetur. Quis viverra nibh cras pulvinar. Adipiscing
              elit pellentesque habitant morbi tristique. Erat nam at lectus
              urna duis. Mattis enim ut tellus elementum.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
