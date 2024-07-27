import {
  Layout,
  PillButton,
  animated,
  useTransition
} from "/build/_shared/chunk-XN33EO5F.js";
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
  const transitions = useTransition(currentTime, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 100
  });
  (0, import_react.useEffect)(() => {
    if (!showCountdown) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCurrentTime((prevTime) => prevTime - 1);
    }, 1e3);
  }, [showCountdown]);
  (0, import_react.useEffect)(() => {
    if (currentTime === 0 && intervalRef.current) {
      clearInterval(intervalRef.current);
      setShowCountdown(false);
      setCurrentTime(COUNTDOWN);
    }
  }, [currentTime]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-5 dark:text-theme-white text-theme-black text-lg relative"
  }, showCountdown && /* @__PURE__ */ React.createElement(React.Fragment, null, transitions(({ opacity }, item) => {
    return /* @__PURE__ */ React.createElement(animated.span, {
      style: {
        position: "absolute",
        top: 0,
        opacity
      }
    }, item);
  }))), /* @__PURE__ */ React.createElement(PillButton, {
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
//# sourceMappingURL=/build/routes/projects/loaders/index-C6YZPCHV.js.map
