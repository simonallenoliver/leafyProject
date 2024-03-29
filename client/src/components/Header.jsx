import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='headerBox'>
        <div className='icontitle'><Link to={`/`} style={{ fontStyle: "normal" }}><img className='smallImage' src='/images/leafy.png'></img></Link>
          <h1 className='headerTime'><Link to={`/`} style={{ fontStyle: "normal", color: "rgb(79, 113, 62)" }}>Leafy</Link></h1>
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