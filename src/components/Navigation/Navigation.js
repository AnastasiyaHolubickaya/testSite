
import logo from '../../img/logo-187x66.png';
import classes from './Navigation.module.css'
import ListDropdown from "./ListDropdown";
//import ServiceDropdown from "./ServiceDropdown/ServiceDropdown";
import {NavLink} from "react-router-dom";
import React from "react";
import crossIcon from '../../img/icon/crossIcon.png';
import butgerIcon from '../../img/icon/burgerIcon.png';




class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuDisplay: false

        };
        this.handleClickBurger = this.handleClickBurger.bind(this);
    }

    handleClickBurger () {
        this.state.menuDisplay ? this.setState(state =>({menuDisplay: false})) : this.setState(state =>({menuDisplay: true}));
    };
   /* handleClickItem () {
        this.state.menuDisplay ? this.setState(state =>({menuDisplay: false})) : this.setState(state =>({menuDisplay: true}));
    };
    */




    render(){
        return (
            <div  className={classes.block}>
                <div className={classes.item_img}>
                    <NavLink to="/about"><img src={logo} alt="logotype"/></NavLink>
                </div>
                <div   className={classes.burger} onClick={(e) => this.handleClickBurger(e)}    style={this.state.menuDisplay ?{ backgroundImage:`url(${crossIcon})` }:{ backgroundImage:`url(${butgerIcon})` }} > </div>

                <ListDropdown  menuDisplay={this.state.menuDisplay} callbackClickBurger={this.handleClickBurger}/>

                <div  className={classes.item_menu}>

                    <ul className={classes.ul_menu}  >
                        <li  className={classes.li_menu}><NavLink to="/#" activeClassName={classes.active}>Home</NavLink></li>
                        <li  className={classes.li_menu}><NavLink to="/about" activeClassName={classes.active}>About</NavLink></li>
                        <li  className={`${classes.li_menu} ${classes.li_block}`}><NavLink to="#"> Service&#8195;&#709;</NavLink>
                            <ul className={classes.ul_dropdoun}>
                                <li className={classes.li_dropdoun}><NavLink to="/development_IOS">ios app development</NavLink> </li>
                                <li className={classes.li_dropdoun}><NavLink to="/development_android">android app development</NavLink></li>
                                <li className={classes.li_dropdoun}><NavLink to="/development_website">website development</NavLink></li>
                                <li className={classes.li_dropdoun}><NavLink to="#">unity 3D game development</NavLink></li>
                                <li className={classes.li_dropdoun}><NavLink to="#">digital marketing service</NavLink></li>
                                <li className={classes.li_dropdoun}><NavLink to="#">UI/UX design services</NavLink></li>
                            </ul>

                        </li>
                        <li  className={classes.li_menu}><NavLink to="/portfolio" activeClassName={classes.active} >Portfolio</NavLink></li>
                        <li  className={classes.li_menu}><NavLink to="/blog" activeClassName={classes.active}>Blog</NavLink></li>
                        <li  className={classes.li_menu}><NavLink to ="/contact" activeClassName={classes.active}>Contact</NavLink></li>
                    </ul>
                    <div  className={classes.btn}>
                        <NavLink to="/contact"> <button className={classes.btn1}>get a free quote</button></NavLink>
                        <a href="tel:+917737791591"> <button className={classes.btn2}>call <big>&#128381;</big></button></a>
                    </div>

                </div>


            </div>
        );


    }


}
export default Navigation;





/* import logo from '../../img/logo-187x66.png';
import burger from '../../img/icon/burgerIcon.png'
import classes from './Navigation.module.css'
import ListDropdown from "./ListDropdown";
import {NavLink} from "react-router-dom";
import React from "react";
import {reff} from "./ListDropdown";

const  Navigation = (props) =>{


        let handleClick = () =>{
            let element = reff.current;
            element.classList.toggle('navOpen');

        };

            let  DropdownLi = props.menuData.map(e=>
                <li  className={classes.li_dropdoun}>
                    <a href={e.url}>{e.label}</a>
                </li>
            );

        return (
            <div  className={classes.block}>
                    <div className={classes.item_img}>
                        <a href="/about"><img src={logo} alt="logotype"/></a>
                    </div>
                <div   className={classes.burger} onClick={handleClick}>
                    <img src={burger} alt=""/>
                </div>
                <ListDropdown menuSidebar ={props.menuSidebar} menuData={props.menuData} />

                <div  className={classes.item_menu}>

                    <ul className={classes.ul_menu}>
                        <li  className={classes.li_menu}><NavLink to="/#" activeClassName={classes.active}>Home</NavLink></li>
                        <li  className={classes.li_menu}><NavLink to="/about" activeClassName={classes.active}>About</NavLink></li>
                        <li  className={`${classes.li_menu} ${classes.li_block}`}><a href="/#"> Service&#8195;&#709;</a>
                            <ul className={classes.ul_dropdoun}>
                                {DropdownLi}
                            </ul>
                        </li>
                        <li  className={classes.li_menu}><NavLink to="/portfolio" activeClassName={classes.active}>Portfolio</NavLink></li>
                        <li  className={classes.li_menu}><NavLink to="/blog" activeClassName={classes.active}>Blog</NavLink></li>
                        <li  className={classes.li_menu}><NavLink to ="/contact" activeClassName={classes.active}>Contact</NavLink></li>
                    </ul>
                    <div  className={classes.btn}>
                        <a href="/contact"> <button className={classes.btn1}>get a free quote</button></a>
                        <a href="tel:+917737791591"> <button className={classes.btn2}>call <big>&#128381;</big></button></a>
                    </div>

                </div>


            </div>
        );
    };

export default Navigation;*/