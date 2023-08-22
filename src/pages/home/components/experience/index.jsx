
import React, { useState } from "react";
import './style.scss';
import { RightCircleOutlined } from '@ant-design/icons';

const ExperienceComponent = (props) => {

    const [openedIndex, setOpenedIndex] = useState(0);

    const companies = [
        {
            shortName: 'Digitize Solutions',
            name: 'Digitize Solutions PVT LTD',
            duration: 'Nov 2021 to Present',
            type: 'Full Time Job',
            post: 'Software Engineer',
            details:[
                'Write modern, performant, maintainable code for a diverse array of client projects.',
                'Working on a project for Motorola Solutions as a UI team lead from last 1 year. Also worked on other internal projects with react and threekit.',
                'Tech Stack: React js, Vue 2, Redux, Vuex, Node js, Threekit.'
            ]
        },
        {
            shortName: 'Global Garner',
            name: 'Global Garner Sales Services Limited',
            duration: 'Mar 2021 to Sep 2021',
            type: 'Full Time Job',
            post: 'Full Stack Developer',
            details:[
                'Project architecture, team leader for the frontend development for UPOS app.',
                'Communicate with multi-disciplinary teams of UI/UX designers, backend developer lead, project manager, CTO and QA testing team on a weekly basis.',
                "Tech Stack: React js, UNIT testing, Redux."
            ]
        },
        {
            shortName: 'Nanotech Soft-App',
            name: 'Nanotech Soft-App IT Solution',
            duration: 'Sep 2020 to Mar 2021',
            type: 'Full Time Job',
            post: 'Product Developer',
            details:[
                'Project architecture and lead developer for frontend developement.',
                'Communicate with multi-disciplinary teams of UI/UX designer, backend developer, and project manager on a daily basis.',
                "Tech Stack: React js, Redux."
            ]
        },
        {
            shortName: '75way',
            name: '75way Technologies PVT. LTD.',
            duration: 'Jan 2020 to Jul 2020',
            type: 'Internship',
            post: 'Software Intern',
            details:[
                'Write modern, performant, maintainable code for a diverse array of client projects.',
                'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Vue js, React, Angular, Node js.',
                'Communicate with multi-disciplinary teams of engineers, designers and clients on a daily basis.'
            ]
        },
        {
            shortName: 'Susurla Impex',
            name: 'Susurla Impex Pvt Ltd',
            duration: 'Aug 2019 to Sep 2019',
            type: 'Internship',
            post: 'Intern',
            details:[
                'Write modern, performant, maintainable code for a diverse array of client and internal projects',
                'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React, Angular, AWS Lambda, Node js',
                'Communicate with multi-disciplinary teams of backend developer, and project manager on a daily basis'
            ]
        },
        {
            shortName: 'ReadyToGo',
            name: 'ReadyToGo',
            duration: 'Jun 2019',
            type: 'Internship',
            post: 'Summer Intern',
            details:[
                'Write modern, performant, maintainable code for a diverse array of client and internal projects',
                'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, PHP',
                'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
            ]
        }
    ]

    return (
        <div className="hor-row sticky-component component-back experience-container-main" >
            <div className="app-content-container">
                <div className="hor-row main-heading-container">
                    <div className="text">
                        Where I've Worked
                    </div>
                </div>
                <h5 className="info-text-container">
                    I have worked in the software industry for the past 2 and half years. 
                    <br/>Currently, I'm working as Software Engineer at Digitige Solutions.
                </h5>

                <div className="hor-row experience-content-main">
                    <div className="left-side-container">
                        {
                            companies.map((company, index)=>(
                            <div className={"hor-row company-name" + ( index === openedIndex ? ' selected-company-name':'') }
                                onClick={ () =>  setOpenedIndex(index)}>
                                { company.shortName }
                            </div>
                            ))
                        }

                    </div>
                    <div className="right-side-container">
                        <div className="hor-row heading-main">
                            {companies[openedIndex].post + ' @'}
                            <span style = {{color: '#3276fb', marginLeft:'5px'}}>
                                {companies[openedIndex].name}
                            </span>
                        </div>
                        <div className="hor-row duration-text">
                            {companies[openedIndex].duration}
                        </div>
                        <div className="hor-row job-type-text">
                            {companies[openedIndex].type}
                        </div>
                        <div className="hor-row experience-info-main">
                            {
                                companies[openedIndex].details.map((detail)=>(
                                    <>
                                        <RightCircleOutlined className="info-icon" />
                                        { detail + '.' }
                                        <br/> <br/>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ExperienceComponent;