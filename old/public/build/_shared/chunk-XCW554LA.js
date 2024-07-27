import {
  require_react_dom
} from "/build/_shared/chunk-KWLKFF5Z.js";
import {
  ThemeCtx
} from "/build/_shared/chunk-KZIRCZOW.js";
import {
  Link
} from "/build/_shared/chunk-SPG4GL7V.js";
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
        var Fragment6 = REACT_FRAGMENT_TYPE;
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
        exports.Fragment = Fragment6;
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
        for (var i4 = 0; i4 < keys.length; ++i4) {
          var key = keys[i4];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e7) {
            }
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics;
  }
});

// app/useTheme.ts
init_react();
var import_react = __toESM(require_react());
var useTheme = () => {
  const ctx2 = (0, import_react.useContext)(ThemeCtx);
  if (!ctx2) {
    throw new Error("ThemeCtx must be used underneath a provider");
  }
  return [ctx2.mode, ctx2.setMode];
};

// app/common/layout/layout.tsx
init_react();
var import_react27 = __toESM(require_react());

// app/common/layout/footer/index.ts
init_react();

// app/common/layout/footer/footer.tsx
init_react();

// app/common/links.ts
init_react();
var links = {
  home: () => `/`,
  linkedIn: () => `https://www.linkedin.com/in/kevin-carlos/`,
  gitlab: () => `https://gitlab.com/Kevin-Carlos`,
  github: () => `https://github.com/Kevin-Carlos`,
  aboutMe: () => `/about`,
  projects: () => ({
    root: () => `/projects`,
    project: () => ({
      loaders: () => `/projects/loaders`,
      lootCrate: () => `/projects/loot-crate`,
      flashcards: () => `/projects/flashcards`
    })
  })
};

// app/common/ui-elements/button/index.ts
init_react();

// app/common/ui-elements/button/link-icon.tsx
init_react();
var LinkIcon = ({
  children,
  href,
  animateScale = true,
  ...props
}) => {
  if (href == null ? void 0 : href.includes("http")) {
    return /* @__PURE__ */ React.createElement("a", {
      ...props,
      href,
      target: (href == null ? void 0 : href.includes("http")) ? "_blank" : void 0
    }, children);
  }
  return /* @__PURE__ */ React.createElement(Link, {
    ...props,
    to: href != null ? href : ""
  }, children);
};

// app/common/ui-elements/button/link-text.tsx
init_react();

// node_modules/clsx/dist/clsx.m.js
init_react();
function toVal(mix) {
  var k2, y2, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k2 = 0; k2 < mix.length; k2++) {
        if (mix[k2]) {
          if (y2 = toVal(mix[k2])) {
            str && (str += " ");
            str += y2;
          }
        }
      }
    } else {
      for (k2 in mix) {
        if (mix[k2]) {
          str && (str += " ");
          str += k2;
        }
      }
    }
  }
  return str;
}
function clsx_m_default() {
  var i4 = 0, tmp, x2, str = "";
  while (i4 < arguments.length) {
    if (tmp = arguments[i4++]) {
      if (x2 = toVal(tmp)) {
        str && (str += " ");
        str += x2;
      }
    }
  }
  return str;
}

// app/common/ui-elements/button/link-text.tsx
var import_react4 = __toESM(require_react());
var UnderLine = () => {
  return /* @__PURE__ */ React.createElement("hr", {
    className: "group-hover:w-7 bg-theme-orange absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-200 ease-in-out border-0"
  });
};
var LinkText = ({
  children,
  childrenClassName,
  href,
  animateScale = true,
  ...props
}) => {
  const classNames = clsx_m_default([
    "group",
    "hover:scale-105",
    "transition-transform",
    "duration-200",
    "ease-in-out",
    props.className
  ]);
  const LinkChildren = () => {
    return /* @__PURE__ */ React.createElement(import_react4.Fragment, null, /* @__PURE__ */ React.createElement("span", {
      className: childrenClassName
    }, children), animateScale ? /* @__PURE__ */ React.createElement(UnderLine, null) : null);
  };
  if (href == null ? void 0 : href.includes("http")) {
    return /* @__PURE__ */ React.createElement("a", {
      ...props,
      href,
      target: (href == null ? void 0 : href.includes("http")) ? "_blank" : void 0,
      className: classNames
    }, /* @__PURE__ */ React.createElement(LinkChildren, null));
  }
  return /* @__PURE__ */ React.createElement(Link, {
    ...props,
    to: href != null ? href : "",
    className: classNames
  }, /* @__PURE__ */ React.createElement(LinkChildren, null));
};

// app/common/ui-elements/button/pill-button.tsx
init_react();
var PillButton = ({ children, to: to2, ...props }) => {
  const MainButton = () => /* @__PURE__ */ React.createElement("button", {
    ...props,
    className: clsx_m_default("font-accent", "py-2", "px-5", "rounded-[20px]", "text-theme-black", "dark:text-theme-white", "transition-colors", "duration-[250ms]", "ease-in-out", props.className)
  }, children);
  if (to2) {
    return /* @__PURE__ */ React.createElement(Link, {
      to: to2
    }, /* @__PURE__ */ React.createElement(MainButton, null));
  }
  return /* @__PURE__ */ React.createElement(MainButton, null);
};

// app/common/ui-elements/button/tabs/index.ts
init_react();

// app/common/ui-elements/button/tabs/tab.tsx
init_react();
var Tab = ({
  children,
  childNumber,
  active,
  ...rest
}) => {
  const commonActiveClasses = [
    active && "border-b-2",
    active && "dark:border-b-theme-orange",
    active && "relative",
    active && 'before:content-[""]',
    active && "before:absolute",
    active && "before:bottom-[-2px]",
    active && "before:w-0",
    active && "before:border-t-[2px]",
    active && "before:border-theme-white",
    active && "dark:before:border-theme-black"
  ];
  const firstChildActiveClasses = childNumber === 1 ? [
    ...commonActiveClasses,
    active && "before:right-0",
    active && "before:border-l-theme-black",
    active && "dark:before:border-l-theme-orange",
    active && "before:border-l-[2px]"
  ] : [];
  const lastChildActiveClasses = childNumber === 2 ? [
    ...commonActiveClasses,
    active && "before:left-0",
    active && "before:border-r-theme-black",
    active && "dark:before:border-r-theme-orange",
    active && "before:border-r-[2px]"
  ] : [];
  return /* @__PURE__ */ React.createElement("li", {
    ...rest,
    className: clsx_m_default([
      rest.className,
      ...firstChildActiveClasses,
      ...lastChildActiveClasses,
      "cursor-pointer",
      "px-2",
      "py-5",
      "bg-transparent",
      "transition-colors",
      "duration-[250ms]",
      "ease-in-out",
      "hover:text-theme-lteal",
      "dark:hover:text-theme-orange"
    ])
  }, children);
};

// app/common/ui-elements/button/tabs/tabs-list.tsx
init_react();
var TabsList = ({ children, className }) => {
  return /* @__PURE__ */ React.createElement("ol", {
    className: clsx_m_default([
      className,
      "max-w-max",
      "mb-5",
      "flex",
      "items-center",
      "border-b-2",
      "before:content-none",
      "before:h-1",
      "before:w-1",
      "before:bg-theme-lteal2",
      "border-b-theme-dteal",
      "dark:border-b-theme-orange"
    ])
  }, Array.isArray(children) ? children.map((c6) => c6) : children);
};

// node_modules/phosphor-react/dist/index.esm.js
init_react();

// node_modules/phosphor-react/dist/lib/index.esm.js
init_react();
var import_react6 = __toESM(require_react());
var IconContext = /* @__PURE__ */ (0, import_react6.createContext)({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false
});
var renderPathForWeight = function renderPathForWeight2(weight, color, pathsByWeight9) {
  var path = pathsByWeight9.get(weight);
  if (!!path)
    return path(color);
  console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
  return null;
};

// node_modules/phosphor-react/dist/lib/IconBase.esm.js
init_react();
var import_react7 = __toESM(require_react());

