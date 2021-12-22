import React from "react";
import classes from "./Hire.module.css";
import Title from "../GeneralComponents/Title/Title";
import Button from "../GeneralComponents/Button/Button";

type HirePropsType = {
    darkMode: boolean
}

const Hire = React.memo(({darkMode}: HirePropsType) => {
    return(
        <section>
            <div className={classes.inner}>
                <Title darkMode={darkMode} title={'How can you hire me?'}/>
                <div className={classes.btnInner}>
                    <Button darkMode={darkMode} title={'Hire me'} siteLink={'#'}/>
                    <Button darkMode={darkMode} title={'Get my CV'} siteLink={'#'}/>
                </div>
            </div>
        </section>
    )
})
export default Hire

