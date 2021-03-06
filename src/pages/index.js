import React from "react"
import { Link } from "gatsby"
import { Spring } from "react-spring/renderprops"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/Menu"
import TitleText from "../components/TitleText"
import Title from "../components/Title"
import Paragraph from "../components/Paragraph"
import Svg from "../components/Svg"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Svg />
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 3500, duration: 1000 }}
    >
      {opacity => (
        <div style={opacity}>
          <Menu />
        </div>
      )}
    </Spring>
    <Spring
      from={{ transform: `translateX(100%)`, opacity: 0 }}
      to={{ transform: `translateX(0%)`, opacity: 1 }}
      config={{ delay: 3500, duration: 2000 }}
    >
      {props => (
        <div style={props}>
          <TitleText titleText={"hey"} />
        </div>
      )}
    </Spring>
    <div className="all-texts">
      <Spring
        from={{ transform: `translateY(-50px)`, opacity: 0 }}
        to={{ transform: `translateY(0)`, opacity: 1 }}
        config={{ delay: 6200, duration: 500 }}
      >
        {props => (
          <div style={props}>
            <Title title={`I'm `} titleSpan={`Shirley Wang`} />
          </div>
        )}
      </Spring>
      <Spring
        from={{ transform: `translateY(50px)`, opacity: 0 }}
        to={{ transform: `translateY(0)`, opacity: 1 }}
        config={{ delay: 6500, duration: 500 }}
      >
        {props => (
          <div style={props}>
            <div style={props}>
              <Paragraph
                span={`Front-End `}
                paragraph={`Developer, base in `}
              />
              <Paragraph span={`Stockholm`} paragraph={` Sweden`} />
            </div>
          </div>
        )}
      </Spring>
    </div>
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 3500, duration: 1000 }}
    >
      {opacity => (
        <div style={opacity}>
          <Link to="/about">
            <span className="arrow">&#8594;</span>
          </Link>
        </div>
      )}
    </Spring>
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 3500, duration: 1000 }}
    >
      {opacity => (
        <div style={opacity}>
          <Footer />
        </div>
      )}
    </Spring>
  </Layout>
)

export default IndexPage
