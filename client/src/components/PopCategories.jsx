import React from 'react'
import { Link } from 'react-router-dom'

const PopCategories = () => {
  return (
    <>
      <div className='bigContainer'>

        <div>
          <h2 className='leafGreen' style={{ fontSize: "40px" }}>popular categories</h2>
          <p className='lefty'><Link to={`/categories`} className='navbarcatsingle'>See all categories...</Link></p>
          <div className='catboxes'>

            <div>
              <div id='catbox1' className='catbox'></div>
              <h3 className='categorytext'>House Plants</h3>
            </div>
            <div>
              <div id='catbox2' className='catbox'></div>
              <h3 className='categorytext'>Outdoor Plants</h3>
            </div>
            <div>
              <div id='catbox3' className='catbox'></div>
              <h3 className='categorytext'>Plant Care</h3>
            </div>
            <div>
              <div id='catbox4' className='catbox'></div>
              <h3 className='categorytext'>Flowers</h3>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default PopCategories