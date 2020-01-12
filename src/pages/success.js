import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import Title from "../components/Title"
import Paragraph from "../components/Paragraph"

const Success = () => (
  <Layout>
    <Menu />
    <div
      style={{
        position: `relative`,
        top: `45vh`,
        margin: `0 auto`,
        maxWidth: `80vw`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    >
      <div style={{ fontSize: `2em` }}>
        <Title subtitle={`Thank you very much for contacting me!`} />
        <Paragraph
          paragraph={`I'll get back to you shortly. Please have a cup of ☕ and enjoy your day!`}
        />
      </div>
      <Link
        style={{
          marginRight: "0",
          marginBottom: `0`,
          color: `#c1c1c1`,
        }}
        to="/"
      >
        &#8592; Go back to the homepage
      </Link>
    </div>
    <div style={{ position: `absolute`, bottom: `0` }}>
      <Footer />
    </div>
  </Layout>
)

export default Success
