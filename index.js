var quizdata = [
  {
    question: "which frame work belogn to js ?",
    a: ".net",
    b: "flask",
    c: "react",
    d: "dango",
    correct: "a",
  },
  {
    question: "what is not a programming language ?",
    a: "css",
    b: "html",
    c: "react",
    d: "hindi",
    correct: "d",
  },
  {
    question: "which is not a frame work",
    a: "react",
    b: "JS",
    c: "angular",
    d: "django",
    correct: "b",
  },
  {
    question: "CSS is stand for?",
    a: "class Sytle style",
    b: "Cascading style state",
    c: "Cascading style sheet",
    d: "none",
    correct: "c",
  },
];
var quiz = document.getElementById("quiz");
var answer = document.querySelectorAll(".answer");
var question = document.getElementById("question");
var option_a = document.getElementById("a_value");
var option_b = document.getElementById("b_value");
var option_c = document.getElementById("c_value");
var option_d = document.getElementById("d_value");
var submitbtn = document.getElementById("submit");
var currentQues = 0;
var quizScore = 0;
var count = 1;
loadquiz();

function loadquiz() {
  console.log("hello");
  // console.log(quizdata[currentQues].question);
  deselect();

  question.innerHTML = count + ". " + quizdata[currentQues].question;
  option_a.innerText = quizdata[currentQues].a;
  option_b.innerText = quizdata[currentQues].b;
  option_c.innerText = quizdata[currentQues].c;
  option_d.innerText = quizdata[currentQues].d;
  count++;
}

function deselect() {
  answer.forEach((answer) => (answer.checked = false));
}

// submit ope
submitbtn.addEventListener("click", () => {
  var selectedoption;
  answer.forEach((answer) => {
    if (answer.checked) {
      selectedoption = answer.id;
    }
  });
  if (selectedoption == quizdata[currentQues].correct) {
    quizScore = quizScore + 1;
  }
  currentQues++;
  if (currentQues == quizdata.length) {
    document.getElementById(
      "quizdiv"
    ).innerHTML = `<br><h4>🌟💫 You have answered ${quizScore} correctly out of ${quizdata.length} 🌟💫</h4> `;
    // document.getElementById('quizdiv').innerHTML = `<button>ReQuiz</button>`
  } else {
    loadquiz();
  }
});
