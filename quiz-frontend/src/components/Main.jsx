import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserId } from '../redux/reducer/result'

export default function Main() {
    const inputRef = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate() // useNavigate hook for programmatic navigation

    function handleSubmit(event) {
        event.preventDefault() // Prevent page refresh

        // Dispatch user ID and navigate to the quiz if there's a username
        if (inputRef.current?.value) {
            dispatch(setUserId(inputRef.current.value))
            navigate('/quiz') // Navigate to the quiz page
        }
    }

    return (
        <div className="container mx-auto my-10 p-4">
            <div className="flex justify-center items-center flex-col">
                <div className="quiz bg-white flex justify-center items-center text-6xl font-bold text-red-500 rounded-full w-64 h-64">QUIZ</div>
                
                {/* onSubmit calls handleSubmit when Enter is pressed */}
                <form id="form" className="mt-6 flex justify-center" onSubmit={handleSubmit}>
                    <input ref={inputRef} className="p-3 border rounded-md w-1/2 text-center" type="text" placeholder="Username*" />
                </form>

                {/* Button also calls handleSubmit for starting the quiz */}
                <div className="mt-6">
                    <button className="bg-red-500 text-white py-3 px-10 rounded-lg text-xl font-semibold" onClick={handleSubmit}>Start Quiz</button>
                </div>
            </div>
        </div>
    )
}
