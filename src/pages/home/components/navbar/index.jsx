import React from "react";
import './style.scss';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DownloadIcon from '@mui/icons-material/Download';

const navItems = [
    { label: 'Work', section: 'work' },
    { label: 'Services', section: 'service' },
    { label: 'Experience', section: 'experience' },
    { label: 'Skills', section: 'skills' },
    { label: 'Contact', section: 'contact' }
];

const themeOptions = [
    { mode: 'light', label: 'Day theme', Icon: LightModeIcon },
    { mode: 'dark', label: 'Night theme', Icon: DarkModeIcon },
    { mode: 'vibrant', label: 'Vibrant theme', Icon: AutoAwesomeIcon }
];

const NavbarComponent = (props) => {
    return (
        <div className="hor-row sticky-component navbar-container-main">
            <div className="app-content-container">
                <div className="logo-container-main">
                    <span className="logo-text">
                        TAN
                        <span className="special-character">V </span>
                        AR
                    </span>
                </div>
                <div className="nav-link-container">
                    <div className="nav-links-main">
                        {navItems.map((item)=>(
                            <span
                                className="link-content"
                                key={item.section}
                                onClick={() => props.scrollTo(item.section)}>
                                { item.label }
                            </span>
                        ))}
                    </div>
                    <div className="setting-container">
                        <a className="resume-link"
                            href={ process.env.PUBLIC_URL + '/resume.pdf' }
                            target="_blank" rel="noopener noreferrer"
                            download="resume.pdf"
                            aria-label="Download resume">
                            <DownloadIcon className="icon-container resume-icon" />
                        </a>
                        <div className="theme-switcher" role="group" aria-label="Theme selection">
                            {themeOptions.map(({ mode, label, Icon }) => (
                                <button
                                    type="button"
                                    key={mode}
                                    title={label}
                                    aria-label={label}
                                    aria-pressed={props.currentMode === mode}
                                    className={'theme-option' + (props.currentMode === mode ? ' theme-option-active' : '')}
                                    onClick={() => props.setMode(mode)}>
                                    <Icon className="icon-container" />
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default NavbarComponent;
