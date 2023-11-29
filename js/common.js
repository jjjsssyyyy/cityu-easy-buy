function shakeElement(id) {
    let element = document.getElementById(id)
    if (element) {
        element.classList.add('shake')
        setTimeout(() => { element.classList.remove('shake') }, 800)
    }
}
function doSearch() {
    var searchText = document.getElementById('search-box').value;
    if (searchText == "") {
        shakeElement("search");
    }
    else {
        if (searchText == "CityU") {
            window.location.href = "product.html";
        }
        else {
            alert("没找到对应的好物喵~");
        }
    }
}
window.onload = function () {
    document.getElementById('search-button').addEventListener('click', function (event) {
        doSearch();
    });
    document.getElementById('search-box').addEventListener('keydown', function (event) {
        if (window.event) {
            event_e = window.event;
        }
        var keycode = event_e.charCode || event_e.keyCode;
        if (keycode == '13') {
            doSearch();
        }
    });
    document.body.classList.remove("css-transitions-only-after-page-load");
}
L2Dwidget.init({
    "model": { "jsonPath": "https://unpkg.com/live2d-widget-model-tororo@1.0.5/assets/tororo.model.json", "scale": 1, "hHeadPos": 0.5, "vHeadPos": 0.618 },
    "display": { "position": "left", "width": 150, "height": 300, "hOffset": 0, "vOffset": 0 },
    "mobile": { "show": true, "scale": 0.5 },
    "react": { "opacityDefault": 0.7, "opacityOnHover": 0.2 }
});