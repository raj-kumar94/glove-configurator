import React from 'react';
import { useDispatch } from 'react-redux'
import {  } from '../../../feature/gloveSlice'

function ListOption(props) {
    const dispatch = useDispatch();
    const { tabData, pickFor } = props;

    const handleInputChange = (event) => {
        // dispatch(setSelectedPersonalEmbroideryOption({
        //     name: event.target.name,
        //     selected: event.target.value
        // }));
    }

    return (
        <div className="text-area-option-wrapper">
            {
                tabData.options.map(option => {
                    let id = `${pickFor}-${tabData.name}-${option}`
                    return (
                        <div key={id}>
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
