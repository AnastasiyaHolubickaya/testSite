import classes from "./Block5.module.css";
import Item from "./Items/Item";
import React from "react";

let Block5 = (props) => {
    console.log(props);
    let blocks = props.homeBlock5.map(e =>
        <Item number={e.number} icon={e.icon} title={e.title}  text={e.text}/>
    );
    return(
        <div className={classes.block}>
            <h2>process we follow</h2>
            <div className={classes.blockFlex}>
                {blocks}
            </div>

        </div>
    );
};
export default Block5;