import React from 'react'
import { Text } from 'react-konva'
// import { Text } from 'react-konva/lib/ReactKonvaCore';
// import { useSelector } from 'react-redux';
// import { tabConstants } from '../../constants';
// const { PERSONAL_EMBROIDERY } = tabConstants;

function CanvasText(props) {
    // const gloveJson = useSelector(state => state.glove.gloveJson)
    // const text = gloveJson[PERSONAL_EMBROIDERY].filter(option => option.name === "name on thumb")[0].text;
    const { data, nameFont, isMobile } = props;
    const { text, colors, selected_color } = data;
    let selectedColorCode = selected_color ? colors.filter(c => c.code === selected_color)[0].rgb: 'black';
    if(selectedColorCode.indexOf('center') !== -1) {
        selectedColorCode = selectedColorCode.split('center center ').pop();
    }
    // console.log({selectedColorCode});

    let rotationDeg = 295;
    let x = 380;
    let y = 400;

    if(data.name === 'name on pinky') {
        rotationDeg = 65;
        x = 190;
        y = 200;
    }

    /**
     * 500 and 700 are hardcoded values, which can be dynamically taken later from Product component
     */
    if(isMobile) {
        x = x * (500/700);
        y = y * (500/700);
    }
    let fontSize = 40;
    let fontFamily = 'Script-MT';
    if(nameFont === 'Block') {
        fontFamily = 'Arial';
    }

    
    if(text.length >= 7 && text.length < 10) {
        fontSize = fontSize * 0.8;
    } else if(text.length >= 10 && text.length < 12) {
        fontSize = fontSize * 0.8;
    } else if(text.length >= 12) {
        fontSize = fontSize * 0.75;
    }

    return (
        <Text 
            draggable={true} 
            text={text}
            x={x}
            y={y}
            fontSize={fontSize}
            // rotationDeg={295}
            rotation={rotationDeg}
            fill={ selectedColorCode || "black"}
            // verticalAlign={'middle'}
            align={'center'}
            // offsetX={40}
            width={320}
            fontFamily={fontFamily}
        />
    )
}

export default CanvasText
