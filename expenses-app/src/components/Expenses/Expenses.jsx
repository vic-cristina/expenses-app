import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  /**2. In order to forward that data (pickedDate) to the parent Element,
   *  we define props within the Child Component invokation in Expenses.js,
   *  putting a function (savePickedDate) pointer as a parameter.
   * The goal of this function is to receive data from the child component.
   *  How do we do that? */
  let expensesContent = <p className="simple-text">No expenses found</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <Card className="expenses">
      {" "}
      <ExpensesFilter
        items={props.items}
        onSetFilteredExpenses={setFilteredExpenses}
      />
      {/* Dynamically getting the array from the object
        While rendering the items conditionally based on the length of the filtered array. it's  possible to attribute JSX code as variable values, then render it dynamically based on the length of the filtered array.  is rendered dinamically.  */}
      {expensesContent}
      {/*  Hardcode

      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
  );
};

export default Expenses;
