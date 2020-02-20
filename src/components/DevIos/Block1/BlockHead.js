import React from 'react';
import classes from "../DevIos.module.css";




const BlockHeader = (props) =>{

    return (
        <div className={classes.block}>
            <div className={classes.item_text}>
                <span>
                    {props.text1} <strong> {props.textBold}</strong>  {props.text2}
                </span>
            </div>
            <div className={classes.item_img}>
                <img src={props.img} alt=""/>
            </div>

        </div>

    );

};


export default BlockHeader;