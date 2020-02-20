import React from 'react';
import classes from "./AndroidBlock3.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import styled, { keyframes } from 'styled-components';
import { bounceInUp } from 'react-animations';
import { bounceInDown } from 'react-animations';
import "animate.css/animate.min.css";
import {NavLink} from "react-router-dom";


const BuonceApp = styled.div`animation: 3s ${keyframes`${bounceInUp } `}`;
const BuonceDown = styled.div`animation: 3s ${keyframes`${bounceInDown} `}`;

let AndroidBlock3 =(props) => {

    return(
        <div className={classes.blockSmall}>

            <div className={classes.block2Items}>
                <h1 className={classes.h1Block3}>build an android app for any device</h1>
                <span className={classes.textBlock3}> {props.text} </span>
                <div className={classes.figureBlock3}>
                    <figure>
                        <img src={props.img1} alt="foto"/>
                        <figcaption>
                            <h2 className={classes.figcaptionH1}>{props.alt1}</h2>
                            <span className={classes.figcaptionSpan}> {props.text1}</span>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={props.img2} alt="foto"/>
                        <figcaption>
                            <h2 className={classes.figcaptionH1}>{props.alt2}</h2>
                            <span className={classes.figcaptionSpan}>{props.text2} </span>
                        </figcaption>
                    </figure>
                </div>

            </div>
            <ScrollAnimation animateIn={BuonceApp}  animateOut={BuonceDown}>
            <div className={classes.btnFigDiv}> <NavLink to="/portfolio"> <button className={classes.btnFigure}>show more project </button></NavLink> </div>
            </ScrollAnimation>
        </div>
    );




};
export default AndroidBlock3;