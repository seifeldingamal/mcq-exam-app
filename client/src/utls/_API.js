import axios from 'axios'

export const _getQuestions = async () => {
    const results = await axios.get('/questions')
    return results.data
}