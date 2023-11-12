import { galleryItems } from "./gallery-items.js";

// Change code below this line

function createGalleryItem(item) {
  // Створення елемента списку
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  // Створення линки
  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  // Створення картинки
  const galleryImg = document.createElement("img");
  galleryImg.classList.add("gallery__image");
  galleryImg.src = item.preview;
  galleryImg.alt = item.description;

  // Огортаємо
  galleryItem.appendChild(galleryLink);
  galleryLink.appendChild(galleryImg);

  return galleryItem;
}

// Перебор массиву
const galleryItem = galleryItems.map((item) => createGalleryItem(item));

// Додавання елементів галереї до DOM
const gallery = document.querySelector(".gallery");
gallery.append(...galleryItem);

// Ініціалізація бібліотеки SimpleLightbox
let lightbox = new SimpleLightbox(".gallery__item a", {
    captionsData: "alt",
    captionDelay: 250,
});

