import React from "react";
import classes from "./Footer.module.css";
import logo from '../../img/logo-187x66.png';
import icon from '../../img/icon/arrow-right.png'
import mailBlue from '../../img/icon/mailBlue.svg';
import phoneBlue from '../../img/icon/phoneBlue.svg';
import skypeBlue from '../../img/icon/skypeBlue.svg';
import {NavLink} from "react-router-dom";
//import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'








const LinkIcon = (props)=>{
  return(
      <div className={classes.item_icon}>
          <a href={props.address}>
              <img src={props.path} alt=""/>
              <span>{props.text}</span>
          </a>
      </div>
  )
};


const  Footer = (props) =>{

     let linkImportant = props.menuSidebar.map(e=>
        <div className={classes.item_link}>
            <img src={icon} alt=""/>
            <NavLink activeClassName={classes.active} style={{color:'#000000'}} to={e.url}> {e.label} </NavLink>
        </div>
     );

    let linkUseful = props.menuData.map(e=>
        <div className={classes.item_link}>
            <img src={icon} alt=""/>
            <NavLink activeClassName={classes.active} style={{color:'#000000'}} to={e.url}> {e.label} </NavLink>
        </div>
    );



    return (

            <div>
            <div className={classes.block}>
                <figure className={classes.item_fig}>
                    <img src={logo} alt="logotype"/>
                    <figcaption>
                        <strong>SparkleAppz </strong> is a professional IT solution and web development company.
                        We provide complete web design and IT services to make your
                        product successful in market with eye-catching outlook and
                        appropriate web design. We put together our delicate,
                        exceptional methods by building in our personal intensive
                        experience. Our own strategy supplies the drive and ready-to-use
                        design necessary to deliver excellent.
                    </figcaption>
                </figure>
                <div>
                    <h2>Important Links</h2>
                    {linkImportant}
                </div>
                <div>
                    <h2>Useful Links</h2>
                    {linkUseful}
                </div>
                <div className={classes.getTouch}>
                    <h2>Get In Touch</h2>
                    <p>Headquarter</p>
                    <span>10, Paota, Jodhpur, Rajasthan, India.</span>
                    <p>Canada Office</p>
                    <span>100 city centre drive mississauga, Ontario, Canada.</span>
                    <LinkIcon address='mailto:info@sparkleappz.com' text='info@sparkleappz.com' path={mailBlue}/>
                    <LinkIcon address='tel:+917737791591' text='+91-7737791591' path={phoneBlue}/>
                    <LinkIcon address='https://join.skype.com/invite/nPqpk4L3gXw2' text='Aheadtechno' path={skypeBlue}/>
                </div>

            </div>
                <div className={classes.basement}>
                    Copyright © 2020  Sparkle Appz | All rights reserved.
                </div>
            </div>


    );
};

export default Footer;