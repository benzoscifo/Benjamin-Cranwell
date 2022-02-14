import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"

export default function retail() {
  return (
    <Layout>
      <h1 className="sr-only">Argos Case Study</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <StaticImage alt="business man" src="../../images/argos-blue.png" />
        </div>
        <div className="p-8 text-center sm:text-left self-center">
          <h2>
            <a id="topOfPage" className="text-2xl font-semibold">
              The Problem
            </a>
          </h2>
          <p className="pb-4">
            When using the Argos website in mobile view I found the layout
            confusing and bloated which made it difficult to navigate.
          </p>
          <h2 className="text-2xl font-semibold">Project Summary</h2>
          <p>
            I conducted a UX research review using a User Centered approach in
            order to find out user pain points and thus design a new layout for
            a better User Experience; this research included Usability Testing,
            creating Personas, Wireframes and Prototyping.
          </p>
        </div>
      </div>
      <section>
        <div className="container mx-auto px-5 m-10">
          <h3 className="text-2xl font-semibold pb-4 text-center">
            Use the quick links below to navigate to the different sections
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <a
              href="#empathize"
              className="bg-argos hover:bg-argosLite rounded-full border p-3 text-center"
            >
              <button className="underline hover:underline text-white font-bold py-2 px-4">
                Empathize
              </button>
            </a>
            <a
              href="#define"
              className="bg-argos hover:bg-argosLite rounded-full border p-3 text-center"
            >
              <button className="underline hover:underline text-white font-bold py-2 px-4">
                Define
              </button>
            </a>
            <a
              href="#ideate"
              className="bg-argos hover:bg-argosLite rounded-full border p-3 text-center"
            >
              <button className="underline hover:underline text-white font-bold py-2 px-4">
                Ideate
              </button>
            </a>
            <a
              href="#prototype"
              className="bg-argos hover:bg-argosLite rounded-full border p-3 text-center"
            >
              <button className="underline hover:underline text-white font-bold py-2 px-4">
                Prototype
              </button>
            </a>
            <a
              href="#test"
              className="bg-argos hover:bg-argosLite rounded-full border p-3 text-center"
            >
              <button className="underline hover:underline text-white font-bold py-2 px-4">
                Testing
              </button>
            </a>
          </div>
        </div>
      </section>
      <hr className="mt-6"></hr>
      <h2 className="text-5xl text-center font-bold my-8 text-blue">
        <a id="empathize">Empathize</a>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-8">
        <div className="p-8 text-center sm:text-left self-center">
          <h3 className="text-2xl font-semibold">User Interviews</h3>
          <ul className="pb-6">
            <li>
              5 Participants from various backgrounds were chosen for initial
              feedback on using the Argos website.
            </li>
            <li>
              Each participant had to be regular users of the e-commerce site
              and they were asked on how they use the site, why and when. Notes
              were taken on what they liked and disliked about using the site.
            </li>
          </ul>
          <h3 className="text-2xl font-semibold">Main Pain Points</h3>
          <ul className="pb-6">
            <li className="ml-5">
              <b>1. </b>Returns procedure not easy to complete.
            </li>
            <li className="ml-5">
              <b>2. </b>Not knowing when different items were are on sale
            </li>
            <li className="ml-5">
              <b>3. </b>
              Showing stock is available but when checking out the finding out
              it wasn't local
            </li>
            <li className="ml-5">
              <b>4. </b>
              Checkout confirmation information not detailed enough
            </li>
          </ul>
          <h3 className="text-2xl font-semibold">Empathy Map</h3>
          <p className="pb-6">
            I broke down each interview separately and then combined them in a
            single aggregated Empathy map.
          </p>
        </div>
        <div className="text-center">
          <StaticImage alt="business man" src="../../images/empathy-map2.jpg" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-8">
        <div className="border-solid border-2 text-center sm:text-left p-8 sm:order-first order-last">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <StaticImage alt="women" src="../../images/woman-persona.jpeg" />
            </div>
            <div>
              <h3 className="underline font-semibold">Goals</h3>
              <ul>
                <li>
                  <b>1. </b>PreOrder Toys
                </li>
                <li>
                  <b>2. </b>Have a good selection on age appropiate toys already
                  purchased
                </li>
                <li>
                  <b>3. </b>Buy pre-selected toys when on sale
                </li>
              </ul>
            </div>
            <div>
              <h3 className="underline font-semibold">Frustrations</h3>
              <ul>
                <li>
                  <b>1. </b>Having to buy toys last minute
                </li>
                <li>
                  <b>2. </b>Not having a good selection of toys
                </li>
                <li>
                  <b>3. </b>Buying toys at full price{" "}
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <b>Name:</b> Eva
                </li>
                <li>
                  <b>Age:</b> 35
                </li>
                <li>
                  <b>Education:</b> PhD
                </li>
                <li>
                  <b>Location:</b> London
                </li>
                <li>
                  <b>Family:</b> 2 children
                </li>
                <li>
                  <b>Occupation:</b> Scientist
                </li>
              </ul>
            </div>
            <div col-span-2>
              <p>
                Eva is a working mother with two primary school children that
                attend a large number of parties throughout the year.
              </p>
            </div>
          </div>
        </div>
        <div className="p-8 text-center sm:text-left self-center">
          <h3 className="text-2xl font-semibold">User Stories</h3>
          <p className="pb-4">
            <b>As a</b> busy mother who regularly goes to kids birthday parties
            <br></br>
            <b>I want </b>
            to review sale items easily on my mobile device<br></br>
            <b>so that</b> I can stock up on birthday presents for the year.
          </p>
          <h3 className="text-2xl font-semibold">Personas</h3>
          <p>
            From the interviews conducted I created 3 personas. Eva a working
            mum is shown here, the other two personas were Una a grandmother of
            10 and John a working father of one.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 mb-8">
        <h3 className="text-2xl text-center font-semibold my-4">
          User Journey
        </h3>
        <div className="block sm:hidden">
          <table className="table-auto border border-seperate">
            <thead>
              <tr>
                <th className="border">Action</th>
                <th className="border">Task List</th>
                <th className="border">Feeling Adjective</th>
                <th className="border">Improvement Opportunities</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border text-center">
                  <b>Search Sale items</b>
                </td>
                <td className="border text-center">
                  Filter through Categories
                </td>
                <td className="border text-center">
                  Annoyed that she has to regularly look for toys
                </td>
                <td className="border text-center">
                  Update user with new sale items regularly
                </td>
              </tr>
              <tr>
                <td className="border text-center">
                  <b>Search for Present</b>
                </td>
                <td className="border text-center">
                  Filter through Age and Gender toys
                </td>
                <td className="border text-center">
                  Frustrated at searching through many irrelevant toys
                </td>
                <td className="border text-center">
                  Offer more filter options
                </td>
              </tr>
              <tr>
                <td className="border text-center">
                  <b>Select a Present</b>
                </td>
                <td className="border text-center">Select Toy or Toys</td>
                <td className="border text-center">
                  Worried about the quality and choice of present
                </td>
                <td className="border text-center">
                  Have a video showing the toys been used by children
                </td>
              </tr>
              <tr>
                <td className="border text-center">
                  <b>Go to Checkout</b>
                </td>
                <td className="border text-center">
                  Review selected items and availability
                </td>
                <td className="border text-center">
                  Worried that the present chosen isn't in her local Argos for
                  pick up
                </td>
                <td className="border text-center">
                  Have a filter option to show only toys in the users local
                  store
                </td>
              </tr>
              <tr>
                <td className="border text-center">
                  <b>Pay for Goods</b>
                </td>
                <td className="border text-center">Confirm items and Pay</td>
                <td className="border text-center">
                  Glad that the item has been chosen and is available
                </td>
                <td className="border text-center">
                  Allow several choices for payment
                </td>
              </tr>
              <tr>
                <td className="border text-center">
                  <b>Pick up items</b>
                </td>
                <td className="border text-center">Pick up items</td>
                <td className="border text-center">
                  Frustrated that she needs to dedicate time to pick up the
                  present
                </td>
                <td className="border text-center">
                  Have no minimum spend on same day delivery
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="hidden sm:block">
          <table className="table-auto border border-seperate">
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
                <td className="border text-center">
                  <b>Task List</b>
                </td>
                <td className="border text-center">
                  Filter through Categories
                </td>
                <td className="border text-center">
                  Filter through Age and Gender toys
                </td>
                <td className="border text-center">Select Toy or Toys</td>
                <td className="border text-center">
                  Review selected items and availability
                </td>
                <td className="border text-center">Confirm items and Pay</td>
                <td className="border text-center">Pick up items</td>
              </tr>
              <tr className="bg-emerald-200">
                <td className="border text-center">
                  <b>Feeling Adjective</b>
                </td>
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
                  <b>Improvement Opportunities</b>
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
                  Have no minimum spend on same day delivery
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr className="mt-6"></hr>
      <h2 className="text-5xl text-center font-bold my-8 text-blue">
        <a id="define">Define</a>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="p-8 text-center sm:text-left self-center">
          <h3 className="text-2xl font-semibold">Problem Statement</h3>
          <p className="pb-4">
            <b>Eva</b> is a <b>working mother</b> who needs{" "}
            <b>to easily find toys on sale</b> because{" "}
            <b> she finds the process stressful and time consuming</b>
          </p>
          <h3 className="text-2xl font-semibold">Hypothesis Statement</h3>
          <p>
            <b>We believe that</b> a simplified layout <b>for </b>Eva{" "}
            <b>will </b>allow for a smoother process in purchasing items.
          </p>
        </div>
        <div>
          <StaticImage alt="business man" src="../../images/mobile-use.jpg" />
        </div>
      </div>
      <hr className="mt-6"></hr>
      <h2 className="text-5xl text-center font-bold my-8 text-blue">
        <a id="ideate">Ideate</a>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-8">
        <div>
          <StaticImage alt="business man" src="../../images/amazon.jpg" />
        </div>
        <div className="p-8 text-center sm:text-left self-center">
          <h3 className="text-3xl font-bold pb-4">Competetive Audit</h3>
          <h4 className="text-2xl font-semibold">Objective</h4>
          <p className="pb-4">
            Audit industry competitors to compare against Argos user experience
          </p>
          <h4 className="text-2xl font-semibold">Research Questions</h4>
          <p className="pb-4">
            How do the other companies handle the search and filtering
            functionality.
          </p>
          <h4 className="text-2xl font-semibold">Procedure</h4>
          <p>I reviewed three different areas of each of the companies</p>
          <ul className="text-argos">
            <li className="ml-5">
              <b>1. </b>Homepage layout
            </li>
            <li className="ml-5">
              <b>2. </b>Search/Filter
            </li>
            <li className="ml-5">
              <b>3. </b>Checkout
            </li>
          </ul>
        </div>
      </div>
      <div className="block sm:hidden">
        <table className="table-auto border border-seperate">
          <thead>
            <tr>
              <th className="border">Competitive audit</th>
              <th className="border">
                <b>Smyths</b>
              </th>
              <th className="border">
                <b>Amazon</b>
              </th>
              <th className="border">
                <b>BarginMax</b>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border text-center">
                <b>Competitor type</b>
              </td>
              <td className="border text-center">Direct</td>
              <td className="border text-center">Direct</td>
              <td className="border text-center">Direct</td>
            </tr>
            <tr>
              <td className="border text-center">
                <b>Website</b>
              </td>
              <td className="border text-center">
                www.<br></br>smythstoys<br></br>.co.uk
              </td>
              <td className="border text-center">
                www.amazon<br></br>.co.uk
              </td>
              <td className="border text-center">
                www.<br></br>barginmax<br></br>.co.uk
              </td>
            </tr>
            <tr>
              <td className="border text-center">
                <b>Strengths</b>
              </td>
              <td className="border text-center">
                Good options for delivery and pick up, plus wide range of good
                quality toys
              </td>
              <td className="border text-center">
                Products ranging from all prices locally and international
              </td>
              <td className="border text-center">
                Large selection of medium and low priced toys <br></br>Low
                priced free delivery
              </td>
            </tr>
            <tr>
              <td className="border text-center">
                <b>Weaknesses</b>
              </td>
              <td className="border text-center">
                Significantly less stores than Argos
              </td>
              <td className="border text-center">No physical stores</td>
              <td className="border text-center">No physical stores</td>
            </tr>
            <tr>
              <td className="border text-center">
                <b>Gaps</b>
              </td>
              <td className="border text-center">
                Less ability to reach more people
              </td>
              <td className="border text-center">
                With no physical stores their is no ability to speak to someone
                physically about any issues or problems
              </td>
              <td className="border text-center">
                With no physical stores their is no ability to speak to someone
                physically about any issues or problems
              </td>
            </tr>
            <tr>
              <td className="border text-center">
                <b>Opportunities</b>
              </td>
              <td className="border text-center">
                Improve delivery options to entice more people to use Argos
              </td>
              <td className="border text-center">
                Improve the returns process
              </td>
              <td className="border text-center">
                Make the physical stores somewhere you want to visit
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="hidden sm:block">
        <table className="table-auto border border-seperate mb-8">
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
              <td className="border text-center">
                <b>Smyths</b>
              </td>
              <td className="border text-center">Direct</td>
              <td className="border text-center">www.smythstoys.co.uk</td>
              <td className="border text-center">
                Good options for delivery and pick up, plus wide range of good
                quality toys
              </td>
              <td className="border text-center">
                Significantly less stores than Argos
              </td>
              <td className="border text-center">
                Less ability to reach more people
              </td>
              <td className="border text-center">
                Improve delivery options to entice more people to use Argos
              </td>
            </tr>
            <tr className="bg-emerald-200">
              <td className="border text-center">
                <b>Amazon</b>
              </td>
              <td className="border text-center">Direct</td>
              <td className="border text-center">www.amazon.co.uk</td>
              <td className="border text-center">
                Products ranging from all prices locally and international
              </td>
              <td className="border text-center">No physical stores</td>
              <td className="border text-center">
                With no physical stores their is no ability to speak to someone
                physically about any issues or problems.
              </td>
              <td className="border text-center">
                Improve the returns process
              </td>
            </tr>
            <tr>
              <td className="border text-center">
                <b>BarginMax</b>
              </td>
              <td className="border text-center">Direct</td>
              <td className="border text-center">www.barginmax.co.uk</td>
              <td className="border text-center">
                Large selection of medium and low priced toys<br></br>
                Low priced free delivery
              </td>
              <td className="border text-center">No physical stores</td>
              <td className="border text-center">
                With no physical stores their is no ability to speak to someone
                physically about any issues or problems.
              </td>
              <td className="border text-center">
                Make the physical stores somewhere you want to visit.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="p-8 text-center sm:text-left self-center">
          <h3 className="text-3xl font-semibold pb-4">Brainstorming</h3>
          <h4 className="text-xl font-semibold">How Might We</h4>
          <ul className="pb-4">
            <li className="pb-2">
              <b className="text-argos">Amp up the good:</b> How might we create
              a fun search functionality
            </li>
            <li className="pb-2">
              <b className="text-argos">Explore the opposite:</b> How might we
              make it difficult to find items{" "}
            </li>
            <li className="pb-2">
              <b className="text-argos">Change a status quo:</b> How might we
              have catalogues sent to the customers
            </li>
            <li className="pb-2">
              <b className="text-argos">Remove the bad:</b> How might we remove
              the difficultly in finding the right gift
            </li>
            <li className="pb-2">
              <b className="text-argos">Go after the adjective:</b> How might we
              have searching for a gift stressless{" "}
            </li>
            <li className="pb-2">
              <b className="text-argos">Question an assumption:</b> How might
              remove the need for the search functionality
            </li>
            <li className="pb-2">
              <b className="text-argos">
                Create an analogy using the established need or context:
              </b>{" "}
              How might we choosing a gift like the weekly shop
            </li>
            <li>
              <b className="text-argos">
                Identify unexpected resources that can provide assistance:
              </b>{" "}
              How might we use previous purchases to help narrow down choices
            </li>
          </ul>
          <h4 className="text-xl font-semibold">Crazy Eights</h4>
          <p>I sketched some ideas on how the homepage may look like.</p>
          <StaticImage
            className="invisible sm:visible"
            alt="user-flow"
            src="../../images/arrow-right.jpg"
          />
          <StaticImage
            className="visible sm:invisible"
            alt="user-flow"
            src="../../images/arrow-down.jpg"
          />
        </div>
        <div>
          <StaticImage alt="business man" src="../../images/argos-crazy8.jpg" />
        </div>
      </div>
      <hr className="mt-6"></hr>
      <h2 className="text-5xl text-center font-bold my-8 text-blue">
        <a id="prototype">Prototype</a>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-8">
        <div className="sm:order-first order-last">
          <StaticImage alt="user-flow" src="../../images/user-flow.png" />
        </div>
        <div className="p-8 text-center sm:text-left self-center">
          <h3 className="text-3xl font-bold pb-2">
            StoryBoarding and Wireframing
          </h3>
          <h4 className="text-xl font-semibold">Goal Statement</h4>
          <p className="pb-4">
            <b>Our</b> mobile design <b>will let users </b> navigate the
            homepage <b> which will affect </b> how easily it is for users to
            find what they are looking for <b> by</b> cutting out any ambiguous
            or unnecessary content. <b>We will measure effectiveness by </b>{" "}
            completion rates.
          </p>
          <h4 className="text-xl font-semibold">User Flow</h4>
          <p>Opposite is the User Flow</p>
          <StaticImage
            className="invisible sm:visible"
            alt="user-flow"
            src="../../images/arrow.jpg"
          />
          <StaticImage
            className="visible sm:invisible"
            alt="user-flow"
            src="../../images/arrow-down.jpg"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-8">
        <div className="p-8 text-center sm:text-left self-center">
          <div>
            <h3 className="text-3xl font-semibold pb-4">Storyboard</h3>
            <p>
              I drew up a big picture storyboard to show what I had learned from
              research and to visually demonstrate the ideas to overcome the
              current problems.
            </p>
          </div>
        </div>
        <div>
          <StaticImage alt="storyboard" src="../../images/storyboard.jpeg" />
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <StaticImage alt="wireframe" src="../../images/wireframe2.jpeg" />
        </div>

        <div>
          <div className="grid grid-cols-2">
            <div className="p-8">
              <StaticImage
                className="visible sm:invisible"
                alt="user-flow"
                src="../../images/arrow-up.jpg"
              />
              <h3 className="text-3xl font-semibold pb-4">Wireframe</h3>
              <p>Low Fidelity Wireframes</p>
              <p>
                With the research and brainstorming done the next step was to
                mock up some low fidelity wireframes.
              </p>
              <StaticImage
                className="invisible sm:visible"
                alt="user-flow"
                src="../../images/arrow.jpg"
              />

              <StaticImage alt="user-flow" src="../../images/arrow-right.jpg" />
            </div>
            <div>
              <StaticImage
                alt="wireframe"
                src="../../images/wireframe-homepage.png"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-6"></hr>
      <h3 className="text-3xl text-center font-bold my-12">
        Research Plan and Testing
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-8">
        <div className="p-8 text-center sm:text-left self-center">
          <h4 className="text-3xl font-semibold pb-4">Research Plan</h4>
          <p>
            Now that the Low Fidelity Wireframes are done I set out a Research
            Plan
          </p>
        </div>
        <div>
          <div className="grid grid-cols-3 pb-2">
            <div className="bg-argos text-white text-center pt-8 font-semibold text-xl">
              Introduction
            </div>
            <div className="col-span-2">
              <ul className="p-2">
                <li>
                  <b>Title:</b> Redesigning the Argos Homepage in mobile view
                </li>
                <li>
                  <b>Author:</b> Benjamin, UX researcher
                </li>
                <li>
                  <b>Date:</b> Jan 2022
                </li>
                <li>
                  <b>Project background:</b> I am redesigning the Argos Homepage
                  in mobile view in order to improve user experience when buying
                  Toys
                </li>
                <li>
                  <b>Research goals:</b> Figure out if redesigning the mobile
                  layout creates a more enjoyable experience when buying toys.
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-3 pb-2">
            <div className="bg-argos text-white text-center pt-8 font-semibold text-xl">
              Research questions
            </div>
            <div className="col-span-2">
              <ul className="p-2">
                <li>
                  <b>1.</b> How do users search for toys e.g. search or
                  filtering
                </li>
                <li>
                  <b>2.</b> What do users think of the layout of the homepage in
                  mobile view
                </li>
                <li>
                  <b>3.</b> What steps do user make to complete a purchase
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-3 pb-2">
            <div className="bg-argos text-white text-center font-semibold text-xl pt-4">
              Key Performance Indicators(KPIs)
            </div>
            <div className="col-span-2">
              <ul className="p-2">
                <li>
                  <b>1.</b> Time on task
                </li>
                <li>
                  <b>2.</b> Conversion rates
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-3 pb-2">
            <div className="bg-argos text-white text-center pt-8 font-semibold text-xl">
              Methodology
            </div>
            <div className="col-span-2">
              <ul className="p-2">
                <li>
                  <b>Moderated Usability Study</b>
                </li>
                <li>
                  <b>Location:</b> London and Dublin
                </li>
                <li>
                  <b>Date:</b> Over Christmas/New Year 2021/2022
                </li>
                <li>
                  <b>Five</b> participants complete several tasks while under
                  observation{" "}
                </li>
                <li>
                  Each session will last <b>30 mins</b> and will include an
                  introduction, a list of tasks and some follow up questions.
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-3 pb-2">
            <div className="bg-argos text-white text-center pt-8 font-semibold text-xl">
              Participants
            </div>
            <div className="col-span-2">
              <ul className="p-2">
                <li>
                  Participants are a mix of people who regularly buy toys online
                  and others who have never bought toys online.
                </li>
                <li>
                  <b>4 Female, 1 male</b>, aged between 35 and 75 years old
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-3 pb-2">
            <div className="bg-argos text-white text-center pt-8 font-semibold text-xl">
              Script
            </div>
            <div className="col-span-2">
              <ul className="p-2">
                <li>
                  <b>Prompt 1:</b> Open the Argos website on your mobile and
                  scroll down the page. As you scroll down the page talk to me
                  on what you see.
                  <ul className="pl-8 list-disc">
                    <li>
                      <b>Prompt 1 Follow up:</b> How easy it to understand the
                      different features and what each feature will link to.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Prompt 2: </b>Navigate to the Toys section
                  <ul className="pl-8 list-disc">
                    <li>
                      <b>Prompt 2 Follow up:</b> How did you get to the Toys
                      section.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Prompt 3: </b> Search for Toys that are on discount
                  <ul className="pl-8 list-disc">
                    <li>
                      <b>Prompt 3 Follow up: </b> How did you find the Toys that
                      were discounted. How did you feel when searching through
                      the toys.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Prompt 4:</b> Select Toy and checkout
                  <ul className="pl-8 list-disc">
                    <li>
                      <b>Prompt 4 Follow up: </b> How easy was it to select and
                      buy. How did you feel about the whole process from start
                      to finish.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-8">
        <div className="sm:order-first order-last">
          <StaticImage
            alt="infinity diagram"
            src="../../images/affinity-diagram.png"
          />
        </div>
        <div className="p-8 self-center">
          <h4 className="text-3xl font-semibold text-center sm:text-left pb-4">
            Affinity Diagram
          </h4>
          <p>
            Now its time to organise the data. Each post-it colour is an
            individual participants response.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-8 text-center sm:text-left">
        <div className="p-8 self-center">
          <h4 className="text-3xl font-semibold mb-8">
            Affinity Grouping Diagram
          </h4>
          <h5 className="text-xl font-semibold">Patterns and Themes</h5>
          <ul className="mb-4">
            <li>
              It was observed that 5 out of 5 participants had some type of
              issue with the Homepage. This means that the homepage has a poor
              user experience.
            </li>
          </ul>
          <h5 className="text-xl font-semibold">Form insights</h5>
          <ul className="mb-4">
            <li>
              Based on the theme that{" "}
              <b>for all users the Homepage isn't clear</b>, an insight is:
              users need a homepage with a better layout and hierarchical
              structure.
            </li>
          </ul>
          <h5 className="text-xl font-semibold">Recommendations</h5>
          <ul className="text-argos text-xl">
            <li>
              <b>1. </b>
              Reduce the amount of links on the homepage.
            </li>
            <li>
              <b>2. </b>Move the Store Finder up the page
            </li>
          </ul>
        </div>
        <div>
          <StaticImage
            alt="infinity diagram"
            src="../../images/affinity-grouped-diagram.png"
          />
        </div>
      </div>
      <hr className="mt-6"></hr>
      <h2 className="text-5xl text-center font-bold my-8 text-blue">
        <a id="test">Test</a>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 text-center">
        <div className="sm:order-first order-last">
          <StaticImage
            alt="argos mobile homepage"
            src="../../images/argos-wireframe.png"
          />
        </div>
        <div className="p-8 text-center sm:text-left self-center">
          {" "}
          <h3 className="text-3xl font-semibold pb-4">
            High Fidelity Wireframes
          </h3>
          <p>
            Once I went through the Affinity Diagrams and highlighted the
            patterns and themes, I tested my first High Fidelity wireframe and
            Prototype.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 text-center">
        <div className="p-8 text-center sm:text-left self-center">
          <h3 className="text-3xl font-semibold pb-4">
            Updated High Fidelity Diagrams
          </h3>
          <p className="pb-4">
            Feedback from testing the first Wireframes were that the links to
            the separate catagories could be placed into one carousel.
          </p>
        </div>
        <div>
          <div className="text-2xl font-semibold text-argos pb-4">
            New Design
          </div>
          <StaticImage
            alt="argos mobile homepage"
            src="../../images/argos-wireframe-update.png"
          />
        </div>
      </div>
      <div className="text-center my-6">
        <a
          href="#topOfPage"
          className="bg-argos hover:bg-argosLite rounded-full border p-3"
        >
          <button className="underline hover:underline text-white font-bold py-4 px-8">
            Back to top
          </button>
        </a>
      </div>
    </Layout>
  )
}
