/*--------------------------------------------------|

| dTree 2.05 | www.destroydrop.com/javascript/tree/ |

|---------------------------------------------------|

| Copyright (c) 2002-2003 Geir Landr?              |

|                                                   |

| This script can be used freely as long as all     |

| copyright messages are intact.                    |

|                                                   |

| Updated: 17.04.2003                               |

|--------------------------------------------------*/

// Node object
function Node(id, dn, pid, name, url, title, target, icon, iconOpen, open, plus) {

    this.id = id;
    this.dn = dn;
    this.pid = pid;
    this.name = name;
    this.code = null;
    this.url = url;
    this.title = title;
    this.target = target;
    this.icon = icon;
    this.iconOpen = iconOpen;
    this._io = open || false;
    this._is = false;
    this._ls = false;
    this._hc = plus || false;
    this._ai = 0;
    this._p;
    this._load = false;
    this._check = false;
};



// Tree object

// treeType:		dept,...
// selectType:		radio,checkbox
// userId:			userIid
// roleType:		1:view,2:edit,3:check,4:manager
function dTree(objName, treeType, selectType, userId, roleType, url, target) {

    this.config = {

        target: null,

        folderLinks: true,

        useSelection: true,

        useCookies: false,

        useLines: true,

        useIcons: true,

        useStatusText: false,

        closeSameLevel: false,

        inOrder: false

    }

    this.icon = {

        root: appName + 'img/base.gif',

        folder: appName + 'img/folder.gif',

        folderOpen: appName + 'img/cms_subject_enable_1_2_open.gif',

        node: appName + 'img/folder.gif',

        empty: appName + 'img/empty.gif',

        line: appName + 'img/empty.gif',

        join: appName + 'img/empty.gif',

        joinBottom: appName + 'img/empty.gif',

        plus: appName + 'img/plus.gif',

        plusBottom: appName + 'img/plusbottom.gif',

        minus: appName + 'img/minus.gif',

        minusBottom: appName + 'img/minusbottom.gif',

        nlPlus: appName + 'img/nolines_plus.gif',

        nlMinus: appName + 'img/nolines_minus.gif'

    };

    this.obj = objName;

    this.aNodes = [];

    this.aIndent = [];

    this.root = new Node(-1);

    this.selectedNode = null;

    this.selectedFound = false;

    this.completed = false;

    this.treeType = treeType; //dept,...
    this.selectType = selectType; //"",radio,checkbox
    this.userId = userId; //usrId
    this.roleType = roleType; //1:view,2:edit,3:check,4:manager
    this.url = url; //url
    this.target = target; //target

    //ajax init
    this.xmlHttp = false;
    /*@cc_on @*/
    /*@if (@_jscript_version >= 5)
    try {
      this.xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        this.xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e2) {
        this.xmlHttp = false;
      }
    }
    @end @*/
    if (!this.xmlHttp && typeof XMLHttpRequest != 'undefined') {
        this.xmlHttp = new XMLHttpRequest();
    }
};



// Adds a new node to the node array
dTree.prototype.add = function(id, dn, pid, name, url, title, target, icon, iconOpen, open, plus) {
    for (var n = 0; n < this.aNodes.length; n++) {

        if (this.aNodes[n].id == pid) {
            this.aNodes[n]._load = true;
            break;
        }
    }

    var node = new Node(id, dn, pid, name, url, title, target, icon, iconOpen, open, plus);
    this.aNodes[this.aNodes.length] = node;
};

dTree.prototype.add = function(id, dn, pid, name, code, url, title, target, icon, iconOpen, open, plus) {

    for (var n = 0; n < this.aNodes.length; n++) {

        if (this.aNodes[n].id == pid) {
            this.aNodes[n]._load = true;
            break;
        }
    }

    var node = new Node(id, dn, pid, name, url, title, target, icon, iconOpen, open, plus);
    node.code = code;
    this.aNodes[this.aNodes.length] = node;
};



// Open/close all nodes

