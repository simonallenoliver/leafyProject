import React from 'react'

const Header = () => {
  return (
    <>
    <div className='headerBox'>
    <img className='smallImage' src='../src/images/leafy.png'></img>
    <h1 className='headerTime'>Leafy</h1>
    🛒
    <form action="">
    <input className='searchBar' type="text" placeholder="Search.."/>
    </form>
    </div>
    
    </>
  )
}

export default Header