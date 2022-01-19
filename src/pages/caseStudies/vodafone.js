import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"
import GbiBridged from "../bg-image"

export default function vodafone() {
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <StaticImage alt="business man" src="../../images/argos-blue.png" />
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-semibold">The Problem</h2>
          <p className="pb-4">
            The Argos website in mobile view has a poor layout and it is
            confusing to navigate.
          </p>
          <h2 className="text-2xl font-semibold">Project Summary</h2>
          <p>
            I conducted UX research using the User Centerd approach in order to
            find out user pain points and help produce a better mobile user
            experience; this research included Usability Testing, creating
            Personas, Wireframes and Prototypes.
          </p>
        </div>
      </div>
      <section>
        <div className="container mx-auto px-5 m-10">
          <h2 className="text-2xl font-semibold">User Centered Process</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-argos rounded border p-3">
              <h5 className="text-lg font-bold text-white">Empathize</h5>
            </div>
            <div className="bg-argos rounded border p-3">
              <h5 className="text-lg font-bold text-white">Define</h5>
            </div>

            <a
              href="#ideate"
              className="bg-argos hover:bg-argosLite rounded border p-3 text-center"
            >
              <button class="bg-argos hover:underline text-white font-bold py-2 px-4 rounded">
                Ideate
              </button>
            </a>
            <div className="bg-argos rounded border p-3">
              <h5 className="text-lg font-bold text-white">Prototype</h5>
            </div>
            <div className="bg-argos rounded border p-3">
              <h5 className="text-lg font-bold text-white">Test</h5>
            </div>
          </div>
        </div>
      </section>
      <hr className="ml-6"></hr>
      <h2 className="text-3xl text-center font-bold my-8">Empathize</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="p-8">
          <h2 className="text-3xl font-semibold">My Process</h2>
          <h2 className="text-2xl font-semibold">User Interviews</h2>
          <ul>
            <li>5 Participants from various backgrounds</li>
            <li>
              Each participant was asked their experience in using e-commerce
              platforms.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold">Empathy Map</h2>I broke down
          each interview into separate Empathy maps and then combined them in a
          single aggregated empathy map
          <p></p>
          <h2 className="text-2xl font-semibold">Pain Points</h2>
          <ul className="list-disc">
            <p>Main Pain Points</p>
            <li>Returns procedure not easy</li>
            <li>Not knowing when items are on sale</li>
            <li>Showing stock is available but not in local area</li>
            <li>Checkout confirmation information not detailed enough</li>
          </ul>
        </div>
        <div className="text-center">
          <StaticImage alt="business man" src="../../images/empathy-map2.jpg" />
        </div>
      </div>
      <hr className="ml-6"></hr>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="border-solid border-2 text-center sm:text-left p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <StaticImage alt="women" src="../../images/woman-persona.jpeg" />
            </div>
            <div>
              <h3>Goals</h3>
              <ul className="list-disc">
                <li>PreOrder Toys</li>
                <li>1</li>
                <li>2</li>
              </ul>
            </div>
            <div>
              <h3>Frustraions</h3>
              <ul className="list-disc">
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc">
                <li>Name: Eva</li>
                <li>Age: 35</li>
                <li>Education: PhD</li>
                <li>Location: London</li>
                <li>Family: 2 children</li>
                <li>Scientist</li>
              </ul>
            </div>
            <div col-span-2>
              <p>
                Eva is a work from home mother with two primary school children
              </p>
            </div>
          </div>
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-semibold">Personas</h2>
          <p className="pb-4">
            Argos has designed its site Desktop first and forced its design into
            a mobile viewport.
          </p>
          <h2 className="text-2xl font-semibold">User Stories</h2>
          <p>
            <b>As a</b> busy mother who buys regulary goes to kids birthday
            parties<br></br>
            <b>I want</b>
            to review sale items easily on my mobile device<br></br>
            <b>so that</b>I can stock up on birthday presents for the year.
          </p>
        </div>
      </div>
      <hr className="ml-6"></hr>

      <div className="grid grid-cols-1">
        <h2 className="text-2xl text-center font-semibold">User Journey</h2>
        <div>
          <table class="table-auto border border-seperate">
            <thead>
              <tr>
                <th className="border">Action</th>
                <th className="border">Search Sale items</th>
                <th className="border">Search for Present</th>
                <th className="border">Select a Present</th>
                <th className="border">Go to Checkout</th>
                <th className="border">Pay for Goods</th>
                <th className="border">Pick up items</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border text-center">Task List</td>
                <td className="border text-center">
                  Filter through Categories
                </td>
                <td className="border text-center">
                  Filter through Age and Gender toys
                </td>
                <td className="border text-center">Select Toy or Toys</td>
                <td className="border text-center">
                  Review selected items and availablity
                </td>
                <td className="border text-center">Confirm items and Pay</td>
                <td className="border text-center">Pick up items</td>
              </tr>
              <tr class="bg-emerald-200">
                <td className="border text-center">Feeling Adjective</td>
                <td className="border text-center">
                  Annoyed that she has to regularly look for toys
                </td>
                <td className="border text-center">
                  Frustrated at searching through many irrelevant toys
                </td>
                <td className="border text-center">
                  Worried about the quality and choice of present
                </td>
                <td className="border text-center">
                  Worried that the present chosen isn't in her local Argos for
                  pick up
                </td>
                <td className="border text-center">
                  Glad that the item has been chosen and is available
                </td>
                <td className="border text-center">
                  Frustrated that she needs to dedicate time to pick up the
                  present
                </td>
              </tr>
              <tr>
                <td className="border text-center">
                  Improvement Opportunities
                </td>
                <td className="border text-center">
                  Update user with new sale items regularly
                </td>
                <td className="border text-center">
                  Offer more filter options
                </td>
                <td className="border text-center">
                  Have a video showing the toys been used by children
                </td>
                <td className="border text-center">
                  Have a filter option to show only toys in the users local
                  store
                </td>
                <td className="border text-center">
                  Allow several choices for payment
                </td>
                <td className="border text-center">
                  Have no minimum on same day delivery
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h2 className="text-3xl text-center font-bold my-8">Define</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="p-8">
          <h2 className="text-2xl font-semibold">Problem Statement</h2>
          <p className="pb-4">
            <b>Eva</b> is a <b>working mother</b> who needs{" "}
            <b>to easily find toys on sale</b> because{" "}
            <b> she finds the process stressful and time consuming</b>
          </p>
          <h2 className="text-2xl font-semibold">Hypothesis Statement</h2>
          <p>
            <b>We believe that</b> a simplified layout <b>for </b>Eva{" "}
            <b>will </b>allow for a smoother process in purchasing items.
          </p>
        </div>
        <div>
          <StaticImage alt="business man" src="../../images/mobile-use.jpg" />
        </div>
      </div>
      <hr className="ml-6"></hr>
      <div className="text-3xl text-center font-bold my-8">
        <a id="ideate">Ideate</a>
      </div>
      <hr className="ml-6"></hr>
      <h2 className="text-3xl text-center my-8">Competetive Audit</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <StaticImage alt="business man" src="../../images/amazon.jpg" />
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-semibold">Objective</h2>
          <p className="pb-4">
            Audit industry competitors to compare against Argos user experience
          </p>
          <h2 className="text-2xl font-semibold">Research Questions</h2>
          <p>
            How do the other companies handle the search and filtering
            functionality.
          </p>
          <h2 className="text-2xl font-semibold">Procedure</h2>
          <p>I reviewed three different areas of each of the companies</p>
          <ul className="list-disc">
            <li>homepage layout</li>
            <li>Search/Filter</li>
          </ul>
        </div>
      </div>
      <table class="table-auto border border-seperate">
        <thead>
          <tr>
            <th className="border">Competitive audit</th>
            <th className="border">Competitor type</th>
            <th className="border">Website</th>
            <th className="border">Strengths</th>
            <th className="border">Weaknesses</th>
            <th className="border">Gaps</th>
            <th className="border">Opportunities</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border text-center">Argos</td>
            <td className="border text-center"></td>
            <td className="border text-center">www.argos.co.uk</td>
            <td className="border text-center">
              A large catalogue of products from toys to homeware to clothing
              and much more
            </td>
            <td className="border text-center">
              Not many know brands and no choice for better quality products
            </td>
            <td className="border text-center">Adam</td>
            <td className="border text-center">858</td>
          </tr>
          <tr>
            <td className="border text-center">Smyths</td>
            <td className="border text-center">Direct</td>
            <td className="border text-center">www.smythstoys.co.uk</td>
            <td className="border text-center">
              Good options for delivery and pick up, plus wide range of good
              quality toys
            </td>
            <td className="border text-center">
              Significantly less stores than Argos
            </td>
            <td className="border text-center">Adam</td>
            <td className="border text-center">858</td>
          </tr>
          <tr class="bg-emerald-200">
            <td className="border text-center">Amazon</td>
            <td className="border text-center">Direct</td>
            <td className="border text-center">www.amazon.co.uk</td>
            <td className="border text-center">
              Products ranging from all prices locally and international
            </td>
            <td className="border text-center">No physical stores</td>
            <td className="border text-center">Adam</td>
            <td className="border text-center">858</td>
          </tr>
          <tr>
            <td className="border text-center">BarginMax</td>
            <td className="border text-center">Direct</td>
            <td className="border text-center">www.barginmax.co.uk</td>
            <td className="border text-center">
              Large selection of medium and low priced toys<br></br>
              Low priced free delivery
            </td>
            <td className="border text-center"></td>
            <td className="border text-center">Adam</td>
            <td className="border text-center">858</td>
          </tr>
        </tbody>
      </table>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="p-8">
          <h2 className="text-2xl font-semibold">Brainstorming</h2>
          <p className="pb-4">
            Argos has designed its site Desktop first and forced its design into
            a mobile viewport.
          </p>
          <h2 className="text-2xl font-semibold">Crazy Eights</h2>
          <h2 className="text-2xl font-semibold">How Might We</h2>
          <ul className="list-disc">
            <li>
              <b>
                Amp up the good: How might we create a fun search functionality
              </b>
            </li>
            <li>
              <b>
                Explore the opposite: How might we make it difficult to find
                items{" "}
              </b>
            </li>
            <li>
              <b>
                Change a status quo: How might we have catalogues sent to the
                customers
              </b>
            </li>
            <li>
              <b>
                Remove the bad: How might we remove the difficultly in finding
                the right gift
              </b>
            </li>
            <li>
              <b>
                Go after the adjective: How might we searching for a gift
                stressless{" "}
              </b>
            </li>
            <li>
              <b>
                Question an assumption: How might remove the need for the search
                functionality
              </b>
            </li>
            <li>
              <b>
                Create an analogy using the established need or context: How
                might we choosing a gift like the weekly shop
              </b>
            </li>
            <li>
              <b>
                Identify unexpected resources that can provide assistance: How
                might we use previous purchases to help narrow down choices
              </b>
            </li>
          </ul>
        </div>
        <div>
          <StaticImage alt="business man" src="../../images/crazy-8.jpeg" />
        </div>
      </div>
      <hr className="ml-6"></hr>
      <h2 className="text-3xl text-center font-bold my-8">
        StoryBoarding and Wireframing
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <StaticImage alt="user-flow" src="../../images/user-flow.png" />
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-semibold">User Flow</h2>

          <h2 className="text-2xl font-semibold">Goal Statement</h2>
          <p className="pb-4">
            <b>Our</b> mobile design <b>will let users </b> navigate the
            homepage <b> which will affect </b> how easily it is for users to
            find what they are looking for <b> by</b> cutting out any ambiguous
            or unnecessary content. <b>We will measure effectiveness by </b>{" "}
            completion rates.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <StaticImage alt="storyboard" src="../../images/storyboard.jpeg" />
        </div>
        <div>
          <div className="grid grid-cols-2">
            <h2 className="text-3xl font-semibold">Storyboard</h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <div className="grid grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold">Storyboard</h2>
            </div>
            <div>
              <StaticImage
                alt="wireframe"
                src="../../images/wireframe-homepage.png"
              />
            </div>
          </div>
        </div>
        <div>
          <StaticImage alt="wireframe" src="../../images/wireframe2.jpeg" />
        </div>
      </div>
    </Layout>
  )
}
