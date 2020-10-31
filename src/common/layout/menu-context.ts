import { createContext } from "react";

type MenuContextT = {
  hideFooterItems: Visibility;
  setFooterItemVisibility: (v: Visibility) => void;
  transparentizeHeaderBG: Visibility;
  setHeaderBGVisibility: (v: Visibility) => void;
};

export const MenuContext = createContext<MenuContextT>({
  hideFooterItems: "show",
  setFooterItemVisibility: (v: Visibility) => null,
  transparentizeHeaderBG: "show",
  setHeaderBGVisibility: (v: Visibility) => null,
});
