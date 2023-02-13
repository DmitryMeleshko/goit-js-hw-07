import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");

const cardsMarkup = createCardsMarkup(galleryItems);

galleryBox.insertAdjacentHTML("beforeend", cardsMarkup);

galleryBox.addEventListener("click", (event) => {
  event.preventDefault();
});

function createCardsMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class = "gallery__link" href = "${original}">
      <img class = "gallery__image" src = "${preview}" 
       alt = "${description}"></a>`
    )
    .join("");

    console.log('.gallery');
}
