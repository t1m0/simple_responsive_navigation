function toggleHamburger() {
    var x = document.getElementById("myTopnav");
    if (x.className === "responsive") {
        x.className = "";
    } else {
        x.className = "responsive";
    }
}