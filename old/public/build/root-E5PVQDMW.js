import {
  useDarkMode
} from "/build/_shared/chunk-A2CVLNIO.js";
import {
  ThemeCtx
} from "/build/_shared/chunk-UM4G7CBG.js";
import {
  ClientStyleContext
} from "/build/_shared/chunk-PIJNJHSW.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-VDQGL47P.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-NWDMRDTM.js";

// browser-route-module:/Users/kevincarlos/Documents/projects/kevin-carlos.github.io/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();
var import_react2 = __toESM(require_react());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-EKVJPICF.css";

// app/root.tsx
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700;800;900&display=swap"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
    },
    { rel: "stylesheet", href: tailwind_default }
  ];
};
var meta = () => ({
  charset: "utf-8",
  title: "Kevin Carlos",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  const [themeMode, setThemeMode] = useDarkMode();
  const clientStyleData = (0, import_react2.useContext)(ClientStyleContext);
  (0, import_react2.useEffect)(() => {
    clientStyleData.reset();
  }, [clientStyleData]);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "h-full w-full"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null), /* @__PURE__ */ React.createElement("style", {
    id: "stitches",
    dangerouslySetInnerHTML: { __html: clientStyleData.sheet },
    suppressHydrationWarning: true
  })), /* @__PURE__ */ React.createElement("body", {
    className: "h-full w-full bg-theme-white dark:bg-theme-black font-body overflow-hidden"
  }, /* @__PURE__ */ React.createElement(ThemeCtx.Provider, {
    value: { mode: themeMode, setMode: setThemeMode }
  }, /* @__PURE__ */ React.createElement(Outlet, null)), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-E5PVQDMW.js.map
