
import classes from "./AndroidBlock5.module.css";
import React from "react";


let AndroidBlock5=(props) =>{

    let block =props.arrAndroidBlock5.map(e =>

        <details>
            <summary><b className={classes.summaryB}>{e.num} </b>{e.title}</summary>
            <span className={classes.summarySpan}>{e.text}</span>
        </details>

    );

    return(
                <div className={classes.blockSmall}>
                    <h1 className={classes.detailsH1}> frequently asked questions</h1>
                    <div className={classes.FAQ}>
                        {block}
                    </div>

                </div>

    );




};




export default AndroidBlock5;
