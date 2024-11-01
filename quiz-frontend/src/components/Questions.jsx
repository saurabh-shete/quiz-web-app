import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateResult } from '../hooks/setResult'
import { useFetchQuestion } from '../hooks/fetchQuestion'

export default function Questions({ onChecked }) {
    const [checked, setChecked] = useState(undefined)
    const { trace } = useSelector(state => state.questions)
    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    const dispatch = useDispatch()
    const [{ isLoading, apiData, serverError }] = useFetchQuestion()

    useEffect(() => {
        // Reset selected option when a new question is displayed
        setChecked(undefined)
    }, [trace])

    useEffect(() => {
        dispatch(updateResult({ trace, checked }))
    }, [checked])

    function onSelect(i) {
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({ trace, checked }))
    }

    if (isLoading) return <h3 className="text-gray-700">Loading...</h3>
    if (serverError) return <h3 className="text-red-600">{serverError || "Unknown Error"}</h3>

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">{questions?.question}</h2>
            <ul>
                {questions?.options.map((q, i) => (
                    <li key={i} className="bg-gray-100 p-4 mb-2 rounded-md cursor-pointer">
                        <input
                            type="radio"
                            name="options"
                            id={`q${i}-option`}
                            checked={checked === i}
                            onChange={() => onSelect(i)}
                            className="mr-2"
                        />
                        <label htmlFor={`q${i}-option`} className="text-lg font-medium">{q}</label>
                    </li>
                ))}
            </ul>
        </div>
    )
}
