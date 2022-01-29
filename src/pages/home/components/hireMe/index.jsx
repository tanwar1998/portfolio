
import React from "react";
import './style.scss';
import { GithubOutlined, LinkedinOutlined, InstagramOutlined, FacebookOutlined, MailOutlined } from '@ant-design/icons';
const HireMeComponent = (props) => {

    return (<>
        <div className="hor-row sticky-component component-back hire-me-container-main"
            ref = {props.tmpRef} >
            <div className="app-content-container">
                <div className="hire-me-content">
                    <div className="">
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
                        <a href = 'https://github.com/tanwar1998/' >
                            <GithubOutlined />
                        </a>
                        <a href = 'https://www.linkedin.com/in/vineet-tanwar/' >
                            <LinkedinOutlined />
                        </a>
                        <a href = 'https://www.instagram.com/vineettanwar2000/' >
                            <InstagramOutlined />
                        </a>
                        <a href = 'https://www.facebook.com/vineet.tanwar.180/' >
                            <FacebookOutlined />
                        </a>
                        <a href = 'mailto:vineettanwar1998@gmail.com' >
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