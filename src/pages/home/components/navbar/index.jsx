
import React from "react";
import './style.scss';
// import {FavoriteBorder} from '@material-ui/icons';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
// import LightModeIcon from '@mui/icons-material/LightMode';
import LightModeIcon from '@mui/icons-material/LightMode';


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
                    <span className="link-content">
                        Work
                    </span>
                    <span className="link-content">
                        Services
                    </span>
                    <span className="link-content">
                        Experience
                    </span>
                    <span className="link-content">
                        Top Categories
                    </span>
                    <span className="link-content">
                        Hire Me
                    </span>

                    <div className="setting-container">
                        <LightModeIcon className="icon-container"/>
                    </div>


                </div>
            </div>
        </div>
    )
}


export default NavbarComponent;