dTree.prototype.openAll = function() {

    this.oAll(true);

};

dTree.prototype.closeAll = function() {

    this.oAll(false);

};



// Outputs the tree to the page

dTree.prototype.formHtml = function() {
    var str = '<div class="dtree">\n';

    if (document.getElementById) {
        if (this.config.useCookies) this.selectedNode = this.getSelected();

        str += this.addNode(this.root);

    } else str += 'Browser not supported.';

    str += '</div>';

    if (!this.selectedFound) this.selectedNode = null;

    this.completed = true;


    return str;

};



// Creates the tree structure
//增加结点
dTree.prototype.addNode = function(pNode) {


    var str = '';

    var n = 0;

    if (this.config.inOrder) n = pNode._ai;

    for (n; n < this.aNodes.length; n++) {

        if (this.aNodes[n].pid == pNode.id) {

            var cn = this.aNodes[n];

            cn._p = pNode;

            cn._ai = n;

            this.setCS(cn);

            if (!cn.target && this.config.target) cn.target = this.config.target;

            if (cn._hc && !cn._io && this.config.useCookies) {
                cn._io = this.isOpen(cn.id);
            }

            if (!this.config.folderLinks && cn._hc) cn.url = null;

            if (this.config.useSelection && cn.id == this.selectedNode && !this.selectedFound) {

                cn._is = true;

                this.selectedNode = n;

                this.selectedFound = true;

            }


            str += this.node(cn, n);

            if (cn._ls) break;

        }

    }

    return str;

};



// Creates the node icon, url and text

dTree.prototype.node = function(node, nodeId) {
    var seachOnclick = "";
    var display = node.id == 0 || node.pid == 0 ? 'style="display:none;"' : '';
    var str = '<div class="dTreeNode"' + display + '>' + this.indent(node, nodeId);
    if (this.config.useIcons) {

        if (!node.icon) node.icon = (this.root.id == node.pid) ? this.icon.root : ((node._hc) ? this.icon.folder : this.icon.node);

        if (!node.iconOpen) node.iconOpen = (node._hc) ? this.icon.folderOpen : this.icon.node;

        if (this.root.id == node.pid) {

            node.icon = this.icon.root;

            node.iconOpen = this.icon.root;

        }
        if (this.selectType != null && this.selectType != "") {
            if (node.url != "#" && node.pid > 0) {
                str += '<input name="selectValue" value="' + nodeId + '" type="' + this.selectType + '" ' + node._check + ' onclick="' + this.obj + '.checkDn(this)" style="width: 16; height: 16; position: relative; top: 2">';
            }
        }
        var addImg = false;
        var imgPath = appName + "img/";
        if (node.icon) {
            if (node.icon.indexOf(imgPath) == -1) {
                addImg = true;
            }
        }
        if (!addImg) {
            str += '<img style="margin:0 0.14rem 0 0.14rem;width:0.34rem;height:0.3rem;" id="i' + this.obj + nodeId + '" src="' + ((node._io) ? node.iconOpen : node.icon) + '" alt="" />';
        } else {
            str += '<img style="margin:0 0.14rem 0 0.14rem;width:0.34rem;height:0.3rem;" id="i' + this.obj + nodeId + '" src="' + ((node._io) ? node.iconOpen : appName + 'img/' + node.icon) + '" alt="" />';
        }
    }
    var nName = node.name;
    nName = nName.substring(0, nName.indexOf("<font"));
    seachOnclick = 'onclick=gotoGipsSearch("' + nName + '","' + node.dn + '",' + node.id + ',' + nodeId + ')';
    str += '<a id="s' + this.obj + nodeId + '" class="' + ((this.config.useSelection) ? ((node._is ? 'nodeSel' : 'node')) : 'node') + '" href="javascript:void(0);"' + seachOnclick;
    str += '>';
    str += node.name;
    str += '</a>';
    str += '</div>';
    if (node._hc) {
        if (this.obj == 'd' && nodeId == '1') {
            str += '<div id="d' + this.obj + nodeId + '" class="clip" style="display:block";>';
        } else {
            str += '<div id="d' + this.obj + nodeId + '" class="clip" style="display:' + ((this.root.id == node.pid || node._io) ? 'block' : 'none') + ';">';
        }
        str += this.addNode(node);
        str += '</div>';
    }

    this.aIndent.pop();
    return str;

};

