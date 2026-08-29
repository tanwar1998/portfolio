
import React from "react";
import './style.scss';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DownloadIcon from '@mui/icons-material/Download';

const navItems = [
    { label: 'Work', section: 'work' },
    { label: 'Services', section: 'service' },
    { label: 'Experience', section: 'experience' },
    { label: 'Skills', section: 'skills' },
    { label: 'Contact', section: 'contact' }
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
                        {props.currentMode === 'dark' ? <LightModeIcon className="icon-container"
                            onClick = {() => props.setMode('light')} />
                        : <DarkModeIcon className="icon-container"
                            onClick = {() => props.setMode('dark')} />
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}


export default NavbarComponent;
