import React from "react";
import "./Home.css";
import Budget from "./Budget";
import Header from "./Header";
import Expence from "./Expence";
import Cards from "./Cards";
import List from "./List";

function Home() {
  return (
    <div className="Home">
      <div className="container">
        <Header />
        <div className="wrapper">
          <div className="inputs">
            <Budget />
            <Expence />
          </div>
          <div className="results">
            <Cards />
            <List />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
