import React from 'react'
import ReviewCarousel from './ReviewCarousel'

const Reviews = () => {
    return (


        <div className='bigContainer'>
            
            <div className='medContainer'>
            <h1 style={{ fontFamily:"serif"}}>Customer Testimonials</h1>
                <div className='reviewBox'><h2><ReviewCarousel/></h2></div>
            </div>
        </div>
    )
}

export default Reviews