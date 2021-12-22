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

const Works = React.memo(({darkMode}: WorksPropsType) => {
    return (
        <section className={classes.inner} id={'works'}>
            <Title darkMode={darkMode} title={'Watch my latest projects'}/>
            <div className={classes.works}>
                <Work
                    projectNumber={'01'}
                    title={'Revci'}
                    text={'Revci.com is service, with which the business owner can receive instant notifications about complaints, ' +
                    'allowing them to take immediate action. It’s fast, easy to use and provides tangible results.'}
                    image={revciImg}
                    siteLink={'https://revci.com/'}
                    darkMode={darkMode}
                />
                <Work
                    projectNumber={'02'}
                    title={'NoWayOut AU'}
                    text={'Website for NoWayOut quest rooms in Vienna, Austria.'}
                    image={nowayoutImg}
                    siteLink={'https://www.nowayout-escape.at/'}
                    darkMode={darkMode}
                />
                <Work
                    projectNumber={'03'}
                    title={'NoWayOut AE'}
                    text={'Website for NoWayOut quest rooms in Dubai, AE.'}
                    image={nowayoutAeImg}
                    siteLink={'https://www.nowayout.ae/'}
                    darkMode={darkMode}
                />
                <Work
                    projectNumber={'04'}
                    title={'Lasertron'}
                    text={'Website for Lasertron game room in Linz, Austria.'}
                    image={lasertronImg}
                    siteLink={'https://lasertron-linz.at/'}
                    darkMode={darkMode}
                />
            </div>
        </section>
    )
})

export default Works