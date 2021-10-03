import { Story } from '@storybook/react';
import { ChevronLeft as CL, ChevronRight as CR } from '../../src';

export default {
  title: 'Atoms/Chevrons',
};

// const Template: Story = (args) => (
//   <UIButton {...args}>
//     {args.children}
//   </UIButton>
// );

export const ChevronLeft = () => <CL />;
export const ChevronRight = () => <CR />;
