import simpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

galleryRef.innerHTML = createGalleryMarkupFromArray(galleryItems);

const lightbox = new simpleLightbox(".gallery a", {
  nav: true,
  showCounter: false,
  captionsData: "alt",
  captionDelay: 250,
});

function createGalleryMarkupFromArray(arr) {
  return arr
    .map((item) => {
      return `
    <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`;
    })
    .join("");
}

galleryRef.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  event.preventDefault();

  lightbox.open(event.target);
}
