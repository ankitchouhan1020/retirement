import React from "react";
import Button from "common/Button";
import "./home.css";

const Home = () => {
  return (
    <section className="hm89container">
      <div className="hm89image-container">
        <img
          src={require("src/assets/undraw_personal_finance_tqcd.svg")}
          alt="Personal Finance Management"
        />
      </div>
      <div className="hm90title-group">
        <h1 className="hm90title">Financial Calculator Made Simple</h1>
        <h2 className="hm91subtitle">Open-Source Project</h2>
        <Button label="Get Started" path="/projects" />
      </div>
    </section>
  );
};

export default Home;
