
    // 试试横屏
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    if (width < height) {
        console.log(width + "，" + height);
        $print = $('#print');
        $print.width(height);
        $print.height(width);
        $print.css('top', (height - width) / 2);
        $print.css('left', 0 - (height - width) / 2);
        $print.css('transform', 'rotate(90deg)');
        $print.css('transform-origin', '50% 50%');
    }
    var evt = "onorientationchange" in window ? "orientationchange" : "resize";
    console.log(evt, 'evt')
    window.addEventListener(evt, function() {
        setTimeout(function() {
            var width = document.documentElement.clientWidth;
            var height = document.documentElement.clientHeight;

            $print = $('#print');
            $videoIntroduce = $('#videoIntroduce')
            $toVideoBack = $('#toVideoBack')
            $backgroundImg = $('.backgroundImg')
            if (width > height) {
                $print.width(width);
                $print.height(height);
                $print.css('top', '0');
                $print.css('left', 0);
                $print.css('transform', 'none');
                $print.css('transform-origin', '50% 50%');
            } else {
                $print.width(height);
                $print.height(width);
                $print.css('top', (height - width) / 2);
                $print.css('left', 0 - (height - width) / 2);
                $print.css('transform', 'rotate(90deg)');
                $print.css('transform-origin', '50% 50%');
            }
        }, 500)
    }, false);
