import classes from './ListDropdown.module.css';
import React from "react";
import {NavLink} from "react-router-dom";



class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Display: false};
        this.state = {DisplayMenuSidebar: false};

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick () {
        this.state.Display ? this.setState(state =>({Display: false})) : this.setState(state =>({Display: true }));
    };
    handleClickMenuSidebar () {
        this.props.callbackClickBurger();
    };

    render(){
    return(
        <div   className={classes.menuSidebar} style={(this.props.menuDisplay===true|| this.state.DisplayMenuSidebar===true)?{ display:"block"}:{ display:"none" }} >
            <ul  className={classes.sidebar}>
                <li><NavLink className={`${classes.active} ${classes.uppercase}`} to='' onClick={(e) => this.handleClickMenuSidebar(e)}> home</NavLink></li>
                <li><NavLink className={classes.uppercase} to='/about' onClick={(e) => this.handleClickMenuSidebar(e)}>about</NavLink></li>
                <li><NavLink className={classes.uppercase} to='#' onClick={(e) => this.handleClick(e)}> services</NavLink>
                    <ul className={classes.qwert} style={this.state.Display?{ display:"block"}:{ display:"none" }} >
                        <li className={classes.qwertLi}><NavLink to="/development_IOS" onClick={(e) => this.handleClickMenuSidebar(e)}> > ios app development</NavLink> </li>
                        <li className={classes.qwertLi}><NavLink to="/development_android" onClick={(e) => this.handleClickMenuSidebar(e)}> > android app development</NavLink></li>
                        <li className={classes.qwertLi}><NavLink to="/development_website" onClick={(e) => this.handleClickMenuSidebar(e)}> > website development</NavLink></li>
                        <li className={classes.qwertLi}><NavLink to="#" onClick={(e) => this.handleClickMenuSidebar(e)}> > unity 3D game development</NavLink></li>
                        <li className={classes.qwertLi}><NavLink to="#" onClick={(e) => this.handleClickMenuSidebar(e)}> > digital marketing service</NavLink></li>
                        <li className={classes.qwertLi}><NavLink to="#" onClick={(e) => this.handleClickMenuSidebar(e)}> > UI/UX design services</NavLink></li>
                    </ul>
                </li>
                <li><NavLink className={classes.uppercase} to='/portfolio' onClick={(e) => this.handleClickMenuSidebar(e)}> portfolio</NavLink></li>
                <li><NavLink className={classes.uppercase} to='/blog' onClick={(e) => this.handleClickMenuSidebar(e)}> blog</NavLink></li>
                <li><NavLink className={classes.uppercase} to='/contact' onClick={(e) => this.handleClickMenuSidebar(e)}> contact</NavLink></li>
            </ul>
            <div  className={classes.btn}>
                <NavLink to="/contact"> <button className={classes.btn1}   onClick={(e) => this.handleClickMenuSidebar(e)}  >get a free quote</button> </NavLink>
                <a href="tel:+917737791591"> <button className={classes.btn2}   onClick={(e) => this.handleClickMenuSidebar(e)}    >call <big>&#128381;</big></button> </a>
            </div>
        </div>

    );

    };







};
export default Navigation;




/*
const ListDropdown = (props) => {





    return(
        <div   className={classes.menuSidebar} style={props.menuDisplay?{ display:"block"}:{ display:"none" }}>
            <ul  className={classes.sidebar}>
                <li><a className={`${classes.active} ${classes.uppercase}`} href='/#home'> home</a></li>
                <li><a className={classes.uppercase} href='/about'> about</a></li>
                <li><a className={classes.uppercase} href='#'> services</a>
                    <ul className={classes.qwert} >
                        <li className={classes.qwertLi}><a href="/development_IOS"> > ios app development</a> </li>
                        <li className={classes.qwertLi}><a href="/development_android"> > android app development</a></li>
                        <li className={classes.qwertLi}><a href="/development_website"> > website development</a></li>
                        <li className={classes.qwertLi}><a href="#"> > unity 3D game development</a></li>
                        <li className={classes.qwertLi}><a href="#"> > digital marketing service</a></li>
                        <li className={classes.qwertLi}><a href="#"> > UI/UX design services</a></li>
                    </ul>
                 </li>
                <li><a className={classes.uppercase} href='/portfolio'> portfolio</a></li>
                <li><a className={classes.uppercase} href='/blog'> blog</a></li>
                <li><a className={classes.uppercase} href='/contact'> contact</a></li>
            </ul>
            <div  className={classes.btn}>
                <a href="/contact"> <button className={classes.btn1}>get a free quote</button></a>
                <a href="tel:+917737791591"> <button className={classes.btn2}>call <big>&#128381;</big></button></a>
            </div>
        </div>

    );

};

export default ListDropdown;*/