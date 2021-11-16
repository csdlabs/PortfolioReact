import React from "react";
import classes from "./Work.css.module.css";
import Button from "../../GeneralComponents/Button/Button";


export type WorkPropsType = {
    projectNumber: string
    title: string
    text: string
    image: string
    siteLink: string
    darkMode: boolean
}

const Work = ({projectNumber, title, text, image, siteLink, darkMode}: WorkPropsType) => {
    return(
        <div className={classes.work}>
            <div className={classes.bg_inner}>
                <img src={image} alt="background"/>
            </div>
            <div className={darkMode ? classes.description : classes.descriptionLightMode}>
                <div className={classes.title_inner}>
                    <p className={classes.projectNumber}>{projectNumber}</p>
                    <p className={classes.projectTitle}>{title}</p>
                </div>
                <p className={classes.text}>{text}</p>
                <Button darkMode={darkMode} title={'Visit project'} siteLink={siteLink}/>
            </div>
        </div>
    )
}

export default Work