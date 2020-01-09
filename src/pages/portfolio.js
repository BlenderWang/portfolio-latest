import React from "react"
import Layout from "../components/layout"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import TitleText from "../components/TitleText"
import { Spring } from "react-spring/renderprops"
import { Link } from "gatsby"
import SEO from "../components/seo"

const portfolio = () => {
  return (
    <Layout>
      <SEO title="Page Portfolio" />
      <Menu />
      <Spring
        from={{ opacity: 0, transform: `translate3d(500px, 0, 0)` }}
        to={{ opacity: 1, transform: `translate3d(0, 0, 0)` }}
        config={{ duration: 1200 }}
      >
        {props => (
          <div style={props}>
            <TitleText titleText={"portfolio"} />
          </div>
        )}
      </Spring>
      <Link to="/contact">
        <span className="arrow">&#8594;</span>
      </Link>
      <Footer />
    </Layout>
  )
}

export default portfolio
