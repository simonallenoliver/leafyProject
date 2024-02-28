
import image1 from '../images/plant1.jpg'
import image2 from '../images/plant2.jpg'
import image3 from '../images/skinny.jpg'
import image4 from '../images/plant4.jpg'
import image5 from '../images/plant5.jpg'
import image6 from '../images/plant6.jpg'
import image7 from '../images/plant7.jpg'
import image8 from '../images/plant8.jpg'
import image9 from '../images/plant9.jpg'
import rightarrow from '../images/rightarrow.png'
import leftarrow from '../images/leftarrow.png'
import { Link } from 'react-router-dom'

import React, { useState } from 'react';



const Carousel = ({ images }) => {
    images = [[image1,"Max $67.89"], [image2, "Janice $55.99"], [image3, "Doris $39.99"], [image4, "Mark $69.99"], [image5, "Megan $39.99"], [image6, "Anders $45.99"], [image7, "Marge $88.99"], [image8, "Garth $69.99"], [image9,"Heidi $99.99"] ]
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="imagecarousel">
      <div className="imagecontainer">
      <button className="revarrow prev" onClick={handlePrev}>
      <img class='smallarrow' src= {leftarrow} alt="right arrow" />
      </button>
        {images.slice(currentIndex, currentIndex + 5).map((image, index) => (
           <div><img className='medImage' key={index} src={image[0]} alt={`Image ${index}`} /> <p><Link to={`/plantname`} className='navbarcatsingle'>{image[1]}</Link></p></div>

        ))}
      <button className="revarrow next" onClick={handleNext}>
        <img class='smallarrow' src= {rightarrow} alt="right arrow" />
      </button>
      </div>
      
      
    </div>
  );
};

export default Carousel;