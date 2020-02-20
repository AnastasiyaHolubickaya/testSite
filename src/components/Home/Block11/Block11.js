import classes from "./Block11.module.css";
import React from "react";
import Item from '../Block11/Items/Item'



let Block11 = (props) => {

    let blocks = props.blockFeatures.map(e =>
        <Item icon={e.icon} title={e.title} text={e.text} />

    );
     return(
        <div className={classes.block}>
            <h1>our key features</h1>
            <span className={classes.text}>Services That We Deliver Makes Us Dignified As One of The Top App Development Companies.</span>
            <div className={classes.blockFlex}>
                {blocks}
            </div>

        </div>
    );
};
export default Block11;