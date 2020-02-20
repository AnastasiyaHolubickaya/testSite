import s from "./BlockComments.module.css";
import React from "react";

let BlockComments = (props) => {
    console.log(props.blockComments);

    let commentItem = props.blockComments.map(e=>
                <div  className={s.item}>
                    <div  className={s.img}>
                        <img  src={e.img} alt={e.name}/>
                    </div>
                    <div  className={s.text}>
                        <span >{e.text}</span>
                    </div>
                    <div className={s.name}>
                        <span>{e.name}</span>
                    </div>
                    <hr/>
                    <div className={s.company}>
                        <span>{e.company}</span>
                    </div>

                </div>

    );

    return(

            <div className={s.block}>
                <div className={s.title}>
                    what clients say
                </div>
                <div className={s.comments}>
                    {commentItem}
                </div>
            </div>

    );
};
export default BlockComments;