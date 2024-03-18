var cxtPath = "/wlaqzs/templates/wlaqzs/";
$.ajaxSetup({
    complete: function (xhr, status) {
        var sessionStatus = xhr.getResponseHeader('sessionstatus');
        if (sessionStatus == "timeout") {
            layer.alert("操作超时，请重新登录。", {
                icon: 0,
                skin: "layui-layer-lan",
                closeBtn: 0,
                title: "提示信息"
            }, function (index) {
                location.href = cxtPath + "index.jsp";
            });
        }
    }
});