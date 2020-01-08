import React from "react"
import Layout from "../components/layout"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import TitleText from "../components/TitleText"
import Paragraph from "../components/Paragraph"
import aboutImg from "../images/aboutImg.jpg"
import { Spring } from "react-spring/renderprops"
import SEO from "../components/seo"

const about = () => {
  return (
    <Layout>
      <SEO title="Page About" />
      <Menu />
      <TitleText titleText={"about"} />
      <div className="content">
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ duration: 750 }}
        >
          {props => (
            <div style={props} className="bg-light">
              <Spring
                from={{ opacity: 0, transform: `translateX(-50px)` }}
                to={{ opacity: 1, transform: `translateX(0)` }}
                config={{ delay: 1000, duration: 750 }}
              >
                {props => <img style={props} src={aboutImg} alt="about me" />}
              </Spring>
              <div className="about-texts">
                <Spring
                  from={{ opacity: 0, transform: `translateY(-20px)` }}
                  to={{ opacity: 1, transform: `translateY(0)` }}
                  config={{ delay: 1200, duration: 750 }}
                >
                  {props => (
                    <div style={props}>
                      <Paragraph paragraph={`Hi! Shirley Wang here.`} />
                    </div>
                  )}
                </Spring>
                <Spring
                  from={{ opacity: 0, transform: `translateY(-10px)` }}
                  to={{ opacity: 1, transform: `translateY(0)` }}
                  config={{ delay: 1400, duration: 750 }}
                >
                  {props => (
                    <div style={props}>
                      <Paragraph
                        paragraph={`I was majored in economics and literature
                      back in the university. I've always been drawn
                      to stories, fantasies and mythologies, which
                      lead to graphics and animation as well as to the
                      decision of moving to Sweden, a land that is
                      filled with fansinating stories.`}
                      />
                    </div>
                  )}
                </Spring>
                <Spring
                  from={{ opacity: 0, transform: `translateY(-10px)` }}
                  to={{ opacity: 1, transform: `translateY(0)` }}
                  config={{ delay: 1600, duration: 750 }}
                >
                  {props => (
                    <div style={props}>
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
                  )}
                </Spring>
              </div>
            </div>
          )}
        </Spring>
      </div>
      <Footer />
    </Layout>
  )
}

export default about
