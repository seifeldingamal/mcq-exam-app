import axios from 'axios'

export const _getQuestions = async () => {
    const results = await axios.get('http://localhost:5000/questions')
    return results.data
}