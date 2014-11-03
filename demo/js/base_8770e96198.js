function wxReady(e) {
    if (window.weixin1JSBridge)
        e && e();
    else {
        var t = setTimeout(function() {
            window.weixin1JSBridge && e && e()
        }, 1e3);
        document.addEventListener("weixin1JSBridgeReady", function() {
            clearTimeout(t), e && e()
        })
    }
}
function FastClick(e, t) {
    "use strict";
    function i(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    var n;
    if (t = t || {}, this.trackingClick=!1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = t.touchBoundary || 10, this.layer = e, this.tapDelay = t.tapDelay || 200, !FastClick.notNeeded(e)) {
        for (var o = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], r = this, a = 0, s = o.length; s > a; a++)
            r[o[a]] = i(r[o[a]], r);
        deviceIsAndroid && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, i, n) {
            var o = Node.prototype.removeEventListener;
            "click" === t ? o.call(e, t, i.hijacked || i, n) : o.call(e, t, i, n)
        }, e.addEventListener = function(t, i, n) {
            var o = Node.prototype.addEventListener;
            "click" === t ? o.call(e, t, i.hijacked || (i.hijacked = function(e) {
                e.propagationStopped || i(e)
            }), n) : o.call(e, t, i, n)
        }), "function" == typeof e.onclick && (n = e.onclick, e.addEventListener("click", function(e) {
            n(e)
        }, !1), e.onclick = null)
    }
}
function needConfirm(e, t, i) {
    var n = window.confirm(e);
    n ? t && "function" == typeof t && t.apply() : i && "function" == typeof i && i.apply()
}
var requirejs, require, define;
!function(e) {
    function t(e, t) {
        return v.call(e, t)
    }
    function i(e, t) {
        var i, n, o, r, a, s, l, c, d, u, f, h = t && t.split("/"), p = g.map, m = p && p["*"] || {};
        if (e && "." === e.charAt(0))
            if (t) {
                for (h = h.slice(0, h.length - 1), e = e.split("/"), a = e.length - 1, g.nodeIdCompat && k.test(e[a]) && (e[a] = e[a].replace(k, "")), e = h.concat(e), d = 0; d < e.length; d += 1)
                    if (f = e[d], "." === f)
                        e.splice(d, 1), d -= 1;
                    else if (".." === f) {
                        if (1 === d && (".." === e[2] || ".." === e[0]))
                            break;
                            d > 0 && (e.splice(d - 1, 2), d -= 2)
                    }
                    e = e.join("/")
            } else 
                0 === e.indexOf("./") && (e = e.substring(2));
        if ((h || m) && p) {
            for (i = e.split("/"), d = i.length; d > 0; d -= 1) {
                if (n = i.slice(0, d).join("/"), h)
                    for (u = h.length; u > 0; u -= 1)
                        if (o = p[h.slice(0, u).join("/")], o && (o = o[n])) {
                            r = o, s = d;
                            break
                        }
                if (r)
                    break;
                !l && m && m[n] && (l = m[n], c = d)
            }
            !r && l && (r = l, s = c), r && (i.splice(0, s, r), e = i.join("/"))
        }
        return e
    }
    function n(t, i) {
        return function() {
            var n = w.call(arguments, 0);
            return "string" != typeof n[0] && 1 === n.length && n.push(null), d.apply(e, n.concat([t, i]))
        }
    }
    function o(e) {
        return function(t) {
            return i(t, e)
        }
    }
    function r(e) {
        return function(t) {
            h[e] = t
        }
    }
    function a(i) {
        if (t(p, i)) {
            var n = p[i];
            delete p[i], m[i]=!0, c.apply(e, n)
        }
        if (!t(h, i)&&!t(m, i))
            throw new Error("No " + i);
        return h[i]
    }
    function s(e) {
        var t, i = e ? e.indexOf("!"): - 1;
        return i>-1 && (t = e.substring(0, i), e = e.substring(i + 1, e.length)), [t, e]
    }
    function l(e) {
        return function() {
            return g && g.config && g.config[e] || {}
        }
    }
    var c, d, u, f, h = {}, p = {}, g = {}, m = {}, v = Object.prototype.hasOwnProperty, w = [].slice, k = /\.js$/;
    u = function(e, t) {
        var n, r = s(e), l = r[0];
        return e = r[1], l && (l = i(l, t), n = a(l)), l ? e = n && n.normalize ? n.normalize(e, o(t)) : i(e, t) : (e = i(e, t), r = s(e), l = r[0], e = r[1], l && (n = a(l))), {
            f: l ? l + "!" + e: e,
            n: e,
            pr: l,
            p: n
        }
    }, f = {
        require: function(e) {
            return n(e)
        },
        exports: function(e) {
            var t = h[e];
            return "undefined" != typeof t ? t : h[e] = {}
        },
        module: function(e) {
            return {
                id: e,
                uri: "",
                exports: h[e],
                config: l(e)
            }
        }
    }, c = function(i, o, s, l) {
        var c, d, g, v, w, k, b = [], y = typeof s;
        if (l = l || i, "undefined" === y || "function" === y) {
            for (o=!o.length && s.length ? ["require", "exports", "module"] : o, w = 0; w < o.length; w += 1)
                if (v = u(o[w], l), d = v.f, "require" === d)
                    b[w] = f.require(i);
                else if ("exports" === d)
                    b[w] = f.exports(i), k=!0;
                else if ("module" === d)
                    c = b[w] = f.module(i);
                else if (t(h, d) || t(p, d) || t(m, d))
                    b[w] = a(d);
                else {
                    if (!v.p)
                        throw new Error(i + " missing " + d);
                        v.p.load(v.n, n(l, !0), r(d), {}), b[w] = h[d]
                }
            g = s ? s.apply(h[i], b) : void 0, i && (c && c.exports !== e && c.exports !== h[i] ? h[i] = c.exports : g === e && k || (h[i] = g))
        } else 
            i && (h[i] = s)
    }, requirejs = require = d = function(t, i, n, o, r) {
        if ("string" == typeof t)
            return f[t] ? f[t](i) : a(u(t, i).f);
        if (!t.splice) {
            if (g = t, g.deps && d(g.deps, g.callback), !i)
                return;
            i.splice ? (t = i, i = n, n = null) : t = e
        }
        return i = i || function() {}, "function" == typeof n && (n = o, o = r), o ? c(e, t, i, n) : setTimeout(function() {
            c(e, t, i, n)
        }, 4), d
    }, d.config = function(e) {
        return d(e)
    }, requirejs._defined = h, define = function(e, i, n) {
        i.splice || (n = i, i = []), t(h, e) || t(p, e) || (p[e] = [e, i, n])
    }, define.amd = {
        jQuery: !0
    }
}(), require && require.config({
    baseUrl: window._global.url.cdn_static
}), define("text", [], function() {}), $(function() {
    "use strict";
    var e = window._global, t = $("body"), i = $("html").hasClass("wx_mobile") && e.mp_data&&+e.mp_data.quick_subscribe && e.mp_data.quick_subscribe_url, n = {
        fav: function() {
            return '<div id="js-fav-guide" class="js-fullguide fullscreen-guide fav-guide hide"><span class="guide-close">&times;</span><span class="guide-arrow"></span><div class="guide-inner"><div class="step step-1"></div><div class="step step-2"></div></div></div>'
        },
        share: function() {
            return '<div id="js-share-guide" class="js-fullguide fullscreen-guide hide" style="font-size: 16px; line-height: 35px; color: #fff; text-align: center;"><span class="js-close-guide guide-close">&times;</span><span class="guide-arrow"></span><div class="guide-inner">请点击右上角<br/>通过【发送给朋友】功能<br>或【分享到朋友圈】功能<br>把消息告诉小伙伴哟～</div></div>'
        },
        follow: function(e) {
            var t = e || {}, i = ['<div id="js-follow-guide" class="js-fullguide fullscreen-guide follow-guide hide"><span class="js-close-guide guide-close">&times;</span><div class="guide-inner"><div class="step step-2"></div><div class="wxid"><strong>', t.mp_weixin1, '</strong></div><div class="step step-3"></div></div></div>'];
            return i.join("")
        },
        goodsFollow: function(e) {
            var t = e || {}, i = ['<div id="js-follow-guide" class="js-fullguide fullscreen-guide follow-guide hide"><span class="js-close-guide guide-close">&times;</span><div class="guide-inner"><h3 class="guide-inner-title">你需要关注后才能购买</h3><div class="step step-2"></div><div class="wxid"><strong>', t.mp_weixin1, '</strong></div><div class="step step-3"></div></div></div>'];
            return i.join("")
        },
        goodsQuickSubscribe: function(e) {
            var t = e || {}, i = ['<div id="js-follow-guide" class="js-fullguide fullscreen-guide follow-guide hide"><div class="quick-subscribe js-quick-subscribe"><h2>请先关注后再购买，享受更好的服务~</h2><div><a class="btn" href="', t.quick_subscribe_url, '">去关注</a ></div></div></div>'];
            return i.join("")
        },
        pc: function(e) {
            var t = e || {}, i = ['<div id="js-share-guide" class="js-fullguide fullscreen-guide hide" style="font-size: 20px; line-height: 30px; color: #fff; text-align: center;"> <span class="js-close-guide guide-close">&times;</span> <div class="guide-inner"> 通过微信【扫一扫】功能<br/>扫描二维码关注我们<img style="width:160px; height: 160px;margin-top: 20px;" src="http://open.weixin1.qq.com/qr/code/?username=', t.mp_weixin1, '" alt="', t.mp_weixin1, '"> </div> </div> '];
            return i.join("")
        }
    }, o = {
        follow: "#js-follow-guide",
        fav: "#js-fav-guide",
        share: "#js-share-guide"
    }, r = function(e, t) {
        var i, r;
        $(o[e]).length ? r = $(o[e]) : (i = n[e](t || {}), r = $(i).appendTo("body")), r.removeClass("hide")
    }, a = {
        fav: function() {
            r("fav")
        },
        share: function() {
            r("share")
        },
        follow: function(t) {
            var n = e.mp_data;
            if (n)
                return !(t || {}).goods && i ? void(window.location.href = n.quick_subscribe_url) : void r("follow", n)
        }
    }, s = function(e, t) {
        var i = $(o[e]);
        i && 0 != i.length ? i.removeClass("hide") : a[e](t)
    };
    e.is_mobile ? e && "Showcase_Goods_Controller" === e.controller && (n.follow = i ? n.goodsQuickSubscribe : n.goodsFollow) : n.follow = n.pc, t.on("click", ".wxid", function(e) {
        e.stopPropagation()
    }), t.on("click", ".js-open-follow", function(e) {
        e.preventDefault(), s("follow")
    }), t.on("click", ".js-open-fav", function(e) {
        e.preventDefault(), s("fav")
    }), t.on("click", ".js-open-share", function(e) {
        e.preventDefault(), s("share")
    }), $(document.documentElement).on("click", ".js-fullguide", function() {
        $(this).addClass("hide")
    }), t.on("click", ".js-quick-subscribe", function(e) {
        e.stopPropagation()
    }), window.showGuide = s
}), function() {
    var e = window._global.share || {}, t = function(e) {
        return 0 === e.indexOf("http://imgqn.koudaitong.com") || 0 === e.indexOf("http://imgqntest.koudaitong.com") ? e.replace(/(\![0-9]+x[0-9]+.+)/g, "") + "!200x200.jpg" : e
    }, i = function() {
        var e = "http://static.koudaitong.com/v2/image/wap/logoxx.png", i = $("#wxcover"), n = null;
        return i && i.length > 0 ? (n = i.data("wxcover"), n && 0 !== n.length || (n = i.css("background-image"), n && "none" != n ? (n = /^url\((['"]?)(.*)\1\)$/.exec(n), n = n ? n[2] : null) : n = null)) : (i = null, $(".content img").each(function(e, t) {
            return $(t).hasClass("js-not-share") ? void 0 : (i = $(t), !1)
        }), i && i.length > 0 && (n = i[0].getAttribute("src") || i[0].getAttribute("data-src"))), t(n || (window._global.mp_data || {}).logo || e)
    }, n = function() {
        var e = window._global.current_page_link || document.documentURI, t = Number(window._global.kdt_id) || 0, i = "shop" + (192168 + t);
        if ( - 1 !== e.indexOf("###")) {
            e = decodeURIComponent(e);
            var n = e.match(/redirect_uri\=(.*?)[\&|\$]/i);
            if (!n)
                return !1;
            n.length > 1 && n[1]&&-1 === n[1].indexOf("/x/") && (n = e.match(/state=(.*?)[\#|\&|\$]/i)), e = n.length > 1 ? n[1] : !1
        }
        return t > 0 && (e = e.replace("://wap.", "://" + i + ".")), e
    }, o = function(e) {
        var t = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#x27;": "'"
        }, i = /(\&amp;|\&lt;|\&gt;|\&quot;|\&#x27;)/g;
        return ("" + e).replace(i, function(e) {
            return t[e]
        })
    }, r = function() {
        var t = e.title || window._global.title || document.title, r = e.link || n(), a = e.cover || i(), s = (e.desc || $("#wxdesc").val() || $("#wxdesc").text() || $(".custom-richtext").text() || $(".content-body").text() || $(".content").text() || t || "").replace(/\s*/g, ""), l = function(e, t) {
            var i = e.split("?");
            if (i.length >= 2) {
                for (var n = encodeURIComponent(t) + "=", o = i[1].split(/[&;]/g), r = o.length; r-->0;) 
                    - 1 !== o[r].lastIndexOf(n, 0) && o.splice(r, 1);
                return e = i[0] + "?" + o.join("&")
            }
            return e
        };
        return r = l(r, "redirect_count"), function() {
            t = window.__title || t, r = window.__link || r, a = window.__cover || a, s = window.__desc || s;
            var e, i = $(".time-line-title");
            return i.length > 0 && (e = i.val() || i.text()), {
                title: o(t),
                link: r,
                img_url: a,
                desc: o(s).substring(0, 80),
                img_width: "200",
                img_height: "200",
                timeLineTitle: o((e || "").trim())
            }
        }
    }();
    wxReady(function() {
        var t = window.weixin1JSBridge;
        t && (t.call(e.notShare ? "hideOptionMenu" : "showOptionMenu"), t.call(window._global.js.hide_wx_nav ? "hideToolbar" : "showToolbar"), t.on("menu:share:timeline", function() {
            if (!e.notShare) {
                window.doWhileShare && window.doWhileShare();
                var i = r();
                i.timeLineTitle && (i.title = i.timeLineTitle), t.invoke("shareTimeline", i, function(e) {
                    window.__onShareTimeline && window.__onShareTimeline(e)
                })
            }
        }), t.on("menu:share:appmessage", function() {
            e.notShare || (window.doWhileShare && window.doWhileShare(), t.invoke("sendAppMessage", r(), function() {}))
        }))
    })
}();
var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0, deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent), deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent), deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), deviceIsBlackBerry10 = navigator.userAgent.indexOf("BB10") > 0;
FastClick.prototype.needsClick = function(e) {
    "use strict";
    switch (e.nodeName.toLowerCase()) {
    case"button":
    case"select":
    case"textarea":
        if (e.disabled)
            return !0;
        break;
    case"input":
        if (deviceIsIOS && "file" === e.type || e.disabled)
            return !0;
        break;
    case"label":
    case"video":
        return !0
    }
    return /\bneedsclick\b/.test(e.className)
}, FastClick.prototype.needsFocus = function(e) {
    "use strict";
    switch (e.nodeName.toLowerCase()) {
    case"textarea":
        return !0;
    case"select":
        return !deviceIsAndroid;
    case"input":
        switch (e.type) {
        case"button":
        case"checkbox":
        case"file":
        case"image":
        case"radio":
        case"submit":
            return !1
        }
        return !e.disabled&&!e.readOnly;
    default:
        return /\bneedsfocus\b/.test(e.className)
    }
}, FastClick.prototype.sendClick = function(e, t) {
    "use strict";
    var i, n;
    document.activeElement && document.activeElement !== e && document.activeElement.blur(), n = t.changedTouches[0], i = document.createEvent("MouseEvents"), i.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent=!0, e.dispatchEvent(i)
}, FastClick.prototype.determineEventType = function(e) {
    "use strict";
    return deviceIsAndroid && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
}, FastClick.prototype.focus = function(e) {
    "use strict";
    var t;
    deviceIsIOS && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
}, FastClick.prototype.updateScrollParent = function(e) {
    "use strict";
    var t, i;
    if (t = e.fastClickScrollParent, !t ||!t.contains(e)) {
        i = e;
        do {
            if (i.scrollHeight > i.offsetHeight) {
                t = i, e.fastClickScrollParent = i;
                break
            }
            i = i.parentElement
        }
        while (i)
        }
    t && (t.fastClickLastScrollTop = t.scrollTop)
}, FastClick.prototype.getTargetElementFromEventTarget = function(e) {
    "use strict";
    return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
}, FastClick.prototype.onTouchStart = function(e) {
    "use strict";
    var t, i, n;
    if (e.targetTouches.length > 1)
        return !0;
    if (t = this.getTargetElementFromEventTarget(e.target), i = e.targetTouches[0], deviceIsIOS) {
        if (n = window.getSelection(), n.rangeCount&&!n.isCollapsed)
            return !0;
        if (!deviceIsIOS4) {
            if (i.identifier === this.lastTouchIdentifier)
                return e.preventDefault(), !1;
            this.lastTouchIdentifier = i.identifier, this.updateScrollParent(t)
        }
    }
    return this.trackingClick=!0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = i.pageX, this.touchStartY = i.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
}, FastClick.prototype.touchHasMoved = function(e) {
    "use strict";
    var t = e.changedTouches[0], i = this.touchBoundary;
    return Math.abs(t.pageX - this.touchStartX) > i || Math.abs(t.pageY - this.touchStartY) > i?!0 : !1
}, FastClick.prototype.onTouchMove = function(e) {
    "use strict";
    return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick=!1, this.targetElement = null), !0) : !0
}, FastClick.prototype.findControl = function(e) {
    "use strict";
    return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
}, FastClick.prototype.onTouchEnd = function(e) {
    "use strict";
    var t, i, n, o, r, a = this.targetElement;
    if (!this.trackingClick)
        return !0;
    if (e.timeStamp - this.lastClickTime < this.tapDelay)
        return this.cancelNextClick=!0, !0;
    if (this.cancelNextClick=!1, this.lastClickTime = e.timeStamp, i = this.trackingClickStart, this.trackingClick=!1, this.trackingClickStart = 0, deviceIsIOSWithBadTarget && (r = e.changedTouches[0], a = document.elementFromPoint(r.pageX - window.pageXOffset, r.pageY - window.pageYOffset) || a, a.fastClickScrollParent = this.targetElement.fastClickScrollParent), n = a.tagName.toLowerCase(), "label" === n) {
        if (t = this.findControl(a)) {
            if (this.focus(a), deviceIsAndroid)
                return !1;
            a = t
        }
    } else if (this.needsFocus(a))
        return e.timeStamp - i > 100 || deviceIsIOS && window.top !== window && "input" === n ? (this.targetElement = null, !1) : (this.focus(a), this.sendClick(a, e), deviceIsIOS && "select" === n || (this.targetElement = null, e.preventDefault()), !1);
    return deviceIsIOS&&!deviceIsIOS4 && (o = a.fastClickScrollParent, o && o.fastClickLastScrollTop !== o.scrollTop)?!0 : (this.needsClick(a) || (e.preventDefault(), this.sendClick(a, e)), !1)
}, FastClick.prototype.onTouchCancel = function() {
    "use strict";
    this.trackingClick=!1, this.targetElement = null
}, FastClick.prototype.onMouse = function(e) {
    "use strict";
    return this.targetElement ? e.forwardedTouchEvent?!0 : e.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped=!0, e.stopPropagation(), e.preventDefault(), !1) : !0 : !0
}, FastClick.prototype.onClick = function(e) {
    "use strict";
    var t;
    return this.trackingClick ? (this.targetElement = null, this.trackingClick=!1, !0) : "submit" === e.target.type && 0 === e.detail?!0 : (t = this.onMouse(e), t || (this.targetElement = null), t)
}, FastClick.prototype.destroy = function() {
    "use strict";
    var e = this.layer;
    deviceIsAndroid && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
}, FastClick.notNeeded = function(e) {
    "use strict";
    var t, i, n;
    if ("undefined" == typeof window.ontouchstart)
        return !0;
    if (i =+ (/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
        if (!deviceIsAndroid)
            return !0;
        if (t = document.querySelector("meta[name=viewport]")) {
            if ( - 1 !== t.content.indexOf("user-scalable=no"))
                return !0;
            if (i > 31 && document.documentElement.scrollWidth <= window.outerWidth)
                return !0
        }
    }
    if (deviceIsBlackBerry10 && (n = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), n[1] >= 10 && n[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
        if ( - 1 !== t.content.indexOf("user-scalable=no"))
            return !0;
        if (document.documentElement.scrollWidth <= window.outerWidth)
            return !0
    }
    return "none" === e.style.msTouchAction?!0 : !1
}, FastClick.attach = function(e, t) {
    "use strict";
    return new FastClick(e, t)
}, document.addEventListener("click", function() {}, !0), function(e) {
    e.fn.serializeArray = function() {
        var t, i, n = [];
        return e([].slice.call(this.get(0).elements)).each(function() {
            t = e(this), i = t.attr("type"), "fieldset" != this.nodeName.toLowerCase()&&!this.disabled && "submit" != i && "reset" != i && "button" != i && ("radio" != i && "checkbox" != i || this.checked) && n.push({
                name: t.attr("name"),
                value: t.val()
            })
        }), n
    }, e.fn.serialize = function() {
        var e = [];
        return this.serializeArray().forEach(function(t) {
            e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value))
        }), e.join("&")
    }, e.fn.submit = function(t) {
        if (t)
            this.bind("submit", t);
        else if (this.length) {
            var i = e.Event("submit");
            this.eq(0).trigger(i), i.isDefaultPrevented() || this.get(0).submit()
        }
        return this
    }
}($), function(e) {
    e.kdt = e.kdt || {}, e.extend(e.kdt, {
        getFormData: function(t) {
            var i = t.serializeArray(), n = {};
            return e.map(i, function(e) {
                n[e.name] = e.value
            }), n
        },
        spm: function() {
            var t = e.kdt.getParameterByName("spm");
            if (t = e.trim(t), "" !== t) {
                var i = t.split("_");
                i.length > 2 && (t = i[0] + "_" + i[i.length - 1]), window._global.spm.logType && window._global.spm.logId && (t += "_" + window._global.spm.logType + window._global.spm.logId)
            } else 
                t = window._global.spm.logType + window._global.spm.logId || "";
            return t
        },
        isIOS: function() {
            return /(iPhone|iPad|iPod)/i.test(navigator.userAgent)?!0 : !1
        },
        isAndroid: function() {
            return /Android/i.test(navigator.userAgent)?!0 : !1
        },
        isweixin1: function() {
            return e.kdt._weixin1Ele = e.kdt._weixin1Ele || e(document.documentElement), e.kdt._weixin1Ele.hasClass("wx_mobile")
        },
        isIPad: function() {
            return /iPad/i.test(navigator.userAgent)?!0 : !1
        },
        isMobile: function() {
            return window._global.is_mobile
        },
        isWifi: !1,
        isCellular: !1,
        getParameterByName: function(e) {
            e = e.replace(/[[]/, "\\[").replace(/[]]/, "\\]");
            var t = "[\\?&]" + e + "=([^&#]*)", i = new RegExp(t), n = i.exec(window.location.search);
            return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
        },
        removeParameter: function(e, t) {
            var i = e.split("?");
            if (i.length >= 2) {
                for (var n = encodeURIComponent(t) + "=", o = i[1].split(/[&;]/g), r = o.length; r-->0;) 
                    - 1 !== o[r].lastIndexOf(n, 0) && o.splice(r, 1);
                return e = i[0] + "?" + o.join("&")
            }
            return e
        },
        addParameter: function(t, i) {
            if (!t || 0 === t.length || 0 === e.trim(t).indexOf("javascript"))
                return "";
            var n = t.split("#");
            t = n[0];
            for (var o in i)
                if (i.hasOwnProperty(o)) {
                    if ("" === e.trim(i[o]) && null !== i[o])
                        continue;
                        if (t.indexOf("?") < 0)
                            t += null !== i[o] ? "?" + e.trim(o) + "=" + e.trim(i[o]) : "?" + e.trim(o);
                        else {
                            var r = {}, a = t.split("?");
                            e.each(a[1].split("&"), function(t, i) {
                                var n, t, o;
                                t = i.indexOf("="), n = i.slice(0, t), o = i.slice(t + 1), "" !== e.trim(o) && (r[n] = o)
                            }), e.each(i, function(t, i) {
                                "" !== e.trim(i) && (r[t] = i)
                            });
                            var s = [];
                            e.each(r, function(e, t) {
                                s.push(e + "=" + t)
                            }), t = a[0] + "?" + s.join("&")
                        }
                    }
            return 2 === n.length && (t += "#" + n[1]), t
        },
        log: function(t, i) {
            var n = new Image, o = Math.floor(2147483648 * Math.random()).toString(36), r = "log_" + o;
            window[r] = n, n.onload = n.onerror = n.onabort = function() {
                n.onload = n.onerror = n.onabort = null, window[r] = null, n = null, i === Object(i) && e.isFunction(i.resolve) && i.resolve()
            }, n.src = e.kdt.addParameter(t, {
                time: (new Date).getTime()
            }), window.setTimeout(function() {
                i === Object(i) && e.isFunction(i.resolve) && i.resolve()
            }, 1500)
        },
        getTaobaoModal: function() {
            return e.kdt._taobaoEle = e.kdt._taobaoEle || e("#js-fuck-taobao"), e.kdt._taobaoEle
        },
        fuckTaobao: function(t) {
            return (e.kdt.isIOS() || e.kdt.isAndroid()) && e.kdt.isweixin1() && (t.indexOf("taobao.com") >= 0 || t.indexOf("tmall.com") >= 0)
        },
        openModal: function() {
            this._opened || (e.kdt.isIOS() ? (e.kdt.getTaobaoModal().find(".js-step-2").addClass("step-2"), this._opened=!0) : e.kdt.isAndroid() && (e.kdt.getTaobaoModal().find(".js-step-2").addClass("step-and-2"), this._opened=!0)), e.kdt.getTaobaoModal().removeClass("hide")
        },
        openLink: function(t, i) {
            if (void 0 !== t && null !== t) {
                if (e.kdt.fuckTaobao(t))
                    return e.kdt.openModal();
                if (i = i ||!1) {
                    var n = window.open(t, "_blank");
                    n.focus()
                } else 
                    location.href = t
            }
        }
    })
}($), function() {
    $.kdt.getTaobaoModal().on("click", function(e) {
        e.target.className.indexOf("step-") < 0 && $.kdt.getTaobaoModal().addClass("hide")
    })
}(), $(function() {
    wxReady(function() {
        window.weixin1JSBridge && "function" === (typeof window.weixin1JSBridge.invoke).toLowerCase() && window.weixin1JSBridge.invoke("getNetworkType", {}, function(e) {
            var t = $.trim(e.err_msg);
            "network_type:wifi" === t && ($(document.documentElement).addClass("wifi"), $.kdt.isWifi=!0), ("network_type:edge" === t || "network_type:wwan" === t) && ($.kdt.isCellular=!0);
            var i = {
                spm: $.kdt.spm(),
                fm: "display_network",
                referer_url: encodeURIComponent(document.referrer),
                title: _global.title || $.trim(document.title),
                msg: encodeURIComponent(t)
            }, n = $.kdt.addParameter(_global.logURL, i);
            $.kdt.log(n)
        })
    })
}), function(e, t, i, n) {
    var o = e(t);
    e.fn.lazyload = function(r) {
        function a() {
            var t = 0;
            l.each(function() {
                var i = e(this);
                if (!c.skip_invisible || i.is(":visible"))
                    if (e.abovethetop(this, c) || e.leftofbegin(this, c));
                else if (e.belowthefold(this, c) || e.rightoffold(this, c)) {
                    if (++t > c.failure_limit)
                        return !1
                } else 
                    i.trigger("appear"), t = 0
            })
        }
        var s, l = this, c = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: t,
            data_attribute: "src",
            skip_invisible: !1,
            appear: null,
            load: null,
            placeholder: null
        };
        return r && (n !== r.failurelimit && (r.failure_limit = r.failurelimit, delete r.failurelimit), n !== r.effectspeed && (r.effect_speed = r.effectspeed, delete r.effectspeed), e.extend(c, r)), s = c.container === n || c.container === t ? o : e(c.container), 0 === c.event.indexOf("scroll") && s.bind(c.event, function() {
            return a()
        }), this.each(function() {
            var t = this, i = e(t);
            t.loaded=!1, (i.attr("src") === n || i.attr("src")===!1) && i.is("img") && c.placeholder && i.attr("src", c.placeholder), i.one("appear", function() {
                if (!this.loaded) {
                    if (c.appear) {
                        var n = l.length;
                        c.appear.call(t, n, c)
                    }
                    e("<img />").bind("load", function() {
                        var n = i.attr("data-" + c.data_attribute);
                        i.hide(), i.is("img") ? i.attr("src", n) : i.css("background-image", 'url("' + n + '")'), i[c.effect](), t.loaded=!0;
                        var o = e.grep(l, function(e) {
                            return !e.loaded
                        });
                        if (l = e(o), c.load) {
                            var r = l.length;
                            c.load.call(t, r, c)
                        }
                    }).attr("src", i.attr("data-" + c.data_attribute))
                }
            }), 0 !== c.event.indexOf("scroll") && i.bind(c.event, function() {
                t.loaded || i.trigger("appear")
            })
        }), o.bind("resize", function() {
            a()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && o.bind("pageshow", function(t) {
            t.originalEvent && t.originalEvent.persisted && l.each(function() {
                e(this).trigger("appear")
            })
        }), e(i).ready(function() {
            a()
        }), this
    }, e.belowthefold = function(i, r) {
        var a;
        return a = r.container === n || r.container === t ? (t.innerHeight ? t.innerHeight : o.height()) + o.scrollTop() : e(r.container).offset().top + e(r.container).height(), a <= e(i).offset().top - r.threshold
    }, e.rightoffold = function(i, r) {
        var a;
        return a = r.container === n || r.container === t ? o.width() + o.scrollLeft() : e(r.container).offset().left + e(r.container).width(), a <= e(i).offset().left - r.threshold
    }, e.abovethetop = function(i, r) {
        var a;
        return a = r.container === n || r.container === t ? o.scrollTop() : e(r.container).offset().top, a >= e(i).offset().top + r.threshold + e(i).height()
    }, e.leftofbegin = function(i, r) {
        var a;
        return a = r.container === n || r.container === t ? o.scrollLeft() : e(r.container).offset().left, a >= e(i).offset().left + r.threshold + e(i).width()
    }, e.inviewport = function(t, i) {
        return !(e.rightoffold(t, i) || e.leftofbegin(t, i) || e.belowthefold(t, i) || e.abovethetop(t, i))
    }
}($, window, document), function() {
    var e = $.kdt.spm();
    $.kdt.clickLogHandler = function(t) {
        function i() {
            var i = $.Deferred().done(function() {
                ($.kdt.isMobile() ||!r) && $.kdt.openLink(l)
            }), n = {
                spm: e,
                fm: "click",
                url: window.encodeURIComponent(o),
                referer_url: encodeURIComponent(document.referrer),
                title: $.trim(s)
            };
            t.fromMenu && $.extend(n, {
                click_type: "menu"
            }), null !== a && void 0 !== a && $.extend(n, {
                click_id: a
            });
            var c = $.kdt.addParameter(_global.logURL, n);
            $.kdt.log(c, i)
        }
        var n = $(this), o = n.attr("href"), r = "_blank" === n.attr("target"), a = n.data("goods-id"), s = n.prop("title") || n.text();
        if ("" !== $.trim(o) && 0 !== $.trim(o).indexOf("javascript")&&!n.hasClass("js-no-follow")) {
            var l = o;
            o.match(/^https?:\/\/\S*\.?(koudaitong\.com|kdt\.im|youzan\.com)/) && (l = $.kdt.addParameter(o, {
                spm: e
            })), i(), $.kdt.isMobile() ||!r ? t.preventDefault() : n.attr("href", l)
        }
    }, $(document).on("click", "a", $.kdt.clickLogHandler);
    var t = function() {
        var e = [], t = $(".js-goods");
        return t.length < 1 ? null : (t.each(function(t, i) {
            var n = $(i);
            e.push(n.data("goods-id"))
        }), e.join(","))
    }(), i = {
        spm: e,
        fm: "display",
        referer_url: encodeURIComponent(document.referrer),
        title: _global.title || $.trim(document.title)
    };
    t && $.extend(i, {
        display_goods: t
    });
    var n = $.kdt.addParameter(_global.logURL, i);
    $.kdt.log(n), $(".js-lazy").lazyload({
        threshold: 200
    }), $(".js-goods-lazy").lazyload({
        threshold: 200,
        appear: function() {
            var t, i = $(this).parents(".js-goods").first().data("goods-id");
            t = e.lastIndexOf("_") === e.length - 1 ? e + "SI" + i : e + "_SI" + i, $.kdt.log($.kdt.addParameter(_global.logURL, {
                spm: t,
                fm: "display",
                referer_url: encodeURIComponent(document.referrer)
            }))
        }
    });
    var o = ($(document.documentElement), $(".js-mp-info")), r = window.navigator.userAgent, a = r.match(/MicroMessenger\/(\d+(\.\d+)*)/), s = null !== a && a.length, l = s ? a[1]: "", c = l.split("."), d = [5, 2, 0], u=!0;
    for (var f in d) {
        if (!c[f])
            break;
        if (parseInt(c[f]) < d[f]) {
            u=!0;
            break
        }
        if (parseInt(c[f]) > d[f]) {
            u=!1;
            break
        }
    }
    var h = $.kdt.isAndroid() && $.kdt.isweixin1() && u;
    h || o.on("click", ".js-follow-mp", function() {
        return window.showGuide && window.showGuide("follow"), !1
    })
}($, window, document), function() {
    var e = $.kdt.getParameterByName("promote"), t = $.kdt.getParameterByName("from"), i = $("a");
    e && i.each(function() {
        var t = $(this), i = t.attr("href");
        i = $.kdt.addParameter(i, {
            promote: e
        }), i && t.attr("href", i)
    }), t && i.each(function() {
        var e = $(this), i = e.attr("href");
        i = $.kdt.addParameter(i, {
            from: t
        }), i && e.attr("href", i)
    })
}(), function() {
    setTimeout(function() {
        var e = $(".js-follow-qrcode");
        if (!window._global.mp_data || e.length <= 0 || $.kdt.isMobile()&&!$.kdt.isIPad())
            return !1;
        var t = "http://###/qr/code/?username=" + window._global.mp_data.mp_weixin1, i = new Image;
        i.width = 158, i.height = 158, $(i).on("load", function() {
            e.append(i).removeClass("loading")
        }), i.src = t
    }, 500)
}(), function(e, t) {
    function i() {
        e(".motify").length ? this.$el = e(".motify") : (this.$el = e('<div class="motify"><div class="motify-inner"></div></div>'), e("body").append(this.$el))
    }
    i.prototype = {
        log: function(e, t, i) {
            this.clear(), this.$el.find(".motify-inner").html(e), this.$el.show(), this.hide(t, i)
        },
        hide: function(e, i) {
            var n = this, o = e || 2e3;
            o > 0 && (n.$el.removeClass("motifyFx"), t.clearTimeout(n.hideTimer), n.hideTimer = t.setTimeout(function() {
                n.$el.addClass("motifyFx"), i && i.apply(n), n.clear()
            }, "function" != typeof i ? o : o + 300))
        },
        clear: function() {
            this.$el.hide().removeClass("motifyFx")
        }
    }, t.motify = t.motify || new i
}($, window), window.addEventListener("load", function() {
    FastClick.attach(document.body)
}, !1);
