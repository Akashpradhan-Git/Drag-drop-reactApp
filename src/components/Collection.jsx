import React from 'react'

function Collection(props) {
    return (
        <div>
            
            <div className="c-list">
                <img src={props.image} alt=""/>
                <h3>{props.title}</h3>
            </div>
        </div>
        
    )
}

export default Collection
