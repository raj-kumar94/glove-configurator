import React, { Component } from 'react'

class PickColor extends Component {

    state = {
        colors: [
            {name: 'Black', code: 'BLACK', rgb: 'center center rgb(26, 26, 26)'},
            {name: 'Grey', code: 'GREY', rgb: 'center center rgb(144, 143, 136)'},
            {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
            {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
            {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
            {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
            {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
            {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
            {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
            {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
            {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
            {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
            {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
            {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
        ],
        color_for: 'WELTING_COLOR'
    }

    render() {

        const { color_for, colors } = this.state;

        return (
            <div className="pick-color-wrapper">
                <p className="text-muted color-title ml-3">Pick a color</p>
                <div className="d-flex flex-wrap ml-3 mr-3">
                    {colors.map((color, index) => (
                        <div className="pick-color-row" key={`${color_for}_${color.code}_${index}`}>
                            <input type="radio" name={color_for} id={`${color_for}_${color.code}`} value={color.code}></input>
                            <div>
                                <label htmlFor={`${color_for}_${color.code}`} className="color-label">
                                    <span className="color color-value" style={{background: color.rgb}}></span>
                                    {color.name}
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default PickColor
