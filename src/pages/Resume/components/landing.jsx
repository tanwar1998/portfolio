import React from "react";
import Vineet from '../../../assets/images/vineet.png';
import {BasicInfo, BasicExp, TechStack, MainExp, ExtraStack, Hobbies } from './data.js';

const Component = () => {
    
    const getExpData = (data) => {
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
                        </div>
                    </div>
                ))}
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
                            <br/> Full Stack Developer
                        </div>
                    </div>
                    <div className="hor-row right-heading-block">
                        <div className="hor-row heading-main">
                            CAREER GOALS
                        </div>
                        <div className="hor-row heading-second">
                            To be get by a technology developed by me 
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
                        {getExpData(BasicExp)}
                    </div>
                    <div className="hor-row tech-stack-container">
                        <div className="hor-row card-main" >
                            <h3>
                                TECH STACK
                            </h3>
                            <div className="hor-row hor-line2"/>
                            { getTechStack(TechStack) }
                        </div>
                    </div>
                </div>

                <div className="hor-row main-content-main" style={{marginTop: '40px' , paddingBottom: '10px'}}>
                    <div className="hor-row">
                        {getExpData(MainExp)}
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
                                        { item.text }
                                    </div>
                                </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="hor-row tech-stack-container">
                        <div className="hor-row card-main" >
                            <h3>
                                EXTRA STACK
                            </h3>
                            <div className="hor-row hor-line2"/>
                            { getTechStack(ExtraStack) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component;