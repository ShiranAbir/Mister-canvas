'use strict'

var gCanvas
var gCtx
var gUserData = {
    color: '#77baca',
    shape: 'Circle',
    width: 600,
    height: 600
}

function init(){
    gCanvas = document.querySelector('.my-canvas')
    gCtx = gCanvas.getContext('2d')
}

function drawShape(ev) {
    const { offsetX, offsetY } = ev
    switch (gUserData.shape) {
        case 'Circle':
            drawArc(offsetX, offsetY)
            break;
        case 'Triangle':
            drawTriangle(offsetX, offsetY)
            break;
        case 'Square':
            drawRect(offsetX, offsetY)
            break;
    }
}

function drawTriangle(x, y) {
    gCtx.beginPath()
    gCtx.lineWidth = 2
    gCtx.moveTo(x, y)
    gCtx.lineTo(x+50, 200)
    gCtx.lineTo(x+100, 150)
    gCtx.closePath()
    gCtx.fillStyle = gUserData.color
    gCtx.fill()
    gCtx.strokeStyle = 'blue'
    gCtx.stroke()
}

function drawRect(x, y) {
    gCtx.beginPath()
    gCtx.rect(x, y, 150, 150)
    gCtx.fillStyle = gUserData.color
    gCtx.fillRect(x, y, 150, 150)
    gCtx.strokeStyle = 'black'
    gCtx.stroke()
}

function drawArc(x, y) {
    gCtx.beginPath()
    gCtx.lineWidth = 6
    gCtx.arc(x, y, 50, 0, 2 * Math.PI)
    gCtx.strokeStyle = 'white'
    gCtx.stroke()
    gCtx.fillStyle = gUserData.color
    gCtx.fill()
}

function clearCanvas(){
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}


// function downloadCanvas(elLink) {
//     //gets the canvas content and convert it to base64 data URL that can be save as an image
//     const data = gCanvas.toDataURL();//method returns a data URL containing a representation of the image in the format specified by the type parameter.
//     console.log('data', data);//decoded the image to base64 
//     elLink.href = data;//put it on the link
//     elLink.download = 'puski';//can change the name of the file
//   }