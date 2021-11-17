import React from 'react';

import pr1 from '../../images/transsm.png'
import pr2 from '../../images/reactvsm.png'
import pr3 from '../../images/teamsm.png'
import pr4 from '../../images/icon/8.png'
import pr5 from '../../images/icon/9.png'
import pr6 from '../../images/icon/10.png'

import './style.css'

const PracticeArea = ( props ) => {

    return(
        <div className={`practice-area  ptb-100-70 ${props.subclass}`}>
            <div className="container">
                <div className="col-12">
                    <div className="section-title-1 text-center">
                        <span style={{color:"#F9A826"}} >Nos valeurs</span>
                        <br />
                        <p  className="val" style={{fontSize:"1.4rem", height: "3em", overflow: "hidden"}}>
                        A travers nos valeurs, nos équipes travaillent au quotidien pour apporter à nos clients des solutions clé en main. Les équipes IYSAAL supply chain prouvent au quotidien leur implication dans la gestion des trafics clients.

                        </p>
                        <br/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="practice-section">
                            <div className="practices-wrapper">
                                <img src={pr1} alt=""/>
                                <div className="practice-content">
                                    <h2>Réactivité</h2>
                                    <p>
                                    Être réactif, chez IYSAAL supply chain, c’est être capable de donner des réponses logistiques rapides et adaptées afin de satisfaire nos clients. Etre réactif et trouver des solutions rapides fait partie du quotidien de nos équipes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="practice-section">
                            <div className="practices-wrapper">
                                <img src={pr2} alt=""/>
                                <div className="practice-content">
                                    <h2>Enthousiasme</h2>
                                    <p >
                                    Être enthousiaste, chez IYSAAL supply chain, c’est mettre notre énergie et notre détermination au service du client. Travailler dans l’enthousiasme, c’est adopter une attitude positive dans un but de productivité et instaurer un réel partenariat gagnant-gagnant avec nos clients
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="practice-section">
                            <div className="practices-wrapper">
                                <img src={pr3} alt=""/>
                                <div className="practice-content">
                                    <h2>Anticipation</h2>
                                    <p>
                                    Anticiper chez IYSAAL supply chain, c’est savoir être force de proposition. Anticiper, c’est faire participer nos clients en appréhendant ensemble leurs besoins et ceux de leurs clients finaux
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* <div className="col-lg-4 col-md-6 col-12">
                        <div className="practice-section">
                            <div className="practices-wrapper">
                                <div className="practices-icon-wrapper">
                                    <div className="practice-dot">
                                        <div className="dots"></div>
                                    </div>
                                    <i className="fi"><img src={pr4} alt=""/></i>
                                </div>
                                <div className="practice-content">
                                    <h2>Criminal Law</h2>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="practice-section">
                            <div className="practices-wrapper">
                                <div className="practices-icon-wrapper">
                                    <div className="practice-dot">
                                        <div className="dots"></div>
                                    </div>
                                    <i className="fi"><img src={pr5} alt=""/></i>
                                </div>
                                <div className="practice-content">
                                    <h2>Education Law</h2>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="practice-section">
                            <div className="practices-wrapper">
                                <div className="practices-icon-wrapper">
                                    <div className="practice-dot">
                                        <div className="dots"></div>
                                    </div>
                                    <i className="fi"><img src={pr6} alt=""/></i>
                                </div>
                                <div className="practice-content">
                                    <h2>Real Estate Law</h2>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
     )
        
}

export default PracticeArea;
