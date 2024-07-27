import {
  Layout,
  ee,
  re
} from "/build/_shared/chunk-2FFRPVMJ.js";
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
var rotateClockwise = ee({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
var rotateCounterClockwise = ee({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(-360deg)"
  }
});
var DoubleAlternateSpinner = re("div", {
  "position": "relative",
  "& > div:first-child": {
    position: "absolute",
    height: "40px",
    width: "40px",
    borderRadius: "9999px",
    border: "1px solid gray",
    borderTopColor: "transparent",
    animation: `${rotateClockwise} 1s infinite`
  },
  "& > div:last-child": {
    position: "absolute",
    margin: "5px",
    height: "30px",
    width: "30px",
    borderRadius: "9999px",
    border: "1px solid gray",
    borderBottomColor: "transparent",
    animation: `${rotateCounterClockwise} 1s infinite`
  }
});
var pulse = ee({
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(1.3)"
  }
});
var PulsingDots = re("div", {
  "display": "flex",
  "flexDirection": "row",
  "justifyItems": "space-evenly",
  "& > div": {
    height: "20px",
    width: "20px",
    background: "gray",
    borderRadius: "9999px"
  },
  "& > div:not(:last-child)": {
    marginRight: "8px"
  }
});
var Spinners = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full h-full flex-row justify-evenly items-center"
  }, /* @__PURE__ */ React.createElement(DoubleAlternateSpinner, null, /* @__PURE__ */ React.createElement("div", null), /* @__PURE__ */ React.createElement("div", null)), /* @__PURE__ */ React.createElement(PulsingDots, null, /* @__PURE__ */ React.createElement("div", null), /* @__PURE__ */ React.createElement("div", null), /* @__PURE__ */ React.createElement("div", null)));
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
//# sourceMappingURL=/build/routes/projects/loaders/index-Q7ZWKFGY.js.map
