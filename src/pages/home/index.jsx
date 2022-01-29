import React, { Component } from "react";
import LandingComponent from './components/landing';
import NavbarComponent from './components/navbar';
import WorkComponent from './components/work';
import ServiceComponent from './components/service';
import ExperienceComponent from './components/experience';
import TopCategoriesComponent from './components/topCategories';
import HireMeComponent from './components/hireMe';
import './style.scss';


class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMode: 'dark'
        };
    }

    hireMeRef = React.createRef();
    scrollTo = () => {
        console.log('scroller')
        window.scrollTo({ behavior: 'smooth', top: this.hireMeRef.current.offsetTop })
    }

    render() {
        console.log('rerendering')
        return (
            <div className={"hor-row home-component-main" + ( this.state.currentMode === 'dark' ? '' : ' light-mode-container')}>
                <LandingComponent
                    scrollTo = {() => this.scrollTo() } />
                <NavbarComponent
                    currentMode = { this.state.currentMode }
                    setMode = {(mode)=>this.setState({currentMode: mode})} />
                <WorkComponent />
                <ServiceComponent/>
                <ExperienceComponent/>
                <TopCategoriesComponent />
                <HireMeComponent tmpRef = {this.hireMeRef} />
            </div>
        )
    }
}

export default HomeContainer;