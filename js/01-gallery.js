import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function createGalleyItem(item) {
  // Створеня єлементу списку для картинки
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery_item");

  // Створення линки для картинки
  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  // Створення картинки
  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = item.preview;
  galleryImage.setAttribute("data-source", item.original);
  galleryImage.alt = item.description;

  // Огортаємо
  galleryItem.appendChild(galleryLink);
  galleryLink.appendChild(galleryImage);

  return galleryItem;
}

// Переберання массиву
const galleryItem = galleryItems.map((item) => createGalleyItem(item));

// Розгортання(spread) та додавання в DOM
gallery.append(...galleryItem);

// Слухач на ul
gallery.addEventListener("click", (event) => {
  // Вимикання дефолтної події
  event.preventDefault();

  // Отримання лінки на велике зображення та опису
  const largeImageLink = event.target.dataset.source;
  const imgAlt = event.target.alt;

  // Обробка кліка тільки по картинці
  if (event.target.nodeName !== "IMG") {
    return;
  }

  // Відкриття модального вікна
  const instance = basicLightbox.create(`
  <img src="${largeImageLink}" alt = "${imgAlt}" />
  `);

  instance.show();

  // Закриття модального вікна клавішею Esc
  window.addEventListener("keydown", (event) => {
    if(event.key === "Escape"){
        instance.close();
    }
  });
});
