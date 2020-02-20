import React from 'react';
import classes from "./AndroidBlock4.module.css";






let AndroidBlock4 =(props) => {
    let block4 = props.arrAndroidBlock4.map(e=>

        <div className={classes.blockShadow}>

            <div className={classes.shadowImg}> <img src={e.icon} alt=''/></div>

            <div className={classes.shadowItem}>
                <span className={classes.itemTitle}>{e.h1}</span> <br/>
                <span className={classes.itemText}>{e.text}</span>
            </div>

        </div>


    );
    return(
        <div className={classes.blockFlexServ} >
            {block4}
        </div>
    );




};
export default AndroidBlock4;