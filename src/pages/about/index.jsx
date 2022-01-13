import React, { Component } from "react";
import OurTeamComponent from './components/ourTeam';
import './style.scss';

class AboutUsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="hor-row about-us-component-main">
                <OurTeamComponent
                    component = { this.props.component }
                />
            </div>
        )
    }
}

export default AboutUsContainer;