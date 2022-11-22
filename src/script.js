"use strict";
const shareBtn = document.querySelector("#share-btn");
const modalWindow = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");
const shareLink = document.querySelector("#share-link");

shareBtn.addEventListener("click", () => {
  modalWindow.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});
overlay.addEventListener("click", () => {
  modalWindow.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});
