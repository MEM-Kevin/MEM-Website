document.addEventListener('DOMContentLoaded', function() {
    const headerHTML = `
    <header>
        <div class="header-inner">
            <div class="menu-toggle" id="menuToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
                      
            <div class="header-logo">
                <img src="images/logo-black-bg.png" alt="My Elite Massage">
                <div class="tagline">Because "functioning adult" is way harder than it looks.</div>
            </div>
            <div class="header-rating">
                <!-- Elfsight Google Reviews | Review Badge -->
                <div class="elfsight-app-c675c64f-a630-4e99-82de-026909dd6736" data-elfsight-app-lazy>
                </div>     
            </div>
            <div class="header-spacer"></div>
        </div>
    </header>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    
    // Load Elfsight script
    const elfsightScript = document.createElement('script');
    elfsightScript.src = 'https://static.elfsight.com/platform/platform.js';
    elfsightScript.async = true;
    document.head.appendChild(elfsightScript);
});