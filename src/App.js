import React from "react";
import "./App.module.scss";

import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Home from "./components/Sections/Home/Home";
import Auth from "./containers/Auth/Auth";
import News from "./containers/News/News";
import Profile from "./containers/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Auth} />
          <Route path="/news" component={News} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
