import {
  Layout
} from "/build/_shared/chunk-OOM2DJA2.js";
import "/build/_shared/chunk-KQNJIRNM.js";
import "/build/_shared/chunk-E7SKMB7I.js";
import {
  ee,
  re
} from "/build/_shared/chunk-MRLH7MYJ.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-N2P4UVFW.js";

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
var PulsingDots = re("div", {
  "display": "flex",
  "flexDirection": "row",
  "justifyItems": "space-evenly",
  "& > div": {
    height: "12px",
    width: "12px",
    background: "gray",
    borderRadius: "9999px"
  },
  "& > div:not(:last-child)": {
    marginRight: "8px"
  }
});
var pulse1 = ee({
  "0%": {
    transform: "scale(1)"
  },
  "25%": {
    transform: "scale(1.3)"
  },
  "50%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(1)"
  }
});
var pulse2 = ee({
  "0%": {
    transform: "scale(1)"
  },
  "25%": {
    transform: "scale(1)"
  },
  "50%": {
    transform: "scale(1.3)"
  },
  "75%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(1)"
  }
});
var pulse3 = ee({
  "0%": {
    transform: "scale(1)"
  },
  "25%": {
    transform: "scale(1)"
  },
  "50%": {
    transform: "scale(1)"
  },
  "75%": {
    transform: "scale(1.3)"
  },
  "100%": {
    transform: "scale(1)"
  }
});
var PulseDot1 = re("div", {
  animation: `${pulse1} 2s infinite`
});
var PulseDot2 = re("div", {
  animation: `${pulse2} 2s infinite`
});
var PulseDot3 = re("div", {
  animation: `${pulse3} 2s infinite`
});
var SlideOutPulseDots = re("div", {
  "display": "flex",
  "flexDirection": "row",
  "justifyItems": "space-evenly",
  "& > div": {
    height: "12px",
    width: "12px",
    background: "gray",
    borderRadius: "9999px"
  },
  "& > div:not(:last-child)": {
    marginRight: "8px"
  }
});
var dot1 = ee({
  "0%": {
    transform: "translateX(20px) scale(1.3)"
  },
  "5%": {
    transform: "translateX(20) scale(1)"
  },
  "25%": {
    transform: "translateX(20px)"
  },
  "50%": {
    transform: "translateX(0px)"
  },
  "60%": {
    transform: "scale(1.3)"
  },
  "70%": {
    transform: "scale(1)"
  }
});
var dot2 = ee({
  "0%": {
    transform: "scale(1.3)"
  },
  "5%": {
    transform: "scale(1)"
  },
  "25%": { transform: "scale(1)" },
  "50%": { transform: "scale(1)" },
  "60%": { transform: "scale(1)" },
  "70%": {
    transform: "scale(1.3)"
  },
  "80%": {
    transform: "scale(1)"
  }
});
var dot3 = ee({
  "0%": {
    transform: "translateX(-20px) scale(1.3)"
  },
  "5%": {
    transform: "translateX(-20) scale(1)"
  },
  "25%": {
    transform: "translateX(-20px) scale(1)"
  },
  "50%": {
    transform: "translateX(0px)"
  },
  "60%": {
    transform: "translateX(0px)"
  },
  "70%": {
    transform: "scale(1)"
  },
  "80%": {
    transform: "scale(1.3)"
  },
  "90%": {
    transform: "scale(1)"
  }
});
var Dot1 = re("div", {
  animation: `${dot1} 4s infinite`,
  animationDirection: "alternate"
});
var Dot2 = re("div", {
  animation: `${dot2} 4s infinite`,
  animationDirection: "alternate"
});
var Dot3 = re("div", {
  animation: `${dot3} 4s infinite`,
  animationDirection: "alternate"
});
var Spinners = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full h-full flex-row justify-evenly items-center"
  }, /* @__PURE__ */ React.createElement(DoubleAlternateSpinner, null, /* @__PURE__ */ React.createElement("div", null), /* @__PURE__ */ React.createElement("div", null)), /* @__PURE__ */ React.createElement(PulsingDots, null, /* @__PURE__ */ React.createElement(PulseDot1, null), /* @__PURE__ */ React.createElement(PulseDot2, null), /* @__PURE__ */ React.createElement(PulseDot3, null)), /* @__PURE__ */ React.createElement(SlideOutPulseDots, null, /* @__PURE__ */ React.createElement(Dot1, null), /* @__PURE__ */ React.createElement(Dot2, null), /* @__PURE__ */ React.createElement(Dot3, null)));
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
//# sourceMappingURL=/build/routes/projects/loaders/index-TBHSNERC.js.map
