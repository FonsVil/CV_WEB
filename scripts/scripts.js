
$(window).load(function () {
    $("#navbar").sticky({ topSpacing: 0 });
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $(".scrollup").fadeIn();
    } else {
        $(".scrollup").fadeOut();
    }
})

$(".scrollup").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 400);
    return false;
})