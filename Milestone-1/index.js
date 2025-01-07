var skills = document.getElementById("skills");
var button = document.getElementById("toggle-skills");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else
        (skills.style.display = "none");
});
