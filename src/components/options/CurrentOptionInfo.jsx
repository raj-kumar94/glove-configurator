import React, { Component } from 'react'

class CurrentOptionInfo extends Component {
    render() {

        const { tabData } = this.props;
        const name = tabData.name.replace(/_/g, ' ');
        const info = tabData.info || (tabData.controls && tabData.controls[tabData.selected] && tabData.controls[tabData.selected].info);

        return (
            <div className="current-info-block">
                <h5 className="title">{name}</h5>
                <div className="info">
                    {
                        tabData.required &&
                        <>
                        <i className={`fas ${info ? "fa-info-circle": "fa-exclamation-triangle" }`}></i>
                        <small>{ info || 'Required'}</small>
                        </>
                    }
                </div>
            </div>
        )
    }
}

export default CurrentOptionInfo
