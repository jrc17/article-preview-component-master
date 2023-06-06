# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

Article preview component built using HTML, CSS and JavaScript

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Links

- Solution URL: [Github](https://github.com/jrc17/article-preview-component-master)
- Live Site URL: [Website](https://your-live-site-url.com)

## My process

### Built with

- HTML5
- CSS
- Flexbox
- CSS Grid
- JavaScript
- Mobile-first workflow

### What I learned

How to use media queries in JS

```js
const mediaQuery = window.matchMedia("(min-width: 44rem)");

// when switching between the 2 versions of screen size put them in the initial state

mediaQuery.addEventListener("change", function (e) {
  share.classList.add("hidden");
  author.classList.remove("clicked");
  arrow.classList.remove("clicked-arrow");
  authorDate.classList.remove("hidden");
});
```

### Useful resources

- [CSS tricks](https://css-tricks.com/working-with-javascript-media-queries/) - This helped me know about javascript media queries.

## Author

- Frontend Mentor - [@jrc17](https://www.frontendmentor.io/profile/jrc17)
