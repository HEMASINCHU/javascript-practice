const questions = [
  {
    text: "What is JS stands for?",
    options: ["JavaScript", "Java", "Python", "Angular"],
    correct: 0,
  },
  {
    text: "What is Array data type",
    options: ["mixed datatype", "beta", "alpha", "gamma"],
    correct: 0,
  },
  {
    text: "What is Object data type",
    options: ["mixed datatype", "beta", "alpha", "gamma"],
    correct: 0,
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
const btnAdd = document.getElementById("addQuestions");
const inputEl = document.querySelector("#question");
const answerEl = document.querySelector("#answer");
const optionsEl = document.querySelector("#option");

function loadQuestion(questionIndex) {
  const question = questions[questionIndex];
  questionText.textContent = question.text;
  for (let i = 0; i < options.length; i++) {
    options[i].value = i;
    options[i].checked = false;
    options[i].nextSibling.textContent = question.options[i];
  }
  updateQuestionNumber();
}

function updateQuestionNumber() {
  questionNumber.textContent = `Question ${currentQuestionIndex + 1}`;
}
previousBtn.disabled = true;
function checkAnswer(selectedIndex) {
  if (selectedIndex === questions[currentQuestionIndex].correct) {
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
  updateQuestionNumber();
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

      updateQuestionNumber();
    }
  } else {
    alert("Please select an option before proceeding.");
  }
});

loadQuestion(currentQuestionIndex);

previousBtn.disabled = true;

updateQuestionNumber();

btnAdd.addEventListener("click", () => {
  const optionsList = optionsEl.value.split(",").map((option) => option.trim());

  if (optionsList.length < 2) {
    alert("Please enter at least 2 options.");
    return;
  }

  const correctIndex = parseInt(answerEl.value);

  if (correctIndex >= optionsList.length || isNaN(correctIndex)) {
    alert("Invalid correct answer index.");
    return;
  }

  questions.push({
    text: inputEl.value,
    options: optionsList,
    correct: correctIndex,
  });

  inputEl.value = "";
  answerEl.value = "";
  optionsEl.value = "";

  totalQuestions = questions.length;
});
