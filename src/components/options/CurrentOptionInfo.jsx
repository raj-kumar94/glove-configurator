import React, { Component } from 'react'
import { tabConstants } from '../../constants';
const { GLOVE_FOUNDATION, LEATHER_DESIGN, PERSONAL_EMBROIDERY } = tabConstants;

class CurrentOptionInfo extends Component {
    render() {

        const { tabData, indexName } = this.props;
        const name = tabData.name.replace(/_/g, ' ');
        const info = tabData.info || (tabData.controls && tabData.controls[tabData.selected] && tabData.controls[tabData.selected].info);
        let infoBlockActive = true;
        // if there is a selected option
        if(indexName === GLOVE_FOUNDATION && tabData.selected && tabData.required) {
            infoBlockActive = false;
        }
        // if there is a selected color
        if(indexName === LEATHER_DESIGN && tabData.selected_color && tabData.required) {
            infoBlockActive = false;
        }
        if(indexName === PERSONAL_EMBROIDERY) {
            if(tabData.type === "text_and_color" && !tabData.enabled) {
                infoBlockActive = false;
            } else if(tabData.type === "text_and_color" && tabData.enabled && tabData.text && tabData.selected_color) {
                infoBlockActive = false;
            }
        }
        
        return (
            <div className="current-info-block">
                <h5 className="title">{name}</h5>
                {
                    infoBlockActive &&
                    <div className="info">
                        <i className={`fas ${info ? "fa-info-circle": "fa-exclamation-triangle" }`}></i>
                        <small>{ info || 'Required'}</small>
                    </div>
                }
            </div>
        )
    }
}

export default CurrentOptionInfo
