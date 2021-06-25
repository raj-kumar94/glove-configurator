import React, { Component } from 'react'

class SlideOptions extends Component {
    render() {
        return (
            <div className="step-nav--directional">
                <div className="item left-item">
                    <i className="fas fa-angle-left"></i>
                    <span type="button" className="item-name">
                        Web
                    </span>
                </div>
                <div className="item right-item">
                    <span type="button" className="item-name">
                        Wingtip Pinky
                    </span>
                    <i className="fas fa-angle-right"></i>
                </div>
            </div>
        )
    }
}

export default SlideOptions
