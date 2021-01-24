import React from 'react';

import Input from './index';

export default {
  title: 'fitfab/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
};

const Template = (args) => <Input {...args} />;

export const Large = Template.bind({});
Large.args = {
    label: 'user name:',
  size: 'large',
  name: 'userName',
};

export const Small = Template.bind({});
Small.args = {
    label: 'user name:',
  size: 'small',
  name: 'userName',
};
