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



// fetchScore function to save and retrieve the score from the backend
export const fetchScore = async (username, userAnswers) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_HOSTNAME}/api/score`, {
            username,
            userAnswers
        });
        return response.data;
    } catch (error) {
        console.error("Error calculating score:", error);
        return { error: "Failed to calculate score" };
    }
};

