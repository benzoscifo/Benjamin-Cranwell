import React from "react"
import Layout from "../components/Layout"

export default function contact() {
  return (
    <Layout>
      <section className="text-gray-700">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="w-full md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <form
              accept-charset="UTF-8"
              action="https://getform.io/f/b9a6314e-2785-4a82-b122-b58dea000ee7"
              method="POST"
              target="_blank"
              className="bg-blue shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                    Name
                  </span>
                  <input
                    type="text"
                    name="text"
                    className="mt-1 p-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Enter name"
                  />
                </label>
              </div>
              <div className="mb-6">
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="mt-1 p-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Enter email"
                  />
                </label>
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="exampleInputMessage"
                >
                  Message
                </label>
                <textarea
                  className="
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      m-0
                    "
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-argos text-white rounded p-2 w-full"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full text-center sm:text-left">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Say hello
            </h1>
            <p className="mb-8 leading-relaxed">
              Send me a message and we can organise to catch up.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
