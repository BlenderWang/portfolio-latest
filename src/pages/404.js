import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Menu />
    <div
      style={{
        position: `relative`,
        top: `45vh`,
        margin: `0 auto`,
        maxWidth: `80vw`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    >
      <div style={{ fontSize: `2em` }}>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
      <Link
        style={{
          marginRight: "0",
          marginBottom: `0`,
          color: `#c1c1c1`,
        }}
        to="/"
      >
        &#8592; Go back to the homepage
      </Link>
    </div>
    <div style={{ position: `absolute`, bottom: `0` }}>
      <Footer />
    </div>
  </Layout>
)

export default NotFoundPage
