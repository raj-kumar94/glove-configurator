import React, { Component } from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Flickity from 'react-flickity-component'
import './Carousel.css'
import Product from './Product';

class Carousel extends Component {
    render() {
        // var settings = {
        //     dots: false,
        //     infinite: true,
        //     speed: 500,
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        // };

        return (
            // <Slider {...settings}>
            //     <Product />
            //     <Product />
            //     <Product />
            //     <Product />
            // </Slider>
            
            <>
            <Flickity options={{wrapAround: true, pageDots: false}} className="carousel carousel-main">
                <div className="carousel-cell"><Product /></div>
                <div className="carousel-cell"><Product /></div>
                <div className="carousel-cell"><Product /></div>
                <div className="carousel-cell"><Product /></div>
            </Flickity>
            </>
        )
    }
}

export default Carousel
