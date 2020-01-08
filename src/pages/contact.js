import React from "react"
import Layout from "../components/layout"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import TitleText from "../components/TitleText"
import Paragraph from "../components/Paragraph"
import Form from "../components/Form"
import SEO from "../components/seo"
import { Spring } from "react-spring/renderprops"

const contact = () => {
  return (
    <Layout>
      <SEO title="Page contact" />
      <Menu />
      <TitleText titleText={"contact"} />
      <Spring
        from={{ opacity: 0, marginTop: -100 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ delay: 500, duration: 1000 }}
      >
        {props => (
          <div style={props} className="content content-contact-page">
            <Spring
              from={{ opacity: 0, marginTop: -20 }}
              to={{ opacity: 1, marginTop: 0 }}
              config={{ delay: 1000, duration: 1000 }}
            >
              {props => (
                <div style={props} className="contact-texts">
                  <Paragraph paragraph={`Send an `} />
                  <Paragraph span={`email`} />
                  <Paragraph paragraph={`to me or fill out the `} />
                  <Paragraph span={`contact form`} />
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
      <Footer />
    </Layout>
  )
}

export default contact
