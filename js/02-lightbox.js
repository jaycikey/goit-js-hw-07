import { galleryItems } from "./gallery-items.js";

// Change code below this line

function createGalleryItem(item) {
  return `
        <li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img 
                    class="gallery__image"
                    src="${item.preview}"
                    alt="${item.description}"
                />
            </a>
        </li>
    `;
}

// Перебор массиву
const galleryItem = galleryItems.map((item) => createGalleryItem(item)).join("");;

// Додавання елементів галереї до DOM
const gallery = document.querySelector(".gallery");
gallery.innerHTML = galleryItem;

// Ініціалізація бібліотеки SimpleLightbox
const lightbox = new SimpleLightbox(".gallery__item a", {
  captionsData: "alt",
  captionDelay: 250,
});
