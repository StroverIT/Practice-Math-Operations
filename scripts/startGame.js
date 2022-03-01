$(document).ready(function () {
  $("body").keypress(function () {
    console.log("READY");
    onPressStart()
  });
  $("body").click(function(){
    console.log("READY");

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

const valid = $('.valid')
  const invalid = $(".invalid")
const timer = $(".time")
const input = $(".inputValue input")
const btn = $(".inputValue button")
const userInput = $(".inputs input")


input.keypress(function(e){
  
})
 
function startTimer(){
  const secondsLeft = setInterval(function(){
   time-=1
   timer.text(`${time} секунди`)
   if(time == 0){
    clearInterval(secondsLeft)
    endGame()
  }
  }, 1000)

}

function startGame(typeOperation) {
  if(!isStarted){
    isStarted = true
    startTimer()
  }
  $(".endGame").remove()
  const startedSection = $("#startedGame");
  userInput.val("")
  valid.text(`Верни: 0`)
  invalid.text(`Грешни: 0`)
  isStarted = false
  time = 10
  correct = 0   
  incorrect = 0
  timer.text(`${time} секунди`)
  // If checker for section is hidden
  if (startedSection.hasClass("d-none")) {
    startedSection.removeClass("d-none");
  }

  input.focus()
  
  newOperation(typeOperation)
  const eventObject = $._data(btn[0], "events")
  if(eventObject == undefined){
    btn.click(()=> checker(typeOperation))
    $(document).keypress(function(e){
      if(e.keyCode === 13 || e.keyCode ===32){
        checker(typeOperation)
      }
    })
  }

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
      }
      firstNum = secondNum * randomNum(10);
      while (firstNum <= 0) {
        firstNum = secondNum * randomNum(10);
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
  
  // Valid
  if(inputs.result == userInput.val()){
    correct+=1
    // Output
    valid.text(`Верни: ${correct}`)
  }
  // Invalid
  if(inputs.result != userInput.val()){

    incorrect+=1
    // Output
    invalid.text(`Грешни: ${incorrect}`)
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
function randomNum(num) {
  return Math.floor(Math.random() * num);
}

function endGame(){
  $("body").prepend(`
  <section class="endGame d-flex justify-content-center align-items-center flex-column h-50 w-100">
    <section class="end__information ">
      <div class="valid">
      Верни: ${correct}
      </div>
      <div class="invalid">
      Грешни: ${incorrect}
      </div>
      <div>
      Среден резултат: ${correct > 0 && incorrect > 0 ? correct- incorrect: correct}
      </div>
    </section>
     <section class="end__buttons">
        <button class="btn btn-success" id="startNewGame">Нова игра</button>
     <section>
  </section>
  `)
  $("#startNewGame").click(()=>startGame(typeOperation))

}