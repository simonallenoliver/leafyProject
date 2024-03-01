import { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Header from "../components/Header"

const AdminCreate = () => {

    const [plantName, setPlantName] = useState("")
    const [price, setPrice] = useState("")
    const [inStock, setInStock] = useState(true)
    const [type, setType] = useState("")
    const [photo, setPhoto] = useState("")
    const [description, setDescription] = useState("")

    // how to handle errors- set errors in catch
    const [errors, setErrors] = useState({})

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("look at our cool form data:", plantName, price, inStock, type, photo, description)

        const tempObject = { plantName, price, inStock, type, photo, description }

        // axios post request to enter data into db, it takes the url of our api, and the temp object holding all the data
        axios.post("http://localhost:8000/api/plants", tempObject)
            // .then is promise time - if the above code executes as we want it to, the .then will run, otherwise the .catch will run
            .then((res) => {
                console.log("SUCCESS database updated", res.data)
                navigate("/admin")
            })
            .catch((err) => {
                console.log("FAILURE database not updated", err)
                setErrors(err.response.data.errors);
            });

    }


    // front end validations - added handler functions to check validations and do the setting
    const [formErrors, setFormErrors] = useState({
        plantName: "Plant is required!",
        price: "",
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
            errorMsg = 'Plant is required!';
        }
        //3.
        setFormErrors({ ...formErrors, plantName: errorMsg });
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

    const priceHandler = (e) => {
        setPrice(e.target.value);
        const value = e.target.value.trim();
        let errorMsg = '';
        if (value) {
            if (value.length < 1) {
                errorMsg = 'Price must be greater than 0!';

            }
            setFormErrors({ ...formErrors, price: errorMsg });
        }
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
            if (value.length < 5) {
                errorMsg = 'Description must be at least 5 characters long!';
            } else if (value.length > 255) {
                errorMsg = 'Description must be less than 255 characters long';
            }
        } else {
            errorMsg = 'Description is required!';
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
            <h1 className="leafGreen" style={{ fontSize: "40px", margin: "150px 0 30px 50px" }}>Admin - Create</h1>
            <br />
            <div className='center'>
                
                <form onSubmit={handleSubmit}>
                    <div>
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
                        <input type="text" className="largeInput" value={description} onChange={descriptionHandler} />
                        {errors.description && <p style={{ color: "red", }}>{errors.description.message}</p>}
                    </div>

                    <div>
                        In stock?
                        <input type="checkbox" checked={inStock} onChange={(e) => setInStock(e.target.checked)} />
                        {errors.inStock && <p style={{ color: "red", }}>{errors.inStock.message}</p>}
                    </div>
                    <div>
                        <input type="submit" value="Add a new Plant" disabled={!validateForm()} />
                    </div>


                </form>

            </div>
        </>
    )
}

export default AdminCreate

