/*! For license information please see main.d77c121a.js.LICENSE.txt */ ! function() {
    var e = {
            694: function(e, t) {
                var n;
                ! function() {
                    "use strict";
                    var r = {}.hasOwnProperty;

                    function a() {
                        for (var e = [], t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            if (n) {
                                var o = typeof n;
                                if ("string" === o || "number" === o) e.push(n);
                                else if (Array.isArray(n)) {
                                    if (n.length) {
                                        var i = a.apply(null, n);
                                        i && e.push(i)
                                    }
                                } else if ("object" === o) {
                                    if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
                                        e.push(n.toString());
                                        continue
                                    }
                                    for (var l in n) r.call(n, l) && n[l] && e.push(l)
                                }
                            }
                        }
                        return e.join(" ")
                    }
                    e.exports ? (a.default = a, e.exports = a) : void 0 === (n = function() {
                        return a
                    }.apply(t, [])) || (e.exports = n)
                }()
            },
            463: function(e, t, n) {
                "use strict";
                var r = n(791),
                    a = n(296);

                function o(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var i = new Set,
                    l = {};

                function u(e, t) {
                    s(e, t), s(e + "Capture", t)
                }

                function s(e, t) {
                    for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e])
                }
                var c = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                    f = Object.prototype.hasOwnProperty,
                    d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    p = {},
                    h = {};

                function v(e, t, n, r, a, o, i) {
                    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
                }
                var m = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                    m[e] = new v(e, 0, !1, e, null, !1, !1)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function(e) {
                    var t = e[0];
                    m[t] = new v(t, 1, !1, e[1], null, !1, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                    m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                    m[e] = new v(e, 2, !1, e, null, !1, !1)
                })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                    m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1)
                })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                    m[e] = new v(e, 3, !0, e, null, !1, !1)
                })), ["capture", "download"].forEach((function(e) {
                    m[e] = new v(e, 4, !1, e, null, !1, !1)
                })), ["cols", "rows", "size", "span"].forEach((function(e) {
                    m[e] = new v(e, 6, !1, e, null, !1, !1)
                })), ["rowSpan", "start"].forEach((function(e) {
                    m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1)
                }));
                var y = /[\-:]([a-z])/g;

                function g(e) {
                    return e[1].toUpperCase()
                }

                function b(e, t, n, r) {
                    var a = m.hasOwnProperty(t) ? m[t] : null;
                    (null !== a ? 0 !== a.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) {
                        if (null === t || "undefined" === typeof t || function(e, t, n, r) {
                                if (null !== n && 0 === n.type) return !1;
                                switch (typeof t) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1
                                }
                            }(e, t, n, r)) return !0;
                        if (r) return !1;
                        if (null !== n) switch (n.type) {
                            case 3:
                                return !t;
                            case 4:
                                return !1 === t;
                            case 5:
                                return isNaN(t);
                            case 6:
                                return isNaN(t) || 1 > t
                        }
                        return !1
                    }(t, n, a, r) && (n = null), r || null === a ? function(e) {
                        return !!f.call(h, e) || !f.call(p, e) && (d.test(e) ? h[e] = !0 : (p[e] = !0, !1))
                    }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                    var t = e.replace(y, g);
                    m[t] = new v(t, 1, !1, e, null, !1, !1)
                })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                    var t = e.replace(y, g);
                    m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                    var t = e.replace(y, g);
                    m[t] = new v(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
                })), ["tabIndex", "crossOrigin"].forEach((function(e) {
                    m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1)
                })), m.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
                    m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0)
                }));
                var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    x = Symbol.for("react.element"),
                    S = Symbol.for("react.portal"),
                    k = Symbol.for("react.fragment"),
                    E = Symbol.for("react.strict_mode"),
                    C = Symbol.for("react.profiler"),
                    P = Symbol.for("react.provider"),
                    T = Symbol.for("react.context"),
                    j = Symbol.for("react.forward_ref"),
                    N = Symbol.for("react.suspense"),
                    L = Symbol.for("react.suspense_list"),
                    O = Symbol.for("react.memo"),
                    R = Symbol.for("react.lazy");
                Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
                var M = Symbol.for("react.offscreen");
                Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
                var _ = Symbol.iterator;

                function A(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof(e = _ && e[_] || e["@@iterator"]) ? e : null
                }
                var I, z = Object.assign;

                function D(e) {
                    if (void 0 === I) try {
                        throw Error()
                    } catch (n) {
                        var t = n.stack.trim().match(/\n( *(at )?)/);
                        I = t && t[1] || ""
                    }
                    return "\n" + I + e
                }
                var V = !1;

                function F(e, t) {
                    if (!e || V) return "";
                    V = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (t)
                            if (t = function() {
                                    throw Error()
                                }, Object.defineProperty(t.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), "object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(t, [])
                                } catch (s) {
                                    var r = s
                                }
                                Reflect.construct(e, [], t)
                            } else {
                                try {
                                    t.call()
                                } catch (s) {
                                    r = s
                                }
                                e.call(t.prototype)
                            }
                        else {
                            try {
                                throw Error()
                            } catch (s) {
                                r = s
                            }
                            e()
                        }
                    } catch (s) {
                        if (s && r && "string" === typeof s.stack) {
                            for (var a = s.stack.split("\n"), o = r.stack.split("\n"), i = a.length - 1, l = o.length - 1; 1 <= i && 0 <= l && a[i] !== o[l];) l--;
                            for (; 1 <= i && 0 <= l; i--, l--)
                                if (a[i] !== o[l]) {
                                    if (1 !== i || 1 !== l)
                                        do {
                                            if (i--, 0 > --l || a[i] !== o[l]) {
                                                var u = "\n" + a[i].replace(" at new ", " at ");
                                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                                            }
                                        } while (1 <= i && 0 <= l);
                                    break
                                }
                        }
                    } finally {
                        V = !1, Error.prepareStackTrace = n
                    }
                    return (e = e ? e.displayName || e.name : "") ? D(e) : ""
                }

                function U(e) {
                    switch (e.tag) {
                        case 5:
                            return D(e.type);
                        case 16:
                            return D("Lazy");
                        case 13:
                            return D("Suspense");
                        case 19:
                            return D("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return e = F(e.type, !1);
                        case 11:
                            return e = F(e.type.render, !1);
                        case 1:
                            return e = F(e.type, !0);
                        default:
                            return ""
                    }
                }

                function B(e) {
                    if (null == e) return null;
                    if ("function" === typeof e) return e.displayName || e.name || null;
                    if ("string" === typeof e) return e;
                    switch (e) {
                        case k:
                            return "Fragment";
                        case S:
                            return "Portal";
                        case C:
                            return "Profiler";
                        case E:
                            return "StrictMode";
                        case N:
                            return "Suspense";
                        case L:
                            return "SuspenseList"
                    }
                    if ("object" === typeof e) switch (e.$$typeof) {
                        case T:
                            return (e.displayName || "Context") + ".Consumer";
                        case P:
                            return (e._context.displayName || "Context") + ".Provider";
                        case j:
                            var t = e.render;
                            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                        case O:
                            return null !== (t = e.displayName || null) ? t : B(e.type) || "Memo";
                        case R:
                            t = e._payload, e = e._init;
                            try {
                                return B(e(t))
                            } catch (n) {}
                    }
                    return null
                }

                function W(e) {
                    var t = e.type;
                    switch (e.tag) {
                        case 24:
                            return "Cache";
                        case 9:
                            return (t.displayName || "Context") + ".Consumer";
                        case 10:
                            return (t._context.displayName || "Context") + ".Provider";
                        case 18:
                            return "DehydratedFragment";
                        case 11:
                            return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                        case 7:
                            return "Fragment";
                        case 5:
                            return t;
                        case 4:
                            return "Portal";
                        case 3:
                            return "Root";
                        case 6:
                            return "Text";
                        case 16:
                            return B(t);
                        case 8:
                            return t === E ? "StrictMode" : "Mode";
                        case 22:
                            return "Offscreen";
                        case 12:
                            return "Profiler";
                        case 21:
                            return "Scope";
                        case 13:
                            return "Suspense";
                        case 19:
                            return "SuspenseList";
                        case 25:
                            return "TracingMarker";
                        case 1:
                        case 0:
                        case 17:
                        case 2:
                        case 14:
                        case 15:
                            if ("function" === typeof t) return t.displayName || t.name || null;
                            if ("string" === typeof t) return t
                    }
                    return null
                }

                function H(e) {
                    switch (typeof e) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                        case "object":
                            return e;
                        default:
                            return ""
                    }
                }

                function $(e) {
                    var t = e.type;
                    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
                }

                function Q(e) {
                    e._valueTracker || (e._valueTracker = function(e) {
                        var t = $(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            r = "" + e[t];
                        if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                            var a = n.get,
                                o = n.set;
                            return Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function() {
                                    return a.call(this)
                                },
                                set: function(e) {
                                    r = "" + e, o.call(this, e)
                                }
                            }), Object.defineProperty(e, t, {
                                enumerable: n.enumerable
                            }), {
                                getValue: function() {
                                    return r
                                },
                                setValue: function(e) {
                                    r = "" + e
                                },
                                stopTracking: function() {
                                    e._valueTracker = null, delete e[t]
                                }
                            }
                        }
                    }(e))
                }

                function K(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        r = "";
                    return e && (r = $(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
                }

                function Y(e) {
                    if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body
                    } catch (t) {
                        return e.body
                    }
                }

                function q(e, t) {
                    var n = t.checked;
                    return z({}, t, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != n ? n : e._wrapperState.initialChecked
                    })
                }

                function X(e, t) {
                    var n = null == t.defaultValue ? "" : t.defaultValue,
                        r = null != t.checked ? t.checked : t.defaultChecked;
                    n = H(null != t.value ? t.value : n), e._wrapperState = {
                        initialChecked: r,
                        initialValue: n,
                        controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                    }
                }

                function G(e, t) {
                    null != (t = t.checked) && b(e, "checked", t, !1)
                }

                function Z(e, t) {
                    G(e, t);
                    var n = H(t.value),
                        r = t.type;
                    if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                    else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                    t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, H(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
                }

                function J(e, t, n) {
                    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                        var r = t.type;
                        if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                    }
                    "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
                }

                function ee(e, t, n) {
                    "number" === t && Y(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
                }
                var te = Array.isArray;

                function ne(e, t, n, r) {
                    if (e = e.options, t) {
                        t = {};
                        for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
                        for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
                    } else {
                        for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
                            if (e[a].value === n) return e[a].selected = !0, void(r && (e[a].defaultSelected = !0));
                            null !== t || e[a].disabled || (t = e[a])
                        }
                        null !== t && (t.selected = !0)
                    }
                }

                function re(e, t) {
                    if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
                    return z({}, t, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + e._wrapperState.initialValue
                    })
                }

                function ae(e, t) {
                    var n = t.value;
                    if (null == n) {
                        if (n = t.children, t = t.defaultValue, null != n) {
                            if (null != t) throw Error(o(92));
                            if (te(n)) {
                                if (1 < n.length) throw Error(o(93));
                                n = n[0]
                            }
                            t = n
                        }
                        null == t && (t = ""), n = t
                    }
                    e._wrapperState = {
                        initialValue: H(n)
                    }
                }

                function oe(e, t) {
                    var n = H(t.value),
                        r = H(t.defaultValue);
                    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
                }

                function ie(e) {
                    var t = e.textContent;
                    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
                }

                function le(e) {
                    switch (e) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml"
                    }
                }

                function ue(e, t) {
                    return null == e || "http://www.w3.org/1999/xhtml" === e ? le(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
                }
                var se, ce, fe = (ce = function(e, t) {
                    if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
                    else {
                        for ((se = se || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = se.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                        for (; t.firstChild;) e.appendChild(t.firstChild)
                    }
                }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
                    MSApp.execUnsafeLocalFunction((function() {
                        return ce(e, t)
                    }))
                } : ce);

                function de(e, t) {
                    if (t) {
                        var n = e.firstChild;
                        if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                    }
                    e.textContent = t
                }
                var pe = {
                        animationIterationCount: !0,
                        aspectRatio: !0,
                        borderImageOutset: !0,
                        borderImageSlice: !0,
                        borderImageWidth: !0,
                        boxFlex: !0,
                        boxFlexGroup: !0,
                        boxOrdinalGroup: !0,
                        columnCount: !0,
                        columns: !0,
                        flex: !0,
                        flexGrow: !0,
                        flexPositive: !0,
                        flexShrink: !0,
                        flexNegative: !0,
                        flexOrder: !0,
                        gridArea: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowSpan: !0,
                        gridRowStart: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnSpan: !0,
                        gridColumnStart: !0,
                        fontWeight: !0,
                        lineClamp: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        tabSize: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeDasharray: !0,
                        strokeDashoffset: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0,
                        strokeWidth: !0
                    },
                    he = ["Webkit", "ms", "Moz", "O"];

                function ve(e, t, n) {
                    return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"
                }

                function me(e, t) {
                    for (var n in e = e.style, t)
                        if (t.hasOwnProperty(n)) {
                            var r = 0 === n.indexOf("--"),
                                a = ve(n, t[n], r);
                            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a
                        }
                }
                Object.keys(pe).forEach((function(e) {
                    he.forEach((function(t) {
                        t = t + e.charAt(0).toUpperCase() + e.substring(1), pe[t] = pe[e]
                    }))
                }));
                var ye = z({
                    menuitem: !0
                }, {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                });

                function ge(e, t) {
                    if (t) {
                        if (ye[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(o(137, e));
                        if (null != t.dangerouslySetInnerHTML) {
                            if (null != t.children) throw Error(o(60));
                            if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61))
                        }
                        if (null != t.style && "object" !== typeof t.style) throw Error(o(62))
                    }
                }

                function be(e, t) {
                    if (-1 === e.indexOf("-")) return "string" === typeof t.is;
                    switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0
                    }
                }
                var we = null;

                function xe(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
                }
                var Se = null,
                    ke = null,
                    Ee = null;

                function Ce(e) {
                    if (e = ba(e)) {
                        if ("function" !== typeof Se) throw Error(o(280));
                        var t = e.stateNode;
                        t && (t = xa(t), Se(e.stateNode, e.type, t))
                    }
                }

                function Pe(e) {
                    ke ? Ee ? Ee.push(e) : Ee = [e] : ke = e
                }

                function Te() {
                    if (ke) {
                        var e = ke,
                            t = Ee;
                        if (Ee = ke = null, Ce(e), t)
                            for (e = 0; e < t.length; e++) Ce(t[e])
                    }
                }

                function je(e, t) {
                    return e(t)
                }

                function Ne() {}
                var Le = !1;

                function Oe(e, t, n) {
                    if (Le) return e(t, n);
                    Le = !0;
                    try {
                        return je(e, t, n)
                    } finally {
                        Le = !1, (null !== ke || null !== Ee) && (Ne(), Te())
                    }
                }

                function Re(e, t) {
                    var n = e.stateNode;
                    if (null === n) return null;
                    var r = xa(n);
                    if (null === r) return null;
                    n = r[t];
                    e: switch (t) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                        case "onMouseEnter":
                            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                            break e;
                        default:
                            e = !1
                    }
                    if (e) return null;
                    if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
                    return n
                }
                var Me = !1;
                if (c) try {
                    var _e = {};
                    Object.defineProperty(_e, "passive", {
                        get: function() {
                            Me = !0
                        }
                    }), window.addEventListener("test", _e, _e), window.removeEventListener("test", _e, _e)
                } catch (ce) {
                    Me = !1
                }

                function Ae(e, t, n, r, a, o, i, l, u) {
                    var s = Array.prototype.slice.call(arguments, 3);
                    try {
                        t.apply(n, s)
                    } catch (c) {
                        this.onError(c)
                    }
                }
                var Ie = !1,
                    ze = null,
                    De = !1,
                    Ve = null,
                    Fe = {
                        onError: function(e) {
                            Ie = !0, ze = e
                        }
                    };

                function Ue(e, t, n, r, a, o, i, l, u) {
                    Ie = !1, ze = null, Ae.apply(Fe, arguments)
                }

                function Be(e) {
                    var t = e,
                        n = e;
                    if (e.alternate)
                        for (; t.return;) t = t.return;
                    else {
                        e = t;
                        do {
                            0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return
                        } while (e)
                    }
                    return 3 === t.tag ? n : null
                }

                function We(e) {
                    if (13 === e.tag) {
                        var t = e.memoizedState;
                        if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                    }
                    return null
                }

                function He(e) {
                    if (Be(e) !== e) throw Error(o(188))
                }

                function $e(e) {
                    return null !== (e = function(e) {
                        var t = e.alternate;
                        if (!t) {
                            if (null === (t = Be(e))) throw Error(o(188));
                            return t !== e ? null : e
                        }
                        for (var n = e, r = t;;) {
                            var a = n.return;
                            if (null === a) break;
                            var i = a.alternate;
                            if (null === i) {
                                if (null !== (r = a.return)) {
                                    n = r;
                                    continue
                                }
                                break
                            }
                            if (a.child === i.child) {
                                for (i = a.child; i;) {
                                    if (i === n) return He(a), e;
                                    if (i === r) return He(a), t;
                                    i = i.sibling
                                }
                                throw Error(o(188))
                            }
                            if (n.return !== r.return) n = a, r = i;
                            else {
                                for (var l = !1, u = a.child; u;) {
                                    if (u === n) {
                                        l = !0, n = a, r = i;
                                        break
                                    }
                                    if (u === r) {
                                        l = !0, r = a, n = i;
                                        break
                                    }
                                    u = u.sibling
                                }
                                if (!l) {
                                    for (u = i.child; u;) {
                                        if (u === n) {
                                            l = !0, n = i, r = a;
                                            break
                                        }
                                        if (u === r) {
                                            l = !0, r = i, n = a;
                                            break
                                        }
                                        u = u.sibling
                                    }
                                    if (!l) throw Error(o(189))
                                }
                            }
                            if (n.alternate !== r) throw Error(o(190))
                        }
                        if (3 !== n.tag) throw Error(o(188));
                        return n.stateNode.current === n ? e : t
                    }(e)) ? Qe(e) : null
                }

                function Qe(e) {
                    if (5 === e.tag || 6 === e.tag) return e;
                    for (e = e.child; null !== e;) {
                        var t = Qe(e);
                        if (null !== t) return t;
                        e = e.sibling
                    }
                    return null
                }
                var Ke = a.unstable_scheduleCallback,
                    Ye = a.unstable_cancelCallback,
                    qe = a.unstable_shouldYield,
                    Xe = a.unstable_requestPaint,
                    Ge = a.unstable_now,
                    Ze = a.unstable_getCurrentPriorityLevel,
                    Je = a.unstable_ImmediatePriority,
                    et = a.unstable_UserBlockingPriority,
                    tt = a.unstable_NormalPriority,
                    nt = a.unstable_LowPriority,
                    rt = a.unstable_IdlePriority,
                    at = null,
                    ot = null;
                var it = Math.clz32 ? Math.clz32 : function(e) {
                        return e >>>= 0, 0 === e ? 32 : 31 - (lt(e) / ut | 0) | 0
                    },
                    lt = Math.log,
                    ut = Math.LN2;
                var st = 64,
                    ct = 4194304;

                function ft(e) {
                    switch (e & -e) {
                        case 1:
                            return 1;
                        case 2:
                            return 2;
                        case 4:
                            return 4;
                        case 8:
                            return 8;
                        case 16:
                            return 16;
                        case 32:
                            return 32;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return 4194240 & e;
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            return 130023424 & e;
                        case 134217728:
                            return 134217728;
                        case 268435456:
                            return 268435456;
                        case 536870912:
                            return 536870912;
                        case 1073741824:
                            return 1073741824;
                        default:
                            return e
                    }
                }

                function dt(e, t) {
                    var n = e.pendingLanes;
                    if (0 === n) return 0;
                    var r = 0,
                        a = e.suspendedLanes,
                        o = e.pingedLanes,
                        i = 268435455 & n;
                    if (0 !== i) {
                        var l = i & ~a;
                        0 !== l ? r = ft(l) : 0 !== (o &= i) && (r = ft(o))
                    } else 0 !== (i = n & ~a) ? r = ft(i) : 0 !== o && (r = ft(o));
                    if (0 === r) return 0;
                    if (0 !== t && t !== r && 0 === (t & a) && ((a = r & -r) >= (o = t & -t) || 16 === a && 0 !== (4194240 & o))) return t;
                    if (0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
                        for (e = e.entanglements, t &= r; 0 < t;) a = 1 << (n = 31 - it(t)), r |= e[n], t &= ~a;
                    return r
                }

                function pt(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 4:
                            return t + 250;
                        case 8:
                        case 16:
                        case 32:
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return t + 5e3;
                        default:
                            return -1
                    }
                }

                function ht(e) {
                    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
                }

                function vt() {
                    var e = st;
                    return 0 === (4194240 & (st <<= 1)) && (st = 64), e
                }

                function mt(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t
                }

                function yt(e, t, n) {
                    e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - it(t)] = n
                }

                function gt(e, t) {
                    var n = e.entangledLanes |= t;
                    for (e = e.entanglements; n;) {
                        var r = 31 - it(n),
                            a = 1 << r;
                        a & t | e[r] & t && (e[r] |= t), n &= ~a
                    }
                }
                var bt = 0;

                function wt(e) {
                    return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
                }
                var xt, St, kt, Et, Ct, Pt = !1,
                    Tt = [],
                    jt = null,
                    Nt = null,
                    Lt = null,
                    Ot = new Map,
                    Rt = new Map,
                    Mt = [],
                    _t = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

                function At(e, t) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            jt = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            Nt = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            Lt = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            Ot.delete(t.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            Rt.delete(t.pointerId)
                    }
                }

                function It(e, t, n, r, a, o) {
                    return null === e || e.nativeEvent !== o ? (e = {
                        blockedOn: t,
                        domEventName: n,
                        eventSystemFlags: r,
                        nativeEvent: o,
                        targetContainers: [a]
                    }, null !== t && (null !== (t = ba(t)) && St(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e)
                }

                function zt(e) {
                    var t = ga(e.target);
                    if (null !== t) {
                        var n = Be(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) {
                                if (null !== (t = We(n))) return e.blockedOn = t, void Ct(e.priority, (function() {
                                    kt(n)
                                }))
                            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                    }
                    e.blockedOn = null
                }

                function Dt(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== n) return null !== (t = ba(n)) && St(t), e.blockedOn = n, !1;
                        var r = new(n = e.nativeEvent).constructor(n.type, n);
                        we = r, n.target.dispatchEvent(r), we = null, t.shift()
                    }
                    return !0
                }

                function Vt(e, t, n) {
                    Dt(e) && n.delete(t)
                }

                function Ft() {
                    Pt = !1, null !== jt && Dt(jt) && (jt = null), null !== Nt && Dt(Nt) && (Nt = null), null !== Lt && Dt(Lt) && (Lt = null), Ot.forEach(Vt), Rt.forEach(Vt)
                }

                function Ut(e, t) {
                    e.blockedOn === t && (e.blockedOn = null, Pt || (Pt = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Ft)))
                }

                function Bt(e) {
                    function t(t) {
                        return Ut(t, e)
                    }
                    if (0 < Tt.length) {
                        Ut(Tt[0], e);
                        for (var n = 1; n < Tt.length; n++) {
                            var r = Tt[n];
                            r.blockedOn === e && (r.blockedOn = null)
                        }
                    }
                    for (null !== jt && Ut(jt, e), null !== Nt && Ut(Nt, e), null !== Lt && Ut(Lt, e), Ot.forEach(t), Rt.forEach(t), n = 0; n < Mt.length; n++)(r = Mt[n]).blockedOn === e && (r.blockedOn = null);
                    for (; 0 < Mt.length && null === (n = Mt[0]).blockedOn;) zt(n), null === n.blockedOn && Mt.shift()
                }
                var Wt = w.ReactCurrentBatchConfig,
                    Ht = !0;

                function $t(e, t, n, r) {
                    var a = bt,
                        o = Wt.transition;
                    Wt.transition = null;
                    try {
                        bt = 1, Kt(e, t, n, r)
                    } finally {
                        bt = a, Wt.transition = o
                    }
                }

                function Qt(e, t, n, r) {
                    var a = bt,
                        o = Wt.transition;
                    Wt.transition = null;
                    try {
                        bt = 4, Kt(e, t, n, r)
                    } finally {
                        bt = a, Wt.transition = o
                    }
                }

                function Kt(e, t, n, r) {
                    if (Ht) {
                        var a = qt(e, t, n, r);
                        if (null === a) Hr(e, t, r, Yt, n), At(e, r);
                        else if (function(e, t, n, r, a) {
                                switch (t) {
                                    case "focusin":
                                        return jt = It(jt, e, t, n, r, a), !0;
                                    case "dragenter":
                                        return Nt = It(Nt, e, t, n, r, a), !0;
                                    case "mouseover":
                                        return Lt = It(Lt, e, t, n, r, a), !0;
                                    case "pointerover":
                                        var o = a.pointerId;
                                        return Ot.set(o, It(Ot.get(o) || null, e, t, n, r, a)), !0;
                                    case "gotpointercapture":
                                        return o = a.pointerId, Rt.set(o, It(Rt.get(o) || null, e, t, n, r, a)), !0
                                }
                                return !1
                            }(a, e, t, n, r)) r.stopPropagation();
                        else if (At(e, r), 4 & t && -1 < _t.indexOf(e)) {
                            for (; null !== a;) {
                                var o = ba(a);
                                if (null !== o && xt(o), null === (o = qt(e, t, n, r)) && Hr(e, t, r, Yt, n), o === a) break;
                                a = o
                            }
                            null !== a && r.stopPropagation()
                        } else Hr(e, t, r, null, n)
                    }
                }
                var Yt = null;

                function qt(e, t, n, r) {
                    if (Yt = null, null !== (e = ga(e = xe(r))))
                        if (null === (t = Be(e))) e = null;
                        else if (13 === (n = t.tag)) {
                        if (null !== (e = We(t))) return e;
                        e = null
                    } else if (3 === n) {
                        if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                        e = null
                    } else t !== e && (e = null);
                    return Yt = e, null
                }

                function Xt(e) {
                    switch (e) {
                        case "cancel":
                        case "click":
                        case "close":
                        case "contextmenu":
                        case "copy":
                        case "cut":
                        case "auxclick":
                        case "dblclick":
                        case "dragend":
                        case "dragstart":
                        case "drop":
                        case "focusin":
                        case "focusout":
                        case "input":
                        case "invalid":
                        case "keydown":
                        case "keypress":
                        case "keyup":
                        case "mousedown":
                        case "mouseup":
                        case "paste":
                        case "pause":
                        case "play":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointerup":
                        case "ratechange":
                        case "reset":
                        case "resize":
                        case "seeked":
                        case "submit":
                        case "touchcancel":
                        case "touchend":
                        case "touchstart":
                        case "volumechange":
                        case "change":
                        case "selectionchange":
                        case "textInput":
                        case "compositionstart":
                        case "compositionend":
                        case "compositionupdate":
                        case "beforeblur":
                        case "afterblur":
                        case "beforeinput":
                        case "blur":
                        case "fullscreenchange":
                        case "focus":
                        case "hashchange":
                        case "popstate":
                        case "select":
                        case "selectstart":
                            return 1;
                        case "drag":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "mousemove":
                        case "mouseout":
                        case "mouseover":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "scroll":
                        case "toggle":
                        case "touchmove":
                        case "wheel":
                        case "mouseenter":
                        case "mouseleave":
                        case "pointerenter":
                        case "pointerleave":
                            return 4;
                        case "message":
                            switch (Ze()) {
                                case Je:
                                    return 1;
                                case et:
                                    return 4;
                                case tt:
                                case nt:
                                    return 16;
                                case rt:
                                    return 536870912;
                                default:
                                    return 16
                            }
                        default:
                            return 16
                    }
                }
                var Gt = null,
                    Zt = null,
                    Jt = null;

                function en() {
                    if (Jt) return Jt;
                    var e, t, n = Zt,
                        r = n.length,
                        a = "value" in Gt ? Gt.value : Gt.textContent,
                        o = a.length;
                    for (e = 0; e < r && n[e] === a[e]; e++);
                    var i = r - e;
                    for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
                    return Jt = a.slice(e, 1 < t ? 1 - t : void 0)
                }

                function tn(e) {
                    var t = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
                }

                function nn() {
                    return !0
                }

                function rn() {
                    return !1
                }

                function an(e) {
                    function t(t, n, r, a, o) {
                        for (var i in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = o, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(a) : a[i]);
                        return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
                    }
                    return z(t.prototype, {
                        preventDefault: function() {
                            this.defaultPrevented = !0;
                            var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
                        },
                        stopPropagation: function() {
                            var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
                        },
                        persist: function() {},
                        isPersistent: nn
                    }), t
                }
                var on, ln, un, sn = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function(e) {
                            return e.timeStamp || Date.now()
                        },
                        defaultPrevented: 0,
                        isTrusted: 0
                    },
                    cn = an(sn),
                    fn = z({}, sn, {
                        view: 0,
                        detail: 0
                    }),
                    dn = an(fn),
                    pn = z({}, fn, {
                        screenX: 0,
                        screenY: 0,
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        getModifierState: Cn,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function(e) {
                            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                        },
                        movementX: function(e) {
                            return "movementX" in e ? e.movementX : (e !== un && (un && "mousemove" === e.type ? (on = e.screenX - un.screenX, ln = e.screenY - un.screenY) : ln = on = 0, un = e), on)
                        },
                        movementY: function(e) {
                            return "movementY" in e ? e.movementY : ln
                        }
                    }),
                    hn = an(pn),
                    vn = an(z({}, pn, {
                        dataTransfer: 0
                    })),
                    mn = an(z({}, fn, {
                        relatedTarget: 0
                    })),
                    yn = an(z({}, sn, {
                        animationName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    gn = z({}, sn, {
                        clipboardData: function(e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    }),
                    bn = an(gn),
                    wn = an(z({}, sn, {
                        data: 0
                    })),
                    xn = {
                        Esc: "Escape",
                        Spacebar: " ",
                        Left: "ArrowLeft",
                        Up: "ArrowUp",
                        Right: "ArrowRight",
                        Down: "ArrowDown",
                        Del: "Delete",
                        Win: "OS",
                        Menu: "ContextMenu",
                        Apps: "ContextMenu",
                        Scroll: "ScrollLock",
                        MozPrintableKey: "Unidentified"
                    },
                    Sn = {
                        8: "Backspace",
                        9: "Tab",
                        12: "Clear",
                        13: "Enter",
                        16: "Shift",
                        17: "Control",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Escape",
                        32: " ",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "ArrowLeft",
                        38: "ArrowUp",
                        39: "ArrowRight",
                        40: "ArrowDown",
                        45: "Insert",
                        46: "Delete",
                        112: "F1",
                        113: "F2",
                        114: "F3",
                        115: "F4",
                        116: "F5",
                        117: "F6",
                        118: "F7",
                        119: "F8",
                        120: "F9",
                        121: "F10",
                        122: "F11",
                        123: "F12",
                        144: "NumLock",
                        145: "ScrollLock",
                        224: "Meta"
                    },
                    kn = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function En(e) {
                    var t = this.nativeEvent;
                    return t.getModifierState ? t.getModifierState(e) : !!(e = kn[e]) && !!t[e]
                }

                function Cn() {
                    return En
                }
                var Pn = z({}, fn, {
                        key: function(e) {
                            if (e.key) {
                                var t = xn[e.key] || e.key;
                                if ("Unidentified" !== t) return t
                            }
                            return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Sn[e.keyCode] || "Unidentified" : ""
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: Cn,
                        charCode: function(e) {
                            return "keypress" === e.type ? tn(e) : 0
                        },
                        keyCode: function(e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function(e) {
                            return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        }
                    }),
                    Tn = an(Pn),
                    jn = an(z({}, pn, {
                        pointerId: 0,
                        width: 0,
                        height: 0,
                        pressure: 0,
                        tangentialPressure: 0,
                        tiltX: 0,
                        tiltY: 0,
                        twist: 0,
                        pointerType: 0,
                        isPrimary: 0
                    })),
                    Nn = an(z({}, fn, {
                        touches: 0,
                        targetTouches: 0,
                        changedTouches: 0,
                        altKey: 0,
                        metaKey: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        getModifierState: Cn
                    })),
                    Ln = an(z({}, sn, {
                        propertyName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    On = z({}, pn, {
                        deltaX: function(e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                        },
                        deltaY: function(e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                        },
                        deltaZ: 0,
                        deltaMode: 0
                    }),
                    Rn = an(On),
                    Mn = [9, 13, 27, 32],
                    _n = c && "CompositionEvent" in window,
                    An = null;
                c && "documentMode" in document && (An = document.documentMode);
                var In = c && "TextEvent" in window && !An,
                    zn = c && (!_n || An && 8 < An && 11 >= An),
                    Dn = String.fromCharCode(32),
                    Vn = !1;

                function Fn(e, t) {
                    switch (e) {
                        case "keyup":
                            return -1 !== Mn.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1
                    }
                }

                function Un(e) {
                    return "object" === typeof(e = e.detail) && "data" in e ? e.data : null
                }
                var Bn = !1;
                var Wn = {
                    color: !0,
                    date: !0,
                    datetime: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    password: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0
                };

                function Hn(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === t ? !!Wn[e.type] : "textarea" === t
                }

                function $n(e, t, n, r) {
                    Pe(r), 0 < (t = Qr(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({
                        event: n,
                        listeners: t
                    }))
                }
                var Qn = null,
                    Kn = null;

                function Yn(e) {
                    Dr(e, 0)
                }

                function qn(e) {
                    if (K(wa(e))) return e
                }

                function Xn(e, t) {
                    if ("change" === e) return t
                }
                var Gn = !1;
                if (c) {
                    var Zn;
                    if (c) {
                        var Jn = "oninput" in document;
                        if (!Jn) {
                            var er = document.createElement("div");
                            er.setAttribute("oninput", "return;"), Jn = "function" === typeof er.oninput
                        }
                        Zn = Jn
                    } else Zn = !1;
                    Gn = Zn && (!document.documentMode || 9 < document.documentMode)
                }

                function tr() {
                    Qn && (Qn.detachEvent("onpropertychange", nr), Kn = Qn = null)
                }

                function nr(e) {
                    if ("value" === e.propertyName && qn(Kn)) {
                        var t = [];
                        $n(t, Kn, e, xe(e)), Oe(Yn, t)
                    }
                }

                function rr(e, t, n) {
                    "focusin" === e ? (tr(), Kn = n, (Qn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
                }

                function ar(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return qn(Kn)
                }

                function or(e, t) {
                    if ("click" === e) return qn(t)
                }

                function ir(e, t) {
                    if ("input" === e || "change" === e) return qn(t)
                }
                var lr = "function" === typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
                };

                function ur(e, t) {
                    if (lr(e, t)) return !0;
                    if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++) {
                        var a = n[r];
                        if (!f.call(t, a) || !lr(e[a], t[a])) return !1
                    }
                    return !0
                }

                function sr(e) {
                    for (; e && e.firstChild;) e = e.firstChild;
                    return e
                }

                function cr(e, t) {
                    var n, r = sr(e);
                    for (e = 0; r;) {
                        if (3 === r.nodeType) {
                            if (n = e + r.textContent.length, e <= t && n >= t) return {
                                node: r,
                                offset: t - e
                            };
                            e = n
                        }
                        e: {
                            for (; r;) {
                                if (r.nextSibling) {
                                    r = r.nextSibling;
                                    break e
                                }
                                r = r.parentNode
                            }
                            r = void 0
                        }
                        r = sr(r)
                    }
                }

                function fr(e, t) {
                    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? fr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
                }

                function dr() {
                    for (var e = window, t = Y(); t instanceof e.HTMLIFrameElement;) {
                        try {
                            var n = "string" === typeof t.contentWindow.location.href
                        } catch (r) {
                            n = !1
                        }
                        if (!n) break;
                        t = Y((e = t.contentWindow).document)
                    }
                    return t
                }

                function pr(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
                }

                function hr(e) {
                    var t = dr(),
                        n = e.focusedElem,
                        r = e.selectionRange;
                    if (t !== n && n && n.ownerDocument && fr(n.ownerDocument.documentElement, n)) {
                        if (null !== r && pr(n))
                            if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                            else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                            e = e.getSelection();
                            var a = n.textContent.length,
                                o = Math.min(r.start, a);
                            r = void 0 === r.end ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = cr(n, o);
                            var i = cr(n, r);
                            a && i && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
                        }
                        for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop
                        });
                        for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
                    }
                }
                var vr = c && "documentMode" in document && 11 >= document.documentMode,
                    mr = null,
                    yr = null,
                    gr = null,
                    br = !1;

                function wr(e, t, n) {
                    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    br || null == mr || mr !== Y(r) || ("selectionStart" in (r = mr) && pr(r) ? r = {
                        start: r.selectionStart,
                        end: r.selectionEnd
                    } : r = {
                        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: r.anchorOffset,
                        focusNode: r.focusNode,
                        focusOffset: r.focusOffset
                    }, gr && ur(gr, r) || (gr = r, 0 < (r = Qr(yr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({
                        event: t,
                        listeners: r
                    }), t.target = mr)))
                }

                function xr(e, t) {
                    var n = {};
                    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
                }
                var Sr = {
                        animationend: xr("Animation", "AnimationEnd"),
                        animationiteration: xr("Animation", "AnimationIteration"),
                        animationstart: xr("Animation", "AnimationStart"),
                        transitionend: xr("Transition", "TransitionEnd")
                    },
                    kr = {},
                    Er = {};

                function Cr(e) {
                    if (kr[e]) return kr[e];
                    if (!Sr[e]) return e;
                    var t, n = Sr[e];
                    for (t in n)
                        if (n.hasOwnProperty(t) && t in Er) return kr[e] = n[t];
                    return e
                }
                c && (Er = document.createElement("div").style, "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition);
                var Pr = Cr("animationend"),
                    Tr = Cr("animationiteration"),
                    jr = Cr("animationstart"),
                    Nr = Cr("transitionend"),
                    Lr = new Map,
                    Or = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

                function Rr(e, t) {
                    Lr.set(e, t), u(t, [e])
                }
                for (var Mr = 0; Mr < Or.length; Mr++) {
                    var _r = Or[Mr];
                    Rr(_r.toLowerCase(), "on" + (_r[0].toUpperCase() + _r.slice(1)))
                }
                Rr(Pr, "onAnimationEnd"), Rr(Tr, "onAnimationIteration"), Rr(jr, "onAnimationStart"), Rr("dblclick", "onDoubleClick"), Rr("focusin", "onFocus"), Rr("focusout", "onBlur"), Rr(Nr, "onTransitionEnd"), s("onMouseEnter", ["mouseout", "mouseover"]), s("onMouseLeave", ["mouseout", "mouseover"]), s("onPointerEnter", ["pointerout", "pointerover"]), s("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var Ar = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Ir = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));

                function zr(e, t, n) {
                    var r = e.type || "unknown-event";
                    e.currentTarget = n,
                        function(e, t, n, r, a, i, l, u, s) {
                            if (Ue.apply(this, arguments), Ie) {
                                if (!Ie) throw Error(o(198));
                                var c = ze;
                                Ie = !1, ze = null, De || (De = !0, Ve = c)
                            }
                        }(r, t, void 0, e), e.currentTarget = null
                }

                function Dr(e, t) {
                    t = 0 !== (4 & t);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            a = r.event;
                        r = r.listeners;
                        e: {
                            var o = void 0;
                            if (t)
                                for (var i = r.length - 1; 0 <= i; i--) {
                                    var l = r[i],
                                        u = l.instance,
                                        s = l.currentTarget;
                                    if (l = l.listener, u !== o && a.isPropagationStopped()) break e;
                                    zr(a, l, s), o = u
                                } else
                                    for (i = 0; i < r.length; i++) {
                                        if (u = (l = r[i]).instance, s = l.currentTarget, l = l.listener, u !== o && a.isPropagationStopped()) break e;
                                        zr(a, l, s), o = u
                                    }
                        }
                    }
                    if (De) throw e = Ve, De = !1, Ve = null, e
                }

                function Vr(e, t) {
                    var n = t[va];
                    void 0 === n && (n = t[va] = new Set);
                    var r = e + "__bubble";
                    n.has(r) || (Wr(t, e, 2, !1), n.add(r))
                }

                function Fr(e, t, n) {
                    var r = 0;
                    t && (r |= 4), Wr(n, e, r, t)
                }
                var Ur = "_reactListening" + Math.random().toString(36).slice(2);

                function Br(e) {
                    if (!e[Ur]) {
                        e[Ur] = !0, i.forEach((function(t) {
                            "selectionchange" !== t && (Ir.has(t) || Fr(t, !1, e), Fr(t, !0, e))
                        }));
                        var t = 9 === e.nodeType ? e : e.ownerDocument;
                        null === t || t[Ur] || (t[Ur] = !0, Fr("selectionchange", !1, t))
                    }
                }

                function Wr(e, t, n, r) {
                    switch (Xt(t)) {
                        case 1:
                            var a = $t;
                            break;
                        case 4:
                            a = Qt;
                            break;
                        default:
                            a = Kt
                    }
                    n = a.bind(null, t, n, e), a = void 0, !Me || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
                        capture: !0,
                        passive: a
                    }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
                        passive: a
                    }) : e.addEventListener(t, n, !1)
                }

                function Hr(e, t, n, r, a) {
                    var o = r;
                    if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) {
                        if (null === r) return;
                        var i = r.tag;
                        if (3 === i || 4 === i) {
                            var l = r.stateNode.containerInfo;
                            if (l === a || 8 === l.nodeType && l.parentNode === a) break;
                            if (4 === i)
                                for (i = r.return; null !== i;) {
                                    var u = i.tag;
                                    if ((3 === u || 4 === u) && ((u = i.stateNode.containerInfo) === a || 8 === u.nodeType && u.parentNode === a)) return;
                                    i = i.return
                                }
                            for (; null !== l;) {
                                if (null === (i = ga(l))) return;
                                if (5 === (u = i.tag) || 6 === u) {
                                    r = o = i;
                                    continue e
                                }
                                l = l.parentNode
                            }
                        }
                        r = r.return
                    }
                    Oe((function() {
                        var r = o,
                            a = xe(n),
                            i = [];
                        e: {
                            var l = Lr.get(e);
                            if (void 0 !== l) {
                                var u = cn,
                                    s = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === tn(n)) break e;
                                    case "keydown":
                                    case "keyup":
                                        u = Tn;
                                        break;
                                    case "focusin":
                                        s = "focus", u = mn;
                                        break;
                                    case "focusout":
                                        s = "blur", u = mn;
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        u = mn;
                                        break;
                                    case "click":
                                        if (2 === n.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        u = hn;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        u = vn;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        u = Nn;
                                        break;
                                    case Pr:
                                    case Tr:
                                    case jr:
                                        u = yn;
                                        break;
                                    case Nr:
                                        u = Ln;
                                        break;
                                    case "scroll":
                                        u = dn;
                                        break;
                                    case "wheel":
                                        u = Rn;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        u = bn;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        u = jn
                                }
                                var c = 0 !== (4 & t),
                                    f = !c && "scroll" === e,
                                    d = c ? null !== l ? l + "Capture" : null : l;
                                c = [];
                                for (var p, h = r; null !== h;) {
                                    var v = (p = h).stateNode;
                                    if (5 === p.tag && null !== v && (p = v, null !== d && (null != (v = Re(h, d)) && c.push($r(h, v, p)))), f) break;
                                    h = h.return
                                }
                                0 < c.length && (l = new u(l, s, null, n, a), i.push({
                                    event: l,
                                    listeners: c
                                }))
                            }
                        }
                        if (0 === (7 & t)) {
                            if (u = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || n === we || !(s = n.relatedTarget || n.fromElement) || !ga(s) && !s[ha]) && (u || l) && (l = a.window === a ? a : (l = a.ownerDocument) ? l.defaultView || l.parentWindow : window, u ? (u = r, null !== (s = (s = n.relatedTarget || n.toElement) ? ga(s) : null) && (s !== (f = Be(s)) || 5 !== s.tag && 6 !== s.tag) && (s = null)) : (u = null, s = r), u !== s)) {
                                if (c = hn, v = "onMouseLeave", d = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (c = jn, v = "onPointerLeave", d = "onPointerEnter", h = "pointer"), f = null == u ? l : wa(u), p = null == s ? l : wa(s), (l = new c(v, h + "leave", u, n, a)).target = f, l.relatedTarget = p, v = null, ga(a) === r && ((c = new c(d, h + "enter", s, n, a)).target = p, c.relatedTarget = f, v = c), f = v, u && s) e: {
                                    for (d = s, h = 0, p = c = u; p; p = Kr(p)) h++;
                                    for (p = 0, v = d; v; v = Kr(v)) p++;
                                    for (; 0 < h - p;) c = Kr(c),
                                    h--;
                                    for (; 0 < p - h;) d = Kr(d),
                                    p--;
                                    for (; h--;) {
                                        if (c === d || null !== d && c === d.alternate) break e;
                                        c = Kr(c), d = Kr(d)
                                    }
                                    c = null
                                }
                                else c = null;
                                null !== u && Yr(i, l, u, c, !1), null !== s && null !== f && Yr(i, f, s, c, !0)
                            }
                            if ("select" === (u = (l = r ? wa(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === u && "file" === l.type) var m = Xn;
                            else if (Hn(l))
                                if (Gn) m = ir;
                                else {
                                    m = ar;
                                    var y = rr
                                }
                            else(u = l.nodeName) && "input" === u.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (m = or);
                            switch (m && (m = m(e, r)) ? $n(i, m, n, a) : (y && y(e, l, r), "focusout" === e && (y = l._wrapperState) && y.controlled && "number" === l.type && ee(l, "number", l.value)), y = r ? wa(r) : window, e) {
                                case "focusin":
                                    (Hn(y) || "true" === y.contentEditable) && (mr = y, yr = r, gr = null);
                                    break;
                                case "focusout":
                                    gr = yr = mr = null;
                                    break;
                                case "mousedown":
                                    br = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    br = !1, wr(i, n, a);
                                    break;
                                case "selectionchange":
                                    if (vr) break;
                                case "keydown":
                                case "keyup":
                                    wr(i, n, a)
                            }
                            var g;
                            if (_n) e: {
                                switch (e) {
                                    case "compositionstart":
                                        var b = "onCompositionStart";
                                        break e;
                                    case "compositionend":
                                        b = "onCompositionEnd";
                                        break e;
                                    case "compositionupdate":
                                        b = "onCompositionUpdate";
                                        break e
                                }
                                b = void 0
                            }
                            else Bn ? Fn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                            b && (zn && "ko" !== n.locale && (Bn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Bn && (g = en()) : (Zt = "value" in (Gt = a) ? Gt.value : Gt.textContent, Bn = !0)), 0 < (y = Qr(r, b)).length && (b = new wn(b, e, null, n, a), i.push({
                                event: b,
                                listeners: y
                            }), g ? b.data = g : null !== (g = Un(n)) && (b.data = g))), (g = In ? function(e, t) {
                                switch (e) {
                                    case "compositionend":
                                        return Un(t);
                                    case "keypress":
                                        return 32 !== t.which ? null : (Vn = !0, Dn);
                                    case "textInput":
                                        return (e = t.data) === Dn && Vn ? null : e;
                                    default:
                                        return null
                                }
                            }(e, n) : function(e, t) {
                                if (Bn) return "compositionend" === e || !_n && Fn(e, t) ? (e = en(), Jt = Zt = Gt = null, Bn = !1, e) : null;
                                switch (e) {
                                    case "paste":
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                            if (t.char && 1 < t.char.length) return t.char;
                                            if (t.which) return String.fromCharCode(t.which)
                                        }
                                        return null;
                                    case "compositionend":
                                        return zn && "ko" !== t.locale ? null : t.data
                                }
                            }(e, n)) && (0 < (r = Qr(r, "onBeforeInput")).length && (a = new wn("onBeforeInput", "beforeinput", null, n, a), i.push({
                                event: a,
                                listeners: r
                            }), a.data = g))
                        }
                        Dr(i, t)
                    }))
                }

                function $r(e, t, n) {
                    return {
                        instance: e,
                        listener: t,
                        currentTarget: n
                    }
                }

                function Qr(e, t) {
                    for (var n = t + "Capture", r = []; null !== e;) {
                        var a = e,
                            o = a.stateNode;
                        5 === a.tag && null !== o && (a = o, null != (o = Re(e, n)) && r.unshift($r(e, o, a)), null != (o = Re(e, t)) && r.push($r(e, o, a))), e = e.return
                    }
                    return r
                }

                function Kr(e) {
                    if (null === e) return null;
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag);
                    return e || null
                }

                function Yr(e, t, n, r, a) {
                    for (var o = t._reactName, i = []; null !== n && n !== r;) {
                        var l = n,
                            u = l.alternate,
                            s = l.stateNode;
                        if (null !== u && u === r) break;
                        5 === l.tag && null !== s && (l = s, a ? null != (u = Re(n, o)) && i.unshift($r(n, u, l)) : a || null != (u = Re(n, o)) && i.push($r(n, u, l))), n = n.return
                    }
                    0 !== i.length && e.push({
                        event: t,
                        listeners: i
                    })
                }
                var qr = /\r\n?/g,
                    Xr = /\u0000|\uFFFD/g;

                function Gr(e) {
                    return ("string" === typeof e ? e : "" + e).replace(qr, "\n").replace(Xr, "")
                }

                function Zr(e, t, n) {
                    if (t = Gr(t), Gr(e) !== t && n) throw Error(o(425))
                }

                function Jr() {}
                var ea = null,
                    ta = null;

                function na(e, t) {
                    return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
                }
                var ra = "function" === typeof setTimeout ? setTimeout : void 0,
                    aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
                    oa = "function" === typeof Promise ? Promise : void 0,
                    ia = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof oa ? function(e) {
                        return oa.resolve(null).then(e).catch(la)
                    } : ra;

                function la(e) {
                    setTimeout((function() {
                        throw e
                    }))
                }

                function ua(e, t) {
                    var n = t,
                        r = 0;
                    do {
                        var a = n.nextSibling;
                        if (e.removeChild(n), a && 8 === a.nodeType)
                            if ("/$" === (n = a.data)) {
                                if (0 === r) return e.removeChild(a), void Bt(t);
                                r--
                            } else "$" !== n && "$?" !== n && "$!" !== n || r++;
                        n = a
                    } while (n);
                    Bt(t)
                }

                function sa(e) {
                    for (; null != e; e = e.nextSibling) {
                        var t = e.nodeType;
                        if (1 === t || 3 === t) break;
                        if (8 === t) {
                            if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
                            if ("/$" === t) return null
                        }
                    }
                    return e
                }

                function ca(e) {
                    e = e.previousSibling;
                    for (var t = 0; e;) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("$" === n || "$!" === n || "$?" === n) {
                                if (0 === t) return e;
                                t--
                            } else "/$" === n && t++
                        }
                        e = e.previousSibling
                    }
                    return null
                }
                var fa = Math.random().toString(36).slice(2),
                    da = "__reactFiber$" + fa,
                    pa = "__reactProps$" + fa,
                    ha = "__reactContainer$" + fa,
                    va = "__reactEvents$" + fa,
                    ma = "__reactListeners$" + fa,
                    ya = "__reactHandles$" + fa;

                function ga(e) {
                    var t = e[da];
                    if (t) return t;
                    for (var n = e.parentNode; n;) {
                        if (t = n[ha] || n[da]) {
                            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                                for (e = ca(e); null !== e;) {
                                    if (n = e[da]) return n;
                                    e = ca(e)
                                }
                            return t
                        }
                        n = (e = n).parentNode
                    }
                    return null
                }

                function ba(e) {
                    return !(e = e[da] || e[ha]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
                }

                function wa(e) {
                    if (5 === e.tag || 6 === e.tag) return e.stateNode;
                    throw Error(o(33))
                }

                function xa(e) {
                    return e[pa] || null
                }
                var Sa = [],
                    ka = -1;

                function Ea(e) {
                    return {
                        current: e
                    }
                }

                function Ca(e) {
                    0 > ka || (e.current = Sa[ka], Sa[ka] = null, ka--)
                }

                function Pa(e, t) {
                    ka++, Sa[ka] = e.current, e.current = t
                }
                var Ta = {},
                    ja = Ea(Ta),
                    Na = Ea(!1),
                    La = Ta;

                function Oa(e, t) {
                    var n = e.type.contextTypes;
                    if (!n) return Ta;
                    var r = e.stateNode;
                    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                    var a, o = {};
                    for (a in n) o[a] = t[a];
                    return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
                }

                function Ra(e) {
                    return null !== (e = e.childContextTypes) && void 0 !== e
                }

                function Ma() {
                    Ca(Na), Ca(ja)
                }

                function _a(e, t, n) {
                    if (ja.current !== Ta) throw Error(o(168));
                    Pa(ja, t), Pa(Na, n)
                }

                function Aa(e, t, n) {
                    var r = e.stateNode;
                    if (t = t.childContextTypes, "function" !== typeof r.getChildContext) return n;
                    for (var a in r = r.getChildContext())
                        if (!(a in t)) throw Error(o(108, W(e) || "Unknown", a));
                    return z({}, n, r)
                }

                function Ia(e) {
                    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ta, La = ja.current, Pa(ja, e), Pa(Na, Na.current), !0
                }

                function za(e, t, n) {
                    var r = e.stateNode;
                    if (!r) throw Error(o(169));
                    n ? (e = Aa(e, t, La), r.__reactInternalMemoizedMergedChildContext = e, Ca(Na), Ca(ja), Pa(ja, e)) : Ca(Na), Pa(Na, n)
                }
                var Da = null,
                    Va = !1,
                    Fa = !1;

                function Ua(e) {
                    null === Da ? Da = [e] : Da.push(e)
                }

                function Ba() {
                    if (!Fa && null !== Da) {
                        Fa = !0;
                        var e = 0,
                            t = bt;
                        try {
                            var n = Da;
                            for (bt = 1; e < n.length; e++) {
                                var r = n[e];
                                do {
                                    r = r(!0)
                                } while (null !== r)
                            }
                            Da = null, Va = !1
                        } catch (a) {
                            throw null !== Da && (Da = Da.slice(e + 1)), Ke(Je, Ba), a
                        } finally {
                            bt = t, Fa = !1
                        }
                    }
                    return null
                }
                var Wa = [],
                    Ha = 0,
                    $a = null,
                    Qa = 0,
                    Ka = [],
                    Ya = 0,
                    qa = null,
                    Xa = 1,
                    Ga = "";

                function Za(e, t) {
                    Wa[Ha++] = Qa, Wa[Ha++] = $a, $a = e, Qa = t
                }

                function Ja(e, t, n) {
                    Ka[Ya++] = Xa, Ka[Ya++] = Ga, Ka[Ya++] = qa, qa = e;
                    var r = Xa;
                    e = Ga;
                    var a = 32 - it(r) - 1;
                    r &= ~(1 << a), n += 1;
                    var o = 32 - it(t) + a;
                    if (30 < o) {
                        var i = a - a % 5;
                        o = (r & (1 << i) - 1).toString(32), r >>= i, a -= i, Xa = 1 << 32 - it(t) + a | n << a | r, Ga = o + e
                    } else Xa = 1 << o | n << a | r, Ga = e
                }

                function eo(e) {
                    null !== e.return && (Za(e, 1), Ja(e, 1, 0))
                }

                function to(e) {
                    for (; e === $a;) $a = Wa[--Ha], Wa[Ha] = null, Qa = Wa[--Ha], Wa[Ha] = null;
                    for (; e === qa;) qa = Ka[--Ya], Ka[Ya] = null, Ga = Ka[--Ya], Ka[Ya] = null, Xa = Ka[--Ya], Ka[Ya] = null
                }
                var no = null,
                    ro = null,
                    ao = !1,
                    oo = null;

                function io(e, t) {
                    var n = Rs(5, null, null, 0);
                    n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
                }

                function lo(e, t) {
                    switch (e.tag) {
                        case 5:
                            var n = e.type;
                            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, no = e, ro = sa(t.firstChild), !0);
                        case 6:
                            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, no = e, ro = null, !0);
                        case 13:
                            return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== qa ? {
                                id: Xa,
                                overflow: Ga
                            } : null, e.memoizedState = {
                                dehydrated: t,
                                treeContext: n,
                                retryLane: 1073741824
                            }, (n = Rs(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, no = e, ro = null, !0);
                        default:
                            return !1
                    }
                }

                function uo(e) {
                    return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
                }

                function so(e) {
                    if (ao) {
                        var t = ro;
                        if (t) {
                            var n = t;
                            if (!lo(e, t)) {
                                if (uo(e)) throw Error(o(418));
                                t = sa(n.nextSibling);
                                var r = no;
                                t && lo(e, t) ? io(r, n) : (e.flags = -4097 & e.flags | 2, ao = !1, no = e)
                            }
                        } else {
                            if (uo(e)) throw Error(o(418));
                            e.flags = -4097 & e.flags | 2, ao = !1, no = e
                        }
                    }
                }

                function co(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    no = e
                }

                function fo(e) {
                    if (e !== no) return !1;
                    if (!ao) return co(e), ao = !0, !1;
                    var t;
                    if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)), t && (t = ro)) {
                        if (uo(e)) throw po(), Error(o(418));
                        for (; t;) io(e, t), t = sa(t.nextSibling)
                    }
                    if (co(e), 13 === e.tag) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
                        e: {
                            for (e = e.nextSibling, t = 0; e;) {
                                if (8 === e.nodeType) {
                                    var n = e.data;
                                    if ("/$" === n) {
                                        if (0 === t) {
                                            ro = sa(e.nextSibling);
                                            break e
                                        }
                                        t--
                                    } else "$" !== n && "$!" !== n && "$?" !== n || t++
                                }
                                e = e.nextSibling
                            }
                            ro = null
                        }
                    } else ro = no ? sa(e.stateNode.nextSibling) : null;
                    return !0
                }

                function po() {
                    for (var e = ro; e;) e = sa(e.nextSibling)
                }

                function ho() {
                    ro = no = null, ao = !1
                }

                function vo(e) {
                    null === oo ? oo = [e] : oo.push(e)
                }
                var mo = w.ReactCurrentBatchConfig;

                function yo(e, t) {
                    if (e && e.defaultProps) {
                        for (var n in t = z({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                        return t
                    }
                    return t
                }
                var go = Ea(null),
                    bo = null,
                    wo = null,
                    xo = null;

                function So() {
                    xo = wo = bo = null
                }

                function ko(e) {
                    var t = go.current;
                    Ca(go), e._currentValue = t
                }

                function Eo(e, t, n) {
                    for (; null !== e;) {
                        var r = e.alternate;
                        if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                        e = e.return
                    }
                }

                function Co(e, t) {
                    bo = e, xo = wo = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (wl = !0), e.firstContext = null)
                }

                function Po(e) {
                    var t = e._currentValue;
                    if (xo !== e)
                        if (e = {
                                context: e,
                                memoizedValue: t,
                                next: null
                            }, null === wo) {
                            if (null === bo) throw Error(o(308));
                            wo = e, bo.dependencies = {
                                lanes: 0,
                                firstContext: e
                            }
                        } else wo = wo.next = e;
                    return t
                }
                var To = null;

                function jo(e) {
                    null === To ? To = [e] : To.push(e)
                }

                function No(e, t, n, r) {
                    var a = t.interleaved;
                    return null === a ? (n.next = n, jo(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Lo(e, r)
                }

                function Lo(e, t) {
                    e.lanes |= t;
                    var n = e.alternate;
                    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                    return 3 === n.tag ? n.stateNode : null
                }
                var Oo = !1;

                function Ro(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {
                            pending: null,
                            interleaved: null,
                            lanes: 0
                        },
                        effects: null
                    }
                }

                function Mo(e, t) {
                    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects
                    })
                }

                function _o(e, t) {
                    return {
                        eventTime: e,
                        lane: t,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function Ao(e, t, n) {
                    var r = e.updateQueue;
                    if (null === r) return null;
                    if (r = r.shared, 0 !== (2 & Nu)) {
                        var a = r.pending;
                        return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Lo(e, n)
                    }
                    return null === (a = r.interleaved) ? (t.next = t, jo(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Lo(e, n)
                }

                function Io(e, t, n) {
                    if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & n))) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, gt(e, n)
                    }
                }

                function zo(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var a = null,
                            o = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var i = {
                                    eventTime: n.eventTime,
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: n.callback,
                                    next: null
                                };
                                null === o ? a = o = i : o = o.next = i, n = n.next
                            } while (null !== n);
                            null === o ? a = o = t : o = o.next = t
                        } else a = o = t;
                        return n = {
                            baseState: r.baseState,
                            firstBaseUpdate: a,
                            lastBaseUpdate: o,
                            shared: r.shared,
                            effects: r.effects
                        }, void(e.updateQueue = n)
                    }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
                }

                function Do(e, t, n, r) {
                    var a = e.updateQueue;
                    Oo = !1;
                    var o = a.firstBaseUpdate,
                        i = a.lastBaseUpdate,
                        l = a.shared.pending;
                    if (null !== l) {
                        a.shared.pending = null;
                        var u = l,
                            s = u.next;
                        u.next = null, null === i ? o = s : i.next = s, i = u;
                        var c = e.alternate;
                        null !== c && ((l = (c = c.updateQueue).lastBaseUpdate) !== i && (null === l ? c.firstBaseUpdate = s : l.next = s, c.lastBaseUpdate = u))
                    }
                    if (null !== o) {
                        var f = a.baseState;
                        for (i = 0, c = s = u = null, l = o;;) {
                            var d = l.lane,
                                p = l.eventTime;
                            if ((r & d) === d) {
                                null !== c && (c = c.next = {
                                    eventTime: p,
                                    lane: 0,
                                    tag: l.tag,
                                    payload: l.payload,
                                    callback: l.callback,
                                    next: null
                                });
                                e: {
                                    var h = e,
                                        v = l;
                                    switch (d = t, p = n, v.tag) {
                                        case 1:
                                            if ("function" === typeof(h = v.payload)) {
                                                f = h.call(p, f, d);
                                                break e
                                            }
                                            f = h;
                                            break e;
                                        case 3:
                                            h.flags = -65537 & h.flags | 128;
                                        case 0:
                                            if (null === (d = "function" === typeof(h = v.payload) ? h.call(p, f, d) : h) || void 0 === d) break e;
                                            f = z({}, f, d);
                                            break e;
                                        case 2:
                                            Oo = !0
                                    }
                                }
                                null !== l.callback && 0 !== l.lane && (e.flags |= 64, null === (d = a.effects) ? a.effects = [l] : d.push(l))
                            } else p = {
                                eventTime: p,
                                lane: d,
                                tag: l.tag,
                                payload: l.payload,
                                callback: l.callback,
                                next: null
                            }, null === c ? (s = c = p, u = f) : c = c.next = p, i |= d;
                            if (null === (l = l.next)) {
                                if (null === (l = a.shared.pending)) break;
                                l = (d = l).next, d.next = null, a.lastBaseUpdate = d, a.shared.pending = null
                            }
                        }
                        if (null === c && (u = f), a.baseState = u, a.firstBaseUpdate = s, a.lastBaseUpdate = c, null !== (t = a.shared.interleaved)) {
                            a = t;
                            do {
                                i |= a.lane, a = a.next
                            } while (a !== t)
                        } else null === o && (a.shared.lanes = 0);
                        zu |= i, e.lanes = i, e.memoizedState = f
                    }
                }

                function Vo(e, t, n) {
                    if (e = t.effects, t.effects = null, null !== e)
                        for (t = 0; t < e.length; t++) {
                            var r = e[t],
                                a = r.callback;
                            if (null !== a) {
                                if (r.callback = null, r = n, "function" !== typeof a) throw Error(o(191, a));
                                a.call(r)
                            }
                        }
                }
                var Fo = (new r.Component).refs;

                function Uo(e, t, n, r) {
                    n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : z({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
                }
                var Bo = {
                    isMounted: function(e) {
                        return !!(e = e._reactInternals) && Be(e) === e
                    },
                    enqueueSetState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = ts(),
                            a = ns(e),
                            o = _o(r, a);
                        o.payload = t, void 0 !== n && null !== n && (o.callback = n), null !== (t = Ao(e, o, a)) && (rs(t, e, a, r), Io(t, e, a))
                    },
                    enqueueReplaceState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = ts(),
                            a = ns(e),
                            o = _o(r, a);
                        o.tag = 1, o.payload = t, void 0 !== n && null !== n && (o.callback = n), null !== (t = Ao(e, o, a)) && (rs(t, e, a, r), Io(t, e, a))
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternals;
                        var n = ts(),
                            r = ns(e),
                            a = _o(n, r);
                        a.tag = 2, void 0 !== t && null !== t && (a.callback = t), null !== (t = Ao(e, a, r)) && (rs(t, e, r, n), Io(t, e, r))
                    }
                };

                function Wo(e, t, n, r, a, o, i) {
                    return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, i) : !t.prototype || !t.prototype.isPureReactComponent || (!ur(n, r) || !ur(a, o))
                }

                function Ho(e, t, n) {
                    var r = !1,
                        a = Ta,
                        o = t.contextType;
                    return "object" === typeof o && null !== o ? o = Po(o) : (a = Ra(t) ? La : ja.current, o = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Oa(e, a) : Ta), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Bo, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t
                }

                function $o(e, t, n, r) {
                    e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bo.enqueueReplaceState(t, t.state, null)
                }

                function Qo(e, t, n, r) {
                    var a = e.stateNode;
                    a.props = n, a.state = e.memoizedState, a.refs = Fo, Ro(e);
                    var o = t.contextType;
                    "object" === typeof o && null !== o ? a.context = Po(o) : (o = Ra(t) ? La : ja.current, a.context = Oa(e, o)), a.state = e.memoizedState, "function" === typeof(o = t.getDerivedStateFromProps) && (Uo(e, t, o, n), a.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof a.getSnapshotBeforeUpdate || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || (t = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && Bo.enqueueReplaceState(a, a.state, null), Do(e, n, a, r), a.state = e.memoizedState), "function" === typeof a.componentDidMount && (e.flags |= 4194308)
                }

                function Ko(e, t, n) {
                    if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                        if (n._owner) {
                            if (n = n._owner) {
                                if (1 !== n.tag) throw Error(o(309));
                                var r = n.stateNode
                            }
                            if (!r) throw Error(o(147, e));
                            var a = r,
                                i = "" + e;
                            return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === i ? t.ref : (t = function(e) {
                                var t = a.refs;
                                t === Fo && (t = a.refs = {}), null === e ? delete t[i] : t[i] = e
                            }, t._stringRef = i, t)
                        }
                        if ("string" !== typeof e) throw Error(o(284));
                        if (!n._owner) throw Error(o(290, e))
                    }
                    return e
                }

                function Yo(e, t) {
                    throw e = Object.prototype.toString.call(t), Error(o(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
                }

                function qo(e) {
                    return (0, e._init)(e._payload)
                }

                function Xo(e) {
                    function t(t, n) {
                        if (e) {
                            var r = t.deletions;
                            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                        }
                    }

                    function n(n, r) {
                        if (!e) return null;
                        for (; null !== r;) t(n, r), r = r.sibling;
                        return null
                    }

                    function r(e, t) {
                        for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                        return e
                    }

                    function a(e, t) {
                        return (e = _s(e, t)).index = 0, e.sibling = null, e
                    }

                    function i(t, n, r) {
                        return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
                    }

                    function l(t) {
                        return e && null === t.alternate && (t.flags |= 2), t
                    }

                    function u(e, t, n, r) {
                        return null === t || 6 !== t.tag ? ((t = Ds(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
                    }

                    function s(e, t, n, r) {
                        var o = n.type;
                        return o === k ? f(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === o || "object" === typeof o && null !== o && o.$$typeof === R && qo(o) === t.type) ? ((r = a(t, n.props)).ref = Ko(e, t, n), r.return = e, r) : ((r = As(n.type, n.key, n.props, null, e.mode, r)).ref = Ko(e, t, n), r.return = e, r)
                    }

                    function c(e, t, n, r) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Vs(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
                    }

                    function f(e, t, n, r, o) {
                        return null === t || 7 !== t.tag ? ((t = Is(n, e.mode, r, o)).return = e, t) : ((t = a(t, n)).return = e, t)
                    }

                    function d(e, t, n) {
                        if ("string" === typeof t && "" !== t || "number" === typeof t) return (t = Ds("" + t, e.mode, n)).return = e, t;
                        if ("object" === typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case x:
                                    return (n = As(t.type, t.key, t.props, null, e.mode, n)).ref = Ko(e, null, t), n.return = e, n;
                                case S:
                                    return (t = Vs(t, e.mode, n)).return = e, t;
                                case R:
                                    return d(e, (0, t._init)(t._payload), n)
                            }
                            if (te(t) || A(t)) return (t = Is(t, e.mode, n, null)).return = e, t;
                            Yo(e, t)
                        }
                        return null
                    }

                    function p(e, t, n, r) {
                        var a = null !== t ? t.key : null;
                        if ("string" === typeof n && "" !== n || "number" === typeof n) return null !== a ? null : u(e, t, "" + n, r);
                        if ("object" === typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case x:
                                    return n.key === a ? s(e, t, n, r) : null;
                                case S:
                                    return n.key === a ? c(e, t, n, r) : null;
                                case R:
                                    return p(e, t, (a = n._init)(n._payload), r)
                            }
                            if (te(n) || A(n)) return null !== a ? null : f(e, t, n, r, null);
                            Yo(e, n)
                        }
                        return null
                    }

                    function h(e, t, n, r, a) {
                        if ("string" === typeof r && "" !== r || "number" === typeof r) return u(t, e = e.get(n) || null, "" + r, a);
                        if ("object" === typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case x:
                                    return s(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                                case S:
                                    return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                                case R:
                                    return h(e, t, n, (0, r._init)(r._payload), a)
                            }
                            if (te(r) || A(r)) return f(t, e = e.get(n) || null, r, a, null);
                            Yo(t, r)
                        }
                        return null
                    }

                    function v(a, o, l, u) {
                        for (var s = null, c = null, f = o, v = o = 0, m = null; null !== f && v < l.length; v++) {
                            f.index > v ? (m = f, f = null) : m = f.sibling;
                            var y = p(a, f, l[v], u);
                            if (null === y) {
                                null === f && (f = m);
                                break
                            }
                            e && f && null === y.alternate && t(a, f), o = i(y, o, v), null === c ? s = y : c.sibling = y, c = y, f = m
                        }
                        if (v === l.length) return n(a, f), ao && Za(a, v), s;
                        if (null === f) {
                            for (; v < l.length; v++) null !== (f = d(a, l[v], u)) && (o = i(f, o, v), null === c ? s = f : c.sibling = f, c = f);
                            return ao && Za(a, v), s
                        }
                        for (f = r(a, f); v < l.length; v++) null !== (m = h(f, a, v, l[v], u)) && (e && null !== m.alternate && f.delete(null === m.key ? v : m.key), o = i(m, o, v), null === c ? s = m : c.sibling = m, c = m);
                        return e && f.forEach((function(e) {
                            return t(a, e)
                        })), ao && Za(a, v), s
                    }

                    function m(a, l, u, s) {
                        var c = A(u);
                        if ("function" !== typeof c) throw Error(o(150));
                        if (null == (u = c.call(u))) throw Error(o(151));
                        for (var f = c = null, v = l, m = l = 0, y = null, g = u.next(); null !== v && !g.done; m++, g = u.next()) {
                            v.index > m ? (y = v, v = null) : y = v.sibling;
                            var b = p(a, v, g.value, s);
                            if (null === b) {
                                null === v && (v = y);
                                break
                            }
                            e && v && null === b.alternate && t(a, v), l = i(b, l, m), null === f ? c = b : f.sibling = b, f = b, v = y
                        }
                        if (g.done) return n(a, v), ao && Za(a, m), c;
                        if (null === v) {
                            for (; !g.done; m++, g = u.next()) null !== (g = d(a, g.value, s)) && (l = i(g, l, m), null === f ? c = g : f.sibling = g, f = g);
                            return ao && Za(a, m), c
                        }
                        for (v = r(a, v); !g.done; m++, g = u.next()) null !== (g = h(v, a, m, g.value, s)) && (e && null !== g.alternate && v.delete(null === g.key ? m : g.key), l = i(g, l, m), null === f ? c = g : f.sibling = g, f = g);
                        return e && v.forEach((function(e) {
                            return t(a, e)
                        })), ao && Za(a, m), c
                    }
                    return function e(r, o, i, u) {
                        if ("object" === typeof i && null !== i && i.type === k && null === i.key && (i = i.props.children), "object" === typeof i && null !== i) {
                            switch (i.$$typeof) {
                                case x:
                                    e: {
                                        for (var s = i.key, c = o; null !== c;) {
                                            if (c.key === s) {
                                                if ((s = i.type) === k) {
                                                    if (7 === c.tag) {
                                                        n(r, c.sibling), (o = a(c, i.props.children)).return = r, r = o;
                                                        break e
                                                    }
                                                } else if (c.elementType === s || "object" === typeof s && null !== s && s.$$typeof === R && qo(s) === c.type) {
                                                    n(r, c.sibling), (o = a(c, i.props)).ref = Ko(r, c, i), o.return = r, r = o;
                                                    break e
                                                }
                                                n(r, c);
                                                break
                                            }
                                            t(r, c), c = c.sibling
                                        }
                                        i.type === k ? ((o = Is(i.props.children, r.mode, u, i.key)).return = r, r = o) : ((u = As(i.type, i.key, i.props, null, r.mode, u)).ref = Ko(r, o, i), u.return = r, r = u)
                                    }
                                    return l(r);
                                case S:
                                    e: {
                                        for (c = i.key; null !== o;) {
                                            if (o.key === c) {
                                                if (4 === o.tag && o.stateNode.containerInfo === i.containerInfo && o.stateNode.implementation === i.implementation) {
                                                    n(r, o.sibling), (o = a(o, i.children || [])).return = r, r = o;
                                                    break e
                                                }
                                                n(r, o);
                                                break
                                            }
                                            t(r, o), o = o.sibling
                                        }(o = Vs(i, r.mode, u)).return = r,
                                        r = o
                                    }
                                    return l(r);
                                case R:
                                    return e(r, o, (c = i._init)(i._payload), u)
                            }
                            if (te(i)) return v(r, o, i, u);
                            if (A(i)) return m(r, o, i, u);
                            Yo(r, i)
                        }
                        return "string" === typeof i && "" !== i || "number" === typeof i ? (i = "" + i, null !== o && 6 === o.tag ? (n(r, o.sibling), (o = a(o, i)).return = r, r = o) : (n(r, o), (o = Ds(i, r.mode, u)).return = r, r = o), l(r)) : n(r, o)
                    }
                }
                var Go = Xo(!0),
                    Zo = Xo(!1),
                    Jo = {},
                    ei = Ea(Jo),
                    ti = Ea(Jo),
                    ni = Ea(Jo);

                function ri(e) {
                    if (e === Jo) throw Error(o(174));
                    return e
                }

                function ai(e, t) {
                    switch (Pa(ni, t), Pa(ti, e), Pa(ei, Jo), e = t.nodeType) {
                        case 9:
                        case 11:
                            t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
                            break;
                        default:
                            t = ue(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                    }
                    Ca(ei), Pa(ei, t)
                }

                function oi() {
                    Ca(ei), Ca(ti), Ca(ni)
                }

                function ii(e) {
                    ri(ni.current);
                    var t = ri(ei.current),
                        n = ue(t, e.type);
                    t !== n && (Pa(ti, e), Pa(ei, n))
                }

                function li(e) {
                    ti.current === e && (Ca(ei), Ca(ti))
                }
                var ui = Ea(0);

                function si(e) {
                    for (var t = e; null !== t;) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                            if (0 !== (128 & t.flags)) return t
                        } else if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    return null
                }
                var ci = [];

                function fi() {
                    for (var e = 0; e < ci.length; e++) ci[e]._workInProgressVersionPrimary = null;
                    ci.length = 0
                }
                var di = w.ReactCurrentDispatcher,
                    pi = w.ReactCurrentBatchConfig,
                    hi = 0,
                    vi = null,
                    mi = null,
                    yi = null,
                    gi = !1,
                    bi = !1,
                    wi = 0,
                    xi = 0;

                function Si() {
                    throw Error(o(321))
                }

                function ki(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!lr(e[n], t[n])) return !1;
                    return !0
                }

                function Ei(e, t, n, r, a, i) {
                    if (hi = i, vi = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, di.current = null === e || null === e.memoizedState ? ll : ul, e = n(r, a), bi) {
                        i = 0;
                        do {
                            if (bi = !1, wi = 0, 25 <= i) throw Error(o(301));
                            i += 1, yi = mi = null, t.updateQueue = null, di.current = sl, e = n(r, a)
                        } while (bi)
                    }
                    if (di.current = il, t = null !== mi && null !== mi.next, hi = 0, yi = mi = vi = null, gi = !1, t) throw Error(o(300));
                    return e
                }

                function Ci() {
                    var e = 0 !== wi;
                    return wi = 0, e
                }

                function Pi() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === yi ? vi.memoizedState = yi = e : yi = yi.next = e, yi
                }

                function Ti() {
                    if (null === mi) {
                        var e = vi.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = mi.next;
                    var t = null === yi ? vi.memoizedState : yi.next;
                    if (null !== t) yi = t, mi = e;
                    else {
                        if (null === e) throw Error(o(310));
                        e = {
                            memoizedState: (mi = e).memoizedState,
                            baseState: mi.baseState,
                            baseQueue: mi.baseQueue,
                            queue: mi.queue,
                            next: null
                        }, null === yi ? vi.memoizedState = yi = e : yi = yi.next = e
                    }
                    return yi
                }

                function ji(e, t) {
                    return "function" === typeof t ? t(e) : t
                }

                function Ni(e) {
                    var t = Ti(),
                        n = t.queue;
                    if (null === n) throw Error(o(311));
                    n.lastRenderedReducer = e;
                    var r = mi,
                        a = r.baseQueue,
                        i = n.pending;
                    if (null !== i) {
                        if (null !== a) {
                            var l = a.next;
                            a.next = i.next, i.next = l
                        }
                        r.baseQueue = a = i, n.pending = null
                    }
                    if (null !== a) {
                        i = a.next, r = r.baseState;
                        var u = l = null,
                            s = null,
                            c = i;
                        do {
                            var f = c.lane;
                            if ((hi & f) === f) null !== s && (s = s.next = {
                                lane: 0,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
                            else {
                                var d = {
                                    lane: f,
                                    action: c.action,
                                    hasEagerState: c.hasEagerState,
                                    eagerState: c.eagerState,
                                    next: null
                                };
                                null === s ? (u = s = d, l = r) : s = s.next = d, vi.lanes |= f, zu |= f
                            }
                            c = c.next
                        } while (null !== c && c !== i);
                        null === s ? l = r : s.next = u, lr(r, t.memoizedState) || (wl = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r
                    }
                    if (null !== (e = n.interleaved)) {
                        a = e;
                        do {
                            i = a.lane, vi.lanes |= i, zu |= i, a = a.next
                        } while (a !== e)
                    } else null === a && (n.lanes = 0);
                    return [t.memoizedState, n.dispatch]
                }

                function Li(e) {
                    var t = Ti(),
                        n = t.queue;
                    if (null === n) throw Error(o(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        a = n.pending,
                        i = t.memoizedState;
                    if (null !== a) {
                        n.pending = null;
                        var l = a = a.next;
                        do {
                            i = e(i, l.action), l = l.next
                        } while (l !== a);
                        lr(i, t.memoizedState) || (wl = !0), t.memoizedState = i, null === t.baseQueue && (t.baseState = i), n.lastRenderedState = i
                    }
                    return [i, r]
                }

                function Oi() {}

                function Ri(e, t) {
                    var n = vi,
                        r = Ti(),
                        a = t(),
                        i = !lr(r.memoizedState, a);
                    if (i && (r.memoizedState = a, wl = !0), r = r.queue, Hi(Ai.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || null !== yi && 1 & yi.memoizedState.tag) {
                        if (n.flags |= 2048, Vi(9, _i.bind(null, n, r, a, t), void 0, null), null === Lu) throw Error(o(349));
                        0 !== (30 & hi) || Mi(n, t, a)
                    }
                    return a
                }

                function Mi(e, t, n) {
                    e.flags |= 16384, e = {
                        getSnapshot: t,
                        value: n
                    }, null === (t = vi.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, vi.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
                }

                function _i(e, t, n, r) {
                    t.value = n, t.getSnapshot = r, Ii(t) && zi(e)
                }

                function Ai(e, t, n) {
                    return n((function() {
                        Ii(t) && zi(e)
                    }))
                }

                function Ii(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var n = t();
                        return !lr(e, n)
                    } catch (r) {
                        return !0
                    }
                }

                function zi(e) {
                    var t = Lo(e, 1);
                    null !== t && rs(t, e, 1, -1)
                }

                function Di(e) {
                    var t = Pi();
                    return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: ji,
                        lastRenderedState: e
                    }, t.queue = e, e = e.dispatch = nl.bind(null, vi, e), [t.memoizedState, e]
                }

                function Vi(e, t, n, r) {
                    return e = {
                        tag: e,
                        create: t,
                        destroy: n,
                        deps: r,
                        next: null
                    }, null === (t = vi.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, vi.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
                }

                function Fi() {
                    return Ti().memoizedState
                }

                function Ui(e, t, n, r) {
                    var a = Pi();
                    vi.flags |= e, a.memoizedState = Vi(1 | t, n, void 0, void 0 === r ? null : r)
                }

                function Bi(e, t, n, r) {
                    var a = Ti();
                    r = void 0 === r ? null : r;
                    var o = void 0;
                    if (null !== mi) {
                        var i = mi.memoizedState;
                        if (o = i.destroy, null !== r && ki(r, i.deps)) return void(a.memoizedState = Vi(t, n, o, r))
                    }
                    vi.flags |= e, a.memoizedState = Vi(1 | t, n, o, r)
                }

                function Wi(e, t) {
                    return Ui(8390656, 8, e, t)
                }

                function Hi(e, t) {
                    return Bi(2048, 8, e, t)
                }

                function $i(e, t) {
                    return Bi(4, 2, e, t)
                }

                function Qi(e, t) {
                    return Bi(4, 4, e, t)
                }

                function Ki(e, t) {
                    return "function" === typeof t ? (e = e(), t(e), function() {
                        t(null)
                    }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function() {
                        t.current = null
                    }) : void 0
                }

                function Yi(e, t, n) {
                    return n = null !== n && void 0 !== n ? n.concat([e]) : null, Bi(4, 4, Ki.bind(null, t, e), n)
                }

                function qi() {}

                function Xi(e, t) {
                    var n = Ti();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && ki(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
                }

                function Gi(e, t) {
                    var n = Ti();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && ki(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
                }

                function Zi(e, t, n) {
                    return 0 === (21 & hi) ? (e.baseState && (e.baseState = !1, wl = !0), e.memoizedState = n) : (lr(n, t) || (n = vt(), vi.lanes |= n, zu |= n, e.baseState = !0), t)
                }

                function Ji(e, t) {
                    var n = bt;
                    bt = 0 !== n && 4 > n ? n : 4, e(!0);
                    var r = pi.transition;
                    pi.transition = {};
                    try {
                        e(!1), t()
                    } finally {
                        bt = n, pi.transition = r
                    }
                }

                function el() {
                    return Ti().memoizedState
                }

                function tl(e, t, n) {
                    var r = ns(e);
                    if (n = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        }, rl(e)) al(t, n);
                    else if (null !== (n = No(e, t, n, r))) {
                        rs(n, e, r, ts()), ol(n, t, r)
                    }
                }

                function nl(e, t, n) {
                    var r = ns(e),
                        a = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        };
                    if (rl(e)) al(t, a);
                    else {
                        var o = e.alternate;
                        if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer)) try {
                            var i = t.lastRenderedState,
                                l = o(i, n);
                            if (a.hasEagerState = !0, a.eagerState = l, lr(l, i)) {
                                var u = t.interleaved;
                                return null === u ? (a.next = a, jo(t)) : (a.next = u.next, u.next = a), void(t.interleaved = a)
                            }
                        } catch (s) {}
                        null !== (n = No(e, t, a, r)) && (rs(n, e, r, a = ts()), ol(n, t, r))
                    }
                }

                function rl(e) {
                    var t = e.alternate;
                    return e === vi || null !== t && t === vi
                }

                function al(e, t) {
                    bi = gi = !0;
                    var n = e.pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                }

                function ol(e, t, n) {
                    if (0 !== (4194240 & n)) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, gt(e, n)
                    }
                }
                var il = {
                        readContext: Po,
                        useCallback: Si,
                        useContext: Si,
                        useEffect: Si,
                        useImperativeHandle: Si,
                        useInsertionEffect: Si,
                        useLayoutEffect: Si,
                        useMemo: Si,
                        useReducer: Si,
                        useRef: Si,
                        useState: Si,
                        useDebugValue: Si,
                        useDeferredValue: Si,
                        useTransition: Si,
                        useMutableSource: Si,
                        useSyncExternalStore: Si,
                        useId: Si,
                        unstable_isNewReconciler: !1
                    },
                    ll = {
                        readContext: Po,
                        useCallback: function(e, t) {
                            return Pi().memoizedState = [e, void 0 === t ? null : t], e
                        },
                        useContext: Po,
                        useEffect: Wi,
                        useImperativeHandle: function(e, t, n) {
                            return n = null !== n && void 0 !== n ? n.concat([e]) : null, Ui(4194308, 4, Ki.bind(null, t, e), n)
                        },
                        useLayoutEffect: function(e, t) {
                            return Ui(4194308, 4, e, t)
                        },
                        useInsertionEffect: function(e, t) {
                            return Ui(4, 2, e, t)
                        },
                        useMemo: function(e, t) {
                            var n = Pi();
                            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                        },
                        useReducer: function(e, t, n) {
                            var r = Pi();
                            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                                pending: null,
                                interleaved: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: t
                            }, r.queue = e, e = e.dispatch = tl.bind(null, vi, e), [r.memoizedState, e]
                        },
                        useRef: function(e) {
                            return e = {
                                current: e
                            }, Pi().memoizedState = e
                        },
                        useState: Di,
                        useDebugValue: qi,
                        useDeferredValue: function(e) {
                            return Pi().memoizedState = e
                        },
                        useTransition: function() {
                            var e = Di(!1),
                                t = e[0];
                            return e = Ji.bind(null, e[1]), Pi().memoizedState = e, [t, e]
                        },
                        useMutableSource: function() {},
                        useSyncExternalStore: function(e, t, n) {
                            var r = vi,
                                a = Pi();
                            if (ao) {
                                if (void 0 === n) throw Error(o(407));
                                n = n()
                            } else {
                                if (n = t(), null === Lu) throw Error(o(349));
                                0 !== (30 & hi) || Mi(r, t, n)
                            }
                            a.memoizedState = n;
                            var i = {
                                value: n,
                                getSnapshot: t
                            };
                            return a.queue = i, Wi(Ai.bind(null, r, i, e), [e]), r.flags |= 2048, Vi(9, _i.bind(null, r, i, n, t), void 0, null), n
                        },
                        useId: function() {
                            var e = Pi(),
                                t = Lu.identifierPrefix;
                            if (ao) {
                                var n = Ga;
                                t = ":" + t + "R" + (n = (Xa & ~(1 << 32 - it(Xa) - 1)).toString(32) + n), 0 < (n = wi++) && (t += "H" + n.toString(32)), t += ":"
                            } else t = ":" + t + "r" + (n = xi++).toString(32) + ":";
                            return e.memoizedState = t
                        },
                        unstable_isNewReconciler: !1
                    },
                    ul = {
                        readContext: Po,
                        useCallback: Xi,
                        useContext: Po,
                        useEffect: Hi,
                        useImperativeHandle: Yi,
                        useInsertionEffect: $i,
                        useLayoutEffect: Qi,
                        useMemo: Gi,
                        useReducer: Ni,
                        useRef: Fi,
                        useState: function() {
                            return Ni(ji)
                        },
                        useDebugValue: qi,
                        useDeferredValue: function(e) {
                            return Zi(Ti(), mi.memoizedState, e)
                        },
                        useTransition: function() {
                            return [Ni(ji)[0], Ti().memoizedState]
                        },
                        useMutableSource: Oi,
                        useSyncExternalStore: Ri,
                        useId: el,
                        unstable_isNewReconciler: !1
                    },
                    sl = {
                        readContext: Po,
                        useCallback: Xi,
                        useContext: Po,
                        useEffect: Hi,
                        useImperativeHandle: Yi,
                        useInsertionEffect: $i,
                        useLayoutEffect: Qi,
                        useMemo: Gi,
                        useReducer: Li,
                        useRef: Fi,
                        useState: function() {
                            return Li(ji)
                        },
                        useDebugValue: qi,
                        useDeferredValue: function(e) {
                            var t = Ti();
                            return null === mi ? t.memoizedState = e : Zi(t, mi.memoizedState, e)
                        },
                        useTransition: function() {
                            return [Li(ji)[0], Ti().memoizedState]
                        },
                        useMutableSource: Oi,
                        useSyncExternalStore: Ri,
                        useId: el,
                        unstable_isNewReconciler: !1
                    };

                function cl(e, t) {
                    try {
                        var n = "",
                            r = t;
                        do {
                            n += U(r), r = r.return
                        } while (r);
                        var a = n
                    } catch (o) {
                        a = "\nError generating stack: " + o.message + "\n" + o.stack
                    }
                    return {
                        value: e,
                        source: t,
                        stack: a,
                        digest: null
                    }
                }

                function fl(e, t, n) {
                    return {
                        value: e,
                        source: null,
                        stack: null != n ? n : null,
                        digest: null != t ? t : null
                    }
                }

                function dl(e, t) {
                    try {
                        console.error(t.value)
                    } catch (n) {
                        setTimeout((function() {
                            throw n
                        }))
                    }
                }
                var pl = "function" === typeof WeakMap ? WeakMap : Map;

                function hl(e, t, n) {
                    (n = _o(-1, n)).tag = 3, n.payload = {
                        element: null
                    };
                    var r = t.value;
                    return n.callback = function() {
                        $u || ($u = !0, Qu = r), dl(0, t)
                    }, n
                }

                function vl(e, t, n) {
                    (n = _o(-1, n)).tag = 3;
                    var r = e.type.getDerivedStateFromError;
                    if ("function" === typeof r) {
                        var a = t.value;
                        n.payload = function() {
                            return r(a)
                        }, n.callback = function() {
                            dl(0, t)
                        }
                    }
                    var o = e.stateNode;
                    return null !== o && "function" === typeof o.componentDidCatch && (n.callback = function() {
                        dl(0, t), "function" !== typeof r && (null === Ku ? Ku = new Set([this]) : Ku.add(this));
                        var e = t.stack;
                        this.componentDidCatch(t.value, {
                            componentStack: null !== e ? e : ""
                        })
                    }), n
                }

                function ml(e, t, n) {
                    var r = e.pingCache;
                    if (null === r) {
                        r = e.pingCache = new pl;
                        var a = new Set;
                        r.set(t, a)
                    } else void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a));
                    a.has(n) || (a.add(n), e = Ps.bind(null, e, t, n), t.then(e, e))
                }

                function yl(e) {
                    do {
                        var t;
                        if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                        e = e.return
                    } while (null !== e);
                    return null
                }

                function gl(e, t, n, r, a) {
                    return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = _o(-1, 1)).tag = 2, Ao(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e)
                }
                var bl = w.ReactCurrentOwner,
                    wl = !1;

                function xl(e, t, n, r) {
                    t.child = null === e ? Zo(t, null, n, r) : Go(t, e.child, n, r)
                }

                function Sl(e, t, n, r, a) {
                    n = n.render;
                    var o = t.ref;
                    return Co(t, a), r = Ei(e, t, n, r, o, a), n = Ci(), null === e || wl ? (ao && n && eo(t), t.flags |= 1, xl(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, $l(e, t, a))
                }

                function kl(e, t, n, r, a) {
                    if (null === e) {
                        var o = n.type;
                        return "function" !== typeof o || Ms(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = As(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = o, El(e, t, o, r, a))
                    }
                    if (o = e.child, 0 === (e.lanes & a)) {
                        var i = o.memoizedProps;
                        if ((n = null !== (n = n.compare) ? n : ur)(i, r) && e.ref === t.ref) return $l(e, t, a)
                    }
                    return t.flags |= 1, (e = _s(o, r)).ref = t.ref, e.return = t, t.child = e
                }

                function El(e, t, n, r, a) {
                    if (null !== e) {
                        var o = e.memoizedProps;
                        if (ur(o, r) && e.ref === t.ref) {
                            if (wl = !1, t.pendingProps = r = o, 0 === (e.lanes & a)) return t.lanes = e.lanes, $l(e, t, a);
                            0 !== (131072 & e.flags) && (wl = !0)
                        }
                    }
                    return Tl(e, t, n, r, a)
                }

                function Cl(e, t, n) {
                    var r = t.pendingProps,
                        a = r.children,
                        o = null !== e ? e.memoizedState : null;
                    if ("hidden" === r.mode)
                        if (0 === (1 & t.mode)) t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        }, Pa(_u, Mu), Mu |= n;
                        else {
                            if (0 === (1073741824 & n)) return e = null !== o ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                                baseLanes: e,
                                cachePool: null,
                                transitions: null
                            }, t.updateQueue = null, Pa(_u, Mu), Mu |= e, null;
                            t.memoizedState = {
                                baseLanes: 0,
                                cachePool: null,
                                transitions: null
                            }, r = null !== o ? o.baseLanes : n, Pa(_u, Mu), Mu |= r
                        }
                    else null !== o ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Pa(_u, Mu), Mu |= r;
                    return xl(e, t, a, n), t.child
                }

                function Pl(e, t) {
                    var n = t.ref;
                    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
                }

                function Tl(e, t, n, r, a) {
                    var o = Ra(n) ? La : ja.current;
                    return o = Oa(t, o), Co(t, a), n = Ei(e, t, n, r, o, a), r = Ci(), null === e || wl ? (ao && r && eo(t), t.flags |= 1, xl(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, $l(e, t, a))
                }

                function jl(e, t, n, r, a) {
                    if (Ra(n)) {
                        var o = !0;
                        Ia(t)
                    } else o = !1;
                    if (Co(t, a), null === t.stateNode) Hl(e, t), Ho(t, n, r), Qo(t, n, r, a), r = !0;
                    else if (null === e) {
                        var i = t.stateNode,
                            l = t.memoizedProps;
                        i.props = l;
                        var u = i.context,
                            s = n.contextType;
                        "object" === typeof s && null !== s ? s = Po(s) : s = Oa(t, s = Ra(n) ? La : ja.current);
                        var c = n.getDerivedStateFromProps,
                            f = "function" === typeof c || "function" === typeof i.getSnapshotBeforeUpdate;
                        f || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (l !== r || u !== s) && $o(t, i, r, s), Oo = !1;
                        var d = t.memoizedState;
                        i.state = d, Do(t, r, i, a), u = t.memoizedState, l !== r || d !== u || Na.current || Oo ? ("function" === typeof c && (Uo(t, n, c, r), u = t.memoizedState), (l = Oo || Wo(t, n, l, r, d, u, s)) ? (f || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || ("function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" === typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = s, r = l) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308), r = !1)
                    } else {
                        i = t.stateNode, Mo(e, t), l = t.memoizedProps, s = t.type === t.elementType ? l : yo(t.type, l), i.props = s, f = t.pendingProps, d = i.context, "object" === typeof(u = n.contextType) && null !== u ? u = Po(u) : u = Oa(t, u = Ra(n) ? La : ja.current);
                        var p = n.getDerivedStateFromProps;
                        (c = "function" === typeof p || "function" === typeof i.getSnapshotBeforeUpdate) || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (l !== f || d !== u) && $o(t, i, r, u), Oo = !1, d = t.memoizedState, i.state = d, Do(t, r, i, a);
                        var h = t.memoizedState;
                        l !== f || d !== h || Na.current || Oo ? ("function" === typeof p && (Uo(t, n, p, r), h = t.memoizedState), (s = Oo || Wo(t, n, s, r, d, h, u) || !1) ? (c || "function" !== typeof i.UNSAFE_componentWillUpdate && "function" !== typeof i.componentWillUpdate || ("function" === typeof i.componentWillUpdate && i.componentWillUpdate(r, h, u), "function" === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, h, u)), "function" === typeof i.componentDidUpdate && (t.flags |= 4), "function" === typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof i.componentDidUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), i.props = r, i.state = h, i.context = u, r = s) : ("function" !== typeof i.componentDidUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1)
                    }
                    return Nl(e, t, n, r, o, a)
                }

                function Nl(e, t, n, r, a, o) {
                    Pl(e, t);
                    var i = 0 !== (128 & t.flags);
                    if (!r && !i) return a && za(t, n, !1), $l(e, t, o);
                    r = t.stateNode, bl.current = t;
                    var l = i && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                    return t.flags |= 1, null !== e && i ? (t.child = Go(t, e.child, null, o), t.child = Go(t, null, l, o)) : xl(e, t, l, o), t.memoizedState = r.state, a && za(t, n, !0), t.child
                }

                function Ll(e) {
                    var t = e.stateNode;
                    t.pendingContext ? _a(0, t.pendingContext, t.pendingContext !== t.context) : t.context && _a(0, t.context, !1), ai(e, t.containerInfo)
                }

                function Ol(e, t, n, r, a) {
                    return ho(), vo(a), t.flags |= 256, xl(e, t, n, r), t.child
                }
                var Rl, Ml, _l, Al, Il = {
                    dehydrated: null,
                    treeContext: null,
                    retryLane: 0
                };

                function zl(e) {
                    return {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    }
                }

                function Dl(e, t, n) {
                    var r, a = t.pendingProps,
                        i = ui.current,
                        l = !1,
                        u = 0 !== (128 & t.flags);
                    if ((r = u) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)), r ? (l = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (i |= 1), Pa(ui, 1 & i), null === e) return so(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (u = a.children, e = a.fallback, l ? (a = t.mode, l = t.child, u = {
                        mode: "hidden",
                        children: u
                    }, 0 === (1 & a) && null !== l ? (l.childLanes = 0, l.pendingProps = u) : l = zs(u, a, 0, null), e = Is(e, a, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = zl(n), t.memoizedState = Il, e) : Vl(t, u));
                    if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated)) return function(e, t, n, r, a, i, l) {
                        if (n) return 256 & t.flags ? (t.flags &= -257, Fl(e, t, l, r = fl(Error(o(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, a = t.mode, r = zs({
                            mode: "visible",
                            children: r.children
                        }, a, 0, null), (i = Is(i, a, l, null)).flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, 0 !== (1 & t.mode) && Go(t, e.child, null, l), t.child.memoizedState = zl(l), t.memoizedState = Il, i);
                        if (0 === (1 & t.mode)) return Fl(e, t, l, null);
                        if ("$!" === a.data) {
                            if (r = a.nextSibling && a.nextSibling.dataset) var u = r.dgst;
                            return r = u, Fl(e, t, l, r = fl(i = Error(o(419)), r, void 0))
                        }
                        if (u = 0 !== (l & e.childLanes), wl || u) {
                            if (null !== (r = Lu)) {
                                switch (l & -l) {
                                    case 4:
                                        a = 2;
                                        break;
                                    case 16:
                                        a = 8;
                                        break;
                                    case 64:
                                    case 128:
                                    case 256:
                                    case 512:
                                    case 1024:
                                    case 2048:
                                    case 4096:
                                    case 8192:
                                    case 16384:
                                    case 32768:
                                    case 65536:
                                    case 131072:
                                    case 262144:
                                    case 524288:
                                    case 1048576:
                                    case 2097152:
                                    case 4194304:
                                    case 8388608:
                                    case 16777216:
                                    case 33554432:
                                    case 67108864:
                                        a = 32;
                                        break;
                                    case 536870912:
                                        a = 268435456;
                                        break;
                                    default:
                                        a = 0
                                }
                                0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) && a !== i.retryLane && (i.retryLane = a, Lo(e, a), rs(r, e, a, -1))
                            }
                            return ms(), Fl(e, t, l, r = fl(Error(o(421))))
                        }
                        return "$?" === a.data ? (t.flags |= 128, t.child = e.child, t = js.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, ro = sa(a.nextSibling), no = t, ao = !0, oo = null, null !== e && (Ka[Ya++] = Xa, Ka[Ya++] = Ga, Ka[Ya++] = qa, Xa = e.id, Ga = e.overflow, qa = t), t = Vl(t, r.children), t.flags |= 4096, t)
                    }(e, t, u, a, r, i, n);
                    if (l) {
                        l = a.fallback, u = t.mode, r = (i = e.child).sibling;
                        var s = {
                            mode: "hidden",
                            children: a.children
                        };
                        return 0 === (1 & u) && t.child !== i ? ((a = t.child).childLanes = 0, a.pendingProps = s, t.deletions = null) : (a = _s(i, s)).subtreeFlags = 14680064 & i.subtreeFlags, null !== r ? l = _s(r, l) : (l = Is(l, u, n, null)).flags |= 2, l.return = t, a.return = t, a.sibling = l, t.child = a, a = l, l = t.child, u = null === (u = e.child.memoizedState) ? zl(n) : {
                            baseLanes: u.baseLanes | n,
                            cachePool: null,
                            transitions: u.transitions
                        }, l.memoizedState = u, l.childLanes = e.childLanes & ~n, t.memoizedState = Il, a
                    }
                    return e = (l = e.child).sibling, a = _s(l, {
                        mode: "visible",
                        children: a.children
                    }), 0 === (1 & t.mode) && (a.lanes = n), a.return = t, a.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a
                }

                function Vl(e, t) {
                    return (t = zs({
                        mode: "visible",
                        children: t
                    }, e.mode, 0, null)).return = e, e.child = t
                }

                function Fl(e, t, n, r) {
                    return null !== r && vo(r), Go(t, e.child, null, n), (e = Vl(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
                }

                function Ul(e, t, n) {
                    e.lanes |= t;
                    var r = e.alternate;
                    null !== r && (r.lanes |= t), Eo(e.return, t, n)
                }

                function Bl(e, t, n, r, a) {
                    var o = e.memoizedState;
                    null === o ? e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: n,
                        tailMode: a
                    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a)
                }

                function Wl(e, t, n) {
                    var r = t.pendingProps,
                        a = r.revealOrder,
                        o = r.tail;
                    if (xl(e, t, r.children, n), 0 !== (2 & (r = ui.current))) r = 1 & r | 2, t.flags |= 128;
                    else {
                        if (null !== e && 0 !== (128 & e.flags)) e: for (e = t.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && Ul(e, n, t);
                            else if (19 === e.tag) Ul(e, n, t);
                            else if (null !== e.child) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                            if (e === t) break e;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        r &= 1
                    }
                    if (Pa(ui, r), 0 === (1 & t.mode)) t.memoizedState = null;
                    else switch (a) {
                        case "forwards":
                            for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === si(e) && (a = n), n = n.sibling;
                            null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Bl(t, !1, a, n, o);
                            break;
                        case "backwards":
                            for (n = null, a = t.child, t.child = null; null !== a;) {
                                if (null !== (e = a.alternate) && null === si(e)) {
                                    t.child = a;
                                    break
                                }
                                e = a.sibling, a.sibling = n, n = a, a = e
                            }
                            Bl(t, !0, n, null, o);
                            break;
                        case "together":
                            Bl(t, !1, null, null, void 0);
                            break;
                        default:
                            t.memoizedState = null
                    }
                    return t.child
                }

                function Hl(e, t) {
                    0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
                }

                function $l(e, t, n) {
                    if (null !== e && (t.dependencies = e.dependencies), zu |= t.lanes, 0 === (n & t.childLanes)) return null;
                    if (null !== e && t.child !== e.child) throw Error(o(153));
                    if (null !== t.child) {
                        for (n = _s(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = _s(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }

                function Ql(e, t) {
                    if (!ao) switch (e.tailMode) {
                        case "hidden":
                            t = e.tail;
                            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = e.tail;
                            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
                }

                function Kl(e) {
                    var t = null !== e.alternate && e.alternate.child === e.child,
                        n = 0,
                        r = 0;
                    if (t)
                        for (var a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a.return = e, a = a.sibling;
                    else
                        for (a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
                    return e.subtreeFlags |= r, e.childLanes = n, t
                }

                function Yl(e, t, n) {
                    var r = t.pendingProps;
                    switch (to(t), t.tag) {
                        case 2:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                            return Kl(t), null;
                        case 1:
                        case 17:
                            return Ra(t.type) && Ma(), Kl(t), null;
                        case 3:
                            return r = t.stateNode, oi(), Ca(Na), Ca(ja), fi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (fo(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== oo && (ls(oo), oo = null))), Ml(e, t), Kl(t), null;
                        case 5:
                            li(t);
                            var a = ri(ni.current);
                            if (n = t.type, null !== e && null != t.stateNode) _l(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(o(166));
                                    return Kl(t), null
                                }
                                if (e = ri(ei.current), fo(t)) {
                                    r = t.stateNode, n = t.type;
                                    var i = t.memoizedProps;
                                    switch (r[da] = t, r[pa] = i, e = 0 !== (1 & t.mode), n) {
                                        case "dialog":
                                            Vr("cancel", r), Vr("close", r);
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Vr("load", r);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (a = 0; a < Ar.length; a++) Vr(Ar[a], r);
                                            break;
                                        case "source":
                                            Vr("error", r);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Vr("error", r), Vr("load", r);
                                            break;
                                        case "details":
                                            Vr("toggle", r);
                                            break;
                                        case "input":
                                            X(r, i), Vr("invalid", r);
                                            break;
                                        case "select":
                                            r._wrapperState = {
                                                wasMultiple: !!i.multiple
                                            }, Vr("invalid", r);
                                            break;
                                        case "textarea":
                                            ae(r, i), Vr("invalid", r)
                                    }
                                    for (var u in ge(n, i), a = null, i)
                                        if (i.hasOwnProperty(u)) {
                                            var s = i[u];
                                            "children" === u ? "string" === typeof s ? r.textContent !== s && (!0 !== i.suppressHydrationWarning && Zr(r.textContent, s, e), a = ["children", s]) : "number" === typeof s && r.textContent !== "" + s && (!0 !== i.suppressHydrationWarning && Zr(r.textContent, s, e), a = ["children", "" + s]) : l.hasOwnProperty(u) && null != s && "onScroll" === u && Vr("scroll", r)
                                        }
                                    switch (n) {
                                        case "input":
                                            Q(r), J(r, i, !0);
                                            break;
                                        case "textarea":
                                            Q(r), ie(r);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" === typeof i.onClick && (r.onclick = Jr)
                                    }
                                    r = a, t.updateQueue = r, null !== r && (t.flags |= 4)
                                } else {
                                    u = 9 === a.nodeType ? a : a.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = le(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = u.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = u.createElement(n, {
                                        is: r.is
                                    }) : (e = u.createElement(n), "select" === n && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[da] = t, e[pa] = r, Rl(e, t, !1, !1), t.stateNode = e;
                                    e: {
                                        switch (u = be(n, r), n) {
                                            case "dialog":
                                                Vr("cancel", e), Vr("close", e), a = r;
                                                break;
                                            case "iframe":
                                            case "object":
                                            case "embed":
                                                Vr("load", e), a = r;
                                                break;
                                            case "video":
                                            case "audio":
                                                for (a = 0; a < Ar.length; a++) Vr(Ar[a], e);
                                                a = r;
                                                break;
                                            case "source":
                                                Vr("error", e), a = r;
                                                break;
                                            case "img":
                                            case "image":
                                            case "link":
                                                Vr("error", e), Vr("load", e), a = r;
                                                break;
                                            case "details":
                                                Vr("toggle", e), a = r;
                                                break;
                                            case "input":
                                                X(e, r), a = q(e, r), Vr("invalid", e);
                                                break;
                                            case "option":
                                            default:
                                                a = r;
                                                break;
                                            case "select":
                                                e._wrapperState = {
                                                    wasMultiple: !!r.multiple
                                                }, a = z({}, r, {
                                                    value: void 0
                                                }), Vr("invalid", e);
                                                break;
                                            case "textarea":
                                                ae(e, r), a = re(e, r), Vr("invalid", e)
                                        }
                                        for (i in ge(n, a), s = a)
                                            if (s.hasOwnProperty(i)) {
                                                var c = s[i];
                                                "style" === i ? me(e, c) : "dangerouslySetInnerHTML" === i ? null != (c = c ? c.__html : void 0) && fe(e, c) : "children" === i ? "string" === typeof c ? ("textarea" !== n || "" !== c) && de(e, c) : "number" === typeof c && de(e, "" + c) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (l.hasOwnProperty(i) ? null != c && "onScroll" === i && Vr("scroll", e) : null != c && b(e, i, c, u))
                                            }
                                        switch (n) {
                                            case "input":
                                                Q(e), J(e, r, !1);
                                                break;
                                            case "textarea":
                                                Q(e), ie(e);
                                                break;
                                            case "option":
                                                null != r.value && e.setAttribute("value", "" + H(r.value));
                                                break;
                                            case "select":
                                                e.multiple = !!r.multiple, null != (i = r.value) ? ne(e, !!r.multiple, i, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                                break;
                                            default:
                                                "function" === typeof a.onClick && (e.onclick = Jr)
                                        }
                                        switch (n) {
                                            case "button":
                                            case "input":
                                            case "select":
                                            case "textarea":
                                                r = !!r.autoFocus;
                                                break e;
                                            case "img":
                                                r = !0;
                                                break e;
                                            default:
                                                r = !1
                                        }
                                    }
                                    r && (t.flags |= 4)
                                }
                                null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
                            }
                            return Kl(t), null;
                        case 6:
                            if (e && null != t.stateNode) Al(e, t, e.memoizedProps, r);
                            else {
                                if ("string" !== typeof r && null === t.stateNode) throw Error(o(166));
                                if (n = ri(ni.current), ri(ei.current), fo(t)) {
                                    if (r = t.stateNode, n = t.memoizedProps, r[da] = t, (i = r.nodeValue !== n) && null !== (e = no)) switch (e.tag) {
                                        case 3:
                                            Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                                            break;
                                        case 5:
                                            !0 !== e.memoizedProps.suppressHydrationWarning && Zr(r.nodeValue, n, 0 !== (1 & e.mode))
                                    }
                                    i && (t.flags |= 4)
                                } else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[da] = t, t.stateNode = r
                            }
                            return Kl(t), null;
                        case 13:
                            if (Ca(ui), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                                if (ao && null !== ro && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) po(), ho(), t.flags |= 98560, i = !1;
                                else if (i = fo(t), null !== r && null !== r.dehydrated) {
                                    if (null === e) {
                                        if (!i) throw Error(o(318));
                                        if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(o(317));
                                        i[da] = t
                                    } else ho(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                    Kl(t), i = !1
                                } else null !== oo && (ls(oo), oo = null), i = !0;
                                if (!i) return 65536 & t.flags ? t : null
                            }
                            return 0 !== (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & ui.current) ? 0 === Au && (Au = 3) : ms())), null !== t.updateQueue && (t.flags |= 4), Kl(t), null);
                        case 4:
                            return oi(), Ml(e, t), null === e && Br(t.stateNode.containerInfo), Kl(t), null;
                        case 10:
                            return ko(t.type._context), Kl(t), null;
                        case 19:
                            if (Ca(ui), null === (i = t.memoizedState)) return Kl(t), null;
                            if (r = 0 !== (128 & t.flags), null === (u = i.rendering))
                                if (r) Ql(i, !1);
                                else {
                                    if (0 !== Au || null !== e && 0 !== (128 & e.flags))
                                        for (e = t.child; null !== e;) {
                                            if (null !== (u = si(e))) {
                                                for (t.flags |= 128, Ql(i, !1), null !== (r = u.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (i = n).flags &= 14680066, null === (u = i.alternate) ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = u.childLanes, i.lanes = u.lanes, i.child = u.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = u.memoizedProps, i.memoizedState = u.memoizedState, i.updateQueue = u.updateQueue, i.type = u.type, e = u.dependencies, i.dependencies = null === e ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }), n = n.sibling;
                                                return Pa(ui, 1 & ui.current | 2), t.child
                                            }
                                            e = e.sibling
                                        }
                                    null !== i.tail && Ge() > Wu && (t.flags |= 128, r = !0, Ql(i, !1), t.lanes = 4194304)
                                }
                            else {
                                if (!r)
                                    if (null !== (e = si(u))) {
                                        if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Ql(i, !0), null === i.tail && "hidden" === i.tailMode && !u.alternate && !ao) return Kl(t), null
                                    } else 2 * Ge() - i.renderingStartTime > Wu && 1073741824 !== n && (t.flags |= 128, r = !0, Ql(i, !1), t.lanes = 4194304);
                                i.isBackwards ? (u.sibling = t.child, t.child = u) : (null !== (n = i.last) ? n.sibling = u : t.child = u, i.last = u)
                            }
                            return null !== i.tail ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ge(), t.sibling = null, n = ui.current, Pa(ui, r ? 1 & n | 2 : 1 & n), t) : (Kl(t), null);
                        case 22:
                        case 23:
                            return ds(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Mu) && (Kl(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Kl(t), null;
                        case 24:
                        case 25:
                            return null
                    }
                    throw Error(o(156, t.tag))
                }

                function ql(e, t) {
                    switch (to(t), t.tag) {
                        case 1:
                            return Ra(t.type) && Ma(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 3:
                            return oi(), Ca(Na), Ca(ja), fi(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                        case 5:
                            return li(t), null;
                        case 13:
                            if (Ca(ui), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                                if (null === t.alternate) throw Error(o(340));
                                ho()
                            }
                            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 19:
                            return Ca(ui), null;
                        case 4:
                            return oi(), null;
                        case 10:
                            return ko(t.type._context), null;
                        case 22:
                        case 23:
                            return ds(), null;
                        default:
                            return null
                    }
                }
                Rl = function(e, t) {
                    for (var n = t.child; null !== n;) {
                        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                        else if (4 !== n.tag && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === t) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === t) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }, Ml = function() {}, _l = function(e, t, n, r) {
                    var a = e.memoizedProps;
                    if (a !== r) {
                        e = t.stateNode, ri(ei.current);
                        var o, i = null;
                        switch (n) {
                            case "input":
                                a = q(e, a), r = q(e, r), i = [];
                                break;
                            case "select":
                                a = z({}, a, {
                                    value: void 0
                                }), r = z({}, r, {
                                    value: void 0
                                }), i = [];
                                break;
                            case "textarea":
                                a = re(e, a), r = re(e, r), i = [];
                                break;
                            default:
                                "function" !== typeof a.onClick && "function" === typeof r.onClick && (e.onclick = Jr)
                        }
                        for (c in ge(n, r), n = null, a)
                            if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                                if ("style" === c) {
                                    var u = a[c];
                                    for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                                } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (l.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
                        for (c in r) {
                            var s = r[c];
                            if (u = null != a ? a[c] : void 0, r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                                if ("style" === c)
                                    if (u) {
                                        for (o in u) !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                                        for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), n[o] = s[o])
                                    } else n || (i || (i = []), i.push(c, n)), n = s;
                            else "dangerouslySetInnerHTML" === c ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, null != s && u !== s && (i = i || []).push(c, s)) : "children" === c ? "string" !== typeof s && "number" !== typeof s || (i = i || []).push(c, "" + s) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (l.hasOwnProperty(c) ? (null != s && "onScroll" === c && Vr("scroll", e), i || u === s || (i = [])) : (i = i || []).push(c, s))
                        }
                        n && (i = i || []).push("style", n);
                        var c = i;
                        (t.updateQueue = c) && (t.flags |= 4)
                    }
                }, Al = function(e, t, n, r) {
                    n !== r && (t.flags |= 4)
                };
                var Xl = !1,
                    Gl = !1,
                    Zl = "function" === typeof WeakSet ? WeakSet : Set,
                    Jl = null;

                function eu(e, t) {
                    var n = e.ref;
                    if (null !== n)
                        if ("function" === typeof n) try {
                            n(null)
                        } catch (r) {
                            Cs(e, t, r)
                        } else n.current = null
                }

                function tu(e, t, n) {
                    try {
                        n()
                    } catch (r) {
                        Cs(e, t, r)
                    }
                }
                var nu = !1;

                function ru(e, t, n) {
                    var r = t.updateQueue;
                    if (null !== (r = null !== r ? r.lastEffect : null)) {
                        var a = r = r.next;
                        do {
                            if ((a.tag & e) === e) {
                                var o = a.destroy;
                                a.destroy = void 0, void 0 !== o && tu(t, n, o)
                            }
                            a = a.next
                        } while (a !== r)
                    }
                }

                function au(e, t) {
                    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                        var n = t = t.next;
                        do {
                            if ((n.tag & e) === e) {
                                var r = n.create;
                                n.destroy = r()
                            }
                            n = n.next
                        } while (n !== t)
                    }
                }

                function ou(e) {
                    var t = e.ref;
                    if (null !== t) {
                        var n = e.stateNode;
                        e.tag, e = n, "function" === typeof t ? t(e) : t.current = e
                    }
                }

                function iu(e) {
                    var t = e.alternate;
                    null !== t && (e.alternate = null, iu(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[da], delete t[pa], delete t[va], delete t[ma], delete t[ya])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
                }

                function lu(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function uu(e) {
                    e: for (;;) {
                        for (; null === e.sibling;) {
                            if (null === e.return || lu(e.return)) return null;
                            e = e.return
                        }
                        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                            if (2 & e.flags) continue e;
                            if (null === e.child || 4 === e.tag) continue e;
                            e.child.return = e, e = e.child
                        }
                        if (!(2 & e.flags)) return e.stateNode
                    }
                }

                function su(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Jr));
                    else if (4 !== r && null !== (e = e.child))
                        for (su(e, t, n), e = e.sibling; null !== e;) su(e, t, n), e = e.sibling
                }

                function cu(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== r && null !== (e = e.child))
                        for (cu(e, t, n), e = e.sibling; null !== e;) cu(e, t, n), e = e.sibling
                }
                var fu = null,
                    du = !1;

                function pu(e, t, n) {
                    for (n = n.child; null !== n;) hu(e, t, n), n = n.sibling
                }

                function hu(e, t, n) {
                    if (ot && "function" === typeof ot.onCommitFiberUnmount) try {
                        ot.onCommitFiberUnmount(at, n)
                    } catch (l) {}
                    switch (n.tag) {
                        case 5:
                            Gl || eu(n, t);
                        case 6:
                            var r = fu,
                                a = du;
                            fu = null, pu(e, t, n), du = a, null !== (fu = r) && (du ? (e = fu, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : fu.removeChild(n.stateNode));
                            break;
                        case 18:
                            null !== fu && (du ? (e = fu, n = n.stateNode, 8 === e.nodeType ? ua(e.parentNode, n) : 1 === e.nodeType && ua(e, n), Bt(e)) : ua(fu, n.stateNode));
                            break;
                        case 4:
                            r = fu, a = du, fu = n.stateNode.containerInfo, du = !0, pu(e, t, n), fu = r, du = a;
                            break;
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (!Gl && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                                a = r = r.next;
                                do {
                                    var o = a,
                                        i = o.destroy;
                                    o = o.tag, void 0 !== i && (0 !== (2 & o) || 0 !== (4 & o)) && tu(n, t, i), a = a.next
                                } while (a !== r)
                            }
                            pu(e, t, n);
                            break;
                        case 1:
                            if (!Gl && (eu(n, t), "function" === typeof(r = n.stateNode).componentWillUnmount)) try {
                                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                            } catch (l) {
                                Cs(n, t, l)
                            }
                            pu(e, t, n);
                            break;
                        case 21:
                            pu(e, t, n);
                            break;
                        case 22:
                            1 & n.mode ? (Gl = (r = Gl) || null !== n.memoizedState, pu(e, t, n), Gl = r) : pu(e, t, n);
                            break;
                        default:
                            pu(e, t, n)
                    }
                }

                function vu(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        e.updateQueue = null;
                        var n = e.stateNode;
                        null === n && (n = e.stateNode = new Zl), t.forEach((function(t) {
                            var r = Ns.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(r, r))
                        }))
                    }
                }

                function mu(e, t) {
                    var n = t.deletions;
                    if (null !== n)
                        for (var r = 0; r < n.length; r++) {
                            var a = n[r];
                            try {
                                var i = e,
                                    l = t,
                                    u = l;
                                e: for (; null !== u;) {
                                    switch (u.tag) {
                                        case 5:
                                            fu = u.stateNode, du = !1;
                                            break e;
                                        case 3:
                                        case 4:
                                            fu = u.stateNode.containerInfo, du = !0;
                                            break e
                                    }
                                    u = u.return
                                }
                                if (null === fu) throw Error(o(160));
                                hu(i, l, a), fu = null, du = !1;
                                var s = a.alternate;
                                null !== s && (s.return = null), a.return = null
                            } catch (c) {
                                Cs(a, t, c)
                            }
                        }
                    if (12854 & t.subtreeFlags)
                        for (t = t.child; null !== t;) yu(t, e), t = t.sibling
                }

                function yu(e, t) {
                    var n = e.alternate,
                        r = e.flags;
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (mu(t, e), gu(e), 4 & r) {
                                try {
                                    ru(3, e, e.return), au(3, e)
                                } catch (m) {
                                    Cs(e, e.return, m)
                                }
                                try {
                                    ru(5, e, e.return)
                                } catch (m) {
                                    Cs(e, e.return, m)
                                }
                            }
                            break;
                        case 1:
                            mu(t, e), gu(e), 512 & r && null !== n && eu(n, n.return);
                            break;
                        case 5:
                            if (mu(t, e), gu(e), 512 & r && null !== n && eu(n, n.return), 32 & e.flags) {
                                var a = e.stateNode;
                                try {
                                    de(a, "")
                                } catch (m) {
                                    Cs(e, e.return, m)
                                }
                            }
                            if (4 & r && null != (a = e.stateNode)) {
                                var i = e.memoizedProps,
                                    l = null !== n ? n.memoizedProps : i,
                                    u = e.type,
                                    s = e.updateQueue;
                                if (e.updateQueue = null, null !== s) try {
                                    "input" === u && "radio" === i.type && null != i.name && G(a, i), be(u, l);
                                    var c = be(u, i);
                                    for (l = 0; l < s.length; l += 2) {
                                        var f = s[l],
                                            d = s[l + 1];
                                        "style" === f ? me(a, d) : "dangerouslySetInnerHTML" === f ? fe(a, d) : "children" === f ? de(a, d) : b(a, f, d, c)
                                    }
                                    switch (u) {
                                        case "input":
                                            Z(a, i);
                                            break;
                                        case "textarea":
                                            oe(a, i);
                                            break;
                                        case "select":
                                            var p = a._wrapperState.wasMultiple;
                                            a._wrapperState.wasMultiple = !!i.multiple;
                                            var h = i.value;
                                            null != h ? ne(a, !!i.multiple, h, !1) : p !== !!i.multiple && (null != i.defaultValue ? ne(a, !!i.multiple, i.defaultValue, !0) : ne(a, !!i.multiple, i.multiple ? [] : "", !1))
                                    }
                                    a[pa] = i
                                } catch (m) {
                                    Cs(e, e.return, m)
                                }
                            }
                            break;
                        case 6:
                            if (mu(t, e), gu(e), 4 & r) {
                                if (null === e.stateNode) throw Error(o(162));
                                a = e.stateNode, i = e.memoizedProps;
                                try {
                                    a.nodeValue = i
                                } catch (m) {
                                    Cs(e, e.return, m)
                                }
                            }
                            break;
                        case 3:
                            if (mu(t, e), gu(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                                Bt(t.containerInfo)
                            } catch (m) {
                                Cs(e, e.return, m)
                            }
                            break;
                        case 4:
                        default:
                            mu(t, e), gu(e);
                            break;
                        case 13:
                            mu(t, e), gu(e), 8192 & (a = e.child).flags && (i = null !== a.memoizedState, a.stateNode.isHidden = i, !i || null !== a.alternate && null !== a.alternate.memoizedState || (Bu = Ge())), 4 & r && vu(e);
                            break;
                        case 22:
                            if (f = null !== n && null !== n.memoizedState, 1 & e.mode ? (Gl = (c = Gl) || f, mu(t, e), Gl = c) : mu(t, e), gu(e), 8192 & r) {
                                if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                                    for (Jl = e, f = e.child; null !== f;) {
                                        for (d = Jl = f; null !== Jl;) {
                                            switch (h = (p = Jl).child, p.tag) {
                                                case 0:
                                                case 11:
                                                case 14:
                                                case 15:
                                                    ru(4, p, p.return);
                                                    break;
                                                case 1:
                                                    eu(p, p.return);
                                                    var v = p.stateNode;
                                                    if ("function" === typeof v.componentWillUnmount) {
                                                        r = p, n = p.return;
                                                        try {
                                                            t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount()
                                                        } catch (m) {
                                                            Cs(r, n, m)
                                                        }
                                                    }
                                                    break;
                                                case 5:
                                                    eu(p, p.return);
                                                    break;
                                                case 22:
                                                    if (null !== p.memoizedState) {
                                                        Su(d);
                                                        continue
                                                    }
                                            }
                                            null !== h ? (h.return = p, Jl = h) : Su(d)
                                        }
                                        f = f.sibling
                                    }
                                e: for (f = null, d = e;;) {
                                    if (5 === d.tag) {
                                        if (null === f) {
                                            f = d;
                                            try {
                                                a = d.stateNode, c ? "function" === typeof(i = a.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (u = d.stateNode, l = void 0 !== (s = d.memoizedProps.style) && null !== s && s.hasOwnProperty("display") ? s.display : null, u.style.display = ve("display", l))
                                            } catch (m) {
                                                Cs(e, e.return, m)
                                            }
                                        }
                                    } else if (6 === d.tag) {
                                        if (null === f) try {
                                            d.stateNode.nodeValue = c ? "" : d.memoizedProps
                                        } catch (m) {
                                            Cs(e, e.return, m)
                                        }
                                    } else if ((22 !== d.tag && 23 !== d.tag || null === d.memoizedState || d === e) && null !== d.child) {
                                        d.child.return = d, d = d.child;
                                        continue
                                    }
                                    if (d === e) break e;
                                    for (; null === d.sibling;) {
                                        if (null === d.return || d.return === e) break e;
                                        f === d && (f = null), d = d.return
                                    }
                                    f === d && (f = null), d.sibling.return = d.return, d = d.sibling
                                }
                            }
                            break;
                        case 19:
                            mu(t, e), gu(e), 4 & r && vu(e);
                        case 21:
                    }
                }

                function gu(e) {
                    var t = e.flags;
                    if (2 & t) {
                        try {
                            e: {
                                for (var n = e.return; null !== n;) {
                                    if (lu(n)) {
                                        var r = n;
                                        break e
                                    }
                                    n = n.return
                                }
                                throw Error(o(160))
                            }
                            switch (r.tag) {
                                case 5:
                                    var a = r.stateNode;
                                    32 & r.flags && (de(a, ""), r.flags &= -33), cu(e, uu(e), a);
                                    break;
                                case 3:
                                case 4:
                                    var i = r.stateNode.containerInfo;
                                    su(e, uu(e), i);
                                    break;
                                default:
                                    throw Error(o(161))
                            }
                        }
                        catch (l) {
                            Cs(e, e.return, l)
                        }
                        e.flags &= -3
                    }
                    4096 & t && (e.flags &= -4097)
                }

                function bu(e, t, n) {
                    Jl = e, wu(e, t, n)
                }

                function wu(e, t, n) {
                    for (var r = 0 !== (1 & e.mode); null !== Jl;) {
                        var a = Jl,
                            o = a.child;
                        if (22 === a.tag && r) {
                            var i = null !== a.memoizedState || Xl;
                            if (!i) {
                                var l = a.alternate,
                                    u = null !== l && null !== l.memoizedState || Gl;
                                l = Xl;
                                var s = Gl;
                                if (Xl = i, (Gl = u) && !s)
                                    for (Jl = a; null !== Jl;) u = (i = Jl).child, 22 === i.tag && null !== i.memoizedState ? ku(a) : null !== u ? (u.return = i, Jl = u) : ku(a);
                                for (; null !== o;) Jl = o, wu(o, t, n), o = o.sibling;
                                Jl = a, Xl = l, Gl = s
                            }
                            xu(e)
                        } else 0 !== (8772 & a.subtreeFlags) && null !== o ? (o.return = a, Jl = o) : xu(e)
                    }
                }

                function xu(e) {
                    for (; null !== Jl;) {
                        var t = Jl;
                        if (0 !== (8772 & t.flags)) {
                            var n = t.alternate;
                            try {
                                if (0 !== (8772 & t.flags)) switch (t.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Gl || au(5, t);
                                        break;
                                    case 1:
                                        var r = t.stateNode;
                                        if (4 & t.flags && !Gl)
                                            if (null === n) r.componentDidMount();
                                            else {
                                                var a = t.elementType === t.type ? n.memoizedProps : yo(t.type, n.memoizedProps);
                                                r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                            }
                                        var i = t.updateQueue;
                                        null !== i && Vo(t, i, r);
                                        break;
                                    case 3:
                                        var l = t.updateQueue;
                                        if (null !== l) {
                                            if (n = null, null !== t.child) switch (t.child.tag) {
                                                case 5:
                                                case 1:
                                                    n = t.child.stateNode
                                            }
                                            Vo(t, l, n)
                                        }
                                        break;
                                    case 5:
                                        var u = t.stateNode;
                                        if (null === n && 4 & t.flags) {
                                            n = u;
                                            var s = t.memoizedProps;
                                            switch (t.type) {
                                                case "button":
                                                case "input":
                                                case "select":
                                                case "textarea":
                                                    s.autoFocus && n.focus();
                                                    break;
                                                case "img":
                                                    s.src && (n.src = s.src)
                                            }
                                        }
                                        break;
                                    case 6:
                                    case 4:
                                    case 12:
                                    case 19:
                                    case 17:
                                    case 21:
                                    case 22:
                                    case 23:
                                    case 25:
                                        break;
                                    case 13:
                                        if (null === t.memoizedState) {
                                            var c = t.alternate;
                                            if (null !== c) {
                                                var f = c.memoizedState;
                                                if (null !== f) {
                                                    var d = f.dehydrated;
                                                    null !== d && Bt(d)
                                                }
                                            }
                                        }
                                        break;
                                    default:
                                        throw Error(o(163))
                                }
                                Gl || 512 & t.flags && ou(t)
                            } catch (p) {
                                Cs(t, t.return, p)
                            }
                        }
                        if (t === e) {
                            Jl = null;
                            break
                        }
                        if (null !== (n = t.sibling)) {
                            n.return = t.return, Jl = n;
                            break
                        }
                        Jl = t.return
                    }
                }

                function Su(e) {
                    for (; null !== Jl;) {
                        var t = Jl;
                        if (t === e) {
                            Jl = null;
                            break
                        }
                        var n = t.sibling;
                        if (null !== n) {
                            n.return = t.return, Jl = n;
                            break
                        }
                        Jl = t.return
                    }
                }

                function ku(e) {
                    for (; null !== Jl;) {
                        var t = Jl;
                        try {
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    var n = t.return;
                                    try {
                                        au(4, t)
                                    } catch (u) {
                                        Cs(t, n, u)
                                    }
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if ("function" === typeof r.componentDidMount) {
                                        var a = t.return;
                                        try {
                                            r.componentDidMount()
                                        } catch (u) {
                                            Cs(t, a, u)
                                        }
                                    }
                                    var o = t.return;
                                    try {
                                        ou(t)
                                    } catch (u) {
                                        Cs(t, o, u)
                                    }
                                    break;
                                case 5:
                                    var i = t.return;
                                    try {
                                        ou(t)
                                    } catch (u) {
                                        Cs(t, i, u)
                                    }
                            }
                        } catch (u) {
                            Cs(t, t.return, u)
                        }
                        if (t === e) {
                            Jl = null;
                            break
                        }
                        var l = t.sibling;
                        if (null !== l) {
                            l.return = t.return, Jl = l;
                            break
                        }
                        Jl = t.return
                    }
                }
                var Eu, Cu = Math.ceil,
                    Pu = w.ReactCurrentDispatcher,
                    Tu = w.ReactCurrentOwner,
                    ju = w.ReactCurrentBatchConfig,
                    Nu = 0,
                    Lu = null,
                    Ou = null,
                    Ru = 0,
                    Mu = 0,
                    _u = Ea(0),
                    Au = 0,
                    Iu = null,
                    zu = 0,
                    Du = 0,
                    Vu = 0,
                    Fu = null,
                    Uu = null,
                    Bu = 0,
                    Wu = 1 / 0,
                    Hu = null,
                    $u = !1,
                    Qu = null,
                    Ku = null,
                    Yu = !1,
                    qu = null,
                    Xu = 0,
                    Gu = 0,
                    Zu = null,
                    Ju = -1,
                    es = 0;

                function ts() {
                    return 0 !== (6 & Nu) ? Ge() : -1 !== Ju ? Ju : Ju = Ge()
                }

                function ns(e) {
                    return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Nu) && 0 !== Ru ? Ru & -Ru : null !== mo.transition ? (0 === es && (es = vt()), es) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Xt(e.type)
                }

                function rs(e, t, n, r) {
                    if (50 < Gu) throw Gu = 0, Zu = null, Error(o(185));
                    yt(e, n, r), 0 !== (2 & Nu) && e === Lu || (e === Lu && (0 === (2 & Nu) && (Du |= n), 4 === Au && us(e, Ru)), as(e, r), 1 === n && 0 === Nu && 0 === (1 & t.mode) && (Wu = Ge() + 500, Va && Ba()))
                }

                function as(e, t) {
                    var n = e.callbackNode;
                    ! function(e, t) {
                        for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
                            var i = 31 - it(o),
                                l = 1 << i,
                                u = a[i]; - 1 === u ? 0 !== (l & n) && 0 === (l & r) || (a[i] = pt(l, t)) : u <= t && (e.expiredLanes |= l), o &= ~l
                        }
                    }(e, t);
                    var r = dt(e, e === Lu ? Ru : 0);
                    if (0 === r) null !== n && Ye(n), e.callbackNode = null, e.callbackPriority = 0;
                    else if (t = r & -r, e.callbackPriority !== t) {
                        if (null != n && Ye(n), 1 === t) 0 === e.tag ? function(e) {
                            Va = !0, Ua(e)
                        }(ss.bind(null, e)) : Ua(ss.bind(null, e)), ia((function() {
                            0 === (6 & Nu) && Ba()
                        })), n = null;
                        else {
                            switch (wt(r)) {
                                case 1:
                                    n = Je;
                                    break;
                                case 4:
                                    n = et;
                                    break;
                                case 16:
                                default:
                                    n = tt;
                                    break;
                                case 536870912:
                                    n = rt
                            }
                            n = Ls(n, os.bind(null, e))
                        }
                        e.callbackPriority = t, e.callbackNode = n
                    }
                }

                function os(e, t) {
                    if (Ju = -1, es = 0, 0 !== (6 & Nu)) throw Error(o(327));
                    var n = e.callbackNode;
                    if (ks() && e.callbackNode !== n) return null;
                    var r = dt(e, e === Lu ? Ru : 0);
                    if (0 === r) return null;
                    if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = ys(e, r);
                    else {
                        t = r;
                        var a = Nu;
                        Nu |= 2;
                        var i = vs();
                        for (Lu === e && Ru === t || (Hu = null, Wu = Ge() + 500, ps(e, t));;) try {
                            bs();
                            break
                        } catch (u) {
                            hs(e, u)
                        }
                        So(), Pu.current = i, Nu = a, null !== Ou ? t = 0 : (Lu = null, Ru = 0, t = Au)
                    }
                    if (0 !== t) {
                        if (2 === t && (0 !== (a = ht(e)) && (r = a, t = is(e, a))), 1 === t) throw n = Iu, ps(e, 0), us(e, r), as(e, Ge()), n;
                        if (6 === t) us(e, r);
                        else {
                            if (a = e.current.alternate, 0 === (30 & r) && ! function(e) {
                                    for (var t = e;;) {
                                        if (16384 & t.flags) {
                                            var n = t.updateQueue;
                                            if (null !== n && null !== (n = n.stores))
                                                for (var r = 0; r < n.length; r++) {
                                                    var a = n[r],
                                                        o = a.getSnapshot;
                                                    a = a.value;
                                                    try {
                                                        if (!lr(o(), a)) return !1
                                                    } catch (l) {
                                                        return !1
                                                    }
                                                }
                                        }
                                        if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                                        else {
                                            if (t === e) break;
                                            for (; null === t.sibling;) {
                                                if (null === t.return || t.return === e) return !0;
                                                t = t.return
                                            }
                                            t.sibling.return = t.return, t = t.sibling
                                        }
                                    }
                                    return !0
                                }(a) && (2 === (t = ys(e, r)) && (0 !== (i = ht(e)) && (r = i, t = is(e, i))), 1 === t)) throw n = Iu, ps(e, 0), us(e, r), as(e, Ge()), n;
                            switch (e.finishedWork = a, e.finishedLanes = r, t) {
                                case 0:
                                case 1:
                                    throw Error(o(345));
                                case 2:
                                case 5:
                                    Ss(e, Uu, Hu);
                                    break;
                                case 3:
                                    if (us(e, r), (130023424 & r) === r && 10 < (t = Bu + 500 - Ge())) {
                                        if (0 !== dt(e, 0)) break;
                                        if (((a = e.suspendedLanes) & r) !== r) {
                                            ts(), e.pingedLanes |= e.suspendedLanes & a;
                                            break
                                        }
                                        e.timeoutHandle = ra(Ss.bind(null, e, Uu, Hu), t);
                                        break
                                    }
                                    Ss(e, Uu, Hu);
                                    break;
                                case 4:
                                    if (us(e, r), (4194240 & r) === r) break;
                                    for (t = e.eventTimes, a = -1; 0 < r;) {
                                        var l = 31 - it(r);
                                        i = 1 << l, (l = t[l]) > a && (a = l), r &= ~i
                                    }
                                    if (r = a, 10 < (r = (120 > (r = Ge() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Cu(r / 1960)) - r)) {
                                        e.timeoutHandle = ra(Ss.bind(null, e, Uu, Hu), r);
                                        break
                                    }
                                    Ss(e, Uu, Hu);
                                    break;
                                default:
                                    throw Error(o(329))
                            }
                        }
                    }
                    return as(e, Ge()), e.callbackNode === n ? os.bind(null, e) : null
                }

                function is(e, t) {
                    var n = Fu;
                    return e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256), 2 !== (e = ys(e, t)) && (t = Uu, Uu = n, null !== t && ls(t)), e
                }

                function ls(e) {
                    null === Uu ? Uu = e : Uu.push.apply(Uu, e)
                }

                function us(e, t) {
                    for (t &= ~Vu, t &= ~Du, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                        var n = 31 - it(t),
                            r = 1 << n;
                        e[n] = -1, t &= ~r
                    }
                }

                function ss(e) {
                    if (0 !== (6 & Nu)) throw Error(o(327));
                    ks();
                    var t = dt(e, 0);
                    if (0 === (1 & t)) return as(e, Ge()), null;
                    var n = ys(e, t);
                    if (0 !== e.tag && 2 === n) {
                        var r = ht(e);
                        0 !== r && (t = r, n = is(e, r))
                    }
                    if (1 === n) throw n = Iu, ps(e, 0), us(e, t), as(e, Ge()), n;
                    if (6 === n) throw Error(o(345));
                    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ss(e, Uu, Hu), as(e, Ge()), null
                }

                function cs(e, t) {
                    var n = Nu;
                    Nu |= 1;
                    try {
                        return e(t)
                    } finally {
                        0 === (Nu = n) && (Wu = Ge() + 500, Va && Ba())
                    }
                }

                function fs(e) {
                    null !== qu && 0 === qu.tag && 0 === (6 & Nu) && ks();
                    var t = Nu;
                    Nu |= 1;
                    var n = ju.transition,
                        r = bt;
                    try {
                        if (ju.transition = null, bt = 1, e) return e()
                    } finally {
                        bt = r, ju.transition = n, 0 === (6 & (Nu = t)) && Ba()
                    }
                }

                function ds() {
                    Mu = _u.current, Ca(_u)
                }

                function ps(e, t) {
                    e.finishedWork = null, e.finishedLanes = 0;
                    var n = e.timeoutHandle;
                    if (-1 !== n && (e.timeoutHandle = -1, aa(n)), null !== Ou)
                        for (n = Ou.return; null !== n;) {
                            var r = n;
                            switch (to(r), r.tag) {
                                case 1:
                                    null !== (r = r.type.childContextTypes) && void 0 !== r && Ma();
                                    break;
                                case 3:
                                    oi(), Ca(Na), Ca(ja), fi();
                                    break;
                                case 5:
                                    li(r);
                                    break;
                                case 4:
                                    oi();
                                    break;
                                case 13:
                                case 19:
                                    Ca(ui);
                                    break;
                                case 10:
                                    ko(r.type._context);
                                    break;
                                case 22:
                                case 23:
                                    ds()
                            }
                            n = n.return
                        }
                    if (Lu = e, Ou = e = _s(e.current, null), Ru = Mu = t, Au = 0, Iu = null, Vu = Du = zu = 0, Uu = Fu = null, null !== To) {
                        for (t = 0; t < To.length; t++)
                            if (null !== (r = (n = To[t]).interleaved)) {
                                n.interleaved = null;
                                var a = r.next,
                                    o = n.pending;
                                if (null !== o) {
                                    var i = o.next;
                                    o.next = a, r.next = i
                                }
                                n.pending = r
                            }
                        To = null
                    }
                    return e
                }

                function hs(e, t) {
                    for (;;) {
                        var n = Ou;
                        try {
                            if (So(), di.current = il, gi) {
                                for (var r = vi.memoizedState; null !== r;) {
                                    var a = r.queue;
                                    null !== a && (a.pending = null), r = r.next
                                }
                                gi = !1
                            }
                            if (hi = 0, yi = mi = vi = null, bi = !1, wi = 0, Tu.current = null, null === n || null === n.return) {
                                Au = 1, Iu = t, Ou = null;
                                break
                            }
                            e: {
                                var i = e,
                                    l = n.return,
                                    u = n,
                                    s = t;
                                if (t = Ru, u.flags |= 32768, null !== s && "object" === typeof s && "function" === typeof s.then) {
                                    var c = s,
                                        f = u,
                                        d = f.tag;
                                    if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                                        var p = f.alternate;
                                        p ? (f.updateQueue = p.updateQueue, f.memoizedState = p.memoizedState, f.lanes = p.lanes) : (f.updateQueue = null, f.memoizedState = null)
                                    }
                                    var h = yl(l);
                                    if (null !== h) {
                                        h.flags &= -257, gl(h, l, u, 0, t), 1 & h.mode && ml(i, c, t), s = c;
                                        var v = (t = h).updateQueue;
                                        if (null === v) {
                                            var m = new Set;
                                            m.add(s), t.updateQueue = m
                                        } else v.add(s);
                                        break e
                                    }
                                    if (0 === (1 & t)) {
                                        ml(i, c, t), ms();
                                        break e
                                    }
                                    s = Error(o(426))
                                } else if (ao && 1 & u.mode) {
                                    var y = yl(l);
                                    if (null !== y) {
                                        0 === (65536 & y.flags) && (y.flags |= 256), gl(y, l, u, 0, t), vo(cl(s, u));
                                        break e
                                    }
                                }
                                i = s = cl(s, u),
                                4 !== Au && (Au = 2),
                                null === Fu ? Fu = [i] : Fu.push(i),
                                i = l;do {
                                    switch (i.tag) {
                                        case 3:
                                            i.flags |= 65536, t &= -t, i.lanes |= t, zo(i, hl(0, s, t));
                                            break e;
                                        case 1:
                                            u = s;
                                            var g = i.type,
                                                b = i.stateNode;
                                            if (0 === (128 & i.flags) && ("function" === typeof g.getDerivedStateFromError || null !== b && "function" === typeof b.componentDidCatch && (null === Ku || !Ku.has(b)))) {
                                                i.flags |= 65536, t &= -t, i.lanes |= t, zo(i, vl(i, u, t));
                                                break e
                                            }
                                    }
                                    i = i.return
                                } while (null !== i)
                            }
                            xs(n)
                        } catch (w) {
                            t = w, Ou === n && null !== n && (Ou = n = n.return);
                            continue
                        }
                        break
                    }
                }

                function vs() {
                    var e = Pu.current;
                    return Pu.current = il, null === e ? il : e
                }

                function ms() {
                    0 !== Au && 3 !== Au && 2 !== Au || (Au = 4), null === Lu || 0 === (268435455 & zu) && 0 === (268435455 & Du) || us(Lu, Ru)
                }

                function ys(e, t) {
                    var n = Nu;
                    Nu |= 2;
                    var r = vs();
                    for (Lu === e && Ru === t || (Hu = null, ps(e, t));;) try {
                        gs();
                        break
                    } catch (a) {
                        hs(e, a)
                    }
                    if (So(), Nu = n, Pu.current = r, null !== Ou) throw Error(o(261));
                    return Lu = null, Ru = 0, Au
                }

                function gs() {
                    for (; null !== Ou;) ws(Ou)
                }

                function bs() {
                    for (; null !== Ou && !qe();) ws(Ou)
                }

                function ws(e) {
                    var t = Eu(e.alternate, e, Mu);
                    e.memoizedProps = e.pendingProps, null === t ? xs(e) : Ou = t, Tu.current = null
                }

                function xs(e) {
                    var t = e;
                    do {
                        var n = t.alternate;
                        if (e = t.return, 0 === (32768 & t.flags)) {
                            if (null !== (n = Yl(n, t, Mu))) return void(Ou = n)
                        } else {
                            if (null !== (n = ql(n, t))) return n.flags &= 32767, void(Ou = n);
                            if (null === e) return Au = 6, void(Ou = null);
                            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
                        }
                        if (null !== (t = t.sibling)) return void(Ou = t);
                        Ou = t = e
                    } while (null !== t);
                    0 === Au && (Au = 5)
                }

                function Ss(e, t, n) {
                    var r = bt,
                        a = ju.transition;
                    try {
                        ju.transition = null, bt = 1,
                            function(e, t, n, r) {
                                do {
                                    ks()
                                } while (null !== qu);
                                if (0 !== (6 & Nu)) throw Error(o(327));
                                n = e.finishedWork;
                                var a = e.finishedLanes;
                                if (null === n) return null;
                                if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
                                e.callbackNode = null, e.callbackPriority = 0;
                                var i = n.lanes | n.childLanes;
                                if (function(e, t) {
                                        var n = e.pendingLanes & ~t;
                                        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                                        var r = e.eventTimes;
                                        for (e = e.expirationTimes; 0 < n;) {
                                            var a = 31 - it(n),
                                                o = 1 << a;
                                            t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o
                                        }
                                    }(e, i), e === Lu && (Ou = Lu = null, Ru = 0), 0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || Yu || (Yu = !0, Ls(tt, (function() {
                                        return ks(), null
                                    }))), i = 0 !== (15990 & n.flags), 0 !== (15990 & n.subtreeFlags) || i) {
                                    i = ju.transition, ju.transition = null;
                                    var l = bt;
                                    bt = 1;
                                    var u = Nu;
                                    Nu |= 4, Tu.current = null,
                                        function(e, t) {
                                            if (ea = Ht, pr(e = dr())) {
                                                if ("selectionStart" in e) var n = {
                                                    start: e.selectionStart,
                                                    end: e.selectionEnd
                                                };
                                                else e: {
                                                    var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                                    if (r && 0 !== r.rangeCount) {
                                                        n = r.anchorNode;
                                                        var a = r.anchorOffset,
                                                            i = r.focusNode;
                                                        r = r.focusOffset;
                                                        try {
                                                            n.nodeType, i.nodeType
                                                        } catch (x) {
                                                            n = null;
                                                            break e
                                                        }
                                                        var l = 0,
                                                            u = -1,
                                                            s = -1,
                                                            c = 0,
                                                            f = 0,
                                                            d = e,
                                                            p = null;
                                                        t: for (;;) {
                                                            for (var h; d !== n || 0 !== a && 3 !== d.nodeType || (u = l + a), d !== i || 0 !== r && 3 !== d.nodeType || (s = l + r), 3 === d.nodeType && (l += d.nodeValue.length), null !== (h = d.firstChild);) p = d, d = h;
                                                            for (;;) {
                                                                if (d === e) break t;
                                                                if (p === n && ++c === a && (u = l), p === i && ++f === r && (s = l), null !== (h = d.nextSibling)) break;
                                                                p = (d = p).parentNode
                                                            }
                                                            d = h
                                                        }
                                                        n = -1 === u || -1 === s ? null : {
                                                            start: u,
                                                            end: s
                                                        }
                                                    } else n = null
                                                }
                                                n = n || {
                                                    start: 0,
                                                    end: 0
                                                }
                                            } else n = null;
                                            for (ta = {
                                                    focusedElem: e,
                                                    selectionRange: n
                                                }, Ht = !1, Jl = t; null !== Jl;)
                                                if (e = (t = Jl).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, Jl = e;
                                                else
                                                    for (; null !== Jl;) {
                                                        t = Jl;
                                                        try {
                                                            var v = t.alternate;
                                                            if (0 !== (1024 & t.flags)) switch (t.tag) {
                                                                case 0:
                                                                case 11:
                                                                case 15:
                                                                case 5:
                                                                case 6:
                                                                case 4:
                                                                case 17:
                                                                    break;
                                                                case 1:
                                                                    if (null !== v) {
                                                                        var m = v.memoizedProps,
                                                                            y = v.memoizedState,
                                                                            g = t.stateNode,
                                                                            b = g.getSnapshotBeforeUpdate(t.elementType === t.type ? m : yo(t.type, m), y);
                                                                        g.__reactInternalSnapshotBeforeUpdate = b
                                                                    }
                                                                    break;
                                                                case 3:
                                                                    var w = t.stateNode.containerInfo;
                                                                    1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                                                    break;
                                                                default:
                                                                    throw Error(o(163))
                                                            }
                                                        } catch (x) {
                                                            Cs(t, t.return, x)
                                                        }
                                                        if (null !== (e = t.sibling)) {
                                                            e.return = t.return, Jl = e;
                                                            break
                                                        }
                                                        Jl = t.return
                                                    }
                                            v = nu, nu = !1
                                        }(e, n), yu(n, e), hr(ta), Ht = !!ea, ta = ea = null, e.current = n, bu(n, e, a), Xe(), Nu = u, bt = l, ju.transition = i
                                } else e.current = n;
                                if (Yu && (Yu = !1, qu = e, Xu = a), i = e.pendingLanes, 0 === i && (Ku = null), function(e) {
                                        if (ot && "function" === typeof ot.onCommitFiberRoot) try {
                                            ot.onCommitFiberRoot(at, e, void 0, 128 === (128 & e.current.flags))
                                        } catch (t) {}
                                    }(n.stateNode), as(e, Ge()), null !== t)
                                    for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, {
                                        componentStack: a.stack,
                                        digest: a.digest
                                    });
                                if ($u) throw $u = !1, e = Qu, Qu = null, e;
                                0 !== (1 & Xu) && 0 !== e.tag && ks(), i = e.pendingLanes, 0 !== (1 & i) ? e === Zu ? Gu++ : (Gu = 0, Zu = e) : Gu = 0, Ba()
                            }(e, t, n, r)
                    } finally {
                        ju.transition = a, bt = r
                    }
                    return null
                }

                function ks() {
                    if (null !== qu) {
                        var e = wt(Xu),
                            t = ju.transition,
                            n = bt;
                        try {
                            if (ju.transition = null, bt = 16 > e ? 16 : e, null === qu) var r = !1;
                            else {
                                if (e = qu, qu = null, Xu = 0, 0 !== (6 & Nu)) throw Error(o(331));
                                var a = Nu;
                                for (Nu |= 4, Jl = e.current; null !== Jl;) {
                                    var i = Jl,
                                        l = i.child;
                                    if (0 !== (16 & Jl.flags)) {
                                        var u = i.deletions;
                                        if (null !== u) {
                                            for (var s = 0; s < u.length; s++) {
                                                var c = u[s];
                                                for (Jl = c; null !== Jl;) {
                                                    var f = Jl;
                                                    switch (f.tag) {
                                                        case 0:
                                                        case 11:
                                                        case 15:
                                                            ru(8, f, i)
                                                    }
                                                    var d = f.child;
                                                    if (null !== d) d.return = f, Jl = d;
                                                    else
                                                        for (; null !== Jl;) {
                                                            var p = (f = Jl).sibling,
                                                                h = f.return;
                                                            if (iu(f), f === c) {
                                                                Jl = null;
                                                                break
                                                            }
                                                            if (null !== p) {
                                                                p.return = h, Jl = p;
                                                                break
                                                            }
                                                            Jl = h
                                                        }
                                                }
                                            }
                                            var v = i.alternate;
                                            if (null !== v) {
                                                var m = v.child;
                                                if (null !== m) {
                                                    v.child = null;
                                                    do {
                                                        var y = m.sibling;
                                                        m.sibling = null, m = y
                                                    } while (null !== m)
                                                }
                                            }
                                            Jl = i
                                        }
                                    }
                                    if (0 !== (2064 & i.subtreeFlags) && null !== l) l.return = i, Jl = l;
                                    else e: for (; null !== Jl;) {
                                        if (0 !== (2048 & (i = Jl).flags)) switch (i.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                ru(9, i, i.return)
                                        }
                                        var g = i.sibling;
                                        if (null !== g) {
                                            g.return = i.return, Jl = g;
                                            break e
                                        }
                                        Jl = i.return
                                    }
                                }
                                var b = e.current;
                                for (Jl = b; null !== Jl;) {
                                    var w = (l = Jl).child;
                                    if (0 !== (2064 & l.subtreeFlags) && null !== w) w.return = l, Jl = w;
                                    else e: for (l = b; null !== Jl;) {
                                        if (0 !== (2048 & (u = Jl).flags)) try {
                                            switch (u.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    au(9, u)
                                            }
                                        } catch (S) {
                                            Cs(u, u.return, S)
                                        }
                                        if (u === l) {
                                            Jl = null;
                                            break e
                                        }
                                        var x = u.sibling;
                                        if (null !== x) {
                                            x.return = u.return, Jl = x;
                                            break e
                                        }
                                        Jl = u.return
                                    }
                                }
                                if (Nu = a, Ba(), ot && "function" === typeof ot.onPostCommitFiberRoot) try {
                                    ot.onPostCommitFiberRoot(at, e)
                                } catch (S) {}
                                r = !0
                            }
                            return r
                        } finally {
                            bt = n, ju.transition = t
                        }
                    }
                    return !1
                }

                function Es(e, t, n) {
                    e = Ao(e, t = hl(0, t = cl(n, t), 1), 1), t = ts(), null !== e && (yt(e, 1, t), as(e, t))
                }

                function Cs(e, t, n) {
                    if (3 === e.tag) Es(e, e, n);
                    else
                        for (; null !== t;) {
                            if (3 === t.tag) {
                                Es(t, e, n);
                                break
                            }
                            if (1 === t.tag) {
                                var r = t.stateNode;
                                if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Ku || !Ku.has(r))) {
                                    t = Ao(t, e = vl(t, e = cl(n, e), 1), 1), e = ts(), null !== t && (yt(t, 1, e), as(t, e));
                                    break
                                }
                            }
                            t = t.return
                        }
                }

                function Ps(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t), t = ts(), e.pingedLanes |= e.suspendedLanes & n, Lu === e && (Ru & n) === n && (4 === Au || 3 === Au && (130023424 & Ru) === Ru && 500 > Ge() - Bu ? ps(e, 0) : Vu |= n), as(e, t)
                }

                function Ts(e, t) {
                    0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ct, 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
                    var n = ts();
                    null !== (e = Lo(e, t)) && (yt(e, t, n), as(e, n))
                }

                function js(e) {
                    var t = e.memoizedState,
                        n = 0;
                    null !== t && (n = t.retryLane), Ts(e, n)
                }

                function Ns(e, t) {
                    var n = 0;
                    switch (e.tag) {
                        case 13:
                            var r = e.stateNode,
                                a = e.memoizedState;
                            null !== a && (n = a.retryLane);
                            break;
                        case 19:
                            r = e.stateNode;
                            break;
                        default:
                            throw Error(o(314))
                    }
                    null !== r && r.delete(t), Ts(e, n)
                }

                function Ls(e, t) {
                    return Ke(e, t)
                }

                function Os(e, t, n, r) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function Rs(e, t, n, r) {
                    return new Os(e, t, n, r)
                }

                function Ms(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function _s(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = Rs(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
                }

                function As(e, t, n, r, a, i) {
                    var l = 2;
                    if (r = e, "function" === typeof e) Ms(e) && (l = 1);
                    else if ("string" === typeof e) l = 5;
                    else e: switch (e) {
                        case k:
                            return Is(n.children, a, i, t);
                        case E:
                            l = 8, a |= 8;
                            break;
                        case C:
                            return (e = Rs(12, n, t, 2 | a)).elementType = C, e.lanes = i, e;
                        case N:
                            return (e = Rs(13, n, t, a)).elementType = N, e.lanes = i, e;
                        case L:
                            return (e = Rs(19, n, t, a)).elementType = L, e.lanes = i, e;
                        case M:
                            return zs(n, a, i, t);
                        default:
                            if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                                case P:
                                    l = 10;
                                    break e;
                                case T:
                                    l = 9;
                                    break e;
                                case j:
                                    l = 11;
                                    break e;
                                case O:
                                    l = 14;
                                    break e;
                                case R:
                                    l = 16, r = null;
                                    break e
                            }
                            throw Error(o(130, null == e ? e : typeof e, ""))
                    }
                    return (t = Rs(l, n, t, a)).elementType = e, t.type = r, t.lanes = i, t
                }

                function Is(e, t, n, r) {
                    return (e = Rs(7, e, r, t)).lanes = n, e
                }

                function zs(e, t, n, r) {
                    return (e = Rs(22, e, r, t)).elementType = M, e.lanes = n, e.stateNode = {
                        isHidden: !1
                    }, e
                }

                function Ds(e, t, n) {
                    return (e = Rs(6, e, null, t)).lanes = n, e
                }

                function Vs(e, t, n) {
                    return (t = Rs(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }

                function Fs(e, t, n, r, a) {
                    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = mt(0), this.expirationTimes = mt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mt(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null
                }

                function Us(e, t, n, r, a, o, i, l, u) {
                    return e = new Fs(e, t, n, l, u), 1 === t ? (t = 1, !0 === o && (t |= 8)) : t = 0, o = Rs(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
                        element: r,
                        isDehydrated: n,
                        cache: null,
                        transitions: null,
                        pendingSuspenseBoundaries: null
                    }, Ro(o), e
                }

                function Bs(e) {
                    if (!e) return Ta;
                    e: {
                        if (Be(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(o(170));
                        var t = e;do {
                            switch (t.tag) {
                                case 3:
                                    t = t.stateNode.context;
                                    break e;
                                case 1:
                                    if (Ra(t.type)) {
                                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break e
                                    }
                            }
                            t = t.return
                        } while (null !== t);
                        throw Error(o(171))
                    }
                    if (1 === e.tag) {
                        var n = e.type;
                        if (Ra(n)) return Aa(e, n, t)
                    }
                    return t
                }

                function Ws(e, t, n, r, a, o, i, l, u) {
                    return (e = Us(n, r, !0, e, 0, o, 0, l, u)).context = Bs(null), n = e.current, (o = _o(r = ts(), a = ns(n))).callback = void 0 !== t && null !== t ? t : null, Ao(n, o, a), e.current.lanes = a, yt(e, a, r), as(e, r), e
                }

                function Hs(e, t, n, r) {
                    var a = t.current,
                        o = ts(),
                        i = ns(a);
                    return n = Bs(n), null === t.context ? t.context = n : t.pendingContext = n, (t = _o(o, i)).payload = {
                        element: e
                    }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Ao(a, t, i)) && (rs(e, a, i, o), Io(e, a, i)), i
                }

                function $s(e) {
                    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
                }

                function Qs(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t
                    }
                }

                function Ks(e, t) {
                    Qs(e, t), (e = e.alternate) && Qs(e, t)
                }
                Eu = function(e, t, n) {
                    if (null !== e)
                        if (e.memoizedProps !== t.pendingProps || Na.current) wl = !0;
                        else {
                            if (0 === (e.lanes & n) && 0 === (128 & t.flags)) return wl = !1,
                                function(e, t, n) {
                                    switch (t.tag) {
                                        case 3:
                                            Ll(t), ho();
                                            break;
                                        case 5:
                                            ii(t);
                                            break;
                                        case 1:
                                            Ra(t.type) && Ia(t);
                                            break;
                                        case 4:
                                            ai(t, t.stateNode.containerInfo);
                                            break;
                                        case 10:
                                            var r = t.type._context,
                                                a = t.memoizedProps.value;
                                            Pa(go, r._currentValue), r._currentValue = a;
                                            break;
                                        case 13:
                                            if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Pa(ui, 1 & ui.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? Dl(e, t, n) : (Pa(ui, 1 & ui.current), null !== (e = $l(e, t, n)) ? e.sibling : null);
                                            Pa(ui, 1 & ui.current);
                                            break;
                                        case 19:
                                            if (r = 0 !== (n & t.childLanes), 0 !== (128 & e.flags)) {
                                                if (r) return Wl(e, t, n);
                                                t.flags |= 128
                                            }
                                            if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), Pa(ui, ui.current), r) break;
                                            return null;
                                        case 22:
                                        case 23:
                                            return t.lanes = 0, Cl(e, t, n)
                                    }
                                    return $l(e, t, n)
                                }(e, t, n);
                            wl = 0 !== (131072 & e.flags)
                        }
                    else wl = !1, ao && 0 !== (1048576 & t.flags) && Ja(t, Qa, t.index);
                    switch (t.lanes = 0, t.tag) {
                        case 2:
                            var r = t.type;
                            Hl(e, t), e = t.pendingProps;
                            var a = Oa(t, ja.current);
                            Co(t, n), a = Ei(null, t, r, e, a, n);
                            var i = Ci();
                            return t.flags |= 1, "object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ra(r) ? (i = !0, Ia(t)) : i = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, Ro(t), a.updater = Bo, t.stateNode = a, a._reactInternals = t, Qo(t, r, e, n), t = Nl(null, t, r, !0, i, n)) : (t.tag = 0, ao && i && eo(t), xl(null, t, a, n), t = t.child), t;
                        case 16:
                            r = t.elementType;
                            e: {
                                switch (Hl(e, t), e = t.pendingProps, r = (a = r._init)(r._payload), t.type = r, a = t.tag = function(e) {
                                    if ("function" === typeof e) return Ms(e) ? 1 : 0;
                                    if (void 0 !== e && null !== e) {
                                        if ((e = e.$$typeof) === j) return 11;
                                        if (e === O) return 14
                                    }
                                    return 2
                                }(r), e = yo(r, e), a) {
                                    case 0:
                                        t = Tl(null, t, r, e, n);
                                        break e;
                                    case 1:
                                        t = jl(null, t, r, e, n);
                                        break e;
                                    case 11:
                                        t = Sl(null, t, r, e, n);
                                        break e;
                                    case 14:
                                        t = kl(null, t, r, yo(r.type, e), n);
                                        break e
                                }
                                throw Error(o(306, r, ""))
                            }
                            return t;
                        case 0:
                            return r = t.type, a = t.pendingProps, Tl(e, t, r, a = t.elementType === r ? a : yo(r, a), n);
                        case 1:
                            return r = t.type, a = t.pendingProps, jl(e, t, r, a = t.elementType === r ? a : yo(r, a), n);
                        case 3:
                            e: {
                                if (Ll(t), null === e) throw Error(o(387));r = t.pendingProps,
                                a = (i = t.memoizedState).element,
                                Mo(e, t),
                                Do(t, r, null, n);
                                var l = t.memoizedState;
                                if (r = l.element, i.isDehydrated) {
                                    if (i = {
                                            element: r,
                                            isDehydrated: !1,
                                            cache: l.cache,
                                            pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                                            transitions: l.transitions
                                        }, t.updateQueue.baseState = i, t.memoizedState = i, 256 & t.flags) {
                                        t = Ol(e, t, r, n, a = cl(Error(o(423)), t));
                                        break e
                                    }
                                    if (r !== a) {
                                        t = Ol(e, t, r, n, a = cl(Error(o(424)), t));
                                        break e
                                    }
                                    for (ro = sa(t.stateNode.containerInfo.firstChild), no = t, ao = !0, oo = null, n = Zo(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                                } else {
                                    if (ho(), r === a) {
                                        t = $l(e, t, n);
                                        break e
                                    }
                                    xl(e, t, r, n)
                                }
                                t = t.child
                            }
                            return t;
                        case 5:
                            return ii(t), null === e && so(t), r = t.type, a = t.pendingProps, i = null !== e ? e.memoizedProps : null, l = a.children, na(r, a) ? l = null : null !== i && na(r, i) && (t.flags |= 32), Pl(e, t), xl(e, t, l, n), t.child;
                        case 6:
                            return null === e && so(t), null;
                        case 13:
                            return Dl(e, t, n);
                        case 4:
                            return ai(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Go(t, null, r, n) : xl(e, t, r, n), t.child;
                        case 11:
                            return r = t.type, a = t.pendingProps, Sl(e, t, r, a = t.elementType === r ? a : yo(r, a), n);
                        case 7:
                            return xl(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return xl(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: {
                                if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, l = a.value, Pa(go, r._currentValue), r._currentValue = l, null !== i)
                                    if (lr(i.value, l)) {
                                        if (i.children === a.children && !Na.current) {
                                            t = $l(e, t, n);
                                            break e
                                        }
                                    } else
                                        for (null !== (i = t.child) && (i.return = t); null !== i;) {
                                            var u = i.dependencies;
                                            if (null !== u) {
                                                l = i.child;
                                                for (var s = u.firstContext; null !== s;) {
                                                    if (s.context === r) {
                                                        if (1 === i.tag) {
                                                            (s = _o(-1, n & -n)).tag = 2;
                                                            var c = i.updateQueue;
                                                            if (null !== c) {
                                                                var f = (c = c.shared).pending;
                                                                null === f ? s.next = s : (s.next = f.next, f.next = s), c.pending = s
                                                            }
                                                        }
                                                        i.lanes |= n, null !== (s = i.alternate) && (s.lanes |= n), Eo(i.return, n, t), u.lanes |= n;
                                                        break
                                                    }
                                                    s = s.next
                                                }
                                            } else if (10 === i.tag) l = i.type === t.type ? null : i.child;
                                            else if (18 === i.tag) {
                                                if (null === (l = i.return)) throw Error(o(341));
                                                l.lanes |= n, null !== (u = l.alternate) && (u.lanes |= n), Eo(l, n, t), l = i.sibling
                                            } else l = i.child;
                                            if (null !== l) l.return = i;
                                            else
                                                for (l = i; null !== l;) {
                                                    if (l === t) {
                                                        l = null;
                                                        break
                                                    }
                                                    if (null !== (i = l.sibling)) {
                                                        i.return = l.return, l = i;
                                                        break
                                                    }
                                                    l = l.return
                                                }
                                            i = l
                                        }
                                xl(e, t, a.children, n),
                                t = t.child
                            }
                            return t;
                        case 9:
                            return a = t.type, r = t.pendingProps.children, Co(t, n), r = r(a = Po(a)), t.flags |= 1, xl(e, t, r, n), t.child;
                        case 14:
                            return a = yo(r = t.type, t.pendingProps), kl(e, t, r, a = yo(r.type, a), n);
                        case 15:
                            return El(e, t, t.type, t.pendingProps, n);
                        case 17:
                            return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : yo(r, a), Hl(e, t), t.tag = 1, Ra(r) ? (e = !0, Ia(t)) : e = !1, Co(t, n), Ho(t, r, a), Qo(t, r, a, n), Nl(null, t, r, !0, e, n);
                        case 19:
                            return Wl(e, t, n);
                        case 22:
                            return Cl(e, t, n)
                    }
                    throw Error(o(156, t.tag))
                };
                var Ys = "function" === typeof reportError ? reportError : function(e) {
                    console.error(e)
                };

                function qs(e) {
                    this._internalRoot = e
                }

                function Xs(e) {
                    this._internalRoot = e
                }

                function Gs(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
                }

                function Zs(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
                }

                function Js() {}

                function ec(e, t, n, r, a) {
                    var o = n._reactRootContainer;
                    if (o) {
                        var i = o;
                        if ("function" === typeof a) {
                            var l = a;
                            a = function() {
                                var e = $s(i);
                                l.call(e)
                            }
                        }
                        Hs(t, i, e, a)
                    } else i = function(e, t, n, r, a) {
                        if (a) {
                            if ("function" === typeof r) {
                                var o = r;
                                r = function() {
                                    var e = $s(i);
                                    o.call(e)
                                }
                            }
                            var i = Ws(t, r, e, 0, null, !1, 0, "", Js);
                            return e._reactRootContainer = i, e[ha] = i.current, Br(8 === e.nodeType ? e.parentNode : e), fs(), i
                        }
                        for (; a = e.lastChild;) e.removeChild(a);
                        if ("function" === typeof r) {
                            var l = r;
                            r = function() {
                                var e = $s(u);
                                l.call(e)
                            }
                        }
                        var u = Us(e, 0, !1, null, 0, !1, 0, "", Js);
                        return e._reactRootContainer = u, e[ha] = u.current, Br(8 === e.nodeType ? e.parentNode : e), fs((function() {
                            Hs(t, u, n, r)
                        })), u
                    }(n, t, e, a, r);
                    return $s(i)
                }
                Xs.prototype.render = qs.prototype.render = function(e) {
                    var t = this._internalRoot;
                    if (null === t) throw Error(o(409));
                    Hs(e, t, null, null)
                }, Xs.prototype.unmount = qs.prototype.unmount = function() {
                    var e = this._internalRoot;
                    if (null !== e) {
                        this._internalRoot = null;
                        var t = e.containerInfo;
                        fs((function() {
                            Hs(null, e, null, null)
                        })), t[ha] = null
                    }
                }, Xs.prototype.unstable_scheduleHydration = function(e) {
                    if (e) {
                        var t = Et();
                        e = {
                            blockedOn: null,
                            target: e,
                            priority: t
                        };
                        for (var n = 0; n < Mt.length && 0 !== t && t < Mt[n].priority; n++);
                        Mt.splice(n, 0, e), 0 === n && zt(e)
                    }
                }, xt = function(e) {
                    switch (e.tag) {
                        case 3:
                            var t = e.stateNode;
                            if (t.current.memoizedState.isDehydrated) {
                                var n = ft(t.pendingLanes);
                                0 !== n && (gt(t, 1 | n), as(t, Ge()), 0 === (6 & Nu) && (Wu = Ge() + 500, Ba()))
                            }
                            break;
                        case 13:
                            fs((function() {
                                var t = Lo(e, 1);
                                if (null !== t) {
                                    var n = ts();
                                    rs(t, e, 1, n)
                                }
                            })), Ks(e, 1)
                    }
                }, St = function(e) {
                    if (13 === e.tag) {
                        var t = Lo(e, 134217728);
                        if (null !== t) rs(t, e, 134217728, ts());
                        Ks(e, 134217728)
                    }
                }, kt = function(e) {
                    if (13 === e.tag) {
                        var t = ns(e),
                            n = Lo(e, t);
                        if (null !== n) rs(n, e, t, ts());
                        Ks(e, t)
                    }
                }, Et = function() {
                    return bt
                }, Ct = function(e, t) {
                    var n = bt;
                    try {
                        return bt = e, t()
                    } finally {
                        bt = n
                    }
                }, Se = function(e, t, n) {
                    switch (t) {
                        case "input":
                            if (Z(e, n), t = n.name, "radio" === n.type && null != t) {
                                for (n = e; n.parentNode;) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var r = n[t];
                                    if (r !== e && r.form === e.form) {
                                        var a = xa(r);
                                        if (!a) throw Error(o(90));
                                        K(r), Z(r, a)
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            oe(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && ne(e, !!n.multiple, t, !1)
                    }
                }, je = cs, Ne = fs;
                var tc = {
                        usingClientEntryPoint: !1,
                        Events: [ba, wa, xa, Pe, Te, cs]
                    },
                    nc = {
                        findFiberByHostInstance: ga,
                        bundleType: 0,
                        version: "18.2.0",
                        rendererPackageName: "react-dom"
                    },
                    rc = {
                        bundleType: nc.bundleType,
                        version: nc.version,
                        rendererPackageName: nc.rendererPackageName,
                        rendererConfig: nc.rendererConfig,
                        overrideHookState: null,
                        overrideHookStateDeletePath: null,
                        overrideHookStateRenamePath: null,
                        overrideProps: null,
                        overridePropsDeletePath: null,
                        overridePropsRenamePath: null,
                        setErrorHandler: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: w.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function(e) {
                            return null === (e = $e(e)) ? null : e.stateNode
                        },
                        findFiberByHostInstance: nc.findFiberByHostInstance || function() {
                            return null
                        },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null,
                        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
                    };
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!ac.isDisabled && ac.supportsFiber) try {
                        at = ac.inject(rc), ot = ac
                    } catch (ce) {}
                }
                t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc, t.createPortal = function(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!Gs(t)) throw Error(o(200));
                    return function(e, t, n) {
                        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                        return {
                            $$typeof: S,
                            key: null == r ? null : "" + r,
                            children: e,
                            containerInfo: t,
                            implementation: n
                        }
                    }(e, t, null, n)
                }, t.createRoot = function(e, t) {
                    if (!Gs(e)) throw Error(o(299));
                    var n = !1,
                        r = "",
                        a = Ys;
                    return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (a = t.onRecoverableError)), t = Us(e, 1, !1, null, 0, n, 0, r, a), e[ha] = t.current, Br(8 === e.nodeType ? e.parentNode : e), new qs(t)
                }, t.findDOMNode = function(e) {
                    if (null == e) return null;
                    if (1 === e.nodeType) return e;
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" === typeof e.render) throw Error(o(188));
                        throw e = Object.keys(e).join(","), Error(o(268, e))
                    }
                    return e = null === (e = $e(t)) ? null : e.stateNode
                }, t.flushSync = function(e) {
                    return fs(e)
                }, t.hydrate = function(e, t, n) {
                    if (!Zs(t)) throw Error(o(200));
                    return ec(null, e, t, !0, n)
                }, t.hydrateRoot = function(e, t, n) {
                    if (!Gs(e)) throw Error(o(405));
                    var r = null != n && n.hydratedSources || null,
                        a = !1,
                        i = "",
                        l = Ys;
                    if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (a = !0), void 0 !== n.identifierPrefix && (i = n.identifierPrefix), void 0 !== n.onRecoverableError && (l = n.onRecoverableError)), t = Ws(t, null, e, 1, null != n ? n : null, a, 0, i, l), e[ha] = t.current, Br(e), r)
                        for (e = 0; e < r.length; e++) a = (a = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
                    return new Xs(t)
                }, t.render = function(e, t, n) {
                    if (!Zs(t)) throw Error(o(200));
                    return ec(null, e, t, !1, n)
                }, t.unmountComponentAtNode = function(e) {
                    if (!Zs(e)) throw Error(o(40));
                    return !!e._reactRootContainer && (fs((function() {
                        ec(null, null, e, !1, (function() {
                            e._reactRootContainer = null, e[ha] = null
                        }))
                    })), !0)
                }, t.unstable_batchedUpdates = cs, t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
                    if (!Zs(n)) throw Error(o(200));
                    if (null == e || void 0 === e._reactInternals) throw Error(o(38));
                    return ec(e, t, n, !1, r)
                }, t.version = "18.2.0-next-9e3b772b8-20220608"
            },
            250: function(e, t, n) {
                "use strict";
                var r = n(164);
                t.createRoot = r.createRoot, t.hydrateRoot = r.hydrateRoot
            },
            164: function(e, t, n) {
                "use strict";
                ! function e() {
                    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
                }(), e.exports = n(463)
            },
            374: function(e, t, n) {
                "use strict";
                var r = n(791),
                    a = Symbol.for("react.element"),
                    o = Symbol.for("react.fragment"),
                    i = Object.prototype.hasOwnProperty,
                    l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    u = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function s(e, t, n) {
                    var r, o = {},
                        s = null,
                        c = null;
                    for (r in void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (c = t.ref), t) i.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
                    if (e && e.defaultProps)
                        for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
                    return {
                        $$typeof: a,
                        type: e,
                        key: s,
                        ref: c,
                        props: o,
                        _owner: l.current
                    }
                }
                t.jsx = s, t.jsxs = s
            },
            117: function(e, t) {
                "use strict";
                var n = Symbol.for("react.element"),
                    r = Symbol.for("react.portal"),
                    a = Symbol.for("react.fragment"),
                    o = Symbol.for("react.strict_mode"),
                    i = Symbol.for("react.profiler"),
                    l = Symbol.for("react.provider"),
                    u = Symbol.for("react.context"),
                    s = Symbol.for("react.forward_ref"),
                    c = Symbol.for("react.suspense"),
                    f = Symbol.for("react.memo"),
                    d = Symbol.for("react.lazy"),
                    p = Symbol.iterator;
                var h = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    v = Object.assign,
                    m = {};

                function y(e, t, n) {
                    this.props = e, this.context = t, this.refs = m, this.updater = n || h
                }

                function g() {}

                function b(e, t, n) {
                    this.props = e, this.context = t, this.refs = m, this.updater = n || h
                }
                y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
                    if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, y.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, g.prototype = y.prototype;
                var w = b.prototype = new g;
                w.constructor = b, v(w, y.prototype), w.isPureReactComponent = !0;
                var x = Array.isArray,
                    S = Object.prototype.hasOwnProperty,
                    k = {
                        current: null
                    },
                    E = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function C(e, t, r) {
                    var a, o = {},
                        i = null,
                        l = null;
                    if (null != t)
                        for (a in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = "" + t.key), t) S.call(t, a) && !E.hasOwnProperty(a) && (o[a] = t[a]);
                    var u = arguments.length - 2;
                    if (1 === u) o.children = r;
                    else if (1 < u) {
                        for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
                        o.children = s
                    }
                    if (e && e.defaultProps)
                        for (a in u = e.defaultProps) void 0 === o[a] && (o[a] = u[a]);
                    return {
                        $$typeof: n,
                        type: e,
                        key: i,
                        ref: l,
                        props: o,
                        _owner: k.current
                    }
                }

                function P(e) {
                    return "object" === typeof e && null !== e && e.$$typeof === n
                }
                var T = /\/+/g;

                function j(e, t) {
                    return "object" === typeof e && null !== e && null != e.key ? function(e) {
                        var t = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + e.replace(/[=:]/g, (function(e) {
                            return t[e]
                        }))
                    }("" + e.key) : t.toString(36)
                }

                function N(e, t, a, o, i) {
                    var l = typeof e;
                    "undefined" !== l && "boolean" !== l || (e = null);
                    var u = !1;
                    if (null === e) u = !0;
                    else switch (l) {
                        case "string":
                        case "number":
                            u = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case n:
                                case r:
                                    u = !0
                            }
                    }
                    if (u) return i = i(u = e), e = "" === o ? "." + j(u, 0) : o, x(i) ? (a = "", null != e && (a = e.replace(T, "$&/") + "/"), N(i, t, a, "", (function(e) {
                        return e
                    }))) : null != i && (P(i) && (i = function(e, t) {
                        return {
                            $$typeof: n,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(i, a + (!i.key || u && u.key === i.key ? "" : ("" + i.key).replace(T, "$&/") + "/") + e)), t.push(i)), 1;
                    if (u = 0, o = "" === o ? "." : o + ":", x(e))
                        for (var s = 0; s < e.length; s++) {
                            var c = o + j(l = e[s], s);
                            u += N(l, t, a, c, i)
                        } else if (c = function(e) {
                                return null === e || "object" !== typeof e ? null : "function" === typeof(e = p && e[p] || e["@@iterator"]) ? e : null
                            }(e), "function" === typeof c)
                            for (e = c.call(e), s = 0; !(l = e.next()).done;) u += N(l = l.value, t, a, c = o + j(l, s++), i);
                        else if ("object" === l) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                    return u
                }

                function L(e, t, n) {
                    if (null == e) return e;
                    var r = [],
                        a = 0;
                    return N(e, r, "", "", (function(e) {
                        return t.call(n, e, a++)
                    })), r
                }

                function O(e) {
                    if (-1 === e._status) {
                        var t = e._result;
                        (t = t()).then((function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                        }), (function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                        })), -1 === e._status && (e._status = 0, e._result = t)
                    }
                    if (1 === e._status) return e._result.default;
                    throw e._result
                }
                var R = {
                        current: null
                    },
                    M = {
                        transition: null
                    },
                    _ = {
                        ReactCurrentDispatcher: R,
                        ReactCurrentBatchConfig: M,
                        ReactCurrentOwner: k
                    };
                t.Children = {
                    map: L,
                    forEach: function(e, t, n) {
                        L(e, (function() {
                            t.apply(this, arguments)
                        }), n)
                    },
                    count: function(e) {
                        var t = 0;
                        return L(e, (function() {
                            t++
                        })), t
                    },
                    toArray: function(e) {
                        return L(e, (function(e) {
                            return e
                        })) || []
                    },
                    only: function(e) {
                        if (!P(e)) throw Error("React.Children.only expected to receive a single React element child.");
                        return e
                    }
                }, t.Component = y, t.Fragment = a, t.Profiler = i, t.PureComponent = b, t.StrictMode = o, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _, t.cloneElement = function(e, t, r) {
                    if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                    var a = v({}, e.props),
                        o = e.key,
                        i = e.ref,
                        l = e._owner;
                    if (null != t) {
                        if (void 0 !== t.ref && (i = t.ref, l = k.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
                        for (s in t) S.call(t, s) && !E.hasOwnProperty(s) && (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s])
                    }
                    var s = arguments.length - 2;
                    if (1 === s) a.children = r;
                    else if (1 < s) {
                        u = Array(s);
                        for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
                        a.children = u
                    }
                    return {
                        $$typeof: n,
                        type: e.type,
                        key: o,
                        ref: i,
                        props: a,
                        _owner: l
                    }
                }, t.createContext = function(e) {
                    return (e = {
                        $$typeof: u,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null,
                        _defaultValue: null,
                        _globalName: null
                    }).Provider = {
                        $$typeof: l,
                        _context: e
                    }, e.Consumer = e
                }, t.createElement = C, t.createFactory = function(e) {
                    var t = C.bind(null, e);
                    return t.type = e, t
                }, t.createRef = function() {
                    return {
                        current: null
                    }
                }, t.forwardRef = function(e) {
                    return {
                        $$typeof: s,
                        render: e
                    }
                }, t.isValidElement = P, t.lazy = function(e) {
                    return {
                        $$typeof: d,
                        _payload: {
                            _status: -1,
                            _result: e
                        },
                        _init: O
                    }
                }, t.memo = function(e, t) {
                    return {
                        $$typeof: f,
                        type: e,
                        compare: void 0 === t ? null : t
                    }
                }, t.startTransition = function(e) {
                    var t = M.transition;
                    M.transition = {};
                    try {
                        e()
                    } finally {
                        M.transition = t
                    }
                }, t.unstable_act = function() {
                    throw Error("act(...) is not supported in production builds of React.")
                }, t.useCallback = function(e, t) {
                    return R.current.useCallback(e, t)
                }, t.useContext = function(e) {
                    return R.current.useContext(e)
                }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                    return R.current.useDeferredValue(e)
                }, t.useEffect = function(e, t) {
                    return R.current.useEffect(e, t)
                }, t.useId = function() {
                    return R.current.useId()
                }, t.useImperativeHandle = function(e, t, n) {
                    return R.current.useImperativeHandle(e, t, n)
                }, t.useInsertionEffect = function(e, t) {
                    return R.current.useInsertionEffect(e, t)
                }, t.useLayoutEffect = function(e, t) {
                    return R.current.useLayoutEffect(e, t)
                }, t.useMemo = function(e, t) {
                    return R.current.useMemo(e, t)
                }, t.useReducer = function(e, t, n) {
                    return R.current.useReducer(e, t, n)
                }, t.useRef = function(e) {
                    return R.current.useRef(e)
                }, t.useState = function(e) {
                    return R.current.useState(e)
                }, t.useSyncExternalStore = function(e, t, n) {
                    return R.current.useSyncExternalStore(e, t, n)
                }, t.useTransition = function() {
                    return R.current.useTransition()
                }, t.version = "18.2.0"
            },
            791: function(e, t, n) {
                "use strict";
                e.exports = n(117)
            },
            184: function(e, t, n) {
                "use strict";
                e.exports = n(374)
            },
            813: function(e, t) {
                "use strict";

                function n(e, t) {
                    var n = e.length;
                    e.push(t);
                    e: for (; 0 < n;) {
                        var r = n - 1 >>> 1,
                            a = e[r];
                        if (!(0 < o(a, t))) break e;
                        e[r] = t, e[n] = a, n = r
                    }
                }

                function r(e) {
                    return 0 === e.length ? null : e[0]
                }

                function a(e) {
                    if (0 === e.length) return null;
                    var t = e[0],
                        n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, a = e.length, i = a >>> 1; r < i;) {
                            var l = 2 * (r + 1) - 1,
                                u = e[l],
                                s = l + 1,
                                c = e[s];
                            if (0 > o(u, n)) s < a && 0 > o(c, u) ? (e[r] = c, e[s] = n, r = s) : (e[r] = u, e[l] = n, r = l);
                            else {
                                if (!(s < a && 0 > o(c, n))) break e;
                                e[r] = c, e[s] = n, r = s
                            }
                        }
                    }
                    return t
                }

                function o(e, t) {
                    var n = e.sortIndex - t.sortIndex;
                    return 0 !== n ? n : e.id - t.id
                }
                if ("object" === typeof performance && "function" === typeof performance.now) {
                    var i = performance;
                    t.unstable_now = function() {
                        return i.now()
                    }
                } else {
                    var l = Date,
                        u = l.now();
                    t.unstable_now = function() {
                        return l.now() - u
                    }
                }
                var s = [],
                    c = [],
                    f = 1,
                    d = null,
                    p = 3,
                    h = !1,
                    v = !1,
                    m = !1,
                    y = "function" === typeof setTimeout ? setTimeout : null,
                    g = "function" === typeof clearTimeout ? clearTimeout : null,
                    b = "undefined" !== typeof setImmediate ? setImmediate : null;

                function w(e) {
                    for (var t = r(c); null !== t;) {
                        if (null === t.callback) a(c);
                        else {
                            if (!(t.startTime <= e)) break;
                            a(c), t.sortIndex = t.expirationTime, n(s, t)
                        }
                        t = r(c)
                    }
                }

                function x(e) {
                    if (m = !1, w(e), !v)
                        if (null !== r(s)) v = !0, M(S);
                        else {
                            var t = r(c);
                            null !== t && _(x, t.startTime - e)
                        }
                }

                function S(e, n) {
                    v = !1, m && (m = !1, g(P), P = -1), h = !0;
                    var o = p;
                    try {
                        for (w(n), d = r(s); null !== d && (!(d.expirationTime > n) || e && !N());) {
                            var i = d.callback;
                            if ("function" === typeof i) {
                                d.callback = null, p = d.priorityLevel;
                                var l = i(d.expirationTime <= n);
                                n = t.unstable_now(), "function" === typeof l ? d.callback = l : d === r(s) && a(s), w(n)
                            } else a(s);
                            d = r(s)
                        }
                        if (null !== d) var u = !0;
                        else {
                            var f = r(c);
                            null !== f && _(x, f.startTime - n), u = !1
                        }
                        return u
                    } finally {
                        d = null, p = o, h = !1
                    }
                }
                "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
                var k, E = !1,
                    C = null,
                    P = -1,
                    T = 5,
                    j = -1;

                function N() {
                    return !(t.unstable_now() - j < T)
                }

                function L() {
                    if (null !== C) {
                        var e = t.unstable_now();
                        j = e;
                        var n = !0;
                        try {
                            n = C(!0, e)
                        } finally {
                            n ? k() : (E = !1, C = null)
                        }
                    } else E = !1
                }
                if ("function" === typeof b) k = function() {
                    b(L)
                };
                else if ("undefined" !== typeof MessageChannel) {
                    var O = new MessageChannel,
                        R = O.port2;
                    O.port1.onmessage = L, k = function() {
                        R.postMessage(null)
                    }
                } else k = function() {
                    y(L, 0)
                };

                function M(e) {
                    C = e, E || (E = !0, k())
                }

                function _(e, n) {
                    P = y((function() {
                        e(t.unstable_now())
                    }), n)
                }
                t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                    e.callback = null
                }, t.unstable_continueExecution = function() {
                    v || h || (v = !0, M(S))
                }, t.unstable_forceFrameRate = function(e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < e ? Math.floor(1e3 / e) : 5
                }, t.unstable_getCurrentPriorityLevel = function() {
                    return p
                }, t.unstable_getFirstCallbackNode = function() {
                    return r(s)
                }, t.unstable_next = function(e) {
                    switch (p) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = p
                    }
                    var n = p;
                    p = t;
                    try {
                        return e()
                    } finally {
                        p = n
                    }
                }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3
                    }
                    var n = p;
                    p = e;
                    try {
                        return t()
                    } finally {
                        p = n
                    }
                }, t.unstable_scheduleCallback = function(e, a, o) {
                    var i = t.unstable_now();
                    switch ("object" === typeof o && null !== o ? o = "number" === typeof(o = o.delay) && 0 < o ? i + o : i : o = i, e) {
                        case 1:
                            var l = -1;
                            break;
                        case 2:
                            l = 250;
                            break;
                        case 5:
                            l = 1073741823;
                            break;
                        case 4:
                            l = 1e4;
                            break;
                        default:
                            l = 5e3
                    }
                    return e = {
                        id: f++,
                        callback: a,
                        priorityLevel: e,
                        startTime: o,
                        expirationTime: l = o + l,
                        sortIndex: -1
                    }, o > i ? (e.sortIndex = o, n(c, e), null === r(s) && e === r(c) && (m ? (g(P), P = -1) : m = !0, _(x, o - i))) : (e.sortIndex = l, n(s, e), v || h || (v = !0, M(S))), e
                }, t.unstable_shouldYield = N, t.unstable_wrapCallback = function(e) {
                    var t = p;
                    return function() {
                        var n = p;
                        p = t;
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            p = n
                        }
                    }
                }
            },
            296: function(e, t, n) {
                "use strict";
                e.exports = n(813)
            }
        },
        t = {};

    function n(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var o = t[r] = {
            exports: {}
        };
        return e[r](o, o.exports, n), o.exports
    }
    n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, {
                a: t
            }), t
        },
        function() {
            var e, t = Object.getPrototypeOf ? function(e) {
                return Object.getPrototypeOf(e)
            } : function(e) {
                return e.__proto__
            };
            n.t = function(r, a) {
                if (1 & a && (r = this(r)), 8 & a) return r;
                if ("object" === typeof r && r) {
                    if (4 & a && r.__esModule) return r;
                    if (16 & a && "function" === typeof r.then) return r
                }
                var o = Object.create(null);
                n.r(o);
                var i = {};
                e = e || [null, t({}), t([]), t(t)];
                for (var l = 2 & a && r;
                    "object" == typeof l && !~e.indexOf(l); l = t(l)) Object.getOwnPropertyNames(l).forEach((function(e) {
                    i[e] = function() {
                        return r[e]
                    }
                }));
                return i.default = function() {
                    return r
                }, n.d(o, i), o
            }
        }(), n.d = function(e, t) {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.r = function(e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.p = "/",
        function() {
            "use strict";
            var e, t = n(791),
                r = n.t(t, 2),
                a = n(250);

            function o(e) {
                if (Array.isArray(e)) return e
            }

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function l(e, t) {
                if (e) {
                    if ("string" === typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
                }
            }

            function u() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function s(e, t) {
                return o(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, o, i, l = [],
                            u = !0,
                            s = !1;
                        try {
                            if (o = (n = n.call(e)).next, 0 === t) {
                                if (Object(n) !== n) return;
                                u = !1
                            } else
                                for (; !(u = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); u = !0);
                        } catch (c) {
                            s = !0, a = c
                        } finally {
                            try {
                                if (!u && null != n.return && (i = n.return(), Object(i) !== i)) return
                            } finally {
                                if (s) throw a
                            }
                        }
                        return l
                    }
                }(e, t) || l(e, t) || u()
            }

            function c(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }

            function f(e) {
                return function(e) {
                    if (Array.isArray(e)) return i(e)
                }(e) || c(e) || l(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e) {
                return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, p(e)
            }

            function h(e) {
                var t = function(e, t) {
                    if ("object" !== p(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== p(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === p(t) ? t : String(t)
            }

            function v(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, h(r.key), r)
                }
            }

            function m(e, t, n) {
                return t && v(e.prototype, t), n && v(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function y(e, t) {
                return y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, y(e, t)
            }

            function g(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && y(e, t)
            }

            function b(e) {
                return b = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, b(e)
            }

            function w() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }

            function x(e, t) {
                if (t && ("object" === p(t) || "function" === typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function S(e) {
                var t = w();
                return function() {
                    var n, r = b(e);
                    if (t) {
                        var a = b(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return x(this, n)
                }
            }

            function k(e, t, n) {
                return k = w() ? Reflect.construct.bind() : function(e, t, n) {
                    var r = [null];
                    r.push.apply(r, t);
                    var a = new(Function.bind.apply(e, r));
                    return n && y(a, n.prototype), a
                }, k.apply(null, arguments)
            }

            function E(e) {
                var t = "function" === typeof Map ? new Map : void 0;
                return E = function(e) {
                    if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                    var n;
                    if ("function" !== typeof e) throw new TypeError("Super expression must either be null or a function");
                    if ("undefined" !== typeof t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, r)
                    }

                    function r() {
                        return k(e, arguments, b(this).constructor)
                    }
                    return r.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), y(r, e)
                }, E(e)
            }

            function C() {
                return C = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, C.apply(this, arguments)
            }! function(e) {
                e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
            }(e || (e = {}));
            var P, T = "popstate";

            function j(e, t) {
                if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t)
            }

            function N(e, t) {
                if (!e) {
                    "undefined" !== typeof console && console.warn(t);
                    try {
                        throw new Error(t)
                    } catch (n) {}
                }
            }

            function L(e, t) {
                return {
                    usr: e.state,
                    key: e.key,
                    idx: t
                }
            }

            function O(e, t, n, r) {
                return void 0 === n && (n = null), C({
                    pathname: "string" === typeof e ? e : e.pathname,
                    search: "",
                    hash: ""
                }, "string" === typeof t ? M(t) : t, {
                    state: n,
                    key: t && t.key || r || Math.random().toString(36).substr(2, 8)
                })
            }

            function R(e) {
                var t = e.pathname,
                    n = void 0 === t ? "/" : t,
                    r = e.search,
                    a = void 0 === r ? "" : r,
                    o = e.hash,
                    i = void 0 === o ? "" : o;
                return a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a), i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i), n
            }

            function M(e) {
                var t = {};
                if (e) {
                    var n = e.indexOf("#");
                    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
                    var r = e.indexOf("?");
                    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
                }
                return t
            }

            function _(t, n, r, a) {
                void 0 === a && (a = {});
                var o = a,
                    i = o.window,
                    l = void 0 === i ? document.defaultView : i,
                    u = o.v5Compat,
                    s = void 0 !== u && u,
                    c = l.history,
                    f = e.Pop,
                    d = null,
                    p = h();

                function h() {
                    return (c.state || {
                        idx: null
                    }).idx
                }

                function v() {
                    f = e.Pop;
                    var t = h(),
                        n = null == t ? null : t - p;
                    p = t, d && d({
                        action: f,
                        location: y.location,
                        delta: n
                    })
                }

                function m(e) {
                    var t = "null" !== l.location.origin ? l.location.origin : l.location.href,
                        n = "string" === typeof e ? e : R(e);
                    return j(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t)
                }
                null == p && (p = 0, c.replaceState(C({}, c.state, {
                    idx: p
                }), ""));
                var y = {
                    get action() {
                        return f
                    },
                    get location() {
                        return t(l, c)
                    },
                    listen: function(e) {
                        if (d) throw new Error("A history only accepts one active listener");
                        return l.addEventListener(T, v), d = e,
                            function() {
                                l.removeEventListener(T, v), d = null
                            }
                    },
                    createHref: function(e) {
                        return n(l, e)
                    },
                    createURL: m,
                    encodeLocation: function(e) {
                        var t = m(e);
                        return {
                            pathname: t.pathname,
                            search: t.search,
                            hash: t.hash
                        }
                    },
                    push: function(t, n) {
                        f = e.Push;
                        var a = O(y.location, t, n);
                        r && r(a, t);
                        var o = L(a, p = h() + 1),
                            i = y.createHref(a);
                        try {
                            c.pushState(o, "", i)
                        } catch (u) {
                            if (u instanceof DOMException && "DataCloneError" === u.name) throw u;
                            l.location.assign(i)
                        }
                        s && d && d({
                            action: f,
                            location: y.location,
                            delta: 1
                        })
                    },
                    replace: function(t, n) {
                        f = e.Replace;
                        var a = O(y.location, t, n);
                        r && r(a, t);
                        var o = L(a, p = h()),
                            i = y.createHref(a);
                        c.replaceState(o, "", i), s && d && d({
                            action: f,
                            location: y.location,
                            delta: 0
                        })
                    },
                    go: function(e) {
                        return c.go(e)
                    }
                };
                return y
            }! function(e) {
                e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
            }(P || (P = {}));
            new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

            function A(e, t, n) {
                void 0 === n && (n = "/");
                var r = q(("string" === typeof t ? M(t) : t).pathname || "/", n);
                if (null == r) return null;
                var a = I(e);
                ! function(e) {
                    e.sort((function(e, t) {
                        return e.score !== t.score ? t.score - e.score : function(e, t) {
                            var n = e.length === t.length && e.slice(0, -1).every((function(e, n) {
                                return e === t[n]
                            }));
                            return n ? e[e.length - 1] - t[t.length - 1] : 0
                        }(e.routesMeta.map((function(e) {
                            return e.childrenIndex
                        })), t.routesMeta.map((function(e) {
                            return e.childrenIndex
                        })))
                    }))
                }(a);
                for (var o = null, i = 0; null == o && i < a.length; ++i) o = Q(a[i], Y(r));
                return o
            }

            function I(e, t, n, r) {
                void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = "");
                var a = function(e, a, o) {
                    var i = {
                        relativePath: void 0 === o ? e.path || "" : o,
                        caseSensitive: !0 === e.caseSensitive,
                        childrenIndex: a,
                        route: e
                    };
                    i.relativePath.startsWith("/") && (j(i.relativePath.startsWith(r), 'Absolute route path "' + i.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath = i.relativePath.slice(r.length));
                    var l = J([r, i.relativePath]),
                        u = n.concat(i);
                    e.children && e.children.length > 0 && (j(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + l + '".'), I(e.children, t, u, l)), (null != e.path || e.index) && t.push({
                        path: l,
                        score: $(l, e.index),
                        routesMeta: u
                    })
                };
                return e.forEach((function(e, t) {
                    var n;
                    if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
                        var r, o = function(e, t) {
                            var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (!n) {
                                if (Array.isArray(e) || (n = l(e)) || t && e && "number" === typeof e.length) {
                                    n && (e = n);
                                    var r = 0,
                                        a = function() {};
                                    return {
                                        s: a,
                                        n: function() {
                                            return r >= e.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: e[r++]
                                            }
                                        },
                                        e: function(e) {
                                            throw e
                                        },
                                        f: a
                                    }
                                }
                                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }
                            var o, i = !0,
                                u = !1;
                            return {
                                s: function() {
                                    n = n.call(e)
                                },
                                n: function() {
                                    var e = n.next();
                                    return i = e.done, e
                                },
                                e: function(e) {
                                    u = !0, o = e
                                },
                                f: function() {
                                    try {
                                        i || null == n.return || n.return()
                                    } finally {
                                        if (u) throw o
                                    }
                                }
                            }
                        }(z(e.path));
                        try {
                            for (o.s(); !(r = o.n()).done;) {
                                var i = r.value;
                                a(e, t, i)
                            }
                        } catch (u) {
                            o.e(u)
                        } finally {
                            o.f()
                        }
                    } else a(e, t)
                })), t
            }

            function z(e) {
                var t = e.split("/");
                if (0 === t.length) return [];
                var n, r = o(n = t) || c(n) || l(n) || u(),
                    a = r[0],
                    i = r.slice(1),
                    s = a.endsWith("?"),
                    d = a.replace(/\?$/, "");
                if (0 === i.length) return s ? [d, ""] : [d];
                var p = z(i.join("/")),
                    h = [];
                return h.push.apply(h, f(p.map((function(e) {
                    return "" === e ? d : [d, e].join("/")
                })))), s && h.push.apply(h, f(p)), h.map((function(t) {
                    return e.startsWith("/") && "" === t ? "/" : t
                }))
            }
            var D = /^:\w+$/,
                V = 3,
                F = 2,
                U = 1,
                B = 10,
                W = -2,
                H = function(e) {
                    return "*" === e
                };

            function $(e, t) {
                var n = e.split("/"),
                    r = n.length;
                return n.some(H) && (r += W), t && (r += F), n.filter((function(e) {
                    return !H(e)
                })).reduce((function(e, t) {
                    return e + (D.test(t) ? V : "" === t ? U : B)
                }), r)
            }

            function Q(e, t) {
                for (var n = e.routesMeta, r = {}, a = "/", o = [], i = 0; i < n.length; ++i) {
                    var l = n[i],
                        u = i === n.length - 1,
                        s = "/" === a ? t : t.slice(a.length) || "/",
                        c = K({
                            path: l.relativePath,
                            caseSensitive: l.caseSensitive,
                            end: u
                        }, s);
                    if (!c) return null;
                    Object.assign(r, c.params);
                    var f = l.route;
                    o.push({
                        params: r,
                        pathname: J([a, c.pathname]),
                        pathnameBase: ee(J([a, c.pathnameBase])),
                        route: f
                    }), "/" !== c.pathnameBase && (a = J([a, c.pathnameBase]))
                }
                return o
            }

            function K(e, t) {
                "string" === typeof e && (e = {
                    path: e,
                    caseSensitive: !1,
                    end: !0
                });
                var n = function(e, t, n) {
                        void 0 === t && (t = !1);
                        void 0 === n && (n = !0);
                        N("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
                        var r = [],
                            a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (function(e, t) {
                                return r.push(t), "/([^\\/]+)"
                            }));
                        e.endsWith("*") ? (r.push("*"), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
                        var o = new RegExp(a, t ? void 0 : "i");
                        return [o, r]
                    }(e.path, e.caseSensitive, e.end),
                    r = s(n, 2),
                    a = r[0],
                    o = r[1],
                    i = t.match(a);
                if (!i) return null;
                var l = i[0],
                    u = l.replace(/(.)\/+$/, "$1"),
                    c = i.slice(1);
                return {
                    params: o.reduce((function(e, t, n) {
                        if ("*" === t) {
                            var r = c[n] || "";
                            u = l.slice(0, l.length - r.length).replace(/(.)\/+$/, "$1")
                        }
                        return e[t] = function(e, t) {
                            try {
                                return decodeURIComponent(e)
                            } catch (n) {
                                return N(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."), e
                            }
                        }(c[n] || "", t), e
                    }), {}),
                    pathname: l,
                    pathnameBase: u,
                    pattern: e
                }
            }

            function Y(e) {
                try {
                    return decodeURI(e)
                } catch (t) {
                    return N(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
                }
            }

            function q(e, t) {
                if ("/" === t) return e;
                if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
                var n = t.endsWith("/") ? t.length - 1 : t.length,
                    r = e.charAt(n);
                return r && "/" !== r ? null : e.slice(n) || "/"
            }

            function X(e, t, n, r) {
                return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
            }

            function G(e) {
                return e.filter((function(e, t) {
                    return 0 === t || e.route.path && e.route.path.length > 0
                }))
            }

            function Z(e, t, n, r) {
                var a;
                void 0 === r && (r = !1), "string" === typeof e ? a = M(e) : (j(!(a = C({}, e)).pathname || !a.pathname.includes("?"), X("?", "pathname", "search", a)), j(!a.pathname || !a.pathname.includes("#"), X("#", "pathname", "hash", a)), j(!a.search || !a.search.includes("#"), X("#", "search", "hash", a)));
                var o, i = "" === e || "" === a.pathname,
                    l = i ? "/" : a.pathname;
                if (r || null == l) o = n;
                else {
                    var u = t.length - 1;
                    if (l.startsWith("..")) {
                        for (var s = l.split("/");
                            ".." === s[0];) s.shift(), u -= 1;
                        a.pathname = s.join("/")
                    }
                    o = u >= 0 ? t[u] : "/"
                }
                var c = function(e, t) {
                        void 0 === t && (t = "/");
                        var n = "string" === typeof e ? M(e) : e,
                            r = n.pathname,
                            a = n.search,
                            o = void 0 === a ? "" : a,
                            i = n.hash,
                            l = void 0 === i ? "" : i,
                            u = r ? r.startsWith("/") ? r : function(e, t) {
                                var n = t.replace(/\/+$/, "").split("/");
                                return e.split("/").forEach((function(e) {
                                    ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e)
                                })), n.length > 1 ? n.join("/") : "/"
                            }(r, t) : t;
                        return {
                            pathname: u,
                            search: te(o),
                            hash: ne(l)
                        }
                    }(a, o),
                    f = l && "/" !== l && l.endsWith("/"),
                    d = (i || "." === l) && n.endsWith("/");
                return c.pathname.endsWith("/") || !f && !d || (c.pathname += "/"), c
            }
            var J = function(e) {
                    return e.join("/").replace(/\/\/+/g, "/")
                },
                ee = function(e) {
                    return e.replace(/\/+$/, "").replace(/^\/*/, "/")
                },
                te = function(e) {
                    return e && "?" !== e ? e.startsWith("?") ? e : "?" + e : ""
                },
                ne = function(e) {
                    return e && "#" !== e ? e.startsWith("#") ? e : "#" + e : ""
                },
                re = function(e) {
                    g(n, e);
                    var t = S(n);

                    function n() {
                        return d(this, n), t.apply(this, arguments)
                    }
                    return m(n)
                }(E(Error));

            function ae(e) {
                return null != e && "number" === typeof e.status && "string" === typeof e.statusText && "boolean" === typeof e.internal && "data" in e
            }
            var oe = ["post", "put", "patch", "delete"],
                ie = (new Set(oe), ["get"].concat(oe));
            new Set(ie), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
            Symbol("deferred");

            function le() {
                return le = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, le.apply(this, arguments)
            }
            var ue = r.startTransition,
                se = t.createContext(null);
            var ce = t.createContext(null);
            var fe = t.createContext(null);
            var de = t.createContext(null);
            var pe = t.createContext(null);
            var he = t.createContext({
                outlet: null,
                matches: [],
                isDataRoute: !1
            });
            var ve = t.createContext(null);

            function me() {
                return null != t.useContext(pe)
            }

            function ye() {
                return me() || j(!1), t.useContext(pe).location
            }

            function ge(e) {
                t.useContext(de).static || t.useLayoutEffect(e)
            }

            function be() {
                return t.useContext(he).isDataRoute ? function() {
                    var e = Ne(ke.UseNavigateStable).router,
                        n = Oe(Ee.UseNavigateStable),
                        r = t.useRef(!1);
                    ge((function() {
                        r.current = !0
                    }));
                    var a = t.useCallback((function(t, a) {
                        void 0 === a && (a = {}), r.current && ("number" === typeof t ? e.navigate(t) : e.navigate(t, le({
                            fromRouteId: n
                        }, a)))
                    }), [e, n]);
                    return a
                }() : function() {
                    me() || j(!1);
                    var e = t.useContext(se),
                        n = t.useContext(de),
                        r = n.basename,
                        a = n.navigator,
                        o = t.useContext(he).matches,
                        i = ye().pathname,
                        l = JSON.stringify(G(o).map((function(e) {
                            return e.pathnameBase
                        }))),
                        u = t.useRef(!1);
                    return ge((function() {
                        u.current = !0
                    })), t.useCallback((function(t, n) {
                        if (void 0 === n && (n = {}), u.current)
                            if ("number" !== typeof t) {
                                var o = Z(t, JSON.parse(l), i, "path" === n.relative);
                                null == e && "/" !== r && (o.pathname = "/" === o.pathname ? r : J([r, o.pathname])), (n.replace ? a.replace : a.push)(o, n.state, n)
                            } else a.go(t)
                    }), [r, a, l, i, e])
                }()
            }

            function we(e, n) {
                var r = (void 0 === n ? {} : n).relative,
                    a = t.useContext(he).matches,
                    o = ye().pathname,
                    i = JSON.stringify(G(a).map((function(e) {
                        return e.pathnameBase
                    })));
                return t.useMemo((function() {
                    return Z(e, JSON.parse(i), o, "path" === r)
                }), [e, i, o, r])
            }

            function xe(n, r, a) {
                me() || j(!1);
                var o, i = t.useContext(de).navigator,
                    l = t.useContext(he).matches,
                    u = l[l.length - 1],
                    s = u ? u.params : {},
                    c = (u && u.pathname, u ? u.pathnameBase : "/"),
                    f = (u && u.route, ye());
                if (r) {
                    var d, p = "string" === typeof r ? M(r) : r;
                    "/" === c || (null == (d = p.pathname) ? void 0 : d.startsWith(c)) || j(!1), o = p
                } else o = f;
                var h = o.pathname || "/",
                    v = A(n, {
                        pathname: "/" === c ? h : h.slice(c.length) || "/"
                    });
                var m = je(v && v.map((function(e) {
                    return Object.assign({}, e, {
                        params: Object.assign({}, s, e.params),
                        pathname: J([c, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]),
                        pathnameBase: "/" === e.pathnameBase ? c : J([c, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
                    })
                })), l, a);
                return r && m ? t.createElement(pe.Provider, {
                    value: {
                        location: le({
                            pathname: "/",
                            search: "",
                            hash: "",
                            state: null,
                            key: "default"
                        }, o),
                        navigationType: e.Pop
                    }
                }, m) : m
            }

            function Se() {
                var e = function() {
                        var e, n = t.useContext(ve),
                            r = Le(Ee.UseRouteError),
                            a = Oe(Ee.UseRouteError);
                        if (n) return n;
                        return null == (e = r.errors) ? void 0 : e[a]
                    }(),
                    n = ae(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
                    r = e instanceof Error ? e.stack : null,
                    a = "rgba(200,200,200, 0.5)",
                    o = {
                        padding: "0.5rem",
                        backgroundColor: a
                    };
                return t.createElement(t.Fragment, null, t.createElement("h2", null, "Unexpected Application Error!"), t.createElement("h3", {
                    style: {
                        fontStyle: "italic"
                    }
                }, n), r ? t.createElement("pre", {
                    style: o
                }, r) : null, null)
            }
            var ke, Ee, Ce = t.createElement(Se, null),
                Pe = function(e) {
                    g(r, e);
                    var n = S(r);

                    function r(e) {
                        var t;
                        return d(this, r), (t = n.call(this, e)).state = {
                            location: e.location,
                            revalidation: e.revalidation,
                            error: e.error
                        }, t
                    }
                    return m(r, [{
                        key: "componentDidCatch",
                        value: function(e, t) {
                            console.error("React Router caught the following error during render", e, t)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.error ? t.createElement(he.Provider, {
                                value: this.props.routeContext
                            }, t.createElement(ve.Provider, {
                                value: this.state.error,
                                children: this.props.component
                            })) : this.props.children
                        }
                    }], [{
                        key: "getDerivedStateFromError",
                        value: function(e) {
                            return {
                                error: e
                            }
                        }
                    }, {
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? {
                                error: e.error,
                                location: e.location,
                                revalidation: e.revalidation
                            } : {
                                error: e.error || t.error,
                                location: t.location,
                                revalidation: e.revalidation || t.revalidation
                            }
                        }
                    }]), r
                }(t.Component);

            function Te(e) {
                var n = e.routeContext,
                    r = e.match,
                    a = e.children,
                    o = t.useContext(se);
                return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), t.createElement(he.Provider, {
                    value: n
                }, a)
            }

            function je(e, n, r) {
                var a;
                if (void 0 === n && (n = []), void 0 === r && (r = null), null == e) {
                    var o;
                    if (null == (o = r) || !o.errors) return null;
                    e = r.matches
                }
                var i = e,
                    l = null == (a = r) ? void 0 : a.errors;
                if (null != l) {
                    var u = i.findIndex((function(e) {
                        return e.route.id && (null == l ? void 0 : l[e.route.id])
                    }));
                    u >= 0 || j(!1), i = i.slice(0, Math.min(i.length, u + 1))
                }
                return i.reduceRight((function(e, a, o) {
                    var u = a.route.id ? null == l ? void 0 : l[a.route.id] : null,
                        s = null;
                    r && (s = a.route.errorElement || Ce);
                    var c = n.concat(i.slice(0, o + 1)),
                        f = function() {
                            var n;
                            return n = u ? s : a.route.Component ? t.createElement(a.route.Component, null) : a.route.element ? a.route.element : e, t.createElement(Te, {
                                match: a,
                                routeContext: {
                                    outlet: e,
                                    matches: c,
                                    isDataRoute: null != r
                                },
                                children: n
                            })
                        };
                    return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === o) ? t.createElement(Pe, {
                        location: r.location,
                        revalidation: r.revalidation,
                        component: s,
                        error: u,
                        children: f(),
                        routeContext: {
                            outlet: null,
                            matches: c,
                            isDataRoute: !0
                        }
                    }) : f()
                }), null)
            }

            function Ne(e) {
                var n = t.useContext(se);
                return n || j(!1), n
            }

            function Le(e) {
                var n = t.useContext(ce);
                return n || j(!1), n
            }

            function Oe(e) {
                var n = function(e) {
                        var n = t.useContext(he);
                        return n || j(!1), n
                    }(),
                    r = n.matches[n.matches.length - 1];
                return r.route.id || j(!1), r.route.id
            }! function(e) {
                e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate"
            }(ke || (ke = {})),
            function(e) {
                e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId"
            }(Ee || (Ee = {}));
            var Re;

            function Me(e) {
                j(!1)
            }

            function _e(n) {
                var r = n.basename,
                    a = void 0 === r ? "/" : r,
                    o = n.children,
                    i = void 0 === o ? null : o,
                    l = n.location,
                    u = n.navigationType,
                    s = void 0 === u ? e.Pop : u,
                    c = n.navigator,
                    f = n.static,
                    d = void 0 !== f && f;
                me() && j(!1);
                var p = a.replace(/^\/*/, "/"),
                    h = t.useMemo((function() {
                        return {
                            basename: p,
                            navigator: c,
                            static: d
                        }
                    }), [p, c, d]);
                "string" === typeof l && (l = M(l));
                var v = l,
                    m = v.pathname,
                    y = void 0 === m ? "/" : m,
                    g = v.search,
                    b = void 0 === g ? "" : g,
                    w = v.hash,
                    x = void 0 === w ? "" : w,
                    S = v.state,
                    k = void 0 === S ? null : S,
                    E = v.key,
                    C = void 0 === E ? "default" : E,
                    P = t.useMemo((function() {
                        var e = q(y, p);
                        return null == e ? null : {
                            location: {
                                pathname: e,
                                search: b,
                                hash: x,
                                state: k,
                                key: C
                            },
                            navigationType: s
                        }
                    }), [p, y, b, x, k, C, s]);
                return null == P ? null : t.createElement(de.Provider, {
                    value: h
                }, t.createElement(pe.Provider, {
                    children: i,
                    value: P
                }))
            }

            function Ae(e) {
                var t = e.children,
                    n = e.location;
                return function(e, t) {
                    return xe(e, t)
                }(ze(t), n)
            }! function(e) {
                e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error"
            }(Re || (Re = {}));
            var Ie = new Promise((function() {}));
            t.Component;

            function ze(e, n) {
                void 0 === n && (n = []);
                var r = [];
                return t.Children.forEach(e, (function(e, a) {
                    if (t.isValidElement(e)) {
                        var o = [].concat(f(n), [a]);
                        if (e.type !== t.Fragment) {
                            e.type !== Me && j(!1), e.props.index && e.props.children && j(!1);
                            var i = {
                                id: e.props.id || o.join("-"),
                                caseSensitive: e.props.caseSensitive,
                                element: e.props.element,
                                Component: e.props.Component,
                                index: e.props.index,
                                path: e.props.path,
                                loader: e.props.loader,
                                action: e.props.action,
                                errorElement: e.props.errorElement,
                                ErrorBoundary: e.props.ErrorBoundary,
                                hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement,
                                shouldRevalidate: e.props.shouldRevalidate,
                                handle: e.props.handle,
                                lazy: e.props.lazy
                            };
                            e.props.children && (i.children = ze(e.props.children, o)), r.push(i)
                        } else r.push.apply(r, ze(e.props.children, o))
                    }
                })), r
            }

            function De() {
                return De = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, De.apply(this, arguments)
            }

            function Ve(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }
            var Fe = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
                Ue = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];

            function Be(e) {
                var n, r = e.basename,
                    a = e.children,
                    o = e.future,
                    i = e.window,
                    l = t.useRef();
                null == l.current && (l.current = (void 0 === (n = {
                    window: i,
                    v5Compat: !0
                }) && (n = {}), _((function(e, t) {
                    var n = e.location;
                    return O("", {
                        pathname: n.pathname,
                        search: n.search,
                        hash: n.hash
                    }, t.state && t.state.usr || null, t.state && t.state.key || "default")
                }), (function(e, t) {
                    return "string" === typeof t ? t : R(t)
                }), null, n)));
                var u = l.current,
                    c = s(t.useState({
                        action: u.action,
                        location: u.location
                    }), 2),
                    f = c[0],
                    d = c[1],
                    p = (o || {}).v7_startTransition,
                    h = t.useCallback((function(e) {
                        p && ue ? ue((function() {
                            return d(e)
                        })) : d(e)
                    }), [d, p]);
                return t.useLayoutEffect((function() {
                    return u.listen(h)
                }), [u, h]), t.createElement(_e, {
                    basename: r,
                    children: a,
                    location: f.location,
                    navigationType: f.action,
                    navigator: u
                })
            }
            var We = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement,
                He = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
                $e = t.forwardRef((function(e, n) {
                    var r, a = e.onClick,
                        o = e.relative,
                        i = e.reloadDocument,
                        l = e.replace,
                        u = e.state,
                        s = e.target,
                        c = e.to,
                        f = e.preventScrollReset,
                        d = Ve(e, Fe),
                        p = t.useContext(de).basename,
                        h = !1;
                    if ("string" === typeof c && He.test(c) && (r = c, We)) try {
                        var v = new URL(window.location.href),
                            m = c.startsWith("//") ? new URL(v.protocol + c) : new URL(c),
                            y = q(m.pathname, p);
                        m.origin === v.origin && null != y ? c = y + m.search + m.hash : h = !0
                    } catch (w) {}
                    var g = function(e, n) {
                            var r = (void 0 === n ? {} : n).relative;
                            me() || j(!1);
                            var a = t.useContext(de),
                                o = a.basename,
                                i = a.navigator,
                                l = we(e, {
                                    relative: r
                                }),
                                u = l.hash,
                                s = l.pathname,
                                c = l.search,
                                f = s;
                            return "/" !== o && (f = "/" === s ? o : J([o, s])), i.createHref({
                                pathname: f,
                                search: c,
                                hash: u
                            })
                        }(c, {
                            relative: o
                        }),
                        b = function(e, n) {
                            var r = void 0 === n ? {} : n,
                                a = r.target,
                                o = r.replace,
                                i = r.state,
                                l = r.preventScrollReset,
                                u = r.relative,
                                s = be(),
                                c = ye(),
                                f = we(e, {
                                    relative: u
                                });
                            return t.useCallback((function(t) {
                                if (function(e, t) {
                                        return 0 === e.button && (!t || "_self" === t) && ! function(e) {
                                            return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                                        }(e)
                                    }(t, a)) {
                                    t.preventDefault();
                                    var n = void 0 !== o ? o : R(c) === R(f);
                                    s(e, {
                                        replace: n,
                                        state: i,
                                        preventScrollReset: l,
                                        relative: u
                                    })
                                }
                            }), [c, s, f, o, i, a, e, l, u])
                        }(c, {
                            replace: l,
                            state: u,
                            target: s,
                            preventScrollReset: f,
                            relative: o
                        });
                    return t.createElement("a", De({}, d, {
                        href: r || g,
                        onClick: h || i ? a : function(e) {
                            a && a(e), e.defaultPrevented || b(e)
                        },
                        ref: n,
                        target: s
                    }))
                }));
            var Qe = t.forwardRef((function(e, n) {
                var r = e["aria-current"],
                    a = void 0 === r ? "page" : r,
                    o = e.caseSensitive,
                    i = void 0 !== o && o,
                    l = e.className,
                    u = void 0 === l ? "" : l,
                    s = e.end,
                    c = void 0 !== s && s,
                    f = e.style,
                    d = e.to,
                    p = e.children,
                    h = Ve(e, Ue),
                    v = we(d, {
                        relative: h.relative
                    }),
                    m = ye(),
                    y = t.useContext(ce),
                    g = t.useContext(de).navigator,
                    b = g.encodeLocation ? g.encodeLocation(v).pathname : v.pathname,
                    w = m.pathname,
                    x = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
                i || (w = w.toLowerCase(), x = x ? x.toLowerCase() : null, b = b.toLowerCase());
                var S, k = w === b || !c && w.startsWith(b) && "/" === w.charAt(b.length),
                    E = null != x && (x === b || !c && x.startsWith(b) && "/" === x.charAt(b.length)),
                    C = k ? a : void 0;
                S = "function" === typeof u ? u({
                    isActive: k,
                    isPending: E
                }) : [u, k ? "active" : null, E ? "pending" : null].filter(Boolean).join(" ");
                var P = "function" === typeof f ? f({
                    isActive: k,
                    isPending: E
                }) : f;
                return t.createElement($e, De({}, h, {
                    "aria-current": C,
                    className: S,
                    ref: n,
                    style: P,
                    to: d
                }), "function" === typeof p ? p({
                    isActive: k,
                    isPending: E
                }) : p)
            }));
            var Ke, Ye;
            (function(e) {
                e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher"
            })(Ke || (Ke = {})),
            function(e) {
                e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
            }(Ye || (Ye = {}));
            var qe = function() {
                return qe = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e
                }, qe.apply(this, arguments)
            };
            var Xe = "",
                Ge = null,
                Ze = null,
                Je = null;

            function et() {
                Xe = "", null !== Ge && Ge.disconnect(), null !== Ze && (window.clearTimeout(Ze), Ze = null)
            }

            function tt(e) {
                return ["BUTTON", "INPUT", "SELECT", "TEXTAREA"].includes(e.tagName) && !e.hasAttribute("disabled") || ["A", "AREA"].includes(e.tagName) && e.hasAttribute("href")
            }

            function nt() {
                var e = null;
                if ("#" === Xe) e = document.body;
                else {
                    var t = Xe.replace("#", "");
                    null === (e = document.getElementById(t)) && "#top" === Xe && (e = document.body)
                }
                if (null !== e) {
                    Je(e);
                    var n = e.getAttribute("tabindex");
                    return null !== n || tt(e) || e.setAttribute("tabindex", -1), e.focus({
                        preventScroll: !0
                    }), null !== n || tt(e) || (e.blur(), e.removeAttribute("tabindex")), et(), !0
                }
                return !1
            }

            function rt(e) {
                return t.forwardRef((function(n, r) {
                    var a = "";
                    "string" === typeof n.to && n.to.includes("#") ? a = "#" + n.to.split("#").slice(1).join("#") : "object" === typeof n.to && "string" === typeof n.to.hash && (a = n.to.hash);
                    var o = {};
                    e === Qe && (o.isActive = function(e, t) {
                        return e && e.isExact && t.hash === a
                    });
                    var i = function(e, t) {
                        var n = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                            var a = 0;
                            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
                        }
                        return n
                    }(n, ["scroll", "smooth", "timeout", "elementId"]);
                    return t.createElement(e, qe({}, o, i, {
                        onClick: function(e) {
                            var t;
                            et(), Xe = n.elementId ? "#" + n.elementId : a, n.onClick && n.onClick(e), "" === Xe || e.defaultPrevented || 0 !== e.button || n.target && "_self" !== n.target || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || (Je = n.scroll || function(e) {
                                return n.smooth ? e.scrollIntoView({
                                    behavior: "smooth"
                                }) : e.scrollIntoView()
                            }, t = n.timeout, window.setTimeout((function() {
                                !1 === nt() && (null === Ge && (Ge = new MutationObserver(nt)), Ge.observe(document, {
                                    attributes: !0,
                                    childList: !0,
                                    subtree: !0
                                }), Ze = window.setTimeout((function() {
                                    et()
                                }), t || 1e4))
                            }), 0))
                        },
                        ref: r
                    }), n.children)
                }))
            }
            var at = rt($e),
                ot = (rt(Qe), n.p + "static/media/logo.b2d21a8caae5f72b20b4.png"),
                it = n(694),
                lt = n.n(it),
                ut = function(e, t) {
                    return ut = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }, ut(e, t)
                };

            function st(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                ut(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var ct = function() {
                return ct = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e
                }, ct.apply(this, arguments)
            };

            function ft(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                    var a = 0;
                    for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
                }
                return n
            }
            Object.create;

            function dt(e) {
                var t = "function" === typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" === typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function pt(e, t) {
                var n = "function" === typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, a, o = n.call(e),
                    i = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = o.next()).done;) i.push(r.value)
                } catch (l) {
                    a = {
                        error: l
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (a) throw a.error
                    }
                }
                return i
            }

            function ht(e, t, n) {
                if (n || 2 === arguments.length)
                    for (var r, a = 0, o = t.length; a < o; a++) !r && a in t || (r || (r = Array.prototype.slice.call(t, 0, a)), r[a] = t[a]);
                return e.concat(r || Array.prototype.slice.call(t))
            }
            Object.create;
            var vt = "production",
                mt = function(e) {
                    return {
                        isEnabled: function(t) {
                            return e.some((function(e) {
                                return !!t[e]
                            }))
                        }
                    }
                },
                yt = {
                    measureLayout: mt(["layout", "layoutId", "drag"]),
                    animation: mt(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
                    exit: mt(["exit"]),
                    drag: mt(["drag", "dragControls"]),
                    focus: mt(["whileFocus"]),
                    hover: mt(["whileHover", "onHoverStart", "onHoverEnd"]),
                    tap: mt(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
                    pan: mt(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
                    inView: mt(["whileInView", "onViewportEnter", "onViewportLeave"])
                };
            var gt = function() {},
                bt = function() {};
            var wt = (0, t.createContext)({
                    strict: !1
                }),
                xt = Object.keys(yt),
                St = xt.length;
            var kt = (0, t.createContext)({
                    transformPagePoint: function(e) {
                        return e
                    },
                    isStatic: !1,
                    reducedMotion: "never"
                }),
                Et = (0, t.createContext)({});
            var Ct = (0, t.createContext)(null),
                Pt = "undefined" !== typeof document,
                Tt = Pt ? t.useLayoutEffect : t.useEffect,
                jt = {
                    current: null
                },
                Nt = !1;

            function Lt() {
                return !Nt && function() {
                    if (Nt = !0, Pt)
                        if (window.matchMedia) {
                            var e = window.matchMedia("(prefers-reduced-motion)"),
                                t = function() {
                                    return jt.current = e.matches
                                };
                            e.addListener(t), t()
                        } else jt.current = !1
                }(), pt((0, t.useState)(jt.current), 1)[0]
            }

            function Ot(e, n, r, a) {
                var o = (0, t.useContext)(wt),
                    i = (0, t.useContext)(Et).visualElement,
                    l = (0, t.useContext)(Ct),
                    u = function() {
                        var e = Lt(),
                            n = (0, t.useContext)(kt).reducedMotion;
                        return "never" !== n && ("always" === n || e)
                    }(),
                    s = (0, t.useRef)(void 0);
                a || (a = o.renderer), !s.current && a && (s.current = a(e, {
                    visualState: n,
                    parent: i,
                    props: r,
                    presenceId: null === l || void 0 === l ? void 0 : l.id,
                    blockInitialAnimation: !1 === (null === l || void 0 === l ? void 0 : l.initial),
                    shouldReduceMotion: u
                }));
                var c = s.current;
                return Tt((function() {
                    null === c || void 0 === c || c.syncRender()
                })), (0, t.useEffect)((function() {
                    var e;
                    null === (e = null === c || void 0 === c ? void 0 : c.animationState) || void 0 === e || e.animateChanges()
                })), Tt((function() {
                    return function() {
                        return null === c || void 0 === c ? void 0 : c.notifyUnmount()
                    }
                }), []), c
            }

            function Rt(e) {
                return "object" === typeof e && Object.prototype.hasOwnProperty.call(e, "current")
            }

            function Mt(e) {
                return Array.isArray(e)
            }

            function _t(e) {
                return "string" === typeof e || Mt(e)
            }

            function At(e, t, n, r, a) {
                var o;
                return void 0 === r && (r = {}), void 0 === a && (a = {}), "function" === typeof t && (t = t(null !== n && void 0 !== n ? n : e.custom, r, a)), "string" === typeof t && (t = null === (o = e.variants) || void 0 === o ? void 0 : o[t]), "function" === typeof t && (t = t(null !== n && void 0 !== n ? n : e.custom, r, a)), t
            }

            function It(e, t, n) {
                var r = e.getProps();
                return At(r, t, null !== n && void 0 !== n ? n : r.custom, function(e) {
                    var t = {};
                    return e.forEachValue((function(e, n) {
                        return t[n] = e.get()
                    })), t
                }(e), function(e) {
                    var t = {};
                    return e.forEachValue((function(e, n) {
                        return t[n] = e.getVelocity()
                    })), t
                }(e))
            }

            function zt(e) {
                var t;
                return "function" === typeof(null === (t = e.animate) || void 0 === t ? void 0 : t.start) || _t(e.initial) || _t(e.animate) || _t(e.whileHover) || _t(e.whileDrag) || _t(e.whileTap) || _t(e.whileFocus) || _t(e.exit)
            }

            function Dt(e) {
                return Boolean(zt(e) || e.variants)
            }

            function Vt(e) {
                var n = function(e, t) {
                        if (zt(e)) {
                            var n = e.initial,
                                r = e.animate;
                            return {
                                initial: !1 === n || _t(n) ? n : void 0,
                                animate: _t(r) ? r : void 0
                            }
                        }
                        return !1 !== e.inherit ? t : {}
                    }(e, (0, t.useContext)(Et)),
                    r = n.initial,
                    a = n.animate;
                return (0, t.useMemo)((function() {
                    return {
                        initial: r,
                        animate: a
                    }
                }), [Ft(r), Ft(a)])
            }

            function Ft(e) {
                return Array.isArray(e) ? e.join(" ") : e
            }

            function Ut(e) {
                var n = (0, t.useRef)(null);
                return null === n.current && (n.current = e()), n.current
            }
            var Bt = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                },
                Wt = 1;
            var Ht = (0, t.createContext)({}),
                $t = (0, t.createContext)({});
            var Qt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return st(t, e), t.prototype.getSnapshotBeforeUpdate = function() {
                    return this.updateProps(), null
                }, t.prototype.componentDidUpdate = function() {}, t.prototype.updateProps = function() {
                    var e = this.props,
                        t = e.visualElement,
                        n = e.props;
                    t && t.setProps(n)
                }, t.prototype.render = function() {
                    return this.props.children
                }, t
            }(t.Component);

            function Kt(e) {
                var n = e.preloadedFeatures,
                    r = e.createVisualElement,
                    a = e.projectionNodeConstructor,
                    o = e.useRender,
                    i = e.useVisualState,
                    l = e.Component;
                return n && function(e) {
                    for (var t in e) null !== e[t] && ("projectionNodeConstructor" === t ? yt.projectionNodeConstructor = e[t] : yt[t].Component = e[t])
                }(n), (0, t.forwardRef)((function(e, u) {
                    var s = function(e) {
                        var n, r = e.layoutId,
                            a = null === (n = (0, t.useContext)(Ht)) || void 0 === n ? void 0 : n.id;
                        return a && void 0 !== r ? a + "-" + r : r
                    }(e);
                    e = ct(ct({}, e), {
                        layoutId: s
                    });
                    var c = (0, t.useContext)(kt),
                        f = null,
                        d = Vt(e),
                        p = c.isStatic ? void 0 : Ut((function() {
                            if (Bt.hasEverUpdated) return Wt++
                        })),
                        h = i(e, c.isStatic);
                    return !c.isStatic && Pt && (d.visualElement = Ot(l, h, ct(ct({}, c), e), r), function(e, n, r, a) {
                        var o, i = n.layoutId,
                            l = n.layout,
                            u = n.drag,
                            s = n.dragConstraints,
                            c = n.layoutScroll,
                            f = (0, t.useContext)($t);
                        a && r && !(null === r || void 0 === r ? void 0 : r.projection) && (r.projection = new a(e, r.getLatestValues(), null === (o = r.parent) || void 0 === o ? void 0 : o.projection), r.projection.setOptions({
                            layoutId: i,
                            layout: l,
                            alwaysMeasureLayout: Boolean(u) || s && Rt(s),
                            visualElement: r,
                            scheduleRender: function() {
                                return r.scheduleRender()
                            },
                            animationType: "string" === typeof l ? l : "both",
                            initialPromotionConfig: f,
                            layoutScroll: c
                        }))
                    }(p, e, d.visualElement, a || yt.projectionNodeConstructor), f = function(e, n, r) {
                        var a = [],
                            o = (0, t.useContext)(wt);
                        if (!n) return null;
                        "production" !== vt && r && o.strict && bt(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
                        for (var i = 0; i < St; i++) {
                            var l = xt[i],
                                u = yt[l],
                                s = u.isEnabled,
                                c = u.Component;
                            s(e) && c && a.push(t.createElement(c, ct({
                                key: l
                            }, e, {
                                visualElement: n
                            })))
                        }
                        return a
                    }(e, d.visualElement, n)), t.createElement(Qt, {
                        visualElement: d.visualElement,
                        props: ct(ct({}, c), e)
                    }, f, t.createElement(Et.Provider, {
                        value: d
                    }, o(l, e, p, function(e, n, r) {
                        return (0, t.useCallback)((function(t) {
                            var a;
                            t && (null === (a = e.mount) || void 0 === a || a.call(e, t)), n && (t ? n.mount(t) : n.unmount()), r && ("function" === typeof r ? r(t) : Rt(r) && (r.current = t))
                        }), [n])
                    }(h, d.visualElement, u), h, c.isStatic, d.visualElement)))
                }))
            }

            function Yt(e) {
                function t(t, n) {
                    return void 0 === n && (n = {}), Kt(e(t, n))
                }
                if ("undefined" === typeof Proxy) return t;
                var n = new Map;
                return new Proxy(t, {
                    get: function(e, r) {
                        return n.has(r) || n.set(r, t(r)), n.get(r)
                    }
                })
            }
            var qt = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];

            function Xt(e) {
                return "string" === typeof e && !e.includes("-") && !!(qt.indexOf(e) > -1 || /[A-Z]/.test(e))
            }
            var Gt = {};
            var Zt = ["", "X", "Y", "Z"],
                Jt = ["transformPerspective", "x", "y", "z"];

            function en(e, t) {
                return Jt.indexOf(e) - Jt.indexOf(t)
            }["translate", "scale", "rotate", "skew"].forEach((function(e) {
                return Zt.forEach((function(t) {
                    return Jt.push(e + t)
                }))
            }));
            var tn = new Set(Jt);

            function nn(e) {
                return tn.has(e)
            }
            var rn = new Set(["originX", "originY", "originZ"]);

            function an(e) {
                return rn.has(e)
            }

            function on(e, t) {
                var n = t.layout,
                    r = t.layoutId;
                return nn(e) || an(e) || (n || void 0 !== r) && (!!Gt[e] || "opacity" === e)
            }
            var ln = function(e) {
                    return Boolean(null !== e && "object" === typeof e && e.getVelocity)
                },
                un = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                };

            function sn(e) {
                return e.startsWith("--")
            }
            var cn = function(e, t) {
                    return t && "number" === typeof e ? t.transform(e) : e
                },
                fn = function(e, t) {
                    return function(n) {
                        return Math.max(Math.min(n, t), e)
                    }
                },
                dn = function(e) {
                    return e % 1 ? Number(e.toFixed(5)) : e
                },
                pn = /(-)?([\d]*\.?[\d])+/g,
                hn = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
                vn = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;

            function mn(e) {
                return "string" === typeof e
            }
            var yn = function(e) {
                    return {
                        test: function(t) {
                            return mn(t) && t.endsWith(e) && 1 === t.split(" ").length
                        },
                        parse: parseFloat,
                        transform: function(t) {
                            return "".concat(t).concat(e)
                        }
                    }
                },
                gn = yn("deg"),
                bn = yn("%"),
                wn = yn("px"),
                xn = yn("vh"),
                Sn = yn("vw"),
                kn = Object.assign(Object.assign({}, bn), {
                    parse: function(e) {
                        return bn.parse(e) / 100
                    },
                    transform: function(e) {
                        return bn.transform(100 * e)
                    }
                }),
                En = {
                    test: function(e) {
                        return "number" === typeof e
                    },
                    parse: parseFloat,
                    transform: function(e) {
                        return e
                    }
                },
                Cn = Object.assign(Object.assign({}, En), {
                    transform: fn(0, 1)
                }),
                Pn = Object.assign(Object.assign({}, En), {
                    default: 1
                }),
                Tn = ct(ct({}, En), {
                    transform: Math.round
                }),
                jn = {
                    borderWidth: wn,
                    borderTopWidth: wn,
                    borderRightWidth: wn,
                    borderBottomWidth: wn,
                    borderLeftWidth: wn,
                    borderRadius: wn,
                    radius: wn,
                    borderTopLeftRadius: wn,
                    borderTopRightRadius: wn,
                    borderBottomRightRadius: wn,
                    borderBottomLeftRadius: wn,
                    width: wn,
                    maxWidth: wn,
                    height: wn,
                    maxHeight: wn,
                    size: wn,
                    top: wn,
                    right: wn,
                    bottom: wn,
                    left: wn,
                    padding: wn,
                    paddingTop: wn,
                    paddingRight: wn,
                    paddingBottom: wn,
                    paddingLeft: wn,
                    margin: wn,
                    marginTop: wn,
                    marginRight: wn,
                    marginBottom: wn,
                    marginLeft: wn,
                    rotate: gn,
                    rotateX: gn,
                    rotateY: gn,
                    rotateZ: gn,
                    scale: Pn,
                    scaleX: Pn,
                    scaleY: Pn,
                    scaleZ: Pn,
                    skew: gn,
                    skewX: gn,
                    skewY: gn,
                    distance: wn,
                    translateX: wn,
                    translateY: wn,
                    translateZ: wn,
                    x: wn,
                    y: wn,
                    z: wn,
                    perspective: wn,
                    transformPerspective: wn,
                    opacity: Cn,
                    originX: kn,
                    originY: kn,
                    originZ: wn,
                    zIndex: Tn,
                    fillOpacity: Cn,
                    strokeOpacity: Cn,
                    numOctaves: Tn
                };

            function Nn(e, t, n, r) {
                var a, o = e.style,
                    i = e.vars,
                    l = e.transform,
                    u = e.transformKeys,
                    s = e.transformOrigin;
                u.length = 0;
                var c = !1,
                    f = !1,
                    d = !0;
                for (var p in t) {
                    var h = t[p];
                    if (sn(p)) i[p] = h;
                    else {
                        var v = jn[p],
                            m = cn(h, v);
                        if (nn(p)) {
                            if (c = !0, l[p] = m, u.push(p), !d) continue;
                            h !== (null !== (a = v.default) && void 0 !== a ? a : 0) && (d = !1)
                        } else an(p) ? (s[p] = m, f = !0) : o[p] = m
                    }
                }
                c ? o.transform = function(e, t, n, r) {
                    var a = e.transform,
                        o = e.transformKeys,
                        i = t.enableHardwareAcceleration,
                        l = void 0 === i || i,
                        u = t.allowTransformNone,
                        s = void 0 === u || u,
                        c = "";
                    o.sort(en);
                    for (var f = !1, d = o.length, p = 0; p < d; p++) {
                        var h = o[p];
                        c += "".concat(un[h] || h, "(").concat(a[h], ") "), "z" === h && (f = !0)
                    }
                    return !f && l ? c += "translateZ(0)" : c = c.trim(), r ? c = r(a, n ? "" : c) : s && n && (c = "none"), c
                }(e, n, d, r) : r ? o.transform = r({}, "") : !t.transform && o.transform && (o.transform = "none"), f && (o.transformOrigin = function(e) {
                    var t = e.originX,
                        n = void 0 === t ? "50%" : t,
                        r = e.originY,
                        a = void 0 === r ? "50%" : r,
                        o = e.originZ,
                        i = void 0 === o ? 0 : o;
                    return "".concat(n, " ").concat(a, " ").concat(i)
                }(s))
            }
            var Ln = function() {
                return {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {}
                }
            };

            function On(e, t, n) {
                for (var r in t) ln(t[r]) || on(r, n) || (e[r] = t[r])
            }

            function Rn(e, n, r) {
                var a = {};
                return On(a, e.style || {}, e), Object.assign(a, function(e, n, r) {
                    var a = e.transformTemplate;
                    return (0, t.useMemo)((function() {
                        var e = Ln();
                        Nn(e, n, {
                            enableHardwareAcceleration: !r
                        }, a);
                        var t = e.vars,
                            o = e.style;
                        return ct(ct({}, t), o)
                    }), [n])
                }(e, n, r)), e.transformValues && (a = e.transformValues(a)), a
            }

            function Mn(e, t, n) {
                var r = {},
                    a = Rn(e, t, n);
                return Boolean(e.drag) && !1 !== e.dragListener && (r.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = !0 === e.drag ? "none" : "pan-".concat("x" === e.drag ? "y" : "x")), r.style = a, r
            }
            var _n = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "layoutScroll"]);

            function An(e) {
                return _n.has(e)
            }
            var In, zn = function(e) {
                return !An(e)
            };
            try {
                (In = require("@emotion/is-prop-valid").default) && (zn = function(e) {
                    return e.startsWith("on") ? !An(e) : In(e)
                })
            } catch (oc) {}

            function Dn(e, t, n) {
                return "string" === typeof e ? e : wn.transform(t + n * e)
            }
            var Vn = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                Fn = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function Un(e, t, n, r) {
                var a = t.attrX,
                    o = t.attrY,
                    i = t.originX,
                    l = t.originY,
                    u = t.pathLength,
                    s = t.pathSpacing,
                    c = void 0 === s ? 1 : s,
                    f = t.pathOffset,
                    d = void 0 === f ? 0 : f;
                Nn(e, ft(t, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]), n, r), e.attrs = e.style, e.style = {};
                var p = e.attrs,
                    h = e.style,
                    v = e.dimensions;
                p.transform && (v && (h.transform = p.transform), delete p.transform), v && (void 0 !== i || void 0 !== l || h.transform) && (h.transformOrigin = function(e, t, n) {
                    var r = Dn(t, e.x, e.width),
                        a = Dn(n, e.y, e.height);
                    return "".concat(r, " ").concat(a)
                }(v, void 0 !== i ? i : .5, void 0 !== l ? l : .5)), void 0 !== a && (p.x = a), void 0 !== o && (p.y = o), void 0 !== u && function(e, t, n, r, a) {
                    void 0 === n && (n = 1), void 0 === r && (r = 0), void 0 === a && (a = !0), e.pathLength = 1;
                    var o = a ? Vn : Fn;
                    e[o.offset] = wn.transform(-r);
                    var i = wn.transform(t),
                        l = wn.transform(n);
                    e[o.array] = "".concat(i, " ").concat(l)
                }(p, u, c, d, !1)
            }
            var Bn = function() {
                return ct(ct({}, Ln()), {
                    attrs: {}
                })
            };

            function Wn(e, n) {
                var r = (0, t.useMemo)((function() {
                    var t = Bn();
                    return Un(t, n, {
                        enableHardwareAcceleration: !1
                    }, e.transformTemplate), ct(ct({}, t.attrs), {
                        style: ct({}, t.style)
                    })
                }), [n]);
                if (e.style) {
                    var a = {};
                    On(a, e.style, e), r.style = ct(ct({}, a), r.style)
                }
                return r
            }

            function Hn(e) {
                void 0 === e && (e = !1);
                return function(n, r, a, o, i, l) {
                    var u = i.latestValues,
                        s = (Xt(n) ? Wn : Mn)(r, u, l),
                        c = function(e, t, n) {
                            var r = {};
                            for (var a in e)(zn(a) || !0 === n && An(a) || !t && !An(a) || e.draggable && a.startsWith("onDrag")) && (r[a] = e[a]);
                            return r
                        }(r, "string" === typeof n, e),
                        f = ct(ct(ct({}, c), s), {
                            ref: o
                        });
                    return a && (f["data-projection-id"] = a), (0, t.createElement)(n, f)
                }
            }
            var $n = /([a-z])([A-Z])/g,
                Qn = function(e) {
                    return e.replace($n, "$1-$2").toLowerCase()
                };

            function Kn(e, t, n, r) {
                var a = t.style,
                    o = t.vars;
                for (var i in Object.assign(e.style, a, r && r.getProjectionStyles(n)), o) e.style.setProperty(i, o[i])
            }
            var Yn = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);

            function qn(e, t, n, r) {
                for (var a in Kn(e, t, void 0, r), t.attrs) e.setAttribute(Yn.has(a) ? a : Qn(a), t.attrs[a])
            }

            function Xn(e) {
                var t = e.style,
                    n = {};
                for (var r in t)(ln(t[r]) || on(r, e)) && (n[r] = t[r]);
                return n
            }

            function Gn(e) {
                var t = Xn(e);
                for (var n in e) {
                    if (ln(e[n])) t["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = e[n]
                }
                return t
            }

            function Zn(e) {
                return "object" === typeof e && "function" === typeof e.start
            }
            var Jn = function(e) {
                    return Array.isArray(e)
                },
                er = function(e) {
                    return Boolean(e && "object" === typeof e && e.mix && e.toValue)
                },
                tr = function(e) {
                    return Jn(e) ? e[e.length - 1] || 0 : e
                };

            function nr(e) {
                var t = ln(e) ? e.get() : e;
                return er(t) ? t.toValue() : t
            }

            function rr(e, t, n, r) {
                var a = e.scrapeMotionValuesFromProps,
                    o = e.createRenderState,
                    i = e.onMount,
                    l = {
                        latestValues: or(t, n, r, a),
                        renderState: o()
                    };
                return i && (l.mount = function(e) {
                    return i(t, e, l)
                }), l
            }
            var ar = function(e) {
                return function(n, r) {
                    var a = (0, t.useContext)(Et),
                        o = (0, t.useContext)(Ct);
                    return r ? rr(e, n, a, o) : Ut((function() {
                        return rr(e, n, a, o)
                    }))
                }
            };

            function or(e, t, n, r) {
                var a = {},
                    o = !1 === (null === n || void 0 === n ? void 0 : n.initial),
                    i = r(e);
                for (var l in i) a[l] = nr(i[l]);
                var u = e.initial,
                    s = e.animate,
                    c = zt(e),
                    f = Dt(e);
                t && f && !c && !1 !== e.inherit && (null !== u && void 0 !== u || (u = t.initial), null !== s && void 0 !== s || (s = t.animate));
                var d = o || !1 === u,
                    p = d ? s : u;
                p && "boolean" !== typeof p && !Zn(p) && (Array.isArray(p) ? p : [p]).forEach((function(t) {
                    var n = At(e, t);
                    if (n) {
                        var r = n.transitionEnd;
                        n.transition;
                        var o = ft(n, ["transitionEnd", "transition"]);
                        for (var i in o) {
                            var l = o[i];
                            if (Array.isArray(l)) l = l[d ? l.length - 1 : 0];
                            null !== l && (a[i] = l)
                        }
                        for (var i in r) a[i] = r[i]
                    }
                }));
                return a
            }
            var ir, lr = {
                    useVisualState: ar({
                        scrapeMotionValuesFromProps: Gn,
                        createRenderState: Bn,
                        onMount: function(e, t, n) {
                            var r = n.renderState,
                                a = n.latestValues;
                            try {
                                r.dimensions = "function" === typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
                            } catch (o) {
                                r.dimensions = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                }
                            }
                            Un(r, a, {
                                enableHardwareAcceleration: !1
                            }, e.transformTemplate), qn(t, r)
                        }
                    })
                },
                ur = {
                    useVisualState: ar({
                        scrapeMotionValuesFromProps: Xn,
                        createRenderState: Ln
                    })
                };

            function sr(e, t, n, r) {
                return void 0 === r && (r = {
                        passive: !0
                    }), e.addEventListener(t, n, r),
                    function() {
                        return e.removeEventListener(t, n)
                    }
            }

            function cr(e, n, r, a) {
                (0, t.useEffect)((function() {
                    var t = e.current;
                    if (r && t) return sr(t, n, r, a)
                }), [e, n, r, a])
            }

            function fr(e) {
                return "undefined" !== typeof PointerEvent && e instanceof PointerEvent ? !("mouse" !== e.pointerType) : e instanceof MouseEvent
            }

            function dr(e) {
                return !!e.touches
            }! function(e) {
                e.Animate = "animate", e.Hover = "whileHover", e.Tap = "whileTap", e.Drag = "whileDrag", e.Focus = "whileFocus", e.InView = "whileInView", e.Exit = "exit"
            }(ir || (ir = {}));
            var pr = {
                pageX: 0,
                pageY: 0
            };

            function hr(e, t) {
                void 0 === t && (t = "page");
                var n = e.touches[0] || e.changedTouches[0] || pr;
                return {
                    x: n[t + "X"],
                    y: n[t + "Y"]
                }
            }

            function vr(e, t) {
                return void 0 === t && (t = "page"), {
                    x: e[t + "X"],
                    y: e[t + "Y"]
                }
            }

            function mr(e, t) {
                return void 0 === t && (t = "page"), {
                    point: dr(e) ? hr(e, t) : vr(e, t)
                }
            }
            var yr = function(e, t) {
                    void 0 === t && (t = !1);
                    var n, r = function(t) {
                        return e(t, mr(t))
                    };
                    return t ? (n = r, function(e) {
                        var t = e instanceof MouseEvent;
                        (!t || t && 0 === e.button) && n(e)
                    }) : r
                },
                gr = function() {
                    return Pt && null === window.onpointerdown
                },
                br = function() {
                    return Pt && null === window.ontouchstart
                },
                wr = function() {
                    return Pt && null === window.onmousedown
                },
                xr = {
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointercancel: "mousecancel",
                    pointerover: "mouseover",
                    pointerout: "mouseout",
                    pointerenter: "mouseenter",
                    pointerleave: "mouseleave"
                },
                Sr = {
                    pointerdown: "touchstart",
                    pointermove: "touchmove",
                    pointerup: "touchend",
                    pointercancel: "touchcancel"
                };

            function kr(e) {
                return gr() ? e : br() ? Sr[e] : wr() ? xr[e] : e
            }

            function Er(e, t, n, r) {
                return sr(e, kr(t), yr(n, "pointerdown" === t), r)
            }

            function Cr(e, t, n, r) {
                return cr(e, kr(t), n && yr(n, "pointerdown" === t), r)
            }

            function Pr(e) {
                var t = null;
                return function() {
                    return null === t && (t = e, function() {
                        t = null
                    })
                }
            }
            var Tr = Pr("dragHorizontal"),
                jr = Pr("dragVertical");

            function Nr(e) {
                var t = !1;
                if ("y" === e) t = jr();
                else if ("x" === e) t = Tr();
                else {
                    var n = Tr(),
                        r = jr();
                    n && r ? t = function() {
                        n(), r()
                    } : (n && n(), r && r())
                }
                return t
            }

            function Lr() {
                var e = Nr(!0);
                return !e || (e(), !1)
            }

            function Or(e, t, n) {
                return function(r, a) {
                    var o;
                    fr(r) && !Lr() && (null === (o = e.animationState) || void 0 === o || o.setActive(ir.Hover, t), null === n || void 0 === n || n(r, a))
                }
            }
            var Rr = function e(t, n) {
                return !!n && (t === n || e(t, n.parentElement))
            };

            function Mr(e) {
                return (0, t.useEffect)((function() {
                    return function() {
                        return e()
                    }
                }), [])
            }
            var _r = function(e, t) {
                    return function(n) {
                        return t(e(n))
                    }
                },
                Ar = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.reduce(_r)
                };
            var Ir = new Set;
            var zr = new WeakMap,
                Dr = new WeakMap,
                Vr = function(e) {
                    var t;
                    null === (t = zr.get(e.target)) || void 0 === t || t(e)
                },
                Fr = function(e) {
                    e.forEach(Vr)
                };

            function Ur(e, t, n) {
                var r = function(e) {
                    var t = e.root,
                        n = ft(e, ["root"]),
                        r = t || document;
                    Dr.has(r) || Dr.set(r, {});
                    var a = Dr.get(r),
                        o = JSON.stringify(n);
                    return a[o] || (a[o] = new IntersectionObserver(Fr, ct({
                        root: t
                    }, n))), a[o]
                }(t);
                return zr.set(e, n), r.observe(e),
                    function() {
                        zr.delete(e), r.unobserve(e)
                    }
            }
            var Br = {
                some: 0,
                all: 1
            };

            function Wr(e, n, r, a) {
                var o = a.root,
                    i = a.margin,
                    l = a.amount,
                    u = void 0 === l ? "some" : l,
                    s = a.once;
                (0, t.useEffect)((function() {
                    if (e) {
                        var t = {
                            root: null === o || void 0 === o ? void 0 : o.current,
                            rootMargin: i,
                            threshold: "number" === typeof u ? u : Br[u]
                        };
                        return Ur(r.getInstance(), t, (function(e) {
                            var t, a = e.isIntersecting;
                            if (n.isInView !== a && (n.isInView = a, !s || a || !n.hasEnteredView)) {
                                a && (n.hasEnteredView = !0), null === (t = r.animationState) || void 0 === t || t.setActive(ir.InView, a);
                                var o = r.getProps(),
                                    i = a ? o.onViewportEnter : o.onViewportLeave;
                                null === i || void 0 === i || i(e)
                            }
                        }))
                    }
                }), [e, o, i, u])
            }

            function Hr(e, n, r, a) {
                var o = a.fallback,
                    i = void 0 === o || o;
                (0, t.useEffect)((function() {
                    var t, a;
                    e && i && ("production" !== vt && (t = "IntersectionObserver not available on this device. whileInView animations will trigger on mount.", !1 || Ir.has(t) || (console.warn(t), a && console.warn(a), Ir.add(t))), requestAnimationFrame((function() {
                        var e;
                        n.hasEnteredView = !0;
                        var t = r.getProps().onViewportEnter;
                        null === t || void 0 === t || t(null), null === (e = r.animationState) || void 0 === e || e.setActive(ir.InView, !0)
                    })))
                }), [e])
            }
            var $r = function(e) {
                    return function(t) {
                        return e(t), null
                    }
                },
                Qr = {
                    inView: $r((function(e) {
                        var n = e.visualElement,
                            r = e.whileInView,
                            a = e.onViewportEnter,
                            o = e.onViewportLeave,
                            i = e.viewport,
                            l = void 0 === i ? {} : i,
                            u = (0, t.useRef)({
                                hasEnteredView: !1,
                                isInView: !1
                            }),
                            s = Boolean(r || a || o);
                        l.once && u.current.hasEnteredView && (s = !1), ("undefined" === typeof IntersectionObserver ? Hr : Wr)(s, u.current, n, l)
                    })),
                    tap: $r((function(e) {
                        var n = e.onTap,
                            r = e.onTapStart,
                            a = e.onTapCancel,
                            o = e.whileTap,
                            i = e.visualElement,
                            l = n || r || a || o,
                            u = (0, t.useRef)(!1),
                            s = (0, t.useRef)(null),
                            c = {
                                passive: !(r || n || a || v)
                            };

                        function f() {
                            var e;
                            null === (e = s.current) || void 0 === e || e.call(s), s.current = null
                        }

                        function d() {
                            var e;
                            return f(), u.current = !1, null === (e = i.animationState) || void 0 === e || e.setActive(ir.Tap, !1), !Lr()
                        }

                        function p(e, t) {
                            d() && (Rr(i.getInstance(), e.target) ? null === n || void 0 === n || n(e, t) : null === a || void 0 === a || a(e, t))
                        }

                        function h(e, t) {
                            d() && (null === a || void 0 === a || a(e, t))
                        }

                        function v(e, t) {
                            var n;
                            f(), u.current || (u.current = !0, s.current = Ar(Er(window, "pointerup", p, c), Er(window, "pointercancel", h, c)), null === (n = i.animationState) || void 0 === n || n.setActive(ir.Tap, !0), null === r || void 0 === r || r(e, t))
                        }
                        Cr(i, "pointerdown", l ? v : void 0, c), Mr(f)
                    })),
                    focus: $r((function(e) {
                        var t = e.whileFocus,
                            n = e.visualElement;
                        cr(n, "focus", t ? function() {
                            var e;
                            null === (e = n.animationState) || void 0 === e || e.setActive(ir.Focus, !0)
                        } : void 0), cr(n, "blur", t ? function() {
                            var e;
                            null === (e = n.animationState) || void 0 === e || e.setActive(ir.Focus, !1)
                        } : void 0)
                    })),
                    hover: $r((function(e) {
                        var t = e.onHoverStart,
                            n = e.onHoverEnd,
                            r = e.whileHover,
                            a = e.visualElement;
                        Cr(a, "pointerenter", t || r ? Or(a, !0, t) : void 0, {
                            passive: !t
                        }), Cr(a, "pointerleave", n || r ? Or(a, !1, n) : void 0, {
                            passive: !n
                        })
                    }))
                },
                Kr = 0,
                Yr = function() {
                    return Kr++
                },
                qr = function() {
                    return Ut(Yr)
                };

            function Xr() {
                var e = (0, t.useContext)(Ct);
                if (null === e) return [!0, null];
                var n = e.isPresent,
                    r = e.onExitComplete,
                    a = e.register,
                    o = qr();
                (0, t.useEffect)((function() {
                    return a(o)
                }), []);
                return !n && r ? [!1, function() {
                    return null === r || void 0 === r ? void 0 : r(o)
                }] : [!0]
            }

            function Gr(e, t) {
                if (!Array.isArray(t)) return !1;
                var n = t.length;
                if (n !== e.length) return !1;
                for (var r = 0; r < n; r++)
                    if (t[r] !== e[r]) return !1;
                return !0
            }
            var Zr = function(e, t, n) {
                    return Math.min(Math.max(n, e), t)
                },
                Jr = .001,
                ea = .01,
                ta = 10,
                na = .05,
                ra = 1;

            function aa(e) {
                var t, n, r = e.duration,
                    a = void 0 === r ? 800 : r,
                    o = e.bounce,
                    i = void 0 === o ? .25 : o,
                    l = e.velocity,
                    u = void 0 === l ? 0 : l,
                    s = e.mass,
                    c = void 0 === s ? 1 : s;
                gt(a <= 1e3 * ta, "Spring duration must be 10 seconds or less");
                var f = 1 - i;
                f = Zr(na, ra, f), a = Zr(ea, ta, a / 1e3), f < 1 ? (t = function(e) {
                    var t = e * f,
                        n = t * a,
                        r = t - u,
                        o = ia(e, f),
                        i = Math.exp(-n);
                    return Jr - r / o * i
                }, n = function(e) {
                    var n = e * f * a,
                        r = n * u + u,
                        o = Math.pow(f, 2) * Math.pow(e, 2) * a,
                        i = Math.exp(-n),
                        l = ia(Math.pow(e, 2), f);
                    return (-t(e) + Jr > 0 ? -1 : 1) * ((r - o) * i) / l
                }) : (t = function(e) {
                    return Math.exp(-e * a) * ((e - u) * a + 1) - Jr
                }, n = function(e) {
                    return Math.exp(-e * a) * (a * a * (u - e))
                });
                var d = function(e, t, n) {
                    for (var r = n, a = 1; a < oa; a++) r -= e(r) / t(r);
                    return r
                }(t, n, 5 / a);
                if (a *= 1e3, isNaN(d)) return {
                    stiffness: 100,
                    damping: 10,
                    duration: a
                };
                var p = Math.pow(d, 2) * c;
                return {
                    stiffness: p,
                    damping: 2 * f * Math.sqrt(c * p),
                    duration: a
                }
            }
            var oa = 12;

            function ia(e, t) {
                return e * Math.sqrt(1 - t * t)
            }
            var la = ["duration", "bounce"],
                ua = ["stiffness", "damping", "mass"];

            function sa(e, t) {
                return t.some((function(t) {
                    return void 0 !== e[t]
                }))
            }

            function ca(e) {
                var t = e.from,
                    n = void 0 === t ? 0 : t,
                    r = e.to,
                    a = void 0 === r ? 1 : r,
                    o = e.restSpeed,
                    i = void 0 === o ? 2 : o,
                    l = e.restDelta,
                    u = ft(e, ["from", "to", "restSpeed", "restDelta"]),
                    s = {
                        done: !1,
                        value: n
                    },
                    c = function(e) {
                        var t = Object.assign({
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1
                        }, e);
                        if (!sa(e, ua) && sa(e, la)) {
                            var n = aa(e);
                            (t = Object.assign(Object.assign(Object.assign({}, t), n), {
                                velocity: 0,
                                mass: 1
                            })).isResolvedFromDuration = !0
                        }
                        return t
                    }(u),
                    f = c.stiffness,
                    d = c.damping,
                    p = c.mass,
                    h = c.velocity,
                    v = c.duration,
                    m = c.isResolvedFromDuration,
                    y = fa,
                    g = fa;

                function b() {
                    var e = h ? -h / 1e3 : 0,
                        t = a - n,
                        r = d / (2 * Math.sqrt(f * p)),
                        o = Math.sqrt(f / p) / 1e3;
                    if (void 0 === l && (l = Math.min(Math.abs(a - n) / 100, .4)), r < 1) {
                        var i = ia(o, r);
                        y = function(n) {
                            var l = Math.exp(-r * o * n);
                            return a - l * ((e + r * o * t) / i * Math.sin(i * n) + t * Math.cos(i * n))
                        }, g = function(n) {
                            var a = Math.exp(-r * o * n);
                            return r * o * a * (Math.sin(i * n) * (e + r * o * t) / i + t * Math.cos(i * n)) - a * (Math.cos(i * n) * (e + r * o * t) - i * t * Math.sin(i * n))
                        }
                    } else if (1 === r) y = function(n) {
                        return a - Math.exp(-o * n) * (t + (e + o * t) * n)
                    };
                    else {
                        var u = o * Math.sqrt(r * r - 1);
                        y = function(n) {
                            var i = Math.exp(-r * o * n),
                                l = Math.min(u * n, 300);
                            return a - i * ((e + r * o * t) * Math.sinh(l) + u * t * Math.cosh(l)) / u
                        }
                    }
                }
                return b(), {
                    next: function(e) {
                        var t = y(e);
                        if (m) s.done = e >= v;
                        else {
                            var n = 1e3 * g(e),
                                r = Math.abs(n) <= i,
                                o = Math.abs(a - t) <= l;
                            s.done = r && o
                        }
                        return s.value = s.done ? a : t, s
                    },
                    flipTarget: function() {
                        h = -h;
                        var e = [a, n];
                        n = e[0], a = e[1], b()
                    }
                }
            }
            ca.needsInterpolation = function(e, t) {
                return "string" === typeof e || "string" === typeof t
            };
            var fa = function(e) {
                    return 0
                },
                da = function(e, t, n) {
                    var r = t - e;
                    return 0 === r ? 1 : (n - e) / r
                },
                pa = function(e, t, n) {
                    return -n * e + n * t + e
                };

            function ha(e, t, n) {
                return (t = h(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var va = function(e, t) {
                    return function(n) {
                        return Boolean(mn(n) && vn.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
                    }
                },
                ma = function(e, t, n) {
                    return function(r) {
                        var a;
                        if (!mn(r)) return r;
                        var o = s(r.match(pn), 4),
                            i = o[0],
                            l = o[1],
                            u = o[2],
                            c = o[3];
                        return ha(a = {}, e, parseFloat(i)), ha(a, t, parseFloat(l)), ha(a, n, parseFloat(u)), ha(a, "alpha", void 0 !== c ? parseFloat(c) : 1), a
                    }
                },
                ya = fn(0, 255),
                ga = Object.assign(Object.assign({}, En), {
                    transform: function(e) {
                        return Math.round(ya(e))
                    }
                }),
                ba = {
                    test: va("rgb", "red"),
                    parse: ma("red", "green", "blue"),
                    transform: function(e) {
                        var t = e.red,
                            n = e.green,
                            r = e.blue,
                            a = e.alpha,
                            o = void 0 === a ? 1 : a;
                        return "rgba(" + ga.transform(t) + ", " + ga.transform(n) + ", " + ga.transform(r) + ", " + dn(Cn.transform(o)) + ")"
                    }
                };
            var wa = {
                    test: va("#"),
                    parse: function(e) {
                        var t = "",
                            n = "",
                            r = "",
                            a = "";
                        return e.length > 5 ? (t = e.substr(1, 2), n = e.substr(3, 2), r = e.substr(5, 2), a = e.substr(7, 2)) : (t = e.substr(1, 1), n = e.substr(2, 1), r = e.substr(3, 1), a = e.substr(4, 1), t += t, n += n, r += r, a += a), {
                            red: parseInt(t, 16),
                            green: parseInt(n, 16),
                            blue: parseInt(r, 16),
                            alpha: a ? parseInt(a, 16) / 255 : 1
                        }
                    },
                    transform: ba.transform
                },
                xa = {
                    test: va("hsl", "hue"),
                    parse: ma("hue", "saturation", "lightness"),
                    transform: function(e) {
                        var t = e.hue,
                            n = e.saturation,
                            r = e.lightness,
                            a = e.alpha,
                            o = void 0 === a ? 1 : a;
                        return "hsla(" + Math.round(t) + ", " + bn.transform(dn(n)) + ", " + bn.transform(dn(r)) + ", " + dn(Cn.transform(o)) + ")"
                    }
                };

            function Sa(e, t, n) {
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
            }

            function ka(e) {
                var t = e.hue,
                    n = e.saturation,
                    r = e.lightness,
                    a = e.alpha;
                t /= 360, r /= 100;
                var o = 0,
                    i = 0,
                    l = 0;
                if (n /= 100) {
                    var u = r < .5 ? r * (1 + n) : r + n - r * n,
                        s = 2 * r - u;
                    o = Sa(s, u, t + 1 / 3), i = Sa(s, u, t), l = Sa(s, u, t - 1 / 3)
                } else o = i = l = r;
                return {
                    red: Math.round(255 * o),
                    green: Math.round(255 * i),
                    blue: Math.round(255 * l),
                    alpha: a
                }
            }
            var Ea = function(e, t, n) {
                    var r = e * e,
                        a = t * t;
                    return Math.sqrt(Math.max(0, n * (a - r) + r))
                },
                Ca = [wa, ba, xa],
                Pa = function(e) {
                    return Ca.find((function(t) {
                        return t.test(e)
                    }))
                },
                Ta = function(e) {
                    return "'".concat(e, "' is not an animatable color. Use the equivalent color code instead.")
                },
                ja = function(e, t) {
                    var n = Pa(e),
                        r = Pa(t);
                    bt(!!n, Ta(e)), bt(!!r, Ta(t));
                    var a = n.parse(e),
                        o = r.parse(t);
                    n === xa && (a = ka(a), n = ba), r === xa && (o = ka(o), r = ba);
                    var i = Object.assign({}, a);
                    return function(e) {
                        for (var t in i) "alpha" !== t && (i[t] = Ea(a[t], o[t], e));
                        return i.alpha = pa(a.alpha, o.alpha, e), n.transform(i)
                    }
                },
                Na = {
                    test: function(e) {
                        return ba.test(e) || wa.test(e) || xa.test(e)
                    },
                    parse: function(e) {
                        return ba.test(e) ? ba.parse(e) : xa.test(e) ? xa.parse(e) : wa.parse(e)
                    },
                    transform: function(e) {
                        return mn(e) ? e : e.hasOwnProperty("red") ? ba.transform(e) : xa.transform(e)
                    }
                },
                La = "${c}",
                Oa = "${n}";

            function Ra(e) {
                "number" === typeof e && (e = "".concat(e));
                var t = [],
                    n = 0,
                    r = e.match(hn);
                r && (n = r.length, e = e.replace(hn, La), t.push.apply(t, f(r.map(Na.parse))));
                var a = e.match(pn);
                return a && (e = e.replace(pn, Oa), t.push.apply(t, f(a.map(En.parse)))), {
                    values: t,
                    numColors: n,
                    tokenised: e
                }
            }

            function Ma(e) {
                return Ra(e).values
            }

            function _a(e) {
                var t = Ra(e),
                    n = t.values,
                    r = t.numColors,
                    a = t.tokenised,
                    o = n.length;
                return function(e) {
                    for (var t = a, n = 0; n < o; n++) t = t.replace(n < r ? La : Oa, n < r ? Na.transform(e[n]) : dn(e[n]));
                    return t
                }
            }
            var Aa = function(e) {
                return "number" === typeof e ? 0 : e
            };
            var Ia = {
                    test: function(e) {
                        var t, n, r, a;
                        return isNaN(e) && mn(e) && (null !== (n = null === (t = e.match(pn)) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) + (null !== (a = null === (r = e.match(hn)) || void 0 === r ? void 0 : r.length) && void 0 !== a ? a : 0) > 0
                    },
                    parse: Ma,
                    createTransformer: _a,
                    getAnimatableNone: function(e) {
                        var t = Ma(e);
                        return _a(e)(t.map(Aa))
                    }
                },
                za = function(e) {
                    return "number" === typeof e
                };

            function Da(e, t) {
                return za(e) ? function(n) {
                    return pa(e, t, n)
                } : Na.test(e) ? ja(e, t) : Ba(e, t)
            }
            var Va = function(e, t) {
                    var n = f(e),
                        r = n.length,
                        a = e.map((function(e, n) {
                            return Da(e, t[n])
                        }));
                    return function(e) {
                        for (var t = 0; t < r; t++) n[t] = a[t](e);
                        return n
                    }
                },
                Fa = function(e, t) {
                    var n = Object.assign(Object.assign({}, e), t),
                        r = {};
                    for (var a in n) void 0 !== e[a] && void 0 !== t[a] && (r[a] = Da(e[a], t[a]));
                    return function(e) {
                        for (var t in r) n[t] = r[t](e);
                        return n
                    }
                };

            function Ua(e) {
                for (var t = Ia.parse(e), n = t.length, r = 0, a = 0, o = 0, i = 0; i < n; i++) r || "number" === typeof t[i] ? r++ : void 0 !== t[i].hue ? o++ : a++;
                return {
                    parsed: t,
                    numNumbers: r,
                    numRGB: a,
                    numHSL: o
                }
            }
            var Ba = function(e, t) {
                    var n = Ia.createTransformer(t),
                        r = Ua(e),
                        a = Ua(t);
                    return r.numHSL === a.numHSL && r.numRGB === a.numRGB && r.numNumbers >= a.numNumbers ? Ar(Va(r.parsed, a.parsed), n) : (gt(!0, "Complex values '".concat(e, "' and '").concat(t, "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.")), function(n) {
                        return "".concat(n > 0 ? t : e)
                    })
                },
                Wa = function(e, t) {
                    return function(n) {
                        return pa(e, t, n)
                    }
                };

            function Ha(e, t, n) {
                for (var r = [], a = n || function(e) {
                        return "number" === typeof e ? Wa : "string" === typeof e ? Na.test(e) ? ja : Ba : Array.isArray(e) ? Va : "object" === typeof e ? Fa : void 0
                    }(e[0]), o = e.length - 1, i = 0; i < o; i++) {
                    var l = a(e[i], e[i + 1]);
                    if (t) {
                        var u = Array.isArray(t) ? t[i] : t;
                        l = Ar(u, l)
                    }
                    r.push(l)
                }
                return r
            }

            function $a(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = n.clamp,
                    a = void 0 === r || r,
                    o = n.ease,
                    i = n.mixer,
                    l = e.length;
                bt(l === t.length, "Both input and output ranges must be the same length"), bt(!o || !Array.isArray(o) || o.length === l - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[l - 1] && (e = [].concat(e), t = [].concat(t), e.reverse(), t.reverse());
                var u = Ha(t, o, i),
                    c = 2 === l ? function(e, t) {
                        var n = s(e, 2),
                            r = n[0],
                            a = n[1],
                            o = s(t, 1)[0];
                        return function(e) {
                            return o(da(r, a, e))
                        }
                    }(e, u) : function(e, t) {
                        var n = e.length,
                            r = n - 1;
                        return function(a) {
                            var o = 0,
                                i = !1;
                            if (a <= e[0] ? i = !0 : a >= e[r] && (o = r - 1, i = !0), !i) {
                                for (var l = 1; l < n && !(e[l] > a || l === r); l++);
                                o = l - 1
                            }
                            var u = da(e[o], e[o + 1], a);
                            return t[o](u)
                        }
                    }(e, u);
                return a ? function(t) {
                    return c(Zr(e[0], e[l - 1], t))
                } : c
            }
            var Qa, Ka = function(e) {
                    return function(t) {
                        return 1 - e(1 - t)
                    }
                },
                Ya = function(e) {
                    return function(t) {
                        return t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
                    }
                },
                qa = function(e) {
                    return function(t) {
                        return t * t * ((e + 1) * t - e)
                    }
                },
                Xa = function(e) {
                    return e
                },
                Ga = (Qa = 2, function(e) {
                    return Math.pow(e, Qa)
                }),
                Za = Ka(Ga),
                Ja = Ya(Ga),
                eo = function(e) {
                    return 1 - Math.sin(Math.acos(e))
                },
                to = Ka(eo),
                no = Ya(to),
                ro = qa(1.525),
                ao = Ka(ro),
                oo = Ya(ro),
                io = function(e) {
                    var t = qa(e);
                    return function(e) {
                        return (e *= 2) < 1 ? .5 * t(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
                    }
                }(1.525),
                lo = function(e) {
                    if (1 === e || 0 === e) return e;
                    var t = e * e;
                    return e < .36363636363636365 ? 7.5625 * t : e < .7272727272727273 ? 9.075 * t - 9.9 * e + 3.4 : e < .9 ? 12.066481994459833 * t - 19.63545706371191 * e + 8.898060941828255 : 10.8 * e * e - 20.52 * e + 10.72
                },
                uo = Ka(lo);

            function so(e, t) {
                return e.map((function() {
                    return t || Ja
                })).splice(0, e.length - 1)
            }

            function co(e) {
                var t = e.from,
                    n = void 0 === t ? 0 : t,
                    r = e.to,
                    a = void 0 === r ? 1 : r,
                    o = e.ease,
                    i = e.offset,
                    l = e.duration,
                    u = void 0 === l ? 300 : l,
                    s = {
                        done: !1,
                        value: n
                    },
                    c = Array.isArray(a) ? a : [n, a],
                    f = function(e, t) {
                        return e.map((function(e) {
                            return e * t
                        }))
                    }(i && i.length === c.length ? i : function(e) {
                        var t = e.length;
                        return e.map((function(e, n) {
                            return 0 !== n ? n / (t - 1) : 0
                        }))
                    }(c), u);

                function d() {
                    return $a(f, c, {
                        ease: Array.isArray(o) ? o : so(c, o)
                    })
                }
                var p = d();
                return {
                    next: function(e) {
                        return s.value = p(e), s.done = e >= u, s
                    },
                    flipTarget: function() {
                        c.reverse(), p = d()
                    }
                }
            }
            var fo = {
                keyframes: co,
                spring: ca,
                decay: function(e) {
                    var t = e.velocity,
                        n = void 0 === t ? 0 : t,
                        r = e.from,
                        a = void 0 === r ? 0 : r,
                        o = e.power,
                        i = void 0 === o ? .8 : o,
                        l = e.timeConstant,
                        u = void 0 === l ? 350 : l,
                        s = e.restDelta,
                        c = void 0 === s ? .5 : s,
                        f = e.modifyTarget,
                        d = {
                            done: !1,
                            value: a
                        },
                        p = i * n,
                        h = a + p,
                        v = void 0 === f ? h : f(h);
                    return v !== h && (p = v - a), {
                        next: function(e) {
                            var t = -p * Math.exp(-e / u);
                            return d.done = !(t > c || t < -c), d.value = d.done ? v : v + t, d
                        },
                        flipTarget: function() {}
                    }
                }
            };
            var po = 1 / 60 * 1e3,
                ho = "undefined" !== typeof performance ? function() {
                    return performance.now()
                } : function() {
                    return Date.now()
                },
                vo = "undefined" !== typeof window ? function(e) {
                    return window.requestAnimationFrame(e)
                } : function(e) {
                    return setTimeout((function() {
                        return e(ho())
                    }), po)
                };
            var mo = !0,
                yo = !1,
                go = !1,
                bo = {
                    delta: 0,
                    timestamp: 0
                },
                wo = ["read", "update", "preRender", "render", "postRender"],
                xo = wo.reduce((function(e, t) {
                    return e[t] = function(e) {
                        var t = [],
                            n = [],
                            r = 0,
                            a = !1,
                            o = !1,
                            i = new WeakSet,
                            l = {
                                schedule: function(e) {
                                    var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && a,
                                        l = o ? t : n;
                                    return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && i.add(e), -1 === l.indexOf(e) && (l.push(e), o && a && (r = t.length)), e
                                },
                                cancel: function(e) {
                                    var t = n.indexOf(e); - 1 !== t && n.splice(t, 1), i.delete(e)
                                },
                                process: function(u) {
                                    if (a) o = !0;
                                    else {
                                        a = !0;
                                        var s = [n, t];
                                        if (t = s[0], (n = s[1]).length = 0, r = t.length)
                                            for (var c = 0; c < r; c++) {
                                                var f = t[c];
                                                f(u), i.has(f) && (l.schedule(f), e())
                                            }
                                        a = !1, o && (o = !1, l.process(u))
                                    }
                                }
                            };
                        return l
                    }((function() {
                        return yo = !0
                    })), e
                }), {}),
                So = wo.reduce((function(e, t) {
                    var n = xo[t];
                    return e[t] = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return yo || To(), n.schedule(e, t, r)
                    }, e
                }), {}),
                ko = wo.reduce((function(e, t) {
                    return e[t] = xo[t].cancel, e
                }), {}),
                Eo = wo.reduce((function(e, t) {
                    return e[t] = function() {
                        return xo[t].process(bo)
                    }, e
                }), {}),
                Co = function(e) {
                    return xo[e].process(bo)
                },
                Po = function e(t) {
                    yo = !1, bo.delta = mo ? po : Math.max(Math.min(t - bo.timestamp, 40), 1), bo.timestamp = t, go = !0, wo.forEach(Co), go = !1, yo && (mo = !1, vo(e))
                },
                To = function() {
                    yo = !0, mo = !0, go || vo(Po)
                },
                jo = function() {
                    return bo
                },
                No = So;

            function Lo(e, t) {
                return e - t - (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0)
            }
            var Oo = function(e) {
                var t = function(t) {
                    var n = t.delta;
                    return e(n)
                };
                return {
                    start: function() {
                        return No.update(t, !0)
                    },
                    stop: function() {
                        return ko.update(t)
                    }
                }
            };

            function Ro(e) {
                var t, n, r, a, o, i = e.from,
                    l = e.autoplay,
                    u = void 0 === l || l,
                    s = e.driver,
                    c = void 0 === s ? Oo : s,
                    f = e.elapsed,
                    d = void 0 === f ? 0 : f,
                    p = e.repeat,
                    h = void 0 === p ? 0 : p,
                    v = e.repeatType,
                    m = void 0 === v ? "loop" : v,
                    y = e.repeatDelay,
                    g = void 0 === y ? 0 : y,
                    b = e.onPlay,
                    w = e.onStop,
                    x = e.onComplete,
                    S = e.onRepeat,
                    k = e.onUpdate,
                    E = ft(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]),
                    C = E.to,
                    P = 0,
                    T = E.duration,
                    j = !1,
                    N = !0,
                    L = function(e) {
                        if (Array.isArray(e.to)) return co;
                        if (fo[e.type]) return fo[e.type];
                        var t = new Set(Object.keys(e));
                        return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? co : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? ca : co
                    }(E);
                (null === (n = (t = L).needsInterpolation) || void 0 === n ? void 0 : n.call(t, i, C)) && (o = $a([0, 100], [i, C], {
                    clamp: !1
                }), i = 0, C = 100);
                var O = L(Object.assign(Object.assign({}, E), {
                    from: i,
                    to: C
                }));

                function R() {
                    P++, "reverse" === m ? d = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        return arguments.length > 3 && void 0 !== arguments[3] && !arguments[3] ? t - (e - t) + n : Lo(t + -e, t, n)
                    }(d, T, g, N = P % 2 === 0) : (d = Lo(d, T, g), "mirror" === m && O.flipTarget()), j = !1, S && S()
                }

                function M(e) {
                    if (N || (e = -e), d += e, !j) {
                        var t = O.next(Math.max(0, d));
                        a = t.value, o && (a = o(a)), j = N ? t.done : d <= 0
                    }
                    null === k || void 0 === k || k(a), j && (0 === P && (null !== T && void 0 !== T || (T = d)), P < h ? function(e, t, n, r) {
                        return r ? e >= t + n : e <= -n
                    }(d, T, g, N) && R() : (r.stop(), x && x()))
                }
                return u && (null === b || void 0 === b || b(), (r = c(M)).start()), {
                    stop: function() {
                        null === w || void 0 === w || w(), r.stop()
                    }
                }
            }

            function Mo(e, t) {
                return t ? e * (1e3 / t) : 0
            }
            var _o = function(e) {
                    return 1e3 * e
                },
                Ao = function(e, t) {
                    return 1 - 3 * t + 3 * e
                },
                Io = function(e, t) {
                    return 3 * t - 6 * e
                },
                zo = function(e) {
                    return 3 * e
                },
                Do = function(e, t, n) {
                    return ((Ao(t, n) * e + Io(t, n)) * e + zo(t)) * e
                },
                Vo = function(e, t, n) {
                    return 3 * Ao(t, n) * e * e + 2 * Io(t, n) * e + zo(t)
                },
                Fo = 1e-7,
                Uo = 10;
            var Bo = 8;
            var Wo = .1;

            function Ho(e, t, n, r) {
                if (e === t && n === r) return Xa;
                for (var a = new Float32Array(11), o = 0; o < 11; ++o) a[o] = Do(o * Wo, e, n);

                function i(t) {
                    for (var r = 0, o = 1; 10 !== o && a[o] <= t; ++o) r += Wo;
                    --o;
                    var i = r + (t - a[o]) / (a[o + 1] - a[o]) * Wo,
                        l = Vo(i, e, n);
                    return l >= .001 ? function(e, t, n, r) {
                        for (var a = 0; a < Bo; ++a) {
                            var o = Vo(t, n, r);
                            if (0 === o) return t;
                            t -= (Do(t, n, r) - e) / o
                        }
                        return t
                    }(t, i, e, n) : 0 === l ? i : function(e, t, n, r, a) {
                        var o, i, l = 0;
                        do {
                            (o = Do(i = t + (n - t) / 2, r, a) - e) > 0 ? n = i : t = i
                        } while (Math.abs(o) > Fo && ++l < Uo);
                        return i
                    }(t, r, r + Wo, e, n)
                }
                return function(e) {
                    return 0 === e || 1 === e ? e : Do(i(e), t, r)
                }
            }
            var $o = {
                    linear: Xa,
                    easeIn: Ga,
                    easeInOut: Ja,
                    easeOut: Za,
                    circIn: eo,
                    circInOut: no,
                    circOut: to,
                    backIn: ro,
                    backInOut: oo,
                    backOut: ao,
                    anticipate: io,
                    bounceIn: uo,
                    bounceInOut: function(e) {
                        return e < .5 ? .5 * (1 - lo(1 - 2 * e)) : .5 * lo(2 * e - 1) + .5
                    },
                    bounceOut: lo
                },
                Qo = function(e) {
                    if (Array.isArray(e)) {
                        bt(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
                        var t = pt(e, 4);
                        return Ho(t[0], t[1], t[2], t[3])
                    }
                    return "string" === typeof e ? (bt(void 0 !== $o[e], "Invalid easing type '".concat(e, "'")), $o[e]) : e
                },
                Ko = function(e) {
                    return Array.isArray(e) && "number" !== typeof e[0]
                },
                Yo = function(e, t) {
                    return "zIndex" !== e && (!("number" !== typeof t && !Array.isArray(t)) || !("string" !== typeof t || !Ia.test(t) || t.startsWith("url(")))
                },
                qo = function() {
                    return {
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                        restSpeed: 10
                    }
                },
                Xo = function(e) {
                    return {
                        type: "spring",
                        stiffness: 550,
                        damping: 0 === e ? 2 * Math.sqrt(550) : 30,
                        restSpeed: 10
                    }
                },
                Go = function() {
                    return {
                        type: "keyframes",
                        ease: "linear",
                        duration: .3
                    }
                },
                Zo = function(e) {
                    return {
                        type: "keyframes",
                        duration: .8,
                        values: e
                    }
                },
                Jo = {
                    x: qo,
                    y: qo,
                    z: qo,
                    rotate: qo,
                    rotateX: qo,
                    rotateY: qo,
                    rotateZ: qo,
                    scaleX: Xo,
                    scaleY: Xo,
                    scale: Xo,
                    opacity: Go,
                    backgroundColor: Go,
                    color: Go,
                    default: Xo
                },
                ei = function(e, t) {
                    var n;
                    return n = Jn(t) ? Zo : Jo[e] || Jo.default, ct({
                        to: t
                    }, n(t))
                },
                ti = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function ni(e) {
                var t = s(e.slice(0, -1).split("("), 2),
                    n = t[0],
                    r = t[1];
                if ("drop-shadow" === n) return e;
                var a = s(r.match(pn) || [], 1)[0];
                if (!a) return e;
                var o = r.replace(a, ""),
                    i = ti.has(n) ? 1 : 0;
                return a !== r && (i *= 100), n + "(" + i + o + ")"
            }
            var ri = /([a-z-]*)\(.*?\)/g,
                ai = Object.assign(Object.assign({}, Ia), {
                    getAnimatableNone: function(e) {
                        var t = e.match(ri);
                        return t ? t.map(ni).join(" ") : e
                    }
                }),
                oi = ct(ct({}, jn), {
                    color: Na,
                    backgroundColor: Na,
                    outlineColor: Na,
                    fill: Na,
                    stroke: Na,
                    borderColor: Na,
                    borderTopColor: Na,
                    borderRightColor: Na,
                    borderBottomColor: Na,
                    borderLeftColor: Na,
                    filter: ai,
                    WebkitFilter: ai
                }),
                ii = function(e) {
                    return oi[e]
                };

            function li(e, t) {
                var n, r = ii(e);
                return r !== ai && (r = Ia), null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, t)
            }
            var ui = {
                current: !1
            };
            var si = !1;

            function ci(e, t, n) {
                var r;
                return Array.isArray(t.to) && (null !== (r = e.duration) && void 0 !== r || (e.duration = .8)),
                    function(e) {
                        Array.isArray(e.to) && null === e.to[0] && (e.to = ht([], pt(e.to), !1), e.to[0] = e.from)
                    }(t),
                    function(e) {
                        e.when, e.delay, e.delayChildren, e.staggerChildren, e.staggerDirection, e.repeat, e.repeatType, e.repeatDelay, e.from;
                        var t = ft(e, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
                        return !!Object.keys(t).length
                    }(e) || (e = ct(ct({}, e), ei(n, t.to))), ct(ct({}, t), function(e) {
                        var t = e.ease,
                            n = e.times,
                            r = e.yoyo,
                            a = e.flip,
                            o = e.loop,
                            i = ft(e, ["ease", "times", "yoyo", "flip", "loop"]),
                            l = ct({}, i);
                        return n && (l.offset = n), i.duration && (l.duration = _o(i.duration)), i.repeatDelay && (l.repeatDelay = _o(i.repeatDelay)), t && (l.ease = Ko(t) ? t.map(Qo) : Qo(t)), "tween" === i.type && (l.type = "keyframes"), (r || o || a) && (gt(!si, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."), si = !0, r ? l.repeatType = "reverse" : o ? l.repeatType = "loop" : a && (l.repeatType = "mirror"), l.repeat = o || r || a || i.repeat), "spring" !== i.type && (l.type = "keyframes"), l
                    }(e))
            }

            function fi(e, t, n, r, a) {
                var o, i = hi(r, e),
                    l = null !== (o = i.from) && void 0 !== o ? o : t.get(),
                    u = Yo(e, n);
                "none" === l && u && "string" === typeof n ? l = li(e, n) : di(l) && "string" === typeof n ? l = pi(n) : !Array.isArray(n) && di(n) && "string" === typeof l && (n = pi(l));
                var s = Yo(e, l);
                return gt(s === u, "You are trying to animate ".concat(e, ' from "').concat(l, '" to "').concat(n, '". ').concat(l, " is not an animatable value - to enable this animation set ").concat(l, " to a value animatable to ").concat(n, " via the `style` property.")), s && u && !1 !== i.type ? function() {
                    var r = {
                        from: l,
                        to: n,
                        velocity: t.getVelocity(),
                        onComplete: a,
                        onUpdate: function(e) {
                            return t.set(e)
                        }
                    };
                    return "inertia" === i.type || "decay" === i.type ? function(e) {
                        var t, n = e.from,
                            r = void 0 === n ? 0 : n,
                            a = e.velocity,
                            o = void 0 === a ? 0 : a,
                            i = e.min,
                            l = e.max,
                            u = e.power,
                            s = void 0 === u ? .8 : u,
                            c = e.timeConstant,
                            f = void 0 === c ? 750 : c,
                            d = e.bounceStiffness,
                            p = void 0 === d ? 500 : d,
                            h = e.bounceDamping,
                            v = void 0 === h ? 10 : h,
                            m = e.restDelta,
                            y = void 0 === m ? 1 : m,
                            g = e.modifyTarget,
                            b = e.driver,
                            w = e.onUpdate,
                            x = e.onComplete,
                            S = e.onStop;

                        function k(e) {
                            return void 0 !== i && e < i || void 0 !== l && e > l
                        }

                        function E(e) {
                            return void 0 === i ? l : void 0 === l || Math.abs(i - e) < Math.abs(l - e) ? i : l
                        }

                        function C(e) {
                            null === t || void 0 === t || t.stop(), t = Ro(Object.assign(Object.assign({}, e), {
                                driver: b,
                                onUpdate: function(t) {
                                    var n;
                                    null === w || void 0 === w || w(t), null === (n = e.onUpdate) || void 0 === n || n.call(e, t)
                                },
                                onComplete: x,
                                onStop: S
                            }))
                        }

                        function P(e) {
                            C(Object.assign({
                                type: "spring",
                                stiffness: p,
                                damping: v,
                                restDelta: y
                            }, e))
                        }
                        if (k(r)) P({
                            from: r,
                            velocity: o,
                            to: E(r)
                        });
                        else {
                            var T = s * o + r;
                            "undefined" !== typeof g && (T = g(T));
                            var j, N, L = E(T),
                                O = L === i ? -1 : 1;
                            C({
                                type: "decay",
                                from: r,
                                velocity: o,
                                timeConstant: f,
                                power: s,
                                restDelta: y,
                                modifyTarget: g,
                                onUpdate: k(T) ? function(e) {
                                    j = N, N = e, o = Mo(e - j, jo().delta), (1 === O && e > L || -1 === O && e < L) && P({
                                        from: e,
                                        to: L,
                                        velocity: o
                                    })
                                } : void 0
                            })
                        }
                        return {
                            stop: function() {
                                return null === t || void 0 === t ? void 0 : t.stop()
                            }
                        }
                    }(ct(ct({}, r), i)) : Ro(ct(ct({}, ci(i, r, e)), {
                        onUpdate: function(e) {
                            var t;
                            r.onUpdate(e), null === (t = i.onUpdate) || void 0 === t || t.call(i, e)
                        },
                        onComplete: function() {
                            var e;
                            r.onComplete(), null === (e = i.onComplete) || void 0 === e || e.call(i)
                        }
                    }))
                } : function() {
                    var e, r, o = tr(n);
                    return t.set(o), a(), null === (e = null === i || void 0 === i ? void 0 : i.onUpdate) || void 0 === e || e.call(i, o), null === (r = null === i || void 0 === i ? void 0 : i.onComplete) || void 0 === r || r.call(i), {
                        stop: function() {}
                    }
                }
            }

            function di(e) {
                return 0 === e || "string" === typeof e && 0 === parseFloat(e) && -1 === e.indexOf(" ")
            }

            function pi(e) {
                return "number" === typeof e ? 0 : li("", e)
            }

            function hi(e, t) {
                return e[t] || e.default || e
            }

            function vi(e, t, n, r) {
                return void 0 === r && (r = {}), ui.current && (r = {
                    type: !1
                }), t.start((function(a) {
                    var o, i, l = fi(e, t, n, r, a),
                        u = function(e, t) {
                            var n, r;
                            return null !== (r = null !== (n = (hi(e, t) || {}).delay) && void 0 !== n ? n : e.delay) && void 0 !== r ? r : 0
                        }(r, e),
                        s = function() {
                            return i = l()
                        };
                    return u ? o = window.setTimeout(s, _o(u)) : s(),
                        function() {
                            clearTimeout(o), null === i || void 0 === i || i.stop()
                        }
                }))
            }
            var mi = function(e) {
                    return /^\-?\d*\.?\d+$/.test(e)
                },
                yi = function(e) {
                    return /^0[^.\s]+$/.test(e)
                };

            function gi(e, t) {
                -1 === e.indexOf(t) && e.push(t)
            }

            function bi(e, t) {
                var n = e.indexOf(t);
                n > -1 && e.splice(n, 1)
            }
            var wi = function() {
                    function e() {
                        this.subscriptions = []
                    }
                    return e.prototype.add = function(e) {
                        var t = this;
                        return gi(this.subscriptions, e),
                            function() {
                                return bi(t.subscriptions, e)
                            }
                    }, e.prototype.notify = function(e, t, n) {
                        var r = this.subscriptions.length;
                        if (r)
                            if (1 === r) this.subscriptions[0](e, t, n);
                            else
                                for (var a = 0; a < r; a++) {
                                    var o = this.subscriptions[a];
                                    o && o(e, t, n)
                                }
                    }, e.prototype.getSize = function() {
                        return this.subscriptions.length
                    }, e.prototype.clear = function() {
                        this.subscriptions.length = 0
                    }, e
                }(),
                xi = function() {
                    function e(e) {
                        var t, n = this;
                        this.version = "6.5.1", this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new wi, this.velocityUpdateSubscribers = new wi, this.renderSubscribers = new wi, this.canTrackVelocity = !1, this.updateAndNotify = function(e, t) {
                            void 0 === t && (t = !0), n.prev = n.current, n.current = e;
                            var r = jo(),
                                a = r.delta,
                                o = r.timestamp;
                            n.lastUpdated !== o && (n.timeDelta = a, n.lastUpdated = o, No.postRender(n.scheduleVelocityCheck)), n.prev !== n.current && n.updateSubscribers.notify(n.current), n.velocityUpdateSubscribers.getSize() && n.velocityUpdateSubscribers.notify(n.getVelocity()), t && n.renderSubscribers.notify(n.current)
                        }, this.scheduleVelocityCheck = function() {
                            return No.postRender(n.velocityCheck)
                        }, this.velocityCheck = function(e) {
                            e.timestamp !== n.lastUpdated && (n.prev = n.current, n.velocityUpdateSubscribers.notify(n.getVelocity()))
                        }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = (t = this.current, !isNaN(parseFloat(t)))
                    }
                    return e.prototype.onChange = function(e) {
                        return this.updateSubscribers.add(e)
                    }, e.prototype.clearListeners = function() {
                        this.updateSubscribers.clear()
                    }, e.prototype.onRenderRequest = function(e) {
                        return e(this.get()), this.renderSubscribers.add(e)
                    }, e.prototype.attach = function(e) {
                        this.passiveEffect = e
                    }, e.prototype.set = function(e, t) {
                        void 0 === t && (t = !0), t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
                    }, e.prototype.get = function() {
                        return this.current
                    }, e.prototype.getPrevious = function() {
                        return this.prev
                    }, e.prototype.getVelocity = function() {
                        return this.canTrackVelocity ? Mo(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                    }, e.prototype.start = function(e) {
                        var t = this;
                        return this.stop(), new Promise((function(n) {
                            t.hasAnimated = !0, t.stopAnimation = e(n)
                        })).then((function() {
                            return t.clearAnimation()
                        }))
                    }, e.prototype.stop = function() {
                        this.stopAnimation && this.stopAnimation(), this.clearAnimation()
                    }, e.prototype.isAnimating = function() {
                        return !!this.stopAnimation
                    }, e.prototype.clearAnimation = function() {
                        this.stopAnimation = null
                    }, e.prototype.destroy = function() {
                        this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop()
                    }, e
                }();

            function Si(e) {
                return new xi(e)
            }
            var ki = function(e) {
                    return function(t) {
                        return t.test(e)
                    }
                },
                Ei = [En, wn, bn, gn, Sn, xn, {
                    test: function(e) {
                        return "auto" === e
                    },
                    parse: function(e) {
                        return e
                    }
                }],
                Ci = function(e) {
                    return Ei.find(ki(e))
                },
                Pi = ht(ht([], pt(Ei), !1), [Na, Ia], !1),
                Ti = function(e) {
                    return Pi.find(ki(e))
                };

            function ji(e, t, n) {
                e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Si(n))
            }

            function Ni(e, t) {
                var n = It(e, t),
                    r = n ? e.makeTargetAnimatable(n, !1) : {},
                    a = r.transitionEnd,
                    o = void 0 === a ? {} : a;
                r.transition;
                var i = ft(r, ["transitionEnd", "transition"]);
                for (var l in i = ct(ct({}, i), o)) {
                    ji(e, l, tr(i[l]))
                }
            }

            function Li(e, t) {
                if (t) return (t[e] || t.default || t).from
            }

            function Oi(e, t, n) {
                var r;
                void 0 === n && (n = {});
                var a = It(e, t, n.custom),
                    o = (a || {}).transition,
                    i = void 0 === o ? e.getDefaultTransition() || {} : o;
                n.transitionOverride && (i = n.transitionOverride);
                var l = a ? function() {
                        return Ri(e, a, n)
                    } : function() {
                        return Promise.resolve()
                    },
                    u = (null === (r = e.variantChildren) || void 0 === r ? void 0 : r.size) ? function(r) {
                        void 0 === r && (r = 0);
                        var a = i.delayChildren,
                            o = void 0 === a ? 0 : a,
                            l = i.staggerChildren,
                            u = i.staggerDirection;
                        return function(e, t, n, r, a, o) {
                            void 0 === n && (n = 0);
                            void 0 === r && (r = 0);
                            void 0 === a && (a = 1);
                            var i = [],
                                l = (e.variantChildren.size - 1) * r,
                                u = 1 === a ? function(e) {
                                    return void 0 === e && (e = 0), e * r
                                } : function(e) {
                                    return void 0 === e && (e = 0), l - e * r
                                };
                            return Array.from(e.variantChildren).sort(Mi).forEach((function(e, r) {
                                i.push(Oi(e, t, ct(ct({}, o), {
                                    delay: n + u(r)
                                })).then((function() {
                                    return e.notifyAnimationComplete(t)
                                })))
                            })), Promise.all(i)
                        }(e, t, o + r, l, u, n)
                    } : function() {
                        return Promise.resolve()
                    },
                    s = i.when;
                if (s) {
                    var c = pt("beforeChildren" === s ? [l, u] : [u, l], 2),
                        f = c[0],
                        d = c[1];
                    return f().then(d)
                }
                return Promise.all([l(), u(n.delay)])
            }

            function Ri(e, t, n) {
                var r, a = void 0 === n ? {} : n,
                    o = a.delay,
                    i = void 0 === o ? 0 : o,
                    l = a.transitionOverride,
                    u = a.type,
                    s = e.makeTargetAnimatable(t),
                    c = s.transition,
                    f = void 0 === c ? e.getDefaultTransition() : c,
                    d = s.transitionEnd,
                    p = ft(s, ["transition", "transitionEnd"]);
                l && (f = l);
                var h = [],
                    v = u && (null === (r = e.animationState) || void 0 === r ? void 0 : r.getState()[u]);
                for (var m in p) {
                    var y = e.getValue(m),
                        g = p[m];
                    if (!(!y || void 0 === g || v && _i(v, m))) {
                        var b = ct({
                            delay: i
                        }, f);
                        e.shouldReduceMotion && nn(m) && (b = ct(ct({}, b), {
                            type: !1,
                            delay: 0
                        }));
                        var w = vi(m, y, g, b);
                        h.push(w)
                    }
                }
                return Promise.all(h).then((function() {
                    d && Ni(e, d)
                }))
            }

            function Mi(e, t) {
                return e.sortNodePosition(t)
            }

            function _i(e, t) {
                var n = e.protectedKeys,
                    r = e.needsAnimating,
                    a = n.hasOwnProperty(t) && !0 !== r[t];
                return r[t] = !1, a
            }
            var Ai = [ir.Animate, ir.InView, ir.Focus, ir.Hover, ir.Tap, ir.Drag, ir.Exit],
                Ii = ht([], pt(Ai), !1).reverse(),
                zi = Ai.length;

            function Di(e) {
                return function(t) {
                    return Promise.all(t.map((function(t) {
                        var n = t.animation,
                            r = t.options;
                        return function(e, t, n) {
                            var r;
                            if (void 0 === n && (n = {}), e.notifyAnimationStart(t), Array.isArray(t)) {
                                var a = t.map((function(t) {
                                    return Oi(e, t, n)
                                }));
                                r = Promise.all(a)
                            } else if ("string" === typeof t) r = Oi(e, t, n);
                            else {
                                var o = "function" === typeof t ? It(e, t, n.custom) : t;
                                r = Ri(e, o, n)
                            }
                            return r.then((function() {
                                return e.notifyAnimationComplete(t)
                            }))
                        }(e, n, r)
                    })))
                }
            }

            function Vi(e) {
                var t = Di(e),
                    n = function() {
                        var e;
                        return (e = {})[ir.Animate] = Fi(!0), e[ir.InView] = Fi(), e[ir.Hover] = Fi(), e[ir.Tap] = Fi(), e[ir.Drag] = Fi(), e[ir.Focus] = Fi(), e[ir.Exit] = Fi(), e
                    }(),
                    r = {},
                    a = !0,
                    o = function(t, n) {
                        var r = It(e, n);
                        if (r) {
                            r.transition;
                            var a = r.transitionEnd,
                                o = ft(r, ["transition", "transitionEnd"]);
                            t = ct(ct(ct({}, t), o), a)
                        }
                        return t
                    };

                function i(i, l) {
                    for (var u, s = e.getProps(), c = e.getVariantContext(!0) || {}, f = [], d = new Set, p = {}, h = 1 / 0, v = function(t) {
                            var r = Ii[t],
                                v = n[r],
                                m = null !== (u = s[r]) && void 0 !== u ? u : c[r],
                                y = _t(m),
                                g = r === l ? v.isActive : null;
                            !1 === g && (h = t);
                            var b = m === c[r] && m !== s[r] && y;
                            if (b && a && e.manuallyAnimateOnMount && (b = !1), v.protectedKeys = ct({}, p), !v.isActive && null === g || !m && !v.prevProp || Zn(m) || "boolean" === typeof m) return "continue";
                            var w = function(e, t) {
                                    if ("string" === typeof t) return t !== e;
                                    if (Mt(t)) return !Gr(t, e);
                                    return !1
                                }(v.prevProp, m),
                                x = w || r === l && v.isActive && !b && y || t > h && y,
                                S = Array.isArray(m) ? m : [m],
                                k = S.reduce(o, {});
                            !1 === g && (k = {});
                            var E = v.prevResolvedValues,
                                C = void 0 === E ? {} : E,
                                P = ct(ct({}, C), k),
                                T = function(e) {
                                    x = !0, d.delete(e), v.needsAnimating[e] = !0
                                };
                            for (var j in P) {
                                var N = k[j],
                                    L = C[j];
                                p.hasOwnProperty(j) || (N !== L ? Jn(N) && Jn(L) ? !Gr(N, L) || w ? T(j) : v.protectedKeys[j] = !0 : void 0 !== N ? T(j) : d.add(j) : void 0 !== N && d.has(j) ? T(j) : v.protectedKeys[j] = !0)
                            }
                            v.prevProp = m, v.prevResolvedValues = k, v.isActive && (p = ct(ct({}, p), k)), a && e.blockInitialAnimation && (x = !1), x && !b && f.push.apply(f, ht([], pt(S.map((function(e) {
                                return {
                                    animation: e,
                                    options: ct({
                                        type: r
                                    }, i)
                                }
                            }))), !1))
                        }, m = 0; m < zi; m++) v(m);
                    if (r = ct({}, p), d.size) {
                        var y = {};
                        d.forEach((function(t) {
                            var n = e.getBaseTarget(t);
                            void 0 !== n && (y[t] = n)
                        })), f.push({
                            animation: y
                        })
                    }
                    var g = Boolean(f.length);
                    return a && !1 === s.initial && !e.manuallyAnimateOnMount && (g = !1), a = !1, g ? t(f) : Promise.resolve()
                }
                return {
                    isAnimated: function(e) {
                        return void 0 !== r[e]
                    },
                    animateChanges: i,
                    setActive: function(t, r, a) {
                        var o;
                        if (n[t].isActive === r) return Promise.resolve();
                        null === (o = e.variantChildren) || void 0 === o || o.forEach((function(e) {
                            var n;
                            return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, r)
                        })), n[t].isActive = r;
                        var l = i(a, t);
                        for (var u in n) n[u].protectedKeys = {};
                        return l
                    },
                    setAnimateFunction: function(n) {
                        t = n(e)
                    },
                    getState: function() {
                        return n
                    }
                }
            }

            function Fi(e) {
                return void 0 === e && (e = !1), {
                    isActive: e,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            var Ui = {
                    animation: $r((function(e) {
                        var n = e.visualElement,
                            r = e.animate;
                        n.animationState || (n.animationState = Vi(n)), Zn(r) && (0, t.useEffect)((function() {
                            return r.subscribe(n)
                        }), [r])
                    })),
                    exit: $r((function(e) {
                        var n = e.custom,
                            r = e.visualElement,
                            a = pt(Xr(), 2),
                            o = a[0],
                            i = a[1],
                            l = (0, t.useContext)(Ct);
                        (0, t.useEffect)((function() {
                            var e, t;
                            r.isPresent = o;
                            var a = null === (e = r.animationState) || void 0 === e ? void 0 : e.setActive(ir.Exit, !o, {
                                custom: null !== (t = null === l || void 0 === l ? void 0 : l.custom) && void 0 !== t ? t : n
                            });
                            !o && (null === a || void 0 === a || a.then(i))
                        }), [o])
                    }))
                },
                Bi = function(e) {
                    return e.hasOwnProperty("x") && e.hasOwnProperty("y")
                },
                Wi = function(e) {
                    return Bi(e) && e.hasOwnProperty("z")
                },
                Hi = function(e, t) {
                    return Math.abs(e - t)
                };

            function $i(e, t) {
                if (za(e) && za(t)) return Hi(e, t);
                if (Bi(e) && Bi(t)) {
                    var n = Hi(e.x, t.x),
                        r = Hi(e.y, t.y),
                        a = Wi(e) && Wi(t) ? Hi(e.z, t.z) : 0;
                    return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(a, 2))
                }
            }
            var Qi = function() {
                function e(e, t, n) {
                    var r = this,
                        a = (void 0 === n ? {} : n).transformPagePoint;
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function() {
                            if (r.lastMoveEvent && r.lastMoveEventInfo) {
                                var e = qi(r.lastMoveEventInfo, r.history),
                                    t = null !== r.startEvent,
                                    n = $i(e.offset, {
                                        x: 0,
                                        y: 0
                                    }) >= 3;
                                if (t || n) {
                                    var a = e.point,
                                        o = jo().timestamp;
                                    r.history.push(ct(ct({}, a), {
                                        timestamp: o
                                    }));
                                    var i = r.handlers,
                                        l = i.onStart,
                                        u = i.onMove;
                                    t || (l && l(r.lastMoveEvent, e), r.startEvent = r.lastMoveEvent), u && u(r.lastMoveEvent, e)
                                }
                            }
                        }, this.handlePointerMove = function(e, t) {
                            r.lastMoveEvent = e, r.lastMoveEventInfo = Ki(t, r.transformPagePoint), fr(e) && 0 === e.buttons ? r.handlePointerUp(e, t) : No.update(r.updatePoint, !0)
                        }, this.handlePointerUp = function(e, t) {
                            r.end();
                            var n = r.handlers,
                                a = n.onEnd,
                                o = n.onSessionEnd,
                                i = qi(Ki(t, r.transformPagePoint), r.history);
                            r.startEvent && a && a(e, i), o && o(e, i)
                        }, !(dr(e) && e.touches.length > 1)) {
                        this.handlers = t, this.transformPagePoint = a;
                        var o = Ki(mr(e), this.transformPagePoint),
                            i = o.point,
                            l = jo().timestamp;
                        this.history = [ct(ct({}, i), {
                            timestamp: l
                        })];
                        var u = t.onSessionStart;
                        u && u(e, qi(o, this.history)), this.removeListeners = Ar(Er(window, "pointermove", this.handlePointerMove), Er(window, "pointerup", this.handlePointerUp), Er(window, "pointercancel", this.handlePointerUp))
                    }
                }
                return e.prototype.updateHandlers = function(e) {
                    this.handlers = e
                }, e.prototype.end = function() {
                    this.removeListeners && this.removeListeners(), ko.update(this.updatePoint)
                }, e
            }();

            function Ki(e, t) {
                return t ? {
                    point: t(e.point)
                } : e
            }

            function Yi(e, t) {
                return {
                    x: e.x - t.x,
                    y: e.y - t.y
                }
            }

            function qi(e, t) {
                var n = e.point;
                return {
                    point: n,
                    delta: Yi(n, Gi(t)),
                    offset: Yi(n, Xi(t)),
                    velocity: Zi(t, .1)
                }
            }

            function Xi(e) {
                return e[0]
            }

            function Gi(e) {
                return e[e.length - 1]
            }

            function Zi(e, t) {
                if (e.length < 2) return {
                    x: 0,
                    y: 0
                };
                for (var n = e.length - 1, r = null, a = Gi(e); n >= 0 && (r = e[n], !(a.timestamp - r.timestamp > _o(t)));) n--;
                if (!r) return {
                    x: 0,
                    y: 0
                };
                var o = (a.timestamp - r.timestamp) / 1e3;
                if (0 === o) return {
                    x: 0,
                    y: 0
                };
                var i = {
                    x: (a.x - r.x) / o,
                    y: (a.y - r.y) / o
                };
                return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i
            }

            function Ji(e) {
                return e.max - e.min
            }

            function el(e, t, n) {
                return void 0 === t && (t = 0), void 0 === n && (n = .01), $i(e, t) < n
            }

            function tl(e, t, n, r) {
                void 0 === r && (r = .5), e.origin = r, e.originPoint = pa(t.min, t.max, e.origin), e.scale = Ji(n) / Ji(t), (el(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = pa(n.min, n.max, e.origin) - e.originPoint, (el(e.translate) || isNaN(e.translate)) && (e.translate = 0)
            }

            function nl(e, t, n, r) {
                tl(e.x, t.x, n.x, null === r || void 0 === r ? void 0 : r.originX), tl(e.y, t.y, n.y, null === r || void 0 === r ? void 0 : r.originY)
            }

            function rl(e, t, n) {
                e.min = n.min + t.min, e.max = e.min + Ji(t)
            }

            function al(e, t, n) {
                e.min = t.min - n.min, e.max = e.min + Ji(t)
            }

            function ol(e, t, n) {
                al(e.x, t.x, n.x), al(e.y, t.y, n.y)
            }

            function il(e, t, n) {
                return {
                    min: void 0 !== t ? e.min + t : void 0,
                    max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
                }
            }

            function ll(e, t) {
                var n, r = t.min - e.min,
                    a = t.max - e.max;
                return t.max - t.min < e.max - e.min && (r = (n = pt([a, r], 2))[0], a = n[1]), {
                    min: r,
                    max: a
                }
            }
            var ul = .35;

            function sl(e, t, n) {
                return {
                    min: cl(e, t),
                    max: cl(e, n)
                }
            }

            function cl(e, t) {
                var n;
                return "number" === typeof e ? e : null !== (n = e[t]) && void 0 !== n ? n : 0
            }
            var fl = function() {
                    return {
                        x: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        },
                        y: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        }
                    }
                },
                dl = function() {
                    return {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    }
                };

            function pl(e) {
                return [e("x"), e("y")]
            }

            function hl(e) {
                var t = e.top;
                return {
                    x: {
                        min: e.left,
                        max: e.right
                    },
                    y: {
                        min: t,
                        max: e.bottom
                    }
                }
            }

            function vl(e) {
                return void 0 === e || 1 === e
            }

            function ml(e) {
                var t = e.scale,
                    n = e.scaleX,
                    r = e.scaleY;
                return !vl(t) || !vl(n) || !vl(r)
            }

            function yl(e) {
                return ml(e) || gl(e.x) || gl(e.y) || e.z || e.rotate || e.rotateX || e.rotateY
            }

            function gl(e) {
                return e && "0%" !== e
            }

            function bl(e, t, n) {
                return n + t * (e - n)
            }

            function wl(e, t, n, r, a) {
                return void 0 !== a && (e = bl(e, a, r)), bl(e, n, r) + t
            }

            function xl(e, t, n, r, a) {
                void 0 === t && (t = 0), void 0 === n && (n = 1), e.min = wl(e.min, t, n, r, a), e.max = wl(e.max, t, n, r, a)
            }

            function Sl(e, t) {
                var n = t.x,
                    r = t.y;
                xl(e.x, n.translate, n.scale, n.originPoint), xl(e.y, r.translate, r.scale, r.originPoint)
            }

            function kl(e, t) {
                e.min = e.min + t, e.max = e.max + t
            }

            function El(e, t, n) {
                var r = pt(n, 3),
                    a = r[0],
                    o = r[1],
                    i = r[2],
                    l = void 0 !== t[i] ? t[i] : .5,
                    u = pa(e.min, e.max, l);
                xl(e, t[a], t[o], u, t.scale)
            }
            var Cl = ["x", "scaleX", "originX"],
                Pl = ["y", "scaleY", "originY"];

            function Tl(e, t) {
                El(e.x, t, Cl), El(e.y, t, Pl)
            }

            function jl(e, t) {
                return hl(function(e, t) {
                    if (!t) return e;
                    var n = t({
                            x: e.left,
                            y: e.top
                        }),
                        r = t({
                            x: e.right,
                            y: e.bottom
                        });
                    return {
                        top: n.y,
                        left: n.x,
                        bottom: r.y,
                        right: r.x
                    }
                }(e.getBoundingClientRect(), t))
            }
            var Nl = new WeakMap,
                Ll = function() {
                    function e(e) {
                        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                            x: 0,
                            y: 0
                        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = dl(), this.visualElement = e
                    }
                    return e.prototype.start = function(e, t) {
                        var n = this,
                            r = (void 0 === t ? {} : t).snapToCursor,
                            a = void 0 !== r && r;
                        if (!1 !== this.visualElement.isPresent) {
                            this.panSession = new Qi(e, {
                                onSessionStart: function(e) {
                                    n.stopAnimation(), a && n.snapToCursor(mr(e, "page").point)
                                },
                                onStart: function(e, t) {
                                    var r, a = n.getProps(),
                                        o = a.drag,
                                        i = a.dragPropagation,
                                        l = a.onDragStart;
                                    (!o || i || (n.openGlobalLock && n.openGlobalLock(), n.openGlobalLock = Nr(o), n.openGlobalLock)) && (n.isDragging = !0, n.currentDirection = null, n.resolveConstraints(), n.visualElement.projection && (n.visualElement.projection.isAnimationBlocked = !0, n.visualElement.projection.target = void 0), pl((function(e) {
                                        var t, r, a = n.getAxisMotionValue(e).get() || 0;
                                        if (bn.test(a)) {
                                            var o = null === (r = null === (t = n.visualElement.projection) || void 0 === t ? void 0 : t.layout) || void 0 === r ? void 0 : r.actual[e];
                                            if (o) a = Ji(o) * (parseFloat(a) / 100)
                                        }
                                        n.originPoint[e] = a
                                    })), null === l || void 0 === l || l(e, t), null === (r = n.visualElement.animationState) || void 0 === r || r.setActive(ir.Drag, !0))
                                },
                                onMove: function(e, t) {
                                    var r = n.getProps(),
                                        a = r.dragPropagation,
                                        o = r.dragDirectionLock,
                                        i = r.onDirectionLock,
                                        l = r.onDrag;
                                    if (a || n.openGlobalLock) {
                                        var u = t.offset;
                                        if (o && null === n.currentDirection) return n.currentDirection = function(e, t) {
                                            void 0 === t && (t = 10);
                                            var n = null;
                                            Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x");
                                            return n
                                        }(u), void(null !== n.currentDirection && (null === i || void 0 === i || i(n.currentDirection)));
                                        n.updateAxis("x", t.point, u), n.updateAxis("y", t.point, u), n.visualElement.syncRender(), null === l || void 0 === l || l(e, t)
                                    }
                                },
                                onSessionEnd: function(e, t) {
                                    return n.stop(e, t)
                                }
                            }, {
                                transformPagePoint: this.visualElement.getTransformPagePoint()
                            })
                        }
                    }, e.prototype.stop = function(e, t) {
                        var n = this.isDragging;
                        if (this.cancel(), n) {
                            var r = t.velocity;
                            this.startAnimation(r);
                            var a = this.getProps().onDragEnd;
                            null === a || void 0 === a || a(e, t)
                        }
                    }, e.prototype.cancel = function() {
                        var e, t;
                        this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (e = this.panSession) || void 0 === e || e.end(), this.panSession = void 0, !this.getProps().dragPropagation && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (t = this.visualElement.animationState) || void 0 === t || t.setActive(ir.Drag, !1)
                    }, e.prototype.updateAxis = function(e, t, n) {
                        var r = this.getProps().drag;
                        if (n && Ol(e, r, this.currentDirection)) {
                            var a = this.getAxisMotionValue(e),
                                o = this.originPoint[e] + n[e];
                            this.constraints && this.constraints[e] && (o = function(e, t, n) {
                                var r = t.min,
                                    a = t.max;
                                return void 0 !== r && e < r ? e = n ? pa(r, e, n.min) : Math.max(e, r) : void 0 !== a && e > a && (e = n ? pa(a, e, n.max) : Math.min(e, a)), e
                            }(o, this.constraints[e], this.elastic[e])), a.set(o)
                        }
                    }, e.prototype.resolveConstraints = function() {
                        var e = this,
                            t = this.getProps(),
                            n = t.dragConstraints,
                            r = t.dragElastic,
                            a = (this.visualElement.projection || {}).layout,
                            o = this.constraints;
                        n && Rt(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!n || !a) && function(e, t) {
                            var n = t.top,
                                r = t.left,
                                a = t.bottom,
                                o = t.right;
                            return {
                                x: il(e.x, r, o),
                                y: il(e.y, n, a)
                            }
                        }(a.actual, n), this.elastic = function(e) {
                            return void 0 === e && (e = ul), !1 === e ? e = 0 : !0 === e && (e = ul), {
                                x: sl(e, "left", "right"),
                                y: sl(e, "top", "bottom")
                            }
                        }(r), o !== this.constraints && a && this.constraints && !this.hasMutatedConstraints && pl((function(t) {
                            e.getAxisMotionValue(t) && (e.constraints[t] = function(e, t) {
                                var n = {};
                                return void 0 !== t.min && (n.min = t.min - e.min), void 0 !== t.max && (n.max = t.max - e.min), n
                            }(a.actual[t], e.constraints[t]))
                        }))
                    }, e.prototype.resolveRefConstraints = function() {
                        var e = this.getProps(),
                            t = e.dragConstraints,
                            n = e.onMeasureDragConstraints;
                        if (!t || !Rt(t)) return !1;
                        var r = t.current;
                        bt(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                        var a = this.visualElement.projection;
                        if (!a || !a.layout) return !1;
                        var o = function(e, t, n) {
                                var r = jl(e, n),
                                    a = t.scroll;
                                return a && (kl(r.x, a.x), kl(r.y, a.y)), r
                            }(r, a.root, this.visualElement.getTransformPagePoint()),
                            i = function(e, t) {
                                return {
                                    x: ll(e.x, t.x),
                                    y: ll(e.y, t.y)
                                }
                            }(a.layout.actual, o);
                        if (n) {
                            var l = n(function(e) {
                                var t = e.x,
                                    n = e.y;
                                return {
                                    top: n.min,
                                    right: t.max,
                                    bottom: n.max,
                                    left: t.min
                                }
                            }(i));
                            this.hasMutatedConstraints = !!l, l && (i = hl(l))
                        }
                        return i
                    }, e.prototype.startAnimation = function(e) {
                        var t = this,
                            n = this.getProps(),
                            r = n.drag,
                            a = n.dragMomentum,
                            o = n.dragElastic,
                            i = n.dragTransition,
                            l = n.dragSnapToOrigin,
                            u = n.onDragTransitionEnd,
                            s = this.constraints || {},
                            c = pl((function(n) {
                                var u;
                                if (Ol(n, r, t.currentDirection)) {
                                    var c = null !== (u = null === s || void 0 === s ? void 0 : s[n]) && void 0 !== u ? u : {};
                                    l && (c = {
                                        min: 0,
                                        max: 0
                                    });
                                    var f = o ? 200 : 1e6,
                                        d = o ? 40 : 1e7,
                                        p = ct(ct({
                                            type: "inertia",
                                            velocity: a ? e[n] : 0,
                                            bounceStiffness: f,
                                            bounceDamping: d,
                                            timeConstant: 750,
                                            restDelta: 1,
                                            restSpeed: 10
                                        }, i), c);
                                    return t.startAxisValueAnimation(n, p)
                                }
                            }));
                        return Promise.all(c).then(u)
                    }, e.prototype.startAxisValueAnimation = function(e, t) {
                        return vi(e, this.getAxisMotionValue(e), 0, t)
                    }, e.prototype.stopAnimation = function() {
                        var e = this;
                        pl((function(t) {
                            return e.getAxisMotionValue(t).stop()
                        }))
                    }, e.prototype.getAxisMotionValue = function(e) {
                        var t, n, r = "_drag" + e.toUpperCase(),
                            a = this.visualElement.getProps()[r];
                        return a || this.visualElement.getValue(e, null !== (n = null === (t = this.visualElement.getProps().initial) || void 0 === t ? void 0 : t[e]) && void 0 !== n ? n : 0)
                    }, e.prototype.snapToCursor = function(e) {
                        var t = this;
                        pl((function(n) {
                            if (Ol(n, t.getProps().drag, t.currentDirection)) {
                                var r = t.visualElement.projection,
                                    a = t.getAxisMotionValue(n);
                                if (r && r.layout) {
                                    var o = r.layout.actual[n],
                                        i = o.min,
                                        l = o.max;
                                    a.set(e[n] - pa(i, l, .5))
                                }
                            }
                        }))
                    }, e.prototype.scalePositionWithinConstraints = function() {
                        var e, t = this,
                            n = this.getProps(),
                            r = n.drag,
                            a = n.dragConstraints,
                            o = this.visualElement.projection;
                        if (Rt(a) && o && this.constraints) {
                            this.stopAnimation();
                            var i = {
                                x: 0,
                                y: 0
                            };
                            pl((function(e) {
                                var n = t.getAxisMotionValue(e);
                                if (n) {
                                    var r = n.get();
                                    i[e] = function(e, t) {
                                        var n = .5,
                                            r = Ji(e),
                                            a = Ji(t);
                                        return a > r ? n = da(t.min, t.max - r, e.min) : r > a && (n = da(e.min, e.max - a, t.min)), Zr(0, 1, n)
                                    }({
                                        min: r,
                                        max: r
                                    }, t.constraints[e])
                                }
                            }));
                            var l = this.visualElement.getProps().transformTemplate;
                            this.visualElement.getInstance().style.transform = l ? l({}, "") : "none", null === (e = o.root) || void 0 === e || e.updateScroll(), o.updateLayout(), this.resolveConstraints(), pl((function(e) {
                                if (Ol(e, r, null)) {
                                    var n = t.getAxisMotionValue(e),
                                        a = t.constraints[e],
                                        o = a.min,
                                        l = a.max;
                                    n.set(pa(o, l, i[e]))
                                }
                            }))
                        }
                    }, e.prototype.addListeners = function() {
                        var e, t = this;
                        Nl.set(this.visualElement, this);
                        var n = Er(this.visualElement.getInstance(), "pointerdown", (function(e) {
                                var n = t.getProps(),
                                    r = n.drag,
                                    a = n.dragListener;
                                r && (void 0 === a || a) && t.start(e)
                            })),
                            r = function() {
                                Rt(t.getProps().dragConstraints) && (t.constraints = t.resolveRefConstraints())
                            },
                            a = this.visualElement.projection,
                            o = a.addEventListener("measure", r);
                        a && !a.layout && (null === (e = a.root) || void 0 === e || e.updateScroll(), a.updateLayout()), r();
                        var i = sr(window, "resize", (function() {
                            return t.scalePositionWithinConstraints()
                        }));
                        return a.addEventListener("didUpdate", (function(e) {
                                var n = e.delta,
                                    r = e.hasLayoutChanged;
                                t.isDragging && r && (pl((function(e) {
                                    var r = t.getAxisMotionValue(e);
                                    r && (t.originPoint[e] += n[e].translate, r.set(r.get() + n[e].translate))
                                })), t.visualElement.syncRender())
                            })),
                            function() {
                                i(), n(), o()
                            }
                    }, e.prototype.getProps = function() {
                        var e = this.visualElement.getProps(),
                            t = e.drag,
                            n = void 0 !== t && t,
                            r = e.dragDirectionLock,
                            a = void 0 !== r && r,
                            o = e.dragPropagation,
                            i = void 0 !== o && o,
                            l = e.dragConstraints,
                            u = void 0 !== l && l,
                            s = e.dragElastic,
                            c = void 0 === s ? ul : s,
                            f = e.dragMomentum,
                            d = void 0 === f || f;
                        return ct(ct({}, e), {
                            drag: n,
                            dragDirectionLock: a,
                            dragPropagation: i,
                            dragConstraints: u,
                            dragElastic: c,
                            dragMomentum: d
                        })
                    }, e
                }();

            function Ol(e, t, n) {
                return (!0 === t || t === e) && (null === n || n === e)
            }
            var Rl = {
                    pan: $r((function(e) {
                        var n = e.onPan,
                            r = e.onPanStart,
                            a = e.onPanEnd,
                            o = e.onPanSessionStart,
                            i = e.visualElement,
                            l = n || r || a || o,
                            u = (0, t.useRef)(null),
                            s = (0, t.useContext)(kt).transformPagePoint,
                            c = {
                                onSessionStart: o,
                                onStart: r,
                                onMove: n,
                                onEnd: function(e, t) {
                                    u.current = null, a && a(e, t)
                                }
                            };
                        (0, t.useEffect)((function() {
                            null !== u.current && u.current.updateHandlers(c)
                        })), Cr(i, "pointerdown", l && function(e) {
                            u.current = new Qi(e, c, {
                                transformPagePoint: s
                            })
                        }), Mr((function() {
                            return u.current && u.current.end()
                        }))
                    })),
                    drag: $r((function(e) {
                        var n = e.dragControls,
                            r = e.visualElement,
                            a = Ut((function() {
                                return new Ll(r)
                            }));
                        (0, t.useEffect)((function() {
                            return n && n.subscribe(a)
                        }), [a, n]), (0, t.useEffect)((function() {
                            return a.addListeners()
                        }), [a])
                    }))
                },
                Ml = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "LayoutAnimationStart", "SetAxisTarget", "Unmount"];
            var _l = function(e) {
                    var t = e.treeType,
                        n = void 0 === t ? "" : t,
                        r = e.build,
                        a = e.getBaseTarget,
                        o = e.makeTargetAnimatable,
                        i = e.measureViewportBox,
                        l = e.render,
                        u = e.readValueFromInstance,
                        s = e.removeValueFromRenderState,
                        c = e.sortNodePosition,
                        f = e.scrapeMotionValuesFromProps;
                    return function(e, t) {
                        var d = e.parent,
                            p = e.props,
                            h = e.presenceId,
                            v = e.blockInitialAnimation,
                            m = e.visualState,
                            y = e.shouldReduceMotion;
                        void 0 === t && (t = {});
                        var g, b, w = !1,
                            x = m.latestValues,
                            S = m.renderState,
                            k = function() {
                                var e = Ml.map((function() {
                                        return new wi
                                    })),
                                    t = {},
                                    n = {
                                        clearAllListeners: function() {
                                            return e.forEach((function(e) {
                                                return e.clear()
                                            }))
                                        },
                                        updatePropListeners: function(e) {
                                            Ml.forEach((function(r) {
                                                var a, o = "on" + r,
                                                    i = e[o];
                                                null === (a = t[r]) || void 0 === a || a.call(t), i && (t[r] = n[o](i))
                                            }))
                                        }
                                    };
                                return e.forEach((function(e, t) {
                                    n["on" + Ml[t]] = function(t) {
                                        return e.add(t)
                                    }, n["notify" + Ml[t]] = function() {
                                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                        return e.notify.apply(e, ht([], pt(t), !1))
                                    }
                                })), n
                            }(),
                            E = new Map,
                            C = new Map,
                            P = {},
                            T = ct({}, x);

                        function j() {
                            g && w && (N(), l(g, S, p.style, z.projection))
                        }

                        function N() {
                            r(z, S, x, t, p)
                        }

                        function L() {
                            k.notifyUpdate(x)
                        }

                        function O(e, t) {
                            var n = t.onChange((function(t) {
                                    x[e] = t, p.onUpdate && No.update(L, !1, !0)
                                })),
                                r = t.onRenderRequest(z.scheduleRender);
                            C.set(e, (function() {
                                n(), r()
                            }))
                        }
                        var R = f(p);
                        for (var M in R) {
                            var _ = R[M];
                            void 0 !== x[M] && ln(_) && _.set(x[M], !1)
                        }
                        var A = zt(p),
                            I = Dt(p),
                            z = ct(ct({
                                treeType: n,
                                current: null,
                                depth: d ? d.depth + 1 : 0,
                                parent: d,
                                children: new Set,
                                presenceId: h,
                                shouldReduceMotion: y,
                                variantChildren: I ? new Set : void 0,
                                isVisible: void 0,
                                manuallyAnimateOnMount: Boolean(null === d || void 0 === d ? void 0 : d.isMounted()),
                                blockInitialAnimation: v,
                                isMounted: function() {
                                    return Boolean(g)
                                },
                                mount: function(e) {
                                    w = !0, g = z.current = e, z.projection && z.projection.mount(e), I && d && !A && (b = null === d || void 0 === d ? void 0 : d.addVariantChild(z)), E.forEach((function(e, t) {
                                        return O(t, e)
                                    })), null === d || void 0 === d || d.children.add(z), z.setProps(p)
                                },
                                unmount: function() {
                                    var e;
                                    null === (e = z.projection) || void 0 === e || e.unmount(), ko.update(L), ko.render(j), C.forEach((function(e) {
                                        return e()
                                    })), null === b || void 0 === b || b(), null === d || void 0 === d || d.children.delete(z), k.clearAllListeners(), g = void 0, w = !1
                                },
                                addVariantChild: function(e) {
                                    var t, n = z.getClosestVariantNode();
                                    if (n) return null === (t = n.variantChildren) || void 0 === t || t.add(e),
                                        function() {
                                            return n.variantChildren.delete(e)
                                        }
                                },
                                sortNodePosition: function(e) {
                                    return c && n === e.treeType ? c(z.getInstance(), e.getInstance()) : 0
                                },
                                getClosestVariantNode: function() {
                                    return I ? z : null === d || void 0 === d ? void 0 : d.getClosestVariantNode()
                                },
                                getLayoutId: function() {
                                    return p.layoutId
                                },
                                getInstance: function() {
                                    return g
                                },
                                getStaticValue: function(e) {
                                    return x[e]
                                },
                                setStaticValue: function(e, t) {
                                    return x[e] = t
                                },
                                getLatestValues: function() {
                                    return x
                                },
                                setVisibility: function(e) {
                                    z.isVisible !== e && (z.isVisible = e, z.scheduleRender())
                                },
                                makeTargetAnimatable: function(e, t) {
                                    return void 0 === t && (t = !0), o(z, e, p, t)
                                },
                                measureViewportBox: function() {
                                    return i(g, p)
                                },
                                addValue: function(e, t) {
                                    z.hasValue(e) && z.removeValue(e), E.set(e, t), x[e] = t.get(), O(e, t)
                                },
                                removeValue: function(e) {
                                    var t;
                                    E.delete(e), null === (t = C.get(e)) || void 0 === t || t(), C.delete(e), delete x[e], s(e, S)
                                },
                                hasValue: function(e) {
                                    return E.has(e)
                                },
                                getValue: function(e, t) {
                                    var n = E.get(e);
                                    return void 0 === n && void 0 !== t && (n = Si(t), z.addValue(e, n)), n
                                },
                                forEachValue: function(e) {
                                    return E.forEach(e)
                                },
                                readValue: function(e) {
                                    var n;
                                    return null !== (n = x[e]) && void 0 !== n ? n : u(g, e, t)
                                },
                                setBaseTarget: function(e, t) {
                                    T[e] = t
                                },
                                getBaseTarget: function(e) {
                                    if (a) {
                                        var t = a(p, e);
                                        if (void 0 !== t && !ln(t)) return t
                                    }
                                    return T[e]
                                }
                            }, k), {
                                build: function() {
                                    return N(), S
                                },
                                scheduleRender: function() {
                                    No.render(j, !1, !0)
                                },
                                syncRender: j,
                                setProps: function(e) {
                                    (e.transformTemplate || p.transformTemplate) && z.scheduleRender(), p = e, k.updatePropListeners(e), P = function(e, t, n) {
                                        var r;
                                        for (var a in t) {
                                            var o = t[a],
                                                i = n[a];
                                            if (ln(o)) e.addValue(a, o);
                                            else if (ln(i)) e.addValue(a, Si(o));
                                            else if (i !== o)
                                                if (e.hasValue(a)) {
                                                    var l = e.getValue(a);
                                                    !l.hasAnimated && l.set(o)
                                                } else e.addValue(a, Si(null !== (r = e.getStaticValue(a)) && void 0 !== r ? r : o))
                                        }
                                        for (var a in n) void 0 === t[a] && e.removeValue(a);
                                        return t
                                    }(z, f(p), P)
                                },
                                getProps: function() {
                                    return p
                                },
                                getVariant: function(e) {
                                    var t;
                                    return null === (t = p.variants) || void 0 === t ? void 0 : t[e]
                                },
                                getDefaultTransition: function() {
                                    return p.transition
                                },
                                getTransformPagePoint: function() {
                                    return p.transformPagePoint
                                },
                                getVariantContext: function(e) {
                                    if (void 0 === e && (e = !1), e) return null === d || void 0 === d ? void 0 : d.getVariantContext();
                                    if (!A) {
                                        var t = (null === d || void 0 === d ? void 0 : d.getVariantContext()) || {};
                                        return void 0 !== p.initial && (t.initial = p.initial), t
                                    }
                                    for (var n = {}, r = 0; r < Il; r++) {
                                        var a = Al[r],
                                            o = p[a];
                                        (_t(o) || !1 === o) && (n[a] = o)
                                    }
                                    return n
                                }
                            });
                        return z
                    }
                },
                Al = ht(["initial"], pt(Ai), !1),
                Il = Al.length;

            function zl(e) {
                return "string" === typeof e && e.startsWith("var(--")
            }
            var Dl = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
            var Vl = 4;

            function Fl(e, t, n) {
                void 0 === n && (n = 1), bt(n <= Vl, 'Max CSS variable fallback depth detected in property "'.concat(e, '". This may indicate a circular fallback dependency.'));
                var r = pt(function(e) {
                        var t = Dl.exec(e);
                        if (!t) return [, ];
                        var n = pt(t, 3);
                        return [n[1], n[2]]
                    }(e), 2),
                    a = r[0],
                    o = r[1];
                if (a) {
                    var i = window.getComputedStyle(t).getPropertyValue(a);
                    return i ? i.trim() : zl(o) ? Fl(o, t, n + 1) : o
                }
            }
            var Ul, Bl = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
                Wl = function(e) {
                    return Bl.has(e)
                },
                Hl = function(e, t) {
                    e.set(t, !1), e.set(t)
                },
                $l = function(e) {
                    return e === En || e === wn
                };
            ! function(e) {
                e.width = "width", e.height = "height", e.left = "left", e.right = "right", e.top = "top", e.bottom = "bottom"
            }(Ul || (Ul = {}));
            var Ql = function(e, t) {
                    return parseFloat(e.split(", ")[t])
                },
                Kl = function(e, t) {
                    return function(n, r) {
                        var a = r.transform;
                        if ("none" === a || !a) return 0;
                        var o = a.match(/^matrix3d\((.+)\)$/);
                        if (o) return Ql(o[1], t);
                        var i = a.match(/^matrix\((.+)\)$/);
                        return i ? Ql(i[1], e) : 0
                    }
                },
                Yl = new Set(["x", "y", "z"]),
                ql = Jt.filter((function(e) {
                    return !Yl.has(e)
                }));
            var Xl = {
                    width: function(e, t) {
                        var n = e.x,
                            r = t.paddingLeft,
                            a = void 0 === r ? "0" : r,
                            o = t.paddingRight,
                            i = void 0 === o ? "0" : o;
                        return n.max - n.min - parseFloat(a) - parseFloat(i)
                    },
                    height: function(e, t) {
                        var n = e.y,
                            r = t.paddingTop,
                            a = void 0 === r ? "0" : r,
                            o = t.paddingBottom,
                            i = void 0 === o ? "0" : o;
                        return n.max - n.min - parseFloat(a) - parseFloat(i)
                    },
                    top: function(e, t) {
                        var n = t.top;
                        return parseFloat(n)
                    },
                    left: function(e, t) {
                        var n = t.left;
                        return parseFloat(n)
                    },
                    bottom: function(e, t) {
                        var n = e.y,
                            r = t.top;
                        return parseFloat(r) + (n.max - n.min)
                    },
                    right: function(e, t) {
                        var n = e.x,
                            r = t.left;
                        return parseFloat(r) + (n.max - n.min)
                    },
                    x: Kl(4, 13),
                    y: Kl(5, 14)
                },
                Gl = function(e, t, n, r) {
                    void 0 === n && (n = {}), void 0 === r && (r = {}), t = ct({}, t), r = ct({}, r);
                    var a = Object.keys(t).filter(Wl),
                        o = [],
                        i = !1,
                        l = [];
                    if (a.forEach((function(a) {
                            var u = e.getValue(a);
                            if (e.hasValue(a)) {
                                var s, c = n[a],
                                    f = Ci(c),
                                    d = t[a];
                                if (Jn(d)) {
                                    var p = d.length,
                                        h = null === d[0] ? 1 : 0;
                                    c = d[h], f = Ci(c);
                                    for (var v = h; v < p; v++) s ? bt(Ci(d[v]) === s, "All keyframes must be of the same type") : (s = Ci(d[v]), bt(s === f || $l(f) && $l(s), "Keyframes must be of the same dimension as the current value"))
                                } else s = Ci(d);
                                if (f !== s)
                                    if ($l(f) && $l(s)) {
                                        var m = u.get();
                                        "string" === typeof m && u.set(parseFloat(m)), "string" === typeof d ? t[a] = parseFloat(d) : Array.isArray(d) && s === wn && (t[a] = d.map(parseFloat))
                                    } else(null === f || void 0 === f ? void 0 : f.transform) && (null === s || void 0 === s ? void 0 : s.transform) && (0 === c || 0 === d) ? 0 === c ? u.set(s.transform(c)) : t[a] = f.transform(d) : (i || (o = function(e) {
                                        var t = [];
                                        return ql.forEach((function(n) {
                                            var r = e.getValue(n);
                                            void 0 !== r && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                                        })), t.length && e.syncRender(), t
                                    }(e), i = !0), l.push(a), r[a] = void 0 !== r[a] ? r[a] : t[a], Hl(u, d))
                            }
                        })), l.length) {
                        var u = l.indexOf("height") >= 0 ? window.pageYOffset : null,
                            s = function(e, t, n) {
                                var r = t.measureViewportBox(),
                                    a = t.getInstance(),
                                    o = getComputedStyle(a),
                                    i = o.display,
                                    l = {};
                                "none" === i && t.setStaticValue("display", e.display || "block"), n.forEach((function(e) {
                                    l[e] = Xl[e](r, o)
                                })), t.syncRender();
                                var u = t.measureViewportBox();
                                return n.forEach((function(n) {
                                    var r = t.getValue(n);
                                    Hl(r, l[n]), e[n] = Xl[n](u, o)
                                })), e
                            }(t, e, l);
                        return o.length && o.forEach((function(t) {
                            var n = pt(t, 2),
                                r = n[0],
                                a = n[1];
                            e.getValue(r).set(a)
                        })), e.syncRender(), null !== u && window.scrollTo({
                            top: u
                        }), {
                            target: s,
                            transitionEnd: r
                        }
                    }
                    return {
                        target: t,
                        transitionEnd: r
                    }
                };

            function Zl(e, t, n, r) {
                return function(e) {
                    return Object.keys(e).some(Wl)
                }(t) ? Gl(e, t, n, r) : {
                    target: t,
                    transitionEnd: r
                }
            }
            var Jl = function(e, t, n, r) {
                var a = function(e, t, n) {
                    var r, a = ft(t, []),
                        o = e.getInstance();
                    if (!(o instanceof Element)) return {
                        target: a,
                        transitionEnd: n
                    };
                    for (var i in n && (n = ct({}, n)), e.forEachValue((function(e) {
                            var t = e.get();
                            if (zl(t)) {
                                var n = Fl(t, o);
                                n && e.set(n)
                            }
                        })), a) {
                        var l = a[i];
                        if (zl(l)) {
                            var u = Fl(l, o);
                            u && (a[i] = u, n && (null !== (r = n[i]) && void 0 !== r || (n[i] = l)))
                        }
                    }
                    return {
                        target: a,
                        transitionEnd: n
                    }
                }(e, t, r);
                return Zl(e, t = a.target, n, r = a.transitionEnd)
            };
            var eu = {
                    treeType: "dom",
                    readValueFromInstance: function(e, t) {
                        if (nn(t)) {
                            var n = ii(t);
                            return n && n.default || 0
                        }
                        var r, a = (r = e, window.getComputedStyle(r));
                        return (sn(t) ? a.getPropertyValue(t) : a[t]) || 0
                    },
                    sortNodePosition: function(e, t) {
                        return 2 & e.compareDocumentPosition(t) ? 1 : -1
                    },
                    getBaseTarget: function(e, t) {
                        var n;
                        return null === (n = e.style) || void 0 === n ? void 0 : n[t]
                    },
                    measureViewportBox: function(e, t) {
                        return jl(e, t.transformPagePoint)
                    },
                    resetTransform: function(e, t, n) {
                        var r = n.transformTemplate;
                        t.style.transform = r ? r({}, "") : "none", e.scheduleRender()
                    },
                    restoreTransform: function(e, t) {
                        e.style.transform = t.style.transform
                    },
                    removeValueFromRenderState: function(e, t) {
                        var n = t.vars,
                            r = t.style;
                        delete n[e], delete r[e]
                    },
                    makeTargetAnimatable: function(e, t, n, r) {
                        var a = n.transformValues;
                        void 0 === r && (r = !0);
                        var o = t.transition,
                            i = t.transitionEnd,
                            l = ft(t, ["transition", "transitionEnd"]),
                            u = function(e, t, n) {
                                var r, a, o = {};
                                for (var i in e) o[i] = null !== (r = Li(i, t)) && void 0 !== r ? r : null === (a = n.getValue(i)) || void 0 === a ? void 0 : a.get();
                                return o
                            }(l, o || {}, e);
                        if (a && (i && (i = a(i)), l && (l = a(l)), u && (u = a(u))), r) {
                            ! function(e, t, n) {
                                var r, a, o, i, l = Object.keys(t).filter((function(t) {
                                        return !e.hasValue(t)
                                    })),
                                    u = l.length;
                                if (u)
                                    for (var s = 0; s < u; s++) {
                                        var c = l[s],
                                            f = t[c],
                                            d = null;
                                        Array.isArray(f) && (d = f[0]), null === d && (d = null !== (a = null !== (r = n[c]) && void 0 !== r ? r : e.readValue(c)) && void 0 !== a ? a : t[c]), void 0 !== d && null !== d && ("string" === typeof d && (mi(d) || yi(d)) ? d = parseFloat(d) : !Ti(d) && Ia.test(f) && (d = li(c, f)), e.addValue(c, Si(d)), null !== (o = (i = n)[c]) && void 0 !== o || (i[c] = d), e.setBaseTarget(c, d))
                                    }
                            }(e, l, u);
                            var s = Jl(e, l, u, i);
                            i = s.transitionEnd, l = s.target
                        }
                        return ct({
                            transition: o,
                            transitionEnd: i
                        }, l)
                    },
                    scrapeMotionValuesFromProps: Xn,
                    build: function(e, t, n, r, a) {
                        void 0 !== e.isVisible && (t.style.visibility = e.isVisible ? "visible" : "hidden"), Nn(t, n, r, a.transformTemplate)
                    },
                    render: Kn
                },
                tu = _l(eu),
                nu = _l(ct(ct({}, eu), {
                    getBaseTarget: function(e, t) {
                        return e[t]
                    },
                    readValueFromInstance: function(e, t) {
                        var n;
                        return nn(t) ? (null === (n = ii(t)) || void 0 === n ? void 0 : n.default) || 0 : (t = Yn.has(t) ? t : Qn(t), e.getAttribute(t))
                    },
                    scrapeMotionValuesFromProps: Gn,
                    build: function(e, t, n, r, a) {
                        Un(t, n, r, a.transformTemplate)
                    },
                    render: qn
                })),
                ru = function(e, t) {
                    return Xt(e) ? nu(t, {
                        enableHardwareAcceleration: !1
                    }) : tu(t, {
                        enableHardwareAcceleration: !0
                    })
                };

            function au(e, t) {
                return t.max === t.min ? 0 : e / (t.max - t.min) * 100
            }
            var ou = {
                    correct: function(e, t) {
                        if (!t.target) return e;
                        if ("string" === typeof e) {
                            if (!wn.test(e)) return e;
                            e = parseFloat(e)
                        }
                        var n = au(e, t.target.x),
                            r = au(e, t.target.y);
                        return "".concat(n, "% ").concat(r, "%")
                    }
                },
                iu = "_$css",
                lu = {
                    correct: function(e, t) {
                        var n = t.treeScale,
                            r = t.projectionDelta,
                            a = e,
                            o = e.includes("var("),
                            i = [];
                        o && (e = e.replace(Dl, (function(e) {
                            return i.push(e), iu
                        })));
                        var l = Ia.parse(e);
                        if (l.length > 5) return a;
                        var u = Ia.createTransformer(e),
                            s = "number" !== typeof l[0] ? 1 : 0,
                            c = r.x.scale * n.x,
                            f = r.y.scale * n.y;
                        l[0 + s] /= c, l[1 + s] /= f;
                        var d = pa(c, f, .5);
                        "number" === typeof l[2 + s] && (l[2 + s] /= d), "number" === typeof l[3 + s] && (l[3 + s] /= d);
                        var p = u(l);
                        if (o) {
                            var h = 0;
                            p = p.replace(iu, (function() {
                                var e = i[h];
                                return h++, e
                            }))
                        }
                        return p
                    }
                },
                uu = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return st(t, e), t.prototype.componentDidMount = function() {
                        var e, t = this,
                            n = this.props,
                            r = n.visualElement,
                            a = n.layoutGroup,
                            o = n.switchLayoutGroup,
                            i = n.layoutId,
                            l = r.projection;
                        e = su, Object.assign(Gt, e), l && ((null === a || void 0 === a ? void 0 : a.group) && a.group.add(l), (null === o || void 0 === o ? void 0 : o.register) && i && o.register(l), l.root.didUpdate(), l.addEventListener("animationComplete", (function() {
                            t.safeToRemove()
                        })), l.setOptions(ct(ct({}, l.options), {
                            onExitComplete: function() {
                                return t.safeToRemove()
                            }
                        }))), Bt.hasEverUpdated = !0
                    }, t.prototype.getSnapshotBeforeUpdate = function(e) {
                        var t = this,
                            n = this.props,
                            r = n.layoutDependency,
                            a = n.visualElement,
                            o = n.drag,
                            i = n.isPresent,
                            l = a.projection;
                        return l ? (l.isPresent = i, o || e.layoutDependency !== r || void 0 === r ? l.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? l.promote() : l.relegate() || No.postRender((function() {
                            var e;
                            (null === (e = l.getStack()) || void 0 === e ? void 0 : e.members.length) || t.safeToRemove()
                        }))), null) : null
                    }, t.prototype.componentDidUpdate = function() {
                        var e = this.props.visualElement.projection;
                        e && (e.root.didUpdate(), !e.currentAnimation && e.isLead() && this.safeToRemove())
                    }, t.prototype.componentWillUnmount = function() {
                        var e = this.props,
                            t = e.visualElement,
                            n = e.layoutGroup,
                            r = e.switchLayoutGroup,
                            a = t.projection;
                        a && (a.scheduleCheckAfterUnmount(), (null === n || void 0 === n ? void 0 : n.group) && n.group.remove(a), (null === r || void 0 === r ? void 0 : r.deregister) && r.deregister(a))
                    }, t.prototype.safeToRemove = function() {
                        var e = this.props.safeToRemove;
                        null === e || void 0 === e || e()
                    }, t.prototype.render = function() {
                        return null
                    }, t
                }(t.Component);
            var su = {
                    borderRadius: ct(ct({}, ou), {
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    }),
                    borderTopLeftRadius: ou,
                    borderTopRightRadius: ou,
                    borderBottomLeftRadius: ou,
                    borderBottomRightRadius: ou,
                    boxShadow: lu
                },
                cu = {
                    measureLayout: function(e) {
                        var n = pt(Xr(), 2),
                            r = n[0],
                            a = n[1],
                            o = (0, t.useContext)(Ht);
                        return t.createElement(uu, ct({}, e, {
                            layoutGroup: o,
                            switchLayoutGroup: (0, t.useContext)($t),
                            isPresent: r,
                            safeToRemove: a
                        }))
                    }
                };
            var fu = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                du = fu.length,
                pu = function(e) {
                    return "string" === typeof e ? parseFloat(e) : e
                },
                hu = function(e) {
                    return "number" === typeof e || wn.test(e)
                };

            function vu(e, t) {
                var n;
                return null !== (n = e[t]) && void 0 !== n ? n : e.borderRadius
            }
            var mu = gu(0, .5, to),
                yu = gu(.5, .95, Xa);

            function gu(e, t, n) {
                return function(r) {
                    return r < e ? 0 : r > t ? 1 : n(da(e, t, r))
                }
            }

            function bu(e, t) {
                e.min = t.min, e.max = t.max
            }

            function wu(e, t) {
                bu(e.x, t.x), bu(e.y, t.y)
            }

            function xu(e, t, n, r, a) {
                return e = bl(e -= t, 1 / n, r), void 0 !== a && (e = bl(e, 1 / a, r)), e
            }

            function Su(e, t, n, r, a) {
                var o = pt(n, 3),
                    i = o[0],
                    l = o[1],
                    u = o[2];
                ! function(e, t, n, r, a, o, i) {
                    if (void 0 === t && (t = 0), void 0 === n && (n = 1), void 0 === r && (r = .5), void 0 === o && (o = e), void 0 === i && (i = e), bn.test(t) && (t = parseFloat(t), t = pa(i.min, i.max, t / 100) - i.min), "number" === typeof t) {
                        var l = pa(o.min, o.max, r);
                        e === o && (l -= t), e.min = xu(e.min, t, n, l, a), e.max = xu(e.max, t, n, l, a)
                    }
                }(e, t[i], t[l], t[u], t.scale, r, a)
            }
            var ku = ["x", "scaleX", "originX"],
                Eu = ["y", "scaleY", "originY"];

            function Cu(e, t, n, r) {
                Su(e.x, t, ku, null === n || void 0 === n ? void 0 : n.x, null === r || void 0 === r ? void 0 : r.x), Su(e.y, t, Eu, null === n || void 0 === n ? void 0 : n.y, null === r || void 0 === r ? void 0 : r.y)
            }

            function Pu(e) {
                return 0 === e.translate && 1 === e.scale
            }

            function Tu(e) {
                return Pu(e.x) && Pu(e.y)
            }

            function ju(e, t) {
                return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
            }
            var Nu = function() {
                    function e() {
                        this.members = []
                    }
                    return e.prototype.add = function(e) {
                        gi(this.members, e), e.scheduleRender()
                    }, e.prototype.remove = function(e) {
                        if (bi(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
                            var t = this.members[this.members.length - 1];
                            t && this.promote(t)
                        }
                    }, e.prototype.relegate = function(e) {
                        var t, n = this.members.findIndex((function(t) {
                            return e === t
                        }));
                        if (0 === n) return !1;
                        for (var r = n; r >= 0; r--) {
                            var a = this.members[r];
                            if (!1 !== a.isPresent) {
                                t = a;
                                break
                            }
                        }
                        return !!t && (this.promote(t), !0)
                    }, e.prototype.promote = function(e, t) {
                        var n, r = this.lead;
                        e !== r && (this.prevLead = r, this.lead = e, e.show(), r && (r.instance && r.scheduleRender(), e.scheduleRender(), e.resumeFrom = r, t && (e.resumeFrom.preserveOpacity = !0), r.snapshot && (e.snapshot = r.snapshot, e.snapshot.latestValues = r.animationValues || r.latestValues, e.snapshot.isShared = !0), (null === (n = e.root) || void 0 === n ? void 0 : n.isUpdating) && (e.isLayoutDirty = !0), !1 === e.options.crossfade && r.hide()))
                    }, e.prototype.exitAnimationComplete = function() {
                        this.members.forEach((function(e) {
                            var t, n, r, a, o;
                            null === (n = (t = e.options).onExitComplete) || void 0 === n || n.call(t), null === (o = null === (r = e.resumingFrom) || void 0 === r ? void 0 : (a = r.options).onExitComplete) || void 0 === o || o.call(a)
                        }))
                    }, e.prototype.scheduleRender = function() {
                        this.members.forEach((function(e) {
                            e.instance && e.scheduleRender(!1)
                        }))
                    }, e.prototype.removeLeadSnapshot = function() {
                        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                    }, e
                }(),
                Lu = "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)";

            function Ou(e, t, n) {
                var r = e.x.translate / t.x,
                    a = e.y.translate / t.y,
                    o = "translate3d(".concat(r, "px, ").concat(a, "px, 0) ");
                if (o += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") "), n) {
                    var i = n.rotate,
                        l = n.rotateX,
                        u = n.rotateY;
                    i && (o += "rotate(".concat(i, "deg) ")), l && (o += "rotateX(".concat(l, "deg) ")), u && (o += "rotateY(".concat(u, "deg) "))
                }
                var s = e.x.scale * t.x,
                    c = e.y.scale * t.y;
                return (o += "scale(".concat(s, ", ").concat(c, ")")) === Lu ? "none" : o
            }
            var Ru = function(e, t) {
                    return e.depth - t.depth
                },
                Mu = function() {
                    function e() {
                        this.children = [], this.isDirty = !1
                    }
                    return e.prototype.add = function(e) {
                        gi(this.children, e), this.isDirty = !0
                    }, e.prototype.remove = function(e) {
                        bi(this.children, e), this.isDirty = !0
                    }, e.prototype.forEach = function(e) {
                        this.isDirty && this.children.sort(Ru), this.isDirty = !1, this.children.forEach(e)
                    }, e
                }();

            function _u(e) {
                var t = e.attachResizeListener,
                    n = e.defaultParent,
                    r = e.measureScroll,
                    a = e.checkIsScrollRoot,
                    o = e.resetTransform;
                return function() {
                    function e(e, t, r) {
                        var a = this;
                        void 0 === t && (t = {}), void 0 === r && (r = null === n || void 0 === n ? void 0 : n()), this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = function() {
                            a.isUpdating && (a.isUpdating = !1, a.clearAllSnapshots())
                        }, this.updateProjection = function() {
                            a.nodes.forEach(Uu), a.nodes.forEach(Bu)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.id = e, this.latestValues = t, this.root = r ? r.root || r : this, this.path = r ? ht(ht([], pt(r.path), !1), [r], !1) : [], this.parent = r, this.depth = r ? r.depth + 1 : 0, e && this.root.registerPotentialNode(e, this);
                        for (var o = 0; o < this.path.length; o++) this.path[o].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new Mu)
                    }
                    return e.prototype.addEventListener = function(e, t) {
                        return this.eventHandlers.has(e) || this.eventHandlers.set(e, new wi), this.eventHandlers.get(e).add(t)
                    }, e.prototype.notifyListeners = function(e) {
                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        var r = this.eventHandlers.get(e);
                        null === r || void 0 === r || r.notify.apply(r, ht([], pt(t), !1))
                    }, e.prototype.hasListeners = function(e) {
                        return this.eventHandlers.has(e)
                    }, e.prototype.registerPotentialNode = function(e, t) {
                        this.potentialNodes.set(e, t)
                    }, e.prototype.mount = function(e, n) {
                        var r, a = this;
                        if (void 0 === n && (n = !1), !this.instance) {
                            this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                            var o = this.options,
                                i = o.layoutId,
                                l = o.layout,
                                u = o.visualElement;
                            if (u && !u.getInstance() && u.mount(e), this.root.nodes.add(this), null === (r = this.parent) || void 0 === r || r.children.add(this), this.id && this.root.potentialNodes.delete(this.id), n && (l || i) && (this.isLayoutDirty = !0), t) {
                                var s, c = function() {
                                    return a.root.updateBlockedByResize = !1
                                };
                                t(e, (function() {
                                    a.root.updateBlockedByResize = !0, clearTimeout(s), s = window.setTimeout(c, 250), Bt.hasAnimatedSinceResize && (Bt.hasAnimatedSinceResize = !1, a.nodes.forEach(Fu))
                                }))
                            }
                            i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && u && (i || l) && this.addEventListener("didUpdate", (function(e) {
                                var t, n, r, o, i, l = e.delta,
                                    s = e.hasLayoutChanged,
                                    c = e.hasRelativeTargetChanged,
                                    f = e.layout;
                                if (a.isTreeAnimationBlocked()) return a.target = void 0, void(a.relativeTarget = void 0);
                                var d = null !== (n = null !== (t = a.options.transition) && void 0 !== t ? t : u.getDefaultTransition()) && void 0 !== n ? n : Yu,
                                    p = u.getProps(),
                                    h = p.onLayoutAnimationStart,
                                    v = p.onLayoutAnimationComplete,
                                    m = !a.targetLayout || !ju(a.targetLayout, f) || c,
                                    y = !s && c;
                                if ((null === (r = a.resumeFrom) || void 0 === r ? void 0 : r.instance) || y || s && (m || !a.currentAnimation)) {
                                    a.resumeFrom && (a.resumingFrom = a.resumeFrom, a.resumingFrom.resumingFrom = void 0), a.setAnimationOrigin(l, y);
                                    var g = ct(ct({}, hi(d, "layout")), {
                                        onPlay: h,
                                        onComplete: v
                                    });
                                    u.shouldReduceMotion && (g.delay = 0, g.type = !1), a.startAnimation(g)
                                } else s || 0 !== a.animationProgress || a.finishAnimation(), a.isLead() && (null === (i = (o = a.options).onExitComplete) || void 0 === i || i.call(o));
                                a.targetLayout = f
                            }))
                        }
                    }, e.prototype.unmount = function() {
                        var e, t;
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (e = this.getStack()) || void 0 === e || e.remove(this), null === (t = this.parent) || void 0 === t || t.children.delete(this), this.instance = void 0, ko.preRender(this.updateProjection)
                    }, e.prototype.blockUpdate = function() {
                        this.updateManuallyBlocked = !0
                    }, e.prototype.unblockUpdate = function() {
                        this.updateManuallyBlocked = !1
                    }, e.prototype.isUpdateBlocked = function() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }, e.prototype.isTreeAnimationBlocked = function() {
                        var e;
                        return this.isAnimationBlocked || (null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimationBlocked()) || !1
                    }, e.prototype.startUpdate = function() {
                        var e;
                        this.isUpdateBlocked() || (this.isUpdating = !0, null === (e = this.nodes) || void 0 === e || e.forEach(Wu))
                    }, e.prototype.willUpdate = function(e) {
                        var t, n, r;
                        if (void 0 === e && (e = !0), this.root.isUpdateBlocked()) null === (n = (t = this.options).onExitComplete) || void 0 === n || n.call(t);
                        else if (!this.root.isUpdating && this.root.startUpdate(), !this.isLayoutDirty) {
                            this.isLayoutDirty = !0;
                            for (var a = 0; a < this.path.length; a++) {
                                var o = this.path[a];
                                o.shouldResetTransform = !0, o.updateScroll()
                            }
                            var i = this.options,
                                l = i.layoutId,
                                u = i.layout;
                            if (void 0 !== l || u) {
                                var s = null === (r = this.options.visualElement) || void 0 === r ? void 0 : r.getProps().transformTemplate;
                                this.prevTransformTemplateValue = null === s || void 0 === s ? void 0 : s(this.latestValues, ""), this.updateSnapshot(), e && this.notifyListeners("willUpdate")
                            }
                        }
                    }, e.prototype.didUpdate = function() {
                        if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(Du);
                        this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(qu), this.potentialNodes.clear()), this.nodes.forEach(Vu), this.nodes.forEach(Au), this.nodes.forEach(Iu), this.clearAllSnapshots(), Eo.update(), Eo.preRender(), Eo.render())
                    }, e.prototype.clearAllSnapshots = function() {
                        this.nodes.forEach(zu), this.sharedNodes.forEach(Hu)
                    }, e.prototype.scheduleUpdateProjection = function() {
                        No.preRender(this.updateProjection, !1, !0)
                    }, e.prototype.scheduleCheckAfterUnmount = function() {
                        var e = this;
                        No.postRender((function() {
                            e.isLayoutDirty ? e.root.didUpdate() : e.root.checkUpdateFailed()
                        }))
                    }, e.prototype.updateSnapshot = function() {
                        if (!this.snapshot && this.instance) {
                            var e = this.measure(),
                                t = this.removeTransform(this.removeElementScroll(e));
                            Gu(t), this.snapshot = {
                                measured: e,
                                layout: t,
                                latestValues: {}
                            }
                        }
                    }, e.prototype.updateLayout = function() {
                        var e;
                        if (this.instance && (this.updateScroll(), this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) {
                            if (this.resumeFrom && !this.resumeFrom.instance)
                                for (var t = 0; t < this.path.length; t++) {
                                    this.path[t].updateScroll()
                                }
                            var n = this.measure();
                            Gu(n);
                            var r = this.layout;
                            this.layout = {
                                measured: n,
                                actual: this.removeElementScroll(n)
                            }, this.layoutCorrected = dl(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.actual), null === (e = this.options.visualElement) || void 0 === e || e.notifyLayoutMeasure(this.layout.actual, null === r || void 0 === r ? void 0 : r.actual)
                        }
                    }, e.prototype.updateScroll = function() {
                        this.options.layoutScroll && this.instance && (this.isScrollRoot = a(this.instance), this.scroll = r(this.instance))
                    }, e.prototype.resetTransform = function() {
                        var e;
                        if (o) {
                            var t = this.isLayoutDirty || this.shouldResetTransform,
                                n = this.projectionDelta && !Tu(this.projectionDelta),
                                r = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate,
                                a = null === r || void 0 === r ? void 0 : r(this.latestValues, ""),
                                i = a !== this.prevTransformTemplateValue;
                            t && (n || yl(this.latestValues) || i) && (o(this.instance, a), this.shouldResetTransform = !1, this.scheduleRender())
                        }
                    }, e.prototype.measure = function() {
                        var e = this.options.visualElement;
                        if (!e) return dl();
                        var t = e.measureViewportBox(),
                            n = this.root.scroll;
                        return n && (kl(t.x, n.x), kl(t.y, n.y)), t
                    }, e.prototype.removeElementScroll = function(e) {
                        var t = dl();
                        wu(t, e);
                        for (var n = 0; n < this.path.length; n++) {
                            var r = this.path[n],
                                a = r.scroll,
                                o = r.options,
                                i = r.isScrollRoot;
                            if (r !== this.root && a && o.layoutScroll) {
                                if (i) {
                                    wu(t, e);
                                    var l = this.root.scroll;
                                    l && (kl(t.x, -l.x), kl(t.y, -l.y))
                                }
                                kl(t.x, a.x), kl(t.y, a.y)
                            }
                        }
                        return t
                    }, e.prototype.applyTransform = function(e, t) {
                        void 0 === t && (t = !1);
                        var n = dl();
                        wu(n, e);
                        for (var r = 0; r < this.path.length; r++) {
                            var a = this.path[r];
                            !t && a.options.layoutScroll && a.scroll && a !== a.root && Tl(n, {
                                x: -a.scroll.x,
                                y: -a.scroll.y
                            }), yl(a.latestValues) && Tl(n, a.latestValues)
                        }
                        return yl(this.latestValues) && Tl(n, this.latestValues), n
                    }, e.prototype.removeTransform = function(e) {
                        var t, n = dl();
                        wu(n, e);
                        for (var r = 0; r < this.path.length; r++) {
                            var a = this.path[r];
                            if (a.instance && yl(a.latestValues)) {
                                ml(a.latestValues) && a.updateSnapshot();
                                var o = dl();
                                wu(o, a.measure()), Cu(n, a.latestValues, null === (t = a.snapshot) || void 0 === t ? void 0 : t.layout, o)
                            }
                        }
                        return yl(this.latestValues) && Cu(n, this.latestValues), n
                    }, e.prototype.setTargetDelta = function(e) {
                        this.targetDelta = e, this.root.scheduleUpdateProjection()
                    }, e.prototype.setOptions = function(e) {
                        var t;
                        this.options = ct(ct(ct({}, this.options), e), {
                            crossfade: null === (t = e.crossfade) || void 0 === t || t
                        })
                    }, e.prototype.clearMeasurements = function() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }, e.prototype.resolveTargetDelta = function() {
                        var e, t, n, r, a = this.options,
                            o = a.layout,
                            i = a.layoutId;
                        this.layout && (o || i) && (this.targetDelta || this.relativeTarget || (this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && this.relativeParent.layout && (this.relativeTarget = dl(), this.relativeTargetOrigin = dl(), ol(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual), wu(this.relativeTarget, this.relativeTargetOrigin))), (this.relativeTarget || this.targetDelta) && (this.target || (this.target = dl(), this.targetWithTransforms = dl()), this.relativeTarget && this.relativeTargetOrigin && (null === (e = this.relativeParent) || void 0 === e ? void 0 : e.target) ? (t = this.target, n = this.relativeTarget, r = this.relativeParent.target, rl(t.x, n.x, r.x), rl(t.y, n.y, r.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.actual) : wu(this.target, this.layout.actual), Sl(this.target, this.targetDelta)) : wu(this.target, this.layout.actual), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = dl(), this.relativeTargetOrigin = dl(), ol(this.relativeTargetOrigin, this.target, this.relativeParent.target), wu(this.relativeTarget, this.relativeTargetOrigin)))))
                    }, e.prototype.getClosestProjectingParent = function() {
                        if (this.parent && !yl(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
                    }, e.prototype.calcProjection = function() {
                        var e, t = this.options,
                            n = t.layout,
                            r = t.layoutId;
                        if (this.isTreeAnimating = Boolean((null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), this.layout && (n || r)) {
                            var a = this.getLead();
                            wu(this.layoutCorrected, this.layout.actual),
                                function(e, t, n, r) {
                                    var a, o;
                                    void 0 === r && (r = !1);
                                    var i = n.length;
                                    if (i) {
                                        var l, u;
                                        t.x = t.y = 1;
                                        for (var s = 0; s < i; s++) u = (l = n[s]).projectionDelta, "contents" !== (null === (o = null === (a = l.instance) || void 0 === a ? void 0 : a.style) || void 0 === o ? void 0 : o.display) && (r && l.options.layoutScroll && l.scroll && l !== l.root && Tl(e, {
                                            x: -l.scroll.x,
                                            y: -l.scroll.y
                                        }), u && (t.x *= u.x.scale, t.y *= u.y.scale, Sl(e, u)), r && yl(l.latestValues) && Tl(e, l.latestValues))
                                    }
                                }(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== a);
                            var o = a.target;
                            if (o) {
                                this.projectionDelta || (this.projectionDelta = fl(), this.projectionDeltaWithTransform = fl());
                                var i = this.treeScale.x,
                                    l = this.treeScale.y,
                                    u = this.projectionTransform;
                                nl(this.projectionDelta, this.layoutCorrected, o, this.latestValues), this.projectionTransform = Ou(this.projectionDelta, this.treeScale), this.projectionTransform === u && this.treeScale.x === i && this.treeScale.y === l || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", o))
                            }
                        }
                    }, e.prototype.hide = function() {
                        this.isVisible = !1
                    }, e.prototype.show = function() {
                        this.isVisible = !0
                    }, e.prototype.scheduleRender = function(e) {
                        var t, n, r;
                        void 0 === e && (e = !0), null === (n = (t = this.options).scheduleRender) || void 0 === n || n.call(t), e && (null === (r = this.getStack()) || void 0 === r || r.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }, e.prototype.setAnimationOrigin = function(e, t) {
                        var n, r = this;
                        void 0 === t && (t = !1);
                        var a = this.snapshot,
                            o = (null === a || void 0 === a ? void 0 : a.latestValues) || {},
                            i = ct({}, this.latestValues),
                            l = fl();
                        this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !t;
                        var u = dl(),
                            s = null === a || void 0 === a ? void 0 : a.isShared,
                            c = ((null === (n = this.getStack()) || void 0 === n ? void 0 : n.members.length) || 0) <= 1,
                            f = Boolean(s && !c && !0 === this.options.crossfade && !this.path.some(Ku));
                        this.animationProgress = 0, this.mixTargetDelta = function(t) {
                            var n, a = t / 1e3;
                            $u(l.x, e.x, a), $u(l.y, e.y, a), r.setTargetDelta(l), r.relativeTarget && r.relativeTargetOrigin && r.layout && (null === (n = r.relativeParent) || void 0 === n ? void 0 : n.layout) && (ol(u, r.layout.actual, r.relativeParent.layout.actual), function(e, t, n, r) {
                                Qu(e.x, t.x, n.x, r), Qu(e.y, t.y, n.y, r)
                            }(r.relativeTarget, r.relativeTargetOrigin, u, a)), s && (r.animationValues = i, function(e, t, n, r, a, o) {
                                var i, l, u, s;
                                a ? (e.opacity = pa(0, null !== (i = n.opacity) && void 0 !== i ? i : 1, mu(r)), e.opacityExit = pa(null !== (l = t.opacity) && void 0 !== l ? l : 1, 0, yu(r))) : o && (e.opacity = pa(null !== (u = t.opacity) && void 0 !== u ? u : 1, null !== (s = n.opacity) && void 0 !== s ? s : 1, r));
                                for (var c = 0; c < du; c++) {
                                    var f = "border".concat(fu[c], "Radius"),
                                        d = vu(t, f),
                                        p = vu(n, f);
                                    void 0 === d && void 0 === p || (d || (d = 0), p || (p = 0), 0 === d || 0 === p || hu(d) === hu(p) ? (e[f] = Math.max(pa(pu(d), pu(p), r), 0), (bn.test(p) || bn.test(d)) && (e[f] += "%")) : e[f] = p)
                                }(t.rotate || n.rotate) && (e.rotate = pa(t.rotate || 0, n.rotate || 0, r))
                            }(i, o, r.latestValues, a, f, c)), r.root.scheduleUpdateProjection(), r.scheduleRender(), r.animationProgress = a
                        }, this.mixTargetDelta(0)
                    }, e.prototype.startAnimation = function(e) {
                        var t, n, r = this;
                        this.notifyListeners("animationStart"), null === (t = this.currentAnimation) || void 0 === t || t.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (ko.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = No.update((function() {
                            Bt.hasAnimatedSinceResize = !0, r.currentAnimation = function(e, t, n) {
                                void 0 === n && (n = {});
                                var r = ln(e) ? e : Si(e);
                                return vi("", r, t, n), {
                                    stop: function() {
                                        return r.stop()
                                    },
                                    isAnimating: function() {
                                        return r.isAnimating()
                                    }
                                }
                            }(0, 1e3, ct(ct({}, e), {
                                onUpdate: function(t) {
                                    var n;
                                    r.mixTargetDelta(t), null === (n = e.onUpdate) || void 0 === n || n.call(e, t)
                                },
                                onComplete: function() {
                                    var t;
                                    null === (t = e.onComplete) || void 0 === t || t.call(e), r.completeAnimation()
                                }
                            })), r.resumingFrom && (r.resumingFrom.currentAnimation = r.currentAnimation), r.pendingAnimation = void 0
                        }))
                    }, e.prototype.completeAnimation = function() {
                        var e;
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (e = this.getStack()) || void 0 === e || e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }, e.prototype.finishAnimation = function() {
                        var e;
                        this.currentAnimation && (null === (e = this.mixTargetDelta) || void 0 === e || e.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }, e.prototype.applyTransformsToTarget = function() {
                        var e = this.getLead(),
                            t = e.targetWithTransforms,
                            n = e.target,
                            r = e.layout,
                            a = e.latestValues;
                        t && n && r && (wu(t, n), Tl(t, a), nl(this.projectionDeltaWithTransform, this.layoutCorrected, t, a))
                    }, e.prototype.registerSharedNode = function(e, t) {
                        var n, r, a;
                        this.sharedNodes.has(e) || this.sharedNodes.set(e, new Nu), this.sharedNodes.get(e).add(t), t.promote({
                            transition: null === (n = t.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
                            preserveFollowOpacity: null === (a = null === (r = t.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) || void 0 === a ? void 0 : a.call(r, t)
                        })
                    }, e.prototype.isLead = function() {
                        var e = this.getStack();
                        return !e || e.lead === this
                    }, e.prototype.getLead = function() {
                        var e;
                        return this.options.layoutId && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
                    }, e.prototype.getPrevLead = function() {
                        var e;
                        return this.options.layoutId ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
                    }, e.prototype.getStack = function() {
                        var e = this.options.layoutId;
                        if (e) return this.root.sharedNodes.get(e)
                    }, e.prototype.promote = function(e) {
                        var t = void 0 === e ? {} : e,
                            n = t.needsReset,
                            r = t.transition,
                            a = t.preserveFollowOpacity,
                            o = this.getStack();
                        o && o.promote(this, a), n && (this.projectionDelta = void 0, this.needsReset = !0), r && this.setOptions({
                            transition: r
                        })
                    }, e.prototype.relegate = function() {
                        var e = this.getStack();
                        return !!e && e.relegate(this)
                    }, e.prototype.resetRotation = function() {
                        var e = this.options.visualElement;
                        if (e) {
                            for (var t = !1, n = {}, r = 0; r < Zt.length; r++) {
                                var a = "rotate" + Zt[r];
                                e.getStaticValue(a) && (t = !0, n[a] = e.getStaticValue(a), e.setStaticValue(a, 0))
                            }
                            if (t) {
                                for (var a in null === e || void 0 === e || e.syncRender(), n) e.setStaticValue(a, n[a]);
                                e.scheduleRender()
                            }
                        }
                    }, e.prototype.getProjectionStyles = function(e) {
                        var t, n, r, a, o, i;
                        void 0 === e && (e = {});
                        var l = {};
                        if (!this.instance || this.isSVG) return l;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        l.visibility = "";
                        var u = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate;
                        if (this.needsReset) return this.needsReset = !1, l.opacity = "", l.pointerEvents = nr(e.pointerEvents) || "", l.transform = u ? u(this.latestValues, "") : "none", l;
                        var s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            var c = {};
                            return this.options.layoutId && (c.opacity = null !== (n = this.latestValues.opacity) && void 0 !== n ? n : 1, c.pointerEvents = nr(e.pointerEvents) || ""), this.hasProjected && !yl(this.latestValues) && (c.transform = u ? u({}, "") : "none", this.hasProjected = !1), c
                        }
                        var f = s.animationValues || s.latestValues;
                        this.applyTransformsToTarget(), l.transform = Ou(this.projectionDeltaWithTransform, this.treeScale, f), u && (l.transform = u(f, l.transform));
                        var d = this.projectionDelta,
                            p = d.x,
                            h = d.y;
                        for (var v in l.transformOrigin = "".concat(100 * p.origin, "% ").concat(100 * h.origin, "% 0"), s.animationValues ? l.opacity = s === this ? null !== (a = null !== (r = f.opacity) && void 0 !== r ? r : this.latestValues.opacity) && void 0 !== a ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : l.opacity = s === this ? null !== (o = f.opacity) && void 0 !== o ? o : "" : null !== (i = f.opacityExit) && void 0 !== i ? i : 0, Gt)
                            if (void 0 !== f[v]) {
                                var m = Gt[v],
                                    y = m.correct,
                                    g = m.applyTo,
                                    b = y(f[v], s);
                                if (g)
                                    for (var w = g.length, x = 0; x < w; x++) l[g[x]] = b;
                                else l[v] = b
                            }
                        return this.options.layoutId && (l.pointerEvents = s === this ? nr(e.pointerEvents) || "" : "none"), l
                    }, e.prototype.clearSnapshot = function() {
                        this.resumeFrom = this.snapshot = void 0
                    }, e.prototype.resetTree = function() {
                        this.root.nodes.forEach((function(e) {
                            var t;
                            return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
                        })), this.root.nodes.forEach(Du), this.root.sharedNodes.clear()
                    }, e
                }()
            }

            function Au(e) {
                e.updateLayout()
            }

            function Iu(e) {
                var t, n, r, a, o = null !== (n = null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) && void 0 !== n ? n : e.snapshot;
                if (e.isLead() && e.layout && o && e.hasListeners("didUpdate")) {
                    var i = e.layout,
                        l = i.actual,
                        u = i.measured;
                    "size" === e.options.animationType ? pl((function(e) {
                        var t = o.isShared ? o.measured[e] : o.layout[e],
                            n = Ji(t);
                        t.min = l[e].min, t.max = t.min + n
                    })) : "position" === e.options.animationType && pl((function(e) {
                        var t = o.isShared ? o.measured[e] : o.layout[e],
                            n = Ji(l[e]);
                        t.max = t.min + n
                    }));
                    var s = fl();
                    nl(s, l, o.layout);
                    var c = fl();
                    o.isShared ? nl(c, e.applyTransform(u, !0), o.measured) : nl(c, l, o.layout);
                    var f = !Tu(s),
                        d = !1;
                    if (!e.resumeFrom && (e.relativeParent = e.getClosestProjectingParent(), e.relativeParent && !e.relativeParent.resumeFrom)) {
                        var p = e.relativeParent,
                            h = p.snapshot,
                            v = p.layout;
                        if (h && v) {
                            var m = dl();
                            ol(m, o.layout, h.layout);
                            var y = dl();
                            ol(y, l, v.actual), ju(m, y) || (d = !0)
                        }
                    }
                    e.notifyListeners("didUpdate", {
                        layout: l,
                        snapshot: o,
                        delta: c,
                        layoutDelta: s,
                        hasLayoutChanged: f,
                        hasRelativeTargetChanged: d
                    })
                } else e.isLead() && (null === (a = (r = e.options).onExitComplete) || void 0 === a || a.call(r));
                e.options.transition = void 0
            }

            function zu(e) {
                e.clearSnapshot()
            }

            function Du(e) {
                e.clearMeasurements()
            }

            function Vu(e) {
                var t = e.options.visualElement;
                (null === t || void 0 === t ? void 0 : t.getProps().onBeforeLayoutMeasure) && t.notifyBeforeLayoutMeasure(), e.resetTransform()
            }

            function Fu(e) {
                e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0
            }

            function Uu(e) {
                e.resolveTargetDelta()
            }

            function Bu(e) {
                e.calcProjection()
            }

            function Wu(e) {
                e.resetRotation()
            }

            function Hu(e) {
                e.removeLeadSnapshot()
            }

            function $u(e, t, n) {
                e.translate = pa(t.translate, 0, n), e.scale = pa(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
            }

            function Qu(e, t, n, r) {
                e.min = pa(t.min, n.min, r), e.max = pa(t.max, n.max, r)
            }

            function Ku(e) {
                return e.animationValues && void 0 !== e.animationValues.opacityExit
            }
            var Yu = {
                duration: .45,
                ease: [.4, 0, .1, 1]
            };

            function qu(e, t) {
                for (var n = e.root, r = e.path.length - 1; r >= 0; r--)
                    if (Boolean(e.path[r].instance)) {
                        n = e.path[r];
                        break
                    }
                var a = (n && n !== e.root ? n.instance : document).querySelector('[data-projection-id="'.concat(t, '"]'));
                a && e.mount(a, !0)
            }

            function Xu(e) {
                e.min = Math.round(e.min), e.max = Math.round(e.max)
            }

            function Gu(e) {
                Xu(e.x), Xu(e.y)
            }
            var Zu = _u({
                    attachResizeListener: function(e, t) {
                        return sr(e, "resize", t)
                    },
                    measureScroll: function() {
                        return {
                            x: document.documentElement.scrollLeft || document.body.scrollLeft,
                            y: document.documentElement.scrollTop || document.body.scrollTop
                        }
                    },
                    checkIsScrollRoot: function() {
                        return !0
                    }
                }),
                Ju = {
                    current: void 0
                },
                es = _u({
                    measureScroll: function(e) {
                        return {
                            x: e.scrollLeft,
                            y: e.scrollTop
                        }
                    },
                    defaultParent: function() {
                        if (!Ju.current) {
                            var e = new Zu(0, {});
                            e.mount(window), e.setOptions({
                                layoutScroll: !0
                            }), Ju.current = e
                        }
                        return Ju.current
                    },
                    resetTransform: function(e, t) {
                        e.style.transform = null !== t && void 0 !== t ? t : "none"
                    },
                    checkIsScrollRoot: function(e) {
                        return Boolean("fixed" === window.getComputedStyle(e).position)
                    }
                }),
                ts = ct(ct(ct(ct({}, Ui), Qr), Rl), cu),
                ns = Yt((function(e, t) {
                    return function(e, t, n, r, a) {
                        var o = t.forwardMotionProps,
                            i = void 0 !== o && o,
                            l = Xt(e) ? lr : ur;
                        return ct(ct({}, l), {
                            preloadedFeatures: n,
                            useRender: Hn(i),
                            createVisualElement: r,
                            projectionNodeConstructor: a,
                            Component: e
                        })
                    }(e, t, ts, ru, es)
                }));

            function rs() {
                var e = (0, t.useRef)(!1);
                return Tt((function() {
                    return e.current = !0,
                        function() {
                            e.current = !1
                        }
                }), []), e
            }
            var as = function(e) {
                var n = e.children,
                    r = e.initial,
                    a = e.isPresent,
                    o = e.onExitComplete,
                    i = e.custom,
                    l = e.presenceAffectsLayout,
                    u = Ut(os),
                    s = qr(),
                    c = (0, t.useMemo)((function() {
                        return {
                            id: s,
                            initial: r,
                            isPresent: a,
                            custom: i,
                            onExitComplete: function(e) {
                                var t, n;
                                u.set(e, !0);
                                try {
                                    for (var r = dt(u.values()), a = r.next(); !a.done; a = r.next()) {
                                        if (!a.value) return
                                    }
                                } catch (i) {
                                    t = {
                                        error: i
                                    }
                                } finally {
                                    try {
                                        a && !a.done && (n = r.return) && n.call(r)
                                    } finally {
                                        if (t) throw t.error
                                    }
                                }
                                null === o || void 0 === o || o()
                            },
                            register: function(e) {
                                return u.set(e, !1),
                                    function() {
                                        return u.delete(e)
                                    }
                            }
                        }
                    }), l ? void 0 : [a]);
                return (0, t.useMemo)((function() {
                    u.forEach((function(e, t) {
                        return u.set(t, !1)
                    }))
                }), [a]), t.useEffect((function() {
                    !a && !u.size && (null === o || void 0 === o || o())
                }), [a]), t.createElement(Ct.Provider, {
                    value: c
                }, n)
            };

            function os() {
                return new Map
            }
            var is = function(e) {
                return e.key || ""
            };
            var ls = function(e) {
                var n = e.children,
                    r = e.custom,
                    a = e.initial,
                    o = void 0 === a || a,
                    i = e.onExitComplete,
                    l = e.exitBeforeEnter,
                    u = e.presenceAffectsLayout,
                    s = void 0 === u || u,
                    c = pt(function() {
                        var e = rs(),
                            n = pt((0, t.useState)(0), 2),
                            r = n[0],
                            a = n[1],
                            o = (0, t.useCallback)((function() {
                                e.current && a(r + 1)
                            }), [r]);
                        return [(0, t.useCallback)((function() {
                            return No.postRender(o)
                        }), [o]), r]
                    }(), 1),
                    f = c[0],
                    d = (0, t.useContext)(Ht).forceRender;
                d && (f = d);
                var p = rs(),
                    h = function(e) {
                        var n = [];
                        return t.Children.forEach(e, (function(e) {
                            (0, t.isValidElement)(e) && n.push(e)
                        })), n
                    }(n),
                    v = h,
                    m = new Set,
                    y = (0, t.useRef)(v),
                    g = (0, t.useRef)(new Map).current,
                    b = (0, t.useRef)(!0);
                if (Tt((function() {
                        b.current = !1,
                            function(e, t) {
                                e.forEach((function(e) {
                                    var n = is(e);
                                    t.set(n, e)
                                }))
                            }(h, g), y.current = v
                    })), Mr((function() {
                        b.current = !0, g.clear(), m.clear()
                    })), b.current) return t.createElement(t.Fragment, null, v.map((function(e) {
                    return t.createElement(as, {
                        key: is(e),
                        isPresent: !0,
                        initial: !!o && void 0,
                        presenceAffectsLayout: s
                    }, e)
                })));
                v = ht([], pt(v), !1);
                for (var w = y.current.map(is), x = h.map(is), S = w.length, k = 0; k < S; k++) {
                    var E = w[k]; - 1 === x.indexOf(E) && m.add(E)
                }
                return l && m.size && (v = []), m.forEach((function(e) {
                    if (-1 === x.indexOf(e)) {
                        var n = g.get(e);
                        if (n) {
                            var a = w.indexOf(e);
                            v.splice(a, 0, t.createElement(as, {
                                key: is(n),
                                isPresent: !1,
                                onExitComplete: function() {
                                    g.delete(e), m.delete(e);
                                    var t = y.current.findIndex((function(t) {
                                        return t.key === e
                                    }));
                                    if (y.current.splice(t, 1), !m.size) {
                                        if (y.current = h, !1 === p.current) return;
                                        f(), i && i()
                                    }
                                },
                                custom: r,
                                presenceAffectsLayout: s
                            }, n))
                        }
                    }
                })), v = v.map((function(e) {
                    var n = e.key;
                    return m.has(n) ? e : t.createElement(as, {
                        key: is(e),
                        isPresent: !0,
                        presenceAffectsLayout: s
                    }, e)
                })), "production" !== vt && l && v.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."), t.createElement(t.Fragment, null, m.size ? v : v.map((function(e) {
                    return (0, t.cloneElement)(e)
                })))
            };

            function us(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var a = 0;
                    for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
                }
                return n
            }

            function ss(e) {
                return function(n) {
                    var r = n.style,
                        a = n.className,
                        o = n.rotate,
                        i = us(n, ["style", "className", "rotate"]),
                        l = lt()("icon icon-default", a),
                        u = {};
                    return Number.isSafeInteger(o) && (u.transform = "rotate(".concat(o, "deg)")), Object.assign(u, r), t.createElement("span", Object.assign({
                        role: "img",
                        className: l,
                        style: u
                    }, i), (0, t.createElement)(e))
                }
            }
            var cs = ss((function(e) {
                    return t.createElement("svg", Object.assign({
                        viewBox: "0 0 1024 1024",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1em",
                        height: "1em"
                    }, e), t.createElement("path", {
                        d: "M904.533333 311.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 644.266667 179.2 311.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333l362.666666 362.666667c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866667-12.8l362.666666-362.666667c17.066667-17.066667 17.066667-42.666667 0-59.733333z",
                        "p-id": "4865"
                    }))
                })),
                fs = function(e) {
                    var n = e.children,
                        r = e.isVisible,
                        a = s((0, t.useState)(0), 2),
                        o = a[0],
                        i = a[1],
                        l = (0, t.useCallback)((function(e) {
                            if (e) {
                                var t = e.scrollHeight;
                                t && o !== t && i(t)
                            }
                        }), [o]),
                        u = (0, t.useMemo)((function() {
                            return "".concat(Math.random(), ":").concat(Date.now())
                        }), []),
                        c = t.createElement(ns.div, {
                            className: "sub-menu",
                            ref: l,
                            key: u,
                            transition: {
                                duration: .3,
                                ease: "easeInOut"
                            },
                            initial: "collapsed",
                            animate: r ? "open" : "collapsed",
                            exit: "collapsed",
                            variants: {
                                open: {
                                    height: o || "auto",
                                    opacity: 1,
                                    overflow: "auto",
                                    transitionEnd: {
                                        height: "auto"
                                    }
                                },
                                collapsed: {
                                    height: 0,
                                    opacity: 0,
                                    overflow: "hidden"
                                }
                            }
                        }, n || "");
                    return t.createElement(ls, null, r && c)
                },
                ds = function(e) {
                    var n = e.title,
                        r = e.icon,
                        a = e.children,
                        o = us(e, ["title", "icon", "children"]),
                        i = (0, t.useState)({
                            isVisible: t.Children.toArray(a).some((function e(t) {
                                var n;
                                return t.props.itemKey === o.selectedKey || !!(null === (n = t.props.children) || void 0 === n ? void 0 : n.length) && t.props.children.some(e)
                            })),
                            rotate: 0
                        }),
                        l = s(i, 2),
                        u = l[0],
                        c = l[1],
                        f = u.isVisible,
                        d = u.rotate;
                    return t.createElement("div", {
                        className: "sub-menu-wrap"
                    }, t.createElement("div", {
                        className: "sub-item",
                        onClick: function() {
                            var e = u.isVisible ? 0 : 180;
                            c(Object.assign(Object.assign({}, u), {
                                isVisible: !u.isVisible,
                                rotate: e
                            }))
                        }
                    }, t.createElement("span", {
                        className: "title"
                    }, n), t.createElement("span", {
                        className: "arrow"
                    }, r || t.createElement(cs, {
                        className: "arrow",
                        rotate: d
                    }))), t.createElement(fs, {
                        isVisible: f
                    }, t.Children.map(a, (function(e) {
                        return (0, t.cloneElement)(e, Object.assign(Object.assign({}, o), {
                            level: o.level + 1
                        }))
                    }))))
                };
            ds.defaultProps = {};
            var ps = {
                    overlay: function() {
                        return {
                            position: "fixed",
                            zIndex: 1e3,
                            width: "100%",
                            height: "100%",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: "rgba(0, 0, 0, 0.3)"
                        }
                    },
                    menuWrap: function(e) {
                        return {
                            position: "fixed",
                            zIndex: 1100,
                            width: e,
                            height: "100%"
                        }
                    }
                },
                hs = {
                    slide: {
                        right: {
                            start: {
                                x: "0"
                            },
                            end: {
                                x: "100%"
                            },
                            style: {
                                right: 0
                            }
                        },
                        left: {
                            start: {
                                x: "100%"
                            },
                            end: {
                                x: "0"
                            },
                            style: {
                                right: "100%"
                            }
                        }
                    },
                    fallDown: {
                        left: {
                            start: {
                                y: "100%"
                            },
                            end: {
                                y: "0"
                            },
                            style: {
                                left: 0,
                                top: "-100%"
                            }
                        },
                        right: {
                            start: {
                                y: "100%"
                            },
                            end: {
                                y: "0"
                            },
                            style: {
                                right: 0,
                                top: "-100%"
                            }
                        }
                    }
                };

            function vs() {}
            var ms = ss((function(e) {
                    return t.createElement("svg", Object.assign({
                        viewBox: "0 0 1024 1024",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1em",
                        height: "1em"
                    }, e), t.createElement("path", {
                        d: "M571.733333 512l268.8-268.8c17.066667-17.066667 17.066667-42.666667 0-59.733333-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 452.266667 243.2 183.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333L452.266667 512 183.466667 780.8c-17.066667 17.066667-17.066667 42.666667 0 59.733333 8.533333 8.533333 19.2 12.8 29.866666 12.8s21.333333-4.266667 29.866667-12.8L512 571.733333l268.8 268.8c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733333L571.733333 512z",
                        "p-id": "4730"
                    }))
                })),
                ys = function(e) {
                    var n, r, a = s((0, t.useState)(!1), 2),
                        o = a[0],
                        i = a[1],
                        l = (0, t.useRef)(null),
                        u = e.isOpen,
                        c = e.width,
                        f = e.duration,
                        d = e.customCrossIcon,
                        p = e.customIcon,
                        h = e.side,
                        v = e.animate;
                    (0, t.useEffect)((function() {
                        void 0 !== u && i(u)
                    }), [u]);
                    var m = function() {
                        e.onClose(!1)
                    };

                    function y(e) {
                        var t = ps[e] ? function(e) {
                            return e("string" != typeof c ? "".concat(c, "px") : c)
                        }(ps[e]) : {};
                        return t = Object.assign({}, t)
                    }
                    var g = function() {
                            var t = function(e, t) {
                                null == e || e.classList[o ? "add" : "remove"](t)
                            };
                            e.bodyClassName && t(document.querySelector("body"), e.bodyClassName), e.htmlClassName && t(document.querySelector("html"), e.htmlClassName)
                        },
                        b = d || t.createElement(ms, {
                            className: "close-icon"
                        }),
                        w = e.children ? t.Children.map(e.children, (function(n) {
                            return (0, t.cloneElement)(n, {
                                onClick: e.onClick,
                                selectedKey: e.selectedKey,
                                level: 1
                            })
                        })) : null,
                        x = null !== (r = null === (n = null == hs ? void 0 : hs[v]) || void 0 === n ? void 0 : n[h]) && void 0 !== r ? r : {};
                    return t.createElement(t.Fragment, null, !e.noOverlay && t.createElement(ls, null, o && t.createElement(ns.div, {
                        className: "overlay ".concat(e.overlayClassName),
                        style: y("overlay"),
                        onClick: function() {
                            m()
                        },
                        initial: "closed",
                        animate: "open",
                        exit: "closed",
                        variants: {
                            open: {
                                opacity: 1
                            },
                            closed: {
                                opacity: 0
                            }
                        }
                    })), t.createElement(ls, {
                        onExitComplete: function() {
                            o || (g(), e.onClose())
                        }
                    }, o && t.createElement(ns.div, {
                        className: lt()("menu-wrap", e.className),
                        ref: l,
                        style: Object.assign(Object.assign({}, y("menuWrap")), null == x ? void 0 : x.style),
                        transition: {
                            duration: f,
                            ease: "easeInOut"
                        },
                        initial: "end",
                        animate: "start",
                        exit: "end",
                        variants: {
                            start: null == x ? void 0 : x.start,
                            end: null == x ? void 0 : x.end
                        },
                        onAnimationComplete: function() {
                            o && (g(), e.onOpen())
                        }
                    }, t.createElement("div", {
                        className: "head"
                    }, (0, t.isValidElement)(p) && (0, t.cloneElement)(p, {
                        className: lt()("logo", p.props.className)
                    }), t.createElement("div", {
                        className: "close",
                        onClick: m
                    }, b)), t.createElement("div", {
                        className: "menu"
                    }, w))))
                };
            ys.defaultProps = {
                width: 300,
                noOverlay: !1,
                overlayClassName: "",
                onOpen: vs,
                onClose: vs,
                onClick: vs,
                side: "right",
                animate: "slide"
            };
            var gs = function(e) {
                return t.createElement("div", {
                    className: lt()("bm-item", {
                        "bm-item-selected": e.itemKey === e.selectedKey
                    }),
                    onClick: function(t) {
                        var n = {
                            itemKey: e.itemKey,
                            domEvent: t,
                            text: e.text
                        };
                        e.onClick(n)
                    }
                }, (n = e.icon) || e.level > 1 ? t.createElement("i", {
                    className: "bm-item-icon"
                }, n) : null, t.createElement("span", {
                    className: "item-text"
                }, e.text));
                var n
            };
            gs.defaultProps = {
                onClick: vs,
                icon: null,
                level: 1
            };
            var bs = ys,
                ws = gs,
                xs = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                Ss = t.createContext && t.createContext(xs),
                ks = function() {
                    return ks = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }, ks.apply(this, arguments)
                },
                Es = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var a = 0;
                        for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
                    }
                    return n
                };

            function Cs(e) {
                return e && e.map((function(e, n) {
                    return t.createElement(e.tag, ks({
                        key: n
                    }, e.attr), Cs(e.child))
                }))
            }

            function Ps(e) {
                return function(n) {
                    return t.createElement(Ts, ks({
                        attr: ks({}, e.attr)
                    }, n), Cs(e.child))
                }
            }

            function Ts(e) {
                var n = function(n) {
                    var r, a = e.attr,
                        o = e.size,
                        i = e.title,
                        l = Es(e, ["attr", "size", "title"]),
                        u = o || n.size || "1em";
                    return n.className && (r = n.className), e.className && (r = (r ? r + " " : "") + e.className), t.createElement("svg", ks({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, n.attr, a, l, {
                        className: r,
                        style: ks(ks({
                            color: e.color || n.color
                        }, n.style), e.style),
                        height: u,
                        width: u,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), i && t.createElement("title", null, i), e.children)
                };
                return void 0 !== Ss ? t.createElement(Ss.Consumer, null, (function(e) {
                    return n(e)
                })) : n(xs)
            }

            function js(e) {
                return Ps({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 24 24",
                        fill: "none"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",
                            fill: "currentColor"
                        }
                    }]
                })(e)
            }
            var Ns = n(184),
                Ls = function() {
                    var e = s((0, t.useState)(!1), 2),
                        n = e[0],
                        r = e[1];
                    return (0, Ns.jsxs)("div", {
                        className: "header row",
                        children: [(0, Ns.jsxs)("div", {
                            className: "col-2 headerLogo",
                            onClick: function() {
                                window.location.href = "/"
                            },
                            children: [(0, Ns.jsx)("img", {
                                src: ot,
                                alt: ""
                            }), (0, Ns.jsx)("h5", {
                                className: "logoText",
                                children: "This Is Fine"
                            }), (0, Ns.jsx)("h5", {
                                className: "logoTextMobile",
                                children: "$Fine"
                            })]
                        }), (0, Ns.jsx)("div", {
                            className: "col-2"
                        }), (0, Ns.jsxs)("div", {
                            className: "col-8 navMenu",
                            children: [(0, Ns.jsx)(at, {
                                to: "/",
                                children: (0, Ns.jsx)("h5", {
                                    className: "navMenuItem",
                                    children: "Home"
                                })
                            }), (0, Ns.jsx)(at, {
                                to: "/#about",
                                children: (0, Ns.jsx)("h5", {
                                    className: "navMenuItem",
                                    children: "About"
                                })
                            }), (0, Ns.jsx)(at, {
                                to: "/#how",
                                children: (0, Ns.jsx)("h5", {
                                    className: "navMenuItem",
                                    children: "How to buy"
                                })
                            }), (0, Ns.jsx)(at, {
                                to: "/#tokenomics",
                                children: (0, Ns.jsx)("h5", {
                                    className: "navMenuItem",
                                    children: "Tokenomics"
                                })
                            }), (0, Ns.jsx)(at, {
                                to: "/#roadmap",
                                children: (0, Ns.jsx)("h5", {
                                    className: "navMenuItem",
                                    children: "Roadmap"
                                })
                            }), (0, Ns.jsx)("div", {
                                className: "navBtn",
                                onClick: function() {
                                    window.open("https://app.uniswap.org/#/swap?outputCurrency=0x702f75252dcdb6a8defa74d5b78637c08756473e", "_blank")
                                },
                                children: (0, Ns.jsx)("span", {
                                    children: "Buy now"
                                })
                            }), (0, Ns.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                "data-name": "Layer 1",
                                height: 30,
                                width: 30,
                                className: "mobileMenuBtn",
                                viewBox: "0 0 32 32",
                                id: "list",
                                onClick: function() {
                                    return r(!n)
                                },
                                children: [(0, Ns.jsx)("defs", {}), (0, Ns.jsx)("path", {
                                    fill: "#25180b",
                                    d: "M3 9h26a2 2 0 0 0 0-4H3a2 2 0 0 0 0 4ZM29 14H3a2 2 0 0 0 0 4h26a2 2 0 0 0 0-4ZM29 23H3a2 2 0 0 0 0 4h26a2 2 0 0 0 0-4Z"
                                })]
                            }), (0, Ns.jsxs)(bs, {
                                className: "burger-menu",
                                isOpen: n,
                                selectedKey: "entry",
                                onClose: function() {
                                    return r(!1)
                                },
                                animate: "fallDown",
                                customCrossIcon: (0, Ns.jsx)(js, {
                                    color: "#25180b",
                                    size: 30,
                                    strokeWidth: 3
                                }),
                                children: [(0, Ns.jsx)(at, {
                                    to: "/",
                                    children: (0, Ns.jsx)(ws, {
                                        itemKey: "home",
                                        text: "Home ?",
                                        onClick: function() {
                                            return r(!n)
                                        }
                                    })
                                }), (0, Ns.jsx)(at, {
                                    to: "/#about",
                                    children: (0, Ns.jsx)(ws, {
                                        itemKey: "about",
                                        text: "About",
                                        onClick: function() {
                                            return r(!n)
                                        }
                                    })
                                }), (0, Ns.jsx)(at, {
                                    to: "/#how",
                                    children: (0, Ns.jsx)(ws, {
                                        itemKey: "how",
                                        text: "How to buy",
                                        onClick: function() {
                                            return r(!n)
                                        }
                                    })
                                }), (0, Ns.jsx)(at, {
                                    to: "/#tokenomics",
                                    children: (0, Ns.jsx)(ws, {
                                        itemKey: "tokenomics",
                                        text: "Tokenomics",
                                        onClick: function() {
                                            return r(!n)
                                        }
                                    })
                                }), (0, Ns.jsx)(at, {
                                    to: "/#roadmap",
                                    children: (0, Ns.jsx)(ws, {
                                        itemKey: "roadmap",
                                        text: "Roadmap",
                                        onClick: function() {
                                            return r(!n)
                                        }
                                    })
                                })]
                            })]
                        })]
                    })
                },
                Os = n.p + "static/media/sticker_2094-512x512.9c10cc864d4af31b256f.png",
                Rs = n.p + "static/media/telegram.d578e690a006709435aa.webp",
                Ms = n.p + "static/media/twitter.7b19b14775c517af1079.webp",
                _s = n.p + "static/media/uniswap.c913583e9faeb9668435.webp",
                As = n.p + "static/media/etherscan.8b0b7643a0b5bae20786.webp",
                Is = n.p + "static/media/dextools.2ace80147a68a193623c.webp",
                zs = n.p + "static/media/cm.8f8b05b3341a54920f74.webp";

            function Ds(e) {
                return Ps({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 512 512"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M104.53 28.72c-.676 0-1.356.012-2.03.03-16.186.435-31.577 6.108-44.375 15.25-34.13 24.378-50.547 75.233-18.563 118.72 25.234 34.303 14.237 79.597-11.874 104.905l13.03 13.406c32.24-31.247 45.253-86.76 13.907-129.374C28.415 116.022 42.253 78.324 69 59.22c13.374-9.554 29.767-14.01 46.28-10.75 15.853 3.126 32.335 13.31 46.907 35l-59.875 34.655 24.344 42.28c-49.898 63.943-58.988 154.445-16 229.126 56.487 98.133 181.517 131.802 279.281 75.19 97.765-56.614 131.237-182.057 74.75-280.19-42.912-74.55-125.41-111.868-205.437-100.686l-24.438-42.438-56.437 32.657c-16.916-25.592-38.054-39.714-59.47-43.938-4.813-.95-9.63-1.405-14.374-1.406zm170.126 81.124c79.9 0 144.813 64.347 144.813 144.25 0 79.9-64.913 144.844-144.814 144.844-79.9 0-144.25-64.945-144.25-144.844 0-79.9 64.35-144.25 144.25-144.25zm-9.094 25.187v88.19c-13.248 4.192-23.156 16.79-23.156 31.218 0 17.726 14.962 32.125 32.688 32.125 16.82 0 30.63-12.968 32-29.438l76.53-54.875-10.905-15.188-70.283 50.407c-4.103-6.774-10.542-11.993-18.187-14.345V135.03h-18.688zm-42.187 11.314l-16.188 9.344 14.344 24.843 16.19-9.374-14.345-24.812zm103.063 0l-14.344 24.812 16.187 9.375 14.345-24.843-16.188-9.343zm-150.125 40.22l-9.344 16.186 24.81 14.344 9.345-16.188-24.813-14.344zm98.78 53.874c7.628 0 13.438 6.375 13.438 14 0 7.626-5.81 13.437-13.436 13.437-7.627 0-14-5.81-14-13.438 0-7.626 6.372-14 14-14zm-119.437 4.5v18.687h28.656v-18.688h-28.656zm209.813 0v18.687h28.686v-18.688H365.47zM191.78 291.5l-24.81 14.313L176.312 322l24.812-14.344-9.344-16.156zm166.25 0l-9.342 16.156L373.5 322l9.344-16.188L358.03 291.5zm-136.5 36.563l-14.343 24.812 16.188 9.344 14.344-24.814-16.19-9.344zm106.75 0l-16.186 9.343 14.344 24.813 16.187-9.345-14.344-24.813zm-62.717 16.812v28.656h18.687v-28.655h-18.688z"
                        }
                    }]
                })(e)
            }
            var Vs = function() {
                    return (0, Ns.jsxs)("section", {
                        id: "hero",
                        children: [(0, Ns.jsx)(Ls, {}), (0, Ns.jsxs)("div", {
                            className: "heroContent",
                            children: [(0, Ns.jsxs)("div", {
                                className: "heroTextWrapper",
                                children: [(0, Ns.jsx)("h5", {
                                    className: "heroTitle",
                                    children: "$TIF"
                                }), (0, Ns.jsx)("h5", {
                                    className: "heroSubtitle",
                                    children: "Welcome to the world of 'This Is Fine' meme token, where humor and cryptocurrency collide!"
                                }), (0, Ns.jsxs)("div", {
                                    className: "heroTextIconLinks",
                                    children: [(0, Ns.jsx)("img", {
                                        src: Ms,
                                        alt: "",
                                        onClick: function() {
                                            window.open("https://twitter.com/tifthecoin?t=XryoLESwinZ89gAc3yz-jw&s=09", "_blank")
                                        }
                                    }), (0, Ns.jsx)("img", {
                                        src: Rs,
                                        alt: "",
                                        onClick: function() {
                                            window.open("https://t.me/TIF_COIN", "_blank")
                                        }
                                    }), (0, Ns.jsx)("img", {
                                        src: Is,
                                        alt: ""
                                    }), (0, Ns.jsx)("img", {
                                        src: As,
                                        alt: ""
                                    }), (0, Ns.jsx)("img", {
                                        src: zs,
                                        alt: ""
                                    }), (0, Ns.jsx)("img", {
                                        src: _s,
                                        alt: ""
                                    })]
                                })]
                            }), (0, Ns.jsx)("div", {
                                className: "heroImageWrapper",
                                children: (0, Ns.jsx)("img", {
                                    src: Os,
                                    alt: ""
                                })
                            })]
                        }), (0, Ns.jsxs)("div", {
                            className: "heroLinksBox",
                            children: [(0, Ns.jsxs)("div", {
                                className: "heroLinkBtn",
                                children: [(0, Ns.jsx)("span", {
                                    children: "gemini"
                                }), " ", (0, Ns.jsx)(Ds, {
                                    size: 30,
                                    color: "#000"
                                })]
                            }), (0, Ns.jsxs)("div", {
                                className: "heroLinkBtn",
                                children: [(0, Ns.jsx)("span", {
                                    children: "binance"
                                }), (0, Ns.jsx)(Ds, {
                                    size: 30,
                                    color: "#000"
                                })]
                            }), (0, Ns.jsxs)("div", {
                                className: "heroLinkBtn",
                                children: [(0, Ns.jsx)("span", {
                                    children: "kucoin"
                                }), (0, Ns.jsx)(Ds, {
                                    size: 30,
                                    color: "#000"
                                })]
                            })]
                        }), (0, Ns.jsxs)("div", {
                            className: "heroLinksBox",
                            children: [(0, Ns.jsxs)("div", {
                                className: "heroLinkBtn",
                                children: [(0, Ns.jsx)("span", {
                                    children: "huobi"
                                }), (0, Ns.jsx)(Ds, {
                                    size: 30,
                                    color: "#000"
                                })]
                            }), (0, Ns.jsxs)("div", {
                                className: "heroLinkBtn",
                                children: [(0, Ns.jsx)("span", {
                                    children: "bybit"
                                }), (0, Ns.jsx)(Ds, {
                                    size: 30,
                                    color: "#000"
                                })]
                            }), (0, Ns.jsxs)("div", {
                                className: "heroLinkBtn",
                                children: [(0, Ns.jsx)("span", {
                                    children: "crypto.com"
                                }), (0, Ns.jsx)(Ds, {
                                    size: 30,
                                    color: "#000"
                                })]
                            })]
                        }), (0, Ns.jsxs)("div", {
                            className: "heroLinksBox",
                            children: [(0, Ns.jsxs)("div", {
                                className: "heroLinkBtn",
                                children: [(0, Ns.jsx)("span", {
                                    children: "bitget"
                                }), (0, Ns.jsx)(Ds, {
                                    size: 30,
                                    color: "#000"
                                })]
                            }), (0, Ns.jsxs)("div", {
                                className: "heroLinkBtn",
                                children: [(0, Ns.jsx)("span", {
                                    children: "okx"
                                }), (0, Ns.jsx)(Ds, {
                                    size: 30,
                                    color: "#000"
                                })]
                            }), (0, Ns.jsxs)("div", {
                                className: "heroLinkBtn",
                                children: [(0, Ns.jsx)("span", {
                                    children: "binx japan"
                                }), (0, Ns.jsx)(Ds, {
                                    size: 30,
                                    color: "#000"
                                })]
                            })]
                        })]
                    })
                },
                Fs = n.p + "static/media/pack430.66eb1749f5233608c76a.png",
                Us = function() {
                    return (0, Ns.jsxs)("section", {
                        id: "about",
                        children: [(0, Ns.jsx)("div", {
                            className: "aboutImagebox",
                            children: (0, Ns.jsx)("img", {
                                src: Fs,
                                alt: ""
                            })
                        }), (0, Ns.jsxs)("div", {
                            className: "aboutTextBox",
                            children: [(0, Ns.jsx)("h5", {
                                className: "aboutTitle",
                                children: "About"
                            }), (0, Ns.jsxs)("h5", {
                                className: "aboutText",
                                children: ["TIF is tired of watching everyone play hot potato with the endless derivative ShibaCumGMElonKishuTurboAssFlokiMoon Inu coins. The Inu\u2019s have had their day. It\u2019s time for the most recognizable meme in the world to take his reign as king of the memes.", (0, Ns.jsx)("br", {}), (0, Ns.jsx)("br", {}), "TIF is here to make memecoins great again. Launched stealth with no presale, zero taxes, LP burnt and contract renounced, $TIF is a coin for the people, forever. Fueled by pure memetic power, let $TIF show you the way."]
                            })]
                        })]
                    })
                },
                Bs = n.p + "static/media/wallet.1d3b44d5fc8ffe0937dc.png",
                Ws = n.p + "static/media/eth.af77871826f500b7c19f.png",
                Hs = n.p + "static/media/uniswapClear.9cfea9ac51df6669c928.webp",
                $s = (n.p, n.p + "static/media/swap.12db064afdf722badfa0.png"),
                Qs = n.p + "static/media/justDog.c5c9a6296e0686fd2f9f.png",
                Ks = function() {
                    return (0, Ns.jsxs)("section", {
                        id: "how",
                        children: [(0, Ns.jsx)("h5", {
                            className: "howTitle",
                            children: "How to buy"
                        }), (0, Ns.jsxs)("div", {
                            className: "howStep",
                            children: [(0, Ns.jsx)("img", {
                                src: Bs,
                                alt: ""
                            }), (0, Ns.jsxs)("div", {
                                className: "howStepText",
                                children: [(0, Ns.jsx)("h5", {
                                    className: "howStepTitle",
                                    children: "Create a wallet"
                                }), (0, Ns.jsx)("h5", {
                                    className: "howSteptext",
                                    children: "download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io."
                                })]
                            })]
                        }), (0, Ns.jsxs)("div", {
                            className: "howStep",
                            children: [(0, Ns.jsx)("img", {
                                src: Ws,
                                alt: ""
                            }), (0, Ns.jsxs)("div", {
                                className: "howStepText",
                                children: [(0, Ns.jsx)("h5", {
                                    className: "howStepTitle",
                                    children: "Get some eth"
                                }), (0, Ns.jsx)("h5", {
                                    className: "howSteptext",
                                    children: "have ETH in your wallet to switch to $TIF. If you don\u2019t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet."
                                })]
                            })]
                        }), (0, Ns.jsxs)("div", {
                            className: "howStep",
                            children: [(0, Ns.jsx)("img", {
                                src: Hs,
                                alt: ""
                            }), (0, Ns.jsxs)("div", {
                                className: "howStepText",
                                children: [(0, Ns.jsx)("h5", {
                                    className: "howStepTitle",
                                    children: "Go to Uniswap"
                                }), (0, Ns.jsx)("h5", {
                                    className: "howSteptext",
                                    children: "connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $TIF token address into Uniswap, select TIF, and confirm. When Metamask prompts you for a wallet signature, sign."
                                })]
                            })]
                        }), (0, Ns.jsxs)("div", {
                            className: "howStep",
                            children: [(0, Ns.jsx)("img", {
                                src: $s,
                                alt: ""
                            }), (0, Ns.jsxs)("div", {
                                className: "howStepText",
                                children: [(0, Ns.jsx)("h5", {
                                    className: "howStepTitle",
                                    children: "Swith eth for $TIF"
                                }), (0, Ns.jsx)("h5", {
                                    className: "howSteptext",
                                    children: "switch ETH for $TIF. We have ZERO taxes so you don\u2019t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility."
                                })]
                            })]
                        }), (0, Ns.jsxs)("div", {
                            className: "howSwapBox",
                            hidden: !0,
                            children: [(0, Ns.jsx)("div", {
                                className: "swapping",
                                children: (0, Ns.jsx)("iframe", {
                                    src: "https://app.uniswap.org/#/swap?outputCurrency=0x702f75252dcdb6a8defa74d5b78637c08756473e",
                                    frameborder: "0"
                                })
                            }), (0, Ns.jsx)("div", {
                                className: "swappingImage",
                                children: (0, Ns.jsx)("img", {
                                    src: Qs,
                                    alt: ""
                                })
                            })]
                        })]
                    })
                },
                Ys = n.p + "static/media/chart.e3f6b55e275536306ddb.png",
                qs = function() {
                    return (0, Ns.jsxs)("section", {
                        id: "tokenomics",
                        children: [(0, Ns.jsx)("h5", {
                            className: "tokenomicsTitle",
                            children: "Tokenomics"
                        }), (0, Ns.jsxs)("div", {
                            className: "tokenomicsBox",
                            children: [(0, Ns.jsxs)("div", {
                                className: "tokenomicsTextBox",
                                children: [(0, Ns.jsxs)("h5", {
                                    className: "tokenomicsTextTitle",
                                    children: ["Token supply", (0, Ns.jsx)("br", {}), "420,690,000,000,000"]
                                }), (0, Ns.jsxs)("h5", {
                                    className: "tokenomicsText",
                                    children: ["No Taxes, No Bullshit. It\u2019s that simple.", (0, Ns.jsx)("br", {}), "90% of the tokens will be sent to the liquidity pool, 4% of the tokens will be reserved for our partner, 1% of the tokens will be given to the meme creator, and the remaining 5% of the supply is being held in a multi-sig wallet only to be used as tokens for future centralized exchange listings, bridges, and liquidity pools."]
                                })]
                            }), (0, Ns.jsx)("div", {
                                className: "tokenomicsChartBox",
                                children: (0, Ns.jsx)("img", {
                                    src: Ys,
                                    alt: ""
                                })
                            })]
                        })]
                    })
                },
                Xs = function() {
                    return (0, Ns.jsxs)("section", {
                        id: "roadmap",
                        children: [(0, Ns.jsx)("h5", {
                            className: "roadmapTitle",
                            children: "Roadmap"
                        }), (0, Ns.jsxs)("div", {
                            className: "roadmapPhasesResume",
                            children: ["Phase 1: Meme", (0, Ns.jsx)("br", {}), (0, Ns.jsx)("br", {}), "Phase 2: Vibe and HODL", (0, Ns.jsx)("br", {}), (0, Ns.jsx)("br", {}), "Phase 3: Meme Takeover"]
                        }), (0, Ns.jsx)("h5", {
                            className: "roadmapSubtitle",
                            children: "All jokes aside, here is a rough sketch of $TIF path ahead. We dont wan\u2019t to give everything away on day 1, Expect surprises along the way"
                        }), (0, Ns.jsxs)("div", {
                            className: "roadmapPhasesBox",
                            children: [(0, Ns.jsxs)("div", {
                                className: "roadmapItem",
                                children: [(0, Ns.jsx)("h5", {
                                    className: "roadmapItemTitle",
                                    children: "Phase 1"
                                }), (0, Ns.jsxs)("ul", {
                                    className: "roadmapItemList",
                                    children: [(0, Ns.jsx)("li", {
                                        className: "roadmapItemListText",
                                        children: "Launch"
                                    }), (0, Ns.jsx)("li", {
                                        className: "roadmapItemListText",
                                        children: "CoinGecko/Coinmarketcap Listings"
                                    }), (0, Ns.jsx)("li", {
                                        className: "roadmapItemListText",
                                        children: "1,000+ Holders"
                                    }), (0, Ns.jsx)("li", {
                                        className: "roadmapItemListText",
                                        children: "Get $TIF Trending on twitter with our memetic power"
                                    })]
                                })]
                            }), (0, Ns.jsxs)("div", {
                                className: "roadmapItem",
                                children: [(0, Ns.jsx)("h5", {
                                    className: "roadmapItemTitle",
                                    children: "Phase 2"
                                }), (0, Ns.jsxs)("ul", {
                                    className: "roadmapItemList",
                                    children: [(0, Ns.jsx)("li", {
                                        className: "roadmapItemListText",
                                        children: "Community Partnerships TIF Times digital newsletter"
                                    }), (0, Ns.jsx)("li", {
                                        className: "roadmapItemListText",
                                        children: "Formation of token gated discord group, TIF Palace, for holders, more details tba"
                                    }), (0, Ns.jsx)("li", {
                                        className: "roadmapItemListText",
                                        children: "CEX Listings 10,000+holders"
                                    })]
                                })]
                            }), (0, Ns.jsxs)("div", {
                                className: "roadmapItem",
                                children: [(0, Ns.jsx)("h5", {
                                    className: "roadmapItemTitle",
                                    children: "Phase 3"
                                }), (0, Ns.jsxs)("ul", {
                                    className: "roadmapItemList",
                                    children: [(0, Ns.jsx)("li", {
                                        className: "roadmapItemListText",
                                        children: "TIF merch"
                                    }), (0, Ns.jsx)("li", {
                                        className: "roadmapItemListText",
                                        children: "TIF Academy"
                                    }), (0, Ns.jsx)("li", {
                                        className: "roadmapItemListText",
                                        children: "TIF Tools"
                                    }), (0, Ns.jsx)("li", {
                                        className: "roadmapItemListText",
                                        children: "T1 Exchange Listings 100,000+ holders"
                                    }), (0, Ns.jsx)("li", {
                                        className: "roadmapItemListText",
                                        children: "Meme Takeover"
                                    })]
                                })]
                            })]
                        })]
                    })
                };

            function Gs(e) {
                return Ps({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 448 512"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
                        }
                    }]
                })(e)
            }

            function Zs(e) {
                return Ps({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 512 512"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                        }
                    }]
                })(e)
            }
            var Js = function() {
                    return (0, Ns.jsxs)("section", {
                        id: "contact",
                        children: [(0, Ns.jsx)("h5", {
                            className: "contactTitle",
                            children: "Contact"
                        }), (0, Ns.jsxs)("div", {
                            className: "footerLogo",
                            onClick: function() {
                                window.location.href = "/"
                            },
                            children: [(0, Ns.jsx)("img", {
                                src: ot,
                                alt: ""
                            }), (0, Ns.jsx)("h5", {
                                className: "logoText",
                                children: "This Is Fine"
                            })]
                        }), (0, Ns.jsxs)("div", {
                            className: "footerIcons",
                            children: [(0, Ns.jsx)(Gs, {
                                color: "#647432",
                                size: 80,
                                onClick: function() {
                                    window.open("https://t.me/TIF_COIN", "_blank")
                                }
                            }), (0, Ns.jsx)(Zs, {
                                color: "#647432",
                                size: 80,
                                onClick: function() {
                                    window.open("https://twitter.com/tifthecoin?t=XryoLESwinZ89gAc3yz-jw&s=09", "_blank")
                                }
                            })]
                        }), (0, Ns.jsx)("h5", {
                            className: "footerText",
                            children: "We would like to give the 1% of the total supply to the creator of the meme: KC Green, hope he will answer... anyway this token is not related to him in terms of financial advice or financial purpose."
                        }), (0, Ns.jsx)("h5", {
                            className: "footerText",
                            children: "$TIF is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin is completely useless and for entertainment purposes only. But... who knows... the moon is not to far from the Earth."
                        }), (0, Ns.jsx)("div", {
                            className: "footerCopyrights",
                            children: (0, Ns.jsx)("h5", {
                                children: "\xa9 2023 by TIF. All rights reserved!"
                            })
                        })]
                    })
                },
                ec = function() {
                    return (0, t.useEffect)((function() {
                        document.body.style.overflow = "auto"
                    })), (0, Ns.jsxs)("div", {
                        className: "home-3",
                        style: {
                            position: "relative"
                        },
                        children: [(0, Ns.jsx)(Vs, {}), (0, Ns.jsx)("div", {
                            className: "fireSeperator"
                        }), (0, Ns.jsx)(Us, {}), (0, Ns.jsx)("div", {
                            className: "fireSeperator"
                        }), (0, Ns.jsx)(Ks, {}), (0, Ns.jsx)("div", {
                            className: "fireSeperator"
                        }), (0, Ns.jsx)(qs, {}), (0, Ns.jsx)("div", {
                            className: "fireSeperator"
                        }), (0, Ns.jsx)(Xs, {}), (0, Ns.jsx)("div", {
                            className: "fireSeperator"
                        }), (0, Ns.jsx)(Js, {})]
                    })
                },
                tc = [{
                    path: "/",
                    component: (0, Ns.jsx)(ec, {})
                }],
                nc = (0, t.createContext)(null);
            var rc = function() {
                var e = [{
                        id: 0,
                        name: "BITCOIN",
                        symbol: "btc",
                        logo: "https://assets.coincap.io/assets/icons/btc@2x.png"
                    }, {
                        id: 1,
                        name: "BITCOIN",
                        symbol: "btc",
                        logo: "https://assets.coincap.io/assets/icons/btc@2x.png"
                    }],
                    n = s((0, t.useState)(e[0]), 2),
                    r = n[0],
                    a = n[1],
                    o = s((0, t.useState)(e[1]), 2),
                    i = o[0],
                    l = o[1];
                return (0, Ns.jsx)(nc.Provider, {
                    value: [r, a, i, l],
                    children: (0, Ns.jsx)(Ae, {
                        children: tc.map((function(e, t) {
                            return (0, Ns.jsx)(Me, {
                                onUpdate: function() {
                                    return window.scrollTo(0, 0)
                                },
                                exact: !0,
                                path: e.path,
                                element: e.component
                            }, t)
                        }))
                    })
                })
            };

            function ac() {
                var e = ye().pathname;
                return (0, t.useEffect)((function() {
                    window.scrollTo(0, 0)
                }), [e]), null
            }
            a.createRoot(document.getElementById("root")).render((0, Ns.jsxs)(Be, {
                children: [(0, Ns.jsx)(ac, {}), (0, Ns.jsx)(rc, {})]
            }))
        }()
}();
//# sourceMappingURL=main.d77c121a.js.map