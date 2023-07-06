import { useState } from 'react';

export default function RenderTopics({ topics }) {
  const [selected, setSelected] = useState(undefined);

  const listTopics = topics.map((element) => {
    return (
      <div className="topics-wrapper" key={element.title}>
        <div
          className="title"
          onClick={() => {
            if (selected === element) {
              setSelected(undefined);
            } else {
              setSelected(element);
            }
          }}>
          {element.title}
        </div>
        <div className={selected === element ? 'content' : 'hide'}>
          {element.content}
        </div>
      </div>
    );
  });

  return <>{listTopics}</>;
}
