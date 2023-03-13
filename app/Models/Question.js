


export class Question {
    constructor(data) {
        this.question = data.question
        this.category = data.category
        this.correct_answer = data.correct_answer
        this.difficulty = data.difficulty
        this.incorrect_answers = data.incorrect_answers
        this.type = data.type
        this.possible_answers = data.correct_answer + (',') + data.incorrect_answers
    }

    get questionCard() {
        return`
        <div class="col-6 p-2">
          <div class="card p-2">
            <h5>Category: <span>${this.category}</span></h5>
            <h4><span>${this.question}</span></h4>
            <h4><span>${this.possible_answers}</span>, <span></span></h4>
          </div>
        </div>
        `
    }

}