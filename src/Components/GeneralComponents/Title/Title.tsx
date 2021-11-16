import React from "react";
import classes from "./Title.module.css";

type TitlePropsType = {
    title: string
    darkMode?: boolean
}




const Title = ({title, darkMode}: TitlePropsType) => {
    return(
        <h2 className={darkMode? classes.title : classes.titleLightMode} >{title}</h2>
    )
}

export default Title