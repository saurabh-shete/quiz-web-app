import React, { useState } from 'react'
import Questions from './Questions'
import { MoveNextQuestion } from '../hooks/fetchQuestion'
import { PushAnswer } from '../hooks/setResult'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Quiz() {
    const [check, setChecked] = useState(undefined)
    const result = useSelector(state => state.result.result)
    const { queue, trace } = useSelector(state => state.questions)
    const dispatch = useDispatch()
    const navigate = useNavigate() // Ensure navigate is correctly imported and used
    
    function onNext() {
        if (trace < queue.length - 1) {  // Only navigate if `trace` is less than the last question index
            dispatch(MoveNextQuestion())
            if (result.length <= trace) {
                dispatch(PushAnswer(check))
            }
        } else {
            // Push the final answer, then navigate to results
            dispatch(PushAnswer(check))
            navigate("/result") // Navigate to results page
        }
        setChecked(undefined)
    }

    function onChecked(check) {
        setChecked(check)
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            event.preventDefault()
            onNext()
        }
    }
    
    return (
        <div className="questions w-full h-full bg-white rounded-t-xl mt-10 p-10" onKeyDown={handleKeyDown} tabIndex="0">
            <Questions onChecked={onChecked} />
            <div className="flex justify-center mt-6">
                <button className="btn next bg-red-500 text-white py-2 px-10 rounded-full text-lg font-bold" onClick={onNext}>Next</button>
            </div>
        </div>
    )
}
