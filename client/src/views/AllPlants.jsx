import image1 from '../images/plant1.jpg'
import image2 from '../images/plant2.jpg'
import image3 from '../images/skinny.jpg'
import image4 from '../images/plant4.jpg'
import image5 from '../images/plant5.jpg'
import image6 from '../images/plant6.jpg'
import image7 from '../images/plant7.jpg'
import image8 from '../images/plant8.jpg'
import image9 from '../images/plant9.jpg'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const AllPlants = () => {
    const images = [[image1, "Max $67.89"], [image2, "Janice $55.99"], [image3, "Doris $39.99"], [image4, "Mark $69.99"],
    [image5, "Megan $39.99"], [image6, "Anders $45.99"], [image7, "Marge $88.99"], [image8, "Garth $69.99"], [image9, "Heidi $99.99"]]
    return (
        <>
            <Header />
            <h1 className="leafGreen" style={{ fontSize: "40px", margin: "150px 0 30px 50px" }}>All Plants</h1>

            <div className='bigContainer'>
                <div className='productrow'>
                    {images.map((image, index) => (
                        <div><img className='medImage' key={index} src={image[0]} alt={`Image ${index}`} /> <p><Link to={`/plantname`} className='navbarcatsingle'>{image[1]}</Link></p></div>

                    ))}
                </div>


            </div>
        </>
    )
}

export default AllPlants