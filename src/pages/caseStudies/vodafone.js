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
            <b>to find toys on sale</b> because{" "}
            <b> she wants to save money on birthday presents</b>
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
        </div>
        <div>
          <StaticImage alt="business man" src="../../images/mobile-use.jpg" />
        </div>
      </div>
      <hr className="ml-6"></hr>
      <h2 className="text-3xl text-center font-bold my-8">Prototype</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <StaticImage
              alt="business man"
              src="../../images/wireframe-digital.png"
            />
          </div>
          <div>
            <StaticImage
              alt="business man"
              src="../../images/wireframe-digital-mobile.png"
            />
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-semibold">Paper</h2>
          <p className="pb-4">I started out with some rough designs</p>
          <h2 className="text-2xl font-semibold">Digital</h2>
          <p>As a /type of user/, I want to /action/, so that /benefit/.</p>
          <h2 className="text-2xl font-semibold">Problem Statement</h2>
          <p>
            Arnold is a busy executive who needs and easy app experience to hire
            a dog walker because he is not tech savvy Sawyer is a/an
            construction business owner (user characteristics) who needs to
            attend local trade show conferences (user need) because they need to
            network to find more clients (insight)
          </p>
        </div>
      </div>
      <section>
        <div className="container mx-auto px-5 py-24">
          <h2 className="text-4xl">UX Research</h2>
          <h3>Primary (do it yourself/usablity studies or surveys)</h3>

          <h3 className="text-3xl">User interviews/customer insights</h3>
          <p>
            I interviewed five individuals about their use of Food Delivery
            Apps. I asked a series of questions to find our their opinions,
            experiences of ordering food. Each participant had to use a food
            ordering app at least once a fortnight.
          </p>
          <p>Main points</p>
          <p>#</p>
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
              <h2>
                Single Working mother with 1 child. Orders perdominetly from 5
                local resturants twice a week
              </h2>
            </div>
            <div className="">
              <StaticImage
                className="object-cover object-center rounded"
                alt="business man"
                src="../../images/business-man.jpeg"
                width={80}
                aspectRatio="{4/3}"
              />
              <h2>
                Student living in shared accomodation orders once a week usually
                on weekends{" "}
              </h2>
            </div>
            <div className="">
              <StaticImage
                className="object-cover object-center rounded"
                alt="business man"
                src="../../images/business-man.jpeg"
                width={80}
                aspectRatio="{4/3}"
              />
              <h2>
                Working mother orders minimum three times a week for her family
                of four.
              </h2>
            </div>
            <div className="">
              <h3>Goals</h3>
              <p>paragraph 1</p>
              <p>paragraph 2</p>
              <p>paragraph 3</p>
              <h3>Pains</h3>
              <p></p>
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
          <h2 className="text-3xl">Goal statements</h2>
          <p>
            Our TradeConfernce app (product-what) will let users expand their
            business (perform specfic actions-what) which will affect how
            business owners connect with new clients (describe who the action
            will affect-who) by giving them the ability to connect with clients
            at local trade shows (describe how the action will positively affect
            users-why) We will measure effectineness by analyzing show
            attendance (describe how you will measure the impact){" "}
          </p>
          <h2 className="text-3xl">User flow</h2>
          <ul>
            <li>
              Action: opening the app, clicking on profile, booking a service
            </li>
            <li>Screens: homepage, booking confirmation page</li>
            <li>Decision: users must ask a question/make a decision</li>
            <li>User flow direction</li>
          </ul>
          <h3 className="text-3xl">Storyboards</h3>

          <ul>
            <li>character</li>
            <li>Scene</li>
            <li>Plot</li>
            <li>Narrative</li>
          </ul>
          <p>Big picture storyboards</p>
          <p>close up storyboards</p>
          <h2 className="text-3xl" id="wireframes">
            Wireframes
          </h2>
          <h3 className="text-3xl">
            Paper- low fidelity / show some iterations
          </h3>
          <h2 className="text-3xl">Digital- low fidelity</h2>
          <p>Figma/adobe</p>
          <h2 className="text-4xl">UX Research and Test Early Concepts</h2>
          <ul>
            <li>Planning UX research studies</li>
            <ul>
              <li>Title: the focus and reason for the study</li>
              <li>Author: name, title, email address</li>
              <li>Stakeholders:</li>
              <li>Date</li>
              <li>
                Project background: brief explaination of why app is being
                updated and what is begin tested with users
              </li>
              <li>
                Research goals: what we'd like to learn from the testing update
                and how the research results might affect our design decisions
              </li>
            </ul>
            <h3 className="text-3xl">Research Questions</h3>
            <p>5 research questions</p>
            <h3 className="text-3xl">KPIs</h3>
            <ul>
              <li>time on task</li>
              <li>Use of navigation vs search</li>
              <li>user error rates</li>
              <li>Drop off rates</li>
              <li>Conversion rates</li>
              <li>System Usability Scale</li>
            </ul>
            <li>Conducting research with usability studies</li>
            <li>Analyzing and synthesizing research results</li>
            <li>Sharing research insights for better designs</li>
          </ul>
          <h3 className="text-3xl">Methodology</h3>
          <ul>
            <li>Moderated or Remote</li>
            <li>Location</li>
            <li>Date</li>
            <li>length - 5 to 10 mins</li>
            <li>Primary research</li>
            <li>Secondary research</li>
            <li>Qualitative research</li>
            <li>Quantitative research</li>
            <li>Usability study</li>
          </ul>
          <h3 className="text-3xl">Participants</h3>
          <p>diversity</p>
          <h3 className="text-3xl">Script</h3>
          <ul>
            <li>questions/tasks for consistancy</li>
            <li>encourage discussion and deeper reflection</li>
            <li>WARM-UP</li>
            <li>Tasks - always ask follow up questions</li>
            <li>Wrap-up questions and closing remarks</li>
          </ul>
          <h3 className="text-3xl">schedule</h3>
        </div>
        <h3 className="text-4xl">Conducting research with usability studies</h3>
        <h4 className="text-3xl">Usability Study</h4>
        <ul>
          <li>Moderated/unmoderated</li>
        </ul>
        <h3 className="text-4xl">
          Analyzing and synthesizing research results
        </h3>
        <p>Gather, organise and reflect on data</p>
        <h4>Affinity diagrams</h4>
        <ul>
          <li>Put sticky notes into groups</li>
          <li>
            <h3>Identify patterns and themes</h3>
            <p>
              It was observed that 4 out of 5 participants had trouble finding
              the 3 dot sub-menu. This means that the 3 dot sub-menu is
              difficult to find for almost all users.
            </p>
            <p>
              Based on the theme that: users have trouble selecting toppings, an
              insight is: Add an "x" to remove topping after selected.
            </p>
          </li>
        </ul>
        <h3 className="text-4xl">
          Sharing research insights for better designs
        </h3>
        <p>Presentation</p>
        <h3 className="text-3xl">Change designs using new insights</h3>
        <p>From findings iterate over low-fidelity wireframes</p>
        <h2 className="text-5xl">High Fidelity Designs and Prototypes</h2>
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
      <section className="text-gray-700">
        <div className="container mx-auto px-5 py-24">
          <h3>Dave C.</h3>
          <table class="table-auto border border-seperate">
            <thead>
              <tr>
                <th className="border">1</th>
                <th className="border">Task</th>
                <th className="border">Click Path</th>
                <th className="border">Observations</th>
                <th className="border">Quotes</th>
                <th className="border">Task Completion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border text-center">2</td>
                <td className="border text-center">
                  Write the task number and directions here
                </td>
                <td className="border text-center">
                  Record what path the participant took to complete the task
                </td>
                <td className="border text-center">
                  Note down behaviours, opinions, and attitudes along with any
                  errors, issues or areas of confusion
                </td>
                <td className="border text-center">
                  Note any significant quotes(positive or negative)
                </td>
                <td className="border text-center">
                  Choose if the task was:
                  <ol>
                    <li>1 - easy to complete</li>
                    <li>2 - completed but with difficulty</li>
                    <li>3 - not completed</li>
                  </ol>
                </td>
              </tr>
              <tr class="bg-emerald-200">
                <td className="border text-center">2</td>
                <td className="border text-center">
                  Prompt 1: For the first task, I'd like you to open the app,
                  select 'Todays Top Pizza' and complete the order.
                </td>
                <td className="border text-center">
                  Home screen > Add to order > Order summary > Payment and
                  Pickup > Checkout > Confirmation
                </td>
                <td className="border text-center">
                  - Participant found the process of ordering the pizza of the
                  day straightforward and simple - Participant was familiar with
                  the checkout process
                </td>
                <td className="border text-center">
                  "I see the pizza of day here, so all I have to do is click add
                  to order and I should be good to go"
                </td>
                <td className="border text-center">1</td>
              </tr>
              <tr>
                <td className="border text-center">2</td>
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
