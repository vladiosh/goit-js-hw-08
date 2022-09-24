// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

const galleryContainerRef = document.querySelector('.gallery');
const imageMarkup = createImageMarkup(galleryItems);

galleryContainerRef.insertAdjacentHTML('beforeend', imageMarkup);

function createImageMarkup(items) {
  return items
    .map(item => {
      return `
<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
  `;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
