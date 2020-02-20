import s from "./Item.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

let Item = (props) => {
//console.log(props);
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

        <div className={s.blockFlex}>
            {addBlock}
        </div>

    );
};
export default Item;