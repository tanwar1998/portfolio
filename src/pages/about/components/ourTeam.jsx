import React from "react";
import { CaretRightOutlined } from '@ant-design/icons';
import PersonImage from '../../../assets/images/person.jpeg';
import Gallery1 from '../../../assets/images/gallery1.jpg';
import Gallery2 from '../../../assets/images/gallery2.jpg';
import Gallery3 from '../../../assets/images/gallery3.jpg';
import Gallery4 from '../../../assets/images/gallery4.jpg';
import Gallery5 from '../../../assets/images/gallery5.jpg';
import Gallery6 from '../../../assets/images/gallery6.jpg';
import AboutTeamImage1 from '../../../assets/images/about-us1.jpg';
import AboutTeamImage2 from '../../../assets/images/about-us2.jpg';
import AboutTeamImage3 from '../../../assets/images/about-us3.jpg';


const galleryImages = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6
]

const AboutTeamBlockList = [
    {
        image: AboutTeamImage3,
        heading: 'Our Team'
    },
    {
        image: AboutTeamImage2,
        heading: 'Our Business Team'
    },
    {
        image: AboutTeamImage1,
        heading: 'Infrastructure'
    }
]



const TeamInfoComponent = () => {
    return (
        <div className="hor-row member-component-main">
            <div className="hor-row person-img-container">
                <img src={PersonImage} alt = 'member'/>
            </div>
            <div className="hor-row member-name">
                DINESH VISHWAKARMA
            </div>
            <div className="hor-row member-designation">
                Quality Assurance Manager
            </div>
            <div className="hor-row">
                <div className="learn-more-button">
                    Learn more...
                    <CaretRightOutlined className="learn-more-icon" />
                </div>
            </div>
            <div className="hor-row underline-main"></div>
        </div>
    )
}


const OurTeamComponent = (props) => {
    return (<>
        <div className="hor-row our-team-info-component-main">
            <div className="hor-row app-content-main">
                <div className="left-side-content">
                    <h2>
                        What is Lorem Ipsum?
                    </h2>
                    <div className="hor-row component-info-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                </div>
                <div className="right-side-content">
                    <div className="laptop-view-content"></div>
                </div>
            </div>
        </div>
        <div className="hor-row our-team-component-main">
            <div className="hor-row app-content-main">
                <h2>
                    Our Team
                </h2>
                <div className="hor-row">
                    <span className="under-line"></span>
                </div>
                <div className="hor-row team-info-component-main">
                    {Array(8).fill(1).map((data, index) => (
                        <TeamInfoComponent  key = {'team' + index}/>
                    ))
                    }
                </div>
            </div>
        </div>
    </>)
}

const ImageGallery = () => {
    return (<>
        <div className="hor-row our-team-info-component-main">
            <div className="hor-row app-content-main">
                <div className="left-side-content">
                    <h2>
                        What is Lorem Ipsum?
                    </h2>
                    <div className="hor-row component-info-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                </div>
                <div className="right-side-content">
                    <div className="laptop-view-content"></div>
                </div>
            </div>
        </div>
        <div className="hor-row image-gallery-component-main">
            <div className="hor-row app-content-main">
                <h2>
                    Image Gallery
                </h2>
                <div className="hor-row">
                    <span className="under-line"></span>
                </div>
                <div className="hor-row image-gallery-content-main">
                    {galleryImages.map((data, index) => (
                        <img src={data} key = {'image' + index} alt='gallery' />
                    )) 
                    }
                </div>
            </div>
        </div>
    </>)
}

const AboutUs = () => {
    const AboutTeamContentBlock = (props) => {
        return (<div className="about-team-block">
            <div className="hor-row about-team-image" style={{backgroundImage: "url(" + props.data.image + ")"}}></div>
            <div className="hor-row team-info-content-main">
                <h2>
                    {props.data.heading}
                </h2>
                <div className="hor-row">
                    <span className="under-line"></span>
                </div>
                <div className="hor-row">
                    <div className="learn-more-button">
                        Learn more...
                        <CaretRightOutlined className="learn-more-icon" />
                    </div>
                </div>
                <div className="hor-row underline-main"></div>
            </div>
        </div>)
    }

    return (<>
        <div className="hor-row our-team-info-component-main">
            <div className="hor-row app-content-main">
                <div className="left-side-content">
                    <h2>
                       Since 2017
                    </h2>
                    <div className="hor-row component-info-content">
                        from a dream to reality...
                    </div>
                </div>
                <div className="right-side-content">
                    <div className="laptop-view-content"></div>
                </div>
            </div>
        </div>

        <div className="hor-row about-team-component-main">
            <div className="hor-row app-content-main about-team-content-main">
                { AboutTeamBlockList.map((data)=> <AboutTeamContentBlock
                    data = { data } />) }
            </div>
        </div>
        
    </>)
}


const Component = (props) => {
    return props.component === 'our-team' ?   <OurTeamComponent/>
            : props.component === 'image-gallery' ?    <ImageGallery/> 
            : <AboutUs/> 
}

export default Component;