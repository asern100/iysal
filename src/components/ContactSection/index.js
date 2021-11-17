import React from 'react';
import ContactForm from '../CommentForm'
import './style.css'
import man from '../../images/man.png'
import useWindowSize from '../../js/responsive';


const ContactSection = () => {
    const [width] = useWindowSize();
    return(
        <div className="contact-area section-padding" 
        style={{
            width: width - 140,
            margin: "0 auto",
        }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="contact-text">
                            <h2>Êtes-vous intéressé à nous contacter ?</h2>
                            
                            <div className="contact-sub">
                                <div className="contact-icon">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                </div>
                                <div className="contact-c">
                                    <h4>Bureau principal</h4>
                                    <span>18 rue Malaga Manar 1 2092</span>
                                </div>
                            </div>
                            <div className="contact-sub">
                                <div className="contact-icon">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                </div>
                                <div className="contact-c">
                                    <h4>Appelez-nous</h4>
                                    <span>00 216 93 10 24 48</span>
                                </div>
                            </div>
                            <div className="contact-sub">
                                <div className="contact-icon">
                                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                </div>
                                <div className="contact-c">
                                    <h4>Email</h4>
                                    <span>kawther.moualhi@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-7 col-md-12 col-sm-12">
                        <div className="contact-content">
                            <div className="contact-form">
                                    <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img 
            style={{
                position: 'absolute',
                left:0,
                bottom:0
                
            }}
            src={man}
         /> */}
        </div>
     )
        
}

export default ContactSection;
