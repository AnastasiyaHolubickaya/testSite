import React from 'react';
import classes from './DevWebsite.module.css';
import BlockHeader from "../DevAndroid/Block1/BlockHead";
import AndroidBlock2 from "../DevAndroid/Block2/AndroidBlock2";
import AndroidBlock3 from "../DevAndroid/Block3/AndroidBlock3";
import AndroidBlock4 from "../DevAndroid/Block4/AndroidBlock4";
import AndroidBlock5 from "../DevAndroid/Block5/AndroidBlock5";
import Gallery from '../Home/BlockGalleryWorked/Gallery';







let DevWebsite=(props) =>{

    let block1 =props.arrServise.arrWebsiteBlock1.map(e =>
        <BlockHeader img={e.img} h1={e.h1} h2={e.h2} text={e.text}/>
    );
    let block3 =props.arrServise.arrWebsiteBlock3.map(e =>
        <AndroidBlock3 img1={e.img1} img2={e.img2} alt1={e.alt1} alt2={e.alt2}  h1={e.h1} text={e.text}/>
    );

    return(
        <div className={classes.blockService}>

            <div className={classes.blockWhite}> {block1}</div>
            <div className={classes.blockBlue}> <AndroidBlock2 /></div>
            <div className={classes.blockWhite}> {block3} </div>
            <div className={classes.blockGrey}>
                <div className={classes.blockSmall}>
                    <h2 className={classes.h2Follow}>process we follow</h2>
                    <AndroidBlock4 arrAndroidBlock4 = {props.arrServise.arrWebsiteBlock4}/>
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




export default DevWebsite;
