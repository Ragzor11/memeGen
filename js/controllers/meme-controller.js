'use strict'
let gElCanvas
let gCtx
let gCurrImg
let gIndicateLine = false
let gIsOnText = false
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']


function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
    resizeCanvas()
    updateTextInput()
    addListeners()
    hideEditor()
}

function renderMeme() {
    const meme = getMeme()
    const imgSrc = gImgs.find(img => img.id === gMeme.selectedImgId).url
    const memeLines = meme.lines

    loadImgToCanvas(imgSrc)
    gCurrImg.onload = () => {
        let y = 0
        gElCanvas.height = (gCurrImg.naturalHeight / gCurrImg.naturalWidth) * gElCanvas.width
        gCtx.drawImage(gCurrImg, 0, 0, gElCanvas.width, gElCanvas.height)

        memeLines.forEach(line => {
            y += 30
            drawText(line, line.pos)
        })
    }
}

function onDown(ev) {
    const pos = getEvPos(ev)
    checkIsOnText(pos)
    renderMeme()
    updateTextInput()
    document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
    if (!gIsOnText) return
    const pos = getEvPos(ev)
    drawText(gCurrLine, pos)
    renderMeme()
}

function onUp(ev) {
    gIsOnText = false
    document.body.style.cursor = 'unset'
}

function onSwitchLine() {
    switchLine()
    renderMeme()
    updateTextInput()
}

function onAddLine() {
    addLine()
    renderMeme()
}

function onChangeTxtSize(size) {
    changeTxtSize(size)
    renderMeme()
}

function onSetTxtColor(elColor) {
    setTxtColor(elColor.value)
    renderMeme()
}

function onSetLineTxt(elInput) {
    setLineTxt(elInput.value)
    renderMeme()
}

function onDownloadCanvas(elLink) {
    elLink.href = gElCanvas.toDataURL('image/jpeg')
}

function onRemoveLine() {
    gMeme.lines = gMeme.lines.filter(line => line !== gCurrLine)
    renderMeme()
}

function onAlignText(elBtn) {
    gCurrLine.align = elBtn.value
    renderMeme()
}

function onChangeFont(ev) {
    gCurrLine.font = ev.target.value
    renderMeme()
}