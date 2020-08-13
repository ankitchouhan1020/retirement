import React from "react";
import "./notFound.css";

const NotFound = () => {
  return (
    <section>
      <div className="nf404container">
        <img
          className="nf404image"
          src={require("./images/undraw_page_not_found_su7k.svg")}
          alt="resource not found"
        />
      </div>
    </section>
  );
};

export default NotFound;
