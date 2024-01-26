const question =[
    {
        question:  "Imisa Sano Ayuu Quraanku Soo dagayay",
        answer: [
            {text: "23", correct: true},
            {text: "21", correct: false},
            {text: "34", correct: false},
            {text: "45", correct: false},
        ]
    },
    {
        question:  "Imisa Sano Ayuu Quraanku Soo dagayay",
        answer: [
            {text: "23", correct: true},
            {text: "21", correct: false},
            {text: "34", correct: false},
            {text: "45", correct: false},
        ]
    },
    {
        question:  "Imisa Sano Ayuu Quraanku Soo dagayay",
        answer: [
            {text: "23", correct: true},
            {text: "21", correct: false},
            {text: "34", correct: false},
            {text: "45", correct: false},
        ]
    },
    {
        question:  "Imisa Sano Ayuu Quraanku Soo dagayay",
        answer: [
            {text: "23", correct: true},
            {text: "21", correct: false},
            {text: "34", correct: false},
            {text: "45", correct: false},
        ]
    },
    {
        question:  "Imisa Sano Ayuu Quraanku Soo dagayay",
        answer: [
            {text: "23", correct: true},
            {text: "21", correct: false},
            {text: "34", correct: false},
            {text: "45", correct: false},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    cd 
    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.classList.add("btn");
        answerButtons.appendChild(button);

    });

}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
} 
startQuiz();