function isContains(str, substr) {
    return str.indexOf(substr) >= 0;
}

function gotoGipsSearchUrl(SearchUrl) {
    window.open(SearchUrl);
}

//点击是否触发链接
dTree.prototype.checkDn = function(tag) {
    if (tag.checked == false) {
        //just remove it
        this.aNodes[tag.value]._check = "";

    } else {
        if (this.selectType == "radio") {
            for (var i = 0; i < this.aNodes.length; i++) {
                this.aNodes[i]._check = "";
            }
        }
        this.aNodes[tag.value]._check = "checked";
        var actUrl = window.doActUrl;
        if (actUrl) {
            var id = this.aNodes[tag.value].id;
            d.doAction(id);

        }
    }
}

dTree.prototype.getSelect = function() {
    var rrr = new Array();
    var nnn = 0;
    for (var i = 0; i < this.aNodes.length; i++) {
        if (this.aNodes[i]._check == "checked") {
            var rrr1 = new Array();
            rrr1[0] = this.aNodes[i].id;
            rrr1[1] = this.aNodes[i].dn;
            rrr1[2] = this.aNodes[i].name;
            rrr1[3] = this.getFullName(this.aNodes[i].id);
            rrr1[4] = this.aNodes[i].code;

            rrr[nnn] = rrr1;
            nnn++;
        }
    }
    if (rrr.length == 0) return null;
    return rrr;
}
dTree.prototype.getSelect1 = function() {
    var rrr = new Array();
    var nnn = 0;
    for (var i = 0; i < this.aNodes.length; i++) {
        if (this.aNodes[i]._check == "checked") {
            var rrr1 = new Array();
            rrr1[0] = this.aNodes[i].name;
            rrr[nnn] = rrr1;
            nnn++;
        }
    }
    if (rrr.length == 0) return null;
    return rrr;
}
dTree.prototype.getFullName = function(id) {
    for (var i = 0; i < this.aNodes.length; i++) {
        if (this.aNodes[i].id == id) {
            if (this.aNodes[i].pid == -1) {
                return this.aNodes[i].name;
            }

            var fname = this.getFullName(this.aNodes[i].pid);
            return fname + " > " + this.aNodes[i].name;
        }
    }
    return null;
}

// Adds the empty and line icons
dTree.prototype.indent = function(node, nodeId) {

    var str = '';


    if (this.root.id != node.pid) {

        for (var n = 1; n < this.aIndent.length; n++)

            str += '<img  src="' + ((this.aIndent[n] == 1 && this.config.useLines) ? this.icon.line : this.icon.empty) + '" alt="" />';

        (node._ls) ? this.aIndent.push(0): this.aIndent.push(1);

        if (node._hc) {

            str += '<a href="javascript:void(0)" onclick="javascript: ' + this.obj + '.o(' + nodeId + ');"><img  style="width:0.26rem;height:0.26rem;" id="j' + this.obj + nodeId + '" src="';

            if (!this.config.useLines) str += (node._io) ? this.icon.nlMinus : this.icon.nlPlus;

            else str += ((node._io) ? ((node._ls && this.config.useLines) ? this.icon.minusBottom : this.icon.minus) : ((node._ls && this.config.useLines) ? this.icon.plusBottom : this.icon.plus));

            str += '" alt="" /></a>';

        } else str += '<img style="width:0.26rem;height:0.26rem;" src="' + ((this.config.useLines) ? ((node._ls) ? this.icon.joinBottom : this.icon.join) : this.icon.empty) + '" alt="" />';

    }


    return str;

};



// Checks if a node has any children and if it is the last sibling

