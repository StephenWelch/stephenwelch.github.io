function Util() {}

/*!
 * Check if an element is out of the viewport
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}  elem The element to check
 * @return {Object}     A set of booleans for each side of the element
 */
Util.isOutOfViewport = function (elem) {

    // Get element's bounding
    let bounding = elem.getBoundingClientRect();

    // Check if it's out of the viewport on each side
    let out = {};
    out.top = bounding.top < 0;
    out.left = bounding.left < 0;
    out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
    out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
    out.any = out.top || out.left || out.bottom || out.right;
    out.all = out.top && out.left && out.bottom && out.right;

    return out;

};

Util.getPosition = function (element) {
    let xPosition = 0;
    let yPosition = 0;

    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return { x: xPosition, y: yPosition };
};

Util.getPageName = function (window) {
    let page_name = window.location.pathname.split("/").pop().split(".")[0];
    if(page_name === "") page_name = "index";
    return page_name;
};

Util.getRandomInt = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

Util.getRandomColor = function() {
    // Math.pow is slow, use constant instead.
    let color = Math.floor(Math.random() * 16777216).toString(16);
    // Avoid loops.
    return '#000000'.slice(0, -color.length) + color;
};

Util.getRandomPaletteColor = function() {
    return Global.COLOR_PALETTE[Util.getRandomInt(Global.COLOR_PALETTE.length - 5)]
};

function Global(){}

Global.SITE_VERSION = "1.0.0";
Global.COLOR_PALETTE = [
    "#0074D9",
    "#7FDBFF",
    "#39CCCC",
    "#3D9970",
    "#2ECC40",
    "#01FF70",
    "#FFDC00",
    "#FF851B",
    "#FF4136",
    "#85144b",
    "#F012BE",
    "#B10DC9",
    "#AAAAAA",
    "#DDDDDD",
    "#001F3F",
    "#111111",
    "#FFFFFF"];
