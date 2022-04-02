/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/components/accordion.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/accordion.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.accordion = function (headActive = 'accordion-head--active', contentActive = 'accordion-content--active', paddings = 40) {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      let childClosed = this[i].querySelector('.toggle-icon-closed');
      let childOpened = this[i].querySelector('.toggle-icon-opened');
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(childClosed).toggleClass('fadeOut');
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(childClosed).toggleClass('fadeIn');
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(childOpened).toggleClass('fadeOut');
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(childOpened).toggleClass('fadeIn');
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).toggleClass(headActive);
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].nextElementSibling).toggleClass(contentActive);

      if (this[i].classList.contains(headActive)) {
        this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + "px";
      } else {
        this[i].nextElementSibling.style.maxHeight = "0px";
      }
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.accordion-head').accordion();

/***/ }),

/***/ "./src/js/lib/components/carousel.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/carousel.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.carousel = function () {
  for (let i = 0; i < this.length; i++) {
    const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
    const slides = this[i].querySelectorAll('.carousel-item');
    const slidesField = this[i].querySelector('.carousel-slides');
    const dots = this[i].querySelectorAll('.carousel-indicators li');
    slidesField.style.width = 100 * slides.length + '%';
    slides.forEach(slide => {
      slide.style.width = width;
    });
    let offset = 0;
    let slideIndex = 0;
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[data-slide="next"]')).click(e => {
      e.preventDefault();

      if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
        offset = 0;
      } else {
        offset += +width.replace(/\D/g, '');
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == slides.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }

      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex].classList.add('active');
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[data-slide="prev"]')).click(e => {
      e.preventDefault();

      if (offset == 0) {
        offset = +width.replace(/\D/g, '') * (slides.length - 1);
      } else {
        offset -= +width.replace(/\D/g, '');
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == 0) {
        slideIndex = slides.length - 1;
      } else {
        slideIndex--;
      }

      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex].classList.add('active');
    });
    const sliderId = this[i].getAttribute('id');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`#${sliderId} .carousel-indicators li`).click(e => {
      const slideTo = e.target.getAttribute('data-slide-to');
      slideIndex = slideTo;
      offset = +width.replace(/\D/g, '') * slideTo;
      slidesField.style.transform = `translateX(-${offset}px)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex].classList.add('active');
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.carousel').carousel();

/***/ }),

/***/ "./src/js/lib/components/drop.js":
/*!***************************************!*\
  !*** ./src/js/lib/components/drop.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 // $.prototype.drop = () => {

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.drop = function () {
  let shiftX, shiftY;
  let X0 = 0,
      Y0 = 0;
  let X1 = 0,
      Y1 = 0;
  let onmouseup = false;
  Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('#drag').on('mousedown', event => {
    onmouseup = true;
    var drag = document.getElementById('drag'); // shiftX = event.clientX;
    // shiftY = event.clientY;

    shiftX = event.pageX;
    shiftY = event.pageY;

    try {
      drag.style.position = 'relative';
      drag.style.cursor = 'move';
      drag.style.zIndex = 999;
    } catch (e) {
      onmouseup = false;
    }
  });
  Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('#drag').on('touchstart', function (event) {
    onmouseup = true;
    var drag = document.getElementById('drag');
    shiftX = event.touches[0].clientX;
    shiftY = event.touches[0].clientY; // shiftX = event.touches[0].pageX;
    // shiftY = event.touches[0].pageY;

    try {
      drag.style.position = 'relative';
      drag.style.cursor = 'move';
      drag.style.zIndex = 999;
    } catch (e) {
      onmouseup = false;
    }
  });

  function moveAt(X, Y) {
    X1 = X;
    Y1 = Y;
    let drag1 = document.getElementById('drag');
    drag1.style.transform = `translate(${X1}px, ${Y1}px) scale(3)`;
  }

  Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('#drag').on('mousemove', event => {
    if (onmouseup) {
      try {
        let X = event.pageX - shiftX + X0;
        let Y = event.pageY - shiftY + Y0;
        moveAt(X, Y);
      } catch (e) {}
    }
  });
  Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('#drag').on('touchmove', e => {
    if (onmouseup) {
      try {
        let X = e.touches[0].clientX - shiftX + X0;
        let Y = e.touches[0].clientY - shiftY + Y0;
        moveAt(X, Y);
      } catch (e) {}
    }
  });
  Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('#drag').on('mouseup', event => {
    onmouseup = false; // X0 = X1;
    // Y0 = Y1;

    X0 = 0;
    Y0 = 0;

    try {
      drag.style.cursor = 'auto';
      drag.style.transform = `translate(0px, 0px) scale(3)`;
    } catch (e) {}
  });
  Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('#drag').on('touchend', e => {
    onmouseup = false;
    X0 = X1;
    Y0 = Y1; // X0 = 0;
    // Y0 = 0;

    try {
      drag.style.cursor = 'auto';
      drag.style.transform = `translate(${X1}px, ${Y1}px) scale(3)`;
    } catch (e) {}
  }); // $('#drag').ondragstart = function() { //убрать курсор захваченной картинки
  //     // return false;
  // };

  Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('#drag').on('dragstart', e => {
    e.preventDefault(); // e.stopPropagation();
  });
}; // $('#drag').drop();

/***/ }),

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    // const id = this[i].getAttribute('id'); //вариант урока
    const id = this[i].getAttribute('id').replace(/(-?(\D+\.\D+)|(\D+))/, ''); //("drop:26.2_d5").replace выдает 26.2_d5
    // console.log(id);

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle-id="${id}"]`).fadeToggle(800);
    });
  }
};

