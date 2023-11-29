document.getElementById('loginForm').addEventListener('submit', function (event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username != "Huh?" || password != "114514") {
        alert('用户名称或密码错误喵!');
    }
    else
    {
        window.location.href = "product.html";
    }
    event.preventDefault(); // 阻止表单提交
});