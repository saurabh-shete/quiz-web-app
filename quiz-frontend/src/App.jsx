import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'

export default function App() {
    const inputRef = useRef(null)
    const dispatch = useDispatch()

    function startQuiz() {
        if (inputRef.current?.value) {
            dispatch(setUserId(inputRef.current?.value))
        }
    }

    return (
        <div className="container mx-auto my-10 p-4">
            <div className="flex justify-center items-center flex-col">
                <div className="quiz bg-white flex justify-center items-center text-6xl font-bold text-red-500 rounded-full w-64 h-64">QUIZ</div>
                <form id="form" className="mt-6 flex justify-center">
                    <input ref={inputRef} className="p-3 border rounded-md w-1/2 text-center" type="text" placeholder="Username*" />
                </form>
                <div className="mt-6">
                    <Link className="bg-red-500 text-white py-3 px-10 rounded-lg text-xl font-semibold" to={'/quiz'} onClick={startQuiz}>Start Quiz</Link>
                </div>
            </div>
        </div>
    )
}
