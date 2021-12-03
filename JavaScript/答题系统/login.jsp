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
    <link href="<c:url value='/css/style.css'/>" rel="stylesheet"/>
    <link href="<c:url value='/js/layui/css/layui.css'/>" rel="stylesheet"/>
    <script src="<c:url value='/js/jquery/jquery.min.js'/>"></script>
    <script src="<c:url value='/js/layui/layui.js'/>"></script>
    <script src="<c:url value='/js/common/common.js'/>"></script>
    <script src="<c:url value='/js/base64/base64.js'/>"></script>
</head>

<body>
<div class="wrap">
    <div class="header"><p>欢迎您进入中国水利部-网上答题系统！感谢您的支持和参与！</p></div>
    <div class="main">
        <div>
            <div class="caozuo" style="margin-top:10px;">
                <div class="left"><span class="zhuce">欢迎登录</span></div>
                <div class="right fanhui">
                    <a href="answer_record.jsp" target="_blank" id="answer_log" style="display: none;">
                        <img src="<%=path %>/images/caozuo9.png" width="13" height="13" class="middle"/>&nbsp;查看答题记录</a>
                    <a href="javascript:history.go(-1);">
                        <img src="<%=path %>/images/caozuo8.png" width="13" height="13" class="middle"/>&nbsp;返回</a>
                </div>
            </div>
            <div class="nr_lb">
                <form class="layui-form" id="form_login">
                    <table cellspacing="0" cellpadding="0" style="width:70%; margin:75px auto;">
                        <tr>
                            <td width="36%" align="right"><span>*</span>用户名：</td>
                            <td width="64%">
                                <input id="userName" type="text" class="layui-input" autocomplete="off" style="width: 200px; height: 30px;" lay-verify="required"/>
                            </td>
                        </tr>
                        <tr>
                            <td align="right"><span>*</span>身份证号：</td>
                            <td><input id="idCard" type="text" class="layui-input" autocomplete="off" style="width: 200px; height: 30px;" lay-verify="required|identity"/></td>
                        </tr>
                        <tr>
                            <td align="right"><span>*</span>验证码：</td>
                            <td><input id="auth_code" type="text" class="layui-input" autocomplete="off"
                                       style="width: 200px; height: 30px; display: inline;"/>
                                <img id="authCode" src="<%=path %>/getAuthCode" width="83" height="29"
                                     class="middle"
                                     onclick="changeAuthCode();" style="cursor: pointer;"/></td>
                        </tr>
                        <tr>
                            <td colspan="2" align="center">
                                <button class="layui-btn" lay-submit lay-filter="login">登录</button>
                                <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                                <button class="layui-btn layui-btn-normal" onclick="doRegister(); return false;">注册</button>
                            </td>
                        </tr>
                    </table>
                </form>
                <div class="layui-form" id="form_user_info" style="display: none;">
                    <table cellspacing="0" cellpadding="0" style="width:70%; margin:0 auto;">
                        <tr>
                            <td width="36%" align="right"><span>*</span>姓名：</td>
                            <td width="64%">
                                <input id="user_id" type="hidden" />
                                <input id="user_name" type="text" class="layui-input" lay-verify="required|username"
                                       autocomplete="off" style="width: 200px; height: 25px;"/>
                            </td>
                        </tr>
                        <tr>
                            <td align="right"><span>*</span>单位：</td>
                            <td>
                                <div class="layui-input-inline" style="width: 200px;">
                                    <select id="p_dept" class="middle" lay-verify="required" lay-filter="dept_filter" lay-search>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div class="layui-input-inline" style="width: 200px;">
                                    <select id="c_dept" class="middle" lay-verify="required" lay-search>
                                        <option value=""></option>
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
                            <td><input id="id_card" type="text" class="layui-input" lay-verify="required|identity" autocomplete="off"
                                       style="width: 200px; height: 25px;"/></td>
                        </tr>
                        <tr>
                            <td align="right"><span>*</span>联系电话：</td>
                            <td><input id="telphone" type="text" class="layui-input" lay-verify="required|phone"
                                       style="width: 200px; height: 25px;"/></td>
                        </tr>
                        <tr>
                            <td align="right">通信地址：</td>
                            <td><input id="address" type="text" class="layui-input" lay-verify="required"
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
                                <img id="code1" src="<%=path %>/getAuthCode" width="83" height="29" class="middle"
                                     onclick="changeAuthCode1();" style="cursor: pointer;"/></td>
                        </tr>
                        <tr>
                            <td colspan="2" align="center">
                                <button class="layui-btn" onclick="update();">修改信息</button>
                                <button class="layui-btn" lay-submit lay-filter="doUpdate" id="save_btn" style="display: none;">保存修改</button>
                                <button class="layui-btn" id="answer_btn" onclick="doAnswer();">开始答题</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</div>
