
import React from "react";
import './style.scss';
import Tilt from 'react-parallax-tilt';

const techStack = [
    {
        name: 'Rest API'
    },
    {
        name: 'GraphQL'
    },
    {
        name: 'React js',
        isMain: true,
    },
    {
        name: 'CSS'
    },
    {
        name: 'Github'
    },
    {
        name: 'HTML',
        isMain: true,
    },
    {
        name: 'npm'
    },
    {
        name: 'ES5/ES6',
        isMain: true,
    },
    {
        name: 'JSON'
    },
    {
        name: 'PWA'
    },
    {
        name: 'Jquery'
    },
    {
        name: 'Vue js',
        isMain: true,
    },
    {
        name: 'Mysql'
    },
    {
        name: 'MongoDB'
    },
    {
        isMain: true,
        name: 'PHP'
    },
    {
        name: 'Git'
    },
    {
        name: 'WIX'
    },
    {
        name: 'TypeScript'
    },
    {
        name: 'SASS',
        isMain: true,
    },
    {
        name: 'D3'
    },
    {
        name: 'yarn'
    },
    {
        name: 'Ant Design'
    },
    {
        name: 'Material UI'
    },
    {
        name: 'Laravel',
        isMain: true,
    },
    {
        name: 'Next Js'
    },
    {
        name: 'Redux'
    },
    {
        isMain: true,
        name: 'CodeIgniter'
    },
    {
        name: 'Axios'
    },
    {
        name: 'Heroku'
    },
    {
        name: 'Tailwind'
    },
    {
        name: 'Angular js',
        isMain: true,
    },
    {
        name: 'Penetration Testing'
    },
    {
        name: 'Express js'
    },
    {
        name: 'Bootstrap'
    },
]

const TopCategoriesComponent = (props) => {

    return (
        <div className="hor-row sticky-component component-back categories-container-main">
            <div className="app-content-container">
                <div className="hor-row main-heading-container">
                    <div className="text">
                        My Top Categories
                    </div>
                </div>
                <h5 className="info-text-container">
                    I currently work remotely with a selected freelance client base being open for new opportunities.
                
                    <br/>Check out my some of tech stacks.
                </h5>

                <div className="hor-row categories-content-main">
                    
                    <div className="categories-tilt-container">
                        <Tilt glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all">
                        <div className="categories-background-container">
                            <div className="hor-row categories-list-container">

                                {techStack.map((stack, index)=>(
                                    <span className={stack.isMain ? 'main': ''}
                                        key = { 'stack'+ index} > 
                                        { stack.name }
                                    </span>
                                ))}

                            </div>
                        </div>
                        </Tilt>
                    </div>
                </div>

                <h5 className="hor-row info-text-container">
                        And I would love to work with/on any new JS library/Project :)
                    </h5>
            </div>
        </div>
    )
}
export default TopCategoriesComponent;