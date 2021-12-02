// Cites
const jsChoiceBtn = document.querySelector('.js__choice'),
      jsChoiceYesBtn = document.querySelector('.js__choice-yes'),
      jsChoiceNoBtn = document.querySelector('.js__choice-no'),
      headerTopChoiceQuestion = document.querySelector('.js--header__top-choice-question'),
      jsHeaderTopCities = document.querySelector('.js--header__top-cities'),
      jsSelectItem = document.querySelectorAll('.js--select-item'),
      jsChoiceText = document.querySelector('.js__choice-text'),
      bascetInfoText = document.querySelector('.bascet__info-order-form-text-cites'),
      header = document.querySelector('.header'),
      pageBascet = document.querySelector('.page-bascet');

if (header) {

  jsChoiceBtn.addEventListener('click', function() {
    headerTopChoiceQuestion.classList.add('header__top-choice-question-active');
  });
  
  setTimeout(function() {
    headerTopChoiceQuestion.classList.add('header__top-choice-question-active');
  }, 3000);
  
  jsChoiceYesBtn.addEventListener('click', function(e) {
    e.preventDefault();
    headerTopChoiceQuestion.classList.remove('header__top-choice-question-active');
  });
  
  jsChoiceNoBtn.addEventListener('click', function(e) {
    e.preventDefault();
  
    if (!jsHeaderTopCities.classList.contains('active')) {
      jsHeaderTopCities.classList.add('active');
      headerTopChoiceQuestion.classList.remove('header__top-choice-question-active');
    } 
  
  });

  jsSelectItem.forEach(elem => {
      
    if (elem) {
      elem.addEventListener('click', function(event) {
        let textSites = event.target;
        if (event) {
          jsChoiceText.innerHTML = textSites.innerHTML;
          bascetInfoText.innerHTML = textSites.innerHTML;
          jsHeaderTopCities.classList.remove('active');
        };
      });
    }

  });

}

// Burger
const headerMenu = document.querySelector('.js-header__menu');
const headerMenuBurger = document.querySelector('.js-header__menu-burger');
const headerMenuBurgerBtn = document.querySelector('.js-header__menu-burger-btn');

headerMenuBurger.addEventListener('click', function() {
  if (headerMenu.classList.contains('header__menu-active') || (headerMenuBurgerBtn.classList.contains('header__menu-burger-btn-active'))) {
    headerMenu.classList.remove('header__menu-active');
    headerMenuBurgerBtn.classList.remove('header__menu-burger-btn-active');
  } else {
    headerMenu.classList.add('header__menu-active');
    headerMenuBurgerBtn.classList.add('header__menu-burger-btn-active');
  }
})

// Menu filter drop
const menuLinkFilter = document.querySelector('.js-menu-link-filter'),
      deliveryMenuDop = document.querySelector('.js-delivery__menu-dop')
      deliveryMenuItemDrop = document.querySelector('.js-delivery__menu-item-drop');

    if (document.querySelector('.delivery__menu')) {
      menuLinkFilter.addEventListener('click', function(e) {
        e.preventDefault();
      
        if (this.classList.contains('active')) {
          this.classList.remove('active');
          deliveryMenuDop.style.display = 'none';
          this.style.color = '#000';
          deliveryMenuItemDrop.style.border = '1px solid #eaeaea';
        } else {
          this.classList.add('active');
          deliveryMenuDop.style.display = 'block';
          this.style.color = '#fa5523';
          deliveryMenuItemDrop.style.border = '1px solid #fa5523';
        }
        
      })
    }



// Tabs
let productTabs = document.querySelectorAll('.product__item');
const tabsMenu = document.querySelectorAll('.delivery__menu-item');
const productBtnShow = document.querySelector('.delivery__search-btn');

  for (let i = 0; i < tabsMenu.length; i++) {

    tabsMenu[i].addEventListener('click', function(e) {

      let tabsMenuClick = e.target.dataset.menu;

      for (let y = 0; y < productTabs.length; y++) {

        productTabs[y].classList.remove('active');
        
        if (tabsMenuClick === productTabs[y].dataset.product) {
          productTabs[y].classList.add('active');
        } 

      }
    })
    
}

const tabs = function() {
  for (const item of tabsMenu) {
    item.addEventListener('click', function() {
      for (const elem of tabsMenu) {
        elem.classList.remove('active');
      }
      item.classList.add('active');
    })
  }
}

tabs();

if (document.querySelector('.product')) {
  const btn = function() {
    productBtnShow.addEventListener('click', function(e) {
      e.preventDefault();
      productTabs.forEach(element => {
        document.querySelector('.product__wrap').style.justifyContent = 'space-between';
        element.style.display = 'flex';
      });
    })
  }
  
  btn();
}





