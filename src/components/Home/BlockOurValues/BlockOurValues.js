import classes from "./BlockOurValues.module.css";
import React from "react";





let BlockOurValues = (props) => {

    return(
        <div className={classes.block}>
            <h1>our values</h1>
            <span className={classes.text}> They define who we are as a professional team and what make us to stand out</span>
            <div className={classes.blockFlex}>
                <div className={classes.item}>
                    <div className={ `${classes.img} ${classes.img1}`}> </div>
                        <p className={classes.title}>efficiency</p>
                        <span className={classes.info}>We builds Software that deliver results</span>
                </div>
                <div className={classes.item}>
                    <div className={ `${classes.img} ${classes.img2}`}> </div>
                        <p className={classes.title}>qualiti</p>
                        <span className={classes.info}>We have high standard for all the things we develop</span>
                </div>
                <div className={classes.item}>
                    <div className={ `${classes.img} ${classes.img3}`}> </div>
                        <p className={classes.title}>integrity</p>
                        <span className={classes.info}>We do what's right even when its not  an easy thing to do</span>
                </div>
                <div className={classes.item}>
                    <div className={ `${classes.img} ${classes.img4}`}> </div>
                        <p className={classes.title}>unity</p>
                        <span className={classes.info}>We are a tem so we appreciate every point</span>
                </div>
            </div>

        </div>
    );
};
export default BlockOurValues;