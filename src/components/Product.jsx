import React, { Component } from 'react'
import { Stage, Layer } from 'react-konva';
import LoadImageFromURL from './LoadImageFromURL';

class Product extends Component {

    layerRef = React.createRef();

    state = {
        // NAMING CONVENTION: Leather Type-Position-Part Name-Color (JK-Fielder-F1-Blue)
        images: [
            `${this.props.view}-Base.png`,
            `${this.props.view}-fielder-Wrist-JK-Gray.png`,
            `${this.props.view}-fielder-logo-JK-Wine.png`,
            `${this.props.view}-fielder-F1-JK-Gray.png`,
            `${this.props.view}-fielder-F2-JK-Wine.png`,
            `${this.props.view}-fielder-F3-JK-Gray.png`,
            `${this.props.view}-fielder-F4-JK-Wine.png`,
            `${this.props.view}-fielder-F5-JK-Gray.png`,
            `${this.props.view}-fielder-F6-JK-Wine.png`,
            `${this.props.view}-fielder-F7-JK-Gray.png`,
            `${this.props.view}-fielder-F8-JK-Wine.png`,
            `${this.props.view}-fielder-T2-JK-Gray.png`,
            `${this.props.view}-fielder-T1-JK-Wine.png`,
            `${this.props.view}-fielder-Pipping-JK-Gray.png`,
            `${this.props.view}-fielder-Welting-JK-Gray.png`,
            `${this.props.view}-fielder-Palm-JK-Wine.png`,
            `${this.props.view}-fielder-Web-T-JK-Gray.png`,
            `${this.props.view}-fielder-Lace-T-JK-Wine.png`,
            `${this.props.view}-fielder-hood-JK-Wine.png`,
            `${this.props.view}-fielder-stitch-T-JK-Red.png`
        ],
        containerWidth: window.screen.width > 768 ? 700: 500,
        conatainerHeight: window.screen.width > 768 ? 700: 500
    }

    componentDidMount() {

        const images = this.state.images;
        images[6] = `${this.props.view}-fielder-F4-JK-Orange.png`;
        this.setState({images});

        // had to set timeout because it cache() was causing the product to disappear
        // setTimeout(() => {
        //     const cachedStage = this.layerRef.current.cache();
        //     console.log(cachedStage);
        // }, 100);
    }


    render() {
        const { containerWidth, conatainerHeight, images } = this.state;
        const { view } = this.props;
        console.log('rendering')

        return (
            <div className="product-view">
                <Stage width={containerWidth} height={conatainerHeight}>
                    <Layer ref={this.layerRef}>
                        {
                            images.map((src, index) => {
                                src = `/images/${view}/${src}`;
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
