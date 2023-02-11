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
 
    return (
        <div data-testid="div" className={darkMode} >
            <button className="dark-mode-button" onClick={toggleDarkMode}>Dark Mode</button>
        </div>
    );
}

export default DarkMode;
