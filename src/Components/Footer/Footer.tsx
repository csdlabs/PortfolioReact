import React from "react";
import classes from "./Footer.module.css";
import footerImg from '../../images/footer-img.png'
import Title from "../GeneralComponents/Title/Title";
import telegramIcon from "../../images/telegram.png"
import gmailIcon from "../../images/gmail.png"


type FooterPropsType = {
    darkMode: boolean
}

const Footer = React.memo(({darkMode} : FooterPropsType) => {
    return (
        <footer>
            <div className={classes.inner}>
                <img src={footerImg} alt="footer-img" className={classes.image}/>
                <Title darkMode={darkMode} title={'Breathe life into your projects'}/>
                <div className={classes.icons}>
                    <a href='https://t.me/b4ldezh' className={classes.icon}>
                        <img src={telegramIcon} alt="Telegram"/>
                    </a>
                    <a href='mailto:pidenkodmitriy@gmail.com' className={classes.icon}>
                        <img src={gmailIcon} alt="Gmail"/>
                    </a>
                </div>
                <p className={darkMode ? classes.copyright : classes.copyrightLightMode}>All right reserved ©</p>
            </div>
        </footer>
    )
})

export default Footer