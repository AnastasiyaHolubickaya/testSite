import React from "react";
import state from './redux/state';
import classes from "./components/Navigation/Navigation.module.css";



console.log(state);

 export let  DropdownLi = state.navigation.menuData.map(e=>
     <li key={e.id} className={classes.li_dropdoun}>
         <a href={e.url}>{e.label}</a>
     </li>
 );





