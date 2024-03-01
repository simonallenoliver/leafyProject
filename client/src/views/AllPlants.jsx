import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { useState, useEffect } from 'react';
import axios from 'axios';

const AllPlants = () => {

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

    
    return (
        <>
            <Header />
            <h1 className="leafGreen" style={{ fontSize: "40px", margin: "150px 0 30px 50px" }}>all plants</h1>

            <div className='bigContainer'>
                <div className='productrow'>
                    {plants.map((plant, index) => (
                        <div><img className='medImage' key={index} src={`/images/${plant.photo}.jpg`} alt={`Image ${index}`} /> 
                        <p><Link to={`/oneplant/${plant._id}`} className='navbarcatsingle'>{plant.plantName}</Link> - {plant.price}</p></div>
                    ))}
                </div>


            </div>
        </>
    )
}

export default AllPlants