import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Main() {
    const navigate = useNavigate()

    function handleStartQuiz() {
        navigate('/quiz') // Directly navigate to the quiz page
    }

    return (
        <div className="container mx-auto my-10 p-4">
            <div className="flex justify-center items-center flex-col">
                <div className="quiz bg-white flex justify-center items-center text-6xl font-bold text-red-500 rounded-full w-64 h-64">QUIZ</div>

                {/* Start Quiz button to navigate to quiz */}
                <div className="mt-6">
                    <button className="bg-red-500 text-white py-3 px-10 rounded-lg text-xl font-semibold" onClick={handleStartQuiz}>
                        Start Quiz
                    </button>
                </div>
            </div>
        </div>
    )
}
