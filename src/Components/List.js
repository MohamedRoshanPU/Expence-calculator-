import React, { useContext } from "react";
import "./List.css";
import { GlobalContext } from "./Global/ContextApi";

function List() {
 
  
  const { expenceNames, expenceAmounts } = useContext(GlobalContext);
  return (
    <div>
      <div className="list-container">
        <div className="lists-wrapper">
          <div className="list-1">
            <ul>
              <p className="heading">Your Expences</p>
              {expenceNames.length==0?"No Expences so far" : expenceNames.map((item,index) => {
                return <li className="val" key={index}>{item}</li>;
              })}
            </ul>
          </div>
          <div className="list-2">
            <ul>
              <p className="heading">Total Amount</p>
              {expenceAmounts.map((item,index) => {
                return <li className="val" key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
