import React, { Component } from "react";
import LandingComponent from './components/landing';
import NavbarComponent from './components/navbar';
import WorkComponent from './components/work';
import ServiceComponent from './components/service';
import ExperienceComponent from './components/experience';
import TopCategoriesComponent from './components/topCategories';
import HireMeComponent from './components/hireMe';
import ScrollFX from './components/scrollFX';
import './style.scss';


class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMode: 'dark'
        };
    }

    workRef = React.createRef();
    serviceRef = React.createRef();
    experienceRef = React.createRef();
    skillsRef = React.createRef();
    hireMeRef = React.createRef();

    scrollTo = (section) => {
        const refs = {
            work: this.workRef,
            service: this.serviceRef,
            experience: this.experienceRef,
            skills: this.skillsRef,
            contact: this.hireMeRef
        };
        const target = refs[section] ? refs[section].current : this.hireMeRef.current;
        if (!target) return;
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    render() {
        return (
            <div className={"hor-row home-component-main" + ( this.state.currentMode === 'dark' ? '' : ' light-mode-container')}>
                <LandingComponent
                    scrollTo = {() => this.scrollTo('contact')} />
                <NavbarComponent
                    currentMode = { this.state.currentMode }
                    setMode = {(mode)=>this.setState({currentMode: mode})}
                    scrollTo = {(section) => this.scrollTo(section)} />
                <WorkComponent
                    tmpRef = {this.workRef} />
                <ServiceComponent
                    tmpRef = {this.serviceRef} />
                <ExperienceComponent
                    tmpRef = {this.experienceRef} />
                <TopCategoriesComponent
                    tmpRef = {this.skillsRef} />
                <HireMeComponent tmpRef = {this.hireMeRef} />
                <ScrollFX />
            </div>
        )
    }
}

export default HomeContainer;
