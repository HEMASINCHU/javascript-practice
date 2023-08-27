const questions = [
  {
    text: "What is JS stands for?",
    options: ["JavaScript", "Java", "Python", "Angular"],
    answerKey: 0,
    expectedKey: 0,
    actualKey: 1,
  },
  {
    text: "What is Array data type",
    options: ["mixed datatype", "beta", "alpha", "gamma"],
    answerKey: 0,
    expectedKey: 0,
    actualKey: 1,
  },
  {
    text: "What is Object data type",
    options: ["collection of properties", "beta", "alpha", "gamma"],
    answerKey: 0,
    expectedKey: 0,
    actualKey: 1,
  },
];

let totalQuestions = questions.length;
let currentQuestionIndex = 0;
let score = 0;
const MIN_SCORE = 1;

const questionText = document.getElementById("question-text");
const questionNumber = document.getElementById("question-number");
const options = document.getElementsByName("answer");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");

const timerCountElement = document.getElementById("timer-count");
let timerCount = 30;
let timerInterval;

function updateTimerDisplay() {
  timerCountElement.textContent = timerCount;
}

function startTimer() {
  timerInterval = setInterval(() => {
    if (timerCount > 0) {
      timerCount--;
      updateTimerDisplay();
    } else {
      stopTimer();
      alert("Time's up!");
      moveToNextQuestion();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function loadQuestion(questionIndex) {
  stopTimer();
  const question = questions[questionIndex];
  questionText.textContent = question.text;
  for (let i = 0; i < options.length; i++) {
    options[i].value = i;
    options[i].checked = i === question.actualKey;
    options[i].nextSibling.textContent = question.options[i];
  }
  updateQuestionNumber();
  updateTimerDisplay();
  startTimer();
}

function updateQuestionNumber() {
  questionNumber.textContent = `Question ${
    currentQuestionIndex + 1
  } of ${totalQuestions}`;
}

previousBtn.disabled = true;

function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedIndex === currentQuestion.answerKey) {
    score++;
  } else {
    if (currentQuestion.actualKey === currentQuestion.answerKey) {
      score--;
    }
  }
  currentQuestion.actualKey = selectedIndex;
}

function showResult() {
  const quizContainer = document.querySelector(".quiz-container");
  quizContainer.innerHTML = `
      <div class="result">
        <h2>Quiz Complete!</h2>
        <p>Your score: ${score} out of ${totalQuestions}</p>
      </div>
    `;
}

function moveToNextQuestion() {
  stopTimer();
  timerCount = 30;

  if (currentQuestionIndex === totalQuestions - 1) {
    if (score >= MIN_SCORE) {
      showResult();
    } else {
      alert("You did not score enough points.");
    }
  } else {
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
    previousBtn.disabled = false;
    nextBtn.disabled = false;

    if (currentQuestionIndex === 0) {
      previousBtn.disabled = true;
    }

    if (currentQuestionIndex === totalQuestions - 1) {
      nextBtn.textContent = "Submit";
    } else {
      nextBtn.textContent = "Next";
    }
  }
}

previousBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    timerCount = 30;
    loadQuestion(currentQuestionIndex);
    nextBtn.disabled = false;

    if (currentQuestionIndex === 0) {
      previousBtn.disabled = true;
    }

    if (currentQuestionIndex !== totalQuestions - 1) {
      nextBtn.textContent = "Next";
    }
  }
});

nextBtn.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (selectedOption) {
    const selectedIndex = +selectedOption.value;
    checkAnswer(selectedIndex);

    if (currentQuestionIndex === totalQuestions - 1) {
      showResult();
    } else {
      currentQuestionIndex++;
      timerCount = 30;
      loadQuestion(currentQuestionIndex);
      previousBtn.disabled = false;

      if (currentQuestionIndex === totalQuestions - 1) {
        nextBtn.textContent = "Submit";
      }
    }
  } else {
    alert("Please select an option before proceeding.");
  }
});

const btnAdd = document.getElementById("addQuestions");
const inputEl = document.querySelector("#question");
const answerEl = document.querySelector("#answer");
const optionsEl = document.querySelector("#option");

btnAdd.addEventListener("click", () => {
  const newQuestion = inputEl.value;
  const newAnswer = parseInt(answerEl.value);
  const newOptions = optionsEl.value.split(",");

  questions.push({
    text: newQuestion,
    options: newOptions,
    answerKey: newAnswer,
    expectedKey: newAnswer,
    actualKey: -1,
  });

  inputEl.value = "";
  answerEl.value = "";
  optionsEl.value = "";

  totalQuestions = questions.length;

  updateQuestionNumber();
});

loadQuestion(currentQuestionIndex);
updateQuestionNumber();
