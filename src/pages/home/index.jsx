import React, { Component, Suspense } from "react";
import LandingComponent from './components/landing';
import LasanteNumbersComponent from './components/lasanteNumber';
import PromotersComponent from './components/promoters';

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
                <LandingComponent/>
                <LasanteNumbersComponent/>
                <PromotersComponent/>
            </div>
        )
    }
}

export default HomeContainer;