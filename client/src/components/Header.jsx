import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='headerBox'>
        <div className='icontitle'><img className='smallImage' src='../src/images/leafy.png'></img>
        <h1 className='headerTime'>Leafy</h1>
        </div>
        
        <div className='navbarcats'>
          <p><Link to={`/`} className='navbarcatsingle'>Home</Link></p>
          <p><Link to={`/allplants`} className='navbarcatsingle'>All Plants</Link></p>
          <p><Link to={`/categories`} className='navbarcatsingle'>Categories</Link></p>
          <p><Link to={`/allplants`} className='navbarcatsingle'>New Arrivals</Link></p>
        </div>

        <p><Link to={`/mycart`} className='navbarcatsingle'>Cart 🛒 </Link></p>

      </div>

    </>
  )
}

export default Header