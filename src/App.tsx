import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import HeroBlock from "./Components/HeroBlock/HeroBlock";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";
import Hire from "./Components/Hire/Hire";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";

function App() {
    const [darkMode, setDarkMode] = React.useState(getInitialMode());
    React.useEffect(() => {
        localStorage.setItem("dark", JSON.stringify(darkMode));
    }, [darkMode]);

    function getInitialMode() {
        const isReturningUser = "dark" in localStorage;
        const savedMode = JSON.parse(localStorage.getItem("dark") as string);
        const userPrefersDark = getPrefColorScheme();
        // if mode was saved --> dark / light
        if (isReturningUser) {
            return savedMode;
            // if preferred color scheme is dark --> dark
        } else if (userPrefersDark) {
            return true;
            // otherwise --> light
        } else {
            return false;
        }
        // return savedMode || false;
    }

    function getPrefColorScheme() {
        if (!window.matchMedia) return;

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }


    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <Header
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <main>
                <HeroBlock
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />
                <Skills
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />
                <Works darkMode={darkMode}/>
                <Hire darkMode={darkMode}/>
                <Contacts darkMode={darkMode}/>
            </main>
            <Footer darkMode={darkMode}/>
        </div>
    );
}

export default App;
