import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import RetireCal from "views/RetireCal";
import Home from "views/Home";
import NotFound from "views/NotFound";
import Projects from "views/Projects";

const Router = () => {
  return (
    <Switch>
      <Route path="/retire-cal" component={RetireCal} />
      <Route path="/not-found" component={NotFound} />
      <Route path="/projects" component={Projects} />
      <Route path="/" component={Home} exact />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Router;
