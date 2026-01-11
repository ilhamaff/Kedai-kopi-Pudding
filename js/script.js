// Toggle Class Active Hamburger Menu
const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

// Toogle class active Search Form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
// Ketika icon search di klik
document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// Toggle class active Shopping Cart
const shopCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shopCart.classList.toggle('active');
    e.preventDefault();
}
// Ketika di klik diluar elemen 
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');
document.addEventListener('click', function (e) {
    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }

    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if (!sc.contains(e.target) && !shopCart.contains(e.target)) {
        shopCart.classList.remove('active');
    }
});    

// Modal Box Item Detail
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach(button => {
    button.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    };
});
// Klik tombol close
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
};

// Klik di luar modal
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
}