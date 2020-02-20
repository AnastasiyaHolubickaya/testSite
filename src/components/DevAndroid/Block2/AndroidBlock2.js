import React from 'react';
import classes from "./AndroidBlock2.module.css";
import styled, { keyframes } from 'styled-components';
import { bounceInUp } from 'react-animations';
import { bounceInDown } from 'react-animations';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import {NavLink} from "react-router-dom";




const BuonceApp = styled.div`animation: 3s ${keyframes`${bounceInUp } `}`;
const BuonceDown = styled.div`animation: 3s ${keyframes`${bounceInDown} `}`;

let AndroidBlock2 = (props)=>{

    return(
        <div className={classes.blockSmall}>
            <div className={classes.block2Items}>
                <h1 className={classes.h1Block2}> glimpse of work</h1>
                <span className={classes.spanBlock2}>We give priority on the tasks that solves the users’ problem or adds the most value to it. Our applications are intuitive enough that the user have seamless experience. With <b> SparkleAppz</b>  app development, you can turn your ideas for your company’s mobile app into reality.

Our developers know ways to future proof your app so that it keeps pace with the evolution of the <b> Android</b>  platform. We tend to create mark of our presence in android platforms.  </span>
            </div>
            <ScrollAnimation animateIn={BuonceApp}  animateOut={BuonceDown}>
                <div className={classes.btnBlock2Div}> <NavLink  to="/portfolio"> <button className={classes.btnBlock2}>see our work </button></NavLink> </div>
            </ScrollAnimation>
        </div>


    );



};
export default AndroidBlock2;