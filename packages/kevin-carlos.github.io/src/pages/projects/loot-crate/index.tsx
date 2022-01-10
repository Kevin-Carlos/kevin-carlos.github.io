import React from 'react';
import { MenuLayout, Section } from '../../../common/layout';
import { LootBox } from './_loot-box';

const LootBoxPage = (): React.ReactElement => {
  return (
    <MenuLayout>
      <Section isFirst centered>
        <LootBox />
      </Section>
    </MenuLayout>
  );
};

export default LootBoxPage;
