
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
                    "Headed frontend systems architecture for an enterprise-scale Motorola Solutions platform for 3+ years, defining modular design patterns and data contracts between client and backend microservices.",

                    " Architected integration of Threekit 3D configuration tools into a React ecosystem, managing complex data sync and asset-loading performance for a smoother user experience.",

                    "Led a team of engineers, standardizing linting, automated unit testing, and CI/CD pipelines to maintain architectural integrity across distributed client applications.",

                    "Leveraged AI coding assistants (Copilot, ChatGPT) across development, debugging, code review, and documentation to speed up delivery cycles."
                ]
        },
        {
            shortName: 'Global Garner',
            name: 'Global Garner Sales Services Limited',
            duration: 'Mar 2021 to Sep 2021',
            type: 'Full Time Job',
            post: 'Full Stack Developer',
            details:[
                    "Designed the architectural contract and API integration strategy (REST/GraphQL) between the UPOS mobile/web system and backend microservices." ,

                    "Built client-side data architecture and caching layers using Redux, reducing redundant network calls and improving responsiveness.",

                    "Implemented unit testing protocols alongside React and Redux to improve application stability and reduce production bugs"
                ]
        },
        {
            shortName: 'Nanotech Soft-App',
            name: 'Nanotech Soft-App IT Solution',
            duration: 'Sep 2020 to Mar 2021',
            type: 'Full Time Job',
            post: 'Product Developer',
            details:[
                    "Acted as lead developer for frontend initiatives, owning initial project architecture and core feature development.",
                    "Built robust state management systems using React.js and Redux; collaborated daily with designers and engineers in an agile workflow."
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
        <div className="hor-row sticky-component component-back experience-container-main"
            ref = { props.tmpRef }>
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
                            <div className={ "hor-row company-name " + ( index === openedIndex ? 'selected-company-name':'') }
                                key={ 'company' + index }
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
                                companies[openedIndex].details.map((detail, index)=>(
                                    <p className="detail-item" key={ 'detail' + index }>
                                        <RightCircleOutlined className="info-icon" />
                                        <span>{ detail + '.' }</span>
                                    </p>
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