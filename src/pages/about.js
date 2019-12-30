import React from "react"
import Layout from "../components/layout"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import TitleText from "../components/TitleText"

import SEO from "../components/seo"

const about = () => {
  return (
    <Layout>
      <SEO title="Page About" />
      <Menu />
      <TitleText titleText={"about"} />
      <Footer />
    </Layout>
  )
}

export default about
