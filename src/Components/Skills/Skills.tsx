import React from "react";
import classes from "./Skills.module.css";
import Title from "../GeneralComponents/Title/Title";
import Skill from "./Skill/Skill";
import jsIcon from "../../images/js.png"
import reactIcon from '../../images/react-redux.png'
import cssIcon from '../../images/css.png'
import htmlIcon from '../../images/html.png'
import tsIcon from '../../images/ts.png'
import softIcon from '../../images/soft-skills.png'

type SkillsPropsType = {
    darkMode: boolean
}

const Skills = React.memo(({darkMode}: SkillsPropsType) => {
    return (
        <section className={classes.inner} id={'skills'}>
            <Title darkMode={darkMode} title={'Learn more about my skills'}/>
            <div className={classes.skills}>
                <Skill title={'Javascript'}
                       image={jsIcon}
                       darkMode={darkMode}
                />
                <Skill title={'React-Redux'}
                       image={reactIcon}
                       darkMode={darkMode}
                />
                <Skill title={'Typescript'}
                       image={tsIcon}
                       darkMode={darkMode}
                />
                <Skill title={'CSS/SCSS'}
                       image={cssIcon}
                       darkMode={darkMode}
                />
                <Skill title={'HTML'}
                       image={htmlIcon}
                       darkMode={darkMode}
                />
                <Skill title={'Soft skills'}
                       image={softIcon}
                       darkMode={darkMode}
                />
            </div>
        </section>
    )
})

export default Skills