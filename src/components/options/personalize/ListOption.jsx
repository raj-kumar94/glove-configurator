import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
// import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import { setSelectedPersonalEmbroideryOption, setThumbLogo, unsetThumbLogo } from '../../../feature/gloveSlice'

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
        console.log("_onChange:start");
        // Assuming only image
        let file = event.target.files[0];
        // let reader = new FileReader();
        let URL = window.webkitURL || window.URL;
        let url = URL.createObjectURL(file);

        var img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = url;

        img.onload = (e) => {
            // console.log("object");
            dispatch(setThumbLogo({
                name: event.target.name,
                thumbLogoSrc: url,
            }));
        };
    }


    const handleUnsetCustomImage = () => {
        dispatch(unsetThumbLogo({}))
        document.getElementById('custom_logo').value = '';
    }

    return (
        <div className="personalize-option-wrapper">
            {
                tabData.options.map(option => {
                    let id = `${pickFor}-${tabData.name}-${option}`
                    return (
                        <div key={id} className="radio-input-wrapper">
                            <div className="col-1">
                                <input 
                                    type="radio" 
                                    name={`${tabData.name}`} 
                                    id={id} 
                                    value={option} 
                                    onChange={handleInputChange} 
                                    checked={option === tabData.selected}
                                />
                            </div>
                            <div className="col-11">
                                <label htmlFor={id}>{option}</label>
                            </div>
                        </div>
                    )
                })
            }

            {
                <div className="file-input-wrapper" style={{display: tabData.selected === "Custom" ? 'block': 'none'}}>
                    <hr />
                    <label className="form-label" htmlFor="customFile">Upload your logo</label>
                    <input type="file" className="form-control" name="custom_logo" id="custom_logo" onChange={_onChange} />
                    <div className="logo-preview text-center mt-3 mb-5" style={{display: 'flex', justifyContent: 'center', position: 'relative'}}>
                        <div style={{display: thumbLogoSrc? 'block': 'none', marginBottom: '50px'}}>
                            <img src={thumbLogoSrc} alt="logo" width="100%" id="custom_logo_img"/>
                            <i className="fas fa-window-close" onClick={handleUnsetCustomImage}></i>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ListOption
