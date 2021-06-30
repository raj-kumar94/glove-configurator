import React from 'react'
import TextAreaOption from './TextAreaOption';
import TextAndColorOption from './TextAndColorOption';
import ListOption from './ListOption';
import { tabConstants } from '../../../constants';
const { PERSONAL_EMBROIDERY } = tabConstants;

function SelectPersonalEmbroidery(props) {
    const { tabData } = props;
    return (
        <div>
            {
                tabData.type === "list_options" &&
                <ListOption tabData={tabData} pickFor={PERSONAL_EMBROIDERY} />
            }
            {
                tabData.type === "text_area" &&
                <TextAreaOption tabData={tabData} pickFor={PERSONAL_EMBROIDERY} />
            }
            {
                tabData.type === "text_and_color" &&
                <TextAndColorOption tabData={tabData} pickFor={PERSONAL_EMBROIDERY} />
            }
        </div>
    )
}

export default SelectPersonalEmbroidery
