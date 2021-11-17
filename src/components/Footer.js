import { Link } from "gatsby"
import React from "react"

export default function Footer() {
  return (
    <div className="bg-gray-800 pt-6 md:pt-12">
      <div className="container px-4 mx-auto">
        <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
          <div className="footer-info lg:w-1/3 md:px-4">
            <h4 className="text-white text-2xl mb-4">sundown</h4>
          </div>
          <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
            <div className="sm:flex">
              <div className="sm:flex-1">
                <h5 className="text-base font-medium text-white uppercase mb-2">
                  About
                </h5>
                <Link
                  className="text-gray-400 py-1 block hover:underline"
                  to="/about"
                >
                  Company
                </Link>
              </div>
              <div className="sm:flex-1 mt-4 sm:mt-0">
                <h5 className="text-base font-medium text-white uppercase mb-2">
                  What we offer
                </h5>
                <Link
                  className="text-gray-400 py-1 block hover:underline"
                  to="/about"
                >
                  Company
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
