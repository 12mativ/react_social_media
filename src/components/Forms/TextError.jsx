import React from "react"; 
import classes from "./Forms.module.css";


const TextError = (props) => {
    return (
        <div className={classes.error}>
            {props.children}
        </div>
    )
}

export default TextError