import React from 'react';

import Button from './index';

export default {
  title: 'fitfab/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  size: 'large',
  label: 'Save',
};

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'small',
  label: 'Save',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Save',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Save',
};
