
// Установка красному блоку в header'e такой же высоты, как у главному блока header'а, чтобы правильно считался угол наклона
function setRedHeight() {
    height = $('#main').height();
    $('#red').height(height);
}


$(document).ready(setRedHeight());

// изменение высоты при изменении размеров окна
window.onresize = function (event) {
    setRedHeight();
};
