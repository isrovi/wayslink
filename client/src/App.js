import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Pages Components
import Landing from "./pages/Landing";
import Template from "./pages/Template";
import AddLink from "./pages/AddLink";
import PreviewLink from "./pages/PreviewLink";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route path="/template" component={Template}></Route>
        <Route path="/add-link" component={AddLink}></Route>
        <Route path="/preview-link" component={PreviewLink}></Route>
      </Switch>
    </Router>
  );
}

export default App;
