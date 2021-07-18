import React from 'react'
// import { useDispatch } from 'react-redux'
// import { setPersonalEmbroideryEnableDisable, setPersonalEmbroideryText } from '../../../feature/gloveSlice'
import PickColor from '../design/PickColor';

function ColorOption(props) {
    const { tabData, pickFor } = props;

    return (
        <div className="text-and-color-option-wrapper">
            {
                tabData.active &&
                <>
                    <PickColor tabData={tabData} pickFor={pickFor} noShadow={true} />
                </>
            }
        </div>
    )
}

export default ColorOption
