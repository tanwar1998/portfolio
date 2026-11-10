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


const MODE_CLASS = {
    dark: '',
    light: 'light-mode-container',
    vibrant: 'vibrant-mode-container'
};
const MODES = Object.keys(MODE_CLASS);
const MODE_STORAGE_KEY = 'portfolio-theme-mode';

const getStoredMode = () => {
    try {
        const stored = window.localStorage.getItem(MODE_STORAGE_KEY);
        return MODES.includes(stored) ? stored : 'dark';
    } catch (e) {
        return 'dark';
    }
};

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMode: getStoredMode()
        };
    }

    setMode = (mode) => {
        if (!MODES.includes(mode)) return;
        this.setState({ currentMode: mode }, () => {
            try {
                window.localStorage.setItem(MODE_STORAGE_KEY, mode);
            } catch (e) { /* storage unavailable, keep in-memory */ }
        });
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
            <div className={"hor-row home-component-main " + MODE_CLASS[this.state.currentMode]}>
                <LandingComponent
                    scrollTo = {() => this.scrollTo('contact')} />
                <NavbarComponent
                    currentMode = { this.state.currentMode }
                    setMode = {this.setMode}
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
