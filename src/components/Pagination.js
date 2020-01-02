import React from "react"

const Pagination = ({ gotoNextPage, gotoPrevPage }) => {
  return (
    <div>
      {gotoPrevPage && <button onClick={gotoPrevPage}>&#8592;</button>}
      {/* {gotoNextPage && <button onClick={gotoNextPage}>&#8594;</button>} */}
      <button onClick={gotoNextPage}>&#8594;</button>
    </div>
  )
}

export default Pagination
