import classes from "./BlockForm.module.css";
import React from "react";
import icon from '../../img/icon/headquater.png';
import icon2 from '../../img/icon/canada.png';
import {NavLink} from "react-router-dom";

class BlockForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            skype: '',
            message: '',
            budget: '',
            nameValid: null,
            emailValid: null,
            phoneValid: null,
            formValide: true,
            formSubmit: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let nameValid = this.state.nameValid;
        let emailValid=this.state.emailValid;
        let phoneValid= this.state.phoneValid;


        switch (nam){
            case 'name':
                nameValid= val.match(/[0-9]/);     //регулярка  слово без символов
                this.setState({nameValid : nameValid});
                if(nameValid==null) this.setState({[nam]: val}) ;
                break;
            case 'phone':
                phoneValid = val.match(/\D/); // регулярка телефон
                this.setState({phoneValid: phoneValid});
                if(phoneValid==null)this.setState({[nam]: val});
                break;
            case 'email':
            case 'skype':
            case 'message':
            case 'budget':
                this.setState({[nam]: val});
                break;
        }

    };


    handleSubmit(event) {
        if(this.state.name!='' && this.state.email!='' && this.state.phone!='' && this.state.skype!='' && this.state.message!='' && this.state.budget!=''){
            this.setState({formValide: true});
           // alert('Я улетел!');//  !!!!!!!!!!!!!!!!!!!!!!!!!
            event.preventDefault();
            this.setState({formSubmit: true});
        }
        else{
            this.setState({formValide: false});
            event.preventDefault();
        }

    }

    render() {
        return (
            <div className={classes.divForm}>
                <div className={classes.blockForm }>
                    <div className={classes.formHead}>
                        <h1>  GET IN TOUCH </h1>
                        <span> We’re here for you, and we’re wearing our thinking caps. But first swing by our fantastic Help Center for all your Sparkle Appz product and technical needs! </span>
                    </div>
                    <div style={(this.state.formSubmit !=true) ? { display:"block" } : { display:"none" }}>
                        <form className={classes.form}>

                            <div className={classes.elementForms}>
                                <input className={(this.state.nameValid != null) ? 'classInput' : 'classInputError'}
                                       type="text" value={this.state.name} name="name" onChange={this.handleChange}
                                       placeholder="Name" maxLength="10"/>
                                <label className={classes.labelError}
                                       style={(this.state.nameValid != null || (this.state.formValide == false && this.state.name == '')) ? {display: "block"} : {display: "none"}}>
                                    {(this.state.name == '' && this.state.formValide == false) ? 'This field is required.' : 'Input currect Name.'}
                                </label>
                            </div>


                            <div className={classes.elementForms}>
                                <input type="e-mail" value={this.state.email} name="email" onChange={this.handleChange}
                                       placeholder="Email"
                                       pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
                                       minLength="4" maxLength="30" required maxLength="20"/>
                                <label className={classes.labelError}
                                       style={(this.state.emailValid != null || (this.state.formValide == false && this.state.email == '')) ? {display: "block"} : {display: "none"}}>
                                    {(this.state.email == '' && this.state.formValide == false) ? 'This field is required.' : 'Input currect e-mail.'}
                                </label>
                            </div>


                            <div className={classes.elementForms}>
                                <input type="phone" value={this.state.phone} name="phone" onChange={this.handleChange}
                                       placeholder="Phone" maxLength="10"/>
                                <label className={classes.labelError}
                                       style={(this.state.phoneValid != null || (this.state.formValide == false) && this.state.phone == '') ? {display: "block"} : {display: "none"}}>
                                    {(this.state.phone == '' && this.state.formValide == false) ? 'This field is required.' : 'Input currect phone number.'}
                                </label>
                            </div>


                            <div className={classes.elementForms}>
                                <input type="text" value={this.state.skype} name="skype" onChange={this.handleChange}
                                       placeholder="Skype" maxLength="15"/>
                                <label className={classes.labelError}
                                       style={(this.state.formValide == false && this.state.skype == '') ? {display: "block"} : {display: "none"}}>
                                    This field is required.
                                </label>
                            </div>


                            <div className={classes.elementForm}>
                                <input type="textarea" value={this.state.message} name="message"
                                       onChange={this.handleChange} placeholder="Message" required maxLength="250"/>
                                <label className={classes.labelError}
                                       style={(this.state.formValide == false && this.state.message == '') ? {display: "block"} : {display: "none"}}>
                                    This field is required.
                                </label>
                            </div>


                            <div className={classes.elementForm}>
                                <input type="text" value={this.state.budget} name="budget" onChange={this.handleChange}
                                       placeholder="Budget" maxLength="10"/>
                                <label className={classes.labelError}
                                       style={(this.state.formValide == false && this.state.budget == '') ? {display: "block"} : {display: "none"}}>
                                    This field is required.
                                </label>
                            </div>


                            <input type="submit" value="Get A Quote" onClick={this.handleSubmit}/>
                        </form>

                    </div>


                <div className={classes.sendForm} style={(this.state.formSubmit ==true) ? { display:"block" } : { display:"none" }}>

                    <b> Thanks for contacting us! We will be in touch with you shortly.</b><br/>
                    <span> <NavLink href="/#home">SparkleAppz</NavLink> is a professional IT solution and web development company. We provide complete web design and IT services to make your product successful in market with eye-catching outlook and appropriate web design. We put together our delicate, exceptional methods by building in our personal intensive experience. Our own strategy supplies the drive and ready-to-use design necessary to deliver excellent.</span>
                </div>
            </div>
                <div className={classes.blockContacts}>
                    <div className={classes.contact}>
                        <h1>REACH US</h1>
                        <div className={classes.blok}>
                        <div className={classes.icon}> <img src={icon} alt="icon"/></div>
                        <h6> Headquarters</h6>
                        <span>10, Paota, Jodhpur, Rajasthan, India.</span>
                        </div>
                        <div className={classes.blok}>
                        <div className={classes.icon}> <img src={icon2} alt="icon"/></div>

                        <h6> Canada Office</h6>
                        <span>100 city centre drive mississauga,<br/>
Ontario, Canada.</span><br/>
                    </div>
                        <button className={classes.call}><NavLink to="tel:+917737791591">call us</NavLink> </button>
                        <button className={classes.call}><NavLink to="whatsapp://send?text=<?php echo urlencode( '<TEXT>' ); ?>"
                                                            data-action="share/whatsapp/share">Whatsapp Us</NavLink> </button>

                    </div>



                </div>

            </div>


        );
    }
}
export default BlockForm;