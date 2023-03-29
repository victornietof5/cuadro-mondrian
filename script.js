
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

$(document).ready(function() {
    setInterval(function() {
        $('.box').each(function() {
            if (!$(this).hasClass('animated')) {
                $(this).animate({
                    left: '+=500px'
                }, 500).addClass('animated');
            } else {
                $(this).animate({
                    left: '-=500px'
                }, 500).removeClass('animated');
            }
        });
    }, 8000);
});

$(document).ready(function() {
    let currentIndex = 0;
    let boxes = $('.box');

    setInterval(function() {
        let currentBox = $(boxes[currentIndex]);
        if (!currentBox.hasClass('animated')) {
            currentBox.animate({
                left: '+=500px'
            }, 100).addClass('animated');
        } else {
            currentBox.animate({
                left: '-=500px'
            }, 100).removeClass('animated');
        }

        currentIndex++;
        if (currentIndex >= boxes.length) {
            currentIndex = 0;
        }
    }, 200);
});