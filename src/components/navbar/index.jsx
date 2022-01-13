import React, { useState } from "react";
import { Modal } from 'antd';
import { MoreOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";

import './style.scss';


const NavBarComponent = (props) => {
    const [visible, setVisible] = useState(false);

    const NavElement = () => (
        <div className="nav-item-container">
            <div className="nav-item">
                <NavLink to="/">Home</NavLink>
            </div>
            <div className="nav-item">
                <NavLink to="/about-us"> About </NavLink>
                
                <div className="nav-sub-item-container">
                    <div className="hor-row nav-sub-item-label">
                        <NavLink to="/about-us/our-team">Our Team</NavLink>
                    </div>
                    <div className="hor-row nav-sub-item-label">
                        <NavLink to="/about-us/image-gallery">Image Gallery</NavLink>
                        
                    </div>
                </div>
            </div>
            <div className="nav-item">Products</div>
            <div className="nav-item">Manufacturing</div>
            <div className="nav-item">Latest News</div>
            <div className="nav-item">
                <span className="talk-to-us"> Talk to Us </span></div>
            <div className="nav-item">Blog</div>
        </div>
    )

    const ModalContent = React.forwardRef( (props, ref) => (
        <Modal
            footer = {null}
            closable = { null }
            className="menu-modal-class"
            visible={props.visible}
            onOk={() => props.setVisible(false)}
            onCancel={() => props.setVisible(false)}
            ref = { ref }
            style = {{
                overflow: 'hidden',
                minHeight: '100vh',
                width: 'calc(100% - 30px)',
                left: '0px',
                position: 'absolute',
                background: '#fff',
                maxWidth: '300px'
            }}
            bodyStyle={{
                padding: '10px 0px 10px 20px'
            }}
            >
                <CloseCircleOutlined className="close-menu-modal-button" 
                    onClick={() => props.setVisible(false) } />
               <NavElement/>
        </Modal>)
    )

    return (
        <div className="hor-row nav-bar-component-main">
            <div className="hor-row app-content-main">
                <div className="logo-container-main">
                    <div className="logo-item"></div>
                </div>
                <MoreOutlined className = 'more-icon' 
                    onClick={() => setVisible(true)} />
                <NavElement/>
            </div>

            <ModalContent 
                visible = { visible }
                setVisible = { setVisible }
            />
        </div>
    )

}

export default NavBarComponent;