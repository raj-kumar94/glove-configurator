import React, { Component } from 'react'
import store from '../../store'
import { Provider } from 'react-redux'
import { Stage, Layer } from 'react-konva';
// import { Stage, Layer } from 'react-konva/lib/ReactKonvaCore';
import LoadImageFromURL from './LoadImageFromURL';
import CanvasText from './CanvasText';
import { tabConstants } from '../../constants';
const { PART_NAMES } = tabConstants;

// const X = `${view}-${position}-${partName}-${leatherType}-${color}.png`;

class Product extends Component {

    layerRef = React.createRef();

    state = {
        // NAMING CONVENTION: Leather Type-Position-Part Name-Color (JK-Fielder-F1-Blue)
        images: [
            `${this.props.view}-base.png`,
            `${this.props.view}-fielder-wrist-jk-gray.png`,
            `${this.props.view}-fielder-logo-jk-wine.png`,
            `${this.props.view}-fielder-f1-jk-gray.png`,
            `${this.props.view}-fielder-f2-jk-wine.png`,
            `${this.props.view}-fielder-f3-jk-gray.png`,
            `${this.props.view}-fielder-f4-jk-wine.png`,
            `${this.props.view}-fielder-f5-jk-gray.png`,
            `${this.props.view}-fielder-f6-jk-wine.png`,
            `${this.props.view}-fielder-f7-jk-gray.png`,
            `${this.props.view}-fielder-f8-jk-wine.png`,
            `${this.props.view}-fielder-t2-jk-gray.png`,
            `${this.props.view}-fielder-t1-jk-wine.png`,
            `${this.props.view}-fielder-piping-jk-gray.png`,
            `${this.props.view}-fielder-welting-jk-gray.png`,
            `${this.props.view}-fielder-palm-jk-wine.png`,
            `${this.props.view}-fielder-web-t-jk-gray.png`,
            `${this.props.view}-fielder-lace-t-jk-wine.png`,
            `${this.props.view}-fielder-hood-jk-wine.png`,
            `${this.props.view}-fielder-stitch-t-jk-Red.png`
        ],
        containerWidth: window.screen.width > 768 ? 700: 500,
        conatainerHeight: window.screen.width > 768 ? 700: 500
    }

    componentDidMount() {

        const images = this.state.images;
        images[6] = `${this.props.view}-fielder-f4-jk-orange.png`;
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
                    <Provider store={store}>
                        <Layer ref={this.layerRef}>
                            {
                                images.map((src, index) => {
                                    src = `/images/${view}/${src}`;
                                    if(view === 'view02' && src.includes('-lace-')) {
                                        return (
                                            <>
                                            <CanvasText />
                                            <LoadImageFromURL key={src} src={src} containerOffsetWidth={containerWidth} containerOffsetHeight={conatainerHeight} />
                                            </>
                                        )
                                    } else {
                                        return (
                                            <LoadImageFromURL key={src} src={src} containerOffsetWidth={containerWidth} containerOffsetHeight={conatainerHeight} />
                                        )
                                    }
                                })
                            }
                        </Layer>
                    </Provider>
                </Stage>
            </div>
        )
    }
}

export default Product
