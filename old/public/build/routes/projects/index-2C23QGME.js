import {
  Layout,
  links
} from "/build/_shared/chunk-UPYCSPPN.js";
import "/build/_shared/chunk-KQNJIRNM.js";
import "/build/_shared/chunk-E7SKMB7I.js";
import {
  Link,
  styled
} from "/build/_shared/chunk-J2KBQDXM.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-N2P4UVFW.js";

// browser-route-module:/Users/kevincarlos/Documents/projects/kevin-carlos.github.io/app/routes/projects/index.tsx?browser
init_react();

// app/routes/projects/index.tsx
init_react();

// app/common/ui-elements/cards/index.ts
init_react();

// app/common/ui-elements/cards/card.tsx
init_react();
var CardListItem = styled("li", {
  "padding": "16px",
  "position": "relative",
  "cursor": "pointer",
  "transition": "transform 200ms ease-out",
  "backgroundColor": "$cardBg",
  "border": "1px solid $dteal",
  "borderRadius": "6px",
  "boxShadow": "4px 4px 6px rgba(0, 0, 0, 0.2)",
  "&::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "4px",
    backgroundColor: "$cardHighlight",
    borderTopLeftRadius: "6px",
    borderTopRightRadius: "6px"
  },
  "&:hover": {
    transform: "scale(1.02)"
  }
});
var MaybeLinkedContent = ({ to, children }) => {
  if (!to) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, children);
  } else if (to.includes("http")) {
    return /* @__PURE__ */ React.createElement("a", {
      href: to
    }, children);
  }
  return /* @__PURE__ */ React.createElement(Link, {
    to
  }, children);
};
var Card = ({ title, to, children }) => {
  return /* @__PURE__ */ React.createElement(CardListItem, null, /* @__PURE__ */ React.createElement(MaybeLinkedContent, {
    to
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-xl mb-5 tracking-wider"
  }, title), children)));
};

// app/common/ui-elements/cards/card-list.tsx
init_react();
var CardList = ({ children }) => {
  return /* @__PURE__ */ React.createElement("ul", {
    className: "grid gap-5 md:grid-cols-auto-fit-card dark:text-theme-white"
  }, children);
};

// app/routes/projects/project-items.tsx
init_react();
var projectItems = [
  {
    name: "Loot Crates",
    description: /* @__PURE__ */ React.createElement("p", null, "An interactive loot crate system built to learn and understand the inner-workings of loot boxes."),
    path: links.projects().project().lootCrate()
  },
  {
    name: "Loaders",
    description: /* @__PURE__ */ React.createElement("p", null, "Building loading spinners / indicators for fun."),
    path: links.projects().project().loaders()
  }
];

// app/routes/projects/index.tsx
function Index() {
  return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", {
    className: "h-full w-full px-5 pt-10 flex justify-center align-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-[70rem] mx-auto"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-6xl dark:text-theme-white mx-auto mb-5"
  }, "Projects"), /* @__PURE__ */ React.createElement(CardList, null, projectItems.map((project) => /* @__PURE__ */ React.createElement(Card, {
    key: project.name,
    title: project.name,
    to: project.path
  }, project.description))))));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/projects/index-2C23QGME.js.map
