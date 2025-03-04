import type { Meta, StoryObj } from '@storybook/react';
import DefaultLayout from '../widgets/default/DefaultLayout';
import { BrowserRouter } from 'react-router';

const meta = {
  title: 'DefaultLayout',
  component: DefaultLayout,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {},
  args: {},
} satisfies Meta<typeof DefaultLayout>;

export default meta;

export const example: StoryObj<typeof meta> = {};
