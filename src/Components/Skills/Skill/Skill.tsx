import React from "react";
import classes from "./Skill.module.css";
import skillBg from "../../../images/hero-bg-light.jpg"
import skillBgDark from "../../../images/hero-bg-dark.jpg"

type SkillPropsType = {
    title: string
    image: string
    text: string
    darkMode: boolean

}

const Skill = React.memo(({title, image, text, darkMode}: SkillPropsType) => {
    return(
        <div className={darkMode ? classes.inner : classes.innerLightMode}>
            <div className={classes.bg}>
                <img src={darkMode ? skillBg: skillBgDark} alt="skills-bg"/>
            </div>
            <div className={darkMode ? classes.description : classes.descriptionLightMode}>
                <img src={image} alt="logo" className={classes.logo}/>
                <h3 className={classes.title}>{title}</h3>
                <p className={classes.text}>{text}</p>
            </div>

        </div>
    )
})

export default Skill