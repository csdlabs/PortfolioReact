import React from "react";
import classes from "./Button.module.css";

type ButtonPropsType = {
    title: string
    siteLink: string
    darkMode?: boolean
}

const Button = React.memo(({title, siteLink, darkMode}: ButtonPropsType) => {
    return (
        <a href={siteLink} className={darkMode ? classes.btn : classes.btnLightMode}>
            <p>{title}</p>
        </a>
    )
})




export default Button