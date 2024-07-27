import {
  Layout,
  PillButton
} from "/build/_shared/chunk-BVC66MNS.js";
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
  const intervalRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (!showCountdown) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCurrentTime((prevTime) => prevTime - 1);
    }, 1e3);
    setShowCountdown(false);
    setCurrentTime(COUNTDOWN);
  }, [showCountdown]);
  (0, import_react.useEffect)(() => {
    if (currentTime === 0 && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [currentTime]);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(PillButton, {
    className: "bg-theme-blue",
    disabled: showCountdown === true,
    onClick: () => {
      if (showCountdown) {
        return;
      }
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
//# sourceMappingURL=/build/routes/projects/loaders/index-ZP2AVRM5.js.map
