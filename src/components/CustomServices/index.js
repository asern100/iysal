import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

import right from "../../images/rightsm.png";
import sync from "../../images/sync.png";
import map from "../../images/map.png";

function Services() {
  return (
    <Container>
      <Row
        className="details"
        style={{
          lineHeight: "35px",
          padding: "10px",
        }}
      >
        <h3>
          Nous vous donnons les données et les outils pour optimiser votre
          supply chain
        </h3>
        Nous offrons une visibilité multimodale de la chaîne d'approvisionnement
        permettant à nos clients de comprendre ce qui se passe tout au long de
        leur chaîne d'approvisionnement étendue. 
        <br />
        Grâce à nos informations exploitables, les clients peuvent développer
        des stratégies de réduction des coûts, optimiser leur chaîne
        d'approvisionnement, évaluer les performances et identifier les goulots
        d'étranglement.
        <br />
        Nos tableaux de bord analytiques fournissent des renseignements pour
        améliorer la prise de décision stratégique et les opérations
        quotidiennes. Contrairement aux concurrents proposant des services de
        visibilité de la chaîne d'approvisionnement sur le marché,
        nous garantissons un retour sur investissement minimum de 150% sur la
        visibilité de la chaîne d'approvisionnement .
      </Row>

      <Row>
        <Col
          sm={12}
          md={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: `url(${map}) center center/contain no-repeat local`,
          }}
        >
          <div style={{ width: "380px", height: "290px" }}></div>
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ul
            style={{
              textAlign: "left",
              listStyleType: "none",
              lineHeight: "1.9rem",
              fontWeight: "bold",
              fontSize: "0.8rem",
            }}
          >
            
            <Row>
              <Col sm={2} md={1}>
                <img src={right} />
              </Col>
              <Col sm={11}>
                <li>Développer des stratégies de réduction des coûts</li>
              </Col>
            </Row>
            <Row>
              <Col sm={2} md={1}>
                <img src={right} />
              </Col>
              <Col sm={11}>
                <li>Diminuer les coûts logistiques</li>
              </Col>
            </Row>
            <Row>
              <Col sm={2} md={1}>
                <img src={right} />
              </Col>
              <Col sm={11}>
                <li>Améliorer la gestion des stocks</li>
              </Col>
            </Row>
            <Row>
              <Col sm={2} md={1}>
                <img src={right} />
              </Col>
              <Col sm={11}>
                <li>Optimiser le fonds de roulement</li>
              </Col>
            </Row>
            <Row>
              <Col sm={2} md={1}>
                <img src={right} />
              </Col>
              <Col sm={11}>
                <li>
                  Révéler les points chauds de mauvaise manipulation des colis
                </li>
              </Col>
            </Row>
          </ul>
        </Col>
      </Row>

      <Row
        className="details"
        style={{
          lineHeight: "35px",
          padding: "10px",
        }}
      >
        <h2 style={{ color: "orange" }}>Comment nous le faisons</h2>
        <h3>
          Suivi des colis en temps réel pour collecter des données fiables
        </h3>
        Nous collectons des données et découvrons les angles morts de la chaîne
        d'approvisionnement. Nous fournissons des données en temps réel sur
        l'emplacement des colis dépendant de l’emplacement du transporteur
        pendant tout le trajet des marchandises du point d’enlèvement au point
        de livraison. 
        <br />
        Grâce au calcul dynamique, les clients peuvent mieux planifier et
        prendre des mesures proactives en cas de retard.
      </Row>
      <Row>
        <Col
          sm={12}
          md={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: `url(${sync}) center center/contain no-repeat local`,
          }}
        >
          <div style={{ width: "380px", height: "290px" }}></div>
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ul
            style={{
              textAlign: "left",
              listStyleType: "none",
              lineHeight: "1.9rem",
              fontWeight: "bold",
              fontSize: "0.8rem",
            }}
          >
            <Row>
              <Col sm={2} md={1}>
                <img src={right} />
              </Col>
              <Col sm={11}>
                <li> Localisation en temps réel </li>
              </Col>
            </Row>
            <Row>
              <Col sm={2} md={1}>
                <img src={right} />
              </Col>
              <Col sm={11}>
                <li>
                  Visualisez tous les mouvements du colis en temps réel sur une
                  carte interactive
                </li>
              </Col>
            </Row>
            <Row>
              <Col sm={2} md={1}>
                <img src={right} />
              </Col>
              <Col sm={11}>
                <li>
                  Digitaliser les processus, améliorer les opérations et réduire
                  les coûts administratifs
                </li>
              </Col>
            </Row>
            <Row>
              <Col sm={2} md={1}>
                <img src={right} />
              </Col>
              <Col sm={11}>
                <li>Révéler les points chauds de mauvaise gestion des colis</li>
              </Col>
            </Row>
            <Row>
              <Col sm={2} md={1}>
                <img src={right} />
              </Col>
              <Col sm={11}>
                <li>
                  Répondre aux ré planification des commandes ( ou annulation du
                  commande) en temps réel
                </li>
              </Col>
            </Row>
            <Row>
              <Col sm={2} md={1}>
                <img src={right} />
              </Col>
              <Col sm={11}>
                <li>Gestion du retour</li>
              </Col>
            </Row>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
