(function() {
    var c = {
        id: "d6b01fe48ad0f9291cd04178c6796787",
        dm: ["koudaitong.com"],
        etrk: [],
        js: "tongji.baidu.com/hm-web/js/",
        icon: '',
        br: false,
        ctrk: false,
        align: - 1,
        nv: - 1,
        vdur: 1800000,
        age: 31536000000,
        rec: 0,
        rp: [],
        trust: 0,
        vcard: 0,
        se: []
    };
    var l=!0, m = null, n=!1;
    var r = function() {
        function a(a) {
            /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function(a) {
                var b = d[a];
                if (b)
                    return b;
                b = a.charCodeAt();
                return "\\u00" + Math.floor(b / 16).toString(16) + (b%16).toString(16)
            }));
            return '"' + a + '"'
        }
        function b(a) {
            return 10 > a ? "0" + a : a
        }
        var d = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        return function(d) {
            switch (typeof d) {
            case "undefined":
                return "undefined";
            case "number":
                return isFinite(d) ? String(d) : "null";
            case "string":
                return a(d);
            case "boolean":
                return String(d);
            default:
                if (d === m)
                    return "null";
                if (d instanceof Array) {
                    var f = ["["], h = d.length, k, g, q;
                    for (g = 0; g < h; g++)
                        switch (q = d[g], typeof q) {
                        case "undefined":
                        case "function":
                        case "unknown":
                            break;
                        default:
                            k && f.push(","), f.push(r(q)), k = 1
                        }
                    f.push("]");
                    return f.join("")
                }
                if (d instanceof Date)
                    return '"' + d.getFullYear() + "-" + b(d.getMonth() + 1) + "-" + b(d.getDate()) + "T" + b(d.getHours()) + ":" + b(d.getMinutes()) + ":" + b(d.getSeconds()) + '"';
                k = ["{"];
                for (h in d)
                    if (Object.prototype.hasOwnProperty.call(d, h))
                        switch (g = d[h], typeof g) {
                        case "undefined":
                        case "unknown":
                        case "function":
                            break;
                        default:
                            f && k.push(","), f = 1, k.push(r(h) + ":" + r(g))
                        }
                k.push("}");
                return k.join("")
            }
        }
    }();
    function s(a, b) {
        var d = a.match(RegExp("(^|&|\\?|#)(" + b + ")=([^&#]*)(&|$|#)", ""));
        return d ? d[3] : m
    }
    function v(a) {
        return (a = (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, "") : m) ? a.replace(/:\d+$/, "") : a
    };
    function w(a, b) {
        if (window.sessionStorage)
            try {
                window.sessionStorage.setItem(a, b)
        } catch (d) {}
    }
    function B(a) {
        return window.sessionStorage ? window.sessionStorage.getItem(a) : m
    };
    function C(a, b, d) {
        var e;
        d.e && (e = new Date, e.setTime(e.getTime() + d.e));
        document.cookie = a + "=" + b + (d.domain ? "; domain=" + d.domain : "") + (d.path ? "; path=" + d.path : "") + (e ? "; expires=" + e.toGMTString() : "") + (d.s ? "; secure" : "")
    };
    function D(a, b) {
        var d = new Image, e = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[e] = d;
        d.onload = d.onerror = d.onabort = function() {
            d.onload = d.onerror = d.onabort = m;
            d = window[e] = m;
            b && b(a)
        };
        d.src = a
    };
    var E;
    function F() {
        if (!E)
            try {
                E = document.createElement("input"), E.type = "hidden", E.style.display = "none", E.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(E)
        } catch (a) {
            return n
        }
        return l
    }
    function I(a, b, d) {
        var e = new Date;
        e.setTime(e.getTime() + d || 31536E6);
        try {
            window.localStorage ? (b = e.getTime() + "|" + b, window.localStorage.setItem(a, b)) : F() && (E.expires = e.toUTCString(), E.load(document.location.hostname), E.setAttribute(a, b), E.save(document.location.hostname))
        } catch (f) {}
    }
    function L(a) {
        if (window.localStorage) {
            if (a = window.localStorage.getItem(a)) {
                var b = a.indexOf("|"), d = a.substring(0, b) - 0;
                if (d && d > (new Date).getTime())
                    return a.substring(b + 1)
                }
        } else if (F())
            try {
                return E.load(document.location.hostname), E.getAttribute(a)
        } catch (e) {}
        return m
    };
    function M(a, b, d) {
        a.attachEvent ? a.attachEvent("on" + b, function(b) {
            d.call(a, b)
        }) : a.addEventListener && a.addEventListener(b, d, n)
    };
    (function() {
        function a() {
            if (!a.c) {
                a.c = l;
                for (var b = 0, d = e.length; b < d; b++)
                    e[b]()
            }
        }
        function b() {
            try {
                document.documentElement.doScroll("left")
            } catch (d) {
                setTimeout(b, 1);
                return 
            }
            a()
        }
        var d = n, e = [], f;
        document.addEventListener ? f = function() {
            document.removeEventListener("DOMContentLoaded", f, n);
            a()
        } : document.attachEvent && (f = function() {
            "complete" === document.readyState && (document.detachEvent("onreadystatechange", f), a())
        });
        (function() {
            if (!d)
                if (d = l, "complete" === document.readyState)
                    a.c = l;
                else if (document.addEventListener)
                    document.addEventListener("DOMContentLoaded",
                    f, n), window.addEventListener("load", a, n);
                else if (document.attachEvent) {
                    document.attachEvent("onreadystatechange", f);
                    window.attachEvent("onload", a);
                    var e = n;
                    try {
                        e = window.frameElement == m
                    } catch (k) {}
                    document.documentElement.doScroll && e && b()
                }
        })();
        return function(b) {
            a.c ? b() : e.push(b)
        }
    })().c = n;
    function N(a, b) {
        return "[object " + b + "]" === {}.toString.call(a)
    };
    var aa = navigator.cookieEnabled, ba = navigator.javaEnabled(), ca = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "", da = (window.screen.width || 0) + "x" + (window.screen.height || 0), ka = window.screen.colorDepth || 0;
    var P = 0, Q = Math.round( + new Date / 1E3), R = "https:" == document.location.protocol ? "https:": "http:", la = "cc cf ci ck cl cm cp cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api tt u".split(" ");
    function ma() {
        if ("undefined" == typeof window["_bdhm_loaded_" + c.id]) {
            window["_bdhm_loaded_" + c.id] = l;
            var a = this;
            a.a = {};
            a.r = [];
            a.q = {
                push: function() {
                    a.h.apply(a, arguments)
                }
            };
            a.b = [];
            a.d = 0;
            a.g = n;
            na(a)
        }
    }
    ma.prototype = {
        getData: function(a) {
            try {
                var b = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie);
                return (b ? b[2] : m) || B(a) || L(a)
            } catch (d) {}
        },
        setData: function(a, b, d) {
            try {
                C(a, b, {
                    domain: S(),
                    path: oa(),
                    e: d
                }), d ? I(a, b, d) : w(a, b)
            } catch (e) {}
        },
        n: function() {
            if (0 < this.b.length)
                for (var a = 0, b = this.b.length; a < b; a++)
                    this.h(this.b[a]);
            this.b = m
        },
        h: function(a) {
            if (N(a, "Array")) {
                var b = function(a) {
                    return a.replace ? a.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : a
                }, d = function(a) {
                    for (var b in a)
                        if ({}.hasOwnProperty.call(a,
                        b)) {
                            var e = a[b];
                            N(e, "Object") || N(e, "Array") ? d(e) : a[b] = String(e)
                        }
                };
                switch (a[0]) {
                case "_trackPageview":
                    if (1 < a.length && a[1].charAt && "/" == a[1].charAt(0)) {
                        this.a.api|=4;
                        this.a.et = 0;
                        this.a.ep = "";
                        this.g ? (this.a.nv = 0, this.a.st = 4) : this.g = l;
                        var b = this.a.u, e = this.a.su;
                        this.a.u = R + "//" + document.location.host + a[1];
                        this.a.su = document.location.href;
                        X(this);
                        this.a.u = b;
                        this.a.su = e
                    }
                    break;
                case "_trackEvent":
                    2 < a.length && (this.a.api|=8, this.a.nv = 0, this.a.st = 4, this.a.et = 4, this.a.ep = b(a[1]) + "*" + b(a[2]) + (a[3] ? "*" + b(a[3]) :
                    "") + (a[4] ? "*" + b(a[4]) : ""), X(this));
                    break;
                case "_setCustomVar":
                    if (4 > a.length)
                        break;
                    var e = a[1], f = a[4] || 3;
                    if (0 < e && 6 > e && 0 < f && 4 > f) {
                        this.d++;
                        for (var h = (this.a.cv || "*").split("!"), k = h.length; k < e - 1; k++)
                            h.push("*");
                        h[e - 1] = f + "*" + b(a[2]) + "*" + b(a[3]);
                        this.a.cv = h.join("!");
                        a = this.a.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
                        "" !== a ? this.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : pa()
                    }
                    break;
                case "_trackOrder":
                    a = a[1];
                    N(a, "Object") && (d(a), this.a.api|=16, this.a.nv = 0, this.a.st = 4, this.a.et =
                    94, this.a.ep = r(a), X(this));
                    break;
                case "_trackMobConv":
                    if (a = {
                        webim: 1,
                        tel: 2,
                        map: 3,
                        sms: 4,
                        callback: 5,
                        share: 6
                    }
                    [a[1]])
                        this.a.api|=32, this.a.et = 93, this.a.ep = a, X(this);
                    break;
                case "_trackRTPageview":
                    a = a[1];
                    N(a, "Object") && (d(a), a = r(a), 512 >= encodeURIComponent(a).length && (this.a.api|=64, this.a.rt = a));
                    break;
                case "_trackRTEvent":
                    a = a[1];
                    N(a, "Object") && (d(a), a = r(a), 1024 >= encodeURIComponent(a).length && (b = this.a.rt, this.a.api|=128, this.a.et = 90, this.a.rt = a, X(this), this.a.rt = b));
                    break;
                case "_setUserId":
                    if (a = a[1], N(a,
                    "String") || N(a, "Number"))
                        b = S(), this.i = this.i || Math.round(2147483647 * Math.random()), D("//datax.baidu.com/x.gif?si=" + c.id + "&dm=" + encodeURIComponent(b) + "&ac=" + encodeURIComponent(a) + "&v=hm-1.0.67&li=" + this.i + "&rnd=" + Math.round(2147483647 * Math.random()))
                    }
            }
        }
    };
    function qa() {
        var a = B("Hm_unsent_" + c.id);
        if (a)
            for (var a = a.split(","), b = 0, d = a.length; b < d; b++)
                D(R + "//" + decodeURIComponent(a[b]).replace(/^https?:\/\//, ""), function(a) {
                    Y(a)
                })
    }
    function Y(a) {
        var b = B("Hm_unsent_" + c.id) || "";
        b && ((b = b.replace(RegExp(encodeURIComponent(a.replace(/^https?:\/\//, "")).replace(/([\*\(\)])/g, "\\$1") + "(%26u%3D[^,]*)?,?", "g"), "").replace(/,$/, "")) ? w("Hm_unsent_" + c.id, b) : window.sessionStorage && window.sessionStorage.removeItem("Hm_unsent_" + c.id))
    }
    function ra(a, b) {
        var d = B("Hm_unsent_" + c.id) || "", e = a.a.u ? "": "&u=" + encodeURIComponent(document.location.href), d = encodeURIComponent(b.replace(/^https?:\/\//, "") + e) + (d ? "," + d : "");
        w("Hm_unsent_" + c.id, d)
    }
    function X(a, b) {
        a.a.rnd = Math.round(2147483647 * Math.random());
        a.a.api = a.a.api || a.d ? a.a.api + "_" + a.d : "";
        var d = R + "//hm.baidu.com/hm.gif?" + sa(a);
        a.a.api = 0;
        a.d = 0;
        ra(a, d);
        D(d, function(d) {
            Y(d);
            N(b, "Function") && b.call(a)
        })
    }
    function ta(a) {
        return function() {
            a.a.nv = 0;
            a.a.st = 4;
            a.a.et = 3;
            a.a.ep = ua.p() + "," + ua.o();
            X(a)
        }
    }
    function na(a) {
        try {
            var b, d, e, f, h, k, g;
            P = a.getData("Hm_lpvt_" + c.id) || 0;
            13 == P.length && (P = Math.round(P / 1E3));
            if (document.referrer) {
                var q = n;
                if (Z(document.referrer) && Z(document.location.href))
                    q = l;
                else 
                    var G = v(document.referrer), q = $(G || "", document.location.hostname);
                d = q ? Q - P > c.vdur ? 1 : 4 : 3
            } else 
                d = Q - P > c.vdur ? 1 : 4;
            b = 4 != d ? 1 : 0;
            if (k = a.getData("Hm_lvt_" + c.id)) {
                g = k.split(",");
                for (var t = g.length - 1; 0 <= t; t--)
                    13 == g[t].length && (g[t] = "" + Math.round(g[t] / 1E3));
                for (; 2592E3 < Q - g[0];)
                    g.shift();
                h = 4 > g.length ? 2 : 3;
                for (1 === b && g.push(Q); 4 <
                g.length;)
                    g.shift();
                k = g.join(",");
                f = g[g.length - 1]
            } else 
                k = Q, f = "", h = 1;
            a.setData("Hm_lvt_" + c.id, k, c.age);
            a.setData("Hm_lpvt_" + c.id, Q);
            e = Q == a.getData("Hm_lpvt_" + c.id) ? "1" : "0";
            if (0 == c.nv && Z(document.location.href) && ("" == document.referrer || Z(document.referrer)))
                b = 0, d = 4;
            a.a.nv = b;
            a.a.st = d;
            a.a.cc = e;
            a.a.lt = f;
            a.a.lv = h;
            a.a.si = c.id;
            a.a.su = document.referrer;
            a.a.ds = da;
            a.a.cl = ka + "-bit";
            a.a.ln = ca;
            a.a.ja = ba ? 1 : 0;
            a.a.ck = aa ? 1 : 0;
            a.a.lo = "number" == typeof _bdhm_top ? 1 : 0;
            var x = a.a;
            b = "";
            if (navigator.plugins && navigator.mimeTypes.length) {
                var u =
                navigator.plugins["Shockwave Flash"];
                u && u.description && (b = u.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
            } else if (window.ActiveXObject)
                try {
                    var J = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    J && (b = J.GetVariable("$version")) && (b = b.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
                } catch (Aa) {}
            x.fl = b;
            a.a.v = "1.0.67";
            a.a.cv = decodeURIComponent(a.getData("Hm_cv_" + c.id) || "");
            1 == a.a.nv && (a.a.tt = document.title || "");
            a.a.api = 0;
            var K = document.location.href;
            a.a.cm = s(K, "hmmd") || "";
            a.a.cp = s(K, "hmpl") || "";
            a.a.cw = s(K,
            "hmkw") || "";
            a.a.ci = s(K, "hmci") || "";
            a.a.cf = s(K, "hmsr") || "";
            0 == a.a.nv ? qa() : Y(".*");
            if ("" != c.icon) {
                var y, z = c.icon.split("|"), T = "http://tongji.baidu.com/hm-web/welcome/ico?s=" + c.id, U = ("http:" == R ? "http://eiv" : "https://bs") + ".baidu.com" + z[0] + "." + z[1];
                switch (z[1]) {
                case "swf":
                    var ea = z[2], fa = z[3], x = "s=" + T, u = "HolmesIcon" + Q;
                    y = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + u + '" width="' + ea + '" height="' + fa + '"><param name="movie" value="' + U + '" /><param name="flashvars" value="' + (x || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' +
                    u + '" width="' + ea + '" height="' + fa + '" src="' + U + '" flashvars="' + (x || "") + '" allowscriptaccess="always" /></object>';
                    break;
                case "gif":
                    y = '<a href="' + T + '" target="_blank"><img border="0" src="' + U + '" width="' + z[2] + '" height="' + z[3] + '"></a>';
                    break;
                default:
                    y = '<a href="' + T + '" target="_blank">' + z[0] + "</a>"
                }
                document.write(y)
            }
            var V = document.location.hash.substring(1), wa = RegExp(c.id), xa =- 1 < document.referrer.indexOf("baidu.com") ? l : n, ga = s(V, "jn"), ya = /^heatlink$|^select$/.test(ga);
            if (V && wa.test(V) && xa && ya) {
                var O = document.createElement("script");
                O.setAttribute("type", "text/javascript");
                O.setAttribute("charset", "utf-8");
                O.setAttribute("src", R + "//" + c.js + ga + ".js?" + a.a.rnd);
                var ha = document.getElementsByTagName("script")[0];
                ha.parentNode.insertBefore(O, ha)
            }
            a.k && a.k();
            a.j && a.j();
            if (c.rec || c.trust)
                a.a.nv ? (a.f = encodeURIComponent(document.referrer), window.sessionStorage ? w("Hm_from_" + c.id, a.f) : I("Hm_from_" + c.id, a.f, 864E5)) : a.f = (window.sessionStorage ? B("Hm_from_" + c.id) : L("Hm_from_" + c.id)) || "";
            a.l && a.l();
            a.m && a.m();
            M(window, "unload", ta(a));
            var p = window._hmt;
            if (p && p.length)
                for (y = 0; y < p.length; y++) {
                    var H = p[y];
                    switch (H[0]) {
                    case "_setAccount":
                        1 < H.length && /^[0-9a-z]{32}$/.test(H[1]) && (a.a.api|=1, window._bdhm_account = H[1]);
                        break;
                    case "_setAutoPageview":
                        if (1 < H.length) {
                            var W = H[1];
                            if (n === W || l === W)
                                a.a.api|=2, window._bdhm_autoPageview = W
                        }
                    }
                }
            if ("undefined" === typeof window._bdhm_account || window._bdhm_account === c.id) {
                window._bdhm_account = c.id;
                var A = window._hmt;
                if (A && A.length)
                    for (var p = 0, za = A.length; p < za; p++)
                        N(A[p], "Array") && "_trackEvent" !== A[p][0] && "_trackRTEvent" !==
                        A[p][0] ? a.h(A[p]) : a.b.push(A[p]);
                window._hmt = a.q
            }
            var ia = a.n;
            "undefined" === typeof window._bdhm_autoPageview || window._bdhm_autoPageview === l ? (a.g = l, a.a.et = 0, a.a.ep = "", X(a, ia)) : ia.call(a)
        } catch (ja) {
            a = [], a.push("si=" + c.id), a.push("n=" + encodeURIComponent(ja.name)), a.push("m=" + encodeURIComponent(ja.message)), a.push("r=" + encodeURIComponent(document.referrer)), D(R + "//hm.baidu.com/hm.gif?" + a.join("&"))
        }
    }
    function sa(a) {
        for (var b = [], d = 0, e = la.length; d < e; d++) {
            var f = la[d], h = a.a[f];
            "undefined" != typeof h && "" !== h && b.push(f + "=" + encodeURIComponent(h))
        }
        d = a.a.et;
        (0 === d || 90 === d) && a.a.rt && b.push("rt=" + encodeURIComponent(a.a.rt));
        return b.join("&")
    }
    function pa() {
        var a = "Hm_cv_" + c.id;
        try {
            if (C(a, "", {
                domain: S(),
                path: oa(),
                e: - 1
            }), window.sessionStorage && window.sessionStorage.removeItem(a), window.localStorage)
                window.localStorage.removeItem(a);
            else if (F())
                try {
                    E.load(document.location.hostname), E.removeAttribute(a), E.save(document.location.hostname)
                } catch (b) {}
        } catch (d) {}
    }
    function oa() {
        for (var a = 0, b = c.dm.length; a < b; a++) {
            var d = c.dm[a];
            if ( - 1 < d.indexOf("/") && va(document.location.href, d))
                return d.replace(/^[^\/]+(\/.*)/, "$1") + "/"
        }
        return "/"
    }
    function S() {
        for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++)
            if ($(a, c.dm[b]))
                return c.dm[b].replace(/(:\d+)?[\/\?#].*/, "");
        return a
    }
    function Z(a) {
        for (var b = 0; b < c.dm.length; b++)
            if ( - 1 < c.dm[b].indexOf("/")) {
                if (va(a, c.dm[b]))
                    return l
            } else {
                var d = v(a);
                if (d && $(d, c.dm[b]))
                    return l
            }
        return n
    }
    function va(a, b) {
        a = a.replace(/^https?:\/\//, "");
        return 0 == a.indexOf(b)
    }
    function $(a, b) {
        a = "." + a.replace(/:\d+/, "");
        b = "." + b.replace(/:\d+/, "");
        var d = a.indexOf(b);
        return - 1 < d && d + b.length == a.length
    }
    var ua = function() {
        function a() {
            clearTimeout(J);
            var b;
            x && (b = "visible" == document[x]);
            u && (b=!document[u]);
            f = "undefined" == typeof b ? l : b;
            if ((!e ||!h) && f && k)
                t = l, q =+ new Date;
            else if (e && h && (!f ||!k))
                t = n, G+=+new Date - q;
            e = f;
            h = k;
            J = setTimeout(a, 100)
        }
        function b(a) {
            var b = document, d = "";
            if (a in b)
                d = a;
            else 
                for (var e = ["webkit", "ms", "moz", "o"], f = 0; f < e.length; f++) {
                    var g = e[f] + a.charAt(0).toUpperCase() + a.slice(1);
                    if (g in b) {
                        d = g;
                        break
                    }
                }
            return d
        }
        function d(b) {
            if (!("focus" == b.type || "blur" == b.type) ||!(b.target && b.target != window))
                k =
                "focus" == b.type || "focusin" == b.type ? l : n, a()
        }
        var e = l, f = l, h = l, k = l, g =+ new Date, q = g, G = 0, t = l, x = b("visibilityState"), u = b("hidden"), J;
        a();
        (function() {
            var b = x.replace(/[vV]isibilityState/, "visibilitychange");
            M(document, b, a);
            M(window, "pageshow", a);
            M(window, "pagehide", a);
            "object" == typeof document.onfocusin ? (M(document, "focusin", d), M(document, "focusout", d)) : (M(window, "focus", d), M(window, "blur", d))
        })();
        return {
            p: function() {
                return + new Date - g
            },
            o: function() {
                return t?+new Date - q + G : G
            }
        }
    }();
    new ma;
})();

