import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import "../pages/bg-image.css"

export default function Layout({ children }) {
  return (
    <div className="layout min-h-screen">
      <Navbar />
      <div className="content"></div>
      {children}
    </div>
  )
}
