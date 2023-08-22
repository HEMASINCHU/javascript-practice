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

const totalQuestions = questions.length;
let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const questionNumber = document.getElementById("question-number");
const options = document.getElementsByName("answer");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");

function loadQuestion(questionIndex) {
  const question = questions[questionIndex];
  questionText.textContent = question.text;
  for (let i = 0; i < options.length; i++) {
    options[i].value = i;
    options[i].checked = false;
    options[i].nextSibling.textContent = question.options[i];
  }
}

function updateQuestionNumber() {
  questionNumber.textContent = `Question ${
    currentQuestionIndex + 1
  } of ${totalQuestions}`;
}

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
    previousBtn.disabled = true;
  }
  updateQuestionNumber();
});

nextBtn.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (selectedOption) {
    const selectedIndex = parseInt(selectedOption.value);
    checkAnswer(selectedIndex);

    if (currentQuestionIndex === totalQuestions - 1) {
      if (score >= 3) {
        showResult();
      } else {
        alert("You did not score 10 or more points.");
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
const btnAdd = document.getElementById("addQuestions");
const inputEl = document.querySelector("#question");
const answerEl = document.querySelector("#answer");
const optionsEl = document.querySelector("#option");

btnAdd.addEventListener("click", () => {
  //console.log("clicked ", inputEl.value, answerEl.value, optionsEl.value);
  window.confirm("Enter the question that you want to add?");
  questions.push({
    question: inputEl.value,
    answer: answerEl.value,
    options: optionsEl.value,
  });
  inputEl.value = "";
  answerEl.value = "";
  optionsEl.value = "";
});
