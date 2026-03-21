document.addEventListener('DOMContentLoaded', function() {
    // Get page-specific links if defined, otherwise empty
    const pageLinks = window.pageSpecificLinks || '';
    
    const navHTML = `
    <div class="mobile-nav-overlay" id="navOverlay"></div>
    <nav class="mobile-nav" id="mobileNav">
        <div class="mobile-nav-close" id="navClose">×</div>
        <ul>
            <li><a href="index.html">Home</a></li>
            ${pageLinks}
            <li><a href="services.html">Services</a></li>
            <li><a href="https://myelitemassage.bemergroup.com" target="_blank">BEMER</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="calendar.html">Calendar</a></li>
            <li><a href="policies.html">Policies</a></li>
            <li><a href="https://www.fresha.com/a/my-elite-massage-llc-friendswood-400-west-parkwood-avenue-i9cgwv4s/gift-cards?menu=true" target="_blank">Online Giftcards</a></li>
            <li><a href="https://www.fresha.com/book-now/my-elite-massage-llc-oa1wvgdo/paid-plans?share=true&pId=490794" target="_blank">Memberships</a></li>
            <li><a href="https://www.fresha.com/book-now/my-elite-massage-llc-oa1wvgdo/services?lid=525184&eid=1521604&pId=490794" target="_blank">Book Now</a></li>
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
        link.addEventListener('click', (e) => {
            if (!link.classList.contains('submenu-toggle')) {
                mobileNav.classList.remove('active');
                navOverlay.classList.remove('active');
            }
        });
    });

    // Submenu toggle
    document.querySelectorAll('.submenu-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            toggle.parentElement.classList.toggle('open');
        });
    });    
});