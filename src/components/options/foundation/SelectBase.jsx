import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setSelectedGloveFoundation } from '../../../feature/gloveSlice';

export class SelectBase extends Component {

    handleInputChange = (event) => {
        // console.log("object");
        this.props.dispatch(setSelectedGloveFoundation({
            name: event.target.name,
            selected: event.target.value
        }));
    }

    render() {
        const { tabData } = this.props;
        return (
            <div className="select-base-wrapper">
                {
                    tabData.options.map(option => {
                        let id = `Base-${tabData.name}-${option}`
                        return (
                            <div key={id} className="radio-input-wrapper base-options">
                                <div className="col-1">
                                    <input 
                                        type="radio" 
                                        name={`${tabData.name}`} 
                                        id={id} 
                                        value={option} 
                                        onChange={this.handleInputChange} 
                                        checked={option === tabData.selected}
                                    />
                                </div>
                                <div className="col-11">
                                    <label htmlFor={id}>{option}</label>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(SelectBase);
