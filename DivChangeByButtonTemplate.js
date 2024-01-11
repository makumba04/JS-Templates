document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("");

    document.getElementById("civic5").addEventListener("click", function () {
        showSection(1);
    });

    // Add more event listeners for additional buttons and sections

    function showSection(sectionNumber) {
        sections.forEach(function (section, index) {
            if (index + 1 === sectionNumber) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    }
});