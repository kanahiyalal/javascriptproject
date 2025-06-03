const data = [{
        Question: "Which of the following is not a valid data type in Java?",
        A: "int",
        B: "float",
        C: "real",
        D: "boolean",
        Correct: "C"
    },
    {
        Question: "Which of the following sorting algorithms has the best average-case time complexity?",
        A: "Bubble Sort",
        B: "Merge Sort",
        C: "Insertion Sort",
        D: "Selection Sort",
        Correct: "B"
    },
    {
        Question: "Which of the following is not a feature of Object-Oriented Programming (OOP)?",
        A: "Encapsulation",
        B: "Inheritance",
        C: "Compilation",
        D: "Polymorphism",
        Correct: "C"
    },
    {
        Question: "print(2 ** 3 ** 2)",
        A: "512",
        B: "64",
        C: "256",
        D: "36",
        Correct: "A"
    }
]

const Quiz = document.getElementById("quiz")
const answerE1 = document.querySelectorAll(".answer")
const questionE1 = document.getElementById("question")
const optionA = document.getElementById("OptionA")
const optionB = document.getElementById("OptionB")
const optionC = document.getElementById("OptionC")
const optionD = document.getElementById("OptionD")
const submitbtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswer()

    const currentQuizData = data[currentQuiz]
    questionE1.innerText = currentQuizData.Question
    optionA.innerText = currentQuizData.A
    optionB.innerText = currentQuizData.B
    optionC.innerText = currentQuizData.C
    optionD.innerText = currentQuizData.D
}

function deselectAnswer() {
    answerE1.forEach((answerE1) => (
        answerE1.checked = false
    ))
}

function getselected() {
    let answer

    answerE1.forEach((answerE1) => {
        if (answerE1.checked) {
            answer = answerE1.id
        }
    })
    return answer
}
submitbtn.addEventListener("click", () => {
    const answer = getselected()


    if (answer) {
        if (answer === data[currentQuiz].Correct)
            score++
    }
    currentQuiz++

    if (currentQuiz < data.length) {
        loadQuiz()
    } else {
        Quiz.innerHTML = `<h2>You Answered ${score} / ${data.length} Questions Correct</h2>
        <button onclick="location.reload()">Do it Again</button>
       
        `
    }
})