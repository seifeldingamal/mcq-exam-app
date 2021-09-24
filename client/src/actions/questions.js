import { hideLoading, showLoading } from "react-redux-loading"
import { _getQuestions } from "../utls/_API"

export const RECEIVE_DATA = 'RECEIVE_DATA'

function receiveData (questions) {
    return {
        type: RECEIVE_DATA,
        questions,
    }
}

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return Promise.all([
            _getQuestions(),
        ]).then(([questions]) => {
            dispatch(receiveData(questions))
            dispatch(hideLoading())
        })
    }
}
