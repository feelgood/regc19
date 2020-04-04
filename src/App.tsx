import React, { FunctionComponent } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "./components/common/Navbar/Navbar";
import FrontPageScreen from "./screens/FrontPageScreen";
import FormScreen from "./screens/FormScreen";

const App: FunctionComponent = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/form" component={FormScreen} />
          <Route path="/" component={FrontPageScreen} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
