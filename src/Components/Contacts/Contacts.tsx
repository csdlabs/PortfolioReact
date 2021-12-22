import React from "react";
import classes from "./Contacts.module.css";
import Title from "../GeneralComponents/Title/Title";

type ContactsPropsType = {
    darkMode: boolean
}

const Contacts = React.memo(({darkMode}:ContactsPropsType) => {
    return(
        <section className={classes.inner} id={'contacts'}>
            <Title darkMode={darkMode} title={'Contacts'}/>
        </section>
    )
})
export default Contacts
