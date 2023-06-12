import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  let arr = [
    { title: "Tab1", contents: "This is tab1 content" },
    { title: "Tab2", contents: "This is tab2 content" },
    { title: "Tab3", contents: "This is tab3 content" },
  ];

  return (
    <div>
      <Tabs array={arr} />
    </div>
  );
};

export default App;
