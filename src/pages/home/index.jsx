import React, { Component, Suspense } from "react";
import LandingComponent from './components/landing';
import Section from './components/scroll';
import NavbarComponent from './components/navbar';
import WorkComponent from './components/work';
import ServiceComponent from './components/service';

import './style.scss';


class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="hor-row home-component-main">
                {/* <Section/> */}
                <LandingComponent/>
                <NavbarComponent/>
                <WorkComponent/>
                <ServiceComponent/>
            </div>
        )
    }
}

export default HomeContainer;