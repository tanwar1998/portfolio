
import React from "react";
import './style.scss';
import { MonitorOutlined, DesktopOutlined, BuildOutlined, CodeOutlined, Html5Outlined } from '@ant-design/icons';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import LogoDevOutlinedIcon from '@mui/icons-material/LogoDevOutlined';

const services = [
    {
        icon: <CodeOutlined/>,
        heading: 'Front End Development',
        info: 'Build client-side applications with modern features like SPA and maintain semantic coding style among other best practices for SEO optimisation. Use modern tech such as Nuxt (Vue.js), TailwindCSS, and GSAP.'
    },
    {
        icon: <BuildOutlined/>,
        heading: 'Back End Development',
        info: 'Build scalable and maintainable server applications using modern technology stacks such as Node.js, Express, and MongoDB, Mysql, Laravel, CodeIgniter'
    },
    {
        icon: <DesktopOutlined/>,
        heading: 'User Experience Development',
        info: `I design your website to be as easy to use as possible while guiding users towards the end goal. Putting the user's experience first, will ensure more loyal users increasing long term sales.`
    }
]

const ServiceComponent = (props) => {


// import { LaunchOutlined } from '@mui/icons-material';

{/* <MonitorOutlined />
<DesktopOutlined />
<BuildOutlined />
<CodeOutlined />
<Html5Outlined /> */}



    return (
        <div className="hor-row sticky-component component-back service-container-main">
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
                    {services.map((service)=>(  <div className="service-item">
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