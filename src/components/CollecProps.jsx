import React from 'react'
import Collection from './Collection'
import img1 from '../images/dis1.jpg'
import img2 from '../images/charger.jpg'
import img3 from '../images/case.jpg'
function CollecProps() {
    return (
        <div className="collection">
            <h1>Your Selected Item are</h1>
        <div className="col">
            <Collection image={img1} title="OLED Display"/>
            <Collection image={img2} title="60W Vooc Charger"/>
            <Collection image={img3} title="Case"/>
            
        </div>
        </div>
    )
}

export default CollecProps
