import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"

export default function () {
  return (
    <Layout>
      <h1 className="sr-only">Accessibility Review</h1>
      <section className="mt-14">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left self-center">
            <div className="pb-6"> 
              <a id="topOfPage" className="text-6xl text-bbc font-extrabold">
              BBC News
              </a>
            </div>
            <h2 className="text-2xl font-semibold">
                Accessibility Review
            </h2>
            <p className="pb-4 text-lg">
                Most popular Online news website with an audience of 38.7 million as of January 2022. My interest is that Accessibility effects everyone at one time or another no matter who you are. Permanent, temporary or situational
            </p>
            <h2 className="text-2xl font-semibold">The Methodology</h2>
            <p className="text-lg">
              Structure. Use W3C.org Web Content Accessibility Guidelines(WCAG)standards
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
      <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
        <div>
          <StaticImage
            alt="mobile images"
            src="../../images/bbc-homepage.png"
            className="rounded-lg"
          />
        </div>
      </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8">
            <h2 className="text-2xl font-semibold pb-6 pb-6">1. Keyboard-only</h2>
            <p className="text-xl pb-1.5">
              The user should be able to use the keyboard to navigate to page elements such as links and forms; and are they in correct order as shown on the page.
            </p>
            <p className="text-xl">BBC has a nicely structured their links and buttons in a logical order. A nice touch is that early in the page is a tabbable element that links to a specific BBC accessibility help page. </p>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
        <StaticImage
          alt="mobile images"
          src="../../images/bbc-tab.png"
          className="rounded-lg"
        />
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8">
            <h2 className="text-2xl font-semibold pb-6">2. Screen readers</h2>
            <p className="text-xl pb-1.5">
              Using designs that match the real world allows for easier understanding and interaction for the user. For example the bin on a laptop is an image or icon of a waste paper bin.</p><p className="text-xl"> Unfortunately the buttons in the Next checkout process don't follow this prinicple for interaction design. One problem with the Next buttons is that they don't look like buttons, they need to improve their size, shape and shadow.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
      <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
        <div>
          <StaticImage
            alt="mobile images"
            src="../../images/bbc-reader.png"
            className="rounded-lg"
          />
        </div>
      </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8">
            <h2 className="text-2xl font-semibold pb-6">3. Browser zoom</h2>
            <p className="text-xl pb-1.5">
              The website should be designed to allow for a zoom range between 100% and 200% making sure the webpage layout doesn't break or the content is un-readable </p>
            <p className="text-xl"> The BBC News website comfortably allows for the website to be zoomed in by 200%. The webpages are responsive and this allows for text to wrap and the content to be displayed as like in Tablet layout.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
      <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl justify-center">
        <div>
          <StaticImage
            alt="mobile images"
            src="../../images/bbc-zoom.png"
            className="rounded-lg"
          />
        </div>
      </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8">
            <h2 className="text-2xl font-semibold pb-6">4. No audio</h2>
            <p className="text-xl pb-1.5">
              Captions for those who are deaf or hard of hearing enable the users to view pre-recorded videos and live presentations.
            </p>
            <p className="text-xl">
              BBC videos have a default setting to show captions and have a playback speed control to slow down the content for users that may struggle reading the text at normal speed. They also include the Name and Role of the person speaking giving the user more context to the captions.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
      <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
        <div>
          <StaticImage
            alt="mobile images"
            src="../../images/bbc-audio.png"
            className="rounded-lg"
          />
        </div>
      </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8">
            <h2 className="text-2xl font-semibold pb-6">5. Colour issues</h2>
            <p className="text-xl pb-1.5">
              Colour is an important part of design but for some perceiving colour can be difficult. This maybe due to colour blindness, older users that don't see colour well or partical sighted users. It is important that there are others indicators other than colour to show an elements state e.g. a text input box with a red border indicating an error.
            </p>
            <p className="text-xl">
              BBC has a good contrast ratio making it easy for the user to read and for those completely colour bind, the element highlights with an underline or border to indicate its state in the absence of colour.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div>
            <StaticImage
              alt="mobile images"
              src="../../images/bbc-colour.png"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8">
            <h2 className="text-2xl font-semibold pb-6">6. Basic Structure Check</h2>
            <p className="text-xl pb-1.5">
              The heading layout allows for the user to understand the organisation of the content on the page and the importance of each heading.
            </p>
            <p className="text-xl">BBC has a solid heading structure but has several H2 headings before the H1 heading.</p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div>
            <StaticImage
              alt="mobile images"
              src="../../images/bbc-headings.png"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8">
            <h2 className="text-2xl font-semibold pb-6">7. Font and Typeface</h2>
            <p className="text-xl pb-1.5">
              Font and Typeface is vital in accessibility for users with poor vision, learning disabilities, aphasia and dyslexia by providing greater legibility and readability. 
            </p>
            <p className="text-xl">BBC uses its own font called Reith which is a very accessible and works across all mediums from the smallest(mobile) to the largest(Billboards).</p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div>
            <StaticImage
              alt="mobile images"
              src="../../images/bbc-typeface.png"
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
