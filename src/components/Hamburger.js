import React from "react"

export default props => {
  return (
    <div
      role="button"
      tabindex="0"
      className="menu-btn"
      onClick={props.handleClick}
      onKeyDown={props.handleClick}
    >
      <span
        role="button"
        tabindex="0"
        className={props.hamburgerClass}
        onClick={props.handleClick}
        onKeyDown={props.handleClick}
      ></span>
    </div>
  )
}
