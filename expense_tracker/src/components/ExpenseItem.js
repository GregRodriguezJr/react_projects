import React from "react";
import './ExpenseItem.css';

const ExpenseItem = () => {
    const expenseDate = new Date(2023, 1, 12);
    const expenseTitle = "Car Insurance";
    const expenseAmount = 300;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item_description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;