/***/ }),

/***/ "./src/js/lib/components/observer.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/observer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const options = {
  rootMargin: '-10px'
}; // Создать наблюдателя

const observer = new IntersectionObserver(entries => {
  // перебор записей
  entries.forEach(entry => {
    console.log(entry.target.classList);
    let containerInner = entry.target.querySelectorAll('[data-animated]');

    if (entry.isIntersecting) {
      containerInner.forEach(function (item) {
        console.log(item);
        let setaDataAimated = item.dataset.animated; // console.log(setaDataAimated);

        item.classList.add('animated');
        item.classList.add(setaDataAimated);
      });
      return; // если класс добавлен, продолжать уже не надо
    }

    containerInner.forEach(function (item) {
      let setaDataAimated = item.dataset.animated;
      item.classList.remove('animated');
      item.classList.remove(setaDataAimated);
    });
  });
}, options); // Сообщить наблюдателю, какие элементы следует отслеживать

observer.observe(document.querySelector('.computer'));
observer.observe(document.querySelector('.pulse-box'));
observer.observe(document.querySelector('.volunteer-block'));
observer.observe(document.querySelector('.training')); // Приме записи:
// в html: 
// <div class="container-wholesale__container">
// 		<div class="container-inner" data-animated = "fadeInUp">
//</div>
// в js:
//observer.observe(document.querySelector('.container-wholesale__container'));

/***/ }),

/***/ "./src/js/lib/components/scrolling.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/scrolling.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.scrolling = function () {
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 400) {
      console.log('> 100 ', document.documentElement.scrollTop); //для тестирования

      this.addClass('fadeIn'); //стрелку показали

      this.removeClass('fadeOut'); //стрелку убрали
    } else {
      console.log('< 100 ', document.documentElement.scrollTop); //для тестирования

      this.addClass('fadeOut'); //стрелку убрали

      this.removeClass('fadeIn'); //стрелку показали
    }
  });
  let links = document.querySelectorAll('[href="#root"]'),
      speed = 0.1;
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      let widthTop = document.documentElement.scrollTop,
          hash = this.hash,
          //это #myHeader
      start = null;
      let toBlock = document.querySelector(hash).getBoundingClientRect().top;
      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        let progress = time - start,
            r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
        document.documentElement.scrollTo(0, r);

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });
}; //если это не гаджет 


if (Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.content').offsetWidth >= 414) {
  Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.pageup').scrolling();
}

/***/ }),

