export const INCREMENT_SCORE = 'INCREMENT_SCORE'
export const GET_SCORE = 'GET_SCORE'

export function incScore () {
    return {
        type: INCREMENT_SCORE,
    }
}

export function getScore (score) {
    return {
        type: GET_SCORE,
        score,
    }
}