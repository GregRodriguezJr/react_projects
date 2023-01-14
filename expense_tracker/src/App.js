import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

function App() {
  const expenses = [
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
      date: new Date(2023, 1, 1) 
    },
  ];

  return (
    <>
      <NewExpense />
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
