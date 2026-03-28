import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
export const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {});

function itemTemplate(image) {
  return `<li class="gallery-item">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}">
      </a>
      <ul class="stats">
        <li class="stats-item"><p class="stat-title">likes</p><p class="stat-value">${image.likes}</p></li>
        <li class="stats-item"><p class="stat-title">views</p><p class="stat-value">${image.views}</p></li>
        <li class="stats-item"><p class="stat-title">comments</p><p class="stat-value">${image.comments}</p></li>
        <li class="stats-item"><p class="stat-title">downloads</p><p class="stat-value">${image.downloads}</p></li>
      </ul>
    </li>`;
}

export function createGallery(images) {
  const result = images.map(itemTemplate).join('');
  gallery.insertAdjacentHTML('beforeend', result);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}

export function showLoadMoreButton() {
  loadMoreBtn.style.display = 'block';
}

export function hideLoadMoreButton() {
  loadMoreBtn.style.display = 'none';
}
