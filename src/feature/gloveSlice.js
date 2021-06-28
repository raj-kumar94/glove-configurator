import { createSlice } from '@reduxjs/toolkit'
import { gloveData } from '../data/gloveData'

export const gloveSlice = createSlice({
    name: 'glove',
    initialState: {
        value: 0,
        swipeViewIndexes: {
            'Base': 0,
            'Colors': 0,
            'Personalize': 0,
        },
        tabs: [
            { name: 'Base', 'remaining': 2 },
            { name: 'Colors', 'remaining': 9 },
            { name: 'Personalize', 'remaining': 1 }
        ],
        selectedTab: 'Base',
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
            gloveSlice.caseReducers.decrement(state);
        },
        setSwipeViewIndex: (state, action) => {
            // state.swipeViewIndex = action.payload;
            console.log({action});
            state.swipeViewIndexes[action.payload.indexName] = action.payload.index;
        },
        setSelectedColor: (state, action) => {
            for(let colorOption of state.gloveJson['Colors']) {
                if(colorOption.name === action.payload.name) {
                    colorOption.selected = action.payload.selected;
                    break;
                }
            }
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
    setSelectedColor
} = gloveSlice.actions

export default gloveSlice.reducer