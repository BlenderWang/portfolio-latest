import React from "react"
import Layout from "../components/layout"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import TitleText from "../components/TitleText"
import SEO from "../components/seo"

const contact = () => {
  return (
    <Layout>
      <SEO title="Page contact" />
      <Menu />
      <TitleText titleText={"contact"} />
      <Footer />
    </Layout>
  )
}

export default contact
