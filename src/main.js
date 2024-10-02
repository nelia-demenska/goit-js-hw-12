import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('search-form');
const galleryElement = document.getElementById('gallery');
const loadMoreBtn = document.getElementById('load-more');
const loader = document.getElementById('loader');
let gallery = new SimpleLightbox('.gallery-item');
let query = '';
let page = 1;
let totalHits = 0;

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    query = e.target.elements.searchQuery.value.trim();
    page = 1;
    galleryElement.innerHTML = '';
    loadMoreBtn.classList.add('hidden');

    if (!query) {
        iziToast.warning({ message: 'Sorry, there are no images matching your search query. Please try again!' });
        return;
    }

    await searchImages();
});

loadMoreBtn.addEventListener('click', async () => {
    page += 1;
    await searchImages();
});

async function searchImages() {
    try {
        loader.classList.remove('hidden');
        const data = await fetchImages(query, page);
        totalHits = data.totalHits;

        if (data.hits.length === 0 && page === 1) {
            iziToast.error({ message: 'Sorry, there are no images matching your search query. Please try again!' });
            return;
        }

        renderImages(data.hits);

        gallery.refresh();

        if (totalHits > galleryElement.childElementCount) {
            loadMoreBtn.classList.remove('hidden');
        } else {
            loadMoreBtn.classList.add('hidden');
            iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
        }

        scrollPage();
    } catch (error) {
        iziToast.error({ message: error.message });
    } finally {
        loader.classList.add('hidden');
    }
}

function scrollPage() {
    const firstCard = galleryElement.firstElementChild;
    
    if (firstCard) {
        const { height: cardHeight } = firstCard.getBoundingClientRect();
        
        window.scrollBy({
            top: cardHeight * 2,
            behavior: 'smooth',
        });
    }
}

