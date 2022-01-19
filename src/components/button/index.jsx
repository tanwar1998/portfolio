
import React from "react";
import './style.scss'
const ButtonComponent = (props) => {
    return (
        <div className="button-container-main"
            style = { props.style } >
            <div className="back-circle-container"/>
            <button className="custom-button-class">
                Hire me
            </button>
        </div>
    )
}


export default ButtonComponent;