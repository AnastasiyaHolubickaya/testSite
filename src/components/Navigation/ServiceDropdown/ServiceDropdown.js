import classes from './ServiceDropdown.css';
import React from "react";





const ServiceDropdown = (props) => {

    let  DropdownLi = props.menuData.map(e=>
        <li  className={classes.li_dropdoun}>
            <a href={e.url}>{e.label}</a>
        </li>
    );

    return( {DropdownLi});

};

export default ServiceDropdown;