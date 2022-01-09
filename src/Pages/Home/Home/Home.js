import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigations from '../../Shared/Navigations/Navigations';
import Banner from '../Banner/Banner';
import Calculations from '../Calculations/Calculations';
import Features from '../Features/Features';
import PopularItems from '../PopularItems/PopularItems';
import Subscribe from '../Subscribe/Subscribe';
import TeamMeeting from '../TeamMeeting/TeamMeeting';
import VideoSection from '../VideoSection/VideoSection';

const Home = () => {
    return (
        <div>
            <div className="bannerStyle">
                <Navigations></Navigations>
                <Banner></Banner>
                <Calculations></Calculations>
                <PopularItems></PopularItems>
                <VideoSection></VideoSection>
                <TeamMeeting></TeamMeeting>
                <Features></Features>
                <Subscribe></Subscribe>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;