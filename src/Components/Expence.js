import React, { useContext, useState } from "react";
import "./Expence.css";
import { GlobalContext } from "./Global/ContextApi";

function Expence() {
  const [expenceName,setExpenceName] = useState('');
  const [expenceAmount,setExpenceAmount] = useState("");
  const { getExpences } = useContext(GlobalContext);
  

  return (
    <div>
      <div className="budget-card">
        <h2>Add Your Expences</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getExpences(expenceName,+expenceAmount);
          }}
        >
          <input
            id="input2"
            type="text"
            placeholder="Enter Your Expence"
            onChange={(event) => {
               setExpenceName(event.target.value);
            }}
            value={expenceName}
            required
          />
          <input
            id="input3"
            className="amount"
            type="number"
            placeholder="Enter Your Expence Amount"
            required
            onChange={(e) => {
              setExpenceAmount(e.target.value);
              console.log(expenceName);
            }}
            value={expenceAmount}
          />
          <button type="submit">Add Expences</button>
        </form>
      </div>
    </div>
  );
}

export default Expence;
