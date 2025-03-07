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

export const Vertical: Story = {
  render: () => (
    <ShortPitchCard layoutDirection="vertical">
      <ShortPitchCard.Container className="w-310">
        <ShortPitchCard.Thumbnail src="https://picsum.photos/300/200" />
        <ShortPitchCard.Description>
          <ShortPitchCard.Logo src="https://picsum.photos/40" />
          <ShortPitchCard.MetaData>
            <ShortPitchCard.Title>엄청 멋진 제목</ShortPitchCard.Title>
            <div className="flex justify-between">
              <ShortPitchCard.MetaDataLine>피트체인 회사</ShortPitchCard.MetaDataLine>
              <ShortPitchCard.MetaDataLine>조회수 20만회</ShortPitchCard.MetaDataLine>
            </div>
          </ShortPitchCard.MetaData>
        </ShortPitchCard.Description>
      </ShortPitchCard.Container>
    </ShortPitchCard>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <div className="w-658">
      <ShortPitchCard layoutDirection="horizontal">
        <ShortPitchCard.Container className="h-98">
          <ShortPitchCard.Thumbnail src="https://picsum.photos/300/200" />
          <ShortPitchCard.Description>
            <ShortPitchCard.MetaData>
              <ShortPitchCard.Title className="line-clamp-2">
                엄청 멋진 제목엄청 멋진 제목엄청 멋진 제목엄청 멋진 제목엄청 멋진 제목엄청 멋진 제목엄청 멋진 제목
              </ShortPitchCard.Title>
              <ShortPitchCard.MetaDataLine>피트체인 회사</ShortPitchCard.MetaDataLine>
              <ShortPitchCard.MetaDataLine>조회수 20만회</ShortPitchCard.MetaDataLine>
            </ShortPitchCard.MetaData>
          </ShortPitchCard.Description>
        </ShortPitchCard.Container>
      </ShortPitchCard>
    </div>
  ),
};
