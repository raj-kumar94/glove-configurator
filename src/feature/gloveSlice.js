import { createSlice } from '@reduxjs/toolkit'
import { gloveData } from '../data/gloveData';
import { tabConstants } from '../constants';
const { GLOVE_FOUNDATION, LEATHER_DESIGN, PERSONAL_EMBROIDERY } = tabConstants;
const GLOVE_FOUNDATION_INDEX = 0;
const LEATHER_DESIGN_INDEX = gloveData[GLOVE_FOUNDATION].filter(data => data.active).length + 1;
const PERSONAL_EMBROIDERY_INDEX = gloveData[LEATHER_DESIGN].filter(data => data.active).length + LEATHER_DESIGN_INDEX;

export const gloveSlice = createSlice({
    name: 'glove',
    initialState: {
        value: 0,
        views: [
            "view01", 
            "view02", 
            // "view03", 
            // "view04"
        ],
        viewImages: {
            "view01": ["view01-base.png"],
            "view02": ["view02-base.png"],
        },
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
            console.log({action});
            state.swipeViewIndexes[action.payload.indexName] = action.payload.index;
        },
        setSelectedColor: (state, action) => {
            for(let colorOption of state.gloveJson[LEATHER_DESIGN]) {
                if(colorOption.name === action.payload.name) {
                    colorOption.selected_color = action.payload.selected_color;
                    break;
                }
            }
        },
        setSelectedGloveFoundation: (state, action) => {
            let selectedOption;
            for(let option of state.gloveJson[GLOVE_FOUNDATION]) {
                if(option.name === action.payload.name) {
                    option.selected = action.payload.selected;
                    selectedOption = option;
                    break;
                }
            }

            if(selectedOption.controls) {
                const control = selectedOption.controls[selectedOption.selected];
                if(control) {
                    for(let option of state.gloveJson[GLOVE_FOUNDATION]) {
                        if(option.name === control.activate) {
                            option.active = true;    
                        } else if(option.name === control.deactivate) {
                            option.active = false;
                        }
                    }

                    // for colors
                    if(control.activate_colors) {
                        // console.log("yes", JSON.stringify(control.activate_colors, null, 4));
                        for(let option of state.gloveJson[LEATHER_DESIGN]) {
                            // console.log({option: option.name});
                            if(control.activate_colors.includes(option.name)) {
                                option.active = true;    
                                // console.log("active", option.name);
                            } else if(control.deactivate_colors.includes(option.name)) {
                                option.active = false;
                                // console.log("inactive", option.name);
                            }
                        }
                    }
                }
            }
            gloveSlice.caseReducers.calculateRemaining(state, {})
            return;

            // console.log(action.payload.name, action.payload.selected)
            // switch(action.payload.name) {
            //     case 'position':
            //         // size or cather_mitt_size to be present
            //         for(let option of state.gloveJson[GLOVE_FOUNDATION]) {
            //             if(action.payload.selected === 'Catcher') {
            //                 if(option.name === 'cather_mitt_size') {
            //                     option.active = true;    
            //                 } else if(option.name === 'size') {
            //                     option.active = false;
            //                 }
            //             } else {
            //                 if(option.name === 'cather_mitt_size') {
            //                     option.active = false;    
            //                 } else if(option.name === 'size') {
            //                     option.active = true;
            //                 }
            //             }
            //         }
            //         break;
            //     default:
            //         break;
            // }
        },
        // to select the color from pick a color
        setPersonalizeSelectedColor: (state, action) => {
            for(let colorOption of state.gloveJson[PERSONAL_EMBROIDERY]) {
                if(colorOption.name === action.payload.name) {
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
        },
        setPersonalEmbroideryEnableDisable: (state, action) => {
            state.gloveJson[PERSONAL_EMBROIDERY]
                .filter(option => option.name === action.payload.name)[0]
                .enabled = action.payload.value;
        },
        setPersonalEmbroideryText: (state, action) => {
            state.gloveJson[PERSONAL_EMBROIDERY]
                .filter(option => option.name === action.payload.name)[0]
                .text = action.payload.value;
        },
        setSelectedPersonalEmbroideryOption: (state, action) => {
            let selectedOption;
            for(let option of state.gloveJson[PERSONAL_EMBROIDERY]) {
                if(option.name === action.payload.name) {
                    option.selected = action.payload.selected;
                    selectedOption = option;
                    break;
                }
            }

            if(selectedOption.controls) {
                const control = selectedOption.controls[selectedOption.selected];
                if(control) {
                    for(let option of state.gloveJson[PERSONAL_EMBROIDERY]) {
                        if(option.name === control.activate) {
                            option.active = true;    
                        } else if(option.name === control.deactivate) {
                            option.active = false;
                        }
                    }
                }
            }
        },
        calculateRemaining: (state, payload) => {
            const gloveFoundationActiveOptions = state.gloveJson[GLOVE_FOUNDATION].filter(option => option.active);
            const leatherDesignActiveOptions = state.gloveJson[LEATHER_DESIGN].filter(option => option.active);
            const personalActiveOptions = state.gloveJson[PERSONAL_EMBROIDERY].filter(option => option.active);

            const gloveFoundationActiveOptionsRemaining = gloveFoundationActiveOptions.filter(option => option.selected);
            const leatherDesignActiveOptionsRemaining = leatherDesignActiveOptions.filter(option => option.selected);
            // since personalise section has multiple type of options
            const personalActiveOptionsRemaining = personalActiveOptions.filter(option => {
                if(option.type === "list_options") {
                    return option.selected;
                } else if(option.type === "text_and_color") {
                    return option.text && option.selected_color;
                } else if(option.type === "text_area") {
                    return option.text;
                }
                return true;
            });
            console.log({
                gloveFoundationActiveOptions: gloveFoundationActiveOptions.length,
                leatherDesignActiveOptions: leatherDesignActiveOptions.length,
                personalActiveOptions: personalActiveOptions.length
            });
            console.log({
                gloveFoundationActiveOptionsRemaining: gloveFoundationActiveOptions.length - gloveFoundationActiveOptionsRemaining.length,
                leatherDesignActiveOptionsRemaining: leatherDesignActiveOptions.length - leatherDesignActiveOptionsRemaining.length,
                personalActiveOptionsRemaining: personalActiveOptions.length - personalActiveOptionsRemaining.length
            });
        }
    },
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
    setSelectedPersonalEmbroideryOption
} = gloveSlice.actions

export default gloveSlice.reducer