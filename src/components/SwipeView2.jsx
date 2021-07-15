import React, { Component } from 'react'
import { connect } from "react-redux";
import SwipeableViews from 'react-swipeable-views';
import SlideOptions from '../components/options/SlideOptions';
import CurrentOptionInfo from '../components/options/CurrentOptionInfo';
import PickColor from './options/design/PickColor';
import SelectBase from './options/foundation/SelectBase';
import SelectPersonalEmbroidery from './options/personalize/SelectPersonalEmbroidery';
import { tabConstants } from '../constants';
import DesignListOption from './options/design/DesignListOption';
const { GLOVE_FOUNDATION, LEATHER_DESIGN, PERSONAL_EMBROIDERY } = tabConstants;
const TABS = [GLOVE_FOUNDATION, LEATHER_DESIGN, PERSONAL_EMBROIDERY];

class SwipeView2 extends Component {

    componentDidMount() {
        console.log(this.props.gloveJson)
    }

    componentDidUpdate() {
        this.swipeableActions.updateHeight();
    }

    render() {

        const { gloveJson, swipeViewIndexes, TAB } = this.props;

        const selectedAndActiveTab = gloveJson[TAB].filter(gtab => gtab.active);
        

        return (
            <SwipeableViews 
                index={swipeViewIndexes[TAB]} 
                className={`swipable-views-colors-wrapper`} 
                animateHeight
                action={actions => {
                    this.swipeableActions = actions
                }}
            >
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
                                    indexName={TAB}
                                    noPrev={index===0} 
                                    noNext={index===selectedAndActiveTab.length-1} 
                                    nextItem={nextItem} 
                                    prevItem={prevItem} 
                                />
                                <CurrentOptionInfo
                                    tabData={tabData}
                                />
                                <div className="tab-user-options-container">
                                    {
                                        TAB === GLOVE_FOUNDATION &&
                                        <SelectBase tabData={tabData} />
                                    }
                                    {
                                        TAB === LEATHER_DESIGN &&
                                        (
                                            tabData.as_list ?
                                            <DesignListOption tabData={tabData} pickFor={LEATHER_DESIGN} />
                                            : 
                                            <PickColor tabData={tabData} />
                                        )
                                    }
                                    {
                                        TAB === PERSONAL_EMBROIDERY &&
                                        <SelectPersonalEmbroidery tabData={tabData} TAB={TAB} />
                                    }
                                </div>
                            </div>
                        )

                    })
                }
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
  
  
export default connect(mapStateToProps)(SwipeView2);