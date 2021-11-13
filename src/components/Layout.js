import React from "react"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content"></div>
      {children}
      <footer>
        <p>Copyright 2021</p>
      </footer>
    </div>
  )
}