import axios from 'axios';
import rightarrow from '../images/rightarrow.png'
import leftarrow from '../images/leftarrow.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';




const Carousel = ({ images }) => {
     
  const [plants, setPlants] = useState([]);
  useEffect(() => {
      axios.get("http://localhost:8000/api/plants")
          .then((res) => {
              console.log(res.data);
              setPlants(res.data);
          })
          .catch((err) => {
              console.log("WARNING Axios request ERROR", err);
          });
  }, [])

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? plants.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === plants.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="imagecarousel">
      <div className="imagecontainer">
      <button className="revarrow prev" onClick={handlePrev}>
      <img class='smallarrow' src= {leftarrow} alt="right arrow" />
      </button>
        {plants.slice(currentIndex, currentIndex + 5).map((plant, index) => (
           <div><img className='medImage' key={index} src={`/images/${plant.photo}.jpg`} alt={plant.plantName} /> <p><Link to={`/oneplant/${plant._id}`} className='navbarcatsingle'>{plant.plantName}</Link> - {plant.price}</p></div>

        ))}
      <button className="revarrow next" onClick={handleNext}>
        <img class='smallarrow' src= {rightarrow} alt="right arrow" />
      </button>
      </div>
      
      
    </div>
  );
};

export default Carousel;