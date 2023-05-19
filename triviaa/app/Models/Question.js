export class Question {
    constructor(data) {
        this.category = data.category
        this.type = data.type
        this.difficulty = data.difficulty
        this.question = data.question
    }




    get QuestionsTemplate() {
        return `
        <div>
    <p>${this.category}</p>
     <p>${this.type}</p>
      <p>${this.difficulty}</p>
       <p>${this.question}</p>
    </div>
    
    `
    }


}