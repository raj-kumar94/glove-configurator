import React from 'react'
import { useDispatch } from 'react-redux'
import { setPersonalizeTextArea } from '../../../feature/gloveSlice'
import PickColor from '../PickColor';

function TextAndColorOption(props) {
    const dispatch = useDispatch();
    const { tabData, pickFor } = props;

    return (
        <div className="text-and-color-option-wrapper">
            {/* {tabData.name} <input type="checkbox" /> */}
            <div className="option-wrapper">
                {/* <button type="button" class="checked">
                </button> */}
                <label className="input-switch mt-2 ml-2">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <div className="mt-2 ml-3">
                    <p className="">{tabData.name}</p>
                </div>
            </div>

            <div className="option-wrapper p-2">
                <input type="text" className="form-control" placeholder={tabData.name} value={tabData.text} />
            </div>
            <PickColor tabData={tabData} pickFor={pickFor} noShadow={true} />
        </div>
    )
}

export default TextAndColorOption
