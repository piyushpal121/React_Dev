import React from "react";
import pic from "../assets/images/mercedes.jpg"
import "../components/card.css"

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.pic} alt="mercedes" />
            <h2>{props.name}</h2>
            <h2>{props.roll}</h2>
        </div>

    )
}

export default Card