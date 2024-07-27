import {
  useDarkMode
} from "/build/_shared/chunk-453APP7H.js";
import {
  ThemeCtx
} from "/build/_shared/chunk-KZIRCZOW.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-SPG4GL7V.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:/Users/kevincarlos/Documents/projects/kevin-carlos.github.io/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();
var import_react3 = __toESM(require_react());

// app/stitches/client.context.ts
init_react();
var import_react = __toESM(require_react());
var ClientStyleContext = (0, import_react.createContext)({
  reset: () => {
  },
  sheet: ""
});
var client_context_default = ClientStyleContext;

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-XDFZSZBG.css";

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
var Document = ({ children, title }) => {
  const clientStyleData = (0, import_react3.useContext)(client_context_default);
  const [themeMode, setThemeMode] = useDarkMode();
  (0, import_react3.useEffect)(() => {
    clientStyleData.reset();
  }, [clientStyleData]);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "h-full w-full"
  }, /* @__PURE__ */ React.createElement("head", null, title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null), /* @__PURE__ */ React.createElement("style", {
    id: "stitches",
    dangerouslySetInnerHTML: { __html: clientStyleData.sheet },
    suppressHydrationWarning: true
  })), /* @__PURE__ */ React.createElement("body", {
    className: "h-full w-full bg-theme-white dark:bg-theme-black font-body overflow-hidden"
  }, /* @__PURE__ */ React.createElement(ThemeCtx.Provider, {
    value: { mode: themeMode, setMode: setThemeMode }
  }, children), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Outlet, null));
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-5GBQVQCD.js.map
