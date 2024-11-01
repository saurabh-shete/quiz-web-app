import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { resetAllAction } from '../redux/reducer/question'
import { resetResultAction } from '../redux/reducer/result'
import { fetchScore } from '../hooks/setResult'

export default function Result() {
    const dispatch = useDispatch()
    
    const userId = useSelector(state => state.result.userId)
    const result = useSelector(state => state.result.result)

    const [scoreData, setScoreData] = useState(null)

    useEffect(() => {
        const calculateScore = async () => {
            const data = await fetchScore(userId, result)
            setScoreData(data)
        }
        calculateScore()
    }, [userId, result])

    function onRestart() {
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }

    if (!scoreData) return <p>Loading...</p>

    const { totalPoints, attempts, earnedPoints, achieved } = scoreData

    return (
        <div className="questions">
            <h2 className="text-3xl font-semibold text-center mb-6">Your Result</h2>
            <div className="text-center mb-4">
                <span className={`text-2xl font-bold ${achieved === "Passed" ? 'text-green-500' : 'text-red-500'}`}>
                    {achieved}
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
