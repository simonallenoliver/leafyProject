import Header from '../components/Header'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'




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

    const handleDelete = (deleteID) => {
        console.log("you pressed the borrow/delete button on id:", deleteID);
        axios.delete(`http://localhost:8000/api/plants/${deleteID}`)
            .then((res) => {
                console.log("🗑️🗑️🗑️SUCCESSFUL DELETION🗑️🗑️🗑️", res.data)
                setRender(render + 1)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <Header />
            <h1 className="leafGreen" style={{ fontSize: "40px", margin: "150px 0 30px 50px" }}>Admin</h1>

            <p style={{ fontSize: "20px", margin: "10px 0 30px 50px" }}><Link to={`/admin/create`} >Add new plant</Link></p>
            <p style={{ fontSize: "20px", margin: "10px 0 30px 50px" }}><Link to={`/admin/create`} >Categories</Link></p>
            <p style={{ fontSize: "20px", margin: "10px 0 30px 50px" }}><Link to={`/admin/create`} >New Arrivals</Link></p>

            <div className='bigContainer'>
                
                <div className='productrow'>
                {plants.map((plant, index)=> {
                    console.log("log:",plant.photo)
            return <div><img className='medImage' key={index} src= {`/images/${plant.photo}.jpg`} alt={plant.photo} /><p>{plant.plantName} - {plant.price}</p>
            <Link to={`/admin/edit/${plant._id}`}> edit plant / </Link><button style={{ backgroundColor:"red", color:"white" }} onClick={() => handleDelete(plant._id)}>Delete Plant</button></div>
        })}
                </div>


            </div>
        </>
    )
}

export default Admin