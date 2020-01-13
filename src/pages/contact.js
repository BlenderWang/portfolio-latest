import React from "react"
import Layout from "../components/layout"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import TitleText from "../components/TitleText"
import Paragraph from "../components/Paragraph"
import Form from "../components/Form"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { Spring } from "react-spring/renderprops"

const contact = () => {
  return (
    <Layout>
      <SEO title="Page contact" />
      <Menu />
      <Spring
        from={{ opacity: 0, transform: `translate3d(300px, 0, 0)` }}
        to={{ opacity: 1, transform: `translate3d(0, 0, 0)` }}
        config={{ duration: 1250 }}
      >
        {props => (
          <div style={props}>
            <TitleText titleText={"contact"} />
          </div>
        )}
      </Spring>
      <Spring
        from={{ opacity: 0, transform: `translate3d(0, -50px, 0)` }}
        to={{ opacity: 1, transform: `translate3d(0, 0, 0)` }}
        config={{ delay: 750, duration: 1000 }}
      >
        {props => (
          <div style={props} className="content content-contact-page">
            <Spring
              from={{ opacity: 0, transform: `translate3d(0, 50px, 0)` }}
              to={{ opacity: 1, transform: `translate3d(0, 0, 0)` }}
              config={{ delay: 1200, duration: 1000 }}
            >
              {props => (
                <div style={props} className="contact-texts">
                  <Paragraph paragraph={`Send an `} />
                  <Paragraph span={`email `} />
                  <Paragraph paragraph={`to me or fill out the `} />
                  <Paragraph span={` contact form `} />
                  <Paragraph
                    paragraph={`below. I'd love to hear from you at any time so don't be a stranger!`}
                  />
                </div>
              )}
            </Spring>
            <Form />
          </div>
        )}
      </Spring>
      <Link to="/">
        <span className="arrow">&#8594;</span>
      </Link>
      <Footer />
    </Layout>
  )
}

export default contact
