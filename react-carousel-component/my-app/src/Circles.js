import { BsCircle } from 'react-icons/bs';
import { BsCircleFill } from 'react-icons/bs';

export default function Circles({ images, counter, setCounter }) {
  const icons = images.map((element, index) => {
    return (
      <BsCircle
        key={element}
        className="circles"
        onClick={() => setCounter(index)}
      />
    );
  });
  icons.splice(
    counter,
    1,
    <BsCircleFill key={images[counter]} className="circles" />
  );

  return <>{icons}</>;
}
