import { configureStore } from '@reduxjs/toolkit'
import gloveSliceReducer from './feature/gloveSlice'

export default configureStore({
    reducer: {
        glove: gloveSliceReducer
    },
})