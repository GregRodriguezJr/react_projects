import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [inputForm, setInputForm] = useState({
    inputTitle: "",
    inputAmount: "",
    inputDate: "",
  });

  const titleChangeHandler = (e) => {
    setInputForm((prevState) => {
      return { ...prevState, inputTitle: e.target.value };
    });
  };

  const amountChangeHandler = (e) => {
    setInputForm((prevState) => {
      return { ...prevState, inputAmount: e.target.value };
    });
  };

  const dateChangeHandler = (e) => {
    setInputForm((prevState) => {
      return { ...prevState, inputDate: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: inputForm.inputTitle,
      amount: inputForm.inputAmount,
      date: new Date(inputForm.inputDate),
    };
    // passes data from child to parent(NewExpense) component with a function and parameter
    props.onSaveExpenseDate(expenseData);
    setInputForm({
      inputTitle: "",
      inputAmount: "",
      inputDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={inputForm.inputTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={inputForm.inputAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={inputForm.inputDate}
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
