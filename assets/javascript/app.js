//still need to add a timeout to each question
//-gif display from ajax call after each correct question
//-populate and add more questions
//randomly select questions and order of answer buttons




function gameSet() {
  
  onQuestion = 0;
  right = 0;
  wrong = 0;
  popArray();
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
var questionSet
var question;
function popArray(){
  questionSet = [
  (question = {
    q: "Roger Bannister was the first person to do what?",
    w1: "Walk on the moon.",
    w2: "Be cured of old Age.",
    w3: "Win the Super Bowl, Stanley Cup, and the Daytona 500",
    r1: "Run a mile in less than 4 minutes",
    
  }),
  (question = {
    q: "The short blade that Bilbo Baggins used and passed on to Frodo was called?",
    w1: "Orcrist",
    w2: "Butter Knife",
    w3: "wrong answer 23",
    r1: "right answer2"
  }),
  (question = {
    q: "3?",
    w1: "wrong answer 31",
    w2: "wrong answer 32",
    w3: "wrong answer 33",
    r1: "right answer3"
  }),
  (question = {
    q: "4?",
    w1: "wrong answer 41",
    w2: "wrong answer 42",
    w3: "wrong answer 43",
    r1: "right answer4"
  }),
  (question = {
    q: "5?",
    w1: "wrong answer 51",
    w2: "wrong answer 52",
    w3: "wrong answer 53",
    r1: "right answer5"
  })
];
}
function renderQuestion(n) {
  $("#slot").empty();
  
  
  if (n < 5) {
    //randomly generate the question that is rendered
    var thisQuestion = (Math.floor(Math.random() * (questionSet.length)));
    console.log("rand: "+thisQuestion);
  $("#slot").append(`<h1>${questionSet[thisQuestion].q}</h1>`);
  
  var ans1 =$(
    `<button class = 'answer wrong'>${questionSet[thisQuestion].w1}</button>`
  );
  var ans2 =$(
    `<button class = 'answer wrong'>${questionSet[thisQuestion].w2}</button>`
  );
  var ans3 =$(
    `<button class = 'answer wrong'>${questionSet[thisQuestion].w3}</button>`
  );
  var ans4 =$(
    `<button class = 'answer right'>${questionSet[thisQuestion].r1}</button>`
  );
  var answers = [ans1,ans2,ans3,ans4];
  
  for(i=0;i<4;i++){
    var ansIndex = (Math.floor(Math.random() * (answers.length)));
    $("#slot").append(answers[ansIndex]);
    answers.splice(ansIndex,1);
  }

  questionSet.splice(thisQuestion,1);
    // $("#slot").append(`<h1>${questionSet[thisQuestion].q}</h1>`);
    // $("#slot").append(
    //   `<button class = 'answer wrong'>${questionSet[thisQuestion].w1}</button>`
    // );
    // $("#slot").append(
    //   `<button class = 'answer wrong'>${questionSet[thisQuestion].w2}</button>`
    // );
    // $("#slot").append(
    //   `<button class = 'answer wrong'>${questionSet[thisQuestion].w3}</button>`
    // );
    // $("#slot").append(
    //   `<button class = 'answer right'>${questionSet[thisQuestion].r1}</button>`
    // );
    // questionSet.splice(thisQuestion,1);

    //   console.log(questionSet);
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
