import React from 'react'

function Item(props) {
    return (
        <div class="item flex-item">
        <div className="box">
            <img src={props.image} alt="" />
            <div className="title">
                <h3>{props.title}</h3>
                <div className="radio">
                    <input type="radio" name="" id="" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Item
