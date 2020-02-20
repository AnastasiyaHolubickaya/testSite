import React from 'react';
import classes from './Portfolio.module.css'

import {NavLink} from "react-router-dom";
import BannerHead from "../../img/images_slider.png";
import SocialNetw from "../Home/BlockSocialInet/SocialNetw";
import Gallery from "../Home/BlockGalleryWorked/Gallery";


let PortfolioItem1 = () =>{
    return(
        <div className={classes.block}>
            <div className={classes.item_text}>
                <h1>portfolio</h1>
                <span className={classes.info}><NavLink to =''>Sparkle Appz</NavLink>  celebrates a wide range of successful portfolio of Mobile, Web and Unity 3D game applications for business and consumers alike.
                    <p />  <strong>ASO and SEO</strong>  have also been important to <NavLink to='/home' className={classes.noBold}>increasing</NavLink>  Apps and Website’s search engine rankings. We have everything you need to bring ideas to life and transform how you create <NavLink to ='/home' className={classes.noBold}>digital products</NavLink>

                </span>

                <NavLink to="/contact">
                    <button className={classes.btn}>
                    contact us today <b> &#8594;</b>
                    </button>
                </NavLink>
            </div>
            <div className={classes.item_img}>
            <img src={BannerHead} alt=""/>
            </div>
        </div>
        );


};

const  Portfolio = (props) =>{

    let element = props.portfolioImg.map(e =>
        <div key={e.id} className={classes.items}>
            <img src={e.img} alt={e.alt}/>
            <div className={classes.blockAnimation}>{e.alt}</div>
        </div>
    );


    return (
        <div>
            <PortfolioItem1/>
            <div className={classes.blockItem}>
                <div className={classes.item}>
                    <h2>our project</h2>
                    <b className={classes.itemSpan}>Here is a glimpse of our notable works done, so far.</b>
                    <div className={classes.blockFlex}>
                    {element}
                    </div>
                </div>
            </div>
            <div className={classes.blockGrey}>
                <Gallery   homeGallery = {props.homeGallery}/>
            </div>
            <div style = {{width: '100%'}}>
                <SocialNetw/>
            </div>


        </div>
    );
};






export default Portfolio;