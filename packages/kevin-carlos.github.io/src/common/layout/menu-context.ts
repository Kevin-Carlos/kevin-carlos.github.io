import { createContext } from 'react';

type MenuContextT = {
  hideFooterItems: Visibility;
  setFooterItemVisibility: (v: Visibility) => void;
  transparentizeHeaderBG: Visibility;
  setHeaderBGVisibility: (v: Visibility) => void;
};

export const MenuContext = createContext<MenuContextT>({
  hideFooterItems: 'show',
  setFooterItemVisibility: () => null,
  transparentizeHeaderBG: 'show',
  setHeaderBGVisibility: () => null,
});
