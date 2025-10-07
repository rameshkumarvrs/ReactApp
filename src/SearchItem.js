
import React from 'react'

const SearchItem = ({search, searchItem}) => {
  return (
    <input type="text"
    id = "search"
    role = "searchvalue"
    value={search}
    onChange={(e) => searchItem(e.target.value)} 
    />
  )
}

export default SearchItem