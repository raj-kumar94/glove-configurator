import React, { Component } from 'react'

class OptionTabs extends Component {
    render() {
        return (
            <ul className="d-flex list-unstyled mb-0" role="tablist">
                
                <li className="react-tab-tab box-shadow--light d-flex flex-column" role="tab" id="react-tabs-0" aria-selected="false" aria-disabled="false" >
                    <span className="font-weight-medium mr-1">Base</span>
                    <span className="font-weight-light">2 remaining</span>
                </li>
                
                <li className="react-tab-tab box-shadow--light d-flex flex-column active" role="tab" id="react-tabs-2" aria-selected="true" aria-disabled="false"  tabIndex="0">
                    <span className="font-weight-medium mr-1">Colors</span>
                    <span className="font-weight-light">9 remaining</span>
                </li>
                
                <li className="react-tab-tab box-shadow--light d-flex flex-column" role="tab" id="react-tabs-4" aria-selected="false" aria-disabled="false" >
                    <span className="font-weight-medium mr-1">Personalize</span>
                    <span className="font-weight-light">1 remaining</span>
                </li>
                
            </ul>
        )
    }
}

export default OptionTabs
