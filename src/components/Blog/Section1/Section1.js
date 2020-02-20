import React from 'react';
import classes from './Section1.module.css'
import {NavLink} from "react-router-dom";



const  Section1 = () =>{


    return (
                <div className={classes.blockItems}>
                    <div className={`${classes.module} ${classes.module1}`}>
                        <div className={classes.itemInfo}>
                            <h3>web animation</h3>
                            <span className={classes.date}>december 27, 2018 no comments</span><br/>
                            <span className= {classes.duis}>
		Duis iaculis mattis rutrum. Sed iaculis magna sit amet suscipit ornare. Nulla ornare leo a tortor aliquam, quis interdum ex tempor. Quisque ultricies consequat suscipit.…	</span>
                            <br/>  <NavLink to='/animation'> <button>read more</button></NavLink>
                        </div>
                    </div>
                    <div className={`${classes.module} ${classes.module2}`}>
                        <div className={classes.itemInfo}>
                            <h3>Standardization between design tools</h3>
                            <span className={classes.date}>december 27, 2018 no comments</span> <br/>
                            <span className={classes.duis}>
		Duis iaculis mattis rutrum. Sed iaculis magna sit amet suscipit ornare. Nulla ornare leo a tortor aliquam, quis interdum ex tempor. Quisque ultricies consequat suscipit.…	</span>
                            <br/> <NavLink to ='/standartisation'> <button>read more</button></NavLink>
                        </div>
                    </div>
                </div>






    );
};


export default Section1;