/***/ "./src/js/lib/components/sliders-animated.js":
/*!***************************************************!*\
  !*** ./src/js/lib/components/sliders-animated.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.slidersAnimated = function (slideIndex = 1) {
  const slides = '.sliders-animated-item';
  const prev = '.sliders-animated-prev';
  const next = '.sliders-animated-next';
  let idOne = true,
      idTime = 120;
  const items = document.querySelectorAll(slides);

  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = items.length;
    }

    items.forEach(item => {
      // item.classList.add("animated");
      item.classList.add("animated-0_2");
      item.style.display = "none";
      item.classList.remove('slideOutLeft');
      item.classList.remove('slideOutRight');
      item.classList.remove('slideInRight');
      item.classList.remove('slideInLeft');
      item.removeAttribute('id'); //remov 'visible-img'
    });

    if (idOne) {
      items[slideIndex - 1].style.display = 'block';
    }

    items[slideIndex - 1].setAttribute('id', 'visible-img');
    idOne = false;
  }

  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  try {
    const prevBtn = document.querySelector(prev),
          nextBtn = document.querySelector(next);
    prevBtn.addEventListener('click', e => {
      e.preventDefault();
      items[slideIndex - 1].classList.add('slideOutRight');
      setTimeout(function () {
        plusSlides(-1);
        items[slideIndex - 1].style.display = 'block';
        items[slideIndex - 1].classList.remove('slideInRight');
        items[slideIndex - 1].classList.add('slideInLeft');
      }, idTime); //задержка
    });
    nextBtn.addEventListener('click', e => {
      e.preventDefault();
      items[slideIndex - 1].classList.add('slideOutLeft');
      setTimeout(function () {
        plusSlides(1);
        items[slideIndex - 1].style.display = 'block';
        items[slideIndex - 1].classList.remove('slideInLeft');
        items[slideIndex - 1].classList.add('slideInRight');
      }, idTime); //задержка 
    });
  } catch (e) {
    console.log('err');
  }
}; // $('.sliders-animated').slidersAnimated();

/***/ }),

/***/ "./src/js/lib/components/sliders-info.js":
/*!***********************************************!*\
  !*** ./src/js/lib/components/sliders-info.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.sliders_info = function (slideIndex = 1) {
  const slides = '.sliders-animated-item';
  const prev = '.sliders-animated-prev';
  const next = '.sliders-animated-next'; // let slideIndex = 1;

  const items = document.querySelectorAll(slides);

  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = items.length;
    }

    items[slideIndex - 1].setAttribute('id', 'visible-img');
    let img = Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(items[slideIndex - 1]).html().split("/img/").pop().split("\"").shift();
    let link = Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(items[slideIndex - 1]).html().split(" <img src=\"").pop().split("\"").shift(); // console.log(img);
    // console.log(link);
    // $('.modal-dialog__footer_item p').html(img);

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal-dialog__footer_item').html(`<p>${img}</p>`);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal-dialog__heade_download a').removeAttribute('href');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal-dialog__heade_download a').removeAttribute('download');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal-dialog__heade_download a').setAttribute('href', link);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal-dialog__heade_download a').setAttribute('download', img); // $('.ico-download').setAttribute( 'href', img);

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.swiper-pagination-current').html(`${slideIndex} / ${items.length}`);
  }

  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  try {
    const prevBtn = document.querySelector(prev),
          nextBtn = document.querySelector(next);
    prevBtn.addEventListener('click', e => {
      e.preventDefault();
      plusSlides(-1);
    });
    nextBtn.addEventListener('click', e => {
      e.preventDefault();
      plusSlides(1);
    });
  } catch (e) {
    console.log('err');
  }
}; // $('.sliders-animated').sliders_info();

/***/ }),

