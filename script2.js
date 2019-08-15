// Base class for Questions
class Question {
    constructor(question, answers, correct) {
        this.question_p = question;
        this.answers_p = answers;
        this.correct_p = correct;
    }

    // Method for a question to display question
    // and answers in console
    displayQuestion() {
        console.log(this.question_p);
// Using for/in
//        for (let idx in this.answers_p) {
        // Using for
        for (let idx = 0; idx < this.answers_p.length; idx++) {
            console.log(idx + '. ' + this.answers_p[idx]);
        }
    }

    // Method to check if the answer (number)
    // matches for the *current* question.
    checkAnswerCorrect(answerValue)
    {

        if (answerValue === this.correct_p)
        {
            alert('YOU ARE CORRECT SIR!');
        }
        else
        {
            alert('Sorry Pal! That is INCORRECT!!!');
        }
    }

}

(function() {
// Create a few questions
    let q1 = new Question('How many million miles is Earth from the Sun?',
        ['123', '92', '150'], 1);


    let q2 = new Question('The favorite number of the Canadian rock band Rush',
        ['2112', '1999', '1212'], 0);

    let q3 = new Question('True or False : The number of US Senators a state has depends on the population of the state.',
        ['True', 'False'], 1);

// Load the questions into the question list
    let questions = [q1, q2, q3];

// Pick a random question (CODE PROVIDED FOR RAN)
    let n = Math.floor(Math.random() * questions.length);
// Display it
    questions[n].displayQuestion();

// Get user answer
    let answer = parseInt(prompt('Please select the correct answer by its number'));

// Check against current Question instance
    questions[n].checkAnswerCorrect(answer);
})();
