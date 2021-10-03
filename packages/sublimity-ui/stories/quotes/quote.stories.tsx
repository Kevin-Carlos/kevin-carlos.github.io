import { Blockquote } from '../../src';
import styled from 'styled-components';
import { Story } from '@storybook/react';
import type { BlockquoteProps } from '../../src/quotes';

// Components Section
const Grid = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: minmax(0, 1fr);
`;

const Description = styled.p`
  max-width: 60rem;
`;
// End Components Section

export default {
  title: 'Molecules/Quotes',
};

const Template: Story<BlockquoteProps> = (args) => (
  <Grid>
    <Blockquote
      color={args.color}
      highlightColor={args.highlightColor}
      author={args.author}
    >
      {args.children}
    </Blockquote>
  </Grid>
);

export const Basic: Story<BlockquoteProps> = Template.bind({});
Basic.args = {
  ...Basic.args,
  color: 'rgb(230, 155, 28)',
  highlightColor: 'rgb(255, 255, 255)',
  author: 'The Platform',
  children: (
    <>
      <Description>
        Too many companies have been led down the path of believing they have
        the same technical requirements as Fortune 100 enterprises, and we're
        here to fix that.
      </Description>
      <Description>
        Our goal is simple: enable developers to spend more time building
        awesome products and less time managing infrastructure, pushing
        deployments, and patching orchestrators.
      </Description>
    </>
  ),
};
