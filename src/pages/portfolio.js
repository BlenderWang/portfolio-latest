import React from "react"
import Layout from "../components/layout"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import TitleText from "../components/TitleText"
import SEO from "../components/seo"

const portfolio = () => {
  return (
    <Layout>
      <SEO title="Page Portfolio" />
      <Menu />
      <TitleText titleText={"portfolio"} />
      <Footer />
    </Layout>
  )
}

export default portfolio
