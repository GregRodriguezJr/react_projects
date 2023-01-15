import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [inputForm, setInputForm] = useState({
        inputTitle:'',
        inputAmount:'',
        inputDate:''
    });

    const titleChangeHandler = (e) => {
        e.preventDefault();
        setInputForm((prevState)=> {
        return {...prevState, inputTitle: e.target.value};
        });
    }

    const amountChangeHandler = (e) => {
        e.preventDefault();
        setInputForm((prevState) => {
            return {...prevState, inputAmount: e.target.value};
        })
    }

    const dateChangeHandler = (e) => {
        e.preventDefault();
        setInputForm((prevState) => {
            return {...prevState, inputDate: e.target.value};
        })
    }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2023-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
