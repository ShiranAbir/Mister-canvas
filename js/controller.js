'use strict'

function onInit() {
    init()
  }

function onSetColor(color) {
    setColor(color)
    console.log('Changing color to',color)
}

function onSetShape(shape){
    setShape(shape)
    console.log('Changing shape to',shape)
}

function onCanvasClicked(ev){
    drawShape(ev)
    console.log('Canvas clickes in:', ev)
}

function onClearCanvas() {
    clearCanvas()
}

function onDownload(elLink){
    downloadCanvas(elLink)
}

function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)
}

function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gUserData.width, gUserData.height);
}