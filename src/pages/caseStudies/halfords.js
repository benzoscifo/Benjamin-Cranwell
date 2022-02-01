import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"
import GbiBridged from "../bg-image"

export default function halfords() {
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <StaticImage
            alt="business man"
            src="../../images/halfords-vector-logo.png"
          />
        </div>
        <div className="p-8 text-center sm:text-left">
          <h2 className="text-2xl font-semibold">The Problem</h2>
          <p className="pb-4">
            Booking a mobile tire fitting is slow and confusing.
          </p>
          <h2 className="text-2xl font-semibold">Project Summary</h2>
          <p>
            I conducted a UX research review using a User Centered approach in
            order to find out user pain points and thus help produce a better
            experience when booking a mobile tire fitting.
          </p>
        </div>
      </div>
      <section>
        <div className="container mx-auto px-5 m-10">
          <h2 className="text-2xl font-semibold pb-4 text-center">
            User Centered Process
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <a
              href="#empathize"
              className="bg-charcoal hover:bg-orange rounded-full border p-3 text-center"
            >
              <button className="underline hover:underline text-white font-bold py-2 px-4">
                Empathize
              </button>
            </a>
            <a
              href="#define"
              className="bg-charcoal hover:bg-orange rounded-full border p-3 text-center"
            >
              <button className="underline hover:underline text-white font-bold py-2 px-4">
                Define
              </button>
            </a>
            <a
              href="#ideate"
              className="bg-charcoal hover:bg-orange rounded-full border p-3 text-center"
            >
              <button className="underline hover:underline text-white font-bold py-2 px-4">
                Ideate
              </button>
            </a>
            <a
              href="#prototype"
              className="bg-charcoal hover:bg-orange rounded-full border p-3 text-center"
            >
              <button className="underline hover:underline text-white font-bold py-2 px-4">
                Prototype
              </button>
            </a>
            <a
              href="#test"
              className="bg-charcoal hover:bg-orange rounded-full border p-3 text-center"
            >
              <button className="underline hover:underline text-white font-bold py-2 px-4">
                Test
              </button>
            </a>
          </div>
        </div>
      </section>
      <hr className="mt-6"></hr>
      <h2 className="text-3xl text-center font-bold my-8 text-orange">
        <a id="empathize">Empathize</a>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-8">
        <div className="p-8 text-center sm:text-left">
          <h2 className="text-2xl font-semibold">User Interviews</h2>
          <ul className="pb-6">
            <li>
              5 Participants from various backgrounds were chosen for initial
              feedback on using the Halfords website for car repairs.
            </li>
            <li>
              None of the participants had never used the Halfords site for car
              repairs. 2 of the participants had used the website to search of
              cycling accessories.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold">Pain Points</h2>
          <ul className="pb-6">
            <li className="ml-5">
              <b>1. </b>The call to action text on the Homepage is not clear.
            </li>
            <li className="ml-5">
              <b>2. </b>There wasn't a clear distinction between the Halfords
              e-commerce and Halfords Services
            </li>
            <li className="ml-5">
              <b>3. </b>
              Once your location is selected there is no button to book a
              service
            </li>
            <li className="ml-5">
              <b>4. </b>
              The checkout process is very confusing
            </li>
          </ul>
          <h2 className="text-2xl font-semibold">Empathy Map</h2>
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
              <StaticImage alt="women" src="../../images/persona.jpeg" />
            </div>
            <div>
              <h3 className="underline font-semibold">Goals</h3>
              <ul>
                <li>
                  <b>1. </b>To easily book a call out service to replace worn
                  tyres
                </li>
                <li>
                  <b>2. </b>To have a good selection of products at competitive
                  prices
                </li>
                <li>
                  <b>3. </b>To have a large appointment selection to fit in my
                  busy work schedule
                </li>
              </ul>
            </div>
            <div>
              <h3 className="underline font-semibold">Frustrations</h3>
              <ul>
                <li>
                  <b>1. </b>Not having time to have my car serviced
                </li>
                <li>
                  <b>2. </b>Not been able to find an appointment that works for
                  me
                </li>
                <li>
                  <b>3. </b>Websites wanted my to sign up to use their services
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <b>Name:</b> Ross
                </li>
                <li>
                  <b>Age:</b> 41
                </li>
                <li>
                  <b>Education:</b> Bachelors Undergradate
                </li>
                <li>
                  <b>Location:</b> London
                </li>
                <li>
                  <b>Family:</b> 1 child
                </li>
                <li>
                  <b>Occupation:</b> Digital Marketing
                </li>
              </ul>
            </div>
            <div col-span-2>
              <p>Ross</p>
            </div>
          </div>
        </div>
        <div className="p-8 text-center sm:text-left">
          <h2 className="text-2xl font-semibold">User Stories</h2>
          <p className="pb-4">
            <b>As a</b> father of one running my own business
            <br></br>
            <b>I want </b>
            to be able to book an appointment<br></br>
            <b>so that</b> I be confident that my car will be service at time
            that suits me.
          </p>
          <h2 className="text-2xl font-semibold">Personas</h2>
          <p>
            From the interviews conducted I created 3 personas. Ross a busy CEO
            is shown here, the other two personas were Ben a grandfather with
            two old cars and Magaly a busy city worker.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 mb-8">
        <h2 className="text-2xl text-center font-semibold mb-4">
          User Journey
        </h2>
        <div>
          <table class="table-auto border border-seperate">
            <thead>
              <tr>
                <th className="border">Action</th>
                <th className="border">Choose Tyre Services</th>
                <th className="border">Enter car details and location</th>
                <th className="border">Select correct tyre</th>
                <th className="border">Select appointment time</th>
                <th className="border">Confirm time and location</th>
                <th className="border">Pay and Checkout</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border text-center">
                  <b>Task List</b>
                </td>
                <td className="border text-center">
                  Scroll down homepage and select button
                </td>

                <td className="border text-center">
                  Enter car registration and postcode
                </td>
                <td className="border text-center">Select type of tyre</td>
                <td className="border text-center">
                  Choose an appropriate appointment time
                </td>
                <td className="border text-center">
                  Confirm tyre and appointment time
                </td>
                <td className="border text-center">Pay for service</td>
              </tr>
              <tr class="bg-emerald-200">
                <td className="border text-center">
                  <b>Feeling Adjective</b>
                </td>
                <td className="border text-center">
                  Confused with the wording of the call to action
                </td>
                <td className="border text-center">
                  Frustrated to what to do after entering location and car reg
                </td>
                <td className="border text-center">
                  Confused to where I make my final tyre selection
                </td>
                <td className="border text-center">
                  Annoyed that the mobile service wasn't pre selected
                </td>
                <td className="border text-center">
                  Annoyed that the date and time aren't shown in the basket
                  screen
                </td>
                <td className="border text-center">
                  Confused about the Apply button during the checkout
                </td>
              </tr>
              <tr>
                <td className="border text-center">
                  <b>Improvement Opportunities</b>
                </td>
                <td className="border text-center">
                  Use clear wording to book a mobile service
                </td>
                <td className="border text-center">
                  Have it clearly sign posted on what you must do next
                </td>
                <td className="border text-center">
                  Make it clear that viewing the selected tyre is the next step
                  in adding to your basket
                </td>
                <td className="border text-center">
                  Have Mobile service pre selected when you land on your chosen
                  tyre page
                </td>
                <td className="border text-center">
                  Display the date and time on users basket screen
                </td>
                <td className="border text-center">
                  Have a tooltip to make clear what certain buttons do
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr className="mt-6"></hr>
      <h2 className="text-3xl text-center font-bold my-8 text-orange">
        <a id="define">Define</a>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="p-8 text-center sm:text-left">
          <h2 className="text-2xl font-semibold">Problem Statement</h2>
          <p className="pb-4">
            <b>Ross</b> is a <b>busy executive </b> who needs
            <b>to easily book a mobile car service</b> because{" "}
            <b> he is very busy and unable to go to a car garage</b>
          </p>
          <h2 className="text-2xl font-semibold">Hypothesis Statement</h2>
          <p>
            <b>We believe that</b> clearer step process <b>for </b>Ross
            <b> will </b>allow for an easier and quicker appointment scheduling.
          </p>
        </div>
        <div>
          <StaticImage alt="business man" src="../../images/car-phone.jpg" />
        </div>
      </div>
      <hr className="mt-6"></hr>
      <div className="text-3xl text-center font-bold my-8 text-orange">
        <a id="ideate">Ideate</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-8">
        <div>
          <StaticImage alt="business man" src="../../images/kwik-fit.jpeg" />
        </div>
        <div className="p-8 text-center sm:text-left">
          <h2 className="text-2xl font-bold pb-4">Competetive Audit</h2>
          <h2 className="text-xl font-semibold">Objective</h2>
          <p className="pb-4">
            Audit industry competitors to compare against Halfords user
            experience
          </p>
          <h2 className="text-xl font-semibold">Research Questions</h2>
          <p className="pb-4">
            How do the other companies handle mobile type servicing.
          </p>
          <h2 className="text-xl font-semibold">Procedure</h2>
          <p>I reviewed three different areas of each of the companies</p>
          <ul>
            <li className="ml-5">
              <b>1. </b>Ease of booking
            </li>
            <li className="ml-5">
              <b>2. </b>Appointment available
            </li>
            <li className="ml-5">
              <b>3. </b>Prices
            </li>
          </ul>
        </div>
      </div>
      <table class="table-auto border border-seperate mb-8">
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
            <td className="border text-center">Kwik-Fit</td>
            <td className="border text-center">Direct</td>
            <td className="border text-center">www.kwik-fit.com</td>
            <td className="border text-center">
              A nice and clear User Experience when choosing tyres
            </td>
            <td className="border text-center">
              Very little choice in mobile appointments
            </td>
            <td className="border text-center">
              Not great for those needing an appointments urgently
            </td>
            <td className="border text-center">
              Improve appointment booking to increase completion rates
            </td>
          </tr>
          <tr class="bg-emerald-200">
            <td className="border text-center">Mobile Tyre Fitting London</td>
            <td className="border text-center">Direct</td>
            <td className="border text-center">www.uktyres.co.uk</td>
            <td className="border text-center">
              Nice and clear form wizard to show where in the checkout process
              you are
            </td>
            <td className="border text-center">
              Don't provide coverage to London Zone 4
            </td>
            <td className="border text-center">
              With minimal London coverage many Londoners viewing the site will
              be unable to use their service
            </td>
            <td className="border text-center">
              To be the number one mobile tyre service in London
            </td>
          </tr>
          <tr>
            <td className="border text-center">Blackcircles</td>
            <td className="border text-center">Direct</td>
            <td className="border text-center">www.blackcircles.com</td>
            <td className="border text-center">
              Earliest fitting date shown on each individual tyres
            </td>
            <td className="border text-center">
              Appointment timings are either AM or PM
            </td>
            <td className="border text-center">
              With vague appointment timings busy customers will go somewhere
              else rather than waiting around all day for a mechanic.
            </td>
            <td className="border text-center">
              Highlight the availability of your mechanics.
            </td>
          </tr>
        </tbody>
      </table>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="p-8 text-center sm:text-left">
          <h2 className="text-3xl font-semibold pb-4">Brainstorming</h2>
          <h2 className="text-2xl font-semibold">How Might We</h2>
          <ul className="pb-4">
            <li className="pb-2">
              <b>Amp up the good:</b> How might add to benefits to choosing
              Halfords tyres
            </li>
            <li className="pb-2">
              <b>Explore the opposite:</b> How might we make visiting the
              mechanics more attractive
            </li>
            <li className="pb-2">
              <b>Change a status quo:</b> How might we have people buy tyres
              other than because of MOT
            </li>
            <li className="pb-2">
              <b>Remove the bad:</b> How might we remove the difficultly in
              booking an appointment
            </li>
            <li className="pb-2">
              <b>Go after the adjective:</b> How might we the buying enjoyable
              rather than a chore
            </li>
            <li className="pb-2">
              <b>Question an assumption:</b> How might remove the need for an
              appointment
            </li>
            <li className="pb-2">
              <b>Create an analogy using the established need or context:</b>{" "}
              How might we make tyre purchasing like shopping on Amazon
            </li>
            <li>
              <b>Identify unexpected resources that can provide assistance:</b>{" "}
              How might we use your MOT information to prefill all your address
              and billing details
            </li>
          </ul>
          <h2 className="text-2xl font-semibold">Crazy Eights</h2>
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
          <StaticImage alt="business man" src="../../images/crazy-8.jpeg" />
        </div>
      </div>
      <hr className="mt-6"></hr>
      <h2 className="text-3xl text-center font-bold my-8 text-orange">
        <a id="prototype">Prototype</a>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-8">
        <div className="sm:order-first order-last">
          <StaticImage alt="user-flow" src="../../images/user-flow.png" />
        </div>
        <div className="p-8 text-center sm:text-left">
          <h2 className="text-3xl font-bold pb-2">
            StoryBoarding and Wireframing
          </h2>
          <h2 className="text-2xl font-semibold">Goal Statement</h2>
          <p className="pb-4">
            <b>Our</b> updated mobile appointment booking <b>will let users </b>{" "}
            quickly find and book a mechanic <b> which will affect </b> how
            easily it is for users to complete the checkout process <b> by</b>{" "}
            cutting out any ambiguous wording or unnecessary steps.{" "}
            <b>We will measure effectiveness by </b> completion rates.
          </p>
          <h2 className="text-2xl font-semibold">User Flow</h2>
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
        <div className="p-8 text-center sm:text-left">
          <div>
            <h2 className="text-3xl font-semibold pb-4">Storyboard</h2>
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
              <h2 className="text-3xl font-semibold pb-4">Wireframe</h2>
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
      <h2 className="text-3xl text-center font-bold my-8">
        Research Plan and Testing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-8">
        <div className="p-8 text-center sm:text-left">
          <div className="text-3xl font-semibold pb-4">Research Plan</div>
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
                  <b>Title:</b> Redesigning the Halfords Mobile Fitting Service
                  for Tyres in order to improve the user experience and increase
                  conversion rates
                </li>
                <li>
                  <b>Author:</b> Benjamin, UX researcher
                </li>
                <li>
                  <b>Date:</b> Jan 2022
                </li>
                <li>
                  <b>Project background:</b> I am tweaking the user experience
                  of booking of a mechanice
                </li>
                <li>
                  <b>Research goals:</b> Figure out if making some small changes
                  to the current process will improve the experience and
                  completion rate.
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
                  <b>1.</b> How do users find the information given when buying
                  tyres
                </li>
                <li>
                  <b>2.</b> What do users think of the booking process
                </li>
                <li>
                  <b>3.</b> What blockers did you encounter when trying to book
                  a mechanic
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-3 pb-2">
            <div className="bg-argos text-white text-center font-semibold text-xl">
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
                  Participants are a mix of people who are all car owners that
                  include new, used, large and small cars.
                </li>
                <li>
                  <b>2 Female, 2 males</b>, aged between 35 and 75 years old
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
                  <b>Prompt 1:</b> Open the Halfords website and select mobile
                  tyre fitting. As you scroll down the page talk to me on what
                  you see.
                  <ul className="pl-8 list-disc">
                    <li>
                      <b>Prompt 1 Follow up:</b> How easy was it find the button
                      to bring you to the mobile fitting section.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Prompt 2: </b>Enter your car registration and postcode,
                  then select tyre fitting.
                  <ul className="pl-8 list-disc">
                    <li>
                      <b>Prompt 2 Follow up:</b> How did you find this proces?,
                      was it easy?.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Prompt 3: </b> Select the tyre that you want
                  <ul className="pl-8 list-disc">
                    <li>
                      <b>Prompt 3 Follow up: </b> How did you feel when you
                      chose your tyres?
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Prompt 4:</b> Select an appointment day and time
                  <ul className="pl-8 list-disc">
                    <li>
                      <b>Prompt 4 Follow up: </b> How did you feel about the
                      choice and process of choosing an appointment?
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Prompt 4:</b> View basket and Checkout
                  <ul className="pl-8 list-disc">
                    <li>
                      <b>Prompt 4 Follow up: </b> Did you feel confident and
                      secure when finialising your appointment?
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
        <div className="p-8">
          <div className="text-3xl font-semibold text-center sm:text-left pb-4">
            Affinity Diagram
          </div>
          <p>
            Now its time to organise the data. Each post-it colour is a
            participants responses.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-8 text-center sm:text-left">
        <div className="p-8">
          <h3 className="text-3xl font-semibold mb-8">
            Affinity Grouping Diagram
          </h3>
          <h4 className="text-xl font-semibold">Patterns and Themes</h4>
          <ul className="mb-4">
            <li>
              It was observed that 4 out of 5 participants had some type of
              confusion on the steps they needed to take during the process.
            </li>
          </ul>
          <h4 className="text-xl font-semibold">Form insights</h4>
          <ul className="mb-4">
            <li>
              Based on the theme that{" "}
              <b>for some of the users the process steps aren't clear</b>, an
              insight is: there needs to be clearer sign posting when moving
              through the different sections of the booking process.
            </li>
          </ul>
          <h4 className="text-xl font-semibold">Recommendations</h4>
          <ul className="text-argos">
            <li>
              <b>1. </b>Remove duplication of entering car registration and
              postcode.
            </li>
            <li>
              <b>2. </b> Move mobile services cta buttons above the fold
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
      <h2 className="text-3xl text-center font-bold my-8 text-orange">
        <a id="test">Test</a>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 text-center">
        <div className="sm:order-first order-last">
          <StaticImage
            alt="argos mobile homepage"
            src="../../images/argos-wireframe.png"
          />
        </div>
        <div className="p-8 text-center sm:text-left">
          {" "}
          <div className="text-3xl font-semibold pb-4">
            High Fidelity Wireframes
          </div>
          <p>
            Once I went through the Affinity Diagrams and highlighted the
            patterns and themes, I tested my first High Fidelity wireframe and
            Prototype.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 text-center">
        <div className="p-8 text-center sm:text-left">
          <div className="text-3xl font-semibold pb-4">
            Updated High Fidelity Diagrams
          </div>
          <p>
            Feedback from the first Wireframes were that the links to the
            separate catagories could be placed into one carousel
          </p>
        </div>
        <div>
          <StaticImage
            alt="argos mobile homepage"
            src="../../images/argos-wireframe-update.png"
          />
        </div>
      </div>
    </Layout>
  )
}
