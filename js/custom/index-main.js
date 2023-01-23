function init() {
    showFooter();
}

function showFooter() {
    var year = new Date().getFullYear();
    $('#footer-container').html('<p id="copyrights">&copy;' + year + ', Carlos</p>');
}

function go(url) {
    window.open(url);
}
