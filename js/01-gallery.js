import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const wrapGallaryEl = document.querySelector(".gallery")
const gallerylist = document.createElement("div");
gallerylist.classList.add("gallery__item");

galleryItems.map((el) => {
    const galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__link");
    // galleryLink.href = el.original;
    const gallaryImage = document.createElement("img");
    gallaryImage.src = el.preview;
    gallaryImage.alt = el.description;
    gallaryImage.setAttribute("data-source", `${el.original}`);
    gallaryImage.classList.add("gallery__image");
    galleryLink.append(gallaryImage);
    gallerylist.append(galleryLink);
}
);
wrapGallaryEl.append(gallerylist);


wrapGallaryEl.addEventListener("click", toOpenModalImage);

function toOpenModalImage(event)  {
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }
    const instance = basicLightbox.create(`
        ${event.target}
`);
    console.log(event.target);   
    instance.show();
};
wrapGallaryEl.addEventListener("click", toOpenModalImage);











// console.log(gallerylist);
// const instance = basicLightbox.create(`
//     <img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg" width="1280" height="auto">
// `);

// instance.show()