var z = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
/*
TODO:
    1. Start after 3 2 1
*/
if (z === "addition.html" || z === "division.html" || z === "multiplication.html" || z === "subtraction.html") {
    console.log("TypeOf Z: " + z);
    //hide section
    let section = document.querySelector("#calculation")
    section.style.display = "none"
        //Usefull stats
    let type = ""
    let firstNum = 0
    let secondNum = 0
    let isPlaying = false

    //Play button
    let playBtn = document.querySelector("#startBtn")
        //On click button
    playBtn.addEventListener("click", startTheBigBrain)

    //Check Button
    let checkButton = document.querySelector("#checker")
        //On click button
    checkButton.addEventListener("click", calculate)

    //Text
    let text = document.querySelector("#text")

    function startTheBigBrain() {
        //Hide button
        playBtn.style.display = "none"
            //Check the type
        if (z === "addition.html") type = "addition"
            //Display the calculation
        section.style.display = "block"
        console.log("Started");

    }

    function calculate() {
        console.log(type);
        if (type === "addition") {
            firstNum = getRandomNum()
            secondNum = getRandomNum()
            text.content = `${firstNum} + ${secondNum}`
        }
    }
    //Get Random Num
    function getRandomNum() {
        let num = Math.ceil(Math.random() * 100)
        return num
    }
}