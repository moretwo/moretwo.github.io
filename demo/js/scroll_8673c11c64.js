!function(t) {
    t.fn.coffee = function(e) {
        function i() {
            var e = s(6, l.steamMaxSize), i = o(1, l.steamsFontFamily), a = "#" + o(6, "0123456789ABCDEF"), r = s(20, 40), h = s( - 90, 89), d = n(.4, 1), u = ":rotate(" + h + "deg) scale(" + d + ");", f = "-webkit-transform" + u + "transform" + u, p = t('<span class="coffee-steam">' + o(1, l.steams) + "</span>"), m = s(0, 40), g = s(l.steamFlyTime / 2, 1.2 * l.steamFlyTime);
            p.css({
                position: "absolute",
                left: r,
                top: l.steamHeight,
                "font-size:": e + "px",
                color: a,
                "font-family": i,
                display: "block",
                opacity: 1
            }).attr("style", p.attr("style") + f).appendTo(c), p.size() && p.get(0).clientLeft, p.css({
                top: s(l.steamHeight / 2, 0),
                left: m,
                opacity: 0,
                transition: "all ease " + g / 1e3 + "s"
            }), setTimeout(function() {
                p.remove(), p = null
            }, g)
        }
        function a() {
            var t = s(0, 40);
            c.size() && c.get(0).clientLeft, c.css({
                left: t,
                transition: "all ease " + s(1e3, 3e3) / 1e3 + "s"
            })
        }
        function o(t, e) {
            t = t || 1;
            for (var i = "", a = e.length - 1, o = 0, n = 0; t > n; n++)
                o = s(0, a - 1), i += e.slice(o, o + 1);
            return i
        }
        function s(t, e) {
            var i = e - t, a = t + Math.round(Math.random() * i);
            return parseInt(a)
        }
        function n(t, e) {
            var i = e - t, a = t + Math.random() * i;
            return parseFloat(a)
        }
        var r = null, h = null, d = t(this), l = t.extend({}, t.fn.coffee.defaults, e), c = (l.steamWidth, t('<div class="coffee-steam-box"></div>').css({
            height: l.steamHeight,
            width: l.steamWidth,
            left: 20,
            top: - 40,
            position: "absolute",
            overflow: "hidden",
            "z-index": 0
        }).appendTo(d));
        return t.fn.coffee.stop = function() {
            clearInterval(r), clearInterval(h)
        }, t.fn.coffee.start = function() {
            r = setInterval(function() {
                i()
            }, s(l.steamInterval / 2, 2 * l.steamInterval)), h = setInterval(function() {
                a()
            }, s(100, 1e3) + s(1e3, 3e3))
        }, d
    }, t.fn.coffee.defaults = {
        steams: ["jQuery", "HTML5"],
        steamsFontFamily: ["Verdana", "Geneva", "Comic Sans MS", "MS Serif", "Lucida Sans Unicode", "Times New Roman", "Trebuchet MS", "Arial", "Courier New", "Georgia"],
        steamFlyTime: 5e3,
        steamInterval: 1e3,
        steamMaxSize: 10,
        steamHeight: 200,
        steamWidth: 300
    }, t.fn.coffee.version = "2.0.0"
}($), define("wap/showcase/modules/scroll/coffee", function() {}), function() {
    function t(t, e, i, a, o, s) {
        this.conNode = t, this.background = null, this.backCtx = null, this.mask = null, this.maskCtx = null, this.lottery = {}, this.lotteryType = "image", this.cover = e || "#000", this.coverType = i, this.pixlesData = null, this.width = a, this.height = o, this.lastPosition = null, this.drawPercentCallback = s, this.vail=!1
    }
    t.prototype = {
        createElement: function(t, e) {
            var i = document.createElement(t);
            for (var a in e)
                i.setAttribute(a, e[a]);
            return i
        },
        getTransparentPercent: function(t, e, i) {
            try {
                for (var a = t.getImageData(0, 0, e, i), o = a.data, s = [], n = 0, r = o.length; r > n; n += 4) {
                    var h = o[n + 3];
                    128 > h && s.push(n)
                }
            } catch (d) {
                return 100
            }
            return (s.length / (o.length / 4) * 100).toFixed(2)
        },
        resizeCanvas: function(t, e, i) {
            t.width = e, t.height = i, t.getContext("2d").clearRect(0, 0, e, i)
        },
        resizeCanvas_w: function(t, e, i) {
            t.width = e, t.height = i, t.getContext("2d").clearRect(0, 0, e, i), this.vail ? this.drawLottery() : this.drawMask()
        },
        drawPoint: function(t, e) {
            this.maskCtx.beginPath(), this.maskCtx.arc(t, e, 30, 0, 2 * Math.PI), this.maskCtx.fill(), this.maskCtx.beginPath(), this.maskCtx.lineWidth = 60, this.maskCtx.lineCap = this.maskCtx.lineJoin = "round", this.lastPosition && this.maskCtx.moveTo(this.lastPosition[0], this.lastPosition[1]), this.maskCtx.lineTo(t, e), this.maskCtx.stroke(), this.lastPosition = [t, e], this.mask.style.zIndex = 20 == this.mask.style.zIndex ? 21 : 20
        },
        bindEvent: function() {
            var t = this, e = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()), i = e ? "touchstart": "mousedown", a = e ? "touchmove": "mousemove";
            if (e)
                t.conNode.addEventListener("touchmove", function(t) {
                    o && t.preventDefault(), t.cancelable ? t.preventDefault() : window.event.returnValue=!1
                }, !1), t.conNode.addEventListener("touchend", function() {
                    o=!1;
                    var e = t.getTransparentPercent(t.maskCtx, t.width, t.height);
                    e >= 30 && "function" == typeof t.drawPercentCallback && t.drawPercentCallback()
                }, !1);
            else {
                var o=!1;
                t.conNode.addEventListener("mouseup", function(e) {
                    e.preventDefault(), o=!1;
                    var i = t.getTransparentPercent(t.maskCtx, t.width, t.height);
                    i >= 30 && "function" == typeof t.drawPercentCallback && t.drawPercentCallback()
                }, !1)
            }
            this.mask.addEventListener(i, function(i) {
                i.preventDefault(), o=!0;
                var a = e ? i.touches[0].pageX: i.pageX || i.x, s = e ? i.touches[0].pageY: i.pageY || i.y;
                t.drawPoint(a, s, o)
            }, !1), this.mask.addEventListener(a, function(i) {
                if (i.preventDefault(), !o)
                    return !1;
                i.preventDefault();
                var a = e ? i.touches[0].pageX: i.pageX || i.x, s = e ? i.touches[0].pageY: i.pageY || i.y;
                t.drawPoint(a, s, o)
            }, !1)
        },
        drawLottery: function() {
            if ("image" == this.lotteryType) {
                var t = new Image, e = this;
                t.onload = function() {
                    this.width = e.width, this.height = e.height, e.resizeCanvas(e.background, e.width, e.height), e.backCtx.drawImage(this, 0, 0, e.width, e.height)
                }, t.src = this.lottery.info
            } else if ("text" == this.lotteryType) {
                this.width = this.width, this.height = this.height, this.resizeCanvas(this.background, this.width, this.height), this.backCtx.save(), this.backCtx.fillStyle = "#FFF", this.backCtx.fillRect(0, 0, this.width, this.height), this.backCtx.restore(), this.backCtx.save();
                var i = 30;
                this.backCtx.font = "Bold " + i + "px Arial", this.backCtx.textAlign = "center", this.backCtx.fillStyle = "#F60", this.backCtx.fillText(this.lottery.info, this.width / 2, this.height / 2 + i / 2), this.backCtx.restore(), this.drawMask()
            }
        },
        drawMask: function() {
            if ("color" == this.coverType)
                this.maskCtx.fillStyle = this.cover, this.maskCtx.fillRect(0, 0, this.width, this.height), this.maskCtx.globalCompositeOperation = "destination-out";
            else if ("image" == this.coverType) {
                var t = new Image, e = this;
                t.onload = function() {
                    e.resizeCanvas(e.mask, e.width, e.height);
                    /android/i.test(navigator.userAgent.toLowerCase());
                    e.maskCtx.globalAlpha = .98, e.maskCtx.drawImage(this, 0, 0, this.width, this.height, 0, 0, e.width, e.height);
                    var t = 50, i = "", a = e.maskCtx.createLinearGradient(0, 0, e.width, 0);
                    a.addColorStop("0", "#fff"), a.addColorStop("1.0", "#000"), e.maskCtx.font = "Bold " + t + "px Arial", e.maskCtx.textAlign = "left", e.maskCtx.fillStyle = a, e.maskCtx.fillText(i, e.width / 2 - e.maskCtx.measureText(i).width / 2, e.height - 100), e.maskCtx.globalAlpha = 1, e.maskCtx.globalCompositeOperation = "destination-out", e.drawLottery()
                }, t.crossOrigin = "anonymous", t.src = this.cover
            }
        },
        init: function(t, e) {
            t && (this.lottery.info = t, this.lottery.width = this.width, this.lottery.height = this.height, this.lotteryType = e || "image", this.vail=!0), this.vail && (this.background = this.background || this.createElement("canvas", {
                style: "position:fixed;left:50%;top:0;width:640px;margin-left:-320px;height:100%;background-color:transparent;"
            })), this.mask = this.mask || this.createElement("canvas", {
                style: "position:fixed;left:50%;top:0;width:640px;margin-left:-320px;height:100%;background-color:transparent;"
            }), this.mask.style.zIndex = 20, this.conNode.innerHTML.replace(/[\w\W]| /g, "") || (this.vail && this.conNode.appendChild(this.background), this.conNode.appendChild(this.mask), this.bindEvent()), this.vail && (this.backCtx = this.backCtx || this.background.getContext("2d")), this.maskCtx = this.maskCtx || this.mask.getContext("2d"), this.drawMask();
            var i = this;
            window.addEventListener("resize", function() {
                i.width = document.documentElement.clientWidth, i.height = document.documentElement.clientHeight, i.resizeCanvas_w(i.mask, i.width, i.height)
            }, !1)
        }
    }, window.Lottery = t
}(), define("wap/showcase/modules/scroll/lottery", function() {}), function() {
    var t = {
        _audioNode: $(".js-audio"),
        _audio: null,
        _audio_val: !0,
        _videoNode: $(".j-video"),
        audio_init: function() {
            if (!(t._audioNode.length <= 0)) {
                var e = {
                    loop: !0,
                    preload: "auto",
                    src: this._audioNode.attr("data-src")
                };
                this._audio = new Audio;
                for (var i in e)
                    e.hasOwnProperty(i) && i in this._audio && (this._audio[i] = e[i])
            }
        },
        audio_addEvent: function() {
            if (!(this._audioNode.length <= 0)) {
                var e = (this._audioNode.find(".txt_audio"), this._audioNode.find(".js-music-btn")), i = this, a = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()), o = a ? "touchstart": "click";
                $(this._audioNode).on(o, function() {
                    i.audio_contorl()
                }), $(this._audio).on("play", function() {
                    t._audio_val=!1, e.removeClass("ui-music-off"), $.fn.coffee.start()
                }), $(this._audio).on("pause", function() {
                    t._audio_val=!0, e.addClass("ui-music-off"), $.fn.coffee.stop()
                })
            }
        },
        audio_contorl: function() {
            t._audio_val ? t.audio_play() : t.audio_stop()
        },
        audio_play: function() {
            t._audio_val=!1, t._audio && t._audio.play()
        },
        audio_stop: function() {
            t._audio_val=!0, t._audio && t._audio.pause()
        },
        video_init: function() {
            this._videoNode.each(function() {
                var t = {
                    controls: "controls",
                    preload: "none",
                    width: $(this).attr("data-width"),
                    height: $(this).attr("data-height"),
                    src: $(this).attr("data-src")
                }, e = $('<video class="f-hide"></video>')[0], i = $(this).find(".img");
                for (var a in t)
                    t.hasOwnProperty(a) && a in e && (e[a] = t[a]), this.appendChild(e);
                $(e).on("play", function() {
                    i.hide(), $(e).removeClass("f-hide")
                }), $(e).on("pause", function() {
                    i.show(), $(e).addClass("f-hide")
                })
            })
        },
        media_control: function() {
            this._audio && ($("video").length <= 0 || ($(this._audio).on("play", function() {
                $("video").each(function() {
                    this.paused || this.pause()
                })
            }), $("video").on("play", function() {
                t._audio_val || t.audio_contorl()
            }), $("video").on("pause", function() {
                t._audio_val && t.audio_contorl()
            })))
        },
        media_init: function() {
            this.audio_init(), this.video_init(), this.audio_addEvent(), this.media_control()
        }
    };
    window.Media = t
}(), define("wap/showcase/modules/scroll/media", function() {}), define("wap/showcase/modules/scroll/swiper_progress", [], function() {
    Swiper.prototype.plugins.progress = function(t) {
        function e() {
            for (var e = 0; e < t.slides.length; e++) {
                var i = t.slides[e];
                i.progressSlideSize = o ? t.h.getWidth(i) : t.h.getHeight(i), i.progressSlideOffset = "offsetLeft"in i ? o ? i.offsetLeft : i.offsetTop : o ? i.getOffset().left - t.h.getOffset(t.container).left : i.getOffset().top - t.h.getOffset(t.container).top
            }
            a = o ? t.h.getWidth(t.wrapper) + t.wrapperLeft + t.wrapperRight - t.width : t.h.getHeight(t.wrapper) + t.wrapperTop + t.wrapperBottom - t.height
        }
        function i(e) {
            var i, e = e || {
                x: 0,
                y: 0,
                z: 0
            };
            i = 1 == t.params.centeredSlides ? o?-e.x + t.width / 2 : - e.y + t.height / 2 : o?-e.x : - e.y;
            for (var s = 0; s < t.slides.length; s++) {
                var n = t.slides[s], r = 1 == t.params.centeredSlides ? n.progressSlideSize / 2: 0, h = (i - n.progressSlideOffset - r) / n.progressSlideSize;
                n.progress = h
            }
            t.progress = o?-e.x / a : - e.y / a, t.params.onProgressChange && t.fireCallback(t.params.onProgressChange, t)
        }
        var a, o = "horizontal" == t.params.mode, s = {
            onFirstInit: function() {
                e(), i({
                    x: t.getWrapperTranslate("x"),
                    y: t.getWrapperTranslate("y")
                })
            },
            onInit: function() {
                e()
            },
            onSetWrapperTransform: function(t) {
                i(t)
            }
        };
        return s
    }
}), define("wap/showcase/modules/scroll/swiper_hash", [], function() {
    Swiper.prototype.plugins.hashNav = function(t, e) {
        function i() {
            var e = t.activeSlide().getAttribute("data-hash");
            e || (e = ""), document.location.hash = e
        }
        function a(e) {
            var i = document.location.hash;
            if (i)
                for (var i = i.replace("#", ""), a = e ? t.params.speed : 0, o = 0; o < t.slides.length; o++) {
                    var s = t.slides[o], n = s.getAttribute("data-hash");
                    if (n == i && s.getData("looped")!==!0) {
                        var r = s.index();
                        t.params.loop && (r -= t.loopedSlides), t.swipeTo(r, a)
                    }
                }
            }
        "horizontal" == t.params.mode;
        if (e) {
            var o = {
                onSwiperCreated: function() {
                    a()
                },
                onSlideChangeStart: function() {
                    i(!0)
                },
                onSwipeReset: function() {
                    i(!0)
                }
            };
            return o
        }
    }
}), require(["wap/showcase/modules/scroll/coffee", "wap/showcase/modules/scroll/lottery", "wap/showcase/modules/scroll/media", "wap/showcase/modules/scroll/swiper_progress", "wap/showcase/modules/scroll/swiper_hash"], function() {
    function t() {
        this.$coffee = $(".js-beta-coffee"), this.coffeeAnimation = '<img src="http://static.koudaitong.com/v2/image/scroll/audio_widget_01@2x.png" />', this.eventName = _global.is_mobile ? "touchstart" : "click"
    }
    t.prototype.coffee = function() {
        this.$coffee.coffee({
            steams: [this.coffeeAnimation, this.coffeeAnimation],
            steamHeight: 100,
            steamWidth: 80
        })
    }, t.prototype.init = function() {
        try {
            window.Media.media_init()
        } catch (t) {}
        $(window).on("beforeunload", function() {
            window.Media.audio_stop()
        }), $(window).on("touchmove", function(t) {
            t.preventDefault()
        }), this.$node = $("#js-mask"), this.$container = $(".js-tpl-scroll-container"), this.hasMask = this.$node.length > 0, this.loading()
    }, t.prototype.swiper = function() {
        var t = this, e = $(".js-tpl-scroll");
        this.mySwiper = e.swiper({
            mode: "vertical",
            progress: !0,
            hashNav: !0,
            resistance: "100%",
            loop: e.data("loop")!==!1?!0: !1,
            longSwipesRatio: .3,
            onProgressChange: function(t) {
                for (var e = 0;
                e < t.slides.length;
                e++) {
                    var i,
                    a,
                    o = t.slides[e],
                    s = o.progress;
                    s > 0 ? (i = s * t.width,
                    a = 0): (i = 0,
                    a = 1 - Math.min(Math.abs(s),
                    1)),
                    o.style.boxShadow = "0px 0px 10px rgba(0,0,0," + a + ")",
                    t.setTransform(o,
                    "translate3d(0," + i + "px,0)")
                }
            }, onTouchStart : function(t) {
                for (var e = 0; e < t.slides.length; e++)
                    t.setTransition(t.slides[e], 0)
            }, onSetWrapperTransition: function(t, e) {
                for (var i = 0; i < t.slides.length; i++)
                    t.setTransition(t.slides[i], e)
            }
        });
        for (var i = 0; i < this.mySwiper.slides.length; i++)
            this.mySwiper.slides[i].style.zIndex = 20 + i;
        this.mySwiper.addCallback("SlideChangeStart", function() {
            t.showTimeout && window.clearTimeout(t.showTimeout), $(".js-up-arrow").hide(), t.mySwiper.removeCallbacks("SlideChangeStart")
        })
    }, t.prototype.showArrow = function() {
        this.showTimeout = window.setTimeout(function() {
            $(".js-up-arrow").show()
        }, 2e3)
    }, t.prototype.loading = function() {
        var t = this, e =+ new Date;
        t.$loading = $("#js-loading"), t.lazyLoad(), t.swiper(), $(window).on("load", function() {
            var i, a =+ new Date, o = a - e;
            i = o > 2e3 ? 0 : 2e3 - o, setTimeout(function() {
                t.$loading.hide(), t.hasMask ? t.drawMask() : t.loaded()
            }, i)
        })
    }, t.prototype.show = function() {
        this.$container.css("visibility", "visible")
    }, t.prototype.loaded = function() {
        this.show(), this.showArrow(), this.coffee(), window.Media.audio_play(), this.addLoadingBG()
    }, t.prototype.addLoadingBG = function() {
        var t = "background-image:url(" + this.$loading.find("img").attr("src") + ");-webkit-background-size: initial;-moz-background-size: initial;background-size: initial; background-color: #fff; visibility: visible;";
        this.$container.attr("style", t)
    }, t.prototype.lazyLoad = function() {
        var t = $(".js-lazy-scroll");
        t.each(function(t, e) {
            var i = $(e), a = i.data("src");
            i.attr("style", "background-image:url(" + a + ");")
        })
    }, t.prototype.drawMask = function() {
        var t = this.$node.data("url"), e = "image", i = 640, a = $(window).height(), o = this.$node[0];
        this.lottery = new window.Lottery(o, t, e, i, a, this.drawMaskCallback()).init(this.$node.data("bg"))
    }, t.prototype.drawMaskCallback = function() {
        var t = this;
        return function() {
            t.loaded(), $("#js-mask canvas").hide()
        }
    }; var e = new t; e.init()
}), define("main", function() {});
