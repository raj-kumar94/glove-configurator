import React, { Component } from 'react'
import { connect } from 'react-redux';
import Flickity from 'react-flickity-component'
import './Carousel.css'
import Product from './canvas/Product';
import { tabConstants, WEB_TYPE_OPTION_MAPPING, DEFAULT_FIELDER_PART_COLORS, PART_NAME_MAPPING } from '../constants';
const { LEATHER_DESIGN, GLOVE_FOUNDATION, PERSONAL_EMBROIDERY } = tabConstants;

class Carousel extends Component {
    render() {
        const { views, gloveJson, thumbLogoSrc } = this.props;
        let thumbLogoSrc_ = '';
        let { partNames } = this.props;
        partNames = partNames.filter(part => part.active);
        const designColors = {};
        for(let option of gloveJson[LEATHER_DESIGN]) {
            designColors[option.name] = option.selected_color;
        }
        // const selectedWebType = gloveJson[GLOVE_FOUNDATION].filter(option => option.name === 'web_type')[0].selected;
        // const selectedLeatherType = gloveJson[GLOVE_FOUNDATION].filter(option => option.name === 'leather')[0].selected;
        let selectedWebType, selectedLeatherType, thumbTextData, pinkyTextData, nameFont, fingetHoodLocation, fingerPadLocation;
        for(let option of gloveJson[GLOVE_FOUNDATION]) {
            if(option.name === 'web_type') {
                selectedWebType = option.selected;
            } else if(option.name === 'leather') {
                selectedLeatherType = option.selected;
            } else if(option.name === 'finger_hood_location') {
                fingetHoodLocation = option.selected;
            } else if(option.name === 'finger_pad_location') {
                fingerPadLocation = option.selected;
            }
        }

        for(let option of gloveJson[PERSONAL_EMBROIDERY]) {
            if(option.name === 'name on thumb') {
                thumbTextData = option;
            } else if(option.name === 'name on pinky') {
                pinkyTextData = option;
            } else if(option.name === 'name font') {
                nameFont = option.selected;
            } else if(option.name === 'thumb logo' && option.selected === "Custom" && thumbLogoSrc) {
                thumbLogoSrc_ = thumbLogoSrc;
            }
        }
        let leatherType = 'jk';
        if(selectedLeatherType === 'Peridot Series - US Steerhide Leather') {
            leatherType = 'ussh';
        } else if(selectedLeatherType === 'Topaz Series - Smooth Cowhide Leather') {
            leatherType = 'ch';
        }

        // const thumbTextData = gloveJson[PERSONAL_EMBROIDERY].filter(option => option.name === "name on thumb")[0];
        // const pinkyTextData = gloveJson[PERSONAL_EMBROIDERY].filter(option => option.name === "name on pinky")[0];
        // const nameFont = gloveJson[PERSONAL_EMBROIDERY].filter(option => option.name === "name font")[0].selected;
        
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
                            if(view === "view01") {
                                if(["fp", "fpstitch"].includes(partName)) {
                                    partName = `${partName}${fingerPadLocation.toLowerCase()}`
                                }
                                if(["hood", "hoodstitch"].includes(partName)) {
                                    partName = `${partName}${fingetHoodLocation.toLowerCase()}`
                                }
                            } else {
                                if(["fp", "fpstitch"].includes(partName)) {
                                    partName = partName.replace('fp', 'fingerpad');
                                }
                                if(["hood", "hoodstitch"].includes(partName)) {
                                    // same name will be used
                                }
                            }
                            return `${view}-fielder-${partName}-${leatherType}-${designColors[part.design_name] || DEFAULT_FIELDER_PART_COLORS[leatherType][part.design_name]}.png`;
                        });
                        return (
                            <div className="carousel-cell" key={`view-${view}`}>
                                <Product 
                                    view={view} 
                                    images={viewImages}
                                    thumbTextData={thumbTextData} 
                                    pinkyTextData={pinkyTextData} 
                                    nameFont={nameFont} 
                                    thumbLogoSrc={thumbLogoSrc_}
                                />
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
    thumbLogoSrc: state.glove.thumbLogoSrc,
});

export default connect(mapStateToProps)(Carousel)
