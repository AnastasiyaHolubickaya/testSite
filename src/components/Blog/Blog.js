import React from 'react';
import classes from './Blog.module.css'
import BannerHead from "../../img/blog_img.png";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import {NavLink} from "react-router-dom";

let BlogItem1 = () =>{
    return(
        <div className={classes.block}>
            <div className={classes.item_text}>
                <h1>blog</h1>
                <span className={classes.info}>
                    At SparkleAppz, we have dedicated team who focus on your specific needs,
                    therefore we have proven history of successful, long term relationships
                    with 90+ clients, globally. Join SparkleAppz to add more value to your business.
                    We believe in building the <strong> creative</strong> and <strong>productive</strong>  applications and designs.
                    Our mission is to offer custom software solutions and build niche market products that
                    will allow the company to deploy faster go to market solutions for its clients.We will
                    be pleased to see in our network, We always care of our customer, and never let our
                    customer worry about anything.</span>
                <NavLink to="/portfolio"><button className={classes.btn}>check out our portfolio </button> </NavLink>
            </div>
            <div className={classes.item_img}>
                <img src={BannerHead} alt=""/>
            </div>
        </div>
    );
};


const  Blog = (props) =>{


    return (
        <div>
            <BlogItem1 />
            <div className={classes.blockGrey}>
               <Section1 />
            </div>
            <div className={classes.blockWidth}>
                <Section2 blogPage = {props.blogPage}/>
            </div>

        </div>
    );
};


export default Blog;