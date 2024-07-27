import {
  React,
  __commonJS,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    init_react();
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment2 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment2;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    init_react();
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/shallowequal/index.js
var require_shallowequal = __commonJS({
  "node_modules/shallowequal/index.js"(exports, module) {
    init_react();
    module.exports = function shallowEqual(objA, objB, compare, compareContext) {
      var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
      if (ret !== void 0) {
        return !!ret;
      }
      if (objA === objB) {
        return true;
      }
      if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
        return false;
      }
      var keysA = Object.keys(objA);
      var keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) {
        return false;
      }
      var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
      for (var idx = 0; idx < keysA.length; idx++) {
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
          return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];
        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (ret === false || ret === void 0 && valueA !== valueB) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
    "use strict";
    init_react();
    var reactIs = require_react_is();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i5 = 0; i5 < keys.length; ++i5) {
          var key = keys[i5];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e8) {
            }
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics;
  }
});

// app/stitches.config.ts
init_react();

// node_modules/@stitches/react/dist/index.mjs
init_react();
var import_react = __toESM(require_react(), 1);
var e = "colors";
var t = "sizes";
var r = "space";
var n = { gap: r, gridGap: r, columnGap: r, gridColumnGap: r, rowGap: r, gridRowGap: r, inset: r, insetBlock: r, insetBlockEnd: r, insetBlockStart: r, insetInline: r, insetInlineEnd: r, insetInlineStart: r, margin: r, marginTop: r, marginRight: r, marginBottom: r, marginLeft: r, marginBlock: r, marginBlockEnd: r, marginBlockStart: r, marginInline: r, marginInlineEnd: r, marginInlineStart: r, padding: r, paddingTop: r, paddingRight: r, paddingBottom: r, paddingLeft: r, paddingBlock: r, paddingBlockEnd: r, paddingBlockStart: r, paddingInline: r, paddingInlineEnd: r, paddingInlineStart: r, top: r, right: r, bottom: r, left: r, scrollMargin: r, scrollMarginTop: r, scrollMarginRight: r, scrollMarginBottom: r, scrollMarginLeft: r, scrollMarginX: r, scrollMarginY: r, scrollMarginBlock: r, scrollMarginBlockEnd: r, scrollMarginBlockStart: r, scrollMarginInline: r, scrollMarginInlineEnd: r, scrollMarginInlineStart: r, scrollPadding: r, scrollPaddingTop: r, scrollPaddingRight: r, scrollPaddingBottom: r, scrollPaddingLeft: r, scrollPaddingX: r, scrollPaddingY: r, scrollPaddingBlock: r, scrollPaddingBlockEnd: r, scrollPaddingBlockStart: r, scrollPaddingInline: r, scrollPaddingInlineEnd: r, scrollPaddingInlineStart: r, fontSize: "fontSizes", background: e, backgroundColor: e, backgroundImage: e, borderImage: e, border: e, borderBlock: e, borderBlockEnd: e, borderBlockStart: e, borderBottom: e, borderBottomColor: e, borderColor: e, borderInline: e, borderInlineEnd: e, borderInlineStart: e, borderLeft: e, borderLeftColor: e, borderRight: e, borderRightColor: e, borderTop: e, borderTopColor: e, caretColor: e, color: e, columnRuleColor: e, fill: e, outline: e, outlineColor: e, stroke: e, textDecorationColor: e, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: t, minBlockSize: t, maxBlockSize: t, inlineSize: t, minInlineSize: t, maxInlineSize: t, width: t, minWidth: t, maxWidth: t, height: t, minHeight: t, maxHeight: t, flexBasis: t, gridTemplateColumns: t, gridTemplateRows: t, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" };
var i = (e8, t6) => typeof t6 == "function" ? { "()": Function.prototype.toString.call(t6) } : t6;
var o = () => {
  const e8 = /* @__PURE__ */ Object.create(null);
  return (t6, r4, ...n5) => {
    const o6 = ((e9) => JSON.stringify(e9, i))(t6);
    return o6 in e8 ? e8[o6] : e8[o6] = r4(t6, ...n5);
  };
};
var l = Symbol.for("sxs.internal");
var s = (e8, t6) => Object.defineProperties(e8, Object.getOwnPropertyDescriptors(t6));
var a = (e8) => {
  for (const t6 in e8)
    return true;
  return false;
};
var { hasOwnProperty: c } = Object.prototype;
var d = (e8) => e8.includes("-") ? e8 : e8.replace(/[A-Z]/g, (e9) => "-" + e9.toLowerCase());
var g = /\s+(?![^()]*\))/;
var p = (e8) => (t6) => e8(...typeof t6 == "string" ? String(t6).split(g) : [t6]);
var u = { appearance: (e8) => ({ WebkitAppearance: e8, appearance: e8 }), backfaceVisibility: (e8) => ({ WebkitBackfaceVisibility: e8, backfaceVisibility: e8 }), backdropFilter: (e8) => ({ WebkitBackdropFilter: e8, backdropFilter: e8 }), backgroundClip: (e8) => ({ WebkitBackgroundClip: e8, backgroundClip: e8 }), boxDecorationBreak: (e8) => ({ WebkitBoxDecorationBreak: e8, boxDecorationBreak: e8 }), clipPath: (e8) => ({ WebkitClipPath: e8, clipPath: e8 }), content: (e8) => ({ content: e8.includes('"') || e8.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e8) ? e8 : `"${e8}"` }), hyphens: (e8) => ({ WebkitHyphens: e8, hyphens: e8 }), maskImage: (e8) => ({ WebkitMaskImage: e8, maskImage: e8 }), maskSize: (e8) => ({ WebkitMaskSize: e8, maskSize: e8 }), tabSize: (e8) => ({ MozTabSize: e8, tabSize: e8 }), textSizeAdjust: (e8) => ({ WebkitTextSizeAdjust: e8, textSizeAdjust: e8 }), userSelect: (e8) => ({ WebkitUserSelect: e8, userSelect: e8 }), marginBlock: p((e8, t6) => ({ marginBlockStart: e8, marginBlockEnd: t6 || e8 })), marginInline: p((e8, t6) => ({ marginInlineStart: e8, marginInlineEnd: t6 || e8 })), maxSize: p((e8, t6) => ({ maxBlockSize: e8, maxInlineSize: t6 || e8 })), minSize: p((e8, t6) => ({ minBlockSize: e8, minInlineSize: t6 || e8 })), paddingBlock: p((e8, t6) => ({ paddingBlockStart: e8, paddingBlockEnd: t6 || e8 })), paddingInline: p((e8, t6) => ({ paddingInlineStart: e8, paddingInlineEnd: t6 || e8 })) };
var h = /([\d.]+)([^]*)/;
var f = (e8, t6) => e8.length ? e8.reduce((e9, r4) => (e9.push(...t6.map((e10) => e10.includes("&") ? e10.replace(/&/g, /[ +>|~]/.test(r4) && /&.*&/.test(e10) ? `:is(${r4})` : r4) : r4 + " " + e10)), e9), []) : t6;
var m = (e8, t6) => e8 in b && typeof t6 == "string" ? t6.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t7, r4, n5, i5) => r4 + (n5 === "stretch" ? `-moz-available${i5};${d(e8)}:${r4}-webkit-fill-available` : `-moz-fit-content${i5};${d(e8)}:${r4}fit-content`) + i5) : String(t6);
var b = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 };
var S = (e8) => e8 ? e8 + "-" : "";
var k = (e8, t6, r4) => e8.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (e9, n5, i5, o6, l6) => o6 == "$" == !!i5 ? e9 : (n5 || o6 == "--" ? "calc(" : "") + "var(--" + (o6 === "$" ? S(t6) + (l6.includes("$") ? "" : S(r4)) + l6.replace(/\$/g, "-") : l6) + ")" + (n5 || o6 == "--" ? "*" + (n5 || "") + (i5 || "1") + ")" : ""));
var y = /\s*,\s*(?![^()]*\))/;
var B = Object.prototype.toString;
var $ = (e8, t6, r4, n5, i5) => {
  let o6, l6, s4;
  const a4 = (e9, t7, r5) => {
    let c3, g3;
    const p3 = (e10) => {
      for (c3 in e10) {
        const R3 = c3.charCodeAt(0) === 64, z3 = R3 && Array.isArray(e10[c3]) ? e10[c3] : [e10[c3]];
        for (g3 of z3) {
          const e11 = /[A-Z]/.test($3 = c3) ? $3 : $3.replace(/-[^]/g, (e12) => e12[1].toUpperCase()), z4 = typeof g3 == "object" && g3 && g3.toString === B && (!n5.utils[e11] || !t7.length);
          if (e11 in n5.utils && !z4) {
            const t8 = n5.utils[e11];
            if (t8 !== l6) {
              l6 = t8, p3(t8(g3)), l6 = null;
              continue;
            }
          } else if (e11 in u) {
            const t8 = u[e11];
            if (t8 !== s4) {
              s4 = t8, p3(t8(g3)), s4 = null;
              continue;
            }
          }
          if (R3 && (b4 = c3.slice(1) in n5.media ? "@media " + n5.media[c3.slice(1)] : c3, c3 = b4.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (e12, t8, r6, n6, i6, o7) => {
            const l7 = h.test(t8), s5 = 0.0625 * (l7 ? -1 : 1), [a5, c4] = l7 ? [n6, t8] : [t8, n6];
            return "(" + (r6[0] === "=" ? "" : r6[0] === ">" === l7 ? "max-" : "min-") + a5 + ":" + (r6[0] !== "=" && r6.length === 1 ? c4.replace(h, (e13, t9, n7) => Number(t9) + s5 * (r6 === ">" ? 1 : -1) + n7) : c4) + (i6 ? ") and (" + (i6[0] === ">" ? "min-" : "max-") + a5 + ":" + (i6.length === 1 ? o7.replace(h, (e13, t9, r7) => Number(t9) + s5 * (i6 === ">" ? -1 : 1) + r7) : o7) : "") + ")";
          })), z4) {
            const e12 = R3 ? r5.concat(c3) : [...r5], n6 = R3 ? [...t7] : f(t7, c3.split(y));
            o6 !== void 0 && i5(x(...o6)), o6 = void 0, a4(g3, n6, e12);
          } else
            o6 === void 0 && (o6 = [[], t7, r5]), c3 = R3 || c3.charCodeAt(0) !== 36 ? c3 : `--${S(n5.prefix)}${c3.slice(1).replace(/\$/g, "-")}`, g3 = z4 ? g3 : typeof g3 == "number" ? g3 && e11 in I ? String(g3) + "px" : String(g3) : k(m(e11, g3 == null ? "" : g3), n5.prefix, n5.themeMap[e11]), o6[0].push(`${R3 ? `${c3} ` : `${d(c3)}:`}${g3}`);
        }
      }
      var b4, $3;
    };
    p3(e9), o6 !== void 0 && i5(x(...o6)), o6 = void 0;
  };
  a4(e8, t6, r4);
};
var x = (e8, t6, r4) => `${r4.map((e9) => `${e9}{`).join("")}${t6.length ? `${t6.join(",")}{` : ""}${e8.join(";")}${t6.length ? "}" : ""}${Array(r4.length ? r4.length + 1 : 0).join("}")}`;
var I = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 };
var R = (e8) => String.fromCharCode(e8 + (e8 > 25 ? 39 : 97));
var z = (e8) => ((e9) => {
  let t6, r4 = "";
  for (t6 = Math.abs(e9); t6 > 52; t6 = t6 / 52 | 0)
    r4 = R(t6 % 52) + r4;
  return R(t6 % 52) + r4;
})(((e9, t6) => {
  let r4 = t6.length;
  for (; r4; )
    e9 = 33 * e9 ^ t6.charCodeAt(--r4);
  return e9;
})(5381, JSON.stringify(e8)) >>> 0);
var W = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"];
var j = (e8) => {
  if (e8.href && !e8.href.startsWith(location.origin))
    return false;
  try {
    return !!e8.cssRules;
  } catch (e9) {
    return false;
  }
};
var E = (e8) => {
  let t6;
  const r4 = () => {
    const { cssRules: e9 } = t6.sheet;
    return [].map.call(e9, (r5, n6) => {
      const { cssText: i5 } = r5;
      let o6 = "";
      if (i5.startsWith("--sxs"))
        return "";
      if (e9[n6 - 1] && (o6 = e9[n6 - 1].cssText).startsWith("--sxs")) {
        if (!r5.cssRules.length)
          return "";
        for (const e10 in t6.rules)
          if (t6.rules[e10].group === r5)
            return `--sxs{--sxs:${[...t6.rules[e10].cache].join(" ")}}${i5}`;
        return r5.cssRules.length ? `${o6}${i5}` : "";
      }
      return i5;
    }).join("");
  }, n5 = () => {
    if (t6) {
      const { rules: e9, sheet: r5 } = t6;
      if (!r5.deleteRule) {
        for (; Object(Object(r5.cssRules)[0]).type === 3; )
          r5.cssRules.splice(0, 1);
        r5.cssRules = [];
      }
      for (const t7 in e9)
        delete e9[t7];
    }
    const i5 = Object(e8).styleSheets || [];
    for (const e9 of i5)
      if (j(e9)) {
        for (let i6 = 0, o7 = e9.cssRules; o7[i6]; ++i6) {
          const l7 = Object(o7[i6]);
          if (l7.type !== 1)
            continue;
          const s4 = Object(o7[i6 + 1]);
          if (s4.type !== 4)
            continue;
          ++i6;
          const { cssText: a4 } = l7;
          if (!a4.startsWith("--sxs"))
            continue;
          const c3 = a4.slice(14, -3).trim().split(/\s+/), d3 = W[c3[0]];
          d3 && (t6 || (t6 = { sheet: e9, reset: n5, rules: {}, toString: r4 }), t6.rules[d3] = { group: s4, index: i6, cache: new Set(c3) });
        }
        if (t6)
          break;
      }
    if (!t6) {
      const i6 = (e9, t7) => ({ type: t7, cssRules: [], insertRule(e10, t8) {
        this.cssRules.splice(t8, 0, i6(e10, { import: 3, undefined: 1 }[(e10.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return e9 === "@media{}" ? `@media{${[].map.call(this.cssRules, (e10) => e10.cssText).join("")}}` : e9;
      } });
      t6 = { sheet: e8 ? (e8.head || e8).appendChild(document.createElement("style")).sheet : i6("", "text/css"), rules: {}, reset: n5, toString: r4 };
    }
    const { sheet: o6, rules: l6 } = t6;
    for (let e9 = W.length - 1; e9 >= 0; --e9) {
      const t7 = W[e9];
      if (!l6[t7]) {
        const r5 = W[e9 + 1], n6 = l6[r5] ? l6[r5].index : o6.cssRules.length;
        o6.insertRule("@media{}", n6), o6.insertRule(`--sxs{--sxs:${e9}}`, n6), l6[t7] = { group: o6.cssRules[n6 + 1], index: n6, cache: /* @__PURE__ */ new Set([e9]) };
      }
      v(l6[t7]);
    }
  };
  return n5(), t6;
};
var v = (e8) => {
  const t6 = e8.group;
  let r4 = t6.cssRules.length;
  e8.apply = (e9) => {
    try {
      t6.insertRule(e9, r4), ++r4;
    } catch (e10) {
    }
  };
};
var T = Symbol();
var w = o();
var M = (e8, t6) => w(e8, () => (...r4) => {
  let n5 = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const t7 of r4)
    if (t7 != null)
      if (t7[l]) {
        n5.type == null && (n5.type = t7[l].type);
        for (const e9 of t7[l].composers)
          n5.composers.add(e9);
      } else
        t7.constructor !== Object || t7.$$typeof ? n5.type == null && (n5.type = t7) : n5.composers.add(C(t7, e8));
  return n5.type == null && (n5.type = "span"), n5.composers.size || n5.composers.add(["PJLV", {}, [], [], {}, []]), P(e8, n5, t6);
});
var C = ({ variants: e8, compoundVariants: t6, defaultVariants: r4, ...n5 }, i5) => {
  const o6 = `${S(i5.prefix)}c-${z(n5)}`, l6 = [], s4 = [], d3 = /* @__PURE__ */ Object.create(null), g3 = [];
  for (const e9 in r4)
    d3[e9] = String(r4[e9]);
  if (typeof e8 == "object" && e8)
    for (const t7 in e8) {
      p3 = d3, u4 = t7, c.call(p3, u4) || (d3[t7] = "undefined");
      const r5 = e8[t7];
      for (const e9 in r5) {
        const n6 = { [t7]: String(e9) };
        String(e9) === "undefined" && g3.push(t7);
        const i6 = r5[e9], o7 = [n6, i6, !a(i6)];
        l6.push(o7);
      }
    }
  var p3, u4;
  if (typeof t6 == "object" && t6)
    for (const e9 of t6) {
      let { css: t7, ...r5 } = e9;
      t7 = typeof t7 == "object" && t7 || {};
      for (const e10 in r5)
        r5[e10] = String(r5[e10]);
      const n6 = [r5, t7, !a(t7)];
      s4.push(n6);
    }
  return [o6, n5, l6, s4, d3, g3];
};
var P = (e8, t6, r4) => {
  const [n5, i5, o6, a4] = L(t6.composers), c3 = typeof t6.type == "function" || t6.type.$$typeof ? ((e9) => {
    function t7() {
      for (let r5 = 0; r5 < t7[T].length; r5++) {
        const [n6, i6] = t7[T][r5];
        e9.rules[n6].apply(i6);
      }
      return t7[T] = [], null;
    }
    return t7[T] = [], t7.rules = {}, W.forEach((e10) => t7.rules[e10] = { apply: (r5) => t7[T].push([e10, r5]) }), t7;
  })(r4) : null, d3 = (c3 || r4).rules, g3 = `.${n5}${i5.length > 1 ? `:where(.${i5.slice(1).join(".")})` : ""}`, p3 = (l6) => {
    l6 = typeof l6 == "object" && l6 || A;
    const { css: s4, ...p4 } = l6, u4 = {};
    for (const e9 in o6)
      if (delete p4[e9], e9 in l6) {
        let t7 = l6[e9];
        typeof t7 == "object" && t7 ? u4[e9] = { "@initial": o6[e9], ...t7 } : (t7 = String(t7), u4[e9] = t7 !== "undefined" || a4.has(e9) ? t7 : o6[e9]);
      } else
        u4[e9] = o6[e9];
    const h4 = /* @__PURE__ */ new Set([...i5]);
    for (const [n6, i6, o7, l7] of t6.composers) {
      r4.rules.styled.cache.has(n6) || (r4.rules.styled.cache.add(n6), $(i6, [`.${n6}`], [], e8, (e9) => {
        d3.styled.apply(e9);
      }));
      const t7 = O(o7, u4, e8.media), s5 = O(l7, u4, e8.media, true);
      for (const i7 of t7)
        if (i7 !== void 0)
          for (const [t8, o8, l8] of i7) {
            const i8 = `${n6}-${z(o8)}-${t8}`;
            h4.add(i8);
            const s6 = (l8 ? r4.rules.resonevar : r4.rules.onevar).cache, a5 = l8 ? d3.resonevar : d3.onevar;
            s6.has(i8) || (s6.add(i8), $(o8, [`.${i8}`], [], e8, (e9) => {
              a5.apply(e9);
            }));
          }
      for (const t8 of s5)
        if (t8 !== void 0)
          for (const [i7, o8] of t8) {
            const t9 = `${n6}-${z(o8)}-${i7}`;
            h4.add(t9), r4.rules.allvar.cache.has(t9) || (r4.rules.allvar.cache.add(t9), $(o8, [`.${t9}`], [], e8, (e9) => {
              d3.allvar.apply(e9);
            }));
          }
    }
    if (typeof s4 == "object" && s4) {
      const t7 = `${n5}-i${z(s4)}-css`;
      h4.add(t7), r4.rules.inline.cache.has(t7) || (r4.rules.inline.cache.add(t7), $(s4, [`.${t7}`], [], e8, (e9) => {
        d3.inline.apply(e9);
      }));
    }
    for (const e9 of String(l6.className || "").trim().split(/\s+/))
      e9 && h4.add(e9);
    const f2 = p4.className = [...h4].join(" ");
    return { type: t6.type, className: f2, selector: g3, props: p4, toString: () => f2, deferredInjector: c3 };
  };
  return s(p3, { className: n5, selector: g3, [l]: t6, toString: () => (r4.rules.styled.cache.has(n5) || p3(), n5) });
};
var L = (e8) => {
  let t6 = "";
  const r4 = [], n5 = {}, i5 = [];
  for (const [o6, , , , l6, s4] of e8) {
    t6 === "" && (t6 = o6), r4.push(o6), i5.push(...s4);
    for (const e9 in l6) {
      const t7 = l6[e9];
      (n5[e9] === void 0 || t7 !== "undefined" || s4.includes(t7)) && (n5[e9] = t7);
    }
  }
  return [t6, r4, n5, new Set(i5)];
};
var O = (e8, t6, r4, n5) => {
  const i5 = [];
  e:
    for (let [o6, l6, s4] of e8) {
      if (s4)
        continue;
      let e9, a4 = 0, c3 = false;
      for (e9 in o6) {
        const n6 = o6[e9];
        let i6 = t6[e9];
        if (i6 !== n6) {
          if (typeof i6 != "object" || !i6)
            continue e;
          {
            let e10, t7, o7 = 0;
            for (const l7 in i6) {
              if (n6 === String(i6[l7])) {
                if (l7 !== "@initial") {
                  const e11 = l7.slice(1);
                  (t7 = t7 || []).push(e11 in r4 ? r4[e11] : l7.replace(/^@media ?/, "")), c3 = true;
                }
                a4 += o7, e10 = true;
              }
              ++o7;
            }
            if (t7 && t7.length && (l6 = { ["@media " + t7.join(", ")]: l6 }), !e10)
              continue e;
          }
        }
      }
      (i5[a4] = i5[a4] || []).push([n5 ? "cv" : `${e9}-${o6[e9]}`, l6, c3]);
    }
  return i5;
};
var A = {};
var N = o();
var D = (e8, t6) => N(e8, () => (...r4) => {
  const n5 = () => {
    for (let n6 of r4) {
      n6 = typeof n6 == "object" && n6 || {};
      let r5 = z(n6);
      if (!t6.rules.global.cache.has(r5)) {
        if (t6.rules.global.cache.add(r5), "@import" in n6) {
          let e9 = [].indexOf.call(t6.sheet.cssRules, t6.rules.themed.group) - 1;
          for (let r6 of [].concat(n6["@import"]))
            r6 = r6.includes('"') || r6.includes("'") ? r6 : `"${r6}"`, t6.sheet.insertRule(`@import ${r6};`, e9++);
          delete n6["@import"];
        }
        $(n6, [], [], e8, (e9) => {
          t6.rules.global.apply(e9);
        });
      }
    }
    return "";
  };
  return s(n5, { toString: n5 });
});
var H = o();
var V = (e8, t6) => H(e8, () => (r4) => {
  const n5 = `${S(e8.prefix)}k-${z(r4)}`, i5 = () => {
    if (!t6.rules.global.cache.has(n5)) {
      t6.rules.global.cache.add(n5);
      const i6 = [];
      $(r4, [], [], e8, (e9) => i6.push(e9));
      const o6 = `@keyframes ${n5}{${i6.join("")}}`;
      t6.rules.global.apply(o6);
    }
    return n5;
  };
  return s(i5, { get name() {
    return i5();
  }, toString: i5 });
});
var G = class {
  constructor(e8, t6, r4, n5) {
    this.token = e8 == null ? "" : String(e8), this.value = t6 == null ? "" : String(t6), this.scale = r4 == null ? "" : String(r4), this.prefix = n5 == null ? "" : String(n5);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + S(this.prefix) + S(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
};
var F = o();
var J = (e8, t6) => F(e8, () => (r4, n5) => {
  n5 = typeof r4 == "object" && r4 || Object(n5);
  const i5 = `.${r4 = (r4 = typeof r4 == "string" ? r4 : "") || `${S(e8.prefix)}t-${z(n5)}`}`, o6 = {}, l6 = [];
  for (const t7 in n5) {
    o6[t7] = {};
    for (const r5 in n5[t7]) {
      const i6 = `--${S(e8.prefix)}${t7}-${r5}`, s5 = k(String(n5[t7][r5]), e8.prefix, t7);
      o6[t7][r5] = new G(r5, s5, t7, e8.prefix), l6.push(`${i6}:${s5}`);
    }
  }
  const s4 = () => {
    if (l6.length && !t6.rules.themed.cache.has(r4)) {
      t6.rules.themed.cache.add(r4);
      const i6 = `${n5 === e8.theme ? ":root," : ""}.${r4}{${l6.join(";")}}`;
      t6.rules.themed.apply(i6);
    }
    return r4;
  };
  return { ...o6, get className() {
    return s4();
  }, selector: i5, toString: s4 };
});
var U = o();
var X;
var Y = o();
var q = (e8) => {
  const t6 = ((e9) => {
    let t7 = false;
    const r4 = U(e9, (e10) => {
      t7 = true;
      const r5 = "prefix" in (e10 = typeof e10 == "object" && e10 || {}) ? String(e10.prefix) : "", i5 = typeof e10.media == "object" && e10.media || {}, o6 = typeof e10.root == "object" ? e10.root || null : globalThis.document || null, l6 = typeof e10.theme == "object" && e10.theme || {}, s4 = { prefix: r5, media: i5, theme: l6, themeMap: typeof e10.themeMap == "object" && e10.themeMap || { ...n }, utils: typeof e10.utils == "object" && e10.utils || {} }, a4 = E(o6), c3 = { css: M(s4, a4), globalCss: D(s4, a4), keyframes: V(s4, a4), createTheme: J(s4, a4), reset() {
        a4.reset(), c3.theme.toString();
      }, theme: {}, sheet: a4, config: s4, prefix: r5, getCssText: a4.toString, toString: a4.toString };
      return String(c3.theme = c3.createTheme(l6)), c3;
    });
    return t7 || r4.reset(), r4;
  })(e8);
  return t6.styled = (({ config: e9, sheet: t7 }) => Y(e9, () => {
    const r4 = M(e9, t7);
    return (...e10) => {
      const t8 = r4(...e10), n5 = t8[l].type, i5 = import_react.default.forwardRef((e11, r5) => {
        const i6 = e11 && e11.as || n5, { props: o6, deferredInjector: l6 } = t8(e11);
        return delete o6.as, o6.ref = r5, l6 ? import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement(i6, o6), import_react.default.createElement(l6, null)) : import_react.default.createElement(i6, o6);
      });
      return i5.className = t8.className, i5.displayName = `Styled.${n5.displayName || n5.name || n5}`, i5.selector = t8.selector, i5.toString = () => t8.selector, i5[l] = t8[l], i5;
    };
  }))(t6), t6;
};
var K = () => X || (X = q());
var re = (...e8) => K().styled(...e8);

// app/common/ui-elements/library/index.ts
init_react();

// app/common/ui-elements/library/divider/divider.tsx
init_react();

// node_modules/@radix-ui/react-separator/dist/index.module.js
init_react();

// node_modules/@radix-ui/react-primitive/dist/index.module.js
init_react();

// node_modules/@radix-ui/react-slot/dist/index.module.js
init_react();

// node_modules/@radix-ui/react-compose-refs/dist/index.module.js
init_react();
var o2 = __toESM(require_react());
function composeRefs(...o6) {
  return (e8) => o6.forEach((o7) => function(o8, e9) {
    typeof o8 == "function" ? o8(e9) : o8 != null && (o8.current = e9);
  }(o7, e8));
}
function useComposedRefs(...e8) {
  return o2.useCallback(composeRefs(...e8), e8);
}

// node_modules/@radix-ui/react-slot/dist/index.module.js
var t2 = __toESM(require_react());

// node_modules/@babel/runtime/helpers/esm/extends.js
init_react();
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i5 = 1; i5 < arguments.length; i5++) {
      var source = arguments[i5];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/@radix-ui/react-slot/dist/index.module.js
var Slot = /* @__PURE__ */ t2.forwardRef((e8, o6) => {
  const { children: a4, ...s4 } = e8;
  return t2.Children.toArray(a4).some(l2) ? /* @__PURE__ */ t2.createElement(t2.Fragment, null, t2.Children.map(a4, (e9) => l2(e9) ? /* @__PURE__ */ t2.createElement(n2, _extends({}, s4, { ref: o6 }), e9.props.children) : e9)) : /* @__PURE__ */ t2.createElement(n2, _extends({}, s4, { ref: o6 }), a4);
});
Slot.displayName = "Slot";
var n2 = /* @__PURE__ */ t2.forwardRef((r4, n5) => {
  const { children: l6, ...a4 } = r4;
  return t2.isValidElement(l6) ? /* @__PURE__ */ t2.cloneElement(l6, { ...o3(a4, l6.props), ref: composeRefs(n5, l6.ref) }) : t2.Children.count(l6) > 1 ? t2.Children.only(null) : null;
});
n2.displayName = "SlotClone";
var Slottable = ({ children: e8 }) => /* @__PURE__ */ t2.createElement(t2.Fragment, null, e8);
function l2(e8) {
  return t2.isValidElement(e8) && e8.type === Slottable;
}
function o3(e8, t6) {
  const r4 = { ...t6 };
  for (const n5 in t6) {
    const l6 = e8[n5], o6 = t6[n5];
    /^on[A-Z]/.test(n5) ? r4[n5] = (...e9) => {
      o6 == null || o6(...e9), l6 == null || l6(...e9);
    } : n5 === "style" ? r4[n5] = { ...l6, ...o6 } : n5 === "className" && (r4[n5] = [l6, o6].filter(Boolean).join(" "));
  }
  return { ...e8, ...r4 };
}

// node_modules/@radix-ui/react-primitive/dist/index.module.js
var r2 = __toESM(require_react());
var Primitive = ["a", "button", "div", "h2", "h3", "img", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((o6, i5) => ({ ...o6, [i5]: /* @__PURE__ */ r2.forwardRef((o7, m3) => {
  const { asChild: a4, ...s4 } = o7, n5 = a4 ? Slot : i5;
  return r2.useEffect(() => {
    window[Symbol.for("radix-ui")] = true;
  }, []), /* @__PURE__ */ r2.createElement(n5, _extends({}, s4, { ref: m3 }));
}) }), {});

// node_modules/@radix-ui/react-separator/dist/index.module.js
var o4 = __toESM(require_react());
var e2 = "horizontal";
var n3 = ["horizontal", "vertical"];
var Separator = /* @__PURE__ */ o4.forwardRef((n5, a4) => {
  const { decorative: p3, orientation: l6 = e2, ...c3 } = n5, s4 = i2(l6) ? l6 : e2, u4 = p3 ? { role: "none" } : { "aria-orientation": s4 === "vertical" ? s4 : void 0, role: "separator" };
  return o4.createElement(Primitive.div, _extends({ "data-orientation": s4 }, u4, c3, { ref: a4 }));
});
function i2(r4) {
  return n3.includes(r4);
}
Separator.propTypes = { orientation(r4, o6, t6) {
  const n5 = r4[o6], a4 = String(n5);
  return n5 && !i2(n5) ? new Error(function(r5, o7) {
    return `Invalid prop \`orientation\` of value \`${r5}\` supplied to \`${o7}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${e2}\`.`;
  }(a4, t6)) : null;
} };
var Root = Separator;

// app/common/ui-elements/library/divider/divider.tsx
var StyledDivider = styled(Root, {
  variants: {
    orientation: {
      vertical: {
        "width": "2px",
        "height": "100%",
        "position": "relative",
        "&::before": {
          content: "",
          position: "absolute",
          top: 0,
          height: "2px",
          width: "2px",
          backgroundColor: "$orange"
        },
        "&::after": {
          content: "",
          position: "absolute",
          bottom: 0,
          height: "2px",
          width: "2px",
          backgroundColor: "$orange"
        }
      },
      horizontal: {
        "height": "2px",
        "width": "100%",
        "&::before": {
          content: "",
          position: "absolute",
          left: 0,
          height: "2px",
          width: "2px",
          backgroundColor: "$orange"
        },
        "&::after": {
          content: "",
          position: "absolute",
          right: 0,
          height: "2px",
          width: "2px",
          backgroundColor: "$orange"
        }
      }
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
});
var Divider = ({ orientation, className }) => {
  return /* @__PURE__ */ React.createElement(StyledDivider, {
    orientation,
    className
  });
};

// node_modules/@radix-ui/react-use-previous/dist/index.module.js
init_react();
var e3 = __toESM(require_react());
function usePrevious(r4) {
  const u4 = e3.useRef({ value: r4, previous: r4 });
  return e3.useMemo(() => (u4.current.value !== r4 && (u4.current.previous = u4.current.value, u4.current.value = r4), u4.current.previous), [r4]);
}

// node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js
init_react();

// node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js
init_react();
var e4 = __toESM(require_react());
function useCallbackRef(r4) {
  const t6 = e4.useRef(r4);
  return e4.useEffect(() => {
    t6.current = r4;
  }), e4.useMemo(() => (...e8) => {
    var r5;
    return (r5 = t6.current) === null || r5 === void 0 ? void 0 : r5.call(t6, ...e8);
  }, []);
}

// node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js
var t3 = __toESM(require_react());
function useControllableState({ prop: o6, defaultProp: r4, onChange: n5 = () => {
} }) {
  const [a4, u4] = function({ defaultProp: o7, onChange: r5 }) {
    const n6 = t3.useState(o7), [a5] = n6, u5 = t3.useRef(a5), c4 = useCallbackRef(r5);
    return t3.useEffect(() => {
      u5.current !== a5 && (c4(a5), u5.current = a5);
    }, [a5, u5, c4]), n6;
  }({ defaultProp: r4, onChange: n5 }), c3 = o6 !== void 0, f2 = c3 ? o6 : a4, l6 = useCallbackRef(n5);
  return [f2, t3.useCallback((e8) => {
    if (c3) {
      const t6 = e8, r5 = typeof e8 == "function" ? t6(o6) : e8;
      r5 !== o6 && l6(r5);
    } else
      u4(e8);
  }, [c3, o6, u4, l6])];
}

// node_modules/@radix-ui/react-label/dist/index.module.js
init_react();

// node_modules/@radix-ui/react-context/dist/index.module.js
init_react();
var e5 = __toESM(require_react());
function createContext2(t6, n5) {
  const o6 = /* @__PURE__ */ e5.createContext(n5);
  function r4(t7) {
    const { children: n6, ...r5 } = t7, c3 = e5.useMemo(() => r5, Object.values(r5));
    return e5.createElement(o6.Provider, { value: c3 }, n6);
  }
  return r4.displayName = t6 + "Provider", [r4, function(r5) {
    const c3 = e5.useContext(o6);
    if (c3)
      return c3;
    if (n5 !== void 0)
      return n5;
    throw new Error(`\`${r5}\` must be used within \`${t6}\``);
  }];
}
function createContextScope(n5, o6 = []) {
  let r4 = [];
  const c3 = () => {
    const t6 = r4.map((t7) => /* @__PURE__ */ e5.createContext(t7));
    return function(o7) {
      const r5 = (o7 == null ? void 0 : o7[n5]) || t6;
      return e5.useMemo(() => ({ [`__scope${n5}`]: { ...o7, [n5]: r5 } }), [o7, r5]);
    };
  };
  return c3.scopeName = n5, [function(t6, o7) {
    const c4 = /* @__PURE__ */ e5.createContext(o7), u4 = r4.length;
    function s4(t7) {
      const { scope: o8, children: r5, ...s5 } = t7, i5 = (o8 == null ? void 0 : o8[n5][u4]) || c4, a4 = e5.useMemo(() => s5, Object.values(s5));
      return e5.createElement(i5.Provider, { value: a4 }, r5);
    }
    return r4 = [...r4, o7], s4.displayName = t6 + "Provider", [s4, function(r5, s5) {
      const i5 = (s5 == null ? void 0 : s5[n5][u4]) || c4, a4 = e5.useContext(i5);
      if (a4)
        return a4;
      if (o7 !== void 0)
        return o7;
      throw new Error(`\`${r5}\` must be used within \`${t6}\``);
    }];
  }, t4(c3, ...o6)];
}
function t4(...t6) {
  const n5 = t6[0];
  if (t6.length === 1)
    return n5;
  const o6 = () => {
    const o7 = t6.map((e8) => ({ useScope: e8(), scopeName: e8.scopeName }));
    return function(t7) {
      const r4 = o7.reduce((e8, { useScope: n6, scopeName: o8 }) => ({ ...e8, ...n6(t7)[`__scope${o8}`] }), {});
      return e5.useMemo(() => ({ [`__scope${n5.scopeName}`]: r4 }), [r4]);
    };
  };
  return o6.scopeName = n5.scopeName, o6;
}

// node_modules/@radix-ui/react-label/dist/index.module.js
var l3 = __toESM(require_react());
var [i3, a2] = createContext2("Label", { id: void 0, controlRef: { current: null } });
var useLabelContext = (e8) => {
  const t6 = a2("LabelConsumer"), { controlRef: r4 } = t6;
  return l3.useEffect(() => {
    e8 && (r4.current = e8);
  }, [e8, r4]), t6.id;
};

// node_modules/@radix-ui/primitive/dist/index.module.js
init_react();
function composeEventHandlers(e8, n5, { checkForDefaultPrevented: t6 = true } = {}) {
  return function(r4) {
    if (e8 == null || e8(r4), t6 === false || !r4.defaultPrevented)
      return n5 == null ? void 0 : n5(r4);
  };
}

// app/common/ui-elements/library/switch/index.ts
init_react();

// app/common/ui-elements/library/switch/Switch.tsx
init_react();

// node_modules/@radix-ui/react-switch/dist/index.module.js
init_react();

// node_modules/@radix-ui/react-use-size/dist/index.module.js
init_react();
var e6 = __toESM(require_react());
function useSize(r4) {
  const [i5, t6] = e6.useState(void 0);
  return e6.useEffect(() => {
    if (r4) {
      const e8 = new ResizeObserver((e9) => {
        if (!Array.isArray(e9))
          return;
        if (!e9.length)
          return;
        const i6 = e9[0];
        let o6, n5;
        if ("borderBoxSize" in i6) {
          const e10 = i6.borderBoxSize, r5 = Array.isArray(e10) ? e10[0] : e10;
          o6 = r5.inlineSize, n5 = r5.blockSize;
        } else {
          const e10 = r4.getBoundingClientRect();
          o6 = e10.width, n5 = e10.height;
        }
        t6({ width: o6, height: n5 });
      });
      return e8.observe(r4, { box: "border-box" }), () => e8.unobserve(r4);
    }
    t6(void 0);
  }, [r4]), i5;
}

// node_modules/@radix-ui/react-switch/dist/index.module.js
var s2 = __toESM(require_react());
var [l4, u2] = createContextScope("Switch");
var [p2, m2] = l4("Switch");
var Switch = /* @__PURE__ */ s2.forwardRef((r4, o6) => {
  const { __scopeSwitch: c3, "aria-labelledby": l6, name: u4, checked: m3, defaultChecked: f2, required: x3, disabled: k3, value: w3 = "on", onCheckedChange: v3, ...S3 } = r4, [y3, E3] = s2.useState(null), C2 = useComposedRefs(o6, (e8) => E3(e8)), g3 = useLabelContext(y3), R3 = l6 || g3, T3 = s2.useRef(false), P3 = !y3 || Boolean(y3.closest("form")), [_2 = false, q3] = useControllableState({ prop: m3, defaultProp: f2, onChange: v3 });
  return s2.createElement(p2, { scope: c3, checked: _2, disabled: k3 }, /* @__PURE__ */ s2.createElement(Primitive.button, _extends({ type: "button", role: "switch", "aria-checked": _2, "aria-labelledby": R3, "aria-required": x3, "data-state": h2(_2), "data-disabled": k3 ? "" : void 0, disabled: k3, value: w3 }, S3, { ref: C2, onClick: composeEventHandlers(r4.onClick, (e8) => {
    q3((e9) => !e9), P3 && (T3.current = e8.isPropagationStopped(), T3.current || e8.stopPropagation());
  }) })), P3 && /* @__PURE__ */ s2.createElement(b2, { control: y3, bubbles: !T3.current, name: u4, value: w3, checked: _2, required: x3, disabled: k3, style: { transform: "translateX(-100%)" } }));
});
var SwitchThumb = /* @__PURE__ */ s2.forwardRef((e8, r4) => {
  const { __scopeSwitch: o6, ...a4 } = e8, c3 = m2("SwitchThumb", o6);
  return s2.createElement(Primitive.span, _extends({ "data-state": h2(c3.checked), "data-disabled": c3.disabled ? "" : void 0 }, a4, { ref: r4 }));
});
var b2 = (e8) => {
  const { control: t6, checked: a4, bubbles: c3 = true, ...i5 } = e8, n5 = s2.useRef(null), l6 = usePrevious(a4), u4 = useSize(t6);
  return s2.useEffect(() => {
    const e9 = n5.current, t7 = window.HTMLInputElement.prototype, r4 = Object.getOwnPropertyDescriptor(t7, "checked").set;
    if (l6 !== a4 && r4) {
      const t8 = new Event("click", { bubbles: c3 });
      r4.call(e9, a4), e9.dispatchEvent(t8);
    }
  }, [l6, a4, c3]), /* @__PURE__ */ s2.createElement("input", _extends({ type: "checkbox", "aria-hidden": true, defaultChecked: a4 }, i5, { tabIndex: -1, ref: n5, style: { ...e8.style, ...u4, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 } }));
};
function h2(e8) {
  return e8 ? "checked" : "unchecked";
}
var Root2 = Switch;
var Thumb = SwitchThumb;

// app/common/ui-elements/library/switch/Switch.tsx
var import_react3 = __toESM(require_react());

// node_modules/styled-components/dist/styled-components.browser.esm.js
init_react();
var import_react_is = __toESM(require_react_is());
var import_react2 = __toESM(require_react());
var import_shallowequal = __toESM(require_shallowequal());

// node_modules/@emotion/stylis/dist/stylis.browser.esm.js
init_react();
function stylis_min(W3) {
  function M3(d3, c3, e8, h4, a4) {
    for (var m3 = 0, b4 = 0, v3 = 0, n5 = 0, q3, g3, x3 = 0, K3 = 0, k3, u4 = k3 = q3 = 0, l6 = 0, r4 = 0, I3 = 0, t6 = 0, B4 = e8.length, J3 = B4 - 1, y3, f2 = "", p3 = "", F4 = "", G4 = "", C2; l6 < B4; ) {
      g3 = e8.charCodeAt(l6);
      l6 === J3 && b4 + n5 + v3 + m3 !== 0 && (b4 !== 0 && (g3 = b4 === 47 ? 10 : 47), n5 = v3 = m3 = 0, B4++, J3++);
      if (b4 + n5 + v3 + m3 === 0) {
        if (l6 === J3 && (0 < r4 && (f2 = f2.replace(N3, "")), 0 < f2.trim().length)) {
          switch (g3) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              f2 += e8.charAt(l6);
          }
          g3 = 59;
        }
        switch (g3) {
          case 123:
            f2 = f2.trim();
            q3 = f2.charCodeAt(0);
            k3 = 1;
            for (t6 = ++l6; l6 < B4; ) {
              switch (g3 = e8.charCodeAt(l6)) {
                case 123:
                  k3++;
                  break;
                case 125:
                  k3--;
                  break;
                case 47:
                  switch (g3 = e8.charCodeAt(l6 + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u4 = l6 + 1; u4 < J3; ++u4) {
                          switch (e8.charCodeAt(u4)) {
                            case 47:
                              if (g3 === 42 && e8.charCodeAt(u4 - 1) === 42 && l6 + 2 !== u4) {
                                l6 = u4 + 1;
                                break a;
                              }
                              break;
                            case 10:
                              if (g3 === 47) {
                                l6 = u4 + 1;
                                break a;
                              }
                          }
                        }
                        l6 = u4;
                      }
                  }
                  break;
                case 91:
                  g3++;
                case 40:
                  g3++;
                case 34:
                case 39:
                  for (; l6++ < J3 && e8.charCodeAt(l6) !== g3; ) {
                  }
              }
              if (k3 === 0)
                break;
              l6++;
            }
            k3 = e8.substring(t6, l6);
            q3 === 0 && (q3 = (f2 = f2.replace(ca, "").trim()).charCodeAt(0));
            switch (q3) {
              case 64:
                0 < r4 && (f2 = f2.replace(N3, ""));
                g3 = f2.charCodeAt(1);
                switch (g3) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r4 = c3;
                    break;
                  default:
                    r4 = O2;
                }
                k3 = M3(c3, r4, k3, g3, a4 + 1);
                t6 = k3.length;
                0 < A3 && (r4 = X3(O2, f2, I3), C2 = H3(3, k3, r4, c3, D3, z3, t6, g3, a4, h4), f2 = r4.join(""), C2 !== void 0 && (t6 = (k3 = C2.trim()).length) === 0 && (g3 = 0, k3 = ""));
                if (0 < t6)
                  switch (g3) {
                    case 115:
                      f2 = f2.replace(da, ea);
                    case 100:
                    case 109:
                    case 45:
                      k3 = f2 + "{" + k3 + "}";
                      break;
                    case 107:
                      f2 = f2.replace(fa, "$1 $2");
                      k3 = f2 + "{" + k3 + "}";
                      k3 = w3 === 1 || w3 === 2 && L3("@" + k3, 3) ? "@-webkit-" + k3 + "@" + k3 : "@" + k3;
                      break;
                    default:
                      k3 = f2 + k3, h4 === 112 && (k3 = (p3 += k3, ""));
                  }
                else
                  k3 = "";
                break;
              default:
                k3 = M3(c3, X3(c3, f2, I3), k3, h4, a4 + 1);
            }
            F4 += k3;
            k3 = I3 = r4 = u4 = q3 = 0;
            f2 = "";
            g3 = e8.charCodeAt(++l6);
            break;
          case 125:
          case 59:
            f2 = (0 < r4 ? f2.replace(N3, "") : f2).trim();
            if (1 < (t6 = f2.length))
              switch (u4 === 0 && (q3 = f2.charCodeAt(0), q3 === 45 || 96 < q3 && 123 > q3) && (t6 = (f2 = f2.replace(" ", ":")).length), 0 < A3 && (C2 = H3(1, f2, c3, d3, D3, z3, p3.length, h4, a4, h4)) !== void 0 && (t6 = (f2 = C2.trim()).length) === 0 && (f2 = "\0\0"), q3 = f2.charCodeAt(0), g3 = f2.charCodeAt(1), q3) {
                case 0:
                  break;
                case 64:
                  if (g3 === 105 || g3 === 99) {
                    G4 += f2 + e8.charAt(l6);
                    break;
                  }
                default:
                  f2.charCodeAt(t6 - 1) !== 58 && (p3 += P3(f2, q3, g3, f2.charCodeAt(2)));
              }
            I3 = r4 = u4 = q3 = 0;
            f2 = "";
            g3 = e8.charCodeAt(++l6);
        }
      }
      switch (g3) {
        case 13:
        case 10:
          b4 === 47 ? b4 = 0 : 1 + q3 === 0 && h4 !== 107 && 0 < f2.length && (r4 = 1, f2 += "\0");
          0 < A3 * Y3 && H3(0, f2, c3, d3, D3, z3, p3.length, h4, a4, h4);
          z3 = 1;
          D3++;
          break;
        case 59:
        case 125:
          if (b4 + n5 + v3 + m3 === 0) {
            z3++;
            break;
          }
        default:
          z3++;
          y3 = e8.charAt(l6);
          switch (g3) {
            case 9:
            case 32:
              if (n5 + m3 + b4 === 0)
                switch (x3) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    y3 = "";
                    break;
                  default:
                    g3 !== 32 && (y3 = " ");
                }
              break;
            case 0:
              y3 = "\\0";
              break;
            case 12:
              y3 = "\\f";
              break;
            case 11:
              y3 = "\\v";
              break;
            case 38:
              n5 + b4 + m3 === 0 && (r4 = I3 = 1, y3 = "\f" + y3);
              break;
            case 108:
              if (n5 + b4 + m3 + E3 === 0 && 0 < u4)
                switch (l6 - u4) {
                  case 2:
                    x3 === 112 && e8.charCodeAt(l6 - 3) === 58 && (E3 = x3);
                  case 8:
                    K3 === 111 && (E3 = K3);
                }
              break;
            case 58:
              n5 + b4 + m3 === 0 && (u4 = l6);
              break;
            case 44:
              b4 + v3 + n5 + m3 === 0 && (r4 = 1, y3 += "\r");
              break;
            case 34:
            case 39:
              b4 === 0 && (n5 = n5 === g3 ? 0 : n5 === 0 ? g3 : n5);
              break;
            case 91:
              n5 + b4 + v3 === 0 && m3++;
              break;
            case 93:
              n5 + b4 + v3 === 0 && m3--;
              break;
            case 41:
              n5 + b4 + m3 === 0 && v3--;
              break;
            case 40:
              if (n5 + b4 + m3 === 0) {
                if (q3 === 0)
                  switch (2 * x3 + 3 * K3) {
                    case 533:
                      break;
                    default:
                      q3 = 1;
                  }
                v3++;
              }
              break;
            case 64:
              b4 + v3 + n5 + m3 + u4 + k3 === 0 && (k3 = 1);
              break;
            case 42:
            case 47:
              if (!(0 < n5 + m3 + v3))
                switch (b4) {
                  case 0:
                    switch (2 * g3 + 3 * e8.charCodeAt(l6 + 1)) {
                      case 235:
                        b4 = 47;
                        break;
                      case 220:
                        t6 = l6, b4 = 42;
                    }
                    break;
                  case 42:
                    g3 === 47 && x3 === 42 && t6 + 2 !== l6 && (e8.charCodeAt(t6 + 2) === 33 && (p3 += e8.substring(t6, l6 + 1)), y3 = "", b4 = 0);
                }
          }
          b4 === 0 && (f2 += y3);
      }
      K3 = x3;
      x3 = g3;
      l6++;
    }
    t6 = p3.length;
    if (0 < t6) {
      r4 = c3;
      if (0 < A3 && (C2 = H3(2, p3, r4, d3, D3, z3, t6, h4, a4, h4), C2 !== void 0 && (p3 = C2).length === 0))
        return G4 + p3 + F4;
      p3 = r4.join(",") + "{" + p3 + "}";
      if (w3 * E3 !== 0) {
        w3 !== 2 || L3(p3, 2) || (E3 = 0);
        switch (E3) {
          case 111:
            p3 = p3.replace(ha, ":-moz-$1") + p3;
            break;
          case 112:
            p3 = p3.replace(Q2, "::-webkit-input-$1") + p3.replace(Q2, "::-moz-$1") + p3.replace(Q2, ":-ms-input-$1") + p3;
        }
        E3 = 0;
      }
    }
    return G4 + p3 + F4;
  }
  function X3(d3, c3, e8) {
    var h4 = c3.trim().split(ia);
    c3 = h4;
    var a4 = h4.length, m3 = d3.length;
    switch (m3) {
      case 0:
      case 1:
        var b4 = 0;
        for (d3 = m3 === 0 ? "" : d3[0] + " "; b4 < a4; ++b4) {
          c3[b4] = Z3(d3, c3[b4], e8).trim();
        }
        break;
      default:
        var v3 = b4 = 0;
        for (c3 = []; b4 < a4; ++b4) {
          for (var n5 = 0; n5 < m3; ++n5) {
            c3[v3++] = Z3(d3[n5] + " ", h4[b4], e8).trim();
          }
        }
    }
    return c3;
  }
  function Z3(d3, c3, e8) {
    var h4 = c3.charCodeAt(0);
    33 > h4 && (h4 = (c3 = c3.trim()).charCodeAt(0));
    switch (h4) {
      case 38:
        return c3.replace(F3, "$1" + d3.trim());
      case 58:
        return d3.trim() + c3.replace(F3, "$1" + d3.trim());
      default:
        if (0 < 1 * e8 && 0 < c3.indexOf("\f"))
          return c3.replace(F3, (d3.charCodeAt(0) === 58 ? "" : "$1") + d3.trim());
    }
    return d3 + c3;
  }
  function P3(d3, c3, e8, h4) {
    var a4 = d3 + ";", m3 = 2 * c3 + 3 * e8 + 4 * h4;
    if (m3 === 944) {
      d3 = a4.indexOf(":", 9) + 1;
      var b4 = a4.substring(d3, a4.length - 1).trim();
      b4 = a4.substring(0, d3).trim() + b4 + ";";
      return w3 === 1 || w3 === 2 && L3(b4, 1) ? "-webkit-" + b4 + b4 : b4;
    }
    if (w3 === 0 || w3 === 2 && !L3(a4, 1))
      return a4;
    switch (m3) {
      case 1015:
        return a4.charCodeAt(10) === 97 ? "-webkit-" + a4 + a4 : a4;
      case 951:
        return a4.charCodeAt(3) === 116 ? "-webkit-" + a4 + a4 : a4;
      case 963:
        return a4.charCodeAt(5) === 110 ? "-webkit-" + a4 + a4 : a4;
      case 1009:
        if (a4.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + a4 + a4;
      case 978:
        return "-webkit-" + a4 + "-moz-" + a4 + a4;
      case 1019:
      case 983:
        return "-webkit-" + a4 + "-moz-" + a4 + "-ms-" + a4 + a4;
      case 883:
        if (a4.charCodeAt(8) === 45)
          return "-webkit-" + a4 + a4;
        if (0 < a4.indexOf("image-set(", 11))
          return a4.replace(ja, "$1-webkit-$2") + a4;
        break;
      case 932:
        if (a4.charCodeAt(4) === 45)
          switch (a4.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + a4.replace("-grow", "") + "-webkit-" + a4 + "-ms-" + a4.replace("grow", "positive") + a4;
            case 115:
              return "-webkit-" + a4 + "-ms-" + a4.replace("shrink", "negative") + a4;
            case 98:
              return "-webkit-" + a4 + "-ms-" + a4.replace("basis", "preferred-size") + a4;
          }
        return "-webkit-" + a4 + "-ms-" + a4 + a4;
      case 964:
        return "-webkit-" + a4 + "-ms-flex-" + a4 + a4;
      case 1023:
        if (a4.charCodeAt(8) !== 99)
          break;
        b4 = a4.substring(a4.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
        return "-webkit-box-pack" + b4 + "-webkit-" + a4 + "-ms-flex-pack" + b4 + a4;
      case 1005:
        return ka.test(a4) ? a4.replace(aa, ":-webkit-") + a4.replace(aa, ":-moz-") + a4 : a4;
      case 1e3:
        b4 = a4.substring(13).trim();
        c3 = b4.indexOf("-") + 1;
        switch (b4.charCodeAt(0) + b4.charCodeAt(c3)) {
          case 226:
            b4 = a4.replace(G3, "tb");
            break;
          case 232:
            b4 = a4.replace(G3, "tb-rl");
            break;
          case 220:
            b4 = a4.replace(G3, "lr");
            break;
          default:
            return a4;
        }
        return "-webkit-" + a4 + "-ms-" + b4 + a4;
      case 1017:
        if (a4.indexOf("sticky", 9) === -1)
          break;
      case 975:
        c3 = (a4 = d3).length - 10;
        b4 = (a4.charCodeAt(c3) === 33 ? a4.substring(0, c3) : a4).substring(d3.indexOf(":", 7) + 1).trim();
        switch (m3 = b4.charCodeAt(0) + (b4.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b4.charCodeAt(8))
              break;
          case 115:
            a4 = a4.replace(b4, "-webkit-" + b4) + ";" + a4;
            break;
          case 207:
          case 102:
            a4 = a4.replace(b4, "-webkit-" + (102 < m3 ? "inline-" : "") + "box") + ";" + a4.replace(b4, "-webkit-" + b4) + ";" + a4.replace(b4, "-ms-" + b4 + "box") + ";" + a4;
        }
        return a4 + ";";
      case 938:
        if (a4.charCodeAt(5) === 45)
          switch (a4.charCodeAt(6)) {
            case 105:
              return b4 = a4.replace("-items", ""), "-webkit-" + a4 + "-webkit-box-" + b4 + "-ms-flex-" + b4 + a4;
            case 115:
              return "-webkit-" + a4 + "-ms-flex-item-" + a4.replace(ba, "") + a4;
            default:
              return "-webkit-" + a4 + "-ms-flex-line-pack" + a4.replace("align-content", "").replace(ba, "") + a4;
          }
        break;
      case 973:
      case 989:
        if (a4.charCodeAt(3) !== 45 || a4.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (la.test(d3) === true)
          return (b4 = d3.substring(d3.indexOf(":") + 1)).charCodeAt(0) === 115 ? P3(d3.replace("stretch", "fill-available"), c3, e8, h4).replace(":fill-available", ":stretch") : a4.replace(b4, "-webkit-" + b4) + a4.replace(b4, "-moz-" + b4.replace("fill-", "")) + a4;
        break;
      case 962:
        if (a4 = "-webkit-" + a4 + (a4.charCodeAt(5) === 102 ? "-ms-" + a4 : "") + a4, e8 + h4 === 211 && a4.charCodeAt(13) === 105 && 0 < a4.indexOf("transform", 10))
          return a4.substring(0, a4.indexOf(";", 27) + 1).replace(ma, "$1-webkit-$2") + a4;
    }
    return a4;
  }
  function L3(d3, c3) {
    var e8 = d3.indexOf(c3 === 1 ? ":" : "{"), h4 = d3.substring(0, c3 !== 3 ? e8 : 10);
    e8 = d3.substring(e8 + 1, d3.length - 1);
    return R3(c3 !== 2 ? h4 : h4.replace(na, "$1"), e8, c3);
  }
  function ea(d3, c3) {
    var e8 = P3(c3, c3.charCodeAt(0), c3.charCodeAt(1), c3.charCodeAt(2));
    return e8 !== c3 + ";" ? e8.replace(oa, " or ($1)").substring(4) : "(" + c3 + ")";
  }
  function H3(d3, c3, e8, h4, a4, m3, b4, v3, n5, q3) {
    for (var g3 = 0, x3 = c3, w4; g3 < A3; ++g3) {
      switch (w4 = S3[g3].call(B3, d3, x3, e8, h4, a4, m3, b4, v3, n5, q3)) {
        case void 0:
        case false:
        case true:
        case null:
          break;
        default:
          x3 = w4;
      }
    }
    if (x3 !== c3)
      return x3;
  }
  function T3(d3) {
    switch (d3) {
      case void 0:
      case null:
        A3 = S3.length = 0;
        break;
      default:
        if (typeof d3 === "function")
          S3[A3++] = d3;
        else if (typeof d3 === "object")
          for (var c3 = 0, e8 = d3.length; c3 < e8; ++c3) {
            T3(d3[c3]);
          }
        else
          Y3 = !!d3 | 0;
    }
    return T3;
  }
  function U3(d3) {
    d3 = d3.prefix;
    d3 !== void 0 && (R3 = null, d3 ? typeof d3 !== "function" ? w3 = 1 : (w3 = 2, R3 = d3) : w3 = 0);
    return U3;
  }
  function B3(d3, c3) {
    var e8 = d3;
    33 > e8.charCodeAt(0) && (e8 = e8.trim());
    V3 = e8;
    e8 = [V3];
    if (0 < A3) {
      var h4 = H3(-1, c3, e8, e8, D3, z3, 0, 0, 0, 0);
      h4 !== void 0 && typeof h4 === "string" && (c3 = h4);
    }
    var a4 = M3(O2, e8, c3, 0, 0);
    0 < A3 && (h4 = H3(-2, a4, e8, e8, D3, z3, a4.length, 0, 0, 0), h4 !== void 0 && (a4 = h4));
    V3 = "";
    E3 = 0;
    z3 = D3 = 1;
    return a4;
  }
  var ca = /^\0+/g, N3 = /[\0\r\f]/g, aa = /: */g, ka = /zoo|gra/, ma = /([,: ])(transform)/g, ia = /,\r+?/g, F3 = /([\t\r\n ])*\f?&/g, fa = /@(k\w+)\s*(\S*)\s*/, Q2 = /::(place)/g, ha = /:(read-only)/g, G3 = /[svh]\w+-[tblr]{2}/, da = /\(\s*(.*)\s*\)/g, oa = /([\s\S]*?);/g, ba = /-self|flex-/g, na = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la = /stretch|:\s*\w+\-(?:conte|avail)/, ja = /([^-])(image-set\()/, z3 = 1, D3 = 1, E3 = 0, w3 = 1, O2 = [], S3 = [], A3 = 0, R3 = null, Y3 = 0, V3 = "";
  B3.use = T3;
  B3.set = U3;
  W3 !== void 0 && U3(W3);
  return B3;
}
var stylis_browser_esm_default = stylis_min;

// node_modules/@emotion/unitless/dist/unitless.browser.esm.js
init_react();
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var unitless_browser_esm_default = unitlessKeys;

// node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js
init_react();

// node_modules/@emotion/memoize/dist/memoize.browser.esm.js
init_react();
function memoize(fn) {
  var cache = {};
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var memoize_browser_esm_default = memoize;

// node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var index = memoize_browser_esm_default(function(prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
var is_prop_valid_browser_esm_default = index;

// node_modules/styled-components/dist/styled-components.browser.esm.js
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
function v2() {
  return (v2 = Object.assign || function(e8) {
    for (var t6 = 1; t6 < arguments.length; t6++) {
      var n5 = arguments[t6];
      for (var r4 in n5)
        Object.prototype.hasOwnProperty.call(n5, r4) && (e8[r4] = n5[r4]);
    }
    return e8;
  }).apply(this, arguments);
}
var g2 = function(e8, t6) {
  for (var n5 = [e8[0]], r4 = 0, o6 = t6.length; r4 < o6; r4 += 1)
    n5.push(t6[r4], e8[r4 + 1]);
  return n5;
};
var S2 = function(t6) {
  return t6 !== null && typeof t6 == "object" && (t6.toString ? t6.toString() : Object.prototype.toString.call(t6)) === "[object Object]" && !(0, import_react_is.typeOf)(t6);
};
var w2 = Object.freeze([]);
var E2 = Object.freeze({});
function b3(e8) {
  return typeof e8 == "function";
}
function _(e8) {
  return typeof e8 == "string" && e8 || e8.displayName || e8.name || "Component";
}
function N2(e8) {
  return e8 && typeof e8.styledComponentId == "string";
}
var A2 = typeof process != "undefined" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled";
var I2 = typeof window != "undefined" && "HTMLElement" in window;
var P2 = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : true);
var R2 = true ? { 1: "Cannot create styled-component for component: %s.\n\n", 2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n", 3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n", 4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n", 5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n", 6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n", 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: 'ThemeProvider: Please make your "theme" prop an object.\n\n', 9: "Missing document `<head>`\n\n", 10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n", 11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n", 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n", 14: 'ThemeProvider: "theme" prop is required.\n\n', 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n", 17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n" } : {};
function D2() {
  for (var e8 = arguments.length <= 0 ? void 0 : arguments[0], t6 = [], n5 = 1, r4 = arguments.length; n5 < r4; n5 += 1)
    t6.push(n5 < 0 || arguments.length <= n5 ? void 0 : arguments[n5]);
  return t6.forEach(function(t7) {
    e8 = e8.replace(/%[a-z]/, t7);
  }), e8;
}
function j2(e8) {
  for (var t6 = arguments.length, n5 = new Array(t6 > 1 ? t6 - 1 : 0), r4 = 1; r4 < t6; r4++)
    n5[r4 - 1] = arguments[r4];
  throw false ? new Error("An error occurred. See https://git.io/JUIaE#" + e8 + " for more information." + (n5.length > 0 ? " Args: " + n5.join(", ") : "")) : new Error(D2.apply(void 0, [R2[e8]].concat(n5)).trim());
}
var T2 = function() {
  function e8(e9) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e9;
  }
  var t6 = e8.prototype;
  return t6.indexOfGroup = function(e9) {
    for (var t7 = 0, n5 = 0; n5 < e9; n5++)
      t7 += this.groupSizes[n5];
    return t7;
  }, t6.insertRules = function(e9, t7) {
    if (e9 >= this.groupSizes.length) {
      for (var n5 = this.groupSizes, r4 = n5.length, o6 = r4; e9 >= o6; )
        (o6 <<= 1) < 0 && j2(16, "" + e9);
      this.groupSizes = new Uint32Array(o6), this.groupSizes.set(n5), this.length = o6;
      for (var s4 = r4; s4 < o6; s4++)
        this.groupSizes[s4] = 0;
    }
    for (var i5 = this.indexOfGroup(e9 + 1), a4 = 0, c3 = t7.length; a4 < c3; a4++)
      this.tag.insertRule(i5, t7[a4]) && (this.groupSizes[e9]++, i5++);
  }, t6.clearGroup = function(e9) {
    if (e9 < this.length) {
      var t7 = this.groupSizes[e9], n5 = this.indexOfGroup(e9), r4 = n5 + t7;
      this.groupSizes[e9] = 0;
      for (var o6 = n5; o6 < r4; o6++)
        this.tag.deleteRule(n5);
    }
  }, t6.getGroup = function(e9) {
    var t7 = "";
    if (e9 >= this.length || this.groupSizes[e9] === 0)
      return t7;
    for (var n5 = this.groupSizes[e9], r4 = this.indexOfGroup(e9), o6 = r4 + n5, s4 = r4; s4 < o6; s4++)
      t7 += this.tag.getRule(s4) + "/*!sc*/\n";
    return t7;
  }, e8;
}();
var k2 = /* @__PURE__ */ new Map();
var x2 = /* @__PURE__ */ new Map();
var V2 = 1;
var B2 = function(e8) {
  if (k2.has(e8))
    return k2.get(e8);
  for (; x2.has(V2); )
    V2++;
  var t6 = V2++;
  return ((0 | t6) < 0 || t6 > 1 << 30) && j2(16, "" + t6), k2.set(e8, t6), x2.set(t6, e8), t6;
};
var M2 = function(e8) {
  return x2.get(e8);
};
var z2 = function(e8, t6) {
  k2.set(e8, t6), x2.set(t6, e8);
};
var L2 = "style[" + A2 + '][data-styled-version="5.2.1"]';
var G2 = new RegExp("^" + A2 + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)');
var F2 = function(e8, t6, n5) {
  for (var r4, o6 = n5.split(","), s4 = 0, i5 = o6.length; s4 < i5; s4++)
    (r4 = o6[s4]) && e8.registerName(t6, r4);
};
var Y2 = function(e8, t6) {
  for (var n5 = t6.innerHTML.split("/*!sc*/\n"), r4 = [], o6 = 0, s4 = n5.length; o6 < s4; o6++) {
    var i5 = n5[o6].trim();
    if (i5) {
      var a4 = i5.match(G2);
      if (a4) {
        var c3 = 0 | parseInt(a4[1], 10), u4 = a4[2];
        c3 !== 0 && (z2(u4, c3), F2(e8, u4, a4[3]), e8.getTag().insertRules(c3, r4)), r4.length = 0;
      } else
        r4.push(i5);
    }
  }
};
var q2 = function() {
  return typeof __webpack_nonce__ != "undefined" ? __webpack_nonce__ : null;
};
var H2 = function(e8) {
  var t6 = document.head, n5 = e8 || t6, r4 = document.createElement("style"), o6 = function(e9) {
    for (var t7 = e9.childNodes, n6 = t7.length; n6 >= 0; n6--) {
      var r5 = t7[n6];
      if (r5 && r5.nodeType === 1 && r5.hasAttribute(A2))
        return r5;
    }
  }(n5), s4 = o6 !== void 0 ? o6.nextSibling : null;
  r4.setAttribute(A2, "active"), r4.setAttribute("data-styled-version", "5.2.1");
  var i5 = q2();
  return i5 && r4.setAttribute("nonce", i5), n5.insertBefore(r4, s4), r4;
};
var $2 = function() {
  function e8(e9) {
    var t7 = this.element = H2(e9);
    t7.appendChild(document.createTextNode("")), this.sheet = function(e10) {
      if (e10.sheet)
        return e10.sheet;
      for (var t8 = document.styleSheets, n5 = 0, r4 = t8.length; n5 < r4; n5++) {
        var o6 = t8[n5];
        if (o6.ownerNode === e10)
          return o6;
      }
      j2(17);
    }(t7), this.length = 0;
  }
  var t6 = e8.prototype;
  return t6.insertRule = function(e9, t7) {
    try {
      return this.sheet.insertRule(t7, e9), this.length++, true;
    } catch (e10) {
      return false;
    }
  }, t6.deleteRule = function(e9) {
    this.sheet.deleteRule(e9), this.length--;
  }, t6.getRule = function(e9) {
    var t7 = this.sheet.cssRules[e9];
    return t7 !== void 0 && typeof t7.cssText == "string" ? t7.cssText : "";
  }, e8;
}();
var W2 = function() {
  function e8(e9) {
    var t7 = this.element = H2(e9);
    this.nodes = t7.childNodes, this.length = 0;
  }
  var t6 = e8.prototype;
  return t6.insertRule = function(e9, t7) {
    if (e9 <= this.length && e9 >= 0) {
      var n5 = document.createTextNode(t7), r4 = this.nodes[e9];
      return this.element.insertBefore(n5, r4 || null), this.length++, true;
    }
    return false;
  }, t6.deleteRule = function(e9) {
    this.element.removeChild(this.nodes[e9]), this.length--;
  }, t6.getRule = function(e9) {
    return e9 < this.length ? this.nodes[e9].textContent : "";
  }, e8;
}();
var U2 = function() {
  function e8(e9) {
    this.rules = [], this.length = 0;
  }
  var t6 = e8.prototype;
  return t6.insertRule = function(e9, t7) {
    return e9 <= this.length && (this.rules.splice(e9, 0, t7), this.length++, true);
  }, t6.deleteRule = function(e9) {
    this.rules.splice(e9, 1), this.length--;
  }, t6.getRule = function(e9) {
    return e9 < this.length ? this.rules[e9] : "";
  }, e8;
}();
var J2 = I2;
var X2 = { isServer: !I2, useCSSOMInjection: !P2 };
var Z2 = function() {
  function e8(e9, t7, n5) {
    e9 === void 0 && (e9 = E2), t7 === void 0 && (t7 = {}), this.options = v2({}, X2, {}, e9), this.gs = t7, this.names = new Map(n5), !this.options.isServer && I2 && J2 && (J2 = false, function(e10) {
      for (var t8 = document.querySelectorAll(L2), n6 = 0, r4 = t8.length; n6 < r4; n6++) {
        var o6 = t8[n6];
        o6 && o6.getAttribute(A2) !== "active" && (Y2(e10, o6), o6.parentNode && o6.parentNode.removeChild(o6));
      }
    }(this));
  }
  e8.registerId = function(e9) {
    return B2(e9);
  };
  var t6 = e8.prototype;
  return t6.reconstructWithOptions = function(t7, n5) {
    return n5 === void 0 && (n5 = true), new e8(v2({}, this.options, {}, t7), this.gs, n5 && this.names || void 0);
  }, t6.allocateGSInstance = function(e9) {
    return this.gs[e9] = (this.gs[e9] || 0) + 1;
  }, t6.getTag = function() {
    return this.tag || (this.tag = (n5 = (t7 = this.options).isServer, r4 = t7.useCSSOMInjection, o6 = t7.target, e9 = n5 ? new U2(o6) : r4 ? new $2(o6) : new W2(o6), new T2(e9)));
    var e9, t7, n5, r4, o6;
  }, t6.hasNameForId = function(e9, t7) {
    return this.names.has(e9) && this.names.get(e9).has(t7);
  }, t6.registerName = function(e9, t7) {
    if (B2(e9), this.names.has(e9))
      this.names.get(e9).add(t7);
    else {
      var n5 = /* @__PURE__ */ new Set();
      n5.add(t7), this.names.set(e9, n5);
    }
  }, t6.insertRules = function(e9, t7, n5) {
    this.registerName(e9, t7), this.getTag().insertRules(B2(e9), n5);
  }, t6.clearNames = function(e9) {
    this.names.has(e9) && this.names.get(e9).clear();
  }, t6.clearRules = function(e9) {
    this.getTag().clearGroup(B2(e9)), this.clearNames(e9);
  }, t6.clearTag = function() {
    this.tag = void 0;
  }, t6.toString = function() {
    return function(e9) {
      for (var t7 = e9.getTag(), n5 = t7.length, r4 = "", o6 = 0; o6 < n5; o6++) {
        var s4 = M2(o6);
        if (s4 !== void 0) {
          var i5 = e9.names.get(s4), a4 = t7.getGroup(o6);
          if (i5 !== void 0 && a4.length !== 0) {
            var c3 = A2 + ".g" + o6 + '[id="' + s4 + '"]', u4 = "";
            i5 !== void 0 && i5.forEach(function(e10) {
              e10.length > 0 && (u4 += e10 + ",");
            }), r4 += "" + a4 + c3 + '{content:"' + u4 + '"}/*!sc*/\n';
          }
        }
      }
      return r4;
    }(this);
  }, e8;
}();
var K2 = /(a)(d)/gi;
var Q = function(e8) {
  return String.fromCharCode(e8 + (e8 > 25 ? 39 : 97));
};
function ee(e8) {
  var t6, n5 = "";
  for (t6 = Math.abs(e8); t6 > 52; t6 = t6 / 52 | 0)
    n5 = Q(t6 % 52) + n5;
  return (Q(t6 % 52) + n5).replace(K2, "$1-$2");
}
var te = function(e8, t6) {
  for (var n5 = t6.length; n5; )
    e8 = 33 * e8 ^ t6.charCodeAt(--n5);
  return e8;
};
var ne = function(e8) {
  return te(5381, e8);
};
function re2(e8) {
  for (var t6 = 0; t6 < e8.length; t6 += 1) {
    var n5 = e8[t6];
    if (b3(n5) && !N2(n5))
      return false;
  }
  return true;
}
var oe = ne("5.2.1");
var se = function() {
  function e8(e9, t6, n5) {
    this.rules = e9, this.staticRulesId = "", this.isStatic = false, this.componentId = t6, this.baseHash = te(oe, t6), this.baseStyle = n5, Z2.registerId(t6);
  }
  return e8.prototype.generateAndInjectStyles = function(e9, t6, n5) {
    var r4 = this.componentId, o6 = [];
    if (this.baseStyle && o6.push(this.baseStyle.generateAndInjectStyles(e9, t6, n5)), this.isStatic && !n5.hash)
      if (this.staticRulesId && t6.hasNameForId(r4, this.staticRulesId))
        o6.push(this.staticRulesId);
      else {
        var s4 = Ne(this.rules, e9, t6, n5).join(""), i5 = ee(te(this.baseHash, s4.length) >>> 0);
        if (!t6.hasNameForId(r4, i5)) {
          var a4 = n5(s4, "." + i5, void 0, r4);
          t6.insertRules(r4, i5, a4);
        }
        o6.push(i5), this.staticRulesId = i5;
      }
    else {
      for (var c3 = this.rules.length, u4 = te(this.baseHash, n5.hash), l6 = "", d3 = 0; d3 < c3; d3++) {
        var h4 = this.rules[d3];
        if (typeof h4 == "string")
          l6 += h4, u4 = te(u4, h4 + d3);
        else if (h4) {
          var p3 = Ne(h4, e9, t6, n5), f2 = Array.isArray(p3) ? p3.join("") : p3;
          u4 = te(u4, f2 + d3), l6 += f2;
        }
      }
      if (l6) {
        var m3 = ee(u4 >>> 0);
        if (!t6.hasNameForId(r4, m3)) {
          var y3 = n5(l6, "." + m3, void 0, r4);
          t6.insertRules(r4, m3, y3);
        }
        o6.push(m3);
      }
    }
    return o6.join(" ");
  }, e8;
}();
var ie = /^\s*\/\/.*$/gm;
var ae = [":", "[", ".", "#"];
function ce(e8) {
  var t6, n5, r4, o6, s4 = e8 === void 0 ? E2 : e8, i5 = s4.options, a4 = i5 === void 0 ? E2 : i5, c3 = s4.plugins, u4 = c3 === void 0 ? w2 : c3, l6 = new stylis_browser_esm_default(a4), d3 = [], h4 = function(e9) {
    function t7(t8) {
      if (t8)
        try {
          e9(t8 + "}");
        } catch (e10) {
        }
    }
    return function(n6, r5, o7, s5, i6, a5, c4, u5, l7, d4) {
      switch (n6) {
        case 1:
          if (l7 === 0 && r5.charCodeAt(0) === 64)
            return e9(r5 + ";"), "";
          break;
        case 2:
          if (u5 === 0)
            return r5 + "/*|*/";
          break;
        case 3:
          switch (u5) {
            case 102:
            case 112:
              return e9(o7[0] + r5), "";
            default:
              return r5 + (d4 === 0 ? "/*|*/" : "");
          }
        case -2:
          r5.split("/*|*/}").forEach(t7);
      }
    };
  }(function(e9) {
    d3.push(e9);
  }), f2 = function(e9, r5, s5) {
    return r5 === 0 && ae.includes(s5[n5.length]) || s5.match(o6) ? e9 : "." + t6;
  };
  function m3(e9, s5, i6, a5) {
    a5 === void 0 && (a5 = "&");
    var c4 = e9.replace(ie, ""), u5 = s5 && i6 ? i6 + " " + s5 + " { " + c4 + " }" : c4;
    return t6 = a5, n5 = s5, r4 = new RegExp("\\" + n5 + "\\b", "g"), o6 = new RegExp("(\\" + n5 + "\\b){2,}"), l6(i6 || !s5 ? "" : s5, u5);
  }
  return l6.use([].concat(u4, [function(e9, t7, o7) {
    e9 === 2 && o7.length && o7[0].lastIndexOf(n5) > 0 && (o7[0] = o7[0].replace(r4, f2));
  }, h4, function(e9) {
    if (e9 === -2) {
      var t7 = d3;
      return d3 = [], t7;
    }
  }])), m3.hash = u4.length ? u4.reduce(function(e9, t7) {
    return t7.name || j2(15), te(e9, t7.name);
  }, 5381).toString() : "", m3;
}
var ue = import_react2.default.createContext();
var le = ue.Consumer;
var de = import_react2.default.createContext();
var he = (de.Consumer, new Z2());
var pe = ce();
function fe() {
  return (0, import_react2.useContext)(ue) || he;
}
function me() {
  return (0, import_react2.useContext)(de) || pe;
}
function ye(e8) {
  var t6 = (0, import_react2.useState)(e8.stylisPlugins), n5 = t6[0], s4 = t6[1], c3 = fe(), u4 = (0, import_react2.useMemo)(function() {
    var t7 = c3;
    return e8.sheet ? t7 = e8.sheet : e8.target && (t7 = t7.reconstructWithOptions({ target: e8.target }, false)), e8.disableCSSOMInjection && (t7 = t7.reconstructWithOptions({ useCSSOMInjection: false })), t7;
  }, [e8.disableCSSOMInjection, e8.sheet, e8.target]), l6 = (0, import_react2.useMemo)(function() {
    return ce({ options: { prefix: !e8.disableVendorPrefixes }, plugins: n5 });
  }, [e8.disableVendorPrefixes, n5]);
  return (0, import_react2.useEffect)(function() {
    (0, import_shallowequal.default)(n5, e8.stylisPlugins) || s4(e8.stylisPlugins);
  }, [e8.stylisPlugins]), import_react2.default.createElement(ue.Provider, { value: u4 }, import_react2.default.createElement(de.Provider, { value: l6 }, true ? import_react2.default.Children.only(e8.children) : e8.children));
}
var ve = function() {
  function e8(e9, t6) {
    var n5 = this;
    this.inject = function(e10, t7) {
      t7 === void 0 && (t7 = pe);
      var r4 = n5.name + t7.hash;
      e10.hasNameForId(n5.id, r4) || e10.insertRules(n5.id, r4, t7(n5.rules, r4, "@keyframes"));
    }, this.toString = function() {
      return j2(12, String(n5.name));
    }, this.name = e9, this.id = "sc-keyframes-" + e9, this.rules = t6;
  }
  return e8.prototype.getName = function(e9) {
    return e9 === void 0 && (e9 = pe), this.name + e9.hash;
  }, e8;
}();
var ge = /([A-Z])/;
var Se = /([A-Z])/g;
var we = /^ms-/;
var Ee = function(e8) {
  return "-" + e8.toLowerCase();
};
function be(e8) {
  return ge.test(e8) ? e8.replace(Se, Ee).replace(we, "-ms-") : e8;
}
var _e = function(e8) {
  return e8 == null || e8 === false || e8 === "";
};
function Ne(e8, n5, r4, o6) {
  if (Array.isArray(e8)) {
    for (var s4, i5 = [], a4 = 0, c3 = e8.length; a4 < c3; a4 += 1)
      (s4 = Ne(e8[a4], n5, r4, o6)) !== "" && (Array.isArray(s4) ? i5.push.apply(i5, s4) : i5.push(s4));
    return i5;
  }
  if (_e(e8))
    return "";
  if (N2(e8))
    return "." + e8.styledComponentId;
  if (b3(e8)) {
    if (typeof (l6 = e8) != "function" || l6.prototype && l6.prototype.isReactComponent || !n5)
      return e8;
    var u4 = e8(n5);
    return (0, import_react_is.isElement)(u4) && console.warn(_(e8) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ne(u4, n5, r4, o6);
  }
  var l6;
  return e8 instanceof ve ? r4 ? (e8.inject(r4, o6), e8.getName(o6)) : e8 : S2(e8) ? function e9(t6, n6) {
    var r5, o7, s5 = [];
    for (var i6 in t6)
      t6.hasOwnProperty(i6) && !_e(t6[i6]) && (S2(t6[i6]) ? s5.push.apply(s5, e9(t6[i6], i6)) : b3(t6[i6]) ? s5.push(be(i6) + ":", t6[i6], ";") : s5.push(be(i6) + ": " + (r5 = i6, (o7 = t6[i6]) == null || typeof o7 == "boolean" || o7 === "" ? "" : typeof o7 != "number" || o7 === 0 || r5 in unitless_browser_esm_default ? String(o7).trim() : o7 + "px") + ";"));
    return n6 ? [n6 + " {"].concat(s5, ["}"]) : s5;
  }(e8) : e8.toString();
}
function Ae(e8) {
  for (var t6 = arguments.length, n5 = new Array(t6 > 1 ? t6 - 1 : 0), r4 = 1; r4 < t6; r4++)
    n5[r4 - 1] = arguments[r4];
  return b3(e8) || S2(e8) ? Ne(g2(w2, [e8].concat(n5))) : n5.length === 0 && e8.length === 1 && typeof e8[0] == "string" ? e8 : Ne(g2(e8, n5));
}
var Ce = /invalid hook call/i;
var Ie = /* @__PURE__ */ new Set();
var Pe = function(e8, t6) {
  if (true) {
    var n5 = "The component " + e8 + (t6 ? ' with the id of "' + t6 + '"' : "") + " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";
    try {
      (0, import_react2.useRef)(), Ie.has(n5) || (console.warn(n5), Ie.add(n5));
    } catch (e9) {
      Ce.test(e9.message) && Ie.delete(n5);
    }
  }
};
var Oe = function(e8, t6, n5) {
  return n5 === void 0 && (n5 = E2), e8.theme !== n5.theme && e8.theme || t6 || n5.theme;
};
var Re = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var De = /(^-|-$)/g;
function je(e8) {
  return e8.replace(Re, "-").replace(De, "");
}
var Te = function(e8) {
  return ee(ne(e8) >>> 0);
};
function ke(e8) {
  return typeof e8 == "string" && e8.charAt(0) === e8.charAt(0).toLowerCase();
}
var xe = function(e8) {
  return typeof e8 == "function" || typeof e8 == "object" && e8 !== null && !Array.isArray(e8);
};
var Ve = function(e8) {
  return e8 !== "__proto__" && e8 !== "constructor" && e8 !== "prototype";
};
function Be(e8, t6, n5) {
  var r4 = e8[n5];
  xe(t6) && xe(r4) ? Me(r4, t6) : e8[n5] = t6;
}
function Me(e8) {
  for (var t6 = arguments.length, n5 = new Array(t6 > 1 ? t6 - 1 : 0), r4 = 1; r4 < t6; r4++)
    n5[r4 - 1] = arguments[r4];
  for (var o6 = 0, s4 = n5; o6 < s4.length; o6++) {
    var i5 = s4[o6];
    if (xe(i5))
      for (var a4 in i5)
        Ve(a4) && Be(e8, i5[a4], a4);
  }
  return e8;
}
var ze = import_react2.default.createContext();
var Le = ze.Consumer;
var Fe = {};
function Ye(e8, t6, n5) {
  var o6 = N2(e8), i5 = !ke(e8), a4 = t6.attrs, c3 = a4 === void 0 ? w2 : a4, d3 = t6.componentId, h4 = d3 === void 0 ? function(e9, t7) {
    var n6 = typeof e9 != "string" ? "sc" : je(e9);
    Fe[n6] = (Fe[n6] || 0) + 1;
    var r4 = n6 + "-" + Te("5.2.1" + n6 + Fe[n6]);
    return t7 ? t7 + "-" + r4 : r4;
  }(t6.displayName, t6.parentComponentId) : d3, p3 = t6.displayName, f2 = p3 === void 0 ? function(e9) {
    return ke(e9) ? "styled." + e9 : "Styled(" + _(e9) + ")";
  }(e8) : p3, g3 = t6.displayName && t6.componentId ? je(t6.displayName) + "-" + t6.componentId : t6.componentId || h4, S3 = o6 && e8.attrs ? Array.prototype.concat(e8.attrs, c3).filter(Boolean) : c3, A3 = t6.shouldForwardProp;
  o6 && e8.shouldForwardProp && (A3 = t6.shouldForwardProp ? function(n6, r4) {
    return e8.shouldForwardProp(n6, r4) && t6.shouldForwardProp(n6, r4);
  } : e8.shouldForwardProp);
  var C2, I3 = new se(n5, g3, o6 ? e8.componentStyle : void 0), P3 = I3.isStatic && c3.length === 0, O2 = function(e9, t7) {
    return function(e10, t8, n6, r4) {
      var o7 = e10.attrs, i6 = e10.componentStyle, a5 = e10.defaultProps, c4 = e10.foldedComponentIds, d4 = e10.shouldForwardProp, h5 = e10.styledComponentId, p4 = e10.target;
      (0, import_react2.useDebugValue)(h5);
      var f3 = function(e11, t9, n7) {
        e11 === void 0 && (e11 = E2);
        var r5 = v2({}, t9, { theme: e11 }), o8 = {};
        return n7.forEach(function(e12) {
          var t10, n8, s4, i7 = e12;
          for (t10 in b3(i7) && (i7 = i7(r5)), i7)
            r5[t10] = o8[t10] = t10 === "className" ? (n8 = o8[t10], s4 = i7[t10], n8 && s4 ? n8 + " " + s4 : n8 || s4) : i7[t10];
        }), [r5, o8];
      }(Oe(t8, (0, import_react2.useContext)(ze), a5) || E2, t8, o7), y3 = f3[0], g4 = f3[1], S4 = function(e11, t9, n7, r5) {
        var o8 = fe(), s4 = me(), i7 = t9 ? e11.generateAndInjectStyles(E2, o8, s4) : e11.generateAndInjectStyles(n7, o8, s4);
        return (0, import_react2.useDebugValue)(i7), !t9 && r5 && r5(i7), i7;
      }(i6, r4, y3, true ? e10.warnTooManyClasses : void 0), w3 = n6, _2 = g4.$as || t8.$as || g4.as || t8.as || p4, N3 = ke(_2), A4 = g4 !== t8 ? v2({}, t8, {}, g4) : t8, C3 = {};
      for (var I4 in A4)
        I4[0] !== "$" && I4 !== "as" && (I4 === "forwardedAs" ? C3.as = A4[I4] : (d4 ? d4(I4, is_prop_valid_browser_esm_default) : !N3 || is_prop_valid_browser_esm_default(I4)) && (C3[I4] = A4[I4]));
      return t8.style && g4.style !== t8.style && (C3.style = v2({}, t8.style, {}, g4.style)), C3.className = Array.prototype.concat(c4, h5, S4 !== h5 ? S4 : null, t8.className, g4.className).filter(Boolean).join(" "), C3.ref = w3, (0, import_react2.createElement)(_2, C3);
    }(C2, e9, t7, P3);
  };
  return O2.displayName = f2, (C2 = import_react2.default.forwardRef(O2)).attrs = S3, C2.componentStyle = I3, C2.displayName = f2, C2.shouldForwardProp = A3, C2.foldedComponentIds = o6 ? Array.prototype.concat(e8.foldedComponentIds, e8.styledComponentId) : w2, C2.styledComponentId = g3, C2.target = o6 ? e8.target : e8, C2.withComponent = function(e9) {
    var r4 = t6.componentId, o7 = function(e10, t7) {
      if (e10 == null)
        return {};
      var n6, r5, o8 = {}, s5 = Object.keys(e10);
      for (r5 = 0; r5 < s5.length; r5++)
        n6 = s5[r5], t7.indexOf(n6) >= 0 || (o8[n6] = e10[n6]);
      return o8;
    }(t6, ["componentId"]), s4 = r4 && r4 + "-" + (ke(e9) ? e9 : je(_(e9)));
    return Ye(e9, v2({}, o7, { attrs: S3, componentId: s4 }), n5);
  }, Object.defineProperty(C2, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(t7) {
    this._foldedDefaultProps = o6 ? Me({}, e8.defaultProps, t7) : t7;
  } }), Pe(f2, g3), C2.warnTooManyClasses = function(e9, t7) {
    var n6 = {}, r4 = false;
    return function(o7) {
      if (!r4 && (n6[o7] = true, Object.keys(n6).length >= 200)) {
        var s4 = t7 ? ' with the id of "' + t7 + '"' : "";
        console.warn("Over 200 classes were generated for component " + e9 + s4 + ".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), r4 = true, n6 = {};
      }
    };
  }(f2, g3), C2.toString = function() {
    return "." + C2.styledComponentId;
  }, i5 && (0, import_hoist_non_react_statics.default)(C2, e8, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true, withComponent: true }), C2;
}
var qe = function(e8) {
  return function e9(t6, r4, o6) {
    if (o6 === void 0 && (o6 = E2), !(0, import_react_is.isValidElementType)(r4))
      return j2(1, String(r4));
    var s4 = function() {
      return t6(r4, o6, Ae.apply(void 0, arguments));
    };
    return s4.withConfig = function(n5) {
      return e9(t6, r4, v2({}, o6, {}, n5));
    }, s4.attrs = function(n5) {
      return e9(t6, r4, v2({}, o6, { attrs: Array.prototype.concat(o6.attrs, n5).filter(Boolean) }));
    }, s4;
  }(Ye, e8);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach(function(e8) {
  qe[e8] = qe(e8);
});
var He = function() {
  function e8(e9, t7) {
    this.rules = e9, this.componentId = t7, this.isStatic = re2(e9), Z2.registerId(this.componentId + 1);
  }
  var t6 = e8.prototype;
  return t6.createStyles = function(e9, t7, n5, r4) {
    var o6 = r4(Ne(this.rules, t7, n5, r4).join(""), ""), s4 = this.componentId + e9;
    n5.insertRules(s4, s4, o6);
  }, t6.removeStyles = function(e9, t7) {
    t7.clearRules(this.componentId + e9);
  }, t6.renderStyles = function(e9, t7, n5, r4) {
    e9 > 2 && Z2.registerId(this.componentId + e9), this.removeStyles(e9, n5), this.createStyles(e9, t7, n5, r4);
  }, e8;
}();
var Ue = function() {
  function e8() {
    var e9 = this;
    this._emitSheetCSS = function() {
      var t7 = e9.instance.toString(), n5 = q2();
      return "<style " + [n5 && 'nonce="' + n5 + '"', A2 + '="true"', 'data-styled-version="5.2.1"'].filter(Boolean).join(" ") + ">" + t7 + "</style>";
    }, this.getStyleTags = function() {
      return e9.sealed ? j2(2) : e9._emitSheetCSS();
    }, this.getStyleElement = function() {
      var t7;
      if (e9.sealed)
        return j2(2);
      var n5 = ((t7 = {})[A2] = "", t7["data-styled-version"] = "5.2.1", t7.dangerouslySetInnerHTML = { __html: e9.instance.toString() }, t7), o6 = q2();
      return o6 && (n5.nonce = o6), [import_react2.default.createElement("style", v2({}, n5, { key: "sc-0-0" }))];
    }, this.seal = function() {
      e9.sealed = true;
    }, this.instance = new Z2({ isServer: true }), this.sealed = false;
  }
  var t6 = e8.prototype;
  return t6.collectStyles = function(e9) {
    return this.sealed ? j2(2) : import_react2.default.createElement(ye, { sheet: this.instance }, e9);
  }, t6.interleaveWithNodeStream = function(e9) {
    return j2(3);
  }, e8;
}();
typeof navigator != "undefined" && navigator.product === "ReactNative" && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window["__styled-components-init__"] += 1;
var styled_components_browser_esm_default = qe;

// app/common/ui-elements/library/theme/index.ts
init_react();

// app/common/ui-elements/library/theme/colors.ts
init_react();
var colors = {
  blue: `rgb(16, 158, 201)`,
  black: `rgb(1, 38, 48)`,
  white: `rgb(255, 255, 255)`,
  light_gray: `rgb(189, 189, 189)`,
  gray: `rgb(54, 54, 54)`,
  orange: `rgb(230, 155, 28)`,
  light_teal: `rgb(57, 153, 142)`,
  dark_teal: `rgb(43, 77, 89)`
};

// app/common/ui-elements/library/switch/Switch.tsx
var Root3 = styled_components_browser_esm_default(Root2)`
  all: unset;
  position: relative;
  cursor: pointer;

  height: 25px;
  width: 50px;
  background-color: ${colors.orange};
  border-radius: 9999px;
  margin: 0 8px;

  &:focus {
    
  }

  &[data-state='checked'] { background-color: ${colors.blue} },
`;
var Thumb2 = styled_components_browser_esm_default(Thumb)`
  display: block;
  width: 21px;
  height: 21px;
  background-color: white;
  ${({ $checked }) => $checked ? `
    box-shadow: -2px 1px 2px rgba(0, 0, 0, 0.2);
  ` : `
    box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.2);
  `}

  border-radius: 9999px;
  transition: transform 100ms;
  transform: translateX(3px);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(27px);
  }
`;
var Switch2 = ({ ...props }) => {
  var _a;
  const [isChecked, setIsChecked] = (0, import_react3.useState)((_a = props.checked) != null ? _a : false);
  return /* @__PURE__ */ import_react3.default.createElement(Root3, {
    ...props,
    onCheckedChange: (c3) => {
      if (props.onCheckedChange) {
        props.onCheckedChange(c3);
      }
      setIsChecked(c3);
    }
  }, /* @__PURE__ */ import_react3.default.createElement(Thumb2, {
    $checked: isChecked
  }));
};

// app/stitches.config.ts
var { theme, styled } = q({
  theme: {
    colors
  }
});

// app/ThemeContext.ts
init_react();
var import_react5 = __toESM(require_react());
var ThemeCtx = (0, import_react5.createContext)(void 0);

export {
  re,
  Divider,
  colors,
  Switch2 as Switch,
  ThemeCtx
};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=/build/_shared/chunk-AF2G6QSM.js.map
