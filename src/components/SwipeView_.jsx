import React, { Component } from 'react'
import { connect } from "react-redux";
import SwipeableViews from 'react-swipeable-views';
import SlideOptions from '../components/options/SlideOptions';
import CurrentOptionInfo from '../components/options/CurrentOptionInfo';
import PickColor from '../components/options/PickColor';
import SelectBase from './options/SelectBase';
import SelectPersonalEmbroidery from './options/personalize/SelectPersonalEmbroidery';
import { tabConstants } from '../constants';
const { GLOVE_FOUNDATION, LEATHER_DESIGN, PERSONAL_EMBROIDERY } = tabConstants;

class SwipeView extends Component {

    componentDidMount() {
        console.log(this.props.gloveJson)
    }

    render() {

        const styles = {
            slideContainer: {
            //   height: 'content-height',
              WebkitOverflowScrolling: 'touch', // iOS momentum scrolling
            },
            slide: {
              padding: 15,
              minHeight: 100,
              color: '#fff',
            }
          };

        const { gloveJson, selectedTab, swipeViewIndexes } = this.props;
        const selectedAndActiveTab = gloveJson[selectedTab].filter(gtab => gtab.active);

        return (
            <SwipeableViews index={swipeViewIndexes[selectedTab]} className="swipable-views-colors-wrapper" animateHeight>
                {
                    selectedAndActiveTab.map((tabData, index) => {
                        let nextItem = selectedAndActiveTab[index + 1] ? selectedAndActiveTab[index + 1].name: '';
                        let prevItem = selectedAndActiveTab[index - 1] ? selectedAndActiveTab[index - 1].name: '';
                        nextItem = nextItem.replace(/_/g, ' ');
                        prevItem = prevItem.replace(/_/g, ' ');
                        return (
                            <div key={`tabData-${index}`}>
                                <SlideOptions 
                                    currentIndex={index} 
                                    indexName={selectedTab}
                                    noPrev={index===0} 
                                    noNext={index===selectedAndActiveTab.length-1} 
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
                                    selectedTab === GLOVE_FOUNDATION &&
                                    <SelectBase tabData={tabData} />
                                }
                                {
                                    selectedTab === LEATHER_DESIGN &&
                                    <PickColor tabData={tabData} />
                                }
                                {
                                    selectedTab === PERSONAL_EMBROIDERY &&
                                    <SelectPersonalEmbroidery tabData={tabData} />
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