// Swiper intro__slider
var mySwiper = new Swiper('.swiper-container.intro__wrap', {

  // loop: 'true',
  spaceBetween: 21,
  autoHeight: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // autoplay: {
  //   delay: 2000,
  // },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  breakpoints: {
    1400: {
      slidesPerView: 6,
      spaceBetween: 21,
    },
    992: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 4,
    },
    670: {
      slidesPerView: 3,
    },
    458: {
      slidesPerView: 2,
    },
    425: {
      slidesPerView: 2,
    },
    370: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  }

})



var mySwiper = new Swiper('.swiper-container.popular__wrap', {

  loop: true,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1400: {
      slidesPerView: 4,
      // spaceBetween: 54,
    },
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    670: {
      slidesPerView: 2,
    },
    458: {
      slidesPerView: 1,
    },
    425: {
      slidesPerView: 1,
    },
  }

});

// Maps
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [55.751574, 37.573856],
          zoom: 9
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Наш офис'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '../img/icon/icon-mark.png',
          // Размеры метки.
          iconImageSize: [30, 42],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      })

  myMap.geoObjects
      .add(myPlacemark);
});

// Переключение "ТАБЫ" карты
const JsPaymentMapsListItem = document.querySelectorAll('.payment__maps-list-item');
const jsPaymentMaps = document.querySelectorAll('.js--payment__maps');
const jsPaymentMapsBtn = document.querySelectorAll('.js--payment__maps-btn');
const jsPaymentMapsPonorama = document.querySelector('.js--payment__maps-ponorama');

const JsPaymentListBtn = function() {
  for (const JsPaymentMapsListItems of JsPaymentMapsListItem) {
    JsPaymentMapsListItems.addEventListener('click', function() {
      for (const JsPaymentMapsListItemss of JsPaymentMapsListItem) {
        JsPaymentMapsListItemss.classList.remove('active');
      }
        JsPaymentMapsListItems.classList.add('active');
    })
  }
};
JsPaymentListBtn();

  for (let i = 0; i < JsPaymentMapsListItem.length; i++) {
    JsPaymentMapsListItem[i].addEventListener('click', function(item) {
      let datDbt = item.target.dataset.tab;
      for (let y = 0; y < jsPaymentMaps.length; y++) {
        jsPaymentMaps[y].classList.remove('active');
        document.querySelector('.payment__maps-btn-wrap').style.display = 'flex';
        jsPaymentMapsPonorama.style.display = 'none';
        if (datDbt == jsPaymentMaps[y].dataset.title) {
          jsPaymentMaps[y].classList.add('active');
          document.querySelector('.payment__maps-btn-wrap').style.display = 'none';
        }
      }
    });
  };

const JsPaymentBtn = function() {
  for (const elem of jsPaymentMapsBtn) {
    elem.addEventListener('click', function(e) {
      e.preventDefault();

      for (const item of jsPaymentMapsBtn) {
        item.classList.remove('active');
        jsPaymentMapsPonorama.style.display = "flex";
      }
      elem.classList.add('active');
    })
  }
};

JsPaymentBtn();

for (let i = 0; i < jsPaymentMapsBtn.length; i++) {
  const element = jsPaymentMapsBtn[i];
  element.addEventListener('click', function(item) {
    let itemBtn = item.target.dataset.btn;
    item.preventDefault();
    for (let y = 0; y < jsPaymentMaps.length; y++) {
      if (itemBtn == jsPaymentMaps[0].dataset.title) {
        jsPaymentMaps[0].classList.add('active');
        jsPaymentMapsPonorama.style.display = 'none';
      }
    }
  });
};

// Modal Bascet & Favourites
const jsHeaderBascetModal = document.querySelector('.js--header__bascet-modal');
const jsPageBascet = document.querySelector('.js--page-bascet');
const jsPageBascetClose = document.querySelectorAll('.page-bascet-close');
const favouritesModal = document.querySelector('.favourites');


