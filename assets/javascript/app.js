





function gameSet() {
  onQuestion = 0;
  right = 0;
  wrong = 0;
  
  // popArray();
  $("#slot").empty();
  $("#slot").append(
    "<h1 id ='start-instructions'>Click the button to begin</h1>"
  );
  $("#slot").append("<button id ='start-button'>Start</button>");
  popArray();
  $("#start-button").on("click", function(event) {

    renderQuestion(onQuestion);
  });
}
var rAnswer;
var timeLeft;
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
    w3: "Glamdring",
    r1: "Stinger"
  }),
  (question = {
    q: "Pluto was reclassified, in 2006, to what kind of astronomical object?",
    w1: "Asteroid",
    w2: "Worm Hole",
    w3: "Moon",
    r1: "Dwarf Planet"
  }),
  (question = {
    q: "a Bloody Mary is a cocktail made with tomato juice and what kind of alcohol?",
    w1: "Red Wine",
    w2: "Bourban",
    w3: "Sake",
    r1: "Vodka"
  }),
  (question = {
    q: "What 3 letter word means 'the front of the ship'?",
    w1: "Aft",
    w2: "Cog",
    w3: "Starboard",
    r1: "Bow"
  }),
  (question = {
    q: "what is the term for the dots found on dominoes and dice?",
    w1: "Eyes",
    w2: "Pops",
    w3: "Dots",
    r1: "Pips"
  }),
  (question = {
    q: "How many squares are on a chess board?",
    w1: "13",
    w2: "42",
    w3: "104",
    r1: "64"
  }),
  (question = {
    q: "At what university was Gatorade developed?",
    w1: "Miami",
    w2: "Vanderbilt",
    w3: "University of Pheonix",
    r1: "University of Florida"
  }),
  (question = {
    q: "In Poker, 5 cards of the same suit is called a what?",
    w1: "Pair",
    w2: "River",
    w3: "Ante",
    r1: "Flush"
  }),
  (question = {
    q: "Which Ship was Titanic's sister Ship?",
    w1: "The Dawn Treader",
    w2: "The USS Monitor",
    w3: "The Nina",
    r1: "The Olympic"
  })
];
}

function countDown(){
  if (timeLeft<1){
    queTimeOut();
    
  }
  else{
  $("#time-left").text("TIMER: "+timeLeft);
  timeLeft--;}

}

function renderQuestion(n) {
  $("#slot").empty();

  
  
  if (n < 10) {
    timeLeft =10;
    intervalId = setInterval(countDown,1000);
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
  rAnswer = questionSet[thisQuestion].r1;
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
    
  } 
  
  else {
    clearInterval(intervalId);
    endGame();
  }
  
}
//function that is called when timer runs down

function queTimeOut(){
  $("#time-left").empty();
  clearInterval(intervalId);
  $("#slot").empty();
  $("#slot").append("<h1>Timeout</h1>");
  $("#slot").append(`<h1>The correct answer was "${rAnswer}"</h1>`);
  $("#slot").append("<img src='assets/images/spongebob.gif'>");
  wrong++;
  onQuestion++;
  setTimeout(nextQuestion,2500);
}
function nextQuestion() {
  renderQuestion(onQuestion);
}
function rightAnswer() {
  $("#time-left").empty();
  clearInterval(intervalId);
  $("#slot").empty();
  $("#slot").append("<h1>correct!</h1>");
  $("#slot").append("<img src='assets/images/patrick.gif'>");
  right++;
  onQuestion++;
  setTimeout(nextQuestion,2500);
 
}
function wrongAnswer() {
  $("#time-left").empty();
  clearInterval(intervalId);
  $("#slot").empty();
  $("#slot").append("<h1>Wrong!</h1>");
  $("#slot").append(`<h1>The correct answer was "${rAnswer}"</h1>`);
  $("#slot").append("<img src='assets/images/spongebob.gif'>");
  wrong++;
  onQuestion++;
  setTimeout(nextQuestion,2500);
  
}

function endGame() {
  clearInterval(intervalId);
  $("#time-left").empty();
  $("#slot").empty();
  $("#slot").append("<h1>Game Over</h1>");
  $("#slot").append(`<h1 id = "percent">${(right / 10) * 100}%</h1>`);
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
