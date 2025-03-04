import { Meta, StoryObj } from '@storybook/react';
import { InputTypeToggle } from './Components';

const meta = {
  title: 'Form/InputTypeToggle',
  component: InputTypeToggle,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof InputTypeToggle>;

export default meta;

export const example: StoryObj<typeof meta> = {};
