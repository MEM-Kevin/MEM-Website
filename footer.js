document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
    <footer class="footer-main">
        <div class="footer-grid">
            <div class="footer-section" style="text-align: center;">
                <h4>LOCATION</h4>
                <div style="text-align:left;"><address>
                    400 W Parkwood Ave<br>
                    104-11B<br>
                    Friendswood, TX 77546
                </address>
                <a href="https://maps.google.com/maps?q=400+W+Parkwood+Ave%2C+Friendswood%2C+TX+77546" class="btn" target="_blank">Get Directions</a>
                </div>
            </div>
            
            <div class="footer-section" style="text-align: center;">
                <h4>CONTACT US</h4>
                <span>(346) 409-5753</span><br>
                <span class="social-icon" target="_blank"><strong>f</strong></span>
                <span class="social-icon" target="_blank"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></span>
                <a href="mailto:kevin@myelitemassage.com" class="btn">Send a Message</a>
            </div>
            
            <div class="footer-section" style="text-align:center;">
                <h4>BUSINESS HOURS</h4>
                <div class="footer-hours">
                    <div class="hours-row"><span>Mon, Wed</span><span>11:00 am - 7:00 pm</span></div>
                    <div class="hours-row"><span>Tuesday</span><span>1:30 pm - 5:00 pm</span></div>
                    <div class="hours-row"><span>Thursday</span><span>9:00 am - 1:00 pm</span></div>
                    <div class="hours-row"><span>Fri - Sat</span><span>9:00 am - 5:00 pm</span></div>
                    <div class="hours-row"><span>Sunday</span><span>Closed</span></div>
                </div>
                <p style="margin-top: 15px; font-size: 0.9rem; text-align: left;">All services are Appointment Only. Same day appointments available with 1-hour advance booking. No walk-ins</p>
            </div>
        </div>
    </footer>

    <div class="footer-badge">
        <a href="http://www.abmp.com" target="_blank">
            <img src="images/abmp-badge.png" alt="ABMP Certified Member" style="height: 85px;">
        </a>
    </div>
    
    <div class="footer-bottom">
        <a href="privacy.html">Privacy Policy</a> | 
        <a href="Terms.html">Conditions of Use</a> | 
        <a href="accessibility.html">Website Accessibility Policy</a>
        <br>
        © 2026 My Elite Massage, LLC. All rights reserved.
    </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});