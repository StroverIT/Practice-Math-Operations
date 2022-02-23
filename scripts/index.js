

// Local variables
let isFinished = {
    first: false,
    second: false,
}

let currentState = 0

const text = document.querySelector(".fancyHeader")
const strText = text.textContent
const splitText = strText.split("")
text.textContent = ""
for(let i = 0; i < splitText.length;i++){
    text.innerHTML += `<span>${splitText[i]}</span>`
}

let char = 0
let timer = setInterval(() => onTick(text, splitText,timer), 50)

const textPara = document.querySelector(".fancyParagraph")
const strTextPara = textPara.textContent
const splitTextPara = strTextPara.split("")
textPara.textContent = ""
function first(){

    for(let i = 0; i < splitTextPara.length;i++){
        textPara.innerHTML += `<span>${splitTextPara[i]}</span>`
    }
   
    let timerOne = setInterval(() => onTick(textPara, splitTextPara, timerOne), 50)
}
const fancyList = $(".fancyList ul li")


function second(){
    fancyList.each(function(index) {        
        var that = this;
        var t = setTimeout(function() { 
            console.log(that);
            $(that).removeClass("cHidden"); 
            $(that).addClass("cFading")
        }, 500 * index);        
    });
}

function onTick(el, elArr,t){
    const span = el.querySelectorAll("span")[char]
    span.classList.add("fading")
    char++
    if(char === elArr.length){
        switch(currentState){
            case 0:
                console.log("FINISHED");
           char = 0 
            first()
            break
            case 1:
                console.log("FINISHED2");
                second()
                break
        }
        currentState++
        complete(t)
        return
    }
}
function complete(t){
    clearInterval(t)
    t = null
}

