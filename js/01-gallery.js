import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryRef = creategalleryRef(galleryItems);

gallery.innerHTML = galleryRef;

gallery.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') return;

  const url = getUrl(e.target);

  openPicture(url);
}

function creategalleryRef(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
    )
    .join('');
}

function getUrl(elem) {
  return elem.dataset.source;
}

function openPicture(url) {
  const picture = basicLightbox.create(`<img src="${url}">`, {
    onShow: () => document.addEventListener('keydown', modalCloseWithEsc),
    onClose: () => document.removeEventListener('keydown', modalCloseWithEsc),
  });
  picture.show();
  document.openedModal = picture;
}

function modalCloseWithEsc(e) {
  if (e.code === 'Escape') {
    document.openedModal.close();
    delete document.openedModal;
  }
}
