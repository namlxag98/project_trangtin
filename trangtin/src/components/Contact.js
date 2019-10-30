import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isRedirect : false,
            fName: "",
            fEmail: "",
            fPhone: "",
            fMess: " "
        }
    }
    
    isChange = (event) => {
        const ten = event.target.name;
        const giatri = event.target.value;
        this.setState(
            {
                [ten]: giatri
            }
        );
    }

    submitForm = (event) => {
        event.preventDefault(); 
        this.setState({
            isRedirect: true
        });
    }

    getGiaTri =() =>{
        var noiDung ="";
        noiDung += "Ten nhan duoc la: "+this.state.fName;
        noiDung += "/ Email nhan duoc la: "+this.state.fEmail;
        noiDung += "/ Sdt nhan duoc la: "+this.state.fPhone;
        noiDung += "/ Message nhan duoc la: "+this.state.fMess;
        return noiDung;
    }
    render() {
        if(this.state.isRedirect){
            console.log(this.getGiaTri());
            
            return <Redirect to="/" />
        }
        return (
            <div>
            <header className="masthead tintuc">
                <div className="container h-100">
                <div className="row h-100">
                    <div className="header-content mx-auto">
                    <h1 className="mb-1">Trang liên hệ</h1>
                    </div>
                </div></div></header>
            {/* start-contact */}
            <section className="page-section" id="contact">
                <div className="container">
                {/* Contact Section Heading */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">LIÊN HỆ VỚI CHÚNG TÔI</h2>
                {/* Icon Divider */}
                <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon">
                    <i className="fas fa-star" />
                    </div>
                    <div className="divider-custom-line" />
                </div>
                {/* Contact Section Form */}
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                    {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                    <form name="sentMessage" id="contactForm" noValidate="novalidate">
                        <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Name</label>
                            <input onChange = { (event) => this.isChange(event)} name="fName" className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                            <p className="help-block text-danger" />
                        </div>
                        </div>
                        <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Email Address</label>
                            <input onChange = { (event) => this.isChange(event)} name="fEmail" className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                            <p className="help-block text-danger" />
                        </div>
                        </div>
                        <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Phone Number</label>
                            <input onChange = { (event) => this.isChange(event)} name="fPhone" className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                            <p className="help-block text-danger" />
                        </div>
                        </div>
                        <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Message</label>
                            <textarea onChange = { (event) => this.isChange(event)} name="fMess" className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                            <p className="help-block text-danger" />
                        </div>
                        </div>
                        <br />
                        <div id="success" />
                        <div className="form-group">
                        <button type="submit" onClick = {(event) => this.submitForm(event)} className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </section>
            {/* end-contact */}
            </div>

        );
    }
}

export default Contact;