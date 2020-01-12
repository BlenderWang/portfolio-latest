import React from "react"
import Layout from "../components/layout"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import TitleText from "../components/TitleText"
import Slideshow from "../components/Slideshow"
import { Link } from "gatsby"
import SEO from "../components/seo"

const portfolio = () => {
  return (
    <Layout>
      <SEO title="Page Portfolio" />
      <Menu />
      <TitleText titleText={"portfolio"} />
      <Slideshow />

      <Link to="/contact">
        <span className="arrow">&#8594;</span>
      </Link>
      <Footer />
    </Layout>
  )
}

export default portfolio
