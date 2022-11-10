moment.locale("zh-cn");
var time = moment().format("YYYY年MMM Do ");
$(".localtime").text(time);
$(function () {
    var settings = {
        trigger: 'hover',
        // title: 'Pop Title',
        // content: $(".nav-childs").html(),
        width: 460,
        // height: 32,
        multi: false,
        closeable: false,
        style: 'webui-popover-mystyle',
        padding: false,
        placement: 'bottom'
    };
    var zxxgk = {content:$("#zxxgk .nav-childs").html(),width:348}
    var xwdt = {content:$("#xwdt .nav-childs").html(),width:232}
    var zcfg = {content:$("#zcfg .nav-childs").html()}
    var gzhd = {content:$("#gzhd .nav-childs").html()}
    var ztzl = {content:$("#ztzl .nav-childs").html(),width:348}
    $('#zxxgk > a').webuiPopover('destroy').webuiPopover($.extend({}, settings, zxxgk));
    $('#xwdt > a').webuiPopover('destroy').webuiPopover($.extend({}, settings, xwdt));
    $('#zcfg > a').webuiPopover('destroy').webuiPopover($.extend({}, settings, zcfg));
    $('#gzhd > a').webuiPopover('destroy').webuiPopover($.extend({}, settings, gzhd));
    $('#ztzl > a').webuiPopover('destroy').webuiPopover($.extend({}, settings, ztzl));
})
