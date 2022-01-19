import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from "../pages/home";
// import NavBarComponent from '../components/navbar';
// import FooterComponent from '../components/footer';
// import AboutUsContainer from '../pages/about';
// 
export default function App() {
    console.log('router')
    return (
        <Router>
            <React.Fragment>
                {/* <NavBarComponent/>  */}
                <Routes>
                    <Route exact path="/"  element={  <Home/> }  />
                    {/* <Route exact path="/about-us"  element={  <AboutUsContainer/> }  />
                    <Route exact path="/about-us/our-team"  element={  <AboutUsContainer
                        component = 'our-team' /> }  />
                    <Route exact path="/about-us/image-gallery"  element={  <AboutUsContainer
                        component = 'image-gallery'/> }  /> */}
                </Routes>
                {/* <FooterComponent/> */}
            </React.Fragment>
        </Router>
    );
}
