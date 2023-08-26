'use strict'

function renderGallery() {
    const elGallery = document.querySelector('.gallery')
    let strHTML = ''
    gImgs.forEach(img => strHTML += `<img src=${img.url} data-img-id=${img.id} onclick="onImgSelect(this)">`)
    elGallery.innerHTML = strHTML
}


function onImgSelect(elImg) {
    setImg(elImg.dataset.imgId)
    hideGallery()
    showEditor()
    renderMeme()
}
