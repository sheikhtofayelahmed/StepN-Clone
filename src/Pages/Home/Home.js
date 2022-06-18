import React from 'react';
import Eigth from '../Eighth/Eigth';
import Eleven from '../Eleven/Eleven';
import Fifth from '../Fifth/Fifth';
import Fourth from '../Fourth/Fourth';
import Second from '../Second/Second';
import Seventh from '../Seventh/Seventh';
import Sixth from '../Sixth/Sixth';
import Tenth from '../Tenth/Tenth';
import Third from '../Third/Third';
import "./Home.css"
const Home = () => {
    return (
        <>
        <div className='home'>
            <div className='icon'>
                <img src="https://stepn.com/img/logo.svg" alt="" />
            </div>
            <div className="join breath">DOWNLOAD NOW</div>
            <div className="menu">
                <span className="menu-item"></span>
                <span className="menu-item"></span>
                <span className="menu-item"></span>
            </div>
           
        </div>
        <Second></Second>
        <Third></Third>
        <Fourth></Fourth>
        <Fifth></Fifth>
        <Sixth></Sixth>
        <Seventh></Seventh>
        <Eigth></Eigth>
        
        <Tenth></Tenth>
        <Eleven></Eleven>
        </>
    );
};

export default Home;