import React, { useEffect, useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const [pickedDate, setPickedDate] = useState("2021");

  const pickedDateHandler = (event) => {
    setPickedDate(event.target.value);
  };

  const savePickedDate = (pickedDate) => {
    console.log(pickedDate);
    const filteredItems = props.items.filter((expense) => {
      return String(expense.date).slice(11, 15) === pickedDate;
    });
    props.onSetFilteredExpenses(filteredItems);
  };
  /**3. We then call that same function now within the child component through props.
   * With this function call, we've successfully lifted the state up to the parent component. */
  useEffect(() => {
    savePickedDate(pickedDate);
  }, [pickedDate]);

  /**1. Listen to changes to the dropdown:
   * I've defined a state to capture the changes.
   * Then called the onChange listener within the
   * <select> element, with the state capture function as a paramenter
   * (pickedDateHandler). Check Expenses.js for step 2.
   */

  //TODO -> Make this filter work, by displaying the items relative to the year selected. Hints: 1.You can filter arrays with the filter method. 2. You shouldn't think too complicated. You shouldn't change the overall expenses array, you want to derive a new array based on the full expenses array, which is a subset of that array for the chosen filter. So what now? Closely examine this component, then figure out how to properly retrieve the data from Date(). Maybe converting it to a string and slicing the year characters would do the work, we'll see.

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={pickedDate} onChange={pickedDateHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
