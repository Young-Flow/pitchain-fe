import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Clickable } from '../components/Clickable/Clickable';

const meta = {
  title: 'Button',
  component: Clickable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: { type: 'select' },
      options: ['square', 'round', 'underline', 'text'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      if: { arg: 'shape', eq: 'round' }, // shape가 "round"일 때만 표시
    },
    padding: {
      control: { type: 'boolean' },
      if: { arg: 'shape', eq: 'round' }, // shape가 "round"일 때만 표시
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'google', 'naver', 'kakao'],
      if: { arg: 'shape', eq: 'square' }, // shape가 "square"일 때만 표시
    },
    selected: {
      control: { type: 'boolean' },
      if: { arg: 'shape', eq: 'underline' }, // shape가 "underline"일 때만 표시
    },
  },
  args: {
    shape: 'square', // 기본값
    color: 'primary', // 기본값
    onClick: fn(() => console.log('Clicked')),
  },
} satisfies Meta<typeof Clickable>;

export default meta;

export const Square: StoryObj<typeof meta> = {
  args: {
    shape: 'square',
    color: 'primary',
    children: 'Hello, world!',
  },
};

export const Round: StoryObj<typeof meta> = {
  args: {
    shape: 'round',
    size: 'large',
    children: 'Hello, world!',
  },
};

export const Underline: StoryObj<typeof meta> = {
  args: {
    shape: 'underline',
    selected: true, // 기본값 false
    children: 'Hello, world!',
  },
  argTypes: {
    selected: { control: 'boolean' }, // Storybook UI에서 boolean toggle 가능
  },
};

export const text: StoryObj<typeof meta> = {
  args: {
    shape: 'text',
    children: 'Hello, world!',
  },
};
