import React from "react";
import Button from "common/Button";
import "./home.css";

const Home = (props) => {
  return (
    <section className="hm635container">
      <div className="hm635image-container">
        <img
          src={require("./images/undraw_personal_finance_tqcd.svg")}
          alt="Personal Finance Management"
        />
      </div>
      <div className="hm635title-group">
        <h1 className="hm635title">Financial Calculator Made Simple</h1>
        <h2 className="hm635subtitle">Open-Source Project</h2>
        <Button
          label="Get Started"
          onClick={() => props.history.push("/projects")}
        />
      </div>
    </section>
  );
};

export default Home;
