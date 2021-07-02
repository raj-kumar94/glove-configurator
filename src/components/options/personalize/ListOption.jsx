import React from 'react';
import { useDispatch } from 'react-redux'
import { setSelectedPersonalEmbroideryOption } from '../../../feature/gloveSlice'

function ListOption(props) {
    const dispatch = useDispatch();
    const { tabData, pickFor } = props;

    const handleInputChange = (event) => {
        dispatch(setSelectedPersonalEmbroideryOption({
            name: event.target.name,
            selected: event.target.value
        }));
    }

    return (
        <div className="personalize-option-wrapper">
            {
                tabData.options.map(option => {
                    let id = `${pickFor}-${tabData.name}-${option}`
                    return (
                        <div key={id} className="radio-input-wrapper">
                            <input 
                                type="radio" 
                                name={`${tabData.name}`} 
                                id={id} 
                                value={option} 
                                onChange={handleInputChange} 
                                checked={option === tabData.selected}
                            />
                            <label htmlFor={id}>{option}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ListOption
