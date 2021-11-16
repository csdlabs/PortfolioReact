import React from "react";
import Title from "../GeneralComponents/Title/Title";
import classes from "./Works.module.css";
import Work from "./Work/Work";
import revciImg from "../../images/revci.png"
import nowayoutImg from "../../images/nowayout.png"
import nowayoutAeImg from "../../images/nowayoutae.png"
import lasertronImg from "../../images/linz.png"


type WorksPropsType = {
    darkMode: boolean
}

const Works = ({darkMode}: WorksPropsType) => {
    return (
        <section className={classes.inner} id={'works'}>
            <Title darkMode={darkMode} title={'Watch my latest projects'}/>
            <div className={classes.works}>
                <Work
                    projectNumber={'01'}
                    title={'Revci'}
                    text={'Bla bla bla' +
                    'Bla bla bla' +
                    'Bla bla bla' +
                    'Bla bla bla'}
                    image={revciImg}
                    siteLink={'https://revci.com/'}
                    darkMode={darkMode}
                />
                <Work
                    projectNumber={'02'}
                    title={'NoWayOut AU'}
                    text={'Bla bla bla' +
                    'Bla bla bla' +
                    'Bla bla bla' +
                    'Bla bla bla'}
                    image={nowayoutImg}
                    siteLink={'https://www.nowayout-escape.at/'}
                    darkMode={darkMode}
                />
                <Work
                    projectNumber={'03'}
                    title={'NoWayOut AE'}
                    text={'Bla bla bla' +
                    'Bla bla bla' +
                    'Bla bla bla' +
                    'Bla bla bla'}
                    image={nowayoutAeImg}
                    siteLink={'https://www.nowayout.ae/'}
                    darkMode={darkMode}
                />
                <Work
                    projectNumber={'04'}
                    title={'Lasertron'}
                    text={'Bla bla bla' +
                    'Bla bla bla' +
                    'Bla bla bla' +
                    'Bla bla bla'}
                    image={lasertronImg}
                    siteLink={'https://lasertron-linz.at/'}
                    darkMode={darkMode}
                />
            </div>
        </section>
    )
}

export default Works