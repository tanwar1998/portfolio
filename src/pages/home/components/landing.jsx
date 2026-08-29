import React from "react";
import ButtonComponent from '../../../components/button';
import Typewriter from 'typewriter-effect';

const NameString = [
    'V',
    'I',
    'N',
    'E',
    'E',
    'T',
    '',
    'T',
    'A',
    'N',
    'W',
    'A',
    'R',
]

const LandingComponent = (props) => {
    
    return (
        <div className="hor-row sticky-component landing-component-main">
            <div className="hor-row app-content-container">
                <div className="left-side-container right-side-container">
                    <div className={ "developer-image-container "}>
                        <div className="button-container-main">
                            <div className="inner-button"></div>
                        </div>
                    </div>
                    
                </div>
                <div className="left-side-container">
                    <div className="hor-row intro-label-container">
                        Hii, I am 
                    </div>
                    <h1 className="hor-row name-info-container">
                        { NameString.map((letter)=>{
                            return letter ? (<span>{letter}</span>)
                                    : (<><br/> &emsp;&emsp;</>)
                        }) }
                    </h1>
                    <h3 className='hor-row post-container'>
                        <Typewriter
                        options={{
                            strings: [ 'Javascript Developer', 'Project Architecture', 'UI-UX Developer', ],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                    </h3>
                    <h5>
                        Frontend engineer in Bhiwani, Haryana(India). I architect large-scale React & TypeScript platforms, build design systems, and ship 3D configurators like Threekit.
                    </h5>
                    <ButtonComponent
                        onClick = { props.scrollTo } />
                </div>
            </div>
        </div>
    )
}

export default LandingComponent;