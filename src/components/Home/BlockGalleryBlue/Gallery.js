import s from './Gallery.module.css'
import React from "react";

class Slider1 extends  React.Component{

    constructor(props) {
        //console.log(props)
        super(props);
        this.state = {
            image: props.galleryBlue,
            currentImageIndex: 0,
            isCycleMode: false,
            stepPrev: false,
            stepNext:true
        };
        this.nextSliderHandler = this.nextSliderHandler.bind(this);
    }
    nextSliderHandler (e){

        let newIndex = this.state.currentImageIndex;
        if(e.currentTarget.dataset.direction ==='next') {
            if(newIndex < this.state.image.length-1) {
                newIndex = this.state.currentImageIndex + 1;
                this.setState({
                    stepPrev: true//если сделали шаг вперед - есть шаг назад
                });
            }
            if(newIndex===this.state.image.length-1){
                this.setState({
                    stepNext: false//если дошлли до конца массива
                });

            }

        }else{
            if(newIndex > 0){
                newIndex = this.state.currentImageIndex -1;
                this.setState({
                    stepNext: true
                });
            }
            if(newIndex === 0) {
                this.setState({
                    stepPrev: false
                });
            }
        }

            this.setState({currentImageIndex: newIndex});
     }



    render(){
        return(

                <div className={s.blockGallery}>

                    <div className={s.container}>
                        <img  src={this.state.image[this.state.currentImageIndex]} alt=""/>
                    <button disabled={!this.state.stepPrev} data-direction='prev' onClick={this.nextSliderHandler.bind(this)} className={`${s.prev} ${s.btn}`}> &#706; </button>
                    <button disabled={!this.state.stepNext} data-direction='next' onClick={this.nextSliderHandler.bind(this)} className={`${s.next} ${s.btn}`}> &#707;</button>
                </div>

                </div>
        );

    }



}
export default Slider1;
/*let galery = props.galleryBlue.map(e=>

            <div className={s.itemGallery}>
                <img src={e.img} alt={e.alt}/>
            </div>
    );

    return(
        <div className={s.dd}>
            <div className={s.blockGallery}>

                <div className={s.viewArea}> </div>
                <button className={s.btn}> </button>
                <button className={s.btn}> </button>

            </div>
            <div className={s.container}>
                {galery}
            </div>
        </div>
    );*/
/* <div style ={{display: "inline-block"}} className={s.area}>  {galery} </div> */