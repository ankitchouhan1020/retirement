import React, { Fragment } from "react";
import Router from "./routes";
import NavBar from "common/NavBar";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Router />
    </Fragment>
  );
};

export default App;
