
import classes from "./Counter.module.css";
import React from "react";


class CounterBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectsCounter: 0,
            clientCounter: 0,
            linesCodeCounter: 0,
            awordsCounter: 0,
            quantity: 0
        };

        //this.Counter = this.Counter.bind(this);
    }


    componentDidMount() {
        let maxCount=this.maximum();
        this.timerID = setInterval(
            () => this.Counter(maxCount),
            15
        );

    }

    Counter (maxCount) {
        let count = this.state.quantity;
        let status=this.props.status;
        for (var key in status) {
            if(count<=status[key]){
                this.setState({[key]: count});
            }
        }
        count++; // инкримируем счетчик
        this.setState({quantity: count});
        // сохраняем значение счетчика
        if(count===maxCount)clearInterval(this.timerID);

        //  return(count);
    }

    maximum () {
        let max=0;
        let status=this.props.status;
        for (var key in status) {
            if(max<=status[key]){
                max = status[key];
            }
        }
        return(max);
    }




    render() {
        return (
           <div className={classes.counterItems}>
            <h1 className={classes.counterH1}>why work with us</h1>
            <div className={classes.numbers}>
                <div className={classes.numberProgress}>
                    <span className={classes.one}>{this.state.projectsCounter}+</span><br/>
                    <span className={classes.infoProgress}>project completed</span>
                </div>
                <div className={classes.numberProgress}>
                    <span className={classes.two}>{this.state.clientCounter}+</span><br/>
                    <span className={classes.infoProgress}>Happy Clients</span>
                </div>
                <div className={classes.numberProgress}>
                    <span className={classes.three}>{this.state.linesCodeCounter}K+</span><br/>
                    <span className={classes.infoProgress}>Lines Of Code</span>
                </div>
                <div className={classes.numberProgress}>
                    <span className={classes.fore}>{this.state.awordsCounter}</span><br/>
                    <span className={classes.infoProgress}>Awards</span>
                </div>
            </div>
           </div>

        );
    }
}
export default CounterBlock;






