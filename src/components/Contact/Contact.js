import React from 'react';
//import logo from '../../img/logo-187x66.png';
import classes from './Contact.module.css'
import BannerHead from "../../img/map_bg-1.png";
import {NavLink} from "react-router-dom";
import SocialNetw from "../Home/BlockSocialInet/SocialNetw";
import Gallery from "../Home/BlockGalleryWorked/Gallery";
import BlockComments from "../Home/BlockComments/BlockComments";







let ContactItem1=() =>{
    return(
        <div className={classes.contactPage}>
            <div className={classes.block}>
                <div className={classes.item_text}>
                    <h1>contact</h1>
                    <span className={classes.info}>
                        <NavLink to='/#home'> SparkleAppz</NavLink>, an app development Indian company in Jodhpur,
                        is a broad spectrum organization involved in creating world-class
                        <strong>custom application software &amp; website solutions.</strong>
                        Our mission is to offer custom <strong> software solutions</strong>
                        and build niche market products that will allow the
                        <NavLink className={classes.noBold} to ='/hone'>company</NavLink>  to deploy faster
                        go to market solutions for its clients. We will be pleased to see in
                        our network, We always care about our customer, and never let our
                        customer worry about anything.
                        <p/> If you have any <strong>ideas</strong> or if you want to bring your
                        <NavLink className={classes.noBold} to ='/'>business</NavLink>   to grow, get in touch
                        with us and we help you to bring your <NavLink className={classes.noBold} to ='/'>ideas</NavLink>
                         and needs to life. You can also visit us in our Paota, Jodhpur office at the address given below.
                    </span>
                    <NavLink to="/portfolio"><button className={classes.btn}>check out portfolio <b> &#8594;</b></button></NavLink>


                </div>
                <div className={classes.item_img}>
                    <img src={BannerHead} alt=""/>
                </div>
            </div>

        </div>
    );
};



const  Contact = (props) =>{
    return (
        <div className={classes.block}>
            <ContactItem1 />

            <div className={classes.blockGrey}>
                <Gallery   homeGallery = {props.homeGallery}/>
            </div>
            <div className={classes.blockBlue}>
                <BlockComments  blockComments={props.blockComments} />
            </div>
            <div className={classes.network}>
                <SocialNetw/>
            </div>


        </div>

    );
};


export default Contact;
