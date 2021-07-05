import React from 'react'
import { useDispatch } from 'react-redux'
import { setPersonalEmbroideryEnableDisable, setPersonalEmbroideryText } from '../../../feature/gloveSlice'
import PickColor from '../design/PickColor';

function TextAndColorOption(props) {
    const dispatch = useDispatch();
    const { tabData, pickFor } = props;

    const handleInputChange = (event) => {
        if(event.target.type === 'checkbox') {
            dispatch(setPersonalEmbroideryEnableDisable({
                name: tabData.name,
                value: event.target.checked
            }));
        } else if(event.target.type === 'text') {
            dispatch(setPersonalEmbroideryText({
                name: tabData.name,
                value: event.target.value
            }));
        }
    }

    return (
        <div className="text-and-color-option-wrapper">
            <div className="option-wrapper">
                <label className="input-switch mt-2 ml-2">
                    <input type="checkbox" checked={tabData.enabled} onChange={handleInputChange} />
                    <span className="slider round"></span>
                </label>
                <div className="mt-2 ml-3">
                    <p className="">{tabData.name}</p>
                </div>
            </div>
            {
                tabData.enabled &&
                <>
                    <div className="option-wrapper p-2">
                        <input type="text" className="form-control" placeholder={tabData.name} value={tabData.text} onChange={handleInputChange} />
                    </div>
                    <PickColor tabData={tabData} pickFor={pickFor} noShadow={true} />
                </>
            }
        </div>
    )
}

export default TextAndColorOption
