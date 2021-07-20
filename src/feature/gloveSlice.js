import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { gloveData } from '../data/gloveData';
import { tabConstants, FIELDER_PART_NAMES } from '../constants';
import { KIP_COMMOM_COLOR, US_STEERHIDE_COMMOM_COLOR, COWHIDE_COMMOM_COLOR, DEFAULT_FIELDER_PART_COLORS } from '../constants';
const { GLOVE_FOUNDATION, LEATHER_DESIGN, PERSONAL_EMBROIDERY } = tabConstants;
// const GLOVE_FOUNDATION_INDEX = 0;
// const LEATHER_DESIGN_INDEX = gloveData[GLOVE_FOUNDATION].filter(data => data.active).length + 1;
// const PERSONAL_EMBROIDERY_INDEX = gloveData[LEATHER_DESIGN].filter(data => data.active).length + LEATHER_DESIGN_INDEX;

export const saveCustomisation = createAsyncThunk(
    'api/save-customisation',
    async (userData, thunkAPI) => {
        console.log({ userData, thunkAPI });
        var form = new FormData();
        let inputFile = document.getElementById('custom_logo').files[0];
        form.append("canvas", inputFile, 'custom_logo.png');
        // return {msg: 'success'}
        const response = await fetch('https://example.com/upload/v2', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            // mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            // headers: {
            //     // 'Content-Type': 'application/json'
            //     // 'Content-Type': 'application/x-www-form-urlencoded',
            //     'Content-Type': 'multipart/form-data'
            // },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify({ name: 'test' }) // body data type must match "Content-Type" header
            body: form
        });
        return response.json()
    }
)

