import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');
const markup = cratePicturesGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', markup);


function cratePicturesGallery(arr) {
  return arr.map(({ preview, original, description }) =>
    `<li class="gallery_item">
    <a class="gallery__link" href="${original}">
    <img src="${preview}" alt="${description}" class="gallery__image"/>
    </a>
    </li>`
  ).join("");
}

let lightbox = new SimpleLightbox('.gallery a', {
  captions: 'true',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: '250',
});

console.log(galleryItems);
