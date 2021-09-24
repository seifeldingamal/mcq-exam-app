import { GET_SCORE, INCREMENT_SCORE } from '../actions/score'

export default function score (state = 0, action) {
    switch (action.type) {
        case GET_SCORE:
            return action.score
        
        case INCREMENT_SCORE:
            return state + 1

        default:
            return state
    }
}