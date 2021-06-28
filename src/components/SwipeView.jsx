import React, { Component } from 'react'
import { connect } from "react-redux";
import SwipeableViews from 'react-swipeable-views';
import SlideOptions from '../components/options/SlideOptions';
import CurrentOptionInfo from '../components/options/CurrentOptionInfo';
import PickColor from '../components/options/PickColor';
import SelectBase from './options/SelectBase';

class SwipeView extends Component {

    componentDidMount() {
        console.log(this.props.gloveJson)
    }

    render() {

        const { gloveJson, selectedTab, swipeViewIndexes } = this.props;

        return (
            <SwipeableViews index={swipeViewIndexes[selectedTab]} className="swipable-views-colors-wrapper">
                {
                    gloveJson[selectedTab].map((tabData, index) => {
                        let nextItem = gloveJson[selectedTab][index + 1] ? gloveJson[selectedTab][index + 1].name: '';
                        let prevItem = gloveJson[selectedTab][index - 1] ? gloveJson[selectedTab][index - 1].name: '';
                        nextItem = nextItem.replace(/_/g, ' ');
                        prevItem = prevItem.replace(/_/g, ' ');
                        return (
                            <div key={`tabData-${index}`}>
                                <SlideOptions 
                                    currentIndex={index} 
                                    indexName={selectedTab}
                                    noPrev={index===0} 
                                    noNext={index===gloveJson[selectedTab].length-1} 
                                    nextItem={nextItem} 
                                    prevItem={prevItem} 
                                />
                                <CurrentOptionInfo
                                    tabData={tabData}
                                />
                                {/* 
                                    If selected tab is Base, show options
                                    If Selected tab is color, show <PickColor />
                                */}
                                {
                                    selectedTab === 'Base' &&
                                    <SelectBase tabData={tabData} />
                                }
                                {
                                    selectedTab === 'Colors' &&
                                    <PickColor tabData={tabData} />
                                }
                            </div>
                        )
                    })
                }
                {/* <div>
                    <SlideOptions currentIndex={0} noPrev={true} nextItem={'Wingtip Pinky'} prevItem={'Web'} />
                    <CurrentOptionInfo />
                    <PickColor />
                </div>
                <div>
                    <SlideOptions currentIndex={1} nextItem={'Next 2'} prevItem={'Prev 2'}/>
                    <CurrentOptionInfo />
                    <PickColor />
                </div>
                <div>
                    <SlideOptions currentIndex={2} nextItem={'Next 3'} prevItem={'Prev 3'}/>
                    <CurrentOptionInfo />
                    <PickColor />
                </div>
                <div>
                    <SlideOptions currentIndex={3} noNext={true} nextItem={'Next 4'} prevItem={'Prev 4'}/>
                    <CurrentOptionInfo />
                    <PickColor />
                </div> */}
            </SwipeableViews>
        )
    }
}

// export default SwipeView

const mapStateToProps = (state) => ({
    swipeViewIndexes: state.glove.swipeViewIndexes,
    gloveJson: state.glove.gloveJson,
    selectedTab: state.glove.selectedTab
});
  
  
export default connect(mapStateToProps)(SwipeView);