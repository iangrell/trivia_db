import { appState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { setHTML } from "../Utils/Writer.js";


function _drawQuestions() {
    let questions = appState.questions
    let template = ''
    questions.forEach(q => template += q.questionCard)
    setHTML('questionCard', template)
}

export class QuestionsController{
    constructor() {
        console.log('test from controller')
        let data = fetch('https://opentdb.com/api.php?amount=10')
        console.log(data)
        appState.on('questions', _drawQuestions)
        this.getQuestions()
    }

    async getQuestions() {
        try{
            await questionsService.getQuestions()
        } catch(error) {
            console.error(error)
        }
    }
}