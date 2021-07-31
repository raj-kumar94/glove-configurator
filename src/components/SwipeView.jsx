import React, { Component } from 'react'
import { connect } from "react-redux";
// import SwipeableViews from 'react-swipeable-views';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import SlideOptions from '../components/options/SlideOptions';
import { setSwipeViewIndex } from '../feature/gloveSlice';
import CurrentOptionInfo from '../components/options/CurrentOptionInfo';
import PickColor from './options/design/PickColor';
import SelectBase from './options/foundation/SelectBase';
import SelectPersonalEmbroidery from './options/personalize/SelectPersonalEmbroidery';
import { tabConstants } from '../constants';
import DesignListOption from './options/design/DesignListOption';
const { GLOVE_FOUNDATION, LEATHER_DESIGN, PERSONAL_EMBROIDERY } = tabConstants;
// const TABS = [GLOVE_FOUNDATION, LEATHER_DESIGN, PERSONAL_EMBROIDERY];

class SwipeView2 extends Component {

    state = {
        selectedTabIndex: 0
    }

    componentDidMount() {
        // console.log(this.props.gloveJson)
    }

    componentDidUpdate() {
        // this.swipeableActions.updateHeight();
    }

    render() {

        const { gloveJson, swipeViewIndexes, TAB, thumbLogoSrc } = this.props;
        // const { selectedTabIndex } = this.state;
        const selectedTabIndex = swipeViewIndexes[TAB];

        const selectedAndActiveTab = gloveJson[TAB].filter(gtab => gtab.active);
        

        return (
            // <SwipeableViews 
            //     index={swipeViewIndexes[TAB]} 
            //     className={`swipable-views-colors-wrapper`} 
            //     animateHeight
            //     action={actions => {
            //         this.swipeableActions = actions
            //     }}
            // >

                <Tabs 
                    // defaultIndex={0} 
                    defaultIndex={swipeViewIndexes[TAB]} 
                    // onSelect={(index) => this.props.dispatch(setSwipeViewIndex({index: index, indexName: TAB})) } 
                    onSelect={(index) => {
                        this.setState({selectedTabIndex: index});
                        // this.props.dispatch(setSwipeViewIndex({index: index, indexName: TAB}));
                    }}
                    className="swipe-view-tabs">
                    <TabList>
                        {
                            selectedAndActiveTab.map((tabData, index) => {

                                let currentItem = tabData.name.replace(/_/g, ' ');
                                let hideTab = true;
                                let currentItemArrow = 'right';

                                if(selectedTabIndex === 0) {
                                    // only second tab to be active
                                    if(index === 1) {
                                        hideTab = false;
                                        currentItemArrow = 'right';
                                    }
                                } else if(selectedTabIndex === selectedAndActiveTab.length-1) {
                                    // only second last tab to be active
                                    if(index === selectedAndActiveTab.length-2) {
                                        hideTab = false;
                                        currentItemArrow = 'left';
                                    }
                                } else {
                                    // console.log("asdasda", selectedAndActiveTab.length + 1);
                                    // only selected and the next tab to be active
                                    if(index === selectedTabIndex-1 || index === selectedTabIndex + 1 ) {
                                        hideTab = false;
                                        if(index === selectedTabIndex-1) {
                                            currentItemArrow = 'left';;
                                        }
                                        if(index === selectedTabIndex+1) {
                                            currentItemArrow = 'right';;
                                        }
                                    }
                                }
                                return (
                                    <Tab key={`tab-${tabData.name}`} 
                                    className={`react-tab-tab box-shadow--light d-flex tab-names ${selectedTabIndex===0? "first-selected":""} ${currentItemArrow} ${hideTab ? "hide-tab": ""}`}
                                    onClick={() => {
                                        if(currentItemArrow === 'left')
                                            this.props.dispatch(setSwipeViewIndex({index: selectedTabIndex-1, indexName: TAB}))
                                        else 
                                            this.props.dispatch(setSwipeViewIndex({index: selectedTabIndex+1, indexName: TAB}))
                                    }}
                                    >
                                        {
                                            currentItemArrow === 'left' &&
                                            <i className="fas fa-angle-left"></i>
                                        }
                                        {currentItem}
                                        {
                                            currentItemArrow === 'right' &&
                                            <i className="fas fa-angle-right"></i>
                                        }
                                    </Tab>
                                )
                            })
                        }
                    </TabList>
                    {/* <OptionTabs /> */}

                    {
                        selectedAndActiveTab.map(tabData => (
                            <TabPanel key={`tab-panel-${tabData.name}`}>
                                <CurrentOptionInfo
                                    tabData={tabData}
                                    indexName={TAB}
                                    thumbLogoSrc={!!thumbLogoSrc}
                                />
                                <div className="tab-user-options-container">
                                    {
                                        TAB === GLOVE_FOUNDATION &&
                                        <SelectBase tabData={tabData} />
                                    }
                                    {
                                        TAB === LEATHER_DESIGN && tabData.as_list &&
                                        <DesignListOption tabData={tabData} pickFor={LEATHER_DESIGN} />
                                    }
                                    {
                                        TAB === LEATHER_DESIGN && !tabData.as_list &&
                                        <PickColor tabData={tabData} />
                                    }
                                    {
                                        TAB === PERSONAL_EMBROIDERY &&
                                        <SelectPersonalEmbroidery tabData={tabData} TAB={TAB} />
                                    }
                                </div>
                            </TabPanel>
                        ))
                    }
                </Tabs>
            // </SwipeableViews>
        )
    }
}

// export default SwipeView

const mapStateToProps = (state) => ({
    swipeViewIndexes: state.glove.swipeViewIndexes,
    gloveJson: state.glove.gloveJson,
    selectedTab: state.glove.selectedTab,
    thumbLogoSrc: state.glove.thumbLogoSrc
});
  
  
export default connect(mapStateToProps)(SwipeView2);