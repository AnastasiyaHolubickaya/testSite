import classes from './ListDropdown.module.css';
import React from "react";
import {NavLink} from "react-router-dom";



class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Display: false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick () {
        this.state.Display ? this.setState(state =>({Display: false})) : this.setState(state =>({Display: true }));
    };

    render(){
    return(
        <div   className={classes.menuSidebar} style={this.props.menuDisplay?{ display:"block"}:{ display:"none" }} >
            <ul  className={classes.sidebar}>
                <li><NavLink className={`${classes.active} ${classes.uppercase}`} to='/home'> home</NavLink></li>
                <li><NavLink className={classes.uppercase} to='/about'> about</NavLink></li>
                <li><NavLink className={classes.uppercase} to='/' onClick={(e) => this.handleClick(e)}> services</NavLink>
                    <ul className={classes.qwert} style={this.state.Display?{ display:"block"}:{ display:"none" }} >
                        <li className={classes.qwertLi}><NavLink to="/development_IOS"> > ios app development</NavLink> </li>
                        <li className={classes.qwertLi}><NavLink to="/development_android"> > android app development</NavLink></li>
                        <li className={classes.qwertLi}><NavLink to="/development_website"> > website development</NavLink></li>
                        <li className={classes.qwertLi}><NavLink to="/"> > unity 3D game development</NavLink></li>
                        <li className={classes.qwertLi}><NavLink to="/"> > digital marketing service</NavLink></li>
                        <li className={classes.qwertLi}><NavLink to="/"> > UI/UX design services</NavLink></li>
                    </ul>
                </li>
                <li><NavLink className={classes.uppercase} to='/portfolio'> portfolio</NavLink></li>
                <li><NavLink className={classes.uppercase} to='/blog'> blog</NavLink></li>
                <li><NavLink className={classes.uppercase} to='/contact'> contact</NavLink></li>
            </ul>
            <div  className={classes.btn}>
                <NavLink to="/contact"> <button className={classes.btn1}>get a free quote</button></NavLink>
                <NavLink to="tel:+917737791591"> <button className={classes.btn2}>call <big>&#128381;</big></button></NavLink>
            </div>
        </div>

    );

    };







}
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