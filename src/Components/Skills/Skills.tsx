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
import otherSkillsIcon from '../../images/other-skills.png'

type SkillsPropsType = {
    darkMode: boolean
    setDarkMode: any
}

const Skills = ({darkMode, setDarkMode}: SkillsPropsType) => {
    return (
        <section className={classes.inner} id={'skills'}>
            <Title darkMode={darkMode} title={'Learn more about my skills'}/>
            <div className={classes.skills}>
                <Skill title={'Javascript'}
                       image={jsIcon}
                       text={'Bla bla bla Bla bla bla' +
                       ' Bla bla bla Bla bla bla'}
                       darkMode={darkMode}
                       setDarkMode={setDarkMode}
                />
                <Skill title={'React-Redux'}
                       image={reactIcon}
                       text={'Bla bla bla Bla bla bla' +
                       ' Bla bla bla Bla bla bla'}
                       darkMode={darkMode}
                       setDarkMode={setDarkMode}
                />
                <Skill title={'CSS/SCSS'}
                       image={cssIcon}
                       text={'Bla bla bla Bla bla bla' +
                       ' Bla bla bla Bla bla bla'}
                       darkMode={darkMode}
                       setDarkMode={setDarkMode}
                />
                <Skill title={'HTML'}
                       image={htmlIcon}
                       text={'Bla bla bla Bla bla bla' +
                       ' Bla bla bla Bla bla bla'}
                       darkMode={darkMode}
                       setDarkMode={setDarkMode}
                />
                <Skill title={'Typescript'}
                        image={tsIcon}
                       text={'Bla bla bla Bla bla bla' +
                       ' Bla bla bla Bla bla bla'}
                       darkMode={darkMode}
                       setDarkMode={setDarkMode}

                />
                <Skill title={'Soft skills'}
                       image={softIcon}
                       text={'Bla bla bla Bla bla bla' +
                       ' Bla bla bla Bla bla bla'}
                       darkMode={darkMode}
                       setDarkMode={setDarkMode}

                />
                <Skill title={'Other skills'}
                       image={otherSkillsIcon}
                       text={'Bla bla bla Bla bla bla' +
                       ' Bla bla bla Bla bla bla'}
                       darkMode={darkMode}
                       setDarkMode={setDarkMode}
                />
            </div>
        </section>
    )
}

export default Skills