import React from 'react'
import Item from './Item'
import image1 from '../images/dis1.jpg'
function Display() {
    return (
        <div class="container flex">   
        <Item image={image1} title="Notrh"/>
        <Item image={image1} title="Notrh"/>
        <Item image={image1} title="Notrh"/>
        <Item image={image1} title="Notrh"/>
        </div>
    )
}

export default Display
