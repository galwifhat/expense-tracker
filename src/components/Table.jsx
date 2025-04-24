import { tr } from "date-fns/locale";
import React from "react";

const table = ({ expensez }) => {
  console.log(expensez);
  return (
    <div className="w-full border">
      <table className="h-47 w-full bg-slate-100 border">
        <caption className="text-lg font-bold p-2 border bg-stone-100">
          My Expenses
        </caption>
        <thead className="bg-amber-50">
          <tr>
            {/* <th>&nbsp;</th>  */}
            <th scope="col">Expense</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {expensez.map((expense, index) => (
            <tr key={index} className="border-1 h-10 ">
              <td className="px-4 py-2">{expense.expense}</td>
              <td className="px-4 py-2">{expense.description}</td>
              <td className="px-4 py-2">{expense.category}</td>
              <td className="px-4 py-2">{expense.amount}</td>
              <td className="px-4 py-2">{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default table;
