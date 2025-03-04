import { Meta, StoryObj } from '@storybook/react';
import { InputWithLabel } from './Components';

const meta = {
  title: 'Form/InputWithLabel',
  component: InputWithLabel,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof InputWithLabel>;

export default meta;

export const example: StoryObj<typeof meta> = {};
