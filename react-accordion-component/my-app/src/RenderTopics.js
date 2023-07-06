import { useState } from 'react';

export default function RenderTopics(props) {
  const [selected, setSelected] = useState(null);

  const listTopics = props.topics.map((element) => {
    return (
      <div className="topics-wrapper" key={element.title}>
        <div
          className="title"
          onClick={() => {
            if (selected === element) {
              return setSelected(null);
            }
            setSelected(element);
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
