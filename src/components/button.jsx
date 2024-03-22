import "../assets/styles/button.css"
import { useEffect, useState } from "react";

function Button(props) {
    return (
        <button className={props.isActive ? "active" : ""} onClick={props.action}>
            {props.text}
        </button>
    );
}

export default Button;