/***/ "./src/js/lib/components/sliders-push.js":
/*!***********************************************!*\
  !*** ./src/js/lib/components/sliders-push.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.slidersPush = function (imageCarousel, imageCarouselItem, slide) {
  let position = 0;
  let widthImg;
  const items = document.querySelector(imageCarouselItem);
  const itemImg = document.querySelectorAll(slide);
  const widthRow = window.getComputedStyle(document.querySelector(imageCarousel)).width.split('.')[0].replace(/\D/g, ''); //(2000.99222px или 2000px) выдаст 2000
  // Begin расчет zoomStep

  const screenWidth = window.screen.width;

  if (screenWidth >= 1024) {
    widthImg = 273;
    itemImg.forEach(element => {
      element.children[0].style.width = '273px';
      element.children[0].style.height = '170px';
      element.style.margin = '0';
    });
  } else if (screenWidth >= 900 && screenWidth < 1024) {
    widthImg = 400;
    itemImg.forEach(element => {
      element.children[0].style.width = '400px';
      element.children[0].style.height = 'auto';
      element.style.margin = '0 10px';
    });
  } else if (screenWidth >= 767 && screenWidth < 900) {
    let deltaWidth = (900 - screenWidth) / 2;
    widthImg = 400 - deltaWidth;
    itemImg.forEach(element => {
      element.children[0].style.width = 400 - deltaWidth + 'px';
      element.children[0].style.height = 'auto';
      element.style.margin = '0';
    });
  } else if (screenWidth >= 480 && screenWidth < 767) {
    let deltaWidth = (screenWidth - 64 - 400) / 2;
    widthImg = 400 + deltaWidth + deltaWidth;
    itemImg.forEach(element => {
      element.children[0].style.width = '400px';
      element.children[0].style.height = 'auto';
      element.style.marginLeft = deltaWidth + 'px';
      element.style.marginRight = deltaWidth + 'px';
    });
  } else {
    //if (screenWidth < 480)
    let deltaWidth = 480 - screenWidth;
    widthImg = 400 - deltaWidth;
    itemImg.forEach(element => {
      element.children[0].style.width = 400 - deltaWidth + 'px';
      element.children[0].style.height = 'auto';
      element.style.margin = '0';
    });
  } // end расчет zoomStep
  //const widthCarousel = window.getComputedStyle(document.querySelector(imageCarouselItem)).width.split('.')[0].replace(/\D/g, '');//(2000.99222px или 2000px) выдаст 2000


  let widthCarousel = +(widthImg * itemImg.length);
  let quantityInWindow = Number((widthRow / widthImg).toFixed());
  let slideIndex = quantityInWindow;
  let movingByStep = Number(widthImg * 100 / widthCarousel);

  function showSlides(n) {
    if (n > itemImg.length) {
      slideIndex = quantityInWindow;
      position = -movingByStep;
    }

    if (n < quantityInWindow) {
      slideIndex = itemImg.length;
      position = movingByStep * (itemImg.length - (quantityInWindow - 1));
    }
  }

  function plusSlides(j) {
    if (j > 0) {
      items.classList.remove('slideOutLeft33per');
      showSlides(slideIndex += j);
      document.documentElement.style.setProperty('--my-start-per', position + '%');
      position += movingByStep;
      document.documentElement.style.setProperty('--my-end-per', position + '%');
      let value = getComputedStyle(document.documentElement).getPropertyValue('--my-start-per');
      value = getComputedStyle(document.documentElement).getPropertyValue('--my-end-per');
    } else if (j < 0) {
      items.classList.remove('slideOutRight33per');
      showSlides(slideIndex += j);
      document.documentElement.style.setProperty('--my-start-per', position + '%');
      position -= movingByStep;
      document.documentElement.style.setProperty('--my-end-per', position + '%');
      let value = getComputedStyle(document.documentElement).getPropertyValue('--my-start-per');
      value = getComputedStyle(document.documentElement).getPropertyValue('--my-end-per');
    } else {
      items.classList.remove('slideOutLeft33per');
      items.classList.remove('slideOutRight33per');
      showSlides(itemImg.length + 1);
      document.documentElement.style.setProperty('--my-start-per', position + '%');
      position += movingByStep;
      document.documentElement.style.setProperty('--my-end-per', position + '%');
      let value = getComputedStyle(document.documentElement).getPropertyValue('--my-start-per');
      value = getComputedStyle(document.documentElement).getPropertyValue('--my-end-per');
    }
  }

  plusSlides(0);

  try {
    const prevBtn = document.querySelector('.fa-angle-left'),
          nextBtn = document.querySelector('.fa-angle-right');
    prevBtn.addEventListener('click', () => {
      items.classList.remove('slideOutLeft33per');
      plusSlides(-1);
      items.classList.add('slideOutRight33per');
    });
    nextBtn.addEventListener('click', () => {
      items.classList.remove('slideOutRight33per');
      plusSlides(1);
      items.classList.add('slideOutLeft33per');
    });
  } catch (e) {}
}; // document.addEventListener("DOMContentLoaded", function(event)
// {
//     $('.image-carousel').slidersPush('.image-carousel', '.image-carousel-item', '.item-img'); 
//     window.onresize = function() {
//         resize_window();
//     };
// });
// function resize_window()
// {
//     $('.image-carousel').slidersPush('.image-carousel', '.image-carousel-item', '.item-img');
// }

/***/ }),

