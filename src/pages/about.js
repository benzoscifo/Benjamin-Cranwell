import React from "react"
import Layout from "../components/Layout"
import "../styles/global.css"
import "./about.css"

export default function about() {
  return (
    <Layout>
      <header className="bg-header flex items-center justify-center pb-12"></header>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Born in <span className="text-green-400">Ireland</span> now living
              in <span className="text-blue-400">London</span> by way of
              <span className="text-yellow-400"> Australasia</span>
            </h1>
            <p className="mb-8 leading-relaxed">
              For the past seven years I have been working as a{" "}
              <b>Front-End Web Developer</b> at a Design and Development agency
              based in Brixton. My passion is mobile design and development, I
              am an advocate for mobile first designs and get frustrated at
              using websites on my phone that were built with mobile designs
              clearly as an after thought.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
            <p>
              During my time as a front-end developer I have worked closely
              along side our design team and delivery team in producing high
              quality products for large local and international companies. I
              have worked on small projects solo and worked on large projects in
              which myself and my collegues work closely with the client and
              their desgin team.
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              A little bit more about{" "}
              <span className="text-purple-400">me</span>
            </h1>
            <p className="mb-8 leading-relaxed">
              I am a father of two children. My daughter Artemis is 5 and my son
              Asteris is 2 and from the names you might of guessed that my
              partner Eva is Greek. I have lived in a few countries before
              finally settling in London. After finishing school in Ireland I
              went to New Zealand and stayed for 5 years living mainly in
              Auckland and afterwards I spent 10 years in Australia, living in
              Brisbane, Sydney and Wodonga. In my free time I play squash in my
              local club and am a Watford FC supporter.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
