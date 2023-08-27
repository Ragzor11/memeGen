'use strict'

function onImgSelect(elImg) {
    setImg(elImg.dataset.imgId)
    hideGallery()
    showEditor()
    renderMeme()
}
function onSetFilterBy({ value }){
    if (value !== undefined) setFilterBy(value)
    renderGallery()
}