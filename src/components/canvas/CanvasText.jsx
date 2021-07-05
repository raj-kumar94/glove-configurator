import React from 'react'
import { Text } from 'react-konva'
// import { Text } from 'react-konva/lib/ReactKonvaCore';
import { useSelector } from 'react-redux';
import { tabConstants } from '../../constants';
const { PERSONAL_EMBROIDERY } = tabConstants;

function CanvasText() {
    const gloveJson = useSelector(state => state.glove.gloveJson)
    const text = gloveJson[PERSONAL_EMBROIDERY].filter(option => option.name === "name on thumb")[0].text;
    return (
        <Text 
            draggable={true} 
            text={text}
            x={410}
            y={300}
            fontSize={40}
            rotationDeg={295}
        />
    )
}

export default CanvasText
