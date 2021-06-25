import React, { Component } from 'react'

class CurrentOptionInfo extends Component {
    render() {
        return (
            <div className="current-info-block">
                <h5 className="title">WELTING</h5>
                <div className="info">
                    <i className="fas fa-exclamation-triangle"></i>
                    <small>Required</small>
                </div>
            </div>
        )
    }
}

export default CurrentOptionInfo
