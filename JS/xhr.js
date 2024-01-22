// dynamically loads the navbar and header using xhr
window.addEventListener('DOMContentLoaded', function() {
    var navbarPlaceholder = document.getElementById("navheaderPlaceholder");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "navheader.html", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            navbarPlaceholder.innerHTML = xhr.responseText;
            // calls function which adds active class to current page
            highlightCurrentPage();
        }
    };
    xhr.send();
});
