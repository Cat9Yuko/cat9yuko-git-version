/**
 * @author jiming.jing
 * @version v1.0.0
 */
var cxtPath = getRootPath() + "/templates/wlaqzs/";

$(document).ready(function () {
    var _this = this;
    this.foo = true;
    isLogin();
    // 绑定提交事件
    $("#save").bind("click", function () {
        _this.foo = true;
        // 数据校验
        _this.checkContent();
        if (_this.foo) {
            layer.confirm("提交后无法修改，是否提交？", {
                icon: 3,
                skin: "layui-layer-lan",
                title: "提示信息",
                btn: ["确定","取消"]
            }, function() {
                commit(buildData());
            }, function() {});
        } else {}
    });
    $("#zancun").bind("click", function () {

        layer.confirm("确定要暂时保存答题结果吗？", {
            icon: 3,
            skin: "layui-layer-lan",
            title: "提示信息",
            btn: ["确定","取消"]
        }, function() {
            commitTemp(buildData());
        }, function() {});

    });
    // 检查内容项是否已选择
    this.checkContent = function () {
        $(".xuanxiang").each(function (i) {
            var item = $(this);
            var span = item.find("p span.error");
            var qType = item.data("qtype");
            var len = 0;
            if (qType == "1" || qType == "3") {
                len = item.find("input:radio:checked").length;
            } else if (qType == "2") {
                item.find("input:checkbox").each(function () {
                    if ($(this).is(":checked")) {
                        len += 1;
                    }
                });
            } else {
                var content = item.find("textarea").val();
                if (content) {
                    len += 1;
                }
            }
            if (len) {
                span.hide();
            } else {
                _this.foo = false;
                span.show();
            }
        });
    };

});

function isLogin() {
    $.ajax({
        "type": "POST",
        "url": getRootPath() + "/isLogin",
        "dataType": "json",
        "async": false,
        success: function(json) {
            if (json.returncode === 999) {
                layer.alert("请登录后再进行答题！", {
                    icon: 0,
                    skin: "layui-layer-lan",
                    closeBtn: 0,
                    title: "提示信息"
                }, function (index) {
                    location.href = cxtPath + "index.jsp";
                });
            } else {
                isAnswered();
            }
        }
    });
}
;
function isAnswered() {
    // 查看结果页“再次答题”不调用此方法
    var flag = getQueryVariable("answer");
    if (flag) {
        return false;
    }
    var answerId = $("body").data("answerid");
    var data = {
        "answerId": answerId
    };
    $.ajax({
        type: "POST",
        url: getRootPath() + "/handle/dt/isAnswered",
        data: data,
        dataType: "json",
        success: function (json) {
            if (json.returncode === 10001 || json.returncode === 10002) {
                $(".buttontijiao").attr("disabled", true);
                layer.alert(json.message, {
                    icon: 0,
                    skin: "layui-layer-lan",
                    closeBtn: 0,
                    title: "提示信息"
                }, function (index) {
                    window.location.href = cxtPath + "score.jsp?score=" + json.result.score +"&answerid=" + answerId;
                });
            } else if (json.returncode === 10003) {
                if (json.result && json.result.score > 0) {
                    window.location.href = cxtPath + "score.jsp?score=" + json.result.score +"&answerid=" + answerId;
                }
            } else {
                // 获取暂时保存的答卷
               // getTemp(answerId);
            }
        }
    });
};

// 提交数据
function commit(data) {
    // 禁用提交按钮
    $("#save").attr("disabled", true).val("提交中");
    $.ajax({
        type: "POST",
        url: getRootPath() + "/handle/dt/add",
        data: {"jsonObj": JSON.stringify(data)},
        dataType: "json",
        async: false,
        success: function(json) {
            if (json.returncode === 0) {
                var result = json.result;
                var answerid = $("body").data("answerid");
                window.open(cxtPath + "score.jsp?score=" + result.score+"&answerid=" + answerid, "_self");
            } else {
                layer.alert("操作超时，请重新登录。", {
                    icon: 0,
                    skin: "layui-layer-lan",
                    closeBtn: 0,
                    title: "提示信息"
                }, function (index) {
                    location.href = cxtPath + "index.jsp";
                })
            }
        },error: function (jqXHR, textStatus, errorThrown) {
            /*layer.alert('提交失败，请联系管理员！', {
                icon: 2,
                shadeClose: true,
                skin: 'layui-layer-lan',
                title: '提示信息'
            });*/
            layer.alert("操作超时，请重新登录。", {
                icon: 0,
                skin: "layui-layer-lan",
                closeBtn: 0,
                title: "提示信息"
            }, function (index) {
                location.href = cxtPath + "index.jsp";
            });
            console.log(errorThrown);
        }
    });
}

