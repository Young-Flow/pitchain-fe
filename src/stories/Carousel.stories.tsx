import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Carousel from '@components/Carousel';

const meta = {
  title: 'Carousel',
  component: Carousel,
  decorators: (Story) => (
    <div className="w-640">
      <Story />
    </div>
  ),
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof Carousel>;

export const carousel: Story = {
  render: () => (
    <Carousel>
      {new Array(6).fill(0).map((_, index) => (
        <Carousel.Slide>
          <DefaultSlide idx={index} />
        </Carousel.Slide>
      ))}
    </Carousel>
  ),
};

function DefaultSlide({ idx, ...props }: ComponentProps<'div'> & { idx: number }) {
  return (
    <div className="flex h-100 w-200 items-center justify-center bg-blue-200">
      <div className="h-80 w-80 bg-gray-200" {...props}>
        슬라이드 {idx}
      </div>
    </div>
  );
}
