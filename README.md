# Build a Simple Quiz Program

## Weekly Project (Total 10 points)
Create a program that will let you create a simple question generator. 

The program will use both the JavaScript console and the browser. The questions/answers should be displayed in the JavaScript console and answer 'prompt' should be used to accept answer input from the user.

![Sample Question](https://github.com/cs-fullstack-master/javascript-intermediate-weekly-2/blob/master/2019-08-16_092700.png)

### Phase 1: Ask 1 question only then exit

#### Create a Class to represent an individual Question (4 points). 
Your Question class should have 3 properties:
* Question Text - This is the actual text of the given question 
* Answers - This should be an array containing the available answers for the question. The number of answers available for a given question is up to the Developer.
* Correct Answer Index - This integer should be the index of the correct answer in your answer array.

Your Question Class should have at least 2 methods:
* A method to output the question and the available answers. 
* A method that accepts an integer, and checks if the value matches the ```Correct Answer Index```. 

#### Each answer should have a number displayed that the User can enter to pick an answer (using the Question class method you implemented) (2 points). 
Refer to image. (HINT: Use 0 - however many answers and use a ```Template String``` or simply concatenate the corresponding answer (+) to make a numbered answer in the console).

#### Create 3 or more Question instances via the Question class constructor (1 point).
Create question instances manually in your JavaScript code. An example of creating a new Question should look something like this (NOTE: Passing in the values for the 3 properties of the Question class to its Constructor):

```let q1 = new Question('How many million miles is Earth from the Sun?',['123', '93', '150'], 1);```

#### Load each question that you make/instantiate into an Available Question List array using any array method you choose to add the Questions as new elements in the array (1 point).

#### Select one random question from your Available Question List array and log it to the console (0 points). 
Your Question class should be able to output the question and the available answers (refer to image above). Use this code or similar to generate a random index number to use to get a Question from your Available Question List array:
```
// Pick a random question (CODE PROVIDED TO STUDENTS FOR RANDOM NUMBER GENERATION)
let index_of_a_question = Math.floor(Math.random() * available_question_list_array.length);
```

#### Use the ‘prompt’ function to ask the User for what they think the correct answer is (1 point). 
The user should input the corresponding number of the correct answer displayed in the JavaScript console.

#### Use your Question Class method that checks for a correct answer (1 point).
Check if the User’s answer is correct and display an alert stating if they were right or not.

![Sample Response to Incorrect Answer](https://github.com/cs-fullstack-master/javascript-intermediate-weekly-2/blob/master/2019-08-16_101424.png)

### Challenges
* Enhance the solution so that it will let the User keep answering questions until ‘q’ is entered (Bonus: handle any case lower/or upper that may be entered by the User).
* Track the User’s score. Each time the answer was correct, give them a point. Display the running total of the numbers of questions they got right in the console before or after the question(s).
* Make sure if the user enters an invalid answer number say "Invalid Answer Number. Please Try Again!", then retry the question. 

#### Notes
- It's expected you know how to use git to push and pull your projects. You will not get ANY points if you push your work after 5pm.
