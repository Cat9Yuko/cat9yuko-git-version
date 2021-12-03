<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
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
<!-- 查看答题记录页面 -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <link rel="icon" href="<%=path %>/favicon.ico" type="image/x-icon"/>
    <title>中国水利部-网上答题</title>
    <link rel="stylesheet" href="<c:url value='/css/style.css'/>" />
    <link rel="stylesheet" href="<c:url value='/js/layui/css/layui.css'/>" />
    <link rel="stylesheet" href="<c:url value='/css/pagination.css'/>" />
    <link rel="stylesheet" href="<c:url value='/js/showLoading/css/showLoading.css'/>" />
    <script src="<c:url value='/js/jquery/jquery.min.js'/>"></script>
    <script src="<c:url value='/js/showLoading/js/jquery.showLoading.min.js'/>"></script>
    <script src="<c:url value='/js/tmpl/jquery.tmpl.min.js'/>"></script>
    <script src="<c:url value='/js/pagination/jquery.pagination.js'/>"></script>
    <script src="<c:url value='/js/pagination/PageHelper.js'/>"></script>
    <script src="<c:url value='/js/layui/layui.js'/>"></script>
    <script src="<c:url value='/js/common/common.js'/>"></script>
</head>
<body>
<div class="wrap">
    <div class="header"><p>欢迎您进入中国水利部-网上答题系统！感谢您的支持和参与！</p></div>
    <div class="main" style="min-height: 100%">
        <div>
            <div class="caozuo" style="margin-top:10px;">
                <div class="left"><span class="zhuce">答题记录</span></div>
                <%--<div class="right fanhui"><a href="javascript:history.back();">
                    <img src="<%=path %>/images/caozuo8.png" width="13" height="13" class="middle"/>&nbsp;返回</a></div>--%>
            </div>
            <div class="nr_lb">
                <table id="table_answer_record" cellspacing="0" cellpadding="0" width="100%">
                    <thead>
                    <tr>
                        <th width="5%" scope="col">序号</th>
                        <th width="45%" scope="col">答题名称</th>
                        <th width="20%" scope="col">答题时间</th>
                        <th width="15%" scope="col">分数</th>
                        <th width="15%" scope="col">证书下载</th>
                    </tr>
                    </thead>
                    <tbody id="DataContainer">

                    </tbody>
                </table>
                <script id="DataTmpl" type="text/x-jquery-tmpl">
                    <tr>
                        <td>{{= $index + 1}}</td>
                        <td>{{= answer.name}}</td>
                        <td>{{= createTimeStr}}</td>
                        <td>{{= score}}</td>
                        <td><a href="javascript:void(0);" onclick="down({{= score}}, '{{= answer.id}}'); return false;">点击下载</a></td>
                    </tr>

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
    var pageObj = {url: "/handle/dt/list", pageNum: 0, pageSize: 10, container: "#", div: "#table_answer_record"};
    pageHelper(pageObj);
</script>
<script>

    function down(score, answerid) {
        if (answerid) {
            $.ajax({
                type: "POST",
                url: "<%=path%>/handle/answer/getById",
                data: {"answerId": answerid},
                dataType: "json",
                async: false,
                success: function(json) {
                    if (json.code === 0) {
                        if (json.result.paper) {
                            var passScore = json.result.paper.passScore;
                            if (score < passScore) {
                                layer.alert("分数不及格，不能下载证书！", {
                                    icon: 0,
                                    skin: "layui-layer-lan",
                                    closeBtn: 0,
                                    title: "提示信息"
                                }, function (index) {
                                    layer.close(index);
                                });
                            } else {
                                window.open("<%=path%>/pdf/certificate/" + answerid, "_self");
                            }
                        }
                    } else {
                        layer_alert(json.msg);
                    }
                }
            });
        }
    }
</script>
</body>
</html>
