import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/Menu"
import TitleText from "../components/TitleText"
import Title from "../components/Title"
import Paragraph from "../components/Paragraph"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Menu />
    <TitleText titleText={"hey"} />
    <div className="all-texts">
      <Title title={`I'm `} titleSpan={`Shirley Wang`} />
      <Paragraph span={`Front-End `} paragraph={`Developer, base in `} />
      <Paragraph span={`Stockholm`} paragraph={` Sweden`} />
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    <Footer />
  </Layout>
)

export default IndexPage
