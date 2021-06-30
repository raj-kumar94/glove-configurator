import React from 'react';
import { useDispatch } from 'react-redux'
import { setPersonalizeTextArea } from '../../../feature/gloveSlice'

function TextAreaOption(props) {
    const dispatch = useDispatch();
    const { tabData } = props;

    return (
        <div className="text-area-option-wrapper">
            <textarea 
                className="full-width" 
                rows={5} 
                value={tabData.text} 
                placeholder={tabData.name} 
                onChange={(event) => dispatch(setPersonalizeTextArea({name: tabData.name, value: event.target.value}))}
            />
        </div>
    )
}

export default TextAreaOption
