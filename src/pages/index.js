import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <section>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in london</p>
          <Link to="/projects">My Portfolio Projects</Link>
        </div>
        <img src="/ben.jpeg" alt="benjamin" />
      </section>
    </Layout>
  )
}
