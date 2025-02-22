function ZoomPic() {
    this.initialize.apply(this, arguments)
}
ZoomPic.prototype = {
    initialize: function(c) {
        var a = this;
        this.wrap = typeof c === "string" ? document.getElementById(c) : c;
        this.oUl = this.wrap.getElementsByTagName("ul")[0];
        this.aLi = this.wrap.getElementsByTagName("li");
        this.prev = this.wrap.getElementsByTagName("pre")[0];
        this.next = this.wrap.getElementsByTagName("pre")[1];
        this.timer = null;
        this.aSort = [];
        this.iCenter = 3;
        this._doPrev = function() {
            return a.doPrev.apply(a)
        }
        ;
        this._doNext = function() {
            return a.doNext.apply(a)
        }
        ;
        this.options = [ {
            width: 120,
            height: 150,
            top: 71,
            left: 134,
            zIndex: 1
        },{
            width: 407,
            height: 571,
            top: 61,
            left: 0,
            zIndex: 2
        }, {
            width: 452,
            height: 634,
            top: 37,
            left: 110,
            zIndex: 3
        }, {
            width: 500,
            height: 700,
            top: 0,
            left: 262,
            zIndex: 4
        }, {
            width: 452,
            height: 634,
            top: 37,
            left: 468,
            zIndex: 3
        }, {
            width: 407,
            height: 571,
            top: 61,
            left: 620,
            zIndex: 2
        }, {
            width: 120,
            height: 150,
            top: 71,
            left: 496,
            zIndex: 1
        }];
        for (var b = 0; b < this.aLi.length; b++) {
            this.aSort[b] = this.aLi[b]
        }
        this.aSort.unshift(this.aSort.pop());
        this.setUp();
        this.addEvent(this.prev, "click", this._doPrev);
        this.addEvent(this.next, "click", this._doNext);
        this.doImgClick();
        this.timer = setInterval(function() {
            a.doNext()
        }, 5000);
        this.wrap.onmouseover = function() {
            clearInterval(a.timer)
        }
        ;
        this.wrap.onmouseout = function() {
            a.timer = setInterval(function() {
                a.doNext()
            }, 5000)
        }
    },
    doPrev: function() {
        this.aSort.unshift(this.aSort.pop());
        this.setUp()
    },
    doNext: function() {
        this.aSort.push(this.aSort.shift());
        this.setUp()
    },
    doImgClick: function() {
        var a = this;
        for (var b = 0; b < this.aSort.length; b++) {
            this.aSort[b].onclick = function() {
                if (this.index > a.iCenter) {
                    for (var c = 0; c < this.index - a.iCenter; c++) {
                        a.aSort.push(a.aSort.shift())
                    }
                    a.setUp()
                } else {
                    if (this.index < a.iCenter) {
                        for (var c = 0; c < a.iCenter - this.index; c++) {
                            a.aSort.unshift(a.aSort.pop())
                        }
                        a.setUp()
                    }
                }
            }
        }
    },
    setUp: function() {
        var a = this;
        var b = 0;
        for (b = 0; b < this.aSort.length; b++) {
            this.oUl.appendChild(this.aSort[b])
        }
        for (b = 0; b < this.aSort.length; b++) {
            this.aSort[b].index = b;
            if (b < 7) {
                this.css(this.aSort[b], "display", "block");
                this.doMove(this.aSort[b], this.options[b], function() {
                    a.doMove(a.aSort[a.iCenter].getElementsByTagName("img")[0], {
                        opacity: 100
                    }, function() {
                        a.doMove(a.aSort[a.iCenter].getElementsByTagName("img")[0], {
                            opacity: 100
                        }, function() {
                            a.aSort[a.iCenter].onmouseover = function() {
                                a.doMove(this.getElementsByTagName("div")[0], {
                                    bottom: 0
                                })
                            }
                            ;
                            a.aSort[a.iCenter].onmouseout = function() {
                                a.doMove(this.getElementsByTagName("div")[0], {
                                    bottom: -100
                                })
                            }
                        })
                    })
                })
            } else {
                this.css(this.aSort[b], "display", "none");
                this.css(this.aSort[b], "width", 0);
                this.css(this.aSort[b], "height", 0);
                this.css(this.aSort[b], "top", 37);
                this.css(this.aSort[b], "left", this.oUl.offsetWidth / 2)
            }
            if (b < this.iCenter || b > this.iCenter) {
                this.css(this.aSort[b].getElementsByTagName("img")[0], "opacity", 100);
                this.aSort[b].onmouseover = function() {
                    a.doMove(this.getElementsByTagName("img")[0], {
                        opacity: 100
                    })
                }
                ;
                this.aSort[b].onmouseout = function() {
                    a.doMove(this.getElementsByTagName("img")[0], {
                        opacity: 100
                    })
                }
                ;
                this.aSort[b].onmouseout()
            } else {
                this.aSort[b].onmouseover = this.aSort[b].onmouseout = null
            }
        }
    },
    addEvent: function(b, c, a) {
        return b.addEventListener ? b.addEventListener(c, a, false) : b.attachEvent("on" + c, a)
    },
    css: function(b, a, c) {
        if (arguments.length == 2) {
            return b.currentStyle ? b.currentStyle[a] : getComputedStyle(b, null)[a]
        } else {
            if (arguments.length == 3) {
                switch (a) {
                case "width":
                case "height":
                case "top":
                case "left":
                case "bottom":
                    b.style[a] = c + "px";
                    break;
                case "opacity":
                    b.style.filter = "alpha(opacity=" + c + ")";
                    b.style.opacity = c / 100;
                    break;
                default:
                    b.style[a] = c;
                    break
                }
            }
        }
    },
    doMove: function(d, c, b) {
        var a = this;
        clearInterval(d.timer);
        d.timer = setInterval(function() {
            var e = true;
            for (var h in c) {
                var f = parseFloat(a.css(d, h));
                h == "opacity" && (f = parseInt(f.toFixed(2) * 100));
                var g = (c[h] - f) / 5;
                g = g > 0 ? Math.ceil(g) : Math.floor(g);
                if (f != c[h]) {
                    e = false;
                    a.css(d, h, f + g)
                }
            }
            if (e) {
                clearInterval(d.timer);
                b && b.apply(a, arguments)
            }
        }, 30)
    }
};
window.onload = function() {
    new ZoomPic("box")
}
