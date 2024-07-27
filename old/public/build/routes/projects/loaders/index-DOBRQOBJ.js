import {
  Layout,
  PillButton
} from "/build/_shared/chunk-PPMNB6RI.js";
import "/build/_shared/chunk-ZHTSBDCV.js";
import "/build/_shared/chunk-QN6MRT7M.js";
import "/build/_shared/chunk-57FE6LLP.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-KDLP5LGO.js";

// browser-route-module:/Users/kevincarlos/Documents/projects/kevin-carlos.github.io/app/routes/projects/loaders/index.tsx?browser
init_react();

// app/routes/projects/loaders/index.tsx
init_react();

// app/routes/projects/loaders/HaloCountdown.tsx
init_react();
var import_react = __toESM(require_react());
var COUNTDOWN = 3;
var HaloCountdown = () => {
  const [currentTime, setCurrentTime] = (0, import_react.useState)(COUNTDOWN);
  const [showCountdown, setShowCountdown] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if (!showCountdown) {
      return;
    }
    const interval = setInterval(() => {
      setCurrentTime((prevTime) => prevTime - 1);
      if (currentTime === 0) {
        clearInterval(interval);
      }
    }, 1e3);
    setShowCountdown(false);
    setCurrentTime(COUNTDOWN);
  }, [showCountdown]);
  console.log("CURRENT TIME", currentTime);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(PillButton, {
    className: "bg-theme-blue",
    disabled: showCountdown,
    onClick: () => {
      setShowCountdown(true);
    }
  }, "Start"));
};

// app/routes/projects/loaders/index.tsx
function Index() {
  return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", {
    className: "h-full w-full flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement(HaloCountdown, null)));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/projects/loaders/index-DOBRQOBJ.js.map
