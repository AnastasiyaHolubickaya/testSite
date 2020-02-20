import React from 'react';
import classes from './DevAndroid.module.css';
import BlockHeader from "./Block1/BlockHead";
import AndroidBlock2 from "./Block2/AndroidBlock2";
import AndroidBlock3 from "./Block3/AndroidBlock3";
import AndroidBlock4 from "./Block4/AndroidBlock4";
import AndroidBlock5 from "./Block5/AndroidBlock5";
import Gallery from '../Home/BlockGalleryWorked/Gallery';


let DevAndroid=(props) =>{

    let block1 =props.arrServise.arrAndroidBlock1.map(e =>
        <BlockHeader img={e.img} h1={e.h1} h2={e.h2} text={e.text}/>
    );
    let block3 =props.arrServise.arrAndroidBlock3.map(e =>
        <AndroidBlock3 img1={e.img1} img2={e.img2} alt1={e.alt1} alt2={e.alt2} text1={e.text1} text2={e.text2} h1={e.h1}/>
    );



    return(
        <div className={classes.blockService}>

            <div className={classes.blockWhite}> {block1}</div>
            <div className={classes.blockBlue}> <AndroidBlock2/></div>
            <div className={classes.blockWhite}> {block3} </div>
            <div className={classes.blockGrey}>
                <div className={classes.blockSmall}>
                    <h2 className={classes.h2Follow}>process we follow</h2>
                        <AndroidBlock4 arrAndroidBlock4 = {props.arrServise.arrAndroidBlock4}/>
                </div>
            </div>
            <div className={classes.blockWhite}>
               <AndroidBlock5 arrAndroidBlock5 = {props.arrServise.arrAndroidBlock5}/>
            </div>
            <div className={classes.blockGrey}>
            <Gallery homeGallery = {props.homeGallery}/>
            </div>






        </div>

    );




};




export default DevAndroid;
