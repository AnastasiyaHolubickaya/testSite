
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
        this.handleButtonClick = this.handleButtonClick(this);
    }

       handleClick(e){

           // console.log(e.target.src);
            this.setState({displayStatus:true});
            this.setState({imgSrc:e.target.src});
            console.log(e.target);
            if(e.target.tagName === 'BUTTON'){
                this.setState({displayStatus:false});
            }

    };

        handleButtonClick(e){
           // e.preventDefault();

};

    render() {
    return(

            <div className={classes.block} >
            <h2 >portfolio</h2>
            <div className={classes.blockFlex}>
            {this.props.homeBlock6.map(e =>
                <div key={e.id} className={classes.item}>
                    <img src={e.img} alt={e.alt}  onClick={(e) => this.handleClick(e)}/>
                    <div className={classes.blockAnimation}>{e.alt}</div>
                </div>
            )}
            </div>
            <NavLink to="/portfolio"> <button className={classes.btn}>check out other project &#8594; </button></NavLink>
                <div className={classes.fixedDiv} style={(this.state.displayStatus===true) ?  {display: "block"} : {display: "none"}}>
                    <button onClick={(e) => this.handleClick(e)}>&#x2716; </button>
                    <img className={classes.imgFixedDiv} src={this.state.imgSrc} alt=""/>

                </div>

            </div>

    );
    }
}
export default Block6;


 /**/

 /* *//*
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