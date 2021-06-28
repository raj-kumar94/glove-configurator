import React, { Component } from 'react'

export class SelectBase extends Component {
    render() {
        const { tabData } = this.props;
        return (
            <div className="select-base-wrapper">
                {
                    tabData.options.map(option => {
                        let id = `Base-${tabData.name}-${option}`
                        return (
                            <div key={id}>
                                <input type="radio" name={`Base-${tabData.name}`} id={id} />
                                <label htmlFor={id}>{option}</label>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default SelectBase