<div class="footer">中华人民共和国水利部版权所有</div>
<script>
    var _dept;
    var form;
    layui.use('form', function () {
        form = layui.form;
        /*-------------------- 单位选项 ------------------*/
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
            }
        });

        //监听提交
        form.on('submit(login)', function (data) {
            console.log(data);
            doLogin();
            return false;
        });
        form.on('submit(doUpdate)', function (data) {
            console.log(data);
            updateInfo();
            return false;
        });
    });
    function changeAuthCode() {
        $("#authCode").attr("src", "<%=path %>/getAuthCode?d=" + new Date().getTime());
    }
    ;function changeAuthCode1() {
        $("#code1").attr("src", "<%=path %>/getAuthCode?d=" + new Date().getTime());
    }
    ;
    $('#userName').keypress(function (event) {
        if (event.which == 13) {
            $('#idCard').focus();
            $('#idCard').select();
        }
    });
    $('#idCard').keypress(function (event) {
        if (event.which == 13) {
            $('#auth_code').focus();
            $('#auth_code').select();
        }
    });
    $('#auth_code').keypress(function (event) {
        if (event.which == 13) {
            $('#loginBtn').click();
        }
    });
    function doLogin() {
        var base64 = new Base64();
        var data = {
            "userName": base64.encode($("#userName").val()),
            "idCard": base64.encode($("#idCard").val()),
            "authCode": $("#auth_code").val()
        };
        $.ajax({
            type: "POST",
            url: "<%=path %>/doLogin",
            data: data,
            dataType: "json",
            async: false,
            success: function (json) {
                if (json.code === 0) {
                    $("#form_login").fadeOut("fast", function () {
                        // 设置用户信息
                        var user = json.result;
                        $("#user_id").val(user.id);
                        $("#user_name").val(user.userName);
                        $("#id_card").val(user.idCard);
                        $("#telphone").val(user.telphone);
                        $("#address").val(user.address);
                        $("#postCode").val(user.postCode == 0 ? '' : user.postCode);
                        var parentId = user.userDept.parentId;
                        var deptId = user.userDept.deptId;
                        if (parentId) {
                            $("#p_dept option").each(function (i) {
                                if (i == parentId) {
                                    $(this).attr("selected", true);
                                }
                            });
                            form.render("select");
                        };
                        $.each(_dept.dept, function (i, v) {
                            if (v.pid == parentId) {
                                $("#c_dept").empty();
                                if (v.child) {
                                    $.each(v.child, function (index, val) {
                                        var option = new Option(val.name, val.cid);
                                        if (val.cid == deptId) {
                                            option.setAttribute("selected", true);
                                        }
                                        $("#c_dept").append(option);
                                    });
                                }
                            }
                        });
                        form.render("select");
                        $("#deptName").val(user.userDept.deptName);
                        // 禁用表单编辑
                        $("#form_user_info").find("input").each(function () {
                            $(this).attr("disabled", true)
                        });

                        $("#form_user_info").fadeIn();
                        $(".zhuce").text("欢迎登录，请校对个人信息");
                        $("#answer_log").css("display", "");
                        changeAuthCode1();
                    });
                } else {
                    changeAuthCode();
                    layer_error(json.message);
                }
            }
        });
    }
    ;
    function updateInfo() {
        var data = {
            "id": $("#user_id").val(),
            "userName": $("#user_name").val(),
            "idCard": $("#id_card").val(),
            "telphone": $("#telphone").val(),
            "address": $("#address").val(),
            "postCode": $("#postCode").val(),
            "userDept.userId": $("#user_id").val(),
            "userDept.parentId": $("#p_dept").val(),
            "userDept.deptId": $("#c_dept").val(),
            "userDept.deptName": $("#deptName").val(),
            "authCode": $("#code").val()
        };
        $.ajax({
            type: "POST",
            url: "<%=path%>/handle/user/doEdit",
            data: data,
            dataType: "json",
            async: false,
            success: function (json) {
                if (json.code === 0) {
                    layer.alert("保存成功！", {
                        icon: 1,
                        skin: "layui-layer-lan",
                        closeBtn: 0,
                        title: "提示信息"
                    }, function (index) {
                        $("#save_btn").hide();
                        $("#answer_btn").show();
                        layer.close(index);
                    });
                } else {
                    layer_alert(json.message);
                }
            }
        });
    };
    // 启用表单编辑
    function update() {
        $("#form_user_info").find("input").each(function () {
            $(this).attr("disabled", false);
        });
        $("#save_btn").css("display", "");
        $("#answer_btn").css("display", "none");
    }
    ;
    function doAnswer() {
        window.location.href = "<%=path%>/templates/jltldati/index.jsp";
    };
    function doRegister() {
        window.location.href = "<%=path%>/templates/jltldati/register.jsp";
    }
</script>
</body>
</html>
