import React from "react"

const Card = ({ card }) => {
  const { id, count, src, title, content, demoLink, repoLink } = card

  return (
    <div id={`card-${id}`} className="card">
      <div className="card--content">
        <h3 data-text={count}>{count}</h3>
        <img src={src} alt={title} />
        <div className="card--details">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <div className="card--links">
          <a href={demoLink}>demo</a>
          <a href={repoLink}>code</a>
        </div>
      </div>
    </div>
  )
}

export default Card
