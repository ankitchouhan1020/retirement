import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import RetireCal from "views/RetireCal";
import Home from "views/Home";
import NotFound from "views/NotFound";

const Router = () => {
  return (
    <Switch>
      <Route path="/retire-cal" component={RetireCal} />
      <Route path="/not-found" component={NotFound} />
      <Route path="/" component={Home} exect />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Router;
