export function renderImages(images) {
const gallery = document.getElementById('gallery');
const markup = images.map(image => `
    <a href="${image.largeImageURL}" class="gallery-item">
        <div class="wrapper">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        </div>
        <ul class="info">
            <li>Likes: ${image.likes}</li>
            <li>Views: ${image.views}</li>
            <li>Comments: ${image.comments}</li>
            <li>Downloads: ${image.downloads}</li>
        </ul>
    </a>
`).join('');

gallery.insertAdjacentHTML('beforeend', markup);
}