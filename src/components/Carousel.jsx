import React, { Component } from 'react'
import { connect } from 'react-redux';
import Flickity from 'react-flickity-component'
import './Carousel.css'
import Product from './canvas/Product';
import { tabConstants, WEB_TYPE_OPTION_MAPPING, DEFAULT_FIELDER_PART_COLORS } from '../constants';
const { LEATHER_DESIGN, GLOVE_FOUNDATION } = tabConstants;

class Carousel extends Component {
    render() {
        const { views, gloveJson } = this.props;
        let { partNames } = this.props;
        partNames = partNames.filter(part => part.active);
        const designColors = {};
        for(let option of gloveJson[LEATHER_DESIGN]) {
            designColors[option.name] = option.selected_color;
        }
        const selectedWebType = gloveJson[GLOVE_FOUNDATION].filter(option => option.name === 'web_type')[0].selected;
        const selectedLeatherType = gloveJson[GLOVE_FOUNDATION].filter(option => option.name === 'leather')[0].selected;
        let leatherType = 'jk';
        if(selectedLeatherType === 'Peridot Series - US Steerhide Leather') {
            leatherType = 'ussh';
        } else if(selectedLeatherType === 'Topaz Series - Smooth Cowhide Leather') {
            leatherType = 'ch';
        }
        
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
                            return `${view}-fielder-${partName}-${leatherType}-${designColors[part.design_name] || DEFAULT_FIELDER_PART_COLORS[leatherType][part.design_name]}.png`;
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
