import React from 'react';
import {NavLink} from "react-router-dom";
import c from './Playful.module.css'
import block5 from '../../img/blog05-free-img.jpg';
import pic5 from '../../img/pic5.png';

let Playful=(props) =>{
   // let img1 = props.animation[0].img1;
    let text1 = props.animation[0].text;
    //let text2 = props.animation[0].text2;
    //let img2 = props.animation[0].img2;
    let quote = props.animation[0].quote;

    return(

        <div className={c.blockFull}>
            <div id='playful' className={c.fulPage}>
                <h3>Playful illustration</h3>
                <NavLink className={c.a} to="#comment">Live a comment /</NavLink><NavLink className={c.a} to="/blog">uncategorized</NavLink>
                <div className={c.foto1}>
                    <img src={block5} alt="foto"/>
                </div>
                <div className={c.div_ful}> </div>
                <div className={c.text_full}> {text1}</div>
                <div className={c.quote_full}>
                    <blockquote> {quote} </blockquote>
                    <div className={c.hide}> " {quote} " </div>
                </div>

                <div className={c.foto2}>
                    <img src={pic5} alt=""/>
                    <div className={c.info}>
                        Collaborative platform to finally bring a standardisation to the design
                    </div>
                </div>
                <div className={c.columns}>
                    <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </strong>
                    <br/>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo luctus nec ullamcorper mattis, pulvinar dapibus leo.  . </div>
            </div>
            <div className={c.navigation_full}>
                <div className={c.button}>
                    <button className={`${c.prev} ${c.btn}`}><NavLink to='/standartisation'> &#8592; previous post</NavLink> </button>
                    <button className={`${c.next} ${c.btn}`}> <NavLink to ='/adventurous'>next post &#8594;</NavLink></button>
                </div>
            </div>

            <div className={c.fulPage}>
                <div id='comment' className={c.comment}>
                    <span className={c.commentHeader}>Leave a Comment</span> <br/>
                    <span className={c.commentText}>Your email address will not be published. Required fields are marked *</span>
                    <form className={c.formComment} >
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




export default Playful;
