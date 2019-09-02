let blackOnWhite = {
    foreground: "black",
    background: "white"
};

let whiteOnBlack = {
    foreground: "white",
    background: "black"
};

let blackOnSepia = {
    foreground: "black",
    background: "#f7efd5" // sepia
}

let themes = [blackOnWhite, whiteOnBlack, blackOnSepia];

let themeIndex = 0;

function toggleTheme() {
    themeIndex++;
    if(themeIndex >= themes.length) {
        themeIndex = 0;
    }
    document.body.style.setProperty("--foreground-color", themes[themeIndex].foreground);
    document.body.style.setProperty("--background-color", themes[themeIndex].background);

    console.log("Toggling");
}