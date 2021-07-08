import React, { Component } from 'react'
import { connect } from 'react-redux';
import Flickity from 'react-flickity-component'
import './Carousel.css'
import Product from './canvas/Product';
import { tabConstants, WEB_TYPE_OPTION_MAPPING } from '../constants';
const { LEATHER_DESIGN, GLOVE_FOUNDATION } = tabConstants;

class Carousel extends Component {
    render() {
        const { views, partNames, gloveJson } = this.props;
        const designColors = {};
        for(let option of gloveJson[LEATHER_DESIGN]) {
            designColors[option.name] = option.selected_color;
        }
        const selectedWebType = gloveJson[GLOVE_FOUNDATION].filter(option => option.name === 'web_type')[0].selected;
        console.log({designColors});
        
        return (
            <>
            <Flickity options={{wrapAround: true, pageDots: false, draggable: false}} className="carousel carousel-main">
                {
                    views.map(view => {
                        const viewImages = partNames.map(part => {
                            // find the color
                            let partName = part.name;
                            if(['web', 'lace', 'stitch'].includes(partName)) {
                                partName = `${partName}-${WEB_TYPE_OPTION_MAPPING[selectedWebType]}`
                            } else if(partName === 'base') {
                                return `${view}-base.png`;
                            }
                            console.log(designColors[part.design_name] || part.defaultColor);
                            return `${view}-fielder-${partName}-jk-${designColors[part.design_name] || part.defaultColor}.png`;
                        });
                        return (
                            <div className="carousel-cell" key={`view-${view}`}>
                                <Product view={view} images={viewImages} />
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
    partNames: state.glove.partNames,
    gloveJson: state.glove.gloveJson,
});

export default connect(mapStateToProps)(Carousel)
