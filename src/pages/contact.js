import React from "react"
import Layout from "../components/Layout"

export default function contact() {
  return (
    <Layout>
      <section className="text-gray-700">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <form
              accept-charset="UTF-8"
              action="https://getform.io/f/b9a6314e-2785-4a82-b122-b58dea000ee7"
              method="POST"
              target="_blank"
            >
              <div class="form-group">
                <label for="exampleInputName">Name</label>
                <input
                  type="text"
                  name="fullname"
                  class="form-control"
                  id="exampleInputName"
                  placeholder="name"
                  required="required"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" required="required">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  className="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputMessage" required="required">
                  Message
                </label>
                <textarea
                  className="
        form-control
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
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button type="submit" className="bg-argos text-white rounded p-2">
                Submit
              </button>
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