dTree.prototype.setCS = function(node) {

    var lastId;

    for (var n = 0; n < this.aNodes.length; n++) {

        if (this.aNodes[n].pid == node.id) node._hc = true;

        if (this.aNodes[n].pid == node.pid) lastId = this.aNodes[n].id;

    }

    if (lastId == node.id) node._ls = true;

};



// Returns the selected node

dTree.prototype.getSelected = function() {

    var sn = this.getCookie('cs' + this.obj);

    return (sn) ? sn : null;

};



// Highlights the selected node

dTree.prototype.s = function(id) {
    if (!this.config.useSelection) return;

    var cn = this.aNodes[id];

    if (cn._hc && !this.config.folderLinks) return;

    if (this.selectedNode != id) {

        if (this.selectedNode || this.selectedNode == 0) {

            eOld = document.getElementById("s" + this.obj + this.selectedNode);

            eOld.className = "node";

        }

        eNew = document.getElementById("s" + this.obj + id);

        eNew.className = "nodeSel";

        this.selectedNode = id;

        if (this.config.useCookies) this.setCookie('cs' + this.obj, cn.id);

    }
};

// Toggle Open or close
dTree.prototype.o = function(id) {
    //alert("toggle"+id);

    var cn = this.aNodes[id];


    //load son tree and make div from here
    if (cn._load == false) {
        var url = "/manageweb/popSubTree.action?treeType=" + this.treeType +
            "&selectType=" + this.selectType + "&userId=" + this.userId + "&roleType=" + this.roleType + "&url=" + this.url + "&target=" + this.target +
            "&fatherId=" + cn.id;
        var rec = window.recommend;
        if ((rec) && (rec == "true")) {
            url = "/manageweb/popSubTree.action?treeType=" + this.treeType +
                "&selectType=" + this.selectType + "&userId=" + this.userId + "&roleType=" + this.roleType + "&url=" + this.url + "&target=" + this.target +
                "&fatherId=" + cn.id + "&recommend=true";
        }
        var state = window.statePattern;
        if (state) {
            url = "/manageweb/statePopSubTree.action?treeType=" + this.treeType +
                "&selectType=" + this.selectType + "&userId=" + this.userId + "&roleType=" + this.roleType + "&url=" + this.url + "&target=" + this.target +
                "&fatherId=" + cn.id;
        }


        var roleDeptDn = window.roleDeptDn;

        if (roleDeptDn) {
            url += "&roleDeptDn=" + roleDeptDn;
        }

        var showAll = window.showAll;
        if (showAll) {
            url += "&showAll=" + showAll;
        }

        var manageRole = window.manageRole;
        if (manageRole) {
            url += "&manageRole=" + manageRole;
        }

        var opManageRole = window.opManageRole;
        if (opManageRole) {
            url += "&opManageRole=" + opManageRole;
        }

        var subType = window.subType;
        if (subType) {
            url += "&subType=" + subType;
        }




        //window.open(url,"hidepage");
        this.xmlHttp.open("GET", url, false);
        this.xmlHttp.send();
        var rt = this.xmlHttp.responseText; //id, dn, pid, name, code, url, title, target, icon, iconOpen, open, plus
        //rt = decodeURI(rt);
        //alert(rt);

        var n1 = 0;
        var n = rt.indexOf("|");
        while (n > 0) {
            var id1 = rt.substring(n1, n);
            n1 = n + 1;
            n = rt.indexOf("|", n1);

            var dn1 = rt.substring(n1, n);
            n1 = n + 1;
            n = rt.indexOf("|", n1);

            var pid1 = rt.substring(n1, n);
            n1 = n + 1;
            n = rt.indexOf("|", n1);

            var name1 = rt.substring(n1, n);
            n1 = n + 1;
            n = rt.indexOf("|", n1);

            var code1 = rt.substring(n1, n);
            n1 = n + 1;
            n = rt.indexOf("|", n1);

            var url1 = rt.substring(n1, n);
            n1 = n + 1;
            n = rt.indexOf("|", n1);

            var title1 = rt.substring(n1, n);
            n1 = n + 1;
            n = rt.indexOf("|", n1);

            var target1 = rt.substring(n1, n);
            n1 = n + 1;
            n = rt.indexOf("|", n1);

            var icon1 = rt.substring(n1, n);
            n1 = n + 1;
            n = rt.indexOf("|", n1);
            var iconOpen1 = rt.substring(n1, n);
            n1 = n + 1;
            n = rt.indexOf("|", n1);

            var open1 = rt.substring(n1, n);
            n1 = n + 1;
            n = rt.indexOf("|", n1);

            var plus1 = rt.substring(n1, n);
            n1 = n + 1;
            n = rt.indexOf("|", n1);



            //alert(id1+","+dn1+","+pid1+","+name1+","+code1+","+url1+","+title1+","+target1+","+icon1+","+iconOpen1+","+open1+","+plus1);	    	
            this.add(id1, dn1, pid1, name1, code1, url1, title1, target1, icon1, iconOpen1, open1, plus1 == 'true');
        }

        cn._load = true;


        // this.aNodes[id].name="换他的";
        // this.aNodes[id]._io="true";

        formHtmlElement();
    }

    this.nodeStatus(!cn._io, id, cn._ls);

    cn._io = !cn._io;

    if (this.config.closeSameLevel) this.closeLevel(cn);

    if (this.config.useCookies) this.updateCookie();


};

