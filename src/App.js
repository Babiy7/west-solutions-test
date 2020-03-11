import React from "react";
import "./App.module.scss";

import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Home from "./components/Sections/Home/Home";
import Auth from "./containers/Auth/Auth";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Auth} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
