import React from 'react';
import classes from './Home.module.css'
import BlockHead from "./BlockHead/BlockHead";
import Block2 from "./Block2/Block2";
import Block3 from './Block3/Block3';
import Block4 from "./Block4/Block4";
import Block5 from "./Block5/Block5";
import Block6 from "./Block6Portfolio/Block6";
import Block11 from "./Block11/Block11";
import Gallery from "./BlockGalleryWorked/Gallery";
import Slider1 from "./BlockGalleryBlue/Gallery";
import BlockRanking from "./BlockRanking/BlockRanking";
import BlockComments from "./BlockComments/BlockComments";
import SocialNetw from "./BlockSocialInet/SocialNetw";
import BlockTehno from "./BlockTehno/BlockTexno";
import BlockIndastries from "./BlockIndusrties/BlockIndastries";
import BlockTeam from "./BlockTeam/BlockTeam"
import BlockOurValues from "./BlockOurValues/BlockOurValues";
import BlockForm from "../BlockForm/BlockForm";






const  Home = (props) =>{
//console.log(props.homeGalleryBlue);
   let blocks = props.arrHead.map(d=> <BlockHead  text1={d.text1} text2={d.text2} textBold={d.textBold} img={d.img}/>);
    let element2 = props.homeBlock2.map(d=> <Block2  h1={d.h1} h2={d.h2} link={d.link} span={d.text}/>);
    let element3 = props.homeBlock3.map(d=><Block3  title={d.title} text={d.text}/>);

      return (

        <div  className={classes.blockWidth}>
            {blocks}
            <div className={classes.blockItem}>
                {element2}
            </div>
            <div className= {`${classes.blockItem} ${classes.blockItem2}`}>
                {element3}
            </div>
            <div className={classes.blockWidth}>
               <Block4  homeBlock4={props.homeBlock4} />
            </div>
            <div className={classes.blockGrey}>
                <Gallery   homeGallery = {props.homeGallery}/>
            </div>
            <div className={classes.blockWidth}>
                <Block6  homeBlock6={props.homeBlock6}/>
            </div>
            <div className={classes.blockBlue}>
                <Slider1  galleryBlue = {props.homeGalleryBlue}/>
            </div>
            <div className={classes.blockGrey}>
                <Block5  homeBlock5={props.homeBlock5}/>
            </div>
            <div className={classes.blockWidth}>
                <BlockRanking  homeRanking = {props.homeRanking}/>
            </div>
            <div className={classes.blockBlue}>
                <BlockComments  blockComments={props.blockComments} />
            </div>



            <div className={classes.blockWidth}>
                <Block11  blockFeatures={props.homeBlock11}/>
            </div>
            <div className={classes.blockGrey}>
                <BlockTehno  blockTehno = {props.blockTehno}/>
            </div>
            <div className={classes.blockWidth}>
                <BlockIndastries  blockIndustries={props.blockIndustries}/>
            </div>
            <div className={classes.blockGrey}>
                <BlockOurValues />
            </div>
            <div className={classes.blockWidth}>
                <BlockTeam  BlockTeam ={props.blockTeam}/>
            </div>
            <div className={classes.blockBlue}>
                <BlockForm/>
            </div>
            <div className={classes.blockWidth}>
                <SocialNetw/>
            </div>
        </div>

    );
};


export default Home;