/***/ "./src/js/lib/components/sliders.js":
/*!******************************************!*\
  !*** ./src/js/lib/components/sliders.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.sliders = function (dir = 'horizontal', slides = '.sliders-item', prev = '.sliders-prev', next = '.sliders-next', paused = false) {
  let slideInNext = 'slideInLeft';
  let slideInPrev = 'slideInRight';
  let slideIndex = 1; // let  paused = false;

  const items = document.querySelectorAll(slides);

  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = items.length;
    }

    items.forEach(item => {
      item.classList.add("animated");
      item.style.display = "none";
    });
    items[slideIndex - 1].style.display = 'block';
  }

  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  try {
    if (dir === 'vertical') {
      slideInNext = 'slideInDown';
      slideInPrev = 'slideInUp';
    } else {
      slideInNext = 'slideInLeft';
      slideInPrev = 'slideInRight';
    }

    const prevBtn = document.querySelector(prev),
          nextBtn = document.querySelector(next);
    prevBtn.addEventListener('click', () => {
      plusSlides(-1);
      items[slideIndex - 1].classList.remove(slideInNext);
      items[slideIndex - 1].classList.add(slideInPrev); // items[slideIndex - 1].classList.remove(slideInPrev);
      // items[slideIndex - 1].classList.add(slideInNext);
    });
    nextBtn.addEventListener('click', () => {
      plusSlides(1);
      items[slideIndex - 1].classList.remove(slideInPrev);
      items[slideIndex - 1].classList.add(slideInNext); // items[slideIndex - 1].classList.remove(slideInNext);
      // items[slideIndex - 1].classList.add(slideInPrev);
    });
  } catch (e) {}

  function activateAnimation() {
    if (dir === 'vertical') {
      paused = setInterval(function () {
        plusSlides(1);
        items[slideIndex - 1].classList.add('slideInDown');
      }, 3000);
    } else {
      paused = setInterval(function () {
        plusSlides(1);
        items[slideIndex - 1].classList.remove('slideInLeft');
        items[slideIndex - 1].classList.add('slideInRight'); // items[slideIndex - 1].classList.add('hinge');
      }, 3000);
    }
  }

  if (paused) {
    activateAnimation();
  }

  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  items[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });
}; // $('.sliders').sliders('horizontal', '.sliders-item', ' ', ' ', true); // $.prototype.sliders = function(dir, slides, prev, next)
// $('.sliders').sliders('horizontal', '.sliders-item-mobile', ' ' , ' ' , true);

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const $ = function (selector) {
  return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
  if (!selector) {
    return this; // {}
  }

  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }

  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};

$.prototype.init.prototype = $.prototype;
window.$ = $;
/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_hendlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/hendlers */ "./src/js/lib/modules/hendlers.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/lib/modules/attributes.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/accordion */ "./src/js/lib/components/accordion.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/carousel */ "./src/js/lib/components/carousel.js");
/* harmony import */ var _components_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/scrolling */ "./src/js/lib/components/scrolling.js");
/* harmony import */ var _components_sliders_animated__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sliders-animated */ "./src/js/lib/components/sliders-animated.js");
/* harmony import */ var _components_sliders__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sliders */ "./src/js/lib/components/sliders.js");
/* harmony import */ var _components_sliders_info__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sliders-info */ "./src/js/lib/components/sliders-info.js");
/* harmony import */ var _components_sliders_push__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sliders-push */ "./src/js/lib/components/sliders-push.js");
/* harmony import */ var _components_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/drop */ "./src/js/lib/components/drop.js");
/* harmony import */ var _components_observer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/observer */ "./src/js/lib/components/observer.js");
/* harmony import */ var _components_observer__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_components_observer__WEBPACK_IMPORTED_MODULE_16__);

 //show, hide, toggle

 //addClass, removeClass, toggleClass

 // on, off, click

 //setAttribute, removeAttribute, toggleAttribute

 //html, eq, index, find, siblings

 //











