import React from 'react';
import classes from './Section2.module.css'
import {NavLink} from "react-router-dom";



const  Section2 = (props) =>{
    let modul = props.blogPage.map(e=>

        <div className={classes.module}>
            <div className={`${classes.img} ${classes.img1}`}>
                <img src={e.img} alt='foto'/>
            </div>
            <div className={classes.itemInfo}>
                <h3>{e.title}</h3>
                <span className={classes.date}>{e.date}</span><br/>
                <span className= {classes.duis}> {e.text} </span>
                <br/>  <NavLink to={e.linc}> <button>read more</button></NavLink>
            </div>
        </div>

    );

    return (

        <div className={classes.blockItems}>
            {modul}
        </div>

    )
};


export default Section2;

