import React, { Component } from 'react'
import { Stage, Layer } from 'react-konva';
import LoadImageFromURL from './LoadImageFromURL';

class Product extends Component {

    layerRef = React.createRef();

    state = {
        // NAMING CONVENTION: Leather Type-Position-Part Name-Color (JK-Fielder-F1-Blue)
        images: [
            // "Base.png",
            "view01-fielder-Wrist-JK-Gray.png",
            "view01-fielder-logo-JK-Wine.png",
            "view01-fielder-F1-JK-Gray.png",
            "view01-fielder-F2-JK-Wine.png",
            "view01-fielder-F3-JK-Gray.png",
            "view01-fielder-F4-JK-Wine.png",
            "view01-fielder-F5-JK-Gray.png",
            "view01-fielder-F6-JK-Wine.png",
            "view01-fielder-F7-JK-Gray.png",
            "view01-fielder-F8-JK-Wine.png",
            "view01-fielder-T2-JK-Gray.png",
            "view01-fielder-T1-JK-Wine.png",
            "view01-fielder-Pipping-JK-Gray.png",
            "view01-fielder-Welting-JK-Gray.png",
            "view01-fielder-Palm-JK-Wine.png",
            "view01-fielder-Web-T-JK-Gray.png",
            "view01-fielder-Lace-T-JK-Wine.png",
            "view01-fielder-hood-JK-Wine.png",
            "view01-fielder-stitch-T-JK-Red.png"
        ],
        containerWidth: 500,
        conatainerHeight: 500
    }


    componentDidMount() {

        // had to set timeout because it cache() was causing the product to disappear
        // setTimeout(() => {
        //     const cachedStage = this.layerRef.current.cache();
        //     console.log(cachedStage);
        // }, 100);
    }


    render() {
        const { containerWidth, conatainerHeight, images } = this.state;
        console.log('rendering')

        return (
            <div className="product-view">
                <Stage width={containerWidth} height={conatainerHeight}>
                    <Layer ref={this.layerRef}>
                        {
                            images.map((src, index) => {
                                src = `/images/top/${src}`;
                                return (
                                    <LoadImageFromURL key={src} src={src} containerOffsetWidth={containerWidth} containerOffsetHeight={conatainerHeight} />
                                )
                            })
                        }
                    </Layer>
                </Stage>
            </div>
        )
    }
}

export default Product
