<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
    String path = request.getContextPath();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <title>中国水利部-网上答题</title>
    <link href="<c:url value='/css/style.css'/>" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" href="<c:url value='/js/layui/css/layui.css'/>"/>
    <script src="<c:url value='/js/jquery/jquery.min.js'/>"></script>
    <script src="<c:url value='/js/layui/layui.js'/>"></script>

    <script src="<c:url value='/js/base64/base64.js'/>"></script>
</head>

<body>
<div class="wrap">
    <div class="header"><p>欢迎您进入中国水利部-网上答题系统！感谢您的支持和参与！</p></div>
    <div class="main" style="min-height: 100%">
        <div>
            <div class="caozuo" style="margin-top:10px;">
                <div class="left"><span class="zhuce">欢迎注册</span></div>
                <div class="right fanhui"><a href="javascript:history.go(-1);">
                    <img src="<%=path %>/images/caozuo8.png" width="13" height="13" class="middle"/>&nbsp;返回</a></div>
            </div>
            <div class="nr_lb">
                <form class="layui-form">
                    <table cellspacing="0" cellpadding="0" style="width:70%; margin:0 auto;">
                        <tr>
                            <td width="36%" align="right"><span>*</span>姓名：</td>
                            <td width="64%">
                                <input id="userName" type="text" class="layui-input" lay-verify="required|username"
                                       autocomplete="off" style="width: 200px; height: 25px;"/>
                            </td>
                        </tr>
                        <tr>
                            <td align="right"><span>*</span>单位：</td>
                            <td>
                                <div class="layui-input-inline" style="width: 200px;">
                                    <select id="p_dept" class="middle" lay-verify="required" lay-filter="dept_filter" lay-search>
                                        <option value="">请选择</option>
                                    </select>
                                </div>
                                <div class="layui-input-inline" style="width: 200px;">
                                    <select id="c_dept" class="middle" lay-verify="required" lay-search>
                                        <option value="">请选择</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td align="right"><span>*</span>单位名称：</td>
                            <td><input id="deptName" type="text" class="layui-input" lay-verify="required"
                                       autocomplete="off" style="width: 200px; height: 25px;"/></td>
                        </tr>
                        <tr>
                            <td align="right"><span>*</span>身份证号：</td>
                            <td><input id="idCard" type="text" class="layui-input" lay-verify="required|identity|idCard" autocomplete="off"
                                       style="width: 200px; height: 25px;"/></td>
                        </tr>
                        <tr>
                            <td align="right"><span>*</span>联系电话：</td>
                            <td><input id="telphone" type="text" class="layui-input" lay-verify="required|phone"
                                       style="width: 200px; height: 25px;"/></td>
                        </tr>
                        <tr>
                            <td align="right">通信地址：</td>
                            <td><input id="address" type="text" class="layui-input"
                                       style="width: 200px; height: 25px;"/></td>
                        </tr>
                        <tr>
                            <td align="right">邮政编码：</td>
                            <td><input id="postCode" type="text" class="layui-input" autocomplete="off"
                                       style="width: 200px; height: 25px;"/></td>
                        </tr>
                        <tr>
                            <td align="right"><span>*</span>验证码：</td>
                            <td><input id="code" type="text" class="layui-input" lay-verify="required" autocomplete="off"
                                       style="width: 200px; height: 25px; display: inline;"/>
                                <img id="authCode" src="<%=path %>/getAuthCode" width="83" height="29" class="middle"
                                     onclick="changeAuthCode();" style="cursor: pointer;"/></td>
                        </tr>
                        <tr>
                            <td colspan="2" align="center">
                                <button class="layui-btn" lay-submit lay-filter="*">立即注册</button>
                                <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</div>
