import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
const markup = galleryItems
.map(({preview, original, description}) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" title="$description"/>
        </a> 
    </li>`;
}) .join("");

galleryContainer.innerHTML = markup;
let lightbox = new SimpleLightbox(".gallery a", {captionDelay:250,}, {captionsData: "alt",});

const imgClick = (e) =>{
if(e.target.nodeName !== 'IMG') {
 }
}
galleryContainer.addEventListener("click", imgClick);
