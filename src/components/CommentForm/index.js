import React, { Component } from 'react';

class ContactForm extends Component {

    state = {
        name: '',
        email: '',
        number: '',
        events: '',
        notes: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name,
            email,
            number,
            events,
            notes, error } = this.state;

        if (name === '') {
            error.name = "S'il vous plaît entrez votre nom";
        }
        if (email === '') {
            error.email = "S'il vous plaît entrez votre addresse mail";
        }
        if (number === '') {
            error.number = "S'il vous plaît entrez votre numéro de téléphone";
        }
        if (events === '') {
            error.events = "Sélectionnez votre liste d'événements";
        }
        if (notes === '') {
            error.notes = "Laisez à nous une note";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.number === '' && error.events === '' && error.notes === '') {
            this.setState({
                name: '',
                email: '',
                number: '',
                events: '',
                notes: '',
                error: {}
            })
        }
    }

    render() {

        const { name,
            email,
            number,
            events,
            notes, error } = this.state;

        return (
            <form onSubmit={this.subimtHandler}>
                <div className="contact-form form-style row">
                    <div className="col-12 col-lg-6">
                        <input type="text" value={name} onChange={this.changeHandler} placeholder="votre nom*" id="fname" name="name" />
                        <p>{error.name ? error.name : ''}</p>
                    </div>
                    <div className="col col-lg-6">
                        <input type="text" placeholder="numéro de téléphone" onChange={this.changeHandler} value={number} id="number" name="number" />
                        <p>{error.number ? error.number : ''}</p>
                    </div>
                    <div className="col-12  col-lg-6">
                        <input type="email" placeholder="Address mail" onChange={this.changeHandler} value={email} id="email" name="email" />
                        <p>{error.email ? error.email : ''}</p>
                    </div>
                    <div className="col-12 col-sm-12">
                        <textarea className="contact-textarea" value={notes} onChange={this.changeHandler} placeholder="Message" name="notes"></textarea>
                        <p>{error.notes ? error.notes : ''}</p>
                    </div>
                    <div className="col-12">
                            <button type="submit" className="theme-btn">Rendez-vous</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default ContactForm;