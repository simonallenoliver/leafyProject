import React from 'react'

const Subscribe = () => {
    return (
        <div className='bigContainer'>

            <div className='medContainer'>
                <h1>subscribe for cute plant pics</h1>
                <div className='reviewBox'>
                    <h3><label>Email:</label>
                    <input type="text" /></h3>
                    <h4><input type="checkbox" />Send me cute plant pics!</h4>
                    <h4><input type="checkbox" />Send me promotions!</h4>
                    <input type="submit" />
                </div>
            </div>
        </div>
    )
}

export default Subscribe