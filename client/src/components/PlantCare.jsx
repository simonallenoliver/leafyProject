import React from 'react'
import wateringCan from '../images/wateringCan.jpg'
import sunshine from '../images/sunshine.jpg'
import plantfriends from '../images/plantfriends.jpg'


const PlantCare = () => {
    return (
        <>
            <div className='subheadcontainer'><h1 className='leafGreen lefty plantCareTitle' >plant care tips</h1></div>
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