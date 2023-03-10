import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const markup = createImgMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', markup);

galleryContainer.addEventListener('click', (event) => {;

function imgClick (event){
    event.preventDefault();
    if(!event.target.nodeName !== "IMG"){ 
    return;
    }
 }
 console.log("target", event.target);
 console.log("currentTarget", event.currentTarget);

 const imageBigSize = event.target.getAttribute("data-source");

 const instance = basicLightbox.create(`<img src = "${imageBigSize}">`);

 instance.show();
});

function createImgMarkup (galleryItems){return galleryItems.map(({preview, original, description}) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" 
            title="$description" width="340">
            </img>
        </a> 
    </li>`;
}) .join("")
};





