document.addEventListener('DOMContentLoaded', function() {
    const ctaHTML = `
    <div class="cta-section">
        <p class="cta-tagline">More than your average massage.</p>
        <a href="https://www.fresha.com/book-now/my-elite-massage-llc-oa1wvgdo/services?lid=525184&eid=1521604&pId=490794" class="btn btn-gold" target="_blank">Book Now</a>
    </div>
    `;
    
    document.getElementById('cta-placeholder').insertAdjacentHTML('afterend', ctaHTML);
});