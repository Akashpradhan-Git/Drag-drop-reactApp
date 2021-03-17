import React from 'react'
import Item from './Item'
import image1 from '../images/dis1.jpg'
import img3 from '../images/case.jpg'
function Case() {
    return (
        <div className="case">
        <div class="container flex">   
        <Item image={img3} title="Notrh"/>
        <Item image={img3} title="Notrh"/>
        </div>
        </div>
    )
}

export default Case
