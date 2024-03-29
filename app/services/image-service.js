import store from "../store.js"
import Image from "../models/image.js"

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 15000
});

// @ts-ignore
const imgApi2 = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/grantignotusbrees/",
  timeout: 15000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {

  constructor() {
    console.log("this.pullImage invoked");
    store.subscribe("allImages", this.imageSelector)
    this.pullImage()
  }

  addDjinn() {
    imgApi2.post("pokemon/", store.Djinn.tempObj).then(res => {
      console.log(res.data);

    }).catch(err => console.error(err))
  }

  addImage(ImageData) {
    let image = new Image(ImageData)
    store.commit("tempImage", image)
    imgApi2.post("heroes/", store.State.tempImage).then(res => {

    }).catch(err => console.error(err))
  }

  imageSelector() {
    let oneImageUrl = store.State.allImages[Math.floor(Math.random() * (store.State.allImages.length))]
    console.log(oneImageUrl);
    store.commit("bgImage", oneImageUrl)
  }

  pullImage() {
    imgApi2.get("heroes").then(res => {
      store.commit("allImages", res.data.data.map(rawImageData => rawImageData.img))
    }).catch(err => console.error(err))
  }

}

const imageService = new ImageService();
export default imageService;
