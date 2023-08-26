'use strict'
var gImgs = [
    { id: 1, url: 'imgs/1.jpg', keywords: ['politics', 'angry', 'people'] },
    { id: 2, url: 'imgs/2.jpg', keywords: ['animal', 'cute', 'happy'] },
    { id: 3, url: 'imgs/3.jpg', keywords: ['baby', 'cute', 'animal'] },
    { id: 4, url: 'imgs/4.jpg', keywords: ['animal', 'cute'] },
    { id: 5, url: 'imgs/5.jpg', keywords: ['baby', 'happy', 'funny'] },
    { id: 6, url: 'imgs/6.jpg', keywords: ['people', 'crazy'] },
    { id: 7, url: 'imgs/7.jpg', keywords: ['funny', 'baby', 'cute', 'happy'] },
    { id: 8, url: 'imgs/8.jpg', keywords: ['funny', 'people', 'crazy'] },
    { id: 9, url: 'imgs/9.jpg', keywords: ['funny', 'baby', 'cute', 'happy'] },
    { id: 10, url: 'imgs/10.jpg', keywords: ['politics', 'happy', 'people'] },
    { id: 11, url: 'imgs/11.jpg', keywords: ['akward', 'funny', 'people'] },
    { id: 12, url: 'imgs/12.jpg', keywords: ['people', 'crazy', 'sad', 'akward'] },
    { id: 13, url: 'imgs/13.jpg', keywords: ['people', 'happy'] },
    { id: 14, url: 'imgs/14.jpg', keywords: ['people', 'crazy', 'angry'] },
    { id: 15, url: 'imgs/15.jpg', keywords: ['crazy', 'people'] },
    { id: 16, url: 'imgs/16.jpg', keywords: ['funny', 'happy', 'people'] },
    { id: 17, url: 'imgs/17.jpg', keywords: ['politics', 'crazy', 'angry'] },
    { id: 18, url: 'imgs/18.jpg', keywords: ['funny', 'happy'] },
]
function goToGallery(ev) {
    if (ev) ev.preventDefault()
    hideEditor()
    showGallery()
}

function hideGallery() {
    document.querySelector('.gallery').classList.add('hidden')
    document.querySelector('.lower-header').classList.add('hidden')
}

function showGallery() {
    document.querySelector('.gallery').classList.remove('hidden')
    document.querySelector('.lower-header').classList.remove('hidden')
}
function setImg(id) {
    gMeme.selectedImgId = +id
    gMeme.lines =  [
        {
            txt: 'Enter text...',
            size: 30,
            color: 'white'
        }
    ]
}