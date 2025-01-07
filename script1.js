const cartCount = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.product-card button');
let cartItemCount = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartItemCount++;
        cartCount.textContent = cartItemCount;
        alert('Product added to cart!');
    });
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
