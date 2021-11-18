import React from "react"
import "../styles/global.css"

export default function Navbar() {
  return (
    <nav>
      <header class="text-gray-700 body-font border-b border-gray-200">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Benjamin Cranwell</span>
          </a>
          <nav class="md:ml-auto flex items-center text-base justify-center">
            <a href="/work" class="mr-5 hover:text-gray-900 hover:underline">
              Case Studies
            </a>
            <a href="/about" class="mr-5 hover:text-gray-900 hover:underline">
              About
            </a>
            <a href="#" class="mr-5 hover:text-gray-900 hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>
    </nav>
  )
}
