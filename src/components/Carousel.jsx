import React, { Component } from 'react'
import { connect } from 'react-redux';
import Flickity from 'react-flickity-component'
import './Carousel.css'
import Product from './Product';

class Carousel extends Component {
    render() {
        const { views } = this.props;

        return (
            <>
            <Flickity options={{wrapAround: true, pageDots: false}} className="carousel carousel-main">
                {
                    views.map(view => (
                        <div className="carousel-cell" key={`view-${view}`}><Product /></div>
                    ))
                }
            </Flickity>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    views: state.glove.views,
});

export default connect(mapStateToProps)(Carousel)
