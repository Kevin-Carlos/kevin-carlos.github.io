import {
  useDarkMode
} from "/build/_shared/chunk-POVZYMEF.js";
import {
  ThemeCtx
} from "/build/_shared/chunk-E7SKMB7I.js";
import {
  ClientStyleContext,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  darkTheme,
  globalStyles,
  styled,
  useLoaderData
} from "/build/_shared/chunk-FXNQK6PP.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-N2P4UVFW.js";

// browser-route-module:/Users/kevincarlos/Documents/projects/kevin-carlos.github.io/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();
var import_react2 = __toESM(require_react());
var Body = styled("body", {
  height: "100%",
  width: "100%",
  margin: 0,
  fontFamily: "$body",
  overflow: "hidden",
  backgroundColor: "$body"
});
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700;800;900&display=swap"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
    }
  ];
};
var meta = () => ({
  charset: "utf-8",
  title: "Kevin Carlos",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  const { colorScheme } = useLoaderData();
  const [themeMode, setThemeMode] = useDarkMode();
  (0, import_react2.useEffect)(() => {
    globalStyles();
    setThemeMode(colorScheme);
  }, [colorScheme]);
  const clientStyleData = (0, import_react2.useContext)(ClientStyleContext);
  (0, import_react2.useEffect)(() => {
    clientStyleData.reset();
  }, [clientStyleData]);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    style: { height: "100%", width: "100%" }
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null), /* @__PURE__ */ React.createElement("style", {
    id: "stitches",
    dangerouslySetInnerHTML: { __html: clientStyleData.sheet },
    suppressHydrationWarning: true
  })), /* @__PURE__ */ React.createElement(Body, {
    className: colorScheme === "dark" ? colorScheme + " " + darkTheme : colorScheme
  }, /* @__PURE__ */ React.createElement(ThemeCtx.Provider, {
    value: { mode: themeMode, setMode: setThemeMode }
  }, /* @__PURE__ */ React.createElement(Outlet, null)), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-XER3QHFR.js.map
