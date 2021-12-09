/* //Todo:
    1. remove secondTimer function and make 1 function with if 
    2. Fix the focus on play and again
*/

var z = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

if (z === "addition.html" || z === "subtraction.html" || z === "division.html" || z === "multiplication.html") {

    //Play button
    let getStarted = document.querySelector("#startBtn")
    let isPlaying = false
    alert(z);
    getStarted.addEventListener("click", calcType)
        //Again button
    let againBtn = document.querySelector("#again")
        //Stats
    againBtn.addEventListener("click", calcType)
    let firstNum = getRandomNum()
    let secondNum = getRandomNum()
    let typeIs = ""
        //Timer
    let timer = document.querySelector("#timer")
        //Check if timers is 0
    let timeOutCheck
    let t
    let counter = 3

    //Timer
    function timerFunc() {
        counter -= 1
        timer.innerHTML = `Time: ${counter}`
    }
    //Timer checker if time is out
    function timeOutChecker() {
        if (counter <= 0) {
            clearInterval(t)
            clearInterval(timeOutCheck)
            isPlaying = false
            console.log("STOPPED");
        }
    }
    //Random numbers
    function getRandomNum() {
        let randomNum = Math.ceil(Math.random() * 100)
        return randomNum
    }


    function calcType() {
        if (!isPlaying) {
            let test = document.querySelector("section")
            counter = 3
            timer.innerHTML = `Time: ${counter}`
            t = setInterval(timerFunc, 1000)
            timeOutCheck = setInterval(timeOutChecker, 1000)
            if (test.getAttribute('id') == "addition") {
                isPlaying = true
                typeIs = "add"
            } else if (test.getAttribute('id') == "subtraction") {
                isPlaying = true
                typeIs = "subtraction"
            }
            calculate()
        }
    }

    function calculate() {
        if (isPlaying) {
            //Final Result
            let totalResult = 0
                //Where are displayed calc Messages
            let messageCalculation = document.querySelector("#text")
                //Here display the calc Message
            messageCalculation.textContent = `${firstNum} + ${secondNum}`
                //If numbers are same checker
            let isSame = 0


            //Input
            let theInput = document.querySelector("#input")
            theInput.focus()

            //Stats
            let score = document.querySelector("#score")
            let rightAnswer = document.querySelector("#rightAnswers")
            let wrongAnswer = document.querySelector("#wrongAnswers")

            let right = 0
            let wrong = 0
            let total = 0
                //Display stats
            score.textContent = `TotalStats: ${total}`
            rightAnswer.textContent = `Right Answers: ${right}`
            wrongAnswer.textContent = `Wrong Answers: ${wrong}`
                //Button proveri/check
            let checkerBtn = document.querySelector("#checker")
            checkerBtn.addEventListener("click", checker)

            document.addEventListener("keyup", function(e) {
                if (e.keyCode === 13) checker()
            })

            function checker() {
                if (isPlaying) {
                    console.log(`resultata be brat: ${totalResult}`);
                    console.log(right, wrong);
                    if (Number(theInput.value) === totalResult) {
                        console.log(`TotalResulktDad: ${totalResult}`);
                        console.log("right");
                        right += 1
                        rightAnswer.textContent = `Right: ${right}`

                    } else {
                        wrong += 1
                        wrongAnswer.textContent = `Wrong: ${wrong}`

                    }

                    theInput.value = ""


                    getNewNumbers(typeIs)
                }
            }

            function getNewNumbers(type) {
                firstNum = getRandomNum()
                secondNum = getRandomNum()

                if (type === "add") {
                    return firstNum + secondNum
                } else if (type === "subtraction") {
                    if (firstNum > secondNum) {
                        return firstNum - secondNum
                        console.log(result);
                    } else {
                        getNewNumbers(typeIs)
                    }
                }


                if (result > 100 || isSame == result) {
                    firstNum = getRandomNum()
                    secondNum = getRandomNum()
                    getNewNumbers(typeIs)

                } else {
                    console.log(result);
                    displayTheType(typeIs)
                }

                function displayTheType(type) {
                    let typeResult = 0
                    if (type === "add") {
                        isSame = result
                        messageCalculation.textContent = `${firstNum} + ${secondNum}`
                        typeResult = firstNum + secondNum
                        console.log(type);
                        totalResult = typeResult

                    } else if (type === "subtraction") {
                        isSame = result
                        messageCalculation.textContent = `${firstNum} - ${secondNum}`
                        typeResult = firstNum - secondNum
                        console.log(type);
                        totalResult = typeResult
                    }
                    return typeResult
                }

            }
        }

    }


}