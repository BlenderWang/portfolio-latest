import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Menu from "../components/Menu"

import SEO from "../components/seo"

const about = () => {
  return (
    <Layout>
      <SEO title="Page About" />
      <Menu />

      <h1>Hi from the about page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default about
