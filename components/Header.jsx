import React from 'react'

const Header = (props) => {

  /* submit search */
  

  return (
    <>
    <div className="container">
    <header className="header">
        <form onSubmit={props.handleSearch} className='form'>
            <input name="searchInput" className='border-2 border-gray-200' type="text" placeholder="search images here..."/>
            <button className='btn'>Search</button>
        </form>
    </header>
    </div>
    </>
  )
}

export default Header