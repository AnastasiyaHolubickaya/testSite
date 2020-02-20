import classes from './ServiceDropdown.css';
import React from "react";
import {NavLink} from "react-router-dom";





const ServiceDropdown = (props) => {

    let  DropdownLi = props.menuData.map(e=>
        <li  className={classes.li_dropdoun}>
            <NavLink to={e.url}>{e.label}</NavLink>
        </li>
    );

    return( {DropdownLi});

};

export default ServiceDropdown;