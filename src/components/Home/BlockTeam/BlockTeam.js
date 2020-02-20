import s from './BlockTeam.module.css'
import React from "react";


let BlockTeam = (props) => {
//console.log(props);
    let commandos = props.BlockTeam.map(e=>

        <div key={e.id} className={s.item}>
            <div className={s.img}><img src={e.img} alt=''/> </div>
            <div className={s.name}> {e.name} </div>
            <div className={s.fild}> {e.title} </div>
        </div>


    );

    return(
        <div className={s.block}>
            <h1 className={s.headCommandos}> meet the team</h1>
           <div className={s.commandos}> {commandos}</div>

        </div>
    );
};
export default BlockTeam;