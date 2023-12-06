/*
 * @Author: Cat9Yuko 
 * @Date: 2020-07-29 15:59:35 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2023-12-04 18:25:09
 */

 // 依赖JQuery
 $(function () {
    var index = 1;
    var timer = null;

    var $nav = $(".slide_nav li");
    var $view = $(".slide");
    var $pipe = $(".slide>.ul");

    var $firstPipeItem = $(".slide>.ul>li").first();
    var $lastPipeItem = $(".slide>.ul>li").last();
    $firstPipeItem.clone(true).appendTo($pipe);
    $lastPipeItem.clone(true).prependTo($pipe);

    var $pipeItem = $(".slide>.ul>li");
    var imgWidth = 1;
    
    $pipe.width($pipeItem.length * imgWidth);

    function slide(i) {
        if (i === 0) {
            setNavFocus($nav.eq(4));
        } else if (i === $pipeItem.length - 1) {
            setNavFocus($nav.eq(0));
        } else {
            setNavFocus($nav.eq(i - 1));
        }
        $pipe.animate({
            left: -i * imgWidth
        }, 200, function () {
            if (i === 0) {
                $pipe.css("left", ($pipeItem.length - 2) * -imgWidth);
                index = $pipeItem.length - 2;
            } else if (i === $pipeItem.length - 1) {
                $pipe.css("left", -imgWidth);
                index = 1;
            }
        });
    }

    function setNavFocus($obj) {
        $obj.addClass("active").siblings().removeClass("active");
    }

    $nav.on("mouseover", function () {
        var i = $(this).index() + 1;
        slide(i);
        index = i;
    });

    $view.on("mouseover", function () {
            clearInterval(timer);
        })
        .on("mouseout", function () {
            setTimer();
        });

    function setTimer() {
        timer = setInterval(function () {
            if (!$pipe.is(":animated")) {
                slide(++index);
            }
        }, 4000);
    }

    setTimer();
});


window.onload = function () {

    
    
    var adiv = document.getElementById('div');
    var aul = adiv.getElementsByTagName('ul')[0];
    var ali = aul.getElementsByTagName('li');
    var zuo = document.getElementsByTagName('h2')[0];
    var you = document.getElementsByTagName('h2')[1];
    var speed = -2;
    aul.innerHTML = aul.innerHTML + aul.innerHTML;
    aul.style.width = ali[0].offsetWidth * ali.length + 'px';
    setInterval(function () {
        if (aul.offsetLeft < -aul.offsetWidth / 2) {
            aul.style.left = '0';
        }
        if (aul.offsetLeft > 0) {
            aul.style.left = -aul.offsetWidth / 2 + 'px';
        }
        aul.style.left = aul.offsetLeft + speed + 'px';
    }, 30);
    zuo.onclick = function () {
        speed = -2;
        s = -2;
    };
    you.onclick = function () {
        speed = 2;
        s = 2;
    };

    var s = 0;
    $("#div").hover(function () {
        s = speed;
        speed = 0;
    }, function () {
        speed = s;
    });
};