<div class="footer">中华人民共和国水利部版权所有</div>
<script>
    layui.use('form', function () {
        var form = layui.form;
        /*-------------------- 单位选项 ------------------*/
        var _dept;
        $.getJSON("<%=path%>/js/dept.json", function (data) {
            _dept = data;
            $.each(_dept.dept, function (i, v) {
                $("#p_dept").append(new Option(v.name, v.pid));
            });
            form.render('select');
        });

        form.on('select(dept_filter)', function (data) {
            var p_dept_id = data.value;
            if (_dept) {
                if (p_dept_id < 5) {
                    $.each(_dept.dept, function (i, v) {
                        if (v.pid == p_dept_id) {
                            $("#c_dept").empty();
                            $.each(v.child, function (index, val) {
                                $("#c_dept").append(new Option(val.name, val.cid));
                            });
                        }
                    });
                } else {
                    $("#c_dept").empty();
                }
                form.render("select");
            }
        });
        /*-------------------- 单位选项 ------------------*/

        //自定义验证规则
        form.verify({
            username: function (value) {
                if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
                    return '用户名不能有特殊字符';
                }
                if (/(^\_)|(\__)|(\_+$)/.test(value)) {
                    return '用户名首尾不能出现下划线\'_\'';
                }
                if (/^\d+\d+\d$/.test(value)) {
                    return '用户名不能全为数字';
                }
                var msg;
                $.ajax({
                    type: "POST",
                    url: "<%=path%>/isExists",
                    data: {userName: value},
                    dataType: "json",
                    async: false,
                    success: function (json) {
                        if (json.code === 0)
                            msg = json.code;
                    }
                });
                if (msg === 0) {
                    return "用户名已存在！";
                }
            },
            idCard: function (value) {
                /*if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
                    return '用户名不能有特殊字符';
                }
                if (/(^\_)|(\__)|(\_+$)/.test(value)) {
                    return '用户名首尾不能出现下划线\'_\'';
                }
                if (/^\d+\d+\d$/.test(value)) {
                    return '用户名不能全为数字';
                }*/
                var base64 = new Base64();
                var msg;
                $.ajax({
                    type: "POST",
                    url: "<%=path%>/isExistsByIdCard",
                    data: {idCard: base64.encode(value)},
                    dataType: "json",
                    async: false,
                    success: function (json) {
                        if (json.code === 0) {
                            msg = json.code;
                        }
                    }
                });
                if (msg === 0) {
                    return "身份证号已存在！";
                }
            },
            phone: function (value) {
                if (value) {
                    /*if (!(/^1(3|4|5|7|8)\d{9}$/.test(value))) {
                        return "请输入正确的手机号";
                    }*/
                    var isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
                    var isMob = /^((\+?86)|(\+86))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;
                    if (!(isMob.test(value) || isPhone.test(value))) {
                        return "请输入正确的手机号";
                    }
                }
            }
        });

        //事件监听
        form.on('select', function (data) {
            console.log(this);
        });

        //监听提交
        form.on('submit(*)', function (data) {
            console.log(data);
            doRegister();
            return false;
        });

    });

    function changeAuthCode() {
        $("#authCode").attr("src", "<%=path %>/getAuthCode?d=" + new Date().getTime());
    }
    ;
    function doRegister() {
        var base64 = new Base64();
        var data = {
            "userName": $("#userName").val(),
            "idCard": base64.encode($("#idCard").val()),
            "telphone": $("#telphone").val(),
            "userDept.parentId": $("#p_dept").val(),
            "userDept.deptId": $("#c_dept").val(),
            "userDept.deptName": $("#deptName").val(),
            "authCode": $("#code").val()
        };
        if ($("#address").val()) {
            data.address = $("#address").val();
        }
        if ($("#postCode").val()) {
            data.postCode = $("#postCode").val();
        }
        $.ajax({
            type: "POST",
            url: "<%=path%>/doRegister",
            data: data,
            dataType: "json",
            async: false,
            success: function (json) {
                if (!json.code) {
                    layer.alert("注册成功！", {
                        icon: 1,
                        skin: "layui-layer-lan",
                        closeBtn: 0,
                        title: "提示信息"
                    }, function () {
                        window.location.href = "<%=path%>/templates/jltldati/index.jsp";
                    });
                } else {
                    layer_alert(json.message);
                }
            }
        });
    }
</script>
</body>
</html>
