
$(document).ready(function() {
    $('.box').click(function() {
        $(this).toggleClass('big');
    });
});

$(document).ready(function() {
    $('.box').click(function() {
        if (!$(this).hasClass('animated')) {
            $(this).animate({
                left: '+=500px'
            },500).addClass('animated');
        } else {
            $(this).animate({
                left: '-=500px'
            }, 500).removeClass('animated');
        }
    });
});
