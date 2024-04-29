document.addEventListener("DOMContentLoaded", function() {
    var searchBtn = document.getElementById("searchBtn");
    var searchInput = document.getElementById("search");

    searchBtn.addEventListener("click", function() {
        var searchTerm = searchInput.value.trim();
        if (searchTerm !== "") {
            // Perform your search functionality here
            alert("Searching for: " + searchTerm);
        } else {
            alert("Please enter a search term.");
        }
    });
});
