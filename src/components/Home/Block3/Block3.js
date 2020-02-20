import s from "./Block3.module.css";
import React from "react";

let Block3 = (props) => {
    return(
        <div className={s.item}>
            <h1>{props.title}</h1>
            <span className={s.span}>{props.text}</span>

        </div>
    );
};
export default Block3;