import React from 'react';
import { Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';

// the first very simple and recommended way:
const LoadImageFromDisk = (props) => {
    const [image] = useImage(props.src);
    let x = 20;
    let y = 30;
    let image_width = props.containerOffsetWidth;
    let image_height = props.containerOffsetHeight - 100;

    /**
     * Conditional rendering doesn't work in KonvaImage
     * so use if statement to update values
     */
    if(image) {
        // var max = props.containerOffsetWidth;
        // var max = Math.max(props.containerOffsetWidth, props.containerOffsetHeight);
        var max = 150;
        var img_width = image.width;
        var img_height = image.height;
        var ratio = (img_width > img_height ? (img_width / max) : (img_height / max));
        image_width = img_width / ratio;
        image_height = img_height / ratio;

        // x = (props.containerOffsetWidth - image_width) / 2;
        // y = (props.containerOffsetHeight - image_height) / 2;
        x = 290
        y = 520
    }

    if(props.isMobile) {
        const mobileRatio = 500/700;
        x = x * mobileRatio;
        y = y * mobileRatio;
        image_width = image_width * mobileRatio;
        image_height = image_height * mobileRatio;
    }
    return <KonvaImage image={image} width={image_width} height={image_height} x={x} y={y} rotation={-65} />;
};


export default LoadImageFromDisk;