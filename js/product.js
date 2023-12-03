document.addEventListener('DOMContentLoaded', function () {
  var numberInput = document.querySelector('input[type="number"]');
  var box1 = document.querySelector('.box1');
  var box2 = document.querySelector('.box2');

  box1.addEventListener('click', function () {
    numberInput.value = parseInt(numberInput.value) - 1;
    if(parseInt(numberInput.value) <= -1) {
      catAlert("？你是要打算送我喵~", 3000);
    }
  });

  box2.addEventListener('click', function () {
    numberInput.value = parseInt(numberInput.value) + 1;
  });
});

//为商品选项添加表单监听事件//
document.querySelectorAll('.scolor div').forEach(div => {
  div.addEventListener('click', function () {
    this.classList.toggle('active');
    catAlert("眼光还不错喵~", 3000);
  });
});

// 评论区选项卡
document.querySelectorAll('.tab-item .hover-underline').forEach(item => {
  item.addEventListener('mousedown', function (e) {
    document.querySelectorAll('.tab-item .hover-underline').forEach((tabItem) => { tabItem.classList.remove('selected') })
    document.querySelectorAll('.tab-content').forEach((tabContent) => {
      tabContent.classList.add('not-selected');
      tabContent.classList.remove('selected');
    });

    if (this.id == 'introduction-tab') {
      document.getElementById('tab-content-introduction').classList.add('selected');
      document.querySelector('.tab-page').id = "introduction";
    }
    if (this.id == 'comments-tab') {
      document.getElementById('tab-content-comments').classList.add('selected');
      document.querySelector('.tab-page').id = "comments";
      catAlert("评论看起来都不是很友善喵...", 3000);
    }
    if (this.id == 'specifications-tab') {
      document.getElementById('tab-content-specifications').classList.add('selected');
      document.querySelector('.tab-page').id = "specifications";
    }

    this.classList.remove('not-selected');
    this.classList.add('selected');
  });
});

document.querySelectorAll('.comment-button').forEach(button => {
  button.addEventListener('click', function () {
    var number = this.querySelector('.comment-button-inner-content');
    number.textContent = parseInt(number.textContent) + 1;

    if(this.querySelector('#like')) {
      catAlert("？", 3000);
    }
    if(this.querySelector('#dislike')) {
      catAlert("正确的，客观的，理智的喵~", 3000);
    }
  });
});