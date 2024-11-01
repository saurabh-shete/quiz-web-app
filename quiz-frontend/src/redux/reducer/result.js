import { createSlice } from "@reduxjs/toolkit"

const resultSlice = createSlice({
    name: 'result',
    initialState: {
        userId: null,
        result: []
    },
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload
        },
        pushResultAction: (state, action) => {
            state.result.push(action.payload)
        },
        updateResultAction: (state, action) => {
            const { trace, checked } = action.payload
            state.result[trace] = checked
        },
        resetResultAction: (state) => {
            state.userId = null
            state.result = []
        }
    }
})

export const { setUserId, pushResultAction, updateResultAction, resetResultAction } = resultSlice.actions
export default resultSlice.reducer
