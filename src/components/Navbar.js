import React from "react"
import "../styles/global.css"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav>
      <header className="text-gray-700 body-font border-b border-gray-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Benjamin Cranwell</span>
          </Link>
          <nav className="md:ml-auto flex flex-col md:flex-row items-center text-base justify-center">
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
                href="/caseStudies"
                className="mr-5 hover:text-gray-900 hover:underline"
              >
                Case Studies
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
