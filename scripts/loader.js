// Simple Page Loader
(function() {
    // Add loading class to body initially
    document.body.classList.add('loading');
    
    // Function to hide loader
    function hideLoader() {
        const loader = document.getElementById('page-loader');
        if (loader) {
            loader.classList.add('hidden');
            document.body.classList.remove('loading');
            
            // Remove loader from DOM after animation
            setTimeout(() => {
                if (loader.parentNode) {
                    loader.parentNode.removeChild(loader);
                }
            }, 500);
        }
    }
    
    // Function to check if all critical resources are loaded
    function checkResourcesLoaded() {
        const videos = document.querySelectorAll('video');
        const images = document.querySelectorAll('img');
        let loadedCount = 0;
        let totalCount = videos.length + images.length;
        
        // If no media to load, hide loader immediately
        if (totalCount === 0) {
            hideLoader();
            return;
        }
        
        function onResourceLoad() {
            loadedCount++;
            if (loadedCount >= totalCount) {
                // Add small delay to ensure smooth transition
                setTimeout(hideLoader, 300);
            }
        }
        
        // Check videos
        videos.forEach(video => {
            if (video.readyState >= 3) { // HAVE_FUTURE_DATA
                onResourceLoad();
            } else {
                video.addEventListener('canplay', onResourceLoad, { once: true });
                video.addEventListener('error', onResourceLoad, { once: true }); // Continue on error
            }
        });
        
        // Check images
        images.forEach(img => {
            if (img.complete) {
                onResourceLoad();
            } else {
                img.addEventListener('load', onResourceLoad, { once: true });
                img.addEventListener('error', onResourceLoad, { once: true }); // Continue on error
            }
        });
    }
    
    // Start checking when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', checkResourcesLoaded);
    } else {
        checkResourcesLoaded();
    }
    
    // Fallback: hide loader after maximum wait time (10 seconds)
    setTimeout(() => {
        if (document.getElementById('page-loader')) {
            hideLoader();
        }
    }, 10000);
    
})();
