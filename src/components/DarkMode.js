import React, { useEffect, useState } from "react";
import "../styles/darkmode.css";

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState('light')
    const toggleDarkMode = () => {
        if ( darkMode === 'light') {
            setDarkMode('dark')
        } else {
            setDarkMode('light')
        }
    };
    useEffect(() => {
        document.body.className = darkMode;
    }, [darkMode]);

    if (darkMode === 'dark') {

    }
    return (
        <div className={`App ${darkMode}`}>
            <button className="dark-mode-button" onClick={toggleDarkMode}>Toggle Darkmode</button>
        </div>
    );
}
export default DarkMode;
