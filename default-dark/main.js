javascript: (function() {
    // Check if the current URL is 'extranet.ecolemoser.ch'
    if (window.location.hostname === 'extranet.ecolemoser.ch') {
        // Load the CSS from the specified URL
        var cssUrl = 'https://raw.githubusercontent.com/homunculus09/extranet-themes/refs/heads/main/default-dark/default-dark-stylesheet.css';

        fetch(cssUrl)
            .then(response => response.text())
            .then(cssContent => {
                var oldStyles = document.querySelectorAll('link[rel="stylesheet"], style');
                oldStyles.forEach(style => style.remove());

                var styleElement = document.createElement('style');
                styleElement.innerHTML = cssContent;
                document.head.appendChild(styleElement);
            })
            .catch(error => console.error('Failed to load CSS:', error));

        // Define the new favicon URL
        var faviconUrl = 'https://search.ch/tel/media/446cb5cd2ae83fb2c1591f399705454686e03365.png/rs/640x320/49599706-10161199347910371-7420025018563690496-n.png';
        
        // Create a link element for the favicon
        var link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/png';
        link.href = faviconUrl;

        // Remove existing favicon links
        var oldFavicons = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
        oldFavicons.forEach(function(oldFavicon) {
            oldFavicon.parentNode.removeChild(oldFavicon);
        });

        // Append the new favicon to the head
        document.head.appendChild(link);

    } else {
        console.warn('This script can only be run on extranet.ecolemoser.ch');
    }
})();
