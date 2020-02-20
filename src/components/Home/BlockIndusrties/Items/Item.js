import s from "./Item.module.css";
import React from "react";


let Item = (props) => {
//console.log(props);
    return(
        <div className={s.item}>
               <div className={s.img}> <img src={props.icon} alt=""/></div>
               <div className={s.span}> {props.title}</div>
        </div>
    );
};
export default Item;