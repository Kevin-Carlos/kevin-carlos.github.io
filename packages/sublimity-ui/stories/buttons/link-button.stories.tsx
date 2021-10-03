import { Story } from '@storybook/react';
import { LinkButton as Link } from '../../src';
import type { LinkButtonProps } from '../../src/buttons/link-button/link-button';

export default {
  title: 'Molecules/Buttons',
};

const Template: Story<LinkButtonProps> = (args) => (
  <Link {...args}>{args.children}</Link>
);

export const LinkButton: Story<LinkButtonProps> = Template.bind({});
LinkButton.parameters = {
  backgrounds: { default: 'dark' },
};
LinkButton.args = {
  ...LinkButton.args,
  children: 'Submit Item',
};
LinkButton.argTypes = {
  onClick: { active: 'Go to href' },
};
