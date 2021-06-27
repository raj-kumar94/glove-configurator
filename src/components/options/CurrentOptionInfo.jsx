import React, { Component } from 'react'

class CurrentOptionInfo extends Component {
    render() {

        const { tabData } = this.props;
        const name = tabData.name.replace(/_/g, ' ');

        return (
            <div className="current-info-block">
                <h5 className="title">{name}</h5>
                <div className="info">
                    {
                        tabData.required &&
                        <>
                        <i className="fas fa-exclamation-triangle"></i>
                        <small>Required</small>
                        </>
                    }
                </div>
            </div>
        )
    }
}

export default CurrentOptionInfo
