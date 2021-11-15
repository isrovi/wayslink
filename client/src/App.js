import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { UserContext } from "./context/userContext";

// Pages Components
import Landing from "./pages/Landing";
import Template from "./pages/Template";
import AddLink from "./pages/AddLink";
import PreviewLink from "./pages/PreviewLink";
import MyLink from "./pages/MyLink";
import MyAccount from "./pages/MyAccount";

import { API, setAuthToken } from "./config/api";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  let history = useHistory();
  const [state, dispatch] = useContext(UserContext);
  console.clear();
  console.log(state);
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    if (state.isLogin === false) {
      history.push("/");
    } else {
      history.push("/template");
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      let payload = response.data.data.user;
      payload.token = localStorage.token;

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route path="/template" component={Template}></Route>
        <Route path="/add-link" component={AddLink}></Route>
        <Route path="/preview-link" component={PreviewLink}></Route>
        <Route path="/my-link" component={MyLink}></Route>
        <Route path="/my-account" component={MyAccount}></Route>
      </Switch>
    </Router>
  );
}

export default App;
