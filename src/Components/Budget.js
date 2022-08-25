import React, { useState } from "react";
import "./Budget.css";
import { useContext } from "react";
import { GlobalContext } from "./Global/ContextApi";

function Budget() {
  const { getBudget } = useContext(GlobalContext);
  const [budgetValue, setBudgetValue] = useState('');

  return (
    <div>
      <div className="budget-card">
        <h2>Add Your Budget</h2>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();        
            getBudget(+budgetValue);
            
          }}
        >
          <input
            type="number"
            placeholder="Enter Your Budget"
            className="input1"
            required
            onChange={(e) => setBudgetValue(e.target.value)}
          />
          <button type="submit">Add Budget</button>
        </form>
      </div>
    </div>
  );
}

export default Budget;
