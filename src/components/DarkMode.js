import React, { useEffect, useState } from "react";
import "../styles/darkmode.css";

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState('light')
    const toggleTheme = () => {
        if ( darkMode === 'light') {
            setDarkMode('dark')
        } else {
            setDarkMode('light')
        }
    };
    useEffect(() => {
        document.body.className = darkMode;
    }, [darkMode]);
    return (
        <div className={`App ${darkMode}`}>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}
export default DarkMode;
