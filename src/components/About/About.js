import React from 'react';
//import logo from '../../img/logo-187x66.png';
import classes from './About.module.css'
import BannerHead from "../../img/slider_image.png";
import {NavLink} from "react-router-dom";
import Block5 from "../Home/Block5/Block5";
import SocialNetw from "../Home/BlockSocialInet/SocialNetw";
import BlockRanking from "../Home/BlockRanking/BlockRanking";
import Gallery from "../Home/BlockGalleryWorked/Gallery";
import BlockTeam from "../Home/BlockTeam/BlockTeam";
import imgDetail from '../../img/why_choose_img.png';
import CounterBlock from "./Counter/Counter";


const  About = (props) =>{

    let arr = {projectsCounter:180, clientCounter:230, linesCodeCounter:250, awordsCounter:25};


    return (
            <div className={classes.aboutPage}>

                <div className={classes.block}>

                        <div className={classes.item_text}>
                            <h1>about</h1>
                            <span> aparkle arrz</span> <br/>

                            <span className={classes.info}><NavLink to ='#'>Sparkle Appz</NavLink> is an IT company in India, offering quality software
                                related solutions including <NavLink to ="#">Mobile Application Development,</NavLink>
                                <NavLink to='#'> SEO, </NavLink><NavLink to='#'> Unity 3D, </NavLink> and <NavLink to='#'> Web Design and Development. </NavLink>
                                We believe in <strong>“Complete Customer Satisfaction”</strong>
                                as our definition of quality.
                            <p />  We focus to deliver our expertise to our
                                clients within time and make sure that our solutions be aesthetic,
                                technically functional, user-friendly and responsive.</span>
                            <NavLink to="/portfolio"> <button className={classes.btn}>Our Portfolio <b> &#8594;</b></button></NavLink>
                        </div>

                        <div className={classes.item_img}>
                            <img src={BannerHead} alt=""/>
                        </div>
                </div>

                <div className={classes.counter}>
                    <CounterBlock status={arr}/>
                </div>
                <div className={classes.blockItem4}>
                   <div className={classes.history}>
                       <h1 className={classes.historyTitle}>our history</h1>
                       <span className={classes.historySpan}><NavLink to="/#home">Sparkle Appz </NavLink> was started in 2011 by a small group of dedicated software professionals. We started our company with <NavLink
                           to="/#home">web application  </NavLink> development and soon embarked <NavLink to="/#home">mobile app development</NavLink>  after 1 successful year of productivity.

<br/>Today, SparkleAppz being one of the best software company in the Jodhpur region, with a team of 10 skilled developers, have developed more than 100 applications with <b> 90+ satisfied</b> <NavLink
                               to="/#home">clients </NavLink> . During this decade, we have been working closely with our clients from concept to delivery, helping to change their visions into <NavLink
                               to="/#home">attractive</NavLink> <b> and useful products</b> . Every project we deliver is given our supreme attention.</span>
                   </div>
                </div>
                <div className={classes.blockWidth}>
                    <div className={classes.threeDivs}>
                        <div className={classes.divs}>
                            <h1 className={classes.h1Divs}>who we are</h1>
                            <span className={classes.spanDivs}>We are a group of dedicated <NavLink to="/#home">IT professionals</NavLink> , providing software and digital marketing solution. </span>
                        </div>
                        <div className={classes.divs}>
                            <h1 className={classes.h1Divs}>our mission</h1>
                            <span className={classes.spanDivs}>We believe in delivering unique and <NavLink to="/#home">reliable software solutions</NavLink>  to assist our clients in improving IT efficiency and business profitably.</span>
                        </div>
                        <div className={classes.divs}>
                            <h1 className={classes.h1Divs}>what we do</h1>
                            <span className={classes.spanDivs}> To provide the best solutions to the clients as per their business needs by providing <NavLink
                                to="/#home">customized development</NavLink>  services.</span>
                        </div>
                    </div>

                </div>
                <div className={classes.blockItem4}>
                    <Block5 homeBlock5={props.homeBlock5}/>
                </div>
                <div>
                    <BlockRanking homeRanking = {props.homeRanking}/>
                </div>
                <div className={classes.blockGrey}>
                    <Gallery   homeGallery = {props.homeGallery}/>
                </div>
                <div className={classes.blockWidth}>
                    <div className={classes.processD}>
                        <h1 className={classes.h1ProcessD}>our 6-D process</h1>
                        <div className={classes.processItems}>
                            <div className={classes.itemProc}>
                                <span className={classes.opacity}>01</span>
                                <span className={classes.title}> discover</span>
                                <span className={classes.text}>We make an in-depth understanding of your problems, expectations, and goals as the means to enhance processes, drive innovation and initiate changes that offer <NavLink
                                    to="#">business growth</NavLink>  in the future.</span>
                            </div>
                            <div className={classes.itemProc}>
                                <span className={classes.opacity}>02</span>
                                <span className={classes.title}> define</span>
                                <span className={classes.text}>We first start with the process of determining what and how a customer wants a product to perform. We believe that <NavLink
                                    to="#">perfect project strategy</NavLink>  can only be achieved by defining the requirements of a project</span>
                            </div>
                            <div className={classes.itemProc}>
                                <span className={classes.opacity}>03</span>
                                <span className={classes.title}> design</span>
                                <span className={classes.text}>The next step is to design the software application after assessing the factors like – goals, <NavLink
                                    to="#">specifications</NavLink>  and <NavLink
                                    to="#">requirements</NavLink> , where special attention is made on the usability, searchability and simplicity by following professional design practices.</span>
                            </div>
                            <div className={classes.itemProc}>
                                <span className={classes.opacity}>04</span>
                                <span className={classes.title}> develop</span>
                                <span className={classes.text}>In this stage, the actual development starts, and the finalized design files are implemented by following professional approaches of programming to make an <NavLink
                                    to="#">interactive product</NavLink> . The Beta version of the product is first tested and modified before launching the actual one. This ensures our <b>client’s</b> <NavLink
                                    to="#">expectations</NavLink>  and goals are met.</span>
                            </div>
                            <div className={classes.itemProc}>
                                <span className={classes.opacity}>05</span>
                                <span className={classes.title}> deploy</span>
                                <span className={classes.text}>The product is deployed at the consumer’s side and ready to be used and several interrelated activities are followed to ensure a <NavLink
                                    to="#">seamless</NavLink>  use of the product. All the functionalities are monitored for <b>30 days</b>  as a guarantee that the product is functioning properly.</span>
                            </div>
                            <div className={classes.itemProc}>
                                <span className={classes.opacity}>06</span>
                                <span className={classes.title}> drive</span>
                                <span className={classes.text}>We <NavLink to="#">optimize</NavLink>  your site to deliver better information to search engines so that your content can be properly indexed and displayed within search results, making your site equally <NavLink
                                    to="#">convenient</NavLink>  and reachable for potential and existing <NavLink to="#">customers</NavLink> </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.blockGrey}>
                    <div className={classes.blockSmall}>
                        <div className={classes.detailsFlex}>

                        <div className={classes.detailsItem}>
                        <h1 className={classes.detailsH1}> why choose us</h1>
                        <div className={classes.FAQ}>
                            <details className={classes.details} tabIndex>
                                <summary><b className={classes.summaryB}>01 </b>-  Best Quality App And Website Designs</summary>
                                <span className={classes.summarySpan}>Our secure, robust codebase approach on custom web development gives seamless UX outcomes, fulfilling the user’s expectations.</span>
                            </details>
                            <details className={classes.details} tabIndex>
                                <summary><b className={classes.summaryB}>02 </b>-   24x7 Live Support</summary>
                                <span className={classes.summarySpan}>Our 24×7 dedicated support is given at pre and post delivery of project.</span>
                            </details>
                            <details className={classes.details} tabIndex>
                                <summary><b className={classes.summaryB}>03 </b> - Result Oriented Projects</summary>
                                <span className={classes.summarySpan}>We do not just produce a product or deliver a service, we believe that a successful individual or an organization always prioritize their outcome results.</span>
                            </details>
                            <details className={classes.details} tabIndex>
                                <summary><b className={classes.summaryB}>04 </b> - Award Winning SEO Team</summary>
                                <span className={classes.summarySpan}>SparkleAppz will help increase your company’s revenue with an SEO campaign that is specifically designed for your unique business.</span>
                            </details>
                            <details className={classes.details} tabIndex>
                                <summary><b className={classes.summaryB}>05 </b> - Android App  development</summary>
                                <span className={classes.summarySpan}>We have experienced team of Android App development that ensures high performance and excellence through their expert skills and knowledge.</span>
                            </details>
                            <details className={classes.details} tabIndex>
                                <summary><b className={classes.summaryB}>05 </b>  - IOS app development</summary>
                                <span className={classes.summarySpan}>Our experts give strong focus on simplicity, interaction design and usability standards to bring your ideas into aninnovative IOS application.</span>
                            </details>
                        </div>
                        </div>
                            <div className={classes.detailsImg}>
                                <img src={imgDetail} alt=""/>
                            </div>

                    </div>
                    </div>

                </div>

                <div className={classes.blockWidth}>
                    <BlockTeam  BlockTeam ={props.blockTeam}/>
                </div>
                <div className={classes.blockWidth}>
                    <SocialNetw/>
                </div>

            </div>

        )



};


export default About;