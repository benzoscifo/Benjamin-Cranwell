import React from "react"
import Layout from "../components/Layout"

export default function contact() {
  return (
    <Layout>
      <section className="text-gray-700">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <form
              className="w-full bg-white rounded-lg shadow-lg py-5 px-8"
              name="contact"
              method="post"
              data-netlify="true"
            >
              <div className="md:flex md:items-center mb-6">
                <label
                  htmlFor="name-id"
                  className="block text-gray-500 font-bold mb-1 md:mb-0  w-32"
                >
                  Your Name
                </label>
                <input
                  id="name-id"
                  type="text"
                  name="name"
                  className="flex-1 text-gray-700 shadow border rounded border-gray-300 focus:shadow-outline py-1 px-3 mb-3"
                />
              </div>
              <div className="md:flex md:items-center mb-6">
                <label
                  htmlFor="email-id"
                  className="block text-gray-500 font-bold mb-1 md:mb-0 w-32"
                >
                  Email
                </label>

                <input
                  id="email-id"
                  className="flex-1 text-gray-700 shadow border rounded border-gray-300 focus:shadow-outline py-1 px-3 mb-3"
                  type="email"
                  name="email"
                />
              </div>
              <div className="md:flex md:items-center mb-6">
                <label
                  htmlFor="message-id"
                  className="block text-gray-500 font-bold mb-1 md:mb-0 w-32"
                >
                  Message
                </label>

                <textarea
                  id="message-id"
                  name="message"
                  className="flex-1 text-gray-700 shadow border rounded border-gray-300 focus:shadow-outline py-1 px-3 mb-3"
                ></textarea>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3 text-right">
                  <button
                    className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline text-white font-bold py-2 px-8 rounded"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I Design for our Future
            </h1>
            <p className="mb-8 leading-relaxed">
              Together we can build modern webpages to be beautiful, sustainable
              and impactful without hurting the planet.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
