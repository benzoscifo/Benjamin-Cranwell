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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2">
              <div className="flex flex-col">
                <div>
                  <h2>Heading</h2>
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
      <section className="text-gray-700">
        <div className="container mx-auto px-5 py-24">
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
