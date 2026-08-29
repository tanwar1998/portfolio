
import React from "react";
import './style.scss';
import { GithubOutlined, LinkedinOutlined, InstagramOutlined, FacebookOutlined, MailOutlined } from '@ant-design/icons';
const HireMeComponent = (props) => {

    return (<>
        <div className="hor-row sticky-component component-back hire-me-container-main"
            ref = {props.tmpRef} >
            <div className="app-content-container">
                <div className="hire-me-content">
                    <div className="hire-me-text">
                        <div className="hor-row main-heading-container">
                            <div className="text">
                                Hire me
                            </div>
                        </div>
                        <h5 className="info-text-container">
                            I am on many of plateforms listed below.

                            <br/>You can reach me, by any of following links.
                        </h5>
                    </div>
                    <div className="hor-row links-container-main">
                        <a href = 'https://github.com/tanwar1998/' target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <GithubOutlined />
                        </a>
                        <a href = 'https://www.linkedin.com/in/vineet-tanwar/' target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <LinkedinOutlined />
                        </a>
                        <a href = 'https://www.instagram.com/vineettanwar2000/' target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <InstagramOutlined />
                        </a>
                        <a href = 'https://www.facebook.com/vineet.tanwar.180/' target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FacebookOutlined />
                        </a>
                        <a href = 'mailto:vineettanwar1998@gmail.com' aria-label="Email">
                            <MailOutlined />
                        </a>
                    </div>
                </div>

            </div>
        </div>
        <div className="footer-container-main">
            <i>Thanks for reading!</i>
        </div>
    </>)
}

export default HireMeComponent;