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
              src="../images/kangaroo.svg"
              width={45}
              aspectRatio={1}
            />
            <span className="ml-3 text-xl">Benjamin Cranwell</span>
          </Link>
          <nav className="md:ml-auto flex flex-col md:flex-row items-center text-base justify-center">
            <div>
              <a
                href="/projects"
                className="mr-5 hover:text-gray-900 hover:underline"
              >
                Projects
              </a>
            </div>
            <div>
              <a
                href="/sustainability"
                className="mr-5 hover:text-gray-900 hover:underline"
              >
                Sustainability
              </a>
            </div>
            <div>
              <a
                href="/about"
                className="mr-5 hover:text-gray-900 hover:underline"
              >
                About
              </a>
            </div>
            <div>
              <a
                href="/contact"
                className="mr-5 hover:text-gray-900 hover:underline"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>
    </nav>
  )
}
