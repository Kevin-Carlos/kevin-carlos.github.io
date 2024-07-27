import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-N2P4UVFW.js";

// app/common/hooks/theme/useDarkMode.ts
init_react();
var import_react = __toESM(require_react());
var useDarkMode = () => {
  const [mode, setM] = (0, import_react.useState)("dark");
  const setMode = (0, import_react.useCallback)((theme) => {
    if (theme === "dark") {
      setM("dark");
    } else if (theme === "light") {
      setM("light");
    }
  }, []);
  (0, import_react.useEffect)(() => {
    if (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setM("dark");
    } else {
      setM("light");
    }
  }, []);
  return [mode, setMode];
};

// app/common/hooks/theme/index.ts
init_react();

export {
  useDarkMode
};
//# sourceMappingURL=/build/_shared/chunk-POVZYMEF.js.map
