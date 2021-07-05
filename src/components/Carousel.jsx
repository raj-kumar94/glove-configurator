import React, { Component } from 'react'
import { connect } from 'react-redux';
import Flickity from 'react-flickity-component'
import './Carousel.css'
import Product from './canvas/Product';

class Carousel extends Component {
    render() {
        const { views, viewImages } = this.props;

        return (
            <>
            <Flickity options={{wrapAround: true, pageDots: false, draggable: false}} className="carousel carousel-main">
                {
                    views.map(view => {

                        return (
                            <div className="carousel-cell" key={`view-${view}`}>
                                <Product view={view} images={viewImages[view]} />
                            </div>
                        )
                    })
                }
            </Flickity>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    views: state.glove.views,
    viewImages: state.glove.viewImages,
});

export default connect(mapStateToProps)(Carousel)
