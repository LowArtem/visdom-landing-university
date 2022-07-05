
// Установка красному блоку в header'e такой же высоты, как у главному блока header'а, чтобы правильно считался угол наклона
function setRedHeight(main_tag, red_tag) {
    height = $(main_tag).height();
    $(red_tag).height(height);
}

$(document).ready(function () {
    setRedHeight("#main", "#red");
    setRedHeight("#main2", "#red2");

    // анимация перехода по внутренним ссылкам
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 500);
    });
});

// изменение высоты при изменении размеров окна
window.onresize = function (event) {
    setRedHeight("#main", "#red");
    setRedHeight("#main2", "#red2");
};
