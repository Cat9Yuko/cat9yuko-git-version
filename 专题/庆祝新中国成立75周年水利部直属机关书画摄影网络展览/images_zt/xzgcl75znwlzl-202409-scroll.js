/*
 * @Author: Cat9Yuko 
 * @Date: 2020-07-29 15:59:35 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2024-09-12 14:45:22
 */

 // 依赖JQuery


window.onload = function () {

    
    // 第一个
    var adiv = document.getElementById('div1');
    var aul = adiv.getElementsByTagName('ul')[0];
    var ali = aul.getElementsByTagName('li');
    var zuo = document.getElementsByTagName('h2')[0];
    var you = document.getElementsByTagName('h2')[1];
    var speed = 2;
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
    $("#div1").hover(function () {
        s = speed;
        speed = 0;
    }, function () {
        speed = s;
    });

    // 第二个
    var adiv2 = document.getElementById('div2');
    var aul2 = adiv2.getElementsByTagName('ul')[0];
    var ali2 = aul2.getElementsByTagName('li');
    var zuo2 = document.getElementsByTagName('h2')[2];
    var you2 = document.getElementsByTagName('h2')[3];
    var speed2 = 2;
    var s2 = 0;
    aul2.innerHTML = aul2.innerHTML + aul2.innerHTML;
    aul2.style.width = ali2[0].offsetWidth * ali2.length + 'px';
    setInterval(function () {
        if (aul2.offsetLeft < -aul2.offsetWidth / 2) {
            aul2.style.left = '0';
        }
        if (aul2.offsetLeft > 0) {
            aul2.style.left = -aul2.offsetWidth / 2 + 'px';
        }
        aul2.style.left = aul2.offsetLeft + speed2 + 'px';
    }, 30);
    zuo2.onclick = function () {
        speed2 = -2;
        s2 = -2;
    };
    you2.onclick = function () {
        speed2 = 2;
        s2 = 2;
    };
    
    $("#div2").hover(function () {
        s2 = speed2;
        speed2 = 0;
    }, function () {
        speed2 = s2;
    });

    // 第二个
    var adiv3 = document.getElementById('div3');
    var aul3 = adiv3.getElementsByTagName('ul')[0];
    var ali3 = aul3.getElementsByTagName('li');
    var zuo3 = document.getElementsByTagName('h2')[4];
    var you3 = document.getElementsByTagName('h2')[5];
    var speed3 = 2;
    var s3 = 0;
    aul3.innerHTML = aul3.innerHTML + aul3.innerHTML;
    aul3.style.width = ali3[0].offsetWidth * ali3.length + 'px';
    setInterval(function () {
        if (aul3.offsetLeft < -aul3.offsetWidth / 2) {
            aul3.style.left = '0';
        }
        if (aul3.offsetLeft > 0) {
            aul3.style.left = -aul3.offsetWidth / 2 + 'px';
        }
        aul3.style.left = aul3.offsetLeft + speed3 + 'px';
    }, 30);
    zuo3.onclick = function () {
        speed3 = -2;
        s3 = -2;
    };
    you3.onclick = function () {
        speed3 = 2;
        s3 = 2;
    };
    
    $("#div2").hover(function () {
        s3 = speed3;
        speed3 = 0;
    }, function () {
        speed3 = s3;
    });
};