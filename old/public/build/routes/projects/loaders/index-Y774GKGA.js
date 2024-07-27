import {
  Layout,
  re
} from "/build/_shared/chunk-O6J6CM5C.js";
import "/build/_shared/chunk-ZHTSBDCV.js";
import "/build/_shared/chunk-QN6MRT7M.js";
import "/build/_shared/chunk-W2QBTTXU.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-KDLP5LGO.js";

// browser-route-module:/Users/kevincarlos/Documents/projects/kevin-carlos.github.io/app/routes/projects/loaders/index.tsx?browser
init_react();

// app/routes/projects/loaders/index.tsx
init_react();

// app/routes/projects/loaders/Spinners.tsx
init_react();
var DoubleAlternateSpinner = re("div", {
  "& > div:first-child": {
    height: "20px",
    width: "20px",
    borderRadius: "9999px",
    border: "1px solid gray"
  }
});
var Spinners = () => {
  return /* @__PURE__ */ React.createElement(DoubleAlternateSpinner, null, /* @__PURE__ */ React.createElement("div", null), /* @__PURE__ */ React.createElement("div", null));
};

// app/routes/projects/loaders/index.tsx
function Index() {
  return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", {
    className: "h-full w-full flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement(Spinners, null)));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/projects/loaders/index-Y774GKGA.js.map
