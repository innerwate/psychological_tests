// WARNING! This file contains some subset of JS that is not supported by type inference.
// You can try checking 'Transpile to ES5' checkbox if you want the types to be inferred
/**
 * @license

 Copyright (c) 2016 Federico Zivolo and contributors

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 The MIT License (MIT)
 jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license  jQuery JavaScript Library v3.4.1
 https://jquery.com/

 Includes Sizzle.js
 https://sizzlejs.com/

 Copyright JS Foundation and other contributors
 Released under the MIT license
 https://jquery.org/license

 Date: 2019-05-01T21:04Z
 Sizzle CSS Selector Engine v2.3.4
 https://sizzlejs.com/

 Copyright JS Foundation and other contributors
 Released under the MIT license
 https://js.foundation/

 Date: 2019-04-08
 Bootstrap v4.4.1 (https://getbootstrap.com/)
 Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
'use strict';
!function(m) {
  function t(i) {
    if (n[i]) {
      return n[i].exports;
    }
    var module = n[i] = {
      i : i,
      l : false,
      exports : {}
    };
    return m[i].call(module.exports, module, module.exports, t), module.l = true, module.exports;
  }
  var n = {};
  t.m = m;
  t.c = n;
  t.d = function(d, name, n) {
    if (!t.o(d, name)) {
      Object.defineProperty(d, name, {
        enumerable : true,
        get : n
      });
    }
  };
  t.r = function(input) {
    if ("undefined" != typeof Symbol && Symbol.toStringTag) {
      Object.defineProperty(input, Symbol.toStringTag, {
        value : "Module"
      });
    }
    Object.defineProperty(input, "__esModule", {
      value : true
    });
  };
  t.t = function(a, b) {
    if (1 & b && (a = t(a)), 8 & b) {
      return a;
    }
    if (4 & b && "object" == typeof a && a && a.__esModule) {
      return a;
    }
    var d = Object.create(null);
    if (t.r(d), Object.defineProperty(d, "default", {
      enumerable : true,
      value : a
    }), 2 & b && "string" != typeof a) {
      var i;
      for (i in a) {
        t.d(d, i, function(howMany) {
          return a[howMany];
        }.bind(null, i));
      }
    }
    return d;
  };
  t.n = function(module) {
    var n = module && module.__esModule ? function() {
      return module.default;
    } : function() {
      return module;
    };
    return t.d(n, "a", n), n;
  };
  t.o = function(arg, str) {
    return Object.prototype.hasOwnProperty.call(arg, str);
  };
  t.p = "";
  t(t.s = 7);
}([function(mixin, t, n) {
  var m;
  !function(global, factory) {
    if ("object" == typeof mixin.exports) {
      mixin.exports = global.document ? factory(global, true) : function(name) {
        if (!name.document) {
          throw new Error("jQuery requires a window with a document");
        }
        return factory(name);
      };
    } else {
      factory(global);
    }
  }("undefined" != typeof window ? window : this, function(window, i) {
    function test(name, obj, doc) {
      var key;
      var scriptsrc;
      var script = (doc = doc || document).createElement("script");
      if (script.text = name, obj) {
        for (key in obj) {
          if (scriptsrc = obj[key] || obj.getAttribute && obj.getAttribute(key)) {
            script.setAttribute(key, scriptsrc);
          }
        }
      }
      doc.head.appendChild(script).parentNode.removeChild(script);
    }
    function type(name) {
      return null == name ? name + "" : "object" == typeof name || "function" == typeof name ? class2type[toString.call(name)] || "object" : typeof name;
    }
    function isArrayLike(obj) {
      var length = !!obj && "length" in obj && obj.length;
      var ltype = type(obj);
      return !fn(obj) && !isWindow(obj) && ("array" === ltype || 0 === length || "number" == typeof length && 0 < length && length - 1 in obj);
    }
    function callback(name, type) {
      return name.nodeName && name.nodeName.toLowerCase() === type.toLowerCase();
    }
    function filter(key, value, not) {
      return fn(value) ? jQuery.grep(key, function(context, i) {
        return !!value.call(context, i, context) !== not;
      }) : value.nodeType ? jQuery.grep(key, function(elem) {
        return elem === value !== not;
      }) : "string" != typeof value ? jQuery.grep(key, function(name) {
        return -1 < indexOf.call(value, name) !== not;
      }) : jQuery.filter(value, key, not);
    }
    function sibling(cur, dir) {
      for (; (cur = cur[dir]) && 1 !== cur.nodeType;) {
      }
      return cur;
    }
    function result(passthru) {
      return passthru;
    }
    function data(h_triple) {
      throw h_triple;
    }
    function resolve(data, path, callback, args) {
      var error;
      try {
        if (data && fn(error = data.promise)) {
          error.call(data).done(path).fail(callback);
        } else {
          if (data && fn(error = data.then)) {
            error.call(data, path, callback);
          } else {
            path.apply(void 0, [data].slice(args));
          }
        }
      } catch (success) {
        callback.apply(void 0, [success]);
      }
    }
    function $__jsx_onload() {
      document.removeEventListener("DOMContentLoaded", $__jsx_onload);
      window.removeEventListener("load", $__jsx_onload);
      jQuery.ready();
    }
    function dashToCapital(context, match) {
      return match.toUpperCase();
    }
    function camelCase(str) {
      return str.replace(_kerningNamesHash_escapeEscape, "ms-").replace(rcharset, dashToCapital);
    }
    function Data() {
      this.expando = jQuery.expando + Data.uid++;
    }
    function set(elem, target, content) {
      var name;
      var value;
      if (void 0 === content && 1 === elem.nodeType) {
        if (name = "data-" + target.replace(rhyphen, "-$&").toLowerCase(), "string" == typeof(content = elem.getAttribute(name))) {
          try {
            content = "true" === (value = content) || "false" !== value && ("null" === value ? null : value === +value + "" ? +value : contribRegex.test(value) ? JSON.parse(value) : value);
          } catch (e) {
          }
          $.set(elem, target, content);
        } else {
          content = void 0;
        }
      }
      return content;
    }
    function adjustCSS(elem, prop, valueParts, tween) {
      var adjusted;
      var scale;
      var s = 20;
      var currentValue = tween ? function() {
        return tween.cur();
      } : function() {
        return jQuery.css(elem, prop, "");
      };
      var initial = currentValue();
      var unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px");
      var initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || "px" !== unit && +initial) && regex.exec(jQuery.css(elem, prop));
      if (initialInUnit && initialInUnit[3] !== unit) {
        initial = initial / 2;
        unit = unit || initialInUnit[3];
        initialInUnit = +initial || 1;
        for (; s--;) {
          jQuery.style(elem, prop, initialInUnit + unit);
          if ((1 - scale) * (1 - (scale = currentValue() / initial || .5)) <= 0) {
            s = 0;
          }
          initialInUnit = initialInUnit / scale;
        }
        initialInUnit = initialInUnit * 2;
        jQuery.style(elem, prop, initialInUnit + unit);
        valueParts = valueParts || [];
      }
      return valueParts && (initialInUnit = +initialInUnit || +initial || 0, adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2], tween && (tween.unit = unit, tween.start = initialInUnit, tween.end = adjusted)), adjusted;
    }
    function show(elements, input) {
      var d;
      var elem;
      var element;
      var value;
      var document;
      var tagName;
      var display;
      var values = [];
      var i = 0;
      var eL = elements.length;
      for (; i < eL; i++) {
        if ((elem = elements[i]).style) {
          d = elem.style.display;
          if (input) {
            if ("none" === d) {
              values[i] = dataPriv.get(elem, "display") || null;
              if (!values[i]) {
                elem.style.display = "";
              }
            }
            if ("" === elem.style.display && isHidden(elem)) {
              values[i] = (display = document = value = void 0, document = (element = elem).ownerDocument, tagName = element.nodeName, (display = elemdisplay[tagName]) || (value = document.body.appendChild(document.createElement(tagName)), display = jQuery.css(value, "display"), value.parentNode.removeChild(value), "none" === display && (display = "block"), elemdisplay[tagName] = display));
            }
          } else {
            if ("none" !== d) {
              values[i] = "none";
              dataPriv.set(elem, "display", d);
            }
          }
        }
      }
      i = 0;
      for (; i < eL; i++) {
        if (null != values[i]) {
          elements[i].style.display = values[i];
        }
      }
      return elements;
    }
    function getAll(context, tag) {
      var legendset;
      return legendset = void 0 !== context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : void 0 !== context.querySelectorAll ? context.querySelectorAll(tag || "*") : [], void 0 === tag || tag && callback(context, tag) ? jQuery.merge([context], legendset) : legendset;
    }
    function setGlobalEval(elems, refElements) {
      var i = 0;
      var length = elems.length;
      for (; i < length; i++) {
        dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
      }
    }
    function buildFragment(args, context, node, result, ignored) {
      var elem;
      var tmp;
      var tag;
      var wrap;
      var i;
      var j;
      var fragment = context.createDocumentFragment();
      var results = [];
      var index = 0;
      var arg_count = args.length;
      for (; index < arg_count; index++) {
        if ((elem = args[index]) || 0 === elem) {
          if ("object" === type(elem)) {
            jQuery.merge(results, elem.nodeType ? [elem] : elem);
          } else {
            if (re_commas.test(elem)) {
              tmp = tmp || fragment.appendChild(context.createElement("div"));
              tag = (me.exec(elem) || ["", ""])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
              j = wrap[0];
              for (; j--;) {
                tmp = tmp.lastChild;
              }
              jQuery.merge(results, tmp.childNodes);
              (tmp = fragment.firstChild).textContent = "";
            } else {
              results.push(context.createTextNode(elem));
            }
          }
        }
      }
      fragment.textContent = "";
      index = 0;
      for (; elem = results[index++];) {
        if (result && -1 < jQuery.inArray(elem, result)) {
          if (ignored) {
            ignored.push(elem);
          }
        } else {
          if (i = get(elem), tmp = getAll(fragment.appendChild(elem), "script"), i && setGlobalEval(tmp), node) {
            j = 0;
            for (; elem = tmp[j++];) {
              if (opacityRe.test(elem.type || "")) {
                node.push(elem);
              }
            }
          }
        }
      }
      return fragment;
    }
    function mouseMove() {
      return true;
    }
    function returnFalse() {
      return false;
    }
    function moveHandler(event, data) {
      return event === function() {
        try {
          return document.activeElement;
        } catch (e) {
        }
      }() == ("focus" === data);
    }
    function bind(f, a, value, key, fn, data) {
      var handler;
      var n;
      if ("object" == typeof a) {
        for (n in "string" != typeof value && (key = key || value, value = void 0), a) {
          bind(f, n, value, key, a[n], data);
        }
        return f;
      }
      if (null == key && null == fn ? (fn = value, key = value = void 0) : null == fn && ("string" == typeof value ? (fn = key, key = void 0) : (fn = key, key = value, value = void 0)), false === fn) {
        fn = returnFalse;
      } else {
        if (!fn) {
          return f;
        }
      }
      return 1 === data && (handler = fn, (fn = function(type) {
        return jQuery().off(type), handler.apply(this, arguments);
      }).guid = handler.guid || (handler.guid = jQuery.guid++)), f.each(function() {
        jQuery.event.add(this, a, fn, key, value);
      });
    }
    function on(elem, type, handler) {
      if (handler) {
        dataPriv.set(elem, type, false);
        jQuery.event.add(elem, type, {
          namespace : false,
          handler : function(event) {
            var promise;
            var attr;
            var data = dataPriv.get(this, type);
            if (1 & event.isTrigger && this[type]) {
              if (data.length) {
                if ((jQuery.event.special[type] || {}).delegateType) {
                  event.stopPropagation();
                }
              } else {
                if (data = slice.call(arguments), dataPriv.set(this, type, data), promise = handler(this, type), this[type](), data !== (attr = dataPriv.get(this, type)) || promise ? dataPriv.set(this, type, false) : attr = {}, data !== attr) {
                  return event.stopImmediatePropagation(), event.preventDefault(), attr.value;
                }
              }
            } else {
              if (data.length) {
                dataPriv.set(this, type, {
                  value : jQuery.event.trigger(jQuery.extend(data[0], jQuery.Event.prototype), data.slice(1), this)
                });
                event.stopImmediatePropagation();
              }
            }
          }
        });
      } else {
        if (void 0 === dataPriv.get(elem, type)) {
          jQuery.event.add(elem, type, mouseMove);
        }
      }
    }
    function manipulationTarget(elem, content) {
      return callback(elem, "table") && callback(11 !== content.nodeType ? content : content.firstChild, "tr") && jQuery(elem).children("tbody")[0] || elem;
    }
    function root(elem) {
      return elem.type = (null !== elem.getAttribute("type")) + "/" + elem.type, elem;
    }
    function createGeneNameGenomicState(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }
    function cloneCopyEvent(node, elem) {
      var i;
      var tableslen;
      var type;
      var options;
      var value;
      var p;
      var token;
      var events;
      if (1 === elem.nodeType) {
        if (dataPriv.hasData(node) && (options = dataPriv.access(node), value = dataPriv.set(elem, options), events = options.events)) {
          for (type in delete value.handle, value.events = {}, events) {
            i = 0;
            tableslen = events[type].length;
            for (; i < tableslen; i++) {
              jQuery.event.add(elem, type, events[type][i]);
            }
          }
        }
        if ($.hasData(node)) {
          p = $.access(node);
          token = jQuery.extend({}, p);
          $.set(elem, token);
        }
      }
    }
    function domManip(collection, args, callback, ignored) {
      args = c.apply([], args);
      var fragment;
      var first;
      var nodes;
      var tableslen;
      var node;
      var document;
      var i = 0;
      var totalItems = collection.length;
      var minimumIdx = totalItems - 1;
      var e = args[0];
      var spot = fn(e);
      if (spot || 1 < totalItems && "string" == typeof e && !support.checkClone && reValidName.test(e)) {
        return collection.each(function(id) {
          var self = collection.eq(id);
          if (spot) {
            args[0] = e.call(this, id, self.html());
          }
          domManip(self, args, callback, ignored);
        });
      }
      if (totalItems && (first = (fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored)).firstChild, 1 === fragment.childNodes.length && (fragment = first), first || ignored)) {
        tableslen = (nodes = jQuery.map(getAll(fragment, "script"), root)).length;
        for (; i < totalItems; i++) {
          node = fragment;
          if (i !== minimumIdx) {
            node = jQuery.clone(node, true, true);
            if (tableslen) {
              jQuery.merge(nodes, getAll(node, "script"));
            }
          }
          callback.call(collection[i], node, i);
        }
        if (tableslen) {
          document = nodes[nodes.length - 1].ownerDocument;
          jQuery.map(nodes, createGeneNameGenomicState);
          i = 0;
          for (; i < tableslen; i++) {
            node = nodes[i];
            if (opacityRe.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(document, node)) {
              if (node.src && "module" !== (node.type || "").toLowerCase()) {
                if (jQuery._evalUrl && !node.noModule) {
                  jQuery._evalUrl(node.src, {
                    nonce : node.nonce || node.getAttribute("nonce")
                  });
                }
              } else {
                test(node.textContent.replace(codePoint, ""), node, document);
              }
            }
          }
        }
      }
      return collection;
    }
    function remove(val, fn, data) {
      var elem;
      var arr = fn ? jQuery.filter(fn, val) : val;
      var i = 0;
      for (; null != (elem = arr[i]); i++) {
        if (!(data || 1 !== elem.nodeType)) {
          jQuery.cleanData(getAll(elem));
        }
        if (elem.parentNode) {
          if (data && get(elem)) {
            setGlobalEval(getAll(elem, "script"));
          }
          elem.parentNode.removeChild(elem);
        }
      }
      return val;
    }
    function curCSS(elem, name, computed) {
      var minWidth;
      var width;
      var maxWidth;
      var ret;
      var style = elem.style;
      return (computed = computed || getStyles(elem)) && ("" !== (ret = computed.getPropertyValue(name) || computed[name]) || get(elem) || (ret = jQuery.style(elem, name)), !support.pixelBoxStyles() && rnumnonpx.test(ret) && inlineAttributeCommentRegex.test(name) && (minWidth = style.width, width = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, ret = computed.width, style.width = minWidth, style.minWidth = width, style.maxWidth = maxWidth)), void 0 !== 
      ret ? ret + "" : ret;
    }
    function addGetHookIf(conditionFn, hookFn) {
      return {
        get : function() {
          if (!conditionFn()) {
            return (this.get = hookFn).apply(this, arguments);
          }
          delete this.get;
        }
      };
    }
    function camelize(name) {
      return jQuery.cssProps[name] || aSupports[name] || (name in testStyle ? name : aSupports[name] = function(p) {
        var prop = p[0].toUpperCase() + p.slice(1);
        var i = prefixes.length;
        for (; i--;) {
          if ((p = prefixes[i] + prop) in testStyle) {
            return p;
          }
        }
      }(name) || name);
    }
    function debug(type, value, str) {
      var matches = regex.exec(value);
      return matches ? Math.max(0, matches[2] - (str || 0)) + (matches[3] || "px") : value;
    }
    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles, themeName) {
      var i = "width" === name ? 1 : 0;
      var value = 0;
      var val = 0;
      if (extra === (isBorderBox ? "border" : "content")) {
        return 0;
      }
      for (; i < 4; i = i + 2) {
        if ("margin" === extra) {
          val = val + jQuery.css(elem, extra + cssExpand[i], true, styles);
        }
        if (isBorderBox) {
          if ("content" === extra) {
            val = val - jQuery.css(elem, "padding" + cssExpand[i], true, styles);
          }
          if ("margin" !== extra) {
            val = val - jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
          }
        } else {
          val = val + jQuery.css(elem, "padding" + cssExpand[i], true, styles);
          if ("padding" !== extra) {
            val = val + jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
          } else {
            value = value + jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
          }
        }
      }
      return !isBorderBox && 0 <= themeName && (val = val + (Math.max(0, Math.ceil(elem["offset" + name[0].toUpperCase() + name.slice(1)] - themeName - val - value - .5)) || 0)), val;
    }
    function getWidthOrHeight(elem, name, extra) {
      var styles = getStyles(elem);
      var isBorderBox = (!support.boxSizingReliable() || extra) && "border-box" === jQuery.css(elem, "boxSizing", false, styles);
      var valueIsBorderBox = isBorderBox;
      var value = curCSS(elem, name, styles);
      var prop = "offset" + name[0].toUpperCase() + name.slice(1);
      if (rnumnonpx.test(value)) {
        if (!extra) {
          return value;
        }
        value = "auto";
      }
      return (!support.boxSizingReliable() && isBorderBox || "auto" === value || !parseFloat(value) && "inline" === jQuery.css(elem, "display", false, styles)) && elem.getClientRects().length && (isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", false, styles), (valueIsBorderBox = prop in elem) && (value = elem[prop])), (value = parseFloat(value) || 0) + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, value) + "px";
    }
    function Tween(type, key, object, end, easing) {
      return new Tween.prototype.init(type, key, object, end, easing);
    }
    function step() {
      if (at) {
        if (false === document.hidden && window.requestAnimationFrame) {
          window.requestAnimationFrame(step);
        } else {
          window.setTimeout(step, jQuery.fx.interval);
        }
        jQuery.fx.tick();
      }
    }
    function createFxNow() {
      return window.setTimeout(function() {
        fxNow = void 0;
      }), fxNow = Date.now();
    }
    function genFx(type, includeWidth) {
      var which;
      var i = 0;
      var attrs = {
        height : type
      };
      includeWidth = includeWidth ? 1 : 0;
      for (; i < 4; i = i + (2 - includeWidth)) {
        attrs["margin" + (which = cssExpand[i])] = attrs["padding" + which] = type;
      }
      return includeWidth && (attrs.opacity = attrs.width = type), attrs;
    }
    function createTween(value, prop, animation) {
      var tween;
      var prev = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]);
      var p = 0;
      var s = prev.length;
      for (; p < s; p++) {
        if (tween = prev[p].call(animation, prop, value)) {
          return tween;
        }
      }
    }
    function Animation(elem, properties, options) {
      var result;
      var i;
      var index = 0;
      var ncells = Animation.prefilters.length;
      var deferred = jQuery.Deferred().always(function() {
        delete tick.elem;
      });
      var tick = function() {
        if (i) {
          return false;
        }
        var currentTime = fxNow || createFxNow();
        var remaining = Math.max(0, animation.startTime + animation.duration - currentTime);
        var percent = 1 - (remaining / animation.duration || 0);
        var index = 0;
        var length = animation.tweens.length;
        for (; index < length; index++) {
          animation.tweens[index].run(percent);
        }
        return deferred.notifyWith(elem, [animation, percent, remaining]), percent < 1 && length ? remaining : (length || deferred.notifyWith(elem, [animation, 1, 0]), deferred.resolveWith(elem, [animation]), false);
      };
      var animation = deferred.promise({
        elem : elem,
        props : jQuery.extend({}, properties),
        opts : jQuery.extend(true, {
          specialEasing : {},
          easing : jQuery.easing._default
        }, options),
        originalProperties : properties,
        originalOptions : options,
        startTime : fxNow || createFxNow(),
        duration : options.duration,
        tweens : [],
        createTween : function(prop, end) {
          var result = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
          return animation.tweens.push(result), result;
        },
        stop : function(gotoEnd) {
          var index = 0;
          var length = gotoEnd ? animation.tweens.length : 0;
          if (i) {
            return this;
          }
          i = true;
          for (; index < length; index++) {
            animation.tweens[index].run(1);
          }
          return gotoEnd ? (deferred.notifyWith(elem, [animation, 1, 0]), deferred.resolveWith(elem, [animation, gotoEnd])) : deferred.rejectWith(elem, [animation, gotoEnd]), this;
        }
      });
      var props = animation.props;
      (function(res, object) {
        var key;
        var name;
        var value;
        var obj;
        var hooks;
        for (key in res) {
          if (value = object[name = camelCase(key)], obj = res[key], Array.isArray(obj) && (value = obj[1], obj = res[key] = obj[0]), key !== name && (res[name] = obj, delete res[key]), (hooks = jQuery.cssHooks[name]) && "expand" in hooks) {
            for (key in obj = hooks.expand(obj), delete res[name], obj) {
              if (!(key in res)) {
                res[key] = obj[key];
                object[key] = value;
              }
            }
          } else {
            object[name] = value;
          }
        }
      })(props, animation.opts.specialEasing);
      for (; index < ncells; index++) {
        if (result = Animation.prefilters[index].call(animation, elem, props, animation.opts)) {
          return fn(result.stop) && (jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result)), result;
        }
      }
      return jQuery.map(props, createTween, animation), fn(animation.opts.start) && animation.opts.start.call(elem, animation), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always), jQuery.fx.timer(jQuery.extend(tick, {
        elem : elem,
        anim : animation,
        queue : animation.opts.queue
      })), animation;
    }
    function merge(el) {
      return (el.match(name) || []).join(" ");
    }
    function hasClass(el) {
      return el.getAttribute && el.getAttribute("class") || "";
    }
    function trim(value) {
      return Array.isArray(value) ? value : "string" == typeof value && value.match(name) || [];
    }
    function extend(path, object, base, next) {
      var name;
      if (Array.isArray(object)) {
        jQuery.each(object, function(i, response) {
          if (base || hasExtRx.test(path)) {
            next(path, response);
          } else {
            extend(path + "[" + ("object" == typeof response && null != response ? i : "") + "]", response, base, next);
          }
        });
      } else {
        if (base || "object" !== type(object)) {
          next(path, object);
        } else {
          for (name in object) {
            extend(path + "[" + name + "]", object[name], base, next);
          }
        }
      }
    }
    function addToPrefiltersOrTransports(structure) {
      return function(url, n) {
        if ("string" != typeof url) {
          n = url;
          url = "*";
        }
        var type;
        var ol = 0;
        var o = url.toLowerCase().match(name) || [];
        if (fn(n)) {
          for (; type = o[ol++];) {
            if ("+" === type[0]) {
              type = type.slice(1) || "*";
              (structure[type] = structure[type] || []).unshift(n);
            } else {
              (structure[type] = structure[type] || []).push(n);
            }
          }
        }
      };
    }
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
      function inspect(dataType) {
        var selected;
        return inspected[dataType] = true, jQuery.each(structure[dataType] || [], function(canCreateDiscussions, prefilterOrFactory) {
          var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
          return "string" != typeof dataTypeOrTransport || seekingTransport || inspected[dataTypeOrTransport] ? seekingTransport ? !(selected = dataTypeOrTransport) : void 0 : (options.dataTypes.unshift(dataTypeOrTransport), inspect(dataTypeOrTransport), false);
        }), selected;
      }
      var inspected = {};
      var seekingTransport = structure === transports;
      return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    function ajaxExtend(target, opts) {
      var key;
      var deep;
      var flatOptions = jQuery.ajaxSettings.flatOptions || {};
      for (key in opts) {
        if (void 0 !== opts[key]) {
          (flatOptions[key] ? target : deep || (deep = {}))[key] = opts[key];
        }
      }
      return deep && jQuery.extend(true, target, deep), target;
    }
    var arr = [];
    var document = window.document;
    var getProto = Object.getPrototypeOf;
    var slice = arr.slice;
    var c = arr.concat;
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var fnToString = hasOwn.toString;
    var Mixin2 = fnToString.call(Object);
    var support = {};
    var fn = function(obj) {
      return "function" == typeof obj && "number" != typeof obj.nodeType;
    };
    var isWindow = function(obj) {
      return null != obj && obj === obj.window;
    };
    var obj = {
      type : true,
      src : true,
      nonce : true,
      noModule : true
    };
    var core_version = "3.4.1";
    var jQuery = function(a, c) {
      return new jQuery.fn.init(a, c);
    };
    var tokensRegExp = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    jQuery.fn = jQuery.prototype = {
      jquery : core_version,
      constructor : jQuery,
      length : 0,
      toArray : function() {
        return slice.call(this);
      },
      get : function(num) {
        return null == num ? slice.call(this) : num < 0 ? this[num + this.length] : this[num];
      },
      pushStack : function(elems) {
        var ret = jQuery.merge(this.constructor(), elems);
        return ret.prevObject = this, ret;
      },
      each : function(callback) {
        return jQuery.each(this, callback);
      },
      map : function(fn) {
        return this.pushStack(jQuery.map(this, function(elem, event) {
          return fn.call(elem, event, elem);
        }));
      },
      slice : function() {
        return this.pushStack(slice.apply(this, arguments));
      },
      first : function() {
        return this.eq(0);
      },
      last : function() {
        return this.eq(-1);
      },
      eq : function(i) {
        var len = this.length;
        var end = +i + (i < 0 ? len : 0);
        return this.pushStack(0 <= end && end < len ? [this[end]] : []);
      },
      end : function() {
        return this.prevObject || this.constructor();
      },
      push : push,
      sort : arr.sort,
      splice : arr.splice
    };
    jQuery.extend = jQuery.fn.extend = function() {
      var options;
      var name;
      var value;
      var copy;
      var copyIsArray;
      var clone;
      var target = arguments[0] || {};
      var i = 1;
      var l = arguments.length;
      var deep = false;
      if ("boolean" == typeof target) {
        deep = target;
        target = arguments[i] || {};
        i++;
      }
      if (!("object" == typeof target || fn(target))) {
        target = {};
      }
      if (i === l) {
        target = this;
        i--;
      }
      for (; i < l; i++) {
        if (null != (options = arguments[i])) {
          for (name in options) {
            copy = options[name];
            if ("__proto__" !== name && target !== copy) {
              if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                value = target[name];
                clone = copyIsArray && !Array.isArray(value) ? [] : copyIsArray || jQuery.isPlainObject(value) ? value : {};
                copyIsArray = false;
                target[name] = jQuery.extend(deep, clone, copy);
              } else {
                if (void 0 !== copy) {
                  target[name] = copy;
                }
              }
            }
          }
        }
      }
      return target;
    };
    jQuery.extend({
      expando : "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),
      isReady : true,
      error : function(name) {
        throw new Error(name);
      },
      noop : function() {
      },
      isPlainObject : function(obj) {
        var proto;
        var hasOwnProperty;
        return !(!obj || "[object Object]" !== toString.call(obj) || (proto = getProto(obj)) && ("function" != typeof(hasOwnProperty = hasOwn.call(proto, "constructor") && proto.constructor) || fnToString.call(hasOwnProperty) !== Mixin2));
      },
      isEmptyObject : function(obj) {
        var key;
        for (key in obj) {
          return false;
        }
        return true;
      },
      globalEval : function(url, data) {
        test(url, {
          nonce : data && data.nonce
        });
      },
      each : function(data, fn) {
        var i;
        var n = 0;
        if (isArrayLike(data)) {
          i = data.length;
          for (; n < i && false !== fn.call(data[n], n, data[n]); n++) {
          }
        } else {
          for (n in data) {
            if (false === fn.call(data[n], n, data[n])) {
              break;
            }
          }
        }
        return data;
      },
      trim : function(text) {
        return null == text ? "" : (text + "").replace(tokensRegExp, "");
      },
      makeArray : function(arr, o) {
        var obj = o || [];
        return null != arr && (isArrayLike(Object(arr)) ? jQuery.merge(obj, "string" == typeof arr ? [arr] : arr) : push.call(obj, arr)), obj;
      },
      inArray : function(elem, arr, i) {
        return null == arr ? -1 : indexOf.call(arr, elem, i);
      },
      merge : function(data, set) {
        var _jlen = +set.length;
        var j = 0;
        var index = data.length;
        for (; j < _jlen; j++) {
          data[index++] = set[j];
        }
        return data.length = index, data;
      },
      grep : function(arr, callback, a) {
        var ret = [];
        var i = 0;
        var arrSize = arr.length;
        var booA = !a;
        for (; i < arrSize; i++) {
          if (!callback(arr[i], i) !== booA) {
            ret.push(arr[i]);
          }
        }
        return ret;
      },
      map : function(obj, cb, type) {
        var result;
        var err;
        var key = 0;
        var opt = [];
        if (isArrayLike(obj)) {
          result = obj.length;
          for (; key < result; key++) {
            if (null != (err = cb(obj[key], key, type))) {
              opt.push(err);
            }
          }
        } else {
          for (key in obj) {
            if (null != (err = cb(obj[key], key, type))) {
              opt.push(err);
            }
          }
        }
        return c.apply([], opt);
      },
      guid : 1,
      support : support
    });
    if ("function" == typeof Symbol) {
      jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
    }
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(canCreateDiscussions, p_Interval) {
      class2type["[object " + p_Interval + "]"] = p_Interval.toLowerCase();
    });
    var Sizzle = function(window) {
      function Sizzle(selector, context, results, seed) {
        var m;
        var i;
        var elem;
        var nid;
        var match;
        var groups;
        var newSelector;
        var newContext = context && context.ownerDocument;
        var undefined = context ? context.nodeType : 9;
        if (results = results || [], "string" != typeof selector || !selector || 1 !== undefined && 9 !== undefined && 11 !== undefined) {
          return results;
        }
        if (!seed && ((context ? context.ownerDocument || context : preferredDoc) !== document && setDocument(context), context = context || document, documentIsHTML)) {
          if (11 !== undefined && (match = customSelectorReg.exec(selector))) {
            if (m = match[1]) {
              if (9 === undefined) {
                if (!(elem = context.getElementById(m))) {
                  return results;
                }
                if (elem.id === m) {
                  return results.push(elem), results;
                }
              } else {
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  return results.push(elem), results;
                }
              }
            } else {
              if (match[2]) {
                return push.apply(results, context.getElementsByTagName(selector)), results;
              }
              if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                return push.apply(results, context.getElementsByClassName(m)), results;
              }
            }
          }
          if (support.qsa && !$[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (1 !== undefined || "object" !== context.nodeName.toLowerCase())) {
            if (newSelector = selector, newContext = context, 1 === undefined && RE_PSEUDOS.test(selector)) {
              if (nid = context.getAttribute("id")) {
                nid = nid.replace(rescape, fcssescape);
              } else {
                context.setAttribute("id", nid = expando);
              }
              i = (groups = tokenize(selector)).length;
              for (; i--;) {
                groups[i] = "#" + nid + " " + toSelector(groups[i]);
              }
              newSelector = groups.join(",");
              newContext = IS_HTML_FRAGMENT.test(selector) && testContext(context.parentNode) || context;
            }
            try {
              return push.apply(results, newContext.querySelectorAll(newSelector)), results;
            } catch (t) {
              $(selector, true);
            } finally {
              if (nid === expando) {
                context.removeAttribute("id");
              }
            }
          }
        }
        return select(selector.replace(rtrim, "$1"), context, results, seed);
      }
      function createCache() {
        var messages = [];
        return function cache(attr, fn) {
          return messages.push(attr + " ") > Expr.cacheLength && delete cache[messages.shift()], cache[attr + " "] = fn;
        };
      }
      function markFunction(fn) {
        return fn[expando] = true, fn;
      }
      function assert(expect) {
        var wrap = document.createElement("fieldset");
        try {
          return !!expect(wrap);
        } catch (e) {
          return false;
        } finally {
          if (wrap.parentNode) {
            wrap.parentNode.removeChild(wrap);
          }
          wrap = null;
        }
      }
      function addHandle(attrs, handler) {
        var arr = attrs.split("|");
        var i = arr.length;
        for (; i--;) {
          Expr.attrHandle[arr[i]] = handler;
        }
      }
      function siblingCheck(a, b) {
        var cur = b && a;
        var .num_const = cur && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
        if (.num_const) {
          return .num_const;
        }
        if (cur) {
          for (; cur = cur.nextSibling;) {
            if (cur === b) {
              return -1;
            }
          }
        }
        return a ? 1 : -1;
      }
      function jQuerify(browser) {
        return function(elem) {
          return "input" === elem.nodeName.toLowerCase() && elem.type === browser;
        };
      }
      function createButtonPseudo(type) {
        return function(section) {
          var undefined = section.nodeName.toLowerCase();
          return ("input" === undefined || "button" === undefined) && section.type === type;
        };
      }
      function createDisabledPseudo(disabled) {
        return function(elem) {
          return "form" in elem ? elem.parentNode && false === elem.disabled ? "label" in elem ? "label" in elem.parentNode ? elem.parentNode.disabled === disabled : elem.disabled === disabled : elem.isDisabled === disabled || elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled : elem.disabled === disabled : "label" in elem && elem.disabled === disabled;
        };
      }
      function createPositionalPseudo(fn) {
        return markFunction(function(key) {
          return key = +key, markFunction(function(a, b) {
            var i;
            var k = fn([], a.length, key);
            var l = k.length;
            for (; l--;) {
              if (a[i = k[l]]) {
                a[i] = !(b[i] = a[i]);
              }
            }
          });
        });
      }
      function testContext(context) {
        return context && void 0 !== context.getElementsByTagName && context;
      }
      function setFilters() {
      }
      function toSelector(tokens) {
        var i = 0;
        var numTokens = tokens.length;
        var selector = "";
        for (; i < numTokens; i++) {
          selector = selector + tokens[i].value;
        }
        return selector;
      }
      function addCombinator(matcher, combinator, base) {
        var dir = combinator.dir;
        var skip = combinator.next;
        var key = skip || dir;
        var checkNonElements = base && "parentNode" === key;
        var myCallId = callId++;
        return combinator.first ? function(elem, stat, context) {
          for (; elem = elem[dir];) {
            if (1 === elem.nodeType || checkNonElements) {
              return matcher(elem, stat, context);
            }
          }
          return false;
        } : function(elem, stat, context) {
          var val;
          var args;
          var outerCache;
          var finalProps = [j, myCallId];
          if (context) {
            for (; elem = elem[dir];) {
              if ((1 === elem.nodeType || checkNonElements) && matcher(elem, stat, context)) {
                return true;
              }
            }
          } else {
            for (; elem = elem[dir];) {
              if (1 === elem.nodeType || checkNonElements) {
                if (args = (outerCache = elem[expando] || (elem[expando] = {}))[elem.uniqueID] || (outerCache[elem.uniqueID] = {}), skip && skip === elem.nodeName.toLowerCase()) {
                  elem = elem[dir] || elem;
                } else {
                  if ((val = args[key]) && val[0] === j && val[1] === myCallId) {
                    return finalProps[2] = val[2];
                  }
                  if ((args[key] = finalProps)[2] = matcher(elem, stat, context)) {
                    return true;
                  }
                }
              }
            }
          }
          return false;
        };
      }
      function elementMatcher(matchers) {
        return 1 < matchers.length ? function(elem, context, xml) {
          var i = matchers.length;
          for (; i--;) {
            if (!matchers[i](elem, context, xml)) {
              return false;
            }
          }
          return true;
        } : matchers[0];
      }
      function condense(unmatched, map, filter, name, options) {
        var elem;
        var newUnmatched = [];
        var i = 0;
        var len = unmatched.length;
        var c = null != map;
        for (; i < len; i++) {
          if (elem = unmatched[i]) {
            if (!(filter && !filter(elem, name, options))) {
              newUnmatched.push(elem);
              if (c) {
                map.push(i);
              }
            }
          }
        }
        return newUnmatched;
      }
      function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
        return postFilter && !postFilter[expando] && (postFilter = setMatcher(postFilter)), postFinder && !postFinder[expando] && (postFinder = setMatcher(postFinder, postSelector)), markFunction(function(seed, results, context, xml) {
          var temp;
          var i;
          var elem;
          var preMap = [];
          var postMap = [];
          var preexisting = results.length;
          var elems = seed || function(selector, set, results) {
            var i = 0;
            var l = set.length;
            for (; i < l; i++) {
              Sizzle(selector, set[i], results);
            }
            return results;
          }(selector || "*", context.nodeType ? [context] : context, []);
          var matcherIn = !preFilter || !seed && selector ? elems : condense(elems, preMap, preFilter, context, xml);
          var matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
          if (matcher && matcher(matcherIn, matcherOut, context, xml), postFilter) {
            temp = condense(matcherOut, postMap);
            postFilter(temp, [], context, xml);
            i = temp.length;
            for (; i--;) {
              if (elem = temp[i]) {
                matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
              }
            }
          }
          if (seed) {
            if (postFinder || preFilter) {
              if (postFinder) {
                temp = [];
                i = matcherOut.length;
                for (; i--;) {
                  if (elem = matcherOut[i]) {
                    temp.push(matcherIn[i] = elem);
                  }
                }
                postFinder(null, matcherOut = [], temp, xml);
              }
              i = matcherOut.length;
              for (; i--;) {
                if ((elem = matcherOut[i]) && -1 < (temp = postFinder ? indexOf(seed, elem) : preMap[i])) {
                  seed[temp] = !(results[temp] = elem);
                }
              }
            }
          } else {
            matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
            if (postFinder) {
              postFinder(null, results, matcherOut, xml);
            } else {
              push.apply(results, matcherOut);
            }
          }
        });
      }
      function matcherFromTokens(tokens) {
        var checkContext;
        var matcher;
        var j;
        var len = tokens.length;
        var leadingRelative = Expr.relative[tokens[0].type];
        var implicitRelative = leadingRelative || Expr.relative[" "];
        var i = leadingRelative ? 1 : 0;
        var matchContext = addCombinator(function(elem) {
          return elem === checkContext;
        }, implicitRelative, true);
        var matchAnyContext = addCombinator(function(value) {
          return -1 < indexOf(checkContext, value);
        }, implicitRelative, true);
        var matchers = [function(elem, context, xml) {
          var i = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
          return checkContext = null, i;
        }];
        for (; i < len; i++) {
          if (matcher = Expr.relative[tokens[i].type]) {
            matchers = [addCombinator(elementMatcher(matchers), matcher)];
          } else {
            if ((matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches))[expando]) {
              j = ++i;
              for (; j < len && !Expr.relative[tokens[j].type]; j++) {
              }
              return setMatcher(1 < i && elementMatcher(matchers), 1 < i && toSelector(tokens.slice(0, i - 1).concat({
                value : " " === tokens[i - 2].type ? "*" : ""
              })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
            }
            matchers.push(matcher);
          }
        }
        return elementMatcher(matchers);
      }
      var i;
      var support;
      var Expr;
      var attr;
      var isXML;
      var tokenize;
      var compile;
      var select;
      var outermostContext;
      var sortInput;
      var ret;
      var setDocument;
      var document;
      var docElem;
      var documentIsHTML;
      var rbuggyQSA;
      var rbuggyMatches;
      var matches;
      var contains;
      var expando = "sizzle" + 1 * new Date;
      var preferredDoc = window.document;
      var j = 0;
      var callId = 0;
      var classCache = createCache();
      var tokenCache = createCache();
      var compilerCache = createCache();
      var $ = createCache();
      var time = function(type, string) {
        return type === string && (ret = true), 0;
      };
      var hasOwn = {}.hasOwnProperty;
      var arr = [];
      var pop = arr.pop;
      var push_native = arr.push;
      var push = arr.push;
      var slice = arr.slice;
      var indexOf = function(list, value) {
        var i = 0;
        var listLength = list.length;
        for (; i < listLength; i++) {
          if (list[i] === value) {
            return i;
          }
        }
        return -1;
      };
      var value = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
      var _test = "[\\x20\\t\\r\\n\\f]";
      var escRightBracket = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+";
      var _end2 = "\\[" + _test + "*(" + escRightBracket + ")(?:" + _test + "*([*^$|!~]?=)" + _test + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + escRightBracket + "))|)" + _test + "*\\]";
      var pseudos = ":(" + escRightBracket + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + _end2 + ")*)|.*)\\)|)";
      var regex_delimiters = new RegExp(_test + "+", "g");
      var rtrim = new RegExp("^" + _test + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _test + "+$", "g");
      var chunker = new RegExp("^" + _test + "*," + _test + "*");
      var rcomma = new RegExp("^" + _test + "*([>+~]|" + _test + ")" + _test + "*");
      var RE_PSEUDOS = new RegExp(_test + "|>");
      var rpseudo = new RegExp(pseudos);
      var ridentifier = new RegExp("^" + escRightBracket + "$");
      var matchExpr = {
        ID : new RegExp("^#(" + escRightBracket + ")"),
        CLASS : new RegExp("^\\.(" + escRightBracket + ")"),
        TAG : new RegExp("^(" + escRightBracket + "|[*])"),
        ATTR : new RegExp("^" + _end2),
        PSEUDO : new RegExp("^" + pseudos),
        CHILD : new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _test + "*(even|odd|(([+-]|)(\\d*)n|)" + _test + "*(?:([+-]|)" + _test + "*(\\d+)|))" + _test + "*\\)|)", "i"),
        bool : new RegExp("^(?:" + value + ")$", "i"),
        needsContext : new RegExp("^" + _test + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _test + "*((?:-\\d)?\\d*)" + _test + "*\\)|)(?=[^-]|$)", "i")
      };
      var reKeyword = /HTML$/i;
      var inputNodeNames = /^(?:input|select|textarea|button)$/i;
      var rnoType = /^h\d$/i;
      var rnative = /^[^{]+\{\s*\[native \w/;
      var customSelectorReg = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
      var IS_HTML_FRAGMENT = /[+~]/;
      var start = new RegExp("\\\\([\\da-f]{1,6}" + _test + "?|(" + _test + ")|.)", "ig");
      var key = function(type, def, allowMulti) {
        var c = "0x" + def - 65536;
        return c != c || allowMulti ? def : c < 0 ? String.fromCharCode(c + 65536) : String.fromCharCode(c >> 10 | 55296, 1023 & c | 56320);
      };
      var rescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g;
      var fcssescape = function(ch, asCodePoint) {
        return asCodePoint ? "\x00" === ch ? "\ufffd" : ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " " : "\\" + ch;
      };
      var unloadHandler = function() {
        setDocument();
      };
      var disabledAncestor = addCombinator(function(e) {
        return true === e.disabled && "fieldset" === e.nodeName.toLowerCase();
      }, {
        dir : "parentNode",
        next : "legend"
      });
      try {
        push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
        arr[preferredDoc.childNodes.length].nodeType;
      } catch (t) {
        push = {
          apply : arr.length ? function(target, obj) {
            push_native.apply(target, slice.call(obj));
          } : function(obj, c) {
            var i = obj.length;
            var xp = 0;
            for (; obj[i++] = c[xp++];) {
            }
            obj.length = i - 1;
          }
        };
      }
      for (i in support = Sizzle.support = {}, isXML = Sizzle.isXML = function(elem) {
        var nodeName = elem.namespaceURI;
        var xmlNode = (elem.ownerDocument || elem).documentElement;
        return !reKeyword.test(nodeName || xmlNode && xmlNode.nodeName || "HTML");
      }, setDocument = Sizzle.setDocument = function(node) {
        var init;
        var subWindow;
        var doc = node ? node.ownerDocument || node : preferredDoc;
        return doc !== document && 9 === doc.nodeType && doc.documentElement && (docElem = (document = doc).documentElement, documentIsHTML = !isXML(document), preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow && (subWindow.addEventListener ? subWindow.addEventListener("unload", unloadHandler, false) : subWindow.attachEvent && subWindow.attachEvent("onunload", unloadHandler)), support.attributes = assert(function(elm) {
          return elm.className = "i", !elm.getAttribute("className");
        }), support.getElementsByTagName = assert(function(testee) {
          return testee.appendChild(document.createComment("")), !testee.getElementsByTagName("*").length;
        }), support.getElementsByClassName = rnative.test(document.getElementsByClassName), support.getById = assert(function(body) {
          return docElem.appendChild(body).id = expando, !document.getElementsByName || !document.getElementsByName(expando).length;
        }), support.getById ? (Expr.filter.ID = function(elem) {
          var url = elem.replace(start, key);
          return function(e) {
            return e.getAttribute("id") === url;
          };
        }, Expr.find.ID = function(elem, context) {
          if (void 0 !== context.getElementById && documentIsHTML) {
            var c_style = context.getElementById(elem);
            return c_style ? [c_style] : [];
          }
        }) : (Expr.filter.ID = function(elem) {
          var name = elem.replace(start, key);
          return function(elem) {
            var a = void 0 !== elem.getAttributeNode && elem.getAttributeNode("id");
            return a && a.value === name;
          };
        }, Expr.find.ID = function(value, context) {
          if (void 0 !== context.getElementById && documentIsHTML) {
            var attr;
            var r;
            var ret;
            var tmp = context.getElementById(value);
            if (tmp) {
              if ((attr = tmp.getAttributeNode("id")) && attr.value === value) {
                return [tmp];
              }
              ret = context.getElementsByName(value);
              r = 0;
              for (; tmp = ret[r++];) {
                if ((attr = tmp.getAttributeNode("id")) && attr.value === value) {
                  return [tmp];
                }
              }
            }
            return [];
          }
        }), Expr.find.TAG = support.getElementsByTagName ? function(v, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(v) : support.qsa ? t.querySelectorAll(v) : void 0;
        } : function(selector, document) {
          var first;
          var tmp = [];
          var i = 0;
          var results = document.getElementsByTagName(selector);
          if ("*" === selector) {
            for (; first = results[i++];) {
              if (1 === first.nodeType) {
                tmp.push(first);
              }
            }
            return tmp;
          }
          return results;
        }, Expr.find.CLASS = support.getElementsByClassName && function(m, docDom) {
          if (void 0 !== docDom.getElementsByClassName && documentIsHTML) {
            return docDom.getElementsByClassName(m);
          }
        }, rbuggyMatches = [], rbuggyQSA = [], (support.qsa = rnative.test(document.querySelectorAll)) && (assert(function(container) {
          docElem.appendChild(container).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
          if (container.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + _test + "*(?:''|\"\")");
          }
          if (!container.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + _test + "*(?:value|" + value + ")");
          }
          if (!container.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          }
          if (!container.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          }
          if (!container.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          }
        }), assert(function(el) {
          el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          el.appendChild(input).setAttribute("name", "D");
          if (el.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + _test + "*[*^$|!~]?=");
          }
          if (2 !== el.querySelectorAll(":enabled").length) {
            rbuggyQSA.push(":enabled", ":disabled");
          }
          docElem.appendChild(el).disabled = true;
          if (2 !== el.querySelectorAll(":disabled").length) {
            rbuggyQSA.push(":enabled", ":disabled");
          }
          el.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        })), (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) && assert(function(el) {
          support.disconnectedMatch = matches.call(el, "*");
          matches.call(el, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), init = rnative.test(docElem.compareDocumentPosition), contains = init || rnative.test(docElem.contains) ? function(a, n) {
          var name = 9 === a.nodeType ? a.documentElement : a;
          var b = n && n.parentNode;
          return a === b || !(!b || 1 !== b.nodeType || !(name.contains ? name.contains(b) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(b)));
        } : function(a, b) {
          if (b) {
            for (; b = b.parentNode;) {
              if (b === a) {
                return true;
              }
            }
          }
          return false;
        }, time = init ? function(a, b) {
          if (a === b) {
            return ret = true, 0;
          }
          var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
          return compare || (1 & (compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1) || !support.sortDetached && b.compareDocumentPosition(a) === compare ? a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ? -1 : b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0 : 4 & compare ? -1 : 1);
        } : function(a, b) {
          if (a === b) {
            return ret = true, 0;
          }
          var cur;
          var i = 0;
          var aup = a.parentNode;
          var bup = b.parentNode;
          var ap = [a];
          var bp = [b];
          if (!aup || !bup) {
            return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
          }
          if (aup === bup) {
            return siblingCheck(a, b);
          }
          cur = a;
          for (; cur = cur.parentNode;) {
            ap.unshift(cur);
          }
          cur = b;
          for (; cur = cur.parentNode;) {
            bp.unshift(cur);
          }
          for (; ap[i] === bp[i];) {
            i++;
          }
          return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
        }), document;
      }, Sizzle.matches = function(expr, set) {
        return Sizzle(expr, null, null, set);
      }, Sizzle.matchesSelector = function(elem, expr) {
        if ((elem.ownerDocument || elem) !== document && setDocument(elem), support.matchesSelector && documentIsHTML && !$[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
          try {
            var ret = matches.call(elem, expr);
            if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) {
              return ret;
            }
          } catch (e) {
            $(expr, true);
          }
        }
        return 0 < Sizzle(expr, document, null, [elem]).length;
      }, Sizzle.contains = function(elem, value) {
        return (elem.ownerDocument || elem) !== document && setDocument(elem), contains(elem, value);
      }, Sizzle.attr = function(elem, name) {
        if ((elem.ownerDocument || elem) !== document) {
          setDocument(elem);
        }
        var fn = Expr.attrHandle[name.toLowerCase()];
        var val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
        return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
      }, Sizzle.escape = function(text) {
        return (text + "").replace(rescape, fcssescape);
      }, Sizzle.error = function(name) {
        throw new Error("Syntax error, unrecognized expression: " + name);
      }, Sizzle.uniqueSort = function(arr) {
        var v;
        var indices = [];
        var i = 0;
        var j = 0;
        if (ret = !support.detectDuplicates, sortInput = !support.sortStable && arr.slice(0), arr.sort(time), ret) {
          for (; v = arr[j++];) {
            if (v === arr[j]) {
              i = indices.push(j);
            }
          }
          for (; i--;) {
            arr.splice(indices[i], 1);
          }
        }
        return sortInput = null, arr;
      }, attr = Sizzle.getText = function(node) {
        var child;
        var str = "";
        var count = 0;
        var type = node.nodeType;
        if (type) {
          if (1 === type || 9 === type || 11 === type) {
            if ("string" == typeof node.textContent) {
              return node.textContent;
            }
            node = node.firstChild;
            for (; node; node = node.nextSibling) {
              str = str + attr(node);
            }
          } else {
            if (3 === type || 4 === type) {
              return node.nodeValue;
            }
          }
        } else {
          for (; child = node[count++];) {
            str = str + attr(child);
          }
        }
        return str;
      }, (Expr = Sizzle.selectors = {
        cacheLength : 50,
        createPseudo : markFunction,
        match : matchExpr,
        attrHandle : {},
        find : {},
        relative : {
          ">" : {
            dir : "parentNode",
            first : true
          },
          " " : {
            dir : "parentNode"
          },
          "+" : {
            dir : "previousSibling",
            first : true
          },
          "~" : {
            dir : "previousSibling"
          }
        },
        preFilter : {
          ATTR : function(result) {
            return result[1] = result[1].replace(start, key), result[3] = (result[3] || result[4] || result[5] || "").replace(start, key), "~=" === result[2] && (result[3] = " " + result[3] + " "), result.slice(0, 4);
          },
          CHILD : function(match) {
            return match[1] = match[1].toLowerCase(), "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]), match;
          },
          PSEUDO : function(match) {
            var excess;
            var unquoted = !match[6] && match[2];
            return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), match[2] = unquoted.slice(0, excess)), match.slice(0, 3));
          }
        },
        filter : {
          TAG : function(elem) {
            var nodeName = elem.replace(start, key).toLowerCase();
            return "*" === elem ? function() {
              return true;
            } : function(elem) {
              return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
            };
          },
          CLASS : function(className) {
            var pattern = classCache[className + " "];
            return pattern || (pattern = new RegExp("(^|" + _test + ")" + className + "(" + _test + "|$)")) && classCache(className, function(e) {
              return pattern.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
            });
          },
          ATTR : function(name, string, value) {
            return function(input) {
              var key = Sizzle.attr(input, name);
              return null == key ? "!=" === string : !string || (key = key + "", "=" === string ? key === value : "!=" === string ? key !== value : "^=" === string ? value && 0 === key.indexOf(value) : "*=" === string ? value && -1 < key.indexOf(value) : "$=" === string ? value && key.slice(-value.length) === value : "~=" === string ? -1 < (" " + key.replace(regex_delimiters, " ") + " ").indexOf(value) : "|=" === string && (key === value || key.slice(0, value.length + 1) === value + "-"));
            };
          },
          CHILD : function(type, what, argument, first, last) {
            var simple = "nth" !== type.slice(0, 3);
            var forward = "last" !== type.slice(-4);
            var isStrict = "of-type" === what;
            return 1 === first && 0 === last ? function(tplDiv) {
              return !!tplDiv.parentNode;
            } : function(root, n, isParentStrict) {
              var c;
              var hash;
              var outerCache;
              var node;
              var idx;
              var start;
              var dir = simple !== forward ? "nextSibling" : "previousSibling";
              var target = root.parentNode;
              var iteratedVal = isStrict && root.nodeName.toLowerCase();
              var dependency = !isParentStrict && !isStrict;
              var diff = false;
              if (target) {
                if (simple) {
                  for (; dir;) {
                    node = root;
                    for (; node = node[dir];) {
                      if (isStrict ? node.nodeName.toLowerCase() === iteratedVal : 1 === node.nodeType) {
                        return false;
                      }
                    }
                    start = dir = "only" === type && !start && "nextSibling";
                  }
                  return true;
                }
                if (start = [forward ? target.firstChild : target.lastChild], forward && dependency) {
                  diff = (idx = (c = (hash = (outerCache = (node = target)[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] || [])[0] === j && c[1]) && c[2];
                  node = idx && target.childNodes[idx];
                  for (; node = ++idx && node && node[dir] || (diff = idx = 0) || start.pop();) {
                    if (1 === node.nodeType && ++diff && node === root) {
                      hash[type] = [j, idx, diff];
                      break;
                    }
                  }
                } else {
                  if (dependency && (diff = idx = (c = (hash = (outerCache = (node = root)[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] || [])[0] === j && c[1]), false === diff) {
                    for (; (node = ++idx && node && node[dir] || (diff = idx = 0) || start.pop()) && ((isStrict ? node.nodeName.toLowerCase() !== iteratedVal : 1 !== node.nodeType) || !++diff || (dependency && ((hash = (outerCache = node[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] = [j, diff]), node !== root));) {
                    }
                  }
                }
                return (diff = diff - last) === first || diff % first == 0 && 0 <= diff / first;
              }
            };
          },
          PSEUDO : function(pseudo, argument) {
            var args;
            var fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
            return fn[expando] ? fn(argument) : 1 < fn.length ? (args = [pseudo, pseudo, "", argument], Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, result) {
              var j;
              var matched = fn(seed, argument);
              var i = matched.length;
              for (; i--;) {
                seed[j = indexOf(seed, matched[i])] = !(result[j] = matched[i]);
              }
            }) : function(responce) {
              return fn(responce, 0, args);
            }) : fn;
          }
        },
        pseudos : {
          not : markFunction(function(selector) {
            var a = [];
            var results = [];
            var matcher = compile(selector.replace(rtrim, "$1"));
            return matcher[expando] ? markFunction(function(a, queue, n, context) {
              var bundle;
              var result = matcher(a, null, context, []);
              var i = a.length;
              for (; i--;) {
                if (bundle = result[i]) {
                  a[i] = !(queue[i] = bundle);
                }
              }
            }) : function(sNewObjName, i, context) {
              return a[0] = sNewObjName, matcher(a, null, context, results), a[0] = null, !results.pop();
            };
          }),
          has : markFunction(function(selector) {
            return function(elem) {
              return 0 < Sizzle(selector, elem).length;
            };
          }),
          contains : markFunction(function(text) {
            return text = text.replace(start, key), function(element) {
              return -1 < (element.textContent || attr(element)).indexOf(text);
            };
          }),
          lang : markFunction(function(lang) {
            return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), lang = lang.replace(start, key).toLowerCase(), function(elem) {
              var elemLang;
              do {
                if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                  return (elemLang = elemLang.toLowerCase()) === lang || 0 === elemLang.indexOf(lang + "-");
                }
              } while ((elem = elem.parentNode) && 1 === elem.nodeType);
              return false;
            };
          }),
          target : function(name) {
            var charListNotLatin = window.location && window.location.hash;
            return charListNotLatin && charListNotLatin.slice(1) === name.id;
          },
          root : function(elem) {
            return elem === docElem;
          },
          focus : function(elem) {
            return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
          },
          enabled : createDisabledPseudo(false),
          disabled : createDisabledPseudo(true),
          checked : function(elem) {
            var custom = elem.nodeName.toLowerCase();
            return "input" === custom && !!elem.checked || "option" === custom && !!elem.selected;
          },
          selected : function(elem) {
            return elem.parentNode && elem.parentNode.selectedIndex, true === elem.selected;
          },
          empty : function(elem) {
            elem = elem.firstChild;
            for (; elem; elem = elem.nextSibling) {
              if (elem.nodeType < 6) {
                return false;
              }
            }
            return true;
          },
          parent : function(name) {
            return !Expr.pseudos.empty(name);
          },
          header : function(elem) {
            return rnoType.test(elem.nodeName);
          },
          input : function(target) {
            return inputNodeNames.test(target.nodeName);
          },
          button : function(elem) {
            var left = elem.nodeName.toLowerCase();
            return "input" === left && "button" === elem.type || "button" === left;
          },
          text : function(elem) {
            var EXT;
            return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (EXT = elem.getAttribute("type")) || "text" === EXT.toLowerCase());
          },
          first : createPositionalPseudo(function() {
            return [0];
          }),
          last : createPositionalPseudo(function(canCreateDiscussions, isSlidingUp) {
            return [isSlidingUp - 1];
          }),
          eq : createPositionalPseudo(function(canCreateDiscussions, pageHeight, srcY) {
            return [srcY < 0 ? srcY + pageHeight : srcY];
          }),
          even : createPositionalPseudo(function(lastshuffle, inclusiveMin) {
            var value = 0;
            for (; value < inclusiveMin; value = value + 2) {
              lastshuffle.push(value);
            }
            return lastshuffle;
          }),
          odd : createPositionalPseudo(function(lastshuffle, inclusiveMin) {
            var value = 1;
            for (; value < inclusiveMin; value = value + 2) {
              lastshuffle.push(value);
            }
            return lastshuffle;
          }),
          lt : createPositionalPseudo(function(newNodeLists, total, n) {
            var itemNodeList = n < 0 ? n + total : total < n ? total : n;
            for (; 0 <= --itemNodeList;) {
              newNodeLists.push(itemNodeList);
            }
            return newNodeLists;
          }),
          gt : createPositionalPseudo(function(newNodeLists, pageHeight, srcY) {
            var itemNodeList = srcY < 0 ? srcY + pageHeight : srcY;
            for (; ++itemNodeList < pageHeight;) {
              newNodeLists.push(itemNodeList);
            }
            return newNodeLists;
          })
        }
      }).pseudos.nth = Expr.pseudos.eq, {
        radio : true,
        checkbox : true,
        file : true,
        password : true,
        image : true
      }) {
        Expr.pseudos[i] = jQuerify(i);
      }
      for (i in{
        submit : true,
        reset : true
      }) {
        Expr.pseudos[i] = createButtonPseudo(i);
      }
      return setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters, tokenize = Sizzle.tokenize = function(selector, parseOnly) {
        var matched;
        var match;
        var tokens;
        var type;
        var soFar;
        var groups;
        var preFilters;
        var cached = tokenCache[selector + " "];
        if (cached) {
          return parseOnly ? 0 : cached.slice(0);
        }
        soFar = selector;
        groups = [];
        preFilters = Expr.preFilter;
        for (; soFar;) {
          for (type in matched && !(match = chunker.exec(soFar)) || (match && (soFar = soFar.slice(match[0].length) || soFar), groups.push(tokens = [])), matched = false, (match = rcomma.exec(soFar)) && (matched = match.shift(), tokens.push({
            value : matched,
            type : match[0].replace(rtrim, " ")
          }), soFar = soFar.slice(matched.length)), Expr.filter) {
            if (!(!(match = matchExpr[type].exec(soFar)) || preFilters[type] && !(match = preFilters[type](match)))) {
              matched = match.shift();
              tokens.push({
                value : matched,
                type : type,
                matches : match
              });
              soFar = soFar.slice(matched.length);
            }
          }
          if (!matched) {
            break;
          }
        }
        return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
      }, compile = Sizzle.compile = function(selector, group) {
        var i;
        var mapping;
        var result;
        var bySet;
        var byElement;
        var superMatcher;
        var res = [];
        var type = [];
        var cached = compilerCache[selector + " "];
        if (!cached) {
          if (!group) {
            group = tokenize(selector);
          }
          i = group.length;
          for (; i--;) {
            if ((cached = matcherFromTokens(group[i]))[expando]) {
              res.push(cached);
            } else {
              type.push(cached);
            }
          }
          (cached = compilerCache(selector, (mapping = type, bySet = 0 < (result = res).length, byElement = 0 < mapping.length, superMatcher = function(seed, context, xml, results, outermost) {
            var elem;
            var index;
            var matcher;
            var matchedCount = 0;
            var i = "0";
            var unmatched = seed && [];
            var setMatched = [];
            var contextBackup = outermostContext;
            var elems = seed || byElement && Expr.find.TAG("*", outermost);
            var w = j = j + (null == contextBackup ? 1 : Math.random() || .1);
            var length = elems.length;
            if (outermost) {
              outermostContext = context === document || context || outermost;
            }
            for (; i !== length && null != (elem = elems[i]); i++) {
              if (byElement && elem) {
                index = 0;
                if (!(context || elem.ownerDocument === document)) {
                  setDocument(elem);
                  xml = !documentIsHTML;
                }
                for (; matcher = mapping[index++];) {
                  if (matcher(elem, context || document, xml)) {
                    results.push(elem);
                    break;
                  }
                }
                if (outermost) {
                  j = w;
                }
              }
              if (bySet) {
                if (elem = !matcher && elem) {
                  matchedCount--;
                }
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }
            if (matchedCount = matchedCount + i, bySet && i !== matchedCount) {
              index = 0;
              for (; matcher = result[index++];) {
                matcher(unmatched, setMatched, context, xml);
              }
              if (seed) {
                if (0 < matchedCount) {
                  for (; i--;) {
                    if (!(unmatched[i] || setMatched[i])) {
                      setMatched[i] = pop.call(results);
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push.apply(results, setMatched);
              if (outermost && !seed && 0 < setMatched.length && 1 < matchedCount + result.length) {
                Sizzle.uniqueSort(results);
              }
            }
            return outermost && (j = w, outermostContext = contextBackup), unmatched;
          }, bySet ? markFunction(superMatcher) : superMatcher))).selector = selector;
        }
        return cached;
      }, select = Sizzle.select = function(selector, context, result, value) {
        var i;
        var tokens;
        var token;
        var type;
        var find;
        var compiled = "function" == typeof selector && selector;
        var match = !value && tokenize(selector = compiled.selector || selector);
        if (result = result || [], 1 === match.length) {
          if (2 < (tokens = match[0] = match[0].slice(0)).length && "ID" === (token = tokens[0]).type && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
            if (!(context = (Expr.find.ID(token.matches[0].replace(start, key), context) || [])[0])) {
              return result;
            }
            if (compiled) {
              context = context.parentNode;
            }
            selector = selector.slice(tokens.shift().value.length);
          }
          i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
          for (; i-- && (token = tokens[i], !Expr.relative[type = token.type]);) {
            if ((find = Expr.find[type]) && (value = find(token.matches[0].replace(start, key), IS_HTML_FRAGMENT.test(tokens[0].type) && testContext(context.parentNode) || context))) {
              if (tokens.splice(i, 1), !(selector = value.length && toSelector(tokens))) {
                return push.apply(result, value), result;
              }
              break;
            }
          }
        }
        return (compiled || compile(selector, match))(value, context, !documentIsHTML, result, !context || IS_HTML_FRAGMENT.test(selector) && testContext(context.parentNode) || context), result;
      }, support.sortStable = expando.split("").sort(time).join("") === expando, support.detectDuplicates = !!ret, setDocument(), support.sortDetached = assert(function(html) {
        return 1 & html.compareDocumentPosition(document.createElement("fieldset"));
      }), assert(function(aItem) {
        return aItem.innerHTML = "<a href='#'></a>", "#" === aItem.firstChild.getAttribute("href");
      }) || addHandle("type|href|height|width", function(e, t, n) {
        if (!n) {
          return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }
      }), support.attributes && assert(function(aItem) {
        return aItem.innerHTML = "<input/>", aItem.firstChild.setAttribute("value", ""), "" === aItem.firstChild.getAttribute("value");
      }) || addHandle("value", function(src, canCreateDiscussions, n) {
        if (!n && "input" === src.nodeName.toLowerCase()) {
          return src.defaultValue;
        }
      }), assert(function(e) {
        return null == e.getAttribute("disabled");
      }) || addHandle(value, function(elem, name, n) {
        var val;
        if (!n) {
          return true === elem[name] ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      }), Sizzle;
    }(window);
    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    jQuery.escapeSelector = Sizzle.escape;
    var dir = function(elem, dir, until) {
      var matched = [];
      var truncate = void 0 !== until;
      for (; (elem = elem[dir]) && 9 !== elem.nodeType;) {
        if (1 === elem.nodeType) {
          if (truncate && jQuery(elem).is(until)) {
            break;
          }
          matched.push(elem);
        }
      }
      return matched;
    };
    var _sibling = function(node, elem) {
      var result = [];
      for (; node; node = node.nextSibling) {
        if (1 === node.nodeType && node !== elem) {
          result.push(node);
        }
      }
      return result;
    };
    var rneedsContext = jQuery.expr.match.needsContext;
    var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    jQuery.filter = function(expr, elems, not) {
      var elem = elems[0];
      return not && (expr = ":not(" + expr + ")"), 1 === elems.length && 1 === elem.nodeType ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(nodeToInspect) {
        return 1 === nodeToInspect.nodeType;
      }));
    };
    jQuery.fn.extend({
      find : function(val) {
        var i;
        var ret;
        var l = this.length;
        var self = this;
        if ("string" != typeof val) {
          return this.pushStack(jQuery(val).filter(function() {
            i = 0;
            for (; i < l; i++) {
              if (jQuery.contains(self[i], this)) {
                return true;
              }
            }
          }));
        }
        ret = this.pushStack([]);
        i = 0;
        for (; i < l; i++) {
          jQuery.find(val, self[i], ret);
        }
        return 1 < l ? jQuery.uniqueSort(ret) : ret;
      },
      filter : function(val) {
        return this.pushStack(filter(this, val || [], false));
      },
      not : function(args) {
        return this.pushStack(filter(this, args || [], true));
      },
      is : function(arg) {
        return !!filter(this, "string" == typeof arg && rneedsContext.test(arg) ? jQuery(arg) : arg || [], false).length;
      }
    });
    var rootjQuery;
    var myVivus = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (jQuery.fn.init = function(a, context, root) {
      var match;
      var i;
      if (!a) {
        return this;
      }
      if (root = root || rootjQuery, "string" == typeof a) {
        if (!(match = "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : myVivus.exec(a)) || !match[1] && context) {
          return !context || context.jquery ? (context || root).find(a) : this.constructor(context).find(a);
        }
        if (match[1]) {
          if (context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)), rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              if (fn(this[match])) {
                this[match](context[match]);
              } else {
                this.attr(match, context[match]);
              }
            }
          }
          return this;
        }
        return (i = document.getElementById(match[2])) && (this[0] = i, this.length = 1), this;
      }
      return a.nodeType ? (this[0] = a, this.length = 1, this) : fn(a) ? void 0 !== root.ready ? root.ready(a) : a(jQuery) : jQuery.makeArray(a, this);
    }).prototype = jQuery.fn;
    rootjQuery = jQuery(document);
    var testRxp = /^(?:parents|prev(?:Until|All))/;
    var guaranteedUnique = {
      children : true,
      contents : true,
      next : true,
      prev : true
    };
    jQuery.fn.extend({
      has : function(name) {
        var targets = jQuery(name, this);
        var l = targets.length;
        return this.filter(function() {
          var i = 0;
          for (; i < l; i++) {
            if (jQuery.contains(this, targets[i])) {
              return true;
            }
          }
        });
      },
      closest : function(selector, context) {
        var node;
        var j = 0;
        var i = this.length;
        var ret = [];
        var s = "string" != typeof selector && jQuery(selector);
        if (!rneedsContext.test(selector)) {
          for (; j < i; j++) {
            node = this[j];
            for (; node && node !== context; node = node.parentNode) {
              if (node.nodeType < 11 && (s ? -1 < s.index(node) : 1 === node.nodeType && jQuery.find.matchesSelector(node, selector))) {
                ret.push(node);
                break;
              }
            }
          }
        }
        return this.pushStack(1 < ret.length ? jQuery.uniqueSort(ret) : ret);
      },
      index : function(elem) {
        return elem ? "string" == typeof elem ? indexOf.call(jQuery(elem), this[0]) : indexOf.call(this, elem.jquery ? elem[0] : elem) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add : function(node, context) {
        return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(node, context))));
      },
      addBack : function(selector) {
        return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector));
      }
    });
    jQuery.each({
      parent : function(name) {
        var n = name.parentNode;
        return n && 11 !== n.nodeType ? n : null;
      },
      parents : function(elem) {
        return dir(elem, "parentNode");
      },
      parentsUntil : function(elem, i, until) {
        return dir(elem, "parentNode", until);
      },
      next : function(elem) {
        return sibling(elem, "nextSibling");
      },
      prev : function(elem) {
        return sibling(elem, "previousSibling");
      },
      nextAll : function(elem) {
        return dir(elem, "nextSibling");
      },
      prevAll : function(elem) {
        return dir(elem, "previousSibling");
      },
      nextUntil : function(elem, i, until) {
        return dir(elem, "nextSibling", until);
      },
      prevUntil : function(elem, i, until) {
        return dir(elem, "previousSibling", until);
      },
      siblings : function(elem) {
        return _sibling((elem.parentNode || {}).firstChild, elem);
      },
      children : function(elem) {
        return _sibling(elem.firstChild);
      },
      contents : function(elem) {
        return void 0 !== elem.contentDocument ? elem.contentDocument : (callback(elem, "template") && (elem = elem.content || elem), jQuery.merge([], elem.childNodes));
      }
    }, function(name, t) {
      jQuery.fn[name] = function(index, target) {
        var ret = jQuery.map(this, t, index);
        return "Until" !== name.slice(-5) && (target = index), target && "string" == typeof target && (ret = jQuery.filter(target, ret)), 1 < this.length && (guaranteedUnique[name] || jQuery.uniqueSort(ret), testRxp.test(name) && ret.reverse()), this.pushStack(ret);
      };
    });
    var name = /[^\x20\t\r\n\f]+/g;
    jQuery.Callbacks = function(options) {
      var h;
      var s;
      options = "string" == typeof options ? (h = options, s = {}, jQuery.each(h.match(name) || [], function(canCreateDiscussions, $token) {
        s[$token] = true;
      }), s) : jQuery.extend({}, options);
      var data;
      var d;
      var _dv;
      var geomColumnName;
      var a = [];
      var m = [];
      var j = -1;
      var fire = function() {
        geomColumnName = geomColumnName || options.once;
        _dv = data = true;
        for (; m.length; j = -1) {
          d = m.shift();
          for (; ++j < a.length;) {
            if (false === a[j].apply(d[0], d[1]) && options.stopOnFalse) {
              j = a.length;
              d = false;
            }
          }
        }
        if (!options.memory) {
          d = false;
        }
        data = false;
        if (geomColumnName) {
          a = d ? [] : "";
        }
      };
      var self = {
        add : function() {
          return a && (d && !data && (j = a.length - 1, m.push(d)), function add(callback) {
            jQuery.each(callback, function(n, name) {
              if (fn(name)) {
                if (!(options.unique && self.has(name))) {
                  a.push(name);
                }
              } else {
                if (name && name.length && "string" !== type(name)) {
                  add(name);
                }
              }
            });
          }(arguments), d && !data && fire()), this;
        },
        remove : function() {
          return jQuery.each(arguments, function(canCreateDiscussions, t) {
            var i;
            for (; -1 < (i = jQuery.inArray(t, a, i));) {
              a.splice(i, 1);
              if (i <= j) {
                j--;
              }
            }
          }), this;
        },
        has : function(className) {
          return className ? -1 < jQuery.inArray(className, a) : 0 < a.length;
        },
        empty : function() {
          return a && (a = []), this;
        },
        disable : function() {
          return geomColumnName = m = [], a = d = "", this;
        },
        disabled : function() {
          return !a;
        },
        lock : function() {
          return geomColumnName = m = [], d || data || (a = d = ""), this;
        },
        locked : function() {
          return !!geomColumnName;
        },
        fireWith : function(context, args) {
          return geomColumnName || (args = [context, (args = args || []).slice ? args.slice() : args], m.push(args), data || fire()), this;
        },
        fire : function() {
          return self.fireWith(this, arguments), this;
        },
        fired : function() {
          return !!_dv;
        }
      };
      return self;
    };
    jQuery.extend({
      Deferred : function(func) {
        var array = [["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]];
        var state = "pending";
        var promise = {
          state : function() {
            return state;
          },
          always : function() {
            return deferred.done(arguments).fail(arguments), this;
          },
          catch : function(onReject) {
            return promise.then(null, onReject);
          },
          pipe : function() {
            var result = arguments;
            return jQuery.Deferred(function(newDefer) {
              jQuery.each(array, function(canCreateDiscussions, tuple) {
                var callback = fn(result[tuple[4]]) && result[tuple[4]];
                deferred[tuple[1]](function() {
                  var promise = callback && callback.apply(this, arguments);
                  if (promise && fn(promise.promise)) {
                    promise.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                  } else {
                    newDefer[tuple[0] + "With"](this, callback ? [promise] : arguments);
                  }
                });
              });
              result = null;
            }).promise();
          },
          then : function(value, x, e) {
            function callback(index, options, prop, args) {
              return function() {
                var context = this;
                var obj = arguments;
                var apply = function() {
                  var value;
                  var self;
                  if (!(index < i)) {
                    if ((value = prop.apply(context, obj)) === options.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    }
                    self = value && ("object" == typeof value || "function" == typeof value) && value.then;
                    if (fn(self)) {
                      if (args) {
                        self.call(value, callback(i, options, result, args), callback(i, options, data, args));
                      } else {
                        i++;
                        self.call(value, callback(i, options, result, args), callback(i, options, data, args), callback(i, options, result, options.notifyWith));
                      }
                    } else {
                      if (prop !== result) {
                        context = void 0;
                        obj = [value];
                      }
                      (args || options.resolveWith)(context, obj);
                    }
                  }
                };
                var method = args ? apply : function() {
                  try {
                    apply();
                  } catch (body) {
                    if (jQuery.Deferred.exceptionHook) {
                      jQuery.Deferred.exceptionHook(body, method.stackTrace);
                    }
                    if (i <= index + 1) {
                      if (prop !== data) {
                        context = void 0;
                        obj = [body];
                      }
                      options.rejectWith(context, obj);
                    }
                  }
                };
                if (index) {
                  method();
                } else {
                  if (jQuery.Deferred.getStackHook) {
                    method.stackTrace = jQuery.Deferred.getStackHook();
                  }
                  window.setTimeout(method);
                }
              };
            }
            var i = 0;
            return jQuery.Deferred(function(self) {
              array[0][3].add(callback(0, self, fn(e) ? e : result, self.notifyWith));
              array[1][3].add(callback(0, self, fn(value) ? value : result));
              array[2][3].add(callback(0, self, fn(x) ? x : data));
            }).promise();
          },
          promise : function(value) {
            return null != value ? jQuery.extend(value, promise) : promise;
          }
        };
        var deferred = {};
        return jQuery.each(array, function(numRemoved, tuple) {
          var list = tuple[2];
          var stateString = tuple[5];
          promise[tuple[1]] = list.add;
          if (stateString) {
            list.add(function() {
              state = stateString;
            }, array[3 - numRemoved][2].disable, array[3 - numRemoved][3].disable, array[0][2].lock, array[0][3].lock);
          }
          list.add(tuple[3].fire);
          deferred[tuple[0]] = function() {
            return deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments), this;
          };
          deferred[tuple[0] + "With"] = list.fireWith;
        }), promise.promise(deferred), func && func.call(deferred, deferred), deferred;
      },
      when : function(data) {
        var sampleSize = arguments.length;
        var i = sampleSize;
        var elements = Array(i);
        var args = slice.call(arguments);
        var d = jQuery.Deferred();
        var updateFn = function(i) {
          return function(value) {
            elements[i] = this;
            args[i] = 1 < arguments.length ? slice.call(arguments) : value;
            if (!--sampleSize) {
              d.resolveWith(elements, args);
            }
          };
        };
        if (sampleSize <= 1 && (resolve(data, d.done(updateFn(i)).resolve, d.reject, !sampleSize), "pending" === d.state() || fn(args[i] && args[i].then))) {
          return d.then();
        }
        for (; i--;) {
          resolve(args[i], updateFn(i), d.reject);
        }
        return d.promise();
      }
    });
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    jQuery.Deferred.exceptionHook = function(error, stack) {
      if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
        window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
      }
    };
    jQuery.readyException = function(error) {
      window.setTimeout(function() {
        throw error;
      });
    };
    var readyList = jQuery.Deferred();
    jQuery.fn.ready = function(callback) {
      return readyList.then(callback).catch(function(e) {
        jQuery.readyException(e);
      }), this;
    };
    jQuery.extend({
      isReady : false,
      readyWait : 1,
      ready : function(prev) {
        if (!((true === prev ? --jQuery.readyWait : jQuery.isReady) || (jQuery.isReady = true) !== prev && 0 < --jQuery.readyWait)) {
          readyList.resolveWith(document, [jQuery]);
        }
      }
    });
    jQuery.ready.then = readyList.then;
    if ("complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll) {
      window.setTimeout(jQuery.ready);
    } else {
      document.addEventListener("DOMContentLoaded", $__jsx_onload);
      window.addEventListener("load", $__jsx_onload);
    }
    var access = function(elems, callback, key, value, chainable, emptyGet, raw) {
      var i = 0;
      var length = elems.length;
      var bulk = null == key;
      if ("object" === type(key)) {
        for (i in chainable = true, key) {
          access(elems, callback, i, key[i], true, emptyGet, raw);
        }
      } else {
        if (void 0 !== value && (chainable = true, fn(value) || (raw = true), bulk && (raw ? (callback.call(elems, value), callback = null) : (bulk = callback, callback = function(elem, o, value) {
          return bulk.call(jQuery(elem), value);
        })), callback)) {
          for (; i < length; i++) {
            callback(elems[i], key, raw ? value : value.call(elems[i], i, callback(elems[i], key)));
          }
        }
      }
      return chainable ? elems : bulk ? callback.call(elems) : length ? callback(elems[0], key) : emptyGet;
    };
    var _kerningNamesHash_escapeEscape = /^-ms-/;
    var rcharset = /-([a-z])/g;
    var acceptData = function(elem) {
      return 1 === elem.nodeType || 9 === elem.nodeType || !+elem.nodeType;
    };
    Data.uid = 1;
    Data.prototype = {
      cache : function(elem) {
        var value = elem[this.expando];
        return value || (value = {}, acceptData(elem) && (elem.nodeType ? elem[this.expando] = value : Object.defineProperty(elem, this.expando, {
          value : value,
          configurable : true
        }))), value;
      },
      set : function(key, data, str) {
        var prop;
        var cache = this.cache(key);
        if ("string" == typeof data) {
          cache[camelCase(data)] = str;
        } else {
          for (prop in data) {
            cache[camelCase(prop)] = data[prop];
          }
        }
        return cache;
      },
      get : function(data, key) {
        return void 0 === key ? this.cache(data) : data[this.expando] && data[this.expando][camelCase(key)];
      },
      access : function(value, fn, key) {
        return void 0 === fn || fn && "string" == typeof fn && void 0 === key ? this.get(value, fn) : (this.set(value, fn, key), void 0 !== key ? key : fn);
      },
      remove : function(node, key) {
        var f;
        var value = node[this.expando];
        if (void 0 !== value) {
          if (void 0 !== key) {
            f = (key = Array.isArray(key) ? key.map(camelCase) : (key = camelCase(key)) in value ? [key] : key.match(name) || []).length;
            for (; f--;) {
              delete value[key[f]];
            }
          }
          if (void 0 === key || jQuery.isEmptyObject(value)) {
            if (node.nodeType) {
              node[this.expando] = void 0;
            } else {
              delete node[this.expando];
            }
          }
        }
      },
      hasData : function(owner) {
        var cache = owner[this.expando];
        return void 0 !== cache && !jQuery.isEmptyObject(cache);
      }
    };
    var dataPriv = new Data;
    var $ = new Data;
    var contribRegex = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
    var rhyphen = /[A-Z]/g;
    jQuery.extend({
      hasData : function(elem) {
        return $.hasData(elem) || dataPriv.hasData(elem);
      },
      data : function(name, type, value) {
        return $.access(name, type, value);
      },
      removeData : function(name, key) {
        $.remove(name, key);
      },
      _data : function(elem, name, data) {
        return dataPriv.access(elem, name, data);
      },
      _removeData : function(elem, name) {
        dataPriv.remove(elem, name);
      }
    });
    jQuery.fn.extend({
      data : function(name, value) {
        var w;
        var type;
        var data;
        var elem = this[0];
        var root = elem && elem.attributes;
        if (void 0 === name) {
          if (this.length && (data = $.get(elem), 1 === elem.nodeType && !dataPriv.get(elem, "hasDataAttrs"))) {
            w = root.length;
            for (; w--;) {
              if (root[w] && 0 === (type = root[w].name).indexOf("data-")) {
                type = camelCase(type.slice(5));
                set(elem, type, data[type]);
              }
            }
            dataPriv.set(elem, "hasDataAttrs", true);
          }
          return data;
        }
        return "object" == typeof name ? this.each(function() {
          $.set(this, name);
        }) : access(this, function(undefined) {
          var form;
          if (elem && void 0 === undefined) {
            return void 0 !== (form = $.get(elem, name)) || void 0 !== (form = set(elem, name)) ? form : void 0;
          }
          this.each(function() {
            $.set(this, name, undefined);
          });
        }, null, value, 1 < arguments.length, null, true);
      },
      removeData : function(key) {
        return this.each(function() {
          $.remove(this, key);
        });
      }
    });
    jQuery.extend({
      queue : function(elem, type, data) {
        var q;
        if (elem) {
          return type = (type || "fx") + "queue", q = dataPriv.get(elem, type), data && (!q || Array.isArray(data) ? q = dataPriv.access(elem, type, jQuery.makeArray(data)) : q.push(data)), q || [];
        }
      },
      dequeue : function(elem, type) {
        type = type || "fx";
        var queue = jQuery.queue(elem, type);
        var i = queue.length;
        var _self = queue.shift();
        var node = jQuery._queueHooks(elem, type);
        if ("inprogress" === _self) {
          _self = queue.shift();
          i--;
        }
        if (_self) {
          if ("fx" === type) {
            queue.unshift("inprogress");
          }
          delete node.stop;
          _self.call(elem, function() {
            jQuery.dequeue(elem, type);
          }, node);
        }
        if (!i && node) {
          node.empty.fire();
        }
      },
      _queueHooks : function(elem, type) {
        var key = type + "queueHooks";
        return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
          empty : jQuery.Callbacks("once memory").add(function() {
            dataPriv.remove(elem, [type + "queue", key]);
          })
        });
      }
    });
    jQuery.fn.extend({
      queue : function(type, data) {
        var setter = 2;
        return "string" != typeof type && (data = type, type = "fx", setter--), arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function() {
          var queue = jQuery.queue(this, type, data);
          jQuery._queueHooks(this, type);
          if ("fx" === type && "inprogress" !== queue[0]) {
            jQuery.dequeue(this, type);
          }
        });
      },
      dequeue : function(type) {
        return this.each(function() {
          jQuery.dequeue(this, type);
        });
      },
      clearQueue : function(type) {
        return this.queue(type || "fx", []);
      },
      promise : function(type, obj) {
        var sel;
        var r = 1;
        var defer = jQuery.Deferred();
        var elements = this;
        var i = this.length;
        var resolve = function() {
          if (!--r) {
            defer.resolveWith(elements, [elements]);
          }
        };
        if ("string" != typeof type) {
          obj = type;
          type = void 0;
        }
        type = type || "fx";
        for (; i--;) {
          if ((sel = dataPriv.get(elements[i], type + "queueHooks")) && sel.empty) {
            r++;
            sel.empty.add(resolve);
          }
        }
        return resolve(), defer.promise(obj);
      }
    });
    var FSSource = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var regex = new RegExp("^(?:([+-])=|)(" + FSSource + ")([a-z%]*)$", "i");
    var cssExpand = ["Top", "Right", "Bottom", "Left"];
    var node = document.documentElement;
    var get = function(elem) {
      return jQuery.contains(elem.ownerDocument, elem);
    };
    var _prefName = {
      composed : true
    };
    if (node.getRootNode) {
      get = function(p) {
        return jQuery.contains(p.ownerDocument, p) || p.getRootNode(_prefName) === p.ownerDocument;
      };
    }
    var isHidden = function(elem, el) {
      return "none" === (elem = el || elem).style.display || "" === elem.style.display && get(elem) && "none" === jQuery.css(elem, "display");
    };
    var swap = function(e, obj, f, args) {
      var result;
      var key;
      var pyobj = {};
      for (key in obj) {
        pyobj[key] = e.style[key];
        e.style[key] = obj[key];
      }
      for (key in result = f.apply(e, args || []), obj) {
        e.style[key] = pyobj[key];
      }
      return result;
    };
    var elemdisplay = {};
    jQuery.fn.extend({
      show : function() {
        return show(this, true);
      },
      hide : function() {
        return show(this);
      },
      toggle : function(value) {
        return "boolean" == typeof value ? value ? this.show() : this.hide() : this.each(function() {
          if (isHidden(this)) {
            jQuery(this).show();
          } else {
            jQuery(this).hide();
          }
        });
      }
    });
    var reg = /^(?:checkbox|radio)$/i;
    var me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
    var opacityRe = /^$|^module$|\/(?:java|ecma)script/i;
    var wrapMap = {
      option : [1, "<select multiple='multiple'>", "</select>"],
      thead : [1, "<table>", "</table>"],
      col : [2, "<table><colgroup>", "</colgroup></table>"],
      tr : [2, "<table><tbody>", "</tbody></table>"],
      td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default : [0, "", ""]
    };
    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    var avalon;
    var input;
    var re_commas = /<|&#?\w+;/;
    avalon = document.createDocumentFragment().appendChild(document.createElement("div"));
    (input = document.createElement("input")).setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    avalon.appendChild(input);
    support.checkClone = avalon.cloneNode(true).cloneNode(true).lastChild.checked;
    avalon.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!avalon.cloneNode(true).lastChild.defaultValue;
    var receivedTestEndEvents = /^key/;
    var receivedErrorEvents = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
    var exports = /^([^.]*)(?:\.(.+)|)/;
    jQuery.event = {
      global : {},
      add : function(node, input, handler, data, selector) {
        var handleObjIn;
        var handle;
        var BROWSER_ENGINES;
        var events;
        var i;
        var handleObj;
        var special;
        var handlers;
        var type;
        var h;
        var origType;
        var elemData = dataPriv.get(node);
        if (elemData) {
          if (handler.handler) {
            handler = (handleObjIn = handler).handler;
            selector = handleObjIn.selector;
          }
          if (selector) {
            jQuery.find.matchesSelector(node, selector);
          }
          if (!handler.guid) {
            handler.guid = jQuery.guid++;
          }
          if (!(events = elemData.events)) {
            events = elemData.events = {};
          }
          if (!(handle = elemData.handle)) {
            handle = elemData.handle = function(e) {
              return void 0 !== jQuery && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(node, arguments) : void 0;
            };
          }
          i = (input = (input || "").match(name) || [""]).length;
          for (; i--;) {
            type = origType = (BROWSER_ENGINES = exports.exec(input[i]) || [])[1];
            h = (BROWSER_ENGINES[2] || "").split(".").sort();
            if (type) {
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              special = jQuery.event.special[type] || {};
              handleObj = jQuery.extend({
                type : type,
                origType : origType,
                data : data,
                handler : handler,
                guid : handler.guid,
                selector : selector,
                needsContext : selector && jQuery.expr.match.needsContext.test(selector),
                namespace : h.join(".")
              }, handleObjIn);
              if (!(handlers = events[type])) {
                (handlers = events[type] = []).delegateCount = 0;
                if (!(special.setup && false !== special.setup.call(node, data, h, handle))) {
                  if (node.addEventListener) {
                    node.addEventListener(type, handle);
                  }
                }
              }
              if (special.add) {
                special.add.call(node, handleObj);
                if (!handleObj.handler.guid) {
                  handleObj.handler.guid = handler.guid;
                }
              }
              if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
              } else {
                handlers.push(handleObj);
              }
              jQuery.event.global[type] = true;
            }
          }
        }
      },
      remove : function(node, types, handler, selector, i) {
        var j;
        var origCount;
        var tmp;
        var events;
        var i;
        var handleObj;
        var special;
        var handlers;
        var type;
        var h;
        var level;
        var elemData = dataPriv.hasData(node) && dataPriv.get(node);
        if (elemData && (events = elemData.events)) {
          i = (types = (types || "").match(name) || [""]).length;
          for (; i--;) {
            if (type = level = (tmp = exports.exec(types[i]) || [])[1], h = (tmp[2] || "").split(".").sort(), type) {
              special = jQuery.event.special[type] || {};
              handlers = events[type = (selector ? special.delegateType : special.bindType) || type] || [];
              tmp = tmp[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)");
              origCount = j = handlers.length;
              for (; j--;) {
                handleObj = handlers[j];
                if (!(!i && level !== handleObj.origType || handler && handler.guid !== handleObj.guid || tmp && !tmp.test(handleObj.namespace) || selector && selector !== handleObj.selector && ("**" !== selector || !handleObj.selector))) {
                  handlers.splice(j, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(node, handleObj);
                  }
                }
              }
              if (origCount && !handlers.length) {
                if (!(special.teardown && false !== special.teardown.call(node, h, elemData.handle))) {
                  jQuery.removeEvent(node, type, elemData.handle);
                }
                delete events[type];
              }
            } else {
              for (type in events) {
                jQuery.event.remove(node, type + types[i], handler, selector, true);
              }
            }
          }
          if (jQuery.isEmptyObject(events)) {
            dataPriv.remove(node, "handle events");
          }
        }
      },
      dispatch : function(e) {
        var i;
        var j;
        var ret;
        var matched;
        var handleObj;
        var handlerQueue;
        var event = jQuery.event.fix(e);
        var args = new Array(arguments.length);
        var handlers = (dataPriv.get(this, "events") || {})[event.type] || [];
        var special = jQuery.event.special[event.type] || {};
        args[0] = event;
        i = 1;
        for (; i < arguments.length; i++) {
          args[i] = arguments[i];
        }
        if (event.delegateTarget = this, !special.preDispatch || false !== special.preDispatch.call(this, event)) {
          handlerQueue = jQuery.event.handlers.call(this, event, handlers);
          i = 0;
          for (; (matched = handlerQueue[i++]) && !event.isPropagationStopped();) {
            event.currentTarget = matched.elem;
            j = 0;
            for (; (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped();) {
              if (!(event.rnamespace && false !== handleObj.namespace && !event.rnamespace.test(handleObj.namespace))) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                if (void 0 !== (ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args)) && false === (event.result = ret)) {
                  event.preventDefault();
                  event.stopPropagation();
                }
              }
            }
          }
          return special.postDispatch && special.postDispatch.call(this, event), event.result;
        }
      },
      handlers : function(event, handlers) {
        var i;
        var handleObj;
        var name;
        var matches;
        var fieldOrdinals;
        var handlerQueue = [];
        var delegateCount = handlers.delegateCount;
        var cur = event.target;
        if (delegateCount && cur.nodeType && !("click" === event.type && 1 <= event.button)) {
          for (; cur !== this; cur = cur.parentNode || this) {
            if (1 === cur.nodeType && ("click" !== event.type || true !== cur.disabled)) {
              matches = [];
              fieldOrdinals = {};
              i = 0;
              for (; i < delegateCount; i++) {
                if (void 0 === fieldOrdinals[name = (handleObj = handlers[i]).selector + " "]) {
                  fieldOrdinals[name] = handleObj.needsContext ? -1 < jQuery(name, this).index(cur) : jQuery.find(name, this, null, [cur]).length;
                }
                if (fieldOrdinals[name]) {
                  matches.push(handleObj);
                }
              }
              if (matches.length) {
                handlerQueue.push({
                  elem : cur,
                  handlers : matches
                });
              }
            }
          }
        }
        return cur = this, delegateCount < handlers.length && handlerQueue.push({
          elem : cur,
          handlers : handlers.slice(delegateCount)
        }), handlerQueue;
      },
      addProp : function(name, key) {
        Object.defineProperty(jQuery.Event.prototype, name, {
          enumerable : true,
          configurable : true,
          get : fn(key) ? function() {
            if (this.originalEvent) {
              return key(this.originalEvent);
            }
          } : function() {
            if (this.originalEvent) {
              return this.originalEvent[name];
            }
          },
          set : function(type) {
            Object.defineProperty(this, name, {
              enumerable : true,
              configurable : true,
              writable : true,
              value : type
            });
          }
        });
      },
      fix : function(originalEvent) {
        return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
      },
      special : {
        load : {
          noBubble : true
        },
        click : {
          setup : function(e) {
            var elem = this || e;
            return reg.test(elem.type) && elem.click && callback(elem, "input") && on(elem, "click", mouseMove), false;
          },
          trigger : function(name) {
            var message = this || name;
            return reg.test(message.type) && message.click && callback(message, "input") && on(message, "click"), true;
          },
          _default : function(options) {
            var elem = options.target;
            return reg.test(elem.type) && elem.click && callback(elem, "input") && dataPriv.get(elem, "click") || callback(elem, "a");
          }
        },
        beforeunload : {
          postDispatch : function(event) {
            if (void 0 !== event.result && event.originalEvent) {
              event.originalEvent.returnValue = event.result;
            }
          }
        }
      }
    };
    jQuery.removeEvent = function(elem, type, fn) {
      if (elem.removeEventListener) {
        elem.removeEventListener(type, fn);
      }
    };
    jQuery.Event = function(src, props) {
      if (!(this instanceof jQuery.Event)) {
        return new jQuery.Event(src, props);
      }
      if (src && src.type) {
        this.originalEvent = src;
        this.type = src.type;
        this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && false === src.returnValue ? mouseMove : returnFalse;
        this.target = src.target && 3 === src.target.nodeType ? src.target.parentNode : src.target;
        this.currentTarget = src.currentTarget;
        this.relatedTarget = src.relatedTarget;
      } else {
        this.type = src;
      }
      if (props) {
        jQuery.extend(this, props);
      }
      this.timeStamp = src && src.timeStamp || Date.now();
      this[jQuery.expando] = true;
    };
    jQuery.Event.prototype = {
      constructor : jQuery.Event,
      isDefaultPrevented : returnFalse,
      isPropagationStopped : returnFalse,
      isImmediatePropagationStopped : returnFalse,
      isSimulated : false,
      preventDefault : function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = mouseMove;
        if (e && !this.isSimulated) {
          e.preventDefault();
        }
      },
      stopPropagation : function() {
        var e = this.originalEvent;
        this.isPropagationStopped = mouseMove;
        if (e && !this.isSimulated) {
          e.stopPropagation();
        }
      },
      stopImmediatePropagation : function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = mouseMove;
        if (e && !this.isSimulated) {
          e.stopImmediatePropagation();
        }
        this.stopPropagation();
      }
    };
    jQuery.each({
      altKey : true,
      bubbles : true,
      cancelable : true,
      changedTouches : true,
      ctrlKey : true,
      detail : true,
      eventPhase : true,
      metaKey : true,
      pageX : true,
      pageY : true,
      shiftKey : true,
      view : true,
      char : true,
      code : true,
      charCode : true,
      key : true,
      keyCode : true,
      button : true,
      buttons : true,
      clientX : true,
      clientY : true,
      offsetX : true,
      offsetY : true,
      pointerId : true,
      pointerType : true,
      screenX : true,
      screenY : true,
      targetTouches : true,
      toElement : true,
      touches : true,
      which : function(e) {
        var button = e.button;
        return null == e.which && receivedTestEndEvents.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== button && receivedErrorEvents.test(e.type) ? 1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0 : e.which;
      }
    }, jQuery.event.addProp);
    jQuery.each({
      focus : "focusin",
      blur : "focusout"
    }, function(name, fix) {
      jQuery.event.special[name] = {
        setup : function() {
          return on(this, name, moveHandler), false;
        },
        trigger : function() {
          return on(this, name), true;
        },
        delegateType : fix
      };
    });
    jQuery.each({
      mouseenter : "mouseover",
      mouseleave : "mouseout",
      pointerenter : "pointerover",
      pointerleave : "pointerout"
    }, function(orig, fix) {
      jQuery.event.special[orig] = {
        delegateType : fix,
        bindType : fix,
        handle : function(event) {
          var _ref12;
          var target = event.relatedTarget;
          var handleObj = event.handleObj;
          return target && (target === this || jQuery.contains(this, target)) || (event.type = handleObj.origType, _ref12 = handleObj.handler.apply(this, arguments), event.type = fix), _ref12;
        }
      };
    });
    jQuery.fn.extend({
      on : function(type, module, b, callback) {
        return bind(this, type, module, b, callback);
      },
      one : function(el, name, data, callback) {
        return bind(this, el, name, data, callback, 1);
      },
      off : function(types, callback, fn) {
        var handleObj;
        var type;
        if (types && types.preventDefault && types.handleObj) {
          return handleObj = types.handleObj, jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), this;
        }
        if ("object" == typeof types) {
          for (type in types) {
            this.off(type, callback, types[type]);
          }
          return this;
        }
        return false !== callback && "function" != typeof callback || (fn = callback, callback = void 0), false === fn && (fn = returnFalse), this.each(function() {
          jQuery.event.remove(this, types, fn, callback);
        });
      }
    });
    var regPlaceholder = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
    var _tacet = /<script|<style|<link/i;
    var reValidName = /checked\s*(?:[^=]|=\s*.checked.)/i;
    var codePoint = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    jQuery.extend({
      htmlPrefilter : function(src) {
        return src.replace(regPlaceholder, "<$1></$2>");
      },
      clone : function(elem, n, array) {
        var i;
        var l;
        var srcElements;
        var destElements;
        var src;
        var target;
        var undefined;
        var clone = elem.cloneNode(true);
        var inPage = get(elem);
        if (!(support.noCloneChecked || 1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem))) {
          destElements = getAll(clone);
          i = 0;
          l = (srcElements = getAll(elem)).length;
          for (; i < l; i++) {
            src = srcElements[i];
            if ("input" === (undefined = (target = destElements[i]).nodeName.toLowerCase()) && reg.test(src.type)) {
              target.checked = src.checked;
            } else {
              if (!("input" !== undefined && "textarea" !== undefined)) {
                target.defaultValue = src.defaultValue;
              }
            }
          }
        }
        if (n) {
          if (array) {
            srcElements = srcElements || getAll(elem);
            destElements = destElements || getAll(clone);
            i = 0;
            l = srcElements.length;
            for (; i < l; i++) {
              cloneCopyEvent(srcElements[i], destElements[i]);
            }
          } else {
            cloneCopyEvent(elem, clone);
          }
        }
        return 0 < (destElements = getAll(clone, "script")).length && setGlobalEval(destElements, !inPage && getAll(elem, "script")), clone;
      },
      cleanData : function(elems) {
        var data;
        var elem;
        var type;
        var special = jQuery.event.special;
        var i = 0;
        for (; void 0 !== (elem = elems[i]); i++) {
          if (acceptData(elem)) {
            if (data = elem[dataPriv.expando]) {
              if (data.events) {
                for (type in data.events) {
                  if (special[type]) {
                    jQuery.event.remove(elem, type);
                  } else {
                    jQuery.removeEvent(elem, type, data.handle);
                  }
                }
              }
              elem[dataPriv.expando] = void 0;
            }
            if (elem[$.expando]) {
              elem[$.expando] = void 0;
            }
          }
        }
      }
    });
    jQuery.fn.extend({
      detach : function(selector) {
        return remove(this, selector, true);
      },
      remove : function(node) {
        return remove(this, node);
      },
      text : function(value) {
        return access(this, function(value) {
          return void 0 === value ? jQuery.text(this) : this.empty().each(function() {
            if (!(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType)) {
              this.textContent = value;
            }
          });
        }, null, value, arguments.length);
      },
      append : function() {
        return domManip(this, arguments, function(elem) {
          if (!(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType)) {
            manipulationTarget(this, elem).appendChild(elem);
          }
        });
      },
      prepend : function() {
        return domManip(this, arguments, function(elem) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var target = manipulationTarget(this, elem);
            target.insertBefore(elem, target.firstChild);
          }
        });
      },
      before : function() {
        return domManip(this, arguments, function(elem) {
          if (this.parentNode) {
            this.parentNode.insertBefore(elem, this);
          }
        });
      },
      after : function() {
        return domManip(this, arguments, function(elem) {
          if (this.parentNode) {
            this.parentNode.insertBefore(elem, this.nextSibling);
          }
        });
      },
      empty : function() {
        var elem;
        var i = 0;
        for (; null != (elem = this[i]); i++) {
          if (1 === elem.nodeType) {
            jQuery.cleanData(getAll(elem, false));
            elem.textContent = "";
          }
        }
        return this;
      },
      clone : function(c, i) {
        return c = null != c && c, i = null == i ? c : i, this.map(function() {
          return jQuery.clone(this, c, i);
        });
      },
      html : function(value) {
        return access(this, function(value) {
          var elem = this[0] || {};
          var thatpos = 0;
          var i = this.length;
          if (void 0 === value && 1 === elem.nodeType) {
            return elem.innerHTML;
          }
          if ("string" == typeof value && !_tacet.test(value) && !wrapMap[(me.exec(value) || ["", ""])[1].toLowerCase()]) {
            value = jQuery.htmlPrefilter(value);
            try {
              for (; thatpos < i; thatpos++) {
                if (1 === (elem = this[thatpos] || {}).nodeType) {
                  jQuery.cleanData(getAll(elem, false));
                  elem.innerHTML = value;
                }
              }
              elem = 0;
            } catch (e) {
            }
          }
          if (elem) {
            this.empty().append(value);
          }
        }, null, value, arguments.length);
      },
      replaceWith : function() {
        var ignored = [];
        return domManip(this, arguments, function(t) {
          var p = this.parentNode;
          if (jQuery.inArray(this, ignored) < 0) {
            jQuery.cleanData(getAll(this));
            if (p) {
              p.replaceChild(t, this);
            }
          }
        }, ignored);
      }
    });
    jQuery.each({
      appendTo : "append",
      prependTo : "prepend",
      insertBefore : "before",
      insertAfter : "after",
      replaceAll : "replaceWith"
    }, function(original, n) {
      jQuery.fn[original] = function(body) {
        var what;
        var ret = [];
        var rows = jQuery(body);
        var last = rows.length - 1;
        var i = 0;
        for (; i <= last; i++) {
          what = i === last ? this : this.clone(true);
          jQuery(rows[i])[n](what);
          push.apply(ret, what.get());
        }
        return this.pushStack(ret);
      };
    });
    var rnumnonpx = new RegExp("^(" + FSSource + ")(?!px)[a-z%]+$", "i");
    var getStyles = function(elem) {
      var win = elem.ownerDocument.defaultView;
      return win && win.opener || (win = window), win.getComputedStyle(elem);
    };
    var inlineAttributeCommentRegex = new RegExp(cssExpand.join("|"), "i");
    !function() {
      function computeStyleTests() {
        if (div) {
          parent.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
          div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
          node.appendChild(parent).appendChild(div);
          var style = window.getComputedStyle(div);
          res = "1%" !== style.top;
          l = 12 === parseRound(style.marginLeft);
          div.style.right = "60%";
          a = 36 === parseRound(style.right);
          i = 36 === parseRound(style.width);
          div.style.position = "absolute";
          o = 12 === parseRound(div.offsetWidth / 3);
          node.removeChild(parent);
          div = null;
        }
      }
      function parseRound(fontSize) {
        return Math.round(parseFloat(fontSize));
      }
      var res;
      var i;
      var o;
      var a;
      var l;
      var parent = document.createElement("div");
      var div = document.createElement("div");
      if (div.style) {
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = "content-box" === div.style.backgroundClip;
        jQuery.extend(support, {
          boxSizingReliable : function() {
            return computeStyleTests(), i;
          },
          pixelBoxStyles : function() {
            return computeStyleTests(), a;
          },
          pixelPosition : function() {
            return computeStyleTests(), res;
          },
          reliableMarginLeft : function() {
            return computeStyleTests(), l;
          },
          scrollboxSize : function() {
            return computeStyleTests(), o;
          }
        });
      }
    }();
    var prefixes = ["Webkit", "Moz", "ms"];
    var testStyle = document.createElement("div").style;
    var aSupports = {};
    var rdisplayswap = /^(none|table(?!-c[ea]).+)/;
    var ngTranslationProvider = /^--/;
    var cssShow = {
      position : "absolute",
      visibility : "hidden",
      display : "block"
    };
    var cssNormalTransform = {
      letterSpacing : "0",
      fontWeight : "400"
    };
    jQuery.extend({
      cssHooks : {
        opacity : {
          get : function(elem, data) {
            if (data) {
              var to = curCSS(elem, "opacity");
              return "" === to ? "1" : to;
            }
          }
        }
      },
      cssNumber : {
        animationIterationCount : true,
        columnCount : true,
        fillOpacity : true,
        flexGrow : true,
        flexShrink : true,
        fontWeight : true,
        gridArea : true,
        gridColumn : true,
        gridColumnEnd : true,
        gridColumnStart : true,
        gridRow : true,
        gridRowEnd : true,
        gridRowStart : true,
        lineHeight : true,
        opacity : true,
        order : true,
        orphans : true,
        widows : true,
        zIndex : true,
        zoom : true
      },
      cssProps : {},
      style : function(elem, name, value, data) {
        if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
          var ret;
          var type;
          var hooks;
          var prop = camelCase(name);
          var versionByName = ngTranslationProvider.test(name);
          var style = elem.style;
          if (versionByName || (name = camelize(prop)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[prop], void 0 === value) {
            return hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, false, data)) ? ret : style[name];
          }
          if ("string" == (type = typeof value) && (ret = regex.exec(value)) && ret[1]) {
            value = adjustCSS(elem, name, ret);
            type = "number";
          }
          if (null != value && value == value) {
            if (!("number" !== type || versionByName)) {
              value = value + (ret && ret[3] || (jQuery.cssNumber[prop] ? "" : "px"));
            }
            if (!(support.clearCloneStyle || "" !== value || 0 !== name.indexOf("background"))) {
              style[name] = "inherit";
            }
            if (!(hooks && "set" in hooks && void 0 === (value = hooks.set(elem, value, data)))) {
              if (versionByName) {
                style.setProperty(name, value);
              } else {
                style[name] = value;
              }
            }
          }
        }
      },
      css : function(key, name, extra, styles) {
        var val;
        var length;
        var hooks;
        var prop = camelCase(name);
        return ngTranslationProvider.test(name) || (name = camelize(prop)), (hooks = jQuery.cssHooks[name] || jQuery.cssHooks[prop]) && "get" in hooks && (val = hooks.get(key, true, extra)), void 0 === val && (val = curCSS(key, name, styles)), "normal" === val && name in cssNormalTransform && (val = cssNormalTransform[name]), "" === extra || extra ? (length = parseFloat(val), true === extra || isFinite(length) ? length || 0 : val) : val;
      }
    });
    jQuery.each(["height", "width"], function(canCreateDiscussions, name) {
      jQuery.cssHooks[name] = {
        get : function(elem, data, extra) {
          if (data) {
            return !rdisplayswap.test(jQuery.css(elem, "display")) || elem.getClientRects().length && elem.getBoundingClientRect().width ? getWidthOrHeight(elem, name, extra) : swap(elem, cssShow, function() {
              return getWidthOrHeight(elem, name, extra);
            });
          }
        },
        set : function(elem, value, fn) {
          var o;
          var styles = getStyles(elem);
          var doc = !support.scrollboxSize() && "absolute" === styles.position;
          var valueIsBorderBox = (doc || fn) && "border-box" === jQuery.css(elem, "boxSizing", false, styles);
          var w = fn ? augmentWidthOrHeight(elem, name, fn, valueIsBorderBox, styles) : 0;
          return valueIsBorderBox && doc && (w = w - Math.ceil(elem["offset" + name[0].toUpperCase() + name.slice(1)] - parseFloat(styles[name]) - augmentWidthOrHeight(elem, name, "border", false, styles) - .5)), w && (o = regex.exec(value)) && "px" !== (o[3] || "px") && (elem.style[name] = value, value = jQuery.css(elem, name)), debug(0, value, w);
        }
      };
    });
    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, canCreateDiscussions) {
      if (canCreateDiscussions) {
        return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
          marginLeft : 0
        }, function() {
          return elem.getBoundingClientRect().left;
        })) + "px";
      }
    });
    jQuery.each({
      margin : "",
      padding : "",
      border : "Width"
    }, function(prefix, suffix) {
      jQuery.cssHooks[prefix + suffix] = {
        expand : function(expected) {
          var i = 0;
          var expanded = {};
          var stops = "string" == typeof expected ? expected.split(" ") : [expected];
          for (; i < 4; i++) {
            expanded[prefix + cssExpand[i] + suffix] = stops[i] || stops[i - 2] || stops[0];
          }
          return expanded;
        }
      };
      if ("margin" !== prefix) {
        jQuery.cssHooks[prefix + suffix].set = debug;
      }
    });
    jQuery.fn.extend({
      css : function(name, value) {
        return access(this, function(elem, name, undefined) {
          var styles;
          var l;
          var map = {};
          var i = 0;
          if (Array.isArray(name)) {
            styles = getStyles(elem);
            l = name.length;
            for (; i < l; i++) {
              map[name[i]] = jQuery.css(elem, name[i], false, styles);
            }
            return map;
          }
          return void 0 !== undefined ? jQuery.style(elem, name, undefined) : jQuery.css(elem, name);
        }, name, value, 1 < arguments.length);
      }
    });
    ((jQuery.Tween = Tween).prototype = {
      constructor : Tween,
      init : function(domElem, options, prop, end, easing, unit) {
        this.elem = domElem;
        this.prop = prop;
        this.easing = easing || jQuery.easing._default;
        this.options = options;
        this.start = this.now = this.cur();
        this.end = end;
        this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
      },
      cur : function() {
        var hooks = Tween.propHooks[this.prop];
        return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
      },
      run : function(percent) {
        var eased;
        var hooks = Tween.propHooks[this.prop];
        return this.options.duration ? this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : this.pos = eased = percent, this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this;
      }
    }).init.prototype = Tween.prototype;
    (Tween.propHooks = {
      _default : {
        get : function(s) {
          var fitWidth;
          return 1 !== s.elem.nodeType || null != s.elem[s.prop] && null == s.elem.style[s.prop] ? s.elem[s.prop] : (fitWidth = jQuery.css(s.elem, s.prop, "")) && "auto" !== fitWidth ? fitWidth : 0;
        },
        set : function(tween) {
          if (jQuery.fx.step[tween.prop]) {
            jQuery.fx.step[tween.prop](tween);
          } else {
            if (1 !== tween.elem.nodeType || !jQuery.cssHooks[tween.prop] && null == tween.elem.style[camelize(tween.prop)]) {
              tween.elem[tween.prop] = tween.now;
            } else {
              jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
            }
          }
        }
      }
    }).scrollTop = Tween.propHooks.scrollLeft = {
      set : function(tween) {
        if (tween.elem.nodeType && tween.elem.parentNode) {
          tween.elem[tween.prop] = tween.now;
        }
      }
    };
    jQuery.easing = {
      linear : function(p) {
        return p;
      },
      swing : function(p) {
        return .5 - Math.cos(p * Math.PI) / 2;
      },
      _default : "swing"
    };
    jQuery.fx = Tween.prototype.init;
    jQuery.fx.step = {};
    var fxNow;
    var at;
    var elem;
    var opt;
    var trueRE = /^(?:toggle|show|hide)$/;
    var rrun = /queueHooks$/;
    jQuery.Animation = jQuery.extend(Animation, {
      tweeners : {
        "*" : [function(prop, value) {
          var tween = this.createTween(prop, value);
          return adjustCSS(tween.elem, prop, regex.exec(value), tween), tween;
        }]
      },
      tweener : function(props, callback) {
        if (fn(props)) {
          callback = props;
          props = ["*"];
        } else {
          props = props.match(name);
        }
        var prop;
        var i = 0;
        var inputsSize = props.length;
        for (; i < inputsSize; i++) {
          prop = props[i];
          Animation.tweeners[prop] = Animation.tweeners[prop] || [];
          Animation.tweeners[prop].unshift(callback);
        }
      },
      prefilters : [function(elem, props, config) {
        var prop;
        var value;
        var matched;
        var hooks;
        var oldfire;
        var tween;
        var restoreDisplay;
        var display;
        var f = "width" in props || "height" in props;
        var anim = this;
        var orig = {};
        var style = elem.style;
        var hidden = elem.nodeType && isHidden(elem);
        var dataShow = dataPriv.get(elem, "fxshow");
        for (prop in config.queue || (null == (hooks = jQuery._queueHooks(elem, "fx")).unqueued && (hooks.unqueued = 0, oldfire = hooks.empty.fire, hooks.empty.fire = function() {
          if (!hooks.unqueued) {
            oldfire();
          }
        }), hooks.unqueued++, anim.always(function() {
          anim.always(function() {
            hooks.unqueued--;
            if (!jQuery.queue(elem, "fx").length) {
              hooks.empty.fire();
            }
          });
        })), props) {
          if (value = props[prop], trueRE.test(value)) {
            if (delete props[prop], matched = matched || "toggle" === value, value === (hidden ? "hide" : "show")) {
              if ("show" !== value || !dataShow || void 0 === dataShow[prop]) {
                continue;
              }
              hidden = true;
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
          }
        }
        if ((tween = !jQuery.isEmptyObject(props)) || !jQuery.isEmptyObject(orig)) {
          for (prop in f && 1 === elem.nodeType && (config.overflow = [style.overflow, style.overflowX, style.overflowY], null == (restoreDisplay = dataShow && dataShow.display) && (restoreDisplay = dataPriv.get(elem, "display")), "none" === (display = jQuery.css(elem, "display")) && (restoreDisplay ? display = restoreDisplay : (show([elem], true), restoreDisplay = elem.style.display || restoreDisplay, display = jQuery.css(elem, "display"), show([elem]))), ("inline" === display || "inline-block" === 
          display && null != restoreDisplay) && "none" === jQuery.css(elem, "float") && (tween || (anim.done(function() {
            style.display = restoreDisplay;
          }), null == restoreDisplay && (display = style.display, restoreDisplay = "none" === display ? "" : display)), style.display = "inline-block")), config.overflow && (style.overflow = "hidden", anim.always(function() {
            style.overflow = config.overflow[0];
            style.overflowX = config.overflow[1];
            style.overflowY = config.overflow[2];
          })), tween = false, orig) {
            if (!tween) {
              if (dataShow) {
                if ("hidden" in dataShow) {
                  hidden = dataShow.hidden;
                }
              } else {
                dataShow = dataPriv.access(elem, "fxshow", {
                  display : restoreDisplay
                });
              }
              if (matched) {
                dataShow.hidden = !hidden;
              }
              if (hidden) {
                show([elem], true);
              }
              anim.done(function() {
                for (prop in hidden || show([elem]), dataPriv.remove(elem, "fxshow"), orig) {
                  jQuery.style(elem, prop, orig[prop]);
                }
              });
            }
            tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
              dataShow[prop] = tween.start;
              if (hidden) {
                tween.end = tween.start;
                tween.start = 0;
              }
            }
          }
        }
      }],
      prefilter : function(callback, options) {
        if (options) {
          Animation.prefilters.unshift(callback);
        } else {
          Animation.prefilters.push(callback);
        }
      }
    });
    jQuery.speed = function(speed, easing, callback) {
      var opt = speed && "object" == typeof speed ? jQuery.extend({}, speed) : {
        complete : callback || !callback && easing || fn(speed) && speed,
        duration : speed,
        easing : callback && easing || easing && !fn(easing) && easing
      };
      return jQuery.fx.off ? opt.duration = 0 : "number" != typeof opt.duration && (opt.duration in jQuery.fx.speeds ? opt.duration = jQuery.fx.speeds[opt.duration] : opt.duration = jQuery.fx.speeds._default), null != opt.queue && true !== opt.queue || (opt.queue = "fx"), opt.old = opt.complete, opt.complete = function() {
        if (fn(opt.old)) {
          opt.old.call(this);
        }
        if (opt.queue) {
          jQuery.dequeue(this, opt.queue);
        }
      }, opt;
    };
    jQuery.fn.extend({
      fadeTo : function(speed, to, callback, duration) {
        return this.filter(isHidden).css("opacity", 0).show().end().animate({
          opacity : to
        }, speed, callback, duration);
      },
      animate : function(prop, speed, easing, callback) {
        var empty = jQuery.isEmptyObject(prop);
        var optall = jQuery.speed(speed, easing, callback);
        var run = function() {
          var anim = Animation(this, jQuery.extend({}, prop), optall);
          if (empty || dataPriv.get(this, "finish")) {
            anim.stop(true);
          }
        };
        return run.finish = run, empty || false === optall.queue ? this.each(run) : this.queue(optall.queue, run);
      },
      stop : function(type, clearQueue, gotoEnd) {
        var stopQueue = function(hooks) {
          var stop = hooks.stop;
          delete hooks.stop;
          stop(gotoEnd);
        };
        return "string" != typeof type && (gotoEnd = clearQueue, clearQueue = type, type = void 0), clearQueue && false !== type && this.queue(type || "fx", []), this.each(function() {
          var clearQueue = true;
          var index = null != type && type + "queueHooks";
          var timers = jQuery.timers;
          var data = dataPriv.get(this);
          if (index) {
            if (data[index] && data[index].stop) {
              stopQueue(data[index]);
            }
          } else {
            for (index in data) {
              if (data[index] && data[index].stop && rrun.test(index)) {
                stopQueue(data[index]);
              }
            }
          }
          index = timers.length;
          for (; index--;) {
            if (!(timers[index].elem !== this || null != type && timers[index].queue !== type)) {
              timers[index].anim.stop(gotoEnd);
              clearQueue = false;
              timers.splice(index, 1);
            }
          }
          if (!(!clearQueue && gotoEnd)) {
            jQuery.dequeue(this, type);
          }
        });
      },
      finish : function(type) {
        return false !== type && (type = type || "fx"), this.each(function() {
          var index;
          var data = dataPriv.get(this);
          var queue = data[type + "queue"];
          var hooks = data[type + "queueHooks"];
          var timers = jQuery.timers;
          var length = queue ? queue.length : 0;
          data.finish = true;
          jQuery.queue(this, type, []);
          if (hooks && hooks.stop) {
            hooks.stop.call(this, true);
          }
          index = timers.length;
          for (; index--;) {
            if (timers[index].elem === this && timers[index].queue === type) {
              timers[index].anim.stop(true);
              timers.splice(index, 1);
            }
          }
          index = 0;
          for (; index < length; index++) {
            if (queue[index] && queue[index].finish) {
              queue[index].finish.call(this);
            }
          }
          delete data.finish;
        });
      }
    });
    jQuery.each(["toggle", "show", "hide"], function(canCreateDiscussions, name) {
      var cssFn = jQuery.fn[name];
      jQuery.fn[name] = function(x, callback, options) {
        return null == x || "boolean" == typeof x ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), x, callback, options);
      };
    });
    jQuery.each({
      slideDown : genFx("show"),
      slideUp : genFx("hide"),
      slideToggle : genFx("toggle"),
      fadeIn : {
        opacity : "show"
      },
      fadeOut : {
        opacity : "hide"
      },
      fadeToggle : {
        opacity : "toggle"
      }
    }, function(original, props) {
      jQuery.fn[original] = function(speed, callback, options) {
        return this.animate(props, speed, callback, options);
      };
    });
    jQuery.timers = [];
    jQuery.fx.tick = function() {
      var maxBet;
      var i = 0;
      var timers = jQuery.timers;
      fxNow = Date.now();
      for (; i < timers.length; i++) {
        if (!((maxBet = timers[i])() || timers[i] !== maxBet)) {
          timers.splice(i--, 1);
        }
      }
      if (!timers.length) {
        jQuery.fx.stop();
      }
      fxNow = void 0;
    };
    jQuery.fx.timer = function(url) {
      jQuery.timers.push(url);
      jQuery.fx.start();
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
      if (!at) {
        at = true;
        step();
      }
    };
    jQuery.fx.stop = function() {
      at = null;
    };
    jQuery.fx.speeds = {
      slow : 600,
      fast : 200,
      _default : 400
    };
    jQuery.fn.delay = function(b, type) {
      return b = jQuery.fx && jQuery.fx.speeds[b] || b, type = type || "fx", this.queue(type, function(t, incoming_item) {
        var i = window.setTimeout(t, b);
        incoming_item.stop = function() {
          window.clearTimeout(i);
        };
      });
    };
    elem = document.createElement("input");
    opt = document.createElement("select").appendChild(document.createElement("option"));
    elem.type = "checkbox";
    support.checkOn = "" !== elem.value;
    support.optSelected = opt.selected;
    (elem = document.createElement("input")).value = "t";
    elem.type = "radio";
    support.radioValue = "t" === elem.value;
    var boolHook;
    var attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
      attr : function(name, value) {
        return access(this, jQuery.attr, name, value, 1 < arguments.length);
      },
      removeAttr : function(name) {
        return this.each(function() {
          jQuery.removeAttr(this, name);
        });
      }
    });
    jQuery.extend({
      attr : function(elem, name, value) {
        var ret;
        var hooks;
        var type = elem.nodeType;
        if (3 !== type && 8 !== type && 2 !== type) {
          return void 0 === elem.getAttribute ? jQuery.prop(elem, name, value) : (1 === type && jQuery.isXMLDoc(elem) || (hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0)), void 0 !== value ? null === value ? void jQuery.removeAttr(elem, name) : hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : (elem.setAttribute(name, value + ""), value) : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : 
          null == (ret = jQuery.find.attr(elem, name)) ? void 0 : ret);
        }
      },
      attrHooks : {
        type : {
          set : function(parent, value) {
            if (!support.radioValue && "radio" === value && callback(parent, "input")) {
              var n = parent.value;
              return parent.setAttribute("type", value), n && (parent.value = n), value;
            }
          }
        }
      },
      removeAttr : function(node, value) {
        var html2canvasNodeAttribute;
        var callbackCount = 0;
        var callbackVals = value && value.match(name);
        if (callbackVals && 1 === node.nodeType) {
          for (; html2canvasNodeAttribute = callbackVals[callbackCount++];) {
            node.removeAttribute(html2canvasNodeAttribute);
          }
        }
      }
    });
    boolHook = {
      set : function(elem, value, key) {
        return false === value ? jQuery.removeAttr(elem, key) : elem.setAttribute(key, key), key;
      }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(canCreateDiscussions, name) {
      var n = attrHandle[name] || jQuery.find.attr;
      attrHandle[name] = function(window, status, s) {
        var ret;
        var handle;
        var lowercaseName = status.toLowerCase();
        return s || (handle = attrHandle[lowercaseName], attrHandle[lowercaseName] = ret, ret = null != n(window, status, s) ? lowercaseName : null, attrHandle[lowercaseName] = handle), ret;
      };
    });
    var inputNodeNames = /^(?:input|select|textarea|button)$/i;
    var srsRegex = /^(?:a|area)$/i;
    jQuery.fn.extend({
      prop : function(type, value) {
        return access(this, jQuery.prop, type, value, 1 < arguments.length);
      },
      removeProp : function(name) {
        return this.each(function() {
          delete this[jQuery.propFix[name] || name];
        });
      }
    });
    jQuery.extend({
      prop : function(elem, name, value) {
        var ret;
        var hooks;
        var type = elem.nodeType;
        if (3 !== type && 8 !== type && 2 !== type) {
          return 1 === type && jQuery.isXMLDoc(elem) || (name = jQuery.propFix[name] || name, hooks = jQuery.propHooks[name]), void 0 !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : elem[name] = value : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : elem[name];
        }
      },
      propHooks : {
        tabIndex : {
          get : function(target) {
            var b = jQuery.find.attr(target, "tabindex");
            return b ? parseInt(b, 10) : inputNodeNames.test(target.nodeName) || srsRegex.test(target.nodeName) && target.href ? 0 : -1;
          }
        }
      },
      propFix : {
        for : "htmlFor",
        class : "className"
      }
    });
    if (!support.optSelected) {
      jQuery.propHooks.selected = {
        get : function(elem) {
          var parent = elem.parentNode;
          return parent && parent.parentNode && parent.parentNode.selectedIndex, null;
        },
        set : function(e) {
          var elem = e.parentNode;
          if (elem) {
            elem.selectedIndex;
            if (elem.parentNode) {
              elem.parentNode.selectedIndex;
            }
          }
        }
      };
    }
    jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      jQuery.propFix[this.toLowerCase()] = this;
    });
    jQuery.fn.extend({
      addClass : function(name) {
        var tp;
        var n;
        var b;
        var result;
        var e;
        var k;
        var p;
        var l = 0;
        if (fn(name)) {
          return this.each(function(i) {
            jQuery(this).addClass(name.call(this, i, hasClass(this)));
          });
        }
        if ((tp = trim(name)).length) {
          for (; n = this[l++];) {
            if (result = hasClass(n), b = 1 === n.nodeType && " " + merge(result) + " ") {
              k = 0;
              for (; e = tp[k++];) {
                if (b.indexOf(" " + e + " ") < 0) {
                  b = b + (e + " ");
                }
              }
              if (result !== (p = merge(b))) {
                n.setAttribute("class", p);
              }
            }
          }
        }
        return this;
      },
      removeClass : function(value) {
        var data;
        var n;
        var a;
        var b;
        var filter_error;
        var off;
        var p;
        var l = 0;
        if (fn(value)) {
          return this.each(function(i) {
            jQuery(this).removeClass(value.call(this, i, hasClass(this)));
          });
        }
        if (!arguments.length) {
          return this.attr("class", "");
        }
        if ((data = trim(value)).length) {
          for (; n = this[l++];) {
            if (b = hasClass(n), a = 1 === n.nodeType && " " + merge(b) + " ") {
              off = 0;
              for (; filter_error = data[off++];) {
                for (; -1 < a.indexOf(" " + filter_error + " ");) {
                  a = a.replace(" " + filter_error + " ", " ");
                }
              }
              if (b !== (p = merge(a))) {
                n.setAttribute("class", p);
              }
            }
          }
        }
        return this;
      },
      toggleClass : function(value, stateVal) {
        var undefined = typeof value;
        var r = "string" === undefined || Array.isArray(value);
        return "boolean" == typeof stateVal && r ? stateVal ? this.addClass(value) : this.removeClass(value) : fn(value) ? this.each(function(i) {
          jQuery(this).toggleClass(value.call(this, i, hasClass(this), stateVal), stateVal);
        }) : this.each(function() {
          var p;
          var l;
          var o;
          var s;
          if (r) {
            l = 0;
            o = jQuery(this);
            s = trim(value);
            for (; p = s[l++];) {
              if (o.hasClass(p)) {
                o.removeClass(p);
              } else {
                o.addClass(p);
              }
            }
          } else {
            if (!(void 0 !== value && "boolean" !== undefined)) {
              if (p = hasClass(this)) {
                dataPriv.set(this, "__className__", p);
              }
              if (this.setAttribute) {
                this.setAttribute("class", p || false === value ? "" : dataPriv.get(this, "__className__") || "");
              }
            }
          }
        });
      },
      hasClass : function(e) {
        var sceneUid;
        var target;
        var r = 0;
        sceneUid = " " + e + " ";
        for (; target = this[r++];) {
          if (1 === target.nodeType && -1 < (" " + merge(hasClass(target)) + " ").indexOf(sceneUid)) {
            return true;
          }
        }
        return false;
      }
    });
    var n = /\r/g;
    jQuery.fn.extend({
      val : function(val) {
        var hooks;
        var value;
        var key;
        var elem = this[0];
        return arguments.length ? (key = fn(val), this.each(function(_) {
          var value;
          if (1 === this.nodeType) {
            if (null == (value = key ? val.call(this, _, jQuery(this).val()) : val)) {
              value = "";
            } else {
              if ("number" == typeof value) {
                value = value + "";
              } else {
                if (Array.isArray(value)) {
                  value = jQuery.map(value, function(value) {
                    return null == value ? "" : value + "";
                  });
                }
              }
            }
            if (!((hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]) && "set" in hooks && void 0 !== hooks.set(this, value, "value"))) {
              this.value = value;
            }
          }
        })) : elem ? (hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()]) && "get" in hooks && void 0 !== (value = hooks.get(elem, "value")) ? value : "string" == typeof(value = elem.value) ? value.replace(n, "") : null == value ? "" : value : void 0;
      }
    });
    jQuery.extend({
      valHooks : {
        option : {
          get : function(key) {
            var isInvalid = jQuery.find.attr(key, "value");
            return null != isInvalid ? isInvalid : merge(jQuery.text(key));
          }
        },
        select : {
          get : function(elem) {
            var value;
            var e;
            var i;
            var options = elem.options;
            var index = elem.selectedIndex;
            var one = "select-one" === elem.type;
            var values = one ? null : [];
            var max = one ? index + 1 : options.length;
            i = index < 0 ? max : one ? index : 0;
            for (; i < max; i++) {
              if (((e = options[i]).selected || i === index) && !e.disabled && (!e.parentNode.disabled || !callback(e.parentNode, "optgroup"))) {
                if (value = jQuery(e).val(), one) {
                  return value;
                }
                values.push(value);
              }
            }
            return values;
          },
          set : function(elem, value) {
            var outputFn;
            var val;
            var options = elem.options;
            var result = jQuery.makeArray(value);
            var i = options.length;
            for (; i--;) {
              if ((val = options[i]).selected = -1 < jQuery.inArray(jQuery.valHooks.option.get(val), result)) {
                outputFn = true;
              }
            }
            return outputFn || (elem.selectedIndex = -1), result;
          }
        }
      }
    });
    jQuery.each(["radio", "checkbox"], function() {
      jQuery.valHooks[this] = {
        set : function(elem, value) {
          if (Array.isArray(value)) {
            return elem.checked = -1 < jQuery.inArray(jQuery(elem).val(), value);
          }
        }
      };
      if (!support.checkOn) {
        jQuery.valHooks[this].get = function(elem) {
          return null === elem.getAttribute("value") ? "on" : elem.value;
        };
      }
    });
    support.focusin = "onfocusin" in window;
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
    var onInspectorMove = function(e) {
      e.stopPropagation();
    };
    jQuery.extend(jQuery.event, {
      trigger : function(event, value, elem, data) {
        var i;
        var cur;
        var tmp;
        var bubbleType;
        var ontype;
        var next;
        var special;
        var parent;
        var eventPath = [elem || document];
        var type = hasOwn.call(event, "type") ? event.type : event;
        var parts = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
        if (cur = parent = tmp = elem = elem || document, 3 !== elem.nodeType && 8 !== elem.nodeType && !rfocusMorph.test(type + jQuery.event.triggered) && (-1 < type.indexOf(".") && (type = (parts = type.split(".")).shift(), parts.sort()), ontype = type.indexOf(":") < 0 && "on" + type, (event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" == typeof event && event)).isTrigger = data ? 2 : 3, event.namespace = parts.join("."), event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + 
        parts.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, event.result = void 0, event.target || (event.target = elem), value = null == value ? [event] : jQuery.makeArray(value, [event]), special = jQuery.event.special[type] || {}, data || !special.trigger || false !== special.trigger.apply(elem, value))) {
          if (!data && !special.noBubble && !isWindow(elem)) {
            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
              cur = cur.parentNode;
            }
            for (; cur; cur = cur.parentNode) {
              eventPath.push(cur);
              tmp = cur;
            }
            if (tmp === (elem.ownerDocument || document)) {
              eventPath.push(tmp.defaultView || tmp.parentWindow || window);
            }
          }
          i = 0;
          for (; (cur = eventPath[i++]) && !event.isPropagationStopped();) {
            parent = cur;
            event.type = 1 < i ? bubbleType : special.bindType || type;
            if (next = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle")) {
              next.apply(cur, value);
            }
            if ((next = ontype && cur[ontype]) && next.apply && acceptData(cur)) {
              event.result = next.apply(cur, value);
              if (false === event.result) {
                event.preventDefault();
              }
            }
          }
          return event.type = type, data || event.isDefaultPrevented() || special._default && false !== special._default.apply(eventPath.pop(), value) || !acceptData(elem) || ontype && fn(elem[type]) && !isWindow(elem) && ((tmp = elem[ontype]) && (elem[ontype] = null), jQuery.event.triggered = type, event.isPropagationStopped() && parent.addEventListener(type, onInspectorMove), elem[type](), event.isPropagationStopped() && parent.removeEventListener(type, onInspectorMove), jQuery.event.triggered = 
          void 0, tmp && (elem[ontype] = tmp)), event.result;
        }
      },
      simulate : function(type, elem, options) {
        var r = jQuery.extend(new jQuery.Event, options, {
          type : type,
          isSimulated : true
        });
        jQuery.event.trigger(r, null, elem);
      }
    });
    jQuery.fn.extend({
      trigger : function(name, type) {
        return this.each(function() {
          jQuery.event.trigger(name, type, this);
        });
      },
      triggerHandler : function(type, data) {
        var parent = this[0];
        if (parent) {
          return jQuery.event.trigger(type, data, parent, true);
        }
      }
    });
    if (!support.focusin) {
      jQuery.each({
        focus : "focusin",
        blur : "focusout"
      }, function(orig, fix) {
        var handler = function(event) {
          jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
        };
        jQuery.event.special[fix] = {
          setup : function() {
            var doc = this.ownerDocument || this;
            var attaches = dataPriv.access(doc, fix);
            if (!attaches) {
              doc.addEventListener(orig, handler, true);
            }
            dataPriv.access(doc, fix, (attaches || 0) + 1);
          },
          teardown : function() {
            var doc = this.ownerDocument || this;
            var attaches = dataPriv.access(doc, fix) - 1;
            if (attaches) {
              dataPriv.access(doc, fix, attaches);
            } else {
              doc.removeEventListener(orig, handler, true);
              dataPriv.remove(doc, fix);
            }
          }
        };
      });
    }
    var location = window.location;
    var widgetUniqueIDIndex = Date.now();
    var rquery = /\?/;
    jQuery.parseXML = function(data) {
      var xml;
      if (!data || "string" != typeof data) {
        return null;
      }
      try {
        xml = (new window.DOMParser).parseFromString(data, "text/xml");
      } catch (e) {
        xml = void 0;
      }
      return xml && !xml.getElementsByTagName("parsererror").length || jQuery.error("Invalid XML: " + data), xml;
    };
    var hasExtRx = /\[\]$/;
    var reVowels = /\r?\n/g;
    var reHasHexPrefix = /^(?:submit|button|image|reset|file)$/i;
    var rsubmittable = /^(?:input|select|textarea|keygen)/i;
    jQuery.param = function(data, type) {
      var name;
      var displayUsedBy = [];
      var add = function(e, result) {
        var value = fn(result) ? result() : result;
        displayUsedBy[displayUsedBy.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == value ? "" : value);
      };
      if (null == data) {
        return "";
      }
      if (Array.isArray(data) || data.jquery && !jQuery.isPlainObject(data)) {
        jQuery.each(data, function() {
          add(this.name, this.value);
        });
      } else {
        for (name in data) {
          extend(name, data[name], type, add);
        }
      }
      return displayUsedBy.join("&");
    };
    jQuery.fn.extend({
      serialize : function() {
        return jQuery.param(this.serializeArray());
      },
      serializeArray : function() {
        return this.map(function() {
          var elements = jQuery.prop(this, "elements");
          return elements ? jQuery.makeArray(elements) : this;
        }).filter(function() {
          var string = this.type;
          return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !reHasHexPrefix.test(string) && (this.checked || !reg.test(string));
        }).map(function(canCreateDiscussions, ctlParams) {
          var val = jQuery(this).val();
          return null == val ? null : Array.isArray(val) ? jQuery.map(val, function(val) {
            return {
              name : ctlParams.name,
              value : val.replace(reVowels, "\r\n")
            };
          }) : {
            name : ctlParams.name,
            value : val.replace(reVowels, "\r\n")
          };
        }).get();
      }
    });
    var jsre = /%20/g;
    var rhash = /#.*$/;
    var rts = /([?&])_=[^&]*/;
    var rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm;
    var re = /^(?:GET|HEAD)$/;
    var rprotocol = /^\/\//;
    var prefilters = {};
    var transports = {};
    var Ut = "*/".concat("*");
    var originAnchor = document.createElement("a");
    originAnchor.href = location.href;
    jQuery.extend({
      active : 0,
      lastModified : {},
      etag : {},
      ajaxSettings : {
        url : location.href,
        type : "GET",
        isLocal : /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(location.protocol),
        global : true,
        processData : true,
        async : true,
        contentType : "application/x-www-form-urlencoded; charset=UTF-8",
        accepts : {
          "*" : Ut,
          text : "text/plain",
          html : "text/html",
          xml : "application/xml, text/xml",
          json : "application/json, text/javascript"
        },
        contents : {
          xml : /\bxml\b/,
          html : /\bhtml/,
          json : /\bjson\b/
        },
        responseFields : {
          xml : "responseXML",
          text : "responseText",
          json : "responseJSON"
        },
        converters : {
          "* text" : String,
          "text html" : true,
          "text json" : JSON.parse,
          "text xml" : jQuery.parseXML
        },
        flatOptions : {
          url : true,
          context : true
        }
      },
      ajaxSetup : function(target, settings) {
        return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
      },
      ajaxPrefilter : addToPrefiltersOrTransports(prefilters),
      ajaxTransport : addToPrefiltersOrTransports(transports),
      ajax : function(url, options) {
        function done(status, nativeStatusText, responses, headers) {
          var isSuccess;
          var success;
          var error;
          var response;
          var modified;
          var statusText = nativeStatusText;
          if (!completed) {
            completed = true;
            if (showAboveTimeout) {
              window.clearTimeout(showAboveTimeout);
            }
            transport = void 0;
            responseHeadersString = headers || "";
            jqXHR.readyState = 0 < status ? 4 : 0;
            isSuccess = 200 <= status && status < 300 || 304 === status;
            if (responses) {
              response = function(s, ajaxRequest, responses) {
                var ct;
                var type;
                var finalDataType;
                var firstDataType;
                var contents = s.contents;
                var dataTypes = s.dataTypes;
                for (; "*" === dataTypes[0];) {
                  dataTypes.shift();
                  if (void 0 === ct) {
                    ct = s.mimeType || ajaxRequest.getResponseHeader("Content-Type");
                  }
                }
                if (ct) {
                  for (type in contents) {
                    if (contents[type] && contents[type].test(ct)) {
                      dataTypes.unshift(type);
                      break;
                    }
                  }
                }
                if (dataTypes[0] in responses) {
                  finalDataType = dataTypes[0];
                } else {
                  for (type in responses) {
                    if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                      finalDataType = type;
                      break;
                    }
                    if (!firstDataType) {
                      firstDataType = type;
                    }
                  }
                  finalDataType = finalDataType || firstDataType;
                }
                if (finalDataType) {
                  return finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType];
                }
              }(s, jqXHR, responses);
            }
            response = function(s, data, options, isSuccess) {
              var prop;
              var key;
              var value;
              var arr;
              var id;
              var model = {};
              var mods = s.dataTypes.slice();
              if (mods[1]) {
                for (value in s.converters) {
                  model[value.toLowerCase()] = s.converters[value];
                }
              }
              key = mods.shift();
              for (; key;) {
                if (s.responseFields[key] && (options[s.responseFields[key]] = data), !id && isSuccess && s.dataFilter && (data = s.dataFilter(data, s.dataType)), id = key, key = mods.shift()) {
                  if ("*" === key) {
                    key = id;
                  } else {
                    if ("*" !== id && id !== key) {
                      if (!(value = model[id + " " + key] || model["* " + key])) {
                        for (prop in model) {
                          if ((arr = prop.split(" "))[1] === key && (value = model[id + " " + arr[0]] || model["* " + arr[0]])) {
                            if (true === value) {
                              value = model[prop];
                            } else {
                              if (true !== model[prop]) {
                                key = arr[0];
                                mods.unshift(arr[1]);
                              }
                            }
                            break;
                          }
                        }
                      }
                      if (true !== value) {
                        if (value && s.throws) {
                          data = value(data);
                        } else {
                          try {
                            data = value(data);
                          } catch ($null) {
                            return {
                              state : "parsererror",
                              error : value ? $null : "No conversion from " + id + " to " + key
                            };
                          }
                        }
                      }
                    }
                  }
                }
              }
              return {
                state : "success",
                data : data
              };
            }(s, response, jqXHR, isSuccess);
            if (isSuccess) {
              if (s.ifModified) {
                if (modified = jqXHR.getResponseHeader("Last-Modified")) {
                  jQuery.lastModified[cacheURL] = modified;
                }
                if (modified = jqXHR.getResponseHeader("etag")) {
                  jQuery.etag[cacheURL] = modified;
                }
              }
              if (204 === status || "HEAD" === s.type) {
                statusText = "nocontent";
              } else {
                if (304 === status) {
                  statusText = "notmodified";
                } else {
                  statusText = response.state;
                  success = response.data;
                  isSuccess = !(error = response.error);
                }
              }
            } else {
              error = statusText;
              if (!(!status && statusText)) {
                statusText = "error";
                if (status < 0) {
                  status = 0;
                }
              }
            }
            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + "";
            if (isSuccess) {
              deferred.resolveWith(obj, [success, statusText, jqXHR]);
            } else {
              deferred.rejectWith(obj, [jqXHR, statusText, error]);
            }
            jqXHR.statusCode(statusCode);
            statusCode = void 0;
            if (f) {
              globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
            }
            completeDeferred.fireWith(obj, [jqXHR, statusText]);
            if (f) {
              globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
              if (!--jQuery.active) {
                jQuery.event.trigger("ajaxStop");
              }
            }
          }
        }
        if ("object" == typeof url) {
          options = url;
          url = void 0;
        }
        options = options || {};
        var transport;
        var cacheURL;
        var responseHeadersString;
        var marks;
        var showAboveTimeout;
        var urlAnchor;
        var completed;
        var f;
        var i;
        var uncached;
        var s = jQuery.ajaxSetup({}, options);
        var obj = s.context || s;
        var globalEventContext = s.context && (obj.nodeType || obj.jquery) ? jQuery(obj) : jQuery.event;
        var deferred = jQuery.Deferred();
        var completeDeferred = jQuery.Callbacks("once memory");
        var statusCode = s.statusCode || {};
        var data = {};
        var requestHeadersNames = {};
        var status = "canceled";
        var jqXHR = {
          readyState : 0,
          getResponseHeader : function(header) {
            var match;
            if (completed) {
              if (!marks) {
                marks = {};
                for (; match = rheaders.exec(responseHeadersString);) {
                  marks[match[1].toLowerCase() + " "] = (marks[match[1].toLowerCase() + " "] || []).concat(match[2]);
                }
              }
              match = marks[header.toLowerCase() + " "];
            }
            return null == match ? null : match.join(", ");
          },
          getAllResponseHeaders : function() {
            return completed ? responseHeadersString : null;
          },
          setRequestHeader : function(name, value) {
            return null == completed && (name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name, data[name] = value), this;
          },
          overrideMimeType : function(type) {
            return null == completed && (s.mimeType = type), this;
          },
          statusCode : function(map) {
            var tmp;
            if (map) {
              if (completed) {
                jqXHR.always(map[jqXHR.status]);
              } else {
                for (tmp in map) {
                  statusCode[tmp] = [statusCode[tmp], map[tmp]];
                }
              }
            }
            return this;
          },
          abort : function(type) {
            var statusText = type || status;
            return transport && transport.abort(statusText), done(0, statusText), this;
          }
        };
        if (deferred.promise(jqXHR), s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"), s.type = options.method || options.type || s.method || s.type, s.dataTypes = (s.dataType || "*").toLowerCase().match(name) || [""], null == s.crossDomain) {
          urlAnchor = document.createElement("a");
          try {
            urlAnchor.href = s.url;
            urlAnchor.href = urlAnchor.href;
            s.crossDomain = originAnchor.protocol + "//" + originAnchor.host != urlAnchor.protocol + "//" + urlAnchor.host;
          } catch (e) {
            s.crossDomain = true;
          }
        }
        if (s.data && s.processData && "string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)), inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), completed) {
          return jqXHR;
        }
        for (i in(f = jQuery.event && s.global) && 0 == jQuery.active++ && jQuery.event.trigger("ajaxStart"), s.type = s.type.toUpperCase(), s.hasContent = !re.test(s.type), cacheURL = s.url.replace(rhash, ""), s.hasContent ? s.data && s.processData && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && (s.data = s.data.replace(jsre, "+")) : (uncached = s.url.slice(cacheURL.length), s.data && (s.processData || "string" == typeof s.data) && (cacheURL = cacheURL + ((rquery.test(cacheURL) ? 
        "&" : "?") + s.data), delete s.data), false === s.cache && (cacheURL = cacheURL.replace(rts, "$1"), uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + widgetUniqueIDIndex++ + uncached), s.url = cacheURL + uncached), s.ifModified && (jQuery.lastModified[cacheURL] && jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]), jQuery.etag[cacheURL] && jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])), (s.data && s.hasContent && false !== s.contentType || options.contentType) && 
        jqXHR.setRequestHeader("Content-Type", s.contentType), jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : s.accepts["*"]), s.headers) {
          jqXHR.setRequestHeader(i, s.headers[i]);
        }
        if (s.beforeSend && (false === s.beforeSend.call(obj, jqXHR, s) || completed)) {
          return jqXHR.abort();
        }
        if (status = "abort", completeDeferred.add(s.complete), jqXHR.done(s.success), jqXHR.fail(s.error), transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
          if (jqXHR.readyState = 1, f && globalEventContext.trigger("ajaxSend", [jqXHR, s]), completed) {
            return jqXHR;
          }
          if (s.async && 0 < s.timeout) {
            showAboveTimeout = window.setTimeout(function() {
              jqXHR.abort("timeout");
            }, s.timeout);
          }
          try {
            completed = false;
            transport.send(data, done);
          } catch (success) {
            if (completed) {
              throw success;
            }
            done(-1, success);
          }
        } else {
          done(-1, "No Transport");
        }
        return jqXHR;
      },
      getJSON : function(data, options, callback) {
        return jQuery.get(data, options, callback, "json");
      },
      getScript : function(data, options) {
        return jQuery.get(data, void 0, options, "script");
      }
    });
    jQuery.each(["get", "post"], function(canCreateDiscussions, method) {
      jQuery[method] = function(url, p, color, type) {
        return fn(p) && (type = type || color, color = p, p = void 0), jQuery.ajax(jQuery.extend({
          url : url,
          type : method,
          dataType : type,
          data : p,
          success : color
        }, jQuery.isPlainObject(url) && url));
      };
    });
    jQuery._evalUrl = function(e, url) {
      return jQuery.ajax({
        url : e,
        type : "GET",
        dataType : "script",
        cache : true,
        async : false,
        global : false,
        converters : {
          "text script" : function() {
          }
        },
        dataFilter : function(text) {
          jQuery.globalEval(text, url);
        }
      });
    };
    jQuery.fn.extend({
      wrapAll : function(value) {
        var t;
        return this[0] && (fn(value) && (value = value.call(this[0])), t = jQuery(value, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          var elem = this;
          for (; elem.firstElementChild;) {
            elem = elem.firstElementChild;
          }
          return elem;
        }).append(this)), this;
      },
      wrapInner : function(wrapper) {
        return fn(wrapper) ? this.each(function(i) {
          jQuery(this).wrapInner(wrapper.call(this, i));
        }) : this.each(function() {
          var fixture = jQuery(this);
          var clone = fixture.contents();
          if (clone.length) {
            clone.wrapAll(wrapper);
          } else {
            fixture.append(wrapper);
          }
        });
      },
      wrap : function(html) {
        var isFunction = fn(html);
        return this.each(function(i) {
          jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
        });
      },
      unwrap : function(name) {
        return this.parent(name).not("body").each(function() {
          jQuery(this).replaceWith(this.childNodes);
        }), this;
      }
    });
    jQuery.expr.pseudos.hidden = function(name) {
      return !jQuery.expr.pseudos.visible(name);
    };
    jQuery.expr.pseudos.visible = function(el) {
      return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
    };
    jQuery.ajaxSettings.xhr = function() {
      try {
        return new window.XMLHttpRequest;
      } catch (e) {
      }
    };
    var xhrSuccessStatus = {
      0 : 200,
      1223 : 204
    };
    var xhrSupported = jQuery.ajaxSettings.xhr();
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function(options) {
      var callback;
      var errorCallback;
      if (support.cors || xhrSupported && !options.crossDomain) {
        return {
          send : function(headers, callback) {
            var name;
            var xhr = options.xhr();
            if (xhr.open(options.type, options.url, options.async, options.username, options.password), options.xhrFields) {
              for (name in options.xhrFields) {
                xhr[name] = options.xhrFields[name];
              }
            }
            for (name in options.mimeType && xhr.overrideMimeType && xhr.overrideMimeType(options.mimeType), options.crossDomain || headers["X-Requested-With"] || (headers["X-Requested-With"] = "XMLHttpRequest"), headers) {
              xhr.setRequestHeader(name, headers[name]);
            }
            callback = function(event) {
              return function() {
                if (callback) {
                  callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                  if ("abort" === event) {
                    xhr.abort();
                  } else {
                    if ("error" === event) {
                      if ("number" != typeof xhr.status) {
                        callback(0, "error");
                      } else {
                        callback(xhr.status, xhr.statusText);
                      }
                    } else {
                      callback(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, "text" !== (xhr.responseType || "text") || "string" != typeof xhr.responseText ? {
                        binary : xhr.response
                      } : {
                        text : xhr.responseText
                      }, xhr.getAllResponseHeaders());
                    }
                  }
                }
              };
            };
            xhr.onload = callback();
            errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
            if (void 0 !== xhr.onabort) {
              xhr.onabort = errorCallback;
            } else {
              xhr.onreadystatechange = function() {
                if (4 === xhr.readyState) {
                  window.setTimeout(function() {
                    if (callback) {
                      errorCallback();
                    }
                  });
                }
              };
            }
            callback = callback("abort");
            try {
              xhr.send(options.hasContent && options.data || null);
            } catch (i) {
              if (callback) {
                throw i;
              }
            }
          },
          abort : function() {
            if (callback) {
              callback();
            }
          }
        };
      }
    });
    jQuery.ajaxPrefilter(function(options) {
      if (options.crossDomain) {
        options.contents.script = false;
      }
    });
    jQuery.ajaxSetup({
      accepts : {
        script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents : {
        script : /\b(?:java|ecma)script\b/
      },
      converters : {
        "text script" : function(value) {
          return jQuery.globalEval(value), value;
        }
      }
    });
    jQuery.ajaxPrefilter("script", function(settings) {
      if (void 0 === settings.cache) {
        settings.cache = false;
      }
      if (settings.crossDomain) {
        settings.type = "GET";
      }
    });
    jQuery.ajaxTransport("script", function(options) {
      var fileElem;
      var callback;
      if (options.crossDomain || options.scriptAttrs) {
        return {
          send : function(packets, callback) {
            fileElem = jQuery("<script>").attr(options.scriptAttrs || {}).prop({
              charset : options.scriptCharset,
              src : options.url
            }).on("load error", callback = function(result) {
              fileElem.remove();
              callback = null;
              if (result) {
                callback("error" === result.type ? 404 : 200, result.type);
              }
            });
            document.head.appendChild(fileElem[0]);
          },
          abort : function() {
            if (callback) {
              callback();
            }
          }
        };
      }
    });
    var summary;
    var oldCallbacks = [];
    var rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
      jsonp : "callback",
      jsonpCallback : function() {
        var indexLookupKey = oldCallbacks.pop() || jQuery.expando + "_" + widgetUniqueIDIndex++;
        return this[indexLookupKey] = true, indexLookupKey;
      }
    });
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, scanners) {
      var callbackName;
      var overwritten;
      var responseContainer;
      var jsonProp = false !== s.jsonp && (rjsonp.test(s.url) ? "url" : "string" == typeof s.data && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
      if (jsonProp || "jsonp" === s.dataTypes[0]) {
        return callbackName = s.jsonpCallback = fn(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName) : false !== s.jsonp && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), s.converters["script json"] = function() {
          return responseContainer || jQuery.error(callbackName + " was not called"), responseContainer[0];
        }, s.dataTypes[0] = "json", overwritten = window[callbackName], window[callbackName] = function() {
          responseContainer = arguments;
        }, scanners.always(function() {
          if (void 0 === overwritten) {
            jQuery(window).removeProp(callbackName);
          } else {
            window[callbackName] = overwritten;
          }
          if (s[callbackName]) {
            s.jsonpCallback = originalSettings.jsonpCallback;
            oldCallbacks.push(callbackName);
          }
          if (responseContainer && fn(overwritten)) {
            overwritten(responseContainer[0]);
          }
          responseContainer = overwritten = void 0;
        }), "script";
      }
    });
    support.createHTMLDocument = ((summary = document.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === summary.childNodes.length);
    jQuery.parseHTML = function(data, context, keepScripts) {
      return "string" != typeof data ? [] : ("boolean" == typeof context && (keepScripts = context, context = false), context || (support.createHTMLDocument ? ((target = (context = document.implementation.createHTMLDocument("")).createElement("base")).href = document.location.href, context.head.appendChild(target)) : context = document), scripts = !keepScripts && [], (parsed = rsingleTag.exec(data)) ? [context.createElement(parsed[1])] : (parsed = buildFragment([data], context, scripts), scripts && 
      scripts.length && jQuery(scripts).remove(), jQuery.merge([], parsed.childNodes)));
      var target;
      var parsed;
      var scripts;
    };
    jQuery.fn.load = function(result, value, callback) {
      var data;
      var method;
      var args;
      var res = this;
      var i = result.indexOf(" ");
      return -1 < i && (data = merge(result.slice(i)), result = result.slice(0, i)), fn(value) ? (callback = value, value = void 0) : value && "object" == typeof value && (method = "POST"), 0 < res.length && jQuery.ajax({
        url : result,
        type : method || "GET",
        dataType : "html",
        data : value
      }).done(function(response) {
        args = arguments;
        res.html(data ? jQuery("<div>").append(jQuery.parseHTML(response)).find(data) : response);
      }).always(callback && function(name, type) {
        res.each(function() {
          callback.apply(this, args || [name.responseText, type, name]);
        });
      }), this;
    };
    jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(canCreateDiscussions, type) {
      jQuery.fn[type] = function(e) {
        return this.on(type, e);
      };
    });
    jQuery.expr.pseudos.animated = function(elem) {
      return jQuery.grep(jQuery.timers, function(fn) {
        return elem === fn.elem;
      }).length;
    };
    jQuery.offset = {
      setOffset : function(data, options, x) {
        var curPosition;
        var curLeft;
        var a;
        var curTop;
        var curOffset;
        var value;
        var position = jQuery.css(data, "position");
        var wrapper = jQuery(data);
        var props = {};
        if ("static" === position) {
          data.style.position = "relative";
        }
        curOffset = wrapper.offset();
        a = jQuery.css(data, "top");
        value = jQuery.css(data, "left");
        if (("absolute" === position || "fixed" === position) && -1 < (a + value).indexOf("auto")) {
          curTop = (curPosition = wrapper.position()).top;
          curLeft = curPosition.left;
        } else {
          curTop = parseFloat(a) || 0;
          curLeft = parseFloat(value) || 0;
        }
        if (fn(options)) {
          options = options.call(data, x, jQuery.extend({}, curOffset));
        }
        if (null != options.top) {
          props.top = options.top - curOffset.top + curTop;
        }
        if (null != options.left) {
          props.left = options.left - curOffset.left + curLeft;
        }
        if ("using" in options) {
          options.using.call(data, props);
        } else {
          wrapper.css(props);
        }
      }
    };
    jQuery.fn.extend({
      offset : function(y) {
        if (arguments.length) {
          return void 0 === y ? this : this.each(function(i) {
            jQuery.offset.setOffset(this, y, i);
          });
        }
        var box;
        var win;
        var aTarget = this[0];
        return aTarget ? aTarget.getClientRects().length ? (box = aTarget.getBoundingClientRect(), win = aTarget.ownerDocument.defaultView, {
          top : box.top + win.pageYOffset,
          left : box.left + win.pageXOffset
        }) : {
          top : 0,
          left : 0
        } : void 0;
      },
      position : function() {
        if (this[0]) {
          var el;
          var offset;
          var node;
          var element = this[0];
          var parentOffset = {
            top : 0,
            left : 0
          };
          if ("fixed" === jQuery.css(element, "position")) {
            offset = element.getBoundingClientRect();
          } else {
            offset = this.offset();
            node = element.ownerDocument;
            el = element.offsetParent || node.documentElement;
            for (; el && (el === node.body || el === node.documentElement) && "static" === jQuery.css(el, "position");) {
              el = el.parentNode;
            }
            if (el && el !== element && 1 === el.nodeType) {
              (parentOffset = jQuery(el).offset()).top += jQuery.css(el, "borderTopWidth", true);
              parentOffset.left += jQuery.css(el, "borderLeftWidth", true);
            }
          }
          return {
            top : offset.top - parentOffset.top - jQuery.css(element, "marginTop", true),
            left : offset.left - parentOffset.left - jQuery.css(element, "marginLeft", true)
          };
        }
      },
      offsetParent : function() {
        return this.map(function() {
          var parent = this.offsetParent;
          for (; parent && "static" === jQuery.css(parent, "position");) {
            parent = parent.offsetParent;
          }
          return parent || node;
        });
      }
    });
    jQuery.each({
      scrollLeft : "pageXOffset",
      scrollTop : "pageYOffset"
    }, function(type, prop) {
      var top = "pageYOffset" === prop;
      jQuery.fn[type] = function(value) {
        return access(this, function(node, method, val) {
          var win;
          if (isWindow(node) ? win = node : 9 === node.nodeType && (win = node.defaultView), void 0 === val) {
            return win ? win[prop] : node[method];
          }
          if (win) {
            win.scrollTo(top ? win.pageXOffset : val, top ? val : win.pageYOffset);
          } else {
            node[method] = val;
          }
        }, type, value, arguments.length);
      };
    });
    jQuery.each(["top", "left"], function(canCreateDiscussions, prop) {
      jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, val) {
        if (val) {
          return val = curCSS(elem, prop), rnumnonpx.test(val) ? jQuery(elem).position()[prop] + "px" : val;
        }
      });
    });
    jQuery.each({
      Height : "height",
      Width : "width"
    }, function(name, type) {
      jQuery.each({
        padding : "inner" + name,
        content : type,
        "" : "outer" + name
      }, function(defaultExtra, type) {
        jQuery.fn[type] = function(margin, boardManager) {
          var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin);
          var extra = defaultExtra || (true === margin || true === boardManager ? "margin" : "border");
          return access(this, function(el, offset, undefined) {
            var doc;
            return isWindow(el) ? 0 === type.indexOf("outer") ? el["inner" + name] : el.document.documentElement["client" + name] : 9 === el.nodeType ? (doc = el.documentElement, Math.max(el.body["scroll" + name], doc["scroll" + name], el.body["offset" + name], doc["offset" + name], doc["client" + name])) : void 0 === undefined ? jQuery.css(el, offset, extra) : jQuery.style(el, offset, undefined, extra);
          }, type, chainable ? margin : void 0, chainable);
        };
      });
    });
    jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(canCreateDiscussions, type) {
      jQuery.fn[type] = function(userParams, callback) {
        return 0 < arguments.length ? this.on(type, null, userParams, callback) : this.trigger(type);
      };
    });
    jQuery.fn.extend({
      hover : function(fnOver, fnOut) {
        return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
      }
    });
    jQuery.fn.extend({
      bind : function(type, settings, callback) {
        return this.on(type, null, settings, callback);
      },
      unbind : function(type, fn) {
        return this.off(type, null, fn);
      },
      delegate : function(filter, event, callback, fn) {
        return this.on(event, filter, callback, fn);
      },
      undelegate : function(selector, types, fn) {
        return 1 === arguments.length ? this.off(selector, "**") : this.off(types, selector || "**", fn);
      }
    });
    jQuery.proxy = function(d, e) {
      var i;
      var headArgs;
      var proxyFn;
      if ("string" == typeof e && (i = d[e], e = d, d = i), fn(d)) {
        return headArgs = slice.call(arguments, 2), (proxyFn = function() {
          return d.apply(e || this, headArgs.concat(slice.call(arguments)));
        }).guid = d.guid = d.guid || jQuery.guid++, proxyFn;
      }
    };
    jQuery.holdReady = function(hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    };
    jQuery.isArray = Array.isArray;
    jQuery.parseJSON = JSON.parse;
    jQuery.nodeName = callback;
    jQuery.isFunction = fn;
    jQuery.isWindow = isWindow;
    jQuery.camelCase = camelCase;
    jQuery.type = type;
    jQuery.now = Date.now;
    jQuery.isNumeric = function(value) {
      var undefined = jQuery.type(value);
      return ("number" === undefined || "string" === undefined) && !isNaN(value - parseFloat(value));
    };
    if (!(void 0 === (m = function() {
      return jQuery;
    }.apply(t, [])))) {
      mixin.exports = m;
    }
    var _jQuery = window.jQuery;
    var old$ = window.$;
    return jQuery.noConflict = function(deep) {
      return window.$ === jQuery && (window.$ = old$), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery;
    }, i || (window.jQuery = window.$ = jQuery), jQuery;
  });
}, function(mixin, t, n) {
  var m;
  !function(global, factory) {
    if ("object" == typeof mixin.exports) {
      mixin.exports = global.document ? factory(global, true) : function(name) {
        if (!name.document) {
          throw new Error("jQuery requires a window with a document");
        }
        return factory(name);
      };
    } else {
      factory(global);
    }
  }("undefined" != typeof window ? window : this, function(window, i) {
    function test(name, obj, doc) {
      var key;
      var scriptsrc;
      var script = (doc = doc || document).createElement("script");
      if (script.text = name, obj) {
        for (key in obj) {
          if (scriptsrc = obj[key] || obj.getAttribute && obj.getAttribute(key)) {
            script.setAttribute(key, scriptsrc);
          }
        }
      }
      doc.head.appendChild(script).parentNode.removeChild(script);
    }
    function type(name) {
      return null == name ? name + "" : "object" == typeof name || "function" == typeof name ? class2type[toString.call(name)] || "object" : typeof name;
    }
    function isArrayLike(obj) {
      var length = !!obj && "length" in obj && obj.length;
      var ltype = type(obj);
      return !fn(obj) && !isWindow(obj) && ("array" === ltype || 0 === length || "number" == typeof length && length > 0 && length - 1 in obj);
    }
    function callback(name, type) {
      return name.nodeName && name.nodeName.toLowerCase() === type.toLowerCase();
    }
    function filter(key, value, not) {
      return fn(value) ? jQuery.grep(key, function(context, i) {
        return !!value.call(context, i, context) !== not;
      }) : value.nodeType ? jQuery.grep(key, function(elem) {
        return elem === value !== not;
      }) : "string" != typeof value ? jQuery.grep(key, function(name) {
        return indexOf.call(value, name) > -1 !== not;
      }) : jQuery.filter(value, key, not);
    }
    function sibling(cur, dir) {
      for (; (cur = cur[dir]) && 1 !== cur.nodeType;) {
      }
      return cur;
    }
    function result(passthru) {
      return passthru;
    }
    function undefined(state) {
      throw state;
    }
    function resolve(data, path, callback, args) {
      var error;
      try {
        if (data && fn(error = data.promise)) {
          error.call(data).done(path).fail(callback);
        } else {
          if (data && fn(error = data.then)) {
            error.call(data, path, callback);
          } else {
            path.apply(void 0, [data].slice(args));
          }
        }
      } catch (success) {
        callback.apply(void 0, [success]);
      }
    }
    function $__jsx_onload() {
      document.removeEventListener("DOMContentLoaded", $__jsx_onload);
      window.removeEventListener("load", $__jsx_onload);
      jQuery.ready();
    }
    function dashToCapital(context, match) {
      return match.toUpperCase();
    }
    function camelCase(str) {
      return str.replace(_kerningNamesHash_escapeEscape, "ms-").replace(rcharset, dashToCapital);
    }
    function Data() {
      this.expando = jQuery.expando + Data.uid++;
    }
    function render(elem, p, value) {
      var name;
      if (void 0 === value && 1 === elem.nodeType) {
        if (name = "data-" + p.replace(unsafeChars, "-$&").toLowerCase(), "string" == typeof(value = elem.getAttribute(name))) {
          try {
            value = function(value) {
              return "true" === value || "false" !== value && ("null" === value ? null : value === +value + "" ? +value : contribRegex.test(value) ? JSON.parse(value) : value);
            }(value);
          } catch (e) {
          }
          api.set(elem, p, value);
        } else {
          value = void 0;
        }
      }
      return value;
    }
    function adjustCSS(elem, prop, valueParts, tween) {
      var adjusted;
      var scale;
      var s = 20;
      var currentValue = tween ? function() {
        return tween.cur();
      } : function() {
        return jQuery.css(elem, prop, "");
      };
      var initial = currentValue();
      var unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px");
      var initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || "px" !== unit && +initial) && regex.exec(jQuery.css(elem, prop));
      if (initialInUnit && initialInUnit[3] !== unit) {
        initial = initial / 2;
        unit = unit || initialInUnit[3];
        initialInUnit = +initial || 1;
        for (; s--;) {
          jQuery.style(elem, prop, initialInUnit + unit);
          if ((1 - scale) * (1 - (scale = currentValue() / initial || .5)) <= 0) {
            s = 0;
          }
          initialInUnit = initialInUnit / scale;
        }
        initialInUnit = initialInUnit * 2;
        jQuery.style(elem, prop, initialInUnit + unit);
        valueParts = valueParts || [];
      }
      return valueParts && (initialInUnit = +initialInUnit || +initial || 0, adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2], tween && (tween.unit = unit, tween.start = initialInUnit, tween.end = adjusted)), adjusted;
    }
    function getDefaultDisplay(elem) {
      var value;
      var doc = elem.ownerDocument;
      var nodeName = elem.nodeName;
      var display = defaultDisplayMap[nodeName];
      return display || (value = doc.body.appendChild(doc.createElement(nodeName)), display = jQuery.css(value, "display"), value.parentNode.removeChild(value), "none" === display && (display = "block"), defaultDisplayMap[nodeName] = display, display);
    }
    function showHide(elements, options) {
      var display;
      var elem;
      var values = [];
      var index = 0;
      var length = elements.length;
      for (; index < length; index++) {
        if ((elem = elements[index]).style) {
          display = elem.style.display;
          if (options) {
            if ("none" === display) {
              values[index] = dataPriv.get(elem, "display") || null;
              if (!values[index]) {
                elem.style.display = "";
              }
            }
            if ("" === elem.style.display && isHidden(elem)) {
              values[index] = getDefaultDisplay(elem);
            }
          } else {
            if ("none" !== display) {
              values[index] = "none";
              dataPriv.set(elem, "display", display);
            }
          }
        }
      }
      index = 0;
      for (; index < length; index++) {
        if (null != values[index]) {
          elements[index].style.display = values[index];
        }
      }
      return elements;
    }
    function getAll(context, tag) {
      var legendset;
      return legendset = void 0 !== context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : void 0 !== context.querySelectorAll ? context.querySelectorAll(tag || "*") : [], void 0 === tag || tag && callback(context, tag) ? jQuery.merge([context], legendset) : legendset;
    }
    function setGlobalEval(elems, refElements) {
      var i = 0;
      var length = elems.length;
      for (; i < length; i++) {
        dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
      }
    }
    function buildFragment(args, context, node, result, ignored) {
      var elem;
      var tmp;
      var tag;
      var wrap;
      var i;
      var j;
      var fragment = context.createDocumentFragment();
      var results = [];
      var index = 0;
      var arg_count = args.length;
      for (; index < arg_count; index++) {
        if ((elem = args[index]) || 0 === elem) {
          if ("object" === type(elem)) {
            jQuery.merge(results, elem.nodeType ? [elem] : elem);
          } else {
            if (re_commas.test(elem)) {
              tmp = tmp || fragment.appendChild(context.createElement("div"));
              tag = (me.exec(elem) || ["", ""])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
              j = wrap[0];
              for (; j--;) {
                tmp = tmp.lastChild;
              }
              jQuery.merge(results, tmp.childNodes);
              (tmp = fragment.firstChild).textContent = "";
            } else {
              results.push(context.createTextNode(elem));
            }
          }
        }
      }
      fragment.textContent = "";
      index = 0;
      for (; elem = results[index++];) {
        if (result && jQuery.inArray(elem, result) > -1) {
          if (ignored) {
            ignored.push(elem);
          }
        } else {
          if (i = get(elem), tmp = getAll(fragment.appendChild(elem), "script"), i && setGlobalEval(tmp), node) {
            j = 0;
            for (; elem = tmp[j++];) {
              if (opacityRe.test(elem.type || "")) {
                node.push(elem);
              }
            }
          }
        }
      }
      return fragment;
    }
    function mousemove() {
      return true;
    }
    function returnFalse() {
      return false;
    }
    function handler(event, data) {
      return event === function() {
        try {
          return document.activeElement;
        } catch (e) {
        }
      }() == ("focus" === data);
    }
    function bind(f, a, value, key, fn, data) {
      var handler;
      var n;
      if ("object" == typeof a) {
        for (n in "string" != typeof value && (key = key || value, value = void 0), a) {
          bind(f, n, value, key, a[n], data);
        }
        return f;
      }
      if (null == key && null == fn ? (fn = value, key = value = void 0) : null == fn && ("string" == typeof value ? (fn = key, key = void 0) : (fn = key, key = value, value = void 0)), false === fn) {
        fn = returnFalse;
      } else {
        if (!fn) {
          return f;
        }
      }
      return 1 === data && (handler = fn, (fn = function(type) {
        return jQuery().off(type), handler.apply(this, arguments);
      }).guid = handler.guid || (handler.guid = jQuery.guid++)), f.each(function() {
        jQuery.event.add(this, a, fn, key, value);
      });
    }
    function add(elem, type, fn) {
      if (fn) {
        dataPriv.set(elem, type, false);
        jQuery.event.add(elem, type, {
          namespace : false,
          handler : function(event) {
            var promise;
            var attr;
            var data = dataPriv.get(this, type);
            if (1 & event.isTrigger && this[type]) {
              if (data.length) {
                if ((jQuery.event.special[type] || {}).delegateType) {
                  event.stopPropagation();
                }
              } else {
                if (data = slice.call(arguments), dataPriv.set(this, type, data), promise = fn(this, type), this[type](), data !== (attr = dataPriv.get(this, type)) || promise ? dataPriv.set(this, type, false) : attr = {}, data !== attr) {
                  return event.stopImmediatePropagation(), event.preventDefault(), attr.value;
                }
              }
            } else {
              if (data.length) {
                dataPriv.set(this, type, {
                  value : jQuery.event.trigger(jQuery.extend(data[0], jQuery.Event.prototype), data.slice(1), this)
                });
                event.stopImmediatePropagation();
              }
            }
          }
        });
      } else {
        if (void 0 === dataPriv.get(elem, type)) {
          jQuery.event.add(elem, type, mousemove);
        }
      }
    }
    function manipulationTarget(elem, content) {
      return callback(elem, "table") && callback(11 !== content.nodeType ? content : content.firstChild, "tr") && jQuery(elem).children("tbody")[0] || elem;
    }
    function root(elem) {
      return elem.type = (null !== elem.getAttribute("type")) + "/" + elem.type, elem;
    }
    function createGeneNameGenomicState(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }
    function cloneCopyEvent(src, elem) {
      var i;
      var tableslen;
      var event;
      var pdataOld;
      var pdataCur;
      var n;
      var type;
      var events;
      if (1 === elem.nodeType) {
        if (dataPriv.hasData(src) && (pdataOld = dataPriv.access(src), pdataCur = dataPriv.set(elem, pdataOld), events = pdataOld.events)) {
          for (event in delete pdataCur.handle, pdataCur.events = {}, events) {
            i = 0;
            tableslen = events[event].length;
            for (; i < tableslen; i++) {
              jQuery.event.add(elem, event, events[event][i]);
            }
          }
        }
        if (api.hasData(src)) {
          n = api.access(src);
          type = jQuery.extend({}, n);
          api.set(elem, type);
        }
      }
    }
    function fixInput(src, dest) {
      var undefined = dest.nodeName.toLowerCase();
      if ("input" === undefined && path.test(src.type)) {
        dest.checked = src.checked;
      } else {
        if (!("input" !== undefined && "textarea" !== undefined)) {
          dest.defaultValue = src.defaultValue;
        }
      }
    }
    function domManip(collection, args, callback, ignored) {
      args = c.apply([], args);
      var fragment;
      var first;
      var nodes;
      var tableslen;
      var node;
      var document;
      var i = 0;
      var totalItems = collection.length;
      var minimumIdx = totalItems - 1;
      var e = args[0];
      var spot = fn(e);
      if (spot || totalItems > 1 && "string" == typeof e && !support.checkClone && reValidName.test(e)) {
        return collection.each(function(id) {
          var self = collection.eq(id);
          if (spot) {
            args[0] = e.call(this, id, self.html());
          }
          domManip(self, args, callback, ignored);
        });
      }
      if (totalItems && (first = (fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored)).firstChild, 1 === fragment.childNodes.length && (fragment = first), first || ignored)) {
        tableslen = (nodes = jQuery.map(getAll(fragment, "script"), root)).length;
        for (; i < totalItems; i++) {
          node = fragment;
          if (i !== minimumIdx) {
            node = jQuery.clone(node, true, true);
            if (tableslen) {
              jQuery.merge(nodes, getAll(node, "script"));
            }
          }
          callback.call(collection[i], node, i);
        }
        if (tableslen) {
          document = nodes[nodes.length - 1].ownerDocument;
          jQuery.map(nodes, createGeneNameGenomicState);
          i = 0;
          for (; i < tableslen; i++) {
            node = nodes[i];
            if (opacityRe.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(document, node)) {
              if (node.src && "module" !== (node.type || "").toLowerCase()) {
                if (jQuery._evalUrl && !node.noModule) {
                  jQuery._evalUrl(node.src, {
                    nonce : node.nonce || node.getAttribute("nonce")
                  });
                }
              } else {
                test(node.textContent.replace(codePoint, ""), node, document);
              }
            }
          }
        }
      }
      return collection;
    }
    function remove(val, fn, data) {
      var elem;
      var value = fn ? jQuery.filter(fn, val) : val;
      var name = 0;
      for (; null != (elem = value[name]); name++) {
        if (!(data || 1 !== elem.nodeType)) {
          jQuery.cleanData(getAll(elem));
        }
        if (elem.parentNode) {
          if (data && get(elem)) {
            setGlobalEval(getAll(elem, "script"));
          }
          elem.parentNode.removeChild(elem);
        }
      }
      return val;
    }
    function curCSS(elem, name, computed) {
      var minWidth;
      var width;
      var maxWidth;
      var ret;
      var style = elem.style;
      return (computed = computed || getStyles(elem)) && ("" !== (ret = computed.getPropertyValue(name) || computed[name]) || get(elem) || (ret = jQuery.style(elem, name)), !support.pixelBoxStyles() && rnumnonpx.test(ret) && inlineAttributeCommentRegex.test(name) && (minWidth = style.width, width = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, ret = computed.width, style.width = minWidth, style.minWidth = width, style.maxWidth = maxWidth)), void 0 !== 
      ret ? ret + "" : ret;
    }
    function addGetHookIf(conditionFn, hookFn) {
      return {
        get : function() {
          if (!conditionFn()) {
            return (this.get = hookFn).apply(this, arguments);
          }
          delete this.get;
        }
      };
    }
    function camelize(name) {
      var nameField = jQuery.cssProps[name] || aSupports[name];
      return nameField || (name in testStyle ? name : aSupports[name] = function(p) {
        var prop = p[0].toUpperCase() + p.slice(1);
        var i = prefixes.length;
        for (; i--;) {
          if ((p = prefixes[i] + prop) in testStyle) {
            return p;
          }
        }
      }(name) || name);
    }
    function set(type, value, str) {
      var matches = regex.exec(value);
      return matches ? Math.max(0, matches[2] - (str || 0)) + (matches[3] || "px") : value;
    }
    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles, themeName) {
      var i = "width" === name ? 1 : 0;
      var value = 0;
      var val = 0;
      if (extra === (isBorderBox ? "border" : "content")) {
        return 0;
      }
      for (; i < 4; i = i + 2) {
        if ("margin" === extra) {
          val = val + jQuery.css(elem, extra + cssExpand[i], true, styles);
        }
        if (isBorderBox) {
          if ("content" === extra) {
            val = val - jQuery.css(elem, "padding" + cssExpand[i], true, styles);
          }
          if ("margin" !== extra) {
            val = val - jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
          }
        } else {
          val = val + jQuery.css(elem, "padding" + cssExpand[i], true, styles);
          if ("padding" !== extra) {
            val = val + jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
          } else {
            value = value + jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
          }
        }
      }
      return !isBorderBox && themeName >= 0 && (val = val + (Math.max(0, Math.ceil(elem["offset" + name[0].toUpperCase() + name.slice(1)] - themeName - val - value - .5)) || 0)), val;
    }
    function getWidthOrHeight(elem, name, extra) {
      var styles = getStyles(elem);
      var isBorderBox = (!support.boxSizingReliable() || extra) && "border-box" === jQuery.css(elem, "boxSizing", false, styles);
      var valueIsBorderBox = isBorderBox;
      var value = curCSS(elem, name, styles);
      var prop = "offset" + name[0].toUpperCase() + name.slice(1);
      if (rnumnonpx.test(value)) {
        if (!extra) {
          return value;
        }
        value = "auto";
      }
      return (!support.boxSizingReliable() && isBorderBox || "auto" === value || !parseFloat(value) && "inline" === jQuery.css(elem, "display", false, styles)) && elem.getClientRects().length && (isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", false, styles), (valueIsBorderBox = prop in elem) && (value = elem[prop])), (value = parseFloat(value) || 0) + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, value) + "px";
    }
    function Tween(type, key, object, end, easing) {
      return new Tween.prototype.init(type, key, object, end, easing);
    }
    function step() {
      if (lt) {
        if (false === document.hidden && window.requestAnimationFrame) {
          window.requestAnimationFrame(step);
        } else {
          window.setTimeout(step, jQuery.fx.interval);
        }
        jQuery.fx.tick();
      }
    }
    function createFxNow() {
      return window.setTimeout(function() {
        fxNow = void 0;
      }), fxNow = Date.now();
    }
    function genFx(type, includeWidth) {
      var which;
      var i = 0;
      var attrs = {
        height : type
      };
      includeWidth = includeWidth ? 1 : 0;
      for (; i < 4; i = i + (2 - includeWidth)) {
        attrs["margin" + (which = cssExpand[i])] = attrs["padding" + which] = type;
      }
      return includeWidth && (attrs.opacity = attrs.width = type), attrs;
    }
    function createTween(value, prop, animation) {
      var tween;
      var prev = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]);
      var p = 0;
      var s = prev.length;
      for (; p < s; p++) {
        if (tween = prev[p].call(animation, prop, value)) {
          return tween;
        }
      }
    }
    function Animation(elem, properties, options) {
      var result;
      var i;
      var index = 0;
      var ncells = Animation.prefilters.length;
      var deferred = jQuery.Deferred().always(function() {
        delete tick.elem;
      });
      var tick = function() {
        if (i) {
          return false;
        }
        var currentTime = fxNow || createFxNow();
        var remaining = Math.max(0, animation.startTime + animation.duration - currentTime);
        var percent = 1 - (remaining / animation.duration || 0);
        var index = 0;
        var length = animation.tweens.length;
        for (; index < length; index++) {
          animation.tweens[index].run(percent);
        }
        return deferred.notifyWith(elem, [animation, percent, remaining]), percent < 1 && length ? remaining : (length || deferred.notifyWith(elem, [animation, 1, 0]), deferred.resolveWith(elem, [animation]), false);
      };
      var animation = deferred.promise({
        elem : elem,
        props : jQuery.extend({}, properties),
        opts : jQuery.extend(true, {
          specialEasing : {},
          easing : jQuery.easing._default
        }, options),
        originalProperties : properties,
        originalOptions : options,
        startTime : fxNow || createFxNow(),
        duration : options.duration,
        tweens : [],
        createTween : function(prop, end) {
          var result = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
          return animation.tweens.push(result), result;
        },
        stop : function(gotoEnd) {
          var index = 0;
          var length = gotoEnd ? animation.tweens.length : 0;
          if (i) {
            return this;
          }
          i = true;
          for (; index < length; index++) {
            animation.tweens[index].run(1);
          }
          return gotoEnd ? (deferred.notifyWith(elem, [animation, 1, 0]), deferred.resolveWith(elem, [animation, gotoEnd])) : deferred.rejectWith(elem, [animation, gotoEnd]), this;
        }
      });
      var props = animation.props;
      !function(res, object) {
        var key;
        var name;
        var value;
        var obj;
        var hooks;
        for (key in res) {
          if (value = object[name = camelCase(key)], obj = res[key], Array.isArray(obj) && (value = obj[1], obj = res[key] = obj[0]), key !== name && (res[name] = obj, delete res[key]), (hooks = jQuery.cssHooks[name]) && "expand" in hooks) {
            for (key in obj = hooks.expand(obj), delete res[name], obj) {
              if (!(key in res)) {
                res[key] = obj[key];
                object[key] = value;
              }
            }
          } else {
            object[name] = value;
          }
        }
      }(props, animation.opts.specialEasing);
      for (; index < ncells; index++) {
        if (result = Animation.prefilters[index].call(animation, elem, props, animation.opts)) {
          return fn(result.stop) && (jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result)), result;
        }
      }
      return jQuery.map(props, createTween, animation), fn(animation.opts.start) && animation.opts.start.call(elem, animation), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always), jQuery.fx.timer(jQuery.extend(tick, {
        elem : elem,
        anim : animation,
        queue : animation.opts.queue
      })), animation;
    }
    function $(value) {
      return (value.match(rnotwhite) || []).join(" ");
    }
    function getClass(elem) {
      return elem.getAttribute && elem.getAttribute("class") || "";
    }
    function trim(value) {
      return Array.isArray(value) ? value : "string" == typeof value && value.match(rnotwhite) || [];
    }
    function extend(name, object, value, next) {
      var prop;
      if (Array.isArray(object)) {
        jQuery.each(object, function(_width, response) {
          if (value || testRxp.test(name)) {
            next(name, response);
          } else {
            extend(name + "[" + ("object" == typeof response && null != response ? _width : "") + "]", response, value, next);
          }
        });
      } else {
        if (value || "object" !== type(object)) {
          next(name, object);
        } else {
          for (prop in object) {
            extend(name + "[" + prop + "]", object[prop], value, next);
          }
        }
      }
    }
    function addToPrefiltersOrTransports(structure) {
      return function(name, n) {
        if ("string" != typeof name) {
          n = name;
          name = "*";
        }
        var type;
        var ol = 0;
        var o = name.toLowerCase().match(rnotwhite) || [];
        if (fn(n)) {
          for (; type = o[ol++];) {
            if ("+" === type[0]) {
              type = type.slice(1) || "*";
              (structure[type] = structure[type] || []).unshift(n);
            } else {
              (structure[type] = structure[type] || []).push(n);
            }
          }
        }
      };
    }
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
      function inspect(dataType) {
        var selected;
        return inspected[dataType] = true, jQuery.each(structure[dataType] || [], function(canCreateDiscussions, prefilterOrFactory) {
          var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
          return "string" != typeof dataTypeOrTransport || seekingTransport || inspected[dataTypeOrTransport] ? seekingTransport ? !(selected = dataTypeOrTransport) : void 0 : (options.dataTypes.unshift(dataTypeOrTransport), inspect(dataTypeOrTransport), false);
        }), selected;
      }
      var inspected = {};
      var seekingTransport = structure === transports;
      return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    function ajaxExtend(target, opts) {
      var key;
      var deep;
      var flatOptions = jQuery.ajaxSettings.flatOptions || {};
      for (key in opts) {
        if (void 0 !== opts[key]) {
          (flatOptions[key] ? target : deep || (deep = {}))[key] = opts[key];
        }
      }
      return deep && jQuery.extend(true, target, deep), target;
    }
    var arr = [];
    var document = window.document;
    var getProto = Object.getPrototypeOf;
    var slice = arr.slice;
    var c = arr.concat;
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var fnToString = hasOwn.toString;
    var Mixin2 = fnToString.call(Object);
    var support = {};
    var fn = function(obj) {
      return "function" == typeof obj && "number" != typeof obj.nodeType;
    };
    var isWindow = function(obj) {
      return null != obj && obj === obj.window;
    };
    var obj = {
      type : true,
      src : true,
      nonce : true,
      noModule : true
    };
    var jQuery = function(a, c) {
      return new jQuery.fn.init(a, c);
    };
    var tokensRegExp = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    jQuery.fn = jQuery.prototype = {
      jquery : "3.4.1",
      constructor : jQuery,
      length : 0,
      toArray : function() {
        return slice.call(this);
      },
      get : function(num) {
        return null == num ? slice.call(this) : num < 0 ? this[num + this.length] : this[num];
      },
      pushStack : function(elems) {
        var ret = jQuery.merge(this.constructor(), elems);
        return ret.prevObject = this, ret;
      },
      each : function(callback) {
        return jQuery.each(this, callback);
      },
      map : function(fn) {
        return this.pushStack(jQuery.map(this, function(elem, event) {
          return fn.call(elem, event, elem);
        }));
      },
      slice : function() {
        return this.pushStack(slice.apply(this, arguments));
      },
      first : function() {
        return this.eq(0);
      },
      last : function() {
        return this.eq(-1);
      },
      eq : function(idx) {
        var l = this.length;
        var i = +idx + (idx < 0 ? l : 0);
        return this.pushStack(i >= 0 && i < l ? [this[i]] : []);
      },
      end : function() {
        return this.prevObject || this.constructor();
      },
      push : push,
      sort : arr.sort,
      splice : arr.splice
    };
    jQuery.extend = jQuery.fn.extend = function() {
      var options;
      var name;
      var value;
      var copy;
      var copyIsArray;
      var clone;
      var target = arguments[0] || {};
      var i = 1;
      var l = arguments.length;
      var deep = false;
      if ("boolean" == typeof target) {
        deep = target;
        target = arguments[i] || {};
        i++;
      }
      if (!("object" == typeof target || fn(target))) {
        target = {};
      }
      if (i === l) {
        target = this;
        i--;
      }
      for (; i < l; i++) {
        if (null != (options = arguments[i])) {
          for (name in options) {
            copy = options[name];
            if ("__proto__" !== name && target !== copy) {
              if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                value = target[name];
                clone = copyIsArray && !Array.isArray(value) ? [] : copyIsArray || jQuery.isPlainObject(value) ? value : {};
                copyIsArray = false;
                target[name] = jQuery.extend(deep, clone, copy);
              } else {
                if (void 0 !== copy) {
                  target[name] = copy;
                }
              }
            }
          }
        }
      }
      return target;
    };
    jQuery.extend({
      expando : "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
      isReady : true,
      error : function(name) {
        throw new Error(name);
      },
      noop : function() {
      },
      isPlainObject : function(obj) {
        var proto;
        var hasOwnProperty;
        return !(!obj || "[object Object]" !== toString.call(obj)) && (!(proto = getProto(obj)) || "function" == typeof(hasOwnProperty = hasOwn.call(proto, "constructor") && proto.constructor) && fnToString.call(hasOwnProperty) === Mixin2);
      },
      isEmptyObject : function(obj) {
        var key;
        for (key in obj) {
          return false;
        }
        return true;
      },
      globalEval : function(url, data) {
        test(url, {
          nonce : data && data.nonce
        });
      },
      each : function(data, fn) {
        var i;
        var n = 0;
        if (isArrayLike(data)) {
          i = data.length;
          for (; n < i && false !== fn.call(data[n], n, data[n]); n++) {
          }
        } else {
          for (n in data) {
            if (false === fn.call(data[n], n, data[n])) {
              break;
            }
          }
        }
        return data;
      },
      trim : function(text) {
        return null == text ? "" : (text + "").replace(tokensRegExp, "");
      },
      makeArray : function(arr, o) {
        var obj = o || [];
        return null != arr && (isArrayLike(Object(arr)) ? jQuery.merge(obj, "string" == typeof arr ? [arr] : arr) : push.call(obj, arr)), obj;
      },
      inArray : function(elem, arr, i) {
        return null == arr ? -1 : indexOf.call(arr, elem, i);
      },
      merge : function(data, set) {
        var _jlen = +set.length;
        var j = 0;
        var index = data.length;
        for (; j < _jlen; j++) {
          data[index++] = set[j];
        }
        return data.length = index, data;
      },
      grep : function(elements, callback, a) {
        var ret = [];
        var i = 0;
        var eL = elements.length;
        var booA = !a;
        for (; i < eL; i++) {
          if (!callback(elements[i], i) !== booA) {
            ret.push(elements[i]);
          }
        }
        return ret;
      },
      map : function(name, fn, key) {
        var ref2;
        var r;
        var k = 0;
        var i = [];
        if (isArrayLike(name)) {
          ref2 = name.length;
          for (; k < ref2; k++) {
            if (null != (r = fn(name[k], k, key))) {
              i.push(r);
            }
          }
        } else {
          for (k in name) {
            if (null != (r = fn(name[k], k, key))) {
              i.push(r);
            }
          }
        }
        return c.apply([], i);
      },
      guid : 1,
      support : support
    });
    if ("function" == typeof Symbol) {
      jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
    }
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(canCreateDiscussions, p_Interval) {
      class2type["[object " + p_Interval + "]"] = p_Interval.toLowerCase();
    });
    var Sizzle = function(window) {
      function Sizzle(selector, context, results, seed) {
        var m;
        var i;
        var elem;
        var nid;
        var match;
        var groups;
        var newSelector;
        var newContext = context && context.ownerDocument;
        var undefined = context ? context.nodeType : 9;
        if (results = results || [], "string" != typeof selector || !selector || 1 !== undefined && 9 !== undefined && 11 !== undefined) {
          return results;
        }
        if (!seed && ((context ? context.ownerDocument || context : preferredDoc) !== document && setDocument(context), context = context || document, documentIsHTML)) {
          if (11 !== undefined && (match = customSelectorReg.exec(selector))) {
            if (m = match[1]) {
              if (9 === undefined) {
                if (!(elem = context.getElementById(m))) {
                  return results;
                }
                if (elem.id === m) {
                  return results.push(elem), results;
                }
              } else {
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  return results.push(elem), results;
                }
              }
            } else {
              if (match[2]) {
                return push.apply(results, context.getElementsByTagName(selector)), results;
              }
              if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                return push.apply(results, context.getElementsByClassName(m)), results;
              }
            }
          }
          if (support.qsa && !$[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (1 !== undefined || "object" !== context.nodeName.toLowerCase())) {
            if (newSelector = selector, newContext = context, 1 === undefined && RE_PSEUDOS.test(selector)) {
              if (nid = context.getAttribute("id")) {
                nid = nid.replace(rescape, fcssescape);
              } else {
                context.setAttribute("id", nid = expando);
              }
              i = (groups = tokenize(selector)).length;
              for (; i--;) {
                groups[i] = "#" + nid + " " + toSelector(groups[i]);
              }
              newSelector = groups.join(",");
              newContext = IS_HTML_FRAGMENT.test(selector) && testContext(context.parentNode) || context;
            }
            try {
              return push.apply(results, newContext.querySelectorAll(newSelector)), results;
            } catch (t) {
              $(selector, true);
            } finally {
              if (nid === expando) {
                context.removeAttribute("id");
              }
            }
          }
        }
        return select(selector.replace(rtrim, "$1"), context, results, seed);
      }
      function createCache() {
        var messages = [];
        return function cache(attr, fn) {
          return messages.push(attr + " ") > Expr.cacheLength && delete cache[messages.shift()], cache[attr + " "] = fn;
        };
      }
      function markFunction(fn) {
        return fn[expando] = true, fn;
      }
      function assert(expect) {
        var wrap = document.createElement("fieldset");
        try {
          return !!expect(wrap);
        } catch (e) {
          return false;
        } finally {
          if (wrap.parentNode) {
            wrap.parentNode.removeChild(wrap);
          }
          wrap = null;
        }
      }
      function addHandle(attrs, handler) {
        var arr = attrs.split("|");
        var i = arr.length;
        for (; i--;) {
          Expr.attrHandle[arr[i]] = handler;
        }
      }
      function siblingCheck(a, b) {
        var cur = b && a;
        var .num_const = cur && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
        if (.num_const) {
          return .num_const;
        }
        if (cur) {
          for (; cur = cur.nextSibling;) {
            if (cur === b) {
              return -1;
            }
          }
        }
        return a ? 1 : -1;
      }
      function jQuerify(browser) {
        return function(elem) {
          return "input" === elem.nodeName.toLowerCase() && elem.type === browser;
        };
      }
      function createButtonPseudo(type) {
        return function(section) {
          var undefined = section.nodeName.toLowerCase();
          return ("input" === undefined || "button" === undefined) && section.type === type;
        };
      }
      function createDisabledPseudo(disabled) {
        return function(elem) {
          return "form" in elem ? elem.parentNode && false === elem.disabled ? "label" in elem ? "label" in elem.parentNode ? elem.parentNode.disabled === disabled : elem.disabled === disabled : elem.isDisabled === disabled || elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled : elem.disabled === disabled : "label" in elem && elem.disabled === disabled;
        };
      }
      function createPositionalPseudo(fn) {
        return markFunction(function(key) {
          return key = +key, markFunction(function(a, b) {
            var i;
            var k = fn([], a.length, key);
            var l = k.length;
            for (; l--;) {
              if (a[i = k[l]]) {
                a[i] = !(b[i] = a[i]);
              }
            }
          });
        });
      }
      function testContext(context) {
        return context && void 0 !== context.getElementsByTagName && context;
      }
      function setFilters() {
      }
      function toSelector(tokens) {
        var i = 0;
        var numTokens = tokens.length;
        var selector = "";
        for (; i < numTokens; i++) {
          selector = selector + tokens[i].value;
        }
        return selector;
      }
      function addCombinator(matcher, combinator, base) {
        var dir = combinator.dir;
        var skip = combinator.next;
        var key = skip || dir;
        var checkNonElements = base && "parentNode" === key;
        var doneName = done++;
        return combinator.first ? function(elem, stat, context) {
          for (; elem = elem[dir];) {
            if (1 === elem.nodeType || checkNonElements) {
              return matcher(elem, stat, context);
            }
          }
          return false;
        } : function(elem, context, xml) {
          var oldCache;
          var uniqueCache;
          var outerCache;
          var newCache = [dirruns, doneName];
          if (xml) {
            for (; elem = elem[dir];) {
              if ((1 === elem.nodeType || checkNonElements) && matcher(elem, context, xml)) {
                return true;
              }
            }
          } else {
            for (; elem = elem[dir];) {
              if (1 === elem.nodeType || checkNonElements) {
                if (uniqueCache = (outerCache = elem[expando] || (elem[expando] = {}))[elem.uniqueID] || (outerCache[elem.uniqueID] = {}), skip && skip === elem.nodeName.toLowerCase()) {
                  elem = elem[dir] || elem;
                } else {
                  if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                    return newCache[2] = oldCache[2];
                  }
                  if (uniqueCache[key] = newCache, newCache[2] = matcher(elem, context, xml)) {
                    return true;
                  }
                }
              }
            }
          }
          return false;
        };
      }
      function elementMatcher(matchers) {
        return matchers.length > 1 ? function(elem, context, xml) {
          var i = matchers.length;
          for (; i--;) {
            if (!matchers[i](elem, context, xml)) {
              return false;
            }
          }
          return true;
        } : matchers[0];
      }
      function condense(unmatched, map, filter, name, options) {
        var elem;
        var newUnmatched = [];
        var i = 0;
        var len = unmatched.length;
        var c = null != map;
        for (; i < len; i++) {
          if (elem = unmatched[i]) {
            if (!(filter && !filter(elem, name, options))) {
              newUnmatched.push(elem);
              if (c) {
                map.push(i);
              }
            }
          }
        }
        return newUnmatched;
      }
      function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
        return postFilter && !postFilter[expando] && (postFilter = setMatcher(postFilter)), postFinder && !postFinder[expando] && (postFinder = setMatcher(postFinder, postSelector)), markFunction(function(seed, results, context, xml) {
          var temp;
          var i;
          var elem;
          var preMap = [];
          var postMap = [];
          var preexisting = results.length;
          var elems = seed || function(selector, set, results) {
            var i = 0;
            var l = set.length;
            for (; i < l; i++) {
              Sizzle(selector, set[i], results);
            }
            return results;
          }(selector || "*", context.nodeType ? [context] : context, []);
          var matcherIn = !preFilter || !seed && selector ? elems : condense(elems, preMap, preFilter, context, xml);
          var matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
          if (matcher && matcher(matcherIn, matcherOut, context, xml), postFilter) {
            temp = condense(matcherOut, postMap);
            postFilter(temp, [], context, xml);
            i = temp.length;
            for (; i--;) {
              if (elem = temp[i]) {
                matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
              }
            }
          }
          if (seed) {
            if (postFinder || preFilter) {
              if (postFinder) {
                temp = [];
                i = matcherOut.length;
                for (; i--;) {
                  if (elem = matcherOut[i]) {
                    temp.push(matcherIn[i] = elem);
                  }
                }
                postFinder(null, matcherOut = [], temp, xml);
              }
              i = matcherOut.length;
              for (; i--;) {
                if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                  seed[temp] = !(results[temp] = elem);
                }
              }
            }
          } else {
            matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
            if (postFinder) {
              postFinder(null, results, matcherOut, xml);
            } else {
              push.apply(results, matcherOut);
            }
          }
        });
      }
      function matcherFromTokens(tokens) {
        var checkContext;
        var matcher;
        var j;
        var len = tokens.length;
        var leadingRelative = Expr.relative[tokens[0].type];
        var implicitRelative = leadingRelative || Expr.relative[" "];
        var i = leadingRelative ? 1 : 0;
        var matchContext = addCombinator(function(elem) {
          return elem === checkContext;
        }, implicitRelative, true);
        var matchAnyContext = addCombinator(function(value) {
          return indexOf(checkContext, value) > -1;
        }, implicitRelative, true);
        var matchers = [function(elem, context, xml) {
          var i = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
          return checkContext = null, i;
        }];
        for (; i < len; i++) {
          if (matcher = Expr.relative[tokens[i].type]) {
            matchers = [addCombinator(elementMatcher(matchers), matcher)];
          } else {
            if ((matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches))[expando]) {
              j = ++i;
              for (; j < len && !Expr.relative[tokens[j].type]; j++) {
              }
              return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                value : " " === tokens[i - 2].type ? "*" : ""
              })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
            }
            matchers.push(matcher);
          }
        }
        return elementMatcher(matchers);
      }
      var i;
      var support;
      var Expr;
      var attr;
      var isXML;
      var tokenize;
      var compile;
      var select;
      var outermostContext;
      var sortInput;
      var ret;
      var setDocument;
      var document;
      var element;
      var documentIsHTML;
      var rbuggyQSA;
      var rbuggyMatches;
      var matches;
      var contains;
      var expando = "sizzle" + 1 * new Date;
      var preferredDoc = window.document;
      var dirruns = 0;
      var done = 0;
      var classCache = createCache();
      var tokenCache = createCache();
      var compilerCache = createCache();
      var $ = createCache();
      var time = function(type, string) {
        return type === string && (ret = true), 0;
      };
      var hasOwn = {}.hasOwnProperty;
      var arr = [];
      var pop = arr.pop;
      var push_native = arr.push;
      var push = arr.push;
      var slice = arr.slice;
      var indexOf = function(list, value) {
        var i = 0;
        var listLength = list.length;
        for (; i < listLength; i++) {
          if (list[i] === value) {
            return i;
          }
        }
        return -1;
      };
      var value = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
      var _test = "[\\x20\\t\\r\\n\\f]";
      var escRightBracket = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+";
      var _end2 = "\\[" + _test + "*(" + escRightBracket + ")(?:" + _test + "*([*^$|!~]?=)" + _test + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + escRightBracket + "))|)" + _test + "*\\]";
      var pseudos = ":(" + escRightBracket + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + _end2 + ")*)|.*)\\)|)";
      var regex_delimiters = new RegExp(_test + "+", "g");
      var rtrim = new RegExp("^" + _test + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _test + "+$", "g");
      var chunker = new RegExp("^" + _test + "*," + _test + "*");
      var rcomma = new RegExp("^" + _test + "*([>+~]|" + _test + ")" + _test + "*");
      var RE_PSEUDOS = new RegExp(_test + "|>");
      var rpseudo = new RegExp(pseudos);
      var ridentifier = new RegExp("^" + escRightBracket + "$");
      var matchExpr = {
        ID : new RegExp("^#(" + escRightBracket + ")"),
        CLASS : new RegExp("^\\.(" + escRightBracket + ")"),
        TAG : new RegExp("^(" + escRightBracket + "|[*])"),
        ATTR : new RegExp("^" + _end2),
        PSEUDO : new RegExp("^" + pseudos),
        CHILD : new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _test + "*(even|odd|(([+-]|)(\\d*)n|)" + _test + "*(?:([+-]|)" + _test + "*(\\d+)|))" + _test + "*\\)|)", "i"),
        bool : new RegExp("^(?:" + value + ")$", "i"),
        needsContext : new RegExp("^" + _test + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _test + "*((?:-\\d)?\\d*)" + _test + "*\\)|)(?=[^-]|$)", "i")
      };
      var reKeyword = /HTML$/i;
      var inputNodeNames = /^(?:input|select|textarea|button)$/i;
      var rnoType = /^h\d$/i;
      var rnative = /^[^{]+\{\s*\[native \w/;
      var customSelectorReg = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
      var IS_HTML_FRAGMENT = /[+~]/;
      var a = new RegExp("\\\\([\\da-f]{1,6}" + _test + "?|(" + _test + ")|.)", "ig");
      var key = function(type, def, allowMulti) {
        var c = "0x" + def - 65536;
        return c != c || allowMulti ? def : c < 0 ? String.fromCharCode(c + 65536) : String.fromCharCode(c >> 10 | 55296, 1023 & c | 56320);
      };
      var rescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g;
      var fcssescape = function(ch, asCodePoint) {
        return asCodePoint ? "\x00" === ch ? "\ufffd" : ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " " : "\\" + ch;
      };
      var unloadHandler = function() {
        setDocument();
      };
      var disabledAncestor = addCombinator(function(e) {
        return true === e.disabled && "fieldset" === e.nodeName.toLowerCase();
      }, {
        dir : "parentNode",
        next : "legend"
      });
      try {
        push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
        arr[preferredDoc.childNodes.length].nodeType;
      } catch (e) {
        push = {
          apply : arr.length ? function(target, obj) {
            push_native.apply(target, slice.call(obj));
          } : function(obj, c) {
            var i = obj.length;
            var xp = 0;
            for (; obj[i++] = c[xp++];) {
            }
            obj.length = i - 1;
          }
        };
      }
      for (i in support = Sizzle.support = {}, isXML = Sizzle.isXML = function(elem) {
        var nodeName = elem.namespaceURI;
        var xmlNode = (elem.ownerDocument || elem).documentElement;
        return !reKeyword.test(nodeName || xmlNode && xmlNode.nodeName || "HTML");
      }, setDocument = Sizzle.setDocument = function(node) {
        var init;
        var subWindow;
        var doc = node ? node.ownerDocument || node : preferredDoc;
        return doc !== document && 9 === doc.nodeType && doc.documentElement ? (element = (document = doc).documentElement, documentIsHTML = !isXML(document), preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow && (subWindow.addEventListener ? subWindow.addEventListener("unload", unloadHandler, false) : subWindow.attachEvent && subWindow.attachEvent("onunload", unloadHandler)), support.attributes = assert(function(elm) {
          return elm.className = "i", !elm.getAttribute("className");
        }), support.getElementsByTagName = assert(function(testee) {
          return testee.appendChild(document.createComment("")), !testee.getElementsByTagName("*").length;
        }), support.getElementsByClassName = rnative.test(document.getElementsByClassName), support.getById = assert(function(fields) {
          return element.appendChild(fields).id = expando, !document.getElementsByName || !document.getElementsByName(expando).length;
        }), support.getById ? (Expr.filter.ID = function(elem) {
          var name = elem.replace(a, key);
          return function(e) {
            return e.getAttribute("id") === name;
          };
        }, Expr.find.ID = function(elem, context) {
          if (void 0 !== context.getElementById && documentIsHTML) {
            var c_style = context.getElementById(elem);
            return c_style ? [c_style] : [];
          }
        }) : (Expr.filter.ID = function(elem) {
          var name = elem.replace(a, key);
          return function(elem) {
            var a = void 0 !== elem.getAttributeNode && elem.getAttributeNode("id");
            return a && a.value === name;
          };
        }, Expr.find.ID = function(value, context) {
          if (void 0 !== context.getElementById && documentIsHTML) {
            var attr;
            var r;
            var ret;
            var tmp = context.getElementById(value);
            if (tmp) {
              if ((attr = tmp.getAttributeNode("id")) && attr.value === value) {
                return [tmp];
              }
              ret = context.getElementsByName(value);
              r = 0;
              for (; tmp = ret[r++];) {
                if ((attr = tmp.getAttributeNode("id")) && attr.value === value) {
                  return [tmp];
                }
              }
            }
            return [];
          }
        }), Expr.find.TAG = support.getElementsByTagName ? function(v, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(v) : support.qsa ? t.querySelectorAll(v) : void 0;
        } : function(selector, document) {
          var first;
          var tmp = [];
          var i = 0;
          var results = document.getElementsByTagName(selector);
          if ("*" === selector) {
            for (; first = results[i++];) {
              if (1 === first.nodeType) {
                tmp.push(first);
              }
            }
            return tmp;
          }
          return results;
        }, Expr.find.CLASS = support.getElementsByClassName && function(m, docDom) {
          if (void 0 !== docDom.getElementsByClassName && documentIsHTML) {
            return docDom.getElementsByClassName(m);
          }
        }, rbuggyMatches = [], rbuggyQSA = [], (support.qsa = rnative.test(document.querySelectorAll)) && (assert(function(frag) {
          element.appendChild(frag).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
          if (frag.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + _test + "*(?:''|\"\")");
          }
          if (!frag.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + _test + "*(?:value|" + value + ")");
          }
          if (!frag.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          }
          if (!frag.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          }
          if (!frag.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          }
        }), assert(function(el) {
          el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          el.appendChild(input).setAttribute("name", "D");
          if (el.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + _test + "*[*^$|!~]?=");
          }
          if (2 !== el.querySelectorAll(":enabled").length) {
            rbuggyQSA.push(":enabled", ":disabled");
          }
          element.appendChild(el).disabled = true;
          if (2 !== el.querySelectorAll(":disabled").length) {
            rbuggyQSA.push(":enabled", ":disabled");
          }
          el.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        })), (support.matchesSelector = rnative.test(matches = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.msMatchesSelector)) && assert(function(el) {
          support.disconnectedMatch = matches.call(el, "*");
          matches.call(el, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), init = rnative.test(element.compareDocumentPosition), contains = init || rnative.test(element.contains) ? function(a, n) {
          var name = 9 === a.nodeType ? a.documentElement : a;
          var b = n && n.parentNode;
          return a === b || !(!b || 1 !== b.nodeType || !(name.contains ? name.contains(b) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(b)));
        } : function(selector, elem) {
          if (elem) {
            for (; elem = elem.parentNode;) {
              if (elem === selector) {
                return true;
              }
            }
          }
          return false;
        }, time = init ? function(a, b) {
          if (a === b) {
            return ret = true, 0;
          }
          var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
          return compare || (1 & (compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1) || !support.sortDetached && b.compareDocumentPosition(a) === compare ? a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ? -1 : b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0 : 4 & compare ? -1 : 1);
        } : function(a, b) {
          if (a === b) {
            return ret = true, 0;
          }
          var cur;
          var i = 0;
          var aup = a.parentNode;
          var bup = b.parentNode;
          var ap = [a];
          var bp = [b];
          if (!aup || !bup) {
            return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
          }
          if (aup === bup) {
            return siblingCheck(a, b);
          }
          cur = a;
          for (; cur = cur.parentNode;) {
            ap.unshift(cur);
          }
          cur = b;
          for (; cur = cur.parentNode;) {
            bp.unshift(cur);
          }
          for (; ap[i] === bp[i];) {
            i++;
          }
          return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
        }, document) : document;
      }, Sizzle.matches = function(expr, set) {
        return Sizzle(expr, null, null, set);
      }, Sizzle.matchesSelector = function(elem, expr) {
        if ((elem.ownerDocument || elem) !== document && setDocument(elem), support.matchesSelector && documentIsHTML && !$[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
          try {
            var ret = matches.call(elem, expr);
            if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) {
              return ret;
            }
          } catch (e) {
            $(expr, true);
          }
        }
        return Sizzle(expr, document, null, [elem]).length > 0;
      }, Sizzle.contains = function(elem, value) {
        return (elem.ownerDocument || elem) !== document && setDocument(elem), contains(elem, value);
      }, Sizzle.attr = function(elem, name) {
        if ((elem.ownerDocument || elem) !== document) {
          setDocument(elem);
        }
        var fn = Expr.attrHandle[name.toLowerCase()];
        var val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
        return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
      }, Sizzle.escape = function(text) {
        return (text + "").replace(rescape, fcssescape);
      }, Sizzle.error = function(name) {
        throw new Error("Syntax error, unrecognized expression: " + name);
      }, Sizzle.uniqueSort = function(arr) {
        var v;
        var indices = [];
        var i = 0;
        var j = 0;
        if (ret = !support.detectDuplicates, sortInput = !support.sortStable && arr.slice(0), arr.sort(time), ret) {
          for (; v = arr[j++];) {
            if (v === arr[j]) {
              i = indices.push(j);
            }
          }
          for (; i--;) {
            arr.splice(indices[i], 1);
          }
        }
        return sortInput = null, arr;
      }, attr = Sizzle.getText = function(node) {
        var child;
        var str = "";
        var count = 0;
        var type = node.nodeType;
        if (type) {
          if (1 === type || 9 === type || 11 === type) {
            if ("string" == typeof node.textContent) {
              return node.textContent;
            }
            node = node.firstChild;
            for (; node; node = node.nextSibling) {
              str = str + attr(node);
            }
          } else {
            if (3 === type || 4 === type) {
              return node.nodeValue;
            }
          }
        } else {
          for (; child = node[count++];) {
            str = str + attr(child);
          }
        }
        return str;
      }, (Expr = Sizzle.selectors = {
        cacheLength : 50,
        createPseudo : markFunction,
        match : matchExpr,
        attrHandle : {},
        find : {},
        relative : {
          ">" : {
            dir : "parentNode",
            first : true
          },
          " " : {
            dir : "parentNode"
          },
          "+" : {
            dir : "previousSibling",
            first : true
          },
          "~" : {
            dir : "previousSibling"
          }
        },
        preFilter : {
          ATTR : function(result) {
            return result[1] = result[1].replace(a, key), result[3] = (result[3] || result[4] || result[5] || "").replace(a, key), "~=" === result[2] && (result[3] = " " + result[3] + " "), result.slice(0, 4);
          },
          CHILD : function(match) {
            return match[1] = match[1].toLowerCase(), "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]), match;
          },
          PSEUDO : function(match) {
            var excess;
            var unquoted = !match[6] && match[2];
            return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), match[2] = unquoted.slice(0, excess)), match.slice(0, 3));
          }
        },
        filter : {
          TAG : function(elem) {
            var nodeName = elem.replace(a, key).toLowerCase();
            return "*" === elem ? function() {
              return true;
            } : function(elem) {
              return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
            };
          },
          CLASS : function(className) {
            var pattern = classCache[className + " "];
            return pattern || (pattern = new RegExp("(^|" + _test + ")" + className + "(" + _test + "|$)")) && classCache(className, function(e) {
              return pattern.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
            });
          },
          ATTR : function(name, string, value) {
            return function(input) {
              var key = Sizzle.attr(input, name);
              return null == key ? "!=" === string : !string || (key = key + "", "=" === string ? key === value : "!=" === string ? key !== value : "^=" === string ? value && 0 === key.indexOf(value) : "*=" === string ? value && key.indexOf(value) > -1 : "$=" === string ? value && key.slice(-value.length) === value : "~=" === string ? (" " + key.replace(regex_delimiters, " ") + " ").indexOf(value) > -1 : "|=" === string && (key === value || key.slice(0, value.length + 1) === value + "-"));
            };
          },
          CHILD : function(type, what, argument, first, last) {
            var simple = "nth" !== type.slice(0, 3);
            var forward = "last" !== type.slice(-4);
            var isStrict = "of-type" === what;
            return 1 === first && 0 === last ? function(tplDiv) {
              return !!tplDiv.parentNode;
            } : function(elem, n, isParentStrict) {
              var cache;
              var uniqueCache;
              var outerCache;
              var node;
              var nodeIndex;
              var start;
              var dir = simple !== forward ? "nextSibling" : "previousSibling";
              var parent = elem.parentNode;
              var iteratedVal = isStrict && elem.nodeName.toLowerCase();
              var dependency = !isParentStrict && !isStrict;
              var diff = false;
              if (parent) {
                if (simple) {
                  for (; dir;) {
                    node = elem;
                    for (; node = node[dir];) {
                      if (isStrict ? node.nodeName.toLowerCase() === iteratedVal : 1 === node.nodeType) {
                        return false;
                      }
                    }
                    start = dir = "only" === type && !start && "nextSibling";
                  }
                  return true;
                }
                if (start = [forward ? parent.firstChild : parent.lastChild], forward && dependency) {
                  diff = (nodeIndex = (cache = (uniqueCache = (outerCache = (node = parent)[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] || [])[0] === dirruns && cache[1]) && cache[2];
                  node = nodeIndex && parent.childNodes[nodeIndex];
                  for (; node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop();) {
                    if (1 === node.nodeType && ++diff && node === elem) {
                      uniqueCache[type] = [dirruns, nodeIndex, diff];
                      break;
                    }
                  }
                } else {
                  if (dependency && (diff = nodeIndex = (cache = (uniqueCache = (outerCache = (node = elem)[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] || [])[0] === dirruns && cache[1]), false === diff) {
                    for (; (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) && ((isStrict ? node.nodeName.toLowerCase() !== iteratedVal : 1 !== node.nodeType) || !++diff || (dependency && ((uniqueCache = (outerCache = node[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] = [dirruns, diff]), node !== elem));) {
                    }
                  }
                }
                return (diff = diff - last) === first || diff % first == 0 && diff / first >= 0;
              }
            };
          },
          PSEUDO : function(pseudo, argument) {
            var args;
            var fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
            return fn[expando] ? fn(argument) : fn.length > 1 ? (args = [pseudo, pseudo, "", argument], Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, result) {
              var j;
              var matched = fn(seed, argument);
              var i = matched.length;
              for (; i--;) {
                seed[j = indexOf(seed, matched[i])] = !(result[j] = matched[i]);
              }
            }) : function(responce) {
              return fn(responce, 0, args);
            }) : fn;
          }
        },
        pseudos : {
          not : markFunction(function(selector) {
            var a = [];
            var results = [];
            var matcher = compile(selector.replace(rtrim, "$1"));
            return matcher[expando] ? markFunction(function(a, queue, n, context) {
              var bundle;
              var result = matcher(a, null, context, []);
              var i = a.length;
              for (; i--;) {
                if (bundle = result[i]) {
                  a[i] = !(queue[i] = bundle);
                }
              }
            }) : function(sNewObjName, i, context) {
              return a[0] = sNewObjName, matcher(a, null, context, results), a[0] = null, !results.pop();
            };
          }),
          has : markFunction(function(selector) {
            return function(elem) {
              return Sizzle(selector, elem).length > 0;
            };
          }),
          contains : markFunction(function(s) {
            return s = s.replace(a, key), function(element) {
              return (element.textContent || attr(element)).indexOf(s) > -1;
            };
          }),
          lang : markFunction(function(lang) {
            return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), lang = lang.replace(a, key).toLowerCase(), function(elem) {
              var elemLang;
              do {
                if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                  return (elemLang = elemLang.toLowerCase()) === lang || 0 === elemLang.indexOf(lang + "-");
                }
              } while ((elem = elem.parentNode) && 1 === elem.nodeType);
              return false;
            };
          }),
          target : function(name) {
            var charListNotLatin = window.location && window.location.hash;
            return charListNotLatin && charListNotLatin.slice(1) === name.id;
          },
          root : function(result) {
            return result === element;
          },
          focus : function(elem) {
            return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
          },
          enabled : createDisabledPseudo(false),
          disabled : createDisabledPseudo(true),
          checked : function(elem) {
            var custom = elem.nodeName.toLowerCase();
            return "input" === custom && !!elem.checked || "option" === custom && !!elem.selected;
          },
          selected : function(elem) {
            return elem.parentNode && elem.parentNode.selectedIndex, true === elem.selected;
          },
          empty : function(elem) {
            elem = elem.firstChild;
            for (; elem; elem = elem.nextSibling) {
              if (elem.nodeType < 6) {
                return false;
              }
            }
            return true;
          },
          parent : function(name) {
            return !Expr.pseudos.empty(name);
          },
          header : function(elem) {
            return rnoType.test(elem.nodeName);
          },
          input : function(target) {
            return inputNodeNames.test(target.nodeName);
          },
          button : function(elem) {
            var left = elem.nodeName.toLowerCase();
            return "input" === left && "button" === elem.type || "button" === left;
          },
          text : function(elem) {
            var EXT;
            return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (EXT = elem.getAttribute("type")) || "text" === EXT.toLowerCase());
          },
          first : createPositionalPseudo(function() {
            return [0];
          }),
          last : createPositionalPseudo(function(canCreateDiscussions, isSlidingUp) {
            return [isSlidingUp - 1];
          }),
          eq : createPositionalPseudo(function(canCreateDiscussions, pageHeight, srcY) {
            return [srcY < 0 ? srcY + pageHeight : srcY];
          }),
          even : createPositionalPseudo(function(lastshuffle, inclusiveMin) {
            var value = 0;
            for (; value < inclusiveMin; value = value + 2) {
              lastshuffle.push(value);
            }
            return lastshuffle;
          }),
          odd : createPositionalPseudo(function(lastshuffle, inclusiveMin) {
            var value = 1;
            for (; value < inclusiveMin; value = value + 2) {
              lastshuffle.push(value);
            }
            return lastshuffle;
          }),
          lt : createPositionalPseudo(function(newNodeLists, max, value) {
            var itemNodeList = value < 0 ? value + max : value > max ? max : value;
            for (; --itemNodeList >= 0;) {
              newNodeLists.push(itemNodeList);
            }
            return newNodeLists;
          }),
          gt : createPositionalPseudo(function(newNodeLists, pageHeight, srcY) {
            var itemNodeList = srcY < 0 ? srcY + pageHeight : srcY;
            for (; ++itemNodeList < pageHeight;) {
              newNodeLists.push(itemNodeList);
            }
            return newNodeLists;
          })
        }
      }).pseudos.nth = Expr.pseudos.eq, {
        radio : true,
        checkbox : true,
        file : true,
        password : true,
        image : true
      }) {
        Expr.pseudos[i] = jQuerify(i);
      }
      for (i in{
        submit : true,
        reset : true
      }) {
        Expr.pseudos[i] = createButtonPseudo(i);
      }
      return setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters, tokenize = Sizzle.tokenize = function(selector, parseOnly) {
        var matched;
        var match;
        var tokens;
        var type;
        var soFar;
        var groups;
        var preFilters;
        var cached = tokenCache[selector + " "];
        if (cached) {
          return parseOnly ? 0 : cached.slice(0);
        }
        soFar = selector;
        groups = [];
        preFilters = Expr.preFilter;
        for (; soFar;) {
          for (type in matched && !(match = chunker.exec(soFar)) || (match && (soFar = soFar.slice(match[0].length) || soFar), groups.push(tokens = [])), matched = false, (match = rcomma.exec(soFar)) && (matched = match.shift(), tokens.push({
            value : matched,
            type : match[0].replace(rtrim, " ")
          }), soFar = soFar.slice(matched.length)), Expr.filter) {
            if (!(!(match = matchExpr[type].exec(soFar)) || preFilters[type] && !(match = preFilters[type](match)))) {
              matched = match.shift();
              tokens.push({
                value : matched,
                type : type,
                matches : match
              });
              soFar = soFar.slice(matched.length);
            }
          }
          if (!matched) {
            break;
          }
        }
        return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
      }, compile = Sizzle.compile = function(selector, group) {
        var i;
        var setMatchers = [];
        var elementMatchers = [];
        var cached = compilerCache[selector + " "];
        if (!cached) {
          if (!group) {
            group = tokenize(selector);
          }
          i = group.length;
          for (; i--;) {
            if ((cached = matcherFromTokens(group[i]))[expando]) {
              setMatchers.push(cached);
            } else {
              elementMatchers.push(cached);
            }
          }
          (cached = compilerCache(selector, function(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0;
            var byElement = elementMatchers.length > 0;
            var superMatcher = function(seed, context, xml, results, outermost) {
              var elem;
              var j;
              var matcher;
              var matchedCount = 0;
              var i = "0";
              var unmatched = seed && [];
              var setMatched = [];
              var contextBackup = outermostContext;
              var elems = seed || byElement && Expr.find.TAG("*", outermost);
              var dirrunsUnique = dirruns = dirruns + (null == contextBackup ? 1 : Math.random() || .1);
              var length = elems.length;
              if (outermost) {
                outermostContext = context === document || context || outermost;
              }
              for (; i !== length && null != (elem = elems[i]); i++) {
                if (byElement && elem) {
                  j = 0;
                  if (!(context || elem.ownerDocument === document)) {
                    setDocument(elem);
                    xml = !documentIsHTML;
                  }
                  for (; matcher = elementMatchers[j++];) {
                    if (matcher(elem, context || document, xml)) {
                      results.push(elem);
                      break;
                    }
                  }
                  if (outermost) {
                    dirruns = dirrunsUnique;
                  }
                }
                if (bySet) {
                  if (elem = !matcher && elem) {
                    matchedCount--;
                  }
                  if (seed) {
                    unmatched.push(elem);
                  }
                }
              }
              if (matchedCount = matchedCount + i, bySet && i !== matchedCount) {
                j = 0;
                for (; matcher = setMatchers[j++];) {
                  matcher(unmatched, setMatched, context, xml);
                }
                if (seed) {
                  if (matchedCount > 0) {
                    for (; i--;) {
                      if (!(unmatched[i] || setMatched[i])) {
                        setMatched[i] = pop.call(results);
                      }
                    }
                  }
                  setMatched = condense(setMatched);
                }
                push.apply(results, setMatched);
                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                  Sizzle.uniqueSort(results);
                }
              }
              return outermost && (dirruns = dirrunsUnique, outermostContext = contextBackup), unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
          }(elementMatchers, setMatchers))).selector = selector;
        }
        return cached;
      }, select = Sizzle.select = function(selector, context, result, value) {
        var i;
        var tokens;
        var token;
        var type;
        var fn;
        var compiled = "function" == typeof selector && selector;
        var match = !value && tokenize(selector = compiled.selector || selector);
        if (result = result || [], 1 === match.length) {
          if ((tokens = match[0] = match[0].slice(0)).length > 2 && "ID" === (token = tokens[0]).type && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
            if (!(context = (Expr.find.ID(token.matches[0].replace(a, key), context) || [])[0])) {
              return result;
            }
            if (compiled) {
              context = context.parentNode;
            }
            selector = selector.slice(tokens.shift().value.length);
          }
          i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
          for (; i-- && (token = tokens[i], !Expr.relative[type = token.type]);) {
            if ((fn = Expr.find[type]) && (value = fn(token.matches[0].replace(a, key), IS_HTML_FRAGMENT.test(tokens[0].type) && testContext(context.parentNode) || context))) {
              if (tokens.splice(i, 1), !(selector = value.length && toSelector(tokens))) {
                return push.apply(result, value), result;
              }
              break;
            }
          }
        }
        return (compiled || compile(selector, match))(value, context, !documentIsHTML, result, !context || IS_HTML_FRAGMENT.test(selector) && testContext(context.parentNode) || context), result;
      }, support.sortStable = expando.split("").sort(time).join("") === expando, support.detectDuplicates = !!ret, setDocument(), support.sortDetached = assert(function(html) {
        return 1 & html.compareDocumentPosition(document.createElement("fieldset"));
      }), assert(function(aItem) {
        return aItem.innerHTML = "<a href='#'></a>", "#" === aItem.firstChild.getAttribute("href");
      }) || addHandle("type|href|height|width", function(e, t, n) {
        if (!n) {
          return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }
      }), support.attributes && assert(function(aItem) {
        return aItem.innerHTML = "<input/>", aItem.firstChild.setAttribute("value", ""), "" === aItem.firstChild.getAttribute("value");
      }) || addHandle("value", function(src, canCreateDiscussions, n) {
        if (!n && "input" === src.nodeName.toLowerCase()) {
          return src.defaultValue;
        }
      }), assert(function(e) {
        return null == e.getAttribute("disabled");
      }) || addHandle(value, function(elem, name, n) {
        var val;
        if (!n) {
          return true === elem[name] ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      }), Sizzle;
    }(window);
    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    jQuery.escapeSelector = Sizzle.escape;
    var dir = function(elem, dir, until) {
      var matched = [];
      var truncate = void 0 !== until;
      for (; (elem = elem[dir]) && 9 !== elem.nodeType;) {
        if (1 === elem.nodeType) {
          if (truncate && jQuery(elem).is(until)) {
            break;
          }
          matched.push(elem);
        }
      }
      return matched;
    };
    var _sibling = function(node, elem) {
      var result = [];
      for (; node; node = node.nextSibling) {
        if (1 === node.nodeType && node !== elem) {
          result.push(node);
        }
      }
      return result;
    };
    var rneedsContext = jQuery.expr.match.needsContext;
    var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    jQuery.filter = function(expr, elems, not) {
      var elem = elems[0];
      return not && (expr = ":not(" + expr + ")"), 1 === elems.length && 1 === elem.nodeType ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(nodeToInspect) {
        return 1 === nodeToInspect.nodeType;
      }));
    };
    jQuery.fn.extend({
      find : function(val) {
        var i;
        var ret;
        var len = this.length;
        var self = this;
        if ("string" != typeof val) {
          return this.pushStack(jQuery(val).filter(function() {
            i = 0;
            for (; i < len; i++) {
              if (jQuery.contains(self[i], this)) {
                return true;
              }
            }
          }));
        }
        ret = this.pushStack([]);
        i = 0;
        for (; i < len; i++) {
          jQuery.find(val, self[i], ret);
        }
        return len > 1 ? jQuery.uniqueSort(ret) : ret;
      },
      filter : function(val) {
        return this.pushStack(filter(this, val || [], false));
      },
      not : function(args) {
        return this.pushStack(filter(this, args || [], true));
      },
      is : function(arg) {
        return !!filter(this, "string" == typeof arg && rneedsContext.test(arg) ? jQuery(arg) : arg || [], false).length;
      }
    });
    var rootjQuery;
    var myVivus = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (jQuery.fn.init = function(a, context, root) {
      var match;
      var i;
      if (!a) {
        return this;
      }
      if (root = root || rootjQuery, "string" == typeof a) {
        if (!(match = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : myVivus.exec(a)) || !match[1] && context) {
          return !context || context.jquery ? (context || root).find(a) : this.constructor(context).find(a);
        }
        if (match[1]) {
          if (context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)), rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              if (fn(this[match])) {
                this[match](context[match]);
              } else {
                this.attr(match, context[match]);
              }
            }
          }
          return this;
        }
        return (i = document.getElementById(match[2])) && (this[0] = i, this.length = 1), this;
      }
      return a.nodeType ? (this[0] = a, this.length = 1, this) : fn(a) ? void 0 !== root.ready ? root.ready(a) : a(jQuery) : jQuery.makeArray(a, this);
    }).prototype = jQuery.fn;
    rootjQuery = jQuery(document);
    var hitch_re = /^(?:parents|prev(?:Until|All))/;
    var guaranteedUnique = {
      children : true,
      contents : true,
      next : true,
      prev : true
    };
    jQuery.fn.extend({
      has : function(name) {
        var targets = jQuery(name, this);
        var l = targets.length;
        return this.filter(function() {
          var i = 0;
          for (; i < l; i++) {
            if (jQuery.contains(this, targets[i])) {
              return true;
            }
          }
        });
      },
      closest : function(selector, context) {
        var node;
        var j = 0;
        var i = this.length;
        var ret = [];
        var s = "string" != typeof selector && jQuery(selector);
        if (!rneedsContext.test(selector)) {
          for (; j < i; j++) {
            node = this[j];
            for (; node && node !== context; node = node.parentNode) {
              if (node.nodeType < 11 && (s ? s.index(node) > -1 : 1 === node.nodeType && jQuery.find.matchesSelector(node, selector))) {
                ret.push(node);
                break;
              }
            }
          }
        }
        return this.pushStack(ret.length > 1 ? jQuery.uniqueSort(ret) : ret);
      },
      index : function(elem) {
        return elem ? "string" == typeof elem ? indexOf.call(jQuery(elem), this[0]) : indexOf.call(this, elem.jquery ? elem[0] : elem) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add : function(node, context) {
        return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(node, context))));
      },
      addBack : function(selector) {
        return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector));
      }
    });
    jQuery.each({
      parent : function(name) {
        var n = name.parentNode;
        return n && 11 !== n.nodeType ? n : null;
      },
      parents : function(elem) {
        return dir(elem, "parentNode");
      },
      parentsUntil : function(elem, i, until) {
        return dir(elem, "parentNode", until);
      },
      next : function(elem) {
        return sibling(elem, "nextSibling");
      },
      prev : function(elem) {
        return sibling(elem, "previousSibling");
      },
      nextAll : function(elem) {
        return dir(elem, "nextSibling");
      },
      prevAll : function(elem) {
        return dir(elem, "previousSibling");
      },
      nextUntil : function(elem, i, until) {
        return dir(elem, "nextSibling", until);
      },
      prevUntil : function(elem, i, until) {
        return dir(elem, "previousSibling", until);
      },
      siblings : function(elem) {
        return _sibling((elem.parentNode || {}).firstChild, elem);
      },
      children : function(elem) {
        return _sibling(elem.firstChild);
      },
      contents : function(elem) {
        return void 0 !== elem.contentDocument ? elem.contentDocument : (callback(elem, "template") && (elem = elem.content || elem), jQuery.merge([], elem.childNodes));
      }
    }, function(name, t) {
      jQuery.fn[name] = function(index, target) {
        var ret = jQuery.map(this, t, index);
        return "Until" !== name.slice(-5) && (target = index), target && "string" == typeof target && (ret = jQuery.filter(target, ret)), this.length > 1 && (guaranteedUnique[name] || jQuery.uniqueSort(ret), hitch_re.test(name) && ret.reverse()), this.pushStack(ret);
      };
    });
    var rnotwhite = /[^\x20\t\r\n\f]+/g;
    jQuery.Callbacks = function(options) {
      options = "string" == typeof options ? function(options) {
        var subwikiListsCache = {};
        return jQuery.each(options.match(rnotwhite) || [], function(canCreateDiscussions, wikiId) {
          subwikiListsCache[wikiId] = true;
        }), subwikiListsCache;
      }(options) : jQuery.extend({}, options);
      var isWhere;
      var result;
      var gasSum;
      var p;
      var c = [];
      var q = [];
      var b = -1;
      var fire = function() {
        p = p || options.once;
        gasSum = isWhere = true;
        for (; q.length; b = -1) {
          result = q.shift();
          for (; ++b < c.length;) {
            if (false === c[b].apply(result[0], result[1]) && options.stopOnFalse) {
              b = c.length;
              result = false;
            }
          }
        }
        if (!options.memory) {
          result = false;
        }
        isWhere = false;
        if (p) {
          c = result ? [] : "";
        }
      };
      var self = {
        add : function() {
          return c && (result && !isWhere && (b = c.length - 1, q.push(result)), function add(callback) {
            jQuery.each(callback, function(n, name) {
              if (fn(name)) {
                if (!(options.unique && self.has(name))) {
                  c.push(name);
                }
              } else {
                if (name && name.length && "string" !== type(name)) {
                  add(name);
                }
              }
            });
          }(arguments), result && !isWhere && fire()), this;
        },
        remove : function() {
          return jQuery.each(arguments, function(canCreateDiscussions, img) {
            var a;
            for (; (a = jQuery.inArray(img, c, a)) > -1;) {
              c.splice(a, 1);
              if (a <= b) {
                b--;
              }
            }
          }), this;
        },
        has : function(className) {
          return className ? jQuery.inArray(className, c) > -1 : c.length > 0;
        },
        empty : function() {
          return c && (c = []), this;
        },
        disable : function() {
          return p = q = [], c = result = "", this;
        },
        disabled : function() {
          return !c;
        },
        lock : function() {
          return p = q = [], result || isWhere || (c = result = ""), this;
        },
        locked : function() {
          return !!p;
        },
        fireWith : function(context, args) {
          return p || (args = [context, (args = args || []).slice ? args.slice() : args], q.push(args), isWhere || fire()), this;
        },
        fire : function() {
          return self.fireWith(this, arguments), this;
        },
        fired : function() {
          return !!gasSum;
        }
      };
      return self;
    };
    jQuery.extend({
      Deferred : function(func) {
        var array = [["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]];
        var state = "pending";
        var promise = {
          state : function() {
            return state;
          },
          always : function() {
            return deferred.done(arguments).fail(arguments), this;
          },
          catch : function(onReject) {
            return promise.then(null, onReject);
          },
          pipe : function() {
            var result = arguments;
            return jQuery.Deferred(function(newDefer) {
              jQuery.each(array, function(canCreateDiscussions, tuple) {
                var callback = fn(result[tuple[4]]) && result[tuple[4]];
                deferred[tuple[1]](function() {
                  var promise = callback && callback.apply(this, arguments);
                  if (promise && fn(promise.promise)) {
                    promise.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                  } else {
                    newDefer[tuple[0] + "With"](this, callback ? [promise] : arguments);
                  }
                });
              });
              result = null;
            }).promise();
          },
          then : function(value, x, e) {
            function callback(time, options, text, args) {
              return function() {
                var context = this;
                var x = arguments;
                var apply = function() {
                  var value;
                  var self;
                  if (!(time < start)) {
                    if ((value = text.apply(context, x)) === options.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    }
                    self = value && ("object" == typeof value || "function" == typeof value) && value.then;
                    if (fn(self)) {
                      if (args) {
                        self.call(value, callback(start, options, result, args), callback(start, options, undefined, args));
                      } else {
                        start++;
                        self.call(value, callback(start, options, result, args), callback(start, options, undefined, args), callback(start, options, result, options.notifyWith));
                      }
                    } else {
                      if (text !== result) {
                        context = void 0;
                        x = [value];
                      }
                      (args || options.resolveWith)(context, x);
                    }
                  }
                };
                var method = args ? apply : function() {
                  try {
                    apply();
                  } catch (value) {
                    if (jQuery.Deferred.exceptionHook) {
                      jQuery.Deferred.exceptionHook(value, method.stackTrace);
                    }
                    if (time + 1 >= start) {
                      if (text !== undefined) {
                        context = void 0;
                        x = [value];
                      }
                      options.rejectWith(context, x);
                    }
                  }
                };
                if (time) {
                  method();
                } else {
                  if (jQuery.Deferred.getStackHook) {
                    method.stackTrace = jQuery.Deferred.getStackHook();
                  }
                  window.setTimeout(method);
                }
              };
            }
            var start = 0;
            return jQuery.Deferred(function(self) {
              array[0][3].add(callback(0, self, fn(e) ? e : result, self.notifyWith));
              array[1][3].add(callback(0, self, fn(value) ? value : result));
              array[2][3].add(callback(0, self, fn(x) ? x : undefined));
            }).promise();
          },
          promise : function(value) {
            return null != value ? jQuery.extend(value, promise) : promise;
          }
        };
        var deferred = {};
        return jQuery.each(array, function(numRemoved, tuple) {
          var list = tuple[2];
          var stateString = tuple[5];
          promise[tuple[1]] = list.add;
          if (stateString) {
            list.add(function() {
              state = stateString;
            }, array[3 - numRemoved][2].disable, array[3 - numRemoved][3].disable, array[0][2].lock, array[0][3].lock);
          }
          list.add(tuple[3].fire);
          deferred[tuple[0]] = function() {
            return deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments), this;
          };
          deferred[tuple[0] + "With"] = list.fireWith;
        }), promise.promise(deferred), func && func.call(deferred, deferred), deferred;
      },
      when : function(data) {
        var sampleSize = arguments.length;
        var i = sampleSize;
        var elements = Array(i);
        var args = slice.call(arguments);
        var d = jQuery.Deferred();
        var updateFn = function(i) {
          return function(value) {
            elements[i] = this;
            args[i] = arguments.length > 1 ? slice.call(arguments) : value;
            if (!--sampleSize) {
              d.resolveWith(elements, args);
            }
          };
        };
        if (sampleSize <= 1 && (resolve(data, d.done(updateFn(i)).resolve, d.reject, !sampleSize), "pending" === d.state() || fn(args[i] && args[i].then))) {
          return d.then();
        }
        for (; i--;) {
          resolve(args[i], updateFn(i), d.reject);
        }
        return d.promise();
      }
    });
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    jQuery.Deferred.exceptionHook = function(error, stack) {
      if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
        window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
      }
    };
    jQuery.readyException = function(error) {
      window.setTimeout(function() {
        throw error;
      });
    };
    var readyList = jQuery.Deferred();
    jQuery.fn.ready = function(callback) {
      return readyList.then(callback).catch(function(e) {
        jQuery.readyException(e);
      }), this;
    };
    jQuery.extend({
      isReady : false,
      readyWait : 1,
      ready : function(prev) {
        if (!(true === prev ? --jQuery.readyWait : jQuery.isReady)) {
          jQuery.isReady = true;
          if (!(true !== prev && --jQuery.readyWait > 0)) {
            readyList.resolveWith(document, [jQuery]);
          }
        }
      }
    });
    jQuery.ready.then = readyList.then;
    if ("complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll) {
      window.setTimeout(jQuery.ready);
    } else {
      document.addEventListener("DOMContentLoaded", $__jsx_onload);
      window.addEventListener("load", $__jsx_onload);
    }
    var access = function(elems, callback, key, value, chainable, emptyGet, raw) {
      var i = 0;
      var length = elems.length;
      var bulk = null == key;
      if ("object" === type(key)) {
        for (i in chainable = true, key) {
          access(elems, callback, i, key[i], true, emptyGet, raw);
        }
      } else {
        if (void 0 !== value && (chainable = true, fn(value) || (raw = true), bulk && (raw ? (callback.call(elems, value), callback = null) : (bulk = callback, callback = function(elem, o, value) {
          return bulk.call(jQuery(elem), value);
        })), callback)) {
          for (; i < length; i++) {
            callback(elems[i], key, raw ? value : value.call(elems[i], i, callback(elems[i], key)));
          }
        }
      }
      return chainable ? elems : bulk ? callback.call(elems) : length ? callback(elems[0], key) : emptyGet;
    };
    var _kerningNamesHash_escapeEscape = /^-ms-/;
    var rcharset = /-([a-z])/g;
    var acceptData = function(elem) {
      return 1 === elem.nodeType || 9 === elem.nodeType || !+elem.nodeType;
    };
    Data.uid = 1;
    Data.prototype = {
      cache : function(elem) {
        var value = elem[this.expando];
        return value || (value = {}, acceptData(elem) && (elem.nodeType ? elem[this.expando] = value : Object.defineProperty(elem, this.expando, {
          value : value,
          configurable : true
        }))), value;
      },
      set : function(key, data, str) {
        var prop;
        var cache = this.cache(key);
        if ("string" == typeof data) {
          cache[camelCase(data)] = str;
        } else {
          for (prop in data) {
            cache[camelCase(prop)] = data[prop];
          }
        }
        return cache;
      },
      get : function(data, key) {
        return void 0 === key ? this.cache(data) : data[this.expando] && data[this.expando][camelCase(key)];
      },
      access : function(value, fn, key) {
        return void 0 === fn || fn && "string" == typeof fn && void 0 === key ? this.get(value, fn) : (this.set(value, fn, key), void 0 !== key ? key : fn);
      },
      remove : function(node, key) {
        var f;
        var value = node[this.expando];
        if (void 0 !== value) {
          if (void 0 !== key) {
            f = (key = Array.isArray(key) ? key.map(camelCase) : (key = camelCase(key)) in value ? [key] : key.match(rnotwhite) || []).length;
            for (; f--;) {
              delete value[key[f]];
            }
          }
          if (void 0 === key || jQuery.isEmptyObject(value)) {
            if (node.nodeType) {
              node[this.expando] = void 0;
            } else {
              delete node[this.expando];
            }
          }
        }
      },
      hasData : function(owner) {
        var cache = owner[this.expando];
        return void 0 !== cache && !jQuery.isEmptyObject(cache);
      }
    };
    var dataPriv = new Data;
    var api = new Data;
    var contribRegex = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
    var unsafeChars = /[A-Z]/g;
    jQuery.extend({
      hasData : function(elem) {
        return api.hasData(elem) || dataPriv.hasData(elem);
      },
      data : function(name, type, value) {
        return api.access(name, type, value);
      },
      removeData : function(name, key) {
        api.remove(name, key);
      },
      _data : function(elem, name, data) {
        return dataPriv.access(elem, name, data);
      },
      _removeData : function(elem, name) {
        dataPriv.remove(elem, name);
      }
    });
    jQuery.fn.extend({
      data : function(name, value) {
        var w;
        var type;
        var evt;
        var elem = this[0];
        var root = elem && elem.attributes;
        if (void 0 === name) {
          if (this.length && (evt = api.get(elem), 1 === elem.nodeType && !dataPriv.get(elem, "hasDataAttrs"))) {
            w = root.length;
            for (; w--;) {
              if (root[w] && 0 === (type = root[w].name).indexOf("data-")) {
                type = camelCase(type.slice(5));
                render(elem, type, evt[type]);
              }
            }
            dataPriv.set(elem, "hasDataAttrs", true);
          }
          return evt;
        }
        return "object" == typeof name ? this.each(function() {
          api.set(this, name);
        }) : access(this, function(undefined) {
          var element;
          if (elem && void 0 === undefined) {
            return void 0 !== (element = api.get(elem, name)) || void 0 !== (element = render(elem, name)) ? element : void 0;
          }
          this.each(function() {
            api.set(this, name, undefined);
          });
        }, null, value, arguments.length > 1, null, true);
      },
      removeData : function(key) {
        return this.each(function() {
          api.remove(this, key);
        });
      }
    });
    jQuery.extend({
      queue : function(elem, type, data) {
        var q;
        if (elem) {
          return type = (type || "fx") + "queue", q = dataPriv.get(elem, type), data && (!q || Array.isArray(data) ? q = dataPriv.access(elem, type, jQuery.makeArray(data)) : q.push(data)), q || [];
        }
      },
      dequeue : function(elem, type) {
        type = type || "fx";
        var queue = jQuery.queue(elem, type);
        var i = queue.length;
        var _self = queue.shift();
        var node = jQuery._queueHooks(elem, type);
        if ("inprogress" === _self) {
          _self = queue.shift();
          i--;
        }
        if (_self) {
          if ("fx" === type) {
            queue.unshift("inprogress");
          }
          delete node.stop;
          _self.call(elem, function() {
            jQuery.dequeue(elem, type);
          }, node);
        }
        if (!i && node) {
          node.empty.fire();
        }
      },
      _queueHooks : function(elem, type) {
        var key = type + "queueHooks";
        return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
          empty : jQuery.Callbacks("once memory").add(function() {
            dataPriv.remove(elem, [type + "queue", key]);
          })
        });
      }
    });
    jQuery.fn.extend({
      queue : function(type, data) {
        var setter = 2;
        return "string" != typeof type && (data = type, type = "fx", setter--), arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function() {
          var queue = jQuery.queue(this, type, data);
          jQuery._queueHooks(this, type);
          if ("fx" === type && "inprogress" !== queue[0]) {
            jQuery.dequeue(this, type);
          }
        });
      },
      dequeue : function(type) {
        return this.each(function() {
          jQuery.dequeue(this, type);
        });
      },
      clearQueue : function(type) {
        return this.queue(type || "fx", []);
      },
      promise : function(type, obj) {
        var sel;
        var r = 1;
        var defer = jQuery.Deferred();
        var elements = this;
        var i = this.length;
        var resolve = function() {
          if (!--r) {
            defer.resolveWith(elements, [elements]);
          }
        };
        if ("string" != typeof type) {
          obj = type;
          type = void 0;
        }
        type = type || "fx";
        for (; i--;) {
          if ((sel = dataPriv.get(elements[i], type + "queueHooks")) && sel.empty) {
            r++;
            sel.empty.add(resolve);
          }
        }
        return resolve(), defer.promise(obj);
      }
    });
    var FSSource = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var regex = new RegExp("^(?:([+-])=|)(" + FSSource + ")([a-z%]*)$", "i");
    var cssExpand = ["Top", "Right", "Bottom", "Left"];
    var node = document.documentElement;
    var get = function(elem) {
      return jQuery.contains(elem.ownerDocument, elem);
    };
    var _prefName = {
      composed : true
    };
    if (node.getRootNode) {
      get = function(p) {
        return jQuery.contains(p.ownerDocument, p) || p.getRootNode(_prefName) === p.ownerDocument;
      };
    }
    var isHidden = function(elem, el) {
      return "none" === (elem = el || elem).style.display || "" === elem.style.display && get(elem) && "none" === jQuery.css(elem, "display");
    };
    var swap = function(e, obj, f, args) {
      var result;
      var key;
      var pyobj = {};
      for (key in obj) {
        pyobj[key] = e.style[key];
        e.style[key] = obj[key];
      }
      for (key in result = f.apply(e, args || []), obj) {
        e.style[key] = pyobj[key];
      }
      return result;
    };
    var defaultDisplayMap = {};
    jQuery.fn.extend({
      show : function() {
        return showHide(this, true);
      },
      hide : function() {
        return showHide(this);
      },
      toggle : function(value) {
        return "boolean" == typeof value ? value ? this.show() : this.hide() : this.each(function() {
          if (isHidden(this)) {
            jQuery(this).show();
          } else {
            jQuery(this).hide();
          }
        });
      }
    });
    var path = /^(?:checkbox|radio)$/i;
    var me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
    var opacityRe = /^$|^module$|\/(?:java|ecma)script/i;
    var wrapMap = {
      option : [1, "<select multiple='multiple'>", "</select>"],
      thead : [1, "<table>", "</table>"],
      col : [2, "<table><colgroup>", "</colgroup></table>"],
      tr : [2, "<table><tbody>", "</tbody></table>"],
      td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default : [0, "", ""]
    };
    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    var avalon;
    var input;
    var re_commas = /<|&#?\w+;/;
    avalon = document.createDocumentFragment().appendChild(document.createElement("div"));
    (input = document.createElement("input")).setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    avalon.appendChild(input);
    support.checkClone = avalon.cloneNode(true).cloneNode(true).lastChild.checked;
    avalon.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!avalon.cloneNode(true).lastChild.defaultValue;
    var receivedErrorEvents = /^key/;
    var receivedOpenEvents = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
    var exports = /^([^.]*)(?:\.(.+)|)/;
    jQuery.event = {
      global : {},
      add : function(node, input, handler, data, selector) {
        var handleObjIn;
        var handle;
        var BROWSER_ENGINES;
        var events;
        var i;
        var handleObj;
        var special;
        var handlers;
        var type;
        var h;
        var origType;
        var elemData = dataPriv.get(node);
        if (elemData) {
          if (handler.handler) {
            handler = (handleObjIn = handler).handler;
            selector = handleObjIn.selector;
          }
          if (selector) {
            jQuery.find.matchesSelector(node, selector);
          }
          if (!handler.guid) {
            handler.guid = jQuery.guid++;
          }
          if (!(events = elemData.events)) {
            events = elemData.events = {};
          }
          if (!(handle = elemData.handle)) {
            handle = elemData.handle = function(e) {
              return void 0 !== jQuery && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(node, arguments) : void 0;
            };
          }
          i = (input = (input || "").match(rnotwhite) || [""]).length;
          for (; i--;) {
            type = origType = (BROWSER_ENGINES = exports.exec(input[i]) || [])[1];
            h = (BROWSER_ENGINES[2] || "").split(".").sort();
            if (type) {
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              special = jQuery.event.special[type] || {};
              handleObj = jQuery.extend({
                type : type,
                origType : origType,
                data : data,
                handler : handler,
                guid : handler.guid,
                selector : selector,
                needsContext : selector && jQuery.expr.match.needsContext.test(selector),
                namespace : h.join(".")
              }, handleObjIn);
              if (!(handlers = events[type])) {
                (handlers = events[type] = []).delegateCount = 0;
                if (!(special.setup && false !== special.setup.call(node, data, h, handle))) {
                  if (node.addEventListener) {
                    node.addEventListener(type, handle);
                  }
                }
              }
              if (special.add) {
                special.add.call(node, handleObj);
                if (!handleObj.handler.guid) {
                  handleObj.handler.guid = handler.guid;
                }
              }
              if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
              } else {
                handlers.push(handleObj);
              }
              jQuery.event.global[type] = true;
            }
          }
        }
      },
      remove : function(node, types, handler, selector, i) {
        var j;
        var origCount;
        var tmp;
        var events;
        var i;
        var handleObj;
        var special;
        var handlers;
        var type;
        var h;
        var level;
        var elemData = dataPriv.hasData(node) && dataPriv.get(node);
        if (elemData && (events = elemData.events)) {
          i = (types = (types || "").match(rnotwhite) || [""]).length;
          for (; i--;) {
            if (type = level = (tmp = exports.exec(types[i]) || [])[1], h = (tmp[2] || "").split(".").sort(), type) {
              special = jQuery.event.special[type] || {};
              handlers = events[type = (selector ? special.delegateType : special.bindType) || type] || [];
              tmp = tmp[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)");
              origCount = j = handlers.length;
              for (; j--;) {
                handleObj = handlers[j];
                if (!(!i && level !== handleObj.origType || handler && handler.guid !== handleObj.guid || tmp && !tmp.test(handleObj.namespace) || selector && selector !== handleObj.selector && ("**" !== selector || !handleObj.selector))) {
                  handlers.splice(j, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(node, handleObj);
                  }
                }
              }
              if (origCount && !handlers.length) {
                if (!(special.teardown && false !== special.teardown.call(node, h, elemData.handle))) {
                  jQuery.removeEvent(node, type, elemData.handle);
                }
                delete events[type];
              }
            } else {
              for (type in events) {
                jQuery.event.remove(node, type + types[i], handler, selector, true);
              }
            }
          }
          if (jQuery.isEmptyObject(events)) {
            dataPriv.remove(node, "handle events");
          }
        }
      },
      dispatch : function(e) {
        var i;
        var j;
        var docs;
        var matched;
        var handleObj;
        var handlerQueue;
        var event = jQuery.event.fix(e);
        var options = new Array(arguments.length);
        var handlers = (dataPriv.get(this, "events") || {})[event.type] || [];
        var special = jQuery.event.special[event.type] || {};
        options[0] = event;
        i = 1;
        for (; i < arguments.length; i++) {
          options[i] = arguments[i];
        }
        if (event.delegateTarget = this, !special.preDispatch || false !== special.preDispatch.call(this, event)) {
          handlerQueue = jQuery.event.handlers.call(this, event, handlers);
          i = 0;
          for (; (matched = handlerQueue[i++]) && !event.isPropagationStopped();) {
            event.currentTarget = matched.elem;
            j = 0;
            for (; (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped();) {
              if (!(event.rnamespace && false !== handleObj.namespace && !event.rnamespace.test(handleObj.namespace))) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                if (void 0 !== (docs = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, options)) && false === (event.result = docs)) {
                  event.preventDefault();
                  event.stopPropagation();
                }
              }
            }
          }
          return special.postDispatch && special.postDispatch.call(this, event), event.result;
        }
      },
      handlers : function(event, handlers) {
        var i;
        var handleObj;
        var name;
        var matches;
        var fieldOrdinals;
        var handlerQueue = [];
        var delegateCount = handlers.delegateCount;
        var cur = event.target;
        if (delegateCount && cur.nodeType && !("click" === event.type && event.button >= 1)) {
          for (; cur !== this; cur = cur.parentNode || this) {
            if (1 === cur.nodeType && ("click" !== event.type || true !== cur.disabled)) {
              matches = [];
              fieldOrdinals = {};
              i = 0;
              for (; i < delegateCount; i++) {
                if (void 0 === fieldOrdinals[name = (handleObj = handlers[i]).selector + " "]) {
                  fieldOrdinals[name] = handleObj.needsContext ? jQuery(name, this).index(cur) > -1 : jQuery.find(name, this, null, [cur]).length;
                }
                if (fieldOrdinals[name]) {
                  matches.push(handleObj);
                }
              }
              if (matches.length) {
                handlerQueue.push({
                  elem : cur,
                  handlers : matches
                });
              }
            }
          }
        }
        return cur = this, delegateCount < handlers.length && handlerQueue.push({
          elem : cur,
          handlers : handlers.slice(delegateCount)
        }), handlerQueue;
      },
      addProp : function(name, key) {
        Object.defineProperty(jQuery.Event.prototype, name, {
          enumerable : true,
          configurable : true,
          get : fn(key) ? function() {
            if (this.originalEvent) {
              return key(this.originalEvent);
            }
          } : function() {
            if (this.originalEvent) {
              return this.originalEvent[name];
            }
          },
          set : function(type) {
            Object.defineProperty(this, name, {
              enumerable : true,
              configurable : true,
              writable : true,
              value : type
            });
          }
        });
      },
      fix : function(originalEvent) {
        return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
      },
      special : {
        load : {
          noBubble : true
        },
        click : {
          setup : function(s) {
            var o = this || s;
            return path.test(o.type) && o.click && callback(o, "input") && add(o, "click", mousemove), false;
          },
          trigger : function(name) {
            var type = this || name;
            return path.test(type.type) && type.click && callback(type, "input") && add(type, "click"), true;
          },
          _default : function(event) {
            var node = event.target;
            return path.test(node.type) && node.click && callback(node, "input") && dataPriv.get(node, "click") || callback(node, "a");
          }
        },
        beforeunload : {
          postDispatch : function(event) {
            if (void 0 !== event.result && event.originalEvent) {
              event.originalEvent.returnValue = event.result;
            }
          }
        }
      }
    };
    jQuery.removeEvent = function(elem, type, fn) {
      if (elem.removeEventListener) {
        elem.removeEventListener(type, fn);
      }
    };
    jQuery.Event = function(src, props) {
      if (!(this instanceof jQuery.Event)) {
        return new jQuery.Event(src, props);
      }
      if (src && src.type) {
        this.originalEvent = src;
        this.type = src.type;
        this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && false === src.returnValue ? mousemove : returnFalse;
        this.target = src.target && 3 === src.target.nodeType ? src.target.parentNode : src.target;
        this.currentTarget = src.currentTarget;
        this.relatedTarget = src.relatedTarget;
      } else {
        this.type = src;
      }
      if (props) {
        jQuery.extend(this, props);
      }
      this.timeStamp = src && src.timeStamp || Date.now();
      this[jQuery.expando] = true;
    };
    jQuery.Event.prototype = {
      constructor : jQuery.Event,
      isDefaultPrevented : returnFalse,
      isPropagationStopped : returnFalse,
      isImmediatePropagationStopped : returnFalse,
      isSimulated : false,
      preventDefault : function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = mousemove;
        if (e && !this.isSimulated) {
          e.preventDefault();
        }
      },
      stopPropagation : function() {
        var e = this.originalEvent;
        this.isPropagationStopped = mousemove;
        if (e && !this.isSimulated) {
          e.stopPropagation();
        }
      },
      stopImmediatePropagation : function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = mousemove;
        if (e && !this.isSimulated) {
          e.stopImmediatePropagation();
        }
        this.stopPropagation();
      }
    };
    jQuery.each({
      altKey : true,
      bubbles : true,
      cancelable : true,
      changedTouches : true,
      ctrlKey : true,
      detail : true,
      eventPhase : true,
      metaKey : true,
      pageX : true,
      pageY : true,
      shiftKey : true,
      view : true,
      char : true,
      code : true,
      charCode : true,
      key : true,
      keyCode : true,
      button : true,
      buttons : true,
      clientX : true,
      clientY : true,
      offsetX : true,
      offsetY : true,
      pointerId : true,
      pointerType : true,
      screenX : true,
      screenY : true,
      targetTouches : true,
      toElement : true,
      touches : true,
      which : function(e) {
        var button = e.button;
        return null == e.which && receivedErrorEvents.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== button && receivedOpenEvents.test(e.type) ? 1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0 : e.which;
      }
    }, jQuery.event.addProp);
    jQuery.each({
      focus : "focusin",
      blur : "focusout"
    }, function(name, fix) {
      jQuery.event.special[name] = {
        setup : function() {
          return add(this, name, handler), false;
        },
        trigger : function() {
          return add(this, name), true;
        },
        delegateType : fix
      };
    });
    jQuery.each({
      mouseenter : "mouseover",
      mouseleave : "mouseout",
      pointerenter : "pointerover",
      pointerleave : "pointerout"
    }, function(orig, fix) {
      jQuery.event.special[orig] = {
        delegateType : fix,
        bindType : fix,
        handle : function(event) {
          var _ref12;
          var document = this;
          var b = event.relatedTarget;
          var handleObj = event.handleObj;
          return b && (b === document || jQuery.contains(document, b)) || (event.type = handleObj.origType, _ref12 = handleObj.handler.apply(this, arguments), event.type = fix), _ref12;
        }
      };
    });
    jQuery.fn.extend({
      on : function(type, module, b, callback) {
        return bind(this, type, module, b, callback);
      },
      one : function(el, name, data, callback) {
        return bind(this, el, name, data, callback, 1);
      },
      off : function(types, callback, fn) {
        var handleObj;
        var type;
        if (types && types.preventDefault && types.handleObj) {
          return handleObj = types.handleObj, jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), this;
        }
        if ("object" == typeof types) {
          for (type in types) {
            this.off(type, callback, types[type]);
          }
          return this;
        }
        return false !== callback && "function" != typeof callback || (fn = callback, callback = void 0), false === fn && (fn = returnFalse), this.each(function() {
          jQuery.event.remove(this, types, fn, callback);
        });
      }
    });
    var regPlaceholder = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
    var _tacet = /<script|<style|<link/i;
    var reValidName = /checked\s*(?:[^=]|=\s*.checked.)/i;
    var codePoint = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    jQuery.extend({
      htmlPrefilter : function(src) {
        return src.replace(regPlaceholder, "<$1></$2>");
      },
      clone : function(elem, n, array) {
        var i;
        var l;
        var srcElements;
        var destElements;
        var clone = elem.cloneNode(true);
        var inPage = get(elem);
        if (!(support.noCloneChecked || 1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem))) {
          destElements = getAll(clone);
          i = 0;
          l = (srcElements = getAll(elem)).length;
          for (; i < l; i++) {
            fixInput(srcElements[i], destElements[i]);
          }
        }
        if (n) {
          if (array) {
            srcElements = srcElements || getAll(elem);
            destElements = destElements || getAll(clone);
            i = 0;
            l = srcElements.length;
            for (; i < l; i++) {
              cloneCopyEvent(srcElements[i], destElements[i]);
            }
          } else {
            cloneCopyEvent(elem, clone);
          }
        }
        return (destElements = getAll(clone, "script")).length > 0 && setGlobalEval(destElements, !inPage && getAll(elem, "script")), clone;
      },
      cleanData : function(elems) {
        var data;
        var elem;
        var type;
        var special = jQuery.event.special;
        var i = 0;
        for (; void 0 !== (elem = elems[i]); i++) {
          if (acceptData(elem)) {
            if (data = elem[dataPriv.expando]) {
              if (data.events) {
                for (type in data.events) {
                  if (special[type]) {
                    jQuery.event.remove(elem, type);
                  } else {
                    jQuery.removeEvent(elem, type, data.handle);
                  }
                }
              }
              elem[dataPriv.expando] = void 0;
            }
            if (elem[api.expando]) {
              elem[api.expando] = void 0;
            }
          }
        }
      }
    });
    jQuery.fn.extend({
      detach : function(selector) {
        return remove(this, selector, true);
      },
      remove : function(node) {
        return remove(this, node);
      },
      text : function(value) {
        return access(this, function(value) {
          return void 0 === value ? jQuery.text(this) : this.empty().each(function() {
            if (!(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType)) {
              this.textContent = value;
            }
          });
        }, null, value, arguments.length);
      },
      append : function() {
        return domManip(this, arguments, function(elem) {
          if (!(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType)) {
            manipulationTarget(this, elem).appendChild(elem);
          }
        });
      },
      prepend : function() {
        return domManip(this, arguments, function(elem) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var target = manipulationTarget(this, elem);
            target.insertBefore(elem, target.firstChild);
          }
        });
      },
      before : function() {
        return domManip(this, arguments, function(elem) {
          if (this.parentNode) {
            this.parentNode.insertBefore(elem, this);
          }
        });
      },
      after : function() {
        return domManip(this, arguments, function(elem) {
          if (this.parentNode) {
            this.parentNode.insertBefore(elem, this.nextSibling);
          }
        });
      },
      empty : function() {
        var elem;
        var i = 0;
        for (; null != (elem = this[i]); i++) {
          if (1 === elem.nodeType) {
            jQuery.cleanData(getAll(elem, false));
            elem.textContent = "";
          }
        }
        return this;
      },
      clone : function(c, i) {
        return c = null != c && c, i = null == i ? c : i, this.map(function() {
          return jQuery.clone(this, c, i);
        });
      },
      html : function(value) {
        return access(this, function(value) {
          var elem = this[0] || {};
          var thatpos = 0;
          var i = this.length;
          if (void 0 === value && 1 === elem.nodeType) {
            return elem.innerHTML;
          }
          if ("string" == typeof value && !_tacet.test(value) && !wrapMap[(me.exec(value) || ["", ""])[1].toLowerCase()]) {
            value = jQuery.htmlPrefilter(value);
            try {
              for (; thatpos < i; thatpos++) {
                if (1 === (elem = this[thatpos] || {}).nodeType) {
                  jQuery.cleanData(getAll(elem, false));
                  elem.innerHTML = value;
                }
              }
              elem = 0;
            } catch (e) {
            }
          }
          if (elem) {
            this.empty().append(value);
          }
        }, null, value, arguments.length);
      },
      replaceWith : function() {
        var ignored = [];
        return domManip(this, arguments, function(t) {
          var p = this.parentNode;
          if (jQuery.inArray(this, ignored) < 0) {
            jQuery.cleanData(getAll(this));
            if (p) {
              p.replaceChild(t, this);
            }
          }
        }, ignored);
      }
    });
    jQuery.each({
      appendTo : "append",
      prependTo : "prepend",
      insertBefore : "before",
      insertAfter : "after",
      replaceAll : "replaceWith"
    }, function(original, n) {
      jQuery.fn[original] = function(body) {
        var what;
        var ret = [];
        var rows = jQuery(body);
        var last = rows.length - 1;
        var i = 0;
        for (; i <= last; i++) {
          what = i === last ? this : this.clone(true);
          jQuery(rows[i])[n](what);
          push.apply(ret, what.get());
        }
        return this.pushStack(ret);
      };
    });
    var rnumnonpx = new RegExp("^(" + FSSource + ")(?!px)[a-z%]+$", "i");
    var getStyles = function(elem) {
      var win = elem.ownerDocument.defaultView;
      return win && win.opener || (win = window), win.getComputedStyle(elem);
    };
    var inlineAttributeCommentRegex = new RegExp(cssExpand.join("|"), "i");
    !function() {
      function computeStyleTests() {
        if (div) {
          parent.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
          div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
          node.appendChild(parent).appendChild(div);
          var style = window.getComputedStyle(div);
          res = "1%" !== style.top;
          l = 12 === parseRound(style.marginLeft);
          div.style.right = "60%";
          a = 36 === parseRound(style.right);
          i = 36 === parseRound(style.width);
          div.style.position = "absolute";
          o = 12 === parseRound(div.offsetWidth / 3);
          node.removeChild(parent);
          div = null;
        }
      }
      function parseRound(fontSize) {
        return Math.round(parseFloat(fontSize));
      }
      var res;
      var i;
      var o;
      var a;
      var l;
      var parent = document.createElement("div");
      var div = document.createElement("div");
      if (div.style) {
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = "content-box" === div.style.backgroundClip;
        jQuery.extend(support, {
          boxSizingReliable : function() {
            return computeStyleTests(), i;
          },
          pixelBoxStyles : function() {
            return computeStyleTests(), a;
          },
          pixelPosition : function() {
            return computeStyleTests(), res;
          },
          reliableMarginLeft : function() {
            return computeStyleTests(), l;
          },
          scrollboxSize : function() {
            return computeStyleTests(), o;
          }
        });
      }
    }();
    var prefixes = ["Webkit", "Moz", "ms"];
    var testStyle = document.createElement("div").style;
    var aSupports = {};
    var rdisplayswap = /^(none|table(?!-c[ea]).+)/;
    var ngTranslationProvider = /^--/;
    var cssShow = {
      position : "absolute",
      visibility : "hidden",
      display : "block"
    };
    var cssNormalTransform = {
      letterSpacing : "0",
      fontWeight : "400"
    };
    jQuery.extend({
      cssHooks : {
        opacity : {
          get : function(elem, data) {
            if (data) {
              var to = curCSS(elem, "opacity");
              return "" === to ? "1" : to;
            }
          }
        }
      },
      cssNumber : {
        animationIterationCount : true,
        columnCount : true,
        fillOpacity : true,
        flexGrow : true,
        flexShrink : true,
        fontWeight : true,
        gridArea : true,
        gridColumn : true,
        gridColumnEnd : true,
        gridColumnStart : true,
        gridRow : true,
        gridRowEnd : true,
        gridRowStart : true,
        lineHeight : true,
        opacity : true,
        order : true,
        orphans : true,
        widows : true,
        zIndex : true,
        zoom : true
      },
      cssProps : {},
      style : function(elem, name, value, data) {
        if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
          var ret;
          var type;
          var hooks;
          var prop = camelCase(name);
          var versionByName = ngTranslationProvider.test(name);
          var style = elem.style;
          if (versionByName || (name = camelize(prop)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[prop], void 0 === value) {
            return hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, false, data)) ? ret : style[name];
          }
          if ("string" === (type = typeof value) && (ret = regex.exec(value)) && ret[1]) {
            value = adjustCSS(elem, name, ret);
            type = "number";
          }
          if (null != value && value == value) {
            if (!("number" !== type || versionByName)) {
              value = value + (ret && ret[3] || (jQuery.cssNumber[prop] ? "" : "px"));
            }
            if (!(support.clearCloneStyle || "" !== value || 0 !== name.indexOf("background"))) {
              style[name] = "inherit";
            }
            if (!(hooks && "set" in hooks && void 0 === (value = hooks.set(elem, value, data)))) {
              if (versionByName) {
                style.setProperty(name, value);
              } else {
                style[name] = value;
              }
            }
          }
        }
      },
      css : function(key, name, extra, styles) {
        var val;
        var length;
        var hooks;
        var prop = camelCase(name);
        return ngTranslationProvider.test(name) || (name = camelize(prop)), (hooks = jQuery.cssHooks[name] || jQuery.cssHooks[prop]) && "get" in hooks && (val = hooks.get(key, true, extra)), void 0 === val && (val = curCSS(key, name, styles)), "normal" === val && name in cssNormalTransform && (val = cssNormalTransform[name]), "" === extra || extra ? (length = parseFloat(val), true === extra || isFinite(length) ? length || 0 : val) : val;
      }
    });
    jQuery.each(["height", "width"], function(canCreateDiscussions, name) {
      jQuery.cssHooks[name] = {
        get : function(elem, data, extra) {
          if (data) {
            return !rdisplayswap.test(jQuery.css(elem, "display")) || elem.getClientRects().length && elem.getBoundingClientRect().width ? getWidthOrHeight(elem, name, extra) : swap(elem, cssShow, function() {
              return getWidthOrHeight(elem, name, extra);
            });
          }
        },
        set : function(elem, value, content) {
          var m;
          var styles = getStyles(elem);
          var buf = !support.scrollboxSize() && "absolute" === styles.position;
          var valueIsBorderBox = (buf || content) && "border-box" === jQuery.css(elem, "boxSizing", false, styles);
          var c = content ? augmentWidthOrHeight(elem, name, content, valueIsBorderBox, styles) : 0;
          return valueIsBorderBox && buf && (c = c - Math.ceil(elem["offset" + name[0].toUpperCase() + name.slice(1)] - parseFloat(styles[name]) - augmentWidthOrHeight(elem, name, "border", false, styles) - .5)), c && (m = regex.exec(value)) && "px" !== (m[3] || "px") && (elem.style[name] = value, value = jQuery.css(elem, name)), set(0, value, c);
        }
      };
    });
    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, canCreateDiscussions) {
      if (canCreateDiscussions) {
        return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
          marginLeft : 0
        }, function() {
          return elem.getBoundingClientRect().left;
        })) + "px";
      }
    });
    jQuery.each({
      margin : "",
      padding : "",
      border : "Width"
    }, function(prefix, suffix) {
      jQuery.cssHooks[prefix + suffix] = {
        expand : function(expected) {
          var i = 0;
          var expanded = {};
          var stops = "string" == typeof expected ? expected.split(" ") : [expected];
          for (; i < 4; i++) {
            expanded[prefix + cssExpand[i] + suffix] = stops[i] || stops[i - 2] || stops[0];
          }
          return expanded;
        }
      };
      if ("margin" !== prefix) {
        jQuery.cssHooks[prefix + suffix].set = set;
      }
    });
    jQuery.fn.extend({
      css : function(name, value) {
        return access(this, function(elem, name, undefined) {
          var styles;
          var l;
          var map = {};
          var i = 0;
          if (Array.isArray(name)) {
            styles = getStyles(elem);
            l = name.length;
            for (; i < l; i++) {
              map[name[i]] = jQuery.css(elem, name[i], false, styles);
            }
            return map;
          }
          return void 0 !== undefined ? jQuery.style(elem, name, undefined) : jQuery.css(elem, name);
        }, name, value, arguments.length > 1);
      }
    });
    jQuery.Tween = Tween;
    Tween.prototype = {
      constructor : Tween,
      init : function(domElem, options, prop, end, easing, unit) {
        this.elem = domElem;
        this.prop = prop;
        this.easing = easing || jQuery.easing._default;
        this.options = options;
        this.start = this.now = this.cur();
        this.end = end;
        this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
      },
      cur : function() {
        var hooks = Tween.propHooks[this.prop];
        return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
      },
      run : function(percent) {
        var eased;
        var hooks = Tween.propHooks[this.prop];
        return this.options.duration ? this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : this.pos = eased = percent, this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this;
      }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
      _default : {
        get : function(s) {
          var fitWidth;
          return 1 !== s.elem.nodeType || null != s.elem[s.prop] && null == s.elem.style[s.prop] ? s.elem[s.prop] : (fitWidth = jQuery.css(s.elem, s.prop, "")) && "auto" !== fitWidth ? fitWidth : 0;
        },
        set : function(tween) {
          if (jQuery.fx.step[tween.prop]) {
            jQuery.fx.step[tween.prop](tween);
          } else {
            if (1 !== tween.elem.nodeType || !jQuery.cssHooks[tween.prop] && null == tween.elem.style[camelize(tween.prop)]) {
              tween.elem[tween.prop] = tween.now;
            } else {
              jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
            }
          }
        }
      }
    };
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
      set : function(tween) {
        if (tween.elem.nodeType && tween.elem.parentNode) {
          tween.elem[tween.prop] = tween.now;
        }
      }
    };
    jQuery.easing = {
      linear : function(p) {
        return p;
      },
      swing : function(p) {
        return .5 - Math.cos(p * Math.PI) / 2;
      },
      _default : "swing"
    };
    jQuery.fx = Tween.prototype.init;
    jQuery.fx.step = {};
    var fxNow;
    var lt;
    var trueRE = /^(?:toggle|show|hide)$/;
    var rrun = /queueHooks$/;
    jQuery.Animation = jQuery.extend(Animation, {
      tweeners : {
        "*" : [function(prop, value) {
          var tween = this.createTween(prop, value);
          return adjustCSS(tween.elem, prop, regex.exec(value), tween), tween;
        }]
      },
      tweener : function(props, callback) {
        if (fn(props)) {
          callback = props;
          props = ["*"];
        } else {
          props = props.match(rnotwhite);
        }
        var prop;
        var i = 0;
        var inputsSize = props.length;
        for (; i < inputsSize; i++) {
          prop = props[i];
          Animation.tweeners[prop] = Animation.tweeners[prop] || [];
          Animation.tweeners[prop].unshift(callback);
        }
      },
      prefilters : [function(elem, props, config) {
        var prop;
        var value;
        var matched;
        var hooks;
        var oldfire;
        var tween;
        var restoreDisplay;
        var display;
        var f = "width" in props || "height" in props;
        var anim = this;
        var orig = {};
        var style = elem.style;
        var hidden = elem.nodeType && isHidden(elem);
        var dataShow = dataPriv.get(elem, "fxshow");
        for (prop in config.queue || (null == (hooks = jQuery._queueHooks(elem, "fx")).unqueued && (hooks.unqueued = 0, oldfire = hooks.empty.fire, hooks.empty.fire = function() {
          if (!hooks.unqueued) {
            oldfire();
          }
        }), hooks.unqueued++, anim.always(function() {
          anim.always(function() {
            hooks.unqueued--;
            if (!jQuery.queue(elem, "fx").length) {
              hooks.empty.fire();
            }
          });
        })), props) {
          if (value = props[prop], trueRE.test(value)) {
            if (delete props[prop], matched = matched || "toggle" === value, value === (hidden ? "hide" : "show")) {
              if ("show" !== value || !dataShow || void 0 === dataShow[prop]) {
                continue;
              }
              hidden = true;
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
          }
        }
        if ((tween = !jQuery.isEmptyObject(props)) || !jQuery.isEmptyObject(orig)) {
          for (prop in f && 1 === elem.nodeType && (config.overflow = [style.overflow, style.overflowX, style.overflowY], null == (restoreDisplay = dataShow && dataShow.display) && (restoreDisplay = dataPriv.get(elem, "display")), "none" === (display = jQuery.css(elem, "display")) && (restoreDisplay ? display = restoreDisplay : (showHide([elem], true), restoreDisplay = elem.style.display || restoreDisplay, display = jQuery.css(elem, "display"), showHide([elem]))), ("inline" === display || "inline-block" === 
          display && null != restoreDisplay) && "none" === jQuery.css(elem, "float") && (tween || (anim.done(function() {
            style.display = restoreDisplay;
          }), null == restoreDisplay && (display = style.display, restoreDisplay = "none" === display ? "" : display)), style.display = "inline-block")), config.overflow && (style.overflow = "hidden", anim.always(function() {
            style.overflow = config.overflow[0];
            style.overflowX = config.overflow[1];
            style.overflowY = config.overflow[2];
          })), tween = false, orig) {
            if (!tween) {
              if (dataShow) {
                if ("hidden" in dataShow) {
                  hidden = dataShow.hidden;
                }
              } else {
                dataShow = dataPriv.access(elem, "fxshow", {
                  display : restoreDisplay
                });
              }
              if (matched) {
                dataShow.hidden = !hidden;
              }
              if (hidden) {
                showHide([elem], true);
              }
              anim.done(function() {
                for (prop in hidden || showHide([elem]), dataPriv.remove(elem, "fxshow"), orig) {
                  jQuery.style(elem, prop, orig[prop]);
                }
              });
            }
            tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
              dataShow[prop] = tween.start;
              if (hidden) {
                tween.end = tween.start;
                tween.start = 0;
              }
            }
          }
        }
      }],
      prefilter : function(callback, options) {
        if (options) {
          Animation.prefilters.unshift(callback);
        } else {
          Animation.prefilters.push(callback);
        }
      }
    });
    jQuery.speed = function(speed, easing, callback) {
      var opt = speed && "object" == typeof speed ? jQuery.extend({}, speed) : {
        complete : callback || !callback && easing || fn(speed) && speed,
        duration : speed,
        easing : callback && easing || easing && !fn(easing) && easing
      };
      return jQuery.fx.off ? opt.duration = 0 : "number" != typeof opt.duration && (opt.duration in jQuery.fx.speeds ? opt.duration = jQuery.fx.speeds[opt.duration] : opt.duration = jQuery.fx.speeds._default), null != opt.queue && true !== opt.queue || (opt.queue = "fx"), opt.old = opt.complete, opt.complete = function() {
        if (fn(opt.old)) {
          opt.old.call(this);
        }
        if (opt.queue) {
          jQuery.dequeue(this, opt.queue);
        }
      }, opt;
    };
    jQuery.fn.extend({
      fadeTo : function(speed, to, callback, duration) {
        return this.filter(isHidden).css("opacity", 0).show().end().animate({
          opacity : to
        }, speed, callback, duration);
      },
      animate : function(prop, speed, easing, callback) {
        var empty = jQuery.isEmptyObject(prop);
        var optall = jQuery.speed(speed, easing, callback);
        var run = function() {
          var anim = Animation(this, jQuery.extend({}, prop), optall);
          if (empty || dataPriv.get(this, "finish")) {
            anim.stop(true);
          }
        };
        return run.finish = run, empty || false === optall.queue ? this.each(run) : this.queue(optall.queue, run);
      },
      stop : function(type, clearQueue, gotoEnd) {
        var stopQueue = function(hooks) {
          var stop = hooks.stop;
          delete hooks.stop;
          stop(gotoEnd);
        };
        return "string" != typeof type && (gotoEnd = clearQueue, clearQueue = type, type = void 0), clearQueue && false !== type && this.queue(type || "fx", []), this.each(function() {
          var clearQueue = true;
          var index = null != type && type + "queueHooks";
          var timers = jQuery.timers;
          var data = dataPriv.get(this);
          if (index) {
            if (data[index] && data[index].stop) {
              stopQueue(data[index]);
            }
          } else {
            for (index in data) {
              if (data[index] && data[index].stop && rrun.test(index)) {
                stopQueue(data[index]);
              }
            }
          }
          index = timers.length;
          for (; index--;) {
            if (!(timers[index].elem !== this || null != type && timers[index].queue !== type)) {
              timers[index].anim.stop(gotoEnd);
              clearQueue = false;
              timers.splice(index, 1);
            }
          }
          if (!(!clearQueue && gotoEnd)) {
            jQuery.dequeue(this, type);
          }
        });
      },
      finish : function(type) {
        return false !== type && (type = type || "fx"), this.each(function() {
          var index;
          var data = dataPriv.get(this);
          var queue = data[type + "queue"];
          var hooks = data[type + "queueHooks"];
          var timers = jQuery.timers;
          var length = queue ? queue.length : 0;
          data.finish = true;
          jQuery.queue(this, type, []);
          if (hooks && hooks.stop) {
            hooks.stop.call(this, true);
          }
          index = timers.length;
          for (; index--;) {
            if (timers[index].elem === this && timers[index].queue === type) {
              timers[index].anim.stop(true);
              timers.splice(index, 1);
            }
          }
          index = 0;
          for (; index < length; index++) {
            if (queue[index] && queue[index].finish) {
              queue[index].finish.call(this);
            }
          }
          delete data.finish;
        });
      }
    });
    jQuery.each(["toggle", "show", "hide"], function(canCreateDiscussions, name) {
      var cssFn = jQuery.fn[name];
      jQuery.fn[name] = function(x, callback, options) {
        return null == x || "boolean" == typeof x ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), x, callback, options);
      };
    });
    jQuery.each({
      slideDown : genFx("show"),
      slideUp : genFx("hide"),
      slideToggle : genFx("toggle"),
      fadeIn : {
        opacity : "show"
      },
      fadeOut : {
        opacity : "hide"
      },
      fadeToggle : {
        opacity : "toggle"
      }
    }, function(original, props) {
      jQuery.fn[original] = function(speed, callback, options) {
        return this.animate(props, speed, callback, options);
      };
    });
    jQuery.timers = [];
    jQuery.fx.tick = function() {
      var maxBet;
      var i = 0;
      var timers = jQuery.timers;
      fxNow = Date.now();
      for (; i < timers.length; i++) {
        if (!((maxBet = timers[i])() || timers[i] !== maxBet)) {
          timers.splice(i--, 1);
        }
      }
      if (!timers.length) {
        jQuery.fx.stop();
      }
      fxNow = void 0;
    };
    jQuery.fx.timer = function(url) {
      jQuery.timers.push(url);
      jQuery.fx.start();
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
      if (!lt) {
        lt = true;
        step();
      }
    };
    jQuery.fx.stop = function() {
      lt = null;
    };
    jQuery.fx.speeds = {
      slow : 600,
      fast : 200,
      _default : 400
    };
    jQuery.fn.delay = function(b, type) {
      return b = jQuery.fx && jQuery.fx.speeds[b] || b, type = type || "fx", this.queue(type, function(t, incoming_item) {
        var i = window.setTimeout(t, b);
        incoming_item.stop = function() {
          window.clearTimeout(i);
        };
      });
    };
    (function() {
      var elem = document.createElement("input");
      var opt = document.createElement("select").appendChild(document.createElement("option"));
      elem.type = "checkbox";
      support.checkOn = "" !== elem.value;
      support.optSelected = opt.selected;
      (elem = document.createElement("input")).value = "t";
      elem.type = "radio";
      support.radioValue = "t" === elem.value;
    })();
    var boolHook;
    var attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
      attr : function(name, value) {
        return access(this, jQuery.attr, name, value, arguments.length > 1);
      },
      removeAttr : function(name) {
        return this.each(function() {
          jQuery.removeAttr(this, name);
        });
      }
    });
    jQuery.extend({
      attr : function(elem, name, value) {
        var ret;
        var hooks;
        var type = elem.nodeType;
        if (3 !== type && 8 !== type && 2 !== type) {
          return void 0 === elem.getAttribute ? jQuery.prop(elem, name, value) : (1 === type && jQuery.isXMLDoc(elem) || (hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0)), void 0 !== value ? null === value ? void jQuery.removeAttr(elem, name) : hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : (elem.setAttribute(name, value + ""), value) : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : 
          null == (ret = jQuery.find.attr(elem, name)) ? void 0 : ret);
        }
      },
      attrHooks : {
        type : {
          set : function(parent, value) {
            if (!support.radioValue && "radio" === value && callback(parent, "input")) {
              var n = parent.value;
              return parent.setAttribute("type", value), n && (parent.value = n), value;
            }
          }
        }
      },
      removeAttr : function(elem, value) {
        var ATTR_MAXLENGTH;
        var callbackCount = 0;
        var callbackVals = value && value.match(rnotwhite);
        if (callbackVals && 1 === elem.nodeType) {
          for (; ATTR_MAXLENGTH = callbackVals[callbackCount++];) {
            elem.removeAttribute(ATTR_MAXLENGTH);
          }
        }
      }
    });
    boolHook = {
      set : function(elem, value, key) {
        return false === value ? jQuery.removeAttr(elem, key) : elem.setAttribute(key, key), key;
      }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(canCreateDiscussions, name) {
      var n = attrHandle[name] || jQuery.find.attr;
      attrHandle[name] = function(window, status, s) {
        var ret;
        var handle;
        var lowercaseName = status.toLowerCase();
        return s || (handle = attrHandle[lowercaseName], attrHandle[lowercaseName] = ret, ret = null != n(window, status, s) ? lowercaseName : null, attrHandle[lowercaseName] = handle), ret;
      };
    });
    var inputNodeNames = /^(?:input|select|textarea|button)$/i;
    var srsRegex = /^(?:a|area)$/i;
    jQuery.fn.extend({
      prop : function(type, value) {
        return access(this, jQuery.prop, type, value, arguments.length > 1);
      },
      removeProp : function(name) {
        return this.each(function() {
          delete this[jQuery.propFix[name] || name];
        });
      }
    });
    jQuery.extend({
      prop : function(elem, name, value) {
        var ret;
        var hooks;
        var type = elem.nodeType;
        if (3 !== type && 8 !== type && 2 !== type) {
          return 1 === type && jQuery.isXMLDoc(elem) || (name = jQuery.propFix[name] || name, hooks = jQuery.propHooks[name]), void 0 !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : elem[name] = value : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : elem[name];
        }
      },
      propHooks : {
        tabIndex : {
          get : function(target) {
            var b = jQuery.find.attr(target, "tabindex");
            return b ? parseInt(b, 10) : inputNodeNames.test(target.nodeName) || srsRegex.test(target.nodeName) && target.href ? 0 : -1;
          }
        }
      },
      propFix : {
        for : "htmlFor",
        class : "className"
      }
    });
    if (!support.optSelected) {
      jQuery.propHooks.selected = {
        get : function(elem) {
          var parent = elem.parentNode;
          return parent && parent.parentNode && parent.parentNode.selectedIndex, null;
        },
        set : function(context) {
          var parent = context.parentNode;
          if (parent) {
            parent.selectedIndex;
            if (parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
          }
        }
      };
    }
    jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      jQuery.propFix[this.toLowerCase()] = this;
    });
    jQuery.fn.extend({
      addClass : function(value) {
        var out;
        var elem;
        var i;
        var c;
        var k;
        var j;
        var a;
        var l = 0;
        if (fn(value)) {
          return this.each(function(i) {
            jQuery(this).addClass(value.call(this, i, getClass(this)));
          });
        }
        if ((out = trim(value)).length) {
          for (; elem = this[l++];) {
            if (c = getClass(elem), i = 1 === elem.nodeType && " " + $(c) + " ") {
              j = 0;
              for (; k = out[j++];) {
                if (i.indexOf(" " + k + " ") < 0) {
                  i = i + (k + " ");
                }
              }
              if (c !== (a = $(i))) {
                elem.setAttribute("class", a);
              }
            }
          }
        }
        return this;
      },
      removeClass : function(value) {
        var result;
        var elem;
        var row;
        var i;
        var activeObserveHandle;
        var j;
        var name;
        var l = 0;
        if (fn(value)) {
          return this.each(function(i) {
            jQuery(this).removeClass(value.call(this, i, getClass(this)));
          });
        }
        if (!arguments.length) {
          return this.attr("class", "");
        }
        if ((result = trim(value)).length) {
          for (; elem = this[l++];) {
            if (i = getClass(elem), row = 1 === elem.nodeType && " " + $(i) + " ") {
              j = 0;
              for (; activeObserveHandle = result[j++];) {
                for (; row.indexOf(" " + activeObserveHandle + " ") > -1;) {
                  row = row.replace(" " + activeObserveHandle + " ", " ");
                }
              }
              if (i !== (name = $(row))) {
                elem.setAttribute("class", name);
              }
            }
          }
        }
        return this;
      },
      toggleClass : function(value, stateVal) {
        var undefined = typeof value;
        var r = "string" === undefined || Array.isArray(value);
        return "boolean" == typeof stateVal && r ? stateVal ? this.addClass(value) : this.removeClass(value) : fn(value) ? this.each(function(i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        }) : this.each(function() {
          var c;
          var l;
          var o;
          var s;
          if (r) {
            l = 0;
            o = jQuery(this);
            s = trim(value);
            for (; c = s[l++];) {
              if (o.hasClass(c)) {
                o.removeClass(c);
              } else {
                o.addClass(c);
              }
            }
          } else {
            if (!(void 0 !== value && "boolean" !== undefined)) {
              if (c = getClass(this)) {
                dataPriv.set(this, "__className__", c);
              }
              if (this.setAttribute) {
                this.setAttribute("class", c || false === value ? "" : dataPriv.get(this, "__className__") || "");
              }
            }
          }
        });
      },
      hasClass : function(e) {
        var sceneUid;
        var elem;
        var r = 0;
        sceneUid = " " + e + " ";
        for (; elem = this[r++];) {
          if (1 === elem.nodeType && (" " + $(getClass(elem)) + " ").indexOf(sceneUid) > -1) {
            return true;
          }
        }
        return false;
      }
    });
    var n = /\r/g;
    jQuery.fn.extend({
      val : function(v) {
        var hooks;
        var value;
        var d;
        var elem = this[0];
        return arguments.length ? (d = fn(v), this.each(function(medium) {
          var value;
          if (1 === this.nodeType) {
            if (null == (value = d ? v.call(this, medium, jQuery(this).val()) : v)) {
              value = "";
            } else {
              if ("number" == typeof value) {
                value = value + "";
              } else {
                if (Array.isArray(value)) {
                  value = jQuery.map(value, function(value) {
                    return null == value ? "" : value + "";
                  });
                }
              }
            }
            if (!((hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]) && "set" in hooks && void 0 !== hooks.set(this, value, "value"))) {
              this.value = value;
            }
          }
        })) : elem ? (hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()]) && "get" in hooks && void 0 !== (value = hooks.get(elem, "value")) ? value : "string" == typeof(value = elem.value) ? value.replace(n, "") : null == value ? "" : value : void 0;
      }
    });
    jQuery.extend({
      valHooks : {
        option : {
          get : function(elem) {
            var tween = jQuery.find.attr(elem, "value");
            return null != tween ? tween : $(jQuery.text(elem));
          }
        },
        select : {
          get : function(elem) {
            var value;
            var e;
            var i;
            var options = elem.options;
            var index = elem.selectedIndex;
            var one = "select-one" === elem.type;
            var values = one ? null : [];
            var max = one ? index + 1 : options.length;
            i = index < 0 ? max : one ? index : 0;
            for (; i < max; i++) {
              if (((e = options[i]).selected || i === index) && !e.disabled && (!e.parentNode.disabled || !callback(e.parentNode, "optgroup"))) {
                if (value = jQuery(e).val(), one) {
                  return value;
                }
                values.push(value);
              }
            }
            return values;
          },
          set : function(elem, value) {
            var outputFn;
            var val;
            var options = elem.options;
            var result = jQuery.makeArray(value);
            var i = options.length;
            for (; i--;) {
              if ((val = options[i]).selected = jQuery.inArray(jQuery.valHooks.option.get(val), result) > -1) {
                outputFn = true;
              }
            }
            return outputFn || (elem.selectedIndex = -1), result;
          }
        }
      }
    });
    jQuery.each(["radio", "checkbox"], function() {
      jQuery.valHooks[this] = {
        set : function(elem, value) {
          if (Array.isArray(value)) {
            return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
          }
        }
      };
      if (!support.checkOn) {
        jQuery.valHooks[this].get = function(elem) {
          return null === elem.getAttribute("value") ? "on" : elem.value;
        };
      }
    });
    support.focusin = "onfocusin" in window;
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
    var onInspectorMove = function(e) {
      e.stopPropagation();
    };
    jQuery.extend(jQuery.event, {
      trigger : function(event, value, elem, data) {
        var i;
        var cur;
        var tmp;
        var bubbleType;
        var ontype;
        var next;
        var special;
        var parent;
        var eventPath = [elem || document];
        var type = hasOwn.call(event, "type") ? event.type : event;
        var v = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
        if (cur = parent = tmp = elem = elem || document, 3 !== elem.nodeType && 8 !== elem.nodeType && !rfocusMorph.test(type + jQuery.event.triggered) && (type.indexOf(".") > -1 && (v = type.split("."), type = v.shift(), v.sort()), ontype = type.indexOf(":") < 0 && "on" + type, (event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" == typeof event && event)).isTrigger = data ? 2 : 3, event.namespace = v.join("."), event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + 
        "(\\.|$)") : null, event.result = void 0, event.target || (event.target = elem), value = null == value ? [event] : jQuery.makeArray(value, [event]), special = jQuery.event.special[type] || {}, data || !special.trigger || false !== special.trigger.apply(elem, value))) {
          if (!data && !special.noBubble && !isWindow(elem)) {
            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
              cur = cur.parentNode;
            }
            for (; cur; cur = cur.parentNode) {
              eventPath.push(cur);
              tmp = cur;
            }
            if (tmp === (elem.ownerDocument || document)) {
              eventPath.push(tmp.defaultView || tmp.parentWindow || window);
            }
          }
          i = 0;
          for (; (cur = eventPath[i++]) && !event.isPropagationStopped();) {
            parent = cur;
            event.type = i > 1 ? bubbleType : special.bindType || type;
            if (next = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle")) {
              next.apply(cur, value);
            }
            if ((next = ontype && cur[ontype]) && next.apply && acceptData(cur)) {
              event.result = next.apply(cur, value);
              if (false === event.result) {
                event.preventDefault();
              }
            }
          }
          return event.type = type, data || event.isDefaultPrevented() || special._default && false !== special._default.apply(eventPath.pop(), value) || !acceptData(elem) || ontype && fn(elem[type]) && !isWindow(elem) && ((tmp = elem[ontype]) && (elem[ontype] = null), jQuery.event.triggered = type, event.isPropagationStopped() && parent.addEventListener(type, onInspectorMove), elem[type](), event.isPropagationStopped() && parent.removeEventListener(type, onInspectorMove), jQuery.event.triggered = 
          void 0, tmp && (elem[ontype] = tmp)), event.result;
        }
      },
      simulate : function(type, elem, options) {
        var r = jQuery.extend(new jQuery.Event, options, {
          type : type,
          isSimulated : true
        });
        jQuery.event.trigger(r, null, elem);
      }
    });
    jQuery.fn.extend({
      trigger : function(name, type) {
        return this.each(function() {
          jQuery.event.trigger(name, type, this);
        });
      },
      triggerHandler : function(type, data) {
        var parent = this[0];
        if (parent) {
          return jQuery.event.trigger(type, data, parent, true);
        }
      }
    });
    if (!support.focusin) {
      jQuery.each({
        focus : "focusin",
        blur : "focusout"
      }, function(orig, fix) {
        var handler = function(event) {
          jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
        };
        jQuery.event.special[fix] = {
          setup : function() {
            var doc = this.ownerDocument || this;
            var attaches = dataPriv.access(doc, fix);
            if (!attaches) {
              doc.addEventListener(orig, handler, true);
            }
            dataPriv.access(doc, fix, (attaches || 0) + 1);
          },
          teardown : function() {
            var doc = this.ownerDocument || this;
            var attaches = dataPriv.access(doc, fix) - 1;
            if (attaches) {
              dataPriv.access(doc, fix, attaches);
            } else {
              doc.removeEventListener(orig, handler, true);
              dataPriv.remove(doc, fix);
            }
          }
        };
      });
    }
    var location = window.location;
    var widgetUniqueIDIndex = Date.now();
    var rquery = /\?/;
    jQuery.parseXML = function(data) {
      var xml;
      if (!data || "string" != typeof data) {
        return null;
      }
      try {
        xml = (new window.DOMParser).parseFromString(data, "text/xml");
      } catch (e) {
        xml = void 0;
      }
      return xml && !xml.getElementsByTagName("parsererror").length || jQuery.error("Invalid XML: " + data), xml;
    };
    var testRxp = /\[\]$/;
    var reVowels = /\r?\n/g;
    var regIsJS = /^(?:submit|button|image|reset|file)$/i;
    var rsubmittable = /^(?:input|select|textarea|keygen)/i;
    jQuery.param = function(a, obj) {
      var property;
      var displayUsedBy = [];
      var add = function(e, result) {
        var value = fn(result) ? result() : result;
        displayUsedBy[displayUsedBy.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == value ? "" : value);
      };
      if (null == a) {
        return "";
      }
      if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
        jQuery.each(a, function() {
          add(this.name, this.value);
        });
      } else {
        for (property in a) {
          extend(property, a[property], obj, add);
        }
      }
      return displayUsedBy.join("&");
    };
    jQuery.fn.extend({
      serialize : function() {
        return jQuery.param(this.serializeArray());
      },
      serializeArray : function() {
        return this.map(function() {
          var elements = jQuery.prop(this, "elements");
          return elements ? jQuery.makeArray(elements) : this;
        }).filter(function() {
          var temp = this.type;
          return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !regIsJS.test(temp) && (this.checked || !path.test(temp));
        }).map(function(canCreateDiscussions, ctlParams) {
          var val = jQuery(this).val();
          return null == val ? null : Array.isArray(val) ? jQuery.map(val, function(val) {
            return {
              name : ctlParams.name,
              value : val.replace(reVowels, "\r\n")
            };
          }) : {
            name : ctlParams.name,
            value : val.replace(reVowels, "\r\n")
          };
        }).get();
      }
    });
    var jsre = /%20/g;
    var rhash = /#.*$/;
    var rts = /([?&])_=[^&]*/;
    var rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm;
    var re = /^(?:GET|HEAD)$/;
    var rprotocol = /^\/\//;
    var prefilters = {};
    var transports = {};
    var Ft = "*/".concat("*");
    var originAnchor = document.createElement("a");
    originAnchor.href = location.href;
    jQuery.extend({
      active : 0,
      lastModified : {},
      etag : {},
      ajaxSettings : {
        url : location.href,
        type : "GET",
        isLocal : /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(location.protocol),
        global : true,
        processData : true,
        async : true,
        contentType : "application/x-www-form-urlencoded; charset=UTF-8",
        accepts : {
          "*" : Ft,
          text : "text/plain",
          html : "text/html",
          xml : "application/xml, text/xml",
          json : "application/json, text/javascript"
        },
        contents : {
          xml : /\bxml\b/,
          html : /\bhtml/,
          json : /\bjson\b/
        },
        responseFields : {
          xml : "responseXML",
          text : "responseText",
          json : "responseJSON"
        },
        converters : {
          "* text" : String,
          "text html" : true,
          "text json" : JSON.parse,
          "text xml" : jQuery.parseXML
        },
        flatOptions : {
          url : true,
          context : true
        }
      },
      ajaxSetup : function(target, settings) {
        return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
      },
      ajaxPrefilter : addToPrefiltersOrTransports(prefilters),
      ajaxTransport : addToPrefiltersOrTransports(transports),
      ajax : function(url, options) {
        function done(status, nativeStatusText, responses, headers) {
          var isSuccess;
          var success;
          var error;
          var response;
          var modified;
          var statusText = nativeStatusText;
          if (!completed) {
            completed = true;
            if (showAboveTimeout) {
              window.clearTimeout(showAboveTimeout);
            }
            transport = void 0;
            responseHeadersString = headers || "";
            jqXHR.readyState = status > 0 ? 4 : 0;
            isSuccess = status >= 200 && status < 300 || 304 === status;
            if (responses) {
              response = function(s, ajaxRequest, responses) {
                var ct;
                var type;
                var finalDataType;
                var firstDataType;
                var contents = s.contents;
                var dataTypes = s.dataTypes;
                for (; "*" === dataTypes[0];) {
                  dataTypes.shift();
                  if (void 0 === ct) {
                    ct = s.mimeType || ajaxRequest.getResponseHeader("Content-Type");
                  }
                }
                if (ct) {
                  for (type in contents) {
                    if (contents[type] && contents[type].test(ct)) {
                      dataTypes.unshift(type);
                      break;
                    }
                  }
                }
                if (dataTypes[0] in responses) {
                  finalDataType = dataTypes[0];
                } else {
                  for (type in responses) {
                    if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                      finalDataType = type;
                      break;
                    }
                    if (!firstDataType) {
                      firstDataType = type;
                    }
                  }
                  finalDataType = finalDataType || firstDataType;
                }
                if (finalDataType) {
                  return finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType];
                }
              }(s, jqXHR, responses);
            }
            response = function(s, data, options, isSuccess) {
              var prop;
              var key;
              var value;
              var arr;
              var id;
              var model = {};
              var mods = s.dataTypes.slice();
              if (mods[1]) {
                for (value in s.converters) {
                  model[value.toLowerCase()] = s.converters[value];
                }
              }
              key = mods.shift();
              for (; key;) {
                if (s.responseFields[key] && (options[s.responseFields[key]] = data), !id && isSuccess && s.dataFilter && (data = s.dataFilter(data, s.dataType)), id = key, key = mods.shift()) {
                  if ("*" === key) {
                    key = id;
                  } else {
                    if ("*" !== id && id !== key) {
                      if (!(value = model[id + " " + key] || model["* " + key])) {
                        for (prop in model) {
                          if ((arr = prop.split(" "))[1] === key && (value = model[id + " " + arr[0]] || model["* " + arr[0]])) {
                            if (true === value) {
                              value = model[prop];
                            } else {
                              if (true !== model[prop]) {
                                key = arr[0];
                                mods.unshift(arr[1]);
                              }
                            }
                            break;
                          }
                        }
                      }
                      if (true !== value) {
                        if (value && s.throws) {
                          data = value(data);
                        } else {
                          try {
                            data = value(data);
                          } catch ($null) {
                            return {
                              state : "parsererror",
                              error : value ? $null : "No conversion from " + id + " to " + key
                            };
                          }
                        }
                      }
                    }
                  }
                }
              }
              return {
                state : "success",
                data : data
              };
            }(s, response, jqXHR, isSuccess);
            if (isSuccess) {
              if (s.ifModified) {
                if (modified = jqXHR.getResponseHeader("Last-Modified")) {
                  jQuery.lastModified[cacheURL] = modified;
                }
                if (modified = jqXHR.getResponseHeader("etag")) {
                  jQuery.etag[cacheURL] = modified;
                }
              }
              if (204 === status || "HEAD" === s.type) {
                statusText = "nocontent";
              } else {
                if (304 === status) {
                  statusText = "notmodified";
                } else {
                  statusText = response.state;
                  success = response.data;
                  isSuccess = !(error = response.error);
                }
              }
            } else {
              error = statusText;
              if (!(!status && statusText)) {
                statusText = "error";
                if (status < 0) {
                  status = 0;
                }
              }
            }
            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + "";
            if (isSuccess) {
              deferred.resolveWith(obj, [success, statusText, jqXHR]);
            } else {
              deferred.rejectWith(obj, [jqXHR, statusText, error]);
            }
            jqXHR.statusCode(statusCode);
            statusCode = void 0;
            if (f) {
              globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
            }
            completeDeferred.fireWith(obj, [jqXHR, statusText]);
            if (f) {
              globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
              if (!--jQuery.active) {
                jQuery.event.trigger("ajaxStop");
              }
            }
          }
        }
        if ("object" == typeof url) {
          options = url;
          url = void 0;
        }
        options = options || {};
        var transport;
        var cacheURL;
        var responseHeadersString;
        var marks;
        var showAboveTimeout;
        var urlAnchor;
        var completed;
        var f;
        var i;
        var uncached;
        var s = jQuery.ajaxSetup({}, options);
        var obj = s.context || s;
        var globalEventContext = s.context && (obj.nodeType || obj.jquery) ? jQuery(obj) : jQuery.event;
        var deferred = jQuery.Deferred();
        var completeDeferred = jQuery.Callbacks("once memory");
        var statusCode = s.statusCode || {};
        var data = {};
        var requestHeadersNames = {};
        var status = "canceled";
        var jqXHR = {
          readyState : 0,
          getResponseHeader : function(header) {
            var match;
            if (completed) {
              if (!marks) {
                marks = {};
                for (; match = rheaders.exec(responseHeadersString);) {
                  marks[match[1].toLowerCase() + " "] = (marks[match[1].toLowerCase() + " "] || []).concat(match[2]);
                }
              }
              match = marks[header.toLowerCase() + " "];
            }
            return null == match ? null : match.join(", ");
          },
          getAllResponseHeaders : function() {
            return completed ? responseHeadersString : null;
          },
          setRequestHeader : function(name, value) {
            return null == completed && (name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name, data[name] = value), this;
          },
          overrideMimeType : function(type) {
            return null == completed && (s.mimeType = type), this;
          },
          statusCode : function(map) {
            var tmp;
            if (map) {
              if (completed) {
                jqXHR.always(map[jqXHR.status]);
              } else {
                for (tmp in map) {
                  statusCode[tmp] = [statusCode[tmp], map[tmp]];
                }
              }
            }
            return this;
          },
          abort : function(type) {
            var statusText = type || status;
            return transport && transport.abort(statusText), done(0, statusText), this;
          }
        };
        if (deferred.promise(jqXHR), s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"), s.type = options.method || options.type || s.method || s.type, s.dataTypes = (s.dataType || "*").toLowerCase().match(rnotwhite) || [""], null == s.crossDomain) {
          urlAnchor = document.createElement("a");
          try {
            urlAnchor.href = s.url;
            urlAnchor.href = urlAnchor.href;
            s.crossDomain = originAnchor.protocol + "//" + originAnchor.host != urlAnchor.protocol + "//" + urlAnchor.host;
          } catch (e) {
            s.crossDomain = true;
          }
        }
        if (s.data && s.processData && "string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)), inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), completed) {
          return jqXHR;
        }
        for (i in(f = jQuery.event && s.global) && 0 == jQuery.active++ && jQuery.event.trigger("ajaxStart"), s.type = s.type.toUpperCase(), s.hasContent = !re.test(s.type), cacheURL = s.url.replace(rhash, ""), s.hasContent ? s.data && s.processData && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && (s.data = s.data.replace(jsre, "+")) : (uncached = s.url.slice(cacheURL.length), s.data && (s.processData || "string" == typeof s.data) && (cacheURL = cacheURL + ((rquery.test(cacheURL) ? 
        "&" : "?") + s.data), delete s.data), false === s.cache && (cacheURL = cacheURL.replace(rts, "$1"), uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + widgetUniqueIDIndex++ + uncached), s.url = cacheURL + uncached), s.ifModified && (jQuery.lastModified[cacheURL] && jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]), jQuery.etag[cacheURL] && jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])), (s.data && s.hasContent && false !== s.contentType || options.contentType) && 
        jqXHR.setRequestHeader("Content-Type", s.contentType), jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : s.accepts["*"]), s.headers) {
          jqXHR.setRequestHeader(i, s.headers[i]);
        }
        if (s.beforeSend && (false === s.beforeSend.call(obj, jqXHR, s) || completed)) {
          return jqXHR.abort();
        }
        if (status = "abort", completeDeferred.add(s.complete), jqXHR.done(s.success), jqXHR.fail(s.error), transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
          if (jqXHR.readyState = 1, f && globalEventContext.trigger("ajaxSend", [jqXHR, s]), completed) {
            return jqXHR;
          }
          if (s.async && s.timeout > 0) {
            showAboveTimeout = window.setTimeout(function() {
              jqXHR.abort("timeout");
            }, s.timeout);
          }
          try {
            completed = false;
            transport.send(data, done);
          } catch (success) {
            if (completed) {
              throw success;
            }
            done(-1, success);
          }
        } else {
          done(-1, "No Transport");
        }
        return jqXHR;
      },
      getJSON : function(data, options, callback) {
        return jQuery.get(data, options, callback, "json");
      },
      getScript : function(data, options) {
        return jQuery.get(data, void 0, options, "script");
      }
    });
    jQuery.each(["get", "post"], function(canCreateDiscussions, method) {
      jQuery[method] = function(url, p, color, type) {
        return fn(p) && (type = type || color, color = p, p = void 0), jQuery.ajax(jQuery.extend({
          url : url,
          type : method,
          dataType : type,
          data : p,
          success : color
        }, jQuery.isPlainObject(url) && url));
      };
    });
    jQuery._evalUrl = function(e, url) {
      return jQuery.ajax({
        url : e,
        type : "GET",
        dataType : "script",
        cache : true,
        async : false,
        global : false,
        converters : {
          "text script" : function() {
          }
        },
        dataFilter : function(text) {
          jQuery.globalEval(text, url);
        }
      });
    };
    jQuery.fn.extend({
      wrapAll : function(value) {
        var t;
        return this[0] && (fn(value) && (value = value.call(this[0])), t = jQuery(value, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          var elem = this;
          for (; elem.firstElementChild;) {
            elem = elem.firstElementChild;
          }
          return elem;
        }).append(this)), this;
      },
      wrapInner : function(wrapper) {
        return fn(wrapper) ? this.each(function(i) {
          jQuery(this).wrapInner(wrapper.call(this, i));
        }) : this.each(function() {
          var fixture = jQuery(this);
          var clone = fixture.contents();
          if (clone.length) {
            clone.wrapAll(wrapper);
          } else {
            fixture.append(wrapper);
          }
        });
      },
      wrap : function(html) {
        var isFunction = fn(html);
        return this.each(function(i) {
          jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
        });
      },
      unwrap : function(name) {
        return this.parent(name).not("body").each(function() {
          jQuery(this).replaceWith(this.childNodes);
        }), this;
      }
    });
    jQuery.expr.pseudos.hidden = function(name) {
      return !jQuery.expr.pseudos.visible(name);
    };
    jQuery.expr.pseudos.visible = function(el) {
      return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
    };
    jQuery.ajaxSettings.xhr = function() {
      try {
        return new window.XMLHttpRequest;
      } catch (e) {
      }
    };
    var xhrSuccessStatus = {
      0 : 200,
      1223 : 204
    };
    var xhrSupported = jQuery.ajaxSettings.xhr();
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function(options) {
      var callback;
      var errorCallback;
      if (support.cors || xhrSupported && !options.crossDomain) {
        return {
          send : function(headers, callback) {
            var name;
            var xhr = options.xhr();
            if (xhr.open(options.type, options.url, options.async, options.username, options.password), options.xhrFields) {
              for (name in options.xhrFields) {
                xhr[name] = options.xhrFields[name];
              }
            }
            for (name in options.mimeType && xhr.overrideMimeType && xhr.overrideMimeType(options.mimeType), options.crossDomain || headers["X-Requested-With"] || (headers["X-Requested-With"] = "XMLHttpRequest"), headers) {
              xhr.setRequestHeader(name, headers[name]);
            }
            callback = function(event) {
              return function() {
                if (callback) {
                  callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                  if ("abort" === event) {
                    xhr.abort();
                  } else {
                    if ("error" === event) {
                      if ("number" != typeof xhr.status) {
                        callback(0, "error");
                      } else {
                        callback(xhr.status, xhr.statusText);
                      }
                    } else {
                      callback(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, "text" !== (xhr.responseType || "text") || "string" != typeof xhr.responseText ? {
                        binary : xhr.response
                      } : {
                        text : xhr.responseText
                      }, xhr.getAllResponseHeaders());
                    }
                  }
                }
              };
            };
            xhr.onload = callback();
            errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
            if (void 0 !== xhr.onabort) {
              xhr.onabort = errorCallback;
            } else {
              xhr.onreadystatechange = function() {
                if (4 === xhr.readyState) {
                  window.setTimeout(function() {
                    if (callback) {
                      errorCallback();
                    }
                  });
                }
              };
            }
            callback = callback("abort");
            try {
              xhr.send(options.hasContent && options.data || null);
            } catch (e) {
              if (callback) {
                throw e;
              }
            }
          },
          abort : function() {
            if (callback) {
              callback();
            }
          }
        };
      }
    });
    jQuery.ajaxPrefilter(function(options) {
      if (options.crossDomain) {
        options.contents.script = false;
      }
    });
    jQuery.ajaxSetup({
      accepts : {
        script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents : {
        script : /\b(?:java|ecma)script\b/
      },
      converters : {
        "text script" : function(value) {
          return jQuery.globalEval(value), value;
        }
      }
    });
    jQuery.ajaxPrefilter("script", function(settings) {
      if (void 0 === settings.cache) {
        settings.cache = false;
      }
      if (settings.crossDomain) {
        settings.type = "GET";
      }
    });
    jQuery.ajaxTransport("script", function(options) {
      var fileElem;
      var callback;
      if (options.crossDomain || options.scriptAttrs) {
        return {
          send : function(packets, callback) {
            fileElem = jQuery("<script>").attr(options.scriptAttrs || {}).prop({
              charset : options.scriptCharset,
              src : options.url
            }).on("load error", callback = function(result) {
              fileElem.remove();
              callback = null;
              if (result) {
                callback("error" === result.type ? 404 : 200, result.type);
              }
            });
            document.head.appendChild(fileElem[0]);
          },
          abort : function() {
            if (callback) {
              callback();
            }
          }
        };
      }
    });
    var summary;
    var oldCallbacks = [];
    var rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
      jsonp : "callback",
      jsonpCallback : function() {
        var indexLookupKey = oldCallbacks.pop() || jQuery.expando + "_" + widgetUniqueIDIndex++;
        return this[indexLookupKey] = true, indexLookupKey;
      }
    });
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, scanners) {
      var callbackName;
      var overwritten;
      var responseContainer;
      var jsonProp = false !== s.jsonp && (rjsonp.test(s.url) ? "url" : "string" == typeof s.data && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
      if (jsonProp || "jsonp" === s.dataTypes[0]) {
        return callbackName = s.jsonpCallback = fn(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName) : false !== s.jsonp && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), s.converters["script json"] = function() {
          return responseContainer || jQuery.error(callbackName + " was not called"), responseContainer[0];
        }, s.dataTypes[0] = "json", overwritten = window[callbackName], window[callbackName] = function() {
          responseContainer = arguments;
        }, scanners.always(function() {
          if (void 0 === overwritten) {
            jQuery(window).removeProp(callbackName);
          } else {
            window[callbackName] = overwritten;
          }
          if (s[callbackName]) {
            s.jsonpCallback = originalSettings.jsonpCallback;
            oldCallbacks.push(callbackName);
          }
          if (responseContainer && fn(overwritten)) {
            overwritten(responseContainer[0]);
          }
          responseContainer = overwritten = void 0;
        }), "script";
      }
    });
    support.createHTMLDocument = ((summary = document.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === summary.childNodes.length);
    jQuery.parseHTML = function(data, context, keepScripts) {
      return "string" != typeof data ? [] : ("boolean" == typeof context && (keepScripts = context, context = false), context || (support.createHTMLDocument ? ((target = (context = document.implementation.createHTMLDocument("")).createElement("base")).href = document.location.href, context.head.appendChild(target)) : context = document), scripts = !keepScripts && [], (parsed = rsingleTag.exec(data)) ? [context.createElement(parsed[1])] : (parsed = buildFragment([data], context, scripts), scripts && 
      scripts.length && jQuery(scripts).remove(), jQuery.merge([], parsed.childNodes)));
      var target;
      var parsed;
      var scripts;
    };
    jQuery.fn.load = function(result, value, callback) {
      var name;
      var method;
      var args;
      var options = this;
      var a = result.indexOf(" ");
      return a > -1 && (name = $(result.slice(a)), result = result.slice(0, a)), fn(value) ? (callback = value, value = void 0) : value && "object" == typeof value && (method = "POST"), options.length > 0 && jQuery.ajax({
        url : result,
        type : method || "GET",
        dataType : "html",
        data : value
      }).done(function(data) {
        args = arguments;
        options.html(name ? jQuery("<div>").append(jQuery.parseHTML(data)).find(name) : data);
      }).always(callback && function(name, type) {
        options.each(function() {
          callback.apply(this, args || [name.responseText, type, name]);
        });
      }), this;
    };
    jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(canCreateDiscussions, type) {
      jQuery.fn[type] = function(e) {
        return this.on(type, e);
      };
    });
    jQuery.expr.pseudos.animated = function(elem) {
      return jQuery.grep(jQuery.timers, function(fn) {
        return elem === fn.elem;
      }).length;
    };
    jQuery.offset = {
      setOffset : function(data, options, x) {
        var curPosition;
        var curLeft;
        var a;
        var curTop;
        var curOffset;
        var value;
        var position = jQuery.css(data, "position");
        var wrapper = jQuery(data);
        var props = {};
        if ("static" === position) {
          data.style.position = "relative";
        }
        curOffset = wrapper.offset();
        a = jQuery.css(data, "top");
        value = jQuery.css(data, "left");
        if (("absolute" === position || "fixed" === position) && (a + value).indexOf("auto") > -1) {
          curTop = (curPosition = wrapper.position()).top;
          curLeft = curPosition.left;
        } else {
          curTop = parseFloat(a) || 0;
          curLeft = parseFloat(value) || 0;
        }
        if (fn(options)) {
          options = options.call(data, x, jQuery.extend({}, curOffset));
        }
        if (null != options.top) {
          props.top = options.top - curOffset.top + curTop;
        }
        if (null != options.left) {
          props.left = options.left - curOffset.left + curLeft;
        }
        if ("using" in options) {
          options.using.call(data, props);
        } else {
          wrapper.css(props);
        }
      }
    };
    jQuery.fn.extend({
      offset : function(y) {
        if (arguments.length) {
          return void 0 === y ? this : this.each(function(i) {
            jQuery.offset.setOffset(this, y, i);
          });
        }
        var box;
        var win;
        var aTarget = this[0];
        return aTarget ? aTarget.getClientRects().length ? (box = aTarget.getBoundingClientRect(), win = aTarget.ownerDocument.defaultView, {
          top : box.top + win.pageYOffset,
          left : box.left + win.pageXOffset
        }) : {
          top : 0,
          left : 0
        } : void 0;
      },
      position : function() {
        if (this[0]) {
          var el;
          var offset;
          var node;
          var element = this[0];
          var parentOffset = {
            top : 0,
            left : 0
          };
          if ("fixed" === jQuery.css(element, "position")) {
            offset = element.getBoundingClientRect();
          } else {
            offset = this.offset();
            node = element.ownerDocument;
            el = element.offsetParent || node.documentElement;
            for (; el && (el === node.body || el === node.documentElement) && "static" === jQuery.css(el, "position");) {
              el = el.parentNode;
            }
            if (el && el !== element && 1 === el.nodeType) {
              (parentOffset = jQuery(el).offset()).top += jQuery.css(el, "borderTopWidth", true);
              parentOffset.left += jQuery.css(el, "borderLeftWidth", true);
            }
          }
          return {
            top : offset.top - parentOffset.top - jQuery.css(element, "marginTop", true),
            left : offset.left - parentOffset.left - jQuery.css(element, "marginLeft", true)
          };
        }
      },
      offsetParent : function() {
        return this.map(function() {
          var parent = this.offsetParent;
          for (; parent && "static" === jQuery.css(parent, "position");) {
            parent = parent.offsetParent;
          }
          return parent || node;
        });
      }
    });
    jQuery.each({
      scrollLeft : "pageXOffset",
      scrollTop : "pageYOffset"
    }, function(type, prop) {
      var top = "pageYOffset" === prop;
      jQuery.fn[type] = function(value) {
        return access(this, function(node, method, val) {
          var win;
          if (isWindow(node) ? win = node : 9 === node.nodeType && (win = node.defaultView), void 0 === val) {
            return win ? win[prop] : node[method];
          }
          if (win) {
            win.scrollTo(top ? win.pageXOffset : val, top ? val : win.pageYOffset);
          } else {
            node[method] = val;
          }
        }, type, value, arguments.length);
      };
    });
    jQuery.each(["top", "left"], function(canCreateDiscussions, prop) {
      jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, val) {
        if (val) {
          return val = curCSS(elem, prop), rnumnonpx.test(val) ? jQuery(elem).position()[prop] + "px" : val;
        }
      });
    });
    jQuery.each({
      Height : "height",
      Width : "width"
    }, function(name, type) {
      jQuery.each({
        padding : "inner" + name,
        content : type,
        "" : "outer" + name
      }, function(defaultExtra, type) {
        jQuery.fn[type] = function(margin, boardManager) {
          var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin);
          var extra = defaultExtra || (true === margin || true === boardManager ? "margin" : "border");
          return access(this, function(el, offset, undefined) {
            var doc;
            return isWindow(el) ? 0 === type.indexOf("outer") ? el["inner" + name] : el.document.documentElement["client" + name] : 9 === el.nodeType ? (doc = el.documentElement, Math.max(el.body["scroll" + name], doc["scroll" + name], el.body["offset" + name], doc["offset" + name], doc["client" + name])) : void 0 === undefined ? jQuery.css(el, offset, extra) : jQuery.style(el, offset, undefined, extra);
          }, type, chainable ? margin : void 0, chainable);
        };
      });
    });
    jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(canCreateDiscussions, type) {
      jQuery.fn[type] = function(userParams, callback) {
        return arguments.length > 0 ? this.on(type, null, userParams, callback) : this.trigger(type);
      };
    });
    jQuery.fn.extend({
      hover : function(fnOver, fnOut) {
        return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
      }
    });
    jQuery.fn.extend({
      bind : function(type, id, fn) {
        return this.on(type, null, id, fn);
      },
      unbind : function(type, fn) {
        return this.off(type, null, fn);
      },
      delegate : function(filter, event, callback, fn) {
        return this.on(event, filter, callback, fn);
      },
      undelegate : function(selector, types, fn) {
        return 1 === arguments.length ? this.off(selector, "**") : this.off(types, selector || "**", fn);
      }
    });
    jQuery.proxy = function(d, e) {
      var i;
      var headArgs;
      var proxyFn;
      if ("string" == typeof e && (i = d[e], e = d, d = i), fn(d)) {
        return headArgs = slice.call(arguments, 2), (proxyFn = function() {
          return d.apply(e || this, headArgs.concat(slice.call(arguments)));
        }).guid = d.guid = d.guid || jQuery.guid++, proxyFn;
      }
    };
    jQuery.holdReady = function(hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    };
    jQuery.isArray = Array.isArray;
    jQuery.parseJSON = JSON.parse;
    jQuery.nodeName = callback;
    jQuery.isFunction = fn;
    jQuery.isWindow = isWindow;
    jQuery.camelCase = camelCase;
    jQuery.type = type;
    jQuery.now = Date.now;
    jQuery.isNumeric = function(value) {
      var undefined = jQuery.type(value);
      return ("number" === undefined || "string" === undefined) && !isNaN(value - parseFloat(value));
    };
    if (!(void 0 === (m = function() {
      return jQuery;
    }.apply(t, [])))) {
      mixin.exports = m;
    }
    var _jQuery = window.jQuery;
    var old$ = window.$;
    return jQuery.noConflict = function(deep) {
      return window.$ === jQuery && (window.$ = old$), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery;
    }, i || (window.jQuery = window.$ = jQuery), jQuery;
  });
}, function(canCreateDiscussions, a, saveNotifs) {
  !function(exports, $, obj) {
    function t(instance, props) {
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) {
          descriptor.writable = true;
        }
        Object.defineProperty(instance, descriptor.key, descriptor);
      }
    }
    function _createClass(obj, n, a) {
      return n && t(obj.prototype, n), a && t(obj, a), obj;
    }
    function defineProperty(obj, key, value) {
      return key in obj ? Object.defineProperty(obj, key, {
        value : value,
        enumerable : true,
        configurable : true,
        writable : true
      }) : obj[key] = value, obj;
    }
    function mixin(obj, deep) {
      var proto = Object.keys(obj);
      if (Object.getOwnPropertySymbols) {
        var e = Object.getOwnPropertySymbols(obj);
        if (deep) {
          e = e.filter(function(key) {
            return Object.getOwnPropertyDescriptor(obj, key).enumerable;
          });
        }
        proto.push.apply(proto, e);
      }
      return proto;
    }
    function extend(object) {
      var i = 1;
      for (; i < arguments.length; i++) {
        var obj = null != arguments[i] ? arguments[i] : {};
        if (i % 2) {
          mixin(Object(obj), true).forEach(function(k) {
            defineProperty(object, k, obj[k]);
          });
        } else {
          if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(object, Object.getOwnPropertyDescriptors(obj));
          } else {
            mixin(Object(obj)).forEach(function(key) {
              Object.defineProperty(object, key, Object.getOwnPropertyDescriptor(obj, key));
            });
          }
        }
      }
      return object;
    }
    function transitionEndEmulator(duration) {
      var _this = this;
      var r = false;
      return $(this).one(Util.TRANSITION_END, function() {
        r = true;
      }), setTimeout(function() {
        if (!r) {
          Util.triggerTransitionEnd(_this);
        }
      }, duration), this;
    }
    function parse(str, t, value) {
      if (0 === str.length) {
        return str;
      }
      if (value && "function" == typeof value) {
        return value(str);
      }
      var doc = (new window.DOMParser).parseFromString(str, "text/html");
      var agent = Object.keys(t);
      var elements = [].slice.call(doc.body.querySelectorAll("*"));
      var run = function(i, addButton) {
        var element = elements[i];
        var tpindex = element.nodeName.toLowerCase();
        if (-1 === agent.indexOf(element.nodeName.toLowerCase())) {
          return element.parentNode.removeChild(element), "continue";
        }
        var pipelets = [].slice.call(element.attributes);
        var nameArgs = [].concat(t["*"] || [], t[tpindex] || []);
        pipelets.forEach(function(e) {
          if (!function(o, t) {
            var n = o.nodeName.toLowerCase();
            if (-1 !== t.indexOf(n)) {
              return -1 === keys.indexOf(n) || Boolean(o.nodeValue.match(METADATA_REGEX) || o.nodeValue.match(regNamedQueries));
            }
            var args = t.filter(function(cached1) {
              return cached1 instanceof RegExp;
            });
            var i = 0;
            var arg_count = args.length;
            for (; i < arg_count; i++) {
              if (n.match(args[i])) {
                return true;
              }
            }
            return false;
          }(e, nameArgs)) {
            element.removeAttribute(e.nodeName);
          }
        });
      };
      var i = 0;
      var eL = elements.length;
      for (; i < eL; i++) {
        run(i);
      }
      return doc.body.innerHTML;
    }
    $ = $ && $.hasOwnProperty("default") ? $.default : $;
    obj = obj && obj.hasOwnProperty("default") ? obj.default : obj;
    var Util = {
      TRANSITION_END : "bsTransitionEnd",
      getUID : function(prefix) {
        do {
          prefix = prefix + ~~(1e6 * Math.random());
        } while (document.getElementById(prefix));
        return prefix;
      },
      getSelectorFromElement : function(element) {
        var selector = element.getAttribute("data-target");
        if (!selector || "#" === selector) {
          var c = element.getAttribute("href");
          selector = c && "#" !== c ? c.trim() : "";
        }
        try {
          return document.querySelector(selector) ? selector : null;
        } catch (e) {
          return null;
        }
      },
      getTransitionDurationFromElement : function(obj) {
        if (!obj) {
          return 0;
        }
        var a = $(obj).css("transition-duration");
        var b = $(obj).css("transition-delay");
        var i = parseFloat(a);
        var level = parseFloat(b);
        return i || level ? (a = a.split(",")[0], b = b.split(",")[0], 1e3 * (parseFloat(a) + parseFloat(b))) : 0;
      },
      reflow : function(element) {
        return element.offsetHeight;
      },
      triggerTransitionEnd : function(element) {
        $(element).trigger("transitionend");
      },
      supportsTransitionEnd : function() {
        return Boolean("transitionend");
      },
      isElement : function(obj) {
        return (obj[0] || obj).nodeType;
      },
      typeCheckConfig : function(name, config, obj) {
        var i;
        for (i in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, i)) {
            var query = obj[i];
            var value = config[i];
            var source = value && Util.isElement(value) ? "element" : (trigger = value, {}.toString.call(trigger).match(/\s([a-z]+)/i)[1].toLowerCase());
            if (!(new RegExp(query)).test(source)) {
              throw new Error(name.toUpperCase() + ': Option "' + i + '" provided type "' + source + '" but expected type "' + query + '".');
            }
          }
        }
        var trigger;
      },
      findShadowRoot : function(node) {
        if (!document.documentElement.attachShadow) {
          return null;
        }
        if ("function" == typeof node.getRootNode) {
          var root = node.getRootNode();
          return root instanceof ShadowRoot ? root : null;
        }
        return node instanceof ShadowRoot ? node : node.parentNode ? Util.findShadowRoot(node.parentNode) : null;
      },
      jQueryDetection : function() {
        if (void 0 === $) {
          throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        }
        var e = $.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) {
          throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
        }
      }
    };
    Util.jQueryDetection();
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = {
      bindType : "transitionend",
      delegateType : "transitionend",
      handle : function(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments);
        }
      }
    };
    var windowAlert = $.fn.alert;
    var me = {
      CLOSE : "close.bs.alert",
      CLOSED : "closed.bs.alert",
      CLICK_DATA_API : "click.bs.alert.data-api"
    };
    var status = "alert";
    var e = "fade";
    var action = "show";
    var Alert = function() {
      function Alert(selector) {
        this._element = selector;
      }
      var self = Alert.prototype;
      return self.close = function(element) {
        var $target = this._element;
        if (element) {
          $target = this._getRootElement(element);
        }
        if (!this._triggerCloseEvent($target).isDefaultPrevented()) {
          this._removeElement($target);
        }
      }, self.dispose = function() {
        $.removeData(this._element, "bs.alert");
        this._element = null;
      }, self._getRootElement = function(element) {
        var c = Util.getSelectorFromElement(element);
        var e = false;
        return c && (e = document.querySelector(c)), e || (e = $(element).closest("." + status)[0]), e;
      }, self._triggerCloseEvent = function(element) {
        var previous = $.Event(me.CLOSE);
        return $(element).trigger(previous), previous;
      }, self._removeElement = function(element) {
        var d = this;
        if ($(element).removeClass(action), $(element).hasClass(e)) {
          var time = Util.getTransitionDurationFromElement(element);
          $(element).one(Util.TRANSITION_END, function(simpleFilter) {
            return d._destroyElement(element, simpleFilter);
          }).emulateTransitionEnd(time);
        } else {
          this._destroyElement(element);
        }
      }, self._destroyElement = function(element) {
        $(element).detach().trigger(me.CLOSED).remove();
      }, Alert._jQueryInterface = function(value) {
        return this.each(function() {
          var r = $(this);
          var data = r.data("bs.alert");
          if (!data) {
            data = new Alert(this);
            r.data("bs.alert", data);
          }
          if ("close" === value) {
            data[value](this);
          }
        });
      }, Alert._handleDismiss = function(alertInstance) {
        return function(event) {
          if (event) {
            event.preventDefault();
          }
          alertInstance.close(this);
        };
      }, _createClass(Alert, null, [{
        key : "VERSION",
        get : function() {
          return "4.4.1";
        }
      }]), Alert;
    }();
    $(document).on(me.CLICK_DATA_API, '[data-dismiss="alert"]', Alert._handleDismiss(new Alert));
    $.fn.alert = Alert._jQueryInterface;
    $.fn.alert.Constructor = Alert;
    $.fn.alert.noConflict = function() {
      return $.fn.alert = windowAlert, Alert._jQueryInterface;
    };
    var old = $.fn.button;
    var id = "active";
    var $this = "btn";
    var ipb_session_id = "focus";
    var __WEBPACK_IMPORTED_MODULE_3__foundation_smoothScroll__ = '[data-toggle^="button"]';
    var SELECTOR = '[data-toggle="buttons"]';
    var CLASS_REPLACABLE = '[data-toggle="button"]';
    var elemSels = '[data-toggle="buttons"] .btn';
    var container = 'input:not([type="hidden"])';
    var div = ".active";
    var w = ".btn";
    var currentTogle = {
      CLICK_DATA_API : "click.bs.button.data-api",
      FOCUS_BLUR_DATA_API : "focus.bs.button.data-api blur.bs.button.data-api",
      LOAD_DATA_API : "load.bs.button.data-api"
    };
    var Button = function() {
      function Tab(element) {
        this._element = element;
      }
      var proto = Tab.prototype;
      return proto.toggle = function() {
        var e = true;
        var n = true;
        var tdDetails = $(this._element).closest(SELECTOR)[0];
        if (tdDetails) {
          var elem = this._element.querySelector(container);
          if (elem) {
            if ("radio" === elem.type) {
              if (elem.checked && this._element.classList.contains(id)) {
                e = false;
              } else {
                var customPlayerControlsButton = tdDetails.querySelector(div);
                if (customPlayerControlsButton) {
                  $(customPlayerControlsButton).removeClass(id);
                }
              }
            } else {
              if ("checkbox" === elem.type) {
                if ("LABEL" === this._element.tagName && elem.checked === this._element.classList.contains(id)) {
                  e = false;
                }
              } else {
                e = false;
              }
            }
            if (e) {
              elem.checked = !this._element.classList.contains(id);
              $(elem).trigger("change");
            }
            elem.focus();
            n = false;
          }
        }
        if (!(this._element.hasAttribute("disabled") || this._element.classList.contains("disabled"))) {
          if (n) {
            this._element.setAttribute("aria-pressed", !this._element.classList.contains(id));
          }
          if (e) {
            $(this._element).toggleClass(id);
          }
        }
      }, proto.dispose = function() {
        $.removeData(this._element, "bs.button");
        this._element = null;
      }, Tab._jQueryInterface = function(off) {
        return this.each(function() {
          var data = $(this).data("bs.button");
          if (!data) {
            data = new Tab(this);
            $(this).data("bs.button", data);
          }
          if ("toggle" === off) {
            data[off]();
          }
        });
      }, _createClass(Tab, null, [{
        key : "VERSION",
        get : function() {
          return "4.4.1";
        }
      }]), Tab;
    }();
    $(document).on(currentTogle.CLICK_DATA_API, __WEBPACK_IMPORTED_MODULE_3__foundation_smoothScroll__, function(event) {
      var node = event.target;
      if ($(node).hasClass($this) || (node = $(node).closest(w)[0]), !node || node.hasAttribute("disabled") || node.classList.contains("disabled")) {
        event.preventDefault();
      } else {
        var propertyElement = node.querySelector(container);
        if (propertyElement && (propertyElement.hasAttribute("disabled") || propertyElement.classList.contains("disabled"))) {
          return void event.preventDefault();
        }
        Button._jQueryInterface.call($(node), "toggle");
      }
    }).on(currentTogle.FOCUS_BLUR_DATA_API, __WEBPACK_IMPORTED_MODULE_3__foundation_smoothScroll__, function(e) {
      var upCtrl = $(e.target).closest(w)[0];
      $(upCtrl).toggleClass(ipb_session_id, /^focus(in)?$/.test(e.type));
    });
    $(window).on(currentTogle.LOAD_DATA_API, function() {
      var args = [].slice.call(document.querySelectorAll(elemSels));
      var i = 0;
      var arg_count = args.length;
      for (; i < arg_count; i++) {
        var r = args[i];
        var selectedUserAgent = r.querySelector(container);
        if (selectedUserAgent.checked || selectedUserAgent.hasAttribute("checked")) {
          r.classList.add(id);
        } else {
          r.classList.remove(id);
        }
      }
      var p = 0;
      var aOpL = (args = [].slice.call(document.querySelectorAll(CLASS_REPLACABLE))).length;
      for (; p < aOpL; p++) {
        var target = args[p];
        if ("true" === target.getAttribute("aria-pressed")) {
          target.classList.add(id);
        } else {
          target.classList.remove(id);
        }
      }
    });
    $.fn.button = Button._jQueryInterface;
    $.fn.button.Constructor = Button;
    $.fn.button.noConflict = function() {
      return $.fn.button = old, Button._jQueryInterface;
    };
    var name = "carousel";
    var type = ".bs.carousel";
    var last_supr = $.fn[name];
    var Default = {
      interval : 5E3,
      keyboard : true,
      slide : false,
      pause : "hover",
      wrap : true,
      touch : true
    };
    var DefaultType = {
      interval : "(number|boolean)",
      keyboard : "boolean",
      slide : "(boolean|string)",
      pause : "(string|boolean)",
      wrap : "boolean",
      touch : "boolean"
    };
    var next = "next";
    var prev = "prev";
    var POSITION_L = "left";
    var actAlign = "right";
    var events = {
      SLIDE : "slide.bs.carousel",
      SLID : "slid.bs.carousel",
      KEYDOWN : "keydown.bs.carousel",
      MOUSEENTER : "mouseenter.bs.carousel",
      MOUSELEAVE : "mouseleave.bs.carousel",
      TOUCHSTART : "touchstart.bs.carousel",
      TOUCHMOVE : "touchmove.bs.carousel",
      TOUCHEND : "touchend.bs.carousel",
      POINTERDOWN : "pointerdown.bs.carousel",
      POINTERUP : "pointerup.bs.carousel",
      DRAG_START : "dragstart.bs.carousel",
      LOAD_DATA_API : "load.bs.carousel.data-api",
      CLICK_DATA_API : "click.bs.carousel.data-api"
    };
    var parent = "carousel";
    var c = "active";
    var s = "slide";
    var l = "carousel-item-right";
    var o = "carousel-item-left";
    var f = "carousel-item-next";
    var m = "carousel-item-prev";
    var flattenedStyleArray = "pointer-event";
    var freezeSelector = ".active";
    var width = ".active.carousel-item";
    var selectorEnq = ".carousel-item";
    var ctx = ".carousel-item img";
    var containerElement = ".carousel-item-next, .carousel-item-prev";
    var controls = ".carousel-indicators";
    var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = "[data-slide], [data-slide-to]";
    var ACTION_SELECTOR = '[data-ride="carousel"]';
    var data = {
      TOUCH : "touch",
      PEN : "pen"
    };
    var Carousel = function() {
      function Carousel(selector, config) {
        this._items = null;
        this._interval = null;
        this._activeElement = null;
        this._isPaused = false;
        this._isSliding = false;
        this.touchTimeout = null;
        this.touchStartX = 0;
        this.touchDeltaX = 0;
        this._config = this._getConfig(config);
        this._element = selector;
        this._indicatorsElement = this._element.querySelector(controls);
        this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
        this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);
        this._addEventListeners();
      }
      var self = Carousel.prototype;
      return self.next = function() {
        if (!this._isSliding) {
          this._slide(next);
        }
      }, self.nextWhenVisible = function() {
        if (!document.hidden && $(this._element).is(":visible") && "hidden" !== $(this._element).css("visibility")) {
          this.next();
        }
      }, self.prev = function() {
        if (!this._isSliding) {
          this._slide(prev);
        }
      }, self.pause = function(name) {
        if (!name) {
          this._isPaused = true;
        }
        if (this._element.querySelector(containerElement)) {
          Util.triggerTransitionEnd(this._element);
          this.cycle(true);
        }
        clearInterval(this._interval);
        this._interval = null;
      }, self.cycle = function(i) {
        if (!i) {
          this._isPaused = false;
        }
        if (this._interval) {
          clearInterval(this._interval);
          this._interval = null;
        }
        if (this._config.interval && !this._isPaused) {
          this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
        }
      }, self.to = function(index) {
        var n = this;
        this._activeElement = this._element.querySelector(width);
        var activeIndex = this._getItemIndex(this._activeElement);
        if (!(index > this._items.length - 1 || index < 0)) {
          if (this._isSliding) {
            $(this._element).one(events.SLID, function() {
              return n.to(index);
            });
          } else {
            if (activeIndex === index) {
              return this.pause(), void this.cycle();
            }
            var direction = index > activeIndex ? next : prev;
            this._slide(direction, this._items[index]);
          }
        }
      }, self.dispose = function() {
        $(this._element).off(type);
        $.removeData(this._element, "bs.carousel");
        this._items = null;
        this._config = null;
        this._element = null;
        this._interval = null;
        this._isPaused = null;
        this._isSliding = null;
        this._activeElement = null;
        this._indicatorsElement = null;
      }, self._getConfig = function(config) {
        return config = extend({}, Default, {}, config), Util.typeCheckConfig(name, config, DefaultType), config;
      }, self._handleSwipe = function() {
        var e = Math.abs(this.touchDeltaX);
        if (!(e <= 40)) {
          var e0 = e / this.touchDeltaX;
          this.touchDeltaX = 0;
          if (e0 > 0) {
            this.prev();
          }
          if (e0 < 0) {
            this.next();
          }
        }
      }, self._addEventListeners = function() {
        var that = this;
        if (this._config.keyboard) {
          $(this._element).on(events.KEYDOWN, function(event) {
            return that._keydown(event);
          });
        }
        if ("hover" === this._config.pause) {
          $(this._element).on(events.MOUSEENTER, function(name) {
            return that.pause(name);
          }).on(events.MOUSELEAVE, function(i) {
            return that.cycle(i);
          });
        }
        if (this._config.touch) {
          this._addTouchEventListeners();
        }
      }, self._addTouchEventListeners = function() {
        var self = this;
        if (this._touchSupported) {
          var _onTouchStart = function(event) {
            if (self._pointerEvent && data[event.originalEvent.pointerType.toUpperCase()]) {
              self.touchStartX = event.originalEvent.clientX;
            } else {
              if (!self._pointerEvent) {
                self.touchStartX = event.originalEvent.touches[0].clientX;
              }
            }
          };
          var cb = function(event) {
            if (self._pointerEvent && data[event.originalEvent.pointerType.toUpperCase()]) {
              self.touchDeltaX = event.originalEvent.clientX - self.touchStartX;
            }
            self._handleSwipe();
            if ("hover" === self._config.pause) {
              self.pause();
              if (self.touchTimeout) {
                clearTimeout(self.touchTimeout);
              }
              self.touchTimeout = setTimeout(function(i) {
                return self.cycle(i);
              }, 500 + self._config.interval);
            }
          };
          $(this._element.querySelectorAll(ctx)).on(events.DRAG_START, function(event) {
            return event.preventDefault();
          });
          if (this._pointerEvent) {
            $(this._element).on(events.POINTERDOWN, function(data) {
              return _onTouchStart(data);
            });
            $(this._element).on(events.POINTERUP, function(users) {
              return cb(users);
            });
            this._element.classList.add(flattenedStyleArray);
          } else {
            $(this._element).on(events.TOUCHSTART, function(data) {
              return _onTouchStart(data);
            });
            $(this._element).on(events.TOUCHMOVE, function(alreadyFailedWithException) {
              return function(e) {
                if (e.originalEvent.touches && e.originalEvent.touches.length > 1) {
                  self.touchDeltaX = 0;
                } else {
                  self.touchDeltaX = e.originalEvent.touches[0].clientX - self.touchStartX;
                }
              }(alreadyFailedWithException);
            });
            $(this._element).on(events.TOUCHEND, function(users) {
              return cb(users);
            });
          }
        }
      }, self._keydown = function(event) {
        if (!/input|textarea/i.test(event.target.tagName)) {
          switch(event.which) {
            case 37:
              event.preventDefault();
              this.prev();
              break;
            case 39:
              event.preventDefault();
              this.next();
          }
        }
      }, self._getItemIndex = function(element) {
        return this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(selectorEnq)) : [], this._items.indexOf(element);
      }, self._getItemByDirection = function(direction, activeElement) {
        var isNextDirection = direction === next;
        var isPrevDirection = direction === prev;
        var activeIndex = this._getItemIndex(activeElement);
        var lastItemIndex = this._items.length - 1;
        if ((isPrevDirection && 0 === activeIndex || isNextDirection && activeIndex === lastItemIndex) && !this._config.wrap) {
          return activeElement;
        }
        var j = (activeIndex + (direction === prev ? -1 : 1)) % this._items.length;
        return -1 === j ? this._items[this._items.length - 1] : this._items[j];
      }, self._triggerSlideEvent = function(relatedTarget, directionalClassname) {
        var index = this._getItemIndex(relatedTarget);
        var MY_NUMBER = this._getItemIndex(this._element.querySelector(width));
        var keys = $.Event(events.SLIDE, {
          relatedTarget : relatedTarget,
          direction : directionalClassname,
          from : MY_NUMBER,
          to : index
        });
        return $(this._element).trigger(keys), keys;
      }, self._setActiveIndicatorElement = function(element) {
        if (this._indicatorsElement) {
          var customPlayerControlsButton = [].slice.call(this._indicatorsElement.querySelectorAll(freezeSelector));
          $(customPlayerControlsButton).removeClass(c);
          var IFBox = this._indicatorsElement.children[this._getItemIndex(element)];
          if (IFBox) {
            $(IFBox).addClass(c);
          }
        }
      }, self._slide = function(direction, element) {
        var type;
        var i;
        var directionalClassName;
        var _this2 = this;
        var activeElement = this._element.querySelector(width);
        var pos = this._getItemIndex(activeElement);
        var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);
        var index = this._getItemIndex(nextElement);
        var isCycling = Boolean(this._interval);
        if (direction === next ? (type = o, i = f, directionalClassName = POSITION_L) : (type = l, i = m, directionalClassName = actAlign), nextElement && $(nextElement).hasClass(c)) {
          this._isSliding = false;
        } else {
          if (!this._triggerSlideEvent(nextElement, directionalClassName).isDefaultPrevented() && activeElement && nextElement) {
            this._isSliding = true;
            if (isCycling) {
              this.pause();
            }
            this._setActiveIndicatorElement(nextElement);
            var p = $.Event(events.SLID, {
              relatedTarget : nextElement,
              direction : directionalClassName,
              from : pos,
              to : index
            });
            if ($(this._element).hasClass(s)) {
              $(nextElement).addClass(i);
              Util.reflow(nextElement);
              $(activeElement).addClass(type);
              $(nextElement).addClass(type);
              var value = parseInt(nextElement.getAttribute("data-interval"), 10);
              if (value) {
                this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
                this._config.interval = value;
              } else {
                this._config.interval = this._config.defaultInterval || this._config.interval;
              }
              var TRANSITION_DURATION = Util.getTransitionDurationFromElement(activeElement);
              $(activeElement).one(Util.TRANSITION_END, function() {
                $(nextElement).removeClass(type + " " + i).addClass(c);
                $(activeElement).removeClass(c + " " + i + " " + type);
                _this2._isSliding = false;
                setTimeout(function() {
                  return $(_this2._element).trigger(p);
                }, 0);
              }).emulateTransitionEnd(TRANSITION_DURATION);
            } else {
              $(activeElement).removeClass(c);
              $(nextElement).addClass(c);
              this._isSliding = false;
              $(this._element).trigger(p);
            }
            if (isCycling) {
              this.cycle();
            }
          }
        }
      }, Carousel._jQueryInterface = function(value) {
        return this.each(function() {
          var data = $(this).data("bs.carousel");
          var options = extend({}, Default, {}, $(this).data());
          if ("object" == typeof value) {
            options = extend({}, options, {}, value);
          }
          var id = "string" == typeof value ? value : options.slide;
          if (data || (data = new Carousel(this, options), $(this).data("bs.carousel", data)), "number" == typeof value) {
            data.to(value);
          } else {
            if ("string" == typeof id) {
              if (void 0 === data[id]) {
                throw new TypeError('No method named "' + id + '"');
              }
              data[id]();
            } else {
              if (options.interval && options.ride) {
                data.pause();
                data.cycle();
              }
            }
          }
        });
      }, Carousel._dataApiClickHandler = function(event) {
        var r = Util.getSelectorFromElement(this);
        if (r) {
          var selector = $(r)[0];
          if (selector && $(selector).hasClass(parent)) {
            var o = extend({}, $(selector).data(), {}, $(this).data());
            var slideIndex = this.getAttribute("data-slide-to");
            if (slideIndex) {
              o.interval = false;
            }
            Carousel._jQueryInterface.call($(selector), o);
            if (slideIndex) {
              $(selector).data("bs.carousel").to(slideIndex);
            }
            event.preventDefault();
          }
        }
      }, _createClass(Carousel, null, [{
        key : "VERSION",
        get : function() {
          return "4.4.1";
        }
      }, {
        key : "Default",
        get : function() {
          return Default;
        }
      }]), Carousel;
    }();
    $(document).on(events.CLICK_DATA_API, __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__, Carousel._dataApiClickHandler);
    $(window).on(events.LOAD_DATA_API, function() {
      var option = [].slice.call(document.querySelectorAll(ACTION_SELECTOR));
      var i = 0;
      var r = option.length;
      for (; i < r; i++) {
        var l = $(option[i]);
        Carousel._jQueryInterface.call(l, l.data());
      }
    });
    $.fn[name] = Carousel._jQueryInterface;
    $.fn[name].Constructor = Carousel;
    $.fn[name].noConflict = function() {
      return $.fn[name] = last_supr, Carousel._jQueryInterface;
    };
    var i = "collapse";
    var modelChainCount = $.fn[i];
    var conf = {
      toggle : true,
      parent : ""
    };
    var params = {
      toggle : "boolean",
      parent : "(string|element)"
    };
    var event = {
      SHOW : "show.bs.collapse",
      SHOWN : "shown.bs.collapse",
      HIDE : "hide.bs.collapse",
      HIDDEN : "hidden.bs.collapse",
      CLICK_DATA_API : "click.bs.collapse.data-api"
    };
    var val = "show";
    var a = "collapse";
    var row = "collapsing";
    var klass = "collapsed";
    var style = "width";
    var columnTopHeight = "height";
    var x = ".show, .collapsing";
    var prop = '[data-toggle="collapse"]';
    var Collapse = function() {
      function Collapse(el, config) {
        this._isTransitioning = false;
        this._element = el;
        this._config = this._getConfig(config);
        this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + el.id + '"],[data-toggle="collapse"][data-target="#' + el.id + '"]'));
        var result = [].slice.call(document.querySelectorAll(prop));
        var tag = 0;
        var trlen = result.length;
        for (; tag < trlen; tag++) {
          var element = result[tag];
          var selector = Util.getSelectorFromElement(element);
          var expRecords = [].slice.call(document.querySelectorAll(selector)).filter(function(match) {
            return match === el;
          });
          if (null !== selector && expRecords.length > 0) {
            this._selector = selector;
            this._triggerArray.push(element);
          }
        }
        this._parent = this._config.parent ? this._getParent() : null;
        if (!this._config.parent) {
          this._addAriaAndCollapsedClass(this._element, this._triggerArray);
        }
        if (this._config.toggle) {
          this.toggle();
        }
      }
      var _this = Collapse.prototype;
      return _this.toggle = function() {
        if ($(this._element).hasClass(val)) {
          this.hide();
        } else {
          this.show();
        }
      }, _this.show = function() {
        var n;
        var e;
        var _this = this;
        if (!(this._isTransitioning || $(this._element).hasClass(val) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(x)).filter(function(option) {
          return "string" == typeof _this._config.parent ? option.getAttribute("data-parent") === _this._config.parent : option.classList.contains(a);
        })).length && (n = null), n && (e = $(n).not(this._selector).data("bs.collapse")) && e._isTransitioning))) {
          var clickEvent = $.Event(event.SHOW);
          if ($(this._element).trigger(clickEvent), !clickEvent.isDefaultPrevented()) {
            if (n) {
              Collapse._jQueryInterface.call($(n).not(this._selector), "hide");
              if (!e) {
                $(n).data("bs.collapse", null);
              }
            }
            var dimension = this._getDimension();
            $(this._element).removeClass(a).addClass(row);
            this._element.style[dimension] = 0;
            if (this._triggerArray.length) {
              $(this._triggerArray).removeClass(klass).attr("aria-expanded", true);
            }
            this.setTransitioning(true);
            var scrollSize = "scroll" + (dimension[0].toUpperCase() + dimension.slice(1));
            var TRANSITION_DURATION = Util.getTransitionDurationFromElement(this._element);
            $(this._element).one(Util.TRANSITION_END, function() {
              $(_this._element).removeClass(row).addClass(a).addClass(val);
              _this._element.style[dimension] = "";
              _this.setTransitioning(false);
              $(_this._element).trigger(event.SHOWN);
            }).emulateTransitionEnd(TRANSITION_DURATION);
            this._element.style[dimension] = this._element[scrollSize] + "px";
          }
        }
      }, _this.hide = function() {
        var _this2 = this;
        if (!this._isTransitioning && $(this._element).hasClass(val)) {
          var clickEvent = $.Event(event.HIDE);
          if ($(this._element).trigger(clickEvent), !clickEvent.isDefaultPrevented()) {
            var dimension = this._getDimension();
            this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
            Util.reflow(this._element);
            $(this._element).addClass(row).removeClass(a).removeClass(val);
            var behaviorTargetListSize = this._triggerArray.length;
            if (behaviorTargetListSize > 0) {
              var j = 0;
              for (; j < behaviorTargetListSize; j++) {
                var element = this._triggerArray[j];
                var selector = Util.getSelectorFromElement(element);
                if (null !== selector) {
                  if (!$([].slice.call(document.querySelectorAll(selector))).hasClass(val)) {
                    $(element).addClass(klass).attr("aria-expanded", false);
                  }
                }
              }
            }
            this.setTransitioning(true);
            this._element.style[dimension] = "";
            var TRANSITION_DURATION = Util.getTransitionDurationFromElement(this._element);
            $(this._element).one(Util.TRANSITION_END, function() {
              _this2.setTransitioning(false);
              $(_this2._element).removeClass(row).addClass(a).trigger(event.HIDDEN);
            }).emulateTransitionEnd(TRANSITION_DURATION);
          }
        }
      }, _this.setTransitioning = function(isTransitioning) {
        this._isTransitioning = isTransitioning;
      }, _this.dispose = function() {
        $.removeData(this._element, "bs.collapse");
        this._config = null;
        this._parent = null;
        this._element = null;
        this._triggerArray = null;
        this._isTransitioning = null;
      }, _this._getConfig = function(config) {
        return (config = extend({}, conf, {}, config)).toggle = Boolean(config.toggle), Util.typeCheckConfig(i, config, params), config;
      }, _this._getDimension = function() {
        return $(this._element).hasClass(style) ? style : columnTopHeight;
      }, _this._getParent = function() {
        var target;
        var _this3 = this;
        if (Util.isElement(this._config.parent)) {
          target = this._config.parent;
          if (void 0 !== this._config.parent.jquery) {
            target = this._config.parent[0];
          }
        } else {
          target = document.querySelector(this._config.parent);
        }
        var selector = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
        var current_season = [].slice.call(target.querySelectorAll(selector));
        return $(current_season).each(function(canCreateDiscussions, element) {
          _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
        }), target;
      }, _this._addAriaAndCollapsedClass = function(e, element) {
        var r = $(e).hasClass(val);
        if (element.length) {
          $(element).toggleClass(klass, !r).attr("aria-expanded", r);
        }
      }, Collapse._getTargetFromElement = function(element) {
        var input = Util.getSelectorFromElement(element);
        return input ? document.querySelector(input) : null;
      }, Collapse._jQueryInterface = function(id) {
        return this.each(function() {
          var r = $(this);
          var data = r.data("bs.collapse");
          var options = extend({}, conf, {}, r.data(), {}, "object" == typeof id && id ? id : {});
          if (!data && options.toggle && /show|hide/.test(id) && (options.toggle = false), data || (data = new Collapse(this, options), r.data("bs.collapse", data)), "string" == typeof id) {
            if (void 0 === data[id]) {
              throw new TypeError('No method named "' + id + '"');
            }
            data[id]();
          }
        });
      }, _createClass(Collapse, null, [{
        key : "VERSION",
        get : function() {
          return "4.4.1";
        }
      }, {
        key : "Default",
        get : function() {
          return conf;
        }
      }]), Collapse;
    }();
    $(document).on(event.CLICK_DATA_API, prop, function(event) {
      if ("A" === event.currentTarget.tagName) {
        event.preventDefault();
      }
      var editingEl = $(this);
      var sel = Util.getSelectorFromElement(this);
      var current_season = [].slice.call(document.querySelectorAll(sel));
      $(current_season).each(function() {
        var e = $(this);
        var option = e.data("bs.collapse") ? "toggle" : editingEl.data();
        Collapse._jQueryInterface.call(e, option);
      });
    });
    $.fn[i] = Collapse._jQueryInterface;
    $.fn[i].Constructor = Collapse;
    $.fn[i].noConflict = function() {
      return $.fn[i] = modelChainCount, Collapse._jQueryInterface;
    };
    var pluginName = "dropdown";
    var fn = $.fn[pluginName];
    var base = new RegExp("38|40|27");
    var Event = {
      HIDE : "hide.bs.dropdown",
      HIDDEN : "hidden.bs.dropdown",
      SHOW : "show.bs.dropdown",
      SHOWN : "shown.bs.dropdown",
      CLICK : "click.bs.dropdown",
      CLICK_DATA_API : "click.bs.dropdown.data-api",
      KEYDOWN_DATA_API : "keydown.bs.dropdown.data-api",
      KEYUP_DATA_API : "keyup.bs.dropdown.data-api"
    };
    var element = "disabled";
    var b = "show";
    var MSG_SERVER_CHANGED = "dropup";
    var MSG_WAITING_MICROPHONE = "dropright";
    var MSG_WEB_SOCKET = "dropleft";
    var j = "dropdown-menu-right";
    var hidden = "position-static";
    var search = '[data-toggle="dropdown"]';
    var __WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__ = ".dropdown form";
    var el = ".dropdown-menu";
    var CLASS_FILTER_TOGGLE = ".navbar-nav";
    var selector = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
    var G__20720 = "top-start";
    var http = "top-end";
    var NORMAL_REGISTER = "bottom-start";
    var new_n = "bottom-end";
    var default_n = "right-start";
    var nextThis = "left-start";
    var clientRequest = {
      offset : 0,
      flip : true,
      boundary : "scrollParent",
      reference : "toggle",
      display : "dynamic",
      popperConfig : null
    };
    var ret = {
      offset : "(number|string|function)",
      flip : "boolean",
      boundary : "(string|element)",
      reference : "(string|element)",
      display : "string",
      popperConfig : "(null|object)"
    };
    var Dropdown = function() {
      function Dropdown(el, config) {
        this._element = el;
        this._popper = null;
        this._config = this._getConfig(config);
        this._menu = this._getMenuElement();
        this._inNavbar = this._detectNavbar();
        this._addEventListeners();
      }
      var self = Dropdown.prototype;
      return self.toggle = function() {
        if (!this._element.disabled && !$(this._element).hasClass(element)) {
          var originalB = $(this._menu).hasClass(b);
          Dropdown._clearMenus();
          if (!originalB) {
            this.show(true);
          }
        }
      }, self.show = function(content) {
        if (void 0 === content && (content = false), !(this._element.disabled || $(this._element).hasClass(element) || $(this._menu).hasClass(b))) {
          var e = {
            relatedTarget : this._element
          };
          var event = $.Event(Event.SHOW, e);
          var selector = Dropdown._getParentFromElement(this._element);
          if ($(selector).trigger(event), !event.isDefaultPrevented()) {
            if (!this._inNavbar && content) {
              if (void 0 === obj) {
                throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
              }
              var target = this._element;
              if ("parent" === this._config.reference) {
                target = selector;
              } else {
                if (Util.isElement(this._config.reference)) {
                  target = this._config.reference;
                  if (void 0 !== this._config.reference.jquery) {
                    target = this._config.reference[0];
                  }
                }
              }
              if ("scrollParent" !== this._config.boundary) {
                $(selector).addClass(hidden);
              }
              this._popper = new obj(target, this._menu, this._getPopperConfig());
            }
            if ("ontouchstart" in document.documentElement && 0 === $(selector).closest(CLASS_FILTER_TOGGLE).length) {
              $(document.body).children().on("mouseover", null, $.noop);
            }
            this._element.focus();
            this._element.setAttribute("aria-expanded", true);
            $(this._menu).toggleClass(b);
            $(selector).toggleClass(b).trigger($.Event(Event.SHOWN, e));
          }
        }
      }, self.hide = function() {
        if (!this._element.disabled && !$(this._element).hasClass(element) && $(this._menu).hasClass(b)) {
          var e = {
            relatedTarget : this._element
          };
          var event = $.Event(Event.HIDE, e);
          var selector = Dropdown._getParentFromElement(this._element);
          $(selector).trigger(event);
          if (!event.isDefaultPrevented()) {
            if (this._popper) {
              this._popper.destroy();
            }
            $(this._menu).toggleClass(b);
            $(selector).toggleClass(b).trigger($.Event(Event.HIDDEN, e));
          }
        }
      }, self.dispose = function() {
        $.removeData(this._element, "bs.dropdown");
        $(this._element).off(".bs.dropdown");
        this._element = null;
        this._menu = null;
        if (null !== this._popper) {
          this._popper.destroy();
          this._popper = null;
        }
      }, self.update = function() {
        this._inNavbar = this._detectNavbar();
        if (null !== this._popper) {
          this._popper.scheduleUpdate();
        }
      }, self._addEventListeners = function() {
        var projectsListView = this;
        $(this._element).on(Event.CLICK, function(event) {
          event.preventDefault();
          event.stopPropagation();
          projectsListView.toggle();
        });
      }, self._getConfig = function(config) {
        return config = extend({}, this.constructor.Default, {}, $(this._element).data(), {}, config), Util.typeCheckConfig(pluginName, config, this.constructor.DefaultType), config;
      }, self._getMenuElement = function() {
        if (!this._menu) {
          var head = Dropdown._getParentFromElement(this._element);
          if (head) {
            this._menu = head.querySelector(el);
          }
        }
        return this._menu;
      }, self._getPlacement = function() {
        var config = $(this._element.parentNode);
        var n = NORMAL_REGISTER;
        return config.hasClass(MSG_SERVER_CHANGED) ? (n = G__20720, $(this._menu).hasClass(j) && (n = http)) : config.hasClass(MSG_WAITING_MICROPHONE) ? n = default_n : config.hasClass(MSG_WEB_SOCKET) ? n = nextThis : $(this._menu).hasClass(j) && (n = new_n), n;
      }, self._detectNavbar = function() {
        return $(this._element).closest(".navbar").length > 0;
      }, self._getOffset = function() {
        var _this = this;
        var params = {};
        return "function" == typeof this._config.offset ? params.fn = function(options) {
          return options.offsets = extend({}, options.offsets, {}, _this._config.offset(options.offsets, _this._element) || {}), options;
        } : params.offset = this._config.offset, params;
      }, self._getPopperConfig = function() {
        var options = {
          placement : this._getPlacement(),
          modifiers : {
            offset : this._getOffset(),
            flip : {
              enabled : this._config.flip
            },
            preventOverflow : {
              boundariesElement : this._config.boundary
            }
          }
        };
        return "static" === this._config.display && (options.modifiers.applyStyle = {
          enabled : false
        }), extend({}, options, {}, this._config.popperConfig);
      }, Dropdown._jQueryInterface = function(config) {
        return this.each(function() {
          var data = $(this).data("bs.dropdown");
          if (data || (data = new Dropdown(this, "object" == typeof config ? config : null), $(this).data("bs.dropdown", data)), "string" == typeof config) {
            if (void 0 === data[config]) {
              throw new TypeError('No method named "' + config + '"');
            }
            data[config]();
          }
        });
      }, Dropdown._clearMenus = function(event) {
        if (!event || 3 !== event.which && ("keyup" !== event.type || 9 === event.which)) {
          var toggles = [].slice.call(document.querySelectorAll(search));
          var i = 0;
          var l = toggles.length;
          for (; i < l; i++) {
            var s = Dropdown._getParentFromElement(toggles[i]);
            var t = $(toggles[i]).data("bs.dropdown");
            var args = {
              relatedTarget : toggles[i]
            };
            if (event && "click" === event.type && (args.clickEvent = event), t) {
              var m = t._menu;
              if ($(s).hasClass(b) && !(event && ("click" === event.type && /input|textarea/i.test(event.target.tagName) || "keyup" === event.type && 9 === event.which) && $.contains(s, event.target))) {
                var callback = $.Event(Event.HIDE, args);
                $(s).trigger(callback);
                if (!callback.isDefaultPrevented()) {
                  if ("ontouchstart" in document.documentElement) {
                    $(document.body).children().off("mouseover", null, $.noop);
                  }
                  toggles[i].setAttribute("aria-expanded", "false");
                  if (t._popper) {
                    t._popper.destroy();
                  }
                  $(m).removeClass(b);
                  $(s).removeClass(b).trigger($.Event(Event.HIDDEN, args));
                }
              }
            }
          }
        }
      }, Dropdown._getParentFromElement = function(element) {
        var parent;
        var target = Util.getSelectorFromElement(element);
        return target && (parent = document.querySelector(target)), parent || element.parentNode;
      }, Dropdown._dataApiKeydownHandler = function(event) {
        if ((/input|textarea/i.test(event.target.tagName) ? !(32 === event.which || 27 !== event.which && (40 !== event.which && 38 !== event.which || $(event.target).closest(el).length)) : base.test(event.which)) && (event.preventDefault(), event.stopPropagation(), !this.disabled && !$(this).hasClass(element))) {
          var document = Dropdown._getParentFromElement(this);
          var originalB = $(document).hasClass(b);
          if (originalB || 27 !== event.which) {
            if (originalB && (!originalB || 27 !== event.which && 32 !== event.which)) {
              var elem = [].slice.call(document.querySelectorAll(selector)).filter(function(overlayId) {
                return $(overlayId).is(":visible");
              });
              if (0 !== elem.length) {
                var type = elem.indexOf(event.target);
                if (38 === event.which && type > 0) {
                  type--;
                }
                if (40 === event.which && type < elem.length - 1) {
                  type++;
                }
                if (type < 0) {
                  type = 0;
                }
                elem[type].focus();
              }
            } else {
              if (27 === event.which) {
                var searchString = document.querySelector(search);
                $(searchString).trigger("focus");
              }
              $(this).trigger("click");
            }
          }
        }
      }, _createClass(Dropdown, null, [{
        key : "VERSION",
        get : function() {
          return "4.4.1";
        }
      }, {
        key : "Default",
        get : function() {
          return clientRequest;
        }
      }, {
        key : "DefaultType",
        get : function() {
          return ret;
        }
      }]), Dropdown;
    }();
    $(document).on(Event.KEYDOWN_DATA_API, search, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, el, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, search, function(event) {
      event.preventDefault();
      event.stopPropagation();
      Dropdown._jQueryInterface.call($(this), "toggle");
    }).on(Event.CLICK_DATA_API, __WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__, function(event) {
      event.stopPropagation();
    });
    $.fn[pluginName] = Dropdown._jQueryInterface;
    $.fn[pluginName].Constructor = Dropdown;
    $.fn[pluginName].noConflict = function() {
      return $.fn[pluginName] = fn, Dropdown._jQueryInterface;
    };
    var modal = $.fn.modal;
    var opts = {
      backdrop : true,
      keyboard : true,
      focus : true,
      show : true
    };
    var defaultOpts = {
      backdrop : "(boolean|string)",
      keyboard : "boolean",
      focus : "boolean",
      show : "boolean"
    };
    var self = {
      HIDE : "hide.bs.modal",
      HIDE_PREVENTED : "hidePrevented.bs.modal",
      HIDDEN : "hidden.bs.modal",
      SHOW : "show.bs.modal",
      SHOWN : "shown.bs.modal",
      FOCUSIN : "focusin.bs.modal",
      RESIZE : "resize.bs.modal",
      CLICK_DISMISS : "click.dismiss.bs.modal",
      KEYDOWN_DISMISS : "keydown.dismiss.bs.modal",
      MOUSEUP_DISMISS : "mouseup.dismiss.bs.modal",
      MOUSEDOWN_DISMISS : "mousedown.dismiss.bs.modal",
      CLICK_DATA_API : "click.bs.modal.data-api"
    };
    var token = "modal-dialog-scrollable";
    var newOrg = "modal-scrollbar-measure";
    var matchesClassName = "modal-backdrop";
    var group = "modal-open";
    var animation = "fade";
    var prefix = "show";
    var c1 = "modal-static";
    var SELECTOR_SLIDER_RIGHT = ".modal-dialog";
    var query = ".modal-body";
    var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = '[data-toggle="modal"]';
    var __WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__ = '[data-dismiss="modal"]';
    var target = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
    var sel = ".sticky-top";
    var Modal = function() {
      function Modal(el, config) {
        this._config = this._getConfig(config);
        this._element = el;
        this._dialog = el.querySelector(SELECTOR_SLIDER_RIGHT);
        this._backdrop = null;
        this._isShown = false;
        this._isBodyOverflowing = false;
        this._ignoreBackdropClick = false;
        this._isTransitioning = false;
        this._scrollbarWidth = 0;
      }
      var _this = Modal.prototype;
      return _this.toggle = function(a) {
        return this._isShown ? this.hide() : this.show(a);
      }, _this.show = function(target) {
        var _this = this;
        if (!this._isShown && !this._isTransitioning) {
          if ($(this._element).hasClass(animation)) {
            this._isTransitioning = true;
          }
          var clickEvent = $.Event(self.SHOW, {
            relatedTarget : target
          });
          $(this._element).trigger(clickEvent);
          if (!(this._isShown || clickEvent.isDefaultPrevented())) {
            this._isShown = true;
            this._checkScrollbar();
            this._setScrollbar();
            this._adjustDialog();
            this._setEscapeEvent();
            this._setResizeEvent();
            $(this._element).on(self.CLICK_DISMISS, __WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__, function(e) {
              return _this.hide(e);
            });
            $(this._dialog).on(self.MOUSEDOWN_DISMISS, function() {
              $(_this._element).one(self.MOUSEUP_DISMISS, function(jEvent) {
                if ($(jEvent.target).is(_this._element)) {
                  _this._ignoreBackdropClick = true;
                }
              });
            });
            this._showBackdrop(function() {
              return _this._showElement(target);
            });
          }
        }
      }, _this.hide = function(a) {
        var touchSystem = this;
        if (a && a.preventDefault(), this._isShown && !this._isTransitioning) {
          var clickEvent = $.Event(self.HIDE);
          if ($(this._element).trigger(clickEvent), this._isShown && !clickEvent.isDefaultPrevented()) {
            this._isShown = false;
            var animationId = $(this._element).hasClass(animation);
            if (animationId && (this._isTransitioning = true), this._setEscapeEvent(), this._setResizeEvent(), $(document).off(self.FOCUSIN), $(this._element).removeClass(prefix), $(this._element).off(self.CLICK_DISMISS), $(this._dialog).off(self.MOUSEDOWN_DISMISS), animationId) {
              var TRANSITION_DURATION = Util.getTransitionDurationFromElement(this._element);
              $(this._element).one(Util.TRANSITION_END, function(e) {
                return touchSystem._hideModal(e);
              }).emulateTransitionEnd(TRANSITION_DURATION);
            } else {
              this._hideModal();
            }
          }
        }
      }, _this.dispose = function() {
        [window, this._element, this._dialog].forEach(function(evtDel) {
          return $(evtDel).off(".bs.modal");
        });
        $(document).off(self.FOCUSIN);
        $.removeData(this._element, "bs.modal");
        this._config = null;
        this._element = null;
        this._dialog = null;
        this._backdrop = null;
        this._isShown = null;
        this._isBodyOverflowing = null;
        this._ignoreBackdropClick = null;
        this._isTransitioning = null;
        this._scrollbarWidth = null;
      }, _this.handleUpdate = function() {
        this._adjustDialog();
      }, _this._getConfig = function(config) {
        return config = extend({}, opts, {}, config), Util.typeCheckConfig("modal", config, defaultOpts), config;
      }, _this._triggerBackdropTransition = function() {
        var elm = this;
        if ("static" === this._config.backdrop) {
          var message = $.Event(self.HIDE_PREVENTED);
          if ($(this._element).trigger(message), message.defaultPrevented) {
            return;
          }
          this._element.classList.add(c1);
          var TRANSITION_DURATION = Util.getTransitionDurationFromElement(this._element);
          $(this._element).one(Util.TRANSITION_END, function() {
            elm._element.classList.remove(c1);
          }).emulateTransitionEnd(TRANSITION_DURATION);
          this._element.focus();
        } else {
          this.hide();
        }
      }, _this._showElement = function(relatedTarget) {
        var _this = this;
        var animationId = $(this._element).hasClass(animation);
        var i = this._dialog ? this._dialog.querySelector(query) : null;
        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE)) {
          document.body.appendChild(this._element);
        }
        this._element.style.display = "block";
        this._element.removeAttribute("aria-hidden");
        this._element.setAttribute("aria-modal", true);
        if ($(this._dialog).hasClass(token) && i) {
          i.scrollTop = 0;
        } else {
          this._element.scrollTop = 0;
        }
        if (animationId) {
          Util.reflow(this._element);
        }
        $(this._element).addClass(prefix);
        if (this._config.focus) {
          this._enforceFocus();
        }
        var timeOfInterest = $.Event(self.SHOWN, {
          relatedTarget : relatedTarget
        });
        var transitionComplete = function() {
          if (_this._config.focus) {
            _this._element.focus();
          }
          _this._isTransitioning = false;
          $(_this._element).trigger(timeOfInterest);
        };
        if (animationId) {
          var TRANSITION_DURATION = Util.getTransitionDurationFromElement(this._dialog);
          $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          transitionComplete();
        }
      }, _this._enforceFocus = function() {
        var _this9 = this;
        $(document).off(self.FOCUSIN).on(self.FOCUSIN, function(event) {
          if (document !== event.target && _this9._element !== event.target && 0 === $(_this9._element).has(event.target).length) {
            _this9._element.focus();
          }
        });
      }, _this._setEscapeEvent = function() {
        var e = this;
        if (this._isShown && this._config.keyboard) {
          $(this._element).on(self.KEYDOWN_DISMISS, function(event) {
            if (27 === event.which) {
              e._triggerBackdropTransition();
            }
          });
        } else {
          if (!this._isShown) {
            $(this._element).off(self.KEYDOWN_DISMISS);
          }
        }
      }, _this._setResizeEvent = function() {
        var modal = this;
        if (this._isShown) {
          $(window).on(self.RESIZE, function(data) {
            return modal.handleUpdate(data);
          });
        } else {
          $(window).off(self.RESIZE);
        }
      }, _this._hideModal = function() {
        var _this11 = this;
        this._element.style.display = "none";
        this._element.setAttribute("aria-hidden", true);
        this._element.removeAttribute("aria-modal");
        this._isTransitioning = false;
        this._showBackdrop(function() {
          $(document.body).removeClass(group);
          _this11._resetAdjustments();
          _this11._resetScrollbar();
          $(_this11._element).trigger(self.HIDDEN);
        });
      }, _this._removeBackdrop = function() {
        if (this._backdrop) {
          $(this._backdrop).remove();
          this._backdrop = null;
        }
      }, _this._showBackdrop = function(callback) {
        var _this12 = this;
        var method = $(this._element).hasClass(animation) ? animation : "";
        if (this._isShown && this._config.backdrop) {
          if (this._backdrop = document.createElement("div"), this._backdrop.className = matchesClassName, method && this._backdrop.classList.add(method), $(this._backdrop).appendTo(document.body), $(this._element).on(self.CLICK_DISMISS, function(event) {
            if (_this12._ignoreBackdropClick) {
              _this12._ignoreBackdropClick = false;
            } else {
              if (event.target === event.currentTarget) {
                _this12._triggerBackdropTransition();
              }
            }
          }), method && Util.reflow(this._backdrop), $(this._backdrop).addClass(prefix), !callback) {
            return;
          }
          if (!method) {
            return void callback();
          }
          var TRANSITION_DURATION = Util.getTransitionDurationFromElement(this._backdrop);
          $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          if (!this._isShown && this._backdrop) {
            $(this._backdrop).removeClass(prefix);
            var callbackRemove = function() {
              _this12._removeBackdrop();
              if (callback) {
                callback();
              }
            };
            if ($(this._element).hasClass(animation)) {
              var TRANSITION_DURATION = Util.getTransitionDurationFromElement(this._backdrop);
              $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(TRANSITION_DURATION);
            } else {
              callbackRemove();
            }
          } else {
            if (callback) {
              callback();
            }
          }
        }
      }, _this._adjustDialog = function() {
        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        if (!this._isBodyOverflowing && isModalOverflowing) {
          this._element.style.paddingLeft = this._scrollbarWidth + "px";
        }
        if (this._isBodyOverflowing && !isModalOverflowing) {
          this._element.style.paddingRight = this._scrollbarWidth + "px";
        }
      }, _this._resetAdjustments = function() {
        this._element.style.paddingLeft = "";
        this._element.style.paddingRight = "";
      }, _this._checkScrollbar = function() {
        var anchorBoundingBoxViewport = document.body.getBoundingClientRect();
        this._isBodyOverflowing = anchorBoundingBoxViewport.left + anchorBoundingBoxViewport.right < window.innerWidth;
        this._scrollbarWidth = this._getScrollbarWidth();
      }, _this._setScrollbar = function() {
        var embedPlayer = this;
        if (this._isBodyOverflowing) {
          var current_season = [].slice.call(document.querySelectorAll(target));
          var replacesStatements = [].slice.call(document.querySelectorAll(sel));
          $(current_season).each(function(n, elem) {
            var value = elem.style.paddingRight;
            var paddingRight = $(elem).css("padding-right");
            $(elem).data("padding-right", value).css("padding-right", parseFloat(paddingRight) + embedPlayer._scrollbarWidth + "px");
          });
          $(replacesStatements).each(function(n, link) {
            var result = link.style.marginRight;
            var notificationData = $(link).css("margin-right");
            $(link).data("margin-right", result).css("margin-right", parseFloat(notificationData) - embedPlayer._scrollbarWidth + "px");
          });
          var value = document.body.style.paddingRight;
          var paddingRight = $(document.body).css("padding-right");
          $(document.body).data("padding-right", value).css("padding-right", parseFloat(paddingRight) + this._scrollbarWidth + "px");
        }
        $(document.body).addClass(group);
      }, _this._resetScrollbar = function() {
        var current_season = [].slice.call(document.querySelectorAll(target));
        $(current_season).each(function(canCreateDiscussions, elem) {
          var padding = $(elem).data("padding-right");
          $(elem).removeData("padding-right");
          elem.style.paddingRight = padding || "";
        });
        var replacesStatements = [].slice.call(document.querySelectorAll("" + sel));
        $(replacesStatements).each(function(canCreateDiscussions, n) {
          var marginLeft = $(n).data("margin-right");
          if (void 0 !== marginLeft) {
            $(n).css("margin-right", marginLeft).removeData("margin-right");
          }
        });
        var padding = $(document.body).data("padding-right");
        $(document.body).removeData("padding-right");
        document.body.style.paddingRight = padding || "";
      }, _this._getScrollbarWidth = function() {
        var e = document.createElement("div");
        e.className = newOrg;
        document.body.appendChild(e);
        var caretPos = e.getBoundingClientRect().width - e.clientWidth;
        return document.body.removeChild(e), caretPos;
      }, Modal._jQueryInterface = function(name, value) {
        return this.each(function() {
          var data = $(this).data("bs.modal");
          var options = extend({}, opts, {}, $(this).data(), {}, "object" == typeof name && name ? name : {});
          if (data || (data = new Modal(this, options), $(this).data("bs.modal", data)), "string" == typeof name) {
            if (void 0 === data[name]) {
              throw new TypeError('No method named "' + name + '"');
            }
            data[name](value);
          } else {
            if (options.show) {
              data.show(value);
            }
          }
        });
      }, _createClass(Modal, null, [{
        key : "VERSION",
        get : function() {
          return "4.4.1";
        }
      }, {
        key : "Default",
        get : function() {
          return opts;
        }
      }]), Modal;
    }();
    $(document).on(self.CLICK_DATA_API, __WEBPACK_IMPORTED_MODULE_1_jsmidgen__, function(event) {
      var i;
      var focusTarget = this;
      var root = Util.getSelectorFromElement(this);
      if (root) {
        i = document.querySelector(root);
      }
      var option = $(i).data("bs.modal") ? "toggle" : extend({}, $(i).data(), {}, $(this).data());
      if (!("A" !== this.tagName && "AREA" !== this.tagName)) {
        event.preventDefault();
      }
      var $target = $(i).one(self.SHOW, function(event) {
        if (!event.isDefaultPrevented()) {
          $target.one(self.HIDDEN, function() {
            if ($(focusTarget).is(":visible")) {
              focusTarget.focus();
            }
          });
        }
      });
      Modal._jQueryInterface.call($(i), option, this);
    });
    $.fn.modal = Modal._jQueryInterface;
    $.fn.modal.Constructor = Modal;
    $.fn.modal.noConflict = function() {
      return $.fn.modal = modal, Modal._jQueryInterface;
    };
    var keys = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"];
    var voidElements = {
      "*" : ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a : ["target", "href", "title", "rel"],
      area : [],
      b : [],
      br : [],
      col : [],
      code : [],
      div : [],
      em : [],
      hr : [],
      h1 : [],
      h2 : [],
      h3 : [],
      h4 : [],
      h5 : [],
      h6 : [],
      i : [],
      img : ["src", "alt", "title", "width", "height"],
      li : [],
      ol : [],
      p : [],
      pre : [],
      s : [],
      small : [],
      span : [],
      sub : [],
      sup : [],
      strong : [],
      u : [],
      ul : []
    };
    var METADATA_REGEX = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
    var regNamedQueries = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    var d = "tooltip";
    var tooltip = $.fn.tooltip;
    var fileRExp = new RegExp("(^|\\s)bs-tooltip\\S+", "g");
    var _activeValues = ["sanitize", "whiteList", "sanitizeFn"];
    var options = {
      animation : "boolean",
      template : "string",
      title : "(string|element|function)",
      trigger : "string",
      delay : "(number|object)",
      html : "boolean",
      selector : "(string|boolean)",
      placement : "(string|function)",
      offset : "(number|string|function)",
      container : "(string|element|boolean)",
      fallbackPlacement : "(string|array)",
      boundary : "(string|element)",
      sanitize : "boolean",
      sanitizeFn : "(null|function)",
      whiteList : "object",
      popperConfig : "(null|object)"
    };
    var KEYS = {
      AUTO : "auto",
      TOP : "top",
      RIGHT : "right",
      BOTTOM : "bottom",
      LEFT : "left"
    };
    var defaults = {
      animation : true,
      template : '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger : "hover focus",
      title : "",
      delay : 0,
      html : false,
      selector : false,
      placement : "top",
      offset : 0,
      container : false,
      fallbackPlacement : "flip",
      boundary : "scrollParent",
      sanitize : true,
      sanitizeFn : null,
      whiteList : voidElements,
      popperConfig : null
    };
    var undefined = "show";
    var COMPONENT_LITERAL = "out";
    var expectedDropEffect = {
      HIDE : "hide.bs.tooltip",
      HIDDEN : "hidden.bs.tooltip",
      SHOW : "show.bs.tooltip",
      SHOWN : "shown.bs.tooltip",
      INSERTED : "inserted.bs.tooltip",
      CLICK : "click.bs.tooltip",
      FOCUSIN : "focusin.bs.tooltip",
      FOCUSOUT : "focusout.bs.tooltip",
      MOUSEENTER : "mouseenter.bs.tooltip",
      MOUSELEAVE : "mouseleave.bs.tooltip"
    };
    var p = "fade";
    var item = "show";
    var option = ".tooltip-inner";
    var this_area = ".arrow";
    var read = "hover";
    var peek = "focus";
    var check = "click";
    var hover = "manual";
    var Tooltip = function() {
      function Tooltip(el, config) {
        if (void 0 === obj) {
          throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
        }
        this._isEnabled = true;
        this._timeout = 0;
        this._hoverState = "";
        this._activeTrigger = {};
        this._popper = null;
        this.element = el;
        this.config = this._getConfig(config);
        this.tip = null;
        this._setListeners();
      }
      var context = Tooltip.prototype;
      return context.enable = function() {
        this._isEnabled = true;
      }, context.disable = function() {
        this._isEnabled = false;
      }, context.toggleEnabled = function() {
        this._isEnabled = !this._isEnabled;
      }, context.toggle = function(e) {
        if (this._isEnabled) {
          if (e) {
            var name = this.constructor.DATA_KEY;
            var context = $(e.currentTarget).data(name);
            if (!context) {
              context = new this.constructor(e.currentTarget, this._getDelegateConfig());
              $(e.currentTarget).data(name, context);
            }
            context._activeTrigger.click = !context._activeTrigger.click;
            if (context._isWithActiveTrigger()) {
              context._enter(null, context);
            } else {
              context._leave(null, context);
            }
          } else {
            if ($(this.getTipElement()).hasClass(item)) {
              return void this._leave(null, this);
            }
            this._enter(null, this);
          }
        }
      }, context.dispose = function() {
        clearTimeout(this._timeout);
        $.removeData(this.element, this.constructor.DATA_KEY);
        $(this.element).off(this.constructor.EVENT_KEY);
        $(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler);
        if (this.tip) {
          $(this.tip).remove();
        }
        this._isEnabled = null;
        this._timeout = null;
        this._hoverState = null;
        this._activeTrigger = null;
        if (this._popper) {
          this._popper.destroy();
        }
        this._popper = null;
        this.element = null;
        this.config = null;
        this.tip = null;
      }, context.show = function() {
        var _this = this;
        if ("none" === $(this.element).css("display")) {
          throw new Error("Please use show on visible elements");
        }
        var clickEvent = $.Event(this.constructor.Event.SHOW);
        if (this.isWithContent() && this._isEnabled) {
          $(this.element).trigger(clickEvent);
          var value = Util.findShadowRoot(this.element);
          var parentLi = $.contains(null !== value ? value : this.element.ownerDocument.documentElement, this.element);
          if (clickEvent.isDefaultPrevented() || !parentLi) {
            return;
          }
          var e = this.getTipElement();
          var val = Util.getUID(this.constructor.NAME);
          e.setAttribute("id", val);
          this.element.setAttribute("aria-describedby", val);
          this.setContent();
          if (this.config.animation) {
            $(e).addClass(p);
          }
          var placement = "function" == typeof this.config.placement ? this.config.placement.call(this, e, this.element) : this.config.placement;
          var attachment = this._getAttachment(placement);
          this.addAttachmentClass(attachment);
          var container = this._getContainer();
          $(e).data(this.constructor.DATA_KEY, this);
          if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
            $(e).appendTo(container);
          }
          $(this.element).trigger(this.constructor.Event.INSERTED);
          this._popper = new obj(this.element, e, this._getPopperConfig(attachment));
          $(e).addClass(item);
          if ("ontouchstart" in document.documentElement) {
            $(document.body).children().on("mouseover", null, $.noop);
          }
          var complete = function() {
            if (_this.config.animation) {
              _this._fixTransition();
            }
            var prevHoverState = _this._hoverState;
            _this._hoverState = null;
            $(_this.element).trigger(_this.constructor.Event.SHOWN);
            if (prevHoverState === COMPONENT_LITERAL) {
              _this._leave(null, _this);
            }
          };
          if ($(this.tip).hasClass(p)) {
            var TRANSITION_DURATION = Util.getTransitionDurationFromElement(this.tip);
            $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
          } else {
            complete();
          }
        }
      }, context.hide = function(e) {
        var _this = this;
        var tip = this.getTipElement();
        var clickEvent = $.Event(this.constructor.Event.HIDE);
        var complete = function() {
          if (_this._hoverState !== undefined && tip.parentNode) {
            tip.parentNode.removeChild(tip);
          }
          _this._cleanTipClass();
          _this.element.removeAttribute("aria-describedby");
          $(_this.element).trigger(_this.constructor.Event.HIDDEN);
          if (null !== _this._popper) {
            _this._popper.destroy();
          }
          if (e) {
            e();
          }
        };
        if ($(this.element).trigger(clickEvent), !clickEvent.isDefaultPrevented()) {
          if ($(tip).removeClass(item), "ontouchstart" in document.documentElement && $(document.body).children().off("mouseover", null, $.noop), this._activeTrigger[check] = false, this._activeTrigger[peek] = false, this._activeTrigger[read] = false, $(this.tip).hasClass(p)) {
            var TRANSITION_DURATION = Util.getTransitionDurationFromElement(tip);
            $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
          } else {
            complete();
          }
          this._hoverState = "";
        }
      }, context.update = function() {
        if (null !== this._popper) {
          this._popper.scheduleUpdate();
        }
      }, context.isWithContent = function() {
        return Boolean(this.getTitle());
      }, context.addAttachmentClass = function(method) {
        $(this.getTipElement()).addClass("bs-tooltip-" + method);
      }, context.getTipElement = function() {
        return this.tip = this.tip || $(this.config.template)[0], this.tip;
      }, context.setContent = function() {
        var tip = this.getTipElement();
        this.setElementContent($(tip.querySelectorAll(option)), this.getTitle());
        $(tip).removeClass(p + " " + item);
      }, context.setElementContent = function(el, a) {
        if ("object" != typeof a || !a.nodeType && !a.jquery) {
          if (this.config.html) {
            if (this.config.sanitize) {
              a = parse(a, this.config.whiteList, this.config.sanitizeFn);
            }
            el.html(a);
          } else {
            el.text(a);
          }
        } else {
          if (this.config.html) {
            if (!$(a).parent().is(el)) {
              el.empty().append(a);
            }
          } else {
            el.text($(a).text());
          }
        }
      }, context.getTitle = function() {
        var e = this.element.getAttribute("data-original-title");
        return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
      }, context._getPopperConfig = function(options) {
        var pageOptimizer = this;
        return extend({}, {
          placement : options,
          modifiers : {
            offset : this._getOffset(),
            flip : {
              behavior : this.config.fallbackPlacement
            },
            arrow : {
              element : this_area
            },
            preventOverflow : {
              boundariesElement : this.config.boundary
            }
          },
          onCreate : function(data) {
            if (data.originalPlacement !== data.placement) {
              pageOptimizer._handlePopperPlacementChange(data);
            }
          },
          onUpdate : function(data) {
            return pageOptimizer._handlePopperPlacementChange(data);
          }
        }, {}, this.config.popperConfig);
      }, context._getOffset = function() {
        var e = this;
        var options = {};
        return "function" == typeof this.config.offset ? options.fn = function(options) {
          return options.offsets = extend({}, options.offsets, {}, e.config.offset(options.offsets, e.element) || {}), options;
        } : options.offset = this.config.offset, options;
      }, context._getContainer = function() {
        return false === this.config.container ? document.body : Util.isElement(this.config.container) ? $(this.config.container) : $(document).find(this.config.container);
      }, context._getAttachment = function(placement) {
        return KEYS[placement.toUpperCase()];
      }, context._setListeners = function() {
        var context = this;
        this.config.trigger.split(" ").forEach(function(trigger) {
          if ("click" === trigger) {
            $(context.element).on(context.constructor.Event.CLICK, context.config.selector, function(t) {
              return context.toggle(t);
            });
          } else {
            if (trigger !== hover) {
              var containerEvent = trigger === read ? context.constructor.Event.MOUSEENTER : context.constructor.Event.FOCUSIN;
              var i = trigger === read ? context.constructor.Event.MOUSELEAVE : context.constructor.Event.FOCUSOUT;
              $(context.element).on(containerEvent, context.config.selector, function(t) {
                return context._enter(t);
              }).on(i, context.config.selector, function(j) {
                return context._leave(j);
              });
            }
          }
        });
        this._hideModalHandler = function() {
          if (context.element) {
            context.hide();
          }
        };
        $(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler);
        if (this.config.selector) {
          this.config = extend({}, this.config, {
            trigger : "manual",
            selector : ""
          });
        } else {
          this._fixTitle();
        }
      }, context._fixTitle = function() {
        var type = typeof this.element.getAttribute("data-original-title");
        if (this.element.getAttribute("title") || "string" !== type) {
          this.element.setAttribute("data-original-title", this.element.getAttribute("title") || "");
          this.element.setAttribute("title", "");
        }
      }, context._enter = function(e, context) {
        var name = this.constructor.DATA_KEY;
        if (!(context = context || $(e.currentTarget).data(name))) {
          context = new this.constructor(e.currentTarget, this._getDelegateConfig());
          $(e.currentTarget).data(name, context);
        }
        if (e) {
          context._activeTrigger["focusin" === e.type ? peek : read] = true;
        }
        if ($(context.getTipElement()).hasClass(item) || context._hoverState === undefined) {
          context._hoverState = undefined;
        } else {
          clearTimeout(context._timeout);
          context._hoverState = undefined;
          if (context.config.delay && context.config.delay.show) {
            context._timeout = setTimeout(function() {
              if (context._hoverState === undefined) {
                context.show();
              }
            }, context.config.delay.show);
          } else {
            context.show();
          }
        }
      }, context._leave = function(e, context) {
        var name = this.constructor.DATA_KEY;
        if (!(context = context || $(e.currentTarget).data(name))) {
          context = new this.constructor(e.currentTarget, this._getDelegateConfig());
          $(e.currentTarget).data(name, context);
        }
        if (e) {
          context._activeTrigger["focusout" === e.type ? peek : read] = false;
        }
        if (!context._isWithActiveTrigger()) {
          clearTimeout(context._timeout);
          context._hoverState = COMPONENT_LITERAL;
          if (context.config.delay && context.config.delay.hide) {
            context._timeout = setTimeout(function() {
              if (context._hoverState === COMPONENT_LITERAL) {
                context.hide();
              }
            }, context.config.delay.hide);
          } else {
            context.hide();
          }
        }
      }, context._isWithActiveTrigger = function() {
        var trigger;
        for (trigger in this._activeTrigger) {
          if (this._activeTrigger[trigger]) {
            return true;
          }
        }
        return false;
      }, context._getConfig = function(options) {
        var settings = $(this.element).data();
        return Object.keys(settings).forEach(function(j) {
          if (-1 !== _activeValues.indexOf(j)) {
            delete settings[j];
          }
        }), "number" == typeof(options = extend({}, this.constructor.Default, {}, settings, {}, "object" == typeof options && options ? options : {})).delay && (options.delay = {
          show : options.delay,
          hide : options.delay
        }), "number" == typeof options.title && (options.title = options.title.toString()), "number" == typeof options.content && (options.content = options.content.toString()), Util.typeCheckConfig(d, options, this.constructor.DefaultType), options.sanitize && (options.template = parse(options.template, options.whiteList, options.sanitizeFn)), options;
      }, context._getDelegateConfig = function() {
        var config = {};
        if (this.config) {
          var key;
          for (key in this.config) {
            if (this.constructor.Default[key] !== this.config[key]) {
              config[key] = this.config[key];
            }
          }
        }
        return config;
      }, context._cleanTipClass = function() {
        var e = $(this.getTipElement());
        var value = e.attr("class").match(fileRExp);
        if (null !== value && value.length) {
          e.removeClass(value.join(""));
        }
      }, context._handlePopperPlacementChange = function(data) {
        var uid = data.instance;
        this.tip = uid.popper;
        this._cleanTipClass();
        this.addAttachmentClass(this._getAttachment(data.placement));
      }, context._fixTransition = function() {
        var tip = this.getTipElement();
        var name = this.config.animation;
        if (null === tip.getAttribute("x-placement")) {
          $(tip).removeClass(p);
          this.config.animation = false;
          this.hide();
          this.show();
          this.config.animation = name;
        }
      }, Tooltip._jQueryInterface = function(config) {
        return this.each(function() {
          var data = $(this).data("bs.tooltip");
          var options = "object" == typeof config && config;
          if ((data || !/dispose|hide/.test(config)) && (data || (data = new Tooltip(this, options), $(this).data("bs.tooltip", data)), "string" == typeof config)) {
            if (void 0 === data[config]) {
              throw new TypeError('No method named "' + config + '"');
            }
            data[config]();
          }
        });
      }, _createClass(Tooltip, null, [{
        key : "VERSION",
        get : function() {
          return "4.4.1";
        }
      }, {
        key : "Default",
        get : function() {
          return defaults;
        }
      }, {
        key : "NAME",
        get : function() {
          return d;
        }
      }, {
        key : "DATA_KEY",
        get : function() {
          return "bs.tooltip";
        }
      }, {
        key : "Event",
        get : function() {
          return expectedDropEffect;
        }
      }, {
        key : "EVENT_KEY",
        get : function() {
          return ".bs.tooltip";
        }
      }, {
        key : "DefaultType",
        get : function() {
          return options;
        }
      }]), Tooltip;
    }();
    $.fn.tooltip = Tooltip._jQueryInterface;
    $.fn.tooltip.Constructor = Tooltip;
    $.fn.tooltip.noConflict = function() {
      return $.fn.tooltip = tooltip, Tooltip._jQueryInterface;
    };
    var app = "popover";
    var popover = $.fn.popover;
    var rtokens = new RegExp("(^|\\s)bs-popover\\S+", "g");
    var skillClone = extend({}, Tooltip.Default, {
      placement : "right",
      trigger : "click",
      content : "",
      template : '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    });
    var trailOpts = extend({}, Tooltip.DefaultType, {
      content : "(string|element|function)"
    });
    var groupNamePrefix = "fade";
    var dupeNameCount = "show";
    var _id = ".popover-header";
    var cid = ".popover-body";
    var attrObjValue = {
      HIDE : "hide.bs.popover",
      HIDDEN : "hidden.bs.popover",
      SHOW : "show.bs.popover",
      SHOWN : "shown.bs.popover",
      INSERTED : "inserted.bs.popover",
      CLICK : "click.bs.popover",
      FOCUSIN : "focusin.bs.popover",
      FOCUSOUT : "focusout.bs.popover",
      MOUSEENTER : "mouseenter.bs.popover",
      MOUSELEAVE : "mouseleave.bs.popover"
    };
    var Popover = function(Constructor) {
      function Tab() {
        return Constructor.apply(this, arguments) || this;
      }
      var obj;
      var proto;
      proto = Constructor;
      (obj = Tab).prototype = Object.create(proto.prototype);
      obj.prototype.constructor = obj;
      obj.__proto__ = proto;
      var element = Tab.prototype;
      return element.isWithContent = function() {
        return this.getTitle() || this._getContent();
      }, element.addAttachmentClass = function(method) {
        $(this.getTipElement()).addClass("bs-popover-" + method);
      }, element.getTipElement = function() {
        return this.tip = this.tip || $(this.config.template)[0], this.tip;
      }, element.setContent = function() {
        var $track = $(this.getTipElement());
        this.setElementContent($track.find(_id), this.getTitle());
        var e = this._getContent();
        if ("function" == typeof e) {
          e = e.call(this.element);
        }
        this.setElementContent($track.find(cid), e);
        $track.removeClass(groupNamePrefix + " " + dupeNameCount);
      }, element._getContent = function() {
        return this.element.getAttribute("data-content") || this.config.content;
      }, element._cleanTipClass = function() {
        var e = $(this.getTipElement());
        var tokens = e.attr("class").match(rtokens);
        if (null !== tokens && tokens.length > 0) {
          e.removeClass(tokens.join(""));
        }
      }, Tab._jQueryInterface = function(opts) {
        return this.each(function() {
          var o = $(this).data("bs.popover");
          var b = "object" == typeof opts ? opts : null;
          if ((o || !/dispose|hide/.test(opts)) && (o || (o = new Tab(this, b), $(this).data("bs.popover", o)), "string" == typeof opts)) {
            if (void 0 === o[opts]) {
              throw new TypeError('No method named "' + opts + '"');
            }
            o[opts]();
          }
        });
      }, _createClass(Tab, null, [{
        key : "VERSION",
        get : function() {
          return "4.4.1";
        }
      }, {
        key : "Default",
        get : function() {
          return skillClone;
        }
      }, {
        key : "NAME",
        get : function() {
          return app;
        }
      }, {
        key : "DATA_KEY",
        get : function() {
          return "bs.popover";
        }
      }, {
        key : "Event",
        get : function() {
          return attrObjValue;
        }
      }, {
        key : "EVENT_KEY",
        get : function() {
          return ".bs.popover";
        }
      }, {
        key : "DefaultType",
        get : function() {
          return trailOpts;
        }
      }]), Tab;
    }(Tooltip);
    $.fn.popover = Popover._jQueryInterface;
    $.fn.popover.Constructor = Popover;
    $.fn.popover.noConflict = function() {
      return $.fn.popover = popover, Popover._jQueryInterface;
    };
    var NAME = "scrollspy";
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var result = {
      offset : 10,
      method : "auto",
      target : ""
    };
    var expected = {
      offset : "number",
      method : "string",
      target : "(string|element)"
    };
    var bpc = {
      ACTIVATE : "activate.bs.scrollspy",
      SCROLL : "scroll.bs.scrollspy",
      LOAD_DATA_API : "load.bs.scrollspy.data-api"
    };
    var html = "dropdown-item";
    var className = "active";
    var bodyScripts = '[data-spy="scroll"]';
    var button = ".nav, .list-group";
    var block = ".nav-link";
    var cur = ".nav-item";
    var itemClass = ".list-group-item";
    var SECTION_SEL = ".dropdown";
    var en = ".dropdown-item";
    var node = ".dropdown-toggle";
    var outputStartOffset = "offset";
    var key = "position";
    var Tab = function() {
      function ScrollSpy(element, config) {
        var SpreeAPITaxonAdapter = this;
        this._element = element;
        this._scrollElement = "BODY" === element.tagName ? window : element;
        this._config = this._getConfig(config);
        this._selector = this._config.target + " " + block + "," + this._config.target + " " + itemClass + "," + this._config.target + " " + en;
        this._offsets = [];
        this._targets = [];
        this._activeTarget = null;
        this._scrollHeight = 0;
        $(this._scrollElement).on(bpc.SCROLL, function(innerTaxon) {
          return SpreeAPITaxonAdapter._process(innerTaxon);
        });
        this.refresh();
        this._process();
      }
      var self = ScrollSpy.prototype;
      return self.refresh = function() {
        var _this14 = this;
        var ns = this._scrollElement === this._scrollElement.window ? outputStartOffset : key;
        var c = "auto" === this._config.method ? ns : this._config.method;
        var searchBarHeight = c === key ? this._getScrollTop() : 0;
        this._offsets = [];
        this._targets = [];
        this._scrollHeight = this._getScrollHeight();
        [].slice.call(document.querySelectorAll(this._selector)).map(function(element) {
          var r;
          var n = Util.getSelectorFromElement(element);
          if (n && (r = document.querySelector(n)), r) {
            var _childCoords = r.getBoundingClientRect();
            if (_childCoords.width || _childCoords.height) {
              return [$(r)[c]().top + searchBarHeight, n];
            }
          }
          return null;
        }).filter(function(results) {
          return results;
        }).sort(function(subtractor, subtractee) {
          return subtractor[0] - subtractee[0];
        }).forEach(function(subSetsToFilter) {
          _this14._offsets.push(subSetsToFilter[0]);
          _this14._targets.push(subSetsToFilter[1]);
        });
      }, self.dispose = function() {
        $.removeData(this._element, "bs.scrollspy");
        $(this._scrollElement).off(".bs.scrollspy");
        this._element = null;
        this._scrollElement = null;
        this._config = null;
        this._selector = null;
        this._offsets = null;
        this._targets = null;
        this._activeTarget = null;
        this._scrollHeight = null;
      }, self._getConfig = function(options) {
        if ("string" != typeof(options = extend({}, result, {}, "object" == typeof options && options ? options : {})).target) {
          var id = $(options.target).attr("id");
          if (!id) {
            id = Util.getUID(NAME);
            $(options.target).attr("id", id);
          }
          options.target = "#" + id;
        }
        return Util.typeCheckConfig(NAME, options, expected), options;
      }, self._getScrollTop = function() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }, self._getScrollHeight = function() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }, self._getOffsetHeight = function() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }, self._process = function() {
        var scrollTop = this._getScrollTop() + this._config.offset;
        var scrollHeight = this._getScrollHeight();
        var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();
        if (this._scrollHeight !== scrollHeight && this.refresh(), scrollTop >= maxScroll) {
          var target = this._targets[this._targets.length - 1];
          if (this._activeTarget !== target) {
            this._activate(target);
          }
        } else {
          if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
            return this._activeTarget = null, void this._clear();
          }
          var i = this._offsets.length;
          for (; i--;) {
            if (this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (void 0 === this._offsets[i + 1] || scrollTop < this._offsets[i + 1])) {
              this._activate(this._targets[i]);
            }
          }
        }
      }, self._activate = function(target) {
        this._activeTarget = target;
        this._clear();
        var drilldownLevelLabels = this._selector.split(",").map(function(dep) {
          return dep + '[data-target="' + target + '"],' + dep + '[href="' + target + '"]';
        });
        var element = $([].slice.call(document.querySelectorAll(drilldownLevelLabels.join(","))));
        if (element.hasClass(html)) {
          element.closest(SECTION_SEL).find(node).addClass(className);
          element.addClass(className);
        } else {
          element.addClass(className);
          element.parents(button).prev(block + ", " + itemClass).addClass(className);
          element.parents(button).prev(cur).children(block).addClass(className);
        }
        $(this._scrollElement).trigger(bpc.ACTIVATE, {
          relatedTarget : target
        });
      }, self._clear = function() {
        [].slice.call(document.querySelectorAll(this._selector)).filter(function(divChatButton) {
          return divChatButton.classList.contains(className);
        }).forEach(function(focusedObj) {
          return focusedObj.classList.remove(className);
        });
      }, ScrollSpy._jQueryInterface = function(config) {
        return this.each(function() {
          var data = $(this).data("bs.scrollspy");
          if (data || (data = new ScrollSpy(this, "object" == typeof config && config), $(this).data("bs.scrollspy", data)), "string" == typeof config) {
            if (void 0 === data[config]) {
              throw new TypeError('No method named "' + config + '"');
            }
            data[config]();
          }
        });
      }, _createClass(ScrollSpy, null, [{
        key : "VERSION",
        get : function() {
          return "4.4.1";
        }
      }, {
        key : "Default",
        get : function() {
          return result;
        }
      }]), ScrollSpy;
    }();
    $(window).on(bpc.LOAD_DATA_API, function() {
      var scrollSpys = [].slice.call(document.querySelectorAll(bodyScripts));
      var i = scrollSpys.length;
      for (; i--;) {
        var r = $(scrollSpys[i]);
        Tab._jQueryInterface.call(r, r.data());
      }
    });
    $.fn[NAME] = Tab._jQueryInterface;
    $.fn[NAME].Constructor = Tab;
    $.fn[NAME].noConflict = function() {
      return $.fn[NAME] = JQUERY_NO_CONFLICT, Tab._jQueryInterface;
    };
    var num = $.fn.tab;
    var args = {
      HIDE : "hide.bs.tab",
      HIDDEN : "hidden.bs.tab",
      SHOW : "show.bs.tab",
      SHOWN : "shown.bs.tab",
      CLICK_DATA_API : "click.bs.tab.data-api"
    };
    var tag = "dropdown-menu";
    var active = "active";
    var nberr = "disabled";
    var field = "fade";
    var css = "show";
    var selectorAsString = ".dropdown";
    var editableSelector = ".nav, .list-group";
    var emptyJ = ".active";
    var object = "> li > .active";
    var __WEBPACK_IMPORTED_MODULE_0__foundation_util_box__ = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
    var selectorRun = ".dropdown-toggle";
    var password_verify = "> .dropdown-menu .active";
    var tab = function() {
      function Tab(element) {
        this._element = element;
      }
      var proto = Tab.prototype;
      return proto.show = function() {
        var _this15 = this;
        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(active) || $(this._element).hasClass(nberr))) {
          var target;
          var previous;
          var root = $(this._element).closest(editableSelector)[0];
          var selector = Util.getSelectorFromElement(this._element);
          if (root) {
            var elem = "UL" === root.nodeName || "OL" === root.nodeName ? object : emptyJ;
            previous = (previous = $.makeArray($(root).find(elem)))[previous.length - 1];
          }
          var e = $.Event(args.HIDE, {
            relatedTarget : this._element
          });
          var clickEvent = $.Event(args.SHOW, {
            relatedTarget : previous
          });
          if (previous && $(previous).trigger(e), $(this._element).trigger(clickEvent), !clickEvent.isDefaultPrevented() && !e.isDefaultPrevented()) {
            if (selector) {
              target = document.querySelector(selector);
            }
            this._activate(this._element, root);
            var complete = function() {
              var i = $.Event(args.HIDDEN, {
                relatedTarget : _this15._element
              });
              var timeOfInterest = $.Event(args.SHOWN, {
                relatedTarget : previous
              });
              $(previous).trigger(i);
              $(_this15._element).trigger(timeOfInterest);
            };
            if (target) {
              this._activate(target, target.parentNode, complete);
            } else {
              complete();
            }
          }
        }
      }, proto.dispose = function() {
        $.removeData(this._element, "bs.tab");
        this._element = null;
      }, proto._activate = function(element, container, callback) {
        var _this = this;
        var value = (!container || "UL" !== container.nodeName && "OL" !== container.nodeName ? $(container).children(emptyJ) : $(container).find(object))[0];
        var show = callback && value && $(value).hasClass(field);
        var complete = function() {
          return _this._transitionComplete(element, value, callback);
        };
        if (value && show) {
          var time = Util.getTransitionDurationFromElement(value);
          $(value).removeClass(css).one(Util.TRANSITION_END, complete).emulateTransitionEnd(time);
        } else {
          complete();
        }
      }, proto._transitionComplete = function(element, template, callback) {
        if (template) {
          $(template).removeClass(active);
          var customPlayerControlsButton = $(template.parentNode).find(password_verify)[0];
          if (customPlayerControlsButton) {
            $(customPlayerControlsButton).removeClass(active);
          }
          if ("tab" === template.getAttribute("role")) {
            template.setAttribute("aria-selected", false);
          }
        }
        if ($(element).addClass(active), "tab" === element.getAttribute("role") && element.setAttribute("aria-selected", true), Util.reflow(element), element.classList.contains(field) && element.classList.add(css), element.parentNode && $(element.parentNode).hasClass(tag)) {
          var dom = $(element).closest(selectorAsString)[0];
          if (dom) {
            var IFBox = [].slice.call(dom.querySelectorAll(selectorRun));
            $(IFBox).addClass(active);
          }
          element.setAttribute("aria-expanded", true);
        }
        if (callback) {
          callback();
        }
      }, Tab._jQueryInterface = function(config) {
        return this.each(function() {
          var r = $(this);
          var data = r.data("bs.tab");
          if (data || (data = new Tab(this), r.data("bs.tab", data)), "string" == typeof config) {
            if (void 0 === data[config]) {
              throw new TypeError('No method named "' + config + '"');
            }
            data[config]();
          }
        });
      }, _createClass(Tab, null, [{
        key : "VERSION",
        get : function() {
          return "4.4.1";
        }
      }]), Tab;
    }();
    $(document).on(args.CLICK_DATA_API, __WEBPACK_IMPORTED_MODULE_0__foundation_util_box__, function(event) {
      event.preventDefault();
      tab._jQueryInterface.call($(this), "show");
    });
    $.fn.tab = tab._jQueryInterface;
    $.fn.tab.Constructor = tab;
    $.fn.tab.noConflict = function() {
      return $.fn.tab = num, tab._jQueryInterface;
    };
    var handler = $.fn.toast;
    var EVENTS = {
      CLICK_DISMISS : "click.dismiss.bs.toast",
      HIDE : "hide.bs.toast",
      HIDDEN : "hidden.bs.toast",
      SHOW : "show.bs.toast",
      SHOWN : "shown.bs.toast"
    };
    var currentAbsoluteChild = "fade";
    var classname = "hide";
    var color = "show";
    var currentFlexChild = "showing";
    var config = {
      animation : "boolean",
      autohide : "boolean",
      delay : "number"
    };
    var settings = {
      animation : true,
      autohide : true,
      delay : 500
    };
    var __WEBPACK_IMPORTED_MODULE_1__main_css__ = '[data-dismiss="toast"]';
    var MetisMenu = function() {
      function Tooltip(el, config) {
        this._element = el;
        this._config = this._getConfig(config);
        this._timeout = null;
        this._setListeners();
      }
      var proto = Tooltip.prototype;
      return proto.show = function() {
        var self = this;
        var clickEvent = $.Event(EVENTS.SHOW);
        if ($(this._element).trigger(clickEvent), !clickEvent.isDefaultPrevented()) {
          if (this._config.animation) {
            this._element.classList.add(currentAbsoluteChild);
          }
          var complete = function() {
            self._element.classList.remove(currentFlexChild);
            self._element.classList.add(color);
            $(self._element).trigger(EVENTS.SHOWN);
            if (self._config.autohide) {
              self._timeout = setTimeout(function() {
                self.hide();
              }, self._config.delay);
            }
          };
          if (this._element.classList.remove(classname), Util.reflow(this._element), this._element.classList.add(currentFlexChild), this._config.animation) {
            var TRANSITION_DURATION = Util.getTransitionDurationFromElement(this._element);
            $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
          } else {
            complete();
          }
        }
      }, proto.hide = function() {
        if (this._element.classList.contains(color)) {
          var clickEvent = $.Event(EVENTS.HIDE);
          $(this._element).trigger(clickEvent);
          if (!clickEvent.isDefaultPrevented()) {
            this._close();
          }
        }
      }, proto.dispose = function() {
        clearTimeout(this._timeout);
        this._timeout = null;
        if (this._element.classList.contains(color)) {
          this._element.classList.remove(color);
        }
        $(this._element).off(EVENTS.CLICK_DISMISS);
        $.removeData(this._element, "bs.toast");
        this._element = null;
        this._config = null;
      }, proto._getConfig = function(config) {
        return config = extend({}, settings, {}, $(this._element).data(), {}, "object" == typeof config && config ? config : {}), Util.typeCheckConfig("toast", config, this.constructor.DefaultType), config;
      }, proto._setListeners = function() {
        var $trashTreeContextMenu = this;
        $(this._element).on(EVENTS.CLICK_DISMISS, __WEBPACK_IMPORTED_MODULE_1__main_css__, function() {
          return $trashTreeContextMenu.hide();
        });
      }, proto._close = function() {
        var _this7 = this;
        var complete = function() {
          _this7._element.classList.add(classname);
          $(_this7._element).trigger(EVENTS.HIDDEN);
        };
        if (this._element.classList.remove(color), this._config.animation) {
          var TRANSITION_DURATION = Util.getTransitionDurationFromElement(this._element);
          $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          complete();
        }
      }, Tooltip._jQueryInterface = function(config) {
        return this.each(function() {
          var r = $(this);
          var data = r.data("bs.toast");
          if (data || (data = new Tooltip(this, "object" == typeof config && config), r.data("bs.toast", data)), "string" == typeof config) {
            if (void 0 === data[config]) {
              throw new TypeError('No method named "' + config + '"');
            }
            data[config](this);
          }
        });
      }, _createClass(Tooltip, null, [{
        key : "VERSION",
        get : function() {
          return "4.4.1";
        }
      }, {
        key : "DefaultType",
        get : function() {
          return config;
        }
      }, {
        key : "Default",
        get : function() {
          return settings;
        }
      }]), Tooltip;
    }();
    $.fn.toast = MetisMenu._jQueryInterface;
    $.fn.toast.Constructor = MetisMenu;
    $.fn.toast.noConflict = function() {
      return $.fn.toast = handler, MetisMenu._jQueryInterface;
    };
    exports.Alert = Alert;
    exports.Button = Button;
    exports.Carousel = Carousel;
    exports.Collapse = Collapse;
    exports.Dropdown = Dropdown;
    exports.Modal = Modal;
    exports.Popover = Popover;
    exports.Scrollspy = Tab;
    exports.Tab = tab;
    exports.Toast = MetisMenu;
    exports.Tooltip = Tooltip;
    exports.Util = Util;
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
  }(a, saveNotifs(1), saveNotifs(3));
}, function(canCreateDiscussions, d, n) {
  n.r(d);
  (function(value) {
    function isFunction(obj) {
      return obj && "[object Function]" === {}.toString.call(obj);
    }
    function getComputedStyle(node, name) {
      if (1 !== node.nodeType) {
        return [];
      }
      var params = node.ownerDocument.defaultView.getComputedStyle(node, null);
      return name ? params[name] : params;
    }
    function getParentNode(node) {
      return "HTML" === node.nodeName ? node : node.parentNode || node.host;
    }
    function getScrollParent(element) {
      if (!element) {
        return document.body;
      }
      switch(element.nodeName) {
        case "HTML":
        case "BODY":
          return element.ownerDocument.body;
        case "#document":
          return element.body;
      }
      var style = getComputedStyle(element);
      var overflow = style.overflow;
      var overflowX = style.overflowX;
      var overflowY = style.overflowY;
      return /(auto|scroll|overlay)/.test(overflow + overflowY + overflowX) ? element : getScrollParent(getParentNode(element));
    }
    function isAncestor(parent) {
      return parent && parent.referenceNode ? parent.referenceNode : parent;
    }
    function isIE10$1(string) {
      return 11 === string ? typeName : 10 === string ? parentId : typeName || parentId;
    }
    function getOffsetParent(node) {
      if (!node) {
        return document.documentElement;
      }
      var text = isIE10$1(10) ? document.body : null;
      var element = node.offsetParent || null;
      for (; element === text && node.nextElementSibling;) {
        element = (node = node.nextElementSibling).offsetParent;
      }
      var parent = element && element.nodeName;
      return parent && "BODY" !== parent && "HTML" !== parent ? -1 !== ["TH", "TD", "TABLE"].indexOf(element.nodeName) && "static" === getComputedStyle(element, "position") ? getOffsetParent(element) : element : node ? node.ownerDocument.documentElement : document.documentElement;
    }
    function getRoot(node) {
      return null !== node.parentNode ? getRoot(node.parentNode) : node;
    }
    function findCommonOffsetParent(element1, element2) {
      if (!(element1 && element1.nodeType && element2 && element2.nodeType)) {
        return document.documentElement;
      }
      var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
      var start = order ? element1 : element2;
      var end = order ? element2 : element1;
      var range = document.createRange();
      range.setStart(start, 0);
      range.setEnd(end, 0);
      var a;
      var origChildName;
      var commonAncestorContainer = range.commonAncestorContainer;
      if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
        return "BODY" === (origChildName = (a = commonAncestorContainer).nodeName) || "HTML" !== origChildName && getOffsetParent(a.firstElementChild) !== a ? getOffsetParent(commonAncestorContainer) : commonAncestorContainer;
      }
      var element1root = getRoot(element1);
      return element1root.host ? findCommonOffsetParent(element1root.host, element2) : findCommonOffsetParent(element1, getRoot(element2).host);
    }
    function getScroll(e) {
      var v = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top";
      var scroll = "top" === v ? "scrollTop" : "scrollLeft";
      var node = e.nodeName;
      if ("BODY" === node || "HTML" === node) {
        var html = e.ownerDocument.documentElement;
        var el = e.ownerDocument.scrollingElement || html;
        return el[scroll];
      }
      return e[scroll];
    }
    function includeScroll(rect, element) {
      var isOrChild = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      var scrollTop = getScroll(element, "top");
      var scrollLeft = getScroll(element, "left");
      var modifier = isOrChild ? -1 : 1;
      return rect.top += scrollTop * modifier, rect.bottom += scrollTop * modifier, rect.left += scrollLeft * modifier, rect.right += scrollLeft * modifier, rect;
    }
    function getBordersSize(styles, axis) {
      var dirA = "x" === axis ? "Left" : "Top";
      var dirB = "Left" === dirA ? "Right" : "Bottom";
      return parseFloat(styles["border" + dirA + "Width"]) + parseFloat(styles["border" + dirB + "Width"]);
    }
    function getSize(axis, body, html, computedStyle) {
      return Math.max(body["offset" + axis], body["scroll" + axis], html["client" + axis], html["offset" + axis], html["scroll" + axis], isIE10$1(10) ? parseInt(html["offset" + axis]) + parseInt(computedStyle["margin" + ("Height" === axis ? "Top" : "Left")]) + parseInt(computedStyle["margin" + ("Height" === axis ? "Bottom" : "Right")]) : 0);
    }
    function getWindowSizes(doc) {
      var body = doc.body;
      var html = doc.documentElement;
      var computedStyle = isIE10$1(10) && getComputedStyle(html);
      return {
        height : getSize("Height", body, html, computedStyle),
        width : getSize("Width", body, html, computedStyle)
      };
    }
    function getClientRect(element) {
      return _extends({}, element, {
        right : element.left + element.width,
        bottom : element.top + element.height
      });
    }
    function getBoundingClientRect(element) {
      var rect = {};
      try {
        if (isIE10$1(10)) {
          rect = element.getBoundingClientRect();
          var scrollTop = getScroll(element, "top");
          var scrollLeft = getScroll(element, "left");
          rect.top += scrollTop;
          rect.left += scrollLeft;
          rect.bottom += scrollTop;
          rect.right += scrollLeft;
        } else {
          rect = element.getBoundingClientRect();
        }
      } catch (e) {
      }
      var result = {
        left : rect.left,
        top : rect.top,
        width : rect.right - rect.left,
        height : rect.bottom - rect.top
      };
      var sizes = "HTML" === element.nodeName ? getWindowSizes(element.ownerDocument) : {};
      var width = sizes.width || element.clientWidth || result.width;
      var height = sizes.height || element.clientHeight || result.height;
      var horizScrollbar = element.offsetWidth - width;
      var vertScrollbar = element.offsetHeight - height;
      if (horizScrollbar || vertScrollbar) {
        var styles = getComputedStyle(element);
        horizScrollbar = horizScrollbar - getBordersSize(styles, "x");
        vertScrollbar = vertScrollbar - getBordersSize(styles, "y");
        result.width -= horizScrollbar;
        result.height -= vertScrollbar;
      }
      return getClientRect(result);
    }
    function getOffsetRectRelativeToArbitraryNode(node, parent) {
      var callback = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      var fn = isIE10$1(10);
      var easing = "HTML" === parent.nodeName;
      var rect = getBoundingClientRect(node);
      var elementRect = getBoundingClientRect(parent);
      var elem = getScrollParent(node);
      var styles = getComputedStyle(parent);
      var borderTopWidth = parseFloat(styles.borderTopWidth);
      var borderLeftWidth = parseFloat(styles.borderLeftWidth);
      if (callback && easing) {
        elementRect.top = Math.max(elementRect.top, 0);
        elementRect.left = Math.max(elementRect.left, 0);
      }
      var offsets = getClientRect({
        top : rect.top - elementRect.top - borderTopWidth,
        left : rect.left - elementRect.left - borderLeftWidth,
        width : rect.width,
        height : rect.height
      });
      if (offsets.marginTop = 0, offsets.marginLeft = 0, !fn && easing) {
        var marginTop = parseFloat(styles.marginTop);
        var marginLeft = parseFloat(styles.marginLeft);
        offsets.top -= borderTopWidth - marginTop;
        offsets.bottom -= borderTopWidth - marginTop;
        offsets.left -= borderLeftWidth - marginLeft;
        offsets.right -= borderLeftWidth - marginLeft;
        offsets.marginTop = marginTop;
        offsets.marginLeft = marginLeft;
      }
      return (fn && !callback ? parent.contains(elem) : parent === elem && "BODY" !== elem.nodeName) && (offsets = includeScroll(offsets, parent)), offsets;
    }
    function getViewportOffsetRectRelativeToArtbitraryNode(element) {
      var $scrollContainer = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      var html = element.ownerDocument.documentElement;
      var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
      var neededWidth = Math.max(html.clientWidth, window.innerWidth || 0);
      var dxdydust = Math.max(html.clientHeight, window.innerHeight || 0);
      var scrollTop = $scrollContainer ? 0 : getScroll(html);
      var scrollLeft = $scrollContainer ? 0 : getScroll(html, "left");
      var elementRect = {
        top : scrollTop - relativeOffset.top + relativeOffset.marginTop,
        left : scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
        width : neededWidth,
        height : dxdydust
      };
      return getClientRect(elementRect);
    }
    function isFixed(el) {
      var node = el.nodeName;
      if ("BODY" === node || "HTML" === node) {
        return false;
      }
      if ("fixed" === getComputedStyle(el, "position")) {
        return true;
      }
      var parent = getParentNode(el);
      return !!parent && isFixed(parent);
    }
    function isVisible(element) {
      if (!element || !element.parentElement || isIE10$1()) {
        return document.documentElement;
      }
      var el = element.parentElement;
      for (; el && "none" === getComputedStyle(el, "transform");) {
        el = el.parentElement;
      }
      return el || document.documentElement;
    }
    function getBoundaries(e, element, padding, key) {
      var deep = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      var boundaries = {
        top : 0,
        left : 0
      };
      var offsetParent = deep ? isVisible(e) : findCommonOffsetParent(e, isAncestor(element));
      if ("viewport" === key) {
        boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, deep);
      } else {
        var node = void 0;
        if ("scrollParent" === key) {
          if ("BODY" === (node = getScrollParent(getParentNode(element))).nodeName) {
            node = e.ownerDocument.documentElement;
          }
        } else {
          node = "window" === key ? e.ownerDocument.documentElement : key;
        }
        var offsets = getOffsetRectRelativeToArbitraryNode(node, offsetParent, deep);
        if ("HTML" !== node.nodeName || isFixed(offsetParent)) {
          boundaries = offsets;
        } else {
          var _entity$getData = getWindowSizes(e.ownerDocument);
          var height = _entity$getData.height;
          var width = _entity$getData.width;
          boundaries.top += offsets.top - offsets.marginTop;
          boundaries.bottom = height + offsets.top;
          boundaries.left += offsets.left - offsets.marginLeft;
          boundaries.right = width + offsets.left;
        }
      }
      var hasDefault = "number" == typeof(padding = padding || 0);
      return boundaries.left += hasDefault ? padding : padding.left || 0, boundaries.top += hasDefault ? padding : padding.top || 0, boundaries.right -= hasDefault ? padding : padding.right || 0, boundaries.bottom -= hasDefault ? padding : padding.bottom || 0, boundaries;
    }
    function getArea(rect) {
      return rect.width * rect.height;
    }
    function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
      var padding = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
      if (-1 === placement.indexOf("auto")) {
        return placement;
      }
      var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
      var rects = {
        top : {
          width : boundaries.width,
          height : refRect.top - boundaries.top
        },
        right : {
          width : boundaries.right - refRect.right,
          height : boundaries.height
        },
        bottom : {
          width : boundaries.width,
          height : boundaries.bottom - refRect.bottom
        },
        left : {
          width : refRect.left - boundaries.left,
          height : boundaries.height
        }
      };
      var storedKeys = Object.keys(rects).map(function(i) {
        return _extends({
          key : i
        }, rects[i], {
          area : getArea(rects[i])
        });
      }).sort(function(a, b) {
        return b.area - a.area;
      });
      var keys_and_values = storedKeys.filter(function(bef) {
        var width = bef.width;
        var height = bef.height;
        return width >= popper.clientWidth && height >= popper.clientHeight;
      });
      var menuentry = keys_and_values.length > 0 ? keys_and_values[0].key : storedKeys[0].key;
      var id = placement.split("-")[1];
      return menuentry + (id ? "-" + id : "");
    }
    function getReferenceOffsets(state, popper, reference) {
      var isFixed = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var offsetParent = isFixed ? isVisible(popper) : findCommonOffsetParent(popper, isAncestor(reference));
      return getOffsetRectRelativeToArbitraryNode(reference, offsetParent, isFixed);
    }
    function init(element) {
      var size = element.ownerDocument.defaultView.getComputedStyle(element);
      var x = parseFloat(size.marginTop || 0) + parseFloat(size.marginBottom || 0);
      var y = parseFloat(size.marginLeft || 0) + parseFloat(size.marginRight || 0);
      return {
        width : element.offsetWidth + y,
        height : element.offsetHeight + x
      };
    }
    function getOppositePlacement(placement) {
      var gap = {
        left : "right",
        right : "left",
        bottom : "top",
        top : "bottom"
      };
      return placement.replace(/left|right|bottom|top/g, function(attempts) {
        return gap[attempts];
      });
    }
    function getPopperOffsets(popper, referenceOffsets, placement) {
      placement = placement.split("-")[0];
      var popperRect = init(popper);
      var popperOffsets = {
        width : popperRect.width,
        height : popperRect.height
      };
      var isHoriz = -1 !== ["right", "left"].indexOf(placement);
      var mainSide = isHoriz ? "top" : "left";
      var secondarySide = isHoriz ? "left" : "top";
      var measurement = isHoriz ? "height" : "width";
      var secondaryMeasurement = isHoriz ? "width" : "height";
      return popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2, popperOffsets[secondarySide] = placement === secondarySide ? referenceOffsets[secondarySide] - popperRect[secondaryMeasurement] : referenceOffsets[getOppositePlacement(secondarySide)], popperOffsets;
    }
    function find(obj, fn) {
      return Array.prototype.find ? obj.find(fn) : obj.filter(fn)[0];
    }
    function runModifiers(modifiers, data, ends) {
      return (void 0 === ends ? modifiers : modifiers.slice(0, function(obj, index, value) {
        if (Array.prototype.findIndex) {
          return obj.findIndex(function(dict) {
            return dict[index] === value;
          });
        }
        var type2 = find(obj, function(dict) {
          return dict[index] === value;
        });
        return obj.indexOf(type2);
      }(modifiers, "name", ends))).forEach(function(modifier) {
        if (modifier.function) {
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        }
        var fn = modifier.function || modifier.fn;
        if (modifier.enabled && isFunction(fn)) {
          data.offsets.popper = getClientRect(data.offsets.popper);
          data.offsets.reference = getClientRect(data.offsets.reference);
          data = fn(data, modifier);
        }
      }), data;
    }
    function update() {
      if (!this.state.isDestroyed) {
        var data = {
          instance : this,
          styles : {},
          arrowStyles : {},
          attributes : {},
          flipped : false,
          offsets : {}
        };
        data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);
        data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
        data.originalPlacement = data.placement;
        data.positionFixed = this.options.positionFixed;
        data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
        data.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute";
        data = runModifiers(this.modifiers, data);
        if (this.state.isCreated) {
          this.options.onUpdate(data);
        } else {
          this.state.isCreated = true;
          this.options.onCreate(data);
        }
      }
    }
    function isModifierEnabled(modifiers, modifierName) {
      return modifiers.some(function(attribute) {
        var name = attribute.name;
        return attribute.enabled && name === modifierName;
      });
    }
    function getSupportedPropertyName(property) {
      var prefixes = [false, "ms", "Webkit", "Moz", "O"];
      var id = property.charAt(0).toUpperCase() + property.slice(1);
      var i = 0;
      for (; i < prefixes.length; i++) {
        var prefix = prefixes[i];
        var name = prefix ? "" + prefix + id : property;
        if (void 0 !== document.body.style[name]) {
          return name;
        }
      }
      return null;
    }
    function destroy() {
      return this.state.isDestroyed = true, isModifierEnabled(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[getSupportedPropertyName("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), 
      this;
    }
    function $(el) {
      var node = el.ownerDocument;
      return node ? node.defaultView : window;
    }
    function setupEventListeners(reference, options, state, updateBound) {
      state.updateBound = updateBound;
      $(reference).addEventListener("resize", state.updateBound, {
        passive : true
      });
      var scrollElement = getScrollParent(reference);
      return function attachToScrollParents(node, event, callback, scrollParents) {
        var list = "BODY" === node.nodeName;
        var target = list ? node.ownerDocument.defaultView : node;
        target.addEventListener(event, callback, {
          passive : true
        });
        if (!list) {
          attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
        }
        scrollParents.push(target);
      }(scrollElement, "scroll", state.updateBound, state.scrollParents), state.scrollElement = scrollElement, state.eventsEnabled = true, state;
    }
    function enableEventListeners() {
      if (!this.state.eventsEnabled) {
        this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
      }
    }
    function removeEventListeners() {
      var window;
      var state;
      if (this.state.eventsEnabled) {
        cancelAnimationFrame(this.scheduleUpdate);
        this.state = (window = this.reference, state = this.state, $(window).removeEventListener("resize", state.updateBound), state.scrollParents.forEach(function(target) {
          target.removeEventListener("scroll", state.updateBound);
        }), state.updateBound = null, state.scrollParents = [], state.scrollElement = null, state.eventsEnabled = false, state);
      }
    }
    function isNumeric(value) {
      return "" !== value && !isNaN(parseFloat(value)) && isFinite(value);
    }
    function setStyles(element, keys) {
      Object.keys(keys).forEach(function(i) {
        var value = "";
        if (-1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && isNumeric(keys[i])) {
          value = "px";
        }
        element.style[i] = keys[i] + value;
      });
    }
    function isModifierRequired(modifiers, requestingName, requestedName) {
      var requesting = find(modifiers, function(engineDiscovery) {
        return engineDiscovery.name === requestingName;
      });
      var isRequired = !!requesting && modifiers.some(function(modifier) {
        return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
      });
      if (!isRequired) {
        var err = "`" + requestingName + "`";
        var k = "`" + requestedName + "`";
        console.warn(k + " modifier is required by " + err + " modifier in order to work, be sure to include it before " + err + "!");
      }
      return isRequired;
    }
    function clockwise(placement) {
      var hasExternalScreen = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      var index = validPlacements.indexOf(placement);
      var y = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
      return hasExternalScreen ? y.reverse() : y;
    }
    function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
      var ssq = [0, 0];
      var expanded = -1 !== ["right", "left"].indexOf(basePlacement);
      var x = offset.split(/(\+|\-)/).map(function(commentToCheck) {
        return commentToCheck.trim();
      });
      var y = x.indexOf(find(x, function(YoutubeService) {
        return -1 !== YoutubeService.search(/,|\s/);
      }));
      if (x[y] && -1 === x[y].indexOf(",")) {
        console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
      }
      var parameterv = /\s*,\s*|\s+/;
      var list = -1 !== y ? [x.slice(0, y).concat([x[y].split(parameterv)[0]]), [x[y].split(parameterv)[1]].concat(x.slice(y + 1))] : [x];
      return (list = list.map(function(metapakModulesSequence, summaryElement) {
        var inlineSizeName = (1 === summaryElement ? !expanded : expanded) ? "height" : "width";
        var onBindElement = false;
        return metapakModulesSequence.reduce(function(arr, el) {
          return "" === arr[arr.length - 1] && -1 !== ["+", "-"].indexOf(el) ? (arr[arr.length - 1] = el, onBindElement = true, arr) : onBindElement ? (arr[arr.length - 1] += el, onBindElement = false, arr) : arr.concat(el);
        }, []).map(function(e) {
          return function(instance, name, popperOffsets, referenceOffsets) {
            var imageSz = instance.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
            var o = +imageSz[1];
            var w = imageSz[2];
            if (!o) {
              return instance;
            }
            if (0 === w.indexOf("%")) {
              var element = void 0;
              switch(w) {
                case "%p":
                  element = popperOffsets;
                  break;
                case "%":
                case "%r":
                default:
                  element = referenceOffsets;
              }
              return getClientRect(element)[name] / 100 * o;
            }
            if ("vh" === w || "vw" === w) {
              return ("vh" === w ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
            }
            return o;
          }(e, inlineSizeName, popperOffsets, referenceOffsets);
        });
      })).forEach(function(groups, idx) {
        groups.forEach(function(v, i) {
          if (isNumeric(v)) {
            ssq[idx] += v * ("-" === groups[i - 1] ? -1 : 1);
          }
        });
      }), ssq;
    }
    var context = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator;
    var ajaxInterval = function() {
      var clues = ["Edge", "Trident", "Firefox"];
      var i = 0;
      for (; i < clues.length; i = i + 1) {
        if (context && navigator.userAgent.indexOf(clues[i]) >= 0) {
          return 1;
        }
      }
      return 0;
    }();
    var debounce = context && window.Promise ? function(saveNotifs) {
      var t = false;
      return function() {
        if (!t) {
          t = true;
          window.Promise.resolve().then(function() {
            t = false;
            saveNotifs();
          });
        }
      };
    } : function(saveNotifs) {
      var t = false;
      return function() {
        if (!t) {
          t = true;
          setTimeout(function() {
            t = false;
            saveNotifs();
          }, ajaxInterval);
        }
      };
    };
    var typeName = context && !(!window.MSInputMethodContext || !document.documentMode);
    var parentId = context && /MSIE 10/.test(navigator.userAgent);
    var classCallCheck = function(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    var createClass = function() {
      function t(y, props) {
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) {
            descriptor.writable = true;
          }
          Object.defineProperty(y, descriptor.key, descriptor);
        }
      }
      return function(p, n, a) {
        return n && t(p.prototype, n), a && t(p, a), p;
      };
    }();
    var defineProperty = function(obj, key, value) {
      return key in obj ? Object.defineProperty(obj, key, {
        value : value,
        enumerable : true,
        configurable : true,
        writable : true
      }) : obj[key] = value, obj;
    };
    var _extends = Object.assign || function(headers) {
      var i = 1;
      for (; i < arguments.length; i++) {
        var obj = arguments[i];
        var key;
        for (key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            headers[key] = obj[key];
          }
        }
      }
      return headers;
    };
    var precision = context && /Firefox/i.test(navigator.userAgent);
    var placements = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"];
    var validPlacements = placements.slice(3);
    var FLIP = "flip";
    var mta = "clockwise";
    var hta = "counterclockwise";
    var DEFAULTS = {
      placement : "bottom",
      positionFixed : false,
      eventsEnabled : true,
      removeOnDestroy : false,
      onCreate : function() {
      },
      onUpdate : function() {
      },
      modifiers : {
        shift : {
          order : 100,
          enabled : true,
          fn : function(data) {
            var placement = data.placement;
            var sceneUid = placement.split("-")[0];
            var shiftvariation = placement.split("-")[1];
            if (shiftvariation) {
              var _data$offsets = data.offsets;
              var reference = _data$offsets.reference;
              var popper = _data$offsets.popper;
              var isVertical = -1 !== ["bottom", "top"].indexOf(sceneUid);
              var side = isVertical ? "left" : "top";
              var measurement = isVertical ? "width" : "height";
              var shiftOffsets = {
                start : defineProperty({}, side, reference[side]),
                end : defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
              };
              data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
            }
            return data;
          }
        },
        offset : {
          order : 200,
          enabled : true,
          fn : function(data, value) {
            var offset = value.offset;
            var placement = data.placement;
            var _data$offsets = data.offsets;
            var popper = _data$offsets.popper;
            var reference = _data$offsets.reference;
            var align = placement.split("-")[0];
            var offsets = void 0;
            return offsets = isNumeric(+offset) ? [+offset, 0] : parseOffset(offset, popper, reference, align), "left" === align ? (popper.top += offsets[0], popper.left -= offsets[1]) : "right" === align ? (popper.top += offsets[0], popper.left += offsets[1]) : "top" === align ? (popper.left += offsets[0], popper.top -= offsets[1]) : "bottom" === align && (popper.left += offsets[0], popper.top += offsets[1]), data.popper = popper, data;
          },
          offset : 0
        },
        preventOverflow : {
          order : 300,
          enabled : true,
          fn : function(data, options) {
            var el = options.boundariesElement || getOffsetParent(data.instance.popper);
            if (data.instance.reference === el) {
              el = getOffsetParent(el);
            }
            var str = getSupportedPropertyName("transform");
            var s = data.instance.popper.style;
            var pos = s.top;
            var l = s.left;
            var t = s[str];
            s.top = "";
            s.left = "";
            s[str] = "";
            var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, el, data.positionFixed);
            s.top = pos;
            s.left = l;
            s[str] = t;
            options.boundaries = boundaries;
            var order = options.priority;
            var popper = data.offsets.popper;
            var check = {
              primary : function(placement) {
                var value = popper[placement];
                return popper[placement] < boundaries[placement] && !options.escapeWithReference && (value = Math.max(popper[placement], boundaries[placement])), defineProperty({}, placement, value);
              },
              secondary : function(placement) {
                var mainSide = "right" === placement ? "left" : "top";
                var value = popper[mainSide];
                return popper[placement] > boundaries[placement] && !options.escapeWithReference && (value = Math.min(popper[mainSide], boundaries[placement] - ("right" === placement ? popper.width : popper.height))), defineProperty({}, mainSide, value);
              }
            };
            return order.forEach(function(placement) {
              var side = -1 !== ["left", "top"].indexOf(placement) ? "primary" : "secondary";
              popper = _extends({}, popper, check[side](placement));
            }), data.offsets.popper = popper, data;
          },
          priority : ["left", "right", "top", "bottom"],
          padding : 5,
          boundariesElement : "scrollParent"
        },
        keepTogether : {
          order : 400,
          enabled : true,
          fn : function(data) {
            var _data$offsets = data.offsets;
            var popper = _data$offsets.popper;
            var reference = _data$offsets.reference;
            var sceneUid = data.placement.split("-")[0];
            var floor = Math.floor;
            var isVertical = -1 !== ["top", "bottom"].indexOf(sceneUid);
            var side = isVertical ? "right" : "bottom";
            var opSide = isVertical ? "left" : "top";
            var measurement = isVertical ? "width" : "height";
            return popper[side] < floor(reference[opSide]) && (data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement]), popper[opSide] > floor(reference[side]) && (data.offsets.popper[opSide] = floor(reference[side])), data;
          }
        },
        arrow : {
          order : 500,
          enabled : true,
          fn : function(data, event) {
            var blitzReturn;
            if (!isModifierRequired(data.instance.modifiers, "arrow", "keepTogether")) {
              return data;
            }
            var target = event.element;
            if ("string" == typeof target) {
              if (!(target = data.instance.popper.querySelector(target))) {
                return data;
              }
            } else {
              if (!data.instance.popper.contains(target)) {
                return console.warn("WARNING: `arrow.element` must be child of its popper element!"), data;
              }
            }
            var sceneUid = data.placement.split("-")[0];
            var _data$offsets = data.offsets;
            var popper = _data$offsets.popper;
            var reference = _data$offsets.reference;
            var vert = -1 !== ["left", "right"].indexOf(sceneUid);
            var len = vert ? "height" : "width";
            var dir = vert ? "Top" : "Left";
            var side = dir.toLowerCase();
            var prop = vert ? "left" : "top";
            var opSide = vert ? "bottom" : "right";
            var arrowElementSize = init(target)[len];
            if (reference[opSide] - arrowElementSize < popper[side]) {
              data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
            }
            if (reference[side] + arrowElementSize > popper[opSide]) {
              data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
            }
            data.offsets.popper = getClientRect(data.offsets.popper);
            var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;
            var computedStyle = getComputedStyle(data.instance.popper);
            var x = parseFloat(computedStyle["margin" + dir]);
            var y = parseFloat(computedStyle["border" + dir + "Width"]);
            var height = center - data.offsets.popper[side] - x - y;
            return height = Math.max(Math.min(popper[len] - arrowElementSize, height), 0), data.arrowElement = target, data.offsets.arrow = (defineProperty(blitzReturn = {}, side, Math.round(height)), defineProperty(blitzReturn, prop, ""), blitzReturn), data;
          },
          element : "[x-arrow]"
        },
        flip : {
          order : 600,
          enabled : true,
          fn : function(data, options) {
            if (isModifierEnabled(data.instance.modifiers, "inner")) {
              return data;
            }
            if (data.flipped && data.placement === data.originalPlacement) {
              return data;
            }
            var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
            var placement = data.placement.split("-")[0];
            var placementOpposite = getOppositePlacement(placement);
            var type = data.placement.split("-")[1] || "";
            var flipOrder = [];
            switch(options.behavior) {
              case FLIP:
                flipOrder = [placement, placementOpposite];
                break;
              case mta:
                flipOrder = clockwise(placement);
                break;
              case hta:
                flipOrder = clockwise(placement, true);
                break;
              default:
                flipOrder = options.behavior;
            }
            return flipOrder.forEach(function(inside, index) {
              if (placement !== inside || flipOrder.length === index + 1) {
                return data;
              }
              placement = data.placement.split("-")[0];
              placementOpposite = getOppositePlacement(placement);
              var popper = data.offsets.popper;
              var refOffsets = data.offsets.reference;
              var floor = Math.floor;
              var d = "left" === placement && floor(popper.right) > floor(refOffsets.left) || "right" === placement && floor(popper.left) < floor(refOffsets.right) || "top" === placement && floor(popper.bottom) > floor(refOffsets.top) || "bottom" === placement && floor(popper.top) < floor(refOffsets.bottom);
              var isSwipingLeft = floor(popper.left) < floor(boundaries.left);
              var isSwipingRight = floor(popper.right) > floor(boundaries.right);
              var g = floor(popper.top) < floor(boundaries.top);
              var m = floor(popper.bottom) > floor(boundaries.bottom);
              var n = "left" === placement && isSwipingLeft || "right" === placement && isSwipingRight || "top" === placement && g || "bottom" === placement && m;
              var forward = -1 !== ["top", "bottom"].indexOf(placement);
              var from = !!options.flipVariations && (forward && "start" === type && isSwipingLeft || forward && "end" === type && isSwipingRight || !forward && "start" === type && g || !forward && "end" === type && m);
              var undefined = !!options.flipVariationsByContent && (forward && "start" === type && isSwipingRight || forward && "end" === type && isSwipingLeft || !forward && "start" === type && m || !forward && "end" === type && g);
              var i = from || undefined;
              if (d || n || i) {
                data.flipped = true;
                if (d || n) {
                  placement = flipOrder[index + 1];
                }
                if (i) {
                  type = function(end) {
                    return "end" === end ? "start" : "start" === end ? "end" : end;
                  }(type);
                }
                data.placement = placement + (type ? "-" + type : "");
                data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
                data = runModifiers(data.instance.modifiers, data, "flip");
              }
            }), data;
          },
          behavior : "flip",
          padding : 5,
          boundariesElement : "viewport",
          flipVariations : false,
          flipVariationsByContent : false
        },
        inner : {
          order : 700,
          enabled : false,
          fn : function(data) {
            var placement = data.placement;
            var nodeId = placement.split("-")[0];
            var _data$offsets = data.offsets;
            var popper = _data$offsets.popper;
            var reference = _data$offsets.reference;
            var isHoriz = -1 !== ["left", "right"].indexOf(nodeId);
            var subtractLength = -1 === ["top", "left"].indexOf(nodeId);
            return popper[isHoriz ? "left" : "top"] = reference[nodeId] - (subtractLength ? popper[isHoriz ? "width" : "height"] : 0), data.placement = getOppositePlacement(placement), data.offsets.popper = getClientRect(popper), data;
          }
        },
        hide : {
          order : 800,
          enabled : true,
          fn : function(data) {
            if (!isModifierRequired(data.instance.modifiers, "hide", "preventOverflow")) {
              return data;
            }
            var itsGeom = data.offsets.reference;
            var pgdGeom = find(data.instance.modifiers, function(engineDiscovery) {
              return "preventOverflow" === engineDiscovery.name;
            }).boundaries;
            if (itsGeom.bottom < pgdGeom.top || itsGeom.left > pgdGeom.right || itsGeom.top > pgdGeom.bottom || itsGeom.right < pgdGeom.left) {
              if (true === data.hide) {
                return data;
              }
              data.hide = true;
              data.attributes["x-out-of-boundaries"] = "";
            } else {
              if (false === data.hide) {
                return data;
              }
              data.hide = false;
              data.attributes["x-out-of-boundaries"] = false;
            }
            return data;
          }
        },
        computeStyle : {
          order : 850,
          enabled : true,
          fn : function(data, options) {
            var side = options.x;
            var left = options.y;
            var newAuthorship = data.offsets.popper;
            var number = find(data.instance.modifiers, function(engineDiscovery) {
              return "applyStyle" === engineDiscovery.name;
            }).gpuAcceleration;
            if (void 0 !== number) {
              console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
            }
            var baseFormattingNumber = void 0 !== number ? number : options.gpuAcceleration;
            var parent = getOffsetParent(data.instance.popper);
            var parentRect = getBoundingClientRect(parent);
            var style = {
              position : newAuthorship.position
            };
            var g = function(data, state) {
              var _data$offsets = data.offsets;
              var a = _data$offsets.popper;
              var reference = _data$offsets.reference;
              var r = Math.round;
              var floor = Math.floor;
              var set = function(dimension) {
                return dimension;
              };
              var y = r(reference.width);
              var x = r(a.width);
              var u = -1 !== ["left", "right"].indexOf(data.placement);
              var curieOrUri = -1 !== data.placement.indexOf("-");
              var f = state ? u || curieOrUri || y % 2 == x % 2 ? r : floor : set;
              var max = state ? r : set;
              return {
                left : f(y % 2 == 1 && x % 2 == 1 && !curieOrUri && state ? a.left - 1 : a.left),
                top : max(a.top),
                bottom : max(a.bottom),
                right : f(a.right)
              };
            }(data, window.devicePixelRatio < 2 || !precision);
            var prop = "bottom" === side ? "top" : "bottom";
            var p = "right" === left ? "left" : "right";
            var prefixedProperty = getSupportedPropertyName("transform");
            var i = void 0;
            var value = void 0;
            if (value = "bottom" === prop ? "HTML" === parent.nodeName ? -parent.clientHeight + g.bottom : -parentRect.height + g.bottom : g.top, i = "right" === p ? "HTML" === parent.nodeName ? -parent.clientWidth + g.right : -parentRect.width + g.right : g.left, baseFormattingNumber && prefixedProperty) {
              style[prefixedProperty] = "translate3d(" + i + "px, " + value + "px, 0)";
              style[prop] = 0;
              style[p] = 0;
              style.willChange = "transform";
            } else {
              var scale = "bottom" === prop ? -1 : 1;
              var step = "right" === p ? -1 : 1;
              style[prop] = value * scale;
              style[p] = i * step;
              style.willChange = prop + ", " + p;
            }
            var attributes = {
              "x-placement" : data.placement
            };
            return data.attributes = _extends({}, attributes, data.attributes), data.styles = _extends({}, style, data.styles), data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles), data;
          },
          gpuAcceleration : true,
          x : "bottom",
          y : "right"
        },
        applyStyle : {
          order : 900,
          enabled : true,
          fn : function(data) {
            var form;
            var options;
            return setStyles(data.instance.popper, data.styles), form = data.instance.popper, options = data.attributes, Object.keys(options).forEach(function(name) {
              if (false !== options[name]) {
                form.setAttribute(name, options[name]);
              } else {
                form.removeAttribute(name);
              }
            }), data.arrowElement && Object.keys(data.arrowStyles).length && setStyles(data.arrowElement, data.arrowStyles), data;
          },
          onLoad : function(reference, popper, options, callback, state) {
            var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);
            var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
            return popper.setAttribute("x-placement", placement), setStyles(popper, {
              position : options.positionFixed ? "fixed" : "absolute"
            }), options;
          },
          gpuAcceleration : void 0
        }
      }
    };
    var Popper = function() {
      function Popper(options, elem) {
        var _this = this;
        var opts = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        classCallCheck(this, Popper);
        this.scheduleUpdate = function() {
          return requestAnimationFrame(_this.update);
        };
        this.update = debounce(this.update.bind(this));
        this.options = _extends({}, Popper.Defaults, opts);
        this.state = {
          isDestroyed : false,
          isCreated : false,
          scrollParents : []
        };
        this.reference = options && options.jquery ? options[0] : options;
        this.popper = elem && elem.jquery ? elem[0] : elem;
        this.options.modifiers = {};
        Object.keys(_extends({}, Popper.Defaults.modifiers, opts.modifiers)).forEach(function(name) {
          _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, opts.modifiers ? opts.modifiers[name] : {});
        });
        this.modifiers = Object.keys(this.options.modifiers).map(function(name) {
          return _extends({
            name : name
          }, _this.options.modifiers[name]);
        }).sort(function(a, b) {
          return a.order - b.order;
        });
        this.modifiers.forEach(function(modifierOptions) {
          if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
            modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
          }
        });
        this.update();
        var eventsEnabled = this.options.eventsEnabled;
        if (eventsEnabled) {
          this.enableEventListeners();
        }
        this.state.eventsEnabled = eventsEnabled;
      }
      return createClass(Popper, [{
        key : "update",
        value : function() {
          return update.call(this);
        }
      }, {
        key : "destroy",
        value : function() {
          return destroy.call(this);
        }
      }, {
        key : "enableEventListeners",
        value : function() {
          return enableEventListeners.call(this);
        }
      }, {
        key : "disableEventListeners",
        value : function() {
          return removeEventListeners.call(this);
        }
      }]), Popper;
    }();
    Popper.Utils = ("undefined" != typeof window ? window : value).PopperUtils;
    Popper.placements = placements;
    Popper.Defaults = DEFAULTS;
    d.default = Popper;
  }).call(this, n(4));
}, function(module, canCreateDiscussions) {
  var g;
  g = function() {
    return this;
  }();
  try {
    g = g || (new Function("return this"))();
  } catch (e) {
    if ("object" == typeof window) {
      g = window;
    }
  }
  module.exports = g;
}, function(canCreateDiscussions, isSlidingUp, __webpack_require__) {
  (function($, jQuery) {
    $(document).ready(function() {
//here is correct code
    //   $(".main_input").change(function() {
    //     value = jQuery(this).val();
    //     cell = jQuery(this).attr("cell");
    //     jQuery("#" + cell).attr("data-value", value);
    //     if ("yes" == value) {
    //       jQuery("#" + cell).html('<svg height="20"  width="20"  version="1.1" x="0px" y="0px" viewBox="0 0 240.608 240.608" style="enable-background:new 0 0 240.608 240.608;"xml:space="preserve"><path style="fill:#020202;" d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z"/><g></g><g></g><g></g> <g></g><g></g> <g></g><g></g><g></g> <g></g><g> </g><g></g> <g></g><g></g><g></g><g></g></svg>');
    //     } else {
    //       if ("no" == value) {
    //         jQuery("#" + cell).html(' <svg id="Capa_1" enable-background="new 0 0 386.667 386.667" height="16" viewBox="0 0 386.667 386.667" width="16" "><path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"/></svg> ');
    //       } else {
    //         console.log("error sorry(");
    //       }
    //     }
    //     a_adulthood = document.querySelectorAll(".a_adulthood_value_td");
    //     var n = 0;
    //     var i = 0;
    //     for (; i < a_adulthood.length; i++) {
    //       if ("yes" == a_adulthood[i].dataset.value) {
    //         n++;
    //       }
    //     }
    //     $("#a_adulthood_sum").html(n + "/9");
    //     a_childhood = document.querySelectorAll(".a_childhood_value_td");
    //     var height = 0;
    //     i = 0;
    //     for (; i < a_childhood.length; i++) {
    //       if ("yes" == a_childhood[i].dataset.value) {
    //         height++;
    //       }
    //     }
    //     $("#a_childhood_sum").html(height + "/9");
    //     h_adulthood = document.querySelectorAll(".h_adulthood_value_td");
    //     var left = 0;
    //     i = 0;
    //     for (; i < h_adulthood.length; i++) {
    //       if ("yes" == h_adulthood[i].dataset.value) {
    //         left++;
    //       }
    //     }
    //     $("#h_adulthood_sum").html(left + "/9");
    //     h_childhood = document.querySelectorAll(".h_childhood_value_td");
    //     var top = 0;
    //     i = 0;
    //     for (; i < h_childhood.length; i++) {
    //       if ("yes" == h_childhood[i].dataset.value) {
    //         top++;
    //       }
    //     }
    //     $("#h_childhood_sum").html(top + "/9");
    //     c_adulthood = document.querySelectorAll(".c_adulthood_value");
    //     var index = 0;
    //     i = 0;
    //     for (; i < c_adulthood.length; i++) {
    //       if ("yes" == c_adulthood[i].value && 1 == c_adulthood[i].checked) {
    //         index++;
    //       }
    //     }
    //     c_childhood = document.querySelectorAll(".c_childhood_value");
    //     var translation = 0;
    //     i = 0;
    //     for (; i < c_childhood.length; i++) {
    //       if ("yes" == c_childhood[i].value && 1 == c_childhood[i].checked) {
    //         translation++;
    //       }
    //     }
    //     console.log("a.adult = " + n, "a.child = " + height, "h.adult = " + left, "h.child = " + top, "c.adult=" + index, "c.child=" + translation);
    //     $("#aHiddenAdulthood").val(n);
    //     $("#aHiddenChildhood").val(height);
    //     $("#hHiddenAdulthood").val(left);
    //     $("#hHiddenChildhood").val(top);
    //     $("#cHiddenAdulthood").val(index);
    //     $("#cHiddenChildhood").val(translation);
    //     if (height + top > 2) {
    //       document.querySelector("#tab2_radio1").checked = true;
    //       if (n > 4) {
    //         document.querySelector("#tab2_radio1_a").checked = true;
    //       } else {
    //         document.querySelector("#tab2_radio2_a").checked = true;
    //       }
    //       if (left > 4) {
    //         document.querySelector("#tab2_radio1_h").checked = true;
    //       } else {
    //         document.querySelector("#tab2_radio2_h").checked = true;
    //       }
    //       if (n > 4 || left > 4) {
    //         document.querySelector("#tab2_radio1").checked = true;
    //         document.querySelector("#mark_crit_a").dataset.mark = "true";
    //         document.querySelector("#mark_crit_a").innerHTML = '<svg height="20"  width="20"  version="1.1" x="0px" y="0px" viewBox="0 0 240.608 240.608" style="enable-background:new 0 0 240.608 240.608;"xml:space="preserve"><path style="fill:#020202;" d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z"/><g></g><g></g><g></g> <g></g><g></g> <g></g><g></g><g></g> <g></g><g> </g><g></g> <g></g><g></g><g></g><g></g></svg>';
    //       } else {
    //         document.querySelector("#mark_crit_a").dataset.mark = "false";
    //         document.querySelector("#mark_crit_a").innerHTML = '<svg id="Capa_1" enable-background="new 0 0 386.667 386.667" height="16" viewBox="0 0 386.667 386.667" width="16" "><path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"/></svg>';
    //       }
    //     } else {
    //       document.querySelector("#tab2_radio2").checked = true;
    //       document.querySelector("#mark_crit_a").dataset.mark = "false";
    //       document.querySelector("#mark_crit_a").innerHTML = '<svg id="Capa_1" enable-background="new 0 0 386.667 386.667" height="16" viewBox="0 0 386.667 386.667" width="16" "><path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"/></svg>';
    //     }
    //     if ("" != document.querySelector("#iInText").value) {
    //       document.querySelector("#crit_b_no").checked = true;
    //     }
    //     if (1 == document.querySelector("#crit_b_yes").checked) {
    //       document.querySelector("#iInText").value = "";
    //       document.querySelector("#iInText").setAttribute("disabled", "disabled");
    //       document.querySelector("#tab2_radio3").checked = true;
    //       document.querySelector("#mark_crit_b").dataset.mark = "true";
    //       document.querySelector("#mark_crit_b").innerHTML = '<svg height="20"  width="20"  version="1.1" x="0px" y="0px" viewBox="0 0 240.608 240.608" style="enable-background:new 0 0 240.608 240.608;"xml:space="preserve"><path style="fill:#020202;" d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z"/><g></g><g></g><g></g> <g></g><g></g> <g></g><g></g><g></g> <g></g><g> </g><g></g> <g></g><g></g><g></g><g></g></svg>';
    //     } else {
    //       if (1 == document.querySelector("#crit_b_no").checked) {
    //         document.querySelector("#iInText").removeAttribute("disabled");
    //         document.querySelector("#mark_crit_b").innerHTML = "";
    //         if (document.querySelector("#iInText").value >= 13) {
    //           document.querySelector("#tab2_radio4").checked = true;
    //           document.querySelector("#mark_crit_b").dataset.mark = "false";
    //           document.querySelector("#mark_crit_b").innerHTML = '<svg id="Capa_1" enable-background="new 0 0 386.667 386.667" height="16" viewBox="0 0 386.667 386.667" width="16" "><path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"/></svg>';
    //         } else {
    //           document.querySelector("#tab2_radio3").checked = true;
    //           document.querySelector("#mark_crit_b").dataset.mark = "true";
    //           document.querySelector("#mark_crit_b").innerHTML = '<svg height="20"  width="20"  version="1.1" x="0px" y="0px" viewBox="0 0 240.608 240.608" style="enable-background:new 0 0 240.608 240.608;"xml:space="preserve"><path style="fill:#020202;" d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z"/><g></g><g></g><g></g> <g></g><g></g> <g></g><g></g><g></g> <g></g><g> </g><g></g> <g></g><g></g><g></g><g></g></svg>';
    //         }
    //       }
    //     }
    //     if (index >= 2) {
    //       document.querySelector("#evidences_radio_1").checked = true;
    //     } else {
    //       document.querySelector("#evidences_radio_2").checked = true;
    //     }
    //     if (translation >= 2) {
    //       document.querySelector("#evidences_radio_3").checked = true;
    //     } else {
    //       document.querySelector("#evidences_radio_4").checked = true;
    //     }
    //     if (index > 1) {
    //       document.querySelector("#tab2_radio5").checked = true;
    //     } else {
    //       document.querySelector("#tab2_radio6").checked = true;
    //     }
    //     if (translation > 1) {
    //       document.querySelector("#tab2_radio7").checked = true;
    //     } else {
    //       document.querySelector("#tab2_radio8").checked = true;
    //     }
    //     if (index > 1 && translation > 1) {
    //       document.querySelector("#mark_crit_cd").dataset.mark = "true";
    //       document.querySelector("#mark_crit_cd").innerHTML = '<svg height="20"  width="20"  version="1.1" x="0px" y="0px" viewBox="0 0 240.608 240.608" style="enable-background:new 0 0 240.608 240.608;"xml:space="preserve"><path style="fill:#020202;" d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z"/><g></g><g></g><g></g> <g></g><g></g> <g></g><g></g><g></g> <g></g><g> </g><g></g> <g></g><g></g><g></g><g></g></svg>';
    //     } else {
    //       document.querySelector("#mark_crit_cd").dataset.mark = "false";
    //       document.querySelector("#mark_crit_cd").innerHTML = '<svg id="Capa_1" enable-background="new 0 0 386.667 386.667" height="16" viewBox="0 0 386.667 386.667" width="16" "><path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"/></svg>';
    //     }
    //     if (1 == document.querySelector("#tab2_radio9").checked) {
    //       document.querySelector("#mark_crit_e").dataset.mark = "true";
    //       document.querySelector("#mark_crit_e").innerHTML = '<svg height="20"  width="20"  version="1.1" x="0px" y="0px" viewBox="0 0 240.608 240.608" style="enable-background:new 0 0 240.608 240.608;"xml:space="preserve"><path style="fill:#020202;" d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z"/><g></g><g></g><g></g> <g></g><g></g> <g></g><g></g><g></g> <g></g><g> </g><g></g> <g></g><g></g><g></g><g></g></svg>';
    //       $(".table_other_content").fadeOut();
    //     } else {
    //       if (1 == document.querySelector("#tab2_radio10").checked) {
    //         document.querySelector("#mark_crit_e").dataset.mark = "false";
    //         document.querySelector("#mark_crit_e").innerHTML = '<svg id="Capa_1" enable-background="new 0 0 386.667 386.667" height="16" viewBox="0 0 386.667 386.667" width="16" "><path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"/></svg>';
    //         $(".table_other_content").fadeIn();
    //       }
    //     }
    //     var ticketID = 0;
    //     all_marks = document.querySelectorAll(".checkmark");
    //     i = 0;
    //     for (; i < all_marks.length; i++) {
    //       if ("true" == all_marks[i].dataset.mark) {
    //         ticketID++;
    //       }
    //     }
    //     console.log("count_marks= " + ticketID);
    //     if (4 == ticketID) {
    //       document.querySelector("#tab2_radio24").checked = true;
    //     } else {
    //       document.querySelector("#tab2_radio23").checked = true;
    //     }
    //     if (1 == document.querySelector("#tab2_radio24").checked) {
    //       document.querySelector("#tab2_radio25").checked = n > 4 && left + top > 4;
    //       document.querySelector("#tab2_radio26").checked = n > 4 && left + top < 5;
    //       document.querySelector("#tab2_radio27").checked = n < 5 && left + top > 4;
    //     } else {
    //       document.querySelector("#tab2_radio25").checked = false;
    //       document.querySelector("#tab2_radio26").checked = false;
    //       document.querySelector("#tab2_radio27").checked = false;
    //     }
    //     if (!(1 != document.querySelector("#tab2_radio28").checked && 1 != document.querySelector("#tab2_radio29").checked)) {
    //       document.querySelector("#tab2_radio25").checked = false;
    //       document.querySelector("#tab2_radio26").checked = false;
    //       document.querySelector("#tab2_radio27").checked = false;
    //       document.querySelector("#tab2_radio24").checked = true;
    //     }
    //     if (1 == document.querySelector("#tab2_radio23").checked) {
    //       if (1 == document.querySelector("#tab2_radio30").checked) {
    //         document.querySelector("#tab2_radio23").checked = false;
    //         document.querySelector("#tab2_radio24").checked = true;
    //         document.querySelector("#tab2_radio29").checked = true;
    //       } else {
    //         document.querySelector("#tab2_radio29").checked = false;
    //       }
    //     }
    //   });
    //   $(".to_other").click(function(event) {
    //     event.preventDefault();
    //     if ($(this).hasClass("active")) {
    //       $(this).removeClass("active");
    //       $(this).closest(".form-check-inline").next(".other_content").fadeOut();
    //     } else {
    //       $(this).addClass("active");
    //       $(this).closest(".form-check-inline").next(".other_content").fadeIn();
    //       console.log("success!!!!!!");
    //     }
    //   });
    //   $("#btnPrint").click(function(canCreateDiscussions) {
    //     !function(e) {
    //       var t = document.getElementById(e);
    //       console.log(t);
    //       var win = window.open("", "", "left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0");
    //       win.document.write('<div id="print" class="contentpane">');
    //       win.document.write('<link rel="stylesheet" href="dist/style.css" type="text/css" />');
    //       win.document.write(t.innerHTML);
    //       win.document.write("</div>");
    //       win.document.close();
    //       win.focus();
    //       win.print();
    //     }("content_for_print");
    //   });
    //   $("#mainForm").submit(function(event) {
    //     inputs = document.querySelectorAll("input:disabled");
    //     i = 0;
    //     for (; i < inputs.length; i++) {
    //       inputs[i].removeAttribute("disabled");
    //     }
    //     var jqForm = $(this);
    //     $.ajax({
    //       type : jqForm.attr("method"),
    //       url : jqForm.attr("action"),
    //       data : jqForm.serialize(),
    //       dataType : "json"
    //     }).done(function(t) {
    //       console.log(t.length);
    //       for (let j = 0; j < t.length; j++) {
    //         console.log(t[j]);
    //       }
    //       $(".popup_for_alert").css("background-color", "#32B76C");
    //       document.querySelector("#linkToSaveFile").setAttribute("href", t[0]);
    //       document.querySelector("#linkToSaveTxtFile").setAttribute("href", t[1]);
    //       $("#mainMessage").html("Success!");
    //       $("#secondMessage").html("Your file has been created. You can download it from the link below.");
    //     }).fail(function() {
    //       $(".popup_for_alert").css("background-color", "#E12C31");
    //       $("#mainMessage").html("Fail!");
    //       $("#secondMessage").html("Your file has not been created. Something is wrong :(");
    //     });
    //     event.preventDefault();
    //   });
    //   $("#postDataBtn").click(function() {
    //     $(".overlay_for_alert_popup").fadeIn();
    //     $(".popup_for_alert").fadeIn();
    //   });
    //   $(".overlay_for_alert_popup").click(function() {
    //     $(".overlay_for_alert_popup").css("display", "none");
    //     $(".popup_for_alert").css("display", "none");
    //   });
    //   $(".close_popup").click(function() {
    //     $(".overlay_for_alert_popup").css("display", "none");
    //     $(".popup_for_alert").css("display", "none");
    //   });
    // });
  }).call(this, __webpack_require__(0), __webpack_require__(0));
}, function(canCreateDiscussions, isSlidingUp, moment) {
  (function($) {
    $(document).ready(function() {
      // new StickySidebar("#sidebar", {
      //   topSpacing : 30,
      //   bottomSpacing : 0,
      //   containerSelector : "#all_content",
      //   innerWrapperSelector : "#sidebar__inner",
      //   stickyClass : "is-affixed",
      //   resizeSensor : true
      // });
      // var projectsContainer = $("html, body");
      // $('a[href*="#"]').click(function() {
      //   return projectsContainer.animate({
      //     scrollTop : $($.attr(this, "href")).offset().top
      //   }, 400), false;
      // });
      // $(".show_dropdown").click(function(canCreateDiscussions) {
      //   $(this).next(".custom_dropdown").toggleClass("active");
      // });
      // $("#sidebar__inner").mouseover(function() {
      //   $(".arrow_part svg").css({
      //     "-webkit-transform" : "rotate(180deg)",
      //     "-moz-transform" : "rotate(180deg)",
      //     transform : "rotate(180deg)",
      //     transition : "1s"
      //   });
      // });
      // $("#sidebar__inner").mouseout(function() {
      //   $("#sidebar__inner").css({
      //     transform : "unset",
      //     transition : "0.6s"
      //   });
      //   $(".arrow_part svg").css({
      //     "-webkit-transform" : "rotate(360deg)",
      //     "-moz-transform" : "rotate360deg)",
      //     transform : "rotate(360deg)",
      //     transition : "1s"
      //   });
      // });
    });
  }).call(this, moment(0));
}, function(canCreateDiscussions, d, n) {
  n.r(d);
  n(1);
  n(2);
  const YM = (() => {
    const capitalizedEventName = ".stickySidebar";
    const mapOptions = {
      topSpacing : 0,
      bottomSpacing : 0,
      containerSelector : false,
      innerWrapperSelector : ".inner-wrapper-sticky",
      stickyClass : "is-affixed",
      resizeSensor : true,
      minWidth : false
    };
    class self {
      constructor(id, options = {}) {
        if (this.options = self.extend(mapOptions, options), this.sidebar = "string" == typeof id ? document.querySelector(id) : id, void 0 === this.sidebar) {
          throw new Error("There is no specific sidebar element.");
        }
        this.sidebarInner = false;
        this.container = this.sidebar.parentElement;
        this.affixedType = "STATIC";
        this.direction = "down";
        this.support = {
          transform : false,
          transform3d : false
        };
        this._initialized = false;
        this._reStyle = false;
        this._breakpoint = false;
        this._resizeListeners = [];
        this.dimensions = {
          translateY : 0,
          topSpacing : 0,
          lastTopSpacing : 0,
          bottomSpacing : 0,
          lastBottomSpacing : 0,
          sidebarHeight : 0,
          sidebarWidth : 0,
          containerTop : 0,
          containerHeight : 0,
          viewportHeight : 0,
          viewportTop : 0,
          lastViewportTop : 0
        };
        ["handleEvent"].forEach((cmd) => {
          this[cmd] = this[cmd].bind(this);
        });
        this.initialize();
      }
      initialize() {
        if (this._setSupportFeatures(), this.options.innerWrapperSelector && (this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector), null === this.sidebarInner && (this.sidebarInner = false)), !this.sidebarInner) {
          let node = document.createElement("div");
          node.setAttribute("class", "inner-wrapper-sticky");
          this.sidebar.appendChild(node);
          for (; this.sidebar.firstChild != node;) {
            node.appendChild(this.sidebar.firstChild);
          }
          this.sidebarInner = this.sidebar.querySelector(".inner-wrapper-sticky");
        }
        if (this.options.containerSelector) {
          let e = document.querySelectorAll(this.options.containerSelector);
          if (e = Array.prototype.slice.call(e), e.forEach((dom, canCreateDiscussions) => {
            if (dom.contains(this.sidebar)) {
              this.container = dom;
            }
          }), !e.length) {
            throw new Error("The container does not contains on the sidebar.");
          }
        }
        if ("function" != typeof this.options.topSpacing) {
          this.options.topSpacing = parseInt(this.options.topSpacing) || 0;
        }
        if ("function" != typeof this.options.bottomSpacing) {
          this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0;
        }
        this._widthBreakpoint();
        this.calcDimensions();
        this.stickyPosition();
        this.bindEvents();
        this._initialized = true;
      }
      bindEvents() {
        window.addEventListener("resize", this, {
          passive : true,
          capture : false
        });
        window.addEventListener("scroll", this, {
          passive : true,
          capture : false
        });
        this.sidebar.addEventListener("update" + capitalizedEventName, this);
        if (this.options.resizeSensor && "undefined" != typeof ResizeSensor) {
          new ResizeSensor(this.sidebarInner, this.handleEvent);
          new ResizeSensor(this.container, this.handleEvent);
        }
      }
      handleEvent(axEventObject) {
        this.updateSticky(axEventObject);
      }
      calcDimensions() {
        if (!this._breakpoint) {
          var dimensions = this.dimensions;
          dimensions.containerTop = self.offsetRelative(this.container).top;
          dimensions.containerHeight = this.container.clientHeight;
          dimensions.containerBottom = dimensions.containerTop + dimensions.containerHeight;
          dimensions.sidebarHeight = this.sidebarInner.offsetHeight;
          dimensions.sidebarWidth = this.sidebar.offsetWidth;
          dimensions.viewportHeight = window.innerHeight;
          this._calcDimensionsWithScroll();
        }
      }
      _calcDimensionsWithScroll() {
        var dimensions = this.dimensions;
        dimensions.sidebarLeft = self.offsetRelative(this.sidebar).left;
        dimensions.viewportTop = document.documentElement.scrollTop || document.body.scrollTop;
        dimensions.viewportBottom = dimensions.viewportTop + dimensions.viewportHeight;
        dimensions.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
        dimensions.topSpacing = this.options.topSpacing;
        dimensions.bottomSpacing = this.options.bottomSpacing;
        if ("function" == typeof dimensions.topSpacing) {
          dimensions.topSpacing = parseInt(dimensions.topSpacing(this.sidebar)) || 0;
        }
        if ("function" == typeof dimensions.bottomSpacing) {
          dimensions.bottomSpacing = parseInt(dimensions.bottomSpacing(this.sidebar)) || 0;
        }
        if ("VIEWPORT-TOP" === this.affixedType) {
          if (dimensions.topSpacing < dimensions.lastTopSpacing) {
            dimensions.translateY += dimensions.lastTopSpacing - dimensions.topSpacing;
            this._reStyle = true;
          }
        } else {
          if ("VIEWPORT-BOTTOM" === this.affixedType && dimensions.bottomSpacing < dimensions.lastBottomSpacing) {
            dimensions.translateY += dimensions.lastBottomSpacing - dimensions.bottomSpacing;
            this._reStyle = true;
          }
        }
        dimensions.lastTopSpacing = dimensions.topSpacing;
        dimensions.lastBottomSpacing = dimensions.bottomSpacing;
      }
      isSidebarFitsViewport() {
        return this.dimensions.sidebarHeight < this.dimensions.viewportHeight;
      }
      observeScrollDir() {
        var dimensions = this.dimensions;
        if (dimensions.lastViewportTop !== dimensions.viewportTop) {
          var text_size = "down" === this.direction ? Math.min : Math.max;
          if (dimensions.viewportTop === text_size(dimensions.viewportTop, dimensions.lastViewportTop)) {
            this.direction = "down" === this.direction ? "up" : "down";
          }
        }
      }
      getAffixType() {
        var dimensions = this.dimensions;
        var affixType = false;
        this._calcDimensionsWithScroll();
        var sidebarBottom = dimensions.sidebarHeight + dimensions.containerTop;
        var colliderTop = dimensions.viewportTop + dimensions.topSpacing;
        var colliderBottom = dimensions.viewportBottom - dimensions.bottomSpacing;
        return "up" === this.direction ? colliderTop <= dimensions.containerTop ? (dimensions.translateY = 0, affixType = "STATIC") : colliderTop <= dimensions.translateY + dimensions.containerTop ? (dimensions.translateY = colliderTop - dimensions.containerTop, affixType = "VIEWPORT-TOP") : !this.isSidebarFitsViewport() && dimensions.containerTop <= colliderTop && (affixType = "VIEWPORT-UNBOTTOM") : this.isSidebarFitsViewport() ? dimensions.sidebarHeight + colliderTop >= dimensions.containerBottom ? 
        (dimensions.translateY = dimensions.containerBottom - sidebarBottom, affixType = "CONTAINER-BOTTOM") : colliderTop >= dimensions.containerTop && (dimensions.translateY = colliderTop - dimensions.containerTop, affixType = "VIEWPORT-TOP") : dimensions.containerBottom <= colliderBottom ? (dimensions.translateY = dimensions.containerBottom - sidebarBottom, affixType = "CONTAINER-BOTTOM") : sidebarBottom + dimensions.translateY <= colliderBottom ? (dimensions.translateY = colliderBottom - sidebarBottom, 
        affixType = "VIEWPORT-BOTTOM") : dimensions.containerTop + dimensions.translateY <= colliderTop && (affixType = "VIEWPORT-UNBOTTOM"), dimensions.translateY = Math.max(0, dimensions.translateY), dimensions.translateY = Math.min(dimensions.containerHeight, dimensions.translateY), dimensions.lastViewportTop = dimensions.viewportTop, affixType;
      }
      _getStyle(affixType) {
        if (void 0 !== affixType) {
          var style = {
            inner : {},
            outer : {}
          };
          var dimensions = this.dimensions;
          switch(affixType) {
            case "VIEWPORT-TOP":
              style.inner = {
                position : "fixed",
                top : dimensions.topSpacing,
                left : dimensions.sidebarLeft - dimensions.viewportLeft,
                width : dimensions.sidebarWidth
              };
              break;
            case "VIEWPORT-BOTTOM":
              style.inner = {
                position : "fixed",
                top : "auto",
                left : dimensions.sidebarLeft,
                bottom : dimensions.bottomSpacing,
                width : dimensions.sidebarWidth
              };
              break;
            case "CONTAINER-BOTTOM":
            case "VIEWPORT-UNBOTTOM":
              let affixType = this._getTranslate(0, dimensions.translateY + "px");
              style.inner = affixType ? {
                transform : affixType
              } : {
                position : "absolute",
                top : dimensions.translateY,
                width : dimensions.sidebarWidth
              };
          }
          switch(affixType) {
            case "VIEWPORT-TOP":
            case "VIEWPORT-BOTTOM":
            case "VIEWPORT-UNBOTTOM":
            case "CONTAINER-BOTTOM":
              style.outer = {
                height : dimensions.sidebarHeight,
                position : "relative"
              };
          }
          return style.outer = self.extend({
            height : "",
            position : ""
          }, style.outer), style.inner = self.extend({
            position : "relative",
            top : "",
            left : "",
            bottom : "",
            width : "",
            transform : this._getTranslate()
          }, style.inner), style;
        }
      }
      stickyPosition(force) {
        if (!this._breakpoint) {
          force = this._reStyle || force || false;
          this.options.topSpacing;
          this.options.bottomSpacing;
          var affixType = this.getAffixType();
          var style = this._getStyle(affixType);
          if ((this.affixedType != affixType || force) && affixType) {
            let unexpandedFeatureDirectoryPaths = "affix." + affixType.toLowerCase().replace("viewport-", "") + capitalizedEventName;
            self.eventTrigger(this.sidebar, unexpandedFeatureDirectoryPaths);
            if ("STATIC" === affixType) {
              self.removeClass(this.sidebar, this.options.stickyClass);
            } else {
              self.addClass(this.sidebar, this.options.stickyClass);
            }
            for (let name in style.outer) {
              style.outer[name];
              this.sidebar.style[name] = style.outer[name];
            }
            for (let prop in style.inner) {
              let unit = "number" == typeof style.inner[prop] ? "px" : "";
              this.sidebarInner.style[prop] = style.inner[prop] + unit;
            }
            let expectedPackagePath = "affixed." + affixType.toLowerCase().replace("viewport-", "") + capitalizedEventName;
            self.eventTrigger(this.sidebar, expectedPackagePath);
          } else {
            if (this._initialized) {
              this.sidebarInner.style.left = style.inner.left;
            }
          }
          this.affixedType = affixType;
        }
      }
      _widthBreakpoint() {
        if (window.innerWidth <= this.options.minWidth) {
          this._breakpoint = true;
          this.affixedType = "STATIC";
          this.sidebar.removeAttribute("style");
          self.removeClass(this.sidebar, this.options.stickyClass);
          this.sidebarInner.removeAttribute("style");
        } else {
          this._breakpoint = false;
        }
      }
      updateSticky(kermit = {}) {
        if (!this._running) {
          this._running = true;
          ((mode) => {
            requestAnimationFrame(() => {
              switch(mode) {
                case "scroll":
                  this._calcDimensionsWithScroll();
                  this.observeScrollDir();
                  this.stickyPosition();
                  break;
                case "resize":
                default:
                  this._widthBreakpoint();
                  this.calcDimensions();
                  this.stickyPosition(true);
              }
              this._running = false;
            });
          })(kermit.type);
        }
      }
      _setSupportFeatures() {
        var cssProps = this.support;
        cssProps.transform = self.supportTransform();
        cssProps.transform3d = self.supportTransform(true);
      }
      _getTranslate(e = 0, t = 0, n = 0) {
        return this.support.transform3d ? "translate3d(" + e + ", " + t + ", " + n + ")" : !!this.support.translate && "translate(" + e + ", " + t + ")";
      }
      destroy() {
        window.removeEventListener("resize", this, {
          caption : false
        });
        window.removeEventListener("scroll", this, {
          caption : false
        });
        this.sidebar.classList.remove(this.options.stickyClass);
        this.sidebar.style.minHeight = "";
        this.sidebar.removeEventListener("update" + capitalizedEventName, this);
        var self = {
          inner : {},
          outer : {}
        };
        self.inner = {
          position : "",
          top : "",
          left : "",
          bottom : "",
          width : "",
          transform : ""
        };
        self.outer = {
          height : "",
          position : ""
        };
        for (let name in self.outer) {
          this.sidebar.style[name] = self.outer[name];
        }
        for (let index in self.inner) {
          this.sidebarInner.style[index] = self.inner[index];
        }
        if (this.options.resizeSensor && "undefined" != typeof ResizeSensor) {
          ResizeSensor.detach(this.sidebarInner, this.handleEvent);
          ResizeSensor.detach(this.container, this.handleEvent);
        }
      }
      static supportTransform(transform3d) {
        var props = false;
        var property = transform3d ? "perspective" : "transform";
        var ucProp = property.charAt(0).toUpperCase() + property.slice(1);
        var traitsChosen = document.createElement("support").style;
        return (property + " " + ["Webkit", "Moz", "O", "ms"].join(ucProp + " ") + ucProp).split(" ").forEach(function(trait, n) {
          if (void 0 !== traitsChosen[trait]) {
            return props = trait, false;
          }
        }), props;
      }
      static eventTrigger(element, type, data) {
        try {
          var event = new CustomEvent(type, {
            detail : data
          });
        } catch (e) {
          (event = document.createEvent("CustomEvent")).initCustomEvent(type, true, true, data);
        }
        element.dispatchEvent(event);
      }
      static extend(arr, values) {
        var result = {};
        for (let i in arr) {
          if (void 0 !== values[i]) {
            result[i] = values[i];
          } else {
            result[i] = arr[i];
          }
        }
        return result;
      }
      static offsetRelative(node) {
        var ret = {
          left : 0,
          top : 0
        };
        do {
          let n = node.offsetTop;
          let gap = node.offsetLeft;
          if (!isNaN(n)) {
            ret.top += n;
          }
          if (!isNaN(gap)) {
            ret.left += gap;
          }
          node = "BODY" === node.tagName ? node.parentElement : node.offsetParent;
        } while (node);
        return ret;
      }
      static addClass(e, id) {
        if (!self.hasClass(e, id)) {
          if (e.classList) {
            e.classList.add(id);
          } else {
            e.className += " " + id;
          }
        }
      }
      static removeClass(name, el) {
        if (self.hasClass(name, el)) {
          if (name.classList) {
            name.classList.remove(el);
          } else {
            name.className = name.className.replace(new RegExp("(^|\\b)" + el.split(" ").join("|") + "(\\b|$)", "gi"), " ");
          }
        }
      }
      static hasClass(element, className) {
        return element.classList ? element.classList.contains(className) : (new RegExp("(^| )" + className + "( |$)", "gi")).test(element.className);
      }
    }
    return self;
  })();
  window.StickySidebar = YM;
  n(5);
  n(6);
  n(8);
}, function(canCreateDiscussions, isSlidingUp) {
}]);
