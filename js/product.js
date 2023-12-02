document.addEventListener('DOMContentLoaded', function () {
  var numberInput = document.querySelector('input[type="number"]');
  var box1 = document.querySelector('.box1');
  var box2 = document.querySelector('.box2');

  box1.addEventListener('click', function () {
    numberInput.value = parseInt(numberInput.value) - 1;
  });

  box2.addEventListener('click', function () {
    numberInput.value = parseInt(numberInput.value) + 1;
  });
});

//为商品选项添加表单监听事件//
document.querySelectorAll('.scolor div').forEach(div => {
  div.addEventListener('click', function () {
    this.classList.toggle('active');
  });
});

// 评论区选项卡
document.querySelectorAll('.tab-item .hover-underline').forEach(item => {
  item.addEventListener('mousedown', function () {
    document.querySelectorAll('.tab-item .hover-underline').forEach((item) => { item.classList.remove('selected') })
    document.querySelectorAll('.tab-content').forEach((item) => {
      if (item.classList.contains('selected')) {
        item.classList.add('not-selected');
        item.classList.remove('selected');
      }
    })
    this.classList.add('selected');

    if (this.id == 'introduction-tab') {
      document.getElementById('introduction').classList.add('selected');
    }
    if (this.id == 'comments-tab') {
      document.getElementById('comments').classList.add('selected');
    }
    if (this.id == 'specifications-tab') {
      document.getElementById('specifications').classList.add('selected');
    }
  });
});