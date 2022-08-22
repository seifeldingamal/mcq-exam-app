import axios from 'axios'

export const _getQuestions = async () => {
    const results = await axios.get('/api/questions')
    return results.data
}