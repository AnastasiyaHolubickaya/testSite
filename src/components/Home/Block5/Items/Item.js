import s from "./Item.module.css";
import React from "react";


let Item = (props) => {
//console.log(props);
    return(
        <div className={s.block}>

            <div className={s.itemNumber}> {props.number}  </div>

            <div className={s.blockShadow}>

                <div className={s.img}> <img src={props.icon} alt=""/></div>

                <div className={s.itemText}>
                     <span className={s.title}>{props.title}</span> <br/>
                    <span className={s.text}>{props.text}</span>
                </div>

            </div>



        </div>
    );
};
export default Item;