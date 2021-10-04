import { Story } from '@storybook/react';
import React from 'react';
import { Tab as UITab, TabsList as UITabsList } from '../../src';
import { TabsListProps } from '../../src/buttons/tabs';

export default {
  title: 'Atoms/Tabs',
};

const Template: Story<TabsListProps> = (args) => (
  <UITabsList {...args}>{args.children}</UITabsList>
);

export const TabsList: Story<TabsListProps> = Template.bind({});
TabsList.args = {
  ...TabsList.args,
  children: (
    <>
      <UITab>Tab 1</UITab>
      <UITab>Tab 2</UITab>
      <UITab>Tab 3</UITab>
    </>
  ),
};
