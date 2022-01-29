
import React from "react";
import './style.scss';
import GlobalGarner from '../../../../assets/images/global.png';
import Visably from '../../../../assets/images/visably.png';
import Limecall from '../../../../assets/images/lime.png';
import { LaunchOutlined } from '@mui/icons-material';

const WorkComponent = (props) => {
    const work = [
        {
            text: 'I worked as project architecture and team leader for the frontend developer.',
            stack: [ 'React js', 'Material UI', 'Redux', 'Axios' ],
            image: GlobalGarner, 
            link: 'https://globalgarner.com/'
        },
        {
            text: 'I  worked as front end developer to implement Figma Design and new features.',
            stack: [ 'React js', 'Typescript', 'Redux', 'Tailwind CSS' ],
            image: Visably, 
            link: 'https://visably.com/'
        },
        {
            text: 'I worked as React js developer to implement and maintain different features.',
            stack: [ 'React js', 'Material UI', 'Bootstrap', 'Axios' ],
            image: Limecall, 
            link: 'https://limecall.com/'
        },
    ]



    return (
        <div className="hor-row sticky-component component-back work-sample-container-main"
            ref = { props.tmpRef } 
        >
            <div className="app-content-container">
                <div className="hor-row main-heading-container">
                    <div className="text">
                        Some Things I've Built
                    </div>
                </div>
                <h5 className="info-text-container">
                    From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and Node.JS. 
                    <br/>Check out my latest web software development portfolio projects.
                </h5>

                <div className="hor-row work-sample-content-main">
                    {work.map((item, index)=>(
                        <div className="work-block-main" key = {'work' + index} >
                            <img src={ item.image } alt='website'/>
                            <div className="info-container">
                                <div className="hor-row tech-stack">
                                    { item.stack.map((stack, stackIndex)=>(
                                        <span key = { 'stack' + stackIndex } >
                                            { stack }
                                        </span>
                                    )) }
                                </div>
                                <a className="hor-row visit-link" href={ item.link }>
                                    <LaunchOutlined className='icon'/>
                                </a>
                            </div>
                            <div className="hor-row work-info">
                                { item.text }
                            </div>
                        </div>


                    )) }

                </div>
            </div>
        </div>
    )
}


export default WorkComponent;