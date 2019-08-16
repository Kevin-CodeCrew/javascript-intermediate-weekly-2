/*
    Build a simple quiz program

    The program will use both the JS console and the browser.
    The questions/answers will be displayed in the JS console and
    'prompt' will be used to accept answer input from the user.
 */

// General Requirements:
//     Create a Class to represent an individual Question.
//     Create 3 or more Question instances via the Question class constructor.
//     Load each question that you make/instantiate inside an array.
//     Select one random question from your question array and log it to the console. Your Question class should be able to output the question and the available answers. Each answer should have a number displayed that the User can enter to pick an answer. [HINT: Use 0 - however many answers and just concatenate the corresponding answer to make a numbered answer in the console].
//     Use the ‘prompt’ function to ask the User for the correct answer. The user should input the corresponding number of the correct answer.
//     Check if the User’s answer is correct and display an alert stating if they were right or not.
// Challenge Levels:
//     Enhance the solution so that it will let the User keep answering questions until ‘q’ is entered (Bonus: handle any case lower/or upper that may be entered by the User).
//     Track the User’s score. Each time the answer was correct, give them a point. Display the running total of the numbers of questions they got right in the console before or after the question(s).

/////////////// Class Definition(s) ////////////////////////////////////////////////////

// Base class for Questions
class Question {
    constructor(question, answers, correct) {
        this.question_p = question;
        this.answers_p = answers;
        this.correct_p = correct;
    }

    // Method for a question to display question
    // and available answers in console
    displayQuestion() {
        console.log(this.question_p);

        // Example using for/in instead of regular 'for loop'
        // for (let idx in this.answers_p) {

        // Using for
        for (let idx = 0; idx < this.answers_p.length; idx++) {
            console.log(idx + '. ' + this.answers_p[idx]);
        }
    }

    // Method to check if the answer (number)
    // matches for the *current* question.
    checkAnswerCorrect(answerValue)
    {
        // Check if user got answer correct
        // and display appropriate message.
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

///////////////// Create some Questions //////////////////////////////////////////////////

// Create a few questions
let q1 = new Question('How many million miles is Earth from the Sun?',
    ['123', '92', '150'], 1);

let q2 = new Question('The favorite number of the Canadian rock band Rush',
    ['2112', '1999', '1212'], 0);

let q3 = new Question('True or False : The number of US Senators a state has depends on the population of the state.',
    ['True', 'False'], 1);

////////////////// Randomly load and ask a Question //////////////////////////////////////
// Load the questions into the question list
let questions = [q1, q2, q3];

// Pick a random question (CODE PROVIDED TO STUDENTS FOR RANDOM NUMBER GENERATION)
let n = Math.floor(Math.random() * questions.length);

// Display it
questions[n].displayQuestion();

// Get user answer
let answer = parseInt(prompt('Please select the correct answer by its number'));

// Check for a correct answer against current Question instance
questions[n].checkAnswerCorrect(answer);
