import React from "react";
import classes from "./Header.module.css";
import headerLogo from '../../images/header-logo.png'
import switcherArrow from '../../images/arrow.png'

type HeaderPropsType = {
    darkMode: boolean
    setDarkMode: any
}


const Header = React.memo(({darkMode, setDarkMode}: HeaderPropsType) => {
    return (
        <header id={'header'}>
            <div className={classes.inner}>
                <div className={classes.logo}>
                    <img src={headerLogo} alt="header-logo"/>
                </div>
                <div className={classes.switcherContainer}>
                    <p className={classes.text}> Dark or light, its up to you </p>
                    <div className={classes.switcher}>
                        <div className="toggle-container">
                            <span className="toggle">
                                <input
                                    checked={darkMode}
                                    onChange={() => setDarkMode((prevMode: any) => !prevMode)}
                                    id="checkbox"
                                    className="checkbox"
                                    type="checkbox"
                                />
                                <label htmlFor="checkbox"/>
                            </span>
                        </div>
                    </div>
                    <img src={switcherArrow} alt="switcher-arrow" className={classes.switcherArrow}/>
                </div>
                <ul className={classes.menu}>
                    <li className={classes.item}>
                        <a href="#header" className={classes.link}>
                            Home
                        </a>
                    </li>
                    <li className={classes.item}>
                        <a href="#skills" className={classes.link}>
                            Skills
                        </a>
                    </li>
                    <li className={classes.item}>
                        <a href="#works" className={classes.link}>
                            Works
                        </a>
                    </li>
                    <li className={classes.item}>
                        <a href="#contacts" className={classes.link}>
                            Contacts
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
})

export default Header