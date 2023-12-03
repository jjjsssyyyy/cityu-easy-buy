document.getElementById('loginForm').addEventListener('submit', function (event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username != "buzhidao" || password != "123456") {
        catAlert('用户名称或密码错误喵!', 5000);
    }
    else
    {
        window.location.href = "cityu.html";
    }
    event.preventDefault(); // 阻止表单提交
});
