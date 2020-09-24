import React from "react"

import "./SearchInput.css"

const SearchInput = ({ textChange }) => (
  <div className="component-search-input">
    <div>
      <input onChange={textChange} />
    </div>
  </div>
)

export default SearchInput
