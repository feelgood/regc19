import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Navbar } from "./components/common/Navbar/Navbar";
import FrontPageScreen from "./screens/FrontPageScreen";

const App: FunctionComponent = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" component={FrontPageScreen} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
