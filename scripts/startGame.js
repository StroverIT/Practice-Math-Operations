$(document).ready(function () {
  $("body").keypress(function (e) {
    const currentPage = e.target;
    const typeOperation = $(currentPage).find("#startedGame")[0].classList[0];
    $(".main-section").children().remove()
    startGame(typeOperation)
    $(this).unbind()
  });
});
function randomNum(){
    return Math.floor(Math.random() * 10)
}
function startGame(typeOperation){
    
    let firstNum,secondNum,result
    let firstRandom = randomNum()
    let secondRandom= randomNum()
    switch (typeOperation) {
        case "addition":
          
          break;
        case "subtraction":
          break;
        case "multiplication":
          break;
        case "division":
          break;
      }

}
