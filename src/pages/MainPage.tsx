import Carousel from '@components/Carousel';

const DUMMY = [
  {
    title: '나야 거위',
  },
  {
    title: '나야 오리',
  },
  {
    title: '나야 머위',
  },
];

export default function MainPage() {
  return (
    <Carousel className="h-20">
      <Carousel.LeftButton className="bg-black" />
      {DUMMY.map(({ title }) => (
        <Carousel.Slide>{title}</Carousel.Slide>
      ))}
      <Carousel.RightButton />
    </Carousel>
  );
}
