import {
  getCssText,
  require_react_dom
} from "/build/_shared/chunk-PIF5SIA7.js";
import {
  RemixBrowser
} from "/build/_shared/chunk-2YXXC7OF.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-NWDMRDTM.js";

// app/entry.client.tsx
init_react();
var import_react3 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// app/stitches/index.ts
init_react();

// app/stitches/client.context.ts
init_react();
var import_react = __toESM(require_react());
var ClientStyleContext = (0, import_react.createContext)({
  reset: () => null,
  sheet: ""
});

// app/entry.client.tsx
function ClientCacheProvider({ children }) {
  const [sheet, setSheet] = (0, import_react3.useState)(getCssText());
  const reset = (0, import_react3.useCallback)(() => {
    setSheet(getCssText());
  }, []);
  return /* @__PURE__ */ React.createElement(ClientStyleContext.Provider, {
    value: { reset, sheet }
  }, children);
}
(0, import_react_dom.hydrate)(/* @__PURE__ */ React.createElement(ClientCacheProvider, null, /* @__PURE__ */ React.createElement(RemixBrowser, null)), document);
//# sourceMappingURL=/build/entry.client-KL6H4YUV.js.map
