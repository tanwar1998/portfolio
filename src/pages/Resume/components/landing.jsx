import React from "react";
import Vineet from '../../../assets/images/vineet.png';
import {BasicInfo, BasicExp, TechStack, MainExp, ExtraStack, Hobbies, Internship,newTech } from './data.js';

const Component = () => {
    
    const getExpData = (data, newFormat) => {
        return data.map((item, i)=>(
            <div className="hor-row card-main" key={i + 'subitem'}>
                <h3>
                    { item.h3 }
                </h3>
                <div className="hor-row hor-line2"></div>
                {item.details.map((subItem, j)=>(
                    <div className="hor-row card-content-row" key={j + 'subitem'}>
                        <span className="circle"/>
                    
                        <div className="hor-row card-text-row" >
                            <div className="hor-row card-heading">
                                {subItem.h4}
                            </div>
                            <div className="hor-row date-row">
                                { subItem.date }
                            </div>
                            <div className="hor-row card-sub-heading">
                                { subItem.info }
                            </div>
                            {newFormat ? subItem.details2?.map((data, k)=>(
                                <div className="hor-row date-row details" key = {'details' + k} >
                                    <span style={{fontWeight: "bold"}}>{data.h1}</span>
                                    { " " + data.h2 }
                                </div>
                            )) : subItem.details?.map((data, k)=>(
                                <div className="hor-row date-row details" key = {'details' + k} >
                                    { '> ' + data }
                                </div>
                            ))}
                            
                        </div>
                    </div>
                ))}
            </div>
        ))
    }

    const getNewTechStack = (content) => {
        console.log('data in new text stack',content)
        return content.map((data, i)=>(
            <div className="hor-row tech-stack-container">
                <div className="hor-row card-main" >
                    <h3>
                        { data.h1 }
                    </h3>
                    <div className="hor-row hor-line2"/>
                    { data.list.map((item, i)=>(
                        <div className="hor-row tech-item-main">
                            <div className="hor-row card-heading" >
                                <span style={{fontWeight: "bold"}}> { item.h1 }</span>
                               
                                {" " + item.h2 }
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        ))
    }
    const getTechStack = (data) => {
        return data.map((item, i)=>(
            <div className="hor-row tech-item-main">
                <div className="hor-row card-heading">
                    { item.text }
                </div>
                <div className="hor-row tech-item-container">
                    {Array.from({ length: 10 }).map((el, i) =>(
                        <span className={ i < item.rate ? "circle2" : 'void-circle'}/>
                    ))}
                </div>
            </div>
        ))
    }

    return (
        <div className="hor-row resume-component-main">
            <div className="hor-row resume-component">
                <div className="hor-row header-container">
                    <div className="image-container">
                        <img src={Vineet} alt='vineet'/>
                        <div className="hor-row name-row">
                            Vineet Tanwar
                            <br/> Software Engineer
                        </div>
                    </div>
                    <div className="hor-row right-heading-block">
                        <div className="hor-row heading-main">
                            PROFESSIONAL SUMMARY
                        </div>
                        <div className="hor-row heading-second">
                        Innovative Software Engineer and UI Team Lead with 6+ years of experience architecting high-performance web applications for global brands like Motorola Solutions. Expert in the React/Vue/Node.js ecosystem with a track record of building maintainable, scalable architectures and mentoring cross-functional teams to meet aggressive delivery timelines. Driven by a commitment to sophisticated project architecture and industry-leading technology.
                        </div>
                        <div className="hor-row hor-line"></div>
                        { BasicInfo.map((item, i)=>(
                            <div className="hor-row basic-info-container">
                                <div className="hor-row basic-name">
                                    {item.key}
                                </div>
                                <div className="hor-row">
                                    {item.link ? item.value :  ': '+ item.value}
                                </div>
                            </div>
                        )) }
                    </div>
                </div>

                <div className="hor-row main-content-main">
                    <div className="hor-row">
                        {getExpData(MainExp,true)}
                    </div>
                    <div className="hor-row">
                        {getExpData(Internship)}
                    </div>
                </div>

                <div className="hor-row main-content-main" style={{marginTop: '-40px' , paddingBottom: '10px'}}>
                    <div className="hor-row">
                        {getExpData(BasicExp)}
                        <div className="hor-row card-main" >
                            <h3>
                                HOBBIES
                            </h3>
                            <div className="hor-row hor-line2"/>
                            {Hobbies.map((item, i)=>(<div className="hor-row card-content-row" 
                                style= {{marginBottom: '3px'}} >
                                <span className="circle"/>
                            
                                <div className="hor-row card-text-row" key = {'i'+ i}>
                                    <div className="hor-row card-sub-heading">
                                        { item.text + '.' }
                                    </div>
                                </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="hor-row tech-stack-container">
                       
                        { getNewTechStack(newTech) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component;