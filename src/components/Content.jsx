import React from "react";
import Form from "./Form";
import Search from "./Search";
import Table from "./Table";
import { useState } from "react";

const Content = () => {
  const [expenseData, setExpenseData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Receive new expense from Form component
  const handleAddExpense = (newExpense) => {
    setExpenseData((prev) => [...prev, newExpense]);
  };
  // Filter expenses based on search term
  const filteredExpenses = expenseData.filter((expense) => {
    const searchString = searchTerm.toLowerCase();
    return (
      expense.expense.toLowerCase().includes(searchString) ||
      expense.description.toLowerCase().includes(searchString) ||
      expense.category.toLowerCase().includes(searchString) ||
      expense.amount.toString().includes(searchString) ||
      expense.date.includes(searchString)
    );
  });

  return (
    <main className="flex w-full h-[400px]">
      <div className="w-[30%]">
        <Form onAddExpense={handleAddExpense} />
      </div>
      <div className="w-[70%]">
        <Search onSearch={setSearchTerm} />
        <Table expensez={expenseData} />
      </div>
    </main>
  );
};

export default Content;
