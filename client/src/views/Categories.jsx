import React from 'react'
import Header from '../components/Header'

const Categories = () => {
  return (
    <>
    <Header/>
    <br />
    <br />
    <br />
    <br />
    <div className='bigContainer'>

            <div>
            <h2 className='leafGreen' style = {{fontSize: "60px"}}>all categories</h2>
                <div className='catboxes'>
                    
                    <div id='catbox1' className='catbox'><h3 className='categorytext'>House Plants</h3></div>
                    <div id='catbox2' className='catbox'><h3 className='categorytext'>Outdoor Plants</h3></div>
                    <div id='catbox3' className='catbox'><h3 className='categorytext'>Plant Care</h3 ></div>
                    <div id='catbox4' className='catbox'><h3 className='categorytext'>Flowers</h3 ></div>
                </div>
                <div className='catboxes'>
                    
                    <div id='catbox1' className='catbox'><h3 className='categorytext'>House Plants</h3></div>
                    <div id='catbox2' className='catbox'><h3 className='categorytext'>Outdoor Plants</h3></div>
                    <div id='catbox3' className='catbox'><h3 className='categorytext'>Plant Care</h3 ></div>
                    <div id='catbox3' className='catbox'><h3 className='categorytext'>Plant Care</h3 ></div>
                </div>
                <div className='catboxes'>
                    
                    <div id='catbox1' className='catbox'><h3 className='categorytext'>House Plants</h3></div>
                    <div id='catbox2' className='catbox'><h3 className='categorytext'>Outdoor Plants</h3></div>
                    <div id='catbox3' className='catbox'><h3 className='categorytext'>Plant Care</h3 ></div>
                    <div id='catbox3' className='catbox'><h3 className='categorytext'>Plant Care</h3 ></div>
                </div>
            </div>

        </div>
    
    </>
  )
}

export default Categories