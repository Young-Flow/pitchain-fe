import type { Meta, StoryObj } from '@storybook/react';
import ShortPitchCard from '@components/ShortPitchCard';

const meta = {
  title: 'ShortPitchCard',
  component: ShortPitchCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ShortPitchCard>;

export default meta;
type Story = StoryObj<typeof ShortPitchCard>;

export const Medium: Story = {
  render: () => (
    <ShortPitchCard size="large">
      <ShortPitchCard.Thumbnail src="https://picsum.photos/200/300" size="large" />
      <ShortPitchCard.Description size="large">
        <ShortPitchCard.Logo src="https://picsum.photos/40" />
        <ShortPitchCard.MetaData>
          <ShortPitchCard.Title size="large">엄청 멋진 제목</ShortPitchCard.Title>
          <div className="flex justify-between">
            <ShortPitchCard.Label>피트체인 회사</ShortPitchCard.Label>
            <ShortPitchCard.Label>조회수 20만회</ShortPitchCard.Label>
          </div>
        </ShortPitchCard.MetaData>
      </ShortPitchCard.Description>
    </ShortPitchCard>
  ),
};

export const Small: Story = {
  render: () => (
    <ShortPitchCard size="medium">
      <ShortPitchCard.Thumbnail src="https://picsum.photos/200/300" size="medium" />
      <ShortPitchCard.Description size="medium">
        <ShortPitchCard.Logo src="https://picsum.photos/40" />
        <ShortPitchCard.MetaData>
          <ShortPitchCard.Title size="medium">
            엄청 멋진 제목이 두줄까지 갈 수 있어요. 이렇게 긴 제목도요. 엄청 멋진 제목이 두줄까지 갈 수 있어요. 이렇게
            긴 제목도요
          </ShortPitchCard.Title>
        </ShortPitchCard.MetaData>
      </ShortPitchCard.Description>
    </ShortPitchCard>
  ),
};

export const Mini: Story = {
  render: () => (
    <ShortPitchCard size="small">
      <ShortPitchCard.Thumbnail src="https://picsum.photos/200/300" size="small" />
      <ShortPitchCard.Description size="small">
        <ShortPitchCard.MetaData>
          <ShortPitchCard.Title size="small">
            엄청 멋진 제목엄청 멋진 제목엄청 멋진 제목엄청 멋진 제목엄청 멋진 제목엄청 멋진 제목엄청 멋진 제목
          </ShortPitchCard.Title>
          <ShortPitchCard.Label>피트체인 회사</ShortPitchCard.Label>
          <ShortPitchCard.Label>조회수 20만회</ShortPitchCard.Label>
        </ShortPitchCard.MetaData>
      </ShortPitchCard.Description>
    </ShortPitchCard>
  ),
};
