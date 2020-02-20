import classes from "./Block4.module.css";
import React from "react";
//import Item from '../Block4/Items/Item'
import s from "./Items/Item.module.css";
import {NavLink} from "react-router-dom";



let Block4 = (props) => {
  // console.log(props.homeBlock4);

    let  addBlock = props.homeBlock4.map(e=>
        <div className={s.item}>
            <div className={s.itemTitle}>
                <div className={s.img}> <img src={e.icon} alt=""/></div>
                <div className={s.span}> {e.title}</div>
            </div>
            <div className={s.itemText}>
                    <span>
                        {e.text1}
                        <NavLink to='/'> {e.link}</NavLink>
                        {e.text2}
                     </span>
            </div>
        </div>
    );


     return(
        <div className={classes.blockFlex}>
            <h1 className={classes.title}>our services</h1>
            <div className={classes.blockFlex}>
                {addBlock}
            </div>


        </div>
    );
};
export default Block4;