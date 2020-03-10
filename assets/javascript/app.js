//still need to add a timeout to each question
//-gif display from ajax call after each correct question
//-populate and add more questions
//randomly select questions and order of answer buttons




function gameSet() {
  
  onQuestion = 0;
  right = 0;
  wrong = 0;
  $("#slot").empty();
  $("#slot").append(
    "<h1 id ='start-instructions'>Click the button to begin</h1>"
  );
  $("#slot").append("<button id ='start-button'>Start</button>");
  $("#start-button").on("click", function(event) {
    renderQuestion(onQuestion);
  });
}
var right = 0;
var wrong = 0;
var onQuestion = 0;
var question;
var questionSet = [
  (question = {
    q: "what is the answer to question 1?",
    w1: "wrong answer 11",
    w2: "wrong answer 12",
    w3: "wrong answer 13",
    r1: "right answer1"
  }),
  (question = {
    q: "what is the answer to question 2?",
    w1: "wrong answer 21",
    w2: "wrong answer 22",
    w3: "wrong answer 23",
    r1: "right answer2"
  }),
  (question = {
    q: "what is the answer to question 3?",
    w1: "wrong answer 31",
    w2: "wrong answer 32",
    w3: "wrong answer 33",
    r1: "right answer3"
  }),
  (question = {
    q: "what is the answer to question 4?",
    w1: "wrong answer 41",
    w2: "wrong answer 42",
    w3: "wrong answer 43",
    r1: "right answer4"
  }),
  (question = {
    q: "what is the answer to question 5?",
    w1: "wrong answer 51",
    w2: "wrong answer 52",
    w3: "wrong answer 53",
    r1: "right answer5"
  })
];

function renderQuestion(n) {
  $("#slot").empty();

  if (n < questionSet.length) {
    $("#slot").append(`<h1>${questionSet[n].q}</h1>`);
    $("#slot").append(
      `<button class = 'answer wrong'>${questionSet[n].w1}</button>`
    );
    $("#slot").append(
      `<button class = 'answer wrong'>${questionSet[n].w2}</button>`
    );
    $("#slot").append(
      `<button class = 'answer wrong'>${questionSet[n].w3}</button>`
    );
    $("#slot").append(
      `<button class = 'answer right'>${questionSet[n].r1}</button>`
    );
  } else {
    endGame();
  }
}

function rightAnswer() {
  $("#slot").empty();
  $("#slot").append("<h1>correct!</h1>");
  right++;
  onQuestion++;
  renderQuestion(onQuestion);
  console.log("right: " + right, "wrong: " + wrong, "question: " + onQuestion);
}
function wrongAnswer() {
  $("#slot").empty();
  $("#slot").append("<h1>Wrong!</h1>");
  wrong++;
  onQuestion++;
  renderQuestion(onQuestion);
  console.log("right: " + right, "wrong: " + wrong, "question: " + onQuestion);
}

function endGame() {
  $("#slot").empty();
  $("#slot").append("<h1>Game Over</h1>");
  $("#slot").append(`<h1 id = "percent">${(right / 5) * 100}%</h1>`);
  $("#slot").append(`<h2>Correct: ${right}</h2>`);
  $("#slot").append(`<h2>WRONG: ${wrong}</h2>`);
  $("#slot").append("<button id ='restart-button'>Restart</button>");
  $("#restart-button").on("click", function(event) {
    gameSet();
  });
}

$(document).on("click", ".right", rightAnswer);
$(document).on("click", ".wrong", wrongAnswer);

gameSet();
