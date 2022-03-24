import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"

export default function () {
  return (
    <Layout>
      <h1 className="sr-only">Heuristic evaluation</h1>
      <section className="mt-8 sm:mt-14">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left self-center">
            <div className="pb-6"> 
              <a id="topOfPage" className="text-4xl sm:text-6xl font-serif font-extrabold">
              Next
              </a>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold">
                Heuristics Evaluation
            </h2>
            <p className="pb-4 text-base sm:text-xl">
              I chose the Next Fashion and Homeware website as it is the No 1. website in the UK for Fashion and Apparel.  With 27.1 million visits on Desktop and Mobile in Februray alone there is the possibility for small improvements to affect a large number of users. 
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold">The Methodology</h2>
            <p className="text-base sm:text-xl">
              Using the <a href="https://www.nngroup.com/articles/ten-usability-heuristics/" target="blank">Jakob Nielsen</a> 10 general principles laid out on their website systematically worked through each principle, testing it against the Next retail website. The 10 principles below show some good and bad practices with an explanation.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
      <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
        <div>
          <StaticImage
            alt="mobile images"
            src="../../images/white-Next.png"
            className="rounded-lg"
          />
        </div>
      </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold pb-6 pb-6">1. Visibility of system status</h2>
            <p className="text-base sm:text-xl pb-1.5">
              The system should always show the status of an on-going operation to the users until it is done.
            The Next checkout process doesn't show the user where in the process they are and what is left to do. There is a back chevron is the left hand corner but very little other sign posting.</p><p className="text-base sm:text-xl"> Because the Next checkout process is done over several separate pages an improvement to the checkout process would be to have a progress tracker to visually show where in the process they are and how much is left to do.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
        <StaticImage
        alt="mobile images"
        src="../../images/visibility-next.png"
        className="rounded-lg"
        />
        </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold pb-6">2. Match between system and the real world</h2>
            <p className="text-base sm:text-xl pb-1.5">
              Using designs that match the real world allows for easier understanding and interaction for the user. For example the bin on a laptop is an image or icon of a waste paper bin.</p><p className="text-base sm:text-xl"> Unfortunately the buttons in the Next checkout process don't follow this prinicple for interaction design. One problem with the Next buttons is that they don't look like buttons, they need to improve their size, shape and shadow.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
      <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
        <div>
          <StaticImage
            alt="mobile images"
            src="../../images/real-Next.png"
            className="rounded-lg"
          />
        </div>
      </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold pb-6">3. User control and freedom</h2>
            <p className="text-base sm:text-xl pb-1.5">
              The website should allow for the users to undo an action whether that is a mistake or because they have changed their mind. </p><p className="text-base sm:text-xl"> The Next website allows for this when wanting to remove an item from your basket. They have a clear edit button which gives the option to remove the item or save for later. 
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
      <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl justify-center">
        <div>
          <StaticImage
            alt="mobile images"
            src="../../images/control-Next.png"
            className="rounded-lg"
          />
        </div>
      </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold pb-6">4. Consistency and Standard</h2>
            <p className="text-base sm:text-xl pb-1.5">
              Consistency across the brand includes page components, interactions, colours, experience etc. Standards are those of the industry so users should be able to recognise and understand the icons Next uses as they will be the same as other brands and industries.
            </p>
            <p className="text-base sm:text-xl">
              Next keeps consistency over its extensive catalogue of products and pages. And importantly they continue this consistancy to their mobile app. They also use the Standard iconography for example the menu and basket icons. 
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
      <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
        <div>
          <StaticImage
            alt="mobile images"
            src="../../images/standard-next.png"
            className="rounded-lg"
          />
        </div>
      </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold pb-6">5. Error Prevention</h2>
            <p className="text-base sm:text-xl pb-1.5">
              Error prevention is the ability to prevent a problem occuring either by having a confirmation option or giving a message to inform the user what they need to do e.g. minimum character for a password.
            </p>
            <p className="text-base sm:text-xl">
              Next does a very poor job in Error Prevention during the sign up. Under the input box for password and email in small light grey font is the format needed to prevent an error when signing up which is very hard to read.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div>
            <StaticImage
              alt="mobile images"
              src="../../images/prevention-next.png"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold pb-6">6. Recognition rather than recall</h2>
            <p className="text-base sm:text-xl pb-1.5">
              Reducing the memory load of a user helps them complete their task quicker and reduces the chance of completion. 
            </p>
            <p className="text-base sm:text-xl">Next has a save for later option for items allowing the user to keep searching and using the app with the knowledge that they can always retrive their saved item whenever they need it.</p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div>
            <StaticImage
              alt="mobile images"
              src="../../images/recall-next.png"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold pb-6">7. Flexibility and efficiency of use</h2>
            <p className="text-base sm:text-xl pb-1.5">
              Flexibility and efficiency can mean keyboard shortcuts or touch gestures to complete a task.
            </p>
            <p className="text-base sm:text-xl">Next has a well laid out page stucture with the correct labelling allowing for screen readers to navigate the page for accessiblity users.</p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div>
            <StaticImage
              alt="mobile images"
              src="../../images/flexibility-next.png"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold pb-6">8. Aesthetic and Minimalist design</h2>
            <p className="text-base sm:text-xl pb-1.5">
              Add only relevant information for the user and avoid adding unnecessary content that doesn't add to user experience or task.
            </p>
            <p className="text-base sm:text-xl">
              On Next's mobile app Homepage they have designed the page to allow the user to navigate easily and seemlessly to diffenet areas of their product catalogue.  
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div>
            <StaticImage
              alt="mobile images"
              src="../../images/mini-next.png"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold pb-6">9. Help users recognise, diagnose and recover from errors</h2>
            <p className="text-base sm:text-xl pb-1.5">
              An error message with a good description and displaying at the time of input or action will help users complete their task. 
            </p>
            <p className="text-base sm:text-xl">Next shows simple and clear error messages at the time of input allowing for correction before moving to the next input</p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div>
            <StaticImage
              alt="mobile images"
              src="../../images/recover-next.png"
            />
          </div>
        </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold pb-6">10. Help and Documentation</h2>
            <p className="text-base sm:text-xl pb-1.5">
              It is important even for the best designed website's to have a help section to allow users find out further information for example how they can contact you and your policies on user data collection.
            </p>
            <p className="text-base sm:text-xl">
              Next's help page is well laid out with a contact section, search functionality and separate sections for returns, delivery and payments.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div>
            <StaticImage
              alt="mobile images"
              src="../../images/help-next.png"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-wrap mx-auto py-20 px-6 w-full max-w-screen-xl justify-around">
          <div className="block text-center text-pastelGreen hover:text-white border-2 border-pastelGreen py-2 px-6 focusring hover:bg-darkPastelGreen rounded text-lg">
            <a
              href="https://www.linkedin.com/in/benjamin-cranwell-5945101a3"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div className="block text-center text-pastelGreen hover:text-white border-2 border-pastelGreen py-2 px-6 focusring hover:bg-darkPastelGreen rounded text-lg">
            <a
              href="https://medium.com/@benjamin_51824/developer-to-ux-designer-portfolio-d508cdbfeb6a"
              target="_blank"
            >
              Blog
            </a>
          </div>
      </section> 
      <div className="text-center my-6">
        <a
          href="#topOfPage"
          className="bg-darkPastelGreen text-white hover:bg-white hover:border-darkPastelGreen hover:text-darkPastelGreen rounded-full border p-3"
        >
          <button className="font-bold py-4 px-8">
            Back to top
          </button>
        </a>
      </div>
    </Layout>
  )
}