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
          SameSite="None"
          Secure
        ></script>
      </Helmet>
      <a
        href="https://github.com/BlenderWang"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className={`fab fa-github-square`} />
      </a>
      <a
        href="https://www.linkedin.com/in/shirley-wang-37b7457b/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fab fa-linkedin" />
      </a>
      <a
        href="mailto:shirleywang527@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  )
}
