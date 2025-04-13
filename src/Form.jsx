import React from "react";

function Form() {
  return (
    <form
      action=""
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <fieldset>
        <legend>Add Expenses Here</legend>
        <h3>Add Expense</h3>
        <p>Enter your expense details below</p>
        <p>
          <label htmlFor=""></label>
          <input type="text" id="" placeholder="Expense title" autoFocus/>
        </p>
        <p>
          <label htmlFor=""></label>
          <input type="text" id="" placeholder="Enter expense description" autoFocus/>
        </p>
        <p>
          <label htmlFor=""></label>
          <input type="text" id="" placeholder="enter expense category" autoFocus/>
        </p>
        <p>
          <label htmlFor=""></label>
          <input type="text" id="" placeholder="Enter amount" autoFocus/>
        </p>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}

export default Form;
