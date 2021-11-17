import React, { Component } from "react";
import Slider from "react-slick";
import {Link} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './style.css'


class SimpleSlider extends Component {
    render() {
      var settings = {
        /* dots: false,
        infinite: true,
        arrows: false,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        fade:true */
            arrows:false,
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1
      };
      return (
        <section className="hero hero-slider-wrapper hero-style-1">
            <div className="hero-slider">
                    
            <Slider {...settings}>
                <div className="slide1 slide">
                    
                </div>
                <div className="slide2 slide">
                   
                </div>
                <div className="slide3 slide">
                    
                </div>
            </Slider>
            <div className="container">
                        <div className="row">
                            <div className="col col-lg-8 slide-caption">
                                <h2>Optimisez votre supply chain avec l'automatisation intelligente</h2>
                                
                                
                                <div className="btns">
                                    <div className="btn-style"><Link to="/">Contact us now</Link></div>
                                </div>
                            </div>
                        </div>
            </div>
            </div>
        </section>
      );
    }
  }

export default SimpleSlider;