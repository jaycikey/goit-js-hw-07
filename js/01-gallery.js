import { galleryItems } from "./gallery-items.js";
// Change code below this line

function createGalleryItem(item) {
  return `
    <li class="gallery_item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>
  `;
}

// Переберання массиву
const galleryItem = galleryItems
  .map((item) => createGalleryItem(item))
  .join("");

// Розгортання(spread) та додавання в DOM
const gallery = document.querySelector(".gallery");
gallery.innerHTML = galleryItem;

// Додаємо слухач подій на галерею
gallery.addEventListener("click", (event) => {
  event.preventDefault();

  const target = event.target;
  const isImage = target.nodeName === "IMG";

  if (!isImage) {
    return;
  }

  const largeImageLink = target.dataset.source;
  const imgAlt = target.alt;

  function closeModal() {
    instance.close();
    window.removeEventListener("keydown", onKeyPress);
    window.removeEventListener("click", onOverlayClick);
  }

  function onKeyPress(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }

  function onOverlayClick(event) {
    if (event.target.className.includes("basicLightbox")) {
      closeModal();
    }
  }

  const instance = basicLightbox.create(`
    <img src="${largeImageLink}" alt="${imgAlt}" />
  `);

  instance.show();
  window.addEventListener("keydown", onKeyPress);
  window.addEventListener("click", onOverlayClick);
});
