import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"

export default function vodafone() {
  return (
    <Layout>
      <section className="text-gray-700 body-font">
        <div className="bg-red-100 px-5 py-24 text-center">
          <StaticImage
            className="object-center"
            alt="fireworks"
            src="../../images/fireworks.jpg"
            layout="constrained"
            width={500}
            aspectRatio={4 / 3}
          />
        </div>
      </section>
      <section>
        <div className="container mx-auto px-5 py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-red-500 rounded shadow border p-6 w-64">
              <h5 className="text-3xl font-bold">Research Plan</h5>
            </div>
            <div className="bg-red-500 rounded shadow border p-6 w-64">
              <h5 className="text-3xl font-bold">Research</h5>
            </div>
            <div className="bg-red-500 rounded shadow border p-6 w-64">
              <h5 className="text-3xl font-bold">Define</h5>
            </div>
            <div className="bg-red-500 rounded shadow border p-6 w-64">
              <h5 className="text-3xl font-bold">Ideation</h5>
            </div>
            <div className="bg-red-500 rounded shadow border p-6 w-64">
              <h5 className="text-3xl font-bold">5</h5>
            </div>
            <div className="bg-red-500 rounded shadow border p-6 w-64">
              <h5 className="text-3xl font-bold">6</h5>
            </div>
            <div className="bg-red-500 rounded shadow border p-6 w-64">
              <h5 className="text-3xl font-bold">7</h5>
            </div>
            <div className="bg-red-500 rounded shadow border p-6 w-64">
              <h5 className="text-3xl font-bold">8</h5>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-5 py-24">
          <h2>1. Empathize</h2>
          <h3 className="text-3xl">Research Plan</h3>
          <h4 className="text-2xl">Background</h4>
          <p>what the research is about and why it's happening</p>
          <h5>Problem statement</h5>
          <h4 className="text-2xl">Objectives</h4>
          <p>what you want to learn</p>
          <h5>Understand</h5>
          <h4 className="text-2xl">Participants</h4>
          <h4 className="text-2xl">Research method</h4>
          <h5>Moderated</h5>
          <p>Introduction</p>
          <p>questions</p>
          <p>wrap up</p>
          <h4 className="text-2xl">Interview guide</h4>
          <h4 className="text-2xl">Timeline</h4>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-5 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2">
              <div className="flex flex-col">
                <div>
                  <h2>Project overview</h2>
                </div>
                <div>
                  <h3>sub heading</h3>
                  <ul className="list-disc">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>subheading</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
              <div>
                <h3>Case Studes Sections</h3>
                <ul>
                  <li>
                    <a href="#wireframes">Wireframes</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <div>
                  <h3>Role</h3>
                  <p>UX Designer</p>
                </div>
                <div>
                  <h3>Role</h3>
                  <p>UX Designer</p>
                </div>
                <div>
                  <h3>Role</h3>
                  <p>UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-5 py-24">
          <h2 className="text-4xl">Research</h2>
          <p>Primary (do it yourself/usablity studies or surveys)</p>
          <p>Secondary (articles)</p>

          <h3 className="text-3xl">User interviews</h3>
          <p>empathy map</p>

          <h3 className="text-3xl">Pain points</h3>
          <p>I need to keep my beer cold</p>
          <h3 className="text-3xl">Personas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            <div className="">
              <StaticImage
                className="object-cover object-center rounded"
                alt="business man"
                src="../../images/business-man.jpeg"
                width={80}
                aspectRatio="{4/3}"
              />
              <h2>1st Persona</h2>
            </div>
            <div className="">2nd Persona</div>
            <div className="">3rd Persona</div>
            <div className="">
              <h3>Goals</h3>
              <p>paragraph 1</p>
              <p>paragraph 2</p>
              <p>paragraph 3</p>
              <h3>Pains</h3>
              <p>paragraph 1</p>
              <p>paragraph 2</p>
              <p>paragraph 3</p>
            </div>
            <div className="">
              <h3>Goals</h3>
              <p>paragraph 1</p>
              <p>paragraph 2</p>
              <p>paragraph 3</p>
              <h3>Pains</h3>
              <p>paragraph 1</p>
              <p>paragraph 2</p>
              <p>paragraph 3</p>
            </div>
            <div className="">
              <h3>Goals</h3>
              <p>paragraph 1</p>
              <p>paragraph 2</p>
              <p>paragraph 3</p>
              <h3>Pains</h3>
              <p>paragraph 1</p>
              <p>paragraph 2</p>
              <p>paragraph 3</p>
            </div>
          </div>

          <h3 className="text-3xl">User Stories</h3>
          <p>
            fictional one sentence story told from the persona's point of view
          </p>
          <p>As a """", I want to """", so that """".</p>

          <h3 className="text-3xl">User journey</h3>

          <table class="table-auto border border-seperate">
            <thead>
              <tr>
                <th className="border">Action</th>
                <th className="border">Determin the subway line and route</th>
                <th className="border">
                  Find the newest station with accessibility
                </th>
                <th className="border">Buy a Ticket</th>
                <th className="border">Find the right platform</th>
                <th className="border">Board the subway</th>
                <th className="border">Find the right exit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border text-center">Task List</td>
                <td className="border text-center">Adam</td>
                <td className="border text-center">858</td>
                <td className="border text-center">
                  A Long and Winding Tour of the History of UI Frameworks and
                  Tools and the Impact on Design
                </td>
                <td className="border text-center">
                  A Long and Winding Tour of the History of UI Frameworks and
                  Tools and the Impact on Design
                </td>
                <td className="border text-center">Adam</td>
                <td className="border text-center">858</td>
              </tr>
              <tr class="bg-emerald-200">
                <td className="border text-center">Feeling Adjective</td>
                <td className="border text-center">Adam</td>
                <td className="border text-center">112</td>
                <td className="border text-center">
                  A Long and Winding Tour of the History of UI Frameworks and
                  Tools and the Impact on Design
                </td>
                <td className="border text-center">
                  A Long and Winding Tour of the History of UI Frameworks and
                  Tools and the Impact on Design
                </td>
                <td className="border text-center">Adam</td>
                <td className="border text-center">858</td>
              </tr>
              <tr>
                <td className="border text-center">
                  Improvement Opportunities
                </td>
                <td className="border text-center">Chris</td>
                <td className="border text-center">1,280</td>
                <td className="border text-center">
                  A Long and Winding Tour of the History of UI Frameworks and
                  Tools and the Impact on Design
                </td>
                <td className="border text-center">
                  A Long and Winding Tour of the History of UI Frameworks and
                  Tools and the Impact on Design
                </td>
                <td className="border text-center">Adam</td>
                <td className="border text-center">858</td>
              </tr>
            </tbody>
          </table>
          <h2 className="text-4xl">Define</h2>
          <h3 className="text-3xl">Problem Statement</h3>
          <p>
            Arnold is a busy executive who needs and easy app experience to hire
            a dog walker because he is not tech savvy
          </p>
          <p>
            Sawyer is a/an construction business owner (user characteristics)
            who needs to attend local trade show conferences (user need) because
            they need to network to find more clients (insight)
          </p>

          <h3 className="text-3xl">Hypothesis statement(have more than one)</h3>
          <p>
            If arnold downloads the dog walker app then they can utilize the
            simplified mode{" "}
          </p>
          <h3 className="text-3xl">Value propositions</h3>
          <p>
            value propostions summarize why a consumer should use a product or
            service
          </p>
          <ul>
            <li>
              What does your product do? Clearly explain the offering that your
              product provides users
            </li>
            <li>
              Why should the user care? Describe how your product addresses
              user's pain points
            </li>
          </ul>
          <h2 className="text-4xl">Ideation</h2>
          <p>Generating a broad set of ideas(assemble a team)</p>
          <h2 className="text-3xl">Competitive audits</h2>
          <ul>
            <li>Your product</li>
            <li>Direct competitor</li>
            <li>indirect competitor</li>
          </ul>
          <h2 className="text-3xl">Brainstorming design ideas</h2>
          <p>How might we? or Crazy Eights</p>
          <ul>
            <li>Large sheet paper</li>
            <li>Set timer to eight minutes</li>
            <li>let the ideas flow</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-5 py-24">
          <h2 classNames="text-3xl">Goal statements</h2>
          <p>
            Our TradeConfernce app (product-what) will let users expand their
            business (perform specfic actions-what) which will affect how
            business owners connect with new clients (describe who the action
            will affect-who) by giving them the ability to connect with clients
            at local trade shows (describe how the action will positively affect
            users-why) We will measure effectineness by analyzing show
            attendance (describe how you will measure the impact){" "}
          </p>
          <h2 className="text-3xl" id="wireframes">
            Wireframes
          </h2>
        </div>
      </section>
      <section className="text-gray-700">
        <div className="container mx-auto px-5 py-24">
          <div class="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-9 gap-4">
            <div className="border border-black rounded-sm p-8 lg:px-2 text-center">
              Empathize
            </div>
            <div className="hidden md:inline justify-self-center mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div className="border border-black rounded-sm p-8 lg:px-2 text-center">
              Empathize
            </div>
            <div className="hidden md:inline justify-self-center mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div className="border border-black rounded-sm p-8 lg:px-2 text-center">
              Empathize
            </div>
            <div className="hidden md:inline justify-self-center mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div className="border border-black rounded-sm p-8 lg:px-2 text-center">
              Empathize
            </div>
            <div className="hidden md:inline justify-self-center mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div className="border border-black rounded-sm p-8 lg:px-2 text-center">
              Empathize
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-700">
        <div className="container mx-auto px-5 py-24">
          <table class="table-auto border border-seperate">
            <thead>
              <tr>
                <th className="border">Title</th>
                <th className="border">Author</th>
                <th className="border">Views</th>
                <th className="border">review</th>
                <th className="border">help</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border text-center">Intro to CSS</td>
                <td className="border text-center">Adam</td>
                <td className="border text-center">858</td>
                <td className="border text-center">
                  A Long and Winding Tour of the History of UI Frameworks and
                  Tools and the Impact on Design
                </td>
                <td className="border text-center">
                  A Long and Winding Tour of the History of UI Frameworks and
                  Tools and the Impact on Design
                </td>
              </tr>
              <tr class="bg-emerald-200">
                <td className="border text-center">
                  A Long and Winding Tour of the History of UI Frameworks and
                  Tools and the Impact on Design
                </td>
                <td className="border text-center">Adam</td>
                <td className="border text-center">112</td>
                <td className="border text-center">
                  A Long and Winding Tour of the History of UI Frameworks and
                  Tools and the Impact on Design
                </td>
                <td className="border text-center">
                  A Long and Winding Tour of the History of UI Frameworks and
                  Tools and the Impact on Design
                </td>
              </tr>
              <tr>
                <td className="border text-center">Intro to JavaScript</td>
                <td className="border text-center">Chris</td>
                <td className="border text-center">1,280</td>
                <td className="border text-center">
                  A Long and Winding Tour of the History of UI Frameworks and
                  Tools and the Impact on Design
                </td>
                <td className="border text-center">
                  A Long and Winding Tour of the History of UI Frameworks and
                  Tools and the Impact on Design
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  )
}
