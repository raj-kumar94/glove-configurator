import React from 'react'
import { useDispatch } from 'react-redux'
import { setPersonalizeTextArea } from '../../../feature/gloveSlice'
import PickColor from '../PickColor';

function TextAndColorOption(props) {
    const dispatch = useDispatch();
    const { tabData, pickFor } = props;

    return (
        <div className="text-and-color-option-wrapper">
            {tabData.name} <input type="checkbox" />
            <hr />
            <input type="text" placeholder={tabData.nam} value={tabData.text} />
            <hr />
            <PickColor tabData={tabData} pickFor={pickFor} noShadow={true} />
        </div>
    )
}

export default TextAndColorOption