jsHeaderBascetModal.addEventListener('click', function(e) {
  e.preventDefault();

  if (jsPageBascet.classList.contains('active')) {
    jsPageBascet.classList.remove('active');
  }
  else {
    jsPageBascet.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
})

jsPageBascetClose.forEach(element => {
  element.addEventListener('click', function(e) {
    jsPageBascet.classList.remove('active');
    favouritesModal.classList.remove('active');
    document.body.style.overflow = 'inherit';
  })
});




// favourites
const producIconLikeBtn = document.querySelectorAll('.product__icon-like');
const favouritesList = document.querySelector('.favourites__list');
const likeShow = document.querySelector('.like');
const headerTopChoiceTextFavorites = document.querySelector('.header__top-choice-text-favorites');

let randomId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// Моделтное окно Favourites
headerTopChoiceTextFavorites.addEventListener('click', function(e) {
  e.preventDefault();

  if (favouritesModal.classList.contains('active')) {
    favouritesModal.classList.remove('active');
  }
  else {
    favouritesModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
})

// Добовляю цвет к иконки Like, появляется надпись, продукт в избранном
function productBtnLike() {
  producIconLikeBtn.forEach(elem => {
    elem.addEventListener('click', (e) => {
        e.target.classList.add('active');
        likeShow.classList.add('active');
        setTimeout(likeModalHide, 1500);
    })
  })
}
productBtnLike();

// Ф-ия удаляет надпись добовления продукта в избранное 
function likeModalHide() {
  likeShow.classList.remove('active');
}

// Добовляю продукт в избранное
producIconLikeBtn.forEach(elem => {

  elem.closest('.product__item').setAttribute('data-id', randomId());

  elem.addEventListener('click', (e) => {

    let targetBtn = e.target.closest('.product__item');
    let id = targetBtn.dataset.id;
    let img = targetBtn.querySelector('.product__img-foto').getAttribute('src');
    let title = targetBtn.querySelector('.product__title').innerText;
    let cena = targetBtn.querySelector('.product__info-cena').innerText;

    const favouritesProduct = `
      <li class="favourites__item">
        <div class="favourites__row" data-id="${id}">
          <div class="favourites__img">
            <img class="favourites__img-foto" src="${img}" alt="Курица гриль">
          </div>
          <div class="favourites__content">
            <div class="favourites__content-title">${title}</div>
            <div class="favourites__content-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </div>
          </div>
          <div class="favourites__info">
            <div class="favourites__info-cena">${cena}</div>
            <button class="favourites__info-btn product__info-btn btn">Выбрать</button>
          </div>
          <div class="favourites__icon-wrap">
            <div class="favourites__icon-item">
              <svg class="favourites__icon" width="12" height="15" viewBox="0 0 12 15" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.91257 14.2126H7.23757V4.91257H4.91257V14.2126ZM9.56257 14.2126H11.8876V0.262573H9.56257V14.2126ZM0.262573 14.2126H2.58757V9.56257H0.262573V14.2126Z"/>
              </svg>
            </div>
          </div>
        </div>
      </li>
    `

    favouritesList.insertAdjacentHTML('afterbegin', favouritesProduct);
  })
})




// Bascet
const productBtn = document.querySelectorAll('.product__info-btn');
const bascetListProductList = document.querySelector('.bascet__info-list');
const countBaset = document.querySelector('.header__info-cart-counter');
const countBascetOrder = document.querySelector('.bascet__info-order-form-text-count');
const cenaTotal = document.querySelector('.bascet__info-order-form-total-cena');
let totalPrice = 0;

// Считаем цену плюс
// const plusPrice = (currentPrice) => {
//   totalPrice += currentPrice;
// }

// Считаем цену минус
// const minusPrice = (currentPrice) => {
//   totalPrice -= currentPrice;
// }

// Записываем итоговую сумму
// const printFullPrice = () => {
//   cena.textContent = `${totalPrice} ₽`;
// }

// Сколко кол-во продуктов
const printQuatntity = () => {
  let lenghtBascet = bascetListProductList.children.length -1;
  countBaset.textContent = lenghtBascet;
  countBascetOrder.innerHTML = lenghtBascet;
}

if (favouritesList) {
// Шаблон продукта в корзине
const productTask = (img, title, cenaBascet, id) => {
  return `
  <li class="bascet__info-item">
    <div class="bascet__info-product-content bascet__info-content" data-id="${id}">
      <div class="bascet__info-content-item">
        <div class="bascet__info-content-wrap">
          <div class="bascet__info-content-img">
            <img class="product__img-foto" src="${img}" alt="Продукт">
          </div>
          <div class="bascet__info-content-header">
            <div class="bascet__info-content-header-title">${title}</div>
            <div class="bascet__info-content-header-text">Без изменений</div>
          </div>
        </div>
      </div>
      <div class="bascet__info-content-quantity">
        <button class="bascet__info-content-quantity-btn bascet__info-content-quantity-btn-minus">-</button>
        <span class="bascet__info-content-text bascet__info-content-quantity-text" data-counter="1">1</span>
        <button class="bascet__info-content-quantity-btn bascet__info-content-quantity-btn-plus">+</button>
      </div>
      <div class="bascet__info-content-cost">
        <div class="bascet__info-content-text bascet__info-content-cost-text">Цена</div>
      </div>
      <div class="bascet__info-content-total">
        <div class="bascet__info-content-text bascet__info-content-total-text">${cenaBascet} ₽</div>
        <span class="bascet__info-content-close" title="Удалить">Х</span>
      </div>
    </div>
  </li>
  `
}

// Добавление продукта в корзину
productBtn.forEach(element => {

  // element.closest('.product__item').setAttribute('data-id', randomId());

  element.addEventListener('click', function(e) {
    let productItem = e.target.closest('.product__item');
    let id = productItem.dataset.id;
    let img = productItem.querySelector('.product__img-foto').getAttribute('src');
    let title = productItem.querySelector('.product__title').innerText;
    let cenaBascet = parseInt(productItem.querySelector('.product__info-cena').innerText); 
    
    bascetListProductList.insertAdjacentHTML('afterbegin', productTask(img, title, cenaBascet, id)); 
    totalPrice += cenaBascet;
    cenaTotal.textContent = `${totalPrice} ₽`;
    // plusPrice(cenaBascet);
    // printFullPrice();
    printQuatntity();
    bascetProduct();

      // Изменение стилей при нажатие на кнопку ВЫБРАТЬ
      e.target.innerText = 'В корзине';
      e.target.setAttribute('disabled', 1);
      e.target.style.backgroundColor = '#e5e5e5';
      e.target.style.pointerEvents = "none";
    
  })
});
}



// Удаляем из корзины продукты
const deleteProduct = (productParent) => {
  let id = productParent.querySelector('.bascet__info-content').dataset.id;
  let textBtn = document.querySelector(`.product__item[data-id="${id}"]`).querySelector('.product__info-btn');
  let minusPriseText = parseInt(productParent.querySelector('.bascet__info-content-total-text').innerText);

  totalPrice -= minusPriseText;
  cenaTotal.textContent = `${totalPrice} ₽`;
  // minusPrice(minusPriseText);
  // printFullPrice();
  productParent.remove();
  bascetProduct();
  printQuatntity();

  // Изменение стилей на кнопке В КОРЗИНЕ при удаление продукта 
  textBtn.innerText = 'Выбрать';
  textBtn.removeAttribute('disabled', 1);
  textBtn.style.backgroundColor = '';
  textBtn.style.pointerEvents = "";
}

bascetListProductList.addEventListener('click', function(e) {
  if (e.target.classList.contains('bascet__info-content-close')) {
    // Функция ищет продукт и удаляет
    deleteProduct(e.target.closest('.bascet__info-item'));
  }
  // Функция увиличивает продукт
  if (e.target.classList.contains('bascet__info-content-quantity-btn-plus')) {
    productPlus(e.target.closest('.bascet__info-item'));
  }
  // Функция уменьшает продукт
  if (e.target.classList.contains('bascet__info-content-quantity-btn-minus')) {
    productMinus(e.target.closest('.bascet__info-item'));
  }
})

// При нажатие "+" увеличивается продукт на один
function productPlus(index) {
  let plus = index.querySelector('.bascet__info-content-quantity-btn-plus');
  let text = index.querySelector('.bascet__info-content-quantity-text');
  plus = ++text.innerText;

  // let counterText = index.querySelector('.bascet__info-content-quantity-text').innerText;
  // let count = parseInt(index.querySelector('.bascet__info-content-quantity-text').innerText);
  // let doc = parseInt(index.querySelector('.bascet__info-content-total-text').innerText);
  // tottal = doc + doc;
  // index.querySelector('.bascet__info-content-total-text').textContent = tottal;
  // console.log(tottal);
  // totalPrice.textContent = total;
  // index.querySelector('.bascet__info-content-total-text').textContent = `${totalPrice} ₽`;
  // cenaTotal.textContent = `${totalPrice} ₽`
  // let cenaProduct = index.querySelector('.bascet__info-content-total-text').innerText;
  // let tottal = parseInt(plus) * parseInt(cenaProduct);
  // console.log(typeof(tottal));
  // document.querySelector('.bascet__info-content-total-text').textContent =+ tottal;
  // totalPrice = tottal;
  // cenaTotal.textContent = `${totalPrice} ₽`;
}

// При нажатие "-" уменьшиется продукт на один
function productMinus(index) {
  let minus = index.querySelector('.bascet__info-content-quantity-btn-minus');
  let text = index.querySelector('.bascet__info-content-quantity-text');
  

  if (text.innerText > 1) {
    minus = parseInt(--text.innerText);

    // let counterText = index.querySelector('.bascet__info-content-quantity-text').innerText;
    // let cenaProduct = index.querySelector('.bascet__info-content-total-text').innerText;
    
    // let tottal = parseInt(minus) * parseInt(cenaProduct);

    // totalPrice -= tottal;

    // cenaTotal.textContent = `${tottal} ₽`;

    // printFullPrice();
  }
}

// Показываем пустая корзина ДА или НЕТ
const bascetProduct = () => {
  if (bascetListProductList.children.length > 1) {
    document.querySelector('.empty').style.display = 'none';
    document.querySelector('.bascet__info-order').style.display = 'flex';
  } else {
    document.querySelector('.empty').style.display = 'block';
    document.querySelector('.bascet__info-order').style.display = 'none';
  }

}






