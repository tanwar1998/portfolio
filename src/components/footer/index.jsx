import React from "react";
import {TwitterOutlined,  LinkedinOutlined, InstagramOutlined, FacebookOutlined} from '@ant-design/icons';
import './style.scss';

const FooterComponent = (props) => {
    return (
        <div className="hor-row footer-component-main">

            <div className="hor-row app-content-main">
                <div className="footer-left-side-component">
                    <div className="hor-row">
                        <div className="footer-logo-container"></div>
                    </div>
                    <div className="hor-row copyright-text">
                        Copyright © 2021 La Santé Pharmaceutique All Rights Reserved
                    </div>
                </div>
                <div className="footer-centered-component">
                    <div className="hor-row quick-links-heading">
                        QUICK LINKS
                    </div>
                    <div className="hor-row links-list-main">
                        <span className="quick-links">Latest News</span>
                        <span className="quick-links">Products</span>
                        <span className="quick-links">Contact Us</span>
                        <span className="quick-links">About La Sante</span>
                    </div>
                </div>
                <div className="hor-row social-icons-container">
                    <div className="icon-container">
                        <FacebookOutlined />
                    </div>
                    <div className="icon-container">
                        <TwitterOutlined />
                    </div>
                    <div className="icon-container">
                        <LinkedinOutlined />
                    </div>
                    <div className="icon-container">
                        <InstagramOutlined />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FooterComponent;