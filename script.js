let questions = [
    {
        question: "Which of these is the safest password?",
        answers: [
            "12345678",
            "malak123",
            "M@l9#xQ2!z",
            "password"
        ],
        correct: 2
    },

    {
        question: "What should you do if you receive a suspicious link?",
        answers: [
            "Open it immediately",
            "Share it with friends",
            "Ignore it and verify the sender",
            "Enter your password"
        ],
        correct: 2
    },

    {
        question: "Which information should you avoid sharing publicly?",
        answers: [
            "Your favorite color",
            "Your password",
            "Your favorite subject",
            "Your hobby"
        ],
        correct: 1
    },

    {
        question: "What does HTTPS help provide?",
        answers: [
            "A faster computer",
            "A more secure connection",
            "More storage",
            "Free internet"
        ],
        correct: 1
    },

    {
        question: "What is a good way to protect your online accounts?",
        answers: [
            "Use the same password everywhere",
            "Share passwords with friends",
            "Use strong unique passwords",
            "Write your password publicly"
        ],
        correct: 2
    }
];


let currentQuestion = 0;
let score = 0;

let questionNumber = document.getElementById("question-number");
let scoreText = document.getElementById("score");
let questionText = document.getElementById("question");
let answerButtons = document.querySelectorAll(".answer-btn");
let nextButton = document.getElementById("next-btn");


function showQuestion() {

    let question = questions[currentQuestion];

    questionNumber.textContent =
        "Question " + (currentQuestion + 1) + " / " + questions.length;

    scoreText.textContent =
        "Score: " + score;

    questionText.textContent =
        question.question;

    answerButtons.forEach(function (button, index) {

        button.textContent = question.answers[index];

        button.classList.remove("correct");
        button.classList.remove("wrong");

        button.disabled = false;
        button.style.display = "block";
    });

    nextButton.textContent = "Next Question";
    nextButton.style.display = "none";
}


answerButtons.forEach(function (button, index) {

    button.addEventListener("click", function () {

        let question = questions[currentQuestion];

        answerButtons.forEach(function (btn) {
            btn.disabled = true;
        });

        if (index === question.correct) {

            button.classList.add("correct");
            score++;

        } else {

            button.classList.add("wrong");

            answerButtons[question.correct]
                .classList.add("correct");
        }

        scoreText.textContent =
            "Score: " + score;

        nextButton.style.display = "inline-block";
    });
});


nextButton.addEventListener("click", function () {

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        showQuestion();

    } else {

        showResult();
    }
});


function showResult() {

    let percentage = Math.round(
        (score / questions.length) * 100
    );

    let message = "";

    if (percentage === 100) {

        message =
            "Perfect! You're a Digital Safety Expert! 🌟";

    } else if (percentage >= 80) {

        message =
            "Excellent! You have great digital awareness! 🚀";

    } else if (percentage >= 60) {

        message =
            "Good job! Keep learning and stay safe online! 💜";

    } else {

        message =
            "Keep practicing! Every challenge makes you smarter. 💪";
    }


    questionNumber.textContent =
        "Challenge Complete 🎉";

    scoreText.textContent =
        "Final Score: " + percentage + "%";


    questionText.innerHTML =
        "You scored <strong>" +
        score +
        " / " +
        questions.length +
        "</strong><br><br>" +

        "Your Score: <strong>" +
        percentage +
        "%</strong><br><br>" +

        message;


    answerButtons.forEach(function (button) {

        button.style.display = "none";

    });


    nextButton.textContent =
        "Try Again";

    nextButton.style.display =
        "inline-block";
}


nextButton.addEventListener("click", function () {

    if (currentQuestion === questions.length) {

        currentQuestion = 0;
        score = 0;

        answerButtons.forEach(function (button) {

            button.style.display = "block";

        });

        showQuestion();
    }
});


let originalNextButtonClick =
    nextButton.onclick;


nextButton.addEventListener("click", function () {

    if (
        currentQuestion === questions.length - 1 &&
        nextButton.textContent === "Try Again"
    ) {

        currentQuestion = 0;
        score = 0;

        answerButtons.forEach(function (button) {

            button.style.display = "block";

        });

        showQuestion();
    }

});


showQuestion();