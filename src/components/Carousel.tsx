import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from 'react-slick';

export default function Carousel({ ...props }: Settings) {
  return <Slider {...props} />;
}
