import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Pages Components
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
      </Switch>
    </Router>
  );
}

export default App;
