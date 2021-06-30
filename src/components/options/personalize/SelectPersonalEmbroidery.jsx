import React from 'react'
import TextAreaOption from './TextAreaOption';
import TextAndColorOption from './TextAndColorOption';
import { tabConstants } from '../../../constants';
const { PERSONAL_EMBROIDERY } = tabConstants;

function SelectPersonalEmbroidery(props) {
    const { tabData } = props;
    return (
        <div>
            {
                tabData.type === "text_area" &&
                <TextAreaOption tabData={tabData} />
            }
            {
                tabData.type === "text_and_color" &&
                <TextAndColorOption tabData={tabData} pickFor={PERSONAL_EMBROIDERY} />
            }
        </div>
    )
}

export default SelectPersonalEmbroidery
