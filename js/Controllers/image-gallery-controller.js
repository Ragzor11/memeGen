'use strict'
var gImgs = [
    { id: 1, url: '1.jpg', keywords: ['politics', 'angry', 'people'] },
    { id: 2, url: '2.jpg', keywords: ['animal', 'cute', 'happy'] },
    { id: 3, url: '3.jpg', keywords: ['baby', 'cute', 'animal'] },
    { id: 4, url: '4.jpg', keywords: ['animal', 'cute'] },
    { id: 5, url: '5.jpg', keywords: ['baby', 'happy', 'funny'] },
    { id: 6, url: '6.jpg', keywords: ['people', 'crazy'] },
    { id: 7, url: '7.jpg', keywords: ['funny', 'baby', 'cute', 'happy'] },
    { id: 8, url: '8.jpg', keywords: ['funny', 'people', 'crazy'] },
    { id: 9, url: '9.jpg', keywords: ['funny', 'baby', 'cute', 'happy'] },
    { id: 10, url: '10.jpg', keywords: ['politics', 'happy', 'people'] },
    { id: 11, url: '11.jpg', keywords: ['akward', 'funny', 'people'] },
    { id: 12, url: '12.jpg', keywords: ['people', 'crazy', 'sad', 'akward'] },
    { id: 13, url: '13.jpg', keywords: ['people', 'happy'] },
    { id: 14, url: '14.jpg', keywords: ['people', 'crazy', 'angry'] },
    { id: 15, url: '15.jpg', keywords: ['crazy', 'people'] },
    { id: 16, url: '16.jpg', keywords: ['funny', 'happy', 'people'] },
    { id: 17, url: '17.jpg', keywords: ['politics', 'crazy', 'angry'] },
    { id: 18, url: '18.jpg', keywords: ['funny', 'happy'] },
]
var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    selectedStickerIdx: 0,
    lines: [],
    stickers: [],
}
function getImgs() {
    return gImgs;

}