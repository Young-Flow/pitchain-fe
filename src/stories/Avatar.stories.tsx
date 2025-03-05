import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '@components/Avatar';
import { BrowserRouter } from 'react-router';

const meta = {
  title: 'Avatar',
  component: Avatar,
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
    size: 'small',
    src: 'https://picsum.photos/200/300',
  },
} satisfies Meta<typeof Avatar>;

export default meta;

export const example: StoryObj<typeof meta> = {
  args: { size: 'medium' },
};
