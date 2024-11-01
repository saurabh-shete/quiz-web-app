import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { resetAllAction } from '../redux/reducer/question'
import { resetResultAction } from '../redux/result_reducer'

export default function Result() {
    const dispatch = useDispatch()
    const { questions: { queue, answers }, result: { result, userId } } = useSelector(state => state)
    const totalPoints = queue.length * 10
    const attempts = result.filter(r => r !== undefined).length
    const earnedPoints = result.map((res, i) => answers[i] === res).filter(i => i).length * 10
    const isPassed = earnedPoints >= totalPoints * 0.5

    function onRestart() {
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }

    return (
        <div className="questions">
            <h2 className="text-3xl font-semibold text-center mb-6">Your Result</h2>
            <div className="text-center mb-4">
                <span className={`text-2xl font-bold ${isPassed ? 'text-green-500' : 'text-red-500'}`}>
                    {isPassed ? "Passed" : "Failed"}
                </span>
            </div>
            <div className="text-center mb-4">
                <span className="text-xl">Score: {earnedPoints} / {totalPoints}</span>
            </div>
            <div className="flex justify-center">
                <Link to="/" onClick={onRestart} className="bg-red-500 text-white py-3 px-8 rounded-full text-lg font-semibold">Restart</Link>
            </div>
        </div>
    )
}
