import { appState } from "../AppState.js"
import { Question } from "../Models/Question.js"
import { triviaApi } from "./AxiosService.js"



class QuestionsService {
    async goGetTriviaFromApiPlease() {
        const response = await triviaApi.get('api.php?amount=1&category=22&difficulty=easy&type=multiple')
        appState.questions = response.data.results.map(q => new Question(q))
    }


}

export const questionsService = new QuestionsService