import React from "react"

export default props => {
  return (
    <div className="page-title">
      <h2>
        {props.title}
        <span>{props.titleSpan}</span>
      </h2>
      <h5>
        {props.subtitle}
        <span>{props.subtitleSpan}</span>
      </h5>
    </div>
  )
}
