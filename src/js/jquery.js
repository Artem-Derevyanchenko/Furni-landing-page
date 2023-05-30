$('.header-logo').on('click', function(el) {
    console.log(el);
    console.log($(el));
    console.log($(this));
    $(this).addClass('active'); 
});

$(".open-menu-js").on("click", function () {
    $(".mobileMenu-overlay").addClass("open");
});

// burger close

$(".mobileMenu__close").on("click", function () {
    $(".mobileMenu-overlay").removeClass("open");
});
