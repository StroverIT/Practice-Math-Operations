import {render, html} from "../node_modules/lit-html/lit-html.js"
const root = document.querySelector("#root")
const calcTemplate = (operation) => html`
   <section>
<a href="/calculatePage"><i class="fa-solid fa-arrow-turn-down return-arrow"></i></a>
    <section style="display:flex; flex-direction: column">
        <div id="calculation">${operation.a} ${operation.icon} ${operation.b}</div>
        <input id="submitInput">
        <button id="submitBtn" @click=${submitFnc}>Потвърди</button>
    </section>
   </section>
`;

const typeOperations = {
    "addition": addition,
    "subtraction": subtraction,
    "multiplication": multiplication,
    "division": division
}
const currOperations = {}

export const calcOperationView = (ctx) => {
    const currType = ctx.params.typeCalc
    // Assinging to work with values
    startGame(currType)
    render(calcTemplate(currOperations), root)
};

// ------------Event listeners --------------
function submitFnc(){
    const input = Number(document.querySelector("#submitInput").value)
    const result = currOperations.result
    const mistakes = currOperations.mistakes 
    const corrects = currOperations.corrects

    input!=result ?currOperations.mistakes = mistakes+1 : currOperations.corrects = corrects +1
   const newValues = typeOperations[currOperations.type]()
   for(let value in newValues){
       currOperations[value] = newValues[value]
   }
   render(calcTemplate(currOperations), root)

}

function startGame(currType){
    Object.assign(currOperations, typeOperations[currType]())
    currOperations.mistakes = 0
    currOperations.corrects= 0
    currOperations.type = currType
}
//------------ Logic for every operation -----------------
function addition(){
    let a = randomNum(100)
    let b = randomNum(100)
    let result = a + b
    if(result > 100){
        a += (100 - result)
    }
    return {
        icon: "+",
        result,
        a,
        b
    }
}
function subtraction(){
    let a = randomNum(100)
    let b = randomNum(100)
    if(a <  b){
        [a,b] = [b,a]
    }
    const result = a-b
    return {
        icon: "-",
        result,
        a,
        b
    }
}
function multiplication(){
    let a = randomNum(10)
    let b = randomNum(10)
    const result = a*b
    return {
        icon: "*",
        result,
        a,
        b
    }
}
function division(){
    let a = randomNum(10) * randomNum(10)
    let b = randomNum(10)
    const result = a/b
    return {
        icon: "/",
        result,
        a,
        b
    }
}
function randomNum(num){
    // Returning random num from 1-10
    return Math.ceil(Math.random() * num)
}