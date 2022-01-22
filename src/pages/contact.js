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
                <label for="exampleInputName">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  class="form-control"
                  id="exampleInputName"
                  placeholder="Enter your name and surname"
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
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">
                  Favourite Platform
                </label>
                <select
                  class="form-control"
                  id="exampleFormControlSelect1"
                  name="platform"
                  required="required"
                >
                  <option>Github</option>
                  <option>Gitlab</option>
                  <option>Bitbucket</option>
                </select>
              </div>

              <div class="form-group mt-3">
                <label class="mr-2">Upload your CV:</label>
                <input type="file" name="file" />
              </div>

              <button type="submit" class="btn btn-primary">
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
