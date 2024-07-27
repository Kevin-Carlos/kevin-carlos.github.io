import {
  Divider,
  Layout,
  Pen_esm_default,
  Tab,
  TabsList,
  animated,
  colors,
  useSpring,
  useTransition
} from "/build/_shared/chunk-VOPPX7IT.js";
import "/build/_shared/chunk-KQNJIRNM.js";
import {
  useDarkMode
} from "/build/_shared/chunk-POVZYMEF.js";
import "/build/_shared/chunk-E7SKMB7I.js";
import {
  styled
} from "/build/_shared/chunk-TW5IALKE.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-N2P4UVFW.js";

// browser-route-module:/Users/kevincarlos/Documents/projects/kevin-carlos.github.io/app/routes/about/index.tsx?browser
init_react();

// app/routes/about/index.tsx
init_react();

// app/common/ui-elements/paragraph/index.ts
init_react();

// app/common/ui-elements/paragraph/paragraph.tsx
init_react();
var Paragraph = ({ children }) => {
  return /* @__PURE__ */ React.createElement("p", {
    className: "mb-5"
  }, children);
};

// app/common/ui-elements/quotes/index.ts
init_react();

// app/common/ui-elements/quotes/blockquote.tsx
init_react();
var Blockquote = ({ children, author }) => {
  const [mode] = useDarkMode();
  const colorToUse = mode === "dark" ? colors.orange : colors.black;
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-[auto_1fr] mb-5"
  }, /* @__PURE__ */ React.createElement(Divider, {
    orientation: "vertical",
    className: "mr-5"
  }), /* @__PURE__ */ React.createElement("blockquote", {
    className: "text-sm"
  }, children, /* @__PURE__ */ React.createElement("p", {
    className: "italic font-semibold"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement(Pen_esm_default, {
    weight: "duotone",
    style: { marginRight: "8px" },
    color: colorToUse
  }), author))));
};

// app/routes/about/descriptions.tsx
init_react();
var import_react4 = __toESM(require_react());

// app/routes/about/blurbs/index.ts
init_react();

// app/routes/about/blurbs/content-blurb.tsx
init_react();

// app/routes/about/blurbs/about-me-blurb.tsx
init_react();
var import_react = __toESM(require_react());

// app/routes/about/blurbs/blurb-divider.tsx
init_react();
var BlurbDivider = () => {
  const [mode] = useDarkMode();
  return /* @__PURE__ */ React.createElement(Divider, {
    className: "my-5",
    color: mode === "dark" ? colors.orange : colors.black
  });
};

// app/routes/about/blurbs/about-me-blurb.tsx
var AboutMeBlurb = () => {
  return /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement(BlurbDivider, null), /* @__PURE__ */ import_react.default.createElement(Paragraph, null, `Hi, I'm Kevin!`), /* @__PURE__ */ import_react.default.createElement(Paragraph, null, "From an early age, I was introduced to Halo by a friend and got hooked into gaming. Like many, I got into Computer Science to build games, but in doing so found a world of much more."), /* @__PURE__ */ import_react.default.createElement(Paragraph, null, "Through school, I learned just how vast the realm of CS is and questioned what path I should take. Tesla was becoming more and more popular and I saw what they were doing with Machine Learning and A.I; So I made these my focus. I was drawn towards this path because I wanted to help develop life-changing technologies that impact and shape the world we live in."), /* @__PURE__ */ import_react.default.createElement(Paragraph, null, "Near the end of my schooling career, I was afforded an opportunity to become a Frontend Software Engineer and in doing so have found that there are more ways to impact and shape the world!"), /* @__PURE__ */ import_react.default.createElement(BlurbDivider, null));
};

// app/routes/about/blurbs/career-blurb.tsx
init_react();
var import_react2 = __toESM(require_react());

// app/routes/about/blurbs/career-items/index.ts
init_react();

// app/routes/about/blurbs/career-items/cycle.tsx
init_react();
var Cycle = () => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Paragraph, null, "In October of 2019, I joined Cycle."), /* @__PURE__ */ React.createElement(Blockquote, {
    author: "Cycle"
  }, /* @__PURE__ */ React.createElement(Paragraph, null, `Too many companies have been led down the path of believing they have
          the same technical requirements as Fortune 100 enterprises, and we're
          here to fix that.`), /* @__PURE__ */ React.createElement(Paragraph, null, "Our goal is simple: enable developers to spend more time building awesome products and less time managing infrastructure, pushing deployments, and patching orchestrators.")), /* @__PURE__ */ React.createElement(Paragraph, null, "I helped manage and maintain five different frontend applications and my most noteworthy project that I worked on was refactoring the app from a Redux based router to React Router. This meant almost an entire application rewrite to not only teach the application how to work with the new routes, but also teach the Redux store how to work as well."), /* @__PURE__ */ React.createElement(Paragraph, null, "Whilst doing this refactor, I attempted to implement some best practices and standardization."));
};

