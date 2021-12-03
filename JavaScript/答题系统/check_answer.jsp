<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
    String path = request.getContextPath();
    /*HttpSession httpSession = request.getSession(false);
    if (httpSession != null) {
        httpSession.invalidate();
        Cookie cookie = request.getCookies()[0];
        // 让cookie过期
        cookie.setMaxAge(0);
    }*/
%>
<!-- 查看答案页面 -->
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <link rel="icon" href="<%=path %>/favicon.ico" type="image/x-icon"/>
    <title>中国水利部-网上答题</title>
    <link rel="stylesheet" href="<c:url value='/css/style.css'/>" />
    <link rel="stylesheet" href="<c:url value='/js/showLoading/css/showLoading.css'/>" />
    <script src="<c:url value='/js/jquery/jquery.min.js'/>"></script>
    <script src="<c:url value='/js/showLoading/js/jquery.showLoading.min.js'/>"></script>
    <script src="<c:url value='/js/tmpl/jquery.tmpl.min.js'/>"></script>
</head>
<body>
<div class="wrap">
    <div class="header"><p>欢迎您进入中国水利部-网上答题系统！感谢您的支持和参与！</p></div>
    <div class="main" style="min-height: 100%">
        <div>
            <div class="caozuo" style="margin-top:10px;">
                <div class="left"><span class="zhuce">查看答案</span></div>
            </div>
            <div class="nr_lb">
                <h3>一、单选题</h3>
                <div id="single-list"></div>
                <h3>二、判断题</h3>
                <div id="decide-list"></div>
                <h3>三、多选题</h3>
                <div id="multi-list"></div>
                <h3>四、填空题</h3>
                <div id="completion-list"></div>
                <script id="tmpl" type="text/x-jquery-tmpl">
                    <div style="margin-left: 1.5em">{{= sortNo}}、{{= answer}}</div>
                </script>
                <div class="fanye">
                    <div id="Pagination" class="flickr"></div>
                </div>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</div>
<div class="footer">中华人民共和国水利部版权所有</div>
<script>
    var answerid = getQueryString("answerid");
    var paperid = getQueryString("paperid");
    $.ajax({
        type: "POST",
        url: getRootPath() + "/handle/dt/checkAnswer",
        data: {"answerId": answerid, "paperId": paperid},
        dataType: "json",
        async: false,
        success: function (json) {
            if (json.code === 0) {
                if (json.result.singles) {
                    $("#tmpl").tmpl(json.result.singles).appendTo("#single-list");
                }
                if (json.result.decides) {
                    $("#tmpl").tmpl(json.result.decides).appendTo("#decide-list");
                }
                if (json.result.multis) {
                    $("#tmpl").tmpl(json.result.multis).appendTo("#multi-list");
                }
                if (json.result.completions) {
                    $("#tmpl").tmpl(json.result.completions).appendTo("#completion-list");
                }
            }
        }
    });
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
    // 获取项目地址
    function getRootPath() {
        var curWwwPath = window.document.location.href;
        var pathName = window.document.location.pathname;
        var pos = curWwwPath.indexOf(pathName);
        var localhostPaht = curWwwPath.substring(0,pos);
        var projectName = pathName.substring(0,pathName.substr(1).indexOf('/')+1);
        if (projectName.indexOf('survey')>-1) {
            return(localhostPaht+projectName);
        } else {
            return(localhostPaht);
        }
    }
</script>
</body>
</html>
