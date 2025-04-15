import { React, useState } from "react";

function Form() {
  const [data, setData] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setData({
      tile: "",
    });
  }

  function handleChange(e) {
    const { id, value } = e.target;
    console.log(e.target);
    setData((prev) => ({ ...prev, [id]: value }));
  }

  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add Expenses Here</legend>
        <h2></h2>
        <p>Enter your expense details below</p>
        <label htmlFor=""></label>
        <input
          type="text"
          placeholder="Expense title"
          value={data.title}
          onChange={handleChange}
          autoFocus
        />
        <br />
        <label htmlFor=""></label>
        <input
          type="text"
          id=""
          placeholder="Enter expense description"
          onChange={handleChange}
          autoFocus
        />
        <br />
        <label htmlFor=""></label>
        <input
          type="text"
          id=""
          placeholder="Enter expense category"
          onChange={handleChange}
          autoFocus
        />
        <br />
        <label htmlFor=""></label>
        <input
          type="text"
          id=""
          placeholder="Enter amount"
          onChange={handleChange}
          autoFocus
        />

        <br />
        <label htmlFor="datemin"></label>
        <input type="date" id="datemin" onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}

export default Form;
