import {
  Layout,
  PillButton
} from "/build/_shared/chunk-XZ3FJ2JI.js";
import "/build/_shared/chunk-KQNJIRNM.js";
import "/build/_shared/chunk-E7SKMB7I.js";
import {
  styled
} from "/build/_shared/chunk-LH2E6UCL.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-N2P4UVFW.js";

// browser-route-module:/Users/kevincarlos/Documents/projects/kevin-carlos.github.io/app/routes/projects/loot-crate/index.tsx?browser
init_react();

// app/routes/projects/loot-crate/index.tsx
init_react();

// app/routes/projects/loot-crate/crates/index.ts
init_react();

// app/routes/projects/loot-crate/crates/naive-box.tsx
init_react();
var import_react = __toESM(require_react());

// app/routes/projects/loot-crate/crates/helpers/index.ts
init_react();

// app/routes/projects/loot-crate/crates/helpers/centered-text-item.tsx
init_react();
var Wrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px"
});
var CenteredTextItem = ({ className, children }) => {
  return /* @__PURE__ */ React.createElement(Wrapper, {
    className
  }, children);
};

// app/routes/projects/loot-crate/crates/helpers/character-modal.tsx
init_react();
var ModalOverlay = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "absolute top-0 bottom-0 left-0 right-0  bg-theme-black bg-opacity-70 backdrop-blur-sm z-10 rounded-sm"
  });
};
var CharacterModal = ({ children }) => {
  return /* @__PURE__ */ React.createElement("div", {
    role: "dialog",
    className: "absolute top-0 bottom-0 left-0 right-0"
  }, /* @__PURE__ */ React.createElement(ModalOverlay, null), /* @__PURE__ */ React.createElement("div", {
    className: "relative h-full w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center z-20"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-theme-white"
  }, children))));
};

// app/routes/projects/loot-crate/crates/helpers/crate-info-item.tsx
init_react();
var CrateInfoItem = ({ children }) => {
  return /* @__PURE__ */ React.createElement("li", {
    className: "relative border-2 rounded-md border-theme-dteal p-5"
  }, children);
};

// app/routes/projects/loot-crate/crates/naive-box.tsx
var shuffle = (array) => {
  let currentIndex = array.length;
  let randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }
  return array;
};
var createBag = () => {
  const bag = ["mythical"];
  for (let i = 0; i < 20; i++) {
    bag.push("legendary");
  }
  for (let i = 0; i < 106; i++) {
    bag.push("epic");
  }
  for (let i = 0; i < 380; i++) {
    bag.push("rare");
  }
  for (let i = 0; i < 2e3 - 380 - 106 - 20 - 1; i++) {
    bag.push("common");
  }
  return shuffle(bag);
};
var NaiveBox = () => {
  const [bag, setBag] = (0, import_react.useState)([]);
  (0, import_react.useEffect)(() => {
    const newBag = createBag();
    setBag(newBag);
  }, []);
  const [charOpened, setCharOpened] = (0, import_react.useState)(void 0);
  const openBoxHandler = () => {
    const randomIndex = Math.floor(Math.random() * 2e3);
    const char = bag[randomIndex];
    setCharOpened(char);
  };
  (0, import_react.useEffect)(() => {
    if (charOpened) {
      setTimeout(() => {
        setCharOpened(void 0);
      }, 2 * 1e3);
    }
  }, [charOpened]);
  return /* @__PURE__ */ React.createElement(CrateInfoItem, null, /* @__PURE__ */ React.createElement("h1", {
    className: "mb-5 text-2xl"
  }, "Naive Bag Implementation Box"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 mb-5"
  }, /* @__PURE__ */ React.createElement(CenteredTextItem, {
    className: "bg-theme-orange"
  }, "Mythical (0.05%)"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-rows-4"
  }, /* @__PURE__ */ React.createElement(CenteredTextItem, {
    className: "bg-theme-blue row-span-2"
  }, "Legendary (1%)"), /* @__PURE__ */ React.createElement(CenteredTextItem, {
    className: "bg-theme-lteal2"
  }, "Epic (5.3%)"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2"
  }, /* @__PURE__ */ React.createElement(CenteredTextItem, {
    className: "dark:bg-theme-dgray bg-theme-lgray"
  }, "Rare (19%)"), /* @__PURE__ */ React.createElement(CenteredTextItem, {
    className: "dark:bg-theme-dteal bg-theme-lteal"
  }, "Common (74.65%)")))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(PillButton, {
    className: "bg-theme-lteal hover:bg-theme-lteal2 w-full",
    onClick: openBoxHandler
  }, "Open")), charOpened ? /* @__PURE__ */ React.createElement(CharacterModal, null, charOpened.toLocaleUpperCase()) : null);
};

// app/routes/projects/loot-crate/crates/weighted-box.tsx
init_react();
var import_react2 = __toESM(require_react());

// app/routes/projects/loot-crate/crates/open-box.ts
init_react();
var openBox = (odds) => {
  let sum = 0;
  const randomNumber = Math.random();
  for (const odd in odds) {
    const weight = odds[odd];
    const normalizedWeight = weight / 100;
    sum += normalizedWeight;
    if (randomNumber <= sum) {
      return odd;
    }
  }
};

// app/routes/projects/loot-crate/crates/weighted-box.tsx
var randomBoxOdds = {
  common: 74,
  rare: 19,
  epic: 5.3,
  legendary: 1.3,
  mythical: 0.4
};
var WeightedBox = () => {
  const [charOpened, setCharOpened] = (0, import_react2.useState)(void 0);
  const openBoxHandler = () => {
    setCharOpened(openBox(randomBoxOdds));
  };
  (0, import_react2.useEffect)(() => {
    if (charOpened) {
      setTimeout(() => {
        setCharOpened(void 0);
      }, 2 * 1e3);
    }
  }, [charOpened]);
  return /* @__PURE__ */ React.createElement(CrateInfoItem, null, /* @__PURE__ */ React.createElement("h1", {
    className: "mb-5 text-2xl"
  }, "Weighted-Random Box"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 mb-5"
  }, /* @__PURE__ */ React.createElement(CenteredTextItem, {
    className: "bg-theme-orange"
  }, "Mythical (0.4%)"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-rows-4"
  }, /* @__PURE__ */ React.createElement(CenteredTextItem, {
    className: "bg-theme-blue row-span-2"
  }, "Legendary (1.3%)"), /* @__PURE__ */ React.createElement(CenteredTextItem, {
    className: "bg-theme-lteal2"
  }, "Epic (5.3%)"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2"
  }, /* @__PURE__ */ React.createElement(CenteredTextItem, {
    className: "dark:bg-theme-dgray bg-theme-lgray"
  }, "Rare (19%)"), /* @__PURE__ */ React.createElement(CenteredTextItem, {
    className: "dark:bg-theme-dteal bg-theme-lteal"
  }, "Common (74%)")))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(PillButton, {
    className: "bg-theme-lteal hover:bg-theme-lteal2 w-full",
    onClick: openBoxHandler
  }, "Open")), charOpened ? /* @__PURE__ */ React.createElement(CharacterModal, null, charOpened.toLocaleUpperCase()) : null);
};

// app/routes/projects/loot-crate/index.tsx
function Index() {
  return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", {
    className: "h-full w-full flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "dark:text-theme-white grid gap-5 md:grid-cols-2"
  }, /* @__PURE__ */ React.createElement(WeightedBox, null), /* @__PURE__ */ React.createElement(NaiveBox, null))));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/projects/loot-crate/index-P4DLSRXJ.js.map
