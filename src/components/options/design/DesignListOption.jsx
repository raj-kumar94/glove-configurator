import React from 'react';
import { useDispatch } from 'react-redux'
import { setSelectedColor } from '../../../feature/gloveSlice'

function DesignListOption(props) {
    const dispatch = useDispatch();
    const { tabData, pickFor } = props;

    const handleInputChange = (event) => {
        dispatch(setSelectedColor({
            name: event.target.name,
            selected_color: event.target.value
        }));
    }

    // console.log({tabData});

    return (
        <div className="personalize-option-wrapper">
            {
                tabData.colors.map(option => {
                    let id = `${pickFor}-${tabData.name}-${option.code}`
                    return (
                        <div key={id} className="radio-input-wrapper">
                            <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1">
                                <input 
                                    type="radio" 
                                    name={`${tabData.name}`} 
                                    id={id} 
                                    value={option.code} 
                                    onChange={handleInputChange} 
                                    checked={option.code === tabData.selected_color}
                                />
                            </div>
                            <div className="col-md-11">
                                <label htmlFor={id}>{option.name}</label>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DesignListOption
