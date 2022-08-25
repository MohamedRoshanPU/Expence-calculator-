import React, { useContext } from "react";
import "./Cards.css";
import { GlobalContext } from "./Global/ContextApi";

function Cards() {
  const { budget, totalExpence, balance} = useContext(GlobalContext);
  return (
    <div>
      <div className="cards-container">
        <div className="card-wrapper">
          <div className="card-1">
            <h3>Your Budget</h3>
            <p className="values">₹ {budget}</p>
          </div>
          <div className="card-2">
            <h3>Total Expences</h3>
            <p className="values">₹ {totalExpence}</p>
          </div>
          <div className="card-3">
            <h3>Total Balance</h3>
            <p className="values">₹ {balance}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
