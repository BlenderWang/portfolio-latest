import React from "react"
import Helmet from "react-helmet"

export default () => {
  return (
    <div className="icons">
      <Helmet>
        <script
          src="https://kit.fontawesome.com/3e27283071.js"
          crossorigin="anonymous"
          defer={true}
        ></script>
      </Helmet>
      <i className={`fab fa-github-square`} />
      <i className="fab fa-linkedin" />
      <i className="fas fa-envelope"></i>
    </div>
  )
}
