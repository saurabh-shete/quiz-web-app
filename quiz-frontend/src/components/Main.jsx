import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Main() {
    const navigate = useNavigate()

    function handleStartQuiz() {
        navigate('/quiz') // Directly navigate to the quiz page
    }

    return (
        <div className="flex flex-col w-screen items-center justify-between min-h-screen bg-gradient-to-b from-purple-50 to-purple-400 p-6">
            
            {/* Logo */}
            <img
                src="src/assets/upraised-logo.png" // Replace with the actual path to the logo
                alt="Upraised Logo"
                className="w-32 h-16 mb-4 sm:h-20 lg:w-full lg:h-24 object-contain"
            />
            <>
            {/* Quiz Circle */}
            <div className="flex items-center justify-center bg-white rounded-full shadow-xl w-64 h-64">
                <h1 className="font-extrabold text-red-500 text-5xl">Quiz</h1>
            </div>

            {/* Start Quiz Button */}
            <button
                onClick={handleStartQuiz}
                className="mt-10 bg-red-500 text-white py-3 px-32 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition duration-300 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
                >
                Start
            </button>
                </>
        </div>
    )
}
