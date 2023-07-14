import { useState, useEffect } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import Circles from './Circles';

export default function Carousel({ images }) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const timerId = setInterval(() => {
      setCounter((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timerId);
  }, [images.length]);

  const handleClick = (newCounter) => setCounter(newCounter);

  return (
    <>
      <div className="row">
        <div className="one-third">
          <BsChevronLeft
            className="button"
            onClick={() => {
              if (counter === 0) {
                setCounter(images.length - 1);
              } else {
                setCounter(counter - 1);
              }
            }}
          />
        </div>
        <div className="one-third">
          <img src={images[counter]} alt="display" />
        </div>
        <div className="one-third">
          <BsChevronRight
            className="button"
            onClick={() => {
              if (counter === images.length - 1) {
                setCounter(0);
              } else {
                setCounter(counter + 1);
              }
            }}
          />
        </div>
      </div>
      <div className="row">
        <Circles images={images} counter={counter} setCounter={handleClick} />
      </div>
    </>
  );
}
