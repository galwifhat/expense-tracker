import React from "react";
import { useState } from "react";

const initialValues = {
  expense: "",
  description: "",
  category: "",
  amount: "",
  date: "",
};

const Form = ({ onAddExpense }) => {
  const [expenseData, setExpenseData] = useState(initialValues);

  //on submit
  //create a new table row with expense, description, category, amount date
  // data is coiming from the input of the form

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(expenseData); //send to parent
    setExpenseData(initialValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData((prevFormInput) => {
      return { ...prevFormInput, [name]: value };
    });
  };
  return (
    <form
      action=""
      className="h-18 w-full px-4 bg-white"
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl font-bold ">Expenses</h3>
      <p className="text-[16px]">Enter your expense details below</p>
      <div>
        <input
          id=""
          name="expense"
          type="text"
          placeholder="Expense title"
          className="p-2 bg-stone-100 w-full rounded-lg outline-0"
          onChange={handleChange}
          value={expenseData.expense}
        />
      </div>
      <div>
        <input
          id=""
          name="description"
          type="text"
          placeholder="Enter expense description"
          className="p-2 bg-white w-full rounded-lg outline-0"
          onChange={handleChange}
          value={expenseData.description}
        />
      </div>
      <div>
        <input
          id=""
          name="category"
          type="text"
          placeholder="Enter expense category"
          className="p-2 bg-stone-100 w-full rounded-lg outline-0"
          onChange={handleChange}
          value={expenseData.category}
        />
      </div>
      <div>
        <input
          id=""
          name="amount"
          type="number"
          placeholder="Enter amount"
          className="p-2 bg-white w-full rounded-lg outline-0"
          onChange={handleChange}
          value={expenseData.amount}
        />
      </div>
      <div>
        <input
          id=""
          name="date"
          type="date"
          className="p-2 bg-stone-100 w-full rounded-lg outline-0"
          onChange={handleChange}
          value={expenseData.date}
        />
      </div>
      <button className="w-full p-2 bg-green-600 rounded-lg">
        Add a new expense
      </button>
    </form>
  );
};

export default Form;
