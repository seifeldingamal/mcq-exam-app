import { RECEIVE_DATA } from '../actions/questions'

export default function questions (state = {}, action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return action.questions
    
        default:
            return state
    }
}