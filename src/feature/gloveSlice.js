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
        views: ["view-01", "view-02", "view-03", "view-04"],
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
            for(let option of state.gloveJson[GLOVE_FOUNDATION]) {
                if(option.name === action.payload.name) {
                    option.selected = action.payload.selected;
                    break;
                }
            }

            // console.log(action.payload.name, action.payload.selected)
            switch(action.payload.name) {
                case 'position':
                    // size or cather_mitt_size to be present
                    for(let option of state.gloveJson[GLOVE_FOUNDATION]) {
                        if(action.payload.selected === 'Catcher') {
                            if(option.name === 'cather_mitt_size') {
                                option.active = true;    
                            } else if(option.name === 'size') {
                                option.active = false;
                            }
                        } else {
                            if(option.name === 'cather_mitt_size') {
                                option.active = false;    
                            } else if(option.name === 'size') {
                                option.active = true;
                            }
                        }
                    }
                    break;
                default:
                    break;
            }
        },
        setPersonalizeTextArea: (state, action) => {
            state.gloveJson[PERSONAL_EMBROIDERY]
                .filter(option => option.name === action.payload.name)[0]
                .text = action.payload.value;
        },
        setPersonalizeSelectedColor: (state, action) => {
            for(let colorOption of state.gloveJson[PERSONAL_EMBROIDERY]) {
                if(colorOption.name === action.payload.name) {
                    colorOption.selected_color = action.payload.selected_color;
                    break;
                }
            }
        },
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
    setPersonalizeTextArea,
    setPersonalizeSelectedColor
} = gloveSlice.actions

export default gloveSlice.reducer