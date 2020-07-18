import _imageService from "../services/image-service.js";
import _store from "../store.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

function _drawImage() {
  console.log("_drawImage ran");
  console.log(_store.State.bgImage);
  document.body.style.backgroundImage = `url(${_store.State.bgImage})`
  document.getElementById("bg-image").classList.add("bg-overlay")
  setTimeout(function () { document.getElementById("loader").classList.add("hidden") }, 1200);
}

export default class ImageController {
  constructor() {
    console.log("_drawImage subscribed to bgImage");
    _store.subscribe("bgImage", _drawImage)

  }
  addImage(event) {
    event.preventDefault()
    let formData = event.target
    let rawImageData = {
      img: formData.url.value,
      name: formData.name.value,
      description: formData.desc.value,
      user: "grantignotusbrees"
    }
    _imageService.addImage(rawImageData)
    formData.reset()
  }
}
