import React from "react"
import Layout from "../components/layout"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import TitleText from "../components/TitleText"
import Paragraph from "../components/Paragraph"
import aboutImg from "../images/aboutImg.jpg"
import { Link } from "gatsby"

import SEO from "../components/seo"

const about = () => {
  return (
    <Layout>
      <SEO title="Page About" />
      <Menu />
      <TitleText titleText={"about"} />
      <div className="content">
        <div className="bg-light">
          <img src={aboutImg} alt="about me" />
          <div className="about-texts">
            <Paragraph paragraph={`Hi! Shirley Wang here.`} />
            <Paragraph
              paragraph={`I was majored in economics and literature
                      back in the university. I've always been drawn
                      to stories, fantasies and mythologies, which
                      lead to graphics and animation as well as to the
                      decision of moving to Sweden, a land that is
                      filled with fansinating stories.`}
            />
            <Paragraph
              paragraph={`Meanwhile the fast development of the web
                have intrigued me and let me into the world of
                Front-End Development where I can further grow
                and improve as a designer and a developer.
                As a person I have the curiosity for obtaining
                knowledge and the persistency for improving
                my skills.`}
            />
          </div>
        </div>
      </div>
      <Link to="/portfolio">
        <span className="arrow">&#8594;</span>
      </Link>
      <Footer />
    </Layout>
  )
}

export default about
