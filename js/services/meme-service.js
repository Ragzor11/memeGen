'use strict'

let gMeme = {
    selectedImgId: 1,
    lines: [
        {
            txt: 'Enter text...',
            size: 30,
            color: 'white'
        }
    ]
}

let gLineIdx = 0
let gCurrLine = gMeme.lines[gLineIdx]

function getMeme() {
    return gMeme
}

function getCurrLine() {
    return gCurrLine
}

function saveLinePos(line, pos) {
    line.pos = pos
}

function switchLine() {
    gLineIdx++
    if (gLineIdx >= gMeme.lines.length) gLineIdx = 0
    gCurrLine = gMeme.lines[gLineIdx]
}

function addLine(txt = 'Add text here..', size = 25, color = 'white') {
    const newLine = { txt, size, color }
    gMeme.lines.push(newLine)
}

function changeTxtSize(size) {
    const wantedSize = gCurrLine.size + size
    if (wantedSize <= 10 || wantedSize >= 50) return

    gCurrLine.size += size
}

function setTxtColor(color) {
    gCurrLine.color = color
}


function getImgs() {
    return gImgs
}


function setLineTxt(txt) {
    gCurrLine.txt = txt
}
function addListeners() {
    addMouseListeners()
    addTouchListeners()

    window.addEventListener('resize', () => {
        resizeCanvas()
        renderMeme()
    })


}

function addMouseListeners() {
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchend', onUp)
}
function getEvPos(ev) {
    let pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    }

    if (TOUCH_EVS.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
    }
    return pos
}

function checkIsOnText(pos) {
    const { x, y } = pos
    const memeLines = getMeme().lines
    for (let i = 0; i < memeLines.length; i++) {
        const line = memeLines[i]
        const linePos = line.pos
        const startX = (linePos.textWidth / 2) - (linePos.textWidth - linePos.x)
        const endX = startX + linePos.textWidth
        const startY = linePos.y - linePos.size / 2
        const endY = linePos.y + linePos.size / 2

        if (x >= startX && x <= endX && y >= startY && y <= endY) {
            gIsOnText = true
            gCurrLine = line
            return
        } else {
            resetCurrLine()
        }
    }
}
function updateTextInput() {
    const txt = getCurrLine() ? getCurrLine().txt : ''
    document.querySelector('.line-text').value = txt
}


function drawText(line, pos = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }) {
    const { txt = 'Insert text here', size = 20 } = line
    const { x, y } = pos

    drawTextOnCanvas(line, pos)
    const textWidth = gCtx.measureText(txt).width
    saveLinePos(line, { x, y, textWidth, size })

    if (gCurrLine === line) {
        drawBoxSelectedLine(gCurrLine)
    }
}

function drawTextOnCanvas(line, pos) {
    let { txt, size, color, font, align } = line
    const { x, y } = pos
    font = (!font) ? 'Impact' : font
    align = (!align) ? 'center' : align

    gCtx.lineWidth = 1.5
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = color
    gCtx.font = `${size}px ${font}`
    gCtx.textAlign = align
    gCtx.textBaseline = 'middle'

    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)
}

function drawBoxSelectedLine(line) {
    const { x, y, textWidth, size } = line.pos
    gCtx.lineWidth = 2
    gCtx.rect((x - textWidth / 2 - 5), (y - size / 2), (textWidth + 10), size)
    gCtx.strokeStyle = '#E8E8E8'
    gCtx.stroke()
}

function loadImgToCanvas(src) {
    gCurrImg = new Image()
    gCurrImg.src = src
}
function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

function resetCurrLine() {
    gCurrLine = null
}

function showEditor() {
    document.querySelector('main .editor').classList.remove('hidden')
}

function hideEditor() {
    document.querySelector('main .editor').classList.add('hidden')
}

function toggleMainMenu() {
    document.querySelector('.top-header nav .main-menu').classList.toggle('open')
}
