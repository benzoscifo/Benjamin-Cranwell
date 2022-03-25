import React from "react"
import "../styles/global.css"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Navbar() {
  return (
    <nav>
      <header className="text-gray-700 body-font border-b border-gray-200">
        <div className="h-full w-auto block max-w-screen-xl py-4 px-10 mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="text-center md:text-left">
              <Link
                className="title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                href="/"
              >
                <StaticImage
                  src="../images/kangaroo.svg"
                  width={45}
                  aspectRatio={1}
                />
                <span className="ml-3 text-xl text-gray-400 hover:text-pastelGreen hover:underline">
                  Benjamin Cranwell
                </span>
              </Link>
            </div>
            <div>
              <nav className="md:ml-auto flex flex-col space-y-2 sm:space-y-0 md:flex-row items-center text-base">
                <div>
                  <a
                    href="/caseStudies"
                    className="mr-0 sm:mr-5 text-pastelGreen hover:text-brickRed hover:underline decoration-1 font-medium"
                  >
                    Case Studies
                  </a>
                </div>
                <div>
                  <a
                    href="/about"
                    className="mr-0 sm:mr-5 text-pastelGreen hover:text-brickRed hover:underline decoration-1 font-medium"
                  >
                    About
                  </a>
                </div>
                <div>
                  <a
                    href="/contact"
                    className="mr-0 sm:mr-5 text-pastelGreen hover:text-brickRed hover:underline decoration-1 font-medium"
                  >
                    Contact
                  </a>
                </div>
                <div>
                  <a
                    href="/sustainable"
                    className="mr-0 sm:mr-5 text-pastelGreen hover:text-brickRed hover:underline decoration-1 font-medium"
                  >
                    Sustainability
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </nav>
  )
}
