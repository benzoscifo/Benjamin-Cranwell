import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"

export default function bloodhound() {
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="text-center self-center">
          <h2 className="text-6xl text-bloodhound font-extrabold">
            Bloodhound<br></br>
            <span className="text-4xl">app</span>
          </h2>
        </div>
        <div className="p-8 text-center sm:text-left self-center">
          <h2 className="text-2xl font-semibold">The Idea</h2>
          <p className="pb-4">
            The App is targeted towards Employers enabling them to be aware of
            any online behaviour their employees or potiental employees that may
            not fit into their company values. With GDPR rules rightfully
            protecting personal information only information that is freely
            available on the web will be displayed.
          </p>
          <h2 className="text-2xl font-semibold">Project Summary</h2>
          <p>
            Beginning with user interviews and understanding the needs of the
            User I defined the problem, made some low fidelity wireframes, ran
            user testing and finally produced high fidelity wireframes and
            protoype.
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
              className="bg-bloodhound hover:bg-blue rounded-full border p-3 text-center"
            >
              <button className="underline hover:underline text-white font-bold py-2 px-4">
                Empathize
              </button>
            </a>
            <a
              href="#define"
              className="bg-bloodhound hover:bg-blue rounded-full border p-3 text-center"
            >
              <button className="underline hover:underline text-white font-bold py-2 px-4">
                Define
              </button>
            </a>
            <a
              href="#ideate"
              className="bg-bloodhound  hover:bg-blue rounded-full border p-3 text-center"
            >
              <button className="underline text-white font-bold py-2 px-4">
                Ideate
              </button>
            </a>
            <a
              href="#prototype"
              className="bg-bloodhound hover:bg-blue rounded-full border p-3 text-center"
            >
              <button className="underline hover:underline text-white font-bold py-2 px-4">
                Prototype
              </button>
            </a>
            <a
              href="#test"
              className="bg-bloodhound hover:bg-blue rounded-full border p-3 text-center"
            >
              <button className="underline hover:underline text-white font-bold py-2 px-4">
                Test
              </button>
            </a>
          </div>
        </div>
      </section>
      <hr className="mt-6"></hr>
      <h2 className="text-5xl text-center font-bold my-16 text-blue">
        <a id="empathize">Empathize</a>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-8">
        <div className="p-8 text-center sm:text-left self-center">
          <h2 className="text-2xl font-semibold">User Interviews</h2>
          <ul className="pb-6">
            <li>
              2 Participants that are involved in Human Resourse from medium and
              large compaines were chosen for initial feedback on the App idea
              and what features they would like.
            </li>
            <li>
              All participants had used social media to run checks on potential
              employees and current employees. However none of the participants
              know of an app or have used an app to search someones social
              media.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold">Pain Points</h2>
          <ul className="pb-6">
            <li className="ml-5">
              <b>1. No app available in Europe due to GDPR rules</b>.
            </li>
            <li className="ml-5">
              <b>2. </b>Having to have separate social media accounts
            </li>
            <li className="ml-5">
              <b>3. </b>
              Not having time to go through all media posts
            </li>
            <li className="ml-5">
              <b>4. </b>
              Unable to view deleted posts and images
            </li>
          </ul>
          <h2 className="text-2xl font-semibold">Empathy Map</h2>
          <p className="pb-6">
            I broke down each interview separately and then combined them in a
            single aggregated Empathy map.
          </p>
        </div>
        <div className="text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="p-2">
              <div className="text-2xl font-semibold underline">Feels</div>
              <ul className="text-lg">
                <li>1. Feels its important to educate first </li>
                <li>2. Feels that she should'nt have to do this task</li>
                <li>3. Feels its an invasion of privicy</li>
                <li>
                  4. Feels that there are more important tasks to focus on
                </li>
              </ul>
            </div>
            <div className="p-2">
              <div className="text-2xl font-semibold underline">Says</div>
              <ul className="text-lg">
                <li>
                  1. Says thats it important for her company to maintain a good
                  image
                </li>
                <li>
                  2. Says her day is too busy to look through all social media
                  posts
                </li>
                <li>
                  3. Say that she wants more time to spend on more important
                  tasks
                </li>
                <li>
                  4. Says that it should be the responsiblity of the employee
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="p-2">
              <div className="text-2xl font-semibold underline">Does</div>
              <ul className="text-lg">
                <li>
                  1. Does a lot of reviewing forums that talk about workplaces
                </li>
                <li>
                  2. Does a lot of internal messaging about the dangers on
                  posting online
                </li>
                <li>
                  3. Does presentations to constantly update staff on the
                  company policies{" "}
                </li>
                <li>4. Does spend time researcing new platforms</li>
              </ul>
            </div>
            <div className="p-2">
              <div className="text-2xl font-semibold underline">Thinks</div>
              <ul className="text-lg">
                <li>
                  1. Thats it is possible wrong to be viewing peoples social
                  media
                </li>
                <li>2. Thinks it's impossible to review everything</li>
                <li>3. Thinks that people shouldn't be spyed on</li>
                <li>
                  4. Thinks that she needs more guidance on what is and isn't
                  acceptable
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-8">
        <div className="border-solid border-2 text-center sm:text-left p-8 sm:order-first order-last">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <StaticImage alt="women" src="../../images/femalePersona.png" />
            </div>
            <div>
              <h3 className="underline font-semibold">Goals</h3>
              <ul>
                <li>
                  <b>1. </b>To have access to all social media platforms in one
                  place
                </li>
                <li>
                  <b>2. </b>Be able to find any employee's public posts
                </li>
                <li>
                  <b>3. </b>Be able to filter by keywords
                </li>
              </ul>
            </div>
            <div>
              <h3 className="underline font-semibold">Frustrations</h3>
              <ul>
                <li>
                  <b>1. </b>Not having time to review all new and old images and
                  posts
                </li>
                <li>
                  <b>2. </b>Having to keep up-to-date with all new social media
                  platforms
                </li>
                <li>
                  <b>3. </b>Not being able to see deleted images and posts
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <b>Name:</b> Sarah
                </li>
                <li>
                  <b>Age:</b> 28
                </li>
                <li>
                  <b>Education:</b> Masters
                </li>
                <li>
                  <b>Location:</b> London
                </li>
                <li>
                  <b>Family:</b> No children
                </li>
                <li>
                  <b>Occupation:</b> Human Resources
                </li>
              </ul>
            </div>
            <div col-span-2>
              <p>Ross</p>
            </div>
          </div>
        </div>
        <div className="p-8 text-center sm:text-left self-center">
          <h2 className="text-2xl font-semibold">User Stories</h2>
          <p className="pb-4">
            <b>As an</b> employee working at a large company
            <br></br>
            <b>I want </b>
            to be able to review public post and images on social media<br></br>
            <b>so that</b> I prevent any possible issues for the company.
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
        <h2 className="text-2xl text-center font-semibold my-4">
          User Journey
        </h2>
        <div>
          <table class="table-auto border border-seperate">
            <thead>
              <tr>
                <th className="border">Action</th>
                <th className="border">Choose a person</th>
                <th className="border">Choose a social media platform</th>
                <th className="border">Scroll through images/text</th>
                <th className="border">Choose another social media platform</th>
                <th className="border">Scroll through images/text</th>
                <th className="border"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border text-center">
                  <b>Task List</b>
                </td>
                <td className="border text-center">Enter persons details</td>

                <td className="border text-center">
                  Select from the many social media platforms
                </td>
                <td className="border text-center">
                  Scroll through the many images and/or posts
                </td>
                <td className="border text-center">
                  Select another social media platform
                </td>
                <td className="border text-center">
                  Scroll through more images and/or posts
                </td>
                <td className="border text-center">Pay for service</td>
              </tr>
              <tr class="bg-emerald-200">
                <td className="border text-center">
                  <b>Feeling Adjective</b>
                </td>
                <td className="border text-center">
                  Annoyed that the user profile needs more details
                </td>
                <td className="border text-center">
                  Frustrated that there are so many social media platforms
                </td>
                <td className="border text-center">
                  Annoyed at having to scroll through endless photos and posts
                </td>
                <td className="border text-center">
                  Frustrated that they need to log into a new social media
                  platform
                </td>
                <td className="border text-center">
                  Annoyed at having to waste time scrolling through more images
                  and posts
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
                  Display more users profiles rather than asking for more
                  information of the person you are searching for
                </td>
                <td className="border text-center">
                  Have a single page displaying all the social media platforms
                </td>
                <td className="border text-center">
                  Have filtering so you can search keywords
                </td>
                <td className="border text-center">
                  Have a way to navigate easily to a new social media platform
                </td>
                <td className="border text-center">
                  Have image recognition to filter images
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
      <h2 className="text-5xl text-center font-bold my-16 text-bloodhound">
        <a id="define">Define</a>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="p-8 text-center sm:text-left self-center">
          <h2 className="text-2xl font-semibold">Problem Statement</h2>
          <p className="pb-4">
            <b>Ross</b> is a <b>CEO of a small start-up </b> who needs
            <b> to easily book a mobile car service</b> because{" "}
            <b> he is very busy and unable to go to a car garage</b>
          </p>
          <h2 className="text-2xl font-semibold">Hypothesis Statement</h2>
          <p>
            <b>We believe that</b> an app that can gather all social media posts
            in one place <b>for </b>Sarah
            <b> will </b> free up time by reducing the amount she needs to spend
            on social media platforms.
          </p>
        </div>
        <div>
          <StaticImage alt="business man" src="../../images/social-media.jpg" />
        </div>
      </div>
      <hr className="mt-6"></hr>
      <div className="text-5xl text-center font-bold my-16 text-bloodhound">
        <a id="ideate">Ideate</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-8">
        <div className="text-center self-center">
          <StaticImage
            alt="business man"
            src="../../images/socialCatfish.png"
          />
        </div>
        <div className="p-8 text-center sm:text-left">
          <h2 className="text-2xl font-bold pb-4">Competetive Audit</h2>
          <h2 className="text-xl font-semibold">Objective</h2>
          <p className="pb-4">
            Audit industry competitors to compare against other simplier apps
          </p>
          <h2 className="text-xl font-semibold">Research Questions</h2>
          <p className="pb-4">
            How do other companies handle searching for social media posts.
          </p>
          <h2 className="text-xl font-semibold">Procedure</h2>
          <p>
            I tried to reviewed three different areas of each of the companies
            apps
          </p>
          <ul className="text-bloodhound">
            <li className="ml-5">
              <b>1. </b>How far back you could see posts and images
            </li>
            <li className="ml-5">
              <b>2. </b>What social media platforms do they cover
            </li>
            <li className="ml-5">
              <b>3. </b>Are they able to see deleted posts and images
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="p-8 text-center sm:text-left self-center">
          <h2 className="text-3xl font-semibold pb-4">Brainstorming</h2>
          <h2 className="text-xl font-semibold">How Might We</h2>
          <ul className="pb-4">
            <li className="pb-2">
              <b className="text-bloodhound">Amp up the good:</b> How might we
              make searching for people a beneficial for the searchee
            </li>
            <li className="pb-2">
              <b className="text-bloodhound">Explore the opposite:</b> How might
              we make one large database
            </li>
            <li className="pb-2">
              <b className="text-bloodhound">Change a status quo:</b> How might
              we stop people posting images and posts on the internet
            </li>
            <li className="pb-2">
              <b className="text-bloodhound">Remove the bad:</b> How might we
              have no restriction on what we search for
            </li>
            <li className="pb-2">
              <b className="text-bloodhound">Go after the adjective:</b> How
              might we make profile search a legal practive
            </li>
            <li className="pb-2">
              <b className="text-bloodhound">Question an assumption:</b> How
              might we remove the need for social media
            </li>
            <li className="pb-2">
              <b className="text-bloodhound">
                Create an analogy using the established need or context:
              </b>{" "}
              How might we make searching posts and images like looking at
              Instagram
            </li>
            <li>
              <b className="text-bloodhound">
                Identify unexpected resources that can provide assistance:
              </b>{" "}
              How might we use your MOT information to prefill all your address
              and billing details
            </li>
          </ul>
          <h2 className="text-xl font-semibold">Crazy Eights</h2>
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
          <StaticImage
            alt="business man"
            src="../../images/bloodhound-crazy8.jpg"
          />
        </div>
      </div>
      <hr className="mt-6"></hr>
      <h2 className="text-5xl text-center font-bold my-16 text-bloodhound">
        <a id="prototype">Prototype</a>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-8">
        <div className="sm:order-first order-last">
          <StaticImage
            alt="user-flow"
            src="../../images/bloodhound-userflow.png"
          />
        </div>
        <div className="p-8 text-center sm:text-left self-center">
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
        <div className="p-8 text-center sm:text-left self-center">
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
          <StaticImage
            alt="storyboard"
            src="../../images/bloodhound-storyboard.jpg"
          />
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <StaticImage
            alt="wireframe"
            src="../../images/bloodhound-wireframe.jpg"
          />
        </div>

        <div>
          <div className="p-8">
            <StaticImage
              className="visible sm:invisible"
              alt="user-flow"
              src="../../images/arrow-up.jpg"
            />
            <h2 className="text-3xl font-semibold pb-4">Wireframe</h2>
            <p>Low Fidelity Wireframes</p>
            <p>
              With the research and brainstorming done the next step was to mock
              up some low fidelity wireframes.
            </p>
            <StaticImage
              className="invisible sm:visible"
              alt="user-flow"
              src="../../images/arrow.jpg"
            />

            <StaticImage
              className="m-2"
              alt="down arrow"
              src="../../images/arrow-down.jpg"
            />
          </div>
          <div className="p-8">
            <StaticImage
              alt="wireframe"
              src="../../images/bloodhound-low-wireframe.png"
            />
          </div>
        </div>
      </div>
      <hr className="mt-6"></hr>
      <h2 className="text-3xl text-center font-bold my-12">
        Research Plan and Testing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-8">
        <div className="p-8 text-center sm:text-left self-center">
          <div className="text-3xl font-semibold pb-4">Research Plan</div>
          <p>
            Now that the Low Fidelity Wireframes are done I set out a Research
            Plan
          </p>
        </div>
        <div>
          <div className="grid grid-cols-3 pb-2">
            <div className="bg-bloodhound text-white text-center pt-8 font-semibold text-xl">
              Introduction
            </div>
            <div className="col-span-2">
              <ul className="p-2">
                <li>
                  <b>Title:</b> Design an app that allows users to view
                  different social media content in one single place
                </li>
                <li>
                  <b>Author:</b> Benjamin, UX researcher
                </li>
                <li>
                  <b>Date:</b> Feb 2022
                </li>
                <li>
                  <b>Project background:</b> I am designing from scratch the
                  look and feel of the app
                </li>
                <li>
                  <b>Research goals:</b> To find out if users find the app easy
                  to use and beneficial.
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-3 pb-2">
            <div className="bg-bloodhound text-white text-center pt-8 font-semibold text-xl">
              Research questions
            </div>
            <div className="col-span-2">
              <ul className="p-2">
                <li>
                  <b>1.</b> Do users find the duration slider a helpful feature
                </li>
                <li>
                  <b>
                    2. How do they find the layout of the results from the
                    social media companies
                  </b>
                </li>
                <li>
                  <b>3.</b> Does the results page show clearly the individual
                  results
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-3 pb-2">
            <div className="bg-bloodhound text-white text-center font-semibold text-xl pt-4">
              Key Performance Indicators(KPIs)
            </div>
            <div className="col-span-2">
              <ul className="p-2">
                <li>
                  <b>1.</b> Time on task
                </li>
                <li>
                  <b>2.</b> Correct search result
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-3 pb-2">
            <div className="bg-bloodhound text-white text-center pt-8 font-semibold text-xl">
              Methodology
            </div>
            <div className="col-span-2">
              <ul className="p-2">
                <li>
                  <b>Moderated Usability Study</b>
                </li>
                <li>
                  <b>Location:</b> London
                </li>
                <li>
                  <b>Date:</b> February 2022
                </li>
                <li>
                  <b>2</b> participants complete several tasks while under
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
            <div className="bg-bloodhound text-white text-center pt-8 font-semibold text-xl">
              Participants
            </div>
            <div className="col-span-2">
              <ul className="p-2">
                <li>
                  Participants are two Human Resources employees that work in
                  large companies based out of London
                </li>
                <li>
                  <b>2 Females</b>, aged between 26 and 38 years old
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-3 pb-2">
            <div className="bg-bloodhound text-white text-center pt-8 font-semibold text-xl">
              Script
            </div>
            <div className="col-span-2">
              <ul className="p-2">
                <li>
                  <b>Prompt 1:</b> Open the App and enter the name Benjamin
                  Cranwell.
                  <ul className="pl-8 list-disc">
                    <li>
                      <b>Prompt 1 Follow up:</b> How did you find the search and
                      results function of the app.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Prompt 2: </b>Choose the user Benjamin Cranwell and
                  navigate to his profile page.
                  <ul className="pl-8 list-disc">
                    <li>
                      <b>Prompt 2 Follow up:</b> What do you think of the
                      profile page? Is there something missing that you would
                      like to see?.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Prompt 3: </b> Select the social media platform you want to
                  review
                  <ul className="pl-8 list-disc">
                    <li>
                      <b>Prompt 3 Follow up: </b> Tell me how you felt about the
                      process of reviewing the social media content? Is there a
                      different layout you would like to see?
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Prompt 4:</b> Filter the content by keywords
                  <ul className="pl-8 list-disc">
                    <li>
                      <b>Prompt 4 Follow up: </b> Was the filtering process as
                      you expected? Did it help in making the process easier?
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Prompt 4:</b> Change results from Most Recent to One Month
                  Old
                  <ul className="pl-8 list-disc">
                    <li>
                      <b>Prompt 4 Follow up: </b> How was is using the duration
                      slider feature? Was the results layout as you wanted it?
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
            src="../../images/bloodhound-affinity-diagram.png"
          />
        </div>
        <div className="p-8 self-center">
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
        <div className="p-8 self-center">
          <h3 className="text-3xl font-semibold mb-8">
            Affinity Grouping Diagram
          </h3>
          <h4 className="text-xl font-semibold">Patterns and Themes</h4>
          <ul className="mb-4">
            <li>
              It was observed that 2 out of 2 participants felt that the filter
              functionality needed to have more options.
            </li>
          </ul>
          <h4 className="text-xl font-semibold">Form insights</h4>
          <ul className="mb-4">
            <li>
              Based on the theme that{" "}
              <b>
                for all of the users the filter component wasn't detailed enough
              </b>
              , an insight is: there needs to be more filter options to search
              through posts.
            </li>
          </ul>
          <h4 className="text-xl font-semibold">Recommendations</h4>
          <ul className="text-bloodhound text-xl">
            <li>
              <b>1. </b>Add more filters options
            </li>
            <li>
              <b>2. </b> Allow to search multiple platforms at once
            </li>
          </ul>
        </div>
        <div>
          <StaticImage
            alt="infinity diagram"
            src="../../images/bloodhound-affinity-grouped-diagram.png"
          />
        </div>
      </div>
      <hr className="mt-6"></hr>
      <h2 className="text-5xl text-center font-bold my-16 text-bloodhound">
        <a id="test">Test</a>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 text-center">
        <div className="sm:order-first order-last">
          <StaticImage
            alt="bloodhound mobile homepage"
            src="../../images/bloodhound-high.png"
          />
        </div>
        <div className="p-8 text-center sm:text-left self-center">
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
        <div className="p-8 text-center sm:text-left self-center">
          <div className="text-3xl font-semibold pb-4">
            Updated High Fidelity Diagrams
          </div>
          <p>
            Feedback from the first Wireframes and Prototype showed that users
            wanted the search function on the page.
          </p>
        </div>
        <div className="mb-12">
          <StaticImage
            alt="bloodhound mobile homepage"
            src="../../images/bloodhound-high-update.png"
          />
        </div>
      </div>
    </Layout>
  )
}