import { createContext, useState } from "react";

export const GlobalContext = createContext();

const ContextApi = ({ children }) => {
  const [budget, setBudget] = useState(0);
  const [expenceNames, setExpenceNames] = useState([]);
  const [expenceAmounts, setExpenceAmounts] = useState([]);
  const [totalExpence, setTotalExpence] = useState(0);
  const [balance, setBalance] = useState(0);

  const getBudget = (budget) => {
    setBudget(budget);
    setBalance(budget - balance);
  };

  const getExpences = (name, amount) => {
    if (budget === 0 || budget < 0) {
      alert("Please enter your budget");
    } else {
      expenceNames.push(name);
      expenceAmounts.push(amount);
      console.log(name, amount);
      console.log(expenceNames);
      console.log(expenceAmounts);

      // set totalexpence
      let total = expenceAmounts.reduce((acc, value) => {
        console.log(acc, value);
        return acc + value;
      }, 0);
      setTotalExpence(total);
      // set balance
      setBalance(balance - amount);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        budget,
        getBudget,
        getExpences,
        totalExpence,
        balance,
        expenceNames,
        expenceAmounts,
        setTotalExpence,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextApi;
