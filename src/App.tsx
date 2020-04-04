import React, { FunctionComponent } from "react";

import { Navbar } from "./components/common/Navbar/Navbar";

const App: FunctionComponent = () => {
  return (
    <div
      style={{
        backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
    </div>
  );
};

export default App;
