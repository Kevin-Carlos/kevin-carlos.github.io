import {
  Layout,
  clsx_m_default,
  links
} from "/build/_shared/chunk-XLAEYMIM.js";
import "/build/_shared/chunk-KWLKFF5Z.js";
import "/build/_shared/chunk-KZIRCZOW.js";
import {
  Link
} from "/build/_shared/chunk-SPG4GL7V.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:/Users/kevincarlos/Documents/projects/kevin-carlos.github.io/app/routes/projects/index.tsx?browser
init_react();

// app/routes/projects/index.tsx
init_react();

// app/common/ui-elements/cards/index.ts
init_react();

// app/common/ui-elements/cards/card.tsx
init_react();
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
  return /* @__PURE__ */ React.createElement("li", {
    style: { boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.2)" },
    className: clsx_m_default([
      "p-4",
      "relative",
      "hover:scale-[1.02]",
      "transition-transform",
      "ease-out",
      "cursor-pointer",
      "bg-theme-lteal2",
      "bg-opacity-40",
      "dark:bg-theme-black",
      "border-[1px]",
      "rounded-md",
      "border-theme-dteal",
      "border-solid",
      "before:content-['']",
      "before:absolute",
      "before:top-0",
      "before:left-0",
      "before:right-0",
      "before:w-full",
      "before:bg-theme-black",
      "before:dark:bg-theme-orange",
      "before:h-1",
      "before:rounded-tl-md",
      "before:rounded-tr-md"
    ])
  }, /* @__PURE__ */ React.createElement(MaybeLinkedContent, {
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
//# sourceMappingURL=/build/routes/projects/index-KQPCW7J2.js.map
