import { BsCircle } from 'react-icons/bs';
import { BsCircleFill } from 'react-icons/bs';

export default function Circles({ images, counter }) {
  const icons = images.map((element) => {
    return <BsCircle key={element} />;
  });
  icons.splice(counter, 1, <BsCircleFill key={images[counter]} />);

  return <>{icons}</>;
}
