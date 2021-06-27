import React, { Component } from 'react'
import { connect } from "react-redux";
import { selectTab } from "../../feature/gloveSlice";

class OptionTabs extends Component {

    componentDidMount() {
        // this.props.dispatch(decrement());
    }

    render() {
        return (
            <ul className="d-flex list-unstyled mb-0" role="tablist">
                {
                    this.props.tabs.map(tab => (
                        <li 
                            key={tab.name}
                            className={`react-tab-tab box-shadow--light d-flex flex-column ${tab.name === this.props.selectedTab? 'active': ''}`} 
                            role="tab"
                            onClick={() => this.props.dispatch(selectTab(tab.name))} 
                            // id="react-tabs-0" 
                            // aria-selected="false" 
                            // aria-disabled="false" 
                        >
                            <span className="font-weight-medium mr-1">{tab.name}</span>
                            <span className="font-weight-light">{tab.remaining} remaining</span>
                        </li>
                    ))
                }
                
                {/* <li className="react-tab-tab box-shadow--light d-flex flex-column active" role="tab" id="react-tabs-2" aria-selected="true" aria-disabled="false"  tabIndex="0">
                    <span className="font-weight-medium mr-1">Colors</span>
                    <span className="font-weight-light">9 remaining</span>
                </li>
                
                <li className="react-tab-tab box-shadow--light d-flex flex-column" role="tab" id="react-tabs-4" aria-selected="false" aria-disabled="false" >
                    <span className="font-weight-medium mr-1">Personalize</span>
                    <span className="font-weight-light">1 remaining</span>
                </li> */}
                
            </ul>
        )
    }
}

// export default OptionTabs
const mapStateToProps = (state) => ({
    count: state.glove.value,
    tabs: state.glove.tabs,
    selectedTab: state.glove.selectedTab
});
  
  
export default connect(mapStateToProps)(OptionTabs);
