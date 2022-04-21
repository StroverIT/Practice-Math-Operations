
const mathDictaniory = ["addition", "subtraction", "multiplication", "division"]
let operations = {
    addition,
    subtraction,
    multiplication,
    

}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function addition(min,max){
    /*
    Example:
    maxNum = 10
    a = 1 - 10 (from one to 10)
    b = 10  minus (1-10)
    let say: 
    a = 6
    b = 10 - 6 = 4
    result = a + b = 6+ 4
    result = a + b
    */
    let a = getRandomInt(min,max)
    let b = max - a 
    let result = a + b
    return {
        a, b, result,
        operationType: "addition",
        operationIcon: "+"
    }

}
function subtraction(min, max){
      /*
    Example:
    maxNum = 10
    a = 1 - 10 (from one to 10)
    b = 10  minus (1-10)
    let say: 
    a = 5
    b = 10 
    result = a - b
    */
    let a = getRandomInt(min, max)
    let b = getRandomInt(min,max)
    if(b > a) [a,b] = [b, a]

    let result = a - b
    return{
        a,b,result,
        operationType: "subtraction",
        operationIcon: "-"
    }
}
function multiplication(min,max){

    let a = getRandomInt(1,10)
    let b = getRandomInt(1,10)
    let result = a * b
    return{
        a,b,result,
        operationType: "multiplication",
        operationIcon: "*"
    }
}

export function calculateOperation(level){
    let typeOperation,currOperation
    switch(level){
        case "1":
             typeOperation = mathDictaniory[getRandomInt(0,1)]
             currOperation = operations[typeOperation]
            return currOperation(1,10)
        case "2":
             typeOperation = mathDictaniory[getRandomInt(0,2)]
             currOperation = operations[typeOperation]
             if(currOperation == "multiplication") currOperation()
            return currOperation(1,20)
            
    }
}


/*
Levels logic

Level 1: 

Level:2 

Level 3:

Level 4:

Level 5:

Level 6:

Level 7:

Level 8:

Level 9:

Level 10:

*/