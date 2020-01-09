import React from "react"
import Layout from "../components/layout"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import TitleText from "../components/TitleText"
import Paragraph from "../components/Paragraph"
import aboutImg from "../images/aboutImg.jpg"
import { Spring } from "react-spring/renderprops"
import { Link } from "gatsby"

import SEO from "../components/seo"

const about = () => {
  return (
    <Layout>
      <SEO title="Page About" />
      <Menu />
      <Spring
        from={{ opacity: 0, transform: `translate3d(200px, 0, 0)` }}
        to={{ opacity: 1, transform: `translate3d(0, 0, 0)` }}
        config={{ duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <TitleText titleText={"about"} />
          </div>
        )}
      </Spring>
      <div className="content">
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ duration: 1200 }}
        >
          {props => (
            <div style={props} className="bg-light">
              <Spring
                from={{ opacity: 0, transform: `translateX(-50px)` }}
                to={{ opacity: 1, transform: `translateX(0)` }}
                config={{ delay: 1350, duration: 750 }}
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
                  config={{ delay: 1500, duration: 750 }}
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
      <Link to="/portfolio">
        <span className="arrow">&#8594;</span>
      </Link>
      <Footer />
    </Layout>
  )
}

export default about
