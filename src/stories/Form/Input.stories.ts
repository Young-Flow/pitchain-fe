import { Meta, StoryObj } from '@storybook/react';
import { BasicInput } from './Components';

const meta = {
  title: 'Form/BasicInput',
  component: BasicInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof BasicInput>;

export default meta;

export const example: StoryObj<typeof meta> = {};
