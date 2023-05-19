import { appState } from "../AppState.js"
import { questionsService } from "../Services/QuestionsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawQuestions() {
    console.log('This is my draw Questions ', appState.questions)

    let template = ''
    appState.questions.forEach(q => { template += q.QuestionsTemplate })

    setHTML('question', template)

}

function _drawAnswers(){
    console.log ('These are my answers', )
}


export class QuestionsController {
    constructor() {
        appState.on('questions', _drawQuestions)
        // this.goGetTriviaFromApi()
        _drawQuestions()

    }

    async goGetTriviaFromApi() {
        try {
            await questionsService.goGetTriviaFromApiPlease()
        } catch (error) {
            Pop.error(error)
        }
    }

}