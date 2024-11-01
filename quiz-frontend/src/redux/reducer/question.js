import { createSlice } from "@reduxjs/toolkit"

const questionSlice = createSlice({
    name: 'questions',
    initialState: {
        queue: [],
        answers: [],
        trace: 0
    },
    reducers: {
        startExamAction: (state, action) => {
            const { question, answers } = action.payload
            state.queue = question
            state.answers = answers
        },
        moveNextAction: (state) => {
            state.trace += 1
        },
        movePrevAction: (state) => {
            state.trace -= 1
        },
        resetAllAction: (state) => {
            state.queue = []
            state.answers = []
            state.trace = 0
        }
    }
})

export const { startExamAction, moveNextAction, movePrevAction, resetAllAction } = questionSlice.actions
export default questionSlice.reducer
