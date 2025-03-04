import type { Meta, StoryObj } from '@storybook/react';
import Logo from '../components/Logo';
import { BrowserRouter } from 'react-router';

const meta = {
  title: 'Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {},
  args: {
    className: 'w-140 h-40',
  },
} satisfies Meta<typeof Logo>;

export default meta;

export const example: StoryObj<typeof meta> = {
  args: { className: 'w-140 h-40' },
};
