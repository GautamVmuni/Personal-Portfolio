import React, { useEffect, useState } from 'react'
import ThemeItem from './ThemeItem'
import { themes } from '../data';
import { FaCog, FaMoon } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import './themes.css';

const getLocalStorageColor = () => {
    let color = 'hsl(88, 65%, 43%)';
    if(localStorage.getItem('color')){
        color = localStorage.getItem('color');
    }

    return color;
};

const getLocalStorageTheme = () => {
    let theme = 'dark-theme';
    if(localStorage.getItem('theme')){
        theme = localStorage.getItem('theme');
    }

    return theme;
};

const Themes = () => {

    const [showSwitcher, setShowSwitcher] = useState(false);
    const [color, setColor] = useState(getLocalStorageColor());
    const [theme, setTheme] = useState(getLocalStorageTheme());

    const changeColor = (color) => {
        setColor(color);
    };

    const toggleTheme = () => {
        if(theme === 'light-theme'){
            setTheme('dark-theme');
        }else{
            setTheme('light-theme');
        }
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', color);
        localStorage.setItem('color', color);
    }, [color]);

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

  return (
    <div>
        <div className={`${showSwitcher ? 'show-switcher' : ''} style_switcher`}>
            <div className="style_switcher-toggler" onClick={() => setShowSwitcher(!showSwitcher)}>
                <FaCog />
            </div>

            <div className="theme_toggler" onClick={toggleTheme}>
                {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
            </div>

            <h3 className="style_switcher-title">Style Switcher</h3>
            <div className="style_switcher-items">
                {themes.map((theme, index) => {
                    return <ThemeItem key={theme.id} {...theme} changeColor={changeColor} />;
                })}
            </div>

            <div className="style_switcher-close" onClick={() => setShowSwitcher(!showSwitcher)}>&times;</div>
        </div>
    </div>
  )
}

export default Themes