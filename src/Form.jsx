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
        <p>
          <label htmlFor=""></label>
          <input type="text" id="" placeholder="" autoFocus/>
        </p>
        <p>
          <label htmlFor=""></label>
          <input type="text" id="" placeholder="" autoFocus/>
        </p>
        <p>
          <label htmlFor=""></label>
          <input type="text" id="" placeholder="" autoFocus/>
        </p>
        <p>
          <label htmlFor=""></label>
          <select name="" id=""></select>
          <optgroup>
             <option value=""></option>
             <option value=""></option>
          </optgroup>
        </p>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}

export default Form;
