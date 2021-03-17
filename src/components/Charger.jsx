import React from 'react'
import Item from './Item'
import image1 from '../images/dis1.jpg'
import img2 from '../images/charger.jpg'
function Charger() {
    return (
        <div className="charger">
            <div class="container flex">
            <Item image={img2} title="Notrh"/>
            <Item image={img2} title="Notrh"/>
            <Item image={img2} title="Notrh"/>
            <Item image={img2} title="Notrh"/>
            
            </div>
        </div>
    )
}

export default Charger
