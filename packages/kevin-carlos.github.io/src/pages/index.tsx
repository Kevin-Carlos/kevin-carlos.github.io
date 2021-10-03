import { MenuContext, MenuLayout } from 'common/layout';
import React, { useEffect, useState } from 'react';
import { Homepage } from './_home/_home';

// eslint-disable-next-line react/display-name
export default (): JSX.Element => {
  const [hideFooterItems, setFooterItemVisibility] =
    useState<Visibility>('hide');
  const [transparentizeHeaderBG, setHeaderBGVisibility] =
    useState<Visibility>('show');

  useEffect(() => {
    setTimeout(() => setHeaderBGVisibility('hide'), 500);
  }, []);

  return (
    // This will fallback to its default on unmount
    <MenuContext.Provider
      value={{
        hideFooterItems,
        setFooterItemVisibility,
        transparentizeHeaderBG,
        setHeaderBGVisibility,
      }}
    >
      <MenuLayout>
        <Homepage />
      </MenuLayout>
    </MenuContext.Provider>
  );
};
