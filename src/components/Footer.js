import React from "react"
import SocialIcons from "./SocialIcons"

const Footer = () => {
  return (
    <footer>
      <SocialIcons />© {new Date().getFullYear()} || Shirley Wang@wangimation
    </footer>
  )
}

export default Footer
