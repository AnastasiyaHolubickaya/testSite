import s from './SocialNetw.module.css'
import React from "react";


let SocialNetw = (props) => {
    return(
        <div className={s.block}>

            <div className={s.items}>
                <div className={`${s.icon} ${s.facebook}`}> </div>
                <div className={s.title}>facebook</div>
            </div>
            <div className={s.items}>
                <div className={`${s.icon} ${s.twitter}`}> </div>
                <div className={s.title}>twitter</div>
            </div>
            <div className={s.items}>
                <div className={`${s.icon} ${s.instagram}`}> </div>
                <div className={s.title}>instagram</div>
            </div>
            <div className={s.items}>
                <div className={`${s.icon} ${s.linkedin}`}> </div>
                <div className={s.title}>linkedin</div>
            </div>
            <div className={s.items}>
                <div className={`${s.icon} ${s.clutch}`}> </div>
                <div className={s.title}>clutch</div>
            </div>
            <div className={s.items}>
                <div className={`${s.icon} ${s.upwork}`}> </div>
                <div className={s.title}>upwork</div>
            </div>

        </div>
    );
};
export default SocialNetw;