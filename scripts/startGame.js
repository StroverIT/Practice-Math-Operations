$(document).ready(function () {
  $("body").keypress(function () {
    onPressStart()
  });
  $("body").click(function(){
    onPressStart()
  })
});
function onPressStart(){
    $(".main-section").remove();
    startGame(typeOperation);
    currentPage.unbind()
}
// Global variables
const currentPage = $("body");
const typeOperation = $(currentPage).find("#startedGame")[0].classList[0];
let inputs,isStarted,correct,incorrect,time
const timer = $(".time")

const input = $(".inputValue input")
const btn = $(".inputValue button")

input.keypress(function(e){
  if(!isStarted){
    console.log("started");
    isStarted = true
    startTimer()
  }
})
 
function startTimer(){
  const secondsLeft = setInterval(function(){
   time-=1
   timer.text(`${time} секунди`)
   if(time == 58){
    clearInterval(secondsLeft)
    console.log("END of the game");
    endGame()
  }
  }, 1000)

}

function randomNum(num) {
  return Math.floor(Math.random() * num);
}
function startGame(typeOperation) {
  $(".endGame").remove()
  const startedSection = $("#startedGame");
  isStarted = false
  time = 60
  correct = 0   
  incorrect = 0
  timer.text(`${time} секунди`)
  // If checker for section is hidden
  if (startedSection.hasClass("d-none")) {
    startedSection.removeClass("d-none");
  }

 
  input.focus()
  
  newOperation(typeOperation)
  console.log(inputs);
  btn.click(()=> checker(typeOperation))
  $(document).keypress(function(e){
    if(e.keyCode === 13 || e.keyCode ===32){
      checker(typeOperation)
    }
  })
}
function operationCalc(typeOperation) {
  let result, firstNum, secondNum, icon;
  switch (typeOperation) {
    case "addition":
      firstNum = randomNum(50);
      secondNum = randomNum(50);
      result = firstNum + secondNum;
      icon = "+";
      break;
    case "subtraction":
      firstNum = randomNum(100);
      secondNum = randomNum(100);
      if (firstNum < secondNum) {
        [firstNum, secondNum] = [secondNum, firstNum];
      }
      result = firstNum - secondNum;
      icon = "-";
      break;
    case "multiplication":
      firstNum = randomNum(10);
      secondNum = randomNum(10);
      result = firstNum * secondNum;
      icon = "*";
      break;
    case "division":
      secondNum = randomNum(10);
      while (secondNum <= 0) {
        secondNum = randomNum(10);
        console.log("BUG1");
      }
      firstNum = secondNum * randomNum(10);
      while (firstNum <= 0) {
        firstNum = secondNum * randomNum(10);
        console.log("BUG2");
      }
      icon = "/"
      result = firstNum / secondNum;
      break;
  }
  return {
    firstNum,
    secondNum,
    result,
    icon,
    typeOperation
  };
}
// CHECKER

function checker(typeOperation){
  const userInput = $(".inputs input")
  const valid = $('.valid')
  const invalid = $(".invalid")
  // Valid
  if(inputs.result == userInput.val()){
    let validNum
    validNum = Number(valid.text().split(": ")[1])
    if(valid.text() <= 0){
    validNum = Number(valid.text())
    }
    correct+=1
    // Output
    valid.text(`Верни: ${validNum + 1}`)
  }
  // Invalid
  if(inputs.result != userInput.val()){
  let invalidNum
  invalidNum = Number(invalid.text().split(": ")[1])
    if(invalid.text() <= 0){
      invalidNum = Number(invalid.text())
    }
    incorrect+=1
    // Output
    invalid.text(`Грешни: ${invalidNum + 1}`)
  }
  console.log(correct,incorrect);
  userInput.val("") 
  userInput.focus()
  newOperation(typeOperation)
}
// To display new calculations
function newOperation(typeOperation){
  const output = $(".output")

  inputs = operationCalc(typeOperation)
  output.text(`${inputs.firstNum} ${inputs.icon} ${inputs.secondNum}`)
  
}
function endGame(){
  $("body").prepend(`
  <section class="endGame">

  <button class="btn btn-success" id="startNewGame">Нова игра</button>
  </section>
  `)
  $("#startNewGame").click(()=>startGame(typeOperation))

  console.log(correct,incorrect);
}