export const gloveSlice = createSlice({
    name: 'glove',
    initialState: {
        value: 0,
        views: [
            "view01",
            "view02",
            "view03",
            "view04"
        ],
        viewImages: {
            "view01": ["view01-base.png"],
            "view02": ["view02-base.png"],
            "view03": ["view03-base.png"],
            "view04": ["view04-base.png"],
        },
        thumbLogoSrc: '',
        partNames: FIELDER_PART_NAMES,
        swipeViewIndexes: {
            [GLOVE_FOUNDATION]: 0,
            [LEATHER_DESIGN]: 0,
            [PERSONAL_EMBROIDERY]: 0,
        },
        tabs: [
            { name: GLOVE_FOUNDATION, 'remaining': 2 },
            { name: LEATHER_DESIGN, 'remaining': 9 },
            { name: PERSONAL_EMBROIDERY, 'remaining': 1 }
        ],
        selectedTab: GLOVE_FOUNDATION,
        gloveJson: gloveData
    },
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        selectTab: (state, action) => {
            state.selectedTab = action.payload;
            // gloveSlice.caseReducers.setSwipeViewIndex(state, {
            //     payload: {
            //         indexName: action.payload,
            //         index: state.swipeViewIndexes[action.payload]
            //     }
            // })
            // DEMO: call another reducer
            gloveSlice.caseReducers.decrement(state);
        },
        setSwipeViewIndex: (state, action) => {
            // state.swipeViewIndex = action.payload;
            // console.log({action});
            state.swipeViewIndexes[action.payload.indexName] = action.payload.index;
        },
        setSelectedColor: (state, action) => {
            let dependantColors = [];
            if (action.payload.name === "stitching_color") {
                // change hood_stitch_color and finger_pad_stitch_color as well
                dependantColors = ["hood_stitch_color", "finger_pad_stitch_color"]
            } else if (action.payload.name === "thumb_inner_color") {
                // change wrist_color as well
                dependantColors = ["wrist_color"]
            }
            // console.log({dependantColors})
            for (let colorOption of state.gloveJson[LEATHER_DESIGN]) {
                if (colorOption.name === action.payload.name) {
                    colorOption.selected_color = action.payload.selected_color;
                    // break;
                }
                if (dependantColors.includes(colorOption.name)) {
                    colorOption.selected_color = action.payload.selected_color;
                }
            }

            gloveSlice.caseReducers.calculateRemaining(state, {});
        },
        setSelectedGloveFoundation: (state, action) => {
            // console.log("called", action.payload.called);
            let selectedOption;
            for (let option of state.gloveJson[GLOVE_FOUNDATION]) {
                if (option.name === action.payload.name) {
                    option.selected = action.payload.selected;
                    selectedOption = option;
                    break;
                }
            }

            /**
             * If leather type is selected, we just want to change the color pallet
             */
            if (selectedOption.name === 'leather') {
                // alert('leather selected');
                for (let option of state.gloveJson[LEATHER_DESIGN]) {

                    // don't change colors for this option
                    if (option.retain_color_options === true) {
                        continue;
                    }
                    let colorOptions = [];
                    let leatherType = 'jk';
                    // console.log('object', selectedOption.selected);
                    if (selectedOption.selected === "Emerald Series - Japanese Kip Leather") {
                        colorOptions = KIP_COMMOM_COLOR;
                    } else if (selectedOption.selected === "Peridot Series - US Steerhide Leather") {
                        colorOptions = US_STEERHIDE_COMMOM_COLOR;
                        leatherType = 'ussh';
                    } else if (selectedOption.selected === "Topaz Series - Smooth Cowhide Leather") {
                        colorOptions = COWHIDE_COMMOM_COLOR;
                        leatherType = 'ch';
                    } else {
                        colorOptions = KIP_COMMOM_COLOR;
                    }

                    // find default part color
                    // const filederPartDefaultColor = FIELDER_PART_NAMES.filter(fielderPart => fielderPart.design_name === option.name);
                    // console.log({filederPartDefaultColor});

                    if (option.selected_color) {
                        let colorExists = colorOptions.filter(clr => clr.code === option.selected_color);
                        // console.log({colorExists})
                        if (colorExists && colorExists.length) {
                            option.selected_color = colorExists[0].code || DEFAULT_FIELDER_PART_COLORS[leatherType][option.name];
                        } else {
                            // option.selected_color = DEFAULT_FIELDER_PART_COLORS[leatherType][option.name] || 'white'; //colorOptions[0].code;
                            option.selected_color = ''
                        }
                    }

                    option.colors = colorOptions;
                }
                gloveSlice.caseReducers.calculateRemaining(state, {})
                return;
            }

            if (selectedOption.controls) {
                const control = selectedOption.controls[selectedOption.selected];
                if (control) {
                    for (let option of state.gloveJson[GLOVE_FOUNDATION]) {
                        if (option.controls) {
                            // 
                        }
                        let optionFound = false;
                        if (typeof control.activate === "string" && option.name === control.activate) {
                            option.active = true;
                            optionFound = true;
                        } else if (Array.isArray(control.activate) && control.activate.includes(option.name)) {
                            option.active = true;
                            optionFound = true;
                        } else if (typeof control.deactivate === "string" && option.name === control.deactivate) {
                            option.active = false;
                            optionFound = true;
                        } else if (Array.isArray(control.deactivate) && control.deactivate.includes(option.name)) {
                            option.active = false;
                            optionFound = true;
                        }

                        if (optionFound && option.controls) {
                            console.log(`Calling setSelectedGloveFoundation for name:${option.name}, selected: ${option.selected}`)
                            // gloveSlice.caseReducers.setSelectedGloveFoundation(state, {payload: {name: option.name, selected: option.selected, called: 'yes'} })
                        }

                        /**
                         * For parts
                         */
                        // activate and deactivate glove parts
                        const partNames = state.partNames;
                        if (control.activate_part_names) {
                            for (let controlPartName of control.activate_part_names) {
                                for (let partName of partNames) {
                                    if (partName.name === controlPartName) {
                                        // console.log({selectedOption: JSON.stringify(selectedOption.selected, null, 4)});
                                        partName.active = true;
                                    }
                                }
                            }
                        }
                        if (control.deactivate_part_names) {
                            for (let controlPartName of control.deactivate_part_names) {
                                for (let partName of partNames) {
                                    if (partName.name === controlPartName) {
                                        partName.active = false;
                                    }
                                }
                            }
                        }
                    }

                    /**
                     * for colors
                     */
                    if (control.activate_colors) {
                        // console.log("yes", JSON.stringify(control.activate_colors, null, 4));
                        for (let option of state.gloveJson[LEATHER_DESIGN]) {
                            // console.log({option: option.name});
                            if (control.activate_colors.includes(option.name)) {
                                option.active = true;
                                // console.log("active", option.name);
                            } else if (control.deactivate_colors.includes(option.name)) {
                                option.active = false;
                                // console.log("inactive", option.name);
                                if (control.reset_color_on_deactivate) {
                                    // reset the wrist color, it should be equal to thumb inner color
                                    let selectedColor = '';
                                    if (control.reset_color_ref) {
                                        let temp = state.gloveJson[LEATHER_DESIGN].filter(oo => oo.name === control.reset_color_ref);
                                        if (temp && temp.length) {
                                            selectedColor = temp[0].selected_color;
                                        }
                                    }
                                    if (selectedColor) {
                                        option.selected_color = selectedColor;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            gloveSlice.caseReducers.calculateRemaining(state, {})
        },
        // to select the color from pick a color
        setPersonalizeSelectedColor: (state, action) => {
            for (let colorOption of state.gloveJson[PERSONAL_EMBROIDERY]) {
                if (colorOption.name === action.payload.name) {
                    colorOption.selected_color = action.payload.selected_color;
                    break;
                }
            }
            gloveSlice.caseReducers.calculateRemaining(state, {})
        },
        setPersonalizeTextArea: (state, action) => {
            state.gloveJson[PERSONAL_EMBROIDERY]
                .filter(option => option.name === action.payload.name)[0]
                .text = action.payload.value;

            gloveSlice.caseReducers.calculateRemaining(state, {});
        },
        setPersonalEmbroideryEnableDisable: (state, action) => {
            state.gloveJson[PERSONAL_EMBROIDERY]
                .filter(option => option.name === action.payload.name)[0]
                .enabled = action.payload.value;

            gloveSlice.caseReducers.calculateRemaining(state, {});
        },
        setPersonalEmbroideryText: (state, action) => {
            state.gloveJson[PERSONAL_EMBROIDERY]
                .filter(option => option.name === action.payload.name)[0]
                .text = action.payload.value;

            gloveSlice.caseReducers.calculateRemaining(state, {});
        },
        setSelectedPersonalEmbroideryOption: (state, action) => {
            let selectedOption;
            for (let option of state.gloveJson[PERSONAL_EMBROIDERY]) {
                if (option.name === action.payload.name) {
                    option.selected = action.payload.selected;
                    selectedOption = option;
                    break;
                }
            }

            // console.log(JSON.stringify(selectedOption.controls, null, 4))
            if (selectedOption.controls) {
                const control = selectedOption.controls[selectedOption.selected];
                if (control) {
                    for (let option of state.gloveJson[PERSONAL_EMBROIDERY]) {
                        if (option.name === control.activate) {
                            option.active = true;
                        } else if (option.name === control.deactivate) {
                            option.active = false;
                        }

                        if (control.activate_colors) {
                            if (control.activate_colors.includes(option.name)) {
                                option.active = true;
                            } else if (control.deactivate_colors.includes(option.name)) {
                                option.active = false;
                            }
                        }
                    }

                    // for colors
                    // if(control.activate_colors) {
                    //     for(let option of state.gloveJson[LEATHER_DESIGN]) {
                    //         if(control.activate_colors.includes(option.name)) {
                    //             option.active = true;    
                    //         } else if(control.deactivate_colors.includes(option.name)) {
                    //             option.active = false;
                    //         }
                    //     }
                    // }
                }
            }

            gloveSlice.caseReducers.activateDeactivateParts(state, {})
            gloveSlice.caseReducers.calculateRemaining(state, {});
        },
        setThumbLogo: (state, action) => {
            state.thumbLogoSrc = action.payload.thumbLogoSrc;
            gloveSlice.caseReducers.calculateRemaining(state, {});
        },
        unsetThumbLogo: (state, action) => {
            state.thumbLogoSrc = '';
            gloveSlice.caseReducers.calculateRemaining(state, {});
        },
        calculateRemaining: (state, payload) => {
            const gloveFoundationActiveOptions = state.gloveJson[GLOVE_FOUNDATION].filter(option => option.active && option.required);
            const leatherDesignActiveOptions = state.gloveJson[LEATHER_DESIGN].filter(option => option.active && option.required);
            const personalActiveOptions = state.gloveJson[PERSONAL_EMBROIDERY].filter(option => option.active && option.enabled && option.required);

            const gloveFoundationActiveOptionsRemaining = gloveFoundationActiveOptions.filter(option => option.selected);
            const leatherDesignActiveOptionsRemaining = leatherDesignActiveOptions.filter(option => option.selected_color);
            // since personalise section has multiple type of options
            const personalActiveOptionsRemaining = personalActiveOptions.filter(option => {
                if (option.type === "list_options") {
                    return option.selected;
                } else if (option.type === "text_and_color") {
                    return option.text && option.selected_color;
                } else if (option.type === "text_area") {
                    return option.text;
                } else if (option.type === "color") {
                    return option.selected_color;
                }
                return true;
            });
            // console.log({
            //     gloveFoundationActiveOptions: gloveFoundationActiveOptions.length,
            //     leatherDesignActiveOptions: leatherDesignActiveOptions.length,
            //     personalActiveOptions: personalActiveOptions.length
            // });
            // console.log({
            //     gloveFoundationActiveOptionsRemaining: gloveFoundationActiveOptions.length - gloveFoundationActiveOptionsRemaining.length,
            //     leatherDesignActiveOptionsRemaining: leatherDesignActiveOptions.length - leatherDesignActiveOptionsRemaining.length,
            //     personalActiveOptionsRemaining: personalActiveOptions.length - personalActiveOptionsRemaining.length
            // });

            for (let tab of state.tabs) {
                if (tab.name === GLOVE_FOUNDATION) {
                    tab.remaining = gloveFoundationActiveOptions.length - gloveFoundationActiveOptionsRemaining.length;
                } else if (tab.name === LEATHER_DESIGN) {
                    tab.remaining = leatherDesignActiveOptions.length - leatherDesignActiveOptionsRemaining.length;
                } else if (tab.name === PERSONAL_EMBROIDERY) {
                    tab.remaining = personalActiveOptions.length - personalActiveOptionsRemaining.length;
                }
            }

        },
        activateDeactivateParts: (state, payload) => {
            // activating/de-activationg e-logo
            const thumbLogoOption = state.gloveJson[PERSONAL_EMBROIDERY].filter(option => option.name === "thumb logo")[0];
            // console.log(JSON.stringify(thumbLogoOption, null, 4));
            for (let part of state.partNames) {
                if (part.name === "e" && thumbLogoOption) {
                    if (thumbLogoOption.selected === "E Logo") {
                        part.active = true;
                    } else {
                        part.active = false;
                    }
                }
            }
        },
        reseltConfigurator: (state, payload) => {
            // for(let option of state.gloveJson[LEATHER_DESIGN]) {
            //     // option.selected_color = DEFAULT_FIELDER_PART_COLORS['jk'][option.name];
            //     option.selected_color = '';
            // }
            state.gloveJson = gloveData;
            state.partNames = FIELDER_PART_NAMES;
            gloveSlice.caseReducers.calculateRemaining(state, {})
        }
    },
    extraReducers: {
        [saveCustomisation.fulfilled]: (state, action) => {
            console.log({ action });
        },
        [saveCustomisation.rejected]: (state, action) => {
            console.error("error occured");
            console.log({ action });
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    increment,
    decrement,
    incrementByAmount,
    selectTab,
    setSwipeViewIndex,
    setSelectedColor,
    setSelectedGloveFoundation,
    setPersonalizeSelectedColor,
    setPersonalizeTextArea,
    setPersonalEmbroideryEnableDisable,
    setPersonalEmbroideryText,
    setSelectedPersonalEmbroideryOption,
    calculateRemaining,
    setThumbLogo,
    unsetThumbLogo,
    reseltConfigurator,
} = gloveSlice.actions

export default gloveSlice.reducer