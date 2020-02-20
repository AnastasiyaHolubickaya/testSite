import s from './Gallery.module.css'
import React from "react";


let Gallery = (props) => {

    let gallery = props.homeGallery.map(e=>

        <div  id={e.id} className={s.itemGallery}>
            <img src={e.img} alt={e.alt}/>
        </div>
    );

    let input = props.homeGallery.map(e=>
        <div className={s.input}>
            <input  type="radio" name="point" id={e.id}/>
            <label  htmlFor={e.id} />
        </div>
    );



    return(
        <div className={s.blockGallery}>
            <h1 className={s.title}> who we`ve worked with</h1>
            <div className={s.container}>  {gallery} </div>
            <div className={s.blockInputs}> {input} </div>
        </div>






    );
};

export default Gallery;

/*

*/
