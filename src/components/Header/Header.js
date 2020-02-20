import React from 'react';
import phone from '../../img/smallIcon/phone_icn.png';
import email from '../../img/smallIcon/email_icn.png';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";



const  Header = () =>{
    return (
        <div className={classes.block}>
            <div className={classes.item_phone}>
                <img src={phone} alt="icon phone"/>
                <span><NavLink to='tel:+91-7737791591'> +91-7737791591</NavLink> </span>
            </div>
            <div className={classes.item_mail}>
                <img src={email} alt="icon email"/>
                <span> <NavLink to='mailto:info@sparkleappz.com'>info@sparkleappz.com</NavLink></span>
            </div>

        </div>
    );
};

export default Header;
