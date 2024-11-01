import * as Action from '../redux/reducer/result'
import axios from 'axios'

export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.updateResultAction(index))
    } catch (error) {
        console.log(error)
    }
}



export const fetchScore = async (userAnswers) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_HOSTNAME}/api/score`, {
            userAnswers
        });
        return response.data;
    } catch (error) {
        console.error("Error calculating score:", error);
        return { error: "Failed to calculate score" };
    }
};
