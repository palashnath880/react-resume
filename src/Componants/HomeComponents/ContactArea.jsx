import { useState } from "react";

export default function ContactArea() {

    const [ name, setName] = useState("");
    const [ email, setEmail] = useState("");
    const [ message, setMessage] = useState("");
    
    const inputHandler = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        if (inputName === 'name') {
            setName(inputValue);
        } else if (inputName === 'email') {
            setEmail(inputValue);
        } else if (inputName === 'message') {
            setMessage(inputValue);
        }
    }

    const formHandler = (e) => {
        e.preventDefault();
        let data = new FormData();
        console.log(data);
    }

    return (
        <section id="contact-area" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-title">
                        <h2>Contact Me</h2>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="contact-form">
                        <form id="contactForm" onSubmit={formHandler}>
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="name-input">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" value={name} onChange={inputHandler}/>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="email-input">
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="email" name="email" placeholder="Email" value={email} onChange={inputHandler}/>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="textarea-input">
                                        <div className="form-group">
                                                <textarea className="form-control" id="message" name="message" required placeholder="Message" value={message} onChange={inputHandler}></textarea>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-lg-12 text-center">
                                    <div id="success"></div>
                                    <button type="submit" className="contact-btn">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}