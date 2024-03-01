import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header'
import { Link } from 'react-router-dom';

const MyCart = () => {

    const RemoveFromCart = (id) => {

        const tempObject = { inStock: true }
        console.log("you pressed the remove from cart button button on id:", id);
        axios.put(`http://localhost:8000/api/plants/${id}`, tempObject)
            .then((res) => {
                console.log("databse contacted", res.data)
            })
            .catch((err) => {
                console.log(err);
            });
            alert("removed from cart!")
    }
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
    }, [RemoveFromCart])
    return (
        <>
            <Header />
            <h1 className="leafGreen" style={{ fontSize: "40px", margin: "150px 0 30px 50px" }}>your cart</h1>

            <div className='bigContainer'>
                <div className='productrow'>
                    {plants.filter(plant => plant.inStock == false).map((plant, index) => (
                        <div>
                            <img className='medImage' key={index} src={`/images/${plant.photo}.jpg`} alt={`Image ${index}`} />
                            <p><Link to={`/oneplant/${plant._id}`} className='navbarcatsingle'>{plant.plantName}</Link> - {plant.price}</p>
                            <p><button onClick={() => RemoveFromCart(plant._id)}>remove from cart</button></p>
                        </div>
                    ))}
                </div>


            </div>
        </>
    )
}

export default MyCart