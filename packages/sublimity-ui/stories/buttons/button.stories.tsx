import React from 'react';
import { Story } from '@storybook/react';
import { Plus, Trash } from 'phosphor-react';
import { Button as UIButton } from '../../src';
import type { ButtonProps } from '../../src/buttons/button/button';

export default {
  title: 'Molecules/Buttons',
};

const Template: Story<ButtonProps> = (args) => (
  <UIButton {...args}>{args.children}</UIButton>
);

export const Button: Story<ButtonProps> = Template.bind({});
Button.args = {
  ...Button.args,
  color: 'dark_teal',
  icon: <Trash />,
  children: <span>Submit Item</span>,
};
Button.argTypes = {
  onClick: { active: 'Delete' },
};

export const Button2: Story<ButtonProps> = Template.bind({});
Button2.args = {
  ...Button2.args,
  color: 'blue',
  icon: <Plus />,
  children: <span>Submit Item</span>,
};
Button2.argTypes = {
  onClick: { active: 'Delete' },
};
