import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const OnePlant = () => {

    // here we set up useState and useEffect to plant our requested data from axios
    const [plant, setPlant] = useState({});
    const { id } = useParams();

    // useEffect lets us sync up with our api
    useEffect(() => {
        axios.get(`http://localhost:8000/api/plants/${id}`)
        // .then is a promise - it will run that section of code if the promise (above) is fulfilled, otherwise it will run the .catch
            .then((res) => {
                console.log(res.data);
                setPlant(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    const navigate = useNavigate();



    return (
        <>
        {<Header headerVar = {plant.number+" Details"} />}
            <div className='centeredPage'>
            <div className='plantDisplay'>
                <div className='plantText'>
                <h3 className='plantTitle'>{plant.plantName}</h3>
                <p className='description'>{plant.description}</p>
                <p>Price: {plant.price}---{plant.inStock === true ? "In stock!" : "Out of stock :("}</p>
                <br />
                <button>Add to Cart</button>
                </div>
                <div className='plantImage'><img className='xlargeImage' src={`/images/${plant.photo}.jpg`} alt="plant pic" /></div>
                
            </div>
            </div>
        </>
    )
}

export default OnePlant