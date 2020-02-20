
import React from "react";
import classes from './Block6.module.css';
import {NavLink} from "react-router-dom";

class Block6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayStatus: false,
            imgSrc: ''
        };

        this.handleClick = this.handleClick.bind(this);
    }

       handleClick(e){

            console.log(e.target.src);
            this.setState({displayStatus:true});
            this.setState({imgSrc:e.target.src});
        //
    };

    render() {
    return(

            <div className={classes.block} >
            <h2 onClick={(e) => this.handleClick(e)}>portfolio</h2>
            <div className={classes.blockFlex}>
            {this.props.homeBlock6.map(e =>
                <div key={e.id} className={classes.item}>
                    <img src={e.img} alt={e.alt} />
                    <div className={classes.blockAnimation}>{e.alt}</div>
                </div>
            )}
            </div>
            <NavLink  to="/portfolio"> <button className={classes.btn}>check out other project &#8594; </button></NavLink>

            </div>

    );
    }
};
export default Block6;


 /*onClick={(e) => this.handleClick(e)}*/

 /* <div  style={(this.state. displayStatus==true) ?  {display: "block"} : {display: "none"}}>
            <img src={this.state.imgSrc} alt=""/>

            </div>*//*
import React from "react";
import classes from './Block6.module.css';


let Block6 = (props) => {

    let element = props.homeBlock6.map(e =>
        <div key={e.id} className={classes.item}>
            <img src={e.img} alt={e.alt}/>
            <div className={classes.blockAnimation}>{e.alt}</div>
        </div>
    );



    return(

            <div className={classes.block}>
                <h2>portfolio</h2>
                <div className={classes.blockFlex}>
                    {element}
                </div>
                <a href="/portfolio"> <button className={classes.btn}>check out other project &#8594; </button></a>

            </div>






    );
};
export default Block6;
 */