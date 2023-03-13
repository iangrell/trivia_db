import { appState } from "../AppState.js"
import { Question } from "../Models/Question.js"



class QuestionsService {

    async getQuestionsWithFetch() {
        let response = await fetch('https://opentdb.com/api.php?amount=10') 
        let data = await response.json()
        console.log(data.results)
        appState.questions = data.results.map(q => new Question(q))
        console.log('appstate'. appstate.questions)
    }

    async getQuestions() {
        let response = await axios.get('https://opentdb.com/api.php?amount=10')
        console.log('axios', response.data.results)
        appState.questions = response.data.results.map(q => new Question(q))
        console.log('appState', appState.questions)
    }

}

export const questionsService = new QuestionsService()