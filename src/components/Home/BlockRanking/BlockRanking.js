import s from './BlockRanking.module.css'
import React from "react";


let BlockRanking = (props) => {
//console.log(props);
    let logos = props.homeRanking.map(e=>

        <div className={s.itemGallery}>
            <img src={e.img} alt={e.alt}/>
        </div>


    );

    return(
        <div className={s.blockGallery}>
            <h1 className={s.title}> top ranking on</h1>
            <div className={s.area}>  {logos} </div>
            <div className={s.visiblArea}>

            </div>
        </div>
    );
};
export default BlockRanking;