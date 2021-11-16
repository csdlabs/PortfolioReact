import React from "react";
import classes from "./HeroBlock.module.css";
import heroBgLight from "../../images/hero-bg-light.jpg"
import heroBgDark from "../../images/hero-bg-dark.jpg"


type HeroBLockPropsType = {
    darkMode: boolean
    setDarkMode: any
}


const HeroBlock = ({darkMode, setDarkMode}: HeroBLockPropsType) => {
    return(
        <section className={classes.inner}>
            <img src={darkMode ? heroBgLight : heroBgDark} alt="hero-block-bg"/>
            <div className={classes.bgOverlay}>
                <p className={darkMode ? classes.bgOverlayDark : classes.bgOverlayLight}>It's Dmytriy</p>
            </div>
        </section>
    )
}

export default HeroBlock