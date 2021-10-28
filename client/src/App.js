import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Pages Components
import Landing from "./pages/Landing";
import Template from "./pages/Template";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route path="/template" component={Template}></Route>
      </Switch>
    </Router>
  );
}

export default App;
