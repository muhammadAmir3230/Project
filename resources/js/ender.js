/*!
 * domready (c) Dustin Diaz 2012 - License MIT
 */
! function(a, b) {
    typeof module != "undefined" ? module.exports = b() : typeof define == "function" && typeof define.amd == "object" ? define(b) : this[a] = b()
}("domready", function(a) {
    function m(a) {
        l = 1;
        while (a = b.shift()) a()
    }
    var b = [],
        c, d = !1,
        e = document,
        f = e.documentElement,
        g = f.doScroll,
        h = "DOMContentLoaded",
        i = "addEventListener",
        j = "onreadystatechange",
        k = "readyState",
        l = /^loade|c/.test(e[k]);
    return e[i] && e[i](h, c = function() {
        e.removeEventListener(h, c, d), m()
    }, d), g && e.attachEvent(j, c = function() {
        /^c/.test(e[k]) && (e.detachEvent(j, c), m())
    }), a = g ? function(c) {
        self != top ? l ? c() : b.push(c) : function() {
            try {
                f.doScroll("left")
            } catch (b) {
                return setTimeout(function() {
                    a(c)
                }, 50)
            }
            c()
        }()
    } : function(a) {
        l ? a() : b.push(a)
    }
}),
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */

/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia = window.matchMedia || function(a, b) {
        var c, d = a.documentElement,
            e = d.firstElementChild || d.firstChild,
            f = a.createElement("body"),
            g = a.createElement("div");
        return g.id = "mq-test-1", g.style.cssText = "position:absolute;top:-100em", f.appendChild(g),
            function(a) {
                return g.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', d.insertBefore(f, e), c = g.offsetWidth == 42, d.removeChild(f), {
                    matches: c,
                    media: a
                }
            }
    }(document),
    /*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
    function(a) {
        function w() {
            t(!0)
        }
        a.respond = {}, respond.update = function() {}, respond.mediaQueriesSupported = a.matchMedia && a.matchMedia("only all").matches;
        if (respond.mediaQueriesSupported) return;
        var b = a.document,
            c = b.documentElement,
            d = [],
            e = [],
            f = [],
            g = {},
            h = 30,
            i = b.getElementsByTagName("head")[0] || c,
            j = b.getElementsByTagName("base")[0],
            k = i.getElementsByTagName("link"),
            l = [],
            m = function() {
                var b = k,
                    c = b.length,
                    d = 0,
                    e, f, h, i;
                for (; d < c; d++) e = b[d], f = e.href, h = e.media, i = e.rel && e.rel.toLowerCase() === "stylesheet", !!f && i && !g[f] && (e.styleSheet && e.styleSheet.rawCssText ? (o(e.styleSheet.rawCssText, f, h), g[f] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(f) && !j || f.replace(RegExp.$1, "").split("/")[0] === a.location.host) && l.push({
                    href: f,
                    media: h
                }));
                n()
            },
            n = function() {
                if (l.length) {
                    var a = l.shift();
                    u(a.href, function(b) {
                        o(b, a.href, a.media), g[a.href] = !0, n()
                    })
                }
            },
            o = function(a, b, c) {
                var f = a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),
                    g = f && f.length || 0,
                    b = b.substring(0, b.lastIndexOf("/")),
                    h = function(a) {
                        return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, "$1" + b + "$2$3")
                    },
                    i = !g && c,
                    j = 0,
                    k, l, m, n, o;
                b.length && (b += "/"), i && (g = 1);
                for (; j < g; j++) {
                    k = 0, i ? (l = c, e.push(h(a))) : (l = f[j].match(/@media *([^\{]+)\{([\S\s]+?)$/) && RegExp.$1, e.push(RegExp.$2 && h(RegExp.$2))), n = l.split(","), o = n.length;
                    for (; k < o; k++) m = n[k], d.push({
                        media: m.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/) && RegExp.$2 || "all",
                        rules: e.length - 1,
                        hasquery: m.indexOf("(") > -1,
                        minw: m.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                        maxw: m.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                    })
                }
                t()
            },
            p, q, r = function() {
                var a, d = b.createElement("div"),
                    e = b.body,
                    f = !1;
                return d.style.cssText = "position:absolute;font-size:1em;width:1em", e || (e = f = b.createElement("body")), e.appendChild(d), c.insertBefore(e, c.firstChild), a = d.offsetWidth, f ? c.removeChild(e) : e.removeChild(d), a = s = parseFloat(a), a
            },
            s, t = function(a) {
                var g = "clientWidth",
                    j = c[g],
                    l = b.compatMode === "CSS1Compat" && j || b.body[g] || j,
                    m = {},
                    n = k[k.length - 1],
                    o = (new Date).getTime();
                if (a && p && o - p < h) {
                    clearTimeout(q), q = setTimeout(t, h);
                    return
                }
                p = o;
                for (var u in d) {
                    var v = d[u],
                        w = v.minw,
                        x = v.maxw,
                        y = w === null,
                        z = x === null,
                        A = "em";
                    !w || (w = parseFloat(w) * (w.indexOf(A) > -1 ? s || r() : 1)), !x || (x = parseFloat(x) * (x.indexOf(A) > -1 ? s || r() : 1));
                    if (!v.hasquery || (!y || !z) && (y || l >= w) && (z || l <= x)) m[v.media] || (m[v.media] = []), m[v.media].push(e[v.rules])
                }
                for (var u in f) f[u] && f[u].parentNode === i && i.removeChild(f[u]);
                for (var u in m) {
                    var B = b.createElement("style"),
                        C = m[u].join("\n");
                    B.type = "text/css", B.media = u, i.insertBefore(B, n.nextSibling), B.styleSheet ? B.styleSheet.cssText = C : B.appendChild(b.createTextNode(C)), f.push(B)
                }
            },
            u = function(a, b) {
                var c = v();
                if (!c) return;
                c.open("GET", a, !0), c.onreadystatechange = function() {
                    if (c.readyState != 4 || c.status != 200 && c.status != 304) return;
                    b(c.responseText)
                };
                if (c.readyState == 4) return;
                c.send(null)
            },
            v = function() {
                var a = !1;
                try {
                    a = new XMLHttpRequest
                } catch (b) {
                    a = new ActiveXObject("Microsoft.XMLHTTP")
                }
                return function() {
                    return a
                }
            }();
        m(), respond.update = m, a.addEventListener ? a.addEventListener("resize", w, !1) : a.attachEvent && a.attachEvent("onresize", w)
    }(this),
    /*!
     * hijs - JavaScript Syntax Highlighter
     *
     * Copyright (c) 2010 Alexis Sellier
     */
    function(a) {
        function l(a) {
            return a.replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function m(a, b) {
            return g[b = a.split("").map(function(a) {
                return a.charCodeAt(0) > 127 ? a : String.fromCharCode(a.charCodeAt(0) + 10240)
            }).join("")] = a, b
        }

        function n(a) {
            return a in g ? g[a] : a.trim().split("").map(function(a) {
                return a.charCodeAt(0) - 10240 > 127 ? a : String.fromCharCode(a.charCodeAt(0) - 10240)
            }).join("")
        }
        var b = a || "code",
            c = "var function if else for while break switch case do new null in with void continue delete return this true false throw catch typeof with instanceof".split(" "),
            d = "eval window document undefined NaN Infinity parseInt parseFloat encodeURI decodeURI encodeURIComponent decodeURIComponent".split(" "),
            e = [
                ["comment", /(\/\*(?:[^*\n]|\*+[^\/*])*\*+\/)/g],
                ["comment", /(\/\/[^\n]*)/g],
                ["string", /("(?:(?!")[^\\\n]|\\.)*"|'(?:(?!')[^\\\n]|\\.)*')/g],
                ["regexp", /(\/.+\/[mgi]*)(?!\s*\w)/g],
                ["class", /\b([A-Z][a-zA-Z]+)\b/g],
                ["number", /\b([0-9]+(?:\.[0-9]+)?)\b/g],
                ["keyword", new RegExp("\\b(" + c.join("|") + ")\\b", "g")],
                ["special", new RegExp("\\b(" + d.join("|") + ")\\b", "g")]
            ],
            f, g = {};
        /^[a-z]+$/.test(b) ? f = document.getElementsByTagName(b) : /^\.[\w-]+$/.test(b) ? f = document.getElementsByClassName(b.slice(1)) : document.querySelectorAll ? f = document.querySelectorAll(b) : f = [];
        for (var h = 0, i; h < f.length; h++) {
            i = f[h].childNodes;
            for (var j = 0, k; j < i.length; j++) code = i[j], code.length >= 0 && (/^\$\s/.test(code.nodeValue.trim()) || e.forEach(function(a) {
                var b = a[0],
                    c = a[1];
                code.nodeValue = code.nodeValue.replace(c, function(a, c) {
                    return "«" + m(b) + "·" + m(c) + "·" + m(b) + "»"
                })
            }))
        }
        for (var h = 0; h < f.length; h++) f[h].innerHTML = f[h].innerHTML.replace(/\u00ab(.+?)\u00b7(.+?)\u00b7\1\u00bb/g, function(a, b, c) {
            return c = c.replace(/\u00ab[^\u00b7]+\u00b7/g, "").replace(/\u00b7[^\u00bb]+\u00bb/g, ""), '<span class="' + n(b) + '">' + l(n(c)) + "</span>"
        })
    }(window.hijs)