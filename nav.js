document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
    <div class="mobile-nav-overlay" id="navOverlay"></div>
    <nav class="mobile-nav" id="mobileNav">
        <div class="mobile-nav-close" id="navClose">×</div>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html#about">About</a></li>
            <li><a href="https://kevins.massagetherapy.com/frequently-asked-questions" target="_blank">FAQ</a></li>
            <li><a href="index.html#services">What We Offer</a></li>
            <li><a href="index.html#gallery">Gallery</a></li>
            <li><a href="index.html#reviews">Customer Reviews</a></li>
            <li><a href="discounts.html">Discounts</a></li>
            <li><a href="https://www.fresha.com/a/my-elite-massage-llc-friendswood-400-west-parkwood-avenue-i9cgwv4s/gift-cards?menu=true" target="_blank">Online Giftcards</a></li>
            <li><a href="https://www.fresha.com/book-now/my-elite-massage-llc-oa1wvgdo/services?lid=525184&eid=1521604&pId=490794" target="_blank">Book Now</a></li>
            <li><a href="index.html#contact">Contact Us</a></li>
        </ul>
    </nav>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    
    // Mobile navigation
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const navOverlay = document.getElementById('navOverlay');
    const navClose = document.getElementById('navClose');
    
    menuToggle.addEventListener('click', () => {
        mobileNav.classList.add('active');
        navOverlay.classList.add('active');
    });
    
    navClose.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        navOverlay.classList.remove('active');
    });
    
    navOverlay.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        navOverlay.classList.remove('active');
    });
    
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            navOverlay.classList.remove('active');
        });
    });
});