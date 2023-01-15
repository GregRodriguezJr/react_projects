import { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
const dummyExpenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 300,
    date: new Date(2023, 1, 12),
  },
  {
    id: "e2",
    title: "Health Insurance",
    amount: 400,
    date: new Date(2023, 1, 20),
  },
  {
    id: "e3",
    title: "Mortgage",
    amount: 1400,
    date: new Date(2023, 1, 1),
  },
];

function App() {

  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=> {
      return [expense, ...prevExpenses];
    })
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