// Open or close all nodes

dTree.prototype.oAll = function(status) {
    for (var n = 0; n < this.aNodes.length; n++) {

        if (this.aNodes[n]._hc && this.aNodes[n].pid != this.root.id) {
            this.nodeStatus(this.aNodes[n]._io, n, this.aNodes[n]._ls)

            //this.aNodes[n]._io = status;
        }
    }
    if (this.config.useCookies) this.updateCookie();
};



// do action by the specific node

dTree.prototype.doAction = function(nId) {

    if (nId != null && nId != "") {
        for (var n = 0; n < this.aNodes.length; n++) {

            var cn = this.aNodes[n];

            if (cn.id == nId) {
                this.s(n);
                //cn.url=cn.url+"?startDn="+cn.dn;
                //cn.url="/manageweb/security/department/deptattr/group/selectGroup/index.jsp";

                if (cn.url != '#')
                    window.open(cn.url, cn.target);
                return;
            }

        }
    }

    var cn = this.aNodes[0];
    this.s(0);

    if (cn.url != '#')
        window.open(cn.url, cn.target);
};

// Opens the tree to a specific node

dTree.prototype.openTo = function(nId, bSelect, bFirst) {


    if (!bFirst) {

        for (var n = 0; n < this.aNodes.length; n++) {

            if (this.aNodes[n].id == nId) {

                nId = n;

                break;

            }

        }

    }

    var cn = this.aNodes[nId];

    if (cn.pid == this.root.id || !cn._p) return;

    cn._io = true;

    cn._is = bSelect;

    if (this.completed && cn._hc) this.nodeStatus(true, cn._ai, cn._ls);

    if (this.completed && bSelect) this.s(cn._ai);

    else if (bSelect) this._sn = cn._ai;

    this.openTo(cn._p._ai, false, true);

};



// Closes all nodes on the same level as certain node

dTree.prototype.closeLevel = function(node) {


    for (var n = 0; n < this.aNodes.length; n++) {

        if (this.aNodes[n].pid == node.pid && this.aNodes[n].id != node.id && this.aNodes[n]._hc) {

            this.nodeStatus(false, n, this.aNodes[n]._ls);

            this.aNodes[n]._io = false;

            this.closeAllChildren(this.aNodes[n]);

        }

    }

}



// Closes all children of a node

