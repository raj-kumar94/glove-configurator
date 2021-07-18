import React, { Component } from 'react'
import { connect } from "react-redux";
import { Tab, TabList } from 'react-tabs';
// import { selectTab } from "../../feature/gloveSlice";

class OptionTabs extends Component {

    componentDidMount() {
        // this.props.dispatch(decrement());
    }

    render() {
        return (
            // <ul className="d-flex list-unstyled mb-0" role="tablist">
            //     {
            //         this.props.tabs.map((tab, index) => (
            //             <li 
            //                 key={tab.name}
            //                 className={`react-tab-tab box-shadow--light d-flex flex-column ${tab.name === this.props.selectedTab? 'active': ''}`} 
            //                 role="tab"
            //                 onClick={() => this.props.dispatch(selectTab(tab.name))} 
            //             >
            //                 <span className="tab-menu-index"><span className="menu-index">{index+1}</span></span>
            //                 <span className="mr-1">{tab.name}</span>
            //                 <span className="font-weight-light mt-auto">{tab.remaining} remaining</span>
            //             </li>
            //         ))
            //     }
            // </ul>
            <TabList>
                {
                    this.props.tabs.map((TAB, index) => (
                        <Tab key={`tab-${TAB.name}`} 
                        className={`react-tab-tab box-shadow--light d-flex flex-column`}
                        >
                            <span className="tab-menu-index"><span className="menu-index">{index+1}</span></span>
                            <span className="mr-1">{TAB.name}</span>
                            <span className="font-weight-light mt-auto">{TAB.remaining} remaining</span>
                        </Tab>
                    ))
                }
            </TabList>
        )
    }
}

// export default OptionTabs
const mapStateToProps = (state) => ({
    tabs: state.glove.tabs,
    selectedTab: state.glove.selectedTab
});
  
  
export default connect(mapStateToProps)(OptionTabs);
