'use strict'
function onInit() {
    renderGallery();

}





function renderGallery() {
    const imgs = getImgs()
    var strHtmls = `<div class="img-gallery" style="margin: auto;">
                      <input type="file" id="BtnUploadHidden" class="img-item file-input btn" name="image" onchange="onUploadImg(event)" style="display: none;"/>
                      <label for="BtnUploadHidden" class="btn-upload" data-trans="upload-img-text">Upload an image</label>
                    </div>`;
    strHtmls += imgs
      .map((img) => {
        return `<div class="img-gallery">
                  <img src="meme-imgs (square)/${img.url}" onclick="onImgSelect(${img.id})">
                </div>`;
      })
      .join('')
  
    const elGallery = document.querySelector('.images-container')
    elGallery.innerHTML = strHtmls
  }
  


  function onImgSelect(img){
    setImg(img)
    _moveToEditorPage()
    renderCanvas()
  }
  function _moveToEditorPage() {
    document.querySelector('.gallery-container').classList.add('none')
    document.querySelector('.editor-container').classList.remove('none')
  }
  