dTree.prototype.closeAllChildren = function(node) {


    for (var n = 0; n < this.aNodes.length; n++) {

        if (this.aNodes[n].pid == node.id && this.aNodes[n]._hc) {

            if (this.aNodes[n]._io) this.nodeStatus(false, n, this.aNodes[n]._ls);

            this.aNodes[n]._io = false;

            this.closeAllChildren(this.aNodes[n]);

        }

    }

}



// Change the status of a node(open or closed)

dTree.prototype.nodeStatus = function(status, id, bottom) {

    //结点状态

    eDiv = document.getElementById('d' + this.obj + id);

    eJoin = document.getElementById('j' + this.obj + id);

    if (this.config.useIcons) {


        eIcon = document.getElementById('i' + this.obj + id);



        var newIcon = this.aNodes[id].iconOpen;
        var oldIcon = this.aNodes[id].icon;
        var index = this.aNodes[id].iconOpen.indexOf(appName + "img/");
        if (index == -1) {

            newIcon = appName + "img/" + this.aNodes[id].iconOpen
        }

        var iold = oldIcon.indexOf(appName + "img/");
        if (iold == -1) {
            oldIcon = appName + "img/" + this.aNodes[id].icon;
        }
        eIcon.src = (status) ? newIcon : oldIcon;
    }

    eJoin.src = (this.config.useLines) ?
        ((status) ? ((bottom) ? this.icon.minusBottom : this.icon.minus) : ((bottom) ? this.icon.plusBottom : this.icon.plus)) :
        ((status) ? this.icon.nlMinus : this.icon.nlPlus);

    eDiv.style.display = (status) ? 'block' : 'none';


};





// [Cookie] Clears a cookie

dTree.prototype.clearCookie = function() {

    var now = new Date();

    var yesterday = new Date(now.getTime() - 1000 * 60 * 60 * 24);

    this.setCookie('co' + this.obj, 'cookieValue', yesterday);

    this.setCookie('cs' + this.obj, 'cookieValue', yesterday);

};



// [Cookie] Sets value in a cookie

dTree.prototype.setCookie = function(cookieName, cookieValue, expires, path, domain, secure) {

    document.cookie =

        escape(cookieName) + '=' + escape(cookieValue)

    +
    (expires ? '; expires=' + expires.toGMTString() : '')

    +
    (path ? '; path=' + path : '')

    +
    (domain ? '; domain=' + domain : '')

    +
    (secure ? '; secure' : '');

};



// [Cookie] Gets a value from a cookie

dTree.prototype.getCookie = function(cookieName) {

    var cookieValue = '';

    var posName = document.cookie.indexOf(escape(cookieName) + '=');

    if (posName != -1) {

        var posValue = posName + (escape(cookieName) + '=').length;

        var endPos = document.cookie.indexOf(';', posValue);

        if (endPos != -1) cookieValue = unescape(document.cookie.substring(posValue, endPos));

        else cookieValue = unescape(document.cookie.substring(posValue));

    }

    return (cookieValue);

};



// [Cookie] Returns ids of open nodes as a string

dTree.prototype.updateCookie = function() {

    var str = '';

    for (var n = 0; n < this.aNodes.length; n++) {

        if (this.aNodes[n]._io && this.aNodes[n].pid != this.root.id) {

            if (str) str += '.';

            str += this.aNodes[n].id;

        }

    }

    this.setCookie('co' + this.obj, str);

};



// [Cookie] Checks if a node id is in a cookie

dTree.prototype.isOpen = function(id) {

    var aOpen = this.getCookie('co' + this.obj).split('.');

    for (var n = 0; n < aOpen.length; n++)

        if (aOpen[n] == id) return true;

    return false;

};



// If Push and pop is not implemented by the browser

if (!Array.prototype.push) {

    Array.prototype.push = function array_push() {

        for (var i = 0; i < arguments.length; i++)

            this[this.length] = arguments[i];

        return this.length;

    }

};

if (!Array.prototype.pop) {

    Array.prototype.pop = function array_pop() {

        lastElement = this[this.length - 1];

        this.length = Math.max(this.length - 1, 0);

        return lastElement;

    }

};