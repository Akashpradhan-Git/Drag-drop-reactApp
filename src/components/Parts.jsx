import React from 'react'
import Display from './Display'
import Charger from './Charger'
import Case from './Case'
import image1 from '../images/dis1.jpg'
function Parts() {
    return (
        <div className="container">
            <h1>Pick Your Item</h1>
            <div className="part-box">
                <div className="dis">
                    <Display />
                    <Charger/>
                    <Case/>
                </div>
            </div>
        </div>
    )
}

export default Parts
