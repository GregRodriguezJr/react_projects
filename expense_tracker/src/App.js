import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {id: "e1", title: "Car Insurance", amount: 300, date: new Date(2023, 1, 12)},
    {id: "e2", title: "Health Insurance", amount: 400, date: new Date(2023, 1, 20)},
    {id: "e3", title: "Mortgage", amount: 1400, date: new Date(2023, 1, 1)},
  ]

  return (
   <>
    <ExpenseItem
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}
    />
    <ExpenseItem
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}
    />
    <ExpenseItem
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}
    />
   </>
  );
}

export default App;
