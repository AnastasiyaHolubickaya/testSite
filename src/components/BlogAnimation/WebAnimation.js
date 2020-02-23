import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Animation.module.css'
import block3 from '../../img/blog03-free-img.jpg'
import Scrollchor from 'react-scrollchor';




let WebAnimation=(props) =>{
    console.log(props);
//let img1 = props.animation[0].img1;
let text1 = props.animation[0].text;
//let text2 = props.animation[0].text2;
let img2 = props.animation[0].img2;
let quote = props.animation[0].quote;

    return(
            <div className={classes.block}>
                <div className={classes.page}>
                    <h3>Web animation</h3>
                    <Scrollchor className={classes.a} to="#comment">Live a comment /</Scrollchor><NavLink className={classes.a} to="/blog">uncategorized</NavLink>
                    <div className={classes.foto1}>
                        <img src={block3} alt="foto"/>
                    </div>
                    <div className={classes.div}> </div>
                    <div className={classes.text}> {text1}</div>
                    <div className={classes.quote}>
                        <blockquote> {quote} </blockquote>
                        <div className={classes.hide}> " {quote} " </div>
                    </div>

                    <div className={classes.foto2}>
                        <img src={img2} alt=""/>
                        <div className={classes.info}>
                            Collaborative platform to finally bring a standardisation to the design
                        </div>
                    </div>
                    <div className={classes.columns}>
                        <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </strong>
                        <br/>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo luctus nec ullamcorper mattis, pulvinar dapibus leo.  . </div>
                </div>
                    <div className={classes.nav_full}>
                        <div className={classes.button}>
                        <button className={`${classes.prev} ${classes.btn}`}><NavLink to='#'> &#8592; previous post</NavLink> </button>
                            <button className={`${classes.next} ${classes.btn}`}> <NavLink to ='/standartisation'>next post &#8594;</NavLink></button>
                    </div>
                    </div>

                <div className={classes.page}>
                    <div id='comment' className={classes.comment}>
                        <span className={classes.commentHeader}>Leave a Comment</span> <br/>
                        <span className={classes.commentText}>Your email address will not be published. Required fields are marked *</span>
                        <form className={classes.formComment} >
                            <textarea   id='textarea' placeholder='Type here...'/><br/>
                            <input type="text" id='name' placeholder='Name*' required/>
                            <input type="text" id ='email' placeholder='Email*' required/>
                            <input type="text" id = 'text' placeholder='Website'/>
                        </form>
                    </div>
                    <input type="checkbox" id = 'check'/>
                    <label htmlFor="check"> Save my name, email, and website in this browser for the next time I comment.</label>
                 </div>

            </div>
    );


};




export default WebAnimation;
