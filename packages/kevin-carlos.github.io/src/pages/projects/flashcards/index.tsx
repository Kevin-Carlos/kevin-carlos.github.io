import React from 'react';
import { MenuLayout, Section } from '../../../common/layout';
import { Flashcards } from './_flashcards';

// eslint-disable-next-line react/display-name
export default (): React.ReactElement => {
  return (
    <MenuLayout>
      <Section isFirst centered>
        <Flashcards />
      </Section>
    </MenuLayout>
  );
};
