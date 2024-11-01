import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getServerData } from "../helper/helper"
import * as Action from '../redux/reducer/question'

export const useFetchQuestion = () => {
    const dispatch = useDispatch()
    const [getData, setGetData] = useState({
        isLoading: false,
        apiData: [],
        serverError: null,
    })

    useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading: true }))

        // Fetch questions asynchronously
        ;(async () => {
            try {
                const response = await getServerData(
                    `${import.meta.env.VITE_SERVER_HOSTNAME}/api/questions`,
                    data => data
                )
                

                const { questions, answers } = response[0] || {}

                if (questions && questions.length > 0) {
                    setGetData(prev => ({
                        ...prev,
                        isLoading: false,
                        apiData: questions,
                    }))

                    dispatch(
                        Action.startExamAction({
                            question: questions,
                            answers,
                        })
                    )
                } else {
                    throw new Error("No Question Available")
                }
            } catch (error) {
                setGetData(prev => ({
                    ...prev,
                    isLoading: false,
                    serverError: error.message || error,
                }))
                console.error("Error fetching questions:", error)
            }
        })()
    }, [dispatch])

    return [getData, setGetData]
}

export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction())
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction())
    } catch (error) {
        console.log(error)
    }
}
