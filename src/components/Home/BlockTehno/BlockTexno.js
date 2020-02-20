import s from './BlockTehno.module.css'
import React from "react";



let BlockTehno = (props) => {

    let gallery = props.blockTehno.map(e=>

        <div  id={e.id} className={s.itemGallery}>
            <img src={e.img} alt={e.alt}/>
        </div>
    );





    return(
        <div className={s.blockGallery}>
            <h1 className={s.title}> technologies we use</h1>
            <div className={s.container}>  {gallery} </div>
        </div>
    );

};

export default BlockTehno;