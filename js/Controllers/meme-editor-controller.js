'use strict'
function getMeme() {
    return gMeme;
  }
  function getImg(meme) {
    return gImgs.find((img) => img.id === meme.selectedImgId);
  }