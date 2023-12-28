import React from 'react'
import './Search.css'
export const Search = () => {
  return (
    <div className='search_div'>
      <input type="text" className='search-box' placeholder='search for restaurant ,cusins or a dish '/>
      <button className='search-btn'>Search</button>
    </div>
  )
}
