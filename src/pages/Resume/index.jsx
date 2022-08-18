import React, { Component } from "react";
import LandingComponent from './components/landing';
import './style.scss';


class ResumeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <LandingComponent/>
        )
    }
}

export default ResumeContainer;