// 获取选项数据
function buildData() {

    var data = {};
    // 答题ID
    var answer = {
        "id": $("body").data("answerid")
    };
    data.answer = answer;

    // 组建questions
    var questions = [];

    $(".xuanxiang").each(function (i) {
        var $this = $(this);
        var question = {};
        question.id = $this.data("aval");
        var qType = $this.data("qtype");
        if (qType == "1") {
            // option
            var options = $this.find("ul input:radio:checked").val();
            question.options = options;
        } else if (qType == "2") {
            // options
            var options;
            $this.find("input:checkbox").each(function (index) {
                if ($(this).is(":checked")) {
                    if (options) {
                        options += "|" + $(this).val();
                    } else {
                        options = $(this).val();
                    }
                }
            });
            question.options = options;
        } else if (qType == "3") {
            var options = $this.find("ul input:radio:checked").val();
            question.options = options;
        } else if (qType == "4") {
            var options = $this.find("textarea").val();
            question.options = options;
        }
        if (question.options) {
            questions.push(question);
        }
    });

    data.questions = questions;
    return data;
}
/**
 * 证书下载
 * @param score
 * @param answerid
 */
function down(score, answerid) {
    if (answerid) {
        $.ajax({
            type: "POST",
            url: getRootPath() + "/handle/dt/getAnswerById",
            data: {"answerId": answerid},
            dataType: "json",
            async: false,
            success: function(json) {
                if (json.returncode === 0) {
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
                            window.open(getRootPath() + "/pdf/certificate/" + answerid, "_blank");
                        }
                    }
                } else {
                    layer_alert(json.message);
                }
            }
        });
    }
}

/**
 * 暂时保存数据
 */
function commitTemp(data) {
    $.ajax({
        type: "POST",
        url: getRootPath() + "/handle/dt/addTemporary",
        data: {"jsonObj": JSON.stringify(data)},
        dataType: "json",
        async: false,
        success: function(json) {
            if (json.returncode === 0) {
                layer_ok("保存成功！");
            } else {
                layer_error("保存失败，请联系管理员！");
            }
        },error: function (jqXHR, textStatus, errorThrown) {
            layer.alert('提交失败，请联系管理员！', {
                icon: 2,
                shadeClose: true,
                skin: 'layui-layer-lan',
                title: '提示信息'
            });
        }
    });
};

/**
 * 获取暂时保存的答卷信息
 */
function getTemp(answerId) {
    $.ajax({
        type: "POST",
        url: getRootPath() + "/handle/dt/getTemporary",
        data: {"answerId": answerId},
        dataType: "json",
        async: false,
        success: function(json) {
            if (json.returncode === 0) {
                var result = json.result;
                if (result && result.length > 0) {
                    reloadAnswer(result);
                }
            }
        }
    });
};

/**
 * 还原暂时保存的答卷答案
 * @param result
 */
function reloadAnswer(result) {
    $.each(result, function (i, v) {
        $(".xuanxiang").each(function () {
            var $this = $(this);
            var id = $this.data("aval");
            if (id === v.id) {
                var qType = $this.data("qtype");
                if (qType == "1") {
                    $this.find("ul input:radio[value='"+ v.options +"']").attr("checked", true);
                } else if (qType == "2") {
                    // options
                    var options = v.options.split("|");
                    if (options && options.length > 0) {
                        $.each(options, function (j, n) {
                            $this.find("input:checkbox").each(function () {
                                if ($(this).attr("value") == n) {
                                    $(this).attr("checked", true);
                                }
                            });
                        });
                    }
                } else if (qType == "3") {
                    $this.find("ul input:radio[value='"+ v.options +"']").attr("checked", true);
                } else if (qType == "4") {
                    $this.find("textarea").val(v.options);
                }
            }
        });
    });
    layer_ok("你暂时保存的答卷已经恢复，请继续答题！");
};

// 获取项目地址
function getRootPath() {
    var curWwwPath = window.document.location.href;
    var pathName = window.document.location.pathname;
    var pos = curWwwPath.indexOf(pathName);
    var localhostPaht = curWwwPath.substring(0,pos);
    var projectName = pathName.substring(0,pathName.substr(1).indexOf('/')+1);
    if (projectName.indexOf('wlaqzs')>-1) {
        return(localhostPaht+projectName);
    } else {
        return(localhostPaht);
    }
}
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}

