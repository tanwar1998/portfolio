
import React from "react";
import './style.scss';
import { DesktopOutlined, BuildOutlined, CodeOutlined } from '@ant-design/icons';
const services = [
    {
        icon: <CodeOutlined/>,
        heading: 'Front End Development',
        info: 'Product-grade web apps in React, Next.js and TypeScript — scalable architecture, design systems, and interface motion.'
    },
    {
        icon: <BuildOutlined/>,
        heading: 'Back End Development',
        info: 'Node.js, Express and MongoDB/MySQL backends, with REST/GraphQL contracts designed to scale with your frontend.'
    },
    {
        icon: <DesktopOutlined/>,
        heading: 'User Experience Development',
        info: 'Figma to pixel-perfect, accessible interfaces — interaction design, performance, and WebGL / 3D product configurators.'
    }
]

const ServiceComponent = (props) => {

    return (
        <div className="hor-row sticky-component component-back service-container-main"
            ref = { props.tmpRef }>
            <div className="app-content-container">
                <div className="hor-row main-heading-container">
                    <div className="text">
                        Some Services, I deliver
                    </div>
                </div>
                <h5 className="info-text-container">
                    I provide everything you need for your perfect website
                    <br/>Check out if you needs any of following services.
                </h5>

                <div className="hor-row services-item-container">
                    <div className="service-curtain-band" aria-hidden="true" />
                    {services.map((service, index)=>(  <div className="service-item" key={'service'+index}>
                            <div className=" hor-row service-item-inner-container">
                                <div className="icon-container">
                                    {/* <CodeOutlined/> */}
                                    { service.icon }
                                </div>
                                <div className="hor-row service-heading">
                                    {/* Front End Development */}
                                    { service.heading }
                                </div>
                                <div className="hor-row service-info">
                                    {/* Build client-side applications with modern features like SPA and maintain semantic coding style among other best practices for SEO optimisation. Use modern tech such as Nuxt (Vue.js), TailwindCSS, and GSAP. */}
                                    { service.info }
                                </div>
                            </div>
                        </div>)) }
                </div>
            </div>
        </div>
    )
}


export default ServiceComponent;