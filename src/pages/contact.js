import React from "react"
import Layout from "../components/layout"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import TitleText from "../components/TitleText"
import Paragraph from "../components/Paragraph"
import Form from "../components/Form"
import SEO from "../components/seo"

const contact = () => {
  return (
    <Layout>
      <SEO title="Page contact" />
      <Menu />
      <TitleText titleText={"contact"} />
      <div className="content content-contact-page">
        <div className="contact-texts">
          <Paragraph paragraph={`Send an `} />
          <Paragraph span={`email`} />
          <Paragraph paragraph={`to me or fill out the `} />
          <Paragraph span={`contact form`} />
          <Paragraph
            paragraph={`below. I'd love to hear from you at any time so don't be a stranger!`}
          />
        </div>
        <Form />
      </div>
      <Footer />
    </Layout>
  )
}

export default contact
