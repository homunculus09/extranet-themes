javascript: (function() {
    // Check if the current URL is 'extranet.ecolemoser.ch'
    if (window.location.hostname === 'extranet.ecolemoser.ch') {
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
    } else {
        console.warn('This script can only be run on extranet.ecolemoser.ch');
    }
})();