// app/routes/about/blurbs/career-items/square-8.tsx
init_react();
var Square8 = () => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Paragraph, null, "In April of 2021, I joined Square 8 as a fullstack engineer and initially helped the mobile application reach completion before transitioning to the web application."), /* @__PURE__ */ React.createElement(Paragraph, null, "Shortly after, I was offered the opportunity to become the frontend Lead. This opportunity has allowed me to grow my leadership, mentorship, and planning skills. I have also contributed architectual decisions, coding standardizations and implemented some best-practices whilst doing so."), /* @__PURE__ */ React.createElement(Paragraph, null, "One of my favorite projects has been building a webhook based GitLab/Slack bot written in GO that is used company wide to help reduce feedback loops."));
};

// app/routes/about/blurbs/career-blurb.tsx
var CareerBlurb = () => {
  const [tab, setTab] = (0, import_react2.useState)("sq8");
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement(TabsList, null, /* @__PURE__ */ React.createElement(Tab, {
    active: tab === "sq8",
    onClick: () => setTab("sq8")
  }, /* @__PURE__ */ React.createElement("span", null, "Square 8")), /* @__PURE__ */ React.createElement(Tab, {
    active: tab === "cycle",
    onClick: () => setTab("cycle")
  }, /* @__PURE__ */ React.createElement("span", null, "Cycle"))), tab === "sq8" ? /* @__PURE__ */ React.createElement(Square8, null) : null, tab === "cycle" ? /* @__PURE__ */ React.createElement(Cycle, null) : null);
};

// app/routes/about/blurbs/education-blurb.tsx
init_react();
var import_react3 = __toESM(require_react());
var EducationBlurb = () => {
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("h2", {
    className: "mb-2 text-xl"
  }, "University of Nevada, Reno"), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex flex-col items-center h-full"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly"
    }
  }, /* @__PURE__ */ import_react3.default.createElement("p", null, "I graduated in the winter of 2019 from the University of Nevada, Reno with a Bachelors in Computer Science and Engineering and a minor in Mathematics."), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement(BlurbDivider, null)), /* @__PURE__ */ import_react3.default.createElement("p", null, "My coursework and area of interest was in Machine Learning and A.I. For my Senior project, I worked as the primary front-end developer on a team of three. Our goal was to refactor and rebuild, from the ground up, an in-use production application."))));
};

// app/routes/about/blurbs/content-blurb.tsx
var AnimatedDiv = styled(animated.div, {
  position: "relative",
  padding: "20px",
  width: "100%",
  variants: {
    career: {
      true: {
        height: "100%"
      }
    }
  }
});
var ContentBlurb = ({ type }) => {
  const spring = useSpring({
    from: { opacity: 0, transform: "translateY(5rem)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { mass: 1, tension: 280, friction: 60 },
    reset: true
  });
  return /* @__PURE__ */ React.createElement(AnimatedDiv, {
    style: spring,
    career: type === "career"
  }, type === "about" && /* @__PURE__ */ React.createElement(AboutMeBlurb, null), type === "education" && /* @__PURE__ */ React.createElement(EducationBlurb, null), type === "career" && /* @__PURE__ */ React.createElement(CareerBlurb, null));
};

// app/routes/about/circle-items.ts
init_react();
var circleItems = [
  {
    key: "about",
    title: "Who Am I?",
    size: "h-[120px] w-[120px]",
    color: "bg-theme-lteal",
    bgcolor: "md:bg-theme-lteal/25"
  },
  {
    key: "education",
    title: "Education",
    size: "h-[100px] w-[100px]",
    color: "bg-theme-orange",
    bgcolor: "md:bg-theme-orange/25"
  },
  {
    key: "career",
    title: "Career",
    size: "h-[150px] w-[150px]",
    color: "bg-theme-blue",
    bgcolor: "md:bg-theme-blue/25"
  }
];

// app/routes/about/circles.tsx
init_react();

// app/routes/about/active-circles.tsx
init_react();
var ActiveCircle1 = () => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "139",
    height: "138",
    viewBox: "0 0 139 138",
    className: "dark:stroke-theme-white stroke-theme-black",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M7.49561 85C18 124 56.4956 130 56.4956 130",
    stroke: "inherit",
    strokeWidth: "3"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18.6619 23.631C18.6619 23.631 23.4998 16.4996 30.6619 12.631",
    stroke: "inherit",
    strokeWidth: "2"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M83.9942 4.50025C141 20 144 88.0001 111 113",
    stroke: "inherit",
    strokeWidth: "1.5"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M113.502 13.9999C134.502 32 138 53.5 137 75",
    stroke: "inherit",
    strokeWidth: "3"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9.63316 50.6541C9.63316 50.6541 15.9947 17.4995 52.6332 5.65408",
    stroke: "inherit"
  }));
};
var ActiveCircle2 = () => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "125",
    height: "123",
    viewBox: "0 0 125 123",
    className: "dark:stroke-theme-white stroke-theme-black",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M67.8184 7.74396C107.5 9.5 119.818 41.744 119.818 41.744",
    stroke: "inherit",
    strokeWidth: "3"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M68.0009 11C68.0009 11 77.5009 10.5 89.122 15.513",
    stroke: "inherit"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M116.654 89.7613C116.654 89.7613 107.505 110.501 82.6536 118.761",
    stroke: "inherit",
    strokeWidth: "2"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M122.5 40.5C122.5 40.5 119 32 114 26.5",
    stroke: "white"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9.24152 69.9998C7.99626 26.9998 40.8312 13.8322 40.8312 13.8322",
    stroke: "inherit",
    strokeWidth: "2"
  }));
};
var ActiveCircle3 = () => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "175",
    height: "182",
    viewBox: "0 0 175 182",
    fill: "none",
    className: "dark:stroke-theme-white stroke-theme-black",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M15.0003 137C15.0003 137 -15.25 98.5 14 46.5",
    stroke: "inherit",
    strokeWidth: "1.5"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15 137C47.7275 181.199 97.2725 169.301 97.2725 169.301",
    stroke: "inherit",
    strokeWidth: "1.5"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M78.9998 10.9999C132.5 11 151.999 54.4999 151.999 54.4999",
    stroke: "inherit",
    strokeWidth: "3"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M83.2391 5.2884C109.502 4.99991 131.239 21.2884 131.239 21.2884",
    stroke: "inherit",
    strokeWidth: "1.5"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M166.448 88.2156C166.997 136 132.448 159.216 132.448 159.216",
    stroke: "inherit"
  }));
};

