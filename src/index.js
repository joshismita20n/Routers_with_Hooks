import React from "react";
import ReactDOM from "react-dom";
import About from "./About";

import {
  BrowserRouter,
  Route,
  Switch,
  useLocation,
  useHistory
} from "react-router-dom";

import App from "./App";

const Header = () => {
  const location = useLocation();
  const history = useHistory();

  const handleBackCick = () => {
    history.goBack();
  };

  // If "/about" show button.
  console.log(location);
  const atAboutPage = location.pathname.includes("/about");
  return atAboutPage && <button onClick={handleBackCick}>Back</button>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about/:name" component={About} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
