import React from 'react'
import Header from '../components/Header'

const MyCart = () => {
    return (
        <>
            <Header />
            <div className='bigContainer '>

                <div className='container1 '>
                    <h2 className='yourCart lefty' style={{ fontSize: "60px" }}>Your Cart</h2>

                </div>
            
                

            </div>

            <div style={{ textAlign:"center", margin:"50px"}}>
                <p style={{ textAlign:"center", padding:"50px", backgroundColor:"blue"}}>items for sale</p>
            
            </div>
            <div style={{ textAlign:"center"}}><h3><button>Checkout</button></h3></div>
        </>
    )
}

export default MyCart