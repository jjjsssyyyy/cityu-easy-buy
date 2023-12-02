document.addEventListener('DOMContentLoaded', function () {
    var numberInput = document.querySelector('input[type="number"]');
    var box1 = document.querySelector('.box1');
    var box2 = document.querySelector('.box2');

    box1.addEventListener('click', function() {
      numberInput.value = parseInt(numberInput.value) - 1;
    });

    box2.addEventListener('click', function() {
      numberInput.value = parseInt(numberInput.value) + 1;
    });
  });
  //为商品选项添加表单监听事件//
  document.querySelectorAll('.scolor div').forEach(div => {
    div.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});