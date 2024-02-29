import Header from '../components/Header'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'




const Edit = () => {

    const [plantName, setPlantName] = useState("")
    const [price, setPrice] = useState("")
    const [inStock, setInStock] = useState(false)
    const [photo, setPhoto] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")

    const [errors, setErrors] = useState({})

    // axios request sent as soon as page renders with useEffect
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/plants/${id}`)
            .then((res) => {
                console.log(res.data);
                setPlantName(res.data.plantName)
                setPrice(res.data.price)
                setInStock(res.data.inStock)
                setType(res.data.type)
                setPhoto(res.data.photo)
                setDescription(res.data.description)
            })
            .catch((err) => {
                console.log("WARNING Axios request ERROR", err);
            });
    }, [])


    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const tempObject = { plantName, price, inStock, type, description }

        axios.put(`http://localhost:8000/api/plants/${id}`, tempObject)
            .then((res) => {
                console.log("SUCCESS database edited", res.data)
                navigate("/admin")
            })
            .catch((err) => {
                console.log("FAILURE database not edited", err)
                setErrors(err.response.data.errors);
            });

    }

    // front end validations - added handler functions to check validations and do the setting
    const [formErrors, setFormErrors] = useState({
        plantName: "",
        price: "",
        type: "",
        description: "",
        // age: "Age must be greater than 0",
    })

    const plantNameHandler = (e) => {
        //1.
        setPlantName(e.target.value);
        const value = e.target.value.trim();
        let errorMsg = '';
        //2.
        if (value) {
            if (value.length < 3) {
                errorMsg = 'Plant name must be at least 3 characters long!';
            } else if (value.length > 255) {
                errorMsg = 'Plant name must be less than 255 characters long';
            }
        } else {
            errorMsg = 'Plant name is required!';
        }
        //3.
        setFormErrors({ ...formErrors, plantName: errorMsg });
    }

    const priceHandler = (e) => {
        setNumber(e.target.value);
        const value = e.target.value.trim();
        let errorMsg = '';
        if (value) {
            if (value.length < 1) {
                errorMsg = 'Number must be greater than 0!';
            } else if (value.length > 255) {
                errorMsg = 'Number must be less than 255 characters long';
            }
        }
        setFormErrors({ ...formErrors, price: errorMsg });
    }

    const typeHandler = (e) => {
        //1.
        setType(e.target.value);
        const value = e.target.value.trim();
        let errorMsg = '';
        //2.
        if (value) {
            if (value.length < 3) {
                errorMsg = 'Type must be at least 3 characters long!';
            } else if (value.length > 255) {
                errorMsg = 'Type must be less than 255 characters long';
            }
        } else {
            errorMsg = 'Type is required!';
        }
        //3.
        setFormErrors({ ...formErrors, type: errorMsg });
    }
    const photoHandler = (e) => {
        //1.
        setPhoto(e.target.value);
        const value = e.target.value.trim();
        let errorMsg = '';
        //2.
        if (value) {
            if (value.length < 3) {
                errorMsg = 'Photo must be at least 3 characters long!';
            } else if (value.length > 255) {
                errorMsg = 'Photo must be less than 255 characters long';
            }
        } else {
            errorMsg = 'Photo is required!';
        }
        //3.
        setFormErrors({ ...formErrors, photo: errorMsg });
    }

    const descriptionHandler = (e) => {
        //1.
        setDescription(e.target.value);
        const value = e.target.value.trim();
        let errorMsg = '';
        //2.
        if (value) {
            if (value.length < 3) {
                errorMsg = 'Description must be at least 3 characters long!';
            } else if (value.length > 255) {
                errorMsg = 'Description must be less than 255 characters long';
            }
        } else {
            errorMsg = 'Plant name is required!';
        }
        //3.
        setFormErrors({ ...formErrors, description: errorMsg });
    }

    // used to make submit button clickable
    // the every method returns true if every array element meets the criteria 
    const validateForm = () => {
        return Object.values(formErrors).every(value => value === '');
    }

    return (
        <>

            <Header />
            <h1 className="leafGreen" style={{ fontSize: "40px", margin: "150px 0 30px 50px" }}>Admin - Edit</h1>
            <br />
            <div className='center'>
                
                <form onSubmit={handleSubmit}>
                    <div >
                        {formErrors.plantName && <p>{formErrors.plantName}</p>}
                        Plant Name:
                        {/* input type is text by default */}
                        <input value={plantName} onChange={plantNameHandler} />
                        {errors.plantName && <p style={{ color: "red", textDecoration: "underline" }}>{errors.plantName.message}</p>}
                    </div>
                    <div>
                        {formErrors.price && <p>{formErrors.price}</p>}
                        Price:
                        <input type="string" value={price} onChange={priceHandler} />
                        {errors.price && <p style={{ color: "red", }}>{errors.price.message}</p>}
                    </div>
                    <div>
                        {formErrors.type && <p>{formErrors.type}</p>}
                        Type:
                        <input type="string" value={type} onChange={typeHandler} />
                        {errors.type && <p style={{ color: "red", }}>{errors.type.message}</p>}
                    </div>

                    <div>
                        {formErrors.photo && <p>{formErrors.photo}</p>}
                        Photo:
                        <input type="string" value={photo} onChange={photoHandler} />
                        {errors.photo && <p style={{ color: "red", }}>{errors.photo.message}</p>}
                    </div>

                    <div>
                        {formErrors.description && <p>{formErrors.description}</p>}
                        Description:
                        <input type="text" value={description} onChange={descriptionHandler} />
                        {errors.description && <p style={{ color: "red", }}>{errors.description.message}</p>}
                    </div>

                    <div>
                        In stock?
                        <input type="checkbox" checked={inStock} onChange={(e) => setInStock(e.target.checked)} />
                        {errors.inStock && <p style={{ color: "red", }}>{errors.inStock.message}</p>}
                    </div>
                    <div>
                        <input type="submit" value="Edit Plant" disabled={!validateForm()} />
                    </div>


                </form>

            </div>

        </>
    )
}

export default Edit