import SimpleLightbox from 'simplelightbox';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const elements = [];

galleryItems.forEach(element => {
  const linkGallery = document.createElement('a');
  linkGallery.classList.add('item');
  linkGallery.href = element.original;

  const imgGallery = document.createElement('img');
  imgGallery.classList.add('gallery__image');
  imgGallery.src = element.preview;
  imgGallery.alt = element.description;

  linkGallery.append(imgGallery);
  elements.push(linkGallery);
});
galleryRef.append(...elements);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
