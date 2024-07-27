import {
  require_react_dom
} from "/build/_shared/chunk-KQNJIRNM.js";
import {
  ClientStyleContext,
  RemixBrowser,
  getCssText
} from "/build/_shared/chunk-UDK36TOM.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-N2P4UVFW.js";

// app/entry.client.tsx
init_react();
var import_react2 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
function ClientCacheProvider({ children }) {
  const [sheet, setSheet] = (0, import_react2.useState)(getCssText());
  const reset = (0, import_react2.useCallback)(() => {
    setSheet(getCssText());
  }, []);
  return /* @__PURE__ */ React.createElement(ClientStyleContext.Provider, {
    value: { reset, sheet }
  }, children);
}
(0, import_react_dom.hydrate)(/* @__PURE__ */ React.createElement(ClientCacheProvider, null, /* @__PURE__ */ React.createElement(RemixBrowser, null)), document);
//# sourceMappingURL=/build/entry.client-FNTWHO63.js.map
