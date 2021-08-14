import React, { useState } from 'react'

const Search = ({ getQuery }) => {
  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }

  return (
    <section className='search'>
      <form>
        <div className="row" >
       <input
          type='search'
          className='form-control'
          placeholder='Search for characters'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
          
        /></div>
      </form>
    </section>
  )
}

export default Search
