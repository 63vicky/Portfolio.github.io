const quizDB = [
  {
    question: "Q1: Guess my favourite language?",
    a: "Python",
    b: "HTML",
    c: "Android",
    d: ".NET",
    ans: "ans2",
  },

  {
    question: "Q2: Guess my favourite Lecture?",
    a: "Maths",
    b: "Science",
    c: "English",
    d: "A Free Lec.",
    ans: "ans4",
  },

  {
    question: "Q3: Guess my favourite Food?",
    a: "North Indian",
    b: "Ghas-Fus",
    c: "South Indian",
    d: "Other Videsi Food",
    ans: "ans1",
  },

  {
    question: "Q4: Guess, Which type of movies i like?",
    a: "Without physics",
    b: "Hollywood",
    c: "Udta South-India",
    d: "Gujarati",
    ans: "ans2",
  },

  {
    question: "Q5: What is your my favourite Sports?",
    a: "Football",
    b: "Kabaddi",
    c: "Cricket",
    d: "Do Nothing",
    ans: "ans3",
  },
];

const question = document.querySelector(".questions");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");

let score = 0;
let questionCount = 0;

const showScore = document.querySelector("#showScore");

const loadQuestion = () => {
  const questionList = quizDB[questionCount];

  question.innerHTML = questionList.question;
  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};

loadQuestion();

const getCheckedAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });

  return answer;
};

const deselectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckedAnswer();
  if (checkedAnswer == quizDB[questionCount].ans) {
    score++;
  }

  questionCount++;

  deselectAll();

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
        
        <h3> you scored ${score} / ${quizDB.length} </h3>
        <button class="btn" onclick = "location.reload()">Play Again</button>

        `;

    showScore.classList.remove("scoreArea");
  }
});
