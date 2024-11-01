import React, { useEffect, useState } from 'react'
import Questions from './Questions'
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/fetchQuestion'
import { PushAnswer } from '../hooks/setResult'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function Quiz() {
    const [check, setChecked] = useState(undefined)
    const result = useSelector(state => state.result.result)
    const { queue, trace } = useSelector(state => state.questions)
    const dispatch = useDispatch()
    
    function onNext() {
        if (trace < queue.length) {
            dispatch(MoveNextQuestion())
            if (result.length <= trace) {
                dispatch(PushAnswer(check))
            }
        }
        setChecked(undefined)
    }

    function onPrev() {
        if (trace > 0) {
            dispatch(MovePrevQuestion())
        }
    }

    function onChecked(check) {
        setChecked(check)
    }
    console.log(result.length, queue.length);
    
    if (queue.length && result.length >= queue.length) {
        return <Navigate to={'/result'} replace={true} />
    }

    return (
        <div className="questions w-full h-full bg-white rounded-t-xl mt-10 p-10">
            <Questions onChecked={onChecked} />
            <div className="flex justify-center mt-6">
                <button className="btn next bg-red-500 text-white py-2 px-10 rounded-full text-lg font-bold" onClick={onNext}>Next</button>
            </div>
        </div>
    )
}