import {
  require_react_dom
} from "/build/_shared/chunk-7DAOFPS7.js";
import {
  Divider,
  Switch,
  ThemeCtx,
  colors,
  re
} from "/build/_shared/chunk-YTH2AJ3P.js";
import {
  Link
} from "/build/_shared/chunk-SPG4GL7V.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

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
  var k, y, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += " ");
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }
  return str;
}
function clsx_m_default() {
  var i = 0, tmp, x, str = "";
  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (x = toVal(tmp)) {
        str && (str += " ");
        str += x;
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
var TabListItem = re("li", {
  cursor: "pointer",
  padding: "20px 8px 8px",
  position: "relative",
  variants: {
    active: {
      true: {
        "&::before": {
          content: "",
          position: "absolute",
          bottom: "-2px",
          height: "3px",
          width: "calc(100% - 16px)"
        }
      }
    }
  }
});
var Tab = ({ children, active, className, ...rest }) => {
  return /* @__PURE__ */ React.createElement(TabListItem, {
    ...rest,
    active,
    className: clsx_m_default([
      className,
      "transition-colors",
      "duration-[250ms]",
      "ease-in-out",
      "hover:text-theme-lteal",
      "dark:hover:text-theme-orange",
      "dark:before:bg-theme-orange",
      "before:bg-theme-dteal"
    ])
  }, children);
};

// app/common/ui-elements/button/tabs/tabs-list.tsx
init_react();
var StyledOL = re("ol", {
  "position": "relative",
  "maxWidth": "max-content",
  "marginBottom": "1.25rem",
  "display": "flex",
  "alignItems": "center",
  "borderBottomWidth": "1px",
  "padding": "0 12px",
  "&::before": {
    content: "",
    height: "4px",
    width: "4px",
    position: "absolute",
    bottom: "-2.5px",
    left: 0
  },
  "&::after": {
    content: "",
    height: "4px",
    width: "4px",
    position: "absolute",
    bottom: "-2.5px",
    right: 0
  }
});
var TabsList = ({ children, className }) => {
  return /* @__PURE__ */ React.createElement(StyledOL, {
    className: clsx_m_default([
      className,
      "dark:before:bg-theme-orange",
      "before:bg-theme-dteal",
      "dark:after:bg-theme-orange",
      "after:bg-theme-dteal",
      "dark:border-theme-orange",
      "border-theme-dteal"
    ])
  }, Array.isArray(children) ? children.map((c) => c) : children);
};

// node_modules/phosphor-react/dist/index.esm.js
init_react();

// node_modules/phosphor-react/dist/lib/index.esm.js
init_react();
var import_react8 = __toESM(require_react());
var IconContext = /* @__PURE__ */ (0, import_react8.createContext)({
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
var import_react9 = __toESM(require_react());

// node_modules/phosphor-react/dist/_virtual/_rollupPluginBabelHelpers.js
init_react();
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/phosphor-react/dist/lib/IconBase.esm.js
var IconBase = /* @__PURE__ */ (0, import_react9.forwardRef)(function(props, ref) {
  var color = props.color, size = props.size, weight = props.weight, mirrored = props.mirrored, children = props.children, renderPath17 = props.renderPath, restProps = _objectWithoutPropertiesLoose(props, ["color", "size", "weight", "mirrored", "children", "renderPath"]);
  var _useContext = (0, import_react9.useContext)(IconContext), _useContext$color = _useContext.color, contextColor = _useContext$color === void 0 ? "currentColor" : _useContext$color, contextSize = _useContext.size, _useContext$weight = _useContext.weight, contextWeight = _useContext$weight === void 0 ? "regular" : _useContext$weight, _useContext$mirrored = _useContext.mirrored, contextMirrored = _useContext$mirrored === void 0 ? false : _useContext$mirrored, restContext = _objectWithoutPropertiesLoose(_useContext, ["color", "size", "weight", "mirrored"]);
  return import_react9.default.createElement("svg", Object.assign({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size != null ? size : contextSize,
    height: size != null ? size : contextSize,
    fill: color != null ? color : contextColor,
    viewBox: "0 0 256 256",
    transform: mirrored || contextMirrored ? "scale(-1, 1)" : void 0
  }, restContext, restProps), children, import_react9.default.createElement("rect", {
    width: "256",
    height: "256",
    fill: "none"
  }), renderPath17(weight != null ? weight : contextWeight, color != null ? color : contextColor));
});
IconBase.displayName = "IconBase";
var IconBase_esm_default = IconBase;

// node_modules/phosphor-react/dist/icons/Code.esm.js
init_react();
var import_react10 = __toESM(require_react());
var pathsByWeight = /* @__PURE__ */ new Map();
pathsByWeight.set("bold", function(color) {
  return import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("polyline", {
    points: "64 88 16 128 64 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react10.default.createElement("polyline", {
    points: "192 88 240 128 192 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react10.default.createElement("line", {
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
  return import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("polyline", {
    points: "64 88 16 128 64 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react10.default.createElement("polyline", {
    points: "192 88 240 128 192 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react10.default.createElement("line", {
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
  return import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("path", {
    d: "M70.1,82.9a7.8,7.8,0,0,0-11.2-1l-48,40a7.9,7.9,0,0,0,0,12.2l48,40a7.8,7.8,0,0,0,11.2-1,7.8,7.8,0,0,0-1-11.2L28.5,128,69.1,94.1A7.8,7.8,0,0,0,70.1,82.9Z"
  }), import_react10.default.createElement("path", {
    d: "M245.1,121.9l-48-40a8,8,0,0,0-10.2,12.2L227.5,128l-40.6,33.9A8,8,0,0,0,192,176a7.7,7.7,0,0,0,5.1-1.9l48-40a7.9,7.9,0,0,0,0-12.2Z"
  }), import_react10.default.createElement("path", {
    d: "M162.7,32.5a7.9,7.9,0,0,0-10.2,4.8l-64,176a7.9,7.9,0,0,0,4.8,10.2,8.6,8.6,0,0,0,2.7.5,7.9,7.9,0,0,0,7.5-5.3l64-176A7.9,7.9,0,0,0,162.7,32.5Z"
  }));
});
pathsByWeight.set("light", function(color) {
  return import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("polyline", {
    points: "64 88 16 128 64 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react10.default.createElement("polyline", {
    points: "192 88 240 128 192 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react10.default.createElement("line", {
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
  return import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("polyline", {
    points: "64 88 16 128 64 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react10.default.createElement("polyline", {
    points: "192 88 240 128 192 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react10.default.createElement("line", {
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
  return import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("polyline", {
    points: "64 88 16 128 64 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react10.default.createElement("polyline", {
    points: "192 88 240 128 192 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react10.default.createElement("line", {
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
var Code = /* @__PURE__ */ (0, import_react10.forwardRef)(function(props, ref) {
  return import_react10.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath
  }));
});
Code.displayName = "Code";
var Code_esm_default = Code;

// node_modules/phosphor-react/dist/icons/GithubLogo.esm.js
init_react();
var import_react11 = __toESM(require_react());
var pathsByWeight2 = /* @__PURE__ */ new Map();
pathsByWeight2.set("bold", function(color) {
  return import_react11.default.createElement(import_react11.default.Fragment, null, import_react11.default.createElement("path", {
    d: "M84,240a23.9,23.9,0,0,0,24-24V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react11.default.createElement("path", {
    d: "M172,240a23.9,23.9,0,0,1-24-24V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react11.default.createElement("path", {
    d: "M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react11.default.createElement("path", {
    d: "M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react11.default.createElement("path", {
    d: "M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight2.set("duotone", function(color) {
  return import_react11.default.createElement(import_react11.default.Fragment, null, import_react11.default.createElement("path", {
    d: "M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z",
    opacity: "0.2"
  }), import_react11.default.createElement("path", {
    d: "M84,240a23.9,23.9,0,0,0,24-24V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("path", {
    d: "M172,240a23.9,23.9,0,0,1-24-24V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("path", {
    d: "M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("path", {
    d: "M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("path", {
    d: "M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight2.set("fill", function() {
  return import_react11.default.createElement(import_react11.default.Fragment, null, import_react11.default.createElement("path", {
    d: "M224,224a8,8,0,0,1-8,8,32.1,32.1,0,0,1-32-32v-8a16,16,0,0,0-16-16H156v40a16,16,0,0,0,16,16,8,8,0,0,1,0,16,32.1,32.1,0,0,1-32-32V176H116v40a32.1,32.1,0,0,1-32,32,8,8,0,0,1,0-16,16,16,0,0,0,16-16V176H88a16,16,0,0,0-16,16v8a32.1,32.1,0,0,1-32,32,8,8,0,0,1,0-16,16,16,0,0,0,16-16v-8a32.1,32.1,0,0,1,14.8-27A55.8,55.8,0,0,1,48,120v-8a58,58,0,0,1,7.7-28.3A59.9,59.9,0,0,1,61.1,36,7.8,7.8,0,0,1,68,32a59.7,59.7,0,0,1,48,24h24a59.7,59.7,0,0,1,48-24,7.8,7.8,0,0,1,6.9,4,59.9,59.9,0,0,1,5.4,47.7A58,58,0,0,1,208,112v8a55.8,55.8,0,0,1-22.8,45A32.1,32.1,0,0,1,200,192v8a16,16,0,0,0,16,16A8,8,0,0,1,224,224Z"
  }));
});
pathsByWeight2.set("light", function(color) {
  return import_react11.default.createElement(import_react11.default.Fragment, null, import_react11.default.createElement("path", {
    d: "M84,240a23.9,23.9,0,0,0,24-24V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react11.default.createElement("path", {
    d: "M172,240a23.9,23.9,0,0,1-24-24V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react11.default.createElement("path", {
    d: "M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react11.default.createElement("path", {
    d: "M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react11.default.createElement("path", {
    d: "M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight2.set("thin", function(color) {
  return import_react11.default.createElement(import_react11.default.Fragment, null, import_react11.default.createElement("path", {
    d: "M84,240a23.9,23.9,0,0,0,24-24V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react11.default.createElement("path", {
    d: "M172,240a23.9,23.9,0,0,1-24-24V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react11.default.createElement("path", {
    d: "M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react11.default.createElement("path", {
    d: "M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react11.default.createElement("path", {
    d: "M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight2.set("regular", function(color) {
  return import_react11.default.createElement(import_react11.default.Fragment, null, import_react11.default.createElement("path", {
    d: "M84,240a23.9,23.9,0,0,0,24-24V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("path", {
    d: "M172,240a23.9,23.9,0,0,1-24-24V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("path", {
    d: "M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("path", {
    d: "M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("path", {
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
var GithubLogo = /* @__PURE__ */ (0, import_react11.forwardRef)(function(props, ref) {
  return import_react11.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath3
  }));
});
GithubLogo.displayName = "GithubLogo";
var GithubLogo_esm_default = GithubLogo;

// node_modules/phosphor-react/dist/icons/GitlabLogo.esm.js
init_react();
var import_react12 = __toESM(require_react());
var pathsByWeight3 = /* @__PURE__ */ new Map();
pathsByWeight3.set("bold", function(color) {
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement("path", {
    d: "M83,112h90l22.6-60.3a4,4,0,0,1,7.6.4l27.4,102.5a8.2,8.2,0,0,1-3.2,8.6l-94.8,65.6a8.1,8.1,0,0,1-9.2,0L28.6,163.2a8.2,8.2,0,0,1-3.2-8.6L52.8,52.1a4,4,0,0,1,7.6-.4Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react12.default.createElement("line", {
    x1: "128.7",
    y1: "230.2",
    x2: "173",
    y2: "112",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react12.default.createElement("polyline", {
    points: "83 112 83 112 127.3 230.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight3.set("duotone", function(color) {
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement("path", {
    d: "M127.3,230.2,83,112h90L128.7,230.2h0a3.3,3.3,0,0,1-1.4,0Z",
    opacity: "0.2"
  }), import_react12.default.createElement("path", {
    d: "M219.2,112l-16-59.9a4,4,0,0,0-7.6-.4L173,112Z",
    opacity: "0.2"
  }), import_react12.default.createElement("path", {
    d: "M36.8,112l16-59.9a4,4,0,0,1,7.6-.4L83,112H36.8Z",
    opacity: "0.2"
  }), import_react12.default.createElement("path", {
    d: "M83,112h90l22.6-60.3a4,4,0,0,1,7.6.4l27.4,102.5a8.2,8.2,0,0,1-3.2,8.6l-94.8,65.6a8.1,8.1,0,0,1-9.2,0L28.6,163.2a8.2,8.2,0,0,1-3.2-8.6L52.8,52.1a4,4,0,0,1,7.6-.4Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react12.default.createElement("polyline", {
    points: "128.7 230.2 173 112 219.2 112",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react12.default.createElement("polyline", {
    points: "36.8 112 83 112 83 112 127.3 230.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight3.set("fill", function() {
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement("path", {
    d: "M238.3,152.5,211,50a12,12,0,0,0-22.9-1.1L167.5,104h-79L67.9,48.9A12,12,0,0,0,45,50L17.7,152.5a16.1,16.1,0,0,0,6.4,17.3l94.8,65.6a15.5,15.5,0,0,0,7.1,2.7h4a15.5,15.5,0,0,0,7.1-2.7l94.8-65.6A16.1,16.1,0,0,0,238.3,152.5ZM33.2,156.6,42.9,120H77.5l34,90.9Zm111.3,54.3,34-90.9h34.6l9.7,36.6Z"
  }));
});
pathsByWeight3.set("light", function(color) {
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement("path", {
    d: "M83,112h90l22.6-60.3a4,4,0,0,1,7.6.4l27.4,102.5a8.2,8.2,0,0,1-3.2,8.6l-94.8,65.6a8.1,8.1,0,0,1-9.2,0L28.6,163.2a8.2,8.2,0,0,1-3.2-8.6L52.8,52.1a4,4,0,0,1,7.6-.4Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react12.default.createElement("polyline", {
    points: "128.7 230.2 173 112 219.2 112",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react12.default.createElement("polyline", {
    points: "36.8 112 83 112 83 112 127.3 230.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight3.set("thin", function(color) {
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement("path", {
    d: "M83,112h90l22.6-60.3a4,4,0,0,1,7.6.4l27.4,102.5a8.2,8.2,0,0,1-3.2,8.6l-94.8,65.6a8.1,8.1,0,0,1-9.2,0L28.6,163.2a8.2,8.2,0,0,1-3.2-8.6L52.8,52.1a4,4,0,0,1,7.6-.4Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react12.default.createElement("polyline", {
    points: "128.7 230.2 173 112 219.2 112",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react12.default.createElement("polyline", {
    points: "36.8 112 83 112 83 112 127.3 230.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight3.set("regular", function(color) {
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement("path", {
    d: "M83,112h90l22.6-60.3a4,4,0,0,1,7.6.4l27.4,102.5a8.2,8.2,0,0,1-3.2,8.6l-94.8,65.6a8.1,8.1,0,0,1-9.2,0L28.6,163.2a8.2,8.2,0,0,1-3.2-8.6L52.8,52.1a4,4,0,0,1,7.6-.4Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react12.default.createElement("polyline", {
    points: "128.7 230.2 173 112 219.2 112",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react12.default.createElement("polyline", {
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
var GitlabLogo = /* @__PURE__ */ (0, import_react12.forwardRef)(function(props, ref) {
  return import_react12.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath5
  }));
});
GitlabLogo.displayName = "GitlabLogo";
var GitlabLogo_esm_default = GitlabLogo;

// node_modules/phosphor-react/dist/icons/LinkedinLogo.esm.js
init_react();
var import_react13 = __toESM(require_react());
var pathsByWeight4 = /* @__PURE__ */ new Map();
pathsByWeight4.set("bold", function(color) {
  return import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement("rect", {
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
  }), import_react13.default.createElement("line", {
    x1: "124",
    y1: "120",
    x2: "124",
    y2: "176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react13.default.createElement("line", {
    x1: "84",
    y1: "120",
    x2: "84",
    y2: "176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react13.default.createElement("path", {
    d: "M124,148a28,28,0,0,1,56,0v28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react13.default.createElement("circle", {
    cx: "84",
    cy: "80",
    r: "16"
  }));
});
pathsByWeight4.set("duotone", function(color) {
  return import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement("rect", {
    x: "36",
    y: "36",
    width: "184",
    height: "184",
    rx: "8",
    opacity: "0.2"
  }), import_react13.default.createElement("rect", {
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
  }), import_react13.default.createElement("line", {
    x1: "120",
    y1: "112",
    x2: "120",
    y2: "176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react13.default.createElement("line", {
    x1: "88",
    y1: "112",
    x2: "88",
    y2: "176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react13.default.createElement("path", {
    d: "M120,140a28,28,0,0,1,56,0v36",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react13.default.createElement("circle", {
    cx: "88",
    cy: "80",
    r: "12"
  }));
});
pathsByWeight4.set("fill", function() {
  return import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement("path", {
    d: "M212,28H44A16,16,0,0,0,28,44V212a16,16,0,0,0,16,16H212a16,16,0,0,0,16-16V44A16,16,0,0,0,212,28ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,92a12,12,0,1,1,12-12A12,12,0,0,1,88,92Zm96,84a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.8-1.8A36,36,0,0,1,184,140Z"
  }));
});
pathsByWeight4.set("light", function(color) {
  return import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement("rect", {
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
  }), import_react13.default.createElement("line", {
    x1: "120",
    y1: "112",
    x2: "120",
    y2: "176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react13.default.createElement("line", {
    x1: "88",
    y1: "112",
    x2: "88",
    y2: "176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react13.default.createElement("path", {
    d: "M120,140a28,28,0,0,1,56,0v36",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react13.default.createElement("circle", {
    cx: "88",
    cy: "80",
    r: "10"
  }));
});
pathsByWeight4.set("thin", function(color) {
  return import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement("rect", {
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
  }), import_react13.default.createElement("line", {
    x1: "120",
    y1: "112",
    x2: "120",
    y2: "176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react13.default.createElement("line", {
    x1: "88",
    y1: "112",
    x2: "88",
    y2: "176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react13.default.createElement("path", {
    d: "M120,140a28,28,0,0,1,56,0v36",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react13.default.createElement("circle", {
    cx: "88",
    cy: "80",
    r: "8"
  }));
});
pathsByWeight4.set("regular", function(color) {
  return import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement("rect", {
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
  }), import_react13.default.createElement("line", {
    x1: "120",
    y1: "112",
    x2: "120",
    y2: "176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react13.default.createElement("line", {
    x1: "88",
    y1: "112",
    x2: "88",
    y2: "176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react13.default.createElement("path", {
    d: "M120,140a28,28,0,0,1,56,0v36",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react13.default.createElement("circle", {
    cx: "88",
    cy: "80",
    r: "12"
  }));
});
var renderPath7 = function renderPath8(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight4);
};
var LinkedinLogo = /* @__PURE__ */ (0, import_react13.forwardRef)(function(props, ref) {
  return import_react13.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath7
  }));
});
LinkedinLogo.displayName = "LinkedinLogo";
var LinkedinLogo_esm_default = LinkedinLogo;

// node_modules/phosphor-react/dist/icons/Moon.esm.js
init_react();
var import_react14 = __toESM(require_react());
var pathsByWeight5 = /* @__PURE__ */ new Map();
pathsByWeight5.set("bold", function(color) {
  return import_react14.default.createElement(import_react14.default.Fragment, null, import_react14.default.createElement("path", {
    d: "M216.7,152.6A91.9,91.9,0,0,1,103.4,39.3h0A92,92,0,1,0,216.7,152.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight5.set("duotone", function(color) {
  return import_react14.default.createElement(import_react14.default.Fragment, null, import_react14.default.createElement("path", {
    d: "M216.7,152.6A91.9,91.9,0,0,1,103.4,39.3h0A92,92,0,1,0,216.7,152.6Z",
    opacity: "0.2"
  }), import_react14.default.createElement("path", {
    d: "M216.7,152.6A91.9,91.9,0,0,1,103.4,39.3h0A92,92,0,1,0,216.7,152.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight5.set("fill", function() {
  return import_react14.default.createElement(import_react14.default.Fragment, null, import_react14.default.createElement("path", {
    d: "M224.3,150.3a8.1,8.1,0,0,0-7.8-5.7l-2.2.4A84,84,0,0,1,111,41.6a5.7,5.7,0,0,0,.3-1.8A7.9,7.9,0,0,0,101,31.7,100,100,0,1,0,224.3,154.9,7.2,7.2,0,0,0,224.3,150.3Z"
  }));
});
pathsByWeight5.set("light", function(color) {
  return import_react14.default.createElement(import_react14.default.Fragment, null, import_react14.default.createElement("path", {
    d: "M216.7,152.6A91.9,91.9,0,0,1,103.4,39.3h0A92,92,0,1,0,216.7,152.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight5.set("thin", function(color) {
  return import_react14.default.createElement(import_react14.default.Fragment, null, import_react14.default.createElement("path", {
    d: "M216.7,152.6A91.9,91.9,0,0,1,103.4,39.3h0A92,92,0,1,0,216.7,152.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight5.set("regular", function(color) {
  return import_react14.default.createElement(import_react14.default.Fragment, null, import_react14.default.createElement("path", {
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
var Moon = /* @__PURE__ */ (0, import_react14.forwardRef)(function(props, ref) {
  return import_react14.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath9
  }));
});
Moon.displayName = "Moon";
var Moon_esm_default = Moon;

// node_modules/phosphor-react/dist/icons/Pen.esm.js
init_react();
var import_react15 = __toESM(require_react());
var pathsByWeight6 = /* @__PURE__ */ new Map();
pathsByWeight6.set("bold", function(color) {
  return import_react15.default.createElement(import_react15.default.Fragment, null, import_react15.default.createElement("path", {
    d: "M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react15.default.createElement("line", {
    x1: "136",
    y1: "64",
    x2: "192",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react15.default.createElement("polyline", {
    points: "164 200 204 160 192 120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react15.default.createElement("line", {
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
  return import_react15.default.createElement(import_react15.default.Fragment, null, import_react15.default.createElement("path", {
    d: "M192,120,136,64l26.3-26.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4Z",
    opacity: "0.2"
  }), import_react15.default.createElement("path", {
    d: "M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react15.default.createElement("line", {
    x1: "136",
    y1: "64",
    x2: "192",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react15.default.createElement("polyline", {
    points: "160 192 200 152 192 120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react15.default.createElement("line", {
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
  return import_react15.default.createElement(import_react15.default.Fragment, null, import_react15.default.createElement("path", {
    d: "M228.7,88A15.9,15.9,0,0,0,224,76.7L179.3,32a16.1,16.1,0,0,0-22.6,0L36.7,152a16,16,0,0,0-3.6,5.4l-.3.8a17,17,0,0,0-.8,5.1V208a16,16,0,0,0,16,16H92.7a14.4,14.4,0,0,0,5.1-.9l.8-.2a16,16,0,0,0,5.4-3.6l83.7-83.7,3.4,13.9-36.8,36.8a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0l40-40a8.5,8.5,0,0,0,2.1-7.6l-6.9-27.6L224,99.3A15.9,15.9,0,0,0,228.7,88ZM192,108.7,147.3,64,168,43.3,212.7,88Z"
  }));
});
pathsByWeight6.set("light", function(color) {
  return import_react15.default.createElement(import_react15.default.Fragment, null, import_react15.default.createElement("path", {
    d: "M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react15.default.createElement("line", {
    x1: "136",
    y1: "64",
    x2: "192",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react15.default.createElement("polyline", {
    points: "160 192 200 152 192 120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react15.default.createElement("line", {
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
  return import_react15.default.createElement(import_react15.default.Fragment, null, import_react15.default.createElement("path", {
    d: "M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react15.default.createElement("line", {
    x1: "136",
    y1: "64",
    x2: "192",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react15.default.createElement("polyline", {
    points: "160 192 200 152 192 120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react15.default.createElement("line", {
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
  return import_react15.default.createElement(import_react15.default.Fragment, null, import_react15.default.createElement("path", {
    d: "M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react15.default.createElement("line", {
    x1: "136",
    y1: "64",
    x2: "192",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react15.default.createElement("polyline", {
    points: "160 192 200 152 192 120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react15.default.createElement("line", {
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
var Pen = /* @__PURE__ */ (0, import_react15.forwardRef)(function(props, ref) {
  return import_react15.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath11
  }));
});
Pen.displayName = "Pen";
var Pen_esm_default = Pen;

// node_modules/phosphor-react/dist/icons/Sun.esm.js
init_react();
var import_react16 = __toESM(require_react());
var pathsByWeight7 = /* @__PURE__ */ new Map();
pathsByWeight7.set("bold", function(color) {
  return import_react16.default.createElement(import_react16.default.Fragment, null, import_react16.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "60",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react16.default.createElement("line", {
    x1: "128",
    y1: "28",
    x2: "128",
    y2: "12",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react16.default.createElement("line", {
    x1: "198.7",
    y1: "57.3",
    x2: "210",
    y2: "46",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react16.default.createElement("line", {
    x1: "228",
    y1: "128",
    x2: "244",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react16.default.createElement("line", {
    x1: "198.7",
    y1: "198.7",
    x2: "210",
    y2: "210",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react16.default.createElement("line", {
    x1: "128",
    y1: "228",
    x2: "128",
    y2: "244",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react16.default.createElement("line", {
    x1: "57.3",
    y1: "198.7",
    x2: "46",
    y2: "210",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react16.default.createElement("line", {
    x1: "28",
    y1: "128",
    x2: "12",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react16.default.createElement("line", {
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
  return import_react16.default.createElement(import_react16.default.Fragment, null, import_react16.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "60",
    opacity: "0.2"
  }), import_react16.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "60",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react16.default.createElement("line", {
    x1: "128",
    y1: "36",
    x2: "128",
    y2: "16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react16.default.createElement("line", {
    x1: "62.9",
    y1: "62.9",
    x2: "48.8",
    y2: "48.8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react16.default.createElement("line", {
    x1: "36",
    y1: "128",
    x2: "16",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react16.default.createElement("line", {
    x1: "62.9",
    y1: "193.1",
    x2: "48.8",
    y2: "207.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react16.default.createElement("line", {
    x1: "128",
    y1: "220",
    x2: "128",
    y2: "240",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react16.default.createElement("line", {
    x1: "193.1",
    y1: "193.1",
    x2: "207.2",
    y2: "207.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react16.default.createElement("line", {
    x1: "220",
    y1: "128",
    x2: "240",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react16.default.createElement("line", {
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
  return import_react16.default.createElement(import_react16.default.Fragment, null, import_react16.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "68"
  }), import_react16.default.createElement("path", {
    d: "M128,44a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V36A8,8,0,0,0,128,44Z"
  }), import_react16.default.createElement("path", {
    d: "M57.3,68.6a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3L54.5,43.1A8.1,8.1,0,1,0,43.1,54.5Z"
  }), import_react16.default.createElement("path", {
    d: "M44,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H36A8,8,0,0,0,44,128Z"
  }), import_react16.default.createElement("path", {
    d: "M57.3,187.4,43.1,201.5a8.1,8.1,0,0,0,0,11.4,8.5,8.5,0,0,0,5.7,2.3,8.3,8.3,0,0,0,5.7-2.3l14.1-14.2a8,8,0,0,0-11.3-11.3Z"
  }), import_react16.default.createElement("path", {
    d: "M128,212a8,8,0,0,0-8,8v20a8,8,0,0,0,16,0V220A8,8,0,0,0,128,212Z"
  }), import_react16.default.createElement("path", {
    d: "M198.7,187.4a8,8,0,0,0-11.3,11.3l14.1,14.2a8.3,8.3,0,0,0,5.7,2.3,8.5,8.5,0,0,0,5.7-2.3,8.1,8.1,0,0,0,0-11.4Z"
  }), import_react16.default.createElement("path", {
    d: "M240,120H220a8,8,0,0,0,0,16h20a8,8,0,0,0,0-16Z"
  }), import_react16.default.createElement("path", {
    d: "M193.1,70.9a7.8,7.8,0,0,0,5.6-2.3l14.2-14.1a8.1,8.1,0,0,0-11.4-11.4L187.4,57.3a8,8,0,0,0,0,11.3A7.8,7.8,0,0,0,193.1,70.9Z"
  }));
});
pathsByWeight7.set("light", function(color) {
  return import_react16.default.createElement(import_react16.default.Fragment, null, import_react16.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "60",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react16.default.createElement("line", {
    x1: "128",
    y1: "36",
    x2: "128",
    y2: "16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react16.default.createElement("line", {
    x1: "62.9",
    y1: "62.9",
    x2: "48.8",
    y2: "48.8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react16.default.createElement("line", {
    x1: "36",
    y1: "128",
    x2: "16",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react16.default.createElement("line", {
    x1: "62.9",
    y1: "193.1",
    x2: "48.8",
    y2: "207.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react16.default.createElement("line", {
    x1: "128",
    y1: "220",
    x2: "128",
    y2: "240",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react16.default.createElement("line", {
    x1: "193.1",
    y1: "193.1",
    x2: "207.2",
    y2: "207.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react16.default.createElement("line", {
    x1: "220",
    y1: "128",
    x2: "240",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react16.default.createElement("line", {
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
  return import_react16.default.createElement(import_react16.default.Fragment, null, import_react16.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "60",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react16.default.createElement("line", {
    x1: "128",
    y1: "36",
    x2: "128",
    y2: "16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react16.default.createElement("line", {
    x1: "62.9",
    y1: "62.9",
    x2: "48.8",
    y2: "48.8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react16.default.createElement("line", {
    x1: "36",
    y1: "128",
    x2: "16",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react16.default.createElement("line", {
    x1: "62.9",
    y1: "193.1",
    x2: "48.8",
    y2: "207.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react16.default.createElement("line", {
    x1: "128",
    y1: "220",
    x2: "128",
    y2: "240",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react16.default.createElement("line", {
    x1: "193.1",
    y1: "193.1",
    x2: "207.2",
    y2: "207.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react16.default.createElement("line", {
    x1: "220",
    y1: "128",
    x2: "240",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react16.default.createElement("line", {
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
  return import_react16.default.createElement(import_react16.default.Fragment, null, import_react16.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "60",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react16.default.createElement("line", {
    x1: "128",
    y1: "36",
    x2: "128",
    y2: "16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react16.default.createElement("line", {
    x1: "62.9",
    y1: "62.9",
    x2: "48.8",
    y2: "48.8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react16.default.createElement("line", {
    x1: "36",
    y1: "128",
    x2: "16",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react16.default.createElement("line", {
    x1: "62.9",
    y1: "193.1",
    x2: "48.8",
    y2: "207.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react16.default.createElement("line", {
    x1: "128",
    y1: "220",
    x2: "128",
    y2: "240",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react16.default.createElement("line", {
    x1: "193.1",
    y1: "193.1",
    x2: "207.2",
    y2: "207.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react16.default.createElement("line", {
    x1: "220",
    y1: "128",
    x2: "240",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react16.default.createElement("line", {
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
var Sun = /* @__PURE__ */ (0, import_react16.forwardRef)(function(props, ref) {
  return import_react16.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath13
  }));
});
Sun.displayName = "Sun";
var Sun_esm_default = Sun;

// node_modules/phosphor-react/dist/icons/UserFocus.esm.js
init_react();
var import_react17 = __toESM(require_react());
var pathsByWeight8 = /* @__PURE__ */ new Map();
pathsByWeight8.set("bold", function(color) {
  return import_react17.default.createElement(import_react17.default.Fragment, null, import_react17.default.createElement("path", {
    d: "M180,40h28a8,8,0,0,1,8,8V76",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react17.default.createElement("path", {
    d: "M180,216h28a8,8,0,0,0,8-8V180",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react17.default.createElement("path", {
    d: "M76,216H48a8,8,0,0,1-8-8V180",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react17.default.createElement("path", {
    d: "M76,40H48a8,8,0,0,0-8,8V76",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react17.default.createElement("circle", {
    cx: "128",
    cy: "112",
    r: "32",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react17.default.createElement("path", {
    d: "M80,168a60,60,0,0,1,96,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight8.set("duotone", function(color) {
  return import_react17.default.createElement(import_react17.default.Fragment, null, import_react17.default.createElement("circle", {
    cx: "128",
    cy: "112",
    r: "32",
    opacity: "0.2"
  }), import_react17.default.createElement("path", {
    d: "M180,40h28a8,8,0,0,1,8,8V76",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react17.default.createElement("path", {
    d: "M180,216h28a8,8,0,0,0,8-8V180",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react17.default.createElement("path", {
    d: "M76,216H48a8,8,0,0,1-8-8V180",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react17.default.createElement("path", {
    d: "M76,40H48a8,8,0,0,0-8,8V76",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react17.default.createElement("circle", {
    cx: "128",
    cy: "112",
    r: "32",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react17.default.createElement("path", {
    d: "M74.9,176a60.1,60.1,0,0,1,106.2,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight8.set("fill", function() {
  return import_react17.default.createElement(import_react17.default.Fragment, null, import_react17.default.createElement("path", {
    d: "M224,48V76a8,8,0,0,1-16,0V48H180a8,8,0,0,1,0-16h28A16,16,0,0,1,224,48Zm-8,124a8,8,0,0,0-8,8v28H180a8,8,0,0,0,0,16h28a16,16,0,0,0,16-16V180A8,8,0,0,0,216,172ZM76,208H48V180a8,8,0,0,0-16,0v28a16,16,0,0,0,16,16H76a8,8,0,0,0,0-16ZM40,84a8,8,0,0,0,8-8V48H76a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V76A8,8,0,0,0,40,84Zm61.1,57.5a69.1,69.1,0,0,0-33.3,30.8,7.8,7.8,0,0,0,.3,7.8,7.9,7.9,0,0,0,6.8,3.9H181.1a7.9,7.9,0,0,0,6.8-3.9,7.8,7.8,0,0,0,.3-7.8,69.1,69.1,0,0,0-33.3-30.8A39.5,39.5,0,0,0,168,112a40,40,0,0,0-80,0A39.5,39.5,0,0,0,101.1,141.5Z"
  }));
});
pathsByWeight8.set("light", function(color) {
  return import_react17.default.createElement(import_react17.default.Fragment, null, import_react17.default.createElement("path", {
    d: "M180,40h28a8,8,0,0,1,8,8V76",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react17.default.createElement("path", {
    d: "M180,216h28a8,8,0,0,0,8-8V180",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react17.default.createElement("path", {
    d: "M76,216H48a8,8,0,0,1-8-8V180",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react17.default.createElement("path", {
    d: "M76,40H48a8,8,0,0,0-8,8V76",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react17.default.createElement("circle", {
    cx: "128",
    cy: "112",
    r: "32",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react17.default.createElement("path", {
    d: "M74.9,176a60.1,60.1,0,0,1,106.2,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight8.set("thin", function(color) {
  return import_react17.default.createElement(import_react17.default.Fragment, null, import_react17.default.createElement("path", {
    d: "M180,40h28a8,8,0,0,1,8,8V76",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react17.default.createElement("path", {
    d: "M180,216h28a8,8,0,0,0,8-8V180",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react17.default.createElement("path", {
    d: "M76,216H48a8,8,0,0,1-8-8V180",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react17.default.createElement("path", {
    d: "M76,40H48a8,8,0,0,0-8,8V76",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react17.default.createElement("circle", {
    cx: "128",
    cy: "112",
    r: "32",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react17.default.createElement("path", {
    d: "M74.9,176a60.1,60.1,0,0,1,106.2,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight8.set("regular", function(color) {
  return import_react17.default.createElement(import_react17.default.Fragment, null, import_react17.default.createElement("path", {
    d: "M180,40h28a8,8,0,0,1,8,8V76",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react17.default.createElement("path", {
    d: "M180,216h28a8,8,0,0,0,8-8V180",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react17.default.createElement("path", {
    d: "M76,216H48a8,8,0,0,1-8-8V180",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react17.default.createElement("path", {
    d: "M76,40H48a8,8,0,0,0-8,8V76",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react17.default.createElement("circle", {
    cx: "128",
    cy: "112",
    r: "32",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react17.default.createElement("path", {
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
var UserFocus = /* @__PURE__ */ (0, import_react17.forwardRef)(function(props, ref) {
  return import_react17.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath15
  }));
});
UserFocus.displayName = "UserFocus";
var UserFocus_esm_default = UserFocus;

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
    let i = timeouts.findIndex((t) => t.cancel == cancel);
    if (~i)
      timeouts.splice(i, 1);
    pendingCount -= ~i ? 1 : 0;
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
var findTimeout = (time) => ~(~timeouts.findIndex((t) => t.time > time) || ~timeouts.length);
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
    eachSafely(timeouts.splice(0, count), (t) => t.handler());
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
    } catch (e) {
      raf.catch(e);
    }
  });
}

// node_modules/@react-spring/shared/dist/react-spring-shared.esm.js
var React13 = __toESM(require_react());
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
  obj: (a) => !!a && a.constructor.name === "Object",
  fun: (a) => typeof a === "function",
  str: (a) => typeof a === "string",
  num: (a) => typeof a === "number",
  und: (a) => a === void 0
};
function isEqual(a, b) {
  if (is.arr(a)) {
    if (!is.arr(b) || a.length !== b.length)
      return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i])
        return false;
    }
    return true;
  }
  return a === b;
}
var each = (obj, fn) => obj.forEach(fn);
function eachProp(obj, fn, ctx2) {
  if (is.arr(obj)) {
    for (let i = 0; i < obj.length; i++) {
      fn.call(ctx2, obj[i], `${i}`);
    }
    return;
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn.call(ctx2, obj[key], key);
    }
  }
}
var toArray = (a) => is.und(a) ? [] : is.arr(a) ? a : [a];
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
  for (let i = 0; i < currentFrame.length; i++) {
    const animation = currentFrame[i];
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
  const index = arr.findIndex(test);
  return index < 0 ? arr.length : index;
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
var rgb = new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER));
var rgba = new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER));
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
  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | 255) >>> 0;
  }
  if (match = rgba.exec(color)) {
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
    return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 255) >>> 0;
  }
  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | parse1(match[4])) >>> 0;
  }
  return null;
}
function hue2rgb(p, q, t) {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p + (q - p) * 6 * t;
  if (t < 1 / 2)
    return q;
  if (t < 2 / 3)
    return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
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
  let r = (int32Color & 4278190080) >>> 24;
  let g = (int32Color & 16711680) >>> 16;
  let b = (int32Color & 65280) >>> 8;
  let a = (int32Color & 255) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
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
  const easing = config2.easing || ((t) => t);
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
  for (var i = 1; i < inputRange.length - 1; ++i)
    if (inputRange[i] >= input)
      break;
  return i - 1;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
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
var rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
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
var rgbaRound = (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`;
var createStringInterpolator = (config2) => {
  if (!namedColorRegex)
    namedColorRegex = colors$1 ? new RegExp(`(${Object.keys(colors$1).join("|")})(?!\\w)`, "g") : /^\b$/;
  const output = config2.output.map((value) => {
    return getFluidValue(value).replace(cssVariableRegex, variableToRgba).replace(colorRegex, colorToRgba).replace(namedColorRegex, colorToRgba);
  });
  const keyframes = output.map((value) => value.match(numberRegex).map(Number));
  const outputRanges = keyframes[0].map((_, i) => keyframes.map((values) => {
    if (!(i in values)) {
      throw Error('The arity of each "output" value must be equal');
    }
    return values[i];
  }));
  const interpolators = outputRanges.map((output2) => createInterpolator(_extends({}, config2, {
    output: output2
  })));
  return (input) => {
    var _output$find;
    const missingUnit = !unitRegex.test(output[0]) && ((_output$find = output.find((value) => unitRegex.test(value))) == null ? void 0 : _output$find.replace(numberRegex, ""));
    let i = 0;
    return output[0].replace(numberRegex, () => `${interpolators[i++](input)}${missingUnit || ""}`).replace(rgbaRegex, rgbaRound);
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
  for (let i = 0; i < next.length; i++) {
    if (next[i] !== prev[i]) {
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
var useLayoutEffect2 = typeof window !== "undefined" && window.document && window.document.createElement ? React13.useLayoutEffect : React13.useEffect;

// node_modules/@react-spring/core/dist/react-spring-core.esm.js
var React15 = __toESM(require_react());
var import_react23 = __toESM(require_react());

// node_modules/@react-spring/animated/dist/react-spring-animated.esm.js
init_react();
var React14 = __toESM(require_react());
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
      return payload.map((node, i) => node.setValue(source[i])).some(Boolean);
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
function _extends2() {
  _extends2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
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
    return React14.createElement(Component, _extends2({}, usedProps, {
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
    props = _extends2({}, props, {
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
function _extends3() {
  _extends3 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
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
  return _extends3({}, props);
}
function computeGoal(value) {
  value = getFluidValue(value);
  return is.arr(value) ? value.map(computeGoal) : isAnimatedString(value) ? globals.createStringInterpolator({
    range: [0, 1],
    output: [value, value]
  })(1) : value;
}
function hasProps(props) {
  for (const _ in props)
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
var bounceOut = (x) => {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
};
var easings = {
  linear: (x) => x,
  easeInQuad: (x) => x * x,
  easeOutQuad: (x) => 1 - (1 - x) * (1 - x),
  easeInOutQuad: (x) => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2,
  easeInCubic: (x) => x * x * x,
  easeOutCubic: (x) => 1 - Math.pow(1 - x, 3),
  easeInOutCubic: (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
  easeInQuart: (x) => x * x * x * x,
  easeOutQuart: (x) => 1 - Math.pow(1 - x, 4),
  easeInOutQuart: (x) => x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2,
  easeInQuint: (x) => x * x * x * x * x,
  easeOutQuint: (x) => 1 - Math.pow(1 - x, 5),
  easeInOutQuint: (x) => x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2,
  easeInSine: (x) => 1 - Math.cos(x * Math.PI / 2),
  easeOutSine: (x) => Math.sin(x * Math.PI / 2),
  easeInOutSine: (x) => -(Math.cos(Math.PI * x) - 1) / 2,
  easeInExpo: (x) => x === 0 ? 0 : Math.pow(2, 10 * x - 10),
  easeOutExpo: (x) => x === 1 ? 1 : 1 - Math.pow(2, -10 * x),
  easeInOutExpo: (x) => x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2,
  easeInCirc: (x) => 1 - Math.sqrt(1 - Math.pow(x, 2)),
  easeOutCirc: (x) => Math.sqrt(1 - Math.pow(x - 1, 2)),
  easeInOutCirc: (x) => x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2,
  easeInBack: (x) => c3 * x * x * x - c1 * x * x,
  easeOutBack: (x) => 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2),
  easeInOutBack: (x) => x < 0.5 ? Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2,
  easeInElastic: (x) => x === 0 ? 0 : x === 1 ? 1 : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4),
  easeOutElastic: (x) => x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1,
  easeInOutElastic: (x) => x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2 : Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5) / 2 + 1,
  easeInBounce: (x) => 1 - bounceOut(1 - x),
  easeOutBounce: bounceOut,
  easeInOutBounce: (x) => x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2
};
var defaults = _extends3({}, config.default, {
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
    defaultConfig = _extends3({}, defaultConfig);
    sanitizeConfig(defaultConfig, newConfig);
    newConfig = _extends3({}, defaultConfig, newConfig);
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
        actions.start(_extends3({}, props, {
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
        const props2 = is.obj(arg1) ? _extends3({}, arg1) : _extends3({}, arg2, {
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
  flush(state.timeouts, (t) => t.cancel());
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
      const props = is.obj(arg1) ? _extends3({}, arg1) : _extends3({}, arg2, {
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
    anim.values.forEach((node2, i) => {
      if (node2.done)
        return;
      const to2 = node2.constructor == AnimatedString ? 1 : payload ? payload[i].lastPosition : toValues[i];
      let finished = anim.immediate;
      let position = to2;
      if (!finished) {
        position = node2.lastPosition;
        if (config2.tension <= 0) {
          node2.done = true;
          return;
        }
        let elapsed = node2.elapsedTime += dt;
        const from = anim.fromValues[i];
        const v0 = node2.v0 != null ? node2.v0 : node2.v0 = is.arr(config2.velocity) ? config2.velocity[i] : config2.velocity;
        let velocity;
        if (!is.und(config2.duration)) {
          let p = 1;
          if (config2.duration > 0) {
            if (this._memoizedDuration !== config2.duration) {
              this._memoizedDuration = config2.duration;
              if (node2.durationProgress > 0) {
                node2.elapsedTime = config2.duration * node2.durationProgress;
                elapsed = node2.elapsedTime += dt;
              }
            }
            p = (config2.progress || 0) + elapsed / this._memoizedDuration;
            p = p > 1 ? 1 : p < 0 ? 0 : p;
            node2.durationProgress = p;
          }
          position = from + config2.easing(p) * (to2 - from);
          velocity = (position - node2.lastPosition) / dt;
          finished = p == 1;
        } else if (config2.decay) {
          const decay = config2.decay === true ? 0.998 : config2.decay;
          const e = Math.exp(-(1 - decay) * elapsed);
          position = from + v0 / (1 - decay) * (1 - e);
          finished = Math.abs(node2.lastPosition - position) < 0.1;
          velocity = v0 * e;
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
          for (let n = 0; n < numSteps; ++n) {
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
      if (payload && !payload[i].done) {
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
      queue = [is.obj(to2) ? to2 : _extends3({}, arg2, {
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
    let props = _extends3({}, _ref);
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
    return createUpdate(_extends3({}, props, {
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
      this.start(_extends3({
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
  const springs = _extends3({}, ctrl.springs);
  if (props) {
    each(toArray(props), (props2) => {
      if (is.und(props2.keys)) {
        props2 = createUpdate(props2);
      }
      if (!is.obj(props2.to)) {
        props2 = _extends3({}, props2, {
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
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
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
  return React15.createElement(Provider, {
    value: props
  }, children);
};
var ctx = makeContext(SpringContext, {});
SpringContext.Provider = ctx.Provider;
SpringContext.Consumer = ctx.Consumer;
function makeContext(target, init) {
  Object.assign(target, React15.createContext(init));
  target.Provider._context = target;
  target.Consumer._context = target;
  return target;
}
var SpringRef = () => {
  const current = [];
  const SpringRef2 = function SpringRef3(props) {
    deprecateDirectCall();
    const results = [];
    each(current, (ctrl, i) => {
      if (is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update3 = _getProps(props, ctrl, i);
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
    const i = current.indexOf(ctrl);
    if (~i)
      current.splice(i, 1);
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
    each(current, (ctrl, i) => {
      if (is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update3 = this._getProps(props, ctrl, i);
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
    each(current, (ctrl, i) => ctrl.update(this._getProps(props, ctrl, i)));
    return this;
  };
  const _getProps = function _getProps2(arg, ctrl, index) {
    return is.fun(arg) ? arg(index, ctrl) : arg;
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
    for (let i = startIndex; i < endIndex; i++) {
      const ctrl = ctrls.current[i] || (ctrls.current[i] = new Controller(null, state.flush));
      const update3 = propsFn ? propsFn(i, ctrl) : props[i];
      if (update3) {
        updates[i] = declareUpdate(update3);
      }
    }
  }
  const springs = ctrls.current.map((ctrl, i) => getSprings(ctrl, updates[i]));
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
    each(ctrls.current, (ctrl, i) => {
      ref == null ? void 0 : ref.add(ctrl);
      if (hasContext) {
        ctrl.start({
          default: context
        });
      }
      const update3 = updates[i];
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
  const values = springs.map((x) => _extends3({}, x));
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
    each(usedTransitions.current, (t) => {
      if (t.expired) {
        clearTimeout(t.expirationId);
      }
      detachRefs(t.ctrl, ref);
      t.ctrl.stop(true);
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
    each(prevTransitions, (t, i) => {
      if (t.expired) {
        clearTimeout(t.expirationId);
        expired.push(t);
      } else {
        i = reused[i] = keys.indexOf(t.key);
        if (~i)
          transitions[i] = t;
      }
    });
  each(items, (item, i) => {
    if (!transitions[i]) {
      transitions[i] = {
        key: keys[i],
        item,
        phase: TransitionPhase.MOUNT,
        ctrl: new Controller()
      };
      transitions[i].ctrl.item = item;
    }
  });
  if (reused.length) {
    let i = -1;
    const {
      leave
    } = propsFn ? propsFn() : props;
    each(reused, (keyIndex, prevIndex) => {
      const t = prevTransitions[prevIndex];
      if (~keyIndex) {
        i = transitions.indexOf(t);
        transitions[i] = _extends3({}, t, {
          item: items[keyIndex]
        });
      } else if (leave) {
        transitions.splice(++i, 0, t);
      }
    });
  }
  if (is.fun(sort)) {
    transitions.sort((a, b) => sort(a.item, b.item));
  }
  let delay = -trail;
  const forceUpdate = useForceUpdate();
  const defaultProps = getDefaultProps(props);
  const changes = /* @__PURE__ */ new Map();
  const exitingTransitions = (0, import_react23.useRef)(/* @__PURE__ */ new Map());
  const forceChange = (0, import_react23.useRef)(false);
  each(transitions, (t, i) => {
    const key = t.key;
    const prevPhase = t.phase;
    const p = propsFn ? propsFn() : props;
    let to2;
    let phase;
    let propsDelay = callProp(p.delay || 0, key);
    if (prevPhase == TransitionPhase.MOUNT) {
      to2 = p.enter;
      phase = TransitionPhase.ENTER;
    } else {
      const isLeave = keys.indexOf(key) < 0;
      if (prevPhase != TransitionPhase.LEAVE) {
        if (isLeave) {
          to2 = p.leave;
          phase = TransitionPhase.LEAVE;
        } else if (to2 = p.update) {
          phase = TransitionPhase.UPDATE;
        } else
          return;
      } else if (!isLeave) {
        to2 = p.enter;
        phase = TransitionPhase.ENTER;
      } else
        return;
    }
    to2 = callProp(to2, t.item, i);
    to2 = is.obj(to2) ? inferTo(to2) : {
      to: to2
    };
    if (!to2.config) {
      const config2 = propsConfig || defaultProps.config;
      to2.config = callProp(config2, t.item, i, phase);
    }
    delay += trail;
    const payload = _extends3({}, defaultProps, {
      delay: propsDelay + delay,
      ref: propsRef,
      immediate: p.immediate,
      reset: false
    }, to2);
    if (phase == TransitionPhase.ENTER && is.und(payload.from)) {
      const _p = propsFn ? propsFn() : props;
      const from = is.und(_p.initial) || prevTransitions ? _p.from : _p.initial;
      payload.from = callProp(from, t.item, i);
    }
    const {
      onResolve
    } = payload;
    payload.onResolve = (result) => {
      callProp(onResolve, result);
      const transitions2 = usedTransitions.current;
      const t2 = transitions2.find((t3) => t3.key === key);
      if (!t2)
        return;
      if (result.cancelled && t2.phase != TransitionPhase.UPDATE) {
        return;
      }
      if (t2.ctrl.idle) {
        const idle = transitions2.every((t3) => t3.ctrl.idle);
        if (t2.phase == TransitionPhase.LEAVE) {
          const expiry = callProp(expires, t2.item);
          if (expiry !== false) {
            const expiryMs = expiry === true ? 0 : expiry;
            t2.expired = true;
            if (!idle && expiryMs > 0) {
              if (expiryMs <= 2147483647)
                t2.expirationId = setTimeout(forceUpdate, expiryMs);
              return;
            }
          }
        }
        if (idle && transitions2.some((t3) => t3.expired)) {
          exitingTransitions.current.delete(t2);
          if (exitBeforeEnter) {
            forceChange.current = true;
          }
          forceUpdate();
        }
      }
    };
    const springs = getSprings(t.ctrl, payload);
    if (phase === TransitionPhase.LEAVE && exitBeforeEnter) {
      exitingTransitions.current.set(t, {
        phase,
        springs,
        payload
      });
    } else {
      changes.set(t, {
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
      each(transitions, (t) => {
        t.ctrl.start({
          default: context
        });
      });
    }
  }, [context]);
  each(changes, (_, t) => {
    if (exitingTransitions.current.size) {
      const ind = transitions.findIndex((state) => state.key === t.key);
      transitions.splice(ind, 1);
    }
  });
  useLayoutEffect2(() => {
    each(exitingTransitions.current.size ? exitingTransitions.current : changes, ({
      phase,
      payload
    }, t) => {
      const {
        ctrl
      } = t;
      t.phase = phase;
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
  const renderTransitions = (render) => React15.createElement(React15.Fragment, null, transitions.map((t, i) => {
    const {
      springs
    } = changes.get(t) || t.ctrl;
    const elem = render(_extends3({}, springs), t.item, t, i);
    return elem && elem.type ? React15.createElement(elem.type, _extends3({}, elem.props, {
      key: is.str(t.key) || is.num(t.key) ? t.key : t.ctrl.id,
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
      const t = prevTransitions && prevTransitions.find((t2) => t2.item === item && t2.phase !== TransitionPhase.LEAVE && !reused.has(t2));
      if (t) {
        reused.add(t);
        return t.key;
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
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
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
  const names = Object.keys(attributes).map((name) => isFilterElement || instance.hasAttribute(name) ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, (n) => "-" + n.toLowerCase())));
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
  names.forEach((name, i) => {
    instance.setAttribute(name, values[i]);
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
var isValueIdentity = (value, id) => is.arr(value) ? value.every((v) => isValueIdentity(v, id)) : is.num(value) ? value === id : parseFloat(value) === id;
var AnimatedStyle = class extends AnimatedObject {
  constructor(_ref) {
    let {
      x,
      y,
      z
    } = _ref, style = _objectWithoutPropertiesLoose3(_ref, _excluded$1);
    const inputs = [];
    const transforms = [];
    if (x || y || z) {
      inputs.push([x || 0, y || 0, z || 0]);
      transforms.push((xyz) => [`translate3d(${xyz.map((v) => addUnit(v, "px")).join(",")})`, isValueIdentity(xyz, 0)]);
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
        transforms.push(key === "rotate3d" ? ([x2, y2, z2, deg]) => [`rotate3d(${x2},${y2},${z2},${addUnit(deg, unit)})`, isValueIdentity(deg, 0)] : (input) => [`${key}(${input.map((v) => addUnit(v, unit)).join(",")})`, isValueIdentity(input, key.startsWith("scale") ? 1 : 0)]);
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
    each(this.inputs, (input, i) => {
      const arg1 = getFluidValue(input[0]);
      const [t, id] = this.transforms[i](is.arr(arg1) ? arg1 : input.map(getFluidValue));
      transform += " " + t;
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
  }, menuItems.map((i, idx) => /* @__PURE__ */ import_react24.default.createElement("li", {
    key: `ham-${i.name}_${idx}`,
    className: "flex justify-center w-full"
  }, /* @__PURE__ */ import_react24.default.createElement(LinkText, {
    href: i.path,
    className: "text-2xl",
    childrenClassName: "grid grid-cols-[1fr_200px] justify-items-center",
    animateScale: false
  }, i.icon, /* @__PURE__ */ import_react24.default.createElement("span", {
    className: "justify-self-end"
  }, i.name)))))));
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
  }), /* @__PURE__ */ React.createElement(Switch, {
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
  useTheme,
  links,
  useSpring,
  useTransition,
  animated,
  Layout
};
//# sourceMappingURL=/build/_shared/chunk-PYVP7NK6.js.map
