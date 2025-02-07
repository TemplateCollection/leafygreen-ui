import React from 'react';
import { ComponentStory } from '@storybook/react';

import CloudIcon from '@leafygreen-ui/icon/dist/Cloud';
import { storybookArgTypes } from '@leafygreen-ui/lib';

import IconButton from '.';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    href: { control: 'string' },
    active: { control: 'boolean' },
    disabled: { control: 'boolean' },
    darkMode: storybookArgTypes.darkMode,
  },
};
// eslint-disable-next-line react/prop-types
const Template: ComponentStory<typeof IconButton> = ({ darkMode, ...args }) => (
  <IconButton darkMode={darkMode} {...args}>
    <CloudIcon />
  </IconButton>
);

export const Basic = Template.bind({});

export const Link = Template.bind({});
Link.args = {
  href: 'https://mongodb.design',
};