// app/routes/about/circles.tsx
var Bubbles = ({ index, setIndex }) => {
  const transitionedHeaderItems = useTransition(circleItems, {
    trail: 150,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" }
  });
  const createRipple = (event) => {
    event.preventDefault();
    const button = event.currentTarget;
    const circle = document.createElement("div");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.position = "absolute";
    circle.style.borderRadius = "50%";
    circle.style.transform = "scale(0)";
    circle.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    circle.style.zIndex = "1000";
    circle.className += "animate-ripple";
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }
    button.appendChild(circle);
  };
  return /* @__PURE__ */ React.createElement("ul", {
    className: "flex flex-wrap justify-center md:flex-nowrap"
  }, transitionedHeaderItems((styles, item) => {
    return /* @__PURE__ */ React.createElement("li", {
      className: "relative hover:scale-105 transition-transform ease-in-out"
    }, index === 0 && item.key === circleItems[index].key ? /* @__PURE__ */ React.createElement("div", {
      className: "absolute top-[6px] left-[2px]"
    }, /* @__PURE__ */ React.createElement(ActiveCircle1, null)) : null, index === 1 && item.key === circleItems[index].key ? /* @__PURE__ */ React.createElement("div", {
      className: "absolute top-[-3px] left-[-6px]"
    }, /* @__PURE__ */ React.createElement(ActiveCircle2, null)) : null, index === 2 && item.key === circleItems[index].key ? /* @__PURE__ */ React.createElement("div", {
      className: "absolute top-[-4px] left-[6px]"
    }, /* @__PURE__ */ React.createElement(ActiveCircle3, null)) : null, /* @__PURE__ */ React.createElement(animated.div, {
      style: {
        ...styles,
        boxShadow: "8px 6px 10px rgb(0 0 0 / 20%)"
      },
      onClick: (ev) => {
        createRipple(ev);
        setIndex(circleItems.findIndex((c) => c.key === item.key));
      }
    }, /* @__PURE__ */ React.createElement("h1", null, item.title)));
  }));
};
var Circles = ({ index, setIndex }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "mb-5 md:mr-5"
  }, /* @__PURE__ */ React.createElement(Bubbles, {
    index,
    setIndex
  }));
};

// app/routes/about/descriptions.tsx
var StyledDiv = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "8px",
  height: "100%",
  width: "100%"
});
var ContentWrapper = styled("div", {
  color: "$text",
  display: "flex",
  justifyContent: "center"
});
var Descriptions = () => {
  const [index, setIndex] = (0, import_react4.useState)(0);
  return /* @__PURE__ */ React.createElement(StyledDiv, null, /* @__PURE__ */ React.createElement(Circles, {
    index,
    setIndex: (n) => setIndex(n)
  }), /* @__PURE__ */ React.createElement(ContentWrapper, null, /* @__PURE__ */ React.createElement(ContentBlurb, {
    type: circleItems[index].key
  })));
};

// app/routes/about/index.tsx
function AboutMe() {
  return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full h-full items-center justify-center"
  }, /* @__PURE__ */ React.createElement(Descriptions, null)));
}
export {
  AboutMe as default
};
//# sourceMappingURL=/build/routes/about/index-J5SF3YDO.js.map