/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/*
    $.prototype.html- 
    Метод для замены, полученной HTML 
    структуры внутри элемента. 
    Если контента передан, то заменяем контент, 
    если аргументов нет, то получаем контент
*/

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
};
/*
    $.prototype.eq -
    Получаем объект по номеру, 
    т.е. получаем один элемент как самостоятельный объект, 
    а не  элемент часть объекта
*/


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
  const swap = this[i];
  const objLength = Object.keys(this).length;

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = swap;
  this.length = 1;
  return this;
};
/*
    $.prototype.index-
    Получение номера элемента по порядку среди элементов
    у одного родителя
*/


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children]; // function findMyIndex (item) {
  //     return item == this[0];
  // };

  const findMyIndex = item => {
    return item == this[0];
  };

  return childs.findIndex(findMyIndex);
};
/*
    Найти элементы по селектору внутри уже найденных.
*/


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let numberOfItems = 0;
  let counter = 0;
  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);

    if (arr.length == 0) {
      continue;
    }

    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length;
  }

  this.length = numberOfItems;
  const objLength = Object.keys(this).length;

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].closest(selector);

    if (!this[i]) {
      //мое условие
      this[i] = 'classNull';
    }

    counter++;
  }

  const objLength = Object.keys(this).length;

  for (; counter < objLength; counter++) {
    delete this[counter];
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  let numberOfItems = 0;
  let counter = 0;
  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children;

    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) {
        continue;
      }

      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length - 1;
  }

  this.length = numberOfItems;
  const objLength = Object.keys(this).length;

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/attributes.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/attributes.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAttribute = function (attributeName, value) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].hasAttribute(attributeName)) {
      //можно не проверять, работает
      this[i].setAttribute(attributeName, value);
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttribute = function (attributeName) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute(attributeName)) {
      //можно не проверять, работает
      this[i].removeAttribute(attributeName);
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleAttribute = function (attributeName, value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute(attributeName)) {
      this[i].removeAttribute(attributeName);
    } else {
      this[i].setAttribute(attributeName, value);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.add(...classNames);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.remove(...classNames);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.toggle(classNames);
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = '';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = 'none';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (dur, display, fin) {
  //Д.З.4-8
  for (let i = 0; i < this.length; i++) {
    this.fadeInBody(dur, display, fin, i);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (dur, fin) {
  //Д.З.4-8
  for (let i = 0; i < this.length; i++) {
    this.fadeOutBody(dur, fin, i);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (dur, display, fin) {
  //Д.З.4-8
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === 'none') {
      this.fadeInBody(dur, display, fin, i);
    } else {
      this.fadeOutBody(dur, fin, i);
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeInBody = function (dur, display, fin, i) {
  //Д.З.4-8
  this[i].style.display = display || 'block';

  const _fadeIn = complection => {
    this[i].style.opacity = complection;
  };

  const ani = this.animateOverTime(dur, _fadeIn, fin);
  requestAnimationFrame(ani);
  return this[i];
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOutBody = function (dur, fin, i) {
  //Д.З.4-8
  const _fadeOut = complection => {
    this[i].style.opacity = 1 - complection;

    if (complection === 1) {
      this[i].style.display = 'none';
    }
  };

  const ani = this.animateOverTime(dur, _fadeOut, fin);
  requestAnimationFrame(ani);
  return this[i];
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (dur, cb, fin) {
  let timeStart;

  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }

    let timeElapsed = time - timeStart;
    let complection = Math.min(timeElapsed / dur, 1);
    cb(complection);

    if (timeElapsed < dur) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === 'function') {
        fin();
      }
    }
  }

  return _animateOverTime;
};

/***/ }),

/***/ "./src/js/lib/modules/hendlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/hendlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 // Реазизация
// $('.food-2 a').on('click',() => {
//     $('.modal-dialog').fadeIn(180);
// });
// $('button').on('click', function() {
//     $('div').eq(2).toggleClass('active');  
// });

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener('click', handler);
    } else {
      this[i].click();
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");



Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.elementor-custom-embed-play').on('click', () => {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.widget-video-item iframe').fadeOut(100); // $('.widget-video-item').html('<iframe width="1280" height="720" src="https://www.youtube.com/embed/XHOmBV4js_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.widget-video-item').html('<iframe width="1280" height="720" src="https://www.youtube.com/embed/XHOmBV4js_E?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map