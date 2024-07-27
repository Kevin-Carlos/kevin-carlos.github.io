import {
  Layout,
  PillButton,
  animated,
  useChain,
  useSpring,
  useSpringRef
} from "/build/_shared/chunk-225F35WS.js";
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
  const springInStyles = useSpring({
    from: {
      transform: "translate3d(-50%, 50%, 0) scale(0)"
    },
    to: {
      transform: "translate3d(-50%, 0, 0) scale(1)"
    },
    duration: 250,
    reset: true
  });
  const borderLeftSpringRef = useSpringRef();
  const [springInLeftBorderStyles, startLeftBorderSpring] = useSpring(() => ({
    to: { transform: "translate3d(0, 0, 0) scale(1)" },
    duration: 240,
    ref: borderLeftSpringRef
  }));
  const borderLeftSlideSpringRef = useSpringRef();
  const [springInSlideLeftBorderStyles, startLeftBorderSlideSpring] = useSpring(() => ({
    to: {
      left: 0
    },
    ref: borderLeftSlideSpringRef
  }));
  useChain(showCountdown ? [borderLeftSpringRef, borderLeftSlideSpringRef] : [borderLeftSlideSpringRef, borderLeftSpringRef]);
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
      setShowCountdown(false);
      setCurrentTime(COUNTDOWN);
      clearInterval(intervalRef.current);
    }
  }, [currentTime]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-[40px] dark:text-theme-white text-theme-black text-lg relative"
  }, /* @__PURE__ */ React.createElement(animated.div, {
    className: "w-[1px] bg-theme-orange h-full absolute scale-0 left-[50%] translate-x-[-50%]",
    style: showCountdown ? { ...springInLeftBorderStyles } : void 0
  }), /* @__PURE__ */ React.createElement(animated.div, {
    className: "w-[1px] bg-theme-orange h-full absolute right-0"
  }), /* @__PURE__ */ React.createElement(animated.div, {
    style: {
      position: "absolute",
      left: "50%",
      ...springInStyles
    }
  }, showCountdown && /* @__PURE__ */ React.createElement("span", null, currentTime))), /* @__PURE__ */ React.createElement(PillButton, {
    className: "bg-theme-blue",
    disabled: showCountdown === true,
    onClick: () => {
      if (showCountdown) {
        return;
      }
      setShowCountdown(true);
      startLeftBorderSpring().start();
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
//# sourceMappingURL=/build/routes/projects/loaders/index-U4YSP4QZ.js.map
