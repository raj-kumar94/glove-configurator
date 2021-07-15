import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
// import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import { setSelectedPersonalEmbroideryOption, setThumbLogo } from '../../../feature/gloveSlice'

function ListOption(props) {
    const dispatch = useDispatch();
    const thumbLogoSrc = useSelector(state => state.glove.thumbLogoSrc);
    // console.log({thumbLogoSrc});
    const { tabData, pickFor } = props;

    const handleInputChange = (event) => {
        dispatch(setSelectedPersonalEmbroideryOption({
            name: event.target.name,
            selected: event.target.value
        }));
    }

    // const _onChange = (event) => {
    //     // Assuming only image
    //     var file = event.target.files[0];
    //     var reader = new FileReader();
    //     var url = reader.readAsDataURL(file);

    //     reader.onloadend = (e) => {
    //         dispatch(setThumbLogo({
    //             name: event.target.name,
    //             thumbLogoSrc: reader.result
    //         }));
    //     };
    // }
    const _onChange = (event) => {
        // Assuming only image
        let file = event.target.files[0];
        let reader = new FileReader();
        let URL = window.webkitURL || window.URL;
        let url = URL.createObjectURL(file);

        var img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = url;

        reader.onload = (e) => {
            console.log("object");
            dispatch(setThumbLogo({
                name: event.target.name,
                thumbLogoSrc: img
            }));
        };
    }

    return (
        <div className="personalize-option-wrapper">
            {
                tabData.options.map(option => {
                    let id = `${pickFor}-${tabData.name}-${option}`
                    return (
                        <div key={id} className="radio-input-wrapper">
                            <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1">
                                <input 
                                    type="radio" 
                                    name={`${tabData.name}`} 
                                    id={id} 
                                    value={option} 
                                    onChange={handleInputChange} 
                                    checked={option === tabData.selected}
                                />
                            </div>
                            <div className="col-md-11">
                                <label htmlFor={id}>{option}</label>
                            </div>
                        </div>
                    )
                })
            }

            {
                tabData.selected === "Custom" && false &&
                <div className="file-input-wrapper">
                    <input type="file" name="custom_logo" id="custom_logo" onChange={_onChange} />
                    <div className="logo-preview">
                        {/* {
                            thumbLogoSrc &&
                            {thumbLogoSrc}
                        } */}
                    </div>
                </div>
            }
        </div>
    )
}

export default ListOption
