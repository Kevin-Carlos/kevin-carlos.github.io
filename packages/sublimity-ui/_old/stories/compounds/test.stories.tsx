import React from 'react';
import { Blockquote, ChevronLeft, ChevronRight, colors } from '../../src';

export default {
  title: 'Compounds/Test',
};

export const Basic = () => (
  <div
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
  >
    <ChevronLeft />
    <Blockquote
      author="Myself"
      color={colors.dark_teal}
      highlightColor="rgb(255, 255, 255)"
    >
      <p>This is a quote</p>
    </Blockquote>
    <ChevronRight />
  </div>
);
