import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Home from "./screens/Home/Home";

const App = () => {
  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
};

export default App;
