import React from 'react'
import wateringCan from '../images/wateringCan.png'
import sunshine from '../images/sunshine.png'
import plantfriends from '../images/plantfriends.png'


const PlantCare = () => {
    return (
        <>
            <div className='subheadcontainer'><h1 className='leafGreen lefty' style={{ fontSize: "60px", fontFamily: "serif", marginLeft:"140px" }}>plant care tips</h1></div>
            <div className='bigContainer'>

                <div>
                    
                    <div className='tipboxes'>
                        <div className='tipbox'>
                            <h3>Water them</h3>
                            <img className='largeImage' src={wateringCan} alt="watering can" />
                        </div>
                        <div className='tipbox'>
                            <h3>Expose them to the sun</h3>
                            <img className='largeImage' src={sunshine} alt="watering can" />
                        </div>
                        <div className='tipbox'>
                            <h3>Give them lots of friends</h3>
                            <img className='largeImage' src={plantfriends} alt="watering can" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PlantCare