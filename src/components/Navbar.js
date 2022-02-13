import React from "react"
import "../styles/global.css"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Navbar() {
  return (
    <nav>
      <header className="text-gray-700 body-font border-b border-gray-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="/"
          >
            <StaticImage
              src="../images/kangaroo.png"
              width={45}
              aspectRatio={1}
            />
            <span className="ml-3 text-xl hover:text-green hover:underline">
              Benjamin Cranwell
            </span>
          </Link>
          <nav className="md:ml-auto flex flex-col space-y-2 sm:space-y-0 md:flex-row items-center text-base ">
            <div>
              <a
                href="/caseStudies"
                className="mr-0 sm:mr-5 text-green hover:text-yellow-400 underline decoration-1 font-semibold"
              >
                Case Studies
              </a>
            </div>
            <div>
              <a
                href="/about"
                className="mr-0 sm:mr-5 text-green hover:text-yellow-400 underline decoration-1 font-semibold"
              >
                About
              </a>
            </div>
            <div>
              <a
                href="/contact"
                className="mr-0 sm:mr-5 text-green hover:text-yellow-400 underline decoration-1 font-semibold"
              >
                Contact
              </a>
            </div>
            <div>
              <a
                href="/sustainability"
                className="mr-0 sm:mr-5 text-green hover:text-yellow-400 underline decoration-1 font-semibold"
              >
                Sustainability
              </a>
            </div>
          </nav>
        </div>
      </header>
    </nav>
  )
}
