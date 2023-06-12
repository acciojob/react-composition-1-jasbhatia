import React, { useState } from "react";

const Tabs = (props) => {
  const { arr } = props;
  const [state, setState] = useState(arr[0].content);

  return (
    <>
      <ul>
        {arr.map((item) => {
          return (
            <li
              onClick={() => {
                setState(item.content);
              }}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
      <p>{state}</p>
    </>
  );
};

export default Tabs;
