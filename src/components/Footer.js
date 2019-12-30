import React from "react"
import SocialIcons from "./SocialIcons"

const Footer = () => {
  return (
    <footer>
      <SocialIcons />© {new Date().getFullYear()} || Shirley Wang@wangimation
      <span>&#8594;</span>
    </footer>
  )
}

export default Footer
