import classes from "./BlockIndastries.module.css";
import React from "react";
import Item from './Items/Item'



let BlockIndastries = (props) => {

    let blocks = props.blockIndustries.map(e =>
        <Item icon={e.icon} title={e.title}  />

    );
    return(
        <div className={classes.block}>
            <h1>industries we serve</h1>
            <span className={classes.text}>Here,We make almost every genere of application of applications. You named it and we build it. </span>
            <div className={classes.blockFlex}>
                {blocks}
            </div>

        </div>
    );
};
export default BlockIndastries;