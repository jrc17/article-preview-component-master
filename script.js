"use strict";

const shareBtn = document.querySelector(".share-button");
const authorShare = document.querySelector(".author-share");
const author = document.querySelector(".author");
const share = document.querySelector(".share-social-links");

const mediaQuery = window.matchMedia("(min-width: 44rem)");

// when switching between the 2 versions put them in the initial state

mediaQuery.addEventListener("change", function (e) {
  share.classList.add("hidden");
  authorShare.classList.remove("share-social-link-dark");
  shareBtn.classList.remove("share-button-light");
  author.classList.remove("hidden");
});

// when clicked on the share button show the social links
shareBtn.addEventListener("click", function () {
  share.classList.toggle("hidden");
  if (!mediaQuery.matches) {
    // if it the mobile version
    authorShare.classList.toggle("share-social-link-dark");
    shareBtn.classList.toggle("share-button-light");
    author.classList.toggle("hidden");
  }
});
