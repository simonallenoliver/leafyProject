import React from 'react'

const Subscribe = () => {
    return (
        <div className='bigContainer'>

            <div className='medContainer'>
                <h1>subscribe for cute plant pics</h1>
                <div className='subBox'>
                    <h3><label>Email:</label>
                    <input type="text" /></h3>
                    <p><input type="checkbox" />Send me cute plant pics!</p>
                    <p><input type="checkbox" />Send me promotions!</p>
                    <input type="submit" />
                </div>
            </div>
        </div>
    )
}

export default Subscribe