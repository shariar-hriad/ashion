document.addEventListener('DOMContentLoaded', function () {
  // searchbar toggle
  const searchButton = document.querySelector('#searchButton');
  const searchForm = document.querySelector('#searchForm');
  const overlay = document.querySelector('.overlay');

  searchButton.onclick = function () {
    searchForm.classList.toggle('active');
  };

  // mobile aside
  const mobileAside = document.getElementById('mobileAside');
  const menuButton = document.querySelector('.menuBtn');
  const closeButton = document.querySelector('.closeBtn');

  menuButton.onclick = function () {
    mobileAside.classList.add('showAsideMenu');
    overlay.classList.add('showOverlay');
  };

  closeButton.onclick = function () {
    mobileAside.classList.remove('showAsideMenu');
    overlay.classList.remove('showOverlay');
  };

  document.onclick = function (e) {
    if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
      searchForm.classList.remove('active');
    }
    if (!menuButton.contains(e.target) && !closeButton.contains(e.target)) {
      mobileAside.classList.remove('showAsideMenu');
      overlay.classList.remove('showOverlay');
    }
  };
});

// products
const productList = document.querySelector('#productList');

const products = [
  {
    id: 1,
    img: './assets/images/product-1.jpg',
    title: 'Buttons tweed blazer',
    price: 59.0,
    label: true,
    category: "women's",
  },
  {
    id: 2,
    img: './assets/images/product-2.jpg',
    title: 'Flowy striped skirt',
    price: '49.0',
    category: "men's",
  },
  {
    id: 3,
    img: './assets/images/product-3.jpg',
    title: 'Cotton T-Shirt',
    price: '59.0',
    category: "kid's",
  },
  {
    id: 4,
    img: './assets/images/product-4.jpg',
    title: 'Slim striped pocket shirt',
    price: '69.0',
    category: 'accessories',
  },
  {
    id: 5,
    img: './assets/images/product-5.jpg',
    title: 'Fit micro cordury shirt',
    price: '100.0',
    label: true,
    category: 'cosmetics',
  },
];

const menuItems = [
  'all',
  ...new Set(products.map((product) => product.category)),
];

// filter button
const filterButton = document.querySelector('#filterButton');
filterButton.innerHTML = menuItems
  .map((menu, index) => {
    return `<li key={${index}}><button>${menu}</button></li>`;
  })
  .join('');

productList.innerHTML = products
  .map((product) => {
    return `  <div class="col-sm-6 col-md-4 col-lg-3 mb-4" id="${product.id}">
    <div class="product__item">
      <div
        class="product__item_image set__bg"
        style="background: url(${product.img});">
         ${product.label ? `<p class="label new">new</p>` : ''}
        <ul class="hover__item">
          <li>
            <a href="">
              <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
            </a>
          </li>
          <li>
            <button>
              <i class="fa-solid fa-heart"></i>
            </button>
          </li>
          <li>
            <button>
              <i class="fa-solid fa-cart-arrow-down"></i>
            </button>
          </li>
        </ul>
      </div>
      <div class="product__item_details text-center">
        <h6>
          <a href="#">${product.title}</a>
        </h6>
        <p class="ratings">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </p>
        <p class="price">$ ${product.price}</p>
      </div>
    </div>
  </div>
            `;
  })
  .join('');

// banner carousel
$(document).ready(function () {
  $('.banner__slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  });
});
