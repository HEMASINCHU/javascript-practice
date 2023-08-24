const questions = [
  {
    text: "What is JS stands for?",
    options: ["JavaScript", "Java", "Python", "Angular"],
    anwerkey: 0,
    actualKey: 1,
  },
  {
    text: "What is Array data type",
    options: ["mixed datatype", "beta", "alpha", "gamma"],
    anwerkey: 0,
    actualKey: 1,
  },
  {
    text: "What is Object data type",
    options: ["mixed datatype", "beta", "alpha", "gamma"],
    exceptedKey: 0,
    actualKey: 1,
  },
];

let totalQuestions = questions.length;
let currentQuestionIndex = 0;
let score = 0;
const MIN_SCORE = 3;

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
    timerCount--;
    updateTimerDisplay();

    const timeLimitInSeconds = 0;
    if (timerCount <= timeLimitInSeconds) {
      alert("Time's up!");
      stopTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function loadQuestion(questionIndex) {
  const question = questions[questionIndex];
  questionText.textContent = question.text;
  for (let i = 0; i < options.length; i++) {
    options[i].value = i;
    options[i].checked = false;
    options[i].nextSibling.textContent = question.options[i];
  }
  updateQuestionNumber();
  stopTimer();
  timerCount = 30;
  updateTimerDisplay();
  startTimer();
}

function updateQuestionNumber() {
  questionNumber.textContent = `Question ${
    currentQuestionIndex + 1
  } of  ${totalQuestions}`;
}

previousBtn.disabled = true;

function checkAnswer(selectedIndex) {
  if (selectedIndex === questions[currentQuestionIndex].anwerkey) {
    score++;
  }
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

previousBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion(currentQuestionIndex);
    nextBtn.disabled = false;
  }
  if (currentQuestionIndex === 0) {
    previousBtn.disabled = false;
  }
});

nextBtn.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (selectedOption) {
    const selectedIndex = +selectedOption.value;
    checkAnswer(selectedIndex);

    if (currentQuestionIndex === totalQuestions - 1) {
      if (score >= MIN_SCORE) {
        showResult();
      } else {
        alert("You did not score 3 or more points.");
      }
    } else {
      currentQuestionIndex++;
      loadQuestion(currentQuestionIndex);
      previousBtn.disabled = false;
      nextBtn.disabled = false;

      if (currentQuestionIndex === totalQuestions - 1) {
        nextBtn.textContent = "Submit";
      }
    }
  } else {
    alert("Please select an option before proceeding.");
  }
});

loadQuestion(currentQuestionIndex);
startTimer();

previousBtn.disabled = true;
updateQuestionNumber();