// node_modules/phosphor-react/dist/_virtual/_rollupPluginBabelHelpers.js
init_react();
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i4;
  for (i4 = 0; i4 < sourceKeys.length; i4++) {
    key = sourceKeys[i4];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/phosphor-react/dist/lib/IconBase.esm.js
var IconBase = /* @__PURE__ */ (0, import_react7.forwardRef)(function(props, ref) {
  var color = props.color, size = props.size, weight = props.weight, mirrored = props.mirrored, children = props.children, renderPath17 = props.renderPath, restProps = _objectWithoutPropertiesLoose(props, ["color", "size", "weight", "mirrored", "children", "renderPath"]);
  var _useContext = (0, import_react7.useContext)(IconContext), _useContext$color = _useContext.color, contextColor = _useContext$color === void 0 ? "currentColor" : _useContext$color, contextSize = _useContext.size, _useContext$weight = _useContext.weight, contextWeight = _useContext$weight === void 0 ? "regular" : _useContext$weight, _useContext$mirrored = _useContext.mirrored, contextMirrored = _useContext$mirrored === void 0 ? false : _useContext$mirrored, restContext = _objectWithoutPropertiesLoose(_useContext, ["color", "size", "weight", "mirrored"]);
  return import_react7.default.createElement("svg", Object.assign({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size != null ? size : contextSize,
    height: size != null ? size : contextSize,
    fill: color != null ? color : contextColor,
    viewBox: "0 0 256 256",
    transform: mirrored || contextMirrored ? "scale(-1, 1)" : void 0
  }, restContext, restProps), children, import_react7.default.createElement("rect", {
    width: "256",
    height: "256",
    fill: "none"
  }), renderPath17(weight != null ? weight : contextWeight, color != null ? color : contextColor));
});
IconBase.displayName = "IconBase";
var IconBase_esm_default = IconBase;

// node_modules/phosphor-react/dist/icons/Code.esm.js
init_react();
var import_react8 = __toESM(require_react());
var pathsByWeight = /* @__PURE__ */ new Map();
pathsByWeight.set("bold", function(color) {
  return import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement("polyline", {
    points: "64 88 16 128 64 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react8.default.createElement("polyline", {
    points: "192 88 240 128 192 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react8.default.createElement("line", {
    x1: "160",
    y1: "40",
    x2: "96",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function(color) {
  return import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement("polyline", {
    points: "64 88 16 128 64 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react8.default.createElement("polyline", {
    points: "192 88 240 128 192 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react8.default.createElement("line", {
    x1: "160",
    y1: "40",
    x2: "96",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function() {
  return import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement("path", {
    d: "M70.1,82.9a7.8,7.8,0,0,0-11.2-1l-48,40a7.9,7.9,0,0,0,0,12.2l48,40a7.8,7.8,0,0,0,11.2-1,7.8,7.8,0,0,0-1-11.2L28.5,128,69.1,94.1A7.8,7.8,0,0,0,70.1,82.9Z"
  }), import_react8.default.createElement("path", {
    d: "M245.1,121.9l-48-40a8,8,0,0,0-10.2,12.2L227.5,128l-40.6,33.9A8,8,0,0,0,192,176a7.7,7.7,0,0,0,5.1-1.9l48-40a7.9,7.9,0,0,0,0-12.2Z"
  }), import_react8.default.createElement("path", {
    d: "M162.7,32.5a7.9,7.9,0,0,0-10.2,4.8l-64,176a7.9,7.9,0,0,0,4.8,10.2,8.6,8.6,0,0,0,2.7.5,7.9,7.9,0,0,0,7.5-5.3l64-176A7.9,7.9,0,0,0,162.7,32.5Z"
  }));
});
pathsByWeight.set("light", function(color) {
  return import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement("polyline", {
    points: "64 88 16 128 64 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react8.default.createElement("polyline", {
    points: "192 88 240 128 192 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react8.default.createElement("line", {
    x1: "160",
    y1: "40",
    x2: "96",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function(color) {
  return import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement("polyline", {
    points: "64 88 16 128 64 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react8.default.createElement("polyline", {
    points: "192 88 240 128 192 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react8.default.createElement("line", {
    x1: "160",
    y1: "40",
    x2: "96",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function(color) {
  return import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement("polyline", {
    points: "64 88 16 128 64 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react8.default.createElement("polyline", {
    points: "192 88 240 128 192 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react8.default.createElement("line", {
    x1: "160",
    y1: "40",
    x2: "96",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath = function renderPath2(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};
var Code = /* @__PURE__ */ (0, import_react8.forwardRef)(function(props, ref) {
  return import_react8.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath
  }));
});
Code.displayName = "Code";
var Code_esm_default = Code;

// node_modules/phosphor-react/dist/icons/GithubLogo.esm.js
init_react();
var import_react9 = __toESM(require_react());
var pathsByWeight2 = /* @__PURE__ */ new Map();
pathsByWeight2.set("bold", function(color) {
  return import_react9.default.createElement(import_react9.default.Fragment, null, import_react9.default.createElement("path", {
    d: "M84,240a23.9,23.9,0,0,0,24-24V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react9.default.createElement("path", {
    d: "M172,240a23.9,23.9,0,0,1-24-24V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react9.default.createElement("path", {
    d: "M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react9.default.createElement("path", {
    d: "M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react9.default.createElement("path", {
    d: "M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight2.set("duotone", function(color) {
  return import_react9.default.createElement(import_react9.default.Fragment, null, import_react9.default.createElement("path", {
    d: "M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z",
    opacity: "0.2"
  }), import_react9.default.createElement("path", {
    d: "M84,240a23.9,23.9,0,0,0,24-24V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react9.default.createElement("path", {
    d: "M172,240a23.9,23.9,0,0,1-24-24V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react9.default.createElement("path", {
    d: "M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react9.default.createElement("path", {
    d: "M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react9.default.createElement("path", {
    d: "M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight2.set("fill", function() {
  return import_react9.default.createElement(import_react9.default.Fragment, null, import_react9.default.createElement("path", {
    d: "M224,224a8,8,0,0,1-8,8,32.1,32.1,0,0,1-32-32v-8a16,16,0,0,0-16-16H156v40a16,16,0,0,0,16,16,8,8,0,0,1,0,16,32.1,32.1,0,0,1-32-32V176H116v40a32.1,32.1,0,0,1-32,32,8,8,0,0,1,0-16,16,16,0,0,0,16-16V176H88a16,16,0,0,0-16,16v8a32.1,32.1,0,0,1-32,32,8,8,0,0,1,0-16,16,16,0,0,0,16-16v-8a32.1,32.1,0,0,1,14.8-27A55.8,55.8,0,0,1,48,120v-8a58,58,0,0,1,7.7-28.3A59.9,59.9,0,0,1,61.1,36,7.8,7.8,0,0,1,68,32a59.7,59.7,0,0,1,48,24h24a59.7,59.7,0,0,1,48-24,7.8,7.8,0,0,1,6.9,4,59.9,59.9,0,0,1,5.4,47.7A58,58,0,0,1,208,112v8a55.8,55.8,0,0,1-22.8,45A32.1,32.1,0,0,1,200,192v8a16,16,0,0,0,16,16A8,8,0,0,1,224,224Z"
  }));
});
pathsByWeight2.set("light", function(color) {
  return import_react9.default.createElement(import_react9.default.Fragment, null, import_react9.default.createElement("path", {
    d: "M84,240a23.9,23.9,0,0,0,24-24V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react9.default.createElement("path", {
    d: "M172,240a23.9,23.9,0,0,1-24-24V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react9.default.createElement("path", {
    d: "M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react9.default.createElement("path", {
    d: "M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react9.default.createElement("path", {
    d: "M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight2.set("thin", function(color) {
  return import_react9.default.createElement(import_react9.default.Fragment, null, import_react9.default.createElement("path", {
    d: "M84,240a23.9,23.9,0,0,0,24-24V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react9.default.createElement("path", {
    d: "M172,240a23.9,23.9,0,0,1-24-24V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react9.default.createElement("path", {
    d: "M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react9.default.createElement("path", {
    d: "M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react9.default.createElement("path", {
    d: "M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight2.set("regular", function(color) {
  return import_react9.default.createElement(import_react9.default.Fragment, null, import_react9.default.createElement("path", {
    d: "M84,240a23.9,23.9,0,0,0,24-24V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react9.default.createElement("path", {
    d: "M172,240a23.9,23.9,0,0,1-24-24V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react9.default.createElement("path", {
    d: "M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react9.default.createElement("path", {
    d: "M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react9.default.createElement("path", {
    d: "M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath3 = function renderPath4(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight2);
};
var GithubLogo = /* @__PURE__ */ (0, import_react9.forwardRef)(function(props, ref) {
  return import_react9.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath3
  }));
});
GithubLogo.displayName = "GithubLogo";
var GithubLogo_esm_default = GithubLogo;

// node_modules/phosphor-react/dist/icons/GitlabLogo.esm.js
init_react();
var import_react10 = __toESM(require_react());
var pathsByWeight3 = /* @__PURE__ */ new Map();
pathsByWeight3.set("bold", function(color) {
  return import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("path", {
    d: "M83,112h90l22.6-60.3a4,4,0,0,1,7.6.4l27.4,102.5a8.2,8.2,0,0,1-3.2,8.6l-94.8,65.6a8.1,8.1,0,0,1-9.2,0L28.6,163.2a8.2,8.2,0,0,1-3.2-8.6L52.8,52.1a4,4,0,0,1,7.6-.4Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react10.default.createElement("line", {
    x1: "128.7",
    y1: "230.2",
    x2: "173",
    y2: "112",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react10.default.createElement("polyline", {
    points: "83 112 83 112 127.3 230.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight3.set("duotone", function(color) {
  return import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("path", {
    d: "M127.3,230.2,83,112h90L128.7,230.2h0a3.3,3.3,0,0,1-1.4,0Z",
    opacity: "0.2"
  }), import_react10.default.createElement("path", {
    d: "M219.2,112l-16-59.9a4,4,0,0,0-7.6-.4L173,112Z",
    opacity: "0.2"
  }), import_react10.default.createElement("path", {
    d: "M36.8,112l16-59.9a4,4,0,0,1,7.6-.4L83,112H36.8Z",
    opacity: "0.2"
  }), import_react10.default.createElement("path", {
    d: "M83,112h90l22.6-60.3a4,4,0,0,1,7.6.4l27.4,102.5a8.2,8.2,0,0,1-3.2,8.6l-94.8,65.6a8.1,8.1,0,0,1-9.2,0L28.6,163.2a8.2,8.2,0,0,1-3.2-8.6L52.8,52.1a4,4,0,0,1,7.6-.4Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react10.default.createElement("polyline", {
    points: "128.7 230.2 173 112 219.2 112",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react10.default.createElement("polyline", {
    points: "36.8 112 83 112 83 112 127.3 230.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight3.set("fill", function() {
  return import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("path", {
    d: "M238.3,152.5,211,50a12,12,0,0,0-22.9-1.1L167.5,104h-79L67.9,48.9A12,12,0,0,0,45,50L17.7,152.5a16.1,16.1,0,0,0,6.4,17.3l94.8,65.6a15.5,15.5,0,0,0,7.1,2.7h4a15.5,15.5,0,0,0,7.1-2.7l94.8-65.6A16.1,16.1,0,0,0,238.3,152.5ZM33.2,156.6,42.9,120H77.5l34,90.9Zm111.3,54.3,34-90.9h34.6l9.7,36.6Z"
  }));
});
pathsByWeight3.set("light", function(color) {
  return import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("path", {
    d: "M83,112h90l22.6-60.3a4,4,0,0,1,7.6.4l27.4,102.5a8.2,8.2,0,0,1-3.2,8.6l-94.8,65.6a8.1,8.1,0,0,1-9.2,0L28.6,163.2a8.2,8.2,0,0,1-3.2-8.6L52.8,52.1a4,4,0,0,1,7.6-.4Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react10.default.createElement("polyline", {
    points: "128.7 230.2 173 112 219.2 112",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react10.default.createElement("polyline", {
    points: "36.8 112 83 112 83 112 127.3 230.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight3.set("thin", function(color) {
  return import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("path", {
    d: "M83,112h90l22.6-60.3a4,4,0,0,1,7.6.4l27.4,102.5a8.2,8.2,0,0,1-3.2,8.6l-94.8,65.6a8.1,8.1,0,0,1-9.2,0L28.6,163.2a8.2,8.2,0,0,1-3.2-8.6L52.8,52.1a4,4,0,0,1,7.6-.4Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react10.default.createElement("polyline", {
    points: "128.7 230.2 173 112 219.2 112",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react10.default.createElement("polyline", {
    points: "36.8 112 83 112 83 112 127.3 230.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight3.set("regular", function(color) {
  return import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("path", {
    d: "M83,112h90l22.6-60.3a4,4,0,0,1,7.6.4l27.4,102.5a8.2,8.2,0,0,1-3.2,8.6l-94.8,65.6a8.1,8.1,0,0,1-9.2,0L28.6,163.2a8.2,8.2,0,0,1-3.2-8.6L52.8,52.1a4,4,0,0,1,7.6-.4Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react10.default.createElement("polyline", {
    points: "128.7 230.2 173 112 219.2 112",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react10.default.createElement("polyline", {
    points: "36.8 112 83 112 83 112 127.3 230.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath5 = function renderPath6(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight3);
};
var GitlabLogo = /* @__PURE__ */ (0, import_react10.forwardRef)(function(props, ref) {
  return import_react10.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath5
  }));
});
GitlabLogo.displayName = "GitlabLogo";
var GitlabLogo_esm_default = GitlabLogo;

// node_modules/phosphor-react/dist/icons/LinkedinLogo.esm.js
init_react();
var import_react11 = __toESM(require_react());
var pathsByWeight4 = /* @__PURE__ */ new Map();
pathsByWeight4.set("bold", function(color) {
  return import_react11.default.createElement(import_react11.default.Fragment, null, import_react11.default.createElement("rect", {
    x: "36",
    y: "36",
    width: "184",
    height: "184",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react11.default.createElement("line", {
    x1: "124",
    y1: "120",
    x2: "124",
    y2: "176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react11.default.createElement("line", {
    x1: "84",
    y1: "120",
    x2: "84",
    y2: "176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react11.default.createElement("path", {
    d: "M124,148a28,28,0,0,1,56,0v28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react11.default.createElement("circle", {
    cx: "84",
    cy: "80",
    r: "16"
  }));
});
pathsByWeight4.set("duotone", function(color) {
  return import_react11.default.createElement(import_react11.default.Fragment, null, import_react11.default.createElement("rect", {
    x: "36",
    y: "36",
    width: "184",
    height: "184",
    rx: "8",
    opacity: "0.2"
  }), import_react11.default.createElement("rect", {
    x: "36",
    y: "36",
    width: "184",
    height: "184",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("line", {
    x1: "120",
    y1: "112",
    x2: "120",
    y2: "176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("line", {
    x1: "88",
    y1: "112",
    x2: "88",
    y2: "176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("path", {
    d: "M120,140a28,28,0,0,1,56,0v36",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("circle", {
    cx: "88",
    cy: "80",
    r: "12"
  }));
});
pathsByWeight4.set("fill", function() {
  return import_react11.default.createElement(import_react11.default.Fragment, null, import_react11.default.createElement("path", {
    d: "M212,28H44A16,16,0,0,0,28,44V212a16,16,0,0,0,16,16H212a16,16,0,0,0,16-16V44A16,16,0,0,0,212,28ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,92a12,12,0,1,1,12-12A12,12,0,0,1,88,92Zm96,84a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.8-1.8A36,36,0,0,1,184,140Z"
  }));
});
pathsByWeight4.set("light", function(color) {
  return import_react11.default.createElement(import_react11.default.Fragment, null, import_react11.default.createElement("rect", {
    x: "36",
    y: "36",
    width: "184",
    height: "184",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react11.default.createElement("line", {
    x1: "120",
    y1: "112",
    x2: "120",
    y2: "176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react11.default.createElement("line", {
    x1: "88",
    y1: "112",
    x2: "88",
    y2: "176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react11.default.createElement("path", {
    d: "M120,140a28,28,0,0,1,56,0v36",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react11.default.createElement("circle", {
    cx: "88",
    cy: "80",
    r: "10"
  }));
});
pathsByWeight4.set("thin", function(color) {
  return import_react11.default.createElement(import_react11.default.Fragment, null, import_react11.default.createElement("rect", {
    x: "36",
    y: "36",
    width: "184",
    height: "184",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react11.default.createElement("line", {
    x1: "120",
    y1: "112",
    x2: "120",
    y2: "176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react11.default.createElement("line", {
    x1: "88",
    y1: "112",
    x2: "88",
    y2: "176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react11.default.createElement("path", {
    d: "M120,140a28,28,0,0,1,56,0v36",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react11.default.createElement("circle", {
    cx: "88",
    cy: "80",
    r: "8"
  }));
});
pathsByWeight4.set("regular", function(color) {
  return import_react11.default.createElement(import_react11.default.Fragment, null, import_react11.default.createElement("rect", {
    x: "36",
    y: "36",
    width: "184",
    height: "184",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("line", {
    x1: "120",
    y1: "112",
    x2: "120",
    y2: "176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("line", {
    x1: "88",
    y1: "112",
    x2: "88",
    y2: "176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("path", {
    d: "M120,140a28,28,0,0,1,56,0v36",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("circle", {
    cx: "88",
    cy: "80",
    r: "12"
  }));
});
var renderPath7 = function renderPath8(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight4);
};
var LinkedinLogo = /* @__PURE__ */ (0, import_react11.forwardRef)(function(props, ref) {
  return import_react11.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath7
  }));
});
LinkedinLogo.displayName = "LinkedinLogo";
var LinkedinLogo_esm_default = LinkedinLogo;

// node_modules/phosphor-react/dist/icons/Moon.esm.js
init_react();
var import_react12 = __toESM(require_react());
var pathsByWeight5 = /* @__PURE__ */ new Map();
pathsByWeight5.set("bold", function(color) {
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement("path", {
    d: "M216.7,152.6A91.9,91.9,0,0,1,103.4,39.3h0A92,92,0,1,0,216.7,152.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight5.set("duotone", function(color) {
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement("path", {
    d: "M216.7,152.6A91.9,91.9,0,0,1,103.4,39.3h0A92,92,0,1,0,216.7,152.6Z",
    opacity: "0.2"
  }), import_react12.default.createElement("path", {
    d: "M216.7,152.6A91.9,91.9,0,0,1,103.4,39.3h0A92,92,0,1,0,216.7,152.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight5.set("fill", function() {
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement("path", {
    d: "M224.3,150.3a8.1,8.1,0,0,0-7.8-5.7l-2.2.4A84,84,0,0,1,111,41.6a5.7,5.7,0,0,0,.3-1.8A7.9,7.9,0,0,0,101,31.7,100,100,0,1,0,224.3,154.9,7.2,7.2,0,0,0,224.3,150.3Z"
  }));
});
pathsByWeight5.set("light", function(color) {
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement("path", {
    d: "M216.7,152.6A91.9,91.9,0,0,1,103.4,39.3h0A92,92,0,1,0,216.7,152.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight5.set("thin", function(color) {
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement("path", {
    d: "M216.7,152.6A91.9,91.9,0,0,1,103.4,39.3h0A92,92,0,1,0,216.7,152.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight5.set("regular", function(color) {
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement("path", {
    d: "M216.7,152.6A91.9,91.9,0,0,1,103.4,39.3h0A92,92,0,1,0,216.7,152.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath9 = function renderPath10(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight5);
};
var Moon = /* @__PURE__ */ (0, import_react12.forwardRef)(function(props, ref) {
  return import_react12.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath9
  }));
});
Moon.displayName = "Moon";
var Moon_esm_default = Moon;

// node_modules/phosphor-react/dist/icons/Pen.esm.js
init_react();
var import_react13 = __toESM(require_react());
var pathsByWeight6 = /* @__PURE__ */ new Map();
pathsByWeight6.set("bold", function(color) {
  return import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement("path", {
    d: "M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react13.default.createElement("line", {
    x1: "136",
    y1: "64",
    x2: "192",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react13.default.createElement("polyline", {
    points: "164 200 204 160 192 120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react13.default.createElement("line", {
    x1: "44",
    y1: "156",
    x2: "100",
    y2: "212",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight6.set("duotone", function(color) {
  return import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement("path", {
    d: "M192,120,136,64l26.3-26.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4Z",
    opacity: "0.2"
  }), import_react13.default.createElement("path", {
    d: "M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react13.default.createElement("line", {
    x1: "136",
    y1: "64",
    x2: "192",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react13.default.createElement("polyline", {
    points: "160 192 200 152 192 120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react13.default.createElement("line", {
    x1: "40.5",
    y1: "160.5",
    x2: "95.5",
    y2: "215.5",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight6.set("fill", function() {
  return import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement("path", {
    d: "M228.7,88A15.9,15.9,0,0,0,224,76.7L179.3,32a16.1,16.1,0,0,0-22.6,0L36.7,152a16,16,0,0,0-3.6,5.4l-.3.8a17,17,0,0,0-.8,5.1V208a16,16,0,0,0,16,16H92.7a14.4,14.4,0,0,0,5.1-.9l.8-.2a16,16,0,0,0,5.4-3.6l83.7-83.7,3.4,13.9-36.8,36.8a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0l40-40a8.5,8.5,0,0,0,2.1-7.6l-6.9-27.6L224,99.3A15.9,15.9,0,0,0,228.7,88ZM192,108.7,147.3,64,168,43.3,212.7,88Z"
  }));
});
pathsByWeight6.set("light", function(color) {
  return import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement("path", {
    d: "M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react13.default.createElement("line", {
    x1: "136",
    y1: "64",
    x2: "192",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react13.default.createElement("polyline", {
    points: "160 192 200 152 192 120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react13.default.createElement("line", {
    x1: "40.5",
    y1: "160.5",
    x2: "95.5",
    y2: "215.5",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight6.set("thin", function(color) {
  return import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement("path", {
    d: "M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react13.default.createElement("line", {
    x1: "136",
    y1: "64",
    x2: "192",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react13.default.createElement("polyline", {
    points: "160 192 200 152 192 120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react13.default.createElement("line", {
    x1: "40.5",
    y1: "160.5",
    x2: "95.5",
    y2: "215.5",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight6.set("regular", function(color) {
  return import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement("path", {
    d: "M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react13.default.createElement("line", {
    x1: "136",
    y1: "64",
    x2: "192",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react13.default.createElement("polyline", {
    points: "160 192 200 152 192 120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react13.default.createElement("line", {
    x1: "40.5",
    y1: "160.5",
    x2: "95.5",
    y2: "215.5",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath11 = function renderPath12(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight6);
};
var Pen = /* @__PURE__ */ (0, import_react13.forwardRef)(function(props, ref) {
  return import_react13.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath11
  }));
});
Pen.displayName = "Pen";
var Pen_esm_default = Pen;

// node_modules/phosphor-react/dist/icons/Sun.esm.js
init_react();
var import_react14 = __toESM(require_react());
var pathsByWeight7 = /* @__PURE__ */ new Map();
pathsByWeight7.set("bold", function(color) {
  return import_react14.default.createElement(import_react14.default.Fragment, null, import_react14.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "60",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react14.default.createElement("line", {
    x1: "128",
    y1: "28",
    x2: "128",
    y2: "12",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react14.default.createElement("line", {
    x1: "198.7",
    y1: "57.3",
    x2: "210",
    y2: "46",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react14.default.createElement("line", {
    x1: "228",
    y1: "128",
    x2: "244",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react14.default.createElement("line", {
    x1: "198.7",
    y1: "198.7",
    x2: "210",
    y2: "210",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react14.default.createElement("line", {
    x1: "128",
    y1: "228",
    x2: "128",
    y2: "244",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react14.default.createElement("line", {
    x1: "57.3",
    y1: "198.7",
    x2: "46",
    y2: "210",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react14.default.createElement("line", {
    x1: "28",
    y1: "128",
    x2: "12",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react14.default.createElement("line", {
    x1: "57.3",
    y1: "57.3",
    x2: "46",
    y2: "46",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight7.set("duotone", function(color) {
  return import_react14.default.createElement(import_react14.default.Fragment, null, import_react14.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "60",
    opacity: "0.2"
  }), import_react14.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "60",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "128",
    y1: "36",
    x2: "128",
    y2: "16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "62.9",
    y1: "62.9",
    x2: "48.8",
    y2: "48.8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "36",
    y1: "128",
    x2: "16",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "62.9",
    y1: "193.1",
    x2: "48.8",
    y2: "207.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "128",
    y1: "220",
    x2: "128",
    y2: "240",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "193.1",
    y1: "193.1",
    x2: "207.2",
    y2: "207.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "220",
    y1: "128",
    x2: "240",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "193.1",
    y1: "62.9",
    x2: "207.2",
    y2: "48.8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight7.set("fill", function() {
  return import_react14.default.createElement(import_react14.default.Fragment, null, import_react14.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "68"
  }), import_react14.default.createElement("path", {
    d: "M128,44a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V36A8,8,0,0,0,128,44Z"
  }), import_react14.default.createElement("path", {
    d: "M57.3,68.6a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3L54.5,43.1A8.1,8.1,0,1,0,43.1,54.5Z"
  }), import_react14.default.createElement("path", {
    d: "M44,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H36A8,8,0,0,0,44,128Z"
  }), import_react14.default.createElement("path", {
    d: "M57.3,187.4,43.1,201.5a8.1,8.1,0,0,0,0,11.4,8.5,8.5,0,0,0,5.7,2.3,8.3,8.3,0,0,0,5.7-2.3l14.1-14.2a8,8,0,0,0-11.3-11.3Z"
  }), import_react14.default.createElement("path", {
    d: "M128,212a8,8,0,0,0-8,8v20a8,8,0,0,0,16,0V220A8,8,0,0,0,128,212Z"
  }), import_react14.default.createElement("path", {
    d: "M198.7,187.4a8,8,0,0,0-11.3,11.3l14.1,14.2a8.3,8.3,0,0,0,5.7,2.3,8.5,8.5,0,0,0,5.7-2.3,8.1,8.1,0,0,0,0-11.4Z"
  }), import_react14.default.createElement("path", {
    d: "M240,120H220a8,8,0,0,0,0,16h20a8,8,0,0,0,0-16Z"
  }), import_react14.default.createElement("path", {
    d: "M193.1,70.9a7.8,7.8,0,0,0,5.6-2.3l14.2-14.1a8.1,8.1,0,0,0-11.4-11.4L187.4,57.3a8,8,0,0,0,0,11.3A7.8,7.8,0,0,0,193.1,70.9Z"
  }));
});
pathsByWeight7.set("light", function(color) {
  return import_react14.default.createElement(import_react14.default.Fragment, null, import_react14.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "60",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react14.default.createElement("line", {
    x1: "128",
    y1: "36",
    x2: "128",
    y2: "16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react14.default.createElement("line", {
    x1: "62.9",
    y1: "62.9",
    x2: "48.8",
    y2: "48.8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react14.default.createElement("line", {
    x1: "36",
    y1: "128",
    x2: "16",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react14.default.createElement("line", {
    x1: "62.9",
    y1: "193.1",
    x2: "48.8",
    y2: "207.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react14.default.createElement("line", {
    x1: "128",
    y1: "220",
    x2: "128",
    y2: "240",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react14.default.createElement("line", {
    x1: "193.1",
    y1: "193.1",
    x2: "207.2",
    y2: "207.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react14.default.createElement("line", {
    x1: "220",
    y1: "128",
    x2: "240",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react14.default.createElement("line", {
    x1: "193.1",
    y1: "62.9",
    x2: "207.2",
    y2: "48.8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight7.set("thin", function(color) {
  return import_react14.default.createElement(import_react14.default.Fragment, null, import_react14.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "60",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react14.default.createElement("line", {
    x1: "128",
    y1: "36",
    x2: "128",
    y2: "16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react14.default.createElement("line", {
    x1: "62.9",
    y1: "62.9",
    x2: "48.8",
    y2: "48.8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react14.default.createElement("line", {
    x1: "36",
    y1: "128",
    x2: "16",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react14.default.createElement("line", {
    x1: "62.9",
    y1: "193.1",
    x2: "48.8",
    y2: "207.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react14.default.createElement("line", {
    x1: "128",
    y1: "220",
    x2: "128",
    y2: "240",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react14.default.createElement("line", {
    x1: "193.1",
    y1: "193.1",
    x2: "207.2",
    y2: "207.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react14.default.createElement("line", {
    x1: "220",
    y1: "128",
    x2: "240",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react14.default.createElement("line", {
    x1: "193.1",
    y1: "62.9",
    x2: "207.2",
    y2: "48.8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight7.set("regular", function(color) {
  return import_react14.default.createElement(import_react14.default.Fragment, null, import_react14.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "60",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "128",
    y1: "36",
    x2: "128",
    y2: "16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "62.9",
    y1: "62.9",
    x2: "48.8",
    y2: "48.8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "36",
    y1: "128",
    x2: "16",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "62.9",
    y1: "193.1",
    x2: "48.8",
    y2: "207.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "128",
    y1: "220",
    x2: "128",
    y2: "240",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "193.1",
    y1: "193.1",
    x2: "207.2",
    y2: "207.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "220",
    y1: "128",
    x2: "240",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "193.1",
    y1: "62.9",
    x2: "207.2",
    y2: "48.8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath13 = function renderPath14(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight7);
};
var Sun = /* @__PURE__ */ (0, import_react14.forwardRef)(function(props, ref) {
  return import_react14.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath13
  }));
});
Sun.displayName = "Sun";
var Sun_esm_default = Sun;

// node_modules/phosphor-react/dist/icons/UserFocus.esm.js
init_react();
var import_react15 = __toESM(require_react());
var pathsByWeight8 = /* @__PURE__ */ new Map();
pathsByWeight8.set("bold", function(color) {
  return import_react15.default.createElement(import_react15.default.Fragment, null, import_react15.default.createElement("path", {
    d: "M180,40h28a8,8,0,0,1,8,8V76",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react15.default.createElement("path", {
    d: "M180,216h28a8,8,0,0,0,8-8V180",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react15.default.createElement("path", {
    d: "M76,216H48a8,8,0,0,1-8-8V180",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react15.default.createElement("path", {
    d: "M76,40H48a8,8,0,0,0-8,8V76",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react15.default.createElement("circle", {
    cx: "128",
    cy: "112",
    r: "32",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react15.default.createElement("path", {
    d: "M80,168a60,60,0,0,1,96,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight8.set("duotone", function(color) {
  return import_react15.default.createElement(import_react15.default.Fragment, null, import_react15.default.createElement("circle", {
    cx: "128",
    cy: "112",
    r: "32",
    opacity: "0.2"
  }), import_react15.default.createElement("path", {
    d: "M180,40h28a8,8,0,0,1,8,8V76",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react15.default.createElement("path", {
    d: "M180,216h28a8,8,0,0,0,8-8V180",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react15.default.createElement("path", {
    d: "M76,216H48a8,8,0,0,1-8-8V180",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react15.default.createElement("path", {
    d: "M76,40H48a8,8,0,0,0-8,8V76",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react15.default.createElement("circle", {
    cx: "128",
    cy: "112",
    r: "32",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react15.default.createElement("path", {
    d: "M74.9,176a60.1,60.1,0,0,1,106.2,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight8.set("fill", function() {
  return import_react15.default.createElement(import_react15.default.Fragment, null, import_react15.default.createElement("path", {
    d: "M224,48V76a8,8,0,0,1-16,0V48H180a8,8,0,0,1,0-16h28A16,16,0,0,1,224,48Zm-8,124a8,8,0,0,0-8,8v28H180a8,8,0,0,0,0,16h28a16,16,0,0,0,16-16V180A8,8,0,0,0,216,172ZM76,208H48V180a8,8,0,0,0-16,0v28a16,16,0,0,0,16,16H76a8,8,0,0,0,0-16ZM40,84a8,8,0,0,0,8-8V48H76a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V76A8,8,0,0,0,40,84Zm61.1,57.5a69.1,69.1,0,0,0-33.3,30.8,7.8,7.8,0,0,0,.3,7.8,7.9,7.9,0,0,0,6.8,3.9H181.1a7.9,7.9,0,0,0,6.8-3.9,7.8,7.8,0,0,0,.3-7.8,69.1,69.1,0,0,0-33.3-30.8A39.5,39.5,0,0,0,168,112a40,40,0,0,0-80,0A39.5,39.5,0,0,0,101.1,141.5Z"
  }));
});
pathsByWeight8.set("light", function(color) {
  return import_react15.default.createElement(import_react15.default.Fragment, null, import_react15.default.createElement("path", {
    d: "M180,40h28a8,8,0,0,1,8,8V76",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react15.default.createElement("path", {
    d: "M180,216h28a8,8,0,0,0,8-8V180",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react15.default.createElement("path", {
    d: "M76,216H48a8,8,0,0,1-8-8V180",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react15.default.createElement("path", {
    d: "M76,40H48a8,8,0,0,0-8,8V76",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react15.default.createElement("circle", {
    cx: "128",
    cy: "112",
    r: "32",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react15.default.createElement("path", {
    d: "M74.9,176a60.1,60.1,0,0,1,106.2,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight8.set("thin", function(color) {
  return import_react15.default.createElement(import_react15.default.Fragment, null, import_react15.default.createElement("path", {
    d: "M180,40h28a8,8,0,0,1,8,8V76",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react15.default.createElement("path", {
    d: "M180,216h28a8,8,0,0,0,8-8V180",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react15.default.createElement("path", {
    d: "M76,216H48a8,8,0,0,1-8-8V180",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react15.default.createElement("path", {
    d: "M76,40H48a8,8,0,0,0-8,8V76",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react15.default.createElement("circle", {
    cx: "128",
    cy: "112",
    r: "32",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react15.default.createElement("path", {
    d: "M74.9,176a60.1,60.1,0,0,1,106.2,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight8.set("regular", function(color) {
  return import_react15.default.createElement(import_react15.default.Fragment, null, import_react15.default.createElement("path", {
    d: "M180,40h28a8,8,0,0,1,8,8V76",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react15.default.createElement("path", {
    d: "M180,216h28a8,8,0,0,0,8-8V180",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react15.default.createElement("path", {
    d: "M76,216H48a8,8,0,0,1-8-8V180",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react15.default.createElement("path", {
    d: "M76,40H48a8,8,0,0,0-8,8V76",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react15.default.createElement("circle", {
    cx: "128",
    cy: "112",
    r: "32",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react15.default.createElement("path", {
    d: "M74.9,176a60.1,60.1,0,0,1,106.2,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath15 = function renderPath16(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight8);
};
var UserFocus = /* @__PURE__ */ (0, import_react15.forwardRef)(function(props, ref) {
  return import_react15.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath15
  }));
});
UserFocus.displayName = "UserFocus";
var UserFocus_esm_default = UserFocus;

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
var o = __toESM(require_react());
function composeRefs(...o5) {
  return (e7) => o5.forEach((o6) => function(o7, e8) {
    typeof o7 == "function" ? o7(e8) : o7 != null && (o7.current = e8);
  }(o6, e7));
}
function useComposedRefs(...e7) {
  return o.useCallback(composeRefs(...e7), e7);
}

// node_modules/@radix-ui/react-slot/dist/index.module.js
var t = __toESM(require_react());

// node_modules/@babel/runtime/helpers/esm/extends.js
init_react();
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i4 = 1; i4 < arguments.length; i4++) {
      var source = arguments[i4];
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
var Slot = /* @__PURE__ */ t.forwardRef((e7, o5) => {
  const { children: a3, ...s3 } = e7;
  return t.Children.toArray(a3).some(l) ? /* @__PURE__ */ t.createElement(t.Fragment, null, t.Children.map(a3, (e8) => l(e8) ? /* @__PURE__ */ t.createElement(n, _extends({}, s3, { ref: o5 }), e8.props.children) : e8)) : /* @__PURE__ */ t.createElement(n, _extends({}, s3, { ref: o5 }), a3);
});
Slot.displayName = "Slot";
var n = /* @__PURE__ */ t.forwardRef((r3, n4) => {
  const { children: l5, ...a3 } = r3;
  return t.isValidElement(l5) ? /* @__PURE__ */ t.cloneElement(l5, { ...o2(a3, l5.props), ref: composeRefs(n4, l5.ref) }) : t.Children.count(l5) > 1 ? t.Children.only(null) : null;
});
n.displayName = "SlotClone";
var Slottable = ({ children: e7 }) => /* @__PURE__ */ t.createElement(t.Fragment, null, e7);
function l(e7) {
  return t.isValidElement(e7) && e7.type === Slottable;
}
function o2(e7, t5) {
  const r3 = { ...t5 };
  for (const n4 in t5) {
    const l5 = e7[n4], o5 = t5[n4];
    /^on[A-Z]/.test(n4) ? r3[n4] = (...e8) => {
      o5 == null || o5(...e8), l5 == null || l5(...e8);
    } : n4 === "style" ? r3[n4] = { ...l5, ...o5 } : n4 === "className" && (r3[n4] = [l5, o5].filter(Boolean).join(" "));
  }
  return { ...e7, ...r3 };
}

// node_modules/@radix-ui/react-primitive/dist/index.module.js
var r = __toESM(require_react());
var Primitive = ["a", "button", "div", "h2", "h3", "img", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((o5, i4) => ({ ...o5, [i4]: /* @__PURE__ */ r.forwardRef((o6, m2) => {
  const { asChild: a3, ...s3 } = o6, n4 = a3 ? Slot : i4;
  return r.useEffect(() => {
    window[Symbol.for("radix-ui")] = true;
  }, []), /* @__PURE__ */ r.createElement(n4, _extends({}, s3, { ref: m2 }));
}) }), {});

// node_modules/@radix-ui/react-separator/dist/index.module.js
var o3 = __toESM(require_react());
var e = "horizontal";
var n2 = ["horizontal", "vertical"];
var Separator = /* @__PURE__ */ o3.forwardRef((n4, a3) => {
  const { decorative: p2, orientation: l5 = e, ...c6 } = n4, s3 = i(l5) ? l5 : e, u3 = p2 ? { role: "none" } : { "aria-orientation": s3 === "vertical" ? s3 : void 0, role: "separator" };
  return o3.createElement(Primitive.div, _extends({ "data-orientation": s3 }, u3, c6, { ref: a3 }));
});
function i(r3) {
  return n2.includes(r3);
}
Separator.propTypes = { orientation(r3, o5, t5) {
  const n4 = r3[o5], a3 = String(n4);
  return n4 && !i(n4) ? new Error(function(r4, o6) {
    return `Invalid prop \`orientation\` of value \`${r4}\` supplied to \`${o6}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${e}\`.`;
  }(a3, t5)) : null;
} };
var Root = Separator;

// node_modules/polished/dist/polished.esm.js
init_react();

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/extends.js
init_react();
function _extends2() {
  _extends2 = Object.assign || function(target) {
    for (var i4 = 1; i4 < arguments.length; i4++) {
      var source = arguments[i4];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
init_react();
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
init_react();

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
init_react();
function _setPrototypeOf(o5, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o6, p3) {
    o6.__proto__ = p3;
    return o6;
  };
  return _setPrototypeOf(o5, p2);
}

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
init_react();

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
init_react();
function _getPrototypeOf(o5) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o6) {
    return o6.__proto__ || Object.getPrototypeOf(o6);
  };
  return _getPrototypeOf(o5);
}

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
init_react();
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/construct.js
init_react();

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
init_react();
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e7) {
    return false;
  }
}

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/construct.js
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a3 = [null];
      a3.push.apply(a3, args2);
      var Constructor = Function.bind.apply(Parent2, a3);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js
init_react();

// node_modules/polished/dist/polished.esm.js
var ERRORS = {
  "1": "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
  "2": "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
  "3": "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
  "4": "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
  "5": "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
  "6": "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
  "7": "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
  "8": "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
  "9": "Please provide a number of steps to the modularScale helper.\n\n",
  "10": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "11": 'Invalid value passed as base to modularScale, expected number or em string but got "%s"\n\n',
  "12": 'Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.\n\n',
  "13": 'Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.\n\n',
  "14": 'Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',
  "15": 'Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',
  "16": "You must provide a template to this method.\n\n",
  "17": "You passed an unsupported selector state to this method.\n\n",
  "18": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "19": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "20": "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "21": "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "22": "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "23": "fontFace expects a name of a font-family.\n\n",
  "24": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "25": "fontFace expects localFonts to be an array.\n\n",
  "26": "fontFace expects fileFormats to be an array.\n\n",
  "27": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "28": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "29": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "30": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "31": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
  "32": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
  "33": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
  "34": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "35": 'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',
  "36": "Property must be a string value.\n\n",
  "37": "Syntax Error at %s.\n\n",
  "38": "Formula contains a function that needs parentheses at %s.\n\n",
  "39": "Formula is missing closing parenthesis at %s.\n\n",
  "40": "Formula has too many closing parentheses at %s.\n\n",
  "41": "All values in a formula must have the same unit or be unitless.\n\n",
  "42": "Please provide a number of steps to the modularScale helper.\n\n",
  "43": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "44": "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
  "45": "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
  "46": "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
  "47": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "48": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "49": "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "50": "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
  "51": "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
  "52": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "53": "fontFace expects localFonts to be an array.\n\n",
  "54": "fontFace expects fileFormats to be an array.\n\n",
  "55": "fontFace expects a name of a font-family.\n\n",
  "56": "linearGradient requries at least 2 color-stops to properly render.\n\n",
  "57": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "58": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "59": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "60": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "61": "Property must be a string value.\n\n",
  "62": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "63": 'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',
  "64": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
  "65": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
  "66": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
  "67": "You must provide a template to this method.\n\n",
  "68": "You passed an unsupported selector state to this method.\n\n",
  "69": 'Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.\n\n',
  "70": 'Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.\n\n',
  "71": 'Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.\n\n',
  "72": 'Passed invalid base value %s to %s(), please pass a value like "12px" or 12.\n\n',
  "73": "Please provide a valid CSS variable.\n\n",
  "74": "CSS variable not found and no default was provided.\n\n",
  "75": "important requires a valid style object, got a %s instead.\n\n",
  "76": "fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n",
  "77": 'remToPx expects a value in "rem" but you provided it in "%s".\n\n',
  "78": 'base must be set in "px" or "%" but you set it in "%s".\n'
};
function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var a3 = args[0];
  var b3 = [];
  var c6;
  for (c6 = 1; c6 < args.length; c6 += 1) {
    b3.push(args[c6]);
  }
  b3.forEach(function(d2) {
    a3 = a3.replace(/%[a-z]/, d2);
  });
  return a3;
}
var PolishedError = /* @__PURE__ */ function(_Error) {
  _inheritsLoose(PolishedError2, _Error);
  function PolishedError2(code) {
    var _this;
    if (false) {
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    } else {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this;
    }
    return _assertThisInitialized(_this);
  }
  return PolishedError2;
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function colorToInt(color) {
  return Math.round(color * 255);
}
function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}
function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }
  if (saturation === 0) {
    return convert(lightness, lightness, lightness);
  }
  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;
  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }
  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}
var namedColorMap = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function nameToHex(color) {
  if (typeof color !== "string")
    return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}
var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
function parseToRgb(color) {
  if (typeof color !== "string") {
    throw new PolishedError(3);
  }
  var normalizedColor = nameToHex(color);
  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }
  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha
    };
  }
  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }
  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }
  var rgbMatched = rgbRegex.exec(normalizedColor);
  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }
  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));
  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4])
    };
  }
  var hslMatched = hslRegex.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);
    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }
    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }
  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));
  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);
    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;
    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;
    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";
    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);
    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }
    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4])
    };
  }
  throw new PolishedError(5);
}
var reduceHexValue = function reduceHexValue2(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }
  return value;
};
var reduceHexValue$1 = reduceHexValue;
function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function rgb(value, green, blue) {
  if (typeof value === "number" && typeof green === "number" && typeof blue === "number") {
    return reduceHexValue$1("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === "object" && green === void 0 && blue === void 0) {
    return reduceHexValue$1("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }
  throw new PolishedError(6);
}
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === "string" && typeof secondValue === "number") {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === "number" && typeof secondValue === "number" && typeof thirdValue === "number" && typeof fourthValue === "number") {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === "object" && secondValue === void 0 && thirdValue === void 0 && fourthValue === void 0) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }
  throw new PolishedError(7);
}
function curried(f, length, acc) {
  return function fn() {
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
}
function curry(f) {
  return curried(f, f.length, []);
}
function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}
function transparentize(amount, color) {
  if (color === "transparent")
    return color;
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === "number" ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends2({}, parsedColor, {
    alpha: guard(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100)
  });
  return rgba(colorWithAlpha);
}
var curriedTransparentize = /* @__PURE__ */ curry(transparentize);
var curriedTransparentize$1 = curriedTransparentize;

// node_modules/styled-components/dist/styled-components.browser.esm.js
init_react();
var import_react_is = __toESM(require_react_is());
var import_react16 = __toESM(require_react());
var import_shallowequal = __toESM(require_shallowequal());

// node_modules/@emotion/stylis/dist/stylis.browser.esm.js
init_react();
function stylis_min(W2) {
  function M2(d2, c6, e7, h3, a3) {
    for (var m2 = 0, b3 = 0, v2 = 0, n4 = 0, q2, g2, x2 = 0, K2 = 0, k2, u3 = k2 = q2 = 0, l5 = 0, r3 = 0, I2 = 0, t5 = 0, B3 = e7.length, J2 = B3 - 1, y2, f = "", p2 = "", F3 = "", G3 = "", C; l5 < B3; ) {
      g2 = e7.charCodeAt(l5);
      l5 === J2 && b3 + n4 + v2 + m2 !== 0 && (b3 !== 0 && (g2 = b3 === 47 ? 10 : 47), n4 = v2 = m2 = 0, B3++, J2++);
      if (b3 + n4 + v2 + m2 === 0) {
        if (l5 === J2 && (0 < r3 && (f = f.replace(N2, "")), 0 < f.trim().length)) {
          switch (g2) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              f += e7.charAt(l5);
          }
          g2 = 59;
        }
        switch (g2) {
          case 123:
            f = f.trim();
            q2 = f.charCodeAt(0);
            k2 = 1;
            for (t5 = ++l5; l5 < B3; ) {
              switch (g2 = e7.charCodeAt(l5)) {
                case 123:
                  k2++;
                  break;
                case 125:
                  k2--;
                  break;
                case 47:
                  switch (g2 = e7.charCodeAt(l5 + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u3 = l5 + 1; u3 < J2; ++u3) {
                          switch (e7.charCodeAt(u3)) {
                            case 47:
                              if (g2 === 42 && e7.charCodeAt(u3 - 1) === 42 && l5 + 2 !== u3) {
                                l5 = u3 + 1;
                                break a;
                              }
                              break;
                            case 10:
                              if (g2 === 47) {
                                l5 = u3 + 1;
                                break a;
                              }
                          }
                        }
                        l5 = u3;
                      }
                  }
                  break;
                case 91:
                  g2++;
                case 40:
                  g2++;
                case 34:
                case 39:
                  for (; l5++ < J2 && e7.charCodeAt(l5) !== g2; ) {
                  }
              }
              if (k2 === 0)
                break;
              l5++;
            }
            k2 = e7.substring(t5, l5);
            q2 === 0 && (q2 = (f = f.replace(ca, "").trim()).charCodeAt(0));
            switch (q2) {
              case 64:
                0 < r3 && (f = f.replace(N2, ""));
                g2 = f.charCodeAt(1);
                switch (g2) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r3 = c6;
                    break;
                  default:
                    r3 = O;
                }
                k2 = M2(c6, r3, k2, g2, a3 + 1);
                t5 = k2.length;
                0 < A2 && (r3 = X2(O, f, I2), C = H2(3, k2, r3, c6, D2, z2, t5, g2, a3, h3), f = r3.join(""), C !== void 0 && (t5 = (k2 = C.trim()).length) === 0 && (g2 = 0, k2 = ""));
                if (0 < t5)
                  switch (g2) {
                    case 115:
                      f = f.replace(da, ea);
                    case 100:
                    case 109:
                    case 45:
                      k2 = f + "{" + k2 + "}";
                      break;
                    case 107:
                      f = f.replace(fa, "$1 $2");
                      k2 = f + "{" + k2 + "}";
                      k2 = w2 === 1 || w2 === 2 && L2("@" + k2, 3) ? "@-webkit-" + k2 + "@" + k2 : "@" + k2;
                      break;
                    default:
                      k2 = f + k2, h3 === 112 && (k2 = (p2 += k2, ""));
                  }
                else
                  k2 = "";
                break;
              default:
                k2 = M2(c6, X2(c6, f, I2), k2, h3, a3 + 1);
            }
            F3 += k2;
            k2 = I2 = r3 = u3 = q2 = 0;
            f = "";
            g2 = e7.charCodeAt(++l5);
            break;
          case 125:
          case 59:
            f = (0 < r3 ? f.replace(N2, "") : f).trim();
            if (1 < (t5 = f.length))
              switch (u3 === 0 && (q2 = f.charCodeAt(0), q2 === 45 || 96 < q2 && 123 > q2) && (t5 = (f = f.replace(" ", ":")).length), 0 < A2 && (C = H2(1, f, c6, d2, D2, z2, p2.length, h3, a3, h3)) !== void 0 && (t5 = (f = C.trim()).length) === 0 && (f = "\0\0"), q2 = f.charCodeAt(0), g2 = f.charCodeAt(1), q2) {
                case 0:
                  break;
                case 64:
                  if (g2 === 105 || g2 === 99) {
                    G3 += f + e7.charAt(l5);
                    break;
                  }
                default:
                  f.charCodeAt(t5 - 1) !== 58 && (p2 += P2(f, q2, g2, f.charCodeAt(2)));
              }
            I2 = r3 = u3 = q2 = 0;
            f = "";
            g2 = e7.charCodeAt(++l5);
        }
      }
      switch (g2) {
        case 13:
        case 10:
          b3 === 47 ? b3 = 0 : 1 + q2 === 0 && h3 !== 107 && 0 < f.length && (r3 = 1, f += "\0");
          0 < A2 * Y2 && H2(0, f, c6, d2, D2, z2, p2.length, h3, a3, h3);
          z2 = 1;
          D2++;
          break;
        case 59:
        case 125:
          if (b3 + n4 + v2 + m2 === 0) {
            z2++;
            break;
          }
        default:
          z2++;
          y2 = e7.charAt(l5);
          switch (g2) {
            case 9:
            case 32:
              if (n4 + m2 + b3 === 0)
                switch (x2) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    y2 = "";
                    break;
                  default:
                    g2 !== 32 && (y2 = " ");
                }
              break;
            case 0:
              y2 = "\\0";
              break;
            case 12:
              y2 = "\\f";
              break;
            case 11:
              y2 = "\\v";
              break;
            case 38:
              n4 + b3 + m2 === 0 && (r3 = I2 = 1, y2 = "\f" + y2);
              break;
            case 108:
              if (n4 + b3 + m2 + E2 === 0 && 0 < u3)
                switch (l5 - u3) {
                  case 2:
                    x2 === 112 && e7.charCodeAt(l5 - 3) === 58 && (E2 = x2);
                  case 8:
                    K2 === 111 && (E2 = K2);
                }
              break;
            case 58:
              n4 + b3 + m2 === 0 && (u3 = l5);
              break;
            case 44:
              b3 + v2 + n4 + m2 === 0 && (r3 = 1, y2 += "\r");
              break;
            case 34:
            case 39:
              b3 === 0 && (n4 = n4 === g2 ? 0 : n4 === 0 ? g2 : n4);
              break;
            case 91:
              n4 + b3 + v2 === 0 && m2++;
              break;
            case 93:
              n4 + b3 + v2 === 0 && m2--;
              break;
            case 41:
              n4 + b3 + m2 === 0 && v2--;
              break;
            case 40:
              if (n4 + b3 + m2 === 0) {
                if (q2 === 0)
                  switch (2 * x2 + 3 * K2) {
                    case 533:
                      break;
                    default:
                      q2 = 1;
                  }
                v2++;
              }
              break;
            case 64:
              b3 + v2 + n4 + m2 + u3 + k2 === 0 && (k2 = 1);
              break;
            case 42:
            case 47:
              if (!(0 < n4 + m2 + v2))
                switch (b3) {
                  case 0:
                    switch (2 * g2 + 3 * e7.charCodeAt(l5 + 1)) {
                      case 235:
                        b3 = 47;
                        break;
                      case 220:
                        t5 = l5, b3 = 42;
                    }
                    break;
                  case 42:
                    g2 === 47 && x2 === 42 && t5 + 2 !== l5 && (e7.charCodeAt(t5 + 2) === 33 && (p2 += e7.substring(t5, l5 + 1)), y2 = "", b3 = 0);
                }
          }
          b3 === 0 && (f += y2);
      }
      K2 = x2;
      x2 = g2;
      l5++;
    }
    t5 = p2.length;
    if (0 < t5) {
      r3 = c6;
      if (0 < A2 && (C = H2(2, p2, r3, d2, D2, z2, t5, h3, a3, h3), C !== void 0 && (p2 = C).length === 0))
        return G3 + p2 + F3;
      p2 = r3.join(",") + "{" + p2 + "}";
      if (w2 * E2 !== 0) {
        w2 !== 2 || L2(p2, 2) || (E2 = 0);
        switch (E2) {
          case 111:
            p2 = p2.replace(ha, ":-moz-$1") + p2;
            break;
          case 112:
            p2 = p2.replace(Q2, "::-webkit-input-$1") + p2.replace(Q2, "::-moz-$1") + p2.replace(Q2, ":-ms-input-$1") + p2;
        }
        E2 = 0;
      }
    }
    return G3 + p2 + F3;
  }
  function X2(d2, c6, e7) {
    var h3 = c6.trim().split(ia);
    c6 = h3;
    var a3 = h3.length, m2 = d2.length;
    switch (m2) {
      case 0:
      case 1:
        var b3 = 0;
        for (d2 = m2 === 0 ? "" : d2[0] + " "; b3 < a3; ++b3) {
          c6[b3] = Z2(d2, c6[b3], e7).trim();
        }
        break;
      default:
        var v2 = b3 = 0;
        for (c6 = []; b3 < a3; ++b3) {
          for (var n4 = 0; n4 < m2; ++n4) {
            c6[v2++] = Z2(d2[n4] + " ", h3[b3], e7).trim();
          }
        }
    }
    return c6;
  }
  function Z2(d2, c6, e7) {
    var h3 = c6.charCodeAt(0);
    33 > h3 && (h3 = (c6 = c6.trim()).charCodeAt(0));
    switch (h3) {
      case 38:
        return c6.replace(F2, "$1" + d2.trim());
      case 58:
        return d2.trim() + c6.replace(F2, "$1" + d2.trim());
      default:
        if (0 < 1 * e7 && 0 < c6.indexOf("\f"))
          return c6.replace(F2, (d2.charCodeAt(0) === 58 ? "" : "$1") + d2.trim());
    }
    return d2 + c6;
  }
  function P2(d2, c6, e7, h3) {
    var a3 = d2 + ";", m2 = 2 * c6 + 3 * e7 + 4 * h3;
    if (m2 === 944) {
      d2 = a3.indexOf(":", 9) + 1;
      var b3 = a3.substring(d2, a3.length - 1).trim();
      b3 = a3.substring(0, d2).trim() + b3 + ";";
      return w2 === 1 || w2 === 2 && L2(b3, 1) ? "-webkit-" + b3 + b3 : b3;
    }
    if (w2 === 0 || w2 === 2 && !L2(a3, 1))
      return a3;
    switch (m2) {
      case 1015:
        return a3.charCodeAt(10) === 97 ? "-webkit-" + a3 + a3 : a3;
      case 951:
        return a3.charCodeAt(3) === 116 ? "-webkit-" + a3 + a3 : a3;
      case 963:
        return a3.charCodeAt(5) === 110 ? "-webkit-" + a3 + a3 : a3;
      case 1009:
        if (a3.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + a3 + a3;
      case 978:
        return "-webkit-" + a3 + "-moz-" + a3 + a3;
      case 1019:
      case 983:
        return "-webkit-" + a3 + "-moz-" + a3 + "-ms-" + a3 + a3;
      case 883:
        if (a3.charCodeAt(8) === 45)
          return "-webkit-" + a3 + a3;
        if (0 < a3.indexOf("image-set(", 11))
          return a3.replace(ja, "$1-webkit-$2") + a3;
        break;
      case 932:
        if (a3.charCodeAt(4) === 45)
          switch (a3.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + a3.replace("-grow", "") + "-webkit-" + a3 + "-ms-" + a3.replace("grow", "positive") + a3;
            case 115:
              return "-webkit-" + a3 + "-ms-" + a3.replace("shrink", "negative") + a3;
            case 98:
              return "-webkit-" + a3 + "-ms-" + a3.replace("basis", "preferred-size") + a3;
          }
        return "-webkit-" + a3 + "-ms-" + a3 + a3;
      case 964:
        return "-webkit-" + a3 + "-ms-flex-" + a3 + a3;
      case 1023:
        if (a3.charCodeAt(8) !== 99)
          break;
        b3 = a3.substring(a3.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
        return "-webkit-box-pack" + b3 + "-webkit-" + a3 + "-ms-flex-pack" + b3 + a3;
      case 1005:
        return ka.test(a3) ? a3.replace(aa, ":-webkit-") + a3.replace(aa, ":-moz-") + a3 : a3;
      case 1e3:
        b3 = a3.substring(13).trim();
        c6 = b3.indexOf("-") + 1;
        switch (b3.charCodeAt(0) + b3.charCodeAt(c6)) {
          case 226:
            b3 = a3.replace(G2, "tb");
            break;
          case 232:
            b3 = a3.replace(G2, "tb-rl");
            break;
          case 220:
            b3 = a3.replace(G2, "lr");
            break;
          default:
            return a3;
        }
        return "-webkit-" + a3 + "-ms-" + b3 + a3;
      case 1017:
        if (a3.indexOf("sticky", 9) === -1)
          break;
      case 975:
        c6 = (a3 = d2).length - 10;
        b3 = (a3.charCodeAt(c6) === 33 ? a3.substring(0, c6) : a3).substring(d2.indexOf(":", 7) + 1).trim();
        switch (m2 = b3.charCodeAt(0) + (b3.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b3.charCodeAt(8))
              break;
          case 115:
            a3 = a3.replace(b3, "-webkit-" + b3) + ";" + a3;
            break;
          case 207:
          case 102:
            a3 = a3.replace(b3, "-webkit-" + (102 < m2 ? "inline-" : "") + "box") + ";" + a3.replace(b3, "-webkit-" + b3) + ";" + a3.replace(b3, "-ms-" + b3 + "box") + ";" + a3;
        }
        return a3 + ";";
      case 938:
        if (a3.charCodeAt(5) === 45)
          switch (a3.charCodeAt(6)) {
            case 105:
              return b3 = a3.replace("-items", ""), "-webkit-" + a3 + "-webkit-box-" + b3 + "-ms-flex-" + b3 + a3;
            case 115:
              return "-webkit-" + a3 + "-ms-flex-item-" + a3.replace(ba, "") + a3;
            default:
              return "-webkit-" + a3 + "-ms-flex-line-pack" + a3.replace("align-content", "").replace(ba, "") + a3;
          }
        break;
      case 973:
      case 989:
        if (a3.charCodeAt(3) !== 45 || a3.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (la.test(d2) === true)
          return (b3 = d2.substring(d2.indexOf(":") + 1)).charCodeAt(0) === 115 ? P2(d2.replace("stretch", "fill-available"), c6, e7, h3).replace(":fill-available", ":stretch") : a3.replace(b3, "-webkit-" + b3) + a3.replace(b3, "-moz-" + b3.replace("fill-", "")) + a3;
        break;
      case 962:
        if (a3 = "-webkit-" + a3 + (a3.charCodeAt(5) === 102 ? "-ms-" + a3 : "") + a3, e7 + h3 === 211 && a3.charCodeAt(13) === 105 && 0 < a3.indexOf("transform", 10))
          return a3.substring(0, a3.indexOf(";", 27) + 1).replace(ma, "$1-webkit-$2") + a3;
    }
    return a3;
  }
  function L2(d2, c6) {
    var e7 = d2.indexOf(c6 === 1 ? ":" : "{"), h3 = d2.substring(0, c6 !== 3 ? e7 : 10);
    e7 = d2.substring(e7 + 1, d2.length - 1);
    return R2(c6 !== 2 ? h3 : h3.replace(na, "$1"), e7, c6);
  }
  function ea(d2, c6) {
    var e7 = P2(c6, c6.charCodeAt(0), c6.charCodeAt(1), c6.charCodeAt(2));
    return e7 !== c6 + ";" ? e7.replace(oa, " or ($1)").substring(4) : "(" + c6 + ")";
  }
  function H2(d2, c6, e7, h3, a3, m2, b3, v2, n4, q2) {
    for (var g2 = 0, x2 = c6, w3; g2 < A2; ++g2) {
      switch (w3 = S2[g2].call(B2, d2, x2, e7, h3, a3, m2, b3, v2, n4, q2)) {
        case void 0:
        case false:
        case true:
        case null:
          break;
        default:
          x2 = w3;
      }
    }
    if (x2 !== c6)
      return x2;
  }
  function T2(d2) {
    switch (d2) {
      case void 0:
      case null:
        A2 = S2.length = 0;
        break;
      default:
        if (typeof d2 === "function")
          S2[A2++] = d2;
        else if (typeof d2 === "object")
          for (var c6 = 0, e7 = d2.length; c6 < e7; ++c6) {
            T2(d2[c6]);
          }
        else
          Y2 = !!d2 | 0;
    }
    return T2;
  }
  function U2(d2) {
    d2 = d2.prefix;
    d2 !== void 0 && (R2 = null, d2 ? typeof d2 !== "function" ? w2 = 1 : (w2 = 2, R2 = d2) : w2 = 0);
    return U2;
  }
  function B2(d2, c6) {
    var e7 = d2;
    33 > e7.charCodeAt(0) && (e7 = e7.trim());
    V2 = e7;
    e7 = [V2];
    if (0 < A2) {
      var h3 = H2(-1, c6, e7, e7, D2, z2, 0, 0, 0, 0);
      h3 !== void 0 && typeof h3 === "string" && (c6 = h3);
    }
    var a3 = M2(O, e7, c6, 0, 0);
    0 < A2 && (h3 = H2(-2, a3, e7, e7, D2, z2, a3.length, 0, 0, 0), h3 !== void 0 && (a3 = h3));
    V2 = "";
    E2 = 0;
    z2 = D2 = 1;
    return a3;
  }
  var ca = /^\0+/g, N2 = /[\0\r\f]/g, aa = /: */g, ka = /zoo|gra/, ma = /([,: ])(transform)/g, ia = /,\r+?/g, F2 = /([\t\r\n ])*\f?&/g, fa = /@(k\w+)\s*(\S*)\s*/, Q2 = /::(place)/g, ha = /:(read-only)/g, G2 = /[svh]\w+-[tblr]{2}/, da = /\(\s*(.*)\s*\)/g, oa = /([\s\S]*?);/g, ba = /-self|flex-/g, na = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la = /stretch|:\s*\w+\-(?:conte|avail)/, ja = /([^-])(image-set\()/, z2 = 1, D2 = 1, E2 = 0, w2 = 1, O = [], S2 = [], A2 = 0, R2 = null, Y2 = 0, V2 = "";
  B2.use = T2;
  B2.set = U2;
  W2 !== void 0 && U2(W2);
  return B2;
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
function v() {
  return (v = Object.assign || function(e7) {
    for (var t5 = 1; t5 < arguments.length; t5++) {
      var n4 = arguments[t5];
      for (var r3 in n4)
        Object.prototype.hasOwnProperty.call(n4, r3) && (e7[r3] = n4[r3]);
    }
    return e7;
  }).apply(this, arguments);
}
var g = function(e7, t5) {
  for (var n4 = [e7[0]], r3 = 0, o5 = t5.length; r3 < o5; r3 += 1)
    n4.push(t5[r3], e7[r3 + 1]);
  return n4;
};
var S = function(t5) {
  return t5 !== null && typeof t5 == "object" && (t5.toString ? t5.toString() : Object.prototype.toString.call(t5)) === "[object Object]" && !(0, import_react_is.typeOf)(t5);
};
var w = Object.freeze([]);
var E = Object.freeze({});
function b(e7) {
  return typeof e7 == "function";
}
function _(e7) {
  return typeof e7 == "string" && e7 || e7.displayName || e7.name || "Component";
}
function N(e7) {
  return e7 && typeof e7.styledComponentId == "string";
}
var A = typeof process != "undefined" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled";
var I = typeof window != "undefined" && "HTMLElement" in window;
var P = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : true);
var R = true ? { 1: "Cannot create styled-component for component: %s.\n\n", 2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n", 3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n", 4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n", 5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n", 6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n", 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: 'ThemeProvider: Please make your "theme" prop an object.\n\n', 9: "Missing document `<head>`\n\n", 10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n", 11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n", 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n", 14: 'ThemeProvider: "theme" prop is required.\n\n', 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n", 17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n" } : {};
function D() {
  for (var e7 = arguments.length <= 0 ? void 0 : arguments[0], t5 = [], n4 = 1, r3 = arguments.length; n4 < r3; n4 += 1)
    t5.push(n4 < 0 || arguments.length <= n4 ? void 0 : arguments[n4]);
  return t5.forEach(function(t6) {
    e7 = e7.replace(/%[a-z]/, t6);
  }), e7;
}
function j(e7) {
  for (var t5 = arguments.length, n4 = new Array(t5 > 1 ? t5 - 1 : 0), r3 = 1; r3 < t5; r3++)
    n4[r3 - 1] = arguments[r3];
  throw false ? new Error("An error occurred. See https://git.io/JUIaE#" + e7 + " for more information." + (n4.length > 0 ? " Args: " + n4.join(", ") : "")) : new Error(D.apply(void 0, [R[e7]].concat(n4)).trim());
}
var T = function() {
  function e7(e8) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e8;
  }
  var t5 = e7.prototype;
  return t5.indexOfGroup = function(e8) {
    for (var t6 = 0, n4 = 0; n4 < e8; n4++)
      t6 += this.groupSizes[n4];
    return t6;
  }, t5.insertRules = function(e8, t6) {
    if (e8 >= this.groupSizes.length) {
      for (var n4 = this.groupSizes, r3 = n4.length, o5 = r3; e8 >= o5; )
        (o5 <<= 1) < 0 && j(16, "" + e8);
      this.groupSizes = new Uint32Array(o5), this.groupSizes.set(n4), this.length = o5;
      for (var s3 = r3; s3 < o5; s3++)
        this.groupSizes[s3] = 0;
    }
    for (var i4 = this.indexOfGroup(e8 + 1), a3 = 0, c6 = t6.length; a3 < c6; a3++)
      this.tag.insertRule(i4, t6[a3]) && (this.groupSizes[e8]++, i4++);
  }, t5.clearGroup = function(e8) {
    if (e8 < this.length) {
      var t6 = this.groupSizes[e8], n4 = this.indexOfGroup(e8), r3 = n4 + t6;
      this.groupSizes[e8] = 0;
      for (var o5 = n4; o5 < r3; o5++)
        this.tag.deleteRule(n4);
    }
  }, t5.getGroup = function(e8) {
    var t6 = "";
    if (e8 >= this.length || this.groupSizes[e8] === 0)
      return t6;
    for (var n4 = this.groupSizes[e8], r3 = this.indexOfGroup(e8), o5 = r3 + n4, s3 = r3; s3 < o5; s3++)
      t6 += this.tag.getRule(s3) + "/*!sc*/\n";
    return t6;
  }, e7;
}();
var k = /* @__PURE__ */ new Map();
var x = /* @__PURE__ */ new Map();
var V = 1;
var B = function(e7) {
  if (k.has(e7))
    return k.get(e7);
  for (; x.has(V); )
    V++;
  var t5 = V++;
  return ((0 | t5) < 0 || t5 > 1 << 30) && j(16, "" + t5), k.set(e7, t5), x.set(t5, e7), t5;
};
var M = function(e7) {
  return x.get(e7);
};
var z = function(e7, t5) {
  k.set(e7, t5), x.set(t5, e7);
};
var L = "style[" + A + '][data-styled-version="5.2.1"]';
var G = new RegExp("^" + A + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)');
var F = function(e7, t5, n4) {
  for (var r3, o5 = n4.split(","), s3 = 0, i4 = o5.length; s3 < i4; s3++)
    (r3 = o5[s3]) && e7.registerName(t5, r3);
};
var Y = function(e7, t5) {
  for (var n4 = t5.innerHTML.split("/*!sc*/\n"), r3 = [], o5 = 0, s3 = n4.length; o5 < s3; o5++) {
    var i4 = n4[o5].trim();
    if (i4) {
      var a3 = i4.match(G);
      if (a3) {
        var c6 = 0 | parseInt(a3[1], 10), u3 = a3[2];
        c6 !== 0 && (z(u3, c6), F(e7, u3, a3[3]), e7.getTag().insertRules(c6, r3)), r3.length = 0;
      } else
        r3.push(i4);
    }
  }
};
var q = function() {
  return typeof __webpack_nonce__ != "undefined" ? __webpack_nonce__ : null;
};
var H = function(e7) {
  var t5 = document.head, n4 = e7 || t5, r3 = document.createElement("style"), o5 = function(e8) {
    for (var t6 = e8.childNodes, n5 = t6.length; n5 >= 0; n5--) {
      var r4 = t6[n5];
      if (r4 && r4.nodeType === 1 && r4.hasAttribute(A))
        return r4;
    }
  }(n4), s3 = o5 !== void 0 ? o5.nextSibling : null;
  r3.setAttribute(A, "active"), r3.setAttribute("data-styled-version", "5.2.1");
  var i4 = q();
  return i4 && r3.setAttribute("nonce", i4), n4.insertBefore(r3, s3), r3;
};
var $ = function() {
  function e7(e8) {
    var t6 = this.element = H(e8);
    t6.appendChild(document.createTextNode("")), this.sheet = function(e9) {
      if (e9.sheet)
        return e9.sheet;
      for (var t7 = document.styleSheets, n4 = 0, r3 = t7.length; n4 < r3; n4++) {
        var o5 = t7[n4];
        if (o5.ownerNode === e9)
          return o5;
      }
      j(17);
    }(t6), this.length = 0;
  }
  var t5 = e7.prototype;
  return t5.insertRule = function(e8, t6) {
    try {
      return this.sheet.insertRule(t6, e8), this.length++, true;
    } catch (e9) {
      return false;
    }
  }, t5.deleteRule = function(e8) {
    this.sheet.deleteRule(e8), this.length--;
  }, t5.getRule = function(e8) {
    var t6 = this.sheet.cssRules[e8];
    return t6 !== void 0 && typeof t6.cssText == "string" ? t6.cssText : "";
  }, e7;
}();
var W = function() {
  function e7(e8) {
    var t6 = this.element = H(e8);
    this.nodes = t6.childNodes, this.length = 0;
  }
  var t5 = e7.prototype;
  return t5.insertRule = function(e8, t6) {
    if (e8 <= this.length && e8 >= 0) {
      var n4 = document.createTextNode(t6), r3 = this.nodes[e8];
      return this.element.insertBefore(n4, r3 || null), this.length++, true;
    }
    return false;
  }, t5.deleteRule = function(e8) {
    this.element.removeChild(this.nodes[e8]), this.length--;
  }, t5.getRule = function(e8) {
    return e8 < this.length ? this.nodes[e8].textContent : "";
  }, e7;
}();
var U = function() {
  function e7(e8) {
    this.rules = [], this.length = 0;
  }
  var t5 = e7.prototype;
  return t5.insertRule = function(e8, t6) {
    return e8 <= this.length && (this.rules.splice(e8, 0, t6), this.length++, true);
  }, t5.deleteRule = function(e8) {
    this.rules.splice(e8, 1), this.length--;
  }, t5.getRule = function(e8) {
    return e8 < this.length ? this.rules[e8] : "";
  }, e7;
}();
var J = I;
var X = { isServer: !I, useCSSOMInjection: !P };
var Z = function() {
  function e7(e8, t6, n4) {
    e8 === void 0 && (e8 = E), t6 === void 0 && (t6 = {}), this.options = v({}, X, {}, e8), this.gs = t6, this.names = new Map(n4), !this.options.isServer && I && J && (J = false, function(e9) {
      for (var t7 = document.querySelectorAll(L), n5 = 0, r3 = t7.length; n5 < r3; n5++) {
        var o5 = t7[n5];
        o5 && o5.getAttribute(A) !== "active" && (Y(e9, o5), o5.parentNode && o5.parentNode.removeChild(o5));
      }
    }(this));
  }
  e7.registerId = function(e8) {
    return B(e8);
  };
  var t5 = e7.prototype;
  return t5.reconstructWithOptions = function(t6, n4) {
    return n4 === void 0 && (n4 = true), new e7(v({}, this.options, {}, t6), this.gs, n4 && this.names || void 0);
  }, t5.allocateGSInstance = function(e8) {
    return this.gs[e8] = (this.gs[e8] || 0) + 1;
  }, t5.getTag = function() {
    return this.tag || (this.tag = (n4 = (t6 = this.options).isServer, r3 = t6.useCSSOMInjection, o5 = t6.target, e8 = n4 ? new U(o5) : r3 ? new $(o5) : new W(o5), new T(e8)));
    var e8, t6, n4, r3, o5;
  }, t5.hasNameForId = function(e8, t6) {
    return this.names.has(e8) && this.names.get(e8).has(t6);
  }, t5.registerName = function(e8, t6) {
    if (B(e8), this.names.has(e8))
      this.names.get(e8).add(t6);
    else {
      var n4 = /* @__PURE__ */ new Set();
      n4.add(t6), this.names.set(e8, n4);
    }
  }, t5.insertRules = function(e8, t6, n4) {
    this.registerName(e8, t6), this.getTag().insertRules(B(e8), n4);
  }, t5.clearNames = function(e8) {
    this.names.has(e8) && this.names.get(e8).clear();
  }, t5.clearRules = function(e8) {
    this.getTag().clearGroup(B(e8)), this.clearNames(e8);
  }, t5.clearTag = function() {
    this.tag = void 0;
  }, t5.toString = function() {
    return function(e8) {
      for (var t6 = e8.getTag(), n4 = t6.length, r3 = "", o5 = 0; o5 < n4; o5++) {
        var s3 = M(o5);
        if (s3 !== void 0) {
          var i4 = e8.names.get(s3), a3 = t6.getGroup(o5);
          if (i4 !== void 0 && a3.length !== 0) {
            var c6 = A + ".g" + o5 + '[id="' + s3 + '"]', u3 = "";
            i4 !== void 0 && i4.forEach(function(e9) {
              e9.length > 0 && (u3 += e9 + ",");
            }), r3 += "" + a3 + c6 + '{content:"' + u3 + '"}/*!sc*/\n';
          }
        }
      }
      return r3;
    }(this);
  }, e7;
}();
var K = /(a)(d)/gi;
var Q = function(e7) {
  return String.fromCharCode(e7 + (e7 > 25 ? 39 : 97));
};
function ee(e7) {
  var t5, n4 = "";
  for (t5 = Math.abs(e7); t5 > 52; t5 = t5 / 52 | 0)
    n4 = Q(t5 % 52) + n4;
  return (Q(t5 % 52) + n4).replace(K, "$1-$2");
}
var te = function(e7, t5) {
  for (var n4 = t5.length; n4; )
    e7 = 33 * e7 ^ t5.charCodeAt(--n4);
  return e7;
};
var ne = function(e7) {
  return te(5381, e7);
};
function re(e7) {
  for (var t5 = 0; t5 < e7.length; t5 += 1) {
    var n4 = e7[t5];
    if (b(n4) && !N(n4))
      return false;
  }
  return true;
}
var oe = ne("5.2.1");
var se = function() {
  function e7(e8, t5, n4) {
    this.rules = e8, this.staticRulesId = "", this.isStatic = false, this.componentId = t5, this.baseHash = te(oe, t5), this.baseStyle = n4, Z.registerId(t5);
  }
  return e7.prototype.generateAndInjectStyles = function(e8, t5, n4) {
    var r3 = this.componentId, o5 = [];
    if (this.baseStyle && o5.push(this.baseStyle.generateAndInjectStyles(e8, t5, n4)), this.isStatic && !n4.hash)
      if (this.staticRulesId && t5.hasNameForId(r3, this.staticRulesId))
        o5.push(this.staticRulesId);
      else {
        var s3 = Ne(this.rules, e8, t5, n4).join(""), i4 = ee(te(this.baseHash, s3.length) >>> 0);
        if (!t5.hasNameForId(r3, i4)) {
          var a3 = n4(s3, "." + i4, void 0, r3);
          t5.insertRules(r3, i4, a3);
        }
        o5.push(i4), this.staticRulesId = i4;
      }
    else {
      for (var c6 = this.rules.length, u3 = te(this.baseHash, n4.hash), l5 = "", d2 = 0; d2 < c6; d2++) {
        var h3 = this.rules[d2];
        if (typeof h3 == "string")
          l5 += h3, u3 = te(u3, h3 + d2);
        else if (h3) {
          var p2 = Ne(h3, e8, t5, n4), f = Array.isArray(p2) ? p2.join("") : p2;
          u3 = te(u3, f + d2), l5 += f;
        }
      }
      if (l5) {
        var m2 = ee(u3 >>> 0);
        if (!t5.hasNameForId(r3, m2)) {
          var y2 = n4(l5, "." + m2, void 0, r3);
          t5.insertRules(r3, m2, y2);
        }
        o5.push(m2);
      }
    }
    return o5.join(" ");
  }, e7;
}();
var ie = /^\s*\/\/.*$/gm;
var ae = [":", "[", ".", "#"];
function ce(e7) {
  var t5, n4, r3, o5, s3 = e7 === void 0 ? E : e7, i4 = s3.options, a3 = i4 === void 0 ? E : i4, c6 = s3.plugins, u3 = c6 === void 0 ? w : c6, l5 = new stylis_browser_esm_default(a3), d2 = [], h3 = function(e8) {
    function t6(t7) {
      if (t7)
        try {
          e8(t7 + "}");
        } catch (e9) {
        }
    }
    return function(n5, r4, o6, s4, i5, a4, c7, u4, l6, d3) {
      switch (n5) {
        case 1:
          if (l6 === 0 && r4.charCodeAt(0) === 64)
            return e8(r4 + ";"), "";
          break;
        case 2:
          if (u4 === 0)
            return r4 + "/*|*/";
          break;
        case 3:
          switch (u4) {
            case 102:
            case 112:
              return e8(o6[0] + r4), "";
            default:
              return r4 + (d3 === 0 ? "/*|*/" : "");
          }
        case -2:
          r4.split("/*|*/}").forEach(t6);
      }
    };
  }(function(e8) {
    d2.push(e8);
  }), f = function(e8, r4, s4) {
    return r4 === 0 && ae.includes(s4[n4.length]) || s4.match(o5) ? e8 : "." + t5;
  };
  function m2(e8, s4, i5, a4) {
    a4 === void 0 && (a4 = "&");
    var c7 = e8.replace(ie, ""), u4 = s4 && i5 ? i5 + " " + s4 + " { " + c7 + " }" : c7;
    return t5 = a4, n4 = s4, r3 = new RegExp("\\" + n4 + "\\b", "g"), o5 = new RegExp("(\\" + n4 + "\\b){2,}"), l5(i5 || !s4 ? "" : s4, u4);
  }
  return l5.use([].concat(u3, [function(e8, t6, o6) {
    e8 === 2 && o6.length && o6[0].lastIndexOf(n4) > 0 && (o6[0] = o6[0].replace(r3, f));
  }, h3, function(e8) {
    if (e8 === -2) {
      var t6 = d2;
      return d2 = [], t6;
    }
  }])), m2.hash = u3.length ? u3.reduce(function(e8, t6) {
    return t6.name || j(15), te(e8, t6.name);
  }, 5381).toString() : "", m2;
}
var ue = import_react16.default.createContext();
var le = ue.Consumer;
var de = import_react16.default.createContext();
var he = (de.Consumer, new Z());
var pe = ce();
function fe() {
  return (0, import_react16.useContext)(ue) || he;
}
function me() {
  return (0, import_react16.useContext)(de) || pe;
}
function ye(e7) {
  var t5 = (0, import_react16.useState)(e7.stylisPlugins), n4 = t5[0], s3 = t5[1], c6 = fe(), u3 = (0, import_react16.useMemo)(function() {
    var t6 = c6;
    return e7.sheet ? t6 = e7.sheet : e7.target && (t6 = t6.reconstructWithOptions({ target: e7.target }, false)), e7.disableCSSOMInjection && (t6 = t6.reconstructWithOptions({ useCSSOMInjection: false })), t6;
  }, [e7.disableCSSOMInjection, e7.sheet, e7.target]), l5 = (0, import_react16.useMemo)(function() {
    return ce({ options: { prefix: !e7.disableVendorPrefixes }, plugins: n4 });
  }, [e7.disableVendorPrefixes, n4]);
  return (0, import_react16.useEffect)(function() {
    (0, import_shallowequal.default)(n4, e7.stylisPlugins) || s3(e7.stylisPlugins);
  }, [e7.stylisPlugins]), import_react16.default.createElement(ue.Provider, { value: u3 }, import_react16.default.createElement(de.Provider, { value: l5 }, true ? import_react16.default.Children.only(e7.children) : e7.children));
}
var ve = function() {
  function e7(e8, t5) {
    var n4 = this;
    this.inject = function(e9, t6) {
      t6 === void 0 && (t6 = pe);
      var r3 = n4.name + t6.hash;
      e9.hasNameForId(n4.id, r3) || e9.insertRules(n4.id, r3, t6(n4.rules, r3, "@keyframes"));
    }, this.toString = function() {
      return j(12, String(n4.name));
    }, this.name = e8, this.id = "sc-keyframes-" + e8, this.rules = t5;
  }
  return e7.prototype.getName = function(e8) {
    return e8 === void 0 && (e8 = pe), this.name + e8.hash;
  }, e7;
}();
var ge = /([A-Z])/;
var Se = /([A-Z])/g;
var we = /^ms-/;
var Ee = function(e7) {
  return "-" + e7.toLowerCase();
};
function be(e7) {
  return ge.test(e7) ? e7.replace(Se, Ee).replace(we, "-ms-") : e7;
}
var _e = function(e7) {
  return e7 == null || e7 === false || e7 === "";
};
function Ne(e7, n4, r3, o5) {
  if (Array.isArray(e7)) {
    for (var s3, i4 = [], a3 = 0, c6 = e7.length; a3 < c6; a3 += 1)
      (s3 = Ne(e7[a3], n4, r3, o5)) !== "" && (Array.isArray(s3) ? i4.push.apply(i4, s3) : i4.push(s3));
    return i4;
  }
  if (_e(e7))
    return "";
  if (N(e7))
    return "." + e7.styledComponentId;
  if (b(e7)) {
    if (typeof (l5 = e7) != "function" || l5.prototype && l5.prototype.isReactComponent || !n4)
      return e7;
    var u3 = e7(n4);
    return (0, import_react_is.isElement)(u3) && console.warn(_(e7) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ne(u3, n4, r3, o5);
  }
  var l5;
  return e7 instanceof ve ? r3 ? (e7.inject(r3, o5), e7.getName(o5)) : e7 : S(e7) ? function e8(t5, n5) {
    var r4, o6, s4 = [];
    for (var i5 in t5)
      t5.hasOwnProperty(i5) && !_e(t5[i5]) && (S(t5[i5]) ? s4.push.apply(s4, e8(t5[i5], i5)) : b(t5[i5]) ? s4.push(be(i5) + ":", t5[i5], ";") : s4.push(be(i5) + ": " + (r4 = i5, (o6 = t5[i5]) == null || typeof o6 == "boolean" || o6 === "" ? "" : typeof o6 != "number" || o6 === 0 || r4 in unitless_browser_esm_default ? String(o6).trim() : o6 + "px") + ";"));
    return n5 ? [n5 + " {"].concat(s4, ["}"]) : s4;
  }(e7) : e7.toString();
}
function Ae(e7) {
  for (var t5 = arguments.length, n4 = new Array(t5 > 1 ? t5 - 1 : 0), r3 = 1; r3 < t5; r3++)
    n4[r3 - 1] = arguments[r3];
  return b(e7) || S(e7) ? Ne(g(w, [e7].concat(n4))) : n4.length === 0 && e7.length === 1 && typeof e7[0] == "string" ? e7 : Ne(g(e7, n4));
}
var Ce = /invalid hook call/i;
var Ie = /* @__PURE__ */ new Set();
var Pe = function(e7, t5) {
  if (true) {
    var n4 = "The component " + e7 + (t5 ? ' with the id of "' + t5 + '"' : "") + " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";
    try {
      (0, import_react16.useRef)(), Ie.has(n4) || (console.warn(n4), Ie.add(n4));
    } catch (e8) {
      Ce.test(e8.message) && Ie.delete(n4);
    }
  }
};
var Oe = function(e7, t5, n4) {
  return n4 === void 0 && (n4 = E), e7.theme !== n4.theme && e7.theme || t5 || n4.theme;
};
var Re = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var De = /(^-|-$)/g;
function je(e7) {
  return e7.replace(Re, "-").replace(De, "");
}
var Te = function(e7) {
  return ee(ne(e7) >>> 0);
};
function ke(e7) {
  return typeof e7 == "string" && e7.charAt(0) === e7.charAt(0).toLowerCase();
}
var xe = function(e7) {
  return typeof e7 == "function" || typeof e7 == "object" && e7 !== null && !Array.isArray(e7);
};
var Ve = function(e7) {
  return e7 !== "__proto__" && e7 !== "constructor" && e7 !== "prototype";
};
function Be(e7, t5, n4) {
  var r3 = e7[n4];
  xe(t5) && xe(r3) ? Me(r3, t5) : e7[n4] = t5;
}
function Me(e7) {
  for (var t5 = arguments.length, n4 = new Array(t5 > 1 ? t5 - 1 : 0), r3 = 1; r3 < t5; r3++)
    n4[r3 - 1] = arguments[r3];
  for (var o5 = 0, s3 = n4; o5 < s3.length; o5++) {
    var i4 = s3[o5];
    if (xe(i4))
      for (var a3 in i4)
        Ve(a3) && Be(e7, i4[a3], a3);
  }
  return e7;
}
var ze = import_react16.default.createContext();
var Le = ze.Consumer;
var Fe = {};
function Ye(e7, t5, n4) {
  var o5 = N(e7), i4 = !ke(e7), a3 = t5.attrs, c6 = a3 === void 0 ? w : a3, d2 = t5.componentId, h3 = d2 === void 0 ? function(e8, t6) {
    var n5 = typeof e8 != "string" ? "sc" : je(e8);
    Fe[n5] = (Fe[n5] || 0) + 1;
    var r3 = n5 + "-" + Te("5.2.1" + n5 + Fe[n5]);
    return t6 ? t6 + "-" + r3 : r3;
  }(t5.displayName, t5.parentComponentId) : d2, p2 = t5.displayName, f = p2 === void 0 ? function(e8) {
    return ke(e8) ? "styled." + e8 : "Styled(" + _(e8) + ")";
  }(e7) : p2, g2 = t5.displayName && t5.componentId ? je(t5.displayName) + "-" + t5.componentId : t5.componentId || h3, S2 = o5 && e7.attrs ? Array.prototype.concat(e7.attrs, c6).filter(Boolean) : c6, A2 = t5.shouldForwardProp;
  o5 && e7.shouldForwardProp && (A2 = t5.shouldForwardProp ? function(n5, r3) {
    return e7.shouldForwardProp(n5, r3) && t5.shouldForwardProp(n5, r3);
  } : e7.shouldForwardProp);
  var C, I2 = new se(n4, g2, o5 ? e7.componentStyle : void 0), P2 = I2.isStatic && c6.length === 0, O = function(e8, t6) {
    return function(e9, t7, n5, r3) {
      var o6 = e9.attrs, i5 = e9.componentStyle, a4 = e9.defaultProps, c7 = e9.foldedComponentIds, d3 = e9.shouldForwardProp, h4 = e9.styledComponentId, p3 = e9.target;
      (0, import_react16.useDebugValue)(h4);
      var f2 = function(e10, t8, n6) {
        e10 === void 0 && (e10 = E);
        var r4 = v({}, t8, { theme: e10 }), o7 = {};
        return n6.forEach(function(e11) {
          var t9, n7, s3, i6 = e11;
          for (t9 in b(i6) && (i6 = i6(r4)), i6)
            r4[t9] = o7[t9] = t9 === "className" ? (n7 = o7[t9], s3 = i6[t9], n7 && s3 ? n7 + " " + s3 : n7 || s3) : i6[t9];
        }), [r4, o7];
      }(Oe(t7, (0, import_react16.useContext)(ze), a4) || E, t7, o6), y2 = f2[0], g3 = f2[1], S3 = function(e10, t8, n6, r4) {
        var o7 = fe(), s3 = me(), i6 = t8 ? e10.generateAndInjectStyles(E, o7, s3) : e10.generateAndInjectStyles(n6, o7, s3);
        return (0, import_react16.useDebugValue)(i6), !t8 && r4 && r4(i6), i6;
      }(i5, r3, y2, true ? e9.warnTooManyClasses : void 0), w2 = n5, _2 = g3.$as || t7.$as || g3.as || t7.as || p3, N2 = ke(_2), A3 = g3 !== t7 ? v({}, t7, {}, g3) : t7, C2 = {};
      for (var I3 in A3)
        I3[0] !== "$" && I3 !== "as" && (I3 === "forwardedAs" ? C2.as = A3[I3] : (d3 ? d3(I3, is_prop_valid_browser_esm_default) : !N2 || is_prop_valid_browser_esm_default(I3)) && (C2[I3] = A3[I3]));
      return t7.style && g3.style !== t7.style && (C2.style = v({}, t7.style, {}, g3.style)), C2.className = Array.prototype.concat(c7, h4, S3 !== h4 ? S3 : null, t7.className, g3.className).filter(Boolean).join(" "), C2.ref = w2, (0, import_react16.createElement)(_2, C2);
    }(C, e8, t6, P2);
  };
  return O.displayName = f, (C = import_react16.default.forwardRef(O)).attrs = S2, C.componentStyle = I2, C.displayName = f, C.shouldForwardProp = A2, C.foldedComponentIds = o5 ? Array.prototype.concat(e7.foldedComponentIds, e7.styledComponentId) : w, C.styledComponentId = g2, C.target = o5 ? e7.target : e7, C.withComponent = function(e8) {
    var r3 = t5.componentId, o6 = function(e9, t6) {
      if (e9 == null)
        return {};
      var n5, r4, o7 = {}, s4 = Object.keys(e9);
      for (r4 = 0; r4 < s4.length; r4++)
        n5 = s4[r4], t6.indexOf(n5) >= 0 || (o7[n5] = e9[n5]);
      return o7;
    }(t5, ["componentId"]), s3 = r3 && r3 + "-" + (ke(e8) ? e8 : je(_(e8)));
    return Ye(e8, v({}, o6, { attrs: S2, componentId: s3 }), n4);
  }, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(t6) {
    this._foldedDefaultProps = o5 ? Me({}, e7.defaultProps, t6) : t6;
  } }), Pe(f, g2), C.warnTooManyClasses = function(e8, t6) {
    var n5 = {}, r3 = false;
    return function(o6) {
      if (!r3 && (n5[o6] = true, Object.keys(n5).length >= 200)) {
        var s3 = t6 ? ' with the id of "' + t6 + '"' : "";
        console.warn("Over 200 classes were generated for component " + e8 + s3 + ".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), r3 = true, n5 = {};
      }
    };
  }(f, g2), C.toString = function() {
    return "." + C.styledComponentId;
  }, i4 && (0, import_hoist_non_react_statics.default)(C, e7, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true, withComponent: true }), C;
}
var qe = function(e7) {
  return function e8(t5, r3, o5) {
    if (o5 === void 0 && (o5 = E), !(0, import_react_is.isValidElementType)(r3))
      return j(1, String(r3));
    var s3 = function() {
      return t5(r3, o5, Ae.apply(void 0, arguments));
    };
    return s3.withConfig = function(n4) {
      return e8(t5, r3, v({}, o5, {}, n4));
    }, s3.attrs = function(n4) {
      return e8(t5, r3, v({}, o5, { attrs: Array.prototype.concat(o5.attrs, n4).filter(Boolean) }));
    }, s3;
  }(Ye, e7);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach(function(e7) {
  qe[e7] = qe(e7);
});
var He = function() {
  function e7(e8, t6) {
    this.rules = e8, this.componentId = t6, this.isStatic = re(e8), Z.registerId(this.componentId + 1);
  }
  var t5 = e7.prototype;
  return t5.createStyles = function(e8, t6, n4, r3) {
    var o5 = r3(Ne(this.rules, t6, n4, r3).join(""), ""), s3 = this.componentId + e8;
    n4.insertRules(s3, s3, o5);
  }, t5.removeStyles = function(e8, t6) {
    t6.clearRules(this.componentId + e8);
  }, t5.renderStyles = function(e8, t6, n4, r3) {
    e8 > 2 && Z.registerId(this.componentId + e8), this.removeStyles(e8, n4), this.createStyles(e8, t6, n4, r3);
  }, e7;
}();
var Ue = function() {
  function e7() {
    var e8 = this;
    this._emitSheetCSS = function() {
      var t6 = e8.instance.toString(), n4 = q();
      return "<style " + [n4 && 'nonce="' + n4 + '"', A + '="true"', 'data-styled-version="5.2.1"'].filter(Boolean).join(" ") + ">" + t6 + "</style>";
    }, this.getStyleTags = function() {
      return e8.sealed ? j(2) : e8._emitSheetCSS();
    }, this.getStyleElement = function() {
      var t6;
      if (e8.sealed)
        return j(2);
      var n4 = ((t6 = {})[A] = "", t6["data-styled-version"] = "5.2.1", t6.dangerouslySetInnerHTML = { __html: e8.instance.toString() }, t6), o5 = q();
      return o5 && (n4.nonce = o5), [import_react16.default.createElement("style", v({}, n4, { key: "sc-0-0" }))];
    }, this.seal = function() {
      e8.sealed = true;
    }, this.instance = new Z({ isServer: true }), this.sealed = false;
  }
  var t5 = e7.prototype;
  return t5.collectStyles = function(e8) {
    return this.sealed ? j(2) : import_react16.default.createElement(ye, { sheet: this.instance }, e8);
  }, t5.interleaveWithNodeStream = function(e8) {
    return j(3);
  }, e7;
}();
typeof navigator != "undefined" && navigator.product === "ReactNative" && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window["__styled-components-init__"] += 1;
var styled_components_browser_esm_default = qe;

// app/common/ui-elements/library/divider/divider.tsx
var Divider = styled_components_browser_esm_default(Root)`
  ${({ orientation }) => orientation === "vertical" ? `
    width: 2px;
    height: 100%;
  ` : `
    height: 2px;
    width: 100%;
  `};

  background: radial-gradient(
    circle,
    ${(props) => props.color} 0%,
    ${(props) => props.highlightColor ? curriedTransparentize$1(1, props.highlightColor) : curriedTransparentize$1(1, "rgba(189, 189, 189, 1)")}
      100%
  );
`;

// node_modules/@radix-ui/react-use-previous/dist/index.module.js
init_react();
var e3 = __toESM(require_react());
function usePrevious(r3) {
  const u3 = e3.useRef({ value: r3, previous: r3 });
  return e3.useMemo(() => (u3.current.value !== r3 && (u3.current.previous = u3.current.value, u3.current.value = r3), u3.current.previous), [r3]);
}

// node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js
init_react();

// node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js
init_react();
var e4 = __toESM(require_react());
function useCallbackRef(r3) {
  const t5 = e4.useRef(r3);
  return e4.useEffect(() => {
    t5.current = r3;
  }), e4.useMemo(() => (...e7) => {
    var r4;
    return (r4 = t5.current) === null || r4 === void 0 ? void 0 : r4.call(t5, ...e7);
  }, []);
}

// node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js
var t3 = __toESM(require_react());
function useControllableState({ prop: o5, defaultProp: r3, onChange: n4 = () => {
} }) {
  const [a3, u3] = function({ defaultProp: o6, onChange: r4 }) {
    const n5 = t3.useState(o6), [a4] = n5, u4 = t3.useRef(a4), c7 = useCallbackRef(r4);
    return t3.useEffect(() => {
      u4.current !== a4 && (c7(a4), u4.current = a4);
    }, [a4, u4, c7]), n5;
  }({ defaultProp: r3, onChange: n4 }), c6 = o5 !== void 0, f = c6 ? o5 : a3, l5 = useCallbackRef(n4);
  return [f, t3.useCallback((e7) => {
    if (c6) {
      const t5 = e7, r4 = typeof e7 == "function" ? t5(o5) : e7;
      r4 !== o5 && l5(r4);
    } else
      u3(e7);
  }, [c6, o5, u3, l5])];
}

// node_modules/@radix-ui/react-label/dist/index.module.js
init_react();

// node_modules/@radix-ui/react-context/dist/index.module.js
init_react();
var e5 = __toESM(require_react());
function createContext3(t5, n4) {
  const o5 = /* @__PURE__ */ e5.createContext(n4);
  function r3(t6) {
    const { children: n5, ...r4 } = t6, c6 = e5.useMemo(() => r4, Object.values(r4));
    return e5.createElement(o5.Provider, { value: c6 }, n5);
  }
  return r3.displayName = t5 + "Provider", [r3, function(r4) {
    const c6 = e5.useContext(o5);
    if (c6)
      return c6;
    if (n4 !== void 0)
      return n4;
    throw new Error(`\`${r4}\` must be used within \`${t5}\``);
  }];
}
function createContextScope(n4, o5 = []) {
  let r3 = [];
  const c6 = () => {
    const t5 = r3.map((t6) => /* @__PURE__ */ e5.createContext(t6));
    return function(o6) {
      const r4 = (o6 == null ? void 0 : o6[n4]) || t5;
      return e5.useMemo(() => ({ [`__scope${n4}`]: { ...o6, [n4]: r4 } }), [o6, r4]);
    };
  };
  return c6.scopeName = n4, [function(t5, o6) {
    const c7 = /* @__PURE__ */ e5.createContext(o6), u3 = r3.length;
    function s3(t6) {
      const { scope: o7, children: r4, ...s4 } = t6, i4 = (o7 == null ? void 0 : o7[n4][u3]) || c7, a3 = e5.useMemo(() => s4, Object.values(s4));
      return e5.createElement(i4.Provider, { value: a3 }, r4);
    }
    return r3 = [...r3, o6], s3.displayName = t5 + "Provider", [s3, function(r4, s4) {
      const i4 = (s4 == null ? void 0 : s4[n4][u3]) || c7, a3 = e5.useContext(i4);
      if (a3)
        return a3;
      if (o6 !== void 0)
        return o6;
      throw new Error(`\`${r4}\` must be used within \`${t5}\``);
    }];
  }, t4(c6, ...o5)];
}
function t4(...t5) {
  const n4 = t5[0];
  if (t5.length === 1)
    return n4;
  const o5 = () => {
    const o6 = t5.map((e7) => ({ useScope: e7(), scopeName: e7.scopeName }));
    return function(t6) {
      const r3 = o6.reduce((e7, { useScope: n5, scopeName: o7 }) => ({ ...e7, ...n5(t6)[`__scope${o7}`] }), {});
      return e5.useMemo(() => ({ [`__scope${n4.scopeName}`]: r3 }), [r3]);
    };
  };
  return o5.scopeName = n4.scopeName, o5;
}

// node_modules/@radix-ui/react-label/dist/index.module.js
var l3 = __toESM(require_react());
var [i3, a2] = createContext3("Label", { id: void 0, controlRef: { current: null } });
var useLabelContext = (e7) => {
  const t5 = a2("LabelConsumer"), { controlRef: r3 } = t5;
  return l3.useEffect(() => {
    e7 && (r3.current = e7);
  }, [e7, r3]), t5.id;
};

// node_modules/@radix-ui/primitive/dist/index.module.js
init_react();
function composeEventHandlers(e7, n4, { checkForDefaultPrevented: t5 = true } = {}) {
  return function(r3) {
    if (e7 == null || e7(r3), t5 === false || !r3.defaultPrevented)
      return n4 == null ? void 0 : n4(r3);
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
function useSize(r3) {
  const [i4, t5] = e6.useState(void 0);
  return e6.useEffect(() => {
    if (r3) {
      const e7 = new ResizeObserver((e8) => {
        if (!Array.isArray(e8))
          return;
        if (!e8.length)
          return;
        const i5 = e8[0];
        let o5, n4;
        if ("borderBoxSize" in i5) {
          const e9 = i5.borderBoxSize, r4 = Array.isArray(e9) ? e9[0] : e9;
          o5 = r4.inlineSize, n4 = r4.blockSize;
        } else {
          const e9 = r3.getBoundingClientRect();
          o5 = e9.width, n4 = e9.height;
        }
        t5({ width: o5, height: n4 });
      });
      return e7.observe(r3, { box: "border-box" }), () => e7.unobserve(r3);
    }
    t5(void 0);
  }, [r3]), i4;
}

// node_modules/@radix-ui/react-switch/dist/index.module.js
var s2 = __toESM(require_react());
var [l4, u2] = createContextScope("Switch");
var [p, m] = l4("Switch");
var Switch = /* @__PURE__ */ s2.forwardRef((r3, o5) => {
  const { __scopeSwitch: c6, "aria-labelledby": l5, name: u3, checked: m2, defaultChecked: f, required: x2, disabled: k2, value: w2 = "on", onCheckedChange: v2, ...S2 } = r3, [y2, E2] = s2.useState(null), C = useComposedRefs(o5, (e7) => E2(e7)), g2 = useLabelContext(y2), R2 = l5 || g2, T2 = s2.useRef(false), P2 = !y2 || Boolean(y2.closest("form")), [_2 = false, q2] = useControllableState({ prop: m2, defaultProp: f, onChange: v2 });
  return s2.createElement(p, { scope: c6, checked: _2, disabled: k2 }, /* @__PURE__ */ s2.createElement(Primitive.button, _extends({ type: "button", role: "switch", "aria-checked": _2, "aria-labelledby": R2, "aria-required": x2, "data-state": h2(_2), "data-disabled": k2 ? "" : void 0, disabled: k2, value: w2 }, S2, { ref: C, onClick: composeEventHandlers(r3.onClick, (e7) => {
    q2((e8) => !e8), P2 && (T2.current = e7.isPropagationStopped(), T2.current || e7.stopPropagation());
  }) })), P2 && /* @__PURE__ */ s2.createElement(b2, { control: y2, bubbles: !T2.current, name: u3, value: w2, checked: _2, required: x2, disabled: k2, style: { transform: "translateX(-100%)" } }));
});
var SwitchThumb = /* @__PURE__ */ s2.forwardRef((e7, r3) => {
  const { __scopeSwitch: o5, ...a3 } = e7, c6 = m("SwitchThumb", o5);
  return s2.createElement(Primitive.span, _extends({ "data-state": h2(c6.checked), "data-disabled": c6.disabled ? "" : void 0 }, a3, { ref: r3 }));
});
var b2 = (e7) => {
  const { control: t5, checked: a3, bubbles: c6 = true, ...i4 } = e7, n4 = s2.useRef(null), l5 = usePrevious(a3), u3 = useSize(t5);
  return s2.useEffect(() => {
    const e8 = n4.current, t6 = window.HTMLInputElement.prototype, r3 = Object.getOwnPropertyDescriptor(t6, "checked").set;
    if (l5 !== a3 && r3) {
      const t7 = new Event("click", { bubbles: c6 });
      r3.call(e8, a3), e8.dispatchEvent(t7);
    }
  }, [l5, a3, c6]), /* @__PURE__ */ s2.createElement("input", _extends({ type: "checkbox", "aria-hidden": true, defaultChecked: a3 }, i4, { tabIndex: -1, ref: n4, style: { ...e7.style, ...u3, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 } }));
};
function h2(e7) {
  return e7 ? "checked" : "unchecked";
}
var Root2 = Switch;
var Thumb = SwitchThumb;

// app/common/ui-elements/library/switch/Switch.tsx
var import_react17 = __toESM(require_react());

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
  const [isChecked, setIsChecked] = (0, import_react17.useState)((_a = props.checked) != null ? _a : false);
  return /* @__PURE__ */ import_react17.default.createElement(Root3, {
    ...props,
    onCheckedChange: (c6) => {
      if (props.onCheckedChange) {
        props.onCheckedChange(c6);
      }
      setIsChecked(c6);
    }
  }, /* @__PURE__ */ import_react17.default.createElement(Thumb2, {
    $checked: isChecked
  }));
};

// app/common/layout/menu-items.tsx
init_react();
var import_react18 = __toESM(require_react());

// app/common/assets/images/logo-dark.png
var logo_dark_default = "/build/_assets/logo-dark-7KTW3LX4.png";

// app/common/layout/menu-items.tsx
var ICON_SIZE = 24;
var ImageIcons = ({ ...props }) => /* @__PURE__ */ import_react18.default.createElement("img", {
  className: "max-w-[30px] md:mr-5 transition opacity duration-[250] ease-in-out",
  ...props
});
var menuItems = [
  {
    name: "Home",
    path: links.home(),
    icon: /* @__PURE__ */ import_react18.default.createElement(ImageIcons, {
      src: logo_dark_default,
      alt: "Kevin Carlos logo",
      "aria-label": "Kevin Carlos logo",
      style: { backgroundColor: "white", borderRadius: "50%" }
    }),
    mobileOnly: true
  },
  {
    name: "Projects",
    path: links.projects().root(),
    icon: /* @__PURE__ */ import_react18.default.createElement(Code_esm_default, {
      size: ICON_SIZE,
      weight: "duotone",
      "aria-label": "Projects",
      className: "dark:text-theme-white text-theme-black hover:!text-theme-blue dark:hover:!text-theme-orange transition-colors duration-[250ms] ease-in-out"
    })
  },
  {
    name: "About Me",
    path: links.aboutMe(),
    icon: /* @__PURE__ */ import_react18.default.createElement(UserFocus_esm_default, {
      size: ICON_SIZE,
      weight: "duotone",
      "aria-label": "About Me",
      className: "dark:text-theme-white text-theme-black hover:!text-theme-blue dark:hover:!text-theme-orange transition-colors duration-[250ms] ease-in-out"
    })
  },
  {
    name: "LinkedIn",
    path: links.linkedIn(),
    icon: /* @__PURE__ */ import_react18.default.createElement(LinkedinLogo_esm_default, {
      size: ICON_SIZE,
      weight: "duotone",
      "aria-label": "LinkedIn logo",
      className: "dark:text-theme-white text-theme-black hover:!text-theme-blue dark:hover:!text-theme-orange transition-colors duration-[250ms] ease-in-out"
    })
  },
  {
    name: "GitHub",
    path: links.github(),
    icon: /* @__PURE__ */ import_react18.default.createElement(GithubLogo_esm_default, {
      size: ICON_SIZE,
      weight: "duotone",
      "aria-label": "Github logo",
      className: "dark:text-theme-white text-theme-black hover:!text-theme-blue dark:hover:!text-theme-orange transition-colors duration-[250ms] ease-in-out"
    })
  },
  {
    name: "GitLab",
    path: links.gitlab(),
    icon: /* @__PURE__ */ import_react18.default.createElement(GitlabLogo_esm_default, {
      size: ICON_SIZE,
      weight: "duotone",
      "aria-label": "GitLab logo",
      className: "dark:text-theme-white text-theme-black hover:!text-theme-blue dark:hover:!text-theme-orange transition-colors duration-[250ms] ease-in-out"
    })
  }
];

// app/common/layout/footer/footer.tsx
var Footer = () => {
  return /* @__PURE__ */ React.createElement("footer", {
    role: "contentinfo",
    className: "flex justify-center w-screen items-end pb-3"
  }, /* @__PURE__ */ React.createElement("nav", {
    role: "navigation",
    className: "flex justify-evenly space-x-4"
  }, menuItems.map((mi) => {
    if (mi.path === links.home()) {
      return;
    }
    return /* @__PURE__ */ React.createElement(LinkIcon, {
      key: `footer-${mi.name}`,
      href: mi.path
    }, mi.icon);
  })));
};

// app/common/layout/header/index.ts
init_react();

// app/common/layout/header/header.tsx
init_react();
var import_react26 = __toESM(require_react());

// app/common/hooks/events/index.ts
init_react();

// app/common/hooks/events/useClickOutside.ts
init_react();
var import_react19 = __toESM(require_react());
var useClickOutside = (ref, funcHandler) => {
  (0, import_react19.useEffect)(() => {
    const clickHandler = (ev) => {
      if (!ref.current || ref.current.contains(ev.target)) {
        return;
      }
      funcHandler(ev);
    };
    document.addEventListener("mousedown", clickHandler);
    return () => document.removeEventListener("mousedown", clickHandler);
  }, [ref, funcHandler]);
};

// app/common/layout/header/hamburger-icon.tsx
init_react();
var import_react20 = __toESM(require_react());
var HamburgerBar = ({
  isOpen,
  number
}) => {
  return /* @__PURE__ */ import_react20.default.createElement("div", {
    className: clsx_m_default([
      "w-6",
      "h-[2.5px]",
      "rounded-lg",
      "relative",
      "origin-[1px]",
      "bg-theme-white",
      "transition-transform",
      "duration-[250ms]",
      "ease-in-out",
      isOpen && number === 1 && "rotate-45",
      isOpen && number === 2 && "translate-x-5",
      isOpen && number === 2 && "opacity-0",
      isOpen && number === 3 && "-rotate-45"
    ])
  });
};
var HamburgerIcon = ({
  isOpen,
  setIsOpen
}) => {
  return /* @__PURE__ */ import_react20.default.createElement("button", {
    onClick: () => setIsOpen(!isOpen),
    className: "z-50 relative flex flex-col justify-evenly"
  }, /* @__PURE__ */ import_react20.default.createElement(HamburgerBar, {
    isOpen,
    number: 1
  }), /* @__PURE__ */ import_react20.default.createElement(HamburgerBar, {
    isOpen,
    number: 2
  }), /* @__PURE__ */ import_react20.default.createElement(HamburgerBar, {
    isOpen,
    number: 3
  }));
};

// app/common/layout/header/hamburger-menu.tsx
init_react();
var import_react24 = __toESM(require_react());

// node_modules/react-spring/dist/react-spring.esm.js
init_react();

// node_modules/@react-spring/web/dist/react-spring-web.esm.js
init_react();

// node_modules/@react-spring/core/dist/react-spring-core.esm.js
init_react();

// node_modules/@react-spring/shared/dist/react-spring-shared.esm.js
init_react();

// node_modules/@react-spring/rafz/dist/react-spring-rafz.esm.js
init_react();
var updateQueue = makeQueue();
var raf = (fn) => schedule(fn, updateQueue);
var writeQueue = makeQueue();
raf.write = (fn) => schedule(fn, writeQueue);
var onStartQueue = makeQueue();
raf.onStart = (fn) => schedule(fn, onStartQueue);
var onFrameQueue = makeQueue();
raf.onFrame = (fn) => schedule(fn, onFrameQueue);
var onFinishQueue = makeQueue();
raf.onFinish = (fn) => schedule(fn, onFinishQueue);
var timeouts = [];
raf.setTimeout = (handler, ms) => {
  let time = raf.now() + ms;
  let cancel = () => {
    let i4 = timeouts.findIndex((t5) => t5.cancel == cancel);
    if (~i4)
      timeouts.splice(i4, 1);
    pendingCount -= ~i4 ? 1 : 0;
  };
  let timeout = {
    time,
    handler,
    cancel
  };
  timeouts.splice(findTimeout(time), 0, timeout);
  pendingCount += 1;
  start();
  return timeout;
};
var findTimeout = (time) => ~(~timeouts.findIndex((t5) => t5.time > time) || ~timeouts.length);
raf.cancel = (fn) => {
  onStartQueue.delete(fn);
  onFrameQueue.delete(fn);
  updateQueue.delete(fn);
  writeQueue.delete(fn);
  onFinishQueue.delete(fn);
};
raf.sync = (fn) => {
  sync = true;
  raf.batchedUpdates(fn);
  sync = false;
};
raf.throttle = (fn) => {
  let lastArgs;
  function queuedFn() {
    try {
      fn(...lastArgs);
    } finally {
      lastArgs = null;
    }
  }
  function throttled(...args) {
    lastArgs = args;
    raf.onStart(queuedFn);
  }
  throttled.handler = fn;
  throttled.cancel = () => {
    onStartQueue.delete(queuedFn);
    lastArgs = null;
  };
  return throttled;
};
var nativeRaf = typeof window != "undefined" ? window.requestAnimationFrame : () => {
};
raf.use = (impl) => nativeRaf = impl;
raf.now = typeof performance != "undefined" ? () => performance.now() : Date.now;
raf.batchedUpdates = (fn) => fn();
raf.catch = console.error;
raf.frameLoop = "always";
raf.advance = () => {
  if (raf.frameLoop !== "demand") {
    console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand");
  } else {
    update();
  }
};
var ts = -1;
var pendingCount = 0;
var sync = false;
function schedule(fn, queue) {
  if (sync) {
    queue.delete(fn);
    fn(0);
  } else {
    queue.add(fn);
    start();
  }
}
function start() {
  if (ts < 0) {
    ts = 0;
    if (raf.frameLoop !== "demand") {
      nativeRaf(loop);
    }
  }
}
function stop() {
  ts = -1;
}
function loop() {
  if (~ts) {
    nativeRaf(loop);
    raf.batchedUpdates(update);
  }
}
function update() {
  let prevTs = ts;
  ts = raf.now();
  let count = findTimeout(ts);
  if (count) {
    eachSafely(timeouts.splice(0, count), (t5) => t5.handler());
    pendingCount -= count;
  }
  onStartQueue.flush();
  updateQueue.flush(prevTs ? Math.min(64, ts - prevTs) : 16.667);
  onFrameQueue.flush();
  writeQueue.flush();
  onFinishQueue.flush();
  if (!pendingCount) {
    stop();
  }
}
function makeQueue() {
  let next = /* @__PURE__ */ new Set();
  let current = next;
  return {
    add(fn) {
      pendingCount += current == next && !next.has(fn) ? 1 : 0;
      next.add(fn);
    },
    delete(fn) {
      pendingCount -= current == next && next.has(fn) ? 1 : 0;
      return next.delete(fn);
    },
    flush(arg) {
      if (current.size) {
        next = /* @__PURE__ */ new Set();
        pendingCount -= current.size;
        eachSafely(current, (fn) => fn(arg) && next.add(fn));
        pendingCount += next.size;
        current = next;
      }
    }
  };
}
function eachSafely(values, each2) {
  values.forEach((value) => {
    try {
      each2(value);
    } catch (e7) {
      raf.catch(e7);
    }
  });
}

// node_modules/@react-spring/shared/dist/react-spring-shared.esm.js
var React14 = __toESM(require_react());
var import_react21 = __toESM(require_react());
function noop() {
}
var defineHidden = (obj, key, value) => Object.defineProperty(obj, key, {
  value,
  writable: true,
  configurable: true
});
var is = {
  arr: Array.isArray,
  obj: (a3) => !!a3 && a3.constructor.name === "Object",
  fun: (a3) => typeof a3 === "function",
  str: (a3) => typeof a3 === "string",
  num: (a3) => typeof a3 === "number",
  und: (a3) => a3 === void 0
};
function isEqual(a3, b3) {
  if (is.arr(a3)) {
    if (!is.arr(b3) || a3.length !== b3.length)
      return false;
    for (let i4 = 0; i4 < a3.length; i4++) {
      if (a3[i4] !== b3[i4])
        return false;
    }
    return true;
  }
  return a3 === b3;
}
var each = (obj, fn) => obj.forEach(fn);
function eachProp(obj, fn, ctx2) {
  if (is.arr(obj)) {
    for (let i4 = 0; i4 < obj.length; i4++) {
      fn.call(ctx2, obj[i4], `${i4}`);
    }
    return;
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn.call(ctx2, obj[key], key);
    }
  }
}
var toArray = (a3) => is.und(a3) ? [] : is.arr(a3) ? a3 : [a3];
function flush(queue, iterator) {
  if (queue.size) {
    const items = Array.from(queue);
    queue.clear();
    each(items, iterator);
  }
}
var flushCalls = (queue, ...args) => flush(queue, (fn) => fn(...args));
var isSSR = () => typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
var createStringInterpolator$1;
var to;
var colors$1 = null;
var skipAnimation = false;
var willAdvance = noop;
var assign = (globals2) => {
  if (globals2.to)
    to = globals2.to;
  if (globals2.now)
    raf.now = globals2.now;
  if (globals2.colors !== void 0)
    colors$1 = globals2.colors;
  if (globals2.skipAnimation != null)
    skipAnimation = globals2.skipAnimation;
  if (globals2.createStringInterpolator)
    createStringInterpolator$1 = globals2.createStringInterpolator;
  if (globals2.requestAnimationFrame)
    raf.use(globals2.requestAnimationFrame);
  if (globals2.batchedUpdates)
    raf.batchedUpdates = globals2.batchedUpdates;
  if (globals2.willAdvance)
    willAdvance = globals2.willAdvance;
  if (globals2.frameLoop)
    raf.frameLoop = globals2.frameLoop;
};
var globals = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  get createStringInterpolator() {
    return createStringInterpolator$1;
  },
  get to() {
    return to;
  },
  get colors() {
    return colors$1;
  },
  get skipAnimation() {
    return skipAnimation;
  },
  get willAdvance() {
    return willAdvance;
  },
  assign
});
var startQueue = /* @__PURE__ */ new Set();
var currentFrame = [];
var prevFrame = [];
var priority = 0;
var frameLoop = {
  get idle() {
    return !startQueue.size && !currentFrame.length;
  },
  start(animation) {
    if (priority > animation.priority) {
      startQueue.add(animation);
      raf.onStart(flushStartQueue);
    } else {
      startSafely(animation);
      raf(advance);
    }
  },
  advance,
  sort(animation) {
    if (priority) {
      raf.onFrame(() => frameLoop.sort(animation));
    } else {
      const prevIndex = currentFrame.indexOf(animation);
      if (~prevIndex) {
        currentFrame.splice(prevIndex, 1);
        startUnsafely(animation);
      }
    }
  },
  clear() {
    currentFrame = [];
    startQueue.clear();
  }
};
function flushStartQueue() {
  startQueue.forEach(startSafely);
  startQueue.clear();
  raf(advance);
}
function startSafely(animation) {
  if (!currentFrame.includes(animation))
    startUnsafely(animation);
}
function startUnsafely(animation) {
  currentFrame.splice(findIndex(currentFrame, (other) => other.priority > animation.priority), 0, animation);
}
function advance(dt) {
  const nextFrame = prevFrame;
  for (let i4 = 0; i4 < currentFrame.length; i4++) {
    const animation = currentFrame[i4];
    priority = animation.priority;
    if (!animation.idle) {
      willAdvance(animation);
      animation.advance(dt);
      if (!animation.idle) {
        nextFrame.push(animation);
      }
    }
  }
  priority = 0;
  prevFrame = currentFrame;
  prevFrame.length = 0;
  currentFrame = nextFrame;
  return currentFrame.length > 0;
}
function findIndex(arr, test) {
  const index2 = arr.findIndex(test);
  return index2 < 0 ? arr.length : index2;
}
var colors2 = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
};
var NUMBER = "[-+]?\\d*\\.?\\d+";
var PERCENTAGE = NUMBER + "%";
function call(...parts) {
  return "\\(\\s*(" + parts.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var rgb2 = new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER));
var rgba2 = new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER));
var hsl = new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE));
var hsla = new RegExp("hsla" + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
var hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex6 = /^#([0-9a-fA-F]{6})$/;
var hex8 = /^#([0-9a-fA-F]{8})$/;
function normalizeColor(color) {
  let match;
  if (typeof color === "number") {
    return color >>> 0 === color && color >= 0 && color <= 4294967295 ? color : null;
  }
  if (match = hex6.exec(color))
    return parseInt(match[1] + "ff", 16) >>> 0;
  if (colors$1 && colors$1[color] !== void 0) {
    return colors$1[color];
  }
  if (match = rgb2.exec(color)) {
    return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | 255) >>> 0;
  }
  if (match = rgba2.exec(color)) {
    return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | parse1(match[4])) >>> 0;
  }
  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + "ff", 16) >>> 0;
  }
  if (match = hex8.exec(color))
    return parseInt(match[1], 16) >>> 0;
  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16) >>> 0;
  }
  if (match = hsl.exec(color)) {
    return (hslToRgb2(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 255) >>> 0;
  }
  if (match = hsla.exec(color)) {
    return (hslToRgb2(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | parse1(match[4])) >>> 0;
  }
  return null;
}
function hue2rgb(p2, q2, t5) {
  if (t5 < 0)
    t5 += 1;
  if (t5 > 1)
    t5 -= 1;
  if (t5 < 1 / 6)
    return p2 + (q2 - p2) * 6 * t5;
  if (t5 < 1 / 2)
    return q2;
  if (t5 < 2 / 3)
    return p2 + (q2 - p2) * (2 / 3 - t5) * 6;
  return p2;
}
function hslToRgb2(h3, s3, l5) {
  const q2 = l5 < 0.5 ? l5 * (1 + s3) : l5 + s3 - l5 * s3;
  const p2 = 2 * l5 - q2;
  const r3 = hue2rgb(p2, q2, h3 + 1 / 3);
  const g2 = hue2rgb(p2, q2, h3);
  const b3 = hue2rgb(p2, q2, h3 - 1 / 3);
  return Math.round(r3 * 255) << 24 | Math.round(g2 * 255) << 16 | Math.round(b3 * 255) << 8;
}
function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0)
    return 0;
  if (int > 255)
    return 255;
  return int;
}
function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}
function parse1(str) {
  const num = parseFloat(str);
  if (num < 0)
    return 0;
  if (num > 1)
    return 255;
  return Math.round(num * 255);
}
function parsePercentage(str) {
  const int = parseFloat(str);
  if (int < 0)
    return 0;
  if (int > 100)
    return 1;
  return int / 100;
}
function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null)
    return input;
  int32Color = int32Color || 0;
  let r3 = (int32Color & 4278190080) >>> 24;
  let g2 = (int32Color & 16711680) >>> 16;
  let b3 = (int32Color & 65280) >>> 8;
  let a3 = (int32Color & 255) / 255;
  return `rgba(${r3}, ${g2}, ${b3}, ${a3})`;
}
var createInterpolator = (range, output, extrapolate) => {
  if (is.fun(range)) {
    return range;
  }
  if (is.arr(range)) {
    return createInterpolator({
      range,
      output,
      extrapolate
    });
  }
  if (is.str(range.output[0])) {
    return createStringInterpolator$1(range);
  }
  const config2 = range;
  const outputRange = config2.output;
  const inputRange = config2.range || [0, 1];
  const extrapolateLeft = config2.extrapolateLeft || config2.extrapolate || "extend";
  const extrapolateRight = config2.extrapolateRight || config2.extrapolate || "extend";
  const easing = config2.easing || ((t5) => t5);
  return (input) => {
    const range2 = findRange(input, inputRange);
    return interpolate(input, inputRange[range2], inputRange[range2 + 1], outputRange[range2], outputRange[range2 + 1], easing, extrapolateLeft, extrapolateRight, config2.map);
  };
};
function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input;
  if (result < inputMin) {
    if (extrapolateLeft === "identity")
      return result;
    else if (extrapolateLeft === "clamp")
      result = inputMin;
  }
  if (result > inputMax) {
    if (extrapolateRight === "identity")
      return result;
    else if (extrapolateRight === "clamp")
      result = inputMax;
  }
  if (outputMin === outputMax)
    return outputMin;
  if (inputMin === inputMax)
    return input <= inputMin ? outputMin : outputMax;
  if (inputMin === -Infinity)
    result = -result;
  else if (inputMax === Infinity)
    result = result - inputMin;
  else
    result = (result - inputMin) / (inputMax - inputMin);
  result = easing(result);
  if (outputMin === -Infinity)
    result = -result;
  else if (outputMax === Infinity)
    result = result + outputMin;
  else
    result = result * (outputMax - outputMin) + outputMin;
  return result;
}
function findRange(input, inputRange) {
  for (var i4 = 1; i4 < inputRange.length - 1; ++i4)
    if (inputRange[i4] >= input)
      break;
  return i4 - 1;
}
function _extends3() {
  _extends3 = Object.assign || function(target) {
    for (var i4 = 1; i4 < arguments.length; i4++) {
      var source = arguments[i4];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}
var $get = Symbol.for("FluidValue.get");
var $observers = Symbol.for("FluidValue.observers");
var hasFluidValue = (arg) => Boolean(arg && arg[$get]);
var getFluidValue = (arg) => arg && arg[$get] ? arg[$get]() : arg;
var getFluidObservers = (target) => target[$observers] || null;
function callFluidObserver(observer, event) {
  if (observer.eventObserved) {
    observer.eventObserved(event);
  } else {
    observer(event);
  }
}
function callFluidObservers(target, event) {
  let observers = target[$observers];
  if (observers) {
    observers.forEach((observer) => {
      callFluidObserver(observer, event);
    });
  }
}
var FluidValue = class {
  constructor(get) {
    this[$get] = void 0;
    this[$observers] = void 0;
    if (!get && !(get = this.get)) {
      throw Error("Unknown getter");
    }
    setFluidGetter(this, get);
  }
};
var setFluidGetter = (target, get) => setHidden(target, $get, get);
function addFluidObserver(target, observer) {
  if (target[$get]) {
    let observers = target[$observers];
    if (!observers) {
      setHidden(target, $observers, observers = /* @__PURE__ */ new Set());
    }
    if (!observers.has(observer)) {
      observers.add(observer);
      if (target.observerAdded) {
        target.observerAdded(observers.size, observer);
      }
    }
  }
  return observer;
}
function removeFluidObserver(target, observer) {
  let observers = target[$observers];
  if (observers && observers.has(observer)) {
    const count = observers.size - 1;
    if (count) {
      observers.delete(observer);
    } else {
      target[$observers] = null;
    }
    if (target.observerRemoved) {
      target.observerRemoved(count, observer);
    }
  }
}
var setHidden = (target, key, value) => Object.defineProperty(target, key, {
  value,
  writable: true,
  configurable: true
});
var numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
var unitRegex = new RegExp(`(${numberRegex.source})(%|[a-z]+)`, "i");
var rgbaRegex2 = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
var variableToRgba = (input) => {
  const [token, fallback] = parseCSSVariable(input);
  if (!token || isSSR()) {
    return input;
  }
  const value = window.getComputedStyle(document.documentElement).getPropertyValue(token);
  if (value) {
    return value.trim();
  } else if (fallback && fallback.startsWith("--")) {
    const _value = window.getComputedStyle(document.documentElement).getPropertyValue(fallback);
    if (_value) {
      return _value;
    } else {
      return input;
    }
  } else if (fallback && cssVariableRegex.test(fallback)) {
    return variableToRgba(fallback);
  } else if (fallback) {
    return fallback;
  }
  return input;
};
var parseCSSVariable = (current) => {
  const match = cssVariableRegex.exec(current);
  if (!match)
    return [,];
  const [, token, fallback] = match;
  return [token, fallback];
};
var namedColorRegex;
var rgbaRound = (_2, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`;
var createStringInterpolator = (config2) => {
  if (!namedColorRegex)
    namedColorRegex = colors$1 ? new RegExp(`(${Object.keys(colors$1).join("|")})(?!\\w)`, "g") : /^\b$/;
  const output = config2.output.map((value) => {
    return getFluidValue(value).replace(cssVariableRegex, variableToRgba).replace(colorRegex, colorToRgba).replace(namedColorRegex, colorToRgba);
  });
  const keyframes = output.map((value) => value.match(numberRegex).map(Number));
  const outputRanges = keyframes[0].map((_2, i4) => keyframes.map((values) => {
    if (!(i4 in values)) {
      throw Error('The arity of each "output" value must be equal');
    }
    return values[i4];
  }));
  const interpolators = outputRanges.map((output2) => createInterpolator(_extends3({}, config2, {
    output: output2
  })));
  return (input) => {
    var _output$find;
    const missingUnit = !unitRegex.test(output[0]) && ((_output$find = output.find((value) => unitRegex.test(value))) == null ? void 0 : _output$find.replace(numberRegex, ""));
    let i4 = 0;
    return output[0].replace(numberRegex, () => `${interpolators[i4++](input)}${missingUnit || ""}`).replace(rgbaRegex2, rgbaRound);
  };
};
var prefix = "react-spring: ";
var once = (fn) => {
  const func = fn;
  let called = false;
  if (typeof func != "function") {
    throw new TypeError(`${prefix}once requires a function parameter`);
  }
  return (...args) => {
    if (!called) {
      func(...args);
      called = true;
    }
  };
};
var warnInterpolate = once(console.warn);
function deprecateInterpolate() {
  warnInterpolate(`${prefix}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var warnDirectCall = once(console.warn);
function deprecateDirectCall() {
  warnDirectCall(`${prefix}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function isAnimatedString(value) {
  return is.str(value) && (value[0] == "#" || /\d/.test(value) || !isSSR() && cssVariableRegex.test(value) || value in (colors$1 || {}));
}
var useOnce = (effect) => (0, import_react21.useEffect)(effect, emptyDeps);
var emptyDeps = [];
function useForceUpdate() {
  const update3 = (0, import_react21.useState)()[1];
  const mounted = (0, import_react21.useState)(makeMountedRef)[0];
  useOnce(mounted.unmount);
  return () => {
    if (mounted.current) {
      update3({});
    }
  };
}
function makeMountedRef() {
  const mounted = {
    current: true,
    unmount: () => () => {
      mounted.current = false;
    }
  };
  return mounted;
}
function useMemoOne(getResult, inputs) {
  const [initial] = (0, import_react21.useState)(() => ({
    inputs,
    result: getResult()
  }));
  const committed = (0, import_react21.useRef)();
  const prevCache = committed.current;
  let cache = prevCache;
  if (cache) {
    const useCache = Boolean(inputs && cache.inputs && areInputsEqual(inputs, cache.inputs));
    if (!useCache) {
      cache = {
        inputs,
        result: getResult()
      };
    }
  } else {
    cache = initial;
  }
  (0, import_react21.useEffect)(() => {
    committed.current = cache;
    if (prevCache == initial) {
      initial.inputs = initial.result = void 0;
    }
  }, [cache]);
  return cache.result;
}
function areInputsEqual(next, prev) {
  if (next.length !== prev.length) {
    return false;
  }
  for (let i4 = 0; i4 < next.length; i4++) {
    if (next[i4] !== prev[i4]) {
      return false;
    }
  }
  return true;
}
function usePrev(value) {
  const prevRef = (0, import_react21.useRef)();
  (0, import_react21.useEffect)(() => {
    prevRef.current = value;
  });
  return prevRef.current;
}
var useLayoutEffect2 = typeof window !== "undefined" && window.document && window.document.createElement ? React14.useLayoutEffect : React14.useEffect;

// node_modules/@react-spring/core/dist/react-spring-core.esm.js
var React16 = __toESM(require_react());
var import_react23 = __toESM(require_react());

// node_modules/@react-spring/animated/dist/react-spring-animated.esm.js
init_react();
var React15 = __toESM(require_react());
var import_react22 = __toESM(require_react());
var $node = Symbol.for("Animated:node");
var isAnimated = (value) => !!value && value[$node] === value;
var getAnimated = (owner) => owner && owner[$node];
var setAnimated = (owner, node) => defineHidden(owner, $node, node);
var getPayload = (owner) => owner && owner[$node] && owner[$node].getPayload();
var Animated = class {
  constructor() {
    this.payload = void 0;
    setAnimated(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
};
var AnimatedValue = class extends Animated {
  constructor(_value) {
    super();
    this.done = true;
    this.elapsedTime = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.v0 = void 0;
    this.durationProgress = 0;
    this._value = _value;
    if (is.num(this._value)) {
      this.lastPosition = this._value;
    }
  }
  static create(value) {
    return new AnimatedValue(value);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(value, step) {
    if (is.num(value)) {
      this.lastPosition = value;
      if (step) {
        value = Math.round(value / step) * step;
        if (this.done) {
          this.lastPosition = value;
        }
      }
    }
    if (this._value === value) {
      return false;
    }
    this._value = value;
    return true;
  }
  reset() {
    const {
      done
    } = this;
    this.done = false;
    if (is.num(this._value)) {
      this.elapsedTime = 0;
      this.durationProgress = 0;
      this.lastPosition = this._value;
      if (done)
        this.lastVelocity = null;
      this.v0 = null;
    }
  }
};
var AnimatedString = class extends AnimatedValue {
  constructor(value) {
    super(0);
    this._string = null;
    this._toString = void 0;
    this._toString = createInterpolator({
      output: [value, value]
    });
  }
  static create(value) {
    return new AnimatedString(value);
  }
  getValue() {
    let value = this._string;
    return value == null ? this._string = this._toString(this._value) : value;
  }
  setValue(value) {
    if (is.str(value)) {
      if (value == this._string) {
        return false;
      }
      this._string = value;
      this._value = 1;
    } else if (super.setValue(value)) {
      this._string = null;
    } else {
      return false;
    }
    return true;
  }
  reset(goal) {
    if (goal) {
      this._toString = createInterpolator({
        output: [this.getValue(), goal]
      });
    }
    this._value = 0;
    super.reset();
  }
};
var TreeContext = {
  dependencies: null
};
var AnimatedObject = class extends Animated {
  constructor(source) {
    super();
    this.source = source;
    this.setValue(source);
  }
  getValue(animated2) {
    const values = {};
    eachProp(this.source, (source, key) => {
      if (isAnimated(source)) {
        values[key] = source.getValue(animated2);
      } else if (hasFluidValue(source)) {
        values[key] = getFluidValue(source);
      } else if (!animated2) {
        values[key] = source;
      }
    });
    return values;
  }
  setValue(source) {
    this.source = source;
    this.payload = this._makePayload(source);
  }
  reset() {
    if (this.payload) {
      each(this.payload, (node) => node.reset());
    }
  }
  _makePayload(source) {
    if (source) {
      const payload = /* @__PURE__ */ new Set();
      eachProp(source, this._addToPayload, payload);
      return Array.from(payload);
    }
  }
  _addToPayload(source) {
    if (TreeContext.dependencies && hasFluidValue(source)) {
      TreeContext.dependencies.add(source);
    }
    const payload = getPayload(source);
    if (payload) {
      each(payload, (node) => this.add(node));
    }
  }
};
var AnimatedArray = class extends AnimatedObject {
  constructor(source) {
    super(source);
  }
  static create(source) {
    return new AnimatedArray(source);
  }
  getValue() {
    return this.source.map((node) => node.getValue());
  }
  setValue(source) {
    const payload = this.getPayload();
    if (source.length == payload.length) {
      return payload.map((node, i4) => node.setValue(source[i4])).some(Boolean);
    }
    super.setValue(source.map(makeAnimated));
    return true;
  }
};
function makeAnimated(value) {
  const nodeType = isAnimatedString(value) ? AnimatedString : AnimatedValue;
  return nodeType.create(value);
}
function getAnimatedType(value) {
  const parentNode = getAnimated(value);
  return parentNode ? parentNode.constructor : is.arr(value) ? AnimatedArray : isAnimatedString(value) ? AnimatedString : AnimatedValue;
}
function _extends4() {
  _extends4 = Object.assign || function(target) {
    for (var i4 = 1; i4 < arguments.length; i4++) {
      var source = arguments[i4];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends4.apply(this, arguments);
}
var withAnimated = (Component, host2) => {
  const hasInstance = !is.fun(Component) || Component.prototype && Component.prototype.isReactComponent;
  return (0, import_react22.forwardRef)((givenProps, givenRef) => {
    const instanceRef = (0, import_react22.useRef)(null);
    const ref = hasInstance && (0, import_react22.useCallback)((value) => {
      instanceRef.current = updateRef(givenRef, value);
    }, [givenRef]);
    const [props, deps] = getAnimatedState(givenProps, host2);
    const forceUpdate = useForceUpdate();
    const callback = () => {
      const instance = instanceRef.current;
      if (hasInstance && !instance) {
        return;
      }
      const didUpdate = instance ? host2.applyAnimatedValues(instance, props.getValue(true)) : false;
      if (didUpdate === false) {
        forceUpdate();
      }
    };
    const observer = new PropsObserver(callback, deps);
    const observerRef = (0, import_react22.useRef)();
    useLayoutEffect2(() => {
      const lastObserver = observerRef.current;
      observerRef.current = observer;
      each(deps, (dep) => addFluidObserver(dep, observer));
      if (lastObserver) {
        each(lastObserver.deps, (dep) => removeFluidObserver(dep, lastObserver));
        raf.cancel(lastObserver.update);
      }
    });
    (0, import_react22.useEffect)(callback, []);
    useOnce(() => () => {
      const observer2 = observerRef.current;
      each(observer2.deps, (dep) => removeFluidObserver(dep, observer2));
    });
    const usedProps = host2.getComponentProps(props.getValue());
    return React15.createElement(Component, _extends4({}, usedProps, {
      ref
    }));
  });
};
var PropsObserver = class {
  constructor(update3, deps) {
    this.update = update3;
    this.deps = deps;
  }
  eventObserved(event) {
    if (event.type == "change") {
      raf.write(this.update);
    }
  }
};
function getAnimatedState(props, host2) {
  const dependencies = /* @__PURE__ */ new Set();
  TreeContext.dependencies = dependencies;
  if (props.style)
    props = _extends4({}, props, {
      style: host2.createAnimatedStyle(props.style)
    });
  props = new AnimatedObject(props);
  TreeContext.dependencies = null;
  return [props, dependencies];
}
function updateRef(ref, value) {
  if (ref) {
    if (is.fun(ref))
      ref(value);
    else
      ref.current = value;
  }
  return value;
}
var cacheKey = Symbol.for("AnimatedComponent");
var createHost = (components, {
  applyAnimatedValues: _applyAnimatedValues = () => false,
  createAnimatedStyle: _createAnimatedStyle = (style) => new AnimatedObject(style),
  getComponentProps: _getComponentProps = (props) => props
} = {}) => {
  const hostConfig = {
    applyAnimatedValues: _applyAnimatedValues,
    createAnimatedStyle: _createAnimatedStyle,
    getComponentProps: _getComponentProps
  };
  const animated2 = (Component) => {
    const displayName = getDisplayName(Component) || "Anonymous";
    if (is.str(Component)) {
      Component = animated2[Component] || (animated2[Component] = withAnimated(Component, hostConfig));
    } else {
      Component = Component[cacheKey] || (Component[cacheKey] = withAnimated(Component, hostConfig));
    }
    Component.displayName = `Animated(${displayName})`;
    return Component;
  };
  eachProp(components, (Component, key) => {
    if (is.arr(components)) {
      key = getDisplayName(Component);
    }
    animated2[key] = animated2(Component);
  });
  return {
    animated: animated2
  };
};
var getDisplayName = (arg) => is.str(arg) ? arg : arg && is.str(arg.displayName) ? arg.displayName : is.fun(arg) && arg.name || null;

// node_modules/@react-spring/types/animated.js
init_react();

// node_modules/@react-spring/types/interpolation.js
init_react();

// node_modules/@react-spring/core/dist/react-spring-core.esm.js
function _extends5() {
  _extends5 = Object.assign || function(target) {
    for (var i4 = 1; i4 < arguments.length; i4++) {
      var source = arguments[i4];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends5.apply(this, arguments);
}
function callProp(value, ...args) {
  return is.fun(value) ? value(...args) : value;
}
var matchProp = (value, key) => value === true || !!(key && value && (is.fun(value) ? value(key) : toArray(value).includes(key)));
var resolveProp = (prop, key) => is.obj(prop) ? key && prop[key] : prop;
var getDefaultProp = (props, key) => props.default === true ? props[key] : props.default ? props.default[key] : void 0;
var noopTransform = (value) => value;
var getDefaultProps = (props, transform = noopTransform) => {
  let keys = DEFAULT_PROPS;
  if (props.default && props.default !== true) {
    props = props.default;
    keys = Object.keys(props);
  }
  const defaults2 = {};
  for (const key of keys) {
    const value = transform(props[key], key);
    if (!is.und(value)) {
      defaults2[key] = value;
    }
  }
  return defaults2;
};
var DEFAULT_PROPS = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"];
var RESERVED_PROPS = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  keys: 1,
  callId: 1,
  parentId: 1
};
function getForwardProps(props) {
  const forward = {};
  let count = 0;
  eachProp(props, (value, prop) => {
    if (!RESERVED_PROPS[prop]) {
      forward[prop] = value;
      count++;
    }
  });
  if (count) {
    return forward;
  }
}
function inferTo(props) {
  const to2 = getForwardProps(props);
  if (to2) {
    const out = {
      to: to2
    };
    eachProp(props, (val, key) => key in to2 || (out[key] = val));
    return out;
  }
  return _extends5({}, props);
}
function computeGoal(value) {
  value = getFluidValue(value);
  return is.arr(value) ? value.map(computeGoal) : isAnimatedString(value) ? globals.createStringInterpolator({
    range: [0, 1],
    output: [value, value]
  })(1) : value;
}
function hasProps(props) {
  for (const _2 in props)
    return true;
  return false;
}
function isAsyncTo(to2) {
  return is.fun(to2) || is.arr(to2) && is.obj(to2[0]);
}
function detachRefs(ctrl, ref) {
  var _ctrl$ref;
  (_ctrl$ref = ctrl.ref) == null ? void 0 : _ctrl$ref.delete(ctrl);
  ref == null ? void 0 : ref.delete(ctrl);
}
function replaceRef(ctrl, ref) {
  if (ref && ctrl.ref !== ref) {
    var _ctrl$ref2;
    (_ctrl$ref2 = ctrl.ref) == null ? void 0 : _ctrl$ref2.delete(ctrl);
    ref.add(ctrl);
    ctrl.ref = ref;
  }
}
var config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};
var c1 = 1.70158;
var c2 = c1 * 1.525;
var c3 = c1 + 1;
var c4 = 2 * Math.PI / 3;
var c5 = 2 * Math.PI / 4.5;
var bounceOut = (x2) => {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (x2 < 1 / d1) {
    return n1 * x2 * x2;
  } else if (x2 < 2 / d1) {
    return n1 * (x2 -= 1.5 / d1) * x2 + 0.75;
  } else if (x2 < 2.5 / d1) {
    return n1 * (x2 -= 2.25 / d1) * x2 + 0.9375;
  } else {
    return n1 * (x2 -= 2.625 / d1) * x2 + 0.984375;
  }
};
var easings = {
  linear: (x2) => x2,
  easeInQuad: (x2) => x2 * x2,
  easeOutQuad: (x2) => 1 - (1 - x2) * (1 - x2),
  easeInOutQuad: (x2) => x2 < 0.5 ? 2 * x2 * x2 : 1 - Math.pow(-2 * x2 + 2, 2) / 2,
  easeInCubic: (x2) => x2 * x2 * x2,
  easeOutCubic: (x2) => 1 - Math.pow(1 - x2, 3),
  easeInOutCubic: (x2) => x2 < 0.5 ? 4 * x2 * x2 * x2 : 1 - Math.pow(-2 * x2 + 2, 3) / 2,
  easeInQuart: (x2) => x2 * x2 * x2 * x2,
  easeOutQuart: (x2) => 1 - Math.pow(1 - x2, 4),
  easeInOutQuart: (x2) => x2 < 0.5 ? 8 * x2 * x2 * x2 * x2 : 1 - Math.pow(-2 * x2 + 2, 4) / 2,
  easeInQuint: (x2) => x2 * x2 * x2 * x2 * x2,
  easeOutQuint: (x2) => 1 - Math.pow(1 - x2, 5),
  easeInOutQuint: (x2) => x2 < 0.5 ? 16 * x2 * x2 * x2 * x2 * x2 : 1 - Math.pow(-2 * x2 + 2, 5) / 2,
  easeInSine: (x2) => 1 - Math.cos(x2 * Math.PI / 2),
  easeOutSine: (x2) => Math.sin(x2 * Math.PI / 2),
  easeInOutSine: (x2) => -(Math.cos(Math.PI * x2) - 1) / 2,
  easeInExpo: (x2) => x2 === 0 ? 0 : Math.pow(2, 10 * x2 - 10),
  easeOutExpo: (x2) => x2 === 1 ? 1 : 1 - Math.pow(2, -10 * x2),
  easeInOutExpo: (x2) => x2 === 0 ? 0 : x2 === 1 ? 1 : x2 < 0.5 ? Math.pow(2, 20 * x2 - 10) / 2 : (2 - Math.pow(2, -20 * x2 + 10)) / 2,
  easeInCirc: (x2) => 1 - Math.sqrt(1 - Math.pow(x2, 2)),
  easeOutCirc: (x2) => Math.sqrt(1 - Math.pow(x2 - 1, 2)),
  easeInOutCirc: (x2) => x2 < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x2, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x2 + 2, 2)) + 1) / 2,
  easeInBack: (x2) => c3 * x2 * x2 * x2 - c1 * x2 * x2,
  easeOutBack: (x2) => 1 + c3 * Math.pow(x2 - 1, 3) + c1 * Math.pow(x2 - 1, 2),
  easeInOutBack: (x2) => x2 < 0.5 ? Math.pow(2 * x2, 2) * ((c2 + 1) * 2 * x2 - c2) / 2 : (Math.pow(2 * x2 - 2, 2) * ((c2 + 1) * (x2 * 2 - 2) + c2) + 2) / 2,
  easeInElastic: (x2) => x2 === 0 ? 0 : x2 === 1 ? 1 : -Math.pow(2, 10 * x2 - 10) * Math.sin((x2 * 10 - 10.75) * c4),
  easeOutElastic: (x2) => x2 === 0 ? 0 : x2 === 1 ? 1 : Math.pow(2, -10 * x2) * Math.sin((x2 * 10 - 0.75) * c4) + 1,
  easeInOutElastic: (x2) => x2 === 0 ? 0 : x2 === 1 ? 1 : x2 < 0.5 ? -(Math.pow(2, 20 * x2 - 10) * Math.sin((20 * x2 - 11.125) * c5)) / 2 : Math.pow(2, -20 * x2 + 10) * Math.sin((20 * x2 - 11.125) * c5) / 2 + 1,
  easeInBounce: (x2) => 1 - bounceOut(1 - x2),
  easeOutBounce: bounceOut,
  easeInOutBounce: (x2) => x2 < 0.5 ? (1 - bounceOut(1 - 2 * x2)) / 2 : (1 + bounceOut(2 * x2 - 1)) / 2
};
var defaults = _extends5({}, config.default, {
  mass: 1,
  damping: 1,
  easing: easings.linear,
  clamp: false
});
var AnimationConfig = class {
  constructor() {
    this.tension = void 0;
    this.friction = void 0;
    this.frequency = void 0;
    this.damping = void 0;
    this.mass = void 0;
    this.velocity = 0;
    this.restVelocity = void 0;
    this.precision = void 0;
    this.progress = void 0;
    this.duration = void 0;
    this.easing = void 0;
    this.clamp = void 0;
    this.bounce = void 0;
    this.decay = void 0;
    this.round = void 0;
    Object.assign(this, defaults);
  }
};
function mergeConfig(config2, newConfig, defaultConfig) {
  if (defaultConfig) {
    defaultConfig = _extends5({}, defaultConfig);
    sanitizeConfig(defaultConfig, newConfig);
    newConfig = _extends5({}, defaultConfig, newConfig);
  }
  sanitizeConfig(config2, newConfig);
  Object.assign(config2, newConfig);
  for (const key in defaults) {
    if (config2[key] == null) {
      config2[key] = defaults[key];
    }
  }
  let {
    mass,
    frequency,
    damping
  } = config2;
  if (!is.und(frequency)) {
    if (frequency < 0.01)
      frequency = 0.01;
    if (damping < 0)
      damping = 0;
    config2.tension = Math.pow(2 * Math.PI / frequency, 2) * mass;
    config2.friction = 4 * Math.PI * damping * mass / frequency;
  }
  return config2;
}
function sanitizeConfig(config2, props) {
  if (!is.und(props.decay)) {
    config2.duration = void 0;
  } else {
    const isTensionConfig = !is.und(props.tension) || !is.und(props.friction);
    if (isTensionConfig || !is.und(props.frequency) || !is.und(props.damping) || !is.und(props.mass)) {
      config2.duration = void 0;
      config2.decay = void 0;
    }
    if (isTensionConfig) {
      config2.frequency = void 0;
    }
  }
}
var emptyArray = [];
var Animation = class {
  constructor() {
    this.changed = false;
    this.values = emptyArray;
    this.toValues = null;
    this.fromValues = emptyArray;
    this.to = void 0;
    this.from = void 0;
    this.config = new AnimationConfig();
    this.immediate = false;
  }
};
function scheduleProps(callId, {
  key,
  props,
  defaultProps,
  state,
  actions
}) {
  return new Promise((resolve, reject) => {
    var _props$cancel;
    let delay;
    let timeout;
    let cancel = matchProp((_props$cancel = props.cancel) != null ? _props$cancel : defaultProps == null ? void 0 : defaultProps.cancel, key);
    if (cancel) {
      onStart();
    } else {
      if (!is.und(props.pause)) {
        state.paused = matchProp(props.pause, key);
      }
      let pause = defaultProps == null ? void 0 : defaultProps.pause;
      if (pause !== true) {
        pause = state.paused || matchProp(pause, key);
      }
      delay = callProp(props.delay || 0, key);
      if (pause) {
        state.resumeQueue.add(onResume);
        actions.pause();
      } else {
        actions.resume();
        onResume();
      }
    }
    function onPause() {
      state.resumeQueue.add(onResume);
      state.timeouts.delete(timeout);
      timeout.cancel();
      delay = timeout.time - raf.now();
    }
    function onResume() {
      if (delay > 0 && !globals.skipAnimation) {
        state.delayed = true;
        timeout = raf.setTimeout(onStart, delay);
        state.pauseQueue.add(onPause);
        state.timeouts.add(timeout);
      } else {
        onStart();
      }
    }
    function onStart() {
      if (state.delayed) {
        state.delayed = false;
      }
      state.pauseQueue.delete(onPause);
      state.timeouts.delete(timeout);
      if (callId <= (state.cancelId || 0)) {
        cancel = true;
      }
      try {
        actions.start(_extends5({}, props, {
          callId,
          cancel
        }), resolve);
      } catch (err) {
        reject(err);
      }
    }
  });
}
var getCombinedResult = (target, results) => results.length == 1 ? results[0] : results.some((result) => result.cancelled) ? getCancelledResult(target.get()) : results.every((result) => result.noop) ? getNoopResult(target.get()) : getFinishedResult(target.get(), results.every((result) => result.finished));
var getNoopResult = (value) => ({
  value,
  noop: true,
  finished: true,
  cancelled: false
});
var getFinishedResult = (value, finished, cancelled = false) => ({
  value,
  finished,
  cancelled
});
var getCancelledResult = (value) => ({
  value,
  cancelled: true,
  finished: false
});
function runAsync(to2, props, state, target) {
  const {
    callId,
    parentId,
    onRest
  } = props;
  const {
    asyncTo: prevTo,
    promise: prevPromise
  } = state;
  if (!parentId && to2 === prevTo && !props.reset) {
    return prevPromise;
  }
  return state.promise = (async () => {
    state.asyncId = callId;
    state.asyncTo = to2;
    const defaultProps = getDefaultProps(props, (value, key) => key === "onRest" ? void 0 : value);
    let preventBail;
    let bail;
    const bailPromise = new Promise((resolve, reject) => (preventBail = resolve, bail = reject));
    const bailIfEnded = (bailSignal) => {
      const bailResult = callId <= (state.cancelId || 0) && getCancelledResult(target) || callId !== state.asyncId && getFinishedResult(target, false);
      if (bailResult) {
        bailSignal.result = bailResult;
        bail(bailSignal);
        throw bailSignal;
      }
    };
    const animate = (arg1, arg2) => {
      const bailSignal = new BailSignal();
      const skipAnimationSignal = new SkipAniamtionSignal();
      return (async () => {
        if (globals.skipAnimation) {
          stopAsync(state);
          skipAnimationSignal.result = getFinishedResult(target, false);
          bail(skipAnimationSignal);
          throw skipAnimationSignal;
        }
        bailIfEnded(bailSignal);
        const props2 = is.obj(arg1) ? _extends5({}, arg1) : _extends5({}, arg2, {
          to: arg1
        });
        props2.parentId = callId;
        eachProp(defaultProps, (value, key) => {
          if (is.und(props2[key])) {
            props2[key] = value;
          }
        });
        const result2 = await target.start(props2);
        bailIfEnded(bailSignal);
        if (state.paused) {
          await new Promise((resume) => {
            state.resumeQueue.add(resume);
          });
        }
        return result2;
      })();
    };
    let result;
    if (globals.skipAnimation) {
      stopAsync(state);
      return getFinishedResult(target, false);
    }
    try {
      let animating;
      if (is.arr(to2)) {
        animating = (async (queue) => {
          for (const props2 of queue) {
            await animate(props2);
          }
        })(to2);
      } else {
        animating = Promise.resolve(to2(animate, target.stop.bind(target)));
      }
      await Promise.all([animating.then(preventBail), bailPromise]);
      result = getFinishedResult(target.get(), true, false);
    } catch (err) {
      if (err instanceof BailSignal) {
        result = err.result;
      } else if (err instanceof SkipAniamtionSignal) {
        result = err.result;
      } else {
        throw err;
      }
    } finally {
      if (callId == state.asyncId) {
        state.asyncId = parentId;
        state.asyncTo = parentId ? prevTo : void 0;
        state.promise = parentId ? prevPromise : void 0;
      }
    }
    if (is.fun(onRest)) {
      raf.batchedUpdates(() => {
        onRest(result, target, target.item);
      });
    }
    return result;
  })();
}
function stopAsync(state, cancelId) {
  flush(state.timeouts, (t5) => t5.cancel());
  state.pauseQueue.clear();
  state.resumeQueue.clear();
  state.asyncId = state.asyncTo = state.promise = void 0;
  if (cancelId)
    state.cancelId = cancelId;
}
var BailSignal = class extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");
    this.result = void 0;
  }
};
var SkipAniamtionSignal = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
    this.result = void 0;
  }
};
var isFrameValue = (value) => value instanceof FrameValue;
var nextId$1 = 1;
var FrameValue = class extends FluidValue {
  constructor(...args) {
    super(...args);
    this.id = nextId$1++;
    this.key = void 0;
    this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(priority2) {
    if (this._priority != priority2) {
      this._priority = priority2;
      this._onPriorityChange(priority2);
    }
  }
  get() {
    const node = getAnimated(this);
    return node && node.getValue();
  }
  to(...args) {
    return globals.to(this, args);
  }
  interpolate(...args) {
    deprecateInterpolate();
    return globals.to(this, args);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(count) {
    if (count == 1)
      this._attach();
  }
  observerRemoved(count) {
    if (count == 0)
      this._detach();
  }
  _attach() {
  }
  _detach() {
  }
  _onChange(value, idle = false) {
    callFluidObservers(this, {
      type: "change",
      parent: this,
      value,
      idle
    });
  }
  _onPriorityChange(priority2) {
    if (!this.idle) {
      frameLoop.sort(this);
    }
    callFluidObservers(this, {
      type: "priority",
      parent: this,
      priority: priority2
    });
  }
};
var $P = Symbol.for("SpringPhase");
var HAS_ANIMATED = 1;
var IS_ANIMATING = 2;
var IS_PAUSED = 4;
var hasAnimated = (target) => (target[$P] & HAS_ANIMATED) > 0;
var isAnimating = (target) => (target[$P] & IS_ANIMATING) > 0;
var isPaused = (target) => (target[$P] & IS_PAUSED) > 0;
var setActiveBit = (target, active) => active ? target[$P] |= IS_ANIMATING | HAS_ANIMATED : target[$P] &= ~IS_ANIMATING;
var setPausedBit = (target, paused) => paused ? target[$P] |= IS_PAUSED : target[$P] &= ~IS_PAUSED;
var SpringValue = class extends FrameValue {
  constructor(arg1, arg2) {
    super();
    this.key = void 0;
    this.animation = new Animation();
    this.queue = void 0;
    this.defaultProps = {};
    this._state = {
      paused: false,
      delayed: false,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    };
    this._pendingCalls = /* @__PURE__ */ new Set();
    this._lastCallId = 0;
    this._lastToId = 0;
    this._memoizedDuration = 0;
    if (!is.und(arg1) || !is.und(arg2)) {
      const props = is.obj(arg1) ? _extends5({}, arg1) : _extends5({}, arg2, {
        from: arg1
      });
      if (is.und(props.default)) {
        props.default = true;
      }
      this.start(props);
    }
  }
  get idle() {
    return !(isAnimating(this) || this._state.asyncTo) || isPaused(this);
  }
  get goal() {
    return getFluidValue(this.animation.to);
  }
  get velocity() {
    const node = getAnimated(this);
    return node instanceof AnimatedValue ? node.lastVelocity || 0 : node.getPayload().map((node2) => node2.lastVelocity || 0);
  }
  get hasAnimated() {
    return hasAnimated(this);
  }
  get isAnimating() {
    return isAnimating(this);
  }
  get isPaused() {
    return isPaused(this);
  }
  get isDelayed() {
    return this._state.delayed;
  }
  advance(dt) {
    let idle = true;
    let changed = false;
    const anim = this.animation;
    let {
      config: config2,
      toValues
    } = anim;
    const payload = getPayload(anim.to);
    if (!payload && hasFluidValue(anim.to)) {
      toValues = toArray(getFluidValue(anim.to));
    }
    anim.values.forEach((node2, i4) => {
      if (node2.done)
        return;
      const to2 = node2.constructor == AnimatedString ? 1 : payload ? payload[i4].lastPosition : toValues[i4];
      let finished = anim.immediate;
      let position = to2;
      if (!finished) {
        position = node2.lastPosition;
        if (config2.tension <= 0) {
          node2.done = true;
          return;
        }
        let elapsed = node2.elapsedTime += dt;
        const from = anim.fromValues[i4];
        const v0 = node2.v0 != null ? node2.v0 : node2.v0 = is.arr(config2.velocity) ? config2.velocity[i4] : config2.velocity;
        let velocity;
        if (!is.und(config2.duration)) {
          let p2 = 1;
          if (config2.duration > 0) {
            if (this._memoizedDuration !== config2.duration) {
              this._memoizedDuration = config2.duration;
              if (node2.durationProgress > 0) {
                node2.elapsedTime = config2.duration * node2.durationProgress;
                elapsed = node2.elapsedTime += dt;
              }
            }
            p2 = (config2.progress || 0) + elapsed / this._memoizedDuration;
            p2 = p2 > 1 ? 1 : p2 < 0 ? 0 : p2;
            node2.durationProgress = p2;
          }
          position = from + config2.easing(p2) * (to2 - from);
          velocity = (position - node2.lastPosition) / dt;
          finished = p2 == 1;
        } else if (config2.decay) {
          const decay = config2.decay === true ? 0.998 : config2.decay;
          const e7 = Math.exp(-(1 - decay) * elapsed);
          position = from + v0 / (1 - decay) * (1 - e7);
          finished = Math.abs(node2.lastPosition - position) < 0.1;
          velocity = v0 * e7;
        } else {
          velocity = node2.lastVelocity == null ? v0 : node2.lastVelocity;
          const precision = config2.precision || (from == to2 ? 5e-3 : Math.min(1, Math.abs(to2 - from) * 1e-3));
          const restVelocity = config2.restVelocity || precision / 10;
          const bounceFactor = config2.clamp ? 0 : config2.bounce;
          const canBounce = !is.und(bounceFactor);
          const isGrowing = from == to2 ? node2.v0 > 0 : from < to2;
          let isMoving;
          let isBouncing = false;
          const step = 1;
          const numSteps = Math.ceil(dt / step);
          for (let n4 = 0; n4 < numSteps; ++n4) {
            isMoving = Math.abs(velocity) > restVelocity;
            if (!isMoving) {
              finished = Math.abs(to2 - position) <= precision;
              if (finished) {
                break;
              }
            }
            if (canBounce) {
              isBouncing = position == to2 || position > to2 == isGrowing;
              if (isBouncing) {
                velocity = -velocity * bounceFactor;
                position = to2;
              }
            }
            const springForce = -config2.tension * 1e-6 * (position - to2);
            const dampingForce = -config2.friction * 1e-3 * velocity;
            const acceleration = (springForce + dampingForce) / config2.mass;
            velocity = velocity + acceleration * step;
            position = position + velocity * step;
          }
        }
        node2.lastVelocity = velocity;
        if (Number.isNaN(position)) {
          console.warn(`Got NaN while animating:`, this);
          finished = true;
        }
      }
      if (payload && !payload[i4].done) {
        finished = false;
      }
      if (finished) {
        node2.done = true;
      } else {
        idle = false;
      }
      if (node2.setValue(position, config2.round)) {
        changed = true;
      }
    });
    const node = getAnimated(this);
    const currVal = node.getValue();
    if (idle) {
      const finalVal = getFluidValue(anim.to);
      if ((currVal !== finalVal || changed) && !config2.decay) {
        node.setValue(finalVal);
        this._onChange(finalVal);
      } else if (changed && config2.decay) {
        this._onChange(currVal);
      }
      this._stop();
    } else if (changed) {
      this._onChange(currVal);
    }
  }
  set(value) {
    raf.batchedUpdates(() => {
      this._stop();
      this._focus(value);
      this._set(value);
    });
    return this;
  }
  pause() {
    this._update({
      pause: true
    });
  }
  resume() {
    this._update({
      pause: false
    });
  }
  finish() {
    if (isAnimating(this)) {
      const {
        to: to2,
        config: config2
      } = this.animation;
      raf.batchedUpdates(() => {
        this._onStart();
        if (!config2.decay) {
          this._set(to2, false);
        }
        this._stop();
      });
    }
    return this;
  }
  update(props) {
    const queue = this.queue || (this.queue = []);
    queue.push(props);
    return this;
  }
  start(to2, arg2) {
    let queue;
    if (!is.und(to2)) {
      queue = [is.obj(to2) ? to2 : _extends5({}, arg2, {
        to: to2
      })];
    } else {
      queue = this.queue || [];
      this.queue = [];
    }
    return Promise.all(queue.map((props) => {
      const up = this._update(props);
      return up;
    })).then((results) => getCombinedResult(this, results));
  }
  stop(cancel) {
    const {
      to: to2
    } = this.animation;
    this._focus(this.get());
    stopAsync(this._state, cancel && this._lastCallId);
    raf.batchedUpdates(() => this._stop(to2, cancel));
    return this;
  }
  reset() {
    this._update({
      reset: true
    });
  }
  eventObserved(event) {
    if (event.type == "change") {
      this._start();
    } else if (event.type == "priority") {
      this.priority = event.priority + 1;
    }
  }
  _prepareNode(props) {
    const key = this.key || "";
    let {
      to: to2,
      from
    } = props;
    to2 = is.obj(to2) ? to2[key] : to2;
    if (to2 == null || isAsyncTo(to2)) {
      to2 = void 0;
    }
    from = is.obj(from) ? from[key] : from;
    if (from == null) {
      from = void 0;
    }
    const range = {
      to: to2,
      from
    };
    if (!hasAnimated(this)) {
      if (props.reverse)
        [to2, from] = [from, to2];
      from = getFluidValue(from);
      if (!is.und(from)) {
        this._set(from);
      } else if (!getAnimated(this)) {
        this._set(to2);
      }
    }
    return range;
  }
  _update(_ref, isLoop) {
    let props = _extends5({}, _ref);
    const {
      key,
      defaultProps
    } = this;
    if (props.default)
      Object.assign(defaultProps, getDefaultProps(props, (value, prop) => /^on/.test(prop) ? resolveProp(value, key) : value));
    mergeActiveFn(this, props, "onProps");
    sendEvent(this, "onProps", props, this);
    const range = this._prepareNode(props);
    if (Object.isFrozen(this)) {
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    }
    const state = this._state;
    return scheduleProps(++this._lastCallId, {
      key,
      props,
      defaultProps,
      state,
      actions: {
        pause: () => {
          if (!isPaused(this)) {
            setPausedBit(this, true);
            flushCalls(state.pauseQueue);
            sendEvent(this, "onPause", getFinishedResult(this, checkFinished(this, this.animation.to)), this);
          }
        },
        resume: () => {
          if (isPaused(this)) {
            setPausedBit(this, false);
            if (isAnimating(this)) {
              this._resume();
            }
            flushCalls(state.resumeQueue);
            sendEvent(this, "onResume", getFinishedResult(this, checkFinished(this, this.animation.to)), this);
          }
        },
        start: this._merge.bind(this, range)
      }
    }).then((result) => {
      if (props.loop && result.finished && !(isLoop && result.noop)) {
        const nextProps = createLoopUpdate(props);
        if (nextProps) {
          return this._update(nextProps, true);
        }
      }
      return result;
    });
  }
  _merge(range, props, resolve) {
    if (props.cancel) {
      this.stop(true);
      return resolve(getCancelledResult(this));
    }
    const hasToProp = !is.und(range.to);
    const hasFromProp = !is.und(range.from);
    if (hasToProp || hasFromProp) {
      if (props.callId > this._lastToId) {
        this._lastToId = props.callId;
      } else {
        return resolve(getCancelledResult(this));
      }
    }
    const {
      key,
      defaultProps,
      animation: anim
    } = this;
    const {
      to: prevTo,
      from: prevFrom
    } = anim;
    let {
      to: to2 = prevTo,
      from = prevFrom
    } = range;
    if (hasFromProp && !hasToProp && (!props.default || is.und(to2))) {
      to2 = from;
    }
    if (props.reverse)
      [to2, from] = [from, to2];
    const hasFromChanged = !isEqual(from, prevFrom);
    if (hasFromChanged) {
      anim.from = from;
    }
    from = getFluidValue(from);
    const hasToChanged = !isEqual(to2, prevTo);
    if (hasToChanged) {
      this._focus(to2);
    }
    const hasAsyncTo = isAsyncTo(props.to);
    const {
      config: config2
    } = anim;
    const {
      decay,
      velocity
    } = config2;
    if (hasToProp || hasFromProp) {
      config2.velocity = 0;
    }
    if (props.config && !hasAsyncTo) {
      mergeConfig(config2, callProp(props.config, key), props.config !== defaultProps.config ? callProp(defaultProps.config, key) : void 0);
    }
    let node = getAnimated(this);
    if (!node || is.und(to2)) {
      return resolve(getFinishedResult(this, true));
    }
    const reset = is.und(props.reset) ? hasFromProp && !props.default : !is.und(from) && matchProp(props.reset, key);
    const value = reset ? from : this.get();
    const goal = computeGoal(to2);
    const isAnimatable = is.num(goal) || is.arr(goal) || isAnimatedString(goal);
    const immediate = !hasAsyncTo && (!isAnimatable || matchProp(defaultProps.immediate || props.immediate, key));
    if (hasToChanged) {
      const nodeType = getAnimatedType(to2);
      if (nodeType !== node.constructor) {
        if (immediate) {
          node = this._set(goal);
        } else
          throw Error(`Cannot animate between ${node.constructor.name} and ${nodeType.name}, as the "to" prop suggests`);
      }
    }
    const goalType = node.constructor;
    let started = hasFluidValue(to2);
    let finished = false;
    if (!started) {
      const hasValueChanged = reset || !hasAnimated(this) && hasFromChanged;
      if (hasToChanged || hasValueChanged) {
        finished = isEqual(computeGoal(value), goal);
        started = !finished;
      }
      if (!isEqual(anim.immediate, immediate) && !immediate || !isEqual(config2.decay, decay) || !isEqual(config2.velocity, velocity)) {
        started = true;
      }
    }
    if (finished && isAnimating(this)) {
      if (anim.changed && !reset) {
        started = true;
      } else if (!started) {
        this._stop(prevTo);
      }
    }
    if (!hasAsyncTo) {
      if (started || hasFluidValue(prevTo)) {
        anim.values = node.getPayload();
        anim.toValues = hasFluidValue(to2) ? null : goalType == AnimatedString ? [1] : toArray(goal);
      }
      if (anim.immediate != immediate) {
        anim.immediate = immediate;
        if (!immediate && !reset) {
          this._set(prevTo);
        }
      }
      if (started) {
        const {
          onRest
        } = anim;
        each(ACTIVE_EVENTS, (type) => mergeActiveFn(this, props, type));
        const result = getFinishedResult(this, checkFinished(this, prevTo));
        flushCalls(this._pendingCalls, result);
        this._pendingCalls.add(resolve);
        if (anim.changed)
          raf.batchedUpdates(() => {
            anim.changed = !reset;
            onRest == null ? void 0 : onRest(result, this);
            if (reset) {
              callProp(defaultProps.onRest, result);
            } else {
              anim.onStart == null ? void 0 : anim.onStart(result, this);
            }
          });
      }
    }
    if (reset) {
      this._set(value);
    }
    if (hasAsyncTo) {
      resolve(runAsync(props.to, props, this._state, this));
    } else if (started) {
      this._start();
    } else if (isAnimating(this) && !hasToChanged) {
      this._pendingCalls.add(resolve);
    } else {
      resolve(getNoopResult(value));
    }
  }
  _focus(value) {
    const anim = this.animation;
    if (value !== anim.to) {
      if (getFluidObservers(this)) {
        this._detach();
      }
      anim.to = value;
      if (getFluidObservers(this)) {
        this._attach();
      }
    }
  }
  _attach() {
    let priority2 = 0;
    const {
      to: to2
    } = this.animation;
    if (hasFluidValue(to2)) {
      addFluidObserver(to2, this);
      if (isFrameValue(to2)) {
        priority2 = to2.priority + 1;
      }
    }
    this.priority = priority2;
  }
  _detach() {
    const {
      to: to2
    } = this.animation;
    if (hasFluidValue(to2)) {
      removeFluidObserver(to2, this);
    }
  }
  _set(arg, idle = true) {
    const value = getFluidValue(arg);
    if (!is.und(value)) {
      const oldNode = getAnimated(this);
      if (!oldNode || !isEqual(value, oldNode.getValue())) {
        const nodeType = getAnimatedType(value);
        if (!oldNode || oldNode.constructor != nodeType) {
          setAnimated(this, nodeType.create(value));
        } else {
          oldNode.setValue(value);
        }
        if (oldNode) {
          raf.batchedUpdates(() => {
            this._onChange(value, idle);
          });
        }
      }
    }
    return getAnimated(this);
  }
  _onStart() {
    const anim = this.animation;
    if (!anim.changed) {
      anim.changed = true;
      sendEvent(this, "onStart", getFinishedResult(this, checkFinished(this, anim.to)), this);
    }
  }
  _onChange(value, idle) {
    if (!idle) {
      this._onStart();
      callProp(this.animation.onChange, value, this);
    }
    callProp(this.defaultProps.onChange, value, this);
    super._onChange(value, idle);
  }
  _start() {
    const anim = this.animation;
    getAnimated(this).reset(getFluidValue(anim.to));
    if (!anim.immediate) {
      anim.fromValues = anim.values.map((node) => node.lastPosition);
    }
    if (!isAnimating(this)) {
      setActiveBit(this, true);
      if (!isPaused(this)) {
        this._resume();
      }
    }
  }
  _resume() {
    if (globals.skipAnimation) {
      this.finish();
    } else {
      frameLoop.start(this);
    }
  }
  _stop(goal, cancel) {
    if (isAnimating(this)) {
      setActiveBit(this, false);
      const anim = this.animation;
      each(anim.values, (node) => {
        node.done = true;
      });
      if (anim.toValues) {
        anim.onChange = anim.onPause = anim.onResume = void 0;
      }
      callFluidObservers(this, {
        type: "idle",
        parent: this
      });
      const result = cancel ? getCancelledResult(this.get()) : getFinishedResult(this.get(), checkFinished(this, goal != null ? goal : anim.to));
      flushCalls(this._pendingCalls, result);
      if (anim.changed) {
        anim.changed = false;
        sendEvent(this, "onRest", result, this);
      }
    }
  }
};
function checkFinished(target, to2) {
  const goal = computeGoal(to2);
  const value = computeGoal(target.get());
  return isEqual(value, goal);
}
function createLoopUpdate(props, loop2 = props.loop, to2 = props.to) {
  let loopRet = callProp(loop2);
  if (loopRet) {
    const overrides = loopRet !== true && inferTo(loopRet);
    const reverse = (overrides || props).reverse;
    const reset = !overrides || overrides.reset;
    return createUpdate(_extends5({}, props, {
      loop: loop2,
      default: false,
      pause: void 0,
      to: !reverse || isAsyncTo(to2) ? to2 : void 0,
      from: reset ? props.from : void 0,
      reset
    }, overrides));
  }
}
function createUpdate(props) {
  const {
    to: to2,
    from
  } = props = inferTo(props);
  const keys = /* @__PURE__ */ new Set();
  if (is.obj(to2))
    findDefined(to2, keys);
  if (is.obj(from))
    findDefined(from, keys);
  props.keys = keys.size ? Array.from(keys) : null;
  return props;
}
function declareUpdate(props) {
  const update3 = createUpdate(props);
  if (is.und(update3.default)) {
    update3.default = getDefaultProps(update3);
  }
  return update3;
}
function findDefined(values, keys) {
  eachProp(values, (value, key) => value != null && keys.add(key));
}
var ACTIVE_EVENTS = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function mergeActiveFn(target, props, type) {
  target.animation[type] = props[type] !== getDefaultProp(props, type) ? resolveProp(props[type], target.key) : void 0;
}
function sendEvent(target, type, ...args) {
  var _target$animation$typ, _target$animation, _target$defaultProps$, _target$defaultProps;
  (_target$animation$typ = (_target$animation = target.animation)[type]) == null ? void 0 : _target$animation$typ.call(_target$animation, ...args);
  (_target$defaultProps$ = (_target$defaultProps = target.defaultProps)[type]) == null ? void 0 : _target$defaultProps$.call(_target$defaultProps, ...args);
}
var BATCHED_EVENTS = ["onStart", "onChange", "onRest"];
var nextId = 1;
var Controller = class {
  constructor(props, flush2) {
    this.id = nextId++;
    this.springs = {};
    this.queue = [];
    this.ref = void 0;
    this._flush = void 0;
    this._initialProps = void 0;
    this._lastAsyncId = 0;
    this._active = /* @__PURE__ */ new Set();
    this._changed = /* @__PURE__ */ new Set();
    this._started = false;
    this._item = void 0;
    this._state = {
      paused: false,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    };
    this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    };
    this._onFrame = this._onFrame.bind(this);
    if (flush2) {
      this._flush = flush2;
    }
    if (props) {
      this.start(_extends5({
        default: true
      }, props));
    }
  }
  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every((spring) => {
      return spring.idle && !spring.isDelayed && !spring.isPaused;
    });
  }
  get item() {
    return this._item;
  }
  set item(item) {
    this._item = item;
  }
  get() {
    const values = {};
    this.each((spring, key) => values[key] = spring.get());
    return values;
  }
  set(values) {
    for (const key in values) {
      const value = values[key];
      if (!is.und(value)) {
        this.springs[key].set(value);
      }
    }
  }
  update(props) {
    if (props) {
      this.queue.push(createUpdate(props));
    }
    return this;
  }
  start(props) {
    let {
      queue
    } = this;
    if (props) {
      queue = toArray(props).map(createUpdate);
    } else {
      this.queue = [];
    }
    if (this._flush) {
      return this._flush(this, queue);
    }
    prepareKeys(this, queue);
    return flushUpdateQueue(this, queue);
  }
  stop(arg, keys) {
    if (arg !== !!arg) {
      keys = arg;
    }
    if (keys) {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].stop(!!arg));
    } else {
      stopAsync(this._state, this._lastAsyncId);
      this.each((spring) => spring.stop(!!arg));
    }
    return this;
  }
  pause(keys) {
    if (is.und(keys)) {
      this.start({
        pause: true
      });
    } else {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].pause());
    }
    return this;
  }
  resume(keys) {
    if (is.und(keys)) {
      this.start({
        pause: false
      });
    } else {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].resume());
    }
    return this;
  }
  each(iterator) {
    eachProp(this.springs, iterator);
  }
  _onFrame() {
    const {
      onStart,
      onChange,
      onRest
    } = this._events;
    const active = this._active.size > 0;
    const changed = this._changed.size > 0;
    if (active && !this._started || changed && !this._started) {
      this._started = true;
      flush(onStart, ([onStart2, result]) => {
        result.value = this.get();
        onStart2(result, this, this._item);
      });
    }
    const idle = !active && this._started;
    const values = changed || idle && onRest.size ? this.get() : null;
    if (changed && onChange.size) {
      flush(onChange, ([onChange2, result]) => {
        result.value = values;
        onChange2(result, this, this._item);
      });
    }
    if (idle) {
      this._started = false;
      flush(onRest, ([onRest2, result]) => {
        result.value = values;
        onRest2(result, this, this._item);
      });
    }
  }
  eventObserved(event) {
    if (event.type == "change") {
      this._changed.add(event.parent);
      if (!event.idle) {
        this._active.add(event.parent);
      }
    } else if (event.type == "idle") {
      this._active.delete(event.parent);
    } else
      return;
    raf.onFrame(this._onFrame);
  }
};
function flushUpdateQueue(ctrl, queue) {
  return Promise.all(queue.map((props) => flushUpdate(ctrl, props))).then((results) => getCombinedResult(ctrl, results));
}
async function flushUpdate(ctrl, props, isLoop) {
  const {
    keys,
    to: to2,
    from,
    loop: loop2,
    onRest,
    onResolve
  } = props;
  const defaults2 = is.obj(props.default) && props.default;
  if (loop2) {
    props.loop = false;
  }
  if (to2 === false)
    props.to = null;
  if (from === false)
    props.from = null;
  const asyncTo = is.arr(to2) || is.fun(to2) ? to2 : void 0;
  if (asyncTo) {
    props.to = void 0;
    props.onRest = void 0;
    if (defaults2) {
      defaults2.onRest = void 0;
    }
  } else {
    each(BATCHED_EVENTS, (key) => {
      const handler = props[key];
      if (is.fun(handler)) {
        const queue = ctrl["_events"][key];
        props[key] = ({
          finished,
          cancelled
        }) => {
          const result2 = queue.get(handler);
          if (result2) {
            if (!finished)
              result2.finished = false;
            if (cancelled)
              result2.cancelled = true;
          } else {
            queue.set(handler, {
              value: null,
              finished: finished || false,
              cancelled: cancelled || false
            });
          }
        };
        if (defaults2) {
          defaults2[key] = props[key];
        }
      }
    });
  }
  const state = ctrl["_state"];
  if (props.pause === !state.paused) {
    state.paused = props.pause;
    flushCalls(props.pause ? state.pauseQueue : state.resumeQueue);
  } else if (state.paused) {
    props.pause = true;
  }
  const promises = (keys || Object.keys(ctrl.springs)).map((key) => ctrl.springs[key].start(props));
  const cancel = props.cancel === true || getDefaultProp(props, "cancel") === true;
  if (asyncTo || cancel && state.asyncId) {
    promises.push(scheduleProps(++ctrl["_lastAsyncId"], {
      props,
      state,
      actions: {
        pause: noop,
        resume: noop,
        start(props2, resolve) {
          if (cancel) {
            stopAsync(state, ctrl["_lastAsyncId"]);
            resolve(getCancelledResult(ctrl));
          } else {
            props2.onRest = onRest;
            resolve(runAsync(asyncTo, props2, state, ctrl));
          }
        }
      }
    }));
  }
  if (state.paused) {
    await new Promise((resume) => {
      state.resumeQueue.add(resume);
    });
  }
  const result = getCombinedResult(ctrl, await Promise.all(promises));
  if (loop2 && result.finished && !(isLoop && result.noop)) {
    const nextProps = createLoopUpdate(props, loop2, to2);
    if (nextProps) {
      prepareKeys(ctrl, [nextProps]);
      return flushUpdate(ctrl, nextProps, true);
    }
  }
  if (onResolve) {
    raf.batchedUpdates(() => onResolve(result, ctrl, ctrl.item));
  }
  return result;
}
function getSprings(ctrl, props) {
  const springs = _extends5({}, ctrl.springs);
  if (props) {
    each(toArray(props), (props2) => {
      if (is.und(props2.keys)) {
        props2 = createUpdate(props2);
      }
      if (!is.obj(props2.to)) {
        props2 = _extends5({}, props2, {
          to: void 0
        });
      }
      prepareSprings(springs, props2, (key) => {
        return createSpring(key);
      });
    });
  }
  setSprings(ctrl, springs);
  return springs;
}
function setSprings(ctrl, springs) {
  eachProp(springs, (spring, key) => {
    if (!ctrl.springs[key]) {
      ctrl.springs[key] = spring;
      addFluidObserver(spring, ctrl);
    }
  });
}
function createSpring(key, observer) {
  const spring = new SpringValue();
  spring.key = key;
  if (observer) {
    addFluidObserver(spring, observer);
  }
  return spring;
}
function prepareSprings(springs, props, create) {
  if (props.keys) {
    each(props.keys, (key) => {
      const spring = springs[key] || (springs[key] = create(key));
      spring["_prepareNode"](props);
    });
  }
}
function prepareKeys(ctrl, queue) {
  each(queue, (props) => {
    prepareSprings(ctrl.springs, props, (key) => {
      return createSpring(key, ctrl);
    });
  });
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i4;
  for (i4 = 0; i4 < sourceKeys.length; i4++) {
    key = sourceKeys[i4];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded$3 = ["children"];
var SpringContext = (_ref) => {
  let {
    children
  } = _ref, props = _objectWithoutPropertiesLoose2(_ref, _excluded$3);
  const inherited = (0, import_react23.useContext)(ctx);
  const pause = props.pause || !!inherited.pause, immediate = props.immediate || !!inherited.immediate;
  props = useMemoOne(() => ({
    pause,
    immediate
  }), [pause, immediate]);
  const {
    Provider
  } = ctx;
  return React16.createElement(Provider, {
    value: props
  }, children);
};
var ctx = makeContext(SpringContext, {});
SpringContext.Provider = ctx.Provider;
SpringContext.Consumer = ctx.Consumer;
function makeContext(target, init) {
  Object.assign(target, React16.createContext(init));
  target.Provider._context = target;
  target.Consumer._context = target;
  return target;
}
var SpringRef = () => {
  const current = [];
  const SpringRef2 = function SpringRef3(props) {
    deprecateDirectCall();
    const results = [];
    each(current, (ctrl, i4) => {
      if (is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update3 = _getProps(props, ctrl, i4);
        if (update3) {
          results.push(ctrl.start(update3));
        }
      }
    });
    return results;
  };
  SpringRef2.current = current;
  SpringRef2.add = function(ctrl) {
    if (!current.includes(ctrl)) {
      current.push(ctrl);
    }
  };
  SpringRef2.delete = function(ctrl) {
    const i4 = current.indexOf(ctrl);
    if (~i4)
      current.splice(i4, 1);
  };
  SpringRef2.pause = function() {
    each(current, (ctrl) => ctrl.pause(...arguments));
    return this;
  };
  SpringRef2.resume = function() {
    each(current, (ctrl) => ctrl.resume(...arguments));
    return this;
  };
  SpringRef2.set = function(values) {
    each(current, (ctrl) => ctrl.set(values));
  };
  SpringRef2.start = function(props) {
    const results = [];
    each(current, (ctrl, i4) => {
      if (is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update3 = this._getProps(props, ctrl, i4);
        if (update3) {
          results.push(ctrl.start(update3));
        }
      }
    });
    return results;
  };
  SpringRef2.stop = function() {
    each(current, (ctrl) => ctrl.stop(...arguments));
    return this;
  };
  SpringRef2.update = function(props) {
    each(current, (ctrl, i4) => ctrl.update(this._getProps(props, ctrl, i4)));
    return this;
  };
  const _getProps = function _getProps2(arg, ctrl, index2) {
    return is.fun(arg) ? arg(index2, ctrl) : arg;
  };
  SpringRef2._getProps = _getProps;
  return SpringRef2;
};
function useSprings(length, props, deps) {
  const propsFn = is.fun(props) && props;
  if (propsFn && !deps)
    deps = [];
  const ref = (0, import_react23.useMemo)(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
  const layoutId = (0, import_react23.useRef)(0);
  const forceUpdate = useForceUpdate();
  const state = (0, import_react23.useMemo)(() => ({
    ctrls: [],
    queue: [],
    flush(ctrl, updates2) {
      const springs2 = getSprings(ctrl, updates2);
      const canFlushSync = layoutId.current > 0 && !state.queue.length && !Object.keys(springs2).some((key) => !ctrl.springs[key]);
      return canFlushSync ? flushUpdateQueue(ctrl, updates2) : new Promise((resolve) => {
        setSprings(ctrl, springs2);
        state.queue.push(() => {
          resolve(flushUpdateQueue(ctrl, updates2));
        });
        forceUpdate();
      });
    }
  }), []);
  const ctrls = (0, import_react23.useRef)([...state.ctrls]);
  const updates = [];
  const prevLength = usePrev(length) || 0;
  (0, import_react23.useMemo)(() => {
    each(ctrls.current.slice(length, prevLength), (ctrl) => {
      detachRefs(ctrl, ref);
      ctrl.stop(true);
    });
    ctrls.current.length = length;
    declareUpdates(prevLength, length);
  }, [length]);
  (0, import_react23.useMemo)(() => {
    declareUpdates(0, Math.min(prevLength, length));
  }, deps);
  function declareUpdates(startIndex, endIndex) {
    for (let i4 = startIndex; i4 < endIndex; i4++) {
      const ctrl = ctrls.current[i4] || (ctrls.current[i4] = new Controller(null, state.flush));
      const update3 = propsFn ? propsFn(i4, ctrl) : props[i4];
      if (update3) {
        updates[i4] = declareUpdate(update3);
      }
    }
  }
  const springs = ctrls.current.map((ctrl, i4) => getSprings(ctrl, updates[i4]));
  const context = (0, import_react23.useContext)(SpringContext);
  const prevContext = usePrev(context);
  const hasContext = context !== prevContext && hasProps(context);
  useLayoutEffect2(() => {
    layoutId.current++;
    state.ctrls = ctrls.current;
    const {
      queue
    } = state;
    if (queue.length) {
      state.queue = [];
      each(queue, (cb) => cb());
    }
    each(ctrls.current, (ctrl, i4) => {
      ref == null ? void 0 : ref.add(ctrl);
      if (hasContext) {
        ctrl.start({
          default: context
        });
      }
      const update3 = updates[i4];
      if (update3) {
        replaceRef(ctrl, update3.ref);
        if (ctrl.ref) {
          ctrl.queue.push(update3);
        } else {
          ctrl.start(update3);
        }
      }
    });
  });
  useOnce(() => () => {
    each(state.ctrls, (ctrl) => ctrl.stop(true));
  });
  const values = springs.map((x2) => _extends5({}, x2));
  return ref ? [values, ref] : values;
}
function useSpring(props, deps) {
  const isFn = is.fun(props);
  const [[values], ref] = useSprings(1, isFn ? props : [props], isFn ? deps || [] : deps);
  return isFn || arguments.length == 2 ? [values, ref] : values;
}
var TransitionPhase;
(function(TransitionPhase2) {
  TransitionPhase2["MOUNT"] = "mount";
  TransitionPhase2["ENTER"] = "enter";
  TransitionPhase2["UPDATE"] = "update";
  TransitionPhase2["LEAVE"] = "leave";
})(TransitionPhase || (TransitionPhase = {}));
function useTransition(data, props, deps) {
  const propsFn = is.fun(props) && props;
  const {
    reset,
    sort,
    trail = 0,
    expires = true,
    exitBeforeEnter = false,
    onDestroyed,
    ref: propsRef,
    config: propsConfig
  } = propsFn ? propsFn() : props;
  const ref = (0, import_react23.useMemo)(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
  const items = toArray(data);
  const transitions = [];
  const usedTransitions = (0, import_react23.useRef)(null);
  const prevTransitions = reset ? null : usedTransitions.current;
  useLayoutEffect2(() => {
    usedTransitions.current = transitions;
  });
  useOnce(() => () => {
    each(usedTransitions.current, (t5) => {
      if (t5.expired) {
        clearTimeout(t5.expirationId);
      }
      detachRefs(t5.ctrl, ref);
      t5.ctrl.stop(true);
    });
  });
  const keys = getKeys(items, propsFn ? propsFn() : props, prevTransitions);
  const expired = reset && usedTransitions.current || [];
  useLayoutEffect2(() => each(expired, ({
    ctrl,
    item,
    key
  }) => {
    detachRefs(ctrl, ref);
    callProp(onDestroyed, item, key);
  }));
  const reused = [];
  if (prevTransitions)
    each(prevTransitions, (t5, i4) => {
      if (t5.expired) {
        clearTimeout(t5.expirationId);
        expired.push(t5);
      } else {
        i4 = reused[i4] = keys.indexOf(t5.key);
        if (~i4)
          transitions[i4] = t5;
      }
    });
  each(items, (item, i4) => {
    if (!transitions[i4]) {
      transitions[i4] = {
        key: keys[i4],
        item,
        phase: TransitionPhase.MOUNT,
        ctrl: new Controller()
      };
      transitions[i4].ctrl.item = item;
    }
  });
  if (reused.length) {
    let i4 = -1;
    const {
      leave
    } = propsFn ? propsFn() : props;
    each(reused, (keyIndex, prevIndex) => {
      const t5 = prevTransitions[prevIndex];
      if (~keyIndex) {
        i4 = transitions.indexOf(t5);
        transitions[i4] = _extends5({}, t5, {
          item: items[keyIndex]
        });
      } else if (leave) {
        transitions.splice(++i4, 0, t5);
      }
    });
  }
  if (is.fun(sort)) {
    transitions.sort((a3, b3) => sort(a3.item, b3.item));
  }
  let delay = -trail;
  const forceUpdate = useForceUpdate();
  const defaultProps = getDefaultProps(props);
  const changes = /* @__PURE__ */ new Map();
  const exitingTransitions = (0, import_react23.useRef)(/* @__PURE__ */ new Map());
  const forceChange = (0, import_react23.useRef)(false);
  each(transitions, (t5, i4) => {
    const key = t5.key;
    const prevPhase = t5.phase;
    const p2 = propsFn ? propsFn() : props;
    let to2;
    let phase;
    let propsDelay = callProp(p2.delay || 0, key);
    if (prevPhase == TransitionPhase.MOUNT) {
      to2 = p2.enter;
      phase = TransitionPhase.ENTER;
    } else {
      const isLeave = keys.indexOf(key) < 0;
      if (prevPhase != TransitionPhase.LEAVE) {
        if (isLeave) {
          to2 = p2.leave;
          phase = TransitionPhase.LEAVE;
        } else if (to2 = p2.update) {
          phase = TransitionPhase.UPDATE;
        } else
          return;
      } else if (!isLeave) {
        to2 = p2.enter;
        phase = TransitionPhase.ENTER;
      } else
        return;
    }
    to2 = callProp(to2, t5.item, i4);
    to2 = is.obj(to2) ? inferTo(to2) : {
      to: to2
    };
    if (!to2.config) {
      const config2 = propsConfig || defaultProps.config;
      to2.config = callProp(config2, t5.item, i4, phase);
    }
    delay += trail;
    const payload = _extends5({}, defaultProps, {
      delay: propsDelay + delay,
      ref: propsRef,
      immediate: p2.immediate,
      reset: false
    }, to2);
    if (phase == TransitionPhase.ENTER && is.und(payload.from)) {
      const _p = propsFn ? propsFn() : props;
      const from = is.und(_p.initial) || prevTransitions ? _p.from : _p.initial;
      payload.from = callProp(from, t5.item, i4);
    }
    const {
      onResolve
    } = payload;
    payload.onResolve = (result) => {
      callProp(onResolve, result);
      const transitions2 = usedTransitions.current;
      const t6 = transitions2.find((t7) => t7.key === key);
      if (!t6)
        return;
      if (result.cancelled && t6.phase != TransitionPhase.UPDATE) {
        return;
      }
      if (t6.ctrl.idle) {
        const idle = transitions2.every((t7) => t7.ctrl.idle);
        if (t6.phase == TransitionPhase.LEAVE) {
          const expiry = callProp(expires, t6.item);
          if (expiry !== false) {
            const expiryMs = expiry === true ? 0 : expiry;
            t6.expired = true;
            if (!idle && expiryMs > 0) {
              if (expiryMs <= 2147483647)
                t6.expirationId = setTimeout(forceUpdate, expiryMs);
              return;
            }
          }
        }
        if (idle && transitions2.some((t7) => t7.expired)) {
          exitingTransitions.current.delete(t6);
          if (exitBeforeEnter) {
            forceChange.current = true;
          }
          forceUpdate();
        }
      }
    };
    const springs = getSprings(t5.ctrl, payload);
    if (phase === TransitionPhase.LEAVE && exitBeforeEnter) {
      exitingTransitions.current.set(t5, {
        phase,
        springs,
        payload
      });
    } else {
      changes.set(t5, {
        phase,
        springs,
        payload
      });
    }
  });
  const context = (0, import_react23.useContext)(SpringContext);
  const prevContext = usePrev(context);
  const hasContext = context !== prevContext && hasProps(context);
  useLayoutEffect2(() => {
    if (hasContext) {
      each(transitions, (t5) => {
        t5.ctrl.start({
          default: context
        });
      });
    }
  }, [context]);
  each(changes, (_2, t5) => {
    if (exitingTransitions.current.size) {
      const ind = transitions.findIndex((state) => state.key === t5.key);
      transitions.splice(ind, 1);
    }
  });
  useLayoutEffect2(() => {
    each(exitingTransitions.current.size ? exitingTransitions.current : changes, ({
      phase,
      payload
    }, t5) => {
      const {
        ctrl
      } = t5;
      t5.phase = phase;
      ref == null ? void 0 : ref.add(ctrl);
      if (hasContext && phase == TransitionPhase.ENTER) {
        ctrl.start({
          default: context
        });
      }
      if (payload) {
        replaceRef(ctrl, payload.ref);
        if (ctrl.ref && !forceChange.current) {
          ctrl.update(payload);
        } else {
          ctrl.start(payload);
          if (forceChange.current) {
            forceChange.current = false;
          }
        }
      }
    });
  }, reset ? void 0 : deps);
  const renderTransitions = (render) => React16.createElement(React16.Fragment, null, transitions.map((t5, i4) => {
    const {
      springs
    } = changes.get(t5) || t5.ctrl;
    const elem = render(_extends5({}, springs), t5.item, t5, i4);
    return elem && elem.type ? React16.createElement(elem.type, _extends5({}, elem.props, {
      key: is.str(t5.key) || is.num(t5.key) ? t5.key : t5.ctrl.id,
      ref: elem.ref
    })) : elem;
  }));
  return ref ? [renderTransitions, ref] : renderTransitions;
}
var nextKey = 1;
function getKeys(items, {
  key,
  keys = key
}, prevTransitions) {
  if (keys === null) {
    const reused = /* @__PURE__ */ new Set();
    return items.map((item) => {
      const t5 = prevTransitions && prevTransitions.find((t6) => t6.item === item && t6.phase !== TransitionPhase.LEAVE && !reused.has(t6));
      if (t5) {
        reused.add(t5);
        return t5.key;
      }
      return nextKey++;
    });
  }
  return is.und(keys) ? items : is.fun(keys) ? items.map(keys) : toArray(keys);
}
var Interpolation = class extends FrameValue {
  constructor(source, args) {
    super();
    this.key = void 0;
    this.idle = true;
    this.calc = void 0;
    this._active = /* @__PURE__ */ new Set();
    this.source = source;
    this.calc = createInterpolator(...args);
    const value = this._get();
    const nodeType = getAnimatedType(value);
    setAnimated(this, nodeType.create(value));
  }
  advance(_dt) {
    const value = this._get();
    const oldValue = this.get();
    if (!isEqual(value, oldValue)) {
      getAnimated(this).setValue(value);
      this._onChange(value, this.idle);
    }
    if (!this.idle && checkIdle(this._active)) {
      becomeIdle(this);
    }
  }
  _get() {
    const inputs = is.arr(this.source) ? this.source.map(getFluidValue) : toArray(getFluidValue(this.source));
    return this.calc(...inputs);
  }
  _start() {
    if (this.idle && !checkIdle(this._active)) {
      this.idle = false;
      each(getPayload(this), (node) => {
        node.done = false;
      });
      if (globals.skipAnimation) {
        raf.batchedUpdates(() => this.advance());
        becomeIdle(this);
      } else {
        frameLoop.start(this);
      }
    }
  }
  _attach() {
    let priority2 = 1;
    each(toArray(this.source), (source) => {
      if (hasFluidValue(source)) {
        addFluidObserver(source, this);
      }
      if (isFrameValue(source)) {
        if (!source.idle) {
          this._active.add(source);
        }
        priority2 = Math.max(priority2, source.priority + 1);
      }
    });
    this.priority = priority2;
    this._start();
  }
  _detach() {
    each(toArray(this.source), (source) => {
      if (hasFluidValue(source)) {
        removeFluidObserver(source, this);
      }
    });
    this._active.clear();
    becomeIdle(this);
  }
  eventObserved(event) {
    if (event.type == "change") {
      if (event.idle) {
        this.advance();
      } else {
        this._active.add(event.parent);
        this._start();
      }
    } else if (event.type == "idle") {
      this._active.delete(event.parent);
    } else if (event.type == "priority") {
      this.priority = toArray(this.source).reduce((highest, parent) => Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1), 0);
    }
  }
};
function isIdle(source) {
  return source.idle !== false;
}
function checkIdle(active) {
  return !active.size || Array.from(active).every(isIdle);
}
function becomeIdle(self) {
  if (!self.idle) {
    self.idle = true;
    each(getPayload(self), (node) => {
      node.done = true;
    });
    callFluidObservers(self, {
      type: "idle",
      parent: self
    });
  }
}
globals.assign({
  createStringInterpolator,
  to: (source, args) => new Interpolation(source, args)
});
var update2 = frameLoop.advance;

// node_modules/@react-spring/web/dist/react-spring-web.esm.js
var import_react_dom = __toESM(require_react_dom());
function _objectWithoutPropertiesLoose3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i4;
  for (i4 = 0; i4 < sourceKeys.length; i4++) {
    key = sourceKeys[i4];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded$2 = ["style", "children", "scrollTop", "scrollLeft"];
var isCustomPropRE = /^--/;
function dangerousStyleValue(name, value) {
  if (value == null || typeof value === "boolean" || value === "")
    return "";
  if (typeof value === "number" && value !== 0 && !isCustomPropRE.test(name) && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]))
    return value + "px";
  return ("" + value).trim();
}
var attributeCache = {};
function applyAnimatedValues(instance, props) {
  if (!instance.nodeType || !instance.setAttribute) {
    return false;
  }
  const isFilterElement = instance.nodeName === "filter" || instance.parentNode && instance.parentNode.nodeName === "filter";
  const _ref = props, {
    style,
    children,
    scrollTop,
    scrollLeft
  } = _ref, attributes = _objectWithoutPropertiesLoose3(_ref, _excluded$2);
  const values = Object.values(attributes);
  const names = Object.keys(attributes).map((name) => isFilterElement || instance.hasAttribute(name) ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, (n4) => "-" + n4.toLowerCase())));
  if (children !== void 0) {
    instance.textContent = children;
  }
  for (let name in style) {
    if (style.hasOwnProperty(name)) {
      const value = dangerousStyleValue(name, style[name]);
      if (isCustomPropRE.test(name)) {
        instance.style.setProperty(name, value);
      } else {
        instance.style[name] = value;
      }
    }
  }
  names.forEach((name, i4) => {
    instance.setAttribute(name, values[i4]);
  });
  if (scrollTop !== void 0) {
    instance.scrollTop = scrollTop;
  }
  if (scrollLeft !== void 0) {
    instance.scrollLeft = scrollLeft;
  }
}
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var prefixKey = (prefix2, key) => prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
var prefixes = ["Webkit", "Ms", "Moz", "O"];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach((prefix2) => acc[prefixKey(prefix2, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);
var _excluded$1 = ["x", "y", "z"];
var domTransforms = /^(matrix|translate|scale|rotate|skew)/;
var pxTransforms = /^(translate)/;
var degTransforms = /^(rotate|skew)/;
var addUnit = (value, unit) => is.num(value) && value !== 0 ? value + unit : value;
var isValueIdentity = (value, id) => is.arr(value) ? value.every((v2) => isValueIdentity(v2, id)) : is.num(value) ? value === id : parseFloat(value) === id;
var AnimatedStyle = class extends AnimatedObject {
  constructor(_ref) {
    let {
      x: x2,
      y: y2,
      z: z2
    } = _ref, style = _objectWithoutPropertiesLoose3(_ref, _excluded$1);
    const inputs = [];
    const transforms = [];
    if (x2 || y2 || z2) {
      inputs.push([x2 || 0, y2 || 0, z2 || 0]);
      transforms.push((xyz) => [`translate3d(${xyz.map((v2) => addUnit(v2, "px")).join(",")})`, isValueIdentity(xyz, 0)]);
    }
    eachProp(style, (value, key) => {
      if (key === "transform") {
        inputs.push([value || ""]);
        transforms.push((transform) => [transform, transform === ""]);
      } else if (domTransforms.test(key)) {
        delete style[key];
        if (is.und(value))
          return;
        const unit = pxTransforms.test(key) ? "px" : degTransforms.test(key) ? "deg" : "";
        inputs.push(toArray(value));
        transforms.push(key === "rotate3d" ? ([x3, y3, z3, deg]) => [`rotate3d(${x3},${y3},${z3},${addUnit(deg, unit)})`, isValueIdentity(deg, 0)] : (input) => [`${key}(${input.map((v2) => addUnit(v2, unit)).join(",")})`, isValueIdentity(input, key.startsWith("scale") ? 1 : 0)]);
      }
    });
    if (inputs.length) {
      style.transform = new FluidTransform(inputs, transforms);
    }
    super(style);
  }
};
var FluidTransform = class extends FluidValue {
  constructor(inputs, transforms) {
    super();
    this._value = null;
    this.inputs = inputs;
    this.transforms = transforms;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let transform = "";
    let identity = true;
    each(this.inputs, (input, i4) => {
      const arg1 = getFluidValue(input[0]);
      const [t5, id] = this.transforms[i4](is.arr(arg1) ? arg1 : input.map(getFluidValue));
      transform += " " + t5;
      identity = identity && id;
    });
    return identity ? "none" : transform;
  }
  observerAdded(count) {
    if (count == 1)
      each(this.inputs, (input) => each(input, (value) => hasFluidValue(value) && addFluidObserver(value, this)));
  }
  observerRemoved(count) {
    if (count == 0)
      each(this.inputs, (input) => each(input, (value) => hasFluidValue(value) && removeFluidObserver(value, this)));
  }
  eventObserved(event) {
    if (event.type == "change") {
      this._value = null;
    }
    callFluidObservers(this, event);
  }
};
var primitives = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
var _excluded = ["scrollTop", "scrollLeft"];
globals.assign({
  batchedUpdates: import_react_dom.unstable_batchedUpdates,
  createStringInterpolator,
  colors: colors2
});
var host = createHost(primitives, {
  applyAnimatedValues,
  createAnimatedStyle: (style) => new AnimatedStyle(style),
  getComponentProps: (_ref) => {
    let props = _objectWithoutPropertiesLoose3(_ref, _excluded);
    return props;
  }
});
var animated = host.animated;

// app/common/layout/header/hamburger-menu.tsx
var HamburgerMenu = ({
  isOpen,
  setIsOpen
}) => {
  const spring = useSpring({
    from: { opacity: 0, transform: `translateX(100vw)` },
    to: isOpen ? { opacity: 1, transform: `translateX(0vw)` } : { opacity: 0, transform: `translateX(100vw)` }
  });
  (0, import_react24.useEffect)(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("resize", handleResize);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, setIsOpen]);
  return /* @__PURE__ */ import_react24.default.createElement(animated.menu, {
    style: spring,
    className: "bg-theme-lteal absolute top-0 right-0 h-screen w-screen z-40"
  }, /* @__PURE__ */ import_react24.default.createElement("nav", {
    role: "navigation",
    className: "h-full w-full"
  }, /* @__PURE__ */ import_react24.default.createElement("ul", {
    className: "h-full w-full space-y-4 flex flex-col justify-center items-center"
  }, menuItems.map((i4, idx) => /* @__PURE__ */ import_react24.default.createElement("li", {
    key: `ham-${i4.name}_${idx}`,
    className: "flex justify-center w-full"
  }, /* @__PURE__ */ import_react24.default.createElement(LinkText, {
    href: i4.path,
    className: "text-2xl",
    childrenClassName: "grid grid-cols-[1fr_200px] justify-items-center",
    animateScale: false
  }, i4.icon, /* @__PURE__ */ import_react24.default.createElement("span", {
    className: "justify-self-end"
  }, i4.name)))))));
};

// app/common/layout/header/logo.tsx
init_react();
var Circle = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-theme-lgray dark:bg-theme-white w-10 h-10 absolute rounded-full border-0 transition ease-in-out  duration-200 group-hover:bg-opacity-60"
  });
};
var Logo = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative w-10 h-10 group"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: links.home()
  }, /* @__PURE__ */ React.createElement(Circle, null), /* @__PURE__ */ React.createElement("img", {
    src: logo_dark_default,
    className: "absolute w-10"
  })));
};

// app/common/layout/header/header.tsx
var ICON_SIZE2 = 24;
var Header = () => {
  const [mode, setMode] = useTheme();
  const [mobileNav, toggleMobileNav] = (0, import_react26.useState)(false);
  const menuRef = (0, import_react26.useRef)(null);
  useClickOutside(menuRef, () => toggleMobileNav(false));
  const setIsOpen = (0, import_react26.useCallback)(() => {
    toggleMobileNav(!mobileNav);
  }, [mobileNav]);
  return /* @__PURE__ */ React.createElement("header", {
    role: "banner",
    className: "flex dark:text-theme-white py-2 px-6 z-40"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid gap-4 grid-cols-[auto_1fr]"
  }, /* @__PURE__ */ React.createElement(Logo, null), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement(Moon_esm_default, {
    size: ICON_SIZE2,
    className: "cursor-pointer",
    onClick: () => setMode("dark")
  }), /* @__PURE__ */ React.createElement(Switch2, {
    checked: mode === "light" ? true : false,
    onCheckedChange: (checked) => setMode(checked ? "light" : "dark")
  }), /* @__PURE__ */ React.createElement(Sun_esm_default, {
    size: ICON_SIZE2,
    className: "cursor-pointer",
    onClick: () => setMode("light")
  }))), /* @__PURE__ */ React.createElement("nav", {
    role: "navigation",
    className: "hidden md:flex flex-grow items-center justify-end space-x-4"
  }, menuItems.map((mi, idx) => {
    if (mi.mobileOnly) {
      return;
    }
    return /* @__PURE__ */ React.createElement(import_react26.Fragment, {
      key: `header-${mi.name}`
    }, /* @__PURE__ */ React.createElement(LinkText, {
      href: mi.path
    }, mi.name), idx !== menuItems.length - 1 ? /* @__PURE__ */ React.createElement(Divider, {
      orientation: "vertical",
      color: mode === "dark" ? colors.dark_teal : colors.light_teal
    }) : null);
  })), /* @__PURE__ */ React.createElement("div", {
    ref: menuRef,
    className: "md:hidden flex justify-end flex-grow"
  }, /* @__PURE__ */ React.createElement(HamburgerIcon, {
    isOpen: mobileNav,
    setIsOpen
  }), /* @__PURE__ */ React.createElement(HamburgerMenu, {
    isOpen: mobileNav,
    setIsOpen
  })));
};

// app/common/layout/layout.tsx
var OverlayTriangle = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "fixed w-screen h-full -bottom-[85%] -skew-y-[25deg] md:-skew-y-12 bg-theme-blue dark:bg-[rgb(0,0,0)] z-10 pointer-events-none before:border-2 before:relative after:absolute",
    style: { opacity: 0.2 }
  });
};
var Layout = ({ children, hideFooter }) => {
  return /* @__PURE__ */ React.createElement(import_react27.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-rows-[60px_1fr_60px] h-full w-full"
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("main", {
    role: "main",
    className: "overflow-y-scroll z-30"
  }, children), !hideFooter ? /* @__PURE__ */ React.createElement(Footer, null) : null), /* @__PURE__ */ React.createElement(OverlayTriangle, null));
};

// app/common/layout/index.ts
init_react();

export {
  Pen_esm_default,
  clsx_m_default,
  PillButton,
  Tab,
  TabsList,
  Divider,
  colors,
  useTheme,
  links,
  useSpring,
  useTransition,
  animated,
  Layout
};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=/build/_shared/chunk-XCW554LA.js.map
