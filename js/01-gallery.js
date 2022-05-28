import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const wrapGallaryEl = document.querySelector(".gallery");

const allGallaryItems = galleryItems.map((el) => {
  const gallerylist = document.createElement("div");
  gallerylist.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = el.original;
  const gallaryImage = document.createElement("img");
  gallaryImage.src = el.preview;
  gallaryImage.alt = el.description;
  gallaryImage.setAttribute("data-source", `${el.original}`);
  gallaryImage.classList.add("gallery__image");
  galleryLink.append(gallaryImage);
  gallerylist.append(galleryLink);
  return gallerylist;
});
wrapGallaryEl.append(...allGallaryItems);
console.log(wrapGallaryEl);
function toOpenModalImage(event) {
    event.preventDefault();
    const gallaryImg = event.target;
  
    if (!gallaryImg.classList.contains("gallery__image")) {
      return;
    }
  const showLightBox = basicLightbox.create(`<img src="${gallaryImg.dataset.source}">`,
    {
      onShow: (showLightBox) => window.addEventListener("keydown", closeEscape),
      onClose: (showLightBox) => window.removeEventListener("keydown", closeEscape),
    });
  showLightBox.show();
  function closeEscape(event) {
    if (event.code !== 'Escape') {
    return;
  }
  showLightBox.close();
  }
}
wrapGallaryEl.addEventListener("click", toOpenModalImage);

  