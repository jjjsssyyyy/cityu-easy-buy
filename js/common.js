const tips = [
    "你问我是谁？我可是CityU好物优选的站长喵~",
    "千万不要错过CityU这件好物喵~",
    "原神...？启动喵！",
    "要玩音游吗？我有十分甚至九分擅长Phigros喵!",
    "哼哼哼喵啊啊啊啊啊啊啊~",
    "哼~本喵才不喜欢被你们摸呢~!",
    "你干嘛啊~嗨嗨哟喵~"
];
var timer;
var idleTimer;
var idle = true;

function shakeElement(id) {
    let element = document.getElementById(id)
    if (element) {
        element.classList.add('shake')
        setTimeout(() => { element.classList.remove('shake') }, 800);
    }
}
function doSearch() {
    var searchText = document.getElementById('search-box').value;
    if (searchText == "") {
        shakeElement("search");
    }
    else {
        if (searchText.toLowerCase() === "CityU".toLowerCase() || searchText == "城市大学" || searchText == "城大" || searchText == "澳城大" || searchText == "澳门城市大学") {
            window.location.href = "cityu.html";
        }
        else if (searchText.toLowerCase() === "MUST".toLowerCase() || searchText == "科技大学" || searchText == "科大" || searchText == "澳科大" || searchText == "澳门科技大学") {
            window.location.href = "must.html";
        }
        else {
            catAlert('没找到对应的好物喵~', 5000);
        }
    }
}
function catAlert(text, timeout) {
    var content = document.getElementById('live2d-widget-dialog-content');
    content.innerHTML = text;

    var dialog = document.getElementById('live2d-widget-dialog');
    dialog.style.opacity = 1;
    content.animate(
        {
            transform: ["scale(0.75)", "scale(1)"],
            opacity: [0.4, 1]
        },
        {
            duration: 333,
            easing: "cubic-bezier(0, 0, 0, 1)"
        });
    if (timer) {
        clearTimeout(timer);
    }
    // 取消空闲状态
    if (idleTimer) {
        clearTimeout(idleTimer);
        idleTimer = null; 
        idle = false;
    }
    idleTimer = setTimeout(() => { idle = true;idleTimer = null; }, 5000);
    timer = setTimeout((element) => { element.style.opacity = 0; }, timeout, dialog);
    // dialog.animate({
    //     opacity: [0, 1]
    //   }, {
    //     duration: 333,
    //     easing: "ease-in-out"
    //   }).onfinish = () => { 
    //     dialog.style.opacity = 1; 
    //     setTimeout((element) => { element.style.opacity = 0; }, 8000, dialog);
    // };
}

window.onload = function () {
    document.getElementById('search-button').addEventListener('click', function (event) {
        doSearch();
    });
    document.getElementById('search-box').addEventListener('keydown', function (event) {
        var keycode = event.charCode || event.keyCode;
        if (keycode == '13') {
            doSearch();
        }
    });

    var dialogContent = document.createElement("div");
    dialogContent.id = "live2d-widget-dialog-content";

    var dialog = document.getElementsByClassName('live2d-widget-dialog')[0];
    dialog.classList.add("acrylic-background");
    dialog.id = "live2d-widget-dialog";
    dialog.appendChild(dialogContent);
    // 页面载入的问候
    setTimeout(function () { if (!timer) { catAlert("欢迎来到" + document.title + "喵~", 5000); } }, 200);
    setTimeout(function () { document.body.classList.remove("css-transitions-only-after-page-load"); }, 200);
    // 让猫猫随机说一些话
    window.setInterval(function () { if (idle) catAlert(tips[Math.floor(Math.random() * tips.length)], 5000); }, 18000);
}
L2Dwidget.init({
    "model": { "jsonPath": "https://unpkg.com/live2d-widget-model-tororo@1.0.5/assets/tororo.model.json", "scale": 1, "hHeadPos": 0.5, "vHeadPos": 0.618 },
    "display": { "position": "left", "hOffset": 40, "vOffset": -60 },
    "mobile": { "show": true, "scale": 0.5 },
    "react": { "opacityDefault": 0.7, "opacityOnHover": 0.2 },
    "dialog": {
        "enable": true,
        "script": {}
    }
});