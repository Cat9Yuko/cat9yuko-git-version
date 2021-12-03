/**
 * Created by epro.ma on 2018/7/30.
 */

$(document).ready(function(){
    //获取当前时间
    var myDate = new Date;
    var year = myDate.getFullYear();//获取当前年
    var mon = myDate.getMonth()+1;//获取当前月
    var date = myDate.getDate();//获取当前日
    // var h = myDate.getHours();//获取当前小时数(0-23)
    // var m = myDate.getMinutes();//获取当前分钟数(0-59)
    // var s = myDate.getSeconds();//获取当前秒
    var week = myDate.getDay();
    var weeks = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    var timeWea = year+"年"+mon+"月"+date+"日&nbsp;"+weeks[week];
    if("undefined"===typeof returnCitySN){
        $("#time").html(timeWea);
    }
    else{
        $.ajax({
            url:'http://wthrcdn.etouch.cn/weather_mini?city='+returnCitySN["cname"],
            data:"",
            dataType:"jsonp",
            success:function(data){
                console.log(data.data.forecast[0]);
                console.log(returnCitySN["cname"]+" "+data.data.forecast[0].type+" "+data.data.forecast[0].low.split(" ")[1]+"~"+data.data.forecast[0].high.split(" ")[1]+" "+data.data.forecast[0].fengxiang);
                timeWea+="　"+returnCitySN["cname"]+" "+data.data.forecast[0].type+" "+data.data.forecast[0].low.split(" ")[1]+"~"+data.data.forecast[0].high.split(" ")[1]+" "+data.data.forecast[0].fengxiang;
                $("#time").html(timeWea);
            },
            error:function(){
                $("#time").html(timeWea);
            }
        });
    }
    $(".top>.nav>h3>span").click(function(){
        $(".nav_m").slideToggle("slow");
    });


    $(window).resize(function() {
        if($(window).width()>720) {
            console.log($('.content .slider').height(), $(window).width());
            $(".content .jsdt").height($('.content .slider').height() + 10 + "px")
        }
    });

    $(".top .banner .form .search a").click(function(){
        console.log($("input[name='keyword']").val())
        if(""===$("input[name='keyword']").val()){
            alert("请输入关键字检索！");
            return false;
        }
        $(".form").submit();
        return true;
    })
});