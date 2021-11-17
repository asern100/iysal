import React from 'react';
import './style.css';
import {Row, Col, Container} from 'reactstrap'
import data from '../../images/datasm.png'
import diag from '../../images/diagsm.png'
import stat from '../../images/statsm.png'
import advanc from '../../images/advancsm.png'
import geo from '../../images/geosm.png'
import auto from '../../images/autosm.png'



const MyGrid = () => {
   
    return (
            
        <div className="grid-aria"  >
            <div className="grid-container">
                <h3>Caracteristique</h3>
                <br/>
                <Container>
                
                    <Row   className="left" >
                        <Col className="item" >
                            <Col className="img" lg={4}  >
                            <img src={data} alt=""/>
                            </Col>
                            <Col className="desc" lg={8}  >
                                <span>Améliorez votre performance</span>
                                <p>Augmentez votre chiffre d’affaires en réduisant vos coûts opérationnels et optimisant le travail de vos ressources, aucune charge fixe à l’avance</p>
                            </Col>
                        </Col>
                        <Col className="item">
                            <Col className="img" lg={4} >
                            <img src={stat} alt=""/>
                            </Col>
                            <Col className="desc" lg={8} >
                                <span>Renforcez la productivité des équipes</span>
                                <p>Vos agents parcourent moins de kilomètres et réalisent ainsi davantage d’interventions quotidiennes.</p>
                            </Col>
                            
                        </Col>
                        <Col className="item">
                            <Col className="img" lg={4} >
                            <img src={diag} alt=""/>
                            </Col>
                            <Col className="desc" lg={8}  >
                                <span>Digitalisez votre processus</span>
                                <p>
                                Digitalisez votre activité grâce à la transmission dématérialisée des informations et des rapports d’intervention.
                                Rapport instantané en cas d’anomalie 
                                Possibilité d’intervention momentanément
                                </p>
                            </Col>  
                        </Col>
                    </Row>
                    <Row   className="right"   >

                        <Col className="item">
                            <Col className="img" lg={4} >
                            <img src={advanc} alt=""/>
                            </Col>
                            <Col className="desc" lg={8}  >
                                <span>Améliorez les conditions de travail</span>
                                <p>
                                Digitalisez votre activité grâce à la transmission dématérialisée des informations et des rapports d’intervention.
                                Rapport instantané en cas d’anomalie 
                                Possibilité d’intervention momentanément
                                </p>
                            </Col>  
                        </Col>
                        <Col className="item">
                            <Col className="img" lg={4} >
                            <img src={geo} alt=""/>
                            </Col>
                            <Col className="desc" lg={8}  >
                                <span>Réduisez votre impact environnemental</span>
                                <p>
                                Limitez également les déplacements de vos équipes et réduisez ainsi vos émissions de CO2
                                </p>
                            </Col>  
                        </Col>
                        <Col className="item">
                            <Col className="img" lg={4} >
                            <img src={auto} alt=""/>
                            </Col>
                            <Col className="desc" lg={8}  >
                                <span>Boostez votre satisfaction client</span>
                                <p>
                                Automatisez enfin l’envoi de notifications à chaque étape du processus de livraison ou d’intervention afin de tenir vos clients informés
                                </p>
                            </Col>  
                        </Col>
                    </Row>
                
                </Container>
            </div>
        </div>
    );
}
        


export default MyGrid;            