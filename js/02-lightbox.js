import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');
const galleryRef = creategalleryRef(galleryItems);

gallery.innerHTML = galleryRef;

const galleryNew = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function creategalleryRef(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" 
          alt="${description}" />
        </a>`
    )
    .join('');
}
/*console.log(galleryItems);*/
