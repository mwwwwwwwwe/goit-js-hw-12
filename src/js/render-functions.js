import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

// Инициализация лайтбокса
export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <a class="photo-card" href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          <div class="photo-info">
            <p><span>Likes:</span> ${likes}</p>
            <p><span>Views:</span> ${views}</p>
            <p><span>Comments:</span> ${comments}</p>
            <p><span>Downloads:</span> ${downloads}</p>
          </div>
        </a>
      `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh(); // обязательно!
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader?.classList.remove('is-hidden');
}

export function hideLoader() {
  loader?.classList.add('is-hidden');
}

export function showLoadMoreButton() {
  loadMoreBtn?.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn?.classList.add('is-hidden');
}

