
import React, { useState } from 'react';
import rightarrow from '../images/rightarrow.png'
import leftarrow from '../images/leftarrow.png'


const ReviewCarousel = ({ reviews }) => {
    reviews = ['"I love my plant buddy more than my girlfriend!" -Tom S.', '"Best decision I ever made." -Maggie P.',
     '"I don'+"'"+'t even talk to people anymore. My plant buddy is all I need!" -Fabien D.', '"My succculent, Mark, helped me get through a really tough divorce." -Sally H.',
    '"If you'+"'re thinking of buying a plant somewhere else, don"+"'t you even dare."+'" -John G.']
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <div className='reviews'>
        {reviews.slice(currentIndex, currentIndex + 1).map((review, index) => (
          reviews[currentIndex]
        ))}
      </div>
      <button className="revarrow prev" onClick={handlePrev}>
      <img class='smallarrow' src= {leftarrow} alt="right arrow" />
      </button>
      <button className="revarrow next" onClick={handleNext}>
        <img class='smallarrow' src= {rightarrow} alt="right arrow" />
      </button>
    </div>
  );
};
export default ReviewCarousel