import React from 'react';
import './style.css'
import {Link} from 'react-router-dom'
import team_1 from '../../images/team/1.jpg';


const TrialSection = () => {

    return (
            
        <div className="trial-aria">
            <div className="trial-container">
                <h3>ESSAI GRATUIT, SANS ENGAGEMENT</h3>
                <br/>
                <hr/>

                <p>
                Vous pouvez commencer dès maintenant à utiliser notre système de gestion de supply chain gratuitement et sans engagement pour une durée de 30 jours, inscrivez vous dès maintenant en cliquant sur ce bouton
                </p>
                <br/>
                <div className="btns">
                   <div className="btn-style"><Link to="/">ESSAI GRATUIT</Link></div>
                </div>
                <br/>
                <h5>30 JOURS</h5>
            </div>
        </div>
    );
}
        


export default TrialSection;            