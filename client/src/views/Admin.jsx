import Header from '../components/Header'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import image1 from '../images/plant1.jpg'
import image2 from '../images/plant2.jpg'
import image3 from '../images/skinny.jpg'
import image4 from '../images/plant4.jpg'
import image5 from '../images/plant5.jpg'
import image6 from '../images/plant6.jpg'
import image7 from '../images/plant7.jpg'
import image8 from '../images/plant8.jpg'
import image9 from '../images/plant9.jpg'


const Admin = () => {

    const [render, setRender] = useState("")

    // axios request sent as soon as page renders with useEffect
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
    }, [render])


    const navigate = useNavigate();


    return (
        <>
            <Header />
            <h1 className="leafGreen" style={{ fontSize: "40px", margin: "150px 0 30px 50px" }}>Admin</h1>

            <p style={{ fontSize: "20px", margin: "10px 0 30px 50px" }}><Link to={`/admin/create`} >Add new plant</Link></p>

            <div className='bigContainer'>
                
                <div className='productrow'>
                {plants.map((plant, index)=> {
                    console.log("log:",plant.photo)
                    let variable = plant.photo
            return <div><img className='medImage' key={index} src={variable} alt={plant.photo +" image"} /><p>{plant.plantName} - {plant.price}</p>edit/delete</div>
        })}
                </div>


            </div>
        </>
    )
}

export default Admin