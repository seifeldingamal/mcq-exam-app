export const SET_USER = 'SET_USER'

export function setUser (name) {
    return {
        type: SET_USER,
        name,
    }
}