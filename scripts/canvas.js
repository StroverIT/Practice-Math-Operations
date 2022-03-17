const canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext("2d")

//Line
ctx.beginPath()
ctx.moveTo(50,300);
ctx.lineTo(300,100)
ctx.lineTo(400,300)
ctx.stroke()
//Arc / Circle
ctx.beginPath()
ctx.arc(300, 300, 30, 0, Math.PI * 2, false)
ctx.stroke()

// const minus = ctx.fillRect(100,100, 10, 1)
// console.log(ctx);
// drawPlus()
// function drawPlus(){
//     ctx.fillRect(100,110,10,1)
//     ctx.fillRect(105,